# 🎨 Wampum Prompt Engineering Guide

## Overview

This guide provides comprehensive prompts for creating the **Home Page**, **Create Wampum Page**, and **Share Wampum Page** with expert marketing language, design specifications, and component creation instructions. Use these prompts with AI tools (like Cursor, ChatGPT, Claude) to generate code, designs, and copy.

**Core Slogan**: "Share Gratitude That Spreads Like Fire"

---

## 🎯 Design Philosophy & Marketing Tone

### Core Principles

**Emotional Tone**:
- **Warm & Ceremonial**: Every interaction should feel meaningful and respectful
- **Gratitude-First**: Language centers on appreciation, not transactions
- **Community-Building**: Emphasize connection and shared acknowledgment
- **Cultural Respect**: Honor Wampum traditions without appropriation

**Marketing Language Style**:
- **Avoid**: "Transfer", "Send", "Transaction", "Mint", "Token"
- **Use Instead**: "Share", "Gift", "Pass", "Weave", "Create", "Bead"
- **Emotional Words**: Gratitude, honor, connection, community, story, gift, ceremony
- **Action Words**: Weave, share, pass, build, create, honor

**Visual Design Language**:
- Organic, flowing shapes (no harsh edges)
- Shell-inspired colors (purple-blues, corals, sea greens)
- Warm gradients and soft shadows
- Gentle animations (pulse, glow, fade)
- Ceremonial feeling (important, meaningful, respectful)

---

## 🏠 Page 1: Home Page - "The Sacred Fire"

### Design Prompt

```
Create a warm, welcoming home page for Wampum, a blockchain-based gratitude system inspired by Indigenous Wampum traditions. The page should feel ceremonial and inviting, like entering a sacred space.

VISUAL DESIGN REQUIREMENTS:
- Hero section: Large, centered, with warm gradient background (purple-blue to coral)
- Organic shapes: Rounded corners (12px+), flowing layouts, no sharp edges
- Color palette: Deep purple-blue (#5B4B8A light, #8B7BA8 dark) as primary
- Typography: Warm, readable sans-serif, comfortable line heights (1.7+)
- Spacing: Generous padding (py-16, px-5), breathing room between sections
- Icons: Nature-inspired (SparklesIcon, FireIcon from Heroicons)
- Responsive: Mobile-first, stacks vertically on small screens

LAYOUT STRUCTURE:
1. Hero Section (centered, min-height 60vh)
   - Large icon/illustration with subtle glow effect
   - Headline (h1, 4xl-6xl, bold, centered)
   - Subheadline (p, lg-xl, centered, max-width 2xl)
   - CTA button (CeremonyButton, primary variant, large size)

2. Story Section (centered, max-width 4xl, bg-base-200)
   - Section heading (h2, 3xl-4xl, bold)
   - Educational paragraphs (p, lg, leading-relaxed)
   - Respectful, warm tone

3. Feature Cards (grid, 1 col mobile, 3 col desktop)
   - Each card: bg-base-100, rounded-2xl, p-8, shadow-lg
   - Icon in circular bg (primary/10), centered
   - Title (h3, 2xl, bold, centered)
   - Description (p, centered, text-base-content/70)
   - Hover: subtle scale (1.02), increased shadow

4. Cultural Note (centered, subtle, small text)
   - Italic, muted colors
   - Link to external resource

ANIMATIONS:
- Hero icon: Gentle pulse (3s duration)
- Cards: Hover scale transition (300ms ease)
- Button: Hover glow using --wampum-glow CSS variable

DARK MODE:
- All colors adjust automatically via DaisyUI theme
- Test contrast ratios (WCAG AA: 4.5:1 for text)
```

### Marketing Copy Prompt

