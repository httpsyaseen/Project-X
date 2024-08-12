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
  const [content, setContent] = useState<string>(
    localStorage.getItem("blog") || ""
  );
  const [output, setOutput] = useState<string>("");

  function insertTag(Tag: string) {
    if (editorRef.current) {
      const textArea = editorRef.current;
      const startIndex = textArea.selectionStart;
      const endIndex = textArea.selectionEnd;
      const selectedText = content.substring(startIndex, endIndex);
      const replacement = Tag + selectedText;
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
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="font-medium text-pink-500 underline decoration-1.5" target="_blank">$1</a>'
      )
      .replace(/\[t\]/g, '<span class="tab-space"></span>')
      .replace(/^(.+)$/gm, (match, p1) => {
        if (!p1.startsWith("<h1") && !p1.startsWith("<h2")) {
          return `<p class="paragraph">${p1}</p>`;
        }
        return match;
      })
      .replace(/```([\s\S]*?)```/g, "<pre><code class= >$1</code></pre>");

    setOutput(html);
  };

  useEffect(() => {
    editorRef.current?.focus();
  }, []);

  return (
    <main className="container mx-auto mt-5">
      <div>
        <div className="flex justify-between items-center flex-col md:flex-row">
          <h1 className="font-semibold text-2xl py-4 ">Your Editor :</h1>
          <div className=" grid grid-cols-3 gap-2 py-3">
            <button
              className="bg-slate-300 px-2 py rounded-md"
              onClick={() => insertTag("@main ")}
            >
              Main heading
            </button>
            <button
              className="bg-slate-300 px-2 py rounded-md"
              onClick={() => insertTag("@sub ")}
            >
              Sub heading
            </button>

            <button
              className="bg-slate-300 px-2 py rounded-md"
              onClick={() => insertTag(" [Link name](www.wxample.com) ")}
            >
              Link
            </button>
            <button
              className="bg-slate-300 px-2 py rounded-md"
              onClick={convertToBlog}
            >
              Convert
            </button>
          </div>
        </div>

        <textarea
          ref={editorRef}
          className="w-[100%] h-[400px] border-2 border-primary p-4 flex-1 rounded-md focus:outline-slate-300 focus:border-3"
          value={content}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setContent(e.target.value);
            localStorage.setItem("blog", content);
            convertToBlog();
            console.log(output);
          }}
        />
      </div>
      <div className="mb-28">
        <h1 className="font-semibold text-2xl py-4 ">Preview :</h1>
        <div dangerouslySetInnerHTML={{ __html: output }} className=""></div>
      </div>
    </main>
  );
}
