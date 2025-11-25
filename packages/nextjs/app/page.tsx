"use client";

import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";
import { hardhat } from "viem/chains";
import { useAccount } from "wagmi";
import { StorySection } from "~~/components/layout";
import { CeremonyButton } from "~~/components/wampum/CeremonyButton";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const { targetNetwork } = useTargetNetwork();

  return (
    <>
      {/* Hero Section */}
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Wampum</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col mb-8">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address
              address={connectedAddress}
              chain={targetNetwork}
              blockExplorerAddressLink={
                targetNetwork.id === hardhat.id ? `/blockexplorer/address/${connectedAddress}` : undefined
              }
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/create">
              <CeremonyButton variant="primary" size="lg">
                Create Your First Wampum
              </CeremonyButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Story Section - Educational content about Wampum */}
      <StorySection />

      {/* Feature Cards Section - Will be added when FeatureCards component is ready */}
      {/* <FeatureCards /> */}

      {/* Cultural Note - Will be added when CulturalNote component is ready */}
      {/* <CulturalNote /> */}
    </>
  );
};

export default Home;
