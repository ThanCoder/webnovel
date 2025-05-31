"use client";

import TLoader from "@/components/t_loader";
import TTimeAgo from "@/components/time_ago";
import { Chapter, Novel } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { useEffect, useState } from "react";

function ChapterList({ novel }: { novel: Novel }) {
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<{ list: Chapter[]; isLoading: boolean }>({
    list: [],
    isLoading: true,
  });

  useEffect(() => {
    fetch(`/api/chapter?novelId=${novel.id}`)
      .then((res) => res.json())
      .then((list) => {
        setState({ list, isLoading: false });
        setError(null);
      })
      .catch((err) => {
        setError(`${err}`);
        setState({ list: [], isLoading: false });
      });
  }, []);

  if (state.isLoading) {
    return (
      <div className="flex">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-3">
      {error ? <div className="error-text">{error}</div> : null}
      {state.list.map((chapter) => (
        <div
          key={chapter.id}
          className="item bg-gray-700 p-3 mb-3 rounded-md hover:cursor-pointer hover:bg-gray-800"
        >
          <Link href={`/chapter/view/${chapter.id}`}>
            <div className="title">Title: {chapter.title}</div>
            <div className="Chapter">Chapter: {chapter.chapterNumber}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ChapterList;
