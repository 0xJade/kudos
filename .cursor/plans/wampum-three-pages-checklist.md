# 🐚 Wampum Three Pages Implementation Checklist

## 📋 Project Scope
Build **Home Page**, **Create Wampum Page**, and **Share Wampum Page** with all components, layouts, and copy.

**Slogan**: "Share Gratitude That Spreads Like Fire"

---

## 🎯 Phase 0: Prerequisites (Verify Complete)

### Foundation Check
- [x] Wampum color scheme implemented in `globals.css`
- [x] Custom CSS variables added (--wampum-glow, --wampum-bead-shadow, --wampum-shell-shine)
- [x] CeremonyButton component created and tested

**📍 Git Status**: Foundation complete - ready to build pages

---

## 📐 Phase 1: Layout Components (Home Page Foundation)

### 1.1 WampumHero Component
**File**: `packages/nextjs/components/layout/WampumHero.tsx`

**Checklist**:
- [ ] Create component file with TypeScript interface
- [ ] Add "use client" directive
- [ ] Implement props interface (title, subtitle, ctaText, ctaHref)
- [ ] Add hero section container with warm background
- [ ] **Copy/Language**: 
  - [ ] Headline: "Share Gratitude That Spreads Like Fire"
  - [ ] Subheadline: "Honor relationships through Wampum - digital beads that carry stories and build community"
  - [ ] CTA button text: "Create Your First Wampum"
- [ ] Add large icon/illustration (Heroicons SparklesIcon or FireIcon)
- [ ] Style with Wampum colors (primary, warm gradients)
- [ ] Add CeremonyButton with link to /create
- [ ] Make fully responsive (mobile-first)
- [ ] Test dark/light mode
- [ ] Add proper ARIA labels
- [ ] **📍 Git Commit**: `git commit -m "feat: add WampumHero component"`

**Backtrack Point**: If hero doesn't look right, revert this commit and adjust styling

---

### 1.2 StorySection Component
**File**: `packages/nextjs/components/layout/StorySection.tsx`

**Checklist**:
- [x] Create component file
- [x] Add "use client" directive
- [x] **Copy/Language**: Write respectful educational content about Wampum:
  - [x] Explain Wampum as storytelling tools
  - [x] Mention ceremonial gifts and historical records
  - [x] Connect to digital Wampum for gratitude
  - [x] Use warm, respectful tone (no appropriation)
- [x] Style with warm typography and Wampum colors
- [x] Add organic, flowing container styling
- [x] Make responsive
- [x] Test dark/light mode
- [x] **📍 Git Commit**: `git commit -m "feat: add StorySection component"`

**Status**: ✅ **COMPLETE** - Component created, styled, and integrated into home page
- Component file: `packages/nextjs/components/layout/StorySection.tsx`
- Export file: `packages/nextjs/components/layout/index.ts` (created for clean imports)

**Backtrack Point**: If copy needs adjustment, revert and rewrite

---

### 1.3 FeatureCards Component
**File**: `packages/nextjs/components/layout/FeatureCards.tsx`

**Checklist**:
- [x] Create component file
- [x] Add "use client" directive
- [x] Create responsive grid layout (1 col mobile, 3 col desktop)
- [x] **Card 1 - "Weave Your Story"**:
  - [x] Add DocumentTextIcon from Heroicons
  - [x] **Copy**: "Create Wampum with meaningful narratives that honor relationships and express gratitude"
  - [x] Style card with warm, organic styling
- [x] **Card 2 - "Share the Gift"**:
  - [x] Add GiftIcon from Heroicons
  - [x] **Copy**: "Propagate gratitude to others. When you share, you keep your bead while creating new ones for recipients"
  - [x] Style card with warm, organic styling
- [x] **Card 3 - "Build Community"**:
  - [x] Add UserGroupIcon from Heroicons
  - [x] **Copy**: "See how gratitude spreads through networks, building connections and strengthening community bonds"
  - [x] Style card with warm, organic styling
