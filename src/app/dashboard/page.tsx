import { getCurrentUser } from "@/lib/user";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

async function Dashboard() {
    const user = await getCurrentUser()
      
      if(!user){
        return <h1 className="text-center">Not Sign In</h1>
      }
    
      return (
        <div className="container">
            <Link className="btn" href={`/novel/new/${user.id}/`}>New Novel</Link>
            {/* your post */}
            <h2 className="mt-3">User Type: {user.type}</h2>
            <h1>Your Novel များ</h1>
    
        </div>
      );
}

export default Dashboard;