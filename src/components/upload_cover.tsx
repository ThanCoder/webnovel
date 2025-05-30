"use client";

import { upload } from "@vercel/blob/client";
import Image from "next/image";
import { useEffect, useState } from "react";

type UploadCoverProps = {
  url: string;
  onUploaded: (url: string) => void;
};

function UploadCover({ url, onUploaded }: UploadCoverProps) {
  const [imageUrl, setImageUrl] = useState("/next.svg");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (url) {
      setImageUrl(url);
    }
  }, [url]);

  const uploadFile = async (files: HTMLInputElement["files"]) => {
    if (files?.length == 0) return;
    const file = files![0];

    const formData = new FormData();
    formData.append("file", file);

    const newBlob = await upload(file.name, file, {
      access: "public",
      handleUploadUrl: "/api/image/upload",
    });
    console.log(newBlob);
    

    // if (data.url) {
    //   setImageUrl(data.url);
    //   onUploaded(data.url);
    // }
    // if (data.message) {
    //   setMessage(data.message);
    // }
    // if (data.isError) {
    //   setIsError(data.isError);
    // }
  };

  return (
    <div className="bg-gray-900 p-2 mb-3">
      {message ? (
        <div className={isError ? "text-red-700" : "text-teal-700"}>
          {message}
        </div>
      ) : null}
      <input
        type="file"
        accept="image/*"
        name="file"
        id="file"
        onChange={(e) => {
          uploadFile(e.target.files);
        }}
      />
      {imageUrl ? (
        <Image alt="image cover" src={imageUrl} width={150} height={150} />
      ) : null}
    </div>
  );
}

export default UploadCover;
