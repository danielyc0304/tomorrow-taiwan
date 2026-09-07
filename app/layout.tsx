import Header from "@/components/header/header";
import type { Metadata } from "next";
import { Archivo, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "明日台灣",
  description: "一件事發生之後，台灣改變了什麼？",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-TW"
      className={`${archivo.variable} ${notoSansTC.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
