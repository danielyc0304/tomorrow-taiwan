"use client";

import { useState } from "react";
import Content from "./content";
import Date from "./date";
import Divider from "./divider";

interface ItemProps {
  date: string;
  type: string;
  contributor: "ai" | "reader";
  reviewed?: boolean;
  title: string;
  description: string;
  sources: { name: string; url: string }[];
  updatedAt: string;
}

export default function Item({
  date,
  type,
  contributor,
  reviewed,
  title,
  description,
  sources,
  updatedAt,
}: ItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div
      className={`grid cursor-pointer grid-cols-[22px_minmax(0,1fr)] gap-3 hover:bg-neutral-100 md:grid-cols-[104px_22px_minmax(0,1fr)] md:gap-4 ${isOpen || isClicked ? "bg-neutral-100" : "bg-transparent"}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsClicked(!isClicked)}
    >
      <Date date={date} />
      <Divider isOpen={isOpen || isClicked} />
      <Content
        type={type}
        contributor={contributor}
        reviewed={reviewed}
        title={title}
        description={description}
        sources={sources}
        updatedAt={updatedAt}
        isOpen={isOpen || isClicked}
      />
    </div>
  );
}
