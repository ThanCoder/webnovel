"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import TImage from "./t_image";
import {
  ListBlobResult,
  ListBlobResultBlob,
  ListFoldedBlobResult,
  PutBlobResult,
} from "@vercel/blob";
import TLoader from "./t_loader";

type UploadedImageListProps = {
  onClicked: (url: string) => void;
  currentUrl?: string;
};

function UploadedImageList({ onClicked, currentUrl }: UploadedImageListProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<ListBlobResult>();
  const uploadInput = useRef<HTMLInputElement>(null);
  // init
  useEffect(() => {
    init();
  }, []);
  async function init() {
    try {
      setIsLoading(true);
      const res = await fetch("/api/upload/image");
      const resJ = await res.json();

      const data = resJ as ListFoldedBlobResult;
      console.log(data);

      setResult(data);
    } catch (error) {
      console.log(`UploadedImageList: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  async function uploadImage(e: ChangeEvent<HTMLInputElement>) {
    try {
      if (e.target.files?.length == 0) return;
      const file = e.target.files![0];
      const formData = new FormData();
      formData.append("file", file);

      setIsUploading(true);

      const res = await fetch("/api/upload/image", {
        method: "POST",
        body: formData,
      });
      const resJ = await res.json();
      const data = resJ as PutBlobResult;
      // success
      onClicked(data.url);
      init();
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
      if (uploadInput.current) {
        uploadInput.current.value = "";
      }
    }
  }

  async function deleteImage(blob: ListBlobResultBlob) {
    try {
      setIsLoading(true);
      await fetch("/api/upload/image", {
        method: "DELETE",
        body: JSON.stringify({ pathname: blob.pathname }),
      });
      init();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      {/* upload form */}
      {isUploading ? (
        <TLoader />
      ) : (
        <input
          type="file"
          accept="image/*"
          name="file"
          id="file"
          ref={uploadInput}
          className="mb-3"
          onChange={uploadImage}
        />
      )}

      {/* refresh button */}
      <button className="mb-3" onClick={(e) => init()}>
        Refresh
      </button>

      {/* list */}
      {isLoading ? (
        <TLoader />
      ) : (
        <div className="flex gap-2 flex-wrap">
          {result?.blobs.map((blob) => (
            <div
              key={blob.url}
              onClick={(_) => onClicked(blob.url)}
              onContextMenu={(e) => {
                e.preventDefault();
                const res = confirm("ဖျက်ချင်တာ သေချာပြီလား?");
                if (!res) return;
                deleteImage(blob);
              }}
              className={`rounded-md border-2 border-transparent hover:cursor-pointer  hover:border-blue-700  ${
                currentUrl === blob.url ? "border-blue-700 border-2" : ""
              }`}
            >
              <TImage src={blob.url} width={130} height={130} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UploadedImageList;
