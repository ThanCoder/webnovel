"use client";

import TLoader from "@/components/t_loader";
import TTimeAgo from "@/components/time_ago";
import { Chapter, ContentFile, Novel } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { ContentFileTypes } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

function ContentList({ novel }: { novel: Novel }) {
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<{
    list: ContentFile[];
    isLoading: boolean;
  }>({
    list: [],
    isLoading: true,
  });

  useEffect(() => {
    fetch(`/api/content?novelId=${novel.id}`)
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
      {state.list.map((content) => (
        <div
          key={content.id}
          className="item bg-gray-700 overflow-hidden p-3 mb-3 rounded-md hover:cursor-pointer hover:bg-gray-800"
        >
          <div className="title">Title: {content.title}</div>
          <div className="title">Type: {content.type}</div>
          <div className="truncate  whitespace-break-spaces">
            {content.type === ContentFileTypes.pageLink ? (
              <Link href={`${content.content}`}>{content.content}</Link>
            ) : (
              content.content
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentList;
