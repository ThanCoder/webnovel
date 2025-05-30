import NovelListView from "@/components/novel_list_view";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/user";

async function Home() {
  const novels = await prisma.novel.findMany({
    where: { isPublished: true },
    orderBy: { date: "desc" },
  });
  await getCurrentUser();

  return (
    <div className="container mx-3">
      <h1 className="mb-9 text-1xl" >Latest</h1>

      <NovelListView list={novels} />
    </div>
  );
}

export default Home;
