# GitHub Pages Deployment Guide

This repository is configured to automatically deploy to GitHub Pages. Follow these steps to enable it for your fork.

## Quick Setup (One-Time Configuration)

### Step 1: Enable GitHub Pages

1. Go to your repository settings: `https://github.com/CambrenaCapital/cambrena/settings/pages`
2. Under **"Build and deployment"**:
   - **Source**: Select `GitHub Actions`
3. Save the settings

### Step 2: Trigger the Deployment

The deployment will automatically trigger when you:
- Push to the `main` branch
- Manually trigger via Actions tab

To manually trigger:
1. Go to the **Actions** tab in your repository
2. Click on **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** → **"Run workflow"**

### Step 3: Access Your Site

After the workflow completes (usually 1-2 minutes), your site will be available at:

**https://cambrenacapital.github.io/cambrena/**

## Troubleshooting

### Site shows 404 or doesn't load

1. **Check if GitHub Pages is enabled**:
   - Go to Settings → Pages
   - Ensure Source is set to "GitHub Actions"

2. **Check if the workflow ran successfully**:
   - Go to Actions tab
   - Look for a successful green checkmark on the latest workflow run
   - If there's a red X, click it to see the error

3. **Verify the deployment**:
   - Go to Settings → Pages
   - You should see "Your site is live at https://cambrenacapital.github.io/cambrena/"

4. **Clear browser cache**:
   - Hard refresh with `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Workflow fails to run

1. **Check repository permissions**:
   - Go to Settings → Actions → General
   - Under "Workflow permissions", ensure "Read and write permissions" is selected
   - Check "Allow GitHub Actions to create and approve pull requests"
   - Click Save

2. **Re-run the workflow**:
   - Go to Actions tab
   - Click on the failed workflow
   - Click "Re-run all jobs"

## For Different Repository Names

This configuration automatically detects your repository name and sets the correct base path. If you rename the repository:

1. The workflow will automatically use the new name on the next deployment
2. Your site URL will change to: `https://cambrenacapital.github.io/new-repo-name/`

## Local Development

To run locally:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:8080`
