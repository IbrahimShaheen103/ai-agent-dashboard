import { UsersTable } from "@/app/_components/users-table";
import { getUsers } from "@/app/_lib/dummyjson";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-8">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
          Directory
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Users
        </h1>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Browse the DummyJSON user directory and open a profile for more details.
        </p>
      </header>

      <div className="mt-8">
        <UsersTable users={users} />
      </div>
    </main>
  );
}
