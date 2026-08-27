# Hand Held Mastery - Astro Static Site

The definitive technical resource for handheld PC gaming consoles, accessories, and optimization guides. Built with Astro 5.x, Tailwind CSS, and React components.

## Project Structure

```
astro-site/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro     # Base page layout
│   ├── pages/               # File-based routing
│   │   ├── index.astro      # Homepage
│   │   ├── compare.astro    # Product comparison
│   │   ├── blog.astro       # Blog listing
│   │   ├── toolbox.astro    # Tools & utilities
│   │   ├── monetization.astro
│   │   ├── sitemap.astro
│   │   ├── contact.astro
│   │   ├── articles/
│   │   │   └── [slug].astro # Dynamic article pages
│   │   └── compare/
│   │       └── [slug].astro # Dynamic product pages
│   ├── content/
│   │   ├── articles/        # 30 article Markdown files
│   │   └── products/        # 47 product JSON files
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── Dockerfile               # Multi-stage Docker build
├── docker-compose.yml
├── nginx.conf               # Nginx config for clean URLs
└── .dockerignore
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Stats, featured consoles, categories, latest articles |
| Compare | `/compare` | 47 product cards with category filtering |
| Product Detail | `/compare/:slug` | Individual product specs, overview, buy links |
| Blog | `/blog` | 30 articles with category tabs |
| Article | `/articles/:slug` | Full article with related posts |
| Toolbox | `/toolbox` | 6 gaming tools & utilities |
| Monetization | `/monetization` | Affiliate programs & revenue info |
| Sitemap | `/sitemap` | Full site navigation grid |
| Contact | `/contact` | Formspree form, FAQ |

## Content Collections

- **Articles**: 30 Markdown files with YAML frontmatter (title, category, date, readTime, tags, description)
- **Products**: 47 JSON files with specs, pricing, tags, and descriptions

## Coolify Deployment Guide

### Method 1: Docker (Recommended)

1. Push this repository to GitHub/GitLab
2. In Coolify, create a **New Resource** > **Private Repository**
3. Select your repository and branch
4. Coolify will auto-detect the Dockerfile
5. Set **Port** to `80`
6. Add your domain in Coolify
7. Deploy

### Method 2: Static Build (Nixpacks)

1. Push this repository to GitHub/GitLab
2. In Coolify, create a **New Resource** > **Static Site**
3. Select your repository and branch
4. Set **Build Command** to `npm run build`
5. Set **Publish Directory** to `dist`
6. Add your domain in Coolify
7. Deploy

### Environment Variables

No environment variables are required for basic operation. The site builds entirely statically.

| Variable | Required | Description |
|----------|----------|-------------|
| `SITE_URL` | No | Overrides the default site URL |

### Post-Deployment Checklist

- [ ] Verify homepage loads at your domain
- [ ] Test navigation links (no 404s)
- [ ] Verify article pages render (`/articles/how-to-install-emudeck`)
- [ ] Verify product pages render (`/compare/steam-deck-oled`)
- [ ] Confirm security headers are active and no unwanted redirects occur
- [ ] Verify contact form submits to Formspree
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit (target: 90+ all categories)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Docker build
docker-compose up --build
```

## Tech Stack

- **Framework**: Astro 5.x (Static Site Generation)
- **Styling**: Tailwind CSS 3.4
- **UI Components**: React 19 (islands)
- **Icons**: Lucide React
- **Server**: Nginx (Docker)
- **Hosting**: Coolify on Contabo VPS

## Analytics

Google Analytics 4 is configured with the Hand Held Mastery measurement ID. To use a different property in a non-production deployment, add its measurement ID to `.env` or the deployment environment:

```bash
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

The analytics script is omitted entirely when this value is unset.

## License

Proprietary - Hand Held Mastery
