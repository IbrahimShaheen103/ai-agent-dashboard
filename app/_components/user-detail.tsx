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
    <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        {title}
      </h2>
      <div className="mt-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}

export function UserDetail({ user }: { user: User }) {
  const address = user.address;

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8">
      <Link
        className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-400"
        href="/users"
      >
        ← Back to users
      </Link>

      <header className="mt-8 flex items-center gap-5 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <Image
          alt=""
          className="size-20 rounded-full bg-zinc-100"
          height={80}
          priority
          src={user.image}
          width={80}
        />
        <div>
          <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
            @{user.username}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {user.name}
          </h1>
        </div>
      </header>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
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
          <p className="font-medium text-zinc-950 dark:text-zinc-50">{user.company.name}</p>
          <p className="mt-2">{user.company.title}</p>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">{user.company.department}</p>
        </DetailSection>
      </div>
    </main>
  );
}
