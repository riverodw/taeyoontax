import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  AwardIcon,
  BookOpenIcon,
  CheckCircleIcon,
  PhoneIcon,
  KakaoIcon,
  MapPinIcon,
  ArrowRightIcon
} from "@/components/ui/icons";

export const metadata = {
  title: "회사 소개 | 태윤세무회계사무소",
  description: "태윤세무회계사무소 회사 소개, 설립 철학과 3대 약속, 부산 연제구 신규 이전 오시는 길 안내."
};

export default function AboutPage() {
  const { profile } = siteConfig;

  return (
    <div className="bg-white">
      {/* 서브페이지 헤더 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              회사 소개
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              원칙과 정밀함으로 <br />
              <span className="text-blue-400">고객의 신뢰와 자산</span>을 지킵니다.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              태윤세무회계는 2002년 제37회 공인회계사 합격 이후 20여 년간 실무를 쌓아온 오동욱 대표가 직접 상담하고 책임 관리하는 프리미엄 세무회계 파트너입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 대표 인사말 & 철학 */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900 to-blue-950 text-white space-y-6 shadow-xl relative overflow-hidden">
                <div className="space-y-2">
                  <div className="text-blue-400 text-xs font-bold tracking-wider uppercase">
                    대표 세무사
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">
                    {profile.name} <span className="text-lg font-medium text-slate-300">대표</span>
                  </h2>
                  <p className="text-xs text-blue-200">
                    공인회계사(CPA) · 세무사(CTA)
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-6 space-y-3 text-xs text-slate-300 leading-relaxed">
                  <p className="font-serif italic text-sm text-slate-100 leading-normal">
                    "세금은 사후에 정리하는 비용이 아니라, <br />
                    경영과 자산 설계의 첫 단추입니다."
                  </p>
                  <p>
                    복잡한 세법 규정과 잦은 세제 개편 속에서 사업자와 납세자가 겪는 불안을 잘 알고 있습니다. 태윤세무회계는 대표가 직접 모든 사건을 검토하여 합법적이고 안전한 절세의 지름길을 열어 드립니다.
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <a
                    href={siteConfig.kakaoChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FEE500] text-[#191919] font-bold text-xs"
                  >
                    <KakaoIcon className="w-4 h-4" />
                    <span>카카오톡 상담 문의</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.tel}`}
                    className="flex items-center justify-center p-3 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition"
                  >
                    <PhoneIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6" id="philosophy">
              <div className="space-y-3">
                <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                  설립 철학 & 약속
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  태윤세무회계의 3대 약속
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-blue-700" />
                    <span>1. 대표 세무사 직접 책임주의</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                    상담만 세무사가 하고 실무는 직원이 전담하는 관행을 지양합니다. 장부의 결산부터 신고서 제출, 세무조사 대응까지 대표가 직접 검토합니다.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-blue-700" />
                    <span>2. 이론과 실무를 겸비한 깊이 있는 절세</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                    부동산 세무 저서 집필과 국토연구원 공동연구를 통해 입증된 세법 지식으로, 과세관청의 어떤 소명 요구에도 흔들리지 않는 합법적 절세안을 제시합니다.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-blue-700" />
                    <span>3. 고객과 함께 성장하는 동반자 관계</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                    일회성 신고로 끝나지 않고, 사업의 창업부터 법인전환, 가업승계, 자산 이전까지 생애주기 전반에 걸친 든든한 조언자가 되어 드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 오동욱 세무사 주요 약력 및 저서 */}
      <section className="py-20 bg-slate-50" id="profile">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 약력 */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                  주요 약력 및 자격
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  오동욱 대표 주요 약력
                </h3>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                {profile.history.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 pb-3.5 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 저서 소개 */}
            <div className="space-y-6" id="books">
              <div className="space-y-2">
                <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider">
                  출간 저서 소개
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  저서 및 연구 저작물
                </h3>
              </div>

              <div className="space-y-4">
                {profile.books.map((b, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-xs font-bold">
                        {b.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      《{b.title}》
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                ))}

                {/* 연구 활동 박스 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-700 text-xs font-bold">
                    국책연구과제 공동연구
                  </span>
                  <h4 className="text-base font-bold text-slate-900">
                    국토연구원 공동연구 참여
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    국토연구원 발간 «부동산 시장 안정을 위한 정책과제와 대응 방안» 연구보고서 공동 집필 및 부동산 세제 정책 제언 참여.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            태윤세무회계와 함께 명쾌한 세무 해법을 찾으세요
          </h3>
          <p className="text-blue-200 text-sm max-w-xl mx-auto">
            세무 고민을 혼자 앓지 마세요. 카카오톡 채널 또는 온라인 상담 신청으로 빠르고 편리하게 문의하실 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={siteConfig.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-sm transition shadow-lg"
            >
              카카오톡 채널 문의하기
            </a>
            <Link
              href="/about/location"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition border border-white/20"
            >
              오시는 길 안내 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
