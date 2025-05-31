"use client";

import { novelContentAddAction } from "@/actions/novel_content_actions";
import { Novel } from "@/generated/prisma";
import { ContentFileTypes, ContentFormType } from "@/types/types";
import { useActionState, useState } from "react";

function ContentForm({ novel }: { novel: Novel }) {
  const [formType, setFormType] = useState<string>(ContentFormType.chapter);
  const [fileType, setFiletype] = useState<string>(
    ContentFileTypes.downloadLink
  );
  const [state, action, pending] = useActionState(novelContentAddAction, {
    title: "Untitled",
    contentFormType: formType,
    content: "",
    chapterNumber: 1,
    coverUrl: "",
    desc: "",
    type: "",
    novelId: novel.id,
    isError: false,
    message: "",
  });
  return (
    <div className="container mb-80">
      {state.message !== "" ? (
        <div
          className={`text-center ${
            state.isError ? "bg-red-600" : "bg-teal-600"
          } text-white p-3 rounded-md capitalize`}
        >
          {state.message}
        </div>
      ) : null}

      <form action={action}>
        <div className="form-container">
          <input type="hidden" name="contentFormType" defaultValue={formType} />
          <label htmlFor="type">Form Type (အမျိုးအစား)</label>
          <select
            name="type"
            id="type"
            defaultValue={formType}
            onChange={(e) => {
              setFormType(e.target.value);
            }}
          >
            {Object.values(ContentFormType).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="form-container">
          <label htmlFor="title">title</label>
          <input
            defaultValue={state.title}
            type="text"
            name="title"
            id="title"
            placeholder="title..."
          />
        </div>

        {/* chatper form */}
        {formType === ContentFormType.chapter ? (
          <>
            <div className="form-container">
              <label htmlFor="chapterNumber">chapterNumber</label>
              <input
                defaultValue={state.chapterNumber}
                type="number"
                name="chapterNumber"
                id="chapterNumber"
                placeholder="chapterNumber..."
                min={1}
                step={1}
              />
            </div>

            <div className="form-container">
              <label htmlFor="content">content</label>
              <textarea
                className="min-h-50"
                defaultValue={state.content}
                name="content"
                id="content"
                placeholder="content..."
              />
            </div>
          </>
        ) : null}
        {/* content file form */}
        {formType === ContentFormType.contentFile ? (
          <>
            <div className="form-container">
              <input
                type="hidden"
                name="contentFormType"
                defaultValue={fileType}
              />
              <label htmlFor="type">Content File Type (အမျိုးအစား)</label>
              <select
                name="type"
                id="type"
                defaultValue={fileType}
                onChange={(e) => {
                  setFiletype(e.target.value);
                }}
              >
                {Object.values(ContentFileTypes).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-container">
              <label htmlFor="content">content</label>
              <input
                defaultValue={state.content}
                type="text"
                name="content"
                id="content"
                placeholder="content..."
              />
            </div>
            <div className="form-container">
              <label htmlFor="coverUrl">coverUrl</label>
              <input
                defaultValue={state.coverUrl}
                type="text"
                name="coverUrl"
                id="coverUrl"
                placeholder="coverUrl..."
              />
            </div>
            <div className="form-container">
              <label htmlFor="desc">အကြောင်းအရာ (optional)</label>
              <textarea
                className="min-h-50"
                defaultValue={state.desc}
                name="desc"
                id="desc"
                placeholder="desc..."
              />
            </div>
          </>
        ) : null}
        <div className="flex justify-end">
          <button type="submit">{pending ? "Adding..." : "Add"}</button>
        </div>
      </form>
    </div>
  );
}

export default ContentForm;
