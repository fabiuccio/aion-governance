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

insert into articles (
  id,
  slug,
  title,
  subtitle,
  excerpt,
  content_markdown,
  status,
  featured_image,
  created_at,
  updated_at,
  published_at,
  author_id,
  seo_title,
  seo_description
)
values
  (
    '11111111-1111-1111-1111-111111111111',
    'how-i-built-this-site-with-codex-elitedesk-and-cloudflare',
    'How I built this site with Codex, EliteDesk, and Cloudflare',
    'A builder note on why this platform exists and why I wanted it to feel like a place to think, not a company trying too hard.',
    'This first note explains the stack behind the site, why I moved away from a fake-company tone, and how AI-assisted development helped me build a publishing platform that better matches the work I want to share.',
    $$## Why build a site like this now?

For a while, the site leaned too far toward the visual language of a company homepage. It looked polished enough, but it also created the wrong expectation. It suggested a consulting business with a lead funnel. That is not what I wanted this space to be.

I wanted something quieter: a place to publish essays, working frameworks, and book material for people dealing with the practical realities of AI in large organizations.

> The main design constraint was not technical. It was tonal.
>
> The site had to feel personal, operator-level, and credible without drifting into either personal-blog casualness or enterprise-marketing theater.

## The stack

The platform is intentionally simple:

- Next.js and TypeScript for the application layer
- Tailwind CSS for restrained, maintainable styling
- Supabase for content tables, signups, optional comments, and admin authentication
- Cloudflare for deployment and edge delivery
- Codex and EliteDesk as part of the building workflow

None of this is unusual on its own. The interesting part is how much easier it has become to move from idea to a clean first implementation when the human side stays responsible for structure, tone, and judgment.

## What AI-assisted development actually helped with

There is a lazy version of AI-assisted development where you accept the first output and end up with something generic. I wanted the opposite.

Codex helped accelerate the mechanical parts of the build: refactoring routes, introducing typed content models, wiring a minimal admin flow, and seeding realistic content. EliteDesk helped keep the execution environment practical. What still mattered most was editorial direction: deciding what the site should sound like, what it should not sound like, and what kinds of pages deserved to exist at all.

> [!NOTE]
> AI is very good at giving you a competent default. The harder part is refusing defaults that are technically fine but strategically wrong.

```diagram
Old site: company posture -> lead-generation cues -> diluted voice
New site: personal platform -> essays and frameworks -> clearer trust
```

## Why I avoided the fake-company tone

There is a familiar pattern in early AI sites. They sound bigger than they are, more certain than they are, and more commercial than they need to be. That style works against the kind of writing I want to do here.

The subjects I plan to cover, including governance debt, enterprise integration, architecture operating models, and the gap between demos and durable systems, require a calmer voice. They benefit from precise claims, not inflated ones.

So the homepage does less. The navigation does less. The copy sells less.

That is intentional.

## What I want to publish here

The core themes are already visible:

- essays on AI governance as an operating discipline
- frameworks taken from the book and expanded in practical terms
- notes on enterprise architecture and integration under AI pressure
- builder notes on tooling, infrastructure, and responsible automation

Some of these pieces will be polished essays. Others will be provisional and closer to field notes. I like that mix. Serious work usually starts as a rough working idea before it becomes a stable point of view.

## Building in public, carefully

I do not mean "building in public" in the usual social-media sense. I mean showing enough of the process that the work remains inspectable.

If this site is useful, it will be because it documents how strategy, governance, and architecture actually meet in practice. The first version of the platform is part of that story.

The site itself is the opening note.
$$,
    'published',
    null,
    '2026-04-16T08:00:00.000Z',
    '2026-04-17T11:00:00.000Z',
    '2026-04-17T07:00:00.000Z',
    'fabio-aulico',
    'How I built this site with Codex, EliteDesk, and Cloudflare',
    'A personal note on building an editorial platform for AI governance essays using Next.js, TypeScript, Tailwind, Supabase, Codex, EliteDesk, and Cloudflare.'
  ),
  (
    '22222222-2222-2222-2222-222222222222',
    'governance-debt-is-an-architecture-problem-before-it-is-a-policy-problem',
    'Governance debt is an architecture problem before it is a policy problem',
    'Most organizations discover governance debt only after AI adoption spreads beyond the systems they know how to supervise.',
    'Policy matters, but governance debt usually starts in architecture: disconnected tools, unclear ownership, and operational gaps that only become visible once AI use reaches production pressure.',
    $$## The usual sequence

Enterprises rarely begin with a governance crisis. They begin with local enthusiasm.

One team experiments with copilots. Another adds summarization to a workflow. A third automates classification using a model API. Each decision seems small. The architectural consequences accumulate quietly.

## What debt looks like in practice

Governance debt often appears as:

- duplicated model access patterns
- inconsistent auditability
- unclear data boundaries
- fragmented prompt and policy ownership
- no reliable path from experiment to operating standard

By the time a policy team is asked to intervene, the architecture has already shaped the problem space.

> A policy can declare a control. It cannot create missing operating discipline on its own.

## Why this matters now

Agentic systems amplify the cost of ambiguity. Once systems begin to make chained decisions, invoke tools, or trigger downstream actions, governance stops being a document exercise and becomes a runtime concern.

That is why I keep returning to enterprise architecture. AI governance that ignores integration patterns, identity boundaries, observability, and ownership models will always arrive late.
$$,
    'published',
    null,
    '2026-04-10T08:00:00.000Z',
    '2026-04-12T08:00:00.000Z',
    '2026-04-12T08:00:00.000Z',
    'fabio-aulico',
    'Governance debt is an architecture problem',
    'Why governance debt usually emerges from enterprise architecture choices long before it appears in policy reviews.'
  ),
  (
    '33333333-3333-3333-3333-333333333333',
    'the-ai-operating-layer-is-becoming-a-real-enterprise-design-question',
    'The AI operating layer is becoming a real enterprise design question',
    'It is no longer enough to ask which model to use. The harder question is where policy, routing, and accountability actually live.',
    'As AI systems spread across vendors, teams, and workflows, organizations need a coherent operating layer rather than a growing patchwork of point solutions.',
    $$## Beyond the model question

When AI work is still early, most decisions center on models, benchmarks, and vendor selection.

As adoption matures, the questions change:

- Who is allowed to invoke which capabilities?
- Where are policy decisions enforced?
- How are actions observed and reviewed?
- What becomes reusable across teams?

Those are operating-layer questions.

## A design problem, not just a tooling problem

Every enterprise ends up with some version of this layer, whether it is planned or accidental. The difference is whether it becomes a coherent architectural asset or an invisible source of future friction.

This is one reason I use the term AIOS carefully. The point is not to introduce another branded abstraction. The point is to name the layer where governance, orchestration, and enterprise fit meet.
$$,
    'published',
    null,
    '2026-03-28T08:00:00.000Z',
    '2026-03-30T08:00:00.000Z',
    '2026-03-30T08:00:00.000Z',
    'fabio-aulico',
    'The AI operating layer is a real design question',
    'A short essay on routing, policy, accountability, and why the AI operating layer matters in enterprise architecture.'
  )
