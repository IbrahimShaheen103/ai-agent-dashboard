import Image from "next/image";
import Link from "next/link";

import type { User } from "@/app/_lib/types";

export function UsersTable({ users }: { users: User[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_1px_1px_rgb(0_0_0_/_0.06),0_1px_1.5px_rgb(0_0_0_/_0.1)] dark:border-zinc-800 dark:bg-zinc-950">
      <div>
        <table className="w-full table-fixed border-separate border-spacing-0">
          <caption className="sr-only">DummyJSON users</caption>
          <colgroup>
            <col className="w-[43%] sm:w-[45%] lg:w-[25%]" />
            <col className="hidden lg:table-column lg:w-[17%]" />
            <col className="w-[57%] sm:w-[35%] lg:w-[27%]" />
            <col className="hidden lg:table-column lg:w-[21%]" />
            <col className="hidden sm:table-column sm:w-[20%] lg:w-[10%]" />
          </colgroup>
          <thead className="bg-gray-50 text-left text-xs font-semibold uppercase text-gray-500 dark:bg-zinc-900 dark:text-zinc-400">
            <tr>
              <th className="rounded-tl-xl px-4 py-4" scope="col">
                Name
              </th>
              <th className="hidden px-4 py-4 lg:table-cell" scope="col">
                Username
              </th>
              <th className="px-4 py-4" scope="col">
                Email
              </th>
              <th className="hidden px-4 py-4 lg:table-cell" scope="col">
                Company
              </th>
              <th className="hidden rounded-tr-xl px-4 py-4 text-right sm:table-cell" scope="col">
                <span className="sr-only">View details</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {users.map((user) => (
              <tr
                className="bg-white transition-colors even:bg-gray-50 hover:bg-gray-100 dark:bg-zinc-950 dark:even:bg-zinc-900/70 dark:hover:bg-zinc-900"
                key={user.id}
              >
                <td className="px-4 py-2.5 align-middle font-medium text-gray-900 dark:text-zinc-50">
                  <Link
                    className="flex min-w-0 items-center gap-2 rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400"
                    href={`/users/${user.id}`}
                  >
                    <Image
                      alt=""
                      className="size-8 shrink-0 rounded-full bg-gray-100"
                      height={32}
                      src={user.image}
                      width={32}
                    />
                    <span className="min-w-0 break-words">{user.name}</span>
                  </Link>
                </td>
                <td className="hidden px-4 py-2.5 text-gray-500 lg:table-cell dark:text-zinc-300">
                  @{user.username}
                </td>
                <td className="px-4 py-2.5 text-gray-500 dark:text-zinc-300">
                  <a
                    className="block break-all rounded-sm hover:text-gray-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:hover:text-white dark:focus-visible:outline-blue-400"
                    href={`mailto:${user.email}`}
                  >
                    {user.email}
                  </a>
                </td>
                <td className="hidden px-4 py-2.5 text-gray-500 lg:table-cell dark:text-zinc-300">
                  {user.company.name}
                </td>
                <td className="hidden px-4 py-2.5 text-right sm:table-cell">
                  <Link
                    className="font-semibold text-blue-700 hover:text-blue-900 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
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
