-- Assessment results table: stores each completed maturity assessment
create table if not exists assessment_results (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  name        text,
  score       integer not null check (score >= 0 and score <= 100),
  stage_name  text not null,
  answers     jsonb not null default '{}',
  created_at  timestamptz not null default now()
);

-- No public read — admin-only via service role
alter table assessment_results enable row level security;

-- Only authenticated admins can read results (same pattern as other admin tables)
create policy "admins can read assessment results"
  on assessment_results for select
  using (auth.role() = 'authenticated');

-- Inserts come from server actions (service role bypass) — no anon insert policy needed
