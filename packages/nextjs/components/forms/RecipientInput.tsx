"use client";

import { AddressInput } from "@scaffold-ui/components";
import { Controller, FormProvider, useFieldArray, useForm, useFormContext } from "react-hook-form";
import { isAddress } from "viem";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

interface RecipientInputProps {
  name: string; // Name for React Hook Form field
  maxRecipients?: number;
  className?: string;
}

/**
 * RecipientInput - Component for managing multiple recipient addresses
 *
 * Allows users to add and remove recipient addresses for Wampum propagation.
 * Uses React Hook Form's useFieldArray for dynamic list management.
 * Integrates with @scaffold-ui/components AddressInput for address input.
 * Validates addresses using viem's isAddress function.
 *
 * Features:
 * - Dynamic add/remove functionality
 * - Address validation with clear error messages
 * - Max recipients limit enforcement
 * - Warm, ceremonial styling
 * - Full accessibility support
 * - Dark/light mode compatible
 */
// Internal component that requires form context
const RecipientInputInternal: React.FC<RecipientInputProps> = ({ name, maxRecipients, className = "" }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  // Get errors for this field array
  // React Hook Form field array errors have nested structure: { [index]: { address?: { message?: string } } }
  const fieldErrors = errors[name] as
    | {
        [key: number]: {
          address?: { message?: string };
          message?: string;
        };
      }
    | undefined;

  // Add a new recipient field
  const handleAddRecipient = () => {
    if (maxRecipients && fields.length >= maxRecipients) {
      return;
    }
    append({ address: "" });
  };

  // Remove a recipient field
  const handleRemoveRecipient = (index: number) => {
    remove(index);
  };

  // Validate address
  const validateAddress = (address: string): string | boolean => {
    if (!address || address.trim() === "") {
      return true; // Empty is allowed (will be validated by form schema)
    }
    if (!isAddress(address)) {
      return "Invalid address";
    }
    return true;
  };

  const canAddMore = !maxRecipients || fields.length < maxRecipients;
  const isAtMax = maxRecipients && fields.length >= maxRecipients;

  return (
    <div className={className}>
      {/* Section Header */}
      <div className="mb-6">
        <label className="block text-xl font-semibold mb-2 text-base-content">Who will receive this Wampum?</label>
        <p className="text-sm text-base-content/70">
          You&apos;ll keep your bead, and they&apos;ll receive a copy. Gratitude spreads, ownership remains.
        </p>
        {maxRecipients && (
          <p className="text-xs text-base-content/60 mt-2">
            {fields.length} / {maxRecipients} recipients
          </p>
        )}
      </div>

      {/* Recipient List */}
      <div className="space-y-4">
        {fields.length === 0 ? (
          <div className="bg-base-200 border border-base-300 rounded-lg p-6 text-center">
            <p className="text-base-content/70 mb-4">No recipients added yet.</p>
            <button type="button" onClick={handleAddRecipient} className="btn btn-primary btn-sm rounded-lg">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add First Recipient
            </button>
          </div>
        ) : (
          fields.map((field, index) => {
            const fieldError = fieldErrors?.[index]?.address?.message || fieldErrors?.[index]?.message;
            const fieldName = `${name}.${index}.address` as const;

            return (
              <div
                key={field.id}
                className="bg-base-200 border border-base-300 rounded-lg p-4 transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-start gap-3">
                  {/* Address Input */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2 text-base-content">Recipient {index + 1}</label>
                    <Controller
                      name={fieldName}
                      control={control}
                      rules={{
                        validate: validateAddress,
                      }}
                      render={({ field: { onChange, value } }) => (
                        <AddressInput
                          placeholder="0x... or ENS name"
                          value={value || ""}
                          onChange={address => {
                            onChange(address);
                          }}
                        />
                      )}
                    />
                    {fieldError && <p className="mt-2 text-sm text-error">{fieldError}</p>}
                  </div>

                  {/* Remove Button */}
                  {fields.length > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveRecipient(index)}
                      className="btn btn-ghost btn-sm rounded-lg text-error hover:bg-error/10 hover:text-error mt-6"
                      aria-label={"Remove recipient " + (index + 1)}
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}

        {/* Add Recipient Button */}
        {canAddMore && (
          <button
            type="button"
            onClick={handleAddRecipient}
            className="btn btn-outline btn-primary btn-sm rounded-lg w-full"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Recipient
          </button>
        )}

        {/* Max Recipients Message */}
        {isAtMax && (
          <div className="bg-warning/10 border border-warning/30 rounded-lg p-3 text-center">
            <p className="text-sm text-warning">
              Maximum recipients reached ({maxRecipients}). Remove a recipient to add another.
            </p>
          </div>
        )}

        {/* General Error Message */}
        {errors[name] && typeof errors[name] === "object" && "message" in errors[name] && (
          <div className="bg-error/10 border border-error/30 rounded-lg p-3">
            <p className="text-sm text-error">{(errors[name] as { message: string }).message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Wrapper component that handles both form context and standalone modes
// This wrapper always provides a form context, either from parent or created internally
export const RecipientInput: React.FC<RecipientInputProps> = props => {
  // Always create a form for standalone use
  // If used inside a FormProvider, the internal component will use that instead
  const standaloneForm = useForm({
    defaultValues: {
      [props.name]: [],
    },
  });

  // Wrap in FormProvider - if parent FormProvider exists, this will be ignored
  // The internal component will use the nearest FormProvider (parent if exists, this one if not)
  return (
    <FormProvider {...standaloneForm}>
      <RecipientInputInternal {...props} />
    </FormProvider>
  );
};
