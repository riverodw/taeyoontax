import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FloatingKakao from "@/components/common/FloatingKakao";
import MobileStickyBar from "@/components/common/MobileStickyBar";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taeyoontax.com"),
  title: {
    default: "태윤세무회계 | 오동욱 공인회계사 · 세무사",
    template: "%s | 태윤세무회계"
  },
  description: "20년의 세무 경험과 전문성으로 최적의 절세 방안을 제시해드리겠습니다.",
  keywords: [
    "태윤세무회계",
    "오동욱 세무사",
    "오동욱 회계사",
    "부산 세무사",
    "부산 연제구 세무사",
    "거제역 세무사",
    "부동산 세무",
    "부동산매매사업자 세금 완전정복",
    "양도소득세",
    "상속세",
    "증여세",
    "부산 세무기장",
    "법인전환",
    "오회계사의 지식창고"
  ],
  authors: [{ name: "오동욱 공인회계사 · 세무사" }],
  creator: "태윤세무회계",
  openGraph: {
    title: "태윤세무회계 | 20년 경력 오동욱 공인회계사 · 세무사",
    description: "20년의 세무 경험과 전문성으로 최적의 절세 방안을 제시해드리겠습니다.",
    url: "https://taeyoontax.com",
    siteName: "태윤세무회계",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "태윤세무회계 | 오동욱 공인회계사 · 세무사",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingKakao />
        <MobileStickyBar />
      </body>
    </html>
  );
}
