import React from "react";

export default function test({ children }: { children: React.ReactNode }) {
  console.log("hehe");
  return <h2 className="main-heading">{children}</h2>;
}
