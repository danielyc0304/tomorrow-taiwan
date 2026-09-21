import Item from "./item";

interface ItemsProps {
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

export default function Items({ changes }: ItemsProps) {
  return (
    <div>
      {changes.map((change) => (
        <Item key={change.title} {...change} />
      ))}
    </div>
  );
}
