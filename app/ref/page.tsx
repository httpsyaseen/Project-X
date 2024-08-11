"use client";
import React, { ChangeEvent } from "react";
import { useState, useEffect, useRef } from "react";
import Heading from "@/components/styles/Heading";
import parse from "html-react-parser";
import Paragraph from "@/components/styles/Paragraph";
import DataLink from "@/components/styles/DataLink";
import SubHeading from "@/components/styles/SubHeading";

const options = {
  replace: (domNode: any) => {
    switch (domNode.name) {
      case "main":
        return <Heading>{domNode.children[0]?.data}</Heading>;
      case "p":
        domNode.children.map((element: any) => {
          console.log(element);
          if (element.name === "data") {
            return <DataLink>{element.children.data}</DataLink>;
          } else {
            <Paragraph>{element.data}</Paragraph>;
          }
        });

      // return (
      //   <Paragraph>
      //     {domNode.children
      //       .map((child: any) => {
      //         if (child.children) {
      //           return <span>{child.children[0]?.data}</span>;
      //         } else {
      //           return child.data;
      //         }
      //       })
      //       .join(" ")}
      //   </Paragraph>
      // );
      case "data":
        return <DataLink>{domNode.children[0]?.data}</DataLink>;
      case "sub":
        return <SubHeading>{domNode.children[0]?.data}</SubHeading>;

      default:
        return domNode;
    }
  },
};

export default function Page() {
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const [content, setContent] = useState<string>("");

  function insertTag(startTag: string, endTag: string) {
    if (editorRef.current) {
      const textArea = editorRef.current;
      const startIndex = textArea.selectionStart;
      const endIndex = textArea.selectionEnd;
      const selectedText = content.substring(startIndex, endIndex);
      const replacement = startTag + selectedText + endTag;
      setContent(
        content.substring(0, startIndex) +
          replacement +
          content.substring(endIndex)
      );
    }
  }
  const convertToBlog = () => {
    let html = content
      .replace(/^@main (.+)$/gm, '<h1 class="main-heading">$1</h1>')
      .replace(/^@sub (.+)$/gm, '<h2 class="sub-heading">$1</h2>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/^(\d+\. .+)$/gm, "<li>$1</li>")
      .replace(
        /<li>[\s\S]*?<\/li>/g,
        (match) => `<ol class="numbered-list">${match}</ol>`
      )
      .replace(/^(.+)$/gm, (match, p1) => {
        if (
          !p1.startsWith("<h1") &&
          !p1.startsWith("<h2") &&
          !p1.startsWith("<ol") &&
          !p1.startsWith("<img")
        ) {
          return `<p class="paragraph">${p1}</p>`;
        }
        return match;
      })
      .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>");

    setContent(html);
  };

  useEffect(() => {
    editorRef.current?.focus();
  }, []);

  return (
    <main className="container mx-auto mt-5">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl py-4 ">Your Editor :</h1>
          <div className=" grid grid-cols-3 gap-2 py-3">
            <button
              className="bg-slate-300 px-2 py rounded-md"
              onClick={() => insertTag("<Main>", "</Main>")}
            >
              Main heading
            </button>
            <button
              className="bg-slate-300 px-2 py rounded-md"
              onClick={() => insertTag("<Sub>", "</Sub>")}
            >
              Sub heading
            </button>
            <button
              className="bg-slate-300 px-2 py rounded-md"
              onClick={() => insertTag("<P>", "</P>")}
            >
              Paragraph
            </button>
            <button
              className="bg-slate-300 px-2 py rounded-md"
              onClick={() => insertTag("<Data>", "</Data>")}
            >
              Link
            </button>
          </div>
        </div>

        <textarea
          ref={editorRef}
          className="w-[100%] h-[400px] border-2 border-primary p-4 flex-1 rounded-md"
          value={content}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <div>
        <h1 className="font-semibold text-2xl py-4 ">Preview :</h1>
        {content}
      </div>
    </main>
  );
}
