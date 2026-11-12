"use client";

import React, { useState } from "react";
import { KakaoIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

export default function FloatingKakao() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="실시간 상담 채널"
      className="fixed bottom-20 md:bottom-8 right-5 md:right-8 z-50 flex items-center group"
    >
      {/* 툴팁 말풍선 (PC 전용) */}
      <div
        className={`hidden md:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-xl bg-slate-900/95 text-white text-xs font-semibold shadow-xl border border-slate-700/50 backdrop-blur-sm transition-all duration-300 pointer-events-none ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>태윤세무회계 카카오톡 상담 문의</span>
      </div>

      {/* 카카오톡 플로팅 버튼 */}
      <a
        href={siteConfig.kakaoChannelUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 1:1 상담하기 (새 창 열림)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 ring-4 ring-yellow-400/30"
      >
        <KakaoIcon className="w-7 h-7" />
        {/* 온라인 뱃지 */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
      </a>
    </aside>
  );
}
