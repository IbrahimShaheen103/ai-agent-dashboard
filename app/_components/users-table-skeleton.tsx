export function UsersTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_1px_1px_rgb(0_0_0_/_0.06),0_1px_1.5px_rgb(0_0_0_/_0.1)] dark:border-zinc-800 dark:bg-zinc-950">
      <div className="h-[50px] rounded-t-xl bg-gray-50 dark:bg-zinc-900" />
      <div>
        {Array.from({ length: 8 }, (_, index) => (
          <div
            className="grid min-h-[52px] grid-cols-[43%_57%] items-center px-4 py-2.5 even:bg-gray-50 sm:grid-cols-[45%_35%_20%] lg:grid-cols-[25%_17%_27%_21%_10%] dark:even:bg-zinc-900/70"
            key={index}
          >
            <div className="flex min-w-0 items-center gap-2">
              <div className="size-8 shrink-0 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-800" />
              <div className="h-4 min-w-0 flex-1 animate-pulse rounded bg-gray-200 dark:bg-zinc-800" />
            </div>
            <div className="ml-4 h-4 animate-pulse rounded bg-gray-200 dark:bg-zinc-800" />
            <div className="ml-4 hidden h-4 animate-pulse rounded bg-gray-200 sm:block lg:order-none dark:bg-zinc-800" />
            <div className="ml-4 hidden h-4 animate-pulse rounded bg-gray-200 lg:block dark:bg-zinc-800" />
            <div className="ml-4 hidden h-4 animate-pulse rounded bg-gray-200 lg:block dark:bg-zinc-800" />
          </div>
        ))}
      </div>
    </div>
  );
}