- [x] Add hover effects (subtle scale, glow)
- [x] Make fully responsive
- [x] Test dark/light mode
- [x] **📍 Git Commit**: `git commit -m "feat: add FeatureCards component"`

**Backtrack Point**: If cards need redesign, revert and rebuild

---

<!-- ### 1.4 CulturalNote Component (Optional)
**File**: `packages/nextjs/components/layout/CulturalNote.tsx`

**Checklist**:
- [ ] Create component file
- [ ] Add "use client" directive
- [ ] **Copy/Language**: 
  - [ ] Text: "Learn more about the history and significance of Wampum"
  - [ ] Link text: "Learn About Wampum"
  - [ ] Use respectful, educational tone
- [ ] Style as subtle, non-intrusive (small text, muted colors)
- [ ] Add link (can link to external resource or internal page)
- [ ] Make responsive
- [ ] Test dark/light mode
- [ ] **📍 Git Commit**: `git commit -m "feat: add CulturalNote component"`

**Backtrack Point**: If cultural note needs adjustment, revert and modify -->

---

## 🎨 Phase 2: Display Components (Reusable)

### 2.1 WampumBeadDisplay Component
**File**: `packages/nextjs/components/wampum/WampumBeadDisplay.tsx`

**Checklist**:
- [x] Create component file
- [x] Add "use client" directive
- [x] Implement TypeScript interface (tokenId, visualSymbol, size, animated, className)
- [x] Add useScaffoldReadContract hook to fetch visualSymbol if not provided
- [x] Create circular shape (border-radius: 50%)
- [x] Implement shell-like gradient (radial: lighter center to darker edges)
- [x] Add shine effect (linear gradient overlay, 45deg, white 10-15% opacity)
- [x] Add warm shadow using --wampum-bead-shadow CSS variable
- [x] Add optional pulse animation (scale 1.0 to 1.02, 3s duration)
- [x] Support custom sizing (diameter prop, default: 200px)
- [x] Support both color (hex) and pattern visual symbols
- [x] Make responsive
- [x] Test dark/light mode
- [x] Test with different visualSymbol values
- [x] **📍 Git Commit**: `git commit -m "feat: add WampumBeadDisplay component"`

**Backtrack Point**: If bead appearance needs adjustment, revert and refine styling

---

### 2.2 StoryDisplay Component
**File**: `packages/nextjs/components/wampum/StoryDisplay.tsx`

**Checklist**:
- [x] Create component file
- [x] Add "use client" directive
- [x] Implement TypeScript interface (story, maxLength, showReadMore, variant, className)
- [x] Add state for expanded/collapsed
- [x] Implement truncation logic (default: 500 chars)
- [x] Add "Read more" / "Read less" button
- [x] Implement smooth expand/collapse animation (300ms ease)
- [x] Style with warm typography (18px base, 1.7 line height)
- [x] Use Wampum text colors (base-content)
- [x] Make responsive
- [x] Test dark/light mode
- [x] Test with short and long stories
- [ ] **📍 Git Commit**: `git commit -m "feat: add StoryDisplay component"`

**Backtrack Point**: If read more/less needs adjustment, revert and refine

---

## 📝 Phase 3: Form Components (Create & Share)

### 3.1 BeadCustomizer Component
**File**: `packages/nextjs/components/forms/BeadCustomizer.tsx`

**Checklist**:
- [ ] Install color picker library: `yarn add react-color` (or similar)
- [ ] Create component file
- [ ] Add "use client" directive
- [ ] Implement TypeScript interface (value, onChange, className)
- [ ] Create Wampum color palette swatches:
  - [ ] Deep purple-blue: #5B4B8A
  - [ ] Soft lavender: #8B7BA8
  - [ ] Warm coral: #D4A574
  - [ ] Sea green: #6B9A8A
  - [ ] Forest green: #4A7C59
  - [ ] Golden amber: #C9A961
- [ ] Add color picker UI (swatches or full picker)
- [ ] Add optional pattern selector (stripes, dots, waves) - can be simple CSS patterns
- [ ] Integrate WampumBeadDisplay for live preview
- [ ] Style with warm, inviting design
- [ ] Make responsive
- [ ] Test dark/light mode
- [ ] **📍 Git Commit**: `git commit -m "feat: add BeadCustomizer component"`

