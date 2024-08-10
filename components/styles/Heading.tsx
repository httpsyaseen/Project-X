import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="main-heading">{children}</h2>;
}
