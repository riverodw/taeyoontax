import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CheckCircleIcon, KakaoIcon, ArrowRightIcon } from "@/components/ui/icons";

export const metadata = {
  title: "법인 컨설팅 & 기업 자문 | 법인전환 · 가지급금 · 가업승계",
  description: "개인사업자 법인전환, 대표이사 가지급금 및 가수금 해결, 비상장주식 가치평가 및 가업승계 컨설팅."
};

export default function CorporatePage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              CORPORATE CONSULTING
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              법인 컨설팅 & <br />
              <span className="text-blue-400">기업 성장 자문</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              20년 실무 경력의 전문적인 기업 회계·세무 노하우로 법인의 자본 구조를 정비하고 기업 가치를 극대화합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                1. 절세형 개인사업자 법인전환
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                매출 신장에 따라 최고 45%의 종합소득세율 및 건강보험료 부담을 덜고, 포괄양수도 또는 세감면 현물출자를 통해 부동산 취득세 감면과 양도소득세 이월과세를 적용받습니다.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>영업권(배타적 권리) 감정평가를 통한 합법적 절세 자금 인출</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>부동산 취득세 75% 감면 및 국민주택채권 매입 면제 요건 검토</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                2. 대표이사 가지급금 & 이익잉여금 정리
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                법인의 시한폭탄인 대표이사 가지급금(인정이자 및 지급이자 손금불산입)을 합법적인 자기주식 취득(이익소각), 배당 정책, 직무발명보상금 등을 활용하여 안전하게 해결합니다.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>세법상 리스크 없는 합법적 절차의 자사주 매입 및 소각 플랜</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>차등배당 및 법인 정관 변경을 통한 임원 퇴직금 지급 규정 정비</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">법인 재무 구조 진단이 필요하신가요?</h3>
              <p className="text-xs text-slate-300">
                재무제표를 바탕으로 현재 법인이 직면한 세무 리스크와 절세 기회를 1:1로 진단해 드립니다.
              </p>
            </div>
            <a
              href={siteConfig.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-[#FEE500] text-[#191919] font-bold text-xs hover:bg-[#FADA0A] transition"
            >
              카톡으로 법인 자문 문의하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
