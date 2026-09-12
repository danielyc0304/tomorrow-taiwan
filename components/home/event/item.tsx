import Content from "./content";
import Date from "./date";
import Stats from "./stats";
import Tags from "./tags";

interface ItemProps {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  tags: string[];
  contributor: { ai: number; reader: number };
  isTracking: boolean;
}

export default function Item({
  startDate,
  endDate,
  title,
  description,
  tags,
  contributor,
  isTracking,
}: ItemProps) {
  return (
    <div className="grid cursor-pointer grid-cols-[150px_minmax(0,1fr)_210px_132px] items-start gap-6 border-b-2 border-b-divider py-6 hover:bg-neutral-100">
      <Date startDate={startDate} endDate={endDate} />
      <Content title={title} description={description} />
      <Tags tags={tags} />
      <Stats {...contributor} isTracking={isTracking} />
    </div>
  );
}
