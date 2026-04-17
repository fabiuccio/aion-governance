insert into storage.buckets (id, name, public)
values ('article-images', 'article-images', true)
on conflict (id) do update
set public = true;

create policy "public can view article images"
on storage.objects for select
using (bucket_id = 'article-images');

create policy "authenticated users can upload article images"
on storage.objects for insert
with check (bucket_id = 'article-images' and auth.role() = 'authenticated');

create policy "authenticated users can update article images"
on storage.objects for update
using (bucket_id = 'article-images' and auth.role() = 'authenticated')
with check (bucket_id = 'article-images' and auth.role() = 'authenticated');

create policy "authenticated users can delete article images"
on storage.objects for delete
using (bucket_id = 'article-images' and auth.role() = 'authenticated');
