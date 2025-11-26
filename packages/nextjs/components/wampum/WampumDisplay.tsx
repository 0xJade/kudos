"use client";

import { useEffect } from "react";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface WampumDisplayProps {
  tokenId: number;
  visualSymbol?: string; // Color hex or pattern identifier
  size?: number; // Diameter in pixels, default: 200
  className?: string;
  animated?: boolean; // Enable subtle pulse animation
}

/**
 * WampumDisplay - Large, beautiful visualization of a single Wampum
 *
 * Displays a circular Wampum with shell-like appearance, shine effects,
 * and optional gentle pulse animation. Fetches visualSymbol from contract
 * if not provided as a prop.
 */
export const WampumDisplay: React.FC<WampumDisplayProps> = ({
  tokenId,
  visualSymbol,
  size = 200,
  className = "",
  animated = false,
}) => {
  // Add pulse animation keyframes to document if animated
  useEffect(() => {
    if (animated && typeof document !== "undefined") {
      const styleId = "wampum-pulse-animation";
      if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
          @keyframes wampum-pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.02);
            }
          }
        `;
        document.head.appendChild(style);
      }
    }
  }, [animated]);

  // Fetch visualSymbol from contract if not provided
  const { data: metadata } = useScaffoldReadContract({
    contractName: "Kudos",
    functionName: "getKudosMetadata",
    args: [BigInt(tokenId)],
    query: {
      enabled: !visualSymbol && tokenId >= 0, // Only fetch if visualSymbol not provided
    },
  });

  // Use provided visualSymbol or fetch from metadata, or default to primary color
  const wampumColor = visualSymbol || metadata?.visualSymbol || "#5B4B8A";

  // Parse color if it's a hex string
  const getColorValue = (color: string): string => {
    // Check if it's a valid hex color
    if (color.startsWith("#") && /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
      return color;
    }
    // If it's a pattern identifier, we could handle it here later
    // For now, default to primary color
    return "#5B4B8A";
  };

  const colorValue = getColorValue(wampumColor);

  // Convert hex to RGB for gradient calculation
  const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgb = hexToRgb(colorValue) || { r: 91, g: 75, b: 138 }; // Default to primary color RGB
  const lighterRgb = {
    r: Math.min(255, rgb.r + 40),
    g: Math.min(255, rgb.g + 40),
    b: Math.min(255, rgb.b + 40),
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {/* Shadow layer */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: "var(--wampum-bead-shadow)",
        }}
      />

      {/* Wampum container */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `radial-gradient(circle at 30% 30%, rgba(${lighterRgb.r}, ${lighterRgb.g}, ${lighterRgb.b}, 0.8), ${colorValue})`,
          boxShadow: "var(--wampum-bead-shadow)",
          animation: animated ? "wampum-pulse 3s ease-in-out infinite" : "none",
        }}
      >
        {/* Shine effect - linear gradient overlay at 45deg */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `linear-gradient(135deg, var(--wampum-shell-shine) 0%, transparent 50%)`,
          }}
        />

        {/* Subtle border */}
        <div
          className="absolute inset-0 rounded-full border-2 pointer-events-none"
          style={{
            borderColor: `${colorValue}40`, // 40 = 25% opacity in hex
          }}
        />
      </div>
    </div>
  );
};
