"use client";
import { Chapter, Novel } from "@/generated/prisma";

function NextChapterButton({ chapter }: { chapter: Chapter }) {
  return <button onClick={(e) => {
    console.log(chapter.chapterNumber);
    
  }}>Next</button>;
}

export default NextChapterButton;