```
Write marketing copy for the Wampum home page that:

1. HERO SECTION:
   - Headline: "Share Gratitude That Spreads Like Fire"
     * Emotional impact: Fire = warmth, spreading, transformation
     * Action-oriented: "Share" not "Send" or "Transfer"
     * Memorable: Short, powerful, poetic
   
   - Subheadline: "Honor relationships through Wampum - digital beads that carry stories and build community"
     * Explains what Wampum is (digital beads)
     * Emphasizes relationships and community
     * Uses "honor" (respectful, ceremonial)
     * Mentions stories (narrative, meaning)
   
   - CTA Button: "Create Your First Wampum"
     * Action: "Create" (not "Mint" or "Generate")
     * Personal: "Your First" (inviting, beginner-friendly)
     * Specific: "Wampum" (not "Token" or "NFT")

2. STORY SECTION:
   Write 2-3 paragraphs that:
   - Explain Wampum's historical significance (storytelling, ceremonial gifts, historical records)
   - Connect to digital adaptation (gratitude, community building)
   - Use respectful language (no appropriation)
   - Emphasize the propagation model (you keep your bead, others receive copies)
   - End with italic note about honoring traditions
   
   Tone: Educational, warm, respectful, inspiring
   Avoid: Technical jargon, crypto terms, appropriation

3. FEATURE CARDS:
   Card 1 - "Weave Your Story":
   - Title: "Weave Your Story"
   - Description: "Create Wampum with meaningful narratives that honor relationships and express gratitude. Each bead carries a story that connects people across time and space."
   - Emotional hook: Storytelling, meaning, connection
   
   Card 2 - "Share the Gift":
   - Title: "Share the Gift"
   - Description: "Propagate gratitude to others. When you share, you keep your bead while creating new ones for recipients. Gratitude multiplies, ownership remains."
   - Emotional hook: Gift-giving, multiplication, preservation
   
   Card 3 - "Build Community":
   - Title: "Build Community"
   - Description: "See how gratitude spreads through networks, building connections and strengthening community bonds. Watch your appreciation ripple through relationships."
   - Emotional hook: Community, networks, ripple effects

4. CULTURAL NOTE:
   - Text: "Learn more about the history and significance of Wampum in Indigenous cultures."
   - Link: "Learn About Wampum" (external link to Wikipedia or educational resource)
   - Style: Subtle, non-intrusive, respectful
```

### Component Creation Prompts

#### WampumHero Component

```
Create a React component called WampumHero for the Wampum home page.

TECHNICAL REQUIREMENTS:
- File: packages/nextjs/components/layout/WampumHero.tsx
- TypeScript with proper interfaces
- "use client" directive (Next.js App Router)
- Props: title (string, optional), subtitle (string, optional), ctaText (string, optional), ctaHref (string, optional)
- Default values match marketing copy above

DESIGN SPECIFICATIONS:
- Container: flex flex-col items-center justify-center min-h-[60vh] px-5 py-16 md:py-24
- Icon: Large SparklesIcon or FireIcon in circular gradient background with pulse animation
- Headline: text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6
- Subheadline: text-lg md:text-xl text-center mb-10 max-w-2xl leading-relaxed
- CTA: Link wrapping CeremonyButton (variant="primary", size="lg")
- Colors: Use Wampum color scheme (primary, base-content)
- Responsive: Mobile-first, scales up on larger screens

ACCESSIBILITY:
- Semantic HTML (h1, p, button)
- ARIA labels where needed
- Keyboard navigation support
```

#### StorySection Component

```
Create a React component called StorySection for educational content about Wampum.

TECHNICAL REQUIREMENTS:
- File: packages/nextjs/components/layout/StorySection.tsx
- TypeScript
- "use client" directive
- No props needed (static content)

DESIGN SPECIFICATIONS:
- Container: w-full py-16 px-5 bg-base-200
- Inner container: max-w-4xl mx-auto
- Heading: text-3xl md:text-4xl font-bold mb-4 text-center
- Content: prose prose-lg with warm typography
- Paragraphs: text-lg leading-relaxed mb-6
- Last paragraph: italic, text-base-content/70

COPY REQUIREMENTS:
- 2-3 paragraphs explaining Wampum traditions
- Connect to digital adaptation
- Respectful, educational tone
- No appropriation
- Emphasize propagation model
```

#### FeatureCards Component

