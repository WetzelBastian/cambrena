# GitHub Pages Deployment

This repository uses GitHub Actions for automatic deployment.

**Fork-friendly**: The deployment automatically detects your repository name, so forks work without any configuration changes!

## Initial Setup (One-Time)

### 1. Enable GitHub Pages

1. Repository Settings → Pages
2. Under "Build and deployment":
   - **Source**: GitHub Actions
3. Save

### 2. Configure Permissions

1. Settings → Actions → General
2. Under "Workflow permissions":
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"
3. Save

## Usage

### Automatic Deployment

Every push to `main` triggers automatic deployment:
- GitHub Actions builds the site
- Deploys to GitHub Pages
- Updates within 1-2 minutes

### Manual Deployment

1. Actions tab
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"

## Site URL

https://cambrenacapital.github.io/cambrena/

## Troubleshooting

### Site Shows 404

1. Verify Settings → Pages → Source is "GitHub Actions"
2. Check Actions tab for successful workflow (green checkmark)
3. Wait 2-3 minutes after first deployment
4. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Workflow Fails

1. Settings → Actions → General
2. Ensure "Read and write permissions" is selected
3. Re-run workflow from Actions tab

### Changes Not Appearing

1. Check Actions tab for completed workflow
2. Hard refresh browser
3. Clear cache if needed

## Local Testing

Test production build before deploying:

```bash
npm run build
npm run preview
```

## Forking This Repository

This repository is designed to be fork-friendly!

### Steps to Deploy Your Fork:

1. **Fork the repository** to your GitHub account

2. **Enable GitHub Pages**:
   - Go to your fork's Settings → Pages
   - Set Source to "GitHub Actions"
   - Save

3. **Configure Permissions**:
   - Settings → Actions → General
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"
   - Save

4. **Push or trigger workflow**:
   - Any push to main will deploy automatically
   - Or manually trigger via Actions tab

5. **Access your site**:
   - Your site will be at: `https://yourusername.github.io/your-fork-name/`
   - The base path automatically matches your repository name!

No configuration changes needed - it just works!
