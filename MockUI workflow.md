
================================================================================
  UI MOCK DATA CONCEPT PROTOTYPE PROJECTS — SYSTEM SUMMARY
================================================================================

WHAT IS THIS?
  A complete system for creating lightweight "HTML shell sites" for UI/UX design
  validation, user testing, and rapid prototyping. NOT production websites.

KEY FEATURES
  ✓ No build step (vanilla HTML/CSS/JavaScript)
  ✓ Self-contained (all data mocked)
  ✓ Component library with tabbed interface
  ✓ Design system documentation (typography, colors, spacing)
  ✓ Playwright E2E testing
  ✓ GitHub Pages deployment
  ✓ Detailed changelog with token tracking
  ✓ Professional minimalist design
  ✓ Fully responsive
  ✓ Accessible (semantic HTML, good contrast)

TECH STACK
  Frontend:    HTML5, CSS3, Vanilla JavaScript
  Testing:     Playwright (E2E)
  Hosting:     GitHub Pages (auto-deploy)
  Data:        Mock data in JavaScript
  Styling:     CSS Grid, Flexbox, CSS Variables

QUICK START (5 MINUTES)
  1. Create GitHub repo
  2. Enable GitHub Pages
  3. Clone locally: git clone [url]
  4. npm install
  5. npm run dev (http://localhost:8080)
  6. npm run test:headed

PROJECT STRUCTURE
  [project-name]/
  ├── index.html              (10 lines)
  ├── app.js                  (core logic)
  ├── styles.css              (all styling)
  ├── mock-data.js            (sample data)
  ├── changelog.md            (changelog + tokens)
  ├── README.md               (documentation)
  ├── package.json            (dependencies)
  ├── playwright.config.js    (test config)
  ├── .gitignore
  └── tests/
      └── [project].spec.js   (tests)

  Total size: < 50 KB uncompressed

Subpage for "UX Guide"
  4 tabs for easy navigation:
  • Components (all UI components organized by category)
  • Design System (typography H1-H6, spacing, sizing)
  • Colors (complete palette with hex values)
  • Spacing (visual spacing scale)

DESIGN SYSTEM COLORS (COPY-PASTE)
  --primary-navy: #1A2332
  --primary-dark: #233044
  --accent-blue: #0052CC
  --status-success: #2EA44F
  --status-warning: #D4A500
  --status-error: #D1242F
  --status-info: #0052CC
  --neutral-white: #FFFFFF
  --neutral-light-gray: #F8F9FA
  --text-primary: #1F2937
  --text-secondary: #6B7280

CHANGELOG FORMAT
  **Total Token Usage: X,XXX+** (cumulative - always at top)

  ### [Date] | [Time] — [Title]
  **User Story:** Problem being solved
  **Problem:** (Optional) What was broken
  **Solution:** How it was fixed
  **Changes Made:** Specific code changes
  **Result:** User-visible outcome
  **Tokens Usage:** ~[number]

TESTING
  npm test              Run all tests
  npm run test:headed   Visible browser
  npm run test:debug    Debugger mode

DEPLOYMENT
  1. Push to main: git push origin main
  2. GitHub Pages auto-deploys (30 seconds)
  3. Live at: https://[username].github.io/[repo]/

COMMON COMMANDS
  npm run dev           Start server (:8080)
  npm test              Run tests
  npm run test:headed   Tests with visible browser
  npm run test:debug    Debug tests

FILE LOCATIONS
  All documents in: /Users/johanleidefors/.claude/

  INDEX - Start here:
  UI-MOCK-DATA-INDEX.md           (navigation guide)

  MAIN DOCUMENTS:
  UI-MockData-README.md            (overview, ~8 KB)
  UI-MockData-QuickReference.md    (quick lookup, ~5 KB)
  UI-MockData-SetupChecklist.md    (setup steps, ~10 KB)
  UI-MockData-PrototypeProject-PROMPT.md    (comprehensive, ~25 KB)
  UI-MockData-ChangelogExample.md  (format examples, ~12 KB)

WHICH DOCUMENT DO I NEED?
  What is this?                          → README
  How do I set up?                       → SetupChecklist
  What command? How do I format?         → QuickReference
  Show me examples                       → ChangelogExample
  I need details on [topic]              → PrototypeProject-PROMPT
  How do I find everything?              → INDEX

NEXT STEPS
  1. Read:  UI-MOCK-DATA-INDEX.md (5 minutes)
  2. Choose: Your scenario
  3. Follow: Recommended document
  4. Build: Your first prototype!

SETUP TIME
  Design & planning:     15 minutes
  GitHub setup:          10 minutes
  Local setup:           10 minutes
  Project structure:     5 minutes
  UX Guide library:      20 minutes
  Styling:               15 minutes
  Testing:               15 minutes
  Changelog:             10 minutes
  Commit & deploy:       5 minutes
  ───────────────────────────────
  TOTAL:                 ~2 hours

INSPIRED BY
  Acme Dashboard project (GenUITestProject01)
  ✓ Component library patterns
  ✓ Professional dark theme
  ✓ Vibrant status colors
  ✓ Detailed changelog
  ✓ Comprehensive testing
  ✓ Token tracking

USE CASES
  ✓ Design validation before implementation
  ✓ Stakeholder demos and user testing
  ✓ Component showcase and design system
  ✓ Rapid prototyping of UI/UX concepts
  ✓ Building design case studies
  ✓ Design documentation

KEY PRINCIPLES
  1. No build step (vanilla tech stack)
  2. Self-contained (mocked data)
  3. Component-centric (library is core)
  4. Transparent (changelog tracks all)
  5. Testable (Playwright coverage)
  6. Accessible (semantic, good contrast)
  7. Shareable (GitHub Pages)

DESIGN GUIDELINES
  • Professional minimalist aesthetic
  • Dark navy headers (#233044, #000000)
  • White text with opacity
  • Vibrant status colors (easily distinguishable)
  • 6px border radius (angular, professional)
  • 8px spacing base unit
  • 0.2s transitions
  • Minimal shadows

SUCCESS CRITERIA
  ✓ Local dev server runs
  ✓ All Playwright tests pass
  ✓ Component library with tabs
  ✓ Design system documented
  ✓ GitHub Pages live
  ✓ Changelog created
  ✓ Responsive (mobile/tablet/desktop)
  ✓ All interactions working
  ✓ README complete
  ✓ First push to main

TROUBLESHOOTING QUICK REFERENCE
  Tests won't start?         npm install, then npm run dev first
  Styles not loading?        Check CSS variables in :root
  Components not showing?    Verify renderComponentsPage() called
  Tab switching broken?      Check .tab-btn has data-tab attribute
  GitHub Pages not live?     Confirm Settings → Pages → Deploy from main
  Mobile looks broken?       Check media queries, test with setViewportSize

COLLABORATION
  • GitHub for version control
  • Changelog for case study
  • Token tracking for budgeting
  • Comments in changelog explain design decisions
  • Easy to share live URL with stakeholders

MAINTAINED BY
  Johan Leidefors
  Created: 2026-05-25
  Version: 1.0
  Status: Production ready

