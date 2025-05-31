import NovelListView from "@/components/novel_list_view";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/user";
import { UserTypes } from "@/types/user_types";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

async function Dashboard() {
  const user = await getCurrentUser();

  if (!user) {
    return <h1 className="text-center text-red-600 mt-5">Not Sign In</h1>;
  }
  if (user.isBanned) {
    return <h1 className="text-center text-red-600 mt-5">Your Are Banned!</h1>;
  }

  const novels = await prisma.novel.findMany({
    where: { userId: user.id },
    orderBy: { date: "desc" },
  });

  return (
    <div className="container">
      <div className="flex gap-3">
        <Link className="btn" href={`/novel/new`}>
          New Novel
        </Link>
        {user.type === UserTypes.admin ? (
          <Link className="btn" href={`/user`}>
            User List
          </Link>
        ) : null}
      </div>
      {/* your post */}
      <h2 className="mt-3">User Type: {user.type}</h2>
      <h1 className="mt-3">Your Novel များ</h1>
      <NovelListView list={novels} />
    </div>
  );
}

export default Dashboard;
