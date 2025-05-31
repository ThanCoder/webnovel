"use server";

import { list, put, PutBlobResult } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function uploadCoverList(){
    return await list();
}

export async function uploadCoverAction(
  prevState: PutBlobResult | null,
  formData: FormData
) {
  const imageFile = formData.get("file") as File;

  const blob = await put(imageFile.name, imageFile, {
    access: "public",
    addRandomSuffix: true,
  });
  // revalidatePath("/");
  return blob;
}
