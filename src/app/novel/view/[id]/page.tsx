import TImage from "@/components/t_image";
import TLoader from "@/components/t_loader";
import TTimeAgo from "@/components/time_ago";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/user";
import { UserTypes } from "@/types/user_types";
import Link from "next/link";

import NovelTab from "./novel_tab";

async function novelView({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const novel = await prisma.novel.findUnique({ where: { id: parseInt(id) } });
  const user = await getCurrentUser();

  if (novel === null) {
    return (
      <div className="container text-center text-5xl mt-4 text-red-600">
        Not Found Novel!
      </div>
    );
  }

  

  return (
    <div className="container cmt">
      <div className="flex gap-3">
        {/* cover */}
        <TImage src={novel?.coverUrl} width={250} height={300} />
        {/* right */}
        <div className="right grid gap-1 justify-start items-start">
          <div className="title text-2xl">အမည်: {novel?.title}</div>
          <div className="text-2xl">စာရေးသူ: {novel?.author}</div>
          <div className="text-2xl">ဘာသာပြန်: {novel?.translator}</div>
          <div className="text-2xl">အထိက ဇောတ်ကောင်: {novel?.mc}</div>
          <div className="text-2xl">
            ရက်စွဲ: <TTimeAgo date={novel?.date} />{" "}
          </div>
          {/* form */}
          {user ? (
            <div className="flex gap-2">
              {user.id === novel?.userId || user.type === UserTypes.admin ? (
                <Link href={`/novel/edit/${novel?.id}`} className="btn">
                  Edit
                </Link>
              ) : null}
              <Link href={`/novel/content/add/${novel?.id}`} className="btn">
                Add Content
              </Link>
            </div>
          ) : null}
        </div>
      </div>
       {/* tab */}
     <NovelTab novel={novel}/>
    </div>
  );
}

export default novelView;
