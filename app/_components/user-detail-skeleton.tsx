export function UserDetailSkeleton() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-8">
      <div className="h-5 w-28 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-8 flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_1px_1px_rgb(0_0_0_/_0.06),0_1px_1.5px_rgb(0_0_0_/_0.1)] dark:border-zinc-800 dark:bg-zinc-950">
        <div className="size-20 shrink-0 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-800" />
        <div className="min-w-0 flex-1">
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-zinc-800" />
          <div className="mt-3 h-9 w-full max-w-64 animate-pulse rounded bg-gray-200 dark:bg-zinc-800" />
        </div>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            className="h-44 animate-pulse rounded-2xl border border-gray-200 bg-gray-100 dark:border-zinc-800 dark:bg-zinc-900"
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
