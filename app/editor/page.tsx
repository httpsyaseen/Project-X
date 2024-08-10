"use client";

import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { createClient } from "@/utils/supabase/client";

const CustomEditor: React.FC = () => {
  const supabase = createClient();

  const [content, setContent] = useState<string>("");
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const insertFormat = (startTag: string, endTag: string): void => {
    if (editorRef.current) {
      const textArea = editorRef.current;
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      const selectedText = content.substring(start, end);
      const replacement = startTag + selectedText + endTag;
      setContent(
        content.substring(0, start) + replacement + content.substring(end)
      );
    }
  };

  const insertImage = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        console.log("tried");
        // Upload file to Supabase Storage
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data, error } = await supabase.storage
          .from("blog-images")
          .upload(fileName, file);

        if (error) throw error;

        // Get public URL of uploaded file
        const { publicURL, error: urlError } = supabase.storage
          .from("blog-images")
          .getPublicUrl(data.path);

        if (urlError) throw urlError;

        // Insert image tag with public URL into content
        const imageTag = `<img src="${publicURL}" alt="Uploaded image" />`;
        setContent(content + imageTag);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Please try again.");
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Tab") {
      e.preventDefault();
      if (editorRef.current) {
        const start = editorRef.current.selectionStart;
        const end = editorRef.current.selectionEnd;
        setContent(content.substring(0, start) + "\t" + content.substring(end));
        setTimeout(() => {
          if (editorRef.current) {
            editorRef.current.selectionStart = editorRef.current.selectionEnd =
              start + 1;
          }
        }, 0);
      }
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => insertFormat("<main>", "</main>")}>Main</button>
        <button onClick={() => insertFormat("<sub>", "</sub>")}>
          Subheading
        </button>
        <button onClick={() => insertFormat("<link>", "</link>")}>Link</button>
        <button onClick={() => insertFormat("<point>", "</point>")}>
          Point
        </button>
        <input type="file" accept="image/*" onChange={insertImage} />
      </div>
      <textarea
        ref={editorRef}
        value={content}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setContent(e.target.value)
        }
        onKeyDown={handleKeyDown}
        style={{ width: "100%", height: "400px" }}
      />
      <div>
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default CustomEditor;
