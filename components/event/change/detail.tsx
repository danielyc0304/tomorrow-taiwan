import Source from "./source";

interface DetailProps {
  contributor: "ai" | "reader";
  description: string;
  sources: { name: string; url: string }[];
  updatedAt: string;
}

export default function Detail({
  contributor,
  description,
  sources,
  updatedAt,
}: DetailProps) {
  return (
    <div className="mt-3 border-t-2 border-t-text bg-surface p-4">
      <p className="mx-0 mt-0 mb-3 text-pretty text-neutral-900">
        {description}
      </p>
      <Source
        contributor={contributor}
        sources={sources}
        updatedAt={updatedAt}
      />
    </div>
  );
}
