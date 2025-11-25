"use client";

import { useEffect, useState } from "react";

interface StoryDisplayProps {
  story: string;
  maxLength?: number; // Default: 500
  showReadMore?: boolean; // Default: true
  variant?: "preview" | "full";
  className?: string;
}

/**
 * StoryDisplay - Beautifully formatted Wampum story text
 *
 * Displays story with warm typography and optional "Read more/less"
 * functionality for long stories. Preserves line breaks and formatting
 * to maintain the narrative flow of gratitude stories.
 */
export const StoryDisplay: React.FC<StoryDisplayProps> = ({
  story,
  maxLength = 500,
  showReadMore = true,
  variant = "preview",
  className = "",
}) => {
  // Initialize state based on variant - always start collapsed for preview to ensure hydration match
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after hydration to prevent mismatch
  useEffect(() => {
    setIsMounted(true);
    // If variant is "full", expand after mount
    if (variant === "full") {
      setIsExpanded(true);
    }
  }, [variant]);

  // Determine if we should show truncation
  const shouldTruncate = story.length > maxLength && showReadMore && variant === "preview";

  // Calculate display text - ensure consistent initial render
  const displayText = shouldTruncate && !isExpanded ? story.slice(0, maxLength) + "..." : story;

  // Split text by line breaks to preserve formatting
  const textLines = displayText.split("\n");

  // Calculate max height class - use consistent classes to avoid hydration mismatch
  const maxHeightClass = shouldTruncate && !isExpanded ? "max-h-[8.5rem]" : "";

  return (
    <div className={className}>
      {/* Story Text Container */}
      <div
        className={`text-lg leading-[1.7] text-base-content overflow-hidden transition-all duration-300 ease-in-out ${maxHeightClass}`}
      >
        {textLines.map((line, index) => (
          <p key={`line-${index}`} className="mb-4 last:mb-0">
            {line || "\u00A0"}
          </p>
        ))}
      </div>

      {/* Read More/Less Button - only show after mount to prevent hydration mismatch */}
      {isMounted && shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-accent hover:text-accent/80 font-medium transition-colors underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 rounded"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Show less of the story" : "Show more of the story"}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};
