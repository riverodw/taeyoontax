import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  CheckCircleIcon,
  ArrowRightIcon,
  KakaoIcon,
  PhoneIcon,
  ShieldCheckIcon,
  AwardIcon
} from "@/components/ui/icons";

export const metadata = {
  title: "전문 서비스 안내 | 사업자세무 · 부동산세무 · 상속증여양도",
  description: "태윤세무회계의 3대 핵심 전문 세무 서비스 라인업. 사업자 세무(기장·신고·법인컨설팅·조사대응), 부동산 세무, 상속·증여·양도."
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* 서브 헤더 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              SERVICES OVERVIEW
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              전문성과 정밀함을 갖춘 <br />
              <span className="text-blue-400">맞춤형 세무 솔루션</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              오동욱 대표 세무사가 축적된 실무 경험과 학술적 깊이를 바탕으로 사업자와 자산가의 세무 리스크를 방어하고 실질 이익을 지켜드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 서비스 리스트 섹션 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-3xl border transition-all duration-300 bg-white border-slate-200 shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-900 text-white font-bold text-sm flex items-center justify-center">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-blue-900 font-semibold text-sm">
                    "{service.summary}"
                  </p>

                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition"
                    >
                      <span>자세히 보기</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={siteConfig.kakaoChannelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] text-xs font-bold transition"
                    >
                      <KakaoIcon className="w-3.5 h-3.5" />
                      <span>카톡 문의</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6 lg:pl-6 lg:border-l lg:border-slate-200">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      주요 업무 범위 및 절세 포인트
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {service.highlights.map((item, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-800 flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span className="font-medium leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 하단 상담 배너 */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            어떤 세무 서비스가 필요한지 망설여지시나요?
          </h2>
          <p className="text-slate-300 text-sm">
            현재 겪고 계신 상황을 간단히 남겨주시면, 최적의 업무 방향과 절세 플랜을 안내해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteConfig.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#FEE500] text-[#191919] font-bold text-sm hover:bg-[#fada0a] transition shadow-lg"
            >
              카카오톡 채널 문의하기
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition shadow-md"
            >
              상담 신청
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
