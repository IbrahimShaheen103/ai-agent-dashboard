"use client";

export default function UsersError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl items-center px-6 py-12 sm:px-8">
      <section className="w-full rounded-2xl border border-red-200 bg-red-50 p-8 dark:border-red-950 dark:bg-red-950/30">
        <p className="text-sm font-semibold uppercase tracking-wider text-red-700 dark:text-red-300">
          Unable to load users
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Please try again.
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          The user directory could not be reached. This may be a temporary network or service problem.
        </p>
        <button
          className="mt-6 rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          onClick={() => retry()}
          type="button"
        >
          Try again
        </button>
        {error.digest ? <p className="mt-4 text-xs text-zinc-500">Reference: {error.digest}</p> : null}
      </section>
    </main>
  );
}
