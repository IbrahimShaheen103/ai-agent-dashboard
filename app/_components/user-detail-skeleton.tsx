export function UserDetailSkeleton() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8">
      <div className="h-5 w-28 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-8 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <div className="h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="mt-3 h-10 w-64 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            className="h-44 animate-pulse rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
