import Description from "./description";
import Items from "./items";

export default function Digest() {
  return (
    <div className="border-t-2 border-t-divider bg-accent text-bg">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 p-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
        <Description />
        <Items />
      </div>
    </div>
  );
}
