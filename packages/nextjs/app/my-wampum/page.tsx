"use client";

import React, { useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { GiftIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { EmptyState, WampumCard } from "~~/components/wampum";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type TabType = "created" | "received";

/**
 * My Wampum Page - "The Collection"
 *
 * Displays user's personal collection of created and received Wampum.
 * Features a two-tab interface for viewing created vs received Wampum,
 * with warm, collection-like styling.
 */
export default function MyWampumPage() {
  const { address: connectedAddress } = useAccount();
  const [activeTab, setActiveTab] = useState<TabType>("created");

  // Fetch created tokens
  const { data: createdTokenIds, isLoading: isLoadingCreated } = useScaffoldReadContract({
    contractName: "Kudos",
    functionName: "getCreatorTokens",
    args: [connectedAddress as `0x${string}`],
    query: {
      enabled: !!connectedAddress && activeTab === "created",
    },
  });

  // Fetch held tokens (received)
  const { data: receivedTokenIds, isLoading: isLoadingReceived } = useScaffoldReadContract({
    contractName: "Kudos",
    functionName: "getHolderTokens",
    args: [connectedAddress as `0x${string}`],
    query: {
      enabled: !!connectedAddress && activeTab === "received",
    },
  });

  // Convert token IDs to numbers
  const createdTokens = useMemo(() => {
    if (!createdTokenIds) return [];
    return createdTokenIds.map((id: bigint) => Number(id));
  }, [createdTokenIds]);

  const receivedTokens = useMemo(() => {
    if (!receivedTokenIds) return [];
    return receivedTokenIds.map((id: bigint) => Number(id));
  }, [receivedTokenIds]);

  // Filter out tokens user created from received list (since creator also holds their own token)
  const receivedOnlyTokens = useMemo(() => {
    const createdSet = new Set(createdTokens);
    return receivedTokens.filter((id: number) => !createdSet.has(id));
  }, [createdTokens, receivedTokens]);

  const isLoading = activeTab === "created" ? isLoadingCreated : isLoadingReceived;
  const currentTokens = activeTab === "created" ? createdTokens : receivedOnlyTokens;
  const hasTokens = currentTokens.length > 0;

  return (
    <div className="flex flex-col items-center min-h-screen pt-10 pb-16 px-5">
      {/* Page Header */}
      <div className="w-full max-w-6xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-base-content text-center">My Wampum Collection</h1>
        <p className="text-lg text-base-content/70 text-center max-w-2xl mx-auto">
          View and manage your collection of Wampum—both those you&apos;ve created and those you&apos;ve received as
          gifts of gratitude.
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-6xl mb-8">
        <div className="tabs tabs-boxed bg-base-200 justify-center">
          <button
            className={`tab tab-lg ${activeTab === "created" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("created")}
          >
            <HandRaisedIcon className="w-5 h-5 mr-2" />
            <span>Wampum I&apos;ve Created</span>
            {createdTokens.length > 0 && (
              <span className="ml-2 badge badge-primary badge-sm">{createdTokens.length}</span>
            )}
          </button>
          <button
            className={`tab tab-lg ${activeTab === "received" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("received")}
          >
            <GiftIcon className="w-5 h-5 mr-2" />
            <span>Wampum I&apos;ve Received</span>
            {receivedOnlyTokens.length > 0 && (
              <span className="ml-2 badge badge-primary badge-sm">{receivedOnlyTokens.length}</span>
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
              <p className="text-base-content/70">Loading your collection...</p>
            </div>
          </div>
        ) : !connectedAddress ? (
          <div className="bg-warning/10 border border-warning/30 rounded-2xl p-8 text-center">
            <p className="text-warning text-lg font-semibold mb-2">Connect Your Wallet</p>
            <p className="text-base-content/70">Please connect your wallet to view your Wampum collection.</p>
          </div>
        ) : !hasTokens ? (
          <EmptyState variant={activeTab === "created" ? "no-created" : "no-received"} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentTokens.map((tokenId: number) => (
              <WampumCard key={tokenId} tokenId={tokenId} variant="full" size="md" showShareButton={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
