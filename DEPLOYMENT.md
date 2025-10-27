# LeoCytte Website - GitHub Pages Deployment Guide

This guide will walk you through deploying your LeoCytte pharmaceutical consulting website to GitHub Pages for free hosting.

## Prerequisites

- GitHub account
- Git installed locally (or use Replit's Git integration)

## Deployment Steps

### Step 1: Prepare Your Project for Static Deployment

Your Replit project is currently a full-stack application, but GitHub Pages only hosts static files. We need to build the frontend into static files.

#### 1.1 Build the Static Site

Run the following command in your Replit shell:

```bash
npm run build
```

This will create a `dist/public` folder containing all your static files (HTML, CSS, JavaScript, images).

### Step 2: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name your repository (e.g., `leocytte-website`)
4. Choose **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### Step 3: Push Your Project to GitHub

#### Option A: Using Replit's Git Integration

1. In Replit, click the **"Version Control"** tab in the left sidebar
2. Click **"Create a Git repository"**
3. Once initialized, click the three dots (⋯) → **"Connect to GitHub"**
4. Follow the prompts to connect your GitHub account
5. Push your code to the repository

#### Option B: Using Command Line (in Replit Shell)

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - LeoCytte website"

# Add your GitHub repository as remote
# Replace USERNAME and REPO_NAME with your GitHub username and repository name
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Configure GitHub Pages

#### 4.1 Update Repository Settings

1. Go to your GitHub repository
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: **`main`** (or `master`)
   - Folder: **`/ (root)`**
5. Click **"Save"**

#### 4.2 Add GitHub Pages Build Workflow

GitHub Pages needs to know how to build your React app. Create a GitHub Actions workflow:

1. In your GitHub repository, create this file structure:
   ```
   .github/workflows/deploy.yml
   ```

2. Add this content to `deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build:client
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### 4.3 Update package.json Build Script

Make sure your `package.json` has this build script for client-only builds:

```json
{
  "scripts": {
    "build:client": "vite build"
  }
}
```

### Step 5: Configure Vite for GitHub Pages

Update your `vite.config.ts` to set the correct base path for GitHub Pages:

```typescript
export default defineConfig({
  // If deploying to https://username.github.io/repo-name/
  // Use: base: '/repo-name/'
  // If deploying to custom domain or https://username.github.io/
  // Use: base: '/'
  base: '/leocytte-website/', // Replace with your repo name
  
  // ... rest of config
});
```

### Step 6: Create .nojekyll File

GitHub Pages uses Jekyll by default. To disable it (required for Vite apps):

Create a file named `.nojekyll` (no content needed) in your repository root:

```bash
touch .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll for GitHub Pages"
git push
```

### Step 7: Deploy!

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push
   ```

2. GitHub Actions will automatically build and deploy your site
3. Check the **"Actions"** tab in your repository to monitor the deployment
4. Once complete (usually 2-5 minutes), your site will be live at:
   ```
   https://USERNAME.github.io/REPO_NAME/
   ```

## Custom Domain (Optional)

To use a custom domain like `www.leocytte.com`:

1. In your GitHub repository → **Settings** → **Pages**
2. Under **"Custom domain"**, enter your domain
3. Add these DNS records with your domain provider:

   **For apex domain (leocytte.com):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: USERNAME.github.io
   ```

4. Wait for DNS propagation (can take 24-48 hours)
5. Enable **"Enforce HTTPS"** in GitHub Pages settings

## Troubleshooting

### Issue: Blank Page After Deployment

**Solution:** Check your `base` path in `vite.config.ts`. It should match your repository name.

### Issue: 404 Errors on Refresh

**Solution:** GitHub Pages doesn't support client-side routing by default. Add a `404.html` that redirects to `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>LeoCytte</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
  <body></body>
</html>
```

Then update your `index.html` to handle the redirect:

```html
<script>
  (function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

### Issue: Images Not Loading

**Solution:** Ensure all image paths are relative and don't start with `/`. Vite should handle this automatically if you're using `import` statements.

### Issue: Contact Form Not Working

**Note:** The contact form currently only provides client-side validation and UI feedback. To make it functional, you'll need:
- A backend service (like Formspree, EmailJS, or your own API)
- Or implement the "Backend form handling" feature from your next phase

## Maintenance & Updates

To update your deployed site:

```bash
# Make your changes in Replit
# Build locally to test
npm run build

# Commit and push
git add .
git commit -m "Update: [description of changes]"
git push
```

GitHub Actions will automatically rebuild and deploy.

## Alternative: Deploy Directly from Replit

If you prefer to host on Replit instead of GitHub Pages:

1. Click the **"Deploy"** button in Replit
2. Choose **"Static"** deployment
3. Set build command: `npm run build`
4. Set output directory: `dist/public`
5. Deploy!

Your site will be available at: `https://your-repl-name.username.repl.co`

## Next Steps

Your website is now live! Consider:

- ✅ Setting up Google Analytics (from your next phase features)
- ✅ Implementing backend form handling for contact inquiries
- ✅ Adding the blog section for content marketing
- ✅ Creating case studies to showcase client success

---

**Need Help?** If you encounter any issues during deployment, check:
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
