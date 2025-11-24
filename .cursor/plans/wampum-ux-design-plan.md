# Wampum - Gratitude Protocol UX Design Plan

## Executive Summary

This plan outlines a culturally-resonant, user-friendly interface for Wampum, a web3 gratitude protocol inspired by indigenous Wampum bead systems. The design honors the cultural significance of Wampum as a means of storytelling, ceremonial gifts, and recording important events, while creating a warm, welcoming experience for sharing gratitude through token-based propagation.

## Cultural Context & Design Philosophy

### Understanding Wampum

Wampum beads were:
- **Storytelling tools**: Used to record and share important narratives
- **Ceremonial gifts**: Given to honor relationships and agreements
- **Historical records**: Woven into belts to document treaties and events
- **Means of exchange**: Valued for their cultural and spiritual significance

### Design Principles

1. **Honor the Tradition**: Respect the cultural significance while adapting to web3
2. **Storytelling First**: Each Wampum bead (token) carries a meaningful story
3. **Ceremonial Warmth**: Create a sense of ceremony and importance around giving gratitude
4. **Visual Connection**: Use shell-like colors and organic patterns to evoke the physical beads
5. **Propagation as Gift-Giving**: Frame propagation as sharing gratitude, not transferring ownership
6. **Community Building**: Emphasize the network of relationships created through sharing

---

## Color Scheme: Wampum-Inspired Palette

### Light Mode - "Dawn Shell"

Inspired by the natural colors of quahog and whelk shells at sunrise:

