import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const novelId = searchParams.get("novelId");

  if (!novelId) {
    return new Response("Missing novelId", { status: 400 });
  }
  const list = await prisma.chapter.findMany({
    where: { novelId: parseInt(novelId) },
    orderBy: { chapterNumber: "asc" },
  });
  
  
  return Response.json(list);
}