**Backtrack Point**: If color picker needs adjustment, revert and try different library/approach

---

### 3.2 RecipientInput Component
**File**: `packages/nextjs/components/forms/RecipientInput.tsx`

**Checklist**:
- [ ] Install React Hook Form: `yarn add react-hook-form`
- [ ] Create component file
- [ ] Add "use client" directive
- [ ] Implement TypeScript interface (name for React Hook Form, maxRecipients, className)
- [ ] Use React Hook Form's useFieldArray for dynamic list
- [ ] Integrate @scaffold-ui/components AddressInput for each address
- [ ] Add address validation using viem's isAddress
- [ ] Add ENS resolution support (optional, async)
- [ ] Add "Add Recipient" button
- [ ] Add remove button for each address
- [ ] Enforce maxRecipients limit
- [ ] Show clear validation errors
- [ ] **Copy/Language**:
  - [ ] Label: "Who will receive this Wampum?"
  - [ ] Helper text: "You'll keep your bead, and they'll receive a copy"
  - [ ] Error messages: "Invalid address", "Maximum recipients reached"
- [ ] Style with warm styling
- [ ] Make responsive
- [ ] Test dark/light mode
- [ ] Test validation
- [ ] **📍 Git Commit**: `git commit -m "feat: add RecipientInput component"`

**Backtrack Point**: If validation needs adjustment, revert and refine logic

---

### 3.3 CreateWampumForm Component
**File**: `packages/nextjs/components/forms/CreateWampumForm.tsx`

**Checklist**:
- [ ] Install Zod: `yarn add zod @hookform/resolvers`
- [ ] Create component file
- [ ] Add "use client" directive
- [ ] Set up React Hook Form
- [ ] Create Zod validation schema:
  - [ ] Story: required, min 10, max 2000 chars
  - [ ] Max Supply: required, min 1, max 100
  - [ ] Initial Recipients: array of valid addresses, max length = maxSupply
  - [ ] Visual Symbol: optional string
  - [ ] Media URI: optional, valid URL if provided
  - [ ] Can Propagate: boolean (default: true)
  - [ ] Transferable: boolean (default: false)
- [ ] **Section 1 - The Story**:
  - [ ] Large textarea with comfortable styling
  - [ ] **Copy**: Label "What story of gratitude do you want to share?"
  - [ ] **Copy**: Placeholder "Share the story behind your gratitude..."
  - [ ] Character count display with gentle encouragement
- [ ] **Section 2 - The Bead**:
  - [ ] **Copy**: "Choose your bead's appearance"
  - [ ] Integrate BeadCustomizer component
  - [ ] Add live preview using WampumBeadDisplay
- [ ] **Section 3 - The Recipients**:
  - [ ] **Copy**: "Who will receive this Wampum?"
  - [ ] Integrate RecipientInput component
  - [ ] **Copy**: Helper text "You'll keep your bead, and they'll receive a copy"
- [ ] **Section 4 - The Ceremony** (collapsible):
  - [ ] **Copy**: "How should this Wampum be shared?"
  - [ ] Allow propagation toggle (default: true)
  - [ ] **Copy**: Explanation "Allow others to share this Wampum with more people"
  - [ ] Max supply slider (default: 10, max: 100)
  - [ ] **Copy**: Label "Maximum number of copies"
  - [ ] Media URI input (optional)
  - [ ] **Copy**: Label "Media URI (optional)" with helper "Link to image, artwork, or ceremony photo"
- [ ] **Section 5 - Review & Create**:
  - [ ] Preview of Wampum bead
  - [ ] Summary of settings
  - [ ] **Copy**: Button text "Create Wampum"
