"use client";

import React from "react";
import { PhoneIcon, KakaoIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

export default function MobileStickyBar() {
  return (
    <nav
      aria-label="모바일 빠른 상담 바"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* 전화 문의 */}
        <a
          href={`tel:${siteConfig.tel}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-white font-medium text-sm shadow-sm active:bg-slate-800 transition"
        >
          <PhoneIcon className="w-4 h-4 text-slate-300" />
          <span>전화 상담</span>
        </a>

        {/* 카카오톡 1:1 상담 */}
        <a
          href={siteConfig.kakaoChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#FEE500] text-[#191919] font-bold text-sm shadow-sm active:bg-[#fada0a] transition"
        >
          <KakaoIcon className="w-4 h-4" />
          <span>카톡 1:1 상담</span>
        </a>
      </div>
    </nav>
  );
}
