"use client";

import { createNovelAction } from "@/app/actions/novel_actions";
import UploadCover from "@/components/upload_cover";
import { ChangeEvent, useActionState, useState } from "react";

function Form({ userId }: { userId: string }) {
  const [state, action, pending] = useActionState(createNovelAction, null);
  const [coverUrl, setCoverUrl] = useState("");
  // const [formData, setFormData] = useState({
  //   userId: userId,
  //   title: "Untitled",
  //   author: "Unknown",
  //   translator: "Unknown",
  //   mc: "Unknown",
  //   coverUrl: "",
  //   desc: "",
  // });

  // function onChanged(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  //   setFormData({ ...formData, [e.target.name]: [e.target.value] });
  // }

  return (
    <form action={action} className="my-3 ">
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
        <label htmlFor="author">author</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="author..."
          defaultValue={"Unknown"}
        />
      </div>

      <div className="form-container">
        <label htmlFor="translator">translator</label>
        <input
          type="text"
          name="translator"
          id="translator"
          placeholder="translator..."
          defaultValue={"Unknown"}
        />
      </div>
      <div className="form-container">
        <label htmlFor="mc">mc</label>
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
        />
      </div>
      <UploadCover
        url={coverUrl}
        onUploaded={(url) => {
          setCoverUrl(url);
        }}
      />

      <div className="form-container">
        <label htmlFor="desc">desc</label>
        <textarea name="desc" id="desc" placeholder="desc..." />
      </div>
      <div className="flex justify-end">
        <button type="submit">{pending ? "Adding..." : "Add"}</button>
      </div>
    </form>
  );
}

export default Form;
