# Wampum Component Development Prompts

This document contains detailed prompts for building each component in the Wampum dApp. Each prompt is designed to create components that honor the cultural significance of Wampum while providing a warm, ceremonial, gratitude-focused experience.

---

## Layout Components

### WampumHero Component

**File**: `packages/nextjs/components/layout/WampumHero.tsx`

**Prompt**:
Create a WampumHero component for the Wampum dApp home page that creates a warm, welcoming, ceremonial feeling. The component should:

- Display a large, beautiful illustration or icon inspired by Wampum beads, a ceremonial fire, or nature (use Heroicons or create a custom SVG)
- Include a main headline: "Share Gratitude That Spreads Like Fire" in warm, readable typography
- Include a subheadline: "Honor relationships through Wampum - digital beads that carry stories and build community"
- Feature a prominent "Create Your First Wampum" CTA button with ceremonial styling (warm colors, subtle glow, organic shape)
- Use the Wampum color scheme: deep purple-blue primary (#5B4B8A in light mode, #8B7BA8 in dark mode) with warm coral accentsWapum
- Be fully responsive (mobile-first)
- Support dark/light mode using the Wampum color palette
- Have an organic, flowing design (no harsh edges)
- Include subtle shell-like textures or patterns in the background (optional)

**Technical Requirements**:
- Use Next.js App Router (client component with "use client")
- Use Tailwind CSS with DaisyUI classes, customized with Wampum colors
- Ensure proper semantic HTML (h1, p, etc.)
- Include proper ARIA labels for accessibility
- Use warm gradients for visual interest

**Props**:
```typescript
interface WampumHeroProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}
```

**Color Usage**:
- Background: Use warm cream (#FFF8F0) in light mode, deep navy (#1A2332) in dark mode
- Primary CTA: Use deep purple-blue (#5B4B8A) in light mode, soft purple (#8B7BA8) in dark mode
- Accents: Use warm coral (#D4A574) for highlights

---

### EmptyState Component (Wampum Variant)

**File**: `packages/nextjs/components/wampum/EmptyState.tsx`

**Prompt**:
Create an EmptyState component specifically for Wampum that guides users with warmth and ceremony. The component should:

- Accept a variant prop to show different messages and CTAs
- Display a friendly, nature-inspired icon (use Heroicons: Heart, Gift, Inbox, or create custom Wampum bead icon)
- Show clear, encouraging messaging with warm, ceremonial language
- Include a prominent CTA button with ceremonial styling
- Use Wampum color scheme throughout
- Be visually consistent with the rest of the app
- Support dark/light mode
- Be fully responsive
- Have an organic, warm feeling (no harsh edges)

**Variants**:
1. **"no-created"**: For when user hasn't created any Wampum
   - Message: "Your first Wampum bead awaits. Share a story of gratitude and begin weaving your collection."
   - CTA: "Create Your First Wampum" → `/create`
   - Icon: Heart, Gift, or hands giving icon
   - Tone: Warm, inviting, ceremonial

2. **"no-received"**: For when user hasn't received any Wampum
   - Message: "When someone shares a Wampum with you, it will appear here like a gift. Your collection will grow as gratitude spreads."
   - CTA: "Explore Network" → `/network` or "Learn About Wampum" link
   - Icon: Inbox, receiving hands, or gift icon
   - Tone: Welcoming, patient, educational

3. **"no-results"**: For filtered/search views with no results
   - Message: "No Wampum match your search. Try adjusting your filters to discover more stories of gratitude."
   - CTA: "Clear Filters" (calls onClick handler)
   - Icon: Magnifying glass or search icon
   - Tone: Helpful, guiding

**Technical Requirements**:
- Use TypeScript with proper typing
- Use Wampum color scheme (CSS variables or Tailwind config)
- Include proper accessibility attributes
- Make the icon size responsive
- Use warm, organic styling

**Props**:
```typescript
interface EmptyStateProps {
  variant: 'no-created' | 'no-received' | 'no-results'
  onClearFilters?: () => void  // For no-results variant
  className?: string
}
```

**Color Usage**:
- Background: Subtle warm beige (#F5EDE0) in light mode, slate blue (#2A3441) in dark mode
- Icon: Use primary color (#5B4B8A light, #8B7BA8 dark)
- Text: Use deep brown (#3D2817) in light mode, warm cream (#F5EDE0) in dark mode

---

## Wampum-Specific Components

### WampumBeadCard Component

**File**: `packages/nextjs/components/wampum/WampumBeadCard.tsx`

**Prompt**:
Create a WampumBeadCard component that displays Wampum information in a circular, bead-like card format. The component should:

- Display as a circular card (like an actual Wampum bead) with shell-inspired colors
- Show story preview (truncated to ~150 characters) that appears on hover or as overlay
- Display creator address using `@scaffold-ui/components` Address component
- Show propagation stats (current supply / max supply) as a subtle indicator
- Prominently display visual symbol (color/pattern) as the main visual element
- Display media thumbnail if mediaUri is provided (use Next.js Image component, circular crop)
- Support multiple variants: 'compact', 'full', 'preview'
- Support size variants: 'sm', 'md', 'lg' (diameter: 80px, 120px, 160px)
- Be clickable (onClick handler) to navigate to detail page
- Have warm hover effects (subtle glow, slight scale)
- Support dark/light mode using Wampum color scheme
- Be fully responsive
- Have organic, shell-like appearance with subtle shine/gloss effect

**Technical Requirements**:
- Use `useScaffoldReadContract` to fetch Wampum metadata if not provided as props
- Use `@scaffold-ui/components` Address component for addresses
- Use Next.js Image for media thumbnails with circular mask
- Implement truncation logic for story text
- Use CSS for circular shape and shell-like effects
- Include loading skeleton state (circular placeholder)
- Use warm shadows and highlights for depth

**Props**:
```typescript
interface WampumBeadCardProps {
  tokenId: number
  story?: string  // Optional, will fetch if not provided
  creator?: string  // Optional, will fetch if not provided
  currentSupply?: number
  maxSupply?: number
  visualSymbol?: string  // Color hex or pattern identifier
  mediaUri?: string
  onClick?: () => void
  variant?: 'compact' | 'full' | 'preview'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
```

**Design Details**:
- Circular shape with `border-radius: 50%`
- Shell-inspired gradient overlay (subtle)
- Warm shadow: `box-shadow: 0 4px 12px rgba(91, 75, 138, 0.2)`
- Hover: Slight scale (1.05) and increased glow
- Story preview: Appears as overlay on hover or as tooltip
- Visual symbol: Displayed as background color or pattern

**Color Usage**:
- Card background: Use visualSymbol color if provided, otherwise use primary color
- Border: Subtle warm tan (#E8DDD0) in light mode, dark slate (#3A4450) in dark mode
- Shadow: Warm purple tint
- Text: Contrasting color based on background

---

### WampumBeadDisplay Component

**File**: `packages/nextjs/components/wampum/WampumBeadDisplay.tsx`

**Prompt**:
Create a WampumBeadDisplay component that shows a large, beautiful visualization of a single Wampum bead. The component should:

- Display as a large circular element (like an actual Wampum bead)
- Use the visualSymbol (color/pattern) from the Wampum metadata
- Have a shell-like appearance with subtle shine/gloss effect
- Support custom sizing (diameter in pixels)
- Include subtle animation (optional: gentle pulse or glow)
- Support dark/light mode
- Be fully responsive
- Look like a precious, ceremonial object

**Technical Requirements**:
- Use `useScaffoldReadContract` to fetch visualSymbol if not provided
- Use CSS for circular shape and shell-like effects
- Implement gradient overlays for depth
- Use CSS animations for subtle effects (optional)
- Support both color (hex) and pattern (string identifier) visual symbols

**Props**:
```typescript
interface WampumBeadDisplayProps {
  tokenId: number
  visualSymbol?: string  // Color hex or pattern identifier
  size?: number  // Diameter in pixels, default: 200
  className?: string
  animated?: boolean  // Enable subtle pulse animation
}
```

**Design Details**:
- Large circular display with `border-radius: 50%`
- Shell-like gradient: Radial gradient from lighter center to darker edges
- Shine effect: Subtle linear gradient overlay (45deg, white with low opacity)
- Shadow: Warm, soft shadow with purple tint
- Animation (if enabled): Gentle pulse (scale 1.0 to 1.02) over 3 seconds
- Border: Subtle, warm border (optional)

**Color Usage**:
- Base: Use visualSymbol color, or default to primary color
- Gradient: Lighter version of base color in center, darker at edges
- Shine: White with 10-15% opacity
- Shadow: Base color with 20% opacity, blurred

---

### PropagationNetwork Component (Wampum Variant)

**File**: `packages/nextjs/components/wampum/PropagationNetwork.tsx`

**Prompt**:
Create a PropagationNetwork component that displays how Wampum has spread through the community. The component should:

- Display an organic, tree-like or web-like visualization (not rigid grid)
- Show each person who received the Wampum as a node (circular, like a bead)
- Connect nodes with flowing, organic lines (not straight)
- Use warm Wampum colors throughout
- Highlight the current user's position if they're in the network
- Show generation indicators (how many hops from creator) with visual distinction
- Be interactive: click nodes to see details
- Support dark/light mode
- Be fully responsive
- Feel like a living, growing network

**Technical Requirements**:
- Use `useScaffoldReadContract` to fetch propagation history
- Use D3.js or vis.js for network visualization
- Implement organic layout algorithm (force-directed or similar)
- Use Wampum color scheme for nodes and edges
- Include tooltip or popup on node click/hover
- Support zoom and pan
- Optimize for performance with many nodes

**Props**:
```typescript
interface PropagationNetworkProps {
  tokenId: number
  propagationHistory?: PropagationRecord[]  // Optional, will fetch if not provided
  currentUser?: string
  className?: string
}
```

**Design Details**:
- Nodes: Circular, like Wampum beads, sized by importance or generation
- Edges: Flowing, curved lines (not straight), warm colors
- Layout: Organic, force-directed or hierarchical tree
- Colors: 
  - Creator node: Primary color, larger
  - Generation 1: Secondary color
  - Generation 2+: Accent color, progressively lighter
  - Current user: Highlighted with glow
- Animation: Gentle, organic movement when loading

**Color Usage**:
- Creator node: Deep purple-blue (#5B4B8A light, #8B7BA8 dark)
- Generation 1: Warm coral (#D4A574)
- Generation 2+: Sea green (#6B9A8A), progressively lighter
- Edges: Warm, muted colors
- Current user highlight: Golden glow (#C9A961)

---

### StoryDisplay Component (Wampum Variant)

**File**: `packages/nextjs/components/wampum/StoryDisplay.tsx`

**Prompt**:
Create a StoryDisplay component that beautifully formats and displays Wampum story text. The component should:

- Display story text with warm, comfortable typography
- Support markdown formatting (optional, can use react-markdown)
- Implement "Read more/less" functionality for long stories
- Preserve line breaks and formatting
- Use warm Wampum colors for text
- Support dark/light mode
- Be fully responsive
- Feel ceremonial and respectful

**Technical Requirements**:
- Use a character limit (e.g., 500 chars) before showing "Read more"
- Smooth expand/collapse animation
- Proper text wrapping and comfortable line height (1.7-1.8)
- Accessible button for expand/collapse
- Support markdown if needed (react-markdown)

**Props**:
```typescript
interface StoryDisplayProps {
  story: string
  maxLength?: number  // Default: 500
  showReadMore?: boolean  // Default: true
  variant?: 'preview' | 'full'
  className?: string
}
```

**Design Details**:
- Typography: Comfortable sans-serif, 18px base size, 1.7 line height
- Colors: Deep brown (#3D2817) in light mode, warm cream (#F5EDE0) in dark mode
- Read more button: Warm, subtle, uses accent color
- Animation: Smooth height transition (300ms ease)

---

### CeremonyButton Component

**File**: `packages/nextjs/components/wampum/CeremonyButton.tsx`

**Prompt**:
Create a CeremonyButton component that provides a ceremonial-feeling button for important actions. The component should:

- Have warm, inviting colors from Wampum palette
- Use slightly rounded, organic shape (not perfectly rectangular)
- Include subtle glow effect on hover
- Support loading state with gentle animation
- Support disabled state with appropriate styling
- Support multiple variants (primary, secondary, accent)
- Support multiple sizes (sm, md, lg)
- Support dark/light mode
- Be fully responsive
- Feel important and ceremonial

**Technical Requirements**:
- Use TypeScript with proper typing
- Use Wampum color scheme
- Implement hover and focus states
- Include loading spinner (gentle, organic animation)
- Use DaisyUI button as base, customize with Wampum colors
- Ensure proper accessibility (ARIA labels, keyboard support)

**Props**:
```typescript
interface CeremonyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}
```

**Design Details**:
- Shape: Rounded corners (border-radius: 12px for md, scale for other sizes)
- Colors:
  - Primary: Deep purple-blue (#5B4B8A light, #8B7BA8 dark)
  - Secondary: Warm coral (#D4A574)
  - Accent: Sea green (#6B9A8A)
- Hover: Subtle glow (box-shadow with color tint), slight scale (1.02)
- Loading: Gentle pulse animation
- Disabled: Reduced opacity (0.5), no hover effects

---

## Form Components

### CreateWampumForm Component

**File**: `packages/nextjs/components/forms/CreateWampumForm.tsx`

**Prompt**:
Create a CreateWampumForm component for creating new Wampum with a ceremonial, warm feeling. The form should:

- Include a required story textarea with warm, comfortable styling and character count
- Have a "Choose your bead's appearance" section with:
  - Color picker using Wampum shell-inspired palette
  - Optional pattern selector (simple patterns inspired by Wampum belts)
  - Live preview of the bead (using WampumBeadDisplay component)
- Support adding multiple initial recipients using AddressInput
- Include collapsible "The Ceremony" settings panel:
  - Allow propagation toggle (default: true) with warm explanation
  - Max supply slider (default: 10, max: 100) with warm styling
  - Media URI input (optional) for images, artwork, or ceremony photos
- Show live preview of how the Wampum will look
- Display gas estimate with warm styling
- Show validation errors clearly but gently
- Support dark/light mode using Wampum colors
- Be fully responsive
- Feel ceremonial and important, not transactional

**Technical Requirements**:
- Use React Hook Form for form management
- Use Zod for validation schema
- Use `useScaffoldWriteContract` for contract interaction
- Use `@scaffold-ui/components` AddressInput
- Implement real-time validation
- Show loading states during transaction
- Display success modal with celebration after creation
- Use WampumBeadDisplay for preview
- Use CeremonyButton for submit button

**Validation Rules**:
- Story: Required, min 10 characters, max 2000 characters
- Max Supply: Required, min 1, max 100, must be >= number of initial recipients
- Initial Recipients: Array of valid addresses, max length = maxSupply
- Visual Symbol: Optional string (color hex or pattern identifier)
- Media URI: Optional, must be valid URL if provided

**Props**:
```typescript
interface CreateWampumFormProps {
  onSuccess?: (tokenId: number) => void
  className?: string
}
```

**Design Details**:
- Form sections with warm headers
- Large, comfortable textarea for story
- Color picker with Wampum palette swatches
- Bead preview prominently displayed
- Settings panel with warm explanations
- Success state: Celebration animation, warm message

---

### BeadCustomizer Component

**File**: `packages/nextjs/components/forms/BeadCustomizer.tsx`

**Prompt**:
Create a BeadCustomizer component that allows users to customize their Wampum bead's appearance. The component should:

- Display a color picker with Wampum shell-inspired palette (purple-blues, corals, sea greens)
- Include optional pattern selector (simple patterns inspired by Wampum belts: stripes, dots, waves)
- Show live preview of the bead (using WampumBeadDisplay)
- Use warm, inviting styling
- Support dark/light mode
- Be fully responsive

**Technical Requirements**:
- Use a color picker library (react-color or similar)
- Create pattern options as CSS or SVG
- Use WampumBeadDisplay for preview
- Store selection as hex color + optional pattern identifier

**Props**:
```typescript
interface BeadCustomizerProps {
  value?: string  // Color hex or pattern identifier
  onChange?: (value: string) => void
  className?: string
}
```

**Wampum Color Palette**:
- Deep purple-blue: #5B4B8A
- Soft lavender: #8B7BA8
- Warm coral: #D4A574
- Sea green: #6B9A8A
- Forest green: #4A7C59
- Golden amber: #C9A961

---

### ShareWampumForm Component

**File**: `packages/nextjs/components/forms/ShareWampumForm.tsx`

**Prompt**:
Create a ShareWampumForm component for propagating Wampum to new recipients. The form should:

- Pre-select the Wampum tokenId (from URL params or props)
- Show a warm explanation: "When you share a Wampum, you keep your bead and the recipient receives their own copy. Gratitude spreads, ownership remains."
- Display the Wampum bead being shared (using WampumBeadDisplay)
- Allow adding multiple recipient addresses
- Check if max supply is reached before allowing submission
- Show generation number that new recipients will receive
- Display gas estimate with warm styling
- Show validation errors gently
- Support dark/light mode
- Be fully responsive
- Feel like gift-giving, not a transaction

**Technical Requirements**:
- Use React Hook Form
- Use Zod validation
- Use `useScaffoldReadContract` to check max supply and current supply
- Use `useScaffoldWriteContract` for propagation
- Use RecipientInput component
- Show loading states
- Display success message with celebration
- Redirect to Wampum detail page on success
- Use CeremonyButton for submit

**Props**:
```typescript
interface ShareWampumFormProps {
  tokenId: number
  onSuccess?: () => void
  className?: string
}
```

---

## Page Components

### Home Page (Wampum)

**File**: `packages/nextjs/app/page.tsx`

**Prompt**:
Create the home page for the Wampum dApp. The page should:

- Use the WampumHero component
- Display a StorySection with brief, respectful explanation of Wampum's significance
- Show FeatureCards explaining key features:
  - "Weave Your Story" - Create Wampum with meaningful narratives
  - "Share the Gift" - Propagate gratitude to others
  - "Build Community" - See how gratitude spreads through networks
- Include optional CulturalNote link to learn more about Wampum's history (respectful, educational)
- Be fully responsive
- Support dark/light mode using Wampum color scheme
- Have a warm, welcoming, ceremonial design
- Use organic, flowing shapes throughout

**Note**: Do NOT include stats or recent Wampum feed - keep it focused on onboarding and ceremony.

---

### My Wampum Page

**File**: `packages/nextjs/app/my-wampum/page.tsx`

**Prompt**:
Create the My Wampum page that shows user's created and received Wampum. The page should:

- Use tabs to switch between "Beads I've Created" and "Beads I've Received"
- Use the useUserKudos hook to fetch user's Wampum
- Display Wampum using WampumBeadCard components in a grid (beads arranged like a string)
- Show EmptyState component when there are no Wampum (warm, encouraging)
- Include optional filter/search functionality (subtle, doesn't overwhelm)
- Support grid/list view toggle (optional for MVP)
- Be fully responsive
- Support dark/light mode using Wampum colors
- Feel like a personal collection, warm and inviting

---

### Create Wampum Page

**File**: `packages/nextjs/app/create/page.tsx`

**Prompt**:
Create the Create Wampum page. The page should:

- Use the CreateWampumForm component
- Include a warm page header: "Weave Your Wampum Story"
- Show helpful, ceremonial instructions or tips
- Be fully responsive
- Support dark/light mode using Wampum colors
- Redirect to Wampum detail page on successful creation
- Feel ceremonial and important, not transactional

---

### Wampum Detail Page

**File**: `packages/nextjs/app/wampum/[tokenId]/page.tsx`

**Prompt**:
Create the Wampum detail page. The page should:

- Use dynamic route parameter for tokenId
- Use WampumBeadDisplay component prominently at top
- Use StoryDisplay component to show full story
- Display stats using StatsBadge components (warm styling)
- Show media if available (using Next.js Image)
- Use PropagationNetwork component to show propagation network
- Use PropagationTimeline component to show chronological history
- Include action buttons:
  - "Share This Wampum" (CeremonyButton, if holder)
  - "Settings" (if creator, for propagation settings)
  - "Share Story" (for social media)
- Use useKudosMetadata and usePropagationNetwork hooks
- Be fully responsive
- Support dark/light mode using Wampum colors
- Handle loading and error states gracefully
- Feel warm, ceremonial, and story-focused

---

## Implementation Notes

### General Guidelines

1. **Always honor the cultural significance** of Wampum
2. **Use warm, ceremonial language** throughout
3. **Use Wampum color scheme** consistently
4. **Create organic, flowing designs** (no harsh edges)
5. **Support dark/light mode** using Wampum palette
6. **Make components responsive** (mobile-first)
7. **Include proper accessibility** (ARIA labels, keyboard navigation)
8. **Handle loading and error states** gracefully with warm messaging
9. **Use Scaffold-ETH 2 hooks** for contract interactions
10. **Create ceremonial feeling** in all interactions

### Color Implementation

Update `packages/nextjs/styles/globals.css` with Wampum color scheme:

```css
@plugin "daisyui/theme" {
  name: "light";
  
  --color-primary: #5B4B8A;
  --color-primary-content: #F5EDE0;
  --color-secondary: #D4A574;
  --color-secondary-content: #3D2817;
  --color-accent: #6B9A8A;
  --color-accent-content: #F5EDE0;
  --color-base-100: #FFF8F0;
  --color-base-200: #F5EDE0;
  --color-base-300: #E8DDD0;
  --color-base-content: #3D2817;
  /* ... other colors ... */
}

@plugin "daisyui/theme" {
  name: "dark";
  
  --color-primary: #8B7BA8;
  --color-primary-content: #F5EDE0;
  --color-secondary: #E8B896;
  --color-secondary-content: #1A2332;
  --color-accent: #7BB3A3;
  --color-accent-content: #F5EDE0;
  --color-base-100: #1A2332;
  --color-base-200: #2A3441;
  --color-base-300: #3A4450;
  --color-base-content: #F5EDE0;
  /* ... other colors ... */
}
```

### Complete Color Implementation Steps

**Before building any components**, implement the complete Wampum color scheme:

1. **Open** `packages/nextjs/styles/globals.css`

2. **Locate** the two `@plugin "daisyui/theme"` blocks (one for light, one for dark)

3. **Replace** both blocks with the complete themes provided in `wampum-ux-design-plan.md` under "Complete Color Implementation"

4. **Verify** the implementation:
   - Keep the `@plugin "daisyui"` block at the top unchanged
   - Keep all other CSS rules (`.btn`, `.link`, `@layer base`, etc.)
   - Only replace the theme color definitions

5. **Test** by:
   - Toggling between light and dark modes
   - Creating test components with semantic colors
   - Checking contrast ratios

**Why this matters**: The complete color scheme includes semantic colors (success, warning, error, info) that DaisyUI components use. Without these, alerts, badges, and other semantic components won't match the Wampum design system.

**Quick Reference**: See `wampum-ux-design-plan.md` section "Complete Color Implementation" for the full CSS code blocks.

### Component Development Checklist

For each component, ensure:

- [ ] TypeScript types defined
- [ ] Props interface documented
- [ ] Wampum color scheme used
- [ ] Dark/light mode support
- [ ] Responsive design
- [ ] Accessibility (ARIA labels, keyboard nav)
- [ ] Loading states
- [ ] Error handling with warm messages
- [ ] Proper use of Scaffold-ETH hooks
- [ ] Organic, flowing design (no harsh edges)
- [ ] Ceremonial, warm feeling
- [ ] Cultural respect maintained

---

## Cultural Considerations

- Always respect the cultural significance of Wampum
- Use warm, respectful language
- Provide optional educational resources (not forced)
- Avoid appropriation - focus on inspiration and respect
- Consider consulting with indigenous communities
- Make it clear this is inspired by, not a replacement for, traditional Wampum
- Honor the tradition while adapting to web3

