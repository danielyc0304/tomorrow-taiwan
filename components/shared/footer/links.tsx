import Link from "next/link";

interface LinksProps {
  category: string;
  items: { label: string; href: string }[];
}
export default function Links({ category, items }: LinksProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[11px] tracking-[0.14em] text-neutral-600 uppercase">
        {category}
      </span>
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
