import { getCurrentUser } from "@/lib/user";
import { del, list, put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await getCurrentUser();
  if (user == null) {
    return new Response("user not found!", {
      status: 403,
      statusText: "user not found!",
    });
  }
  const res = await list({ mode: "folded", prefix: `image/${user.id}/` });
  return Response.json(res);
}

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (user == null) {
    return new Response("user not found!", {
      status: 403,
      statusText: "user not found!",
    });
  }
  const formData = await req.formData();
  const file = formData.get("file") as File;

  const blob = await put(`image/${user.id}/${file.name}`, file, {
    access: "public", // or 'private'
  });
  return Response.json(blob);
}

export async function DELETE(req: NextResponse) {
  const body = await req.json();
  const pathname = body.pathname;
  if(!pathname){
    return new Response("pathname not found!", { status: 400 });
  }
  const user = await getCurrentUser();
  if (user == null) {
    return new Response("user not found!", {
      status: 403,
      statusText: "user not found!",
    });
  }
  await del(pathname);


  return new Response("deleted", { status: 200 });
}
