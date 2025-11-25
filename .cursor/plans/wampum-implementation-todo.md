# 🐚 Wampum Implementation Todo - Home, Create & Share Pages

## 🎯 Project Scope
Building the **Home Page**, **Create Wampum Page**, and **Share/Propagate Wampum Page** with all required components.

---

## 📋 Phase 0: Foundation Setup (Do This First!)

### 🎨 Color System Implementation
- [ ] **🌅 Update `globals.css` with complete Wampum color scheme**
  - [ ] Replace light mode theme block (lines 16-39) with Wampum light theme
  - [ ] Replace dark mode theme block (lines 41-66) with Wampum dark theme
  - [ ] Keep `@plugin "daisyui"` block unchanged
  - [ ] Keep all other CSS rules (`.btn`, `.link`, `@layer base`)
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: implement Wampum color scheme"`

- [ ] **✨ Add custom Wampum CSS variables** (optional but recommended)
  - [ ] Add `--wampum-shell-shine`, `--wampum-bead-shadow`, `--wampum-glow` variables
  - [ ] Add after dark mode theme block, before comment section
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: add custom Wampum CSS variables"`

- [ ] **🧪 Test color implementation**
  - [ ] Toggle between light/dark modes - verify colors change
  - [ ] Create test buttons (`btn-primary`, `btn-secondary`, `btn-accent`)
  - [ ] Create test alerts (`alert-success`, `alert-warning`, `alert-error`, `alert-info`)
  - [ ] Verify contrast ratios meet WCAG AA (4.5:1 for text)
  - [ ] Check cards, borders, and text elements render correctly
  - [ ] **📍 Git Commit Point**: `git commit -m "test: verify Wampum color scheme"`

---

## 🧱 Phase 1: Base Components (Build These First - Reusable Foundation)

### 🔘 CeremonyButton Component
- [ ] **📝 Create `packages/nextjs/components/wampum/CeremonyButton.tsx`**
  - [ ] Implement TypeScript interface with all props
  - [ ] Use Wampum color scheme (primary, secondary, accent variants)
  - [ ] Add organic rounded shape (border-radius: 12px)
  - [ ] Implement hover glow effect using `--wampum-glow`
  - [ ] Add loading state with gentle pulse animation
  - [ ] Add disabled state styling
  - [ ] Support dark/light mode
  - [ ] Add proper ARIA labels and keyboard support
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: add CeremonyButton component"`

- [ ] **🧪 Test CeremonyButton**
  - [ ] Test all variants (primary, secondary, accent)
  - [ ] Test all sizes (sm, md, lg)
  - [ ] Test loading state
  - [ ] Test disabled state
  - [ ] Test hover and focus states
  - [ ] Verify accessibility (keyboard navigation, screen reader)

### 📖 StoryDisplay Component
- [ ] **📝 Create `packages/nextjs/components/wampum/StoryDisplay.tsx`**
  - [ ] Implement TypeScript interface
  - [ ] Add "Read more/less" functionality (500 char limit)
  - [ ] Implement smooth expand/collapse animation (300ms ease)
  - [ ] Use warm typography (18px, 1.7 line height)
  - [ ] Support markdown formatting (optional - react-markdown)
  - [ ] Use Wampum text colors
  - [ ] Support dark/light mode
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: add StoryDisplay component"`

- [ ] **🧪 Test StoryDisplay**
  - [ ] Test with short story (< 500 chars)
  - [ ] Test with long story (> 500 chars)
  - [ ] Test read more/less toggle
  - [ ] Test markdown rendering (if implemented)
  - [ ] Verify text contrast in both themes

### 🎨 BeadCustomizer Component
- [ ] **📝 Create `packages/nextjs/components/forms/BeadCustomizer.tsx`**
  - [ ] Install color picker library (`npm install react-color` or similar)
  - [ ] Implement TypeScript interface
  - [ ] Create Wampum color palette swatches (6 colors from plan)
  - [ ] Add optional pattern selector (stripes, dots, waves)
  - [ ] Create live preview using WampumBeadDisplay (will build next)
  - [ ] Use warm, inviting styling
  - [ ] Support dark/light mode
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: add BeadCustomizer component"`

