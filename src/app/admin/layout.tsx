export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-12 sm:px-8">{children}</div>
  );
}
