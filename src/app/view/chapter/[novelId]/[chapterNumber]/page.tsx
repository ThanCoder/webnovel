import { prisma } from "@/lib/prisma";
import Link from "next/link";

async function ChapterPage({
  params,
}: {
  params: Promise<{ novelId: string; chapterNumber: string }>;
}) {
  const novelId = (await params).novelId;
  const chapterNumber = parseInt((await params).chapterNumber ?? "0");

  const chapter = await prisma.chapter.findFirst({
    where: {
      chapterNumber: chapterNumber,
      novelId: parseInt(novelId),
    },
  });
  const prevChapter = await prisma.chapter.findFirst({
    where: {
      chapterNumber: chapterNumber - 1,
      novelId: parseInt(novelId),
    },
  });
  const nextChapter = await prisma.chapter.findFirst({
    where: {
      chapterNumber: chapterNumber + 1,
      novelId: parseInt(novelId),
    },
  });

  if (chapter === null) {
    return (
      <div className="container text-center text-5xl mt-4 text-red-600">
        Not Found Chapter!
      </div>
    );
  }
  return (
    <div className="container p-2 text-lg">
      {/* navigation */}
      <div className="flex justify-end gap-4">
        {prevChapter ? (
          <Link
            className="btn"
            href={`/view/chapter/${novelId}/${chapterNumber - 1}`}
          >
            Prev
          </Link>
        ) : null}
        {nextChapter ? (
          <Link
            className="btn"
            href={`/view/chapter/${novelId}/${chapterNumber + 1}`}
          >
            Next
          </Link>
        ) : null}
      </div>

      <div className="title">Title: {chapter.title}</div>
      <div className="title">Chapter: {chapter.chapterNumber}</div>
      <div
        className="whitespace-pre-line"
        dangerouslySetInnerHTML={{
          __html: chapter?.content,
        }}
      ></div>
      {/* navigation */}
      <div className="flex justify-end gap-4">
        {prevChapter ? (
          <Link
            className="btn"
            href={`/view/chapter/${novelId}/${chapterNumber - 1}`}
          >
            Prev
          </Link>
        ) : null}
        {nextChapter ? (
          <Link
            className="btn"
            href={`/view/chapter/${novelId}/${chapterNumber + 1}`}
          >
            Next
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default ChapterPage;