```
Create a React component called FeatureCards displaying three feature cards.

TECHNICAL REQUIREMENTS:
- File: packages/nextjs/components/layout/FeatureCards.tsx
- TypeScript
- "use client" directive
- No props needed

DESIGN SPECIFICATIONS:
- Container: w-full py-16 px-5
- Grid: grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto
- Each card:
  - bg-base-100 rounded-2xl p-8 shadow-lg border border-base-300
  - Hover: hover:shadow-xl transition-all duration-300 hover:scale-[1.02]
  - Icon container: w-16 h-16 rounded-full bg-primary/10 mb-6 mx-auto
  - Icon: text-primary, h-8 w-8
  - Title: text-2xl font-bold text-center mb-4
  - Description: text-base-content/70 text-center leading-relaxed

ICONS:
- Card 1: DocumentTextIcon (Weave Your Story)
- Card 2: GiftIcon (Share the Gift)
- Card 3: UserGroupIcon (Build Community)
```

---

## ✍️ Page 2: Create Wampum Page - "Weave Your Story"

### Design Prompt

```
Create a ceremonial-feeling form page for creating new Wampum. The page should feel important and meaningful, like participating in a ritual, not filling out a form.

VISUAL DESIGN REQUIREMENTS:
- Page container: flex flex-col items-center min-h-screen pt-10 pb-16 px-5
- Max width: max-w-4xl for form content
- Background: Subtle gradient or warm base-200
- Form sections: Clear visual separation with warm headers
- Inputs: Large, comfortable, rounded (12px border-radius)
- Buttons: CeremonyButton for primary actions
- Preview: Prominent WampumBeadDisplay showing live preview

LAYOUT STRUCTURE:
1. Page Header (centered, mb-12)
   - Heading: "Weave Your Wampum Story" (h1, 4xl-5xl, bold)
   - Subtitle: Helpful, ceremonial instructions

2. Form Container (bg-base-100, rounded-2xl, shadow-lg, p-8 md:p-12)
   - Section 1: The Story (required textarea)
   - Section 2: The Bead (color/pattern picker with preview)
   - Section 3: The Recipients (address input list)
   - Section 4: The Ceremony (collapsible settings)
   - Section 5: Review & Create (preview + submit)

FORM SECTIONS:
- Each section: Clear heading, warm description, comfortable inputs
- Visual hierarchy: Headings (2xl), descriptions (lg), inputs (comfortable size)
- Spacing: Generous padding (p-6 md:p-8) between sections
- Validation: Real-time, gentle error messages
- Loading: Gentle pulse animation during submission

SUCCESS STATE:
- Celebration animation (confetti, glow, pulse)
- Warm success message
- Redirect to detail page
```

### Marketing Copy Prompt

```
Write marketing copy for the Create Wampum page that guides users through creating their first Wampum with warmth and ceremony.

1. PAGE HEADER:
   - Heading: "Weave Your Wampum Story"
     * Action: "Weave" (crafting, creating, meaningful)
     * Focus: "Story" (narrative, meaning, not just data)
   
   - Subtitle: "Share a story of gratitude and create a digital Wampum bead that can be shared with others. Your story will be preserved on the blockchain, and gratitude will spread through the community."
     * Explains purpose (share gratitude)
     * Mentions blockchain (transparent, permanent)
     * Emphasizes spreading (propagation)

2. HELPFUL INSTRUCTIONS SECTION:
   Write 3-4 bullet points or short paragraphs:
   - "Each Wampum bead carries a story of gratitude and appreciation"
   - "You'll keep your bead when sharing with others - gratitude multiplies"
   - "Choose meaningful recipients who have touched your life"
   - "Your story will be preserved forever on the blockchain"
   
   Tone: Encouraging, warm, ceremonial, helpful

3. FORM SECTION LABELS:
   Section 1 - The Story:
   - Label: "What story of gratitude do you want to share?"
   - Placeholder: "Share the story behind your gratitude... What relationship, moment, or person inspired this Wampum? Be as detailed as you'd like."
   - Helper text: "Your story will be visible to everyone who receives this Wampum. Make it meaningful and personal."
   - Character count: "X / 2000 characters" (encouraging, not limiting)
   
   Section 2 - The Bead:
   - Label: "Choose your bead's appearance"
   - Description: "Select colors and patterns that represent your gratitude. Each bead is unique, like your story."
   - Helper text: "The colors you choose will be visible to all recipients"
   
   Section 3 - The Recipients:
   - Label: "Who will receive this Wampum?"
   - Helper text: "You'll keep your bead, and they'll receive a copy. Gratitude spreads, ownership remains."
   - Add button: "Add Recipient"
   - Max recipients message: "You can add up to [maxSupply] recipients"
   
   Section 4 - The Ceremony (collapsible):
   - Label: "How should this Wampum be shared?"
   - Allow propagation toggle:
     * Label: "Allow others to share this Wampum"
     * Description: "When enabled, recipients can share this Wampum with others, allowing gratitude to spread through networks."
     * Default: Enabled
   - Max supply slider:
     * Label: "Maximum number of copies"
     * Description: "How many people can receive this Wampum? (Including initial recipients)"
     * Default: 10, Max: 100
   - Media URI:
     * Label: "Media URI (optional)"
     * Helper: "Link to an image, artwork, or ceremony photo that represents this Wampum (IPFS, HTTP, etc.)"
   
   Section 5 - Review & Create:
   - Heading: "Review Your Wampum"
   - Preview: Large WampumBeadDisplay
   - Summary: List of settings (story length, recipients count, max supply, etc.)
   - Submit button: "Create Wampum" (CeremonyButton, primary, large)

4. ERROR MESSAGES:
   - Story too short: "Your story needs at least 10 characters. Share more about your gratitude."
   - Story too long: "Your story is too long. Please keep it under 2000 characters."
   - Invalid address: "This address is invalid. Please check and try again."
   - Max recipients: "You've reached the maximum number of recipients for this Wampum."
   - Max supply too low: "Maximum supply must be at least equal to the number of recipients."

5. SUCCESS MESSAGE:
   - Heading: "Your Wampum Has Been Created!"
   - Message: "Your story of gratitude is now on the blockchain. Share it with others and watch gratitude spread like fire."
   - Action: "View Your Wampum" (link to detail page)
```

