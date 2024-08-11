"use client";

import React, { useState, useRef } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const convertToBlog = () => {
    let html = input
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

    setOutput(html);
  };

  const generateHTMLPage = () => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .main-heading {
            color: #333;
            font-size: 28px;
            border-bottom: 2px solid #333;
        }
        .sub-heading {
            color: #666;
            font-size: 22px;
        }
        .paragraph {
            font-size: 16px;
        }
        .paragraph a {
            color: #0066cc;
            text-decoration: none;
        }
        .paragraph a:hover {
            text-decoration: underline;
        }
        .blog-image {
            max-width: 100%;
            height: auto;
            margin: 20px 0;
        }
        .numbered-list {
            margin-left: 20px;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    ${output}
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "blog.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="App">
      <textarea
        id="editor"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        // rows="10"
        // cols="50"
        placeholder="Type your blog content here. Use @main for main heading, @sub for sub-heading, [text](url) for links, ![alt](image_name) for images, and numbered lists with 1. 2. etc."
      />
      <button onClick={convertToBlog}>Convert to Blog</button>
      <button onClick={generateHTMLPage}>Download HTML</button>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: output }}
      />
    </div>
  );
}
