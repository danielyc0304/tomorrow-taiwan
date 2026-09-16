import Details from "./details";
import Tags from "./tags";

interface SidebarProps {
  tags: string[];
  startDate: string;
  endDate: string;
  contributor: { ai: number; reader: number };
  lastUpdatedAt: string;
}

export default function Sidebar({
  tags,
  startDate,
  endDate,
  contributor,
  lastUpdatedAt,
}: SidebarProps) {
  return (
    <aside className="sticky top-19.5 self-start border-r-2 border-r-divider py-6 pr-6 pl-0">
      <Details
        startDate={startDate}
        endDate={endDate}
        contributor={contributor}
        lastUpdatedAt={lastUpdatedAt}
      />
      <Tags tags={tags} />
    </aside>
  );
}
