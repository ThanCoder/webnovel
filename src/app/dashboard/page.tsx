import NovelListView from "@/components/novel_list_view";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/user";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

async function Dashboard() {
    const user = await getCurrentUser()
      
      if(!user){
        return <h1 className="text-center">Not Sign In</h1>
      }

    const novels = await prisma.novel.findMany({where:{userId:user.id},orderBy:{date:"desc"}});
    
      return (
        <div className="container">
            <Link className="btn" href={`/novel/new`}>New Novel</Link>
            {/* your post */}
            <h2 className="mt-3">User Type: {user.type}</h2>
            <h1 className="mt-3">Your Novel များ</h1>
            <NovelListView list={novels}/>
        </div>
      );
}

export default Dashboard;