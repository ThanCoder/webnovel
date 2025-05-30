import { list, put } from '@vercel/blob';
import { NextRequest } from 'next/server';


export async function GET(req: NextRequest) {
  const res = await list();
  return Response.json(res);
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  const blob = await put(file.name, file, {
    access: 'public', // or 'private'
  });
  return Response.json(blob);
}
