# Cambrena Website

Official website for Cambrena Capital, deployed on GitHub Pages.

## Live Site

https://cambrenacapital.github.io/cambrena/

## Tech Stack

- **Framework**: React 18.3.1 + TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Deployment**: GitHub Pages (automated via GitHub Actions)

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
# Clone repository
git clone https://github.com/CambrenaCapital/cambrena.git
cd cambrena

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:8080

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

Automatically deploys to GitHub Pages on push to `main` branch.

**Fork-friendly**: This repository automatically detects the repository name, so forks work without any configuration changes. Just enable GitHub Pages and it deploys!

For manual deployment, go to Actions → Deploy to GitHub Pages → Run workflow.

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions and forking guide.

## Project Structure

```
src/
├── components/
│   ├── ui/              # UI components
│   ├── GeometricAccent.tsx
│   ├── TriangleAccent.tsx
│   └── NavLink.tsx
├── pages/
│   ├── Index.tsx        # Home
│   ├── Imprint.tsx
│   ├── PrivacyPolicy.tsx
│   └── NotFound.tsx     # 404
├── lib/utils.ts
├── App.tsx
└── main.tsx
```

## License

Copyright © 2024 Cambrena Capital. All rights reserved.
