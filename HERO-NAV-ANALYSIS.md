# Hero Navigation Analysis & Redesign

**Date**: May 26, 2026  
**Purpose**: Analyze and redesign the hero navigation section with proper UX hierarchy and grouping

---

## Current Analysis (from Screenshot)

### Screenshot Content Breakdown

#### Main Navigation (Top)
```
News | Events | Products | Industries | Sales | Marketing | Technical | Training | Downloads | My Groups | SPM World
```
**Issues**: 11 items, no visual grouping, flat structure

#### Hero Section (Black Background) - **To Be Enhanced**

**Left Column - Page Title**
```
SPM Partner Portal
Empowering SPM Partners Worldwide
```

**Middle Column - POPULAR (Right-aligned)**
- 📥 Downloads
- ▶️ SPM Play
- 📄 TD sheets
- 💻 Latest software

**Right Column - OTHER RESOURCES (Right-aligned)**
- Support Portal 🔗
- Knowledge base 🔗
- Subscription Manager 🔗
- Integration Portal 🔗
- Service Status 🔗
- Marketing portal 🔗

---

## Problem Statement

The current hero section layout:
- ❌ No clear hierarchy (POPULAR vs OTHER RESOURCES unlabeled)
- ❌ No visual grouping (items appear random)
- ❌ Limited spacing (cramped layout)
- ❌ Unclear relationships between items
- ❌ No category structure
- ❌ Missing visual separators

---

## UX Principles to Apply

### 1. **Information Hierarchy**
- Primary content (most important): Left-aligned
- Secondary actions (popular): Center
- Tertiary links (resources): Right

### 2. **Visual Grouping**
- Group related items together
- Use visual separators (spacing, lines, colors)
- Apply consistent styling within groups

### 3. **Progressive Disclosure**
- Show primary items prominently
- Secondary items visible but less prominent
- Advanced options clearly labeled

### 4. **Consistency**
- Same icon style throughout
- Consistent spacing (8px scale)
- Matching link styling

### 5. **Scanability**
- Short labels (3-5 words max)
- Icons before text
- Clear visual feedback

---

## Proposed Hero Navigation Structure

### Layout Design: **3-Column Grid with Clear Grouping**

```
┌─────────────────────────────────────────────────────────────────┐
│  SPM Partner Portal                    POPULAR          RESOURCES │
│  Empowering SPM Partners Worldwide                                │
│                                                                    │
│  ────────────────────────────────────────────────────────────── │
│                                                                    │
│  📥 Downloads              ▶️ SPM Play        🔗 Support Portal   │
│  Get all resources         Video library      Help & support      │
│                                                                    │
│  📄 TD sheets              💻 Latest software 🔗 Knowledge base    │
│  Documentation             Latest versions    Docs & guides       │
│                                                                    │
│                                            🔗 Subscription Mgr    │
│                                            Account management     │
│                                                                    │
│                                            🔗 Integration Portal  │
│                                            API & integrations     │
│                                                                    │
│                                            🔗 Service Status      │
│                                            System status          │
│                                                                    │
│                                            🔗 Marketing portal    │
│                                            Campaign tools         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Detailed Information Architecture

### **Section 1: Primary (Left Column)**
**Purpose**: Brand identity and tagline  
**Content**:
- Title: "SPM Partner Portal"
- Subtitle: "Empowering SPM Partners Worldwide"
- Visual weight: Large, bold typography

**Styling**:
- Font size: 32px (H1) + 16px (subtitle)
- Color: White on black background
- Spacing: 32px from edges

---

### **Section 2: POPULAR (Center Column)**
**Purpose**: Quick access to most-used resources  
**Content**:
```
POPULAR
━━━━━━━━━━━━━━━━━━━━

📥 Downloads
   Get all resources

📄 TD sheets
   Documentation

▶️ SPM Play
   Video library

💻 Latest software
   Latest versions
```

**Why this grouping**:
- Downloads & TD sheets = reference materials (documentation)
- SPM Play & Latest software = learning & software resources
- All 4 items are the most frequently accessed

**Styling**:
- Section title: "POPULAR" (12px, uppercase, semi-bold)
- Icon + title: 16px, bold
- Description: 14px, secondary gray text
- Spacing between items: 16px
- Divider line above section: 1px gray

---

### **Section 3: RESOURCES (Right Column)**
**Purpose**: Additional links and portals  
**Content**: 6 Portal Links
```
OTHER RESOURCES
━━━━━━━━━━━━━━━━━━━━