- [ ] **🧪 Test BeadCustomizer**
  - [ ] Test color selection
  - [ ] Test pattern selection (if implemented)
  - [ ] Verify preview updates in real-time
  - [ ] Test in both themes

### 📍 RecipientInput Component
- [ ] **📝 Create `packages/nextjs/components/forms/RecipientInput.tsx`**
  - [ ] Implement TypeScript interface
  - [ ] Use React Hook Form's `useFieldArray` for dynamic list
  - [ ] Integrate `@scaffold-ui/components` AddressInput
  - [ ] Add address validation (viem's `isAddress`)
  - [ ] Support ENS resolution (optional, async)
  - [ ] Add remove button for each address
  - [ ] Enforce max recipients limit
  - [ ] Show clear validation errors
  - [ ] Use warm styling
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: add RecipientInput component"`

- [ ] **🧪 Test RecipientInput**
  - [ ] Test adding multiple addresses
  - [ ] Test removing addresses
  - [ ] Test invalid address validation
  - [ ] Test ENS resolution (if implemented)
  - [ ] Test max recipients limit
  - [ ] Test error messages display

---

## 🎨 Phase 2: Wampum-Specific Display Components

### 🔮 WampumBeadDisplay Component
- [ ] **📝 Create `packages/nextjs/components/wampum/WampumBeadDisplay.tsx`**
  - [ ] Implement TypeScript interface
  - [ ] Use `useScaffoldReadContract` to fetch visualSymbol if not provided
  - [ ] Create circular shape (border-radius: 50%)
  - [ ] Implement shell-like gradient (radial: lighter center to darker edges)
  - [ ] Add shine effect (linear gradient overlay, 45deg, white 10-15% opacity)
  - [ ] Add warm shadow using `--wampum-bead-shadow`
  - [ ] Add optional pulse animation (scale 1.0 to 1.02, 3s)
  - [ ] Support custom sizing (diameter prop)
  - [ ] Support both color (hex) and pattern visual symbols
  - [ ] Support dark/light mode
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: add WampumBeadDisplay component"`

- [ ] **🧪 Test WampumBeadDisplay**
  - [ ] Test with color hex visualSymbol
  - [ ] Test with pattern identifier (if implemented)
  - [ ] Test different sizes
  - [ ] Test pulse animation (if enabled)
  - [ ] Test in both themes
  - [ ] Verify shell-like appearance

---

## 🏗️ Phase 3: Layout Components (For Home Page)

### 🏛️ WampumHero Component
- [ ] **📝 Create `packages/nextjs/components/layout/WampumHero.tsx`**
  - [ ] Implement TypeScript interface
  - [ ] Add large illustration/icon (Heroicons or custom SVG)
  - [ ] Add headline: "Share Gratitude That Spreads Like Fire"
  - [ ] Add subheadline with warm typography
  - [ ] Add "Create Your First Wampum" CTA button (use CeremonyButton)
  - [ ] Use warm gradients for visual interest
  - [ ] Add organic, flowing design (no harsh edges)
  - [ ] Support dark/light mode
  - [ ] Make fully responsive (mobile-first)
  - [ ] Add proper ARIA labels
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: add WampumHero component"`

- [ ] **🧪 Test WampumHero**
  - [ ] Test on mobile (< 768px)
  - [ ] Test on tablet (768px - 1024px)
  - [ ] Test on desktop (> 1024px)
  - [ ] Test CTA button navigation
  - [ ] Test in both themes
  - [ ] Verify accessibility

### 📚 StorySection Component
- [ ] **📝 Create `packages/nextjs/components/layout/StorySection.tsx`**
  - [ ] Add brief, respectful explanation of Wampum's significance
  - [ ] Use warm, educational tone
  - [ ] Use Wampum typography and colors
  - [ ] Support dark/light mode
  - [ ] Make responsive
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: add StorySection component"`

- [ ] **🧪 Test StorySection**
  - [ ] Verify text readability
  - [ ] Test responsive layout
  - [ ] Test in both themes

### 🎴 FeatureCards Component
- [ ] **📝 Create `packages/nextjs/components/layout/FeatureCards.tsx`**
  - [ ] Create three feature cards:
    - "Weave Your Story" with icon
    - "Share the Gift" with icon
    - "Build Community" with icon
  - [ ] Use warm, organic card styling
  - [ ] Add icons (Heroicons: hands, gift, network icons)
  - [ ] Use Wampum colors
  - [ ] Support dark/light mode
  - [ ] Make responsive (grid layout)
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: add FeatureCards component"`

- [ ] **🧪 Test FeatureCards**
  - [ ] Test grid layout on different screen sizes
  - [ ] Test card hover effects
  - [ ] Verify icons display correctly
  - [ ] Test in both themes

### 📜 CulturalNote Component (Optional)
- [ ] **📝 Create `packages/nextjs/components/layout/CulturalNote.tsx`**
  - [ ] Add optional link to learn about Wampum history
  - [ ] Use respectful, educational tone
  - [ ] Style as subtle, non-intrusive
  - [ ] Support dark/light mode
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: add CulturalNote component"`

---

## 📄 Phase 4: Form Components

### ✍️ CreateWampumForm Component
- [ ] **📝 Create `packages/nextjs/components/forms/CreateWampumForm.tsx`**
  - [ ] Install React Hook Form (`npm install react-hook-form`)
  - [ ] Install Zod (`npm install zod @hookform/resolvers`)
  - [ ] Set up form with React Hook Form
  - [ ] Create Zod validation schema:
    - Story: required, min 10, max 2000 chars
    - Max Supply: required, min 1, max 100
    - Initial Recipients: array of valid addresses, max = maxSupply
    - Visual Symbol: optional string
    - Media URI: optional, valid URL if provided
  - [ ] Add "The Story" section with large textarea
  - [ ] Add "The Bead" section with BeadCustomizer
  - [ ] Add "The Recipients" section with RecipientInput
  - [ ] Add "The Ceremony" collapsible settings panel:
    - Allow propagation toggle (default: true)
    - Max supply slider (default: 10, max: 100)
    - Media URI input
  - [ ] Add live preview using WampumBeadDisplay
  - [ ] Integrate `useScaffoldWriteContract` for contract interaction
  - [ ] Add gas estimate display
  - [ ] Add real-time validation
  - [ ] Add loading states during transaction
  - [ ] Add success modal with celebration
  - [ ] Use CeremonyButton for submit
  - [ ] Support dark/light mode
  - [ ] Make fully responsive
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: add CreateWampumForm component"`

- [ ] **🧪 Test CreateWampumForm**
  - [ ] Test form validation (all fields)
  - [ ] Test story character count
  - [ ] Test max supply validation
  - [ ] Test recipient address validation
  - [ ] Test max recipients = max supply constraint
  - [ ] Test live preview updates
  - [ ] Test contract interaction (createKudos function)
  - [ ] Test loading states
  - [ ] Test success flow
  - [ ] Test error handling
  - [ ] Test responsive layout

### 🎁 ShareWampumForm Component
- [ ] **📝 Create `packages/nextjs/components/forms/ShareWampumForm.tsx`**
  - [ ] Set up React Hook Form
  - [ ] Create Zod validation schema
  - [ ] Add warm explanation text about propagation
  - [ ] Display WampumBeadDisplay of the bead being shared
  - [ ] Add RecipientInput for multiple recipients
  - [ ] Use `useScaffoldReadContract` to check max supply vs current supply
  - [ ] Show generation number that new recipients will receive
  - [ ] Integrate `useScaffoldWriteContract` for propagation
  - [ ] Add gas estimate display
  - [ ] Add validation (check max supply not reached)
  - [ ] Add loading states
  - [ ] Add success message with celebration
  - [ ] Use CeremonyButton for submit
  - [ ] Support dark/light mode
  - [ ] Make fully responsive
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: add ShareWampumForm component"`

- [ ] **🧪 Test ShareWampumForm**
  - [ ] Test with valid tokenId
  - [ ] Test recipient address validation
  - [ ] Test max supply check (should prevent if reached)
  - [ ] Test contract interaction (propagateKudos function)
  - [ ] Test loading states
  - [ ] Test success flow
  - [ ] Test error handling
  - [ ] Test responsive layout

---

## 🏠 Phase 5: Page Components

### 🏡 Home Page
- [ ] **📝 Update `packages/nextjs/app/page.tsx`**
  - [ ] Import WampumHero component
  - [ ] Import StorySection component
  - [ ] Import FeatureCards component
  - [ ] Import CulturalNote component (optional)
  - [ ] Remove existing Scaffold-ETH default content
  - [ ] Build page layout:
    - WampumHero at top
    - StorySection below hero
    - FeatureCards in grid
    - CulturalNote at bottom (optional)
  - [ ] Use warm, ceremonial styling
  - [ ] Make fully responsive
  - [ ] Support dark/light mode
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: implement Wampum home page"`

- [ ] **🧪 Test Home Page**
  - [ ] Test all components render correctly
  - [ ] Test CTA button navigation to `/create`
  - [ ] Test responsive layout (mobile, tablet, desktop)
  - [ ] Test theme switching
  - [ ] Test accessibility (keyboard nav, screen reader)
  - [ ] Verify no console errors
  - [ ] **📍 Git Commit Point**: `git commit -m "test: verify home page functionality"`

### ✨ Create Wampum Page
- [ ] **📝 Create `packages/nextjs/app/create/page.tsx`**
  - [ ] Create new page file
  - [ ] Import CreateWampumForm component
  - [ ] Add page header: "Weave Your Wampum Story"
  - [ ] Add helpful, ceremonial instructions/tips
  - [ ] Integrate CreateWampumForm
  - [ ] Handle form success (redirect to detail page or show success)
  - [ ] Use warm, ceremonial styling
  - [ ] Make fully responsive
  - [ ] Support dark/light mode
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: implement create Wampum page"`

- [ ] **🧪 Test Create Page**
  - [ ] Test form submission flow
  - [ ] Test success redirect
  - [ ] Test error handling
  - [ ] Test responsive layout
  - [ ] Test theme switching
  - [ ] Verify contract interaction works
  - [ ] **📍 Git Commit Point**: `git commit -m "test: verify create page functionality"`

### 🎁 Share/Propagate Wampum Page
- [ ] **📝 Create `packages/nextjs/app/wampum/[tokenId]/propagate/page.tsx`**
  - [ ] Create dynamic route file
  - [ ] Import ShareWampumForm component
  - [ ] Get tokenId from route params
  - [ ] Add breadcrumb navigation back to detail page
  - [ ] Add page header: "Share This Wampum"
  - [ ] Integrate ShareWampumForm with tokenId
  - [ ] Handle form success (redirect to detail page)
  - [ ] Use warm, gift-giving styling
  - [ ] Make fully responsive
  - [ ] Support dark/light mode
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: implement share Wampum page"`

- [ ] **🧪 Test Share Page**
  - [ ] Test with valid tokenId from URL
  - [ ] Test form submission flow
  - [ ] Test success redirect
  - [ ] Test max supply check
  - [ ] Test error handling
  - [ ] Test responsive layout
  - [ ] Test theme switching
  - [ ] Verify contract interaction works
  - [ ] **📍 Git Commit Point**: `git commit -m "test: verify share page functionality"`

---

## 🔗 Phase 6: Integration & Navigation

### 🧭 Navigation Updates
- [ ] **📝 Update `packages/nextjs/components/Header.tsx`**
  - [ ] Add "Home" link to menu
  - [ ] Add "Create Wampum" link to menu
  - [ ] Update menu styling to match Wampum theme
  - [ ] **📍 Git Commit Point**: `git commit -m "feat: update navigation for Wampum pages"`

- [ ] **🧪 Test Navigation**
  - [ ] Test all menu links work
  - [ ] Test active state highlighting
  - [ ] Test mobile menu (if applicable)

---

## 🧪 Phase 7: End-to-End Testing

### ✅ Complete Flow Testing
- [ ] **🏠 Home Page → Create Flow**
  - [ ] Navigate from home to create page
  - [ ] Fill out form completely
  - [ ] Submit and verify success
  - [ ] Verify redirect works

- [ ] **🎁 Create → Share Flow**
  - [ ] After creating, navigate to share page
  - [ ] Verify tokenId is passed correctly
  - [ ] Share with test addresses
  - [ ] Verify propagation works

- [ ] **🔄 Theme Testing**
  - [ ] Test all pages in light mode
  - [ ] Test all pages in dark mode
  - [ ] Verify theme persistence
  - [ ] Verify all colors render correctly

- [ ] **📱 Responsive Testing**
  - [ ] Test all pages on mobile (< 768px)
  - [ ] Test all pages on tablet (768px - 1024px)
  - [ ] Test all pages on desktop (> 1024px)
  - [ ] Verify touch interactions work

- [ ] **♿ Accessibility Testing**
  - [ ] Test keyboard navigation on all pages
  - [ ] Test screen reader compatibility
  - [ ] Verify ARIA labels are present
  - [ ] Check contrast ratios meet WCAG AA

- [ ] **🐛 Error Handling Testing**
  - [ ] Test form validation errors
  - [ ] Test contract interaction errors
  - [ ] Test network errors
  - [ ] Verify error messages are user-friendly

- [ ] **📍 Git Commit Point**: `git commit -m "test: complete end-to-end testing"`

---

## 🎨 Phase 8: Polish & Refinement

### ✨ Visual Polish
- [ ] **🎨 Review and refine component styling**
  - [ ] Ensure consistent spacing
  - [ ] Verify organic, flowing shapes throughout
  - [ ] Check warm, ceremonial feeling
  - [ ] Verify no harsh edges

- [ ] **🎭 Animation Refinement**
  - [ ] Smooth transitions on all interactions
  - [ ] Gentle hover effects
  - [ ] Loading state animations
  - [ ] Success celebration animations

- [ ] **📐 Layout Refinement**
  - [ ] Consistent padding and margins
  - [ ] Proper alignment
  - [ ] Balanced visual hierarchy

- [ ] **📍 Git Commit Point**: `git commit -m "style: polish visual design"`

---

## 📚 Phase 9: Documentation & Cleanup

### 📝 Code Documentation
- [ ] **📖 Add JSDoc comments to all components**
  - [ ] Document all props
  - [ ] Document component purpose
  - [ ] Add usage examples

- [ ] **🧹 Code Cleanup**
  - [ ] Remove unused imports
  - [ ] Remove console.logs
  - [ ] Remove commented code
  - [ ] Run linter and fix issues
  - [ ] Format code with Prettier

- [ ] **📍 Git Commit Point**: `git commit -m "docs: add documentation and cleanup code"`

---

## 🎯 Git Workflow for Easy Backtracking

### 📍 Recommended Commit Strategy
1. **Commit after each component** - Easy to revert individual components
2. **Commit after each phase** - Easy to revert entire phases
3. **Use descriptive commit messages** - Easy to find specific changes
4. **Tag major milestones** - Easy to jump back to working states

### 🔄 How to Backtrack

**Revert a single component:**
```bash
git log --oneline  # Find commit hash
git revert <commit-hash>  # Revert that commit
```

**Revert an entire phase:**
```bash
git log --oneline  # Find phase commit
git revert <commit-hash>  # Revert phase
```

**Jump back to a working state:**
```bash
git log --oneline  # Find working commit
git checkout <commit-hash>  # Checkout that state
# Or create a new branch from that point
git checkout -b fix-branch <commit-hash>
```

**View what changed:**
```bash
git diff <commit-hash-1> <commit-hash-2>  # See changes between commits
```

---

## 🎉 Completion Checklist

- [ ] All Phase 0 tasks completed (Foundation)
- [ ] All Phase 1 tasks completed (Base Components)
- [ ] All Phase 2 tasks completed (Display Components)
- [ ] All Phase 3 tasks completed (Layout Components)
- [ ] All Phase 4 tasks completed (Form Components)
- [ ] All Phase 5 tasks completed (Pages)
- [ ] All Phase 6 tasks completed (Integration)
- [ ] All Phase 7 tasks completed (Testing)
- [ ] All Phase 8 tasks completed (Polish)
- [ ] All Phase 9 tasks completed (Documentation)

---

## 🚀 Quick Start Commands

```bash
# Start development server
yarn start

# Run linter
yarn next:lint

# Format code
yarn next:format

# Check types
yarn next:check-types

# Build for production
yarn next:build
```

---

## 📝 Notes

- **Test frequently** - Don't wait until the end to test
- **Commit often** - Small, focused commits are easier to manage
- **Ask for help** - If stuck, refer back to component prompts
- **Stay warm** - Keep the ceremonial, gratitude-focused feeling throughout
- **Honor the tradition** - Maintain cultural respect in all implementations

---

**Last Updated**: [Current Date]
**Status**: 🟡 In Progress
**Progress**: 0/XX tasks completed