- [ ] Integrate useScaffoldWriteContract for contract interaction
- [ ] Add gas estimate display
- [ ] Add real-time validation
- [ ] Add loading states during transaction
- [ ] Add success modal with celebration
- [ ] Use CeremonyButton for submit
- [ ] Handle form submission (call createKudos function)
- [ ] Make fully responsive
- [ ] Test dark/light mode
- [ ] Test all validation rules
- [ ] **📍 Git Commit**: `git commit -m "feat: add CreateWampumForm component"`

**Backtrack Point**: If form has issues, revert and fix section by section

---

### 3.4 ShareWampumForm Component
**File**: `packages/nextjs/components/forms/ShareWampumForm.tsx`

**Checklist**:
- [ ] Create component file
- [ ] Add "use client" directive
- [ ] Set up React Hook Form
- [ ] Create Zod validation schema (recipients array)
- [ ] **Copy/Language**:
  - [ ] Header: "Share This Wampum"
  - [ ] Explanation: "When you share a Wampum, you keep your bead and the recipient receives their own copy. Gratitude spreads, ownership remains."
- [ ] Display WampumBeadDisplay of bead being shared
- [ ] Integrate RecipientInput component
- [ ] Use useScaffoldReadContract to check max supply vs current supply
- [ ] Show generation number that new recipients will receive
- [ ] **Copy**: "New recipients will be generation [X]"
- [ ] Prevent submission if max supply reached
- [ ] **Copy**: Error message "This Wampum has reached its maximum supply"
- [ ] Integrate useScaffoldWriteContract for propagation
- [ ] Add gas estimate display
- [ ] Add loading states
- [ ] Add success message with celebration
- [ ] Use CeremonyButton for submit
- [ ] **Copy**: Button text "Share Wampum"
- [ ] Make fully responsive
- [ ] Test dark/light mode
- [ ] Test max supply check
- [ ] **📍 Git Commit**: `git commit -m "feat: add ShareWampumForm component"`

**Backtrack Point**: If share form has issues, revert and fix

---

## 🔗 Phase 4: Custom Hooks (Data Layer)

### 4.1 useKudosMetadata Hook
**File**: `packages/nextjs/hooks/kudos/useKudosMetadata.ts`

**Checklist**:
- [ ] Create hooks directory: `packages/nextjs/hooks/kudos/`
- [ ] Create hook file
- [ ] Import useScaffoldReadContract
- [ ] Implement hook to call getKudosMetadata function
- [ ] Return typed metadata object with all fields
- [ ] Handle loading state
- [ ] Handle error state
- [ ] Support refetching
- [ ] Test with valid tokenId
- [ ] Test with invalid tokenId
- [ ] **📍 Git Commit**: `git commit -m "feat: add useKudosMetadata hook"`

**Backtrack Point**: If hook has issues, revert and fix contract call

---

### 4.2 usePropagationNetwork Hook
**File**: `packages/nextjs/hooks/kudos/usePropagationNetwork.ts`

**Checklist**:
- [ ] Create hook file
- [ ] Import useScaffoldReadContract
- [ ] Implement hook to call getPropagationNetwork function
- [ ] Return typed propagation records array
- [ ] Calculate network statistics:
  - [ ] Max depth (highest generation number)
  - [ ] Unique holders count
  - [ ] Total propagations count
- [ ] Handle loading state
- [ ] Handle error state
- [ ] Support refetching
- [ ] Test with tokenId that has propagations
- [ ] Test with tokenId that has no propagations
- [ ] **📍 Git Commit**: `git commit -m "feat: add usePropagationNetwork hook"`

**Backtrack Point**: If network calculation has issues, revert and fix

---

### 4.3 useUserKudos Hook
**File**: `packages/nextjs/hooks/kudos/useUserKudos.ts`

**Checklist**:
- [ ] Create hook file
- [ ] Import useScaffoldReadContract and useAccount
- [ ] Implement hook to call getCreatorTokens
- [ ] Implement hook to call getHolderTokens
- [ ] Accept address parameter (defaults to connected user from useAccount)
- [ ] Return separate arrays for created and received Kudos
- [ ] Handle loading state
- [ ] Handle error state
- [ ] Support refetching
- [ ] Test with connected user
- [ ] Test with different address
- [ ] **📍 Git Commit**: `git commit -m "feat: add useUserKudos hook"`