🔗 Support Portal
   Help & support

🔗 Knowledge base
   Docs & guides

🔗 Subscription Manager
   Account management

🔗 Integration Portal
   API & integrations

🔗 Service Status
   System status

🔗 Marketing portal
   Campaign tools
```

**Why this grouping**:
- All external portal links
- Each has distinct purpose
- Lower priority than POPULAR
- Clearly marked as resources

**Styling**:
- Section title: "RESOURCES" (12px, uppercase, semi-bold)
- Link + icon: 16px, white with 70% opacity
- Description: 13px, secondary gray text
- Hover: Full white opacity, slight underline
- Spacing between items: 12px
- Divider line above section: 1px gray

---

## Visual Design Details

### **Color Scheme (Black Hero Background)**

```css
Background:        #1A1A1A (dark gray-black)
Text Primary:      #FFFFFF (100% opacity)
Text Secondary:    rgba(255, 255, 255, 0.7) (70% opacity)
Divider Lines:     rgba(255, 255, 255, 0.1) (10% opacity)
Hover State:       rgba(255, 255, 255, 1) (100% opacity)
Link Color:        #87CEEB (sky blue, for external links)
```

### **Typography**

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Portal Title | Heading | 32px | 700 | 1.2 |
| Subtitle | Body | 16px | 400 | 1.5 |
| Section Title | Label | 12px | 600 | 1.4 |
| Item Title | Body | 16px | 600 | 1.4 |
| Item Description | Body | 14px | 400 | 1.4 |

### **Spacing (8px Base Unit)**

```
Section horizontal padding:    32px (4 × 8px)
Section top/bottom padding:    40px (5 × 8px)
Column gap:                    48px (6 × 8px)
Item vertical spacing:         16px (2 × 8px)
Icon to text spacing:          8px (1 × 8px)
Divider to content:            16px (2 × 8px)
```

### **Icons**

Use consistent icon style throughout:
- **Downloads**: 📥 or 🔽
- **TD sheets**: 📄 or 📋
- **SPM Play**: ▶️ or 🎬
- **Latest software**: 💻 or 🔧
- **Portal links**: 🔗 (external link indicator)
- **Support**: 🎧 or ❓
- **Knowledge base**: 📚
- **Subscription**: 💳
- **Integration**: ⚙️
- **Service Status**: 📊
- **Marketing**: 📢

---

## Layout Grid

### **Desktop (1024px+) - Full 3-Column Layout**

```
┌─────────────────────────────────────────────────────┐
│ Max-width: 1200px, centered                          │
│                                                      │
│ ┌──────────┬──────────────┬──────────────────────┐  │
│ │ Primary  │   POPULAR    │   RESOURCES          │  │
│ │ (1/3)    │   (1/3)      │   (1/3)              │  │
│ │          │              │                      │  │
│ │ 32px     │ 16px × 4     │ 16px × 6 (scrollable)
│ │ Title    │ items        │ links               │  │
│ └──────────┴──────────────┴──────────────────────┘  │
│                                                      │
└─────────────────────────────────────────────────────┘

Grid: 3 equal columns with 48px gap
Height: ~400-500px depending on scrollable content
```

### **Tablet (768px - 1023px) - 2-Column Layout**

```
┌────────────────────────────────────┐
│ Max-width: 100%, padding 24px       │
│                                     │
│ ┌──────────────────────────────┐   │
│ │ Primary (full width)          │   │
│ │ Title + Subtitle              │   │
│ └──────────────────────────────┘   │
│                                     │
│ ┌──────────────┬──────────────┐   │
│ │  POPULAR     │  RESOURCES   │   │
│ │  (1/2)       │  (1/2)       │   │
│ │  4 items     │  6 links     │   │
│ └──────────────┴──────────────┘   │
│                                     │
└────────────────────────────────────┘

