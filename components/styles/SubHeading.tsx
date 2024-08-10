import React from "react";

export default function SubHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="sub-heading">{children}</div>;
}
