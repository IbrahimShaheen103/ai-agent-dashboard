import { Suspense } from "react";
import { notFound } from "next/navigation";

import { UserDetail } from "@/app/_components/user-detail";
import { UserDetailSkeleton } from "@/app/_components/user-detail-skeleton";
import { getUser } from "@/app/_lib/dummyjson";

function parseUserId(value: string): number | null {
  if (!/^\d+$/.test(value)) {
    return null;
  }

  const id = Number(value);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

async function UserDetailsContent({ id }: { id: string }) {
  const userId = parseUserId(id);

  if (userId === null) {
    notFound();
  }

  const user = await getUser(userId);

  if (!user) {
    notFound();
  }

  return <UserDetail user={user} />;
}

export default function UserPage({ params }: PageProps<"/users/[id]">) {
  return (
    <Suspense fallback={<UserDetailSkeleton />}>
      {params.then(({ id }) => (
        <UserDetailsContent id={id} />
      ))}
    </Suspense>
  );
}