Grid: 2 equal columns with 24px gap
```

### **Mobile (320px - 767px) - 1-Column Stacked Layout**

```
┌──────────────────────┐
│ Padding: 16px        │
│                      │
│ ┌──────────────────┐ │
│ │ Primary          │ │
│ │ Title + Subtitle │ │
│ └──────────────────┘ │
│                      │
│ ┌──────────────────┐ │
│ │ POPULAR          │ │
│ │ 4 items stacked  │ │
│ └──────────────────┘ │
│                      │
│ ┌──────────────────┐ │
│ │ RESOURCES        │ │
│ │ 6 links stacked  │ │
│ └──────────────────┘ │
│                      │
└──────────────────────┘

Single column, stacked sections
No max-width limit
```

---

## Interaction Design

### **Hover States**

**For Links & Items**:
```css
Base state:
  - Color: rgba(255, 255, 255, 0.7)
  - Cursor: pointer
  - Transition: all 0.2s ease-out

Hover state:
  - Color: rgba(255, 255, 255, 1)
  - Background: rgba(255, 255, 255, 0.05)
  - Underline: 1px from bottom
  - Transform: translateX(4px) (subtle movement)
  - Transition: all 0.2s ease-out
```

### **Focus States (Keyboard Navigation)**

```css
Focus:
  - Outline: 2px solid #87CEEB (sky blue)
  - Outline-offset: 4px
  - Box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.2)
```

### **Active/Current State**

```css
Active (currently viewing category):
  - Color: #87CEEB (sky blue)
  - Font-weight: 600
  - Bottom-border: 2px solid #87CEEB
```

---

## HTML Structure

### **Semantic Markup**

```html
<section class="hero-navigation" aria-labelledby="hero-title">
  <h2 id="hero-title" class="sr-only">Main Portal Navigation</h2>

  <!-- Column 1: Primary -->
  <div class="hero-column hero-primary" role="region" aria-label="Portal Header">
    <h1 class="hero-title">SPM Partner Portal</h1>
    <p class="hero-subtitle">Empowering SPM Partners Worldwide</p>
  </div>

  <!-- Column 2: Popular Resources -->
  <nav class="hero-column hero-popular" aria-labelledby="popular-title">
    <h3 id="popular-title" class="hero-section-title">Popular</h3>
    <ul class="hero-links">
      <li>
        <a href="#downloads" class="hero-link">
          <span class="hero-icon">📥</span>
          <span class="hero-link-content">
            <span class="hero-link-title">Downloads</span>
            <span class="hero-link-desc">Get all resources</span>
          </span>
        </a>
      </li>
      <!-- More items... -->
    </ul>
  </nav>

  <!-- Column 3: Resources -->
  <nav class="hero-column hero-resources" aria-labelledby="resources-title">
    <h3 id="resources-title" class="hero-section-title">Resources</h3>
    <ul class="hero-links">
      <li>
        <a href="/support" class="hero-link" target="_blank" rel="noopener">
          <span class="hero-icon">🔗</span>
          <span class="hero-link-content">
            <span class="hero-link-title">Support Portal</span>
            <span class="hero-link-desc">Help & support</span>
          </span>
        </a>
      </li>
      <!-- More items... -->
    </ul>
  </nav>
</section>
```

---

## CSS Architecture

### **BEM Class Structure**

```css
/* Block */
.hero-navigation { }

/* Elements */
.hero-navigation__column { }
.hero-navigation__column--primary { }
.hero-navigation__column--popular { }
.hero-navigation__column--resources { }

.hero-navigation__title { }
.hero-navigation__subtitle { }
.hero-navigation__section-title { }

.hero-navigation__links { }
.hero-navigation__link { }
.hero-navigation__link-icon { }
.hero-navigation__link-title { }
.hero-navigation__link-desc { }

