# Replace-Me Checklist for English Repair Website

## ⚠️ MUST REPLACE BEFORE DEPLOYMENT

### 1. Logo
- [ ] Add logo file to `/public/logo.png`
- [ ] Update import in `/src/components/Header.tsx`

### 2. Founder Photo
- [ ] Add photo to `/public/founder.jpg` 
- [ ] Update `/src/components/Hero.tsx` (line with placeholder)
- [ ] Update `/src/app/[locale]/about/page.tsx` (founder section)

### 3. Contact Information
- [ ] Email: Replace `info@englishrepair.jp` in:
  - `/src/components/Footer.tsx`
  - `/assets/pricing-sheet.md`
  - `/assets/one-pager.md`
- [ ] Phone: Replace `+81-XX-XXXX-XXXX` in:
  - `/src/components/Footer.tsx`
  - `/assets/pricing-sheet.md`
  - `/assets/one-pager.md`

### 4. Business Information
- [ ] Company address: Update in `/src/components/Footer.tsx`
- [ ] Invoice ID (適格請求書番号): Replace `T0-0000-0000-0000` in `/src/components/Footer.tsx`
- [ ] Founder name: Replace `[Founder Name]` in:
  - `/src/components/Hero.tsx`
  - `/messages/ja.json` (about.founderName)
  - `/messages/en.json` (about.founderName)

### 5. Form Integration
- [ ] Update form endpoint in `/src/app/[locale]/contact/page.tsx`
- [ ] Options:
  - Formspree: `https://formspree.io/f/YOUR_FORM_ID`
  - Netlify: Add `data-netlify="true"` to form
  - Custom API: Update `handleSubmit` function

### 6. Analytics & SEO
- [ ] Google Analytics 4 ID: Add to `/src/app/[locale]/layout.tsx`
- [ ] Domain: Update `www.englishrepair.jp` in:
  - Metadata
  - `/assets/one-pager.md`
- [ ] Create `robots.txt` in `/public/`
- [ ] Create `sitemap.xml` in `/public/`

### 7. Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
FORM_ENDPOINT=https://your-form-handler.com
```

### 8. Social Media (Optional)
- [ ] Add social media links to Footer if needed
- [ ] Add Open Graph images to `/public/`

### 9. Legal Documents
- [ ] Review and customize `/src/app/[locale]/privacy/page.tsx`
- [ ] Create legal/terms page if needed

### 10. Content Review
- [ ] Review all Japanese translations in `/messages/ja.json`
- [ ] Review all English content in `/messages/en.json`
- [ ] Verify technical terms in `/assets/termbase-template.csv`

## 📋 Pre-Launch Checklist

- [ ] All placeholders replaced
- [ ] Forms tested and working
- [ ] Analytics configured
- [ ] SEO metadata updated
- [ ] Mobile responsive verified
- [ ] Performance optimized (Lighthouse 95+)
- [ ] Cross-browser tested
- [ ] SSL certificate active
- [ ] Backup system in place
- [ ] Error monitoring configured

## 🚀 Deployment Commands

```bash
# Final build test
npm run build
npm start

# Deploy to Vercel
vercel --prod

# Or deploy to your preferred platform
```

---

Remember: This is a bilingual site. Always maintain both Japanese and English content!