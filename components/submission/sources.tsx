import { Plus, X } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Inputs } from "./form";

const sourceTypeOptions: { value: string; label: string }[] = [
  { value: "administrative_interpretation", label: "行政函釋／訴願決定" },
  { value: "audio_video_record", label: "影音紀錄" },
  { value: "civil_group_statement", label: "民間團體聲明" },
  { value: "control_audit_report", label: "監察院／審計報告" },
  { value: "government_announcement", label: "政府公告／新聞稿" },
  { value: "government_statistics", label: "政府統計／開放資料" },
  { value: "judgment", label: "判決書" },
  { value: "legislative_gazette", label: "立法院公報" },
  { value: "news", label: "新聞報導" },
  { value: "organization_disclosure", label: "公司／機構公開資訊" },
  { value: "party_public_statement", label: "當事人公開發言" },
  { value: "poll", label: "民調結果" },
  { value: "research_paper", label: "研究報告／學術論文" },
  { value: "statute", label: "法規條文" },
  { value: "other", label: "其他" },
];

const URL_PATTERN =
  /^https?:\/\/(?:[\p{L}\p{N}-]+\.)+[\p{L}]{2,}(?::\d{1,5})?(?:[/?#][^\s]*)?$/u;

export default function Sources() {
  const { control, register } = useFormContext<Inputs>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sources",
  });

  return (
    <div className="field col-span-full">
      <label htmlFor="sources">來源連結</label>
      <div className="flex flex-col gap-2">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid grid-cols-[180px_minmax(0,1fr)_40px] items-center gap-2"
          >
            <select
              {...register(`sources.${index}.type`, { required: true })}
              className="input"
            >
              {sourceTypeOptions.map((sourceTypeOption) => (
                <option
                  key={sourceTypeOption.value}
                  value={sourceTypeOption.value}
                >
                  {sourceTypeOption.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              {...register(`sources.${index}.url`, {
                required: true,
                pattern: URL_PATTERN,
              })}
              placeholder="https://"
              className="input"
            />
            <button
              type="button"
              className="btn btn-ghost btn-icon justify-self-start"
              onClick={() => remove(index)}
              disabled={fields.length === 1}
              title="移除這一筆來源"
              aria-label="移除這一筆來源"
            >
              <X size={15} />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="btn btn-secondary mt-3 gap-1.5 self-start text-[13px]"
        onClick={() => append({ type: "news", url: "" })}
      >
        <Plus size={14} />
        再加一筆來源
      </button>
      <div className="mt-2 text-xs leading-1.6 text-neutral-600">
        先選這個連結是什麼，再貼網址。至少一筆，愈接近一手資料愈好。
      </div>
    </div>
  );
}
