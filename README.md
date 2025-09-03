# English Repair Website

A bilingual (Japanese/English) Next.js website for B2B technical English renovation services targeting Japanese SMEs.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]
cd EnglishRepair

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site. Default language is Japanese.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Replace These Items

Before deploying, replace these placeholders:

- **Logo**: Add logo file to `/public/logo.png` and update Header component
- **Founder Photo**: Add to `/public/founder.jpg` and update Hero component
- **Contact Info**:
  - Email: `info@englishrepair.jp` (Footer, Contact page)
  - Phone: `+81-XX-XXXX-XXXX` (Footer)
  - Address: Update in Footer component
- **Invoice ID**: `T0-0000-0000-0000` (Footer)
- **Form Endpoint**: Update form action in `/src/app/[locale]/contact/page.tsx`
- **Google Analytics**: Add GA4 ID to layout
- **Domain**: Update metadata and sitemap

## 📂 Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       # Main layout with i18n
│   │   ├── page.tsx         # Homepage
│   │   ├── services/        # Services page
│   │   ├── process/         # Process page
│   │   ├── results/         # Results page
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact form
│   │   └── privacy/         # Privacy policy
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Homepage hero section
│   ├── ValueCards.tsx       # Service value props
│   ├── ProcessTimeline.tsx  # 7-step process
│   ├── BeforeAfterSlider.tsx # Content comparison
│   └── LocaleSwitcher.tsx   # Language toggle
├── i18n.ts                  # Internationalization config
└── middleware.ts            # Locale routing
messages/
├── ja.json                  # Japanese content
└── en.json                  # English content
```

## 🌐 Internationalization

The site uses `next-intl` for i18n support:

- Default language: Japanese (`/`)
- English version: `/en/`
- Language switcher in header
- All content in `/messages/[locale].json`

To edit content:
1. Japanese: Edit `/messages/ja.json`
2. English: Edit `/messages/en.json`

## 🎨 Design System

### Colors
- Navy: `#1A1F36` (primary text, headers)
- Vermilion: `#C73E1D` (CTAs, accents)
- Grays: Multiple shades for UI elements
- Background: `#FAFBFC`

### Typography
- Japanese: Noto Sans JP
- English: Inter
- Sizes: Custom scale with comfortable line-height

## 📊 Analytics & SEO

### Set up Google Analytics 4:
1. Get GA4 measurement ID
2. Add to layout.tsx
3. Configure events (already wired in code):
   - `header_CTA`
   - `mid_CTA`
   - `footer_CTA`
   - `form_submit`

### SEO Checklist:
- [ ] Update meta titles/descriptions
- [ ] Add structured data (Organization, FAQPage)
- [ ] Generate sitemap.xml
- [ ] Add robots.txt
- [ ] Set up Search Console

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
FORM_ENDPOINT=https://your-form-handler.com
```

## 📝 Form Integration Options

### 1. Formspree
```javascript
action="https://formspree.io/f/YOUR_FORM_ID"
```

### 2. Netlify Forms
Add `data-netlify="true"` to form tag

### 3. Custom API
Update handleSubmit in Contact page

## 🛠️ Maintenance

### Regular Updates
```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update Next.js
npm install next@latest react@latest react-dom@latest
```

### Performance Monitoring
- Target Lighthouse scores: 95+ all categories
- Monitor Core Web Vitals
- Check mobile responsiveness

## 📄 License

Private/Commercial - Update as needed

## 🤝 Support

For technical issues, contact your developer.
For content updates, edit the JSON files in `/messages/`.

---

Built with Next.js 14, TypeScript, Tailwind CSS, and next-intl