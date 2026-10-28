export function UsersTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="h-14 bg-zinc-100 dark:bg-zinc-900" />
      <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
        {Array.from({ length: 8 }, (_, index) => (
          <div className="grid grid-cols-4 gap-6 px-6 py-5" key={index}>
            <div className="h-4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          </div>
        ))}
      </div>
    </div>
  );
}
