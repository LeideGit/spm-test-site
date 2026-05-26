# SPM Test Site — UI Prototype

A rapid prototyping environment for SPM Test Site UI/UX design validation.

## Overview

This is a **mock data prototype** designed for interactive demo and user testing. It is NOT a production website—it's a design validation shell with comprehensive component documentation and testing.

### Key Features
- 🎨 **Component Library**: All UI components organized by category with design system documentation
- 📋 **Design System**: Typography, colors, spacing, and accessibility guidelines
- 🧪 **Playwright Tests**: Comprehensive E2E tests for all interactions
- 📊 **Changelog**: Detailed changelog with token tracking for every change
- 🚀 **GitHub Pages**: Deployed live for easy sharing and testing

## Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# Opens server at http://localhost:8080
```

### Testing
```bash
npm test              # Run tests
npm run test:headed   # Run with visible browser
npm run test:debug    # Debug mode
```

## Project Structure
- `index.html` — Main HTML shell
- `app.js` — Application logic
- `styles.css` — All styling with CSS variables
- `mock-data.js` — Sample data
- `changelog.md` — Project changelog with token tracking
- `tests/` — Playwright tests
- `playwright.config.js` — Test configuration

## Component Library

Navigate to **Component Library** in the sidebar to view:
- All UI components organized by category
- Design system rules (typography, colors, spacing)
- Live component previews

## Testing

All interactions and pages are tested with Playwright. Tests are automatically run with development server.

## Changelog

See `changelog.md` for detailed change history, including:
- User stories for each change
- Solutions implemented
- Token usage tracking
- Cumulative token sum

## Design System

The project uses a professional, minimalist design system:
- **Primary Navy**: #1A2332
- **Accent Blue**: #0052CC
- **Status Colors**: Success (#2EA44F), Warning (#D4A500), Error (#D1242F), Info (#0052CC)
- **Spacing**: 8px base unit
- **Border Radius**: 6px (angular, professional)

## Notes

- 🔧 No build step required—vanilla HTML/CSS/JavaScript
- 📦 All data is mocked; no backend or external APIs
- ♻️ Hot reload: Just refresh browser to see changes
- 📱 Fully responsive design
- ✅ Semantic HTML and accessibility best practices
