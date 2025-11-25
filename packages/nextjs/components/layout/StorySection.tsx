"use client";

/**
 * StorySection - Educational content about Wampum's significance
 *
 * Tells the story of Wampum traditions and connects them to the digital
 * gratitude system with warmth, respect, and narrative flow.
 */
export const StorySection: React.FC = () => {
  return (
    <section className="w-full py-16 px-5 bg-base-200">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-base-content">The Story of Wampum</h2>
        </div>

        {/* Story Content */}
        <div className="prose prose-lg max-w-none text-base-content/90">
          {/* First Paragraph: Historical Significance */}
          <p className="text-lg leading-relaxed mb-6">
            For centuries, Wampum beads have been woven into the fabric of Indigenous communities across the
            Northeastern Woodlands. These shell beads were far more than decorative—they were{" "}
            <strong className="text-base-content">storytelling tools</strong>, carrying narratives of gratitude,
            agreements, and important events. Wampum belts documented treaties and historical moments, while individual
            beads served as <strong className="text-base-content">ceremonial gifts</strong> that honored relationships
            and expressed appreciation. Each bead carried meaning, and when woven together, they told stories that
            connected people across time and space.
          </p>

          {/* Second Paragraph: Digital Adaptation */}
          <p className="text-lg leading-relaxed mb-6">
            In this digital adaptation, we honor that tradition by creating Wampum beads that carry stories of
            gratitude. When you create a Wampum, you weave a narrative of appreciation—perhaps for a mentor who guided
            you, a friend who supported you, or a community that welcomed you. When you share that Wampum with others:{" "}
            <strong className="text-base-content">you keep your bead</strong>, and they receive their own copy.
            Gratitude multiplies without diminishing. Your story spreads through networks, building connections and
            strengthening the bonds that hold communities together.
          </p>
        </div>
      </div>
    </section>
  );
};
