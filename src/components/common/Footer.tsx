import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { KakaoIcon, NaverIcon, PhoneIcon, MapPinIcon, MailIcon, ClockIcon } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 md:pb-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* 상단 4단 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* 1. 회사 소개 */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-2xl font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              제37회 공인회계사 합격 후 20년 실무 경력의 오동욱 회계사·세무사가 부동산 세무, 재산제세, 법인 컨설팅을 직접 책임 관리합니다.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FEE500] text-[#191919] font-bold text-xs hover:bg-[#FADA0A] transition"
              >
                <KakaoIcon className="w-4 h-4" />
                <span>카톡 채널</span>
              </a>
              <a
                href={siteConfig.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-600/30 font-medium text-xs hover:bg-emerald-600/30 transition"
              >
                <NaverIcon className="w-3.5 h-3.5" />
                <span>네이버 블로그</span>
              </a>
            </div>
          </div>

          {/* 2. 주요 전문 서비스 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              전문 서비스
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/business-tax" className="hover:text-white transition">
                  사업자 세무
                </Link>
              </li>
              <li>
                <Link href="/services/property-tax" className="hover:text-white transition">
                  부동산 임대업/매매업
                </Link>
              </li>
              <li>
                <Link href="/services/inheritance-tax" className="hover:text-white transition">
                  상속 · 증여 · 양도
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. 메뉴 바로가기 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              사이트 바로가기
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/accountant" className="hover:text-white transition">
                  대표 회계사 소개
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  전문 서비스 안내
                </Link>
              </li>
              <li>
                <Link href="/column" className="hover:text-white transition">
                  오회계사의 세무 칼럼
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  투명한 비용안내
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  상담 신청
                </Link>
              </li>
              <li>
                <Link href="/about/location" className="hover:text-white transition">
                  오시는 길 (거제역 인근)
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. 고객지원 & 업무시간 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              고객지원 안내
            </h4>
            <div className="space-y-2 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <PhoneIcon className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-lg font-bold text-white tracking-wide">{siteConfig.tel}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 text-slate-400">
                <MailIcon className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <ClockIcon className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>{siteConfig.businessHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 사업자 정보 및 카피라이트 */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-400">
          <div className="space-y-1">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>상호: {siteConfig.fullName}</span>
              <span>|</span>
              <span>대표: {siteConfig.representative}</span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <MapPinIcon className="w-3.5 h-3.5 text-slate-400" />
                {siteConfig.address}
              </span>
            </p>
            <p className="text-slate-400">
              ※ 본 사이트에 게시된 세무 정보는 일반적인 참고용이며, 실제 과세 처리는 납세자의 개별 사정에 따라 달라질 수 있으므로 반드시 정식 세무 자문을 받으시기 바랍니다.
            </p>
          </div>
          <div className="text-slate-400 shrink-0">
            © 2026 {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
