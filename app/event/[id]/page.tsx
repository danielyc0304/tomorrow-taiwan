import Change from "@/components/event/change/change";
import Hero from "@/components/event/hero/hero";
import Sidebar from "@/components/event/sidebar/sidebar";

const data: {
  title: string;
  description: string;
  tags: string[];
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
} = {
  title: "國會改革法案與立法院外集會",
  description:
    "2024 年 5 月立法院審議國會改革法案，議場衝突與院外集會接連發生。法案三讀後由多個機關聲請釋憲，憲法法庭於同年 10 月作出判決，宣告多數新增條文違憲或部分違憲。",
  tags: ["action", "judiciary", "legislation", "media"],
  changes: [
    {
      date: "2024-05-17",
      type: "media",
      contributor: "ai",
      reviewed: true,
      title: "立法院審議國會改革法案，議場發生肢體衝突",
      description:
        "在院會表決程序中發生朝野肢體衝突，程序爭議成為後續釋憲的主要爭點之一，媒體與輿論對表決方式的討論擴大。",
      sources: [
        { name: "立法院公報", url: "/" },
        { name: "新聞報導", url: "/" },
      ],
      updatedAt: "2026-08-22",
    },
    {
      date: "2024-05-21",
      type: "action",
      contributor: "reader",
      title: "立法院外集會，主辦方稱參與者逾十萬人",
      description:
        "青島東路一帶連日集會，訴求聚焦於法案審查程序透明化。此波行動被稱為青鳥行動，是 2014 年之後規模較大的一次公民集會。",
      sources: [
        { name: "主辦單位估計", url: "/" },
        { name: "現場報導", url: "/" },
      ],
      updatedAt: "2026-08-11",
    },
  ],
};

export default function Event() {
  const startDate = data.changes[0].date;
  const endDate = data.changes[data.changes.length - 1].date;
  const contributor = data.changes.reduce<{ ai: number; reader: number }>(
    (counts, change) => {
      counts[change.contributor]++;
      return counts;
    },
    { ai: 0, reader: 0 },
  );
  const lastUpdatedAt = data.changes.map((change) => change.updatedAt).sort()[
    data.changes.length - 1
  ];

  return (
    <div>
      <Hero
        startDate={startDate}
        endDate={endDate}
        title={data.title}
        description={data.description}
      />
      <div className="border-t-2 border-t-divider">
        <div className="mx-auto my-0 grid max-w-7xl grid-cols-[280px_minmax(0,1fr)] gap-8 px-6 pt-0 pb-8">
          <Sidebar
            tags={data.tags}
            startDate={startDate}
            endDate={endDate}
            contributor={contributor}
            lastUpdatedAt={lastUpdatedAt}
          />
          <Change changes={data.changes} />
        </div>
      </div>
    </div>
  );
}