- **Background**: `base-100` - Soft cream (#FFF8F0) - like bleached shell
- **Cards/Surfaces**: `base-200` - Warm beige (#F5EDE0) - like sand
- **Borders**: `base-300` - Light tan (#E8DDD0) - like weathered shell
- **Text Primary**: `base-content` - Deep brown (#3D2817) - like dark shell interior
- **Text Secondary**: `base-content/70` - Warm brown (#6B5B4A) - for secondary text

**Primary Colors** (Shell-inspired):
- **Primary**: Deep purple-blue (#5B4B8A) - like quahog shell interior
- **Primary Light**: Soft lavender (#8B7BA8) - for hover states
- **Secondary**: Warm coral (#D4A574) - like whelk shell
- **Accent**: Sea green (#6B9A8A) - like ocean-touched shell

**Semantic Colors**:
- **Success**: Forest green (#4A7C59) - growth and gratitude
- **Warning**: Amber (#C9A961) - like golden shell
- **Error**: Soft red (#C97D7D) - gentle, not harsh
- **Info**: Ocean blue (#5B8FA8) - like deep water

### Dark Mode - "Moonlit Shell"

Inspired by shells under moonlight:

- **Background**: `base-100` - Deep navy (#1A2332) - like night sky over water
- **Cards/Surfaces**: `base-200` - Slate blue (#2A3441) - like moonlit sand
- **Borders**: `base-300` - Dark slate (#3A4450) - subtle separation
- **Text Primary**: `base-content` - Warm cream (#F5EDE0) - like moonlit shell
- **Text Secondary**: `base-content/70` - Soft beige (#C9BFA8) - for secondary text

**Primary Colors** (Adjusted for dark):
- **Primary**: Soft purple (#8B7BA8) - luminous in dark
- **Primary Light**: Lavender (#A89BC4) - for hover states
- **Secondary**: Warm peach (#E8B896) - like shell in firelight
- **Accent**: Teal (#7BB3A3) - like bioluminescent water

**Semantic Colors** (Adjusted for dark):
- **Success**: Sage green (#6B9A7A) - growth in darkness
- **Warning**: Golden (#E8C96B) - like candlelight
- **Error**: Coral (#E89B9B) - soft warning
- **Info**: Sky blue (#7BB3C4) - like starlight

### Color Usage Guidelines

- **Primary**: Use for main CTAs, important elements, and Wampum bead indicators
- **Secondary**: Use for accents, highlights, and decorative elements
- **Accent**: Use for interactive elements and propagation indicators
- **Organic Patterns**: Consider subtle shell-like patterns or textures in backgrounds
- **Gradient Overlays**: Use warm gradients (coral to purple) for special moments

### Complete Color Implementation

**File**: `packages/nextjs/styles/globals.css`

**Action**: Replace the existing `@plugin "daisyui/theme"` blocks with the complete Wampum color scheme below. This includes all semantic colors, neutral colors, and maintains compatibility with DaisyUI's theme system.

**Complete Light Mode Theme**:
```css
@plugin "daisyui/theme" {
  name: "light";

  /* Primary Colors - Shell-inspired */
  --color-primary: #5B4B8A;
  --color-primary-content: #F5EDE0;
  --color-secondary: #D4A574;
  --color-secondary-content: #3D2817;
  --color-accent: #6B9A8A;
  --color-accent-content: #F5EDE0;

  /* Base Colors - Shell and sand tones */
  --color-base-100: #FFF8F0;
  --color-base-200: #F5EDE0;
  --color-base-300: #E8DDD0;
  --color-base-content: #3D2817;

  /* Neutral Colors */
  --color-neutral: #3D2817;
  --color-neutral-content: #F5EDE0;

  /* Semantic Colors - Nature-inspired */
  --color-success: #4A7C59;
  --color-success-content: #F5EDE0;
  --color-warning: #C9A961;
  --color-warning-content: #3D2817;
  --color-error: #C97D7D;
  --color-error-content: #F5EDE0;
  --color-info: #5B8FA8;
  --color-info-content: #F5EDE0;

  /* UI Elements */
  --radius-field: 9999rem;
  --radius-box: 1rem;
  --tt-tailw: 6px;
}
```

**Complete Dark Mode Theme**:
```css
@plugin "daisyui/theme" {
  name: "dark";

  /* Primary Colors - Luminous in dark */
  --color-primary: #8B7BA8;
  --color-primary-content: #F5EDE0;
  --color-secondary: #E8B896;
  --color-secondary-content: #1A2332;
  --color-accent: #7BB3A3;
  --color-accent-content: #F5EDE0;

  /* Base Colors - Night sky and moonlit sand */
  --color-base-100: #1A2332;
  --color-base-200: #2A3441;
  --color-base-300: #3A4450;
  --color-base-content: #F5EDE0;

  /* Neutral Colors */
  --color-neutral: #F5EDE0;
  --color-neutral-content: #1A2332;

  /* Semantic Colors - Adjusted for dark */
  --color-success: #6B9A7A;
  --color-success-content: #F5EDE0;
  --color-warning: #E8C96B;
  --color-warning-content: #1A2332;
  --color-error: #E89B9B;
  --color-error-content: #F5EDE0;
  --color-info: #7BB3C4;
  --color-info-content: #F5EDE0;

  /* UI Elements */
  --radius-field: 9999rem;
  --radius-box: 1rem;
  --tt-tailw: 6px;
  --tt-bg: var(--color-primary);
}
```

**Implementation Steps**:
1. Open `packages/nextjs/styles/globals.css`
2. Keep the existing `@plugin "daisyui"` block at the top (lines 10-14)
3. Replace ONLY the two `@plugin "daisyui/theme"` blocks (lines 16-39 and 41-66) with the complete themes above
4. Keep all other CSS rules (the `@layer base` section, `.btn`, `.link` styles, etc.)
5. Test both light and dark modes after implementation

**Important Notes**:
- The semantic colors (success, warning, error, info) are now included and will work with DaisyUI's alert, badge, and other semantic components
- All colors maintain proper contrast ratios for accessibility
- The `-content` colors are chosen to ensure readable text on their respective backgrounds

**Optional: Custom Wampum Variables**

For advanced customization, you can add these custom CSS variables after the theme definitions:

```css
:root,
[data-theme="light"] {
  --wampum-shell-shine: rgba(255, 255, 255, 0.15);
  --wampum-bead-shadow: 0 4px 12px rgba(91, 75, 138, 0.2);
  --wampum-glow: 0 0 20px rgba(91, 75, 138, 0.3);
}

[data-theme="dark"] {
  --wampum-shell-shine: rgba(255, 255, 255, 0.1);
  --wampum-bead-shadow: 0 4px 12px rgba(139, 123, 168, 0.3);
  --wampum-glow: 0 0 20px rgba(139, 123, 168, 0.4);
}
```

These can be used in components for shell-like shine effects, bead shadows, and glow animations.

### Quick Start Implementation Checklist

Before building components, complete these setup steps:

- [ ] Update `globals.css` with complete Wampum color scheme (see above)
- [ ] Test theme switching (light/dark) using the theme toggle
- [ ] Verify semantic colors work with DaisyUI components (create test alerts/badges)
- [ ] Check contrast ratios for accessibility (use browser dev tools or online tools)
- [ ] Verify all base colors render correctly in both themes
- [ ] Test buttons, cards, and text elements for proper color application

### Color Testing Guide

After implementing the color scheme, test these specific components:

1. **Buttons**: Create test buttons with `btn-primary`, `btn-secondary`, `btn-accent` classes
2. **Alerts**: Test `alert-success`, `alert-warning`, `alert-error`, `alert-info`
3. **Cards**: Verify card backgrounds use `bg-base-200` correctly
4. **Text**: Check `text-base-content` has proper contrast on `bg-base-100`
5. **Borders**: Verify `border-base-300` provides subtle separation
6. **Interactive States**: Test hover states on buttons and links

Use browser dev tools to verify:
- Color values match the design system
- Contrast ratios meet WCAG AA standards (4.5:1 for text)
- Dark mode properly inverts all colors

---

## Page Structure & Design

### 1. Home Page - "The Sacred Fire" (`/`)

**Purpose**: Welcome users and explain Wampum's purpose with cultural respect

**Layout**:
- **Hero Section**: Large, warm illustration of Wampum beads or a ceremonial fire
  - Headline: "Share Gratitude That Spreads Like Fire"
  - Subheadline: "Honor relationships through Wampum - digital beads that carry stories and build community"
  - Prominent CTA: "Create Your First Wampum"
- **Story Section**: Brief explanation of Wampum's significance (respectful, educational)
- **Feature Cards**: Three cards explaining:
  - "Weave Your Story" - Create Wampum with meaningful narratives
  - "Share the Gift" - Propagate gratitude to others
  - "Build Community" - See how gratitude spreads through networks
- **Cultural Note**: Optional link to learn more about Wampum's history (respectful, educational)

**Visual Design**:
- Warm, inviting color scheme
- Organic, flowing shapes (no harsh edges)
- Subtle shell-like textures or patterns
- Illustration style: Respectful, warm, nature-inspired

**Key Components**:
- `WampumHero`: Large hero section with illustration and CTA
- `StorySection`: Educational content about Wampum
- `FeatureCards`: Three feature cards with icons
- `CulturalNote`: Optional educational link

---

### 2. My Wampum - "The Collection" (`/my-wampum`)

**Purpose**: User's personal collection of created and received Wampum

**Layout**:
- **Page Header**: "My Wampum Collection" with warm, welcoming tone
- **Two-Tab Interface**: 
  - "Beads I've Created" (with icon of hands giving)
  - "Beads I've Received" (with icon of hands receiving)
- **Grid View**: Wampum beads displayed as circular cards (like actual beads)
- **Empty States**: 
  - Created: "Your first Wampum bead awaits. Share a story of gratitude."
  - Received: "When someone shares a Wampum with you, it will appear here like a gift."
- **Filter/Search**: Optional, subtle, doesn't overwhelm

**Visual Design**:
- Beads displayed as circular cards with shell-like colors
- Each bead shows a preview of the story
- Visual symbol (color/pattern) prominently displayed
- Warm, collection-like feeling (like a string of beads)

**Key Components**:
- `WampumBeadCard`: Circular card component (bead-shaped)
- `CollectionHeader`: Page header with tabs
- `EmptyState`: Warm, encouraging empty states
- `BeadString`: Visual representation of connected beads (optional)

---

### 3. Create Wampum - "Weave Your Story" (`/create`)

**Purpose**: Ceremonial-feeling form to create new Wampum

**Layout**:
- **Page Header**: "Weave Your Wampum Story" with ceremonial tone
- **Form Steps** (or single page with clear sections):
  1. **The Story** (required):
     - Large textarea: "What story of gratitude do you want to share?"
     - Character count with gentle encouragement
     - Placeholder: "Share the story behind your gratitude..."
  
  2. **The Bead** (visual customization):
     - "Choose your bead's appearance"
     - Color picker with shell-inspired palette
     - Pattern selector (optional): Simple patterns inspired by Wampum belts
     - Live preview of the bead
  
  3. **The Recipients**:
     - "Who will receive this Wampum?"
     - Address input with add/remove
     - Max recipients based on max supply
     - Explanation: "You'll keep your bead, and they'll receive a copy"
  
  4. **The Ceremony** (settings):
     - "How should this Wampum be shared?"
     - Allow propagation toggle (default: true) with explanation
     - Max supply slider (default: 10, max: 100)
     - Media URI (optional): For images, artwork, or ceremony photos
  
  5. **Review & Create**:
     - Preview of the Wampum bead
     - Summary of settings
     - "Create Wampum" button (ceremonial-feeling)

**Visual Design**:
- Warm, ceremonial feeling
- Step-by-step with visual progress
- Large, comfortable form fields
- Shell-inspired color picker
- Bead preview that looks like an actual bead

**Key Components**:
- `CreateWampumForm`: Main form component
- `StoryInput`: Large, comfortable textarea
- `BeadCustomizer`: Color and pattern selector
- `RecipientInput`: Address input with warm styling
- `CeremonySettings`: Settings panel with explanations
- `BeadPreview`: Live preview of the Wampum bead

---

### 4. Wampum Detail - "The Story Unfolded" (`/wampum/[tokenId]`)

**Purpose**: Full view of a Wampum bead with its story and propagation network

**Layout**:
- **Header Section**:
  - Large bead visualization (circular, with chosen colors/pattern)
  - Full story text (beautifully formatted)
  - Creator information with ENS resolution
  - Creation date (formatted nicely)
  
- **The Journey** (propagation network):
  - Visual representation of how the Wampum has spread
  - Tree or network visualization showing connections
  - Each node represents a person who received it
  - Generation indicators (how many hops from creator)
  - Highlight user's position if they hold it
  
- **The Story** (propagation timeline):
  - Chronological list of who shared with whom
  - Timestamps (relative: "2 days ago")
  - Visual flow showing the path
  
- **Actions**:
  - "Share This Wampum" button (if holder) - prominent, warm
  - "Settings" button (if creator) - for propagation settings
  - "Share Story" button - for social media

**Visual Design**:
- Bead prominently displayed at top
- Story takes center stage
- Network visualization uses warm, organic colors
- Timeline feels like a journey
- Actions are clear and inviting

**Key Components**:
- `WampumBeadDisplay`: Large, beautiful bead visualization
- `StoryDisplay`: Formatted story text
- `PropagationNetwork`: Visual network/tree
- `PropagationTimeline`: Chronological list
- `WampumActions`: Action buttons

---

### 5. Share Wampum - "Pass the Gift" (`/wampum/[tokenId]/share`)

**Purpose**: Simple, ceremonial-feeling interface to propagate Wampum

**Layout**:
- **Header**: "Share This Wampum" with warm tone
- **Bead Preview**: Show the Wampum being shared
- **Explanation**: "When you share a Wampum, you keep your bead and the recipient receives their own copy. Gratitude spreads, ownership remains."
- **Recipients**:
  - Address input for multiple recipients
  - Add/remove functionality
  - Validation and ENS resolution
- **Review**:
  - Summary of what will happen
  - Gas estimate
  - "Share Wampum" button (ceremonial-feeling)
- **Success**: Celebration animation, redirect to detail page

**Visual Design**:
- Warm, gift-giving feeling
- Clear explanation of propagation model
- Bead visualization
- Success state feels celebratory

**Key Components**:
- `ShareWampumForm`: Main form
- `RecipientInput`: Address input
- `SharePreview`: Summary of action
- `SuccessAnimation`: Celebration on success

---

### 6. Network Explorer - "The Web of Gratitude" (`/network`)

**Purpose**: Visual exploration of all Wampum and their connections

**Layout**:
- **Interactive Graph**: 
  - All Wampum beads as nodes
  - Connections show propagation relationships
  - Organic, flowing layout (not rigid grid)
  - Click nodes to see details
  
- **Controls**:
  - Filter by creator, date, reach
  - Search functionality
  - Zoom, pan controls
  - View options (network, timeline, etc.)

**Visual Design**:
- Organic, web-like visualization
- Warm colors throughout
- Beads as nodes
- Flowing connections
- Feels like a living network

**Key Components**:
- `NetworkGraph`: Interactive visualization
- `GraphControls`: Filter and view controls
- `NodeDetails`: Popup on click/hover

---

### 7. Profile - "The Keeper's Story" (`/profile/[address]`)

**Purpose**: View any user's Wampum activity

**Layout**:
- **Header**:
  - Address with ENS resolution
  - Avatar (if ENS)
  - Stats: Created count, Received count, Total reach
  
- **Collection**:
  - Created Wampum list
  - Received Wampum list
  - Propagation activity timeline

**Visual Design**:
- Warm, personal feeling
- Stats displayed beautifully
- Collection shown as beads
- Timeline shows journey

**Key Components**:
- `ProfileHeader`: Address, stats, avatar
- `WampumCollection`: List of beads
- `ActivityTimeline`: Chronological activity

---

## Component Library

### Core Wampum Components

#### `WampumBeadCard`
Circular card component that looks like a Wampum bead.

**Props**:
```typescript
interface WampumBeadCardProps {
  tokenId: number
  story: string
  creator: string
  visualSymbol?: string  // Color/pattern
  currentSupply: number
  maxSupply: number
  onClick?: () => void
  variant?: 'compact' | 'full' | 'preview'
  size?: 'sm' | 'md' | 'lg'
}
```

**Design**:
- Circular shape (like a bead)
- Shell-inspired colors
- Story preview on hover or click
- Visual symbol prominently displayed
- Warm shadows and highlights

#### `WampumBeadDisplay`
Large, beautiful visualization of a single Wampum bead.

**Props**:
```typescript
interface WampumBeadDisplayProps {
  tokenId: number
  visualSymbol?: string
  size?: number  // Diameter in pixels
  className?: string
}
```

**Design**:
- Large circular display
- Shell-like colors and patterns
- Subtle shine/gloss effect
- Responsive sizing

#### `PropagationNetwork`
Visual network showing how Wampum has spread.

**Props**:
```typescript
interface PropagationNetworkProps {
  tokenId: number
  propagationHistory: PropagationRecord[]
  currentUser?: string
}
```

**Design**:
- Organic, tree-like or web-like layout
- Warm colors for nodes and connections
- Interactive: click nodes for details
- Highlights current user's position
- Flowing, natural feel

#### `StoryDisplay`
Beautifully formatted story text.

**Props**:
```typescript
interface StoryDisplayProps {
  story: string
  maxLength?: number
  showReadMore?: boolean
  variant?: 'preview' | 'full'
}
```

**Design**:
- Warm typography
- Comfortable line height
- Read more/less functionality
- Respectful formatting

#### `CeremonyButton`
Ceremonial-feeling button for important actions.

**Props**:
```typescript
interface CeremonyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
}
```

**Design**:
- Warm, inviting colors
- Slightly rounded, organic shape
- Subtle glow on hover
- Loading state with gentle animation

---

## Visual Design Elements

### Typography
- **Headings**: Warm, readable serif or rounded sans-serif
- **Body**: Comfortable, readable sans-serif
- **Story Text**: Slightly larger, comfortable line height
- **Cultural Notes**: Italic, respectful tone

### Icons
- Use nature-inspired, organic icons
- Hands giving/receiving for propagation
- Shell, bead, or fire icons for Wampum
- Warm, rounded icon style

### Patterns & Textures
- Subtle shell-like patterns in backgrounds
- Organic, flowing shapes (no harsh edges)
- Warm gradients (coral to purple)
- Soft shadows and highlights

### Animations
- Gentle, organic animations
- Bead creation: gentle pulse or glow
- Propagation: flowing animation
- Success: warm celebration
- No jarring or harsh animations

---

## User Flows

### Flow 1: Create and Share Wampum
1. User lands on home page, feels welcomed
2. Clicks "Create Your First Wampum"
3. Enters story of gratitude (ceremonial feeling)
4. Customizes bead appearance (color, pattern)
5. Adds recipients
6. Reviews and creates
7. Sees success celebration
8. Redirects to Wampum detail page
9. Can immediately share with more people

### Flow 2: Receive and Share Wampum
1. User receives Wampum (notified or discovers in collection)
2. Views Wampum detail page
3. Reads story and sees network
4. Feels moved to share
5. Clicks "Share This Wampum"
6. Adds new recipients
7. Reviews and shares
8. Sees success and updated network

### Flow 3: Explore the Network
1. User navigates to Network Explorer
2. Sees beautiful web of connections
3. Clicks interesting Wampum node
4. Views detail page
5. Explores propagation network
6. Discovers other users
7. Clicks profile link
8. Views their collection

---

## Accessibility & Inclusivity

- **Cultural Respect**: Always honor the cultural significance
- **Accessibility**: WCAG 2.1 AA compliance
- **Language**: Clear, warm, inclusive language
- **Visual**: Support for colorblind users (use patterns, not just color)
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and semantic HTML

---

## Implementation Priority

### Phase 1: Core Ceremony (MVP)
1. Home page with warm welcome
2. Create Wampum form (ceremonial feeling)
3. Wampum detail page
4. Basic propagation
5. My Wampum collection with empty states

### Phase 2: The Network
1. Propagation network visualization
2. Profile pages
3. Network explorer
4. Advanced filtering

### Phase 3: The Community
1. Animations and transitions
2. Performance optimizations
3. Advanced accessibility
4. Cultural education resources

---

## Key Technical Decisions

1. **State Management**: React Query for server state, local state for UI
2. **Event Listening**: `useScaffoldEventHistory` and `useScaffoldWatchContractEvent` for real-time updates
3. **Form Validation**: React Hook Form with Zod validation
4. **Network Visualization**: D3.js or vis.js with organic layouts
5. **Image Handling**: Next.js Image component with IPFS gateway fallback
6. **Error Handling**: Warm, helpful error messages
7. **Color System**: CSS variables for easy theme customization

---

## Success Metrics

- Time to create first Wampum < 2 minutes
- Propagation rate (how many Wampum get shared)
- User retention (returning users)
- Network growth (new Wampum created per day)
- Error rate (failed transactions)
- User satisfaction with ceremonial feeling

---

## Cultural Considerations

- Always respect the cultural significance of Wampum
- Provide educational resources (optional, not forced)
- Use warm, respectful language
- Avoid appropriation - focus on inspiration and respect
- Consider consulting with indigenous communities
- Make it clear this is inspired by, not a replacement for, traditional Wampum