/* Modifiers */
.hero-navigation__link--external { }
.hero-navigation__link--active { }
```

---

## Accessibility Checklist

### **Semantic HTML**
- ✅ Use `<section>` for main container
- ✅ Use `<nav>` for navigation columns
- ✅ Use `<h1>` for portal title
- ✅ Use `<h3>` for section titles
- ✅ Use `<a>` for links
- ✅ Use `<ul>` and `<li>` for link lists

### **ARIA**
- ✅ `aria-labelledby` linking sections to titles
- ✅ `aria-label` describing region purpose
- ✅ `aria-current="page"` for active link
- ✅ `role="region"` for sections

### **Keyboard Navigation**
- ✅ Tab to navigate all links
- ✅ Enter to activate links
- ✅ Visible 2px focus outline
- ✅ Logical tab order

### **Screen Reader Support**
- ✅ Descriptive link text (not "click here")
- ✅ Icon descriptions in text
- ✅ Section titles with `aria-labelledby`
- ✅ External link indicator (`target="_blank"` announced)

### **Visual**
- ✅ 4.5:1 contrast ratio (white on dark background)
- ✅ Not relying on color alone
- ✅ Visible hover states
- ✅ Visible focus states

---

## Responsive Breakpoints

### **Desktop (1200px+)**
- 3-column grid (1/3 width each)
- 48px column gap
- Full 400px+ height
- All items visible

### **Large Tablet (768px - 1199px)**
- 2-column grid (1/2 width each)
- 32px column gap
- Primary spans top
- Secondary sections below

### **Mobile (320px - 767px)**
- 1-column stacked layout
- 16px padding
- 100% width items
- Scrollable resources section

---

## Animation & Motion

### **Transitions**
```css
Base transition:      all 0.2s ease-out
Hover/Focus:          0.2s ease-out
Scroll animations:    0.3s ease-out
```

### **Reduce Motion**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

---

## Performance Considerations

- ✅ No JavaScript required (pure CSS)
- ✅ Lightweight icon approach (emoji or SVG inline)
- ✅ Minimal CSS (BEM structure)
- ✅ Fast rendering (no image assets)
- ✅ Accessible focus management

---

## Implementation Steps

1. **Create HTML structure** with semantic markup
2. **Add CSS styling** following BEM methodology
3. **Implement responsive design** with media queries
4. **Test keyboard navigation** (Tab, Arrow, Enter)
5. **Verify contrast ratios** (4.5:1 minimum)
6. **Screen reader testing** (NVDA, VoiceOver, JAWS)
7. **Cross-browser testing** (Chrome, Firefox, Safari, Edge)
8. **Accessibility audit** with axe DevTools

---

## Visual Mockup ASCII

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                                  ┃
┃  SPM Partner Portal              POPULAR          RESOURCES     ┃
┃  Empowering SPM Partners         ─────────        ─────────     ┃
┃  Worldwide                                                       ┃
┃                                  📥 Downloads     🔗 Support    ┃
┃                                  Get resources    Help & FAQ    ┃
┃                                                                  ┃
┃                                  📄 TD sheets     🔗 Knowledge  ┃
┃                                  Documentation    Docs & guides ┃
┃                                                                  ┃
┃                                  ▶️ SPM Play      🔗 Subscription ┃
┃                                  Video library    Manage account ┃
┃                                                                  ┃
┃                                  💻 Latest SW     🔗 Integration ┃
┃                                  Latest versions  APIs & tools   ┃
┃                                                                  ┃
┃                                                  🔗 Service     ┃
┃                                                  System status  ┃
┃                                                                  ┃
┃                                                  🔗 Marketing   ┃
┃                                                  Campaign tools ┃
┃                                                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## Summary: UX Best Practices Applied

| Principle | Implementation |
|-----------|-----------------|
| **Visual Hierarchy** | Large title, medium section titles, smaller links |
| **Grouping** | 3 distinct columns with clear purposes |
| **Progressive Disclosure** | Primary visible, secondary organized, tertiary scrollable |
| **Consistency** | Same styling, icons, spacing throughout |
| **Scanability** | Icons + bold titles make scanning easy |
| **Accessibility** | Semantic HTML, ARIA, keyboard nav, contrast |
| **Responsiveness** | 3-column → 2-column → 1-column layouts |
| **Feedback** | Hover, focus, active states clearly visible |
| **Performance** | No JS, minimal CSS, fast rendering |
| **Usability** | Clear paths to all resources, intuitive organization |

---

## Next Steps

1. Implement this hero navigation structure
2. Update all links and portal URLs
3. Test with keyboard navigation
4. Verify with screen readers
5. Check contrast ratios
6. Test responsive design
7. Gather user feedback
8. Refine based on testing

