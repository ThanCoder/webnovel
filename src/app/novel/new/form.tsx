"use client";

import { createNovelAction } from "@/actions/novel_actions";
import TImage from "@/components/t_image";
import UploadCover from "@/components/upload_cover";
import UploadedImageList from "@/components/uploaded_image_list";
import { useActionState, useState } from "react";

function Form({ userId }: { userId: string }) {
  const [state, action, pending] = useActionState(createNovelAction, null);
  const [coverUrl, setCoverUrl] = useState("");

  return (
    <div className="flex justify-between gap-3">
      <form action={action} className="my-3 w-full">
        {state?.isError ? (
          <div className="bg-red-600 text-center text-white rounded-md p-3 capitalize">
            {state.message}
          </div>
        ) : null}
        <div className="form-container">
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="title..."
            defaultValue={"Untitled"}
          />
        </div>
        <div className="form-container">
          <label htmlFor="author">စာရေးသူ</label>
          <input
            type="text"
            name="author"
            id="author"
            placeholder="author..."
            defaultValue={"Unknown"}
          />
        </div>

        <div className="form-container">
          <label htmlFor="translator">ဘာသာပြန်သူ</label>
          <input
            type="text"
            name="translator"
            id="translator"
            placeholder="translator..."
            defaultValue={"Unknown"}
          />
        </div>
        <div className="form-container">
          <label htmlFor="mc">အထိက ဇောတ်ကောင်</label>
          <input
            type="text"
            name="mc"
            id="mc"
            placeholder="mc..."
            defaultValue={"Unknown"}
          />
        </div>

        <div className="form-container">
          <label htmlFor="coverUrl">coverUrl</label>
          <input
            type="text"
            name="coverUrl"
            id="coverUrl"
            placeholder="coverUrl..."
            defaultValue={coverUrl}
            // onChange={e =>{
            //   setCoverUrl(e.target.value)
            // }}
          />
          {/* image */}
          {coverUrl? <TImage src={coverUrl} alt="Not Found Image!"/>:null}
        </div>

        <div className="form-container">
          <label htmlFor="description">description or review</label>
          <textarea className="min-h-50" name="description" id="description" placeholder="description..."  />
        </div>
        <div className="flex justify-end">
          <button type="submit">{pending ? "Adding..." : "Add"}</button>
        </div>
      </form>
      {/* right side */}
      <div className="right-side mt-6 w-96">
        <UploadCover
          url={coverUrl}
          onUploaded={(url) => {
            setCoverUrl(url);
          }}
        />
        {/* list */}
        <UploadedImageList
          currentUrl={coverUrl}
          onClicked={(url) => {
            console.log(url);
            
            setCoverUrl(url);
          }}
        />
      </div>
    </div>
  );
}

export default Form;
