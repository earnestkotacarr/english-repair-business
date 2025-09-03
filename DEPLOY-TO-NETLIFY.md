# 🚀 How to Deploy to Netlify

## Why Drag & Drop Doesn't Work

This is a **Next.js application** with server-side rendering (SSR) and dynamic routes. It requires:
- Node.js build process
- Server functions for routing
- Special handling for internationalization

Simply dragging the folder to Netlify won't work because it needs to be built first.

## ✅ Correct Deployment Methods

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Log in to Netlify
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Settings will auto-detect (build command: `npm run build`)
   - Click "Deploy site"

### Option 2: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Manual Deploy (If you must)

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI and deploy the build:**
   ```bash
   netlify deploy --dir=.next --prod
   ```

## 📋 What's Already Configured

✅ **netlify.toml** - Configured for Next.js
✅ **@netlify/plugin-nextjs** - Installed
✅ **Build command** - `npm run build`
✅ **Publish directory** - `.next`
✅ **Redirects** - Language detection configured

## 🔧 Environment Variables (Optional)

If you add analytics or other services, add these in Netlify dashboard:
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- Any API keys needed

## 🌐 After Deployment

Your site will be available at:
- `https://YOUR-SITE-NAME.netlify.app`
- Japanese users → `/ja`
- English users → `/en`

## ⚠️ Important Notes

1. **First deployment may take 5-10 minutes** (building dependencies)
2. **Subsequent deployments are faster** (cached dependencies)
3. **Free tier limits:** 100GB bandwidth, 300 build minutes/month
4. **Custom domain:** Can be added in Netlify dashboard

## 🐛 Troubleshooting

If deployment fails:
1. Check build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`
4. Clear cache: In Netlify dashboard → "Clear cache and deploy"

## Need Help?

- Netlify Docs: https://docs.netlify.com/integrations/frameworks/next-js/
- Next.js on Netlify: https://www.netlify.com/with/nextjs/