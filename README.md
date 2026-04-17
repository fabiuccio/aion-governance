# AION Governance

This project has been refactored into a personal publishing platform for Fabio Aulico's essays, frameworks, and book material on AI governance and enterprise architecture.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Supabase for content/auth storage
- Seeded local content fallback for development before Supabase is configured

## Routes

- `/` home
- `/essays` essay archive with search and topic filters
- `/essays/[slug]` individual article pages
- `/frameworks` framework index
- `/frameworks/[slug]` framework detail pages
- `/book` book page
- `/about` about page
- `/admin/login` minimal Supabase Auth login
- `/admin/articles` article list and editor scaffold

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Optional: add a `.env.local` file for Supabase:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

If Supabase is not configured, the public site still works with seeded example content and the admin area runs in preview mode.

## Supabase setup

1. Run the SQL in `supabase/migrations/001_personal_publishing_platform.sql`.
2. Run `supabase/seed.sql`.
3. Create an admin user in Supabase Auth.

The schema includes:

- `profiles`
- `articles`
- `tags`
- `article_tags`
- `frameworks`
- `comments`
- `newsletter_signups`
- `book_updates_signups`

## Content workflow

- Public pages currently render from seeded TypeScript content in `src/lib/content/seed.ts`.
- The editor flow is prepared for Supabase-backed create/update operations in `src/app/admin/actions.ts`.
- The article editor stores markdown content, draft or published status, and tag mappings.
- Comments are modeled in the schema but intentionally disabled in the launch UI.

## Deployment

This app is ready to deploy on a standard Next.js hosting setup. Set the `NEXT_PUBLIC_SITE_URL` environment variable to the deployed domain so metadata, sitemap generation, and canonical URLs resolve correctly.
