import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const novelId = searchParams.get("novelId");

  if (!novelId) {
    return new Response("Missing novelId", { status: 400 });
  }
  const list = await prisma.contentFile.findMany({
    where: { novelId: parseInt(novelId) },
    orderBy: { date: "asc" },
  });

  return Response.json(list);
}
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return new Response("Missing id", {
      status: 400,
    });
  }
  await prisma.contentFile.delete({ where: { id: parseInt(id) } });
  return new Response("deleted", { status: 200 });
}
