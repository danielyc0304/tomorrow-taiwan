const typeLabelMap: Record<string, string> = {
  action: "公民行動與遊行",
  administration: "行政與制度改革",
  economy: "產業與經濟",
  judiciary: "司法判決",
  legislation: "立法／修法",
  media: "媒體與輿論",
  opinion: "民意與觀念轉變",
  relation: "國際關係",
};

interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <>
      <div className="mt-6 mb-3 text-[11px] font-bold tracking-[0.16em] text-neutral-600 uppercase">
        改變類型
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="tag tag-outline text-[11px]">
            {typeLabelMap[tag]}
          </span>
        ))}
      </div>
    </>
  );
}
