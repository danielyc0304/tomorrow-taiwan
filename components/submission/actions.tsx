import Link from "next/link";

export default function Actions() {
  return (
    <div className="mt-6 flex items-center gap-3 border-t-2 border-t-divider pt-4">
      <button type="submit" form="submission" className="btn btn-primary">
        送出投稿
      </button>
      <Link href="/" className="btn btn-secondary text-text">
        取消
      </Link>
      <span className="ml-auto text-xs leading-1.6 text-neutral-600">
        送出後可在「我的投稿」查看審核進度
      </span>
    </div>
  );
}
