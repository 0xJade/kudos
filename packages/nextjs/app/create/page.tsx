"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { CreateWampumForm } from "~~/components/forms";

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
          Share a story of gratitude and create a Wampum that can be shared with others. Your story will be preserved on
          chain, and gratitude will spread through the community.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <CreateWampumForm />
      </div>
    </div>
  );
}
