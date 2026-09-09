"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const pathname = usePathname();

  const navbarItems: { label: string; href: string }[] = [
    { label: "大事件", href: "/" },
    ...(isLogin
      ? [
          { label: "投稿", href: "/submission" },
          { label: "我的頁面", href: "/me" },
        ]
      : []),
  ];

  return (
    <nav className="flex items-center gap-1">
      {navbarItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`btn btn-ghost ${isActive ? "text-accent" : "text-text"}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
