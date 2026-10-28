import Image from "next/image";
import Link from "next/link";

import type { User } from "@/app/_lib/types";

export function UsersTable({ users }: { users: User[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
          <caption className="sr-only">DummyJSON users</caption>
          <thead className="bg-zinc-50 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
            <tr>
              <th className="px-6 py-4" scope="col">
                Name
              </th>
              <th className="px-6 py-4" scope="col">
                Username
              </th>
              <th className="px-6 py-4" scope="col">
                Email
              </th>
              <th className="px-6 py-4" scope="col">
                Company
              </th>
              <th className="px-6 py-4" scope="col">
                <span className="sr-only">View details</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 text-sm dark:divide-zinc-900">
            {users.map((user) => (
              <tr
                className="transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/70"
                key={user.id}
              >
                <td className="whitespace-nowrap px-6 py-4 font-medium text-zinc-950 dark:text-zinc-50">
                  <div className="flex items-center gap-3">
                    <Image
                      alt=""
                      className="size-10 rounded-full bg-zinc-100"
                      height={40}
                      src={user.image}
                      width={40}
                    />
                    {user.name}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-zinc-600 dark:text-zinc-300">
                  @{user.username}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-zinc-600 dark:text-zinc-300">
                  <a
                    className="hover:text-zinc-950 hover:underline dark:hover:text-white"
                    href={`mailto:${user.email}`}
                  >
                    {user.email}
                  </a>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-zinc-600 dark:text-zinc-300">
                  {user.company.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right">
                  <Link
                    className="font-medium text-blue-700 hover:text-blue-900 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                    href={`/users/${user.id}`}
                  >
                    View<span className="sr-only"> {user.name}</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
