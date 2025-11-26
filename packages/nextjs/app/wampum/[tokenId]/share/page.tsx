"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/outline";
import { ShareWampumForm } from "~~/components/forms";
import { notification } from "~~/utils/scaffold-eth";

/**
 * Share Wampum Page - "Pass the Gift"
 *
 * A warm, ceremonial-feeling interface for propagating Wampum to new recipients.
 * This page provides a gift-giving experience where users can share their Wampum
 * with others, maintaining their own copy while creating new ones for recipients.
 */
export default function ShareWampumPage() {
  const params = useParams();
  const router = useRouter();

  // Get tokenId from route params and validate
  const tokenIdParam = params?.tokenId;
  const tokenId = tokenIdParam
    ? typeof tokenIdParam === "string"
      ? parseInt(tokenIdParam, 10)
      : Number(tokenIdParam)
    : null;

  // Handle form success with celebration and redirect
  const handleSuccess = () => {
    // Show success notification
    notification.success(
      <div>
        <p className="font-semibold">Wampum Shared Successfully!</p>
        <p className="text-sm">Gratitude spreads, ownership remains.</p>
      </div>,
      {
        icon: "🎁",
        duration: 5000,
      },
    );

    // Redirect to Wampum detail page
    if (tokenId !== null && !isNaN(tokenId)) {
      router.push(`/wampum/${tokenId}`);
    } else {
      // Fallback to home if tokenId is invalid
      router.push("/");
    }
  };

  // Show error if tokenId is invalid
  if (tokenId === null || isNaN(tokenId)) {
    return (
      <div className="flex flex-col items-center min-h-screen pt-10 pb-16 px-5">
        <div className="w-full max-w-4xl">
          <div className="bg-error/10 border border-error/30 rounded-2xl p-8 text-center">
            <p className="text-error text-lg font-semibold mb-2">Invalid Wampum</p>
            <p className="text-base-content/70 mb-4">The Wampum you&apos;re trying to share doesn&apos;t exist.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen pt-10 pb-16 px-5">
      {/* Breadcrumb Navigation */}
      <div className="w-full max-w-4xl mb-8">
        <nav className="flex items-center gap-2 text-sm text-base-content/70" aria-label="Breadcrumb">
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-base-content transition-colors"
            aria-label="Home"
          >
            <HomeIcon className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <span className="text-base-content/40">/</span>
          <Link href={`/wampum/${tokenId}`} className="hover:text-base-content transition-colors">
            Wampum Detail
          </Link>
          <span className="text-base-content/40">/</span>
          <span className="text-base-content">Share</span>
        </nav>
      </div>

      {/* Back Navigation */}
      <div className="w-full max-w-4xl mb-8">
        <Link
          href={`/wampum/${tokenId}`}
          className="inline-flex items-center gap-2 text-base-content/70 hover:text-base-content transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to Wampum</span>
        </Link>
      </div>

      {/* Page Header */}

      {/* Share Form */}
      <div className="w-full max-w-4xl">
        <ShareWampumForm tokenId={tokenId} onSuccess={handleSuccess} />
      </div>
    </div>
  );
}
