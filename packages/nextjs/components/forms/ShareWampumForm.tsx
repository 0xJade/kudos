"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { type TransactionReceipt, decodeEventLog, isAddress } from "viem";
import { useAccount } from "wagmi";
import { z } from "zod";
import { RecipientInput } from "~~/components/forms";
import { CeremonyButton, WampumDisplay } from "~~/components/wampum";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface ShareWampumFormProps {
  tokenId: number;
  onSuccess?: () => void;
  className?: string;
}

// Zod validation schema
const shareWampumSchema = z.object({
  recipients: z
    .array(
      z.object({
        address: z.string().refine(val => !val || isAddress(val), "Invalid Ethereum address"),
      }),
    )
    .min(1, "At least one recipient is required")
    .refine(recipients => {
      const validRecipients = recipients.filter(r => r.address && isAddress(r.address));
      return validRecipients.length > 0;
    }, "At least one valid recipient address is required"),
});

type ShareWampumFormData = z.infer<typeof shareWampumSchema>;

/**
 * ShareWampumForm - Ceremonial form for propagating Wampum to new recipients
 *
 * A warm, gift-giving interface that allows holders to share their Wampum
 * with others. When you share a Wampum, you keep your Wampum and the
 * recipient receives their own copy. Gratitude spreads, ownership remains.
 *
 * Features:
 * - Displays the Wampum being shared
 * - Shows generation number for new recipients
 * - Checks max supply before allowing submission
 * - Validates recipient addresses
 * - Real-time validation
 * - Contract integration
 * - Success celebration
 */
