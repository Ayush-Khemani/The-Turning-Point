# The Turning Point

A polished editorial blog built with Next.js and prepared for publishing through Sanity CMS.

## Stack

- Next.js App Router
- TypeScript
- Sanity Studio embedded at `/studio`
- Search, tags, reading time, reading progress, newsletter signup

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create an environment file:

```bash
cp .env.example .env.local
```

3. Run the app:

```bash
npm run dev
```

4. Open:

- Site: `http://localhost:3000`
- Studio: `http://localhost:3000/studio`

## Required Environment Variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-02-01
SANITY_STUDIO_PROJECT_TITLE=The Turning Point
```

Optional:

```env
BUTTONDOWN_API_KEY=
NEWSLETTER_FROM_NAME=The Turning Point
NEWSLETTER_SUCCESS_REDIRECT=
```

If Sanity env vars are missing, the site still works using curated local sample content so design and development can continue.
