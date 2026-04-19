create policy "public can read approved comments"
on comments for select
using (moderation_status = 'approved');