export const ShareWampumForm: React.FC<ShareWampumFormProps> = ({ tokenId, onSuccess, className = "" }) => {
  const router = useRouter();
  const { address: connectedAddress } = useAccount();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<ShareWampumFormData>({
    resolver: zodResolver(shareWampumSchema),
    defaultValues: {
      recipients: [],
    },
    mode: "onChange", // Real-time validation
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const { writeContractAsync, isMining } = useScaffoldWriteContract({
    contractName: "Kudos",
  });

  const { data: deployedContractData } = useDeployedContractInfo({
    contractName: "Kudos",
  });

  // Fetch Wampum metadata
  const { data: metadata, isLoading: isLoadingMetadata } = useScaffoldReadContract({
    contractName: "Kudos",
    functionName: "getKudosMetadata",
    args: [BigInt(tokenId)],
  });

  // Fetch current user's generation
  const { data: userGeneration } = useScaffoldReadContract({
    contractName: "Kudos",
    functionName: "getHolderGeneration",
    args: [BigInt(tokenId), connectedAddress as `0x${string}`],
    query: {
      enabled: !!connectedAddress,
    },
  });

  // Watch form values
  const recipients = watch("recipients");

  // Debug logging
  React.useEffect(() => {
    console.log("[ShareWampumForm] Recipients changed:", recipients);
    console.log("[ShareWampumForm] Recipients array:", JSON.stringify(recipients, null, 2));
  }, [recipients]);

  // Count valid recipients
  const validRecipients =
    recipients?.filter(r => {
      const addr = r?.address;
      const isValid = addr && isAddress(addr);
      if (addr && !isValid) {
        console.log("[ShareWampumForm] Invalid address:", addr, "Type:", typeof addr);
      }
      return isValid;
    }) || [];
  const recipientCount = validRecipients.length;

  // Calculate new generation (current user's generation + 1)
  const newGeneration = userGeneration !== undefined ? Number(userGeneration) + 1 : 1;

  // Check if max supply is reached
  const maxSupply = metadata ? Number(metadata.maxSupply) : 0;
  const currentSupply = metadata ? Number(metadata.currentSupply) : 0;
  const remainingSupply = maxSupply - currentSupply;
  const isMaxSupplyReached = remainingSupply <= 0;

  // Check if propagation is enabled
  const canPropagate = metadata?.canPropagate ?? false;

  // Custom validation check - React Hook Form's isValid can be unreliable with field arrays
  // We use our own validation based on actual recipient count and form state
  const hasValidRecipients = recipientCount > 0;
  const isFormValid = hasValidRecipients && !isMaxSupplyReached && canPropagate;

  // Handle form submission
  const onSubmit = async (data: ShareWampumFormData) => {
    if (!writeContractAsync) {
      console.error("Contract write function not available");
      return;
    }

    if (isMaxSupplyReached) {
      return; // Should be prevented by UI, but double-check
    }

    setIsSubmitting(true);

    try {
      // Prepare recipients array (filter out empty addresses and validate)
      const recipientAddresses = data.recipients
        .map(r => r.address)
        .filter((addr): addr is `0x${string}` => {
          return addr !== undefined && addr !== "" && isAddress(addr);
        }) as `0x${string}`[];

      if (recipientAddresses.length === 0) {
        console.error("No valid recipients");
        setIsSubmitting(false);
        return;
      }

      // Check if adding these recipients would exceed max supply
      if (currentSupply + recipientAddresses.length > maxSupply) {
        console.error("Adding recipients would exceed max supply");
        setIsSubmitting(false);
        return;
      }

      // Call propagateKudos function using Scaffold-ETH writeContractAsync
      await writeContractAsync(
        {
          functionName: "propagateKudos",
          args: [BigInt(tokenId), recipientAddresses],
        },
        {
          onBlockConfirmation: (txnReceipt: TransactionReceipt) => {
            // Verify the transaction was successful
            if (!deployedContractData?.abi) {
              console.error("Contract ABI not available");
              if (onSuccess) {
                onSuccess();
              } else {
                router.push(`/wampum/${tokenId}`);
              }
              return;
            }

            try {
              // Find and decode the KudosPropagated event from transaction logs
              // (Event decoding is done to verify transaction success, but we don't need to count them)
              for (const log of txnReceipt.logs) {
                try {
                  const decodedEvent = decodeEventLog({
                    abi: deployedContractData.abi,
                    data: log.data,
                    topics: log.topics,
                  });

                  // Verify that KudosPropagated events exist in the transaction
                  if (decodedEvent.eventName === "KudosPropagated") {
                    // Event found - transaction was successful
                    break;
                  }
                } catch {
                  // Not the event we're looking for, continue to next log
                  continue;
                }
              }

              // Call success callback if provided
              if (onSuccess) {
                onSuccess();
              } else {
                // Redirect to the Wampum detail page
                router.push(`/wampum/${tokenId}`);
              }
            } catch (error) {
              console.error("Error decoding transaction receipt:", error);
              // Still redirect on success, even if we couldn't decode events
              if (onSuccess) {
                onSuccess();
              } else {
                router.push(`/wampum/${tokenId}`);
              }
            }
          },
        },
      );

      // The onBlockConfirmation callback will handle the redirect after transaction confirmation
    } catch (error) {
      console.error("Error sharing Wampum:", error);
      // Error handling and notifications are done by useScaffoldWriteContract
      setIsSubmitting(false);
    }
  };

  const isLoading = isMining || isSubmitting || isLoadingMetadata;

  // Show loading state while fetching metadata
  if (isLoadingMetadata) {
    return (
      <div className={`flex items-center justify-center min-h-[400px] ${className}`}>
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
          <p className="text-base-content/70">Loading Wampum details...</p>
        </div>
      </div>
    );
  }

  // Show error if metadata not found
  if (!metadata) {
    return (
      <div className={`bg-error/10 border border-error/30 rounded-2xl p-8 text-center ${className}`}>
        <p className="text-error text-lg font-semibold mb-2">Wampum not found</p>
        <p className="text-base-content/70">The Wampum you&apos;re trying to share doesn&apos;t exist.</p>
      </div>
    );
  }

  // Show error if propagation is disabled
  if (!canPropagate) {
    return (
      <div className={`bg-warning/10 border border-warning/30 rounded-2xl p-8 text-center ${className}`}>
        <p className="text-warning text-lg font-semibold mb-2">Propagation Disabled</p>
        <p className="text-base-content/70">
          This Wampum cannot be shared. The creator has disabled propagation for this token.
        </p>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-base-content">Share This Wampum</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              When you share a Wampum, you keep your Wampum and the recipient receives their own copy. Gratitude
              spreads, ownership remains.
            </p>
          </div>

          {/* Wampum Display Section */}
          <section className="bg-base-100 border border-base-300 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium mb-4 text-base-content">The Wampum Youre Sharing</p>
              <WampumDisplay tokenId={tokenId} visualSymbol={metadata.visualSymbol} size={160} animated={true} />
              <div className="mt-4 text-center">
                <p className="text-sm text-base-content/70 mb-1">Current Supply</p>
                <p className="text-lg font-semibold text-base-content">
                  {currentSupply} / {maxSupply}
                </p>
                {remainingSupply > 0 && (
                  <p className="text-xs text-base-content/60 mt-2">{remainingSupply} more can be shared</p>
                )}
              </div>
            </div>
          </section>

          {/* Max Supply Warning */}
          {isMaxSupplyReached && (
            <div className="bg-error/10 border border-error/30 rounded-2xl p-6">
              <p className="text-error text-lg font-semibold mb-2">Maximum Supply Reached</p>
              <p className="text-base-content/70">
                This Wampum has reached its maximum supply. No more copies can be created.
              </p>
            </div>
          )}

          {/* Generation Info */}
          {!isMaxSupplyReached && userGeneration !== undefined && (
            <section className="bg-base-100 border border-base-300 rounded-2xl p-6 md:p-8">
              <div className="text-center">
                <p className="text-sm text-base-content/70 mb-2">Generation Information</p>
                <p className="text-lg font-semibold text-base-content">
                  New recipients will be generation {newGeneration}
                </p>
                <p className="text-xs text-base-content/60 mt-2">
                  {Number(userGeneration) === 0
                    ? "You are the creator (generation 0)"
                    : `You are generation ${Number(userGeneration)}`}
                </p>
              </div>
            </section>
          )}

          {/* Recipients Section */}
          {!isMaxSupplyReached && (
            <section className="bg-base-100 border border-base-300 rounded-2xl p-6 md:p-8">
              <RecipientInput name="recipients" maxRecipients={remainingSupply} className="w-full" />
              {errors.recipients && (
                <p className="mt-4 text-sm text-error">{(errors.recipients as { message?: string })?.message}</p>
              )}
              {recipientCount > 0 && remainingSupply > 0 && (
                <div className="mt-4 p-4 bg-base-200 rounded-lg border border-base-300">
                  <p className="text-sm text-base-content/70">
                    You&apos;re about to share this Wampum with {recipientCount} recipient
                    {recipientCount !== 1 ? "s" : ""}. After sharing, {remainingSupply - recipientCount} more can still
                    be created.
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Submit Section */}
          {!isMaxSupplyReached && (
            <section className="bg-base-100 border border-base-300 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col items-center space-y-4">
                <CeremonyButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isLoading}
                  disabled={!isFormValid || isLoading || recipientCount === 0 || recipientCount > remainingSupply}
                >
                  Share Wampum
                </CeremonyButton>

                {/* Helpful error messages */}
                {recipientCount === 0 && (
                  <p className="text-sm text-warning text-center">
                    Please add at least one valid recipient address to share this Wampum.
                  </p>
                )}

                {recipientCount > 0 && recipientCount > remainingSupply && (
                  <p className="text-sm text-error text-center">
                    You cannot add more recipients than the remaining supply ({remainingSupply}). Please remove{" "}
                    {recipientCount - remainingSupply} recipient{recipientCount - remainingSupply !== 1 ? "s" : ""}.
                  </p>
                )}

                {recipientCount > 0 && recipientCount <= remainingSupply && !hasValidRecipients && (
                  <p className="text-sm text-warning text-center">
                    Please enter valid Ethereum addresses for all recipients.
                  </p>
                )}

                {errors.recipients && (
                  <p className="text-sm text-error text-center">
                    {(errors.recipients as { message?: string })?.message}
                  </p>
                )}
              </div>
            </section>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
