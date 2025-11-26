"use client";

import { useEffect, useState } from "react";
import { WampumBeadDisplay } from "~~/components/wampum";

interface WampumCustomizerProps {
  value?: string; // Color hex or pattern identifier
  onChange?: (value: string) => void;
  className?: string;
}

/**
 * Wampum Color Palette - Shell-inspired colors
 */
const WAMPUM_COLORS = [
  { name: "Deep Purple-Blue", hex: "#5B4B8A" },
  { name: "Soft Lavender", hex: "#8B7BA8" },
  { name: "Warm Coral", hex: "#D4A574" },
  { name: "Sea Green", hex: "#6B9A8A" },
  { name: "Forest Green", hex: "#4A7C59" },
  { name: "Golden Amber", hex: "#C9A961" },
] as const;

/**
 * WampumCustomizer - Component for customizing Wampum appearance
 *
 * Allows users to select colors from the Wampum palette and optionally
 * choose patterns. Shows a live preview of the selected Wampum.
 */
export const WampumCustomizer: React.FC<WampumCustomizerProps> = ({ value, onChange, className = "" }) => {
  const [selectedColor, setSelectedColor] = useState<string>(value || WAMPUM_COLORS[0].hex);
  const [showCustomColor, setShowCustomColor] = useState(false);
  const [customColorInput, setCustomColorInput] = useState<string>("");

  // Handle color selection
  const handleColorSelect = (hex: string) => {
    setSelectedColor(hex);
    setShowCustomColor(false);
    onChange?.(hex);
  };

  // Handle custom color input
  const handleCustomColorChange = (hex: string) => {
    setCustomColorInput(hex);
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)) {
      setSelectedColor(hex);
      onChange?.(hex);
    }
  };

  // Update selected color when value prop changes
  useEffect(() => {
    if (value && value !== selectedColor) {
      setSelectedColor(value);
    }
  }, [value, selectedColor]);

  // Get color name from hex value
  const getColorName = (hex: string): string => {
    const color = WAMPUM_COLORS.find(c => c.hex.toLowerCase() === hex.toLowerCase());
    return color ? color.name : "Custom Color";
  };

  const selectedColorName = getColorName(selectedColor);

  return (
    <div className={className}>
      {/* Section Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-base-content">Choose your Wampum&apos;s appearance</h3>
        <p className="text-sm text-base-content/70">
          Select a color that represents your gratitude. Each Wampum is unique, like your story.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Color Picker Section */}
        <div>
          <label className="block text-sm font-medium mb-4 text-base-content">Wampum Color Palette</label>

          {/* Color Swatches Grid */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {WAMPUM_COLORS.map(color => (
              <button
                key={color.hex}
                type="button"
                onClick={() => handleColorSelect(color.hex)}
                className={
                  "relative w-full aspect-square rounded-lg transition-all duration-300 border-2 " +
                  (selectedColor === color.hex
                    ? "border-primary scale-105 shadow-lg ring-2 ring-primary/20"
                    : "border-base-300 hover:border-primary/50 hover:scale-105") +
                  " focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                }
                style={{ backgroundColor: color.hex }}
                aria-label={"Select " + color.name + " color"}
                title={color.name}
              >
                {/* Selected indicator */}
                {selectedColor === color.hex && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white drop-shadow-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Selected Color Name Display */}
          <div className="mb-6 p-4 bg-base-200 rounded-lg border border-base-300">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full border-2 border-base-300 shadow-sm"
                style={{ backgroundColor: selectedColor }}
              />
              <div className="flex-1">
                <p className="text-xs text-base-content/60 mb-1">Selected Color</p>
                <p className="text-base font-semibold text-base-content">{selectedColorName}</p>
                <p className="text-xs text-base-content/50 font-mono">{selectedColor.toUpperCase()}</p>
              </div>
            </div>
          </div>

          {/* Custom Color Input */}
          <div>
            <button
              type="button"
              onClick={() => setShowCustomColor(!showCustomColor)}
              className="text-sm text-accent hover:text-accent/80 font-medium underline underline-offset-2 transition-colors"
            >
              {showCustomColor ? "Hide" : "Use"} custom color
            </button>

            {showCustomColor && (
              <div className="mt-3">
                <label className="block text-sm font-medium mb-2 text-base-content">Custom Color (Hex)</label>
                <div className="flex gap-3 items-center">
                  <input
                    type="color"
                    value={selectedColor.startsWith("#") ? selectedColor : "#5B4B8A"}
                    onChange={e => handleCustomColorChange(e.target.value)}
                    className="w-16 h-16 rounded-lg border-2 border-base-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <input
                    type="text"
                    value={customColorInput || selectedColor}
                    onChange={e => handleCustomColorChange(e.target.value)}
                    placeholder="#5B4B8A"
                    pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                    className="flex-1 px-4 py-2 rounded-lg border border-base-300 bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
                {customColorInput && !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(customColorInput) && (
                  <p className="mt-2 text-sm text-error">Please enter a valid hex color (e.g., #5B4B8A)</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Live Preview Section */}
        <div>
          <label className="block text-sm font-medium mb-4 text-base-content">Live Preview</label>
          <div className="flex items-center justify-center min-h-[200px] bg-base-200 rounded-2xl p-8 border border-base-300">
            <WampumBeadDisplay
              tokenId={0} // Placeholder tokenId for preview
              visualSymbol={selectedColor}
              size={160}
              animated={false}
            />
          </div>
          {selectedColor && (
            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-base-content mb-1">{selectedColorName}</p>
              <p className="text-xs text-base-content/60 font-mono">{selectedColor.toUpperCase()}</p>
            </div>
          )}
        </div>
      </div>

      {/* Pattern Selector (Optional - can be implemented later) */}
      {/* 
      <div className="mt-8 pt-8 border-t border-base-300">
        <label className="block text-sm font-medium mb-4 text-base-content">
          Pattern (Optional)
        </label>
        <div className="grid grid-cols-3 gap-4">
          <button type="button" className="...">Stripes</button>
          <button type="button" className="...">Dots</button>
          <button type="button" className="...">Waves</button>
        </div>
      </div>
      */}
    </div>
  );
};
