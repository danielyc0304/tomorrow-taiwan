"use client";

import Link from "next/link";
import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className="ml-auto flex items-center gap-2 border-l-0 border-l-divider pl-0 sm:ml-0 sm:border-l-2 sm:pl-4">
      {isLogin ? (
        <Link href="/me" className="flex cursor-pointer items-center gap-2">
          <span className="flex size-7 items-center justify-center bg-text font-heading text-[12px] font-extrabold text-bg">
            小明
          </span>
          <span className="text-[13px] font-semibold text-text">王小明</span>
        </Link>
      ) : (
        <>
          <span className="hidden text-[12px] text-neutral-700 md:block">
            登入後可投稿與追蹤事件
          </span>
          <Link href="/login" className="btn btn-secondary text-text">
            登入
          </Link>
        </>
      )}
    </div>
  );
}
