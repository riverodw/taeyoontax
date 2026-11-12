import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  CheckCircleIcon,
  KakaoIcon,
  ShieldCheckIcon,
  ScaleIcon
} from "@/components/ui/icons";

export const metadata = {
  title: "상속 · 증여 · 양도 | 재산제세 절세 설계 및 신고대행",
  description: "태윤세무회계 양도소득세, 증여세, 상속세 전문 상담 및 신고대행. 1세대 1주택 비과세, 다주택 중과 검토, 10년 주기 사전증여 및 부담부증여, 상속세 조사 대응."
};

export default function InheritanceTaxPage() {
  return (
    <div className="bg-white">
      {/* 서브 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              CAPITAL GAINS · GIFT · INHERITANCE TAX
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              상속 · 증여 · 양도 <br />
              <span className="text-blue-400">맞춤형 절세 상담 및 신고대리</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              상속·증여·양도는 계약서 작성 전이나 상속 개시 전에 어떻게 설계하느냐에 따라 수천만 원에서 수억 원의 세금이 달라집니다. 사전 시뮬레이션부터 신고 대행, 사후 검증 방어까지 책임집니다.
            </p>
          </div>
        </div>
      </section>

      {/* 본문 콘텐츠 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* 3대 재산제세 핵심 영역 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1. 상속세 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-blue-900 text-white text-xs font-bold inline-block">
                  01. 상속세
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  상속세 신고 및 세무조사 대응
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  상속세는 과세관청의 강도 높은 검증을 거치는 세목입니다. 재산 평가부터 배우자상속공제 최적화, 세무조사 입회까지 빈틈없이 수행합니다.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-3 border-t border-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>상속 부동산 감정평가 연계로 추후 양도소득세까지 절감</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>피상속인·상속인 사전 10년 금융계좌 분석 및 추정상속재산 방어</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>상속세 세무조사 현장 입회 및 소명자료 작성 전담</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. 증여세 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-emerald-800 text-white text-xs font-bold inline-block">
                  02. 증여세
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  증여세 절세 플랜 및 신고
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  단순 증여와 부담부증여, 저가양수도의 세금 실익을 비교 분석하여 가족 간 자산을 가장 적은 세금 부담으로 안전하게 이전합니다.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-3 border-t border-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>배우자·자녀 10년 주기 증여재산공제 및 혼인·출산 공제 활용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>전세보증금·대출금을 활용한 부담부증여 절세 시뮬레이션</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>수증자 자금출처조사 대비 및 적법한 증여 계약·신고 대행</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. 양도소득세 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-amber-700 text-white text-xs font-bold inline-block">
                  03. 양도소득세
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  양도소득세 절세 진단 및 신고
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  부동산 매도 계약 전 보유 현황과 세대 구성을 정밀 분석하여 비과세 및 감면 요건을 확인하고, 가장 유리한 양도 시점과 방법을 제시합니다.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-3 border-t border-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>1세대 1주택 비과세 및 일시적 2주택 특례 정밀 판정</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>다주택자 중과 배제 및 상생임대주택·장기보유특별공제 검토</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>토지·상가·분양권·입주권 양도 전 모의 세액 시뮬레이션</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 재산제세 세무조사 및 불복 안내 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-blue-50/60 border border-blue-200/80 space-y-4">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
              POST-FILING PROTECTION
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              상속 · 증여 · 양도 관련 해명자료 제출, 세무조사 대응 및 조세불복
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
              상속·증여세 세무조사 통지, 부동산 취득 자금출처 소명 안내, 양도소득세 비과세 해명 안내문 수령 등 과세관청의 소명 요구에 대한 대응은 물론, 부당한 과세처분에 대한 조세불복(과세전적부심사, 이의신청, 조세심판청구) 및 경정청구까지 치밀한 사실관계 입증과 세법 판례 분석으로 납세자의 정당한 권익을 보호합니다.
            </p>
          </div>

          {/* 하단 상담 배너 */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                PRE-PLANNING CONSULTATION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                상속 · 증여 · 양도 사전 절세 상담을 권해드립니다
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                방문 또는 유선 상담 예약 및 신고 대행 문의를 남겨주시면 신속하게 안내해 드립니다.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={siteConfig.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-sm transition shadow-lg flex items-center gap-2"
              >
                <KakaoIcon className="w-4 h-4" />
                <span>카카오톡 채널 문의</span>
              </a>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition"
              >
                상담 신청
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