### Component Creation Prompts

#### CreateWampumForm Component

```
Create a comprehensive React form component for creating new Wampum.

TECHNICAL REQUIREMENTS:
- File: packages/nextjs/components/forms/CreateWampumForm.tsx
- TypeScript with proper interfaces
- "use client" directive
- React Hook Form for form management
- Zod for validation schema
- useScaffoldWriteContract for contract interaction

FORM STRUCTURE:
1. Story Input (required):
   - Large textarea (min-h-32)
   - Character count display
   - Validation: min 10, max 2000 chars
   - Real-time validation

2. Bead Customization:
   - BeadCustomizer component
   - Live preview using WampumBeadDisplay
   - Visual symbol stored as hex color or pattern string

3. Recipients:
   - RecipientInput component
   - Dynamic list with add/remove
   - Validation: valid addresses, max = maxSupply

4. Ceremony Settings (collapsible):
   - Allow propagation toggle (default: true)
   - Max supply slider (default: 10, max: 100)
   - Media URI input (optional, URL validation)

5. Review & Submit:
   - Preview of Wampum bead
   - Summary of all settings
   - Gas estimate display
   - Submit button (CeremonyButton)

VALIDATION SCHEMA (Zod):
- story: z.string().min(10).max(2000)
- maxSupply: z.number().min(1).max(100)
- initialRecipients: z.array(z.string().regex(/^0x[a-fA-F0-9]{40}$/))
- visualSymbol: z.string().optional()
- mediaUri: z.string().url().optional().or(z.literal(""))
- canPropagate: z.boolean().default(true)
- transferable: z.boolean().default(false)

CONTRACT INTEGRATION:
- Function: createKudos
- Parameters: story, maxSupply, initialRecipients, visualSymbol, mediaUri, canPropagate, transferable
- Handle loading state during transaction
- Handle success: Get tokenId, redirect to /wampum/[tokenId]
- Handle errors: Display user-friendly messages

STYLING:
- Warm, ceremonial feeling
- Large, comfortable inputs
- Clear visual hierarchy
- Responsive design
- Dark/light mode support
```

#### BeadCustomizer Component

