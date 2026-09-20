import Detail from "./detail";
import Summary from "./summary";

interface ContentProps {
  type: string;
  contributor: "ai" | "reader";
  reviewed?: boolean;
  title: string;
  description: string;
  sources: { name: string; url: string }[];
  updatedAt: string;
  isOpen: boolean;
}

export default function Content({
  type,
  contributor,
  reviewed,
  title,
  description,
  sources,
  updatedAt,
  isOpen,
}: ContentProps) {
  return (
    <div className="border-b border-b-divider px-0 py-4">
      <Summary
        type={type}
        contributor={contributor}
        reviewed={reviewed}
        title={title}
        isOpen={isOpen}
      />
      {isOpen && (
        <Detail
          contributor={contributor}
          description={description}
          sources={sources}
          updatedAt={updatedAt}
        />
      )}
    </div>
  );
}