**Backtrack Point**: If user data fetching has issues, revert and fix

---

## 🏠 Phase 5: Page Implementation

### 5.1 Home Page
**File**: `packages/nextjs/app/page.tsx`

**Checklist**:
- [ ] Remove existing Scaffold-ETH default content (debug/blockexplorer cards still present)
- [ ] Import WampumHero component (currently using simple hero section)
- [x] Import StorySection component
- [ ] Import FeatureCards component
- [ ] Import CulturalNote component (optional)
- [ ] **Layout Structure**:
  - [x] Hero section at top (simple version, WampumHero component pending)
  - [x] StorySection below hero (centered, max-width container) ✅ **INTEGRATED**
  - [ ] FeatureCards in grid (centered, max-width container) - commented placeholder ready
  - [ ] CulturalNote at bottom (centered, subtle) - commented placeholder ready
- [x] Add proper spacing between sections (StorySection has py-16, proper flow)
- [ ] **Copy Verification**:
  - [ ] Hero headline: "Share Gratitude That Spreads Like Fire" (currently "Welcome to Wampum")
  - [ ] Hero subheadline: "Honor relationships through Wampum - digital beads that carry stories and build community"
  - [x] CTA button: "Create Your First Wampum" ✅
- [x] Style with warm, ceremonial feeling
- [x] Make fully responsive
- [x] Test dark/light mode (uses base-content colors)
- [x] Test navigation to /create ✅
- [ ] **📍 Git Commit**: `git commit -m "feat: implement Wampum home page"` (pending full implementation)

**Status**: 🟡 **IN PROGRESS** - StorySection integrated, hero section needs WampumHero component, Scaffold-ETH content needs removal

**Backtrack Point**: If page layout needs adjustment, revert and rebuild section by section

---

### 5.2 Create Wampum Page
**File**: `packages/nextjs/app/create/page.tsx`

**Checklist**:
- [ ] Remove placeholder content
- [ ] Import CreateWampumForm component
- [ ] Import useRouter from next/navigation
- [ ] **Layout Structure**:
  - [ ] Page header: "Weave Your Wampum Story"
  - [ ] **Copy**: Helpful instructions/tips section
    - [ ] "Each Wampum bead carries a story of gratitude"
    - [ ] "You'll keep your bead when sharing with others"
    - [ ] "Choose meaningful recipients who have touched your life"
  - [ ] CreateWampumForm component
- [ ] Handle form success:
  - [ ] Get tokenId from transaction result
  - [ ] Redirect to /wampum/[tokenId]
  - [ ] Show success toast/notification
- [ ] Style with warm, ceremonial feeling
- [ ] Make fully responsive
- [ ] Test dark/light mode
- [ ] Test form submission flow
- [ ] Test error handling
- [ ] **📍 Git Commit**: `git commit -m "feat: implement create Wampum page"`

**Backtrack Point**: If create page has issues, revert and fix form integration

---

### 5.3 Share/Propagate Wampum Page
**File**: `packages/nextjs/app/wampum/[tokenId]/propagate/page.tsx`

**Checklist**:
- [ ] Create directory structure: `app/wampum/[tokenId]/propagate/`
- [ ] Create page file
- [ ] Import ShareWampumForm component
- [ ] Import useParams from next/navigation
- [ ] Import Link from next/link
- [ ] Get tokenId from route params
- [ ] **Layout Structure**:
  - [ ] Breadcrumb navigation: Home → Wampum Detail → Share
  - [ ] Page header: "Share This Wampum"
  - [ ] **Copy**: "Pass the Gift" section with explanation
  - [ ] ShareWampumForm component with tokenId prop
- [ ] Handle form success:
  - [ ] Redirect to /wampum/[tokenId]
  - [ ] Show success toast/notification
- [ ] Style with warm, gift-giving feeling
- [ ] Make fully responsive
- [ ] Test dark/light mode
- [ ] Test with valid tokenId
- [ ] Test max supply check
- [ ] Test error handling
- [ ] **📍 Git Commit**: `git commit -m "feat: implement share Wampum page"`

