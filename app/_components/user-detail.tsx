import Image from "next/image";
import Link from "next/link";

import type { User } from "@/app/_lib/types";

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_1px_1px_rgb(0_0_0_/_0.06),0_1px_1.5px_rgb(0_0_0_/_0.1)] dark:border-zinc-800 dark:bg-zinc-950">
      <h2 className="text-xs font-semibold uppercase text-gray-500 dark:text-zinc-400">
        {title}
      </h2>
      <div className="mt-4 text-sm leading-5 text-gray-500 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}

export function UserDetail({ user }: { user: User }) {
  const address = user.address;

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-8">
      <Link
        className="rounded-sm text-sm font-semibold text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:text-blue-400 dark:focus-visible:outline-blue-400"
        href="/users"
      >
        ← Back to users
      </Link>

      <header className="mt-8 flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_1px_1px_rgb(0_0_0_/_0.06),0_1px_1.5px_rgb(0_0_0_/_0.1)] dark:border-zinc-800 dark:bg-zinc-950">
        <Image
          alt=""
          className="size-20 rounded-full bg-gray-100"
          height={80}
          priority
          src={user.image}
          width={80}
        />
        <div>
          <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
            @{user.username}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-zinc-50">
            {user.name}
          </h1>
        </div>
      </header>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <DetailSection title="Contact">
          <dl className="space-y-3">
            <div>
              <dt className="font-medium text-zinc-950 dark:text-zinc-50">Email</dt>
              <dd>
                <a className="hover:underline" href={`mailto:${user.email}`}>
                  {user.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-950 dark:text-zinc-50">Phone</dt>
              <dd>
                <a className="hover:underline" href={`tel:${user.phone}`}>
                  {user.phone}
                </a>
              </dd>
            </div>
          </dl>
        </DetailSection>

        <DetailSection title="Website">
          <p>DummyJSON does not provide a website for this user.</p>
        </DetailSection>

        <DetailSection title="Address">
          <address className="not-italic">
            <p>{address.street}</p>
            <p>
              {address.city}, {address.state} {address.zipcode}
            </p>
            <p>{address.country}</p>
          </address>
        </DetailSection>

        <DetailSection title="Company">
          <p className="font-medium text-gray-900 dark:text-zinc-50">{user.company.name}</p>
          <p className="mt-2">{user.company.title}</p>
          <p className="mt-2 text-gray-500 dark:text-zinc-400">{user.company.department}</p>
        </DetailSection>
      </div>
    </main>
  );
}
