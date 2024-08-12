"use client";

import React from "react";

const EditableDiv: React.FC = () => {
  const applyStyle = (style: string) => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return; // No text selected

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.className = style;

    range.surroundContents(span);
    selection.removeAllRanges(); // Clear the selection
  };

  return (
    <div>
      <button onClick={() => applyStyle("main-heading")}>
        Apply Heading Style
      </button>
      <div
        contentEditable={true}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "100px", // Optional: ensure the div has some height
        }}
      >
        This is an editable area. <b>Bold text</b> and <i>italic text</i> can be
        formatted here.
      </div>
    </div>
  );
};

export default EditableDiv;