**Backtrack Point**: If share page has issues, revert and fix form or routing

---

## 🧭 Phase 6: Navigation Updates

### 6.1 Header Component Updates
**File**: `packages/nextjs/components/Header.tsx`

**Checklist**:
- [ ] Open Header component
- [ ] Update menuLinks array:
  - [ ] Add "Home" link (href: "/")
  - [ ] Add "Create Wampum" link (href: "/create")
  - [ ] Keep existing links (Debug Contracts, etc.)
- [ ] Update link styling to match Wampum theme (if needed)
- [ ] Test navigation works
- [ ] Test active state highlighting
- [ ] Test mobile menu (if applicable)
- [ ] **📍 Git Commit**: `git commit -m "feat: update navigation for Wampum pages"`

**Backtrack Point**: If navigation breaks, revert and fix menuLinks

---

## 🧪 Phase 7: Integration Testing

### 7.1 Component Integration Tests
**Checklist**:
- [ ] Test WampumHero renders correctly on home page
- [ ] Test StorySection displays properly
- [ ] Test FeatureCards grid layout works
- [ ] Test CreateWampumForm validates correctly
- [ ] Test ShareWampumForm validates correctly
- [ ] Test WampumBeadDisplay shows correctly
- [ ] Test StoryDisplay expand/collapse works
- [ ] **📍 Git Commit**: `git commit -m "test: verify component integration"`

---

### 7.2 Page Flow Tests
**Checklist**:
- [ ] **Flow 1: Home → Create**
  - [ ] Navigate from home to create page
  - [ ] Form loads correctly
  - [ ] Fill out form completely
  - [ ] Submit form successfully
  - [ ] Verify redirect to detail page works
- [ ] **Flow 2: Detail → Share**
  - [ ] Navigate to share page with tokenId
  - [ ] Form loads with correct tokenId
  - [ ] Add recipients
  - [ ] Submit successfully
  - [ ] Verify redirect to detail page works
- [ ] **Flow 3: Error Handling**
  - [ ] Test form validation errors display
  - [ ] Test contract interaction errors
  - [ ] Test network errors
  - [ ] Verify error messages are user-friendly
- [ ] **📍 Git Commit**: `git commit -m "test: verify page flows"`

---

### 7.3 Theme & Responsive Tests
**Checklist**:
- [ ] Test all pages in light mode
- [ ] Test all pages in dark mode
- [ ] Test theme switching works
- [ ] Test all pages on mobile (< 768px)
- [ ] Test all pages on tablet (768px - 1024px)
- [ ] Test all pages on desktop (> 1024px)
- [ ] Verify touch interactions work on mobile
- [ ] **📍 Git Commit**: `git commit -m "test: verify theme and responsive design"`

---

### 7.4 Accessibility Tests
**Checklist**:
- [ ] Test keyboard navigation on all pages
- [ ] Test screen reader compatibility
- [ ] Verify ARIA labels are present
- [ ] Check contrast ratios meet WCAG AA
- [ ] Test focus indicators are visible
- [ ] **📍 Git Commit**: `git commit -m "test: verify accessibility"`

---

## 📝 Phase 8: Copy & Language Review

### 8.1 Home Page Copy
**Checklist**:
- [ ] Verify hero headline: "Share Gratitude That Spreads Like Fire"
- [ ] Verify hero subheadline: "Honor relationships through Wampum - digital beads that carry stories and build community"
- [ ] Verify CTA button: "Create Your First Wampum"
- [ ] Review StorySection copy for cultural respect
- [ ] Review FeatureCards copy for clarity
- [ ] Verify all copy is warm and ceremonial
- [ ] Check for typos and grammar
- [ ] **📍 Git Commit**: `git commit -m "docs: review and finalize home page copy"`

---

### 8.2 Create Page Copy
**Checklist**:
- [ ] Verify page header: "Weave Your Wampum Story"
- [ ] Review form section labels and placeholders
- [ ] Review helper text and explanations
- [ ] Review error messages
- [ ] Review success messages
- [ ] Verify all copy is warm and ceremonial
- [ ] Check for typos and grammar
- [ ] **📍 Git Commit**: `git commit -m "docs: review and finalize create page copy"`

