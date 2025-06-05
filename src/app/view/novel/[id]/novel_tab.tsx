"use client";

import { useState } from "react";
import ChapterList from "./chapter_list";
import ContentList from "./content_list";
import { Novel, User } from "@prisma/client";

function NovelTab({ novel,user }: { novel: Novel,user:User }) {
  const tabs = [
    {
      id: "home",
      label: "Home"
    },
    { id: "chapter", label: "Chapter" },
    { id: "contentFiles", label: "Content Files" },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div className="container">
      <div className="tabs flex w-full bg-teal-950 gap-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={(e) => setCurrentTab(tab)}
            className={`tab-item  text-white rounded-md px-2 py-3 hover:cursor-pointer hover:bg-teal-900 ${
              tab.id == currentTab.id ? "bg-teal-900" : ""
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-view my-4 mb-9 p-4">
        {currentTab.id === "home" ? (
          <div
            className="whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: novel.desc,
            }}
          ></div>
        ) : null}
        {currentTab.id === "chapter" ? <ChapterList novel={novel} /> : null}
        {currentTab.id === "contentFiles" ? (
          <ContentList novel={novel} user={user} />
        ) : null}
      </div>
    </div>
  );
}

export default NovelTab;
