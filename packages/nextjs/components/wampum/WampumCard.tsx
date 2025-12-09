"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { WampumDisplay } from "./WampumDisplay";
import { Address } from "@scaffold-ui/components";
import { ShareIcon } from "@heroicons/react/24/outline";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface WampumCardProps {
  tokenId: number;
  story?: string; // Optional, will fetch if not provided
  creator?: string; // Optional, will fetch if not provided
  currentSupply?: number;
  maxSupply?: number;
  visualSymbol?: string; // Color hex or pattern identifier
  mediaUri?: string;
  onClick?: () => void;
  variant?: "compact" | "full" | "preview";
  size?: "sm" | "md" | "lg";
  className?: string;
  showShareButton?: boolean;
}

/**
 * WampumCard - Circular card component displaying Wampum information
 *
 * Displays Wampum in a circular card format with shell-inspired
 * colors. Shows story preview, creator info, and propagation stats.
 * Clickable to navigate to detail page.
 */
export const WampumCard: React.FC<WampumCardProps> = ({
  tokenId,
  story,
  creator,
  currentSupply,
  maxSupply,
  visualSymbol,
  onClick,
  variant = "full",
  size = "md",
  className = "",
  showShareButton = true,
}) => {
  const router = useRouter();

  // Fetch metadata if not provided
  const { data: metadata, isLoading } = useScaffoldReadContract({
    contractName: "Kudos",
    functionName: "getKudosMetadata",
    args: [BigInt(tokenId)],
    query: {
      enabled: !story || !creator,
    },
  });

  // Use provided props or fetch from metadata
  const wampumStory = story || metadata?.story || "";
  const wampumCreator = creator || metadata?.creator || "";
  const wampumVisualSymbol = visualSymbol || metadata?.visualSymbol || "#5B4B8A";
  const wampumCurrentSupply = currentSupply !== undefined ? currentSupply : Number(metadata?.currentSupply || 0);
  const wampumMaxSupply = maxSupply !== undefined ? maxSupply : Number(metadata?.maxSupply || 0);

  // Size configurations
  const sizeConfig = {
    sm: { card: "w-32 h-32", display: 80, text: "text-xs" },
    md: { card: "w-48 h-48", display: 120, text: "text-sm" },
    lg: { card: "w-64 h-64", display: 160, text: "text-base" },
  };

  const config = sizeConfig[size];

  // Truncate story for preview
  const storyPreview = wampumStory.length > 150 ? `${wampumStory.substring(0, 150)}...` : wampumStory;

  // Handle card click
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/wampum/${tokenId}`);
    }
  };

  // Handle share click
  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    router.push(`/wampum/${tokenId}/share`);
  };

  if (isLoading) {
    return (
      <div
        className={`${config.card} rounded-full bg-base-200 border border-base-300 flex items-center justify-center ${className}`}
      >
        <div className="loading loading-spinner loading-md text-primary"></div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div
        className={`relative ${config.card} rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}
        onClick={handleClick}
      >
        <WampumDisplay tokenId={tokenId} visualSymbol={wampumVisualSymbol} size={config.display} animated={false} />
        {showShareButton && (
          <button
            onClick={handleShareClick}
            className="absolute top-2 right-2 p-2 bg-primary text-primary-content rounded-full shadow-lg hover:bg-primary/90 transition-colors z-10"
            aria-label="Share Wampum"
          >
            <ShareIcon className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`group relative bg-base-100 border border-base-300 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${className}`}
      onClick={handleClick}
    >
      {/* Wampum Display */}
      <div className="flex justify-center mb-4">
        <WampumDisplay tokenId={tokenId} visualSymbol={wampumVisualSymbol} size={config.display} animated={false} />
      </div>

      {/* Story Preview */}
      {wampumStory && (
        <div className="mb-4">
          <p className={`${config.text} text-base-content/70 line-clamp-3`}>{storyPreview}</p>
        </div>
      )}

      {/* Creator Info */}
      {wampumCreator && (
        <div className="mb-4">
          <p className="text-xs text-base-content/50 mb-1">Created by</p>
          <Address address={wampumCreator as `0x${string}`} />
        </div>
      )}

      {/* Supply Info */}
      {(wampumCurrentSupply !== undefined || wampumMaxSupply !== undefined) && (
        <div className="mb-4">
          <p className="text-xs text-base-content/50 mb-1">Circulation</p>
          <p className={`${config.text} font-semibold text-base-content`}>
            {wampumCurrentSupply} / {wampumMaxSupply}
          </p>
        </div>
      )}

      {/* Share Button */}
      {showShareButton && (
        <button
          onClick={handleShareClick}
          className="w-full mt-4 btn btn-primary btn-sm rounded-lg flex items-center justify-center gap-2"
          aria-label="Share Wampum"
        >
          <ShareIcon className="w-4 h-4" />
          <span>Share</span>
        </button>
      )}
    </div>
  );
};