```
Create a component for customizing Wampum bead appearance.

TECHNICAL REQUIREMENTS:
- File: packages/nextjs/components/forms/BeadCustomizer.tsx
- TypeScript
- "use client" directive
- Props: value (string, optional), onChange (function), className (string, optional)

DESIGN SPECIFICATIONS:
- Color palette swatches (6 colors from Wampum palette):
  * Deep purple-blue: #5B4B8A
  * Soft lavender: #8B7BA8
  * Warm coral: #D4A574
  * Sea green: #6B9A8A
  * Forest green: #4A7C59
  * Golden amber: #C9A961
- Swatch grid: grid grid-cols-3 md:grid-cols-6 gap-4
- Each swatch: w-16 h-16 rounded-full cursor-pointer border-2 border-base-300 hover:scale-110 transition-transform
- Selected state: border-primary border-4
- Live preview: WampumBeadDisplay component showing selected color
- Optional: Pattern selector (stripes, dots, waves) - can be CSS patterns or SVG

INTEGRATION:
- Integrates with CreateWampumForm
- Updates visualSymbol value on change
- Shows live preview in real-time
```

#### RecipientInput Component

```
Create a component for inputting multiple recipient addresses.

TECHNICAL REQUIREMENTS:
- File: packages/nextjs/components/forms/RecipientInput.tsx
- TypeScript
- "use client" directive
- React Hook Form integration (useFieldArray)
- Props: name (string for RHF), maxRecipients (number), className (string, optional)

DESIGN SPECIFICATIONS:
- Dynamic list of address inputs
- Each input: @scaffold-ui/components AddressInput
- Add button: "Add Recipient" (secondary CeremonyButton)
- Remove button: X icon on each address
- Validation: viem's isAddress function
- ENS resolution: Optional, async (can show loading state)
- Max recipients: Disable add button when reached
- Error display: Clear, gentle error messages below each input

STYLING:
- Warm, inviting design
- Clear visual separation between addresses
- Responsive layout
- Dark/light mode support
```

---

## 🎁 Page 3: Share Wampum Page - "Pass the Gift"

### Design Prompt

```
Create a warm, gift-giving interface for sharing/propagating Wampum to new recipients. The page should feel like giving a meaningful gift, not executing a transaction.

VISUAL DESIGN REQUIREMENTS:
- Page container: flex flex-col items-center min-h-screen pt-10 pb-16 px-5
- Max width: max-w-3xl for form content
- Background: Warm, inviting (subtle gradient or base-200)
- Bead preview: Prominent WampumBeadDisplay at top
- Form: Clean, focused, gift-giving feeling
- Success: Celebration animation (confetti, glow)

LAYOUT STRUCTURE:
1. Breadcrumb Navigation (top, mb-8)
   - Home → Wampum Detail → Share
   - Link back to detail page

2. Page Header (centered, mb-8)
   - Heading: "Share This Wampum" (h1, 4xl, bold)
   - Subtitle: Warm explanation of propagation

3. Bead Preview (centered, mb-8)
   - Large WampumBeadDisplay (size: 200px)
   - Story preview (optional, truncated)

4. Explanation Section (mb-8)
   - Warm explanation of propagation model
   - Generation indicator

5. Form Container (bg-base-100, rounded-2xl, shadow-lg, p-8)
   - RecipientInput component
   - Max supply check
   - Gas estimate
   - Submit button

6. Success State
   - Celebration animation
   - Success message
   - Redirect to detail page
```

### Marketing Copy Prompt

```
Write marketing copy for the Share Wampum page that emphasizes gift-giving and gratitude spreading.

1. PAGE HEADER:
   - Heading: "Share This Wampum"
     * Action: "Share" (not "Send" or "Transfer")
     * Personal: "This" (specific, meaningful)
   
   - Alternative heading: "Pass the Gift"
     * More ceremonial, gift-focused
     * Emphasizes giving, not transferring

2. EXPLANATION SECTION:
   Write a warm, clear explanation:
   "When you share a Wampum, you keep your bead and the recipient receives their own copy. Gratitude spreads, ownership remains. This is the magic of propagation - your appreciation multiplies without diminishing your own."
   
   Key points to include:
   - You keep your bead (no loss)
   - Recipient gets their own copy (multiplication)
   - Gratitude spreads (emotional benefit)
   - Ownership remains (technical clarity)
   - Magic of propagation (wonder, not transaction)

3. GENERATION INDICATOR:
   - Label: "Generation"
   - Description: "New recipients will be generation [X], [Y] hops from the original creator."
   - Helper: "Each share creates a new generation, showing how gratitude spreads through networks."

4. FORM LABELS:
   - Recipients label: "Who will receive this Wampum?"
   - Helper text: "Add addresses of people you'd like to share your gratitude with. They'll receive their own copy of this Wampum."
   - Add button: "Add Recipient"
   - Max supply warning: "This Wampum can be shared with [remaining] more people."

5. MAX SUPPLY REACHED:
   - Message: "This Wampum has reached its maximum supply. No more copies can be created."
   - Tone: Informative, not error-like
   - Alternative: "This Wampum has been fully shared. All [maxSupply] copies have been created."

6. SUBMIT BUTTON:
   - Text: "Share Wampum"
   - Alternative: "Pass the Gift"
   - Loading: "Sharing..." or "Passing the gift..."
   - Success: "Wampum shared successfully!"

7. SUCCESS MESSAGE:
   - Heading: "Gratitude Shared!"
   - Message: "Your Wampum has been shared with [recipient count] recipient(s). They now have their own copy, and you've kept yours. Watch how gratitude spreads through the network."
   - Action: "View Updated Network" (link to detail page)
```

