"use client";

import TTimeAgo from "@/components/time_ago";
import { UserTypes } from "@/types/user_types";
import { ContentFile, Novel, User } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

function ContentList({ novel, user }: { novel: Novel; user: User }) {
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

  async function deleteContent(content: ContentFile) {
    try {
      const isGranted = window.confirm(
        `${content.title} ကိုဖျက်ချင်တာ သေချာပြီလား?`
      );
      if (!isGranted) return;

      // db remove
      const res = await fetch(`/api/content?id=${content.id}`,{
        method:'DELETE'
      });
      if (!res.ok) {
        window.alert("error ရှိနေပါတယ်");
        return;
      }
      //ui remove
        let list = state.list.filter((e) => e.id !== content.id);
        setState({ ...state, list });
    } catch (error:any) {
      window.alert("error ရှိနေပါတယ်");
      console.error(error.statusMessage);
      
    }
  }

  if (state.isLoading) {
    return (
      <div className="flex">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }
  return (
    <div className="grid gap-3">
      {error ? <div className="error-text">{error}</div> : null}
      {state.list.map((content) => (
        <div
          key={content.id}
          className="flex justify-between  bg-gray-700 overflow-hidden p-3 mb-3 rounded-md hover:cursor-pointer hover:bg-gray-800"
        >
          <div className="left">
            <div className="title">Title: {content.title}</div>
            <div className="title">Type: {content.type}</div>
            <div className="title">
              Date: <TTimeAgo date={content.date} />
            </div>
            <Link href={`${content.content}`}>{content.content}</Link>
          </div>
          {novel.userId === user.id || user.type === UserTypes.admin ? (
            <div className="right">
              <button
                className="!bg-red-700"
                onClick={() => deleteContent(content)}
              >
                Delete
              </button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default ContentList;
