# GitHub Pages Quick Start Guide

## 🚀 Fast Track Deployment (5 minutes)

### Step 1: Add Build Script

Since package.json is protected, add this script manually:

Open `package.json` and add this line to the `"scripts"` section:

```json
"build:client": "vite build",
```

Your scripts section should look like:
```json
"scripts": {
  "dev": "NODE_ENV=development tsx server/index.ts",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "build:client": "vite build",    ← ADD THIS LINE
  "start": "NODE_ENV=production node dist/index.js",
  "check": "tsc",
  "db:push": "drizzle-kit push"
}
```

### Step 2: Test Local Build

Run in Replit shell:
```bash
npm run build:client
```

You should see a `dist/public` folder created with your static files.

### Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Name: `leocytte-website` (or your choice)
3. Public repository
4. Don't initialize with README
5. Click "Create repository"

### Step 4: Push to GitHub

Run these commands in Replit shell:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - LeoCytte pharmaceutical consulting website"

# Connect to your GitHub repo (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push
git branch -M main
git push -u origin main
```

### Step 5: Enable GitHub Pages with Actions

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select: **GitHub Actions**
4. That's it! The `.github/workflows/deploy.yml` file will handle the rest

### Step 6: Configure Base Path (if needed)

**Option A: Deploying to `username.github.io/repo-name/`**

Open `vite.config.ts` and add this after line 6:

```typescript
export default defineConfig({
  base: '/repo-name/',  // ← ADD THIS (use your actual repo name)
  plugins: [
```

**Option B: Deploying to custom domain or `username.github.io`**

No changes needed! The default `base: '/'` is already correct.

### Step 7: Deploy

```bash
git add .
git commit -m "Configure for GitHub Pages"
git push
```

Your site will be live at:
- **With repo path**: `https://username.github.io/repo-name/`
- **Custom domain**: Configure in Settings → Pages

## ✅ You're Done!

Monitor deployment:
- Go to your repo → **Actions** tab
- Watch the "Deploy to GitHub Pages" workflow
- Takes 2-5 minutes
- Green checkmark = deployed!

## 📝 Files Created for Deployment

✅ `.github/workflows/deploy.yml` - Automatic build & deploy  
✅ `.nojekyll` - Disables Jekyll (required for Vite)  
✅ `DEPLOYMENT.md` - Full detailed guide  

## 🔧 Troubleshooting

**Blank page after deployment?**
- Check `base` path in `vite.config.ts` matches your repo name

**404 errors when refreshing pages?**
- This is normal for single-page apps on GitHub Pages
- See DEPLOYMENT.md for SPA routing fix

**Build fails in GitHub Actions?**
- Make sure you added `"build:client": "vite build"` to package.json

## 🎯 Next Steps

Once deployed, your site is live! Consider:
- Adding Google Analytics
- Implementing contact form backend
- Creating blog section
- Adding case studies

Need help? See the full **DEPLOYMENT.md** guide.
