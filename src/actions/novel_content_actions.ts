"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/user";
import { ContentFormType } from "@/types/types";

export type NovelContentAddActionType = {
  title: string;
  content: string;
  chapterNumber: number;
  coverUrl: string;
  desc: string;
  type: string;
  contentFormType: string;
  novelId: number;
  message: string;
  isError: boolean;
};

export async function novelContentAddAction(
  prevState: NovelContentAddActionType,
  formData: FormData
): Promise<NovelContentAddActionType> {
  try {
    // await new Promise((res) => setTimeout(res, 2000));
    const user = await getCurrentUser();

    if (!user) {
      return { ...prevState, isError: true, message: "User Not Logined!" };
    }
    if (user.isBanned) {
      return { ...prevState, isError: true, message: "User Is Banned!" };
    }

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const chapterNumber = parseInt(
      (formData.get("chapterNumber") as string) || "0",
      10
    );
    const coverUrl = formData.get("coverUrl") as string;
    const contentFormType = formData.get("contentFormType") as string;
    const type = formData.get("type") as string;
    const desc = formData.get("desc") as string;
    //set
    prevState.title = title;
    prevState.content = content;
    prevState.chapterNumber = chapterNumber;
    prevState.coverUrl = coverUrl;
    prevState.contentFormType = contentFormType;
    prevState.type = type;
    prevState.desc = desc;

    if (prevState.title === "") {
      return { ...prevState, isError: true, message: "title is required!" };
    }

    if (prevState.contentFormType === ContentFormType.chapter) {
      if (prevState.chapterNumber === 0) {
        return {
          ...prevState,
          isError: true,
          message: "chapter is required! 0 not လက်မခံပါ!",
        };
      }
      if (prevState.content === "") {
        return {
          ...prevState,
          isError: true,
          message: "content မှာ Chapter ထည့်ရပါမယ်!",
        };
      }
      //add chapter
      try {
        await prisma.chapter.create({
          data: {
            title: prevState.title,
            chapterNumber: prevState.chapterNumber,
            content: prevState.content,
            userId: user.id,
            isPublished: true,
            novelId: prevState.novelId,
          },
        });
        return {
          ...prevState,
          title:'Untitled',
          content:'',
          chapterNumber :chapterNumber + 1,
          isError: false,
          message: `Chapter ${chapterNumber} Created`,
        };
      } catch (error) {
        return {
          ...prevState,
          isError: true,
          message: `${error}`,
        };
      }
    }
    // content
    if (prevState.contentFormType === ContentFormType.contentFile) {
      try {
        await prisma.contentFile.create({
          data: {
            title: prevState.title,
            coverUrl:prevState.coverUrl,
            content: prevState.content,
            userId: user.id,
            isPublished: true,
            desc:prevState.desc,
            type:prevState.type,
            novelId: prevState.novelId,
          },
        });
        return {
          ...prevState,
          title:'Untitled',
          content:'',
          desc:'',
          isError: false,
          message: `Content File Created`,
        };
      } catch (error) {
        return {
          ...prevState,
          isError: true,
          message: `${error}`,
        };
      }
    }

    // console.log(formData);

    prevState.isError = false;
    prevState.message = `Created`;
    return prevState;
  } catch (error) {
    return {
      ...prevState,
      isError: true,
      message: `${error}`,
    };
  }
}
