import React from "react";

export default function DataLink({ children }: { children: React.ReactNode }) {
  console.log("in", children);
  return (
    <span className="font-medium text-pink-500 underline decoration-1.5">
      {children}
    </span>
  );
}
