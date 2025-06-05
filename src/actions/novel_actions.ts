"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/user";
import { UserTypes } from "@/types/user_types";
import { Novel } from "@prisma/client";
import { redirect } from "next/navigation";

export type NovelFormState = Omit<
  Novel,
  "id" | "date" | "userId" | "isAnyoneCanUploaded" | "isPublished"
> & {
  message: string;
  isError: boolean;
};

export async function createNovelAction(
  prevState: NovelFormState | null,
  formData: FormData
) {
  let state: NovelFormState = {
    title: "",
    author: "",
    coverUrl: "",
    desc: "",
    mc: "",
    translator: "",
    message: "",
    isError: false,
  };

  try {
    // await new Promise((res)=> setTimeout(res,2000))

    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    const translator = formData.get("translator") as string;
    const mc = formData.get("mc") as string;
    const coverUrl = formData.get("coverUrl") as string;
    const description = formData.get("description") as string;

    state.title = title;
    state.author = author;
    state.translator = translator;
    state.mc = mc;
    state.coverUrl = coverUrl;
    state.desc = description;

    if (!title) {
      state.message = "title is required!";
      state.isError = true;
      return state;
    }
    const user = await getCurrentUser();

    if (user == null) {
      state = { ...state, isError: true, message: `user not found!` };
      return state;
    }
    //check novel title
    const findNovel = await prisma.novel.findUnique({ where: { title } });

    if (findNovel) {
      state = {
        ...state,
        isError: true,
        message: `novel title already exists!(အမည်ပြောင်းလဲပေးပါ)`,
      };
      return state;
    }

    await prisma.novel.create({
      data: {
        title,
        userId: user.id,
        author,
        translator,
        mc,
        desc: description,
        coverUrl,
      },
    });

    // success
    state = { ...state, message: "Novel Created" };
  } catch (error) {
    // console.log(error);

    state = { ...state, isError: true, message: `${error}` };
  }
  if (state.isError) {
    return state;
  } else {
    redirect("/dashboard");
  }
}
