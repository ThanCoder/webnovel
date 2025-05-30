"use client";
import TLoader from "@/components/t_loader";
import { Novel } from "@/generated/prisma";
import { useState } from "react";

function NovelTab({ novel }: { novel: Novel }) {
  const tabs = [
    {
      id: "home",
      label: "Home",
      content: (
        <div
          className="whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: novel.desc
          }}
        ></div>
      ),
    },
    { id: "chapter", label: "Chapter", content: <div>chapter</div> },
    { id: "contentFiles", label: "Content Files", content: <div>Content</div> },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div className="tabs">
      <div className="tabs flex w-full bg-teal-950 gap-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={(e) => setCurrentTab(tab)}
            className={`tab-item  text-white text-2xl rounded-md px-2 py-3 hover:cursor-pointer hover:bg-teal-900 ${
              tab.id == currentTab.id ? "bg-teal-900" : ""
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-view my-4 mb-9">{currentTab.content}</div>
    </div>
  );
}

export default NovelTab;
