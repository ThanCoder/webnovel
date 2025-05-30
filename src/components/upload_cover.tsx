"use client";

import { uploadCoverAction } from "@/app/actions/upload_cover_action";
import Image from "next/image";
import { useActionState, useEffect, useState } from "react";

type UploadCoverProps = {
  url: string;
  onUploaded: (url: string) => void;
};

function UploadCover({ url, onUploaded }: UploadCoverProps) {
  const [imageUrl, setImageUrl] = useState("/next.svg");
  const [showUploadBtn, setShowUploadBtn] = useState(false);
  const [state, action, pending] = useActionState(uploadCoverAction, null);

  useEffect(() => {
    if (url) {
      setImageUrl(url);
    }
  }, []);

  useEffect(() => {
    setShowUploadBtn(pending);

    if (state) {
      // setImageUrl(state.url);
      console.log(state);
      
    }
  }, [state, pending]);

  return (
    <div className="bg-gray-900 p-2 mb-3">
      {/* {message ? (
        <div className={isError ? "text-red-700" : "text-teal-700"}>
          {message}
        </div>
      ) : null} */}
      <form action={action}>
        <input
          type="file"
          accept="image/*"
          name="file"
          id="file"
          onChange={(e) => {
            if (e.target.files?.length == 0) {
              setShowUploadBtn(false);
            } else {
              setShowUploadBtn(true);
            }
          }}
        />
        {imageUrl ? (
          <Image alt="image cover" src={imageUrl} width={150} height={150} />
        ) : null}
        {showUploadBtn ? (
          <button type="submit">{pending ? "Uploading..." : "Upload"}</button>
        ) : null}
      </form>
    </div>
  );
}

export default UploadCover;
