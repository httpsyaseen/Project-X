import React from "react";

export default function Paragraph({ children }: { children: React.ReactNode }) {
  console.log(children);

  return <p className="paragraph">{children}</p>;
}