### Component Creation Prompts

#### ShareWampumForm Component

```
Create a React form component for sharing/propagating Wampum to new recipients.

TECHNICAL REQUIREMENTS:
- File: packages/nextjs/components/forms/ShareWampumForm.tsx
- TypeScript with proper interfaces
- "use client" directive
- React Hook Form for form management
- Zod for validation
- Props: tokenId (number, required), onSuccess (function, optional)

FORM STRUCTURE:
1. Bead Preview:
   - WampumBeadDisplay component (size: 200px)
   - Optional: Story preview (truncated)

2. Explanation Section:
   - Warm explanation of propagation model
   - Generation indicator (use useScaffoldReadContract to get current user's generation)

3. Recipients Input:
   - RecipientInput component
   - Validation: valid addresses, not self, not already holders

4. Max Supply Check:
   - useScaffoldReadContract to check currentSupply vs maxSupply
   - Display remaining slots
   - Prevent submission if max supply reached

5. Gas Estimate:
   - Display estimated gas cost
   - Warm styling

6. Submit Button:
   - CeremonyButton (primary, large)
   - Loading state during transaction
   - Disabled if max supply reached

CONTRACT INTEGRATION:
- Function: propagateKudos
- Parameters: tokenId, recipients array
- Handle loading state
- Handle success: Show celebration, redirect to /wampum/[tokenId]
- Handle errors: Display user-friendly messages

VALIDATION:
- Recipients: Array of valid addresses
- Not self: Cannot share with yourself
- Not duplicate: Cannot add same address twice
- Max supply: Check before submission

STYLING:
- Warm, gift-giving feeling
- Prominent bead preview
- Clear explanation
- Responsive design
- Dark/light mode support
```

---

## 🎨 Visual Design System Prompts

### Color Palette Implementation

```
Implement the Wampum color scheme in globals.css with complete semantic colors.

LIGHT MODE - "Dawn Shell":
- Primary: #5B4B8A (Deep purple-blue)
- Secondary: #D4A574 (Warm coral)
- Accent: #6B9A8A (Sea green)
- Base-100: #FFF8F0 (Soft cream)
- Base-200: #F5EDE0 (Warm beige)
- Base-300: #E8DDD0 (Light tan)
- Base-content: #3D2817 (Deep brown)
- Success: #4A7C59 (Forest green)
- Warning: #C9A961 (Amber)
- Error: #C97D7D (Soft red)
- Info: #5B8FA8 (Ocean blue)

DARK MODE - "Moonlit Shell":
- Primary: #8B7BA8 (Soft purple)
- Secondary: #E8B896 (Warm peach)
- Accent: #7BB3A3 (Teal)
- Base-100: #1A2332 (Deep navy)
- Base-200: #2A3441 (Slate blue)
- Base-300: #3A4450 (Dark slate)
- Base-content: #F5EDE0 (Warm cream)
- Success: #6B9A7A (Sage green)
- Warning: #E8C96B (Golden)
- Error: #E89B9B (Coral)
- Info: #7BB3C4 (Sky blue)

CUSTOM CSS VARIABLES:
- --wampum-shell-shine: rgba(255, 255, 255, 0.15) (light) / 0.1 (dark)
- --wampum-bead-shadow: 0 4px 12px rgba(primary, 0.2-0.3)
- --wampum-glow: 0 0 20px rgba(primary, 0.3-0.4)
```

