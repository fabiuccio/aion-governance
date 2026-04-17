insert into profiles (id, slug, full_name, role, bio)
values
  ('fabio-aulico', 'fabio-aulico', 'Fabio Aulico', 'Enterprise architect, operator, and writer', 'Fabio writes about AI governance, enterprise architecture, integration, and the operating disciplines required to make AI useful beyond the demo stage.')
on conflict (id) do nothing;

insert into tags (id, slug, name)
values
  ('ai-governance', 'ai-governance', 'AI governance'),
  ('enterprise-architecture', 'enterprise-architecture', 'Enterprise architecture'),
  ('platforms', 'platforms', 'Platforms'),
  ('book-notes', 'book-notes', 'Book notes'),
  ('builder-notes', 'builder-notes', 'Builder notes')
on conflict (id) do nothing;
