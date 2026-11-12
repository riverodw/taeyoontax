import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CheckCircleIcon, KakaoIcon, ShieldCheckIcon, ScaleIcon } from "@/components/ui/icons";

export const metadata = {
  title: "세무조사 대응 및 조세불복 | 태윤세무회계",
  description: "국세청 세무조사 입회, 모의 세무조사, 과세전적부심사, 이의신청, 조세심판원 심판청구 대리."
};

export default function AuditPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              TAX AUDIT & DISPUTE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              세무조사 대응 & <br />
              <span className="text-blue-400">조세불복 (권리구제)</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              부당하거나 과도한 과세처분에 맞서 납세자의 정당한 권익을 지켜드립니다. 세무조사 사전 모의 점검부터 조세심판 청구까지 직접 대리합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                세무조사 현장 입회 및 방어
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                세무조사 사전 통지를 받는 즉시 조사 범위와 예상 쟁점을 분석하고, 조사 기간 동안 세무사가 직접 입회하여 과세관청의 무리한 자료 요구와 세무조사 확대를 방어합니다.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>세무조사 사전 준비 및 리스크 항목 모의 소명</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>조사공무원 질의에 대한 법리적·논리적 소명자료 작성 및 제출</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
                <ScaleIcon className="w-5 h-5 text-amber-300" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                과세전적부심사 및 조세심판 청구
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                세무조사 결과 통지나 부당한 납세고지에 대해 과세 전 적부심사를 청구하거나, 국세청 이의신청, 조세심판원 심판청구, 감사원 심사청구를 통해 세액을 취소시킵니다.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>대법원 판례 및 심판원 결정례 기반의 정밀 청구이유서 작성</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>조세심판관 회의 직접 출석하여 구술 변론 수행</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-red-950/90 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-red-800/40">
            <div className="space-y-1">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">긴급 세무조사 지원</span>
              <h3 className="text-xl font-bold">세무조사 사전 통지서를 받으셨나요?</h3>
              <p className="text-xs text-slate-300">
                세무조사는 첫 진술과 초기 소명자료가 결과의 90%를 좌우합니다. 조사 시작 전 즉시 긴급 상담을 신청하세요.
              </p>
            </div>
            <a
              href={siteConfig.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-[#FEE500] text-[#191919] font-bold text-xs hover:bg-[#FADA0A] transition"
            >
              긴급 카톡 상담 연결
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
