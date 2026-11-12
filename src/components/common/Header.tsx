"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import {
  PhoneIcon,
  KakaoIcon,
  NaverIcon,
  ChevronDownIcon,
  MenuIcon,
  XIcon,
  MapPinIcon
} from "@/components/ui/icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* 1. 최상단 유틸리티 탑바 (데스크톱) */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPinIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>{siteConfig.address}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <PhoneIcon className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold text-white tracking-wide">{siteConfig.tel}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition"
            >
              <NaverIcon className="w-3 h-3 text-emerald-400" />
              <span>오회계사의 지식창고 블로그</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={siteConfig.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-yellow-300 hover:text-yellow-200 transition font-medium"
            >
              <KakaoIcon className="w-3.5 h-3.5 text-yellow-400" />
              <span>카카오톡 상담 문의</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. 메인 네비게이션 바 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* 로고 (텍스트 워드마크) */}
        <Link href="/" className="flex items-center gap-2.5 group py-1">
          <span className="font-black text-2xl sm:text-[26px] tracking-tight text-slate-900 font-sans group-hover:text-blue-950 transition">
            {siteConfig.name}
          </span>
          <span className="hidden sm:inline-block text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            공인회계사 · 세무사
          </span>
        </Link>

        {/* 데스크톱 메뉴 (6대 메뉴: 대표 회계사, 회사 소개, 전문 서비스, 칼럼, 상담신청, 비용안내) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.subItems && setOpenDropdown(item.title)}
                onMouseLeave={() => item.subItems && setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-2.5 xl:px-3.5 py-2 rounded-lg text-[14px] xl:text-[15px] font-semibold transition flex items-center gap-1 ${
                    isActive
                      ? "text-blue-700 bg-blue-50/70"
                      : "text-slate-700 hover:text-blue-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.title}</span>
                  {item.subItems && (
                    <ChevronDownIcon
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === item.title ? "rotate-180 text-blue-700" : "text-slate-400"
                      }`}
                    />
                  )}
                </Link>

                {/* 서브메뉴 드롭다운 */}
                {item.subItems && openDropdown === item.title && (
                  <div className="absolute top-full left-0 w-56 pt-2 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150">
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.title}
                          href={sub.href}
                          target={sub.external ? "_blank" : undefined}
                          rel={sub.external ? "noopener noreferrer" : undefined}
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:text-blue-900 hover:bg-blue-50/60 font-medium transition"
                        >
                          <span>{sub.title}</span>
                          {sub.external && (
                            <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                              외부
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* 데스크톱 우측 CTA 버튼 */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.kakaoChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-xs shadow-xs transition transform hover:-translate-y-0.5"
          >
            <KakaoIcon className="w-4 h-4" />
            <span>카톡 간편문의</span>
          </a>
          <a
            href={siteConfig.naverFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs shadow-md transition transform hover:-translate-y-0.5"
          >
            <span>상담 신청</span>
          </a>
        </div>

        {/* 모바일 햄버거 메뉴 버튼 */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={siteConfig.kakaoChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#FEE500] text-[#191919]"
            aria-label="카카오톡 상담 바로가기"
          >
            <KakaoIcon className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="메뉴 열기/닫기"
          >
            {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. 모바일 네비게이션 드로어 */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-8 space-y-4 shadow-xl">
          <div className="divide-y divide-slate-100">
            {siteConfig.navItems.map((item) => (
              <div key={item.title} className="py-2.5">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-bold text-slate-900 hover:text-blue-700"
                >
                  {item.title}
                </Link>
                {item.subItems && (
                  <div className="pl-3 mt-1.5 space-y-1.5 border-l-2 border-slate-100 ml-1">
                    {item.subItems.map((sub) => (
                      <a
                        key={sub.title}
                        href={sub.href}
                        target={sub.external ? "_blank" : undefined}
                        rel={sub.external ? "noopener noreferrer" : undefined}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-slate-600 hover:text-blue-900 py-1"
                      >
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <a
              href={siteConfig.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FEE500] text-[#191919] font-bold text-sm"
            >
              <KakaoIcon className="w-5 h-5" />
              <span>카카오톡 1:1 상담 연결</span>
            </a>
            <a
              href={siteConfig.naverFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-xl bg-blue-900 text-white font-semibold text-sm"
            >
              상담 신청
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
