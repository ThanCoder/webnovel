import { prisma } from "@/lib/prisma";

async function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const chapter = await prisma.chapter.findUnique({
    where: { id: parseInt(id) },
  });
  if (chapter === null) {
    return (
      <div className="container text-center text-5xl mt-4 text-red-600">
        Not Found Chapter!
      </div>
    );
  }
  return (
    <div className="container">
        <div className="title">Title: {chapter.title}</div>
        <div className="title">Chapter: {chapter.chapterNumber}</div>
      <div
        className="whitespace-pre-line"
        dangerouslySetInnerHTML={{
          __html: chapter?.content,
        }}
      ></div>
    </div>
  );
}

export default ChapterPage;
