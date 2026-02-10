# Zarvex Global

## Overview

Zarvex Global is a corporate website for a mining and mineral processing solutions company. It's a simple static site served through an Express.js backend. The frontend is a single HTML file with inline CSS and likely inline JavaScript, presenting company information including sections for home/hero, services, and contact. The project is designed to be deployable to GitHub Pages as a static site or run as a Node.js server in development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Single-page static HTML site** located in `client/index.html` with inline styles and content
- No frontend framework — plain HTML/CSS/JS
- The site uses a fixed navigation bar, hero section with background image, and standard corporate layout sections
- Images are expected in a `/images/` directory within the client folder (e.g., `hero.jpg`)
- CSS uses CSS custom properties (variables) for theming with a dark/orange color scheme

### Backend
- **Express.js** server (`server/index.ts`) written in TypeScript, executed via `tsx`
- The server simply serves static files from the `client/` directory and handles the root route by sending `index.html`
- Runs on port 5000, bound to `0.0.0.0`
- No API routes, no database, no authentication — purely a static file server
- The `dev` script runs `tsx server/index.ts` for development

### Build System
- There's a `script/build.ts` that uses both **esbuild** (for server bundling) and **Vite** (for client building), though Vite is not currently configured or installed as a dependency
- The build script has an allowlist of server dependencies to bundle for production optimization, but most of those packages aren't currently installed — this suggests the build script is a template/boilerplate carried over from another project
- TypeScript is used throughout but no `tsconfig.json` is present in the repository

### Project Structure
```
client/           → Static frontend files (HTML, CSS, images)
  index.html      → Main (and only) page
server/           → Express server
  index.ts        → Server entry point
script/           → Build scripts
  build.ts        → Production build script (esbuild + vite)
```

### Key Design Decisions
- **Static site with Express server**: The site could be served as purely static files (and the README describes GitHub Pages deployment), but Express is used for local development and potential future API expansion
- **No frontend build step for development**: The HTML is served as-is without compilation, keeping things simple
- **TypeScript for server code**: Provides type safety even for the minimal server, using `tsx` for direct execution without a separate compile step

## External Dependencies

### Runtime Dependencies (package.json)
- **express** (v4.22) — HTTP server for serving static files
- **tsx** (v4.21) — TypeScript execution engine for running `.ts` files directly
- **typescript** (v5.9) — TypeScript compiler
- **@types/express** and **@types/node** — Type definitions

### No External Services
- No database
- No authentication system
- No third-party API integrations
- No environment variables required

### Deployment
- Primary deployment target described is **GitHub Pages** (static file hosting)
- Custom domain configuration is documented in `README_DEPLOY.md`
- The Express server is used for local development on Replit (port 5000)