import Item from "./item";

const data: {
  date: string;
  type: string;
  title: string;
  description: string;
}[] = [
  {
    date: "2026-08-22",
    type: "administration",
    title: "能源轉向",
    description: "經濟部公布無核電第一年的備用容量與電價檢討報告",
  },
  {
    date: "2026-08-20",
    type: "opinion",
    title: "台灣 #MeToo",
    description: "勞動部統計：性平三法新制施行後申訴案件處理時間縮短",
  },
  {
    date: "2026-08-17",
    type: "legislation",
    title: "國會改革法案",
    description: "立法院程序委員會排入職權行使法再修正草案",
  },
];

export default function Items() {
  return (
    <div className="flex flex-col">
      {data.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
}
