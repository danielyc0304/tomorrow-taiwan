"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const eventOptions: { id: number; name: string }[] = [
  { id: 1, name: "2024 國會改革法案與立法院外集會" },
  { id: 2, name: "2024 死刑存廢與憲法法庭死刑判決" },
];

const typeOptions: { value: string; label: string }[] = [
  { value: "action", label: "公民行動與遊行" },
  { value: "administration", label: "行政與制度改革" },
  { value: "economy", label: "產業與經濟" },
  { value: "judiciary", label: "司法判決" },
  { value: "legislation", label: "立法／修法" },
  { value: "media", label: "媒體與輿論" },
  { value: "opinion", label: "民意與觀念轉變" },
  { value: "relation", label: "國際關係" },
];

const getDefaultDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export type Inputs = {
  event: string;
  date: string;
  type: string;
  digest: string;
  detail: string;
  sources: { type: string; url: string }[];
};

export default function Form() {
  const methods = useForm<Inputs>({
    defaultValues: { sources: [{ type: "news", url: "" }] },
  });
  const { register, handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form
        id="submission"
        className="grid grid-cols-2 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="field col-span-full">
          <label htmlFor="event">要投稿到哪個事件</label>
          <select
            id="event"
            {...(register("event"), { required: true })}
            className="input"
          >
            {eventOptions.map((eventOption) => (
              <option key={eventOption.id} value={eventOption.id}>
                {eventOption.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="date">發生日期</label>
          <input
            type="date"
            id="date"
            {...register("date", { required: true })}
            defaultValue={getDefaultDate()}
            className="input"
          />
        </div>
        <div className="field">
          <label htmlFor="type">改變類型</label>
          <select
            id="type"
            {...register("type", { required: true })}
            className="input"
          >
            {typeOptions.map((typeOption) => (
              <option key={typeOption.value} value={typeOption.value}>
                {typeOption.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field col-span-full">
          <label htmlFor="digest">一句話摘要（列表上顯示，40 字內）</label>
          <input
            type="text"
            id="digest"
            {...register("digest", { required: true, maxLength: 40 })}
            placeholder="例：立法院三讀通過《⋯⋯法》第 X 條修正"
            className="input"
          />
        </div>
        <div className="field col-span-full">
          <label htmlFor="detail">詳細說明（展開時顯示）</label>
          <textarea
            id="detail"
            {...register("detail", { required: true })}
            placeholder="說明這項改變的內容、影響範圍，以及它和事件的關聯。"
            rows={5}
            className="input"
          ></textarea>
        </div>
      </form>
    </FormProvider>
  );
}
