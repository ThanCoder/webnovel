"use client";

import { Novel } from "@/generated/prisma";
import TImage from "./t_image";
import { useState } from "react";
import Link from "next/link";

type NovelListViewProps = {
  list: Novel[];
  showMenu?: boolean;
};

function NovelListView({ list, showMenu = false }: NovelListViewProps) {
  const [menu, setMenu] = useState<{
    x: number;
    y: number;
    novel: Novel;
  } | null>(null);

  return (
    <div className="list-view flex flex-wrap gap-3">
      {list.map((novel) => (
        <div
          key={novel.id}
          className="item rounded-md p-2 bg-gray-950 hover:bg-gray-900 hover:cursor-pointer"
          onContextMenu={(e) => {
            e.preventDefault();
            if (showMenu) {
              setMenu({ x: e.pageX, y: e.pageY, novel });
            }
          }}
        >
          <Link href={`/novel/view/${novel.id}`}>
            {" "}
            <TImage src={novel.coverUrl} alt="Not Found Image" />
            <div className="title text-center mt-2 overflow-ellipsis">
              {novel.title}
            </div>
          </Link>
        </div>
      ))}

      {menu && (
        <ul
          className="absolute bg-gray-950 border rounded shadow-md w-48 z-50 gap-3"
          style={{ top: menu.y, left: menu.x }}
        >
          <li className="px-4 text-center mb-5 py-3">{menu.novel.title}</li>
          <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
            <Link href={`/novel/edit/${menu.novel.id}`}>Edit</Link>
          </li>
          <li
            onClick={(e) => setMenu(null)}
            className="px-4 py-2 hover:bg-red-800 bg-red-700 cursor-pointer"
          >
            Close
          </li>
        </ul>
      )}
    </div>
  );
}

export default NovelListView;
