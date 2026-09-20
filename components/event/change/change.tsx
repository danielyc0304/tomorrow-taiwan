import Items from "./items";
import Title from "./title";

interface ChangeProps {
  changes: {
    date: string;
    type: string;
    contributor: "ai" | "reader";
    reviewed?: boolean;
    title: string;
    description: string;
    sources: { name: string; url: string }[];
    updatedAt: string;
  }[];
}

export default function Change({ changes }: ChangeProps) {
  return (
    <div className="pt-6">
      <Title />
      <div className="mb-2 h-0.5 bg-divider" />
      <Items changes={changes} />
    </div>
  );
}
