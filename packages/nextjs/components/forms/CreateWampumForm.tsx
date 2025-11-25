"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { type TransactionReceipt, decodeEventLog, isAddress } from "viem";
import { z } from "zod";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { BeadCustomizer, RecipientInput } from "~~/components/forms";
import { CeremonyButton, WampumBeadDisplay } from "~~/components/wampum";
import { useDeployedContractInfo, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface CreateWampumFormProps {
  onSuccess?: (tokenId: number) => void;
  className?: string;
}

// Zod validation schema
const createWampumSchema = z
  .object({
    story: z
      .string()
      .min(10, "Story must be at least 10 characters")
      .max(2000, "Story must be no more than 2000 characters"),
    maxSupply: z.number().min(1, "Max supply must be at least 1").max(100, "Max supply cannot exceed 100"),
    initialRecipients: z
      .array(
        z.object({
          address: z.string().refine(val => !val || isAddress(val), "Invalid Ethereum address"),
        }),
      )
      .refine(recipients => {
        const validRecipients = recipients.filter(r => r.address && isAddress(r.address));
        return validRecipients.length <= 100; // Max supply constraint
      }, "Too many recipients"),
    visualSymbol: z.string().optional(),
    mediaUri: z
      .string()
      .optional()
      .refine(val => !val || val === "" || z.string().url().safeParse(val).success, "Media URI must be a valid URL"),
    canPropagate: z.boolean(),
    transferable: z.boolean(),
  })
  .refine(
    data => {
      const validRecipients = data.initialRecipients.filter(r => r.address && isAddress(r.address));
      return validRecipients.length <= data.maxSupply;
    },
    {
      message: "Number of recipients cannot exceed max supply",
      path: ["initialRecipients"],
    },
  );

type CreateWampumFormData = z.infer<typeof createWampumSchema>;

/**
 * CreateWampumForm - Ceremonial form for creating new Wampum
 *
 * A warm, inviting form that guides users through creating a Wampum bead
 * with a story of gratitude. The form has multiple sections with clear
 * visual hierarchy and ceremonial feeling.
 *
 * Features:
 * - Story input with character count
 * - Bead customization with live preview
 * - Recipient management
 * - Collapsible ceremony settings
 * - Real-time validation
 * - Contract integration
 * - Success celebration
 */
export const CreateWampumForm: React.FC<CreateWampumFormProps> = ({ onSuccess, className = "" }) => {
  const router = useRouter();
  const [showCeremonySettings, setShowCeremonySettings] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<CreateWampumFormData>({
    resolver: zodResolver(createWampumSchema),
    defaultValues: {
      story: "",
      maxSupply: 10,
      initialRecipients: [],
      visualSymbol: "#5B4B8A", // Default Wampum color
      mediaUri: "",
      canPropagate: true,
      transferable: false,
    },
    mode: "onChange", // Real-time validation
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = methods;

  const { writeContractAsync, isMining } = useScaffoldWriteContract({
    contractName: "Kudos",
  });

  const { data: deployedContractData } = useDeployedContractInfo({
    contractName: "Kudos",
  });

  // Watch form values for preview and validation
  const story = watch("story");
  const visualSymbol = watch("visualSymbol");
  const maxSupply = watch("maxSupply");
  const initialRecipients = watch("initialRecipients");
  const canPropagate = watch("canPropagate");
  const mediaUri = watch("mediaUri");

  // Calculate character count
  const storyLength = story?.length || 0;
  const minChars = 10;
  const maxChars = 2000;
  const isValidLength = storyLength >= minChars && storyLength <= maxChars;

  // Count valid recipients
  const validRecipients = initialRecipients?.filter(r => r.address && isAddress(r.address)) || [];
  const recipientCount = validRecipients.length;

  // Handle form submission
  const onSubmit = async (data: CreateWampumFormData) => {
    if (!writeContractAsync) {
      console.error("Contract write function not available");
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare recipients array (filter out empty addresses and validate)
      const recipients = data.initialRecipients
        .map(r => r.address)
        .filter((addr): addr is `0x${string}` => {
          return addr !== undefined && addr !== "" && isAddress(addr);
        }) as `0x${string}`[];

      // Call createKudos function using Scaffold-ETH writeContractAsync
      // onBlockConfirmation is passed as the second parameter (options)
      await writeContractAsync(
        {
          functionName: "createKudos",
          args: [
            data.story,
            BigInt(data.maxSupply),
            recipients,
            data.visualSymbol || "",
            data.mediaUri || "",
            data.canPropagate,
            data.transferable,
          ],
        },
        {
          onBlockConfirmation: (txnReceipt: TransactionReceipt) => {
            // Extract tokenId from the KudosCreated event using viem's decodeEventLog
            if (!deployedContractData?.abi) {
              console.error("Contract ABI not available");
              router.push("/");
              return;
            }

            try {
              // Find and decode the KudosCreated event from transaction logs
              // Event signature: KudosCreated(uint256 indexed tokenId, address indexed creator, string story, uint256 maxSupply, uint256 timestamp)
              for (const log of txnReceipt.logs) {
                try {
                  const decodedEvent = decodeEventLog({
                    abi: deployedContractData.abi,
                    data: log.data,
                    topics: log.topics,
                  });

                  // Check if this is the KudosCreated event
                  if (decodedEvent.eventName === "KudosCreated" && decodedEvent.args) {
                    const tokenId = decodedEvent.args.tokenId;
                    const tokenIdNumber = typeof tokenId === "bigint" ? Number(tokenId) : tokenId;

                    // Call success callback if provided
                    if (onSuccess) {
                      onSuccess(tokenIdNumber);
                    }

                    // TODO: Implement detail page redirect after MVP
                    // Redirect to the Wampum detail page
                    // router.push(`/wampum/${tokenIdNumber}`);

                    // For now, redirect to home page after successful creation
                    router.push("/");
                    return;
                  }
                } catch {
                  // Not the event we're looking for, continue to next log
                  continue;
                }
              }

              // If we couldn't find the event, fallback to home
              console.warn("Could not find KudosCreated event in transaction receipt");
              router.push("/");
            } catch (error) {
              console.error("Error decoding transaction receipt:", error);
              router.push("/");
            }
          },
        },
      );

      // The onBlockConfirmation callback will handle the redirect after transaction confirmation
    } catch (error) {
      console.error("Error creating Wampum:", error);
      // Error handling and notifications are done by useScaffoldWriteContract
      setIsSubmitting(false);
    }
  };

  const isLoading = isMining || isSubmitting;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        <div className="space-y-12">
          {/* Section 1 - The Story */}
          <section className="bg-base-100 border border-base-300 rounded-2xl p-6 md:p-8">
            <div className="mb-6">
              <label htmlFor="story" className="block text-2xl font-bold mb-2 text-base-content">
                What story of gratitude do you want to share?
              </label>
              <p className="text-sm text-base-content/70">
                Share the narrative behind your gratitude. This story will be preserved on the blockchain and carried
                with your Wampum.
              </p>
            </div>

            <div className="relative">
              <textarea
                id="story"
                {...register("story")}
                placeholder="Share the story behind your gratitude..."
                rows={8}
                className="w-full px-4 py-3 rounded-lg border border-base-300 bg-base-100 text-base-content placeholder:text-base-content/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none transition-all"
              />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  {errors.story && <p className="text-sm text-error">{errors.story.message as string}</p>}
                  {!errors.story && storyLength > 0 && (
                    <p className={`text-sm ${isValidLength ? "text-base-content/60" : "text-warning"}`}>
                      {isValidLength
                        ? `${storyLength} characters - Your story is ready`
                        : storyLength < minChars
                          ? `Add ${minChars - storyLength} more characters`
                          : `Reduce by ${storyLength - maxChars} characters`}
                    </p>
                  )}
                </div>
                <div className="text-sm text-base-content/50 font-mono">
                  {storyLength} / {maxChars}
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 - The Bead */}
          <section className="bg-base-100 border border-base-300 rounded-2xl p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-base-content">Choose your bead&apos;s appearance</h2>
              <p className="text-sm text-base-content/70">
                Select a color that represents your gratitude. Each bead is unique, like your story.
              </p>
            </div>

            <Controller
              name="visualSymbol"
              control={control}
              render={({ field: { onChange, value } }) => <BeadCustomizer value={value} onChange={onChange} />}
            />

            {/* Live Preview */}
            <div className="mt-8 flex justify-center">
              <div className="text-center">
                <p className="text-sm font-medium mb-4 text-base-content">Live Preview</p>
                <WampumBeadDisplay tokenId={0} visualSymbol={visualSymbol || "#5B4B8A"} size={120} animated={false} />
              </div>
            </div>
          </section>

          {/* Section 3 - The Recipients */}
          <section className="bg-base-100 border border-base-300 rounded-2xl p-6 md:p-8">
            <RecipientInput name="initialRecipients" maxRecipients={maxSupply} />
            {errors.initialRecipients && (
              <p className="mt-4 text-sm text-error">{(errors.initialRecipients as { message?: string })?.message}</p>
            )}
          </section>

          {/* Section 4 - The Ceremony (Collapsible) */}
          <section className="bg-base-100 border border-base-300 rounded-2xl p-6 md:p-8">
            <button
              type="button"
              onClick={() => setShowCeremonySettings(!showCeremonySettings)}
              className="w-full flex items-center justify-between mb-4 text-left"
            >
              <div>
                <h2 className="text-2xl font-bold mb-1 text-base-content">How should this Wampum be shared?</h2>
                <p className="text-sm text-base-content/70">Configure propagation and sharing settings</p>
              </div>
              {showCeremonySettings ? (
                <ChevronUpIcon className="h-6 w-6 text-base-content/70" />
              ) : (
                <ChevronDownIcon className="h-6 w-6 text-base-content/70" />
              )}
            </button>

            {showCeremonySettings && (
              <div className="space-y-6 pt-4 border-t border-base-300">
                {/* Allow Propagation Toggle */}
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <label className="block text-lg font-semibold mb-2 text-base-content">Allow Propagation</label>
                    <p className="text-sm text-base-content/70 mb-3">
                      Allow others to share this Wampum with more people. When enabled, holders can propagate gratitude
                      to new recipients.
                    </p>
                    <Controller
                      name="canPropagate"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={e => onChange(e.target.checked)}
                          className="toggle toggle-primary"
                        />
                      )}
                    />
                  </div>
                </div>

                {/* Max Supply Slider */}
                <div>
                  <label htmlFor="maxSupply" className="block text-lg font-semibold mb-2 text-base-content">
                    Maximum number of copies
                  </label>
                  <p className="text-sm text-base-content/70 mb-3">
                    Set the maximum number of copies that can exist. You can create up to {maxSupply} copies.
                  </p>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      id="maxSupply"
                      min="1"
                      max="100"
                      {...register("maxSupply", { valueAsNumber: true })}
                      className="range range-primary flex-1"
                    />
                    <div className="w-16 text-center">
                      <span className="text-lg font-bold text-base-content">{maxSupply}</span>
                    </div>
                  </div>
                  {errors.maxSupply && <p className="mt-2 text-sm text-error">{errors.maxSupply.message as string}</p>}
                  {recipientCount > 0 && (
                    <p className="mt-2 text-sm text-base-content/60">
                      {recipientCount} recipient{recipientCount !== 1 ? "s" : ""} added
                    </p>
                  )}
                </div>

                {/* Media URI Input */}
                <div>
                  <label htmlFor="mediaUri" className="block text-lg font-semibold mb-2 text-base-content">
                    Media URI (optional)
                  </label>
                  <p className="text-sm text-base-content/70 mb-3">
                    Link to image, artwork, or ceremony photo (IPFS, HTTP, etc.)
                  </p>
                  <input
                    type="url"
                    id="mediaUri"
                    {...register("mediaUri")}
                    placeholder="https://... or ipfs://..."
                    className="w-full px-4 py-3 rounded-lg border border-base-300 bg-base-100 text-base-content placeholder:text-base-content/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                  {errors.mediaUri && <p className="mt-2 text-sm text-error">{errors.mediaUri.message as string}</p>}
                </div>

                {/* Transferable Toggle (Optional - can be hidden for MVP) */}
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <label className="block text-lg font-semibold mb-2 text-base-content">
                      Allow Traditional Transfers
                    </label>
                    <p className="text-sm text-base-content/70 mb-3">
                      Allow holders to transfer this Wampum using traditional ERC-1155 transfers (not just propagation).
                    </p>
                    <Controller
                      name="transferable"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={e => onChange(e.target.checked)}
                          className="toggle toggle-secondary"
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Section 5 - Review & Create */}
          <section className="bg-base-100 border border-base-300 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-base-content">Review & Create</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Preview */}
              <div className="flex flex-col items-center">
                <p className="text-sm font-medium mb-4 text-base-content">Your Wampum</p>
                <WampumBeadDisplay tokenId={0} visualSymbol={visualSymbol || "#5B4B8A"} size={160} animated={true} />
              </div>

              {/* Summary */}
              <div className="space-y-3">
                <p className="text-sm font-medium mb-4 text-base-content">Summary</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Story length:</span>
                    <span className="font-medium text-base-content">{storyLength} characters</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Recipients:</span>
                    <span className="font-medium text-base-content">{recipientCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Max supply:</span>
                    <span className="font-medium text-base-content">{maxSupply}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Can propagate:</span>
                    <span className="font-medium text-base-content">{canPropagate ? "Yes" : "No"}</span>
                  </div>
                  {mediaUri && (
                    <div className="flex justify-between">
                      <span className="text-base-content/70">Media:</span>
                      <span className="font-medium text-base-content text-xs truncate max-w-[200px]">{mediaUri}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <CeremonyButton
                type="submit"
                variant="primary"
                size="lg"
                loading={isLoading}
                disabled={!isValid || isLoading}
              >
                Create Wampum
              </CeremonyButton>
            </div>

            {!isValid && (
              <p className="mt-4 text-center text-sm text-warning">
                Please complete all required fields correctly to create your Wampum.
              </p>
            )}
          </section>
        </div>
      </form>
    </FormProvider>
  );
};
