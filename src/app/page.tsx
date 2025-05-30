import TImage from "@/components/t_image";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/user";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

async function Home() {
  await getCurrentUser()
  
  return (
    <div className="container">
     
     <h1>Wellcome</h1>

    </div>
  );
}

export default Home;
