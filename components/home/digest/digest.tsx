import Description from "./description";
import Items from "./items";

export default function Digest() {
  return (
    <div className="border-t-2 border-t-divider bg-accent text-bg">
      <div className="mx-auto grid max-w-7xl grid-cols-[220px_minmax(0,1fr)] gap-8 p-6">
        <Description />
        <Items />
      </div>
    </div>
  );
}
