import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  AwardIcon,
  BookOpenIcon,
  CheckCircleIcon,
  KakaoIcon,
  PhoneIcon,
  ArrowRightIcon,
  ExternalLinkIcon
} from "@/components/ui/icons";

export const metadata = {
  title: "대표 회계사 소개 | 오동욱 공인회계사 · 세무사",
  description: "2002년 공인회계사 합격 후 한영회계법인 및 대기업 세무·감사·컨설팅 경력의 오동욱 대표 공인회계사·세무사. 부동산 세무 저서 집필, 국토연구원 공동연구."
};

export default function AccountantPage() {
  const { profile } = siteConfig;

  return (
    <div className="bg-white">
      {/* 서브 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold">
              <AwardIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>대표 회계사 소개</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              대표 회계사 소개
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              20년의 경력과 세법에 대한 깊이 있는 이해를 바탕으로, 오동욱 대표 회계사·세무사가 고객 여러분의 입장을 최우선으로 생각하여 최고의 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 대표 프로필 메인 카드 */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* 좌측: 대표 사진 및 프로필 카드 */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white shadow-2xl relative overflow-hidden border border-slate-800">
                {/* 대표 회계사 프로필 사진 */}
                <div className="relative w-full aspect-[4/4.5] bg-slate-100 overflow-hidden">
                  <Image
                    src={profile.image}
                    alt={`${profile.name} 대표 공인회계사 · 세무사`}
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow">
                        {profile.name} <span className="text-lg font-normal text-slate-200">회계사/세무사</span>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p className="font-serif italic text-sm sm:text-base text-white leading-relaxed">
                      "{profile.greeting}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 우측: 상세 약력 및 활동 리스트 */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                  PROFILE & CAREER
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  주요 약력 및 활동
                </h3>
              </div>

              {/* 주요 약력 섹션 */}
              <div className="bg-slate-50 p-7 rounded-3xl border border-slate-200/90 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-900 text-white text-xs font-bold">
                  <span>주요 약력</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                  2002년 공인회계사 합격 후, 한영회계법인 및 대기업에서 세무, 감사, 컨설팅 업무를 수행하였고 현재 태윤세무회계 대표를 맡고 있음
                </p>
                <div className="pt-2 space-y-3 border-t border-slate-200/70">
                  {profile.career.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 주요 저서 및 활동 섹션 */}
              <div className="bg-slate-50 p-7 rounded-3xl border border-slate-200/90 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-900 text-white text-xs font-bold">
                  <span>주요 저서 및 활동</span>
                </div>
                <div className="space-y-3.5">
                  {profile.activities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 pb-3.5 border-b border-slate-200/60 last:border-0 last:pb-0 text-sm sm:text-base text-slate-800"
                    >
                      <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 저서 소개 쇼케이스 */}
      <section className="py-20 bg-slate-50" id="books">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
              AUTHOR & PUBLICATIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              출간 저서 소개
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profile.books.map((b, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
                      {b.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    《{b.title}》
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                  <span>저자: 오동욱 공인회계사</span>
                  <span className="text-slate-400">교보문고, YES24 등 판매</span>
                </div>
              </div>
            ))}
          </div>

          {/* 국토연구원 공동연구 섹션 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl" id="research">
            <div className="flex items-center gap-2">
              <AwardIcon className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                국책연구과제 공동연구 참여
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              국토연구원 (KRIHS) 부동산 시장 안정 정책과제 공동연구
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              국책연구기관인 국토연구원의 «부동산 시장 안정을 위한 정책과제와 대응 방안» 연구보고서 공동 집필에 참여하여, 국가적 부동산 세제 및 시장 메커니즘을 심도 있게 분석하고 정책적 혜안을 제공하였습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 하단 상담 배너 */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            태윤세무회계에 상담을 신청하세요
          </h3>
          <p className="text-blue-200 text-sm max-w-xl mx-auto">
            궁금하신 사항이 있으시면 편하신 시간에 카카오톡 채널 또는 상담 신청을 이용해 주시기 바랍니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteConfig.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-sm transition shadow-lg"
            >
              카카오톡 채널 문의하기
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition border border-white/20"
            >
              상담 신청
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
