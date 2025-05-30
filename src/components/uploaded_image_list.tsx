"use client";

import { useEffect, useState } from "react";
import TImage from "./t_image";
import { ListBlobResult } from "@vercel/blob";
import TLoader from "./t_loader";

type UploadedImageListProps = {
  onClicked: (url: string) => void;
  currentUrl?: string;
};

function UploadedImageList({ onClicked, currentUrl }: UploadedImageListProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ListBlobResult>();
  useEffect(() => {
    init();
  }, []);
  async function init() {
    setIsLoading(true);
    fetch("/api/upload/image")
      .then((res) => res.json())
      .then((res) => {
        setResult(res);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`UploadedImageList: ${e}`);
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return TLoader();
  }

  return (
    <div className="container">
      {/* refresh button */}
      <button className="mb-3" onClick={(e) => init()}>
        Refresh
      </button>

      <div className="flex gap-2 flex-wrap">
        {result?.blobs.map((e) => (
          <div
            key={e.url}
            onClick={(_) => onClicked(e.url)}
            className={`rounded-md ${
              currentUrl === e.url ? "border-blue-700 border-3" : ""
            }`}
          >
            <TImage src={e.url} width={130} height={130} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadedImageList;
