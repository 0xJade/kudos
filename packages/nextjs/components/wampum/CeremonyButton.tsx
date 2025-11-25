"use client";

import React from "react";

interface CeremonyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

/**
 * CeremonyButton - A ceremonial-feeling button for important Wampum actions
 *
 * Provides a warm, inviting button with organic styling that honors the
 * cultural significance of Wampum while creating a sense of ceremony around
 * important actions like creating or sharing Wampum.
 *
 * Features:
 * - Warm Wampum color palette (primary, secondary, accent)
 * - Organic rounded shape (12px border-radius for md)
 * - Subtle glow effect on hover using Wampum CSS variables
 * - Gentle pulse animation for loading state
 * - Full accessibility support
 * - Dark/light mode compatible
 */
export const CeremonyButton: React.FC<CeremonyButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  type = "button",
  className = "",
}) => {
  // Base button classes with smooth transitions
  const baseClasses = "btn font-medium transition-all duration-300 ease-in-out border-0";

  // Size classes with organic rounded corners (12px for md as specified)
  const sizeClasses = {
    sm: "btn-sm rounded-lg px-4 py-2 text-sm",
    md: "rounded-[12px] px-6 py-3 text-base",
    lg: "btn-lg rounded-[12px] px-8 py-4 text-lg",
  };

  // Variant classes using Wampum color scheme from globals.css
  const variantClasses = {
    primary: "bg-primary text-primary-content hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-content hover:bg-secondary/90",
    accent: "bg-accent text-accent-content hover:bg-accent/90",
  };

  // Hover glow effect using Wampum CSS variable
  // Uses custom CSS class defined in globals.css
  const hoverGlowClass = !disabled && !loading ? "ceremony-button-hover-glow" : "";

  // Focus state for accessibility
  const focusClasses = "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50";

  // Disabled state - removes hover effects
  const disabledClasses =
    disabled || loading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]";

  // Loading spinner with gentle pulse animation
  const LoadingSpinner = () => (
    <span
      className="inline-block w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin"
      style={{ animationDuration: "1s" }}
      aria-hidden="true"
    />
  );

  // Combine all classes
  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${hoverGlowClass}
    ${focusClasses}
    ${disabledClasses}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
      aria-busy={loading}
      aria-disabled={disabled || loading}
    >
      {loading && <LoadingSpinner />}
      {children}
    </button>
  );
};
