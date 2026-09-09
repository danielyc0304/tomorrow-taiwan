import Brand from "./brand";
import Links from "./links";

const links: { category: string; items: { label: string; href: string }[] }[] =
  [
    {
      category: "內容",
      items: [
        { label: "全部事件", href: "/1" },
        { label: "改變類型", href: "/2" },
        { label: "今日摘要", href: "/3" },
      ],
    },
    {
      category: "參與",
      items: [
        { label: "投稿指南", href: "/4" },
        { label: "錯誤回報流程", href: "/5" },
        { label: "編輯守則", href: "/6" },
      ],
    },
    {
      category: "說明",
      items: [
        { label: "AI 摘要如何產生", href: "/7" },
        { label: "資料來源", href: "/8" },
        { label: "聯絡我們", href: "/9" },
      ],
    },
  ];

export default function Footer() {
  return (
    <footer className="mt-8 border-t-2 border-t-divider">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 p-6 text-[13px] text-neutral-700 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        <Brand />
        {links.map((linkGroup) => (
          <Links
            key={linkGroup.category}
            category={linkGroup.category}
            items={linkGroup.items}
          />
        ))}
      </div>
    </footer>
  );
}