### Typography System

```
Establish a warm, readable typography system for Wampum.

HEADINGS:
- h1: text-4xl md:text-5xl lg:text-6xl, font-bold, leading-tight
- h2: text-3xl md:text-4xl, font-bold, mb-4
- h3: text-2xl, font-bold, mb-4
- h4: text-xl, font-semibold, mb-2

BODY TEXT:
- Base: text-base (16px), leading-relaxed (1.7)
- Large: text-lg (18px), leading-relaxed (1.7)
- Small: text-sm (14px), leading-normal (1.5)

STORY TEXT:
- Size: text-lg (18px)
- Line height: leading-[1.7] (30.6px)
- Color: text-base-content
- Paragraph spacing: mb-4

BUTTON TEXT:
- Base: text-base, font-medium
- Large: text-lg, font-medium
- Small: text-sm, font-medium
```

### Animation Guidelines

```
Create gentle, organic animations for Wampum components.

PULSE ANIMATION:
- Duration: 3s
- Easing: ease-in-out
- Scale: 1.0 to 1.02
- Use for: Bead displays, loading states

GLOW EFFECT:
- Duration: 2s
- Easing: ease-in-out
- Opacity: 0.3 to 0.6
- Use for: Hover states, important elements

FADE IN:
- Duration: 300ms
- Easing: ease-in-out
- Opacity: 0 to 1
- Use for: Page transitions, modal appearances

SCALE ON HOVER:
- Duration: 300ms
- Easing: ease-in-out
- Scale: 1.0 to 1.02
- Use for: Cards, buttons, interactive elements

SUCCESS CELEBRATION:
- Confetti animation (optional library)
- Glow pulse on success element
- Gentle bounce on button
- Duration: 2-3s
```

---

## 📝 Copy Writing Checklist

### Tone & Voice

- [ ] Warm and inviting (not cold or transactional)
- [ ] Ceremonial and meaningful (not casual or flippant)
- [ ] Respectful of Wampum traditions (not appropriative)
- [ ] Gratitude-focused (not profit-focused)
- [ ] Community-building (not individualistic)
- [ ] Clear and accessible (not jargon-heavy)

### Word Choice

- [ ] Use "Share" not "Send" or "Transfer"
- [ ] Use "Gift" not "Token" or "NFT"
- [ ] Use "Bead" not "Token" or "Asset"
- [ ] Use "Weave" not "Create" or "Mint" (for stories)
- [ ] Use "Pass" not "Transfer" (for sharing)
- [ ] Use "Gratitude" not "Payment" or "Reward"
- [ ] Use "Community" not "Network" or "Marketplace"

### Emotional Triggers

- [ ] Connection and relationships
- [ ] Meaning and storytelling
- [ ] Gratitude and appreciation
- [ ] Community and belonging
- [ ] Ceremony and ritual
- [ ] Legacy and permanence

---

## 🚀 Implementation Workflow

### Step 1: Design First
1. Use design prompts to create visual mockups or wireframes
2. Review color scheme and typography
3. Test dark/light mode variations
4. Verify responsive breakpoints

### Step 2: Copy Second
1. Use marketing copy prompts to write all text
2. Review tone and voice consistency
3. Check for cultural respect
4. Verify emotional impact

### Step 3: Code Third
1. Use component creation prompts to build components
2. Integrate design and copy
3. Test functionality
4. Polish animations and interactions

### Step 4: Test & Refine
1. Test all user flows
2. Verify accessibility
3. Check responsive design
4. Review copy for clarity
5. Polish visual details

---

## 📚 Additional Resources

### Cultural References
- Wampum Wikipedia: https://en.wikipedia.org/wiki/Wampum
- Two Row Wampum Treaty: Historical context
- Indigenous storytelling traditions

### Design Inspiration
- Shell textures and patterns
- Nature-inspired color palettes
- Ceremonial and ritual aesthetics
- Community-focused design patterns

### Marketing References
- Gratitude journaling apps
- Community building platforms
- Gift-giving experiences
- Storytelling platforms

---

**Last Updated**: [Current Date]
**Status**: Ready for Implementation
**Version**: 1.0

