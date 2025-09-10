# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev          # Start development server on localhost:3000
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking (no emit)
```

### Testing
```bash
npx playwright test                          # Run all Playwright E2E tests
npx playwright test tests/language.spec.ts  # Run specific test file
npx playwright test --ui                    # Open Playwright UI mode
```

## Architecture Overview

This is a Next.js 14 application with internationalization (i18n) for a B2B technical English renovation service. The architecture emphasizes bilingual content delivery (Japanese/English) with server-side rendering.

### Core Architecture Patterns

1. **Internationalized Routing**: All routes follow `/[locale]/page-name` pattern where locale is either `ja` (default) or `en`. The middleware automatically handles locale detection and routing.

2. **Component Organization**: Components in `/src/components/` are modular and reusable. Key interactive components use Framer Motion for animations and Radix UI for accessible primitives.

3. **Content Management**: All translatable content is stored in `/messages/ja.json` and `/messages/en.json`. The `next-intl` library handles translation loading and locale context.

4. **Form Handling**: Contact forms use React Hook Form with Zod validation. Form submissions currently need backend integration (marked with TODO comments).

### Key Technical Decisions

- **Styling**: Tailwind CSS with custom design tokens defined in `tailwind.config.ts`. Custom colors include `erb-navy`, `erb-vermilion`, and scale variations of `erb-blue` and `erb-gray`.

- **Fonts**: Inter for Latin text, Noto Sans JP for Japanese, with optimized loading via Next.js font system.

- **Path Aliases**: Use `@/*` to import from `src/*` directory.

### Development Considerations

1. **Adding New Pages**: Create under `/src/app/[locale]/page-name/page.tsx` and add translations to both message files.

2. **Component Props**: Most components accept `className` for styling composition. Animation components often have `delay` and `duration` props.

3. **Translation Keys**: Follow the existing nested structure in message files. Use `useTranslations()` hook to access translations.

4. **Form Integration**: Contact form backend is not yet connected. Look for TODO comments in `/src/app/[locale]/contact/page.tsx` for integration points.

### Deployment

Configured for Netlify deployment with:
- Automatic locale detection via middleware
- Next.js plugin in `netlify.toml`
- Environment variables for production forms and analytics (see README.md)

### Testing Approach

Playwright tests focus on critical user paths:
- Language switching functionality
- Visual regression testing
- Form validation behavior

Run tests before deployment to ensure i18n and interactive features work correctly.