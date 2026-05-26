# UX Rules & Regulations Document

**SPM Test Site** — Professional UX/UI Standards, Accessibility (A11Y), and Best Practices

---

## Table of Contents

1. [Core Design Principles](#core-design-principles)
2. [Typography Rules](#typography-rules)
3. [Color & Contrast](#color--contrast)
4. [Layout & Spacing](#layout--spacing)
5. [Navigation & Information Architecture](#navigation--information-architecture)
6. [Interactive Components](#interactive-components)
7. [Forms & Input](#forms--input)
8. [Accessibility (A11Y)](#accessibility-a11y)
9. [Responsive Design](#responsive-design)
10. [Performance & Technical](#performance--technical)
11. [Content Guidelines](#content-guidelines)
12. [Error Handling & Feedback](#error-handling--feedback)
13. [Motion & Animation](#motion--animation)

---

## Core Design Principles

### 1. **Clarity & Simplicity**
- Every element must serve a clear purpose
- Remove unnecessary visual elements
- Follow the principle of "form follows function"
- Avoid decorative elements that don't add value

### 2. **Consistency**
- Use the same components, patterns, and interactions across all pages
- Maintain consistent styling, spacing, and typography
- Use design tokens (CSS variables) for all colors, sizes, and spacing
- Every button should behave the same way across the entire application

### 3. **Visual Hierarchy**
- Use size, color, and weight to establish importance
- Primary actions should be most visually prominent
- Secondary actions should be visually subordinate
- Information should flow from top to bottom, left to right

### 4. **User-Centered Design**
- Design for the user's needs, not the designer's preferences
- Every design decision must be justified by user research or best practices
- Test with real users before finalizing designs
- Prioritize user tasks over aesthetic preferences

### 5. **Progressive Disclosure**
- Show essential information first
- Hide advanced options until needed
- Avoid overwhelming users with too many choices at once
- Use tabs, collapsible sections, or modals for detailed information

---

## Typography Rules

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

### Heading Hierarchy

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | 32px | 700 | 1.2 | Page title, main heading |
| H2 | 24px | 600 | 1.3 | Section heading |
| H3 | 20px | 600 | 1.4 | Subsection heading |
| H4 | 16px | 600 | 1.4 | Small heading, card title |
| H5 | 14px | 600 | 1.5 | Label, component title |
| H6 | 12px | 600 | 1.5 | Caption, metadata |

### Body Text
- **Size**: 16px (standard), 14px (compact)
- **Weight**: 400 (regular), 500 (emphasis), 600 (strong)
- **Line Height**: 1.5 (body), 1.4 (labels), 1.2 (headings)
- **Letter Spacing**: 0 (default), 0.5px for uppercase labels

### Rules
- ✅ Never go below 14px for body text
- ✅ Use 16px as default for readability
- ✅ Maintain consistent line height (1.5) for body text
- ✅ Use semantic HTML tags (h1-h6, p, strong, em, label)
- ✅ Bold text only for emphasis or importance
- ❌ Never use ALL CAPS for body text (use text-transform if needed)
- ❌ Never use more than 3 font sizes in a single view
- ❌ Never mix serif and sans-serif fonts in the same section

---

## Color & Contrast

### Color Palette

#### Primary Colors
```css
--primary-navy: #1A2332;     /* Primary backgrounds, text */
--primary-dark: #233044;     /* Navigation, dark backgrounds */
--accent-blue: #0052CC;      /* Links, buttons, active states */
```

#### Neutrals
```css
--neutral-white: #FFFFFF;           /* Backgrounds */
--neutral-light-gray: #F8F9FA;      /* Secondary backgrounds */
--neutral-medium-gray: #E8EAED;     /* Borders, dividers */
--neutral-dark-gray: #5F6368;       /* Secondary text */
```

#### Status Colors
```css
--status-success: #2EA44F;   /* Success states, confirmations */
--status-warning: #D4A500;   /* Warnings, alerts */
--status-error: #D1242F;     /* Errors, destructive actions */
--status-info: #0052CC;      /* Information, notifications */
```

#### Semantic Colors
```css
--text-primary: #1F2937;     /* Main text content */
--text-secondary: #6B7280;   /* Secondary text, labels */
--border-color: rgba(0, 0, 0, 0.1);  /* Borders */
--bg-overlay: rgba(0, 0, 0, 0.5);    /* Modal overlays */
```

### Contrast Rules

#### WCAG AA Compliance (Minimum Standards)
- **Text Contrast**: 4.5:1 for normal text (14px+)
- **Large Text Contrast**: 3:1 for large text (18px+ bold or 24px+)
- **UI Component Contrast**: 3:1 for borders, icons, focus indicators

#### Color Usage
- ✅ Always use the defined color palette
- ✅ Use semantic colors for status (success, warning, error, info)
- ✅ Ensure 4.5:1 contrast ratio for all text
- ✅ Never rely on color alone to convey meaning (add icons, text, or patterns)
- ✅ Use primary text (#1F2937) for all body content
- ✅ Use secondary text (#6B7280) for labels, captions, hints
- ❌ Never use custom colors outside the palette
- ❌ Never create low-contrast text (avoid light text on light backgrounds)
- ❌ Never use more than 5 colors in a single view (excluding neutrals)

### Color Accessibility
- Always provide alternative visual cues alongside color (icon, text, pattern)
- Status indicators must use both color AND icons/text
- Ensure sufficient contrast for people with color blindness
- Test designs with color blindness simulator (Coblis, Color Oracle)

---

## Layout & Spacing

### Spacing Scale (8px Base Unit)

All spacing must use multiples of 8px:
```css
4px   - Minimal spacing, tight grouping
8px   - Small spacing, component padding
12px  - Compact spacing
16px  - Standard spacing, default padding
24px  - Medium spacing, section padding
32px  - Large spacing, major sections
48px  - Extra large spacing
64px  - Massive spacing, page-level sections
```

### Spacing Rules
- ✅ Use spacing scale consistently across all components
- ✅ Use CSS custom properties (variables) for all spacing values
- ✅ Maintain 16px padding inside cards and containers
- ✅ Use 24px gap between components in grids
- ✅ Use 32px margin between major sections
- ✅ Vertical rhythm: maintain consistent spacing between elements
- ❌ Never use arbitrary spacing values
- ❌ Never use spacing that isn't a multiple of 4px

### Layout Grid
- **Max-width**: 1200px for content areas
- **Sidebar**: 240px fixed width (desktop only)
- **Padding**: 32px on desktop, 16px on tablet, 16px on mobile
- **Gutter**: 24px between grid columns
- **Container**: Center content with max-width constraint

### Breakpoints
```css
Mobile:   320px - 767px
Tablet:   768px - 1023px
Desktop:  1024px+
```

---

## Navigation & Information Architecture

### Primary Navigation
- ✅ Place navigation in a consistent location (sidebar or top)
- ✅ Use clear, descriptive labels for all navigation items
- ✅ Highlight the current page/section
- ✅ Show active state with color and/or underline
- ✅ Use descriptive icons alongside text
- ✅ Group related navigation items together
- ✅ Limit to 5-7 main navigation items (use sub-navigation if needed)

### Sidebar Navigation Rules
- Position: Fixed, left side on desktop
- Width: 240px
- Background: Dark navy (#233044)
- Text: White with 70% opacity for inactive, 100% for active
- Active Indicator: Left border accent (3px) + accent blue color
- Hover: Subtle background change (0.05 opacity increase)

### Breadcrumbs
- ✅ Show hierarchy when depth > 2 levels
- ✅ Include link to home
- ✅ Use forward slash (/) separator
- ✅ Highlight current page (non-clickable)
- ✅ Provide context of where user is

### Wayfinding
- ✅ Display page title prominently (H1)
- ✅ Show breadcrumb navigation when needed
- ✅ Highlight current section in navigation
- ✅ Provide visual feedback on user location
- ✅ Show progress in multi-step flows

---

## Interactive Components

### Buttons

#### Button Types
1. **Primary Button** — Main call-to-action
2. **Secondary Button** — Alternative action
3. **Tertiary Button** — Less important action (link-style)
4. **Destructive Button** — Delete, remove, dangerous actions

#### Button Specifications

| Property | Primary | Secondary | Tertiary |
|----------|---------|-----------|----------|
| Background | #0052CC | #E8EAED | Transparent |
| Text Color | White | #1F2937 | #0052CC |
| Padding | 10px 16px | 10px 16px | 10px 0 |
| Border Radius | 6px | 6px | 0 |
| Font Weight | 500 | 500 | 500 |
| Min Height | 40px | 40px | 40px |

#### Button States
- **Enabled**: Full opacity, interactive
- **Hover**: 10% darker, subtle shadow, cursor pointer
- **Active**: 20% darker, pressed effect (1px down)
- **Disabled**: 50% opacity, cursor not-allowed, no hover effect
- **Focus**: 2px focus ring (accent blue), visible outline

#### Button Rules
- ✅ Use sentence case (e.g., "Save changes", not "SAVE CHANGES")
- ✅ Use action verbs (Save, Delete, Submit, Cancel)
- ✅ Primary button only once per page/dialog
- ✅ Always provide visual feedback on hover/focus/active
- ✅ Maintain minimum 44px height for touch targets
- ✅ Group related buttons together (e.g., Save/Cancel side-by-side)
- ✅ Use destructive styling for dangerous actions
- ❌ Never use disabled state without explanation
- ❌ Never use button text that's unclear or vague

### Links
- ✅ Use accent blue (#0052CC) color
- ✅ Underline all links (or use visited state)
- ✅ Show hover state (darker, underline, or background)
- ✅ Maintain 4.5:1 contrast ratio
- ✅ Provide clear indication of current page in navigation links
- ❌ Never use blue text without link styling if it's not clickable
- ❌ Never remove underline from links without clear visited state

### Tabs
- ✅ Show all tab options upfront
- ✅ Highlight active tab with underline and color
- ✅ Use clear tab labels
- ✅ Switch content without page reload
- ✅ Maintain tab state when navigating away and returning
- ✅ Show active tab indicator on page load
- ❌ Never hide tabs until clicked
- ❌ Never use more than 6 tabs (consider different UI pattern)

### Modals & Dialogs
- ✅ Use semi-transparent overlay behind modal (rgba(0,0,0,0.5))
- ✅ Center modal on screen
- ✅ Include clear close button (X or ESC key)
- ✅ Provide clear title and action buttons
- ✅ Trap focus within modal (keyboard navigation)
- ✅ Disable body scroll when modal is open
- ✅ Confirm destructive actions with secondary confirmation
- ❌ Never make modals too large (max 600px width)
- ❌ Never use modal without clear close action

---

## Forms & Input

### Input Fields
- ✅ Use 40px minimum height (touch-friendly)
- ✅ Include visible label above input
- ✅ Show placeholder text for guidance
- ✅ Use clear error messages below field
- ✅ Maintain 4px-6px padding inside field
- ✅ Use 1px border (medium gray #E8EAED)
- ✅ Show focus state (2px accent blue outline)
- ✅ Disabled inputs: 50% opacity, cursor not-allowed

### Form Layout
- ✅ Stack fields vertically
- ✅ Use 16px spacing between fields
- ✅ Group related fields together
- ✅ Use 100% width for single-column forms
- ✅ Use 2-column layout on tablet+ for efficiency
- ✅ Label position: above field (or floating)
- ✅ Show required indicator (*) after label
- ❌ Never use placeholder as label (use actual label)
- ❌ Never require more than necessary fields
- ❌ Never use red text only for required fields (use icon or asterisk)

### Validation & Error Handling
- ✅ Validate on blur (not on every keystroke)
- ✅ Show inline error messages
- ✅ Use error icon + text color + message text
- ✅ Show success state (green checkmark) on validation
- ✅ Provide clear, actionable error messages
- ✅ Disable submit button until form is valid (optional, show errors instead)
- ❌ Never validate on keystroke (too aggressive)
- ❌ Never show all errors at once (highlight first error)
- ❌ Never use jargon in error messages

### Error Message Format
```
❌ [Field Name] is required.
❌ Email address must be valid (e.g., user@example.com).
❌ Password must be at least 8 characters.
```

---

## Accessibility (A11Y)

### Semantic HTML
- ✅ Use semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ✅ Use heading hierarchy (H1 → H2 → H3, never skip levels)
- ✅ Use `<button>` for buttons, `<a>` for links
- ✅ Use `<form>`, `<label>`, `<input>` for forms
- ✅ Use `<ul>`, `<ol>`, `<li>` for lists
- ✅ Use `<table>` for tabular data with `<th>` headers
- ❌ Never use `<div>` styled as button (use `<button>`)
- ❌ Never skip heading levels (e.g., H1 to H3)

### ARIA Labels & Attributes
- ✅ Use `aria-label` for icon-only buttons
- ✅ Use `aria-labelledby` to link labels to elements
- ✅ Use `aria-describedby` for additional descriptions
- ✅ Use `role="button"` only if `<button>` can't be used
- ✅ Use `aria-expanded` for collapsible sections
- ✅ Use `aria-current="page"` for active navigation
- ✅ Use `aria-live="polite"` for dynamic content updates
- ✅ Use `aria-hidden="true"` for decorative elements
- ❌ Never over-use ARIA (semantic HTML is better)
- ❌ Never use ARIA to fix inaccessible HTML

### Keyboard Navigation
- ✅ All interactive elements must be keyboard accessible
- ✅ Use Tab key to navigate (logical order)
- ✅ Use Shift+Tab to navigate backwards
- ✅ Use Enter/Space to activate buttons
- ✅ Use Arrow keys to navigate menus/tabs
- ✅ Use ESC to close modals/dropdowns
- ✅ Provide skip links to main content
- ✅ Show visible focus indicator on all elements
- ✅ Use `tabindex="0"` only when necessary
- ✅ Never use `tabindex="-1"` to hide elements from keyboard
- ❌ Never trap focus outside modals

### Focus Management
- ✅ Focus indicator must have 2px minimum width
- ✅ Focus indicator must have 3:1 contrast ratio
- ✅ Focus indicator should not be obscured by other elements
- ✅ Move focus to modal when opened
- ✅ Restore focus to trigger button when modal closes
- ✅ Announce page changes with `aria-live` when using SPA

### Color Accessibility
- ✅ Never rely on color alone (use icons, text, patterns)
- ✅ Ensure 4.5:1 text contrast (WCAG AA minimum)
- ✅ Test with color blindness simulator
- ✅ Use patterns/icons with status colors
- ✅ Provide text label for all status indicators
- ❌ Never use red/green alone for status
- ❌ Never use low-contrast combinations

### Screen Reader Support
- ✅ Use descriptive alt text for images (`alt="..."`)
- ✅ Use descriptive button text (avoid "Click here")
- ✅ Use descriptive link text (avoid "Read more")
- ✅ Provide context for icon-only buttons (aria-label)
- ✅ Use `<th>` for table headers
- ✅ Use `<label>` for form inputs
- ✅ Announce errors/validation states
- ✅ Use `role="status"` for status messages
- ❌ Never use placeholder as form label
- ❌ Never use images with text in them without alt text

### Motion & Animation
- ✅ Respect `prefers-reduced-motion` setting
- ✅ Keep animations under 300ms (avoid motion sickness)
- ✅ Use `@media (prefers-reduced-motion: reduce)` to disable animations
- ✅ Provide text alternatives to animated content
- ❌ Never use auto-playing videos with sound
- ❌ Never use flashing content (>3 times per second)
- ❌ Never use parallax effects without disable option

### Form Accessibility
- ✅ Associate labels with inputs using `for` attribute
- ✅ Use `<label>` for all form inputs
- ✅ Provide error messages linked to inputs (`aria-describedby`)
- ✅ Use `aria-required="true"` for required fields
- ✅ Use `aria-invalid="true"` for invalid fields
- ✅ Provide clear, actionable error messages
- ✅ Use proper input types (email, tel, number, date, etc.)
- ❌ Never use placeholder as label
- ❌ Never require fields without clear indication

### Testing for Accessibility
- ✅ Use axe DevTools browser extension
- ✅ Use WAVE (Web Accessibility Evaluation Tool)
- ✅ Test with keyboard only (no mouse)
- ✅ Test with screen reader (NVDA, JAWS, VoiceOver)
- ✅ Test with color blindness simulator
- ✅ Run automated accessibility tests in CI/CD
- ✅ Conduct manual accessibility testing regularly

---

## Responsive Design

### Mobile-First Approach
- ✅ Design for mobile first (320px+)
- ✅ Enhance for tablet (768px+)
- ✅ Optimize for desktop (1024px+)
- ✅ Test on real devices

### Breakpoints
```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }
```

### Responsive Rules
- ✅ Use flexible layouts (flexbox, grid)
- ✅ Use relative units (em, rem, %) instead of fixed pixels
- ✅ Stack content vertically on mobile
- ✅ Use single-column layout on mobile, multi-column on tablet+
- ✅ Adjust font sizes for mobile (not smaller than 14px)
- ✅ Use touch-friendly tap targets (44px minimum)
- ✅ Hide sidebar navigation on mobile (use hamburger menu)
- ✅ Simplify forms on mobile (use relevant input types)
- ✅ Optimize images for each breakpoint
- ❌ Never use horizontal scrolling
- ❌ Never use fixed layouts
- ❌ Never hide important content on mobile

### Touch-Friendly Design
- ✅ Minimum touch target size: 44px × 44px
- ✅ Minimum spacing between touch targets: 8px
- ✅ Use larger buttons/links on mobile
- ✅ Avoid hover-only interactions
- ✅ Use swipe gestures only as enhancement
- ❌ Never require precise clicking/pointing
- ❌ Never use hover states as only feedback

### Image Optimization
- ✅ Use responsive images (srcset, sizes)
- ✅ Optimize for mobile (smaller file sizes)
- ✅ Use WebP format with fallbacks
- ✅ Lazy load images below the fold
- ✅ Use aspect-ratio CSS for consistent sizing
- ✅ Provide descriptive alt text

---

## Performance & Technical

### Performance Budgets
- ✅ First Contentful Paint: < 1.5s
- ✅ Largest Contentful Paint: < 2.5s
- ✅ Cumulative Layout Shift: < 0.1
- ✅ Interactive: < 3.5s
- ✅ Page Size: < 3MB (mobile), < 5MB (desktop)
- ✅ CSS: < 50KB minified
- ✅ JavaScript: < 150KB minified

### Loading States
- ✅ Show loading indicator for operations > 200ms
- ✅ Display skeleton screens for page loads
- ✅ Disable buttons during submission
- ✅ Show progress for long operations
- ✅ Provide cancel option for long-running tasks
- ❌ Never freeze UI without feedback

### Error States
- ✅ Show clear error messages
- ✅ Provide recovery options
- ✅ Log errors for debugging
- ✅ Show fallback content when possible
- ✅ Don't expose technical error details to users

---

## Content Guidelines

### Writing Style
- ✅ Use clear, concise language
- ✅ Use active voice (e.g., "Save your file" not "Your file will be saved")
- ✅ Use present tense
- ✅ Avoid jargon and technical terms
- ✅ Use consistent terminology
- ✅ Use sentence case for UI text (except proper nouns)
- ✅ Keep labels and buttons short (3-5 words max)
- ❌ Never use ALL CAPS (except for acronyms)
- ❌ Never use passive voice
- ❌ Never use lorem ipsum in production

### Microcopy
- ✅ Provide helpful hints and labels
- ✅ Use friendly, conversational tone
- ✅ Explain errors clearly
- ✅ Provide next steps or actions
- ✅ Use validation messages to guide users
- ❌ Never blame the user ("You must...")
- ❌ Never use error messages without solutions

### Button Text Examples
- ✅ "Save Changes", "Delete Account", "Send Message"
- ✅ "Download File", "View Details", "Learn More"
- ✅ "Sign In", "Create Account", "Reset Password"
- ❌ ❌ "Submit", "OK", "Click Here"
- ❌ "Process", "Execute", "Finalize"

---

## Error Handling & Feedback

### Error Messages
- ✅ Be specific (what went wrong?)
- ✅ Be constructive (how to fix it?)
- ✅ Be polite (avoid blame)
- ✅ Show errors inline (near the problem)
- ✅ Use error icon + text + color
- ✅ Use plain language

### Good Error Messages
```
❌ Email address is invalid. Please enter a valid email (e.g., user@example.com).
❌ Password must be at least 8 characters and include one number.
❌ This username is already taken. Try a different username.
❌ Connection lost. Please check your internet and try again.
```

### Bad Error Messages
```
❌ Error 404
❌ Invalid input
❌ Try again
❌ Something went wrong
```

### Success States
- ✅ Show confirmation message
- ✅ Use success icon + color
- ✅ Auto-dismiss after 3-5 seconds (with close option)
- ✅ Show next steps or related actions
- ✅ Use positive, encouraging language

### Feedback Types
| Type | Icon | Color | Duration | Example |
|------|------|-------|----------|---------|
| Success | ✓ | Green (#2EA44F) | Auto-dismiss 3s | "Profile updated successfully" |
| Error | ✗ | Red (#D1242F) | Persistent | "Failed to save. Try again." |
| Warning | ! | Orange (#D4A500) | Auto-dismiss 5s | "You have unsaved changes" |
| Info | ⓘ | Blue (#0052CC) | Auto-dismiss 4s | "New features available" |

---

## Motion & Animation

### Animation Guidelines
- ✅ Keep animations under 300ms
- ✅ Use easing functions (ease-in-out, ease-out)
- ✅ Animate meaningful transitions only
- ✅ Provide disable option for animations
- ✅ Use GPU-accelerated properties (transform, opacity)
- ✅ Test on low-end devices
- ❌ Never animate on `left`, `top`, `width`, `height`
- ❌ Never exceed 1s for UI animations
- ❌ Never animate on page load (feels slow)

### Transition Timing
```css
/* Fast interactions (200-300ms) */
button:hover { transition: all 0.2s ease-out; }

/* Medium interactions (300-500ms) */
modal-enter { transition: all 0.3s ease-out; }

/* Slow feedback (500ms-1s) */
page-transition { transition: all 0.5s ease-out; }
```

### Reduce Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Component Checklist

When creating or modifying any component, verify:

### Visual Design
- [ ] Follows color palette
- [ ] Uses design tokens for spacing
- [ ] Maintains visual hierarchy
- [ ] Is responsive across breakpoints
- [ ] Has consistent styling with other components

### Interaction
- [ ] Has clear hover state
- [ ] Has clear active/selected state
- [ ] Has clear disabled state
- [ ] Provides visual feedback for actions
- [ ] Works with keyboard navigation

### Accessibility
- [ ] Has semantic HTML
- [ ] Has proper ARIA labels
- [ ] Has keyboard navigation support
- [ ] Has visible focus indicator
- [ ] Has 4.5:1 text contrast (or 3:1 for UI components)
- [ ] Has proper color + icon/text combinations
- [ ] Works with screen reader
- [ ] Respects `prefers-reduced-motion`

### Content
- [ ] Uses clear, concise language
- [ ] Uses sentence case (or proper title case)
- [ ] Has helpful microcopy/hints
- [ ] Uses descriptive labels
- [ ] Provides clear error messages

### Performance
- [ ] Optimized file sizes
- [ ] No unnecessary animations
- [ ] Lazy loads when appropriate
- [ ] Caches when appropriate

### Testing
- [ ] Passes automated accessibility tests (axe)
- [ ] Passes Playwright tests
- [ ] Tested with keyboard only
- [ ] Tested with screen reader
- [ ] Tested on mobile/tablet/desktop
- [ ] Tested with color blindness simulator

---

## Enforcement & Review

### Code Review Checklist
Every change must be reviewed against this document:

1. **Design**: Does it follow the design system?
2. **Accessibility**: Does it meet A11Y standards?
3. **Responsiveness**: Does it work on all devices?
4. **Performance**: Does it meet performance budgets?
5. **Content**: Is the language clear and concise?
6. **Testing**: Are there tests covering the change?

### Testing
- Run automated accessibility tests: `npm run test:a11y`
- Run Playwright tests: `npm test`
- Manual testing on real devices
- Screen reader testing (NVDA, VoiceOver, JAWS)
- Color blindness testing (Coblis, Color Oracle)

### Tools
- **Accessibility**: axe DevTools, WAVE, Lighthouse
- **Design**: Figma, Sketch, Adobe XD
- **Performance**: WebPageTest, GTmetrix, Chrome DevTools
- **Validation**: W3C HTML Validator, CSS Validator

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2026-05-26 | 1.0 | Initial UX Rules document created |

---

## Questions?

Refer to this document when:
- Creating new components
- Modifying existing components
- Reviewing pull requests
- Onboarding new team members
- Conducting design reviews

**Last Updated**: 2026-05-26
