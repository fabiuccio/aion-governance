create extension if not exists pgcrypto;

create table if not exists profiles (
  id text primary key,
  slug text not null unique,
  full_name text not null,
  role text,
  bio text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists tags (
  id text primary key,
  slug text not null unique,
  name text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  subtitle text,
  excerpt text,
  content_markdown text not null default '',
  status text not null default 'draft' check (status in ('draft', 'published')),
  featured_image text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz,
  author_id text not null references profiles(id),
  seo_title text,
  seo_description text
);

create table if not exists article_tags (
  article_id uuid not null references articles(id) on delete cascade,
  tag_id text not null references tags(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (article_id, tag_id)
);

create table if not exists frameworks (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  summary text not null,
  practical_takeaway text,
  diagram_title text,
  diagram_items jsonb not null default '[]'::jsonb,
  content_markdown text not null default '',
  related_essay_slug text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null references articles(id) on delete cascade,
  author_name text,
  author_email text,
  body text not null,
  moderation_status text not null default 'pending' check (moderation_status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

create table if not exists newsletter_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'site',
  created_at timestamptz not null default now()
);

create table if not exists book_updates_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'book',
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;
alter table tags enable row level security;
alter table articles enable row level security;
alter table article_tags enable row level security;
alter table frameworks enable row level security;
alter table comments enable row level security;
alter table newsletter_signups enable row level security;
alter table book_updates_signups enable row level security;

create policy "public can read published articles"
on articles for select
using (status = 'published');

create policy "public can read tags"
on tags for select
using (true);

create policy "public can read article tag mapping"
on article_tags for select
using (true);

create policy "public can read frameworks"
on frameworks for select
using (true);

create policy "public can read profiles"
on profiles for select
using (true);

create policy "public can insert newsletter signups"
on newsletter_signups for insert
with check (true);

create policy "public can insert book update signups"
on book_updates_signups for insert
with check (true);

create policy "public can insert comments"
on comments for insert
with check (true);