---

### 8.3 Share Page Copy
**Checklist**:
- [ ] Verify page header: "Share This Wampum"
- [ ] Review explanation text about propagation
- [ ] Review form labels and placeholders
- [ ] Review error messages
- [ ] Review success messages
- [ ] Verify all copy is warm and gift-giving feeling
- [ ] Check for typos and grammar
- [ ] **📍 Git Commit**: `git commit -m "docs: review and finalize share page copy"`

---

## 🎨 Phase 9: Visual Polish

### 9.1 Styling Refinement
**Checklist**:
- [ ] Review spacing consistency across all pages
- [ ] Verify organic, flowing shapes (no harsh edges)
- [ ] Check warm, ceremonial feeling throughout
- [ ] Verify Wampum colors used consistently
- [ ] Review hover effects and transitions
- [ ] Check loading states are gentle
- [ ] Verify success animations are celebratory
- [ ] **📍 Git Commit**: `git commit -m "style: polish visual design"`

---

## 🔄 Backtracking Guide

### How to Revert if Something Goes Wrong

**Revert a Single Component**:
```bash
git log --oneline  # Find commit hash
git revert <commit-hash>  # Revert that specific commit
```

**Revert an Entire Phase**:
```bash
git log --oneline  # Find phase completion commit
git revert <commit-hash>  # Revert entire phase
```

**Jump Back to Working State**:
```bash
git log --oneline  # Find working commit
git checkout <commit-hash>  # Checkout that state
# Or create new branch from that point
git checkout -b fix-branch <commit-hash>
```

**View Changes Before Reverting**:
```bash
git diff <commit-hash-1> <commit-hash-2>  # See what changed
```

### Recommended Commit Strategy

1. **Commit after each component** - Easy to revert individual pieces
2. **Commit after each phase** - Easy to revert entire phases
3. **Use descriptive commit messages** - Easy to find specific changes
4. **Test before committing** - Reduces need for backtracking

---

## ✅ Completion Checklist

### Components
- [ ] WampumHero
- [x] StorySection ✅ **COMPLETE** - Created, styled, and integrated into home page
- [ ] FeatureCards
- [ ] CulturalNote (optional)
- [ ] WampumBeadDisplay
- [ ] StoryDisplay
- [ ] BeadCustomizer
- [ ] RecipientInput
- [ ] CreateWampumForm
- [ ] ShareWampumForm

### Hooks
- [ ] useKudosMetadata
- [ ] usePropagationNetwork
- [ ] useUserKudos

### Pages
- [x] Home Page 🟡 **IN PROGRESS** - StorySection integrated, hero needs WampumHero component, Scaffold-ETH content needs removal
- [ ] Create Wampum Page
- [ ] Share Wampum Page

### Navigation
- [ ] Header updated with new links

### Testing
- [ ] Component integration tests
- [ ] Page flow tests
- [ ] Theme & responsive tests
- [ ] Accessibility tests

### Copy & Language
- [ ] Home page copy reviewed
- [ ] Create page copy reviewed
- [ ] Share page copy reviewed

### Polish
- [ ] Visual styling refined
- [ ] Animations polished
- [ ] Error handling refined

---

## 🚀 Quick Reference Commands

```bash
# Start development server
yarn start

# Run linter
yarn next:lint

# Format code
yarn next:format

# Check types
yarn next:check-types

# View git log
git log --oneline

# Revert last commit (keep changes)
git reset --soft HEAD~1

# Revert last commit (discard changes)
git reset --hard HEAD~1
```

---

**Last Updated**: December 2024
**Status**: 🟡 In Progress
**Progress**: 
- ✅ StorySection Component: Complete
- 🟡 Home Page: In Progress (StorySection integrated, hero section needs WampumHero component)
- ⏳ Remaining: WampumHero, FeatureCards, CulturalNote, and all form components
