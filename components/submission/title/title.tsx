export default function Title() {
  return (
    <>
      <div className="mb-3 text-[11px] font-bold tracking-[0.18em] text-accent-700 uppercase">
        閱覽者投稿
      </div>
      <h1 className="mx-0 mt-0 mb-3 text-[clamp(28px,5.5vw,44px)] tracking-[-0.03em]">
        投稿一條改變
      </h1>
      <p className="mx-0 mt-0 mb-6 max-w-[60ch] text-neutral-800">
        投稿會標記為「讀者投稿」並進入待審，通過後顯示在事件時間軸上。附上可查證的來源會加快審核。
      </p>
    </>
  );
}
