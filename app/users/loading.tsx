import { UsersTableSkeleton } from "@/app/_components/users-table-skeleton";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-8">
      <div className="h-4 w-20 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-3 h-10 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-4 h-6 w-full max-w-xl animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-8">
        <UsersTableSkeleton />
      </div>
    </main>
  );
}
