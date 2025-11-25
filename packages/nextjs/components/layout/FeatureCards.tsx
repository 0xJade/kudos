"use client";

import { DocumentTextIcon, GiftIcon, UserGroupIcon } from "@heroicons/react/24/outline";

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureCard[] = [
  {
    title: "Weave Your Story",
    description:
      "Create Wampum with meaningful narratives that honor relationships and express gratitude. Each bead carries a story that connects people across time and space.",
    icon: <DocumentTextIcon className="h-8 w-8" />,
  },
  {
    title: "Share the Gift",
    description:
      "Propagate gratitude to others. When you share, you keep your bead while creating new ones for recipients. Gratitude multiplies, ownership remains.",
    icon: <GiftIcon className="h-8 w-8" />,
  },
  {
    title: "Build Community",
    description:
      "See how gratitude spreads through networks, building connections and strengthening community bonds. Watch your appreciation ripple through relationships.",
    icon: <UserGroupIcon className="h-8 w-8" />,
  },
];

/**
 * FeatureCards - Three feature cards explaining key Wampum features
 *
 * Displays cards in a responsive grid with warm, organic styling.
 * Each card highlights a core aspect of the Wampum experience:
 * storytelling, gift-giving, and community building.
 */
export const FeatureCards: React.FC = () => {
  return (
    <section className="w-full py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-2xl p-8 shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 mx-auto">
                <div className="text-primary">{feature.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center mb-4 text-base-content">{feature.title}</h3>

              {/* Description */}
              <p className="text-base-content/70 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
