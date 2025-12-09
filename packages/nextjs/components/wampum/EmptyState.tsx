"use client";

import React from "react";
import Link from "next/link";
import { CeremonyButton } from "./CeremonyButton";
import { GiftIcon, HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface EmptyStateProps {
  variant: "no-created" | "no-received" | "no-results";
  onClearFilters?: () => void; // For no-results variant
  className?: string;
}

/**
 * EmptyState - Warm, ceremonial empty states for Wampum collection
 *
 * Provides encouraging, welcoming messages when collections are empty
 * or search results are found. Uses Wampum color scheme and ceremonial
 * styling throughout.
 */
export const EmptyState: React.FC<EmptyStateProps> = ({ variant, onClearFilters, className = "" }) => {
  const getContent = () => {
    switch (variant) {
      case "no-created":
        return {
          icon: <HeartIcon className="w-16 h-16 text-primary" />,
          title: "Your First Wampum Awaits",
          message: "Your first Wampum awaits. Share a story of gratitude and begin weaving your collection.",
          cta: (
            <Link href="/create">
              <CeremonyButton variant="primary" size="md">
                Create Your First Wampum
              </CeremonyButton>
            </Link>
          ),
        };
      case "no-received":
        return {
          icon: <GiftIcon className="w-16 h-16 text-primary" />,
          title: "Your Collection Will Grow",
          message:
            "When someone shares a Wampum with you, it will appear here like a gift. Your collection will grow as gratitude spreads.",
          cta: (
            <Link href="/">
              <CeremonyButton variant="secondary" size="md">
                Learn About Wampum
              </CeremonyButton>
            </Link>
          ),
        };
      case "no-results":
        return {
          icon: <MagnifyingGlassIcon className="w-16 h-16 text-primary" />,
          title: "No Wampum Found",
          message: "No Wampum match your search. Try adjusting your filters to discover more stories of gratitude.",
          cta: onClearFilters ? (
            <CeremonyButton variant="accent" size="md" onClick={onClearFilters}>
              Clear Filters
            </CeremonyButton>
          ) : null,
        };
    }
  };

  const content = getContent();

  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-6 text-center bg-base-200 rounded-2xl border border-base-300 ${className}`}
    >
      <div className="mb-6">{content.icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-base-content">{content.title}</h3>
      <p className="text-base text-base-content/70 max-w-md mb-8 leading-relaxed">{content.message}</p>
      {content.cta && <div>{content.cta}</div>}
    </div>
  );
};
