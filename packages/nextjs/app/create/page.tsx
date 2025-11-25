"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { CeremonyButton, StoryDisplay, WampumBeadDisplay } from "~~/components/wampum";

/**
 * Create Wampum Page - Placeholder
 *
 * This is a placeholder page for creating new Wampum.
 * The full form will be implemented in Phase 4 of the implementation plan.
 */
export default function CreateWampumPage() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-10 pb-16 px-5">
      {/* Back Navigation */}
      <div className="w-full max-w-4xl mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-base-content/70 hover:text-base-content transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-base-content">Weave Your Wampum Story</h1>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          Share a story of gratitude and create a digital Wampum bead that can be shared with others. Your story will be
          preserved on the blockchain, and gratitude will spread through the community.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <WampumBeadDisplay tokenId={1} visualSymbol="#D4A574" size={50} className="mb-8" animated={true} />
      </div>

      <div className="flex justify-center mb-8">
        <StoryDisplay
          story="This is a test story that is longer than the set length of 20 characters. It should be truncated and show a 'Read more' button."
          maxLength={20}
          showReadMore={true}
        />
      </div>

      {/* Placeholder Content */}
      <div className="w-full max-w-4xl">
        <div className="bg-base-100 border border-base-300 rounded-2xl p-8 md:p-12 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-base-content">Create Form Coming Soon</h2>
            <p className="text-base-content/70 mb-8 max-w-md mx-auto">
              The full Wampum creation form will be implemented here. This will include:
            </p>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                <span className="text-primary text-sm">1</span>
              </div>
              <div>
                <h3 className="font-medium text-base-content mb-1">Your Story</h3>
                <p className="text-sm text-base-content/70">Share the narrative behind your gratitude</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                <span className="text-secondary text-sm">2</span>
              </div>
              <div>
                <h3 className="font-medium text-base-content mb-1">Bead Customization</h3>
                <p className="text-sm text-base-content/70">Choose colors and patterns for your Wampum</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                <span className="text-accent text-sm">3</span>
              </div>
              <div>
                <h3 className="font-medium text-base-content mb-1">Recipients</h3>
                <p className="text-sm text-base-content/70">Select who will receive your Wampum</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                <span className="text-primary text-sm">4</span>
              </div>
              <div>
                <h3 className="font-medium text-base-content mb-1">Settings</h3>
                <p className="text-sm text-base-content/70">Configure propagation and sharing options</p>
              </div>
            </div>
          </div>

          {/* Placeholder Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CeremonyButton variant="primary" size="lg" disabled>
              Create Wampum (Coming Soon)
            </CeremonyButton>
            <Link href="/">
              <CeremonyButton variant="secondary" size="lg">
                Return Home
              </CeremonyButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
