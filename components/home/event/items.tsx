import Item from "./item";

const data: {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  tags: string[];
  contributor: { ai: number; reader: number };
  isTracking: boolean;
}[] = [
  {
    startDate: "2023-05-10",
    endDate: "2024-10-10",
    title: "國會改革法案與立法院外集會",
    description:
      "立法院職權行使法修正引發大規模集會，最終由憲法法庭認定多數條文違憲。",
    tags: ["action", "judiciary", "legislation"],
    contributor: { ai: 4, reader: 1 },
    isTracking: true,
  },
  {
    startDate: "2023-05-10",
    endDate: "2024-10-10",
    title: "國會改革法案與立法院外集會",
    description:
      "立法院職權行使法修正引發大規模集會，最終由憲法法庭認定多數條文違憲。",
    tags: ["action", "judiciary", "legislation"],
    contributor: { ai: 4, reader: 1 },
    isTracking: true,
  },
];

export default function Items() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-8">
      {data.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </div>
  );
}
