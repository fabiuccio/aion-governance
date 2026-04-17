export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="h-8 w-32 animate-pulse rounded-full bg-shell" />
      <div className="mt-6 h-16 w-full max-w-3xl animate-pulse rounded-[2rem] bg-shell" />
      <div className="mt-6 h-8 w-full max-w-2xl animate-pulse rounded-full bg-shell" />
    </div>
  );
}
