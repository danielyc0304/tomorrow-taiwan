import Details from "./details";
import Report from "./report";
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
    <aside className="static top-19.5 self-start border-b-2 border-b-divider px-0 py-6 xl:sticky xl:border-r-2 xl:border-b-0 xl:border-r-divider xl:border-b-current xl:pr-6 xl:pl-0">
      <Details
        startDate={startDate}
        endDate={endDate}
        contributor={contributor}
        lastUpdatedAt={lastUpdatedAt}
      />
      <Tags tags={tags} />
      <Report />
    </aside>
  );
}