on conflict (id) do update set
  slug = excluded.slug,
  title = excluded.title,
  subtitle = excluded.subtitle,
  excerpt = excluded.excerpt,
  content_markdown = excluded.content_markdown,
  status = excluded.status,
  updated_at = excluded.updated_at,
  published_at = excluded.published_at,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description;

insert into article_tags (article_id, tag_id)
values
  ('11111111-1111-1111-1111-111111111111', 'builder-notes'),
  ('11111111-1111-1111-1111-111111111111', 'ai-governance'),
  ('11111111-1111-1111-1111-111111111111', 'platforms'),
  ('22222222-2222-2222-2222-222222222222', 'ai-governance'),
  ('22222222-2222-2222-2222-222222222222', 'enterprise-architecture'),
  ('33333333-3333-3333-3333-333333333333', 'enterprise-architecture'),
  ('33333333-3333-3333-3333-333333333333', 'platforms'),
  ('33333333-3333-3333-3333-333333333333', 'book-notes')
on conflict do nothing;

insert into frameworks (
  id,
  slug,
  name,
  summary,
  practical_takeaway,
  diagram_title,
  diagram_items,
  content_markdown,
  related_essay_slug
)
values
  (
    '44444444-4444-4444-4444-444444444444',
    'governed-ai-loop',
    'Governed AI Loop',
    'A repeatable operating cadence for moving from alignment to iteration without losing control of governance along the way.',
    'Treat governance as a recurring rhythm inside delivery rather than a gate that appears at the end.',
    'Five-part operating cadence',
    '["Align","Constrain","Operate","Assure","Evolve"]'::jsonb,
    $$The Governed AI Loop is a practical answer to a common enterprise failure mode: teams move quickly until governance appears, then velocity stalls because governance was designed as an interruption instead of an operating pattern.

The loop reframes the work. Alignment clarifies intent and ownership. Constraint makes risk posture explicit. Operation delivers value under known boundaries. Assurance checks whether the system behaves as expected. Evolution closes the loop by improving the next cycle.

The important point is not the names themselves. It is the fact that each phase belongs inside normal delivery rather than outside it.$$,
    'governance-debt-is-an-architecture-problem-before-it-is-a-policy-problem'
  ),
  (
    '55555555-5555-5555-5555-555555555555',
    'debt-quadrant',
    'Debt Quadrant',
    'A simple frame for understanding the relationship between governance discipline and value velocity.',
    'Do not assume speed means maturity. Fast movement without discipline often means debt is accumulating offstage.',
    'Governance discipline x value velocity',
    '["Reckless","Governed","Bureaucratic","Stagnant"]'::jsonb,
    $$The Debt Quadrant is useful because it names an uncomfortable truth: some organizations are fast for the wrong reasons, while others are slow for reasons that feel responsible but are still dysfunctional.

The goal is not maximum control and it is not maximum speed. The goal is disciplined velocity.

Used well, the quadrant helps leadership teams diagnose where friction is structural, where it is self-inflicted, and where apparent progress is masking future governance cost.$$,
    'governance-debt-is-an-architecture-problem-before-it-is-a-policy-problem'
  ),
  (
    '66666666-6666-6666-6666-666666666666',
    'aios',
    'AIOS',
    'A way of describing the operating layer where policy, routing, identity, and accountability come together for AI systems.',
    'If your governance controls only exist in documents, you do not yet have an operating layer.',
    'The AI operating layer',
    '["Policy","Identity","Routing","Observability","Human oversight"]'::jsonb,
    $$AIOS is less a product idea than an architectural point of focus.

Large organizations already have application platforms, integration layers, identity systems, and control frameworks. As AI capabilities spread, they also need a place where AI-specific governance becomes operational rather than aspirational.

That layer may be thin or thick depending on context, but it has to exist somewhere. Naming it helps teams reason about it deliberately.$$,
    'the-ai-operating-layer-is-becoming-a-real-enterprise-design-question'
  ),
  (
    '77777777-7777-7777-7777-777777777777',
    'executive-action-framework',
    'Executive Action Framework',
    'A compact structure for turning board-level concern about AI into a concrete operating agenda.',
    'The first ninety days should establish ownership, visibility, and control patterns before they aim for scale theater.',
    'Ninety-day action sequence',
    '["Inventory","Prioritize","Assign","Pilot with controls","Review"]'::jsonb,
    $$Executives rarely need more abstract language about AI risk. They need a practical sequence that moves the organization from vague concern to operating evidence.

The Executive Action Framework is designed for that moment. It begins with visibility and ownership rather than ambitious transformation claims. It creates a narrower, more credible path to useful action.$$,
    'how-i-built-this-site-with-codex-elitedesk-and-cloudflare'
  )
on conflict (id) do update set
  slug = excluded.slug,
  name = excluded.name,
  summary = excluded.summary,
  practical_takeaway = excluded.practical_takeaway,
  diagram_title = excluded.diagram_title,
  diagram_items = excluded.diagram_items,
  content_markdown = excluded.content_markdown,
  related_essay_slug = excluded.related_essay_slug;
