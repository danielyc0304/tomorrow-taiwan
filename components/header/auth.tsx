"use client";

import Link from "next/link";
import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-2 border-l-2 border-l-divider pl-4">
      {isLogin ? (
        <Link
          href="/me"
          className="flex cursor-pointer items-center gap-2 text-inherit no-underline"
        >
          <span className="flex size-7 items-center justify-center bg-text font-heading text-[12px] font-extrabold text-bg">
            小明
          </span>
          <span className="text-[13px] font-semibold">王小明</span>
        </Link>
      ) : (
        <>
          <span className="text-[12px] text-neutral-700">
            登入後可投稿與追蹤事件
          </span>
          <Link href="/login" className="btn btn-secondary">
            登入
          </Link>
        </>
      )}
    </div>
  );
}
