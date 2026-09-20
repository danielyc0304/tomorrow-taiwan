import { formatDate } from "@/utils/format";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

interface SourceProps {
  contributor: "ai" | "reader";
  sources: { name: string; url: string }[];
  updatedAt: string;
}

export default function Source({
  contributor,
  sources,
  updatedAt,
}: SourceProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-t border-t-divider pt-3 text-xs leading-1.6 text-neutral-700">
      <span>
        依據：
        {sources.map((source, index) => (
          <Fragment key={source.url}>
            {index > 0 && "、"}
            <Link
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.name}
            </Link>
          </Fragment>
        ))}
      </span>
      <span>
        更新：{formatDate(updatedAt)}{" "}
        {contributor === "ai" ? "AI 摘要" : "讀者投稿"}
      </span>
    </div>
  );
}
