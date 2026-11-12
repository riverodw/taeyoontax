import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  CheckCircleIcon,
  KakaoIcon
} from "@/components/ui/icons";

export const metadata = {
  title: "사업자 세무 | 세무기장 대리 · 세금 신고대리",
  description: "태윤세무회계 사업자 세무 서비스. 법인 및 개인사업자 장부 기장대리, 부가가치세·종합소득세·법인세 신고대리, 4대보험·원천세 관리."
};

export default function BusinessTaxPage() {
  return (
    <div className="bg-white">
      {/* 서브 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              BUSINESS TAX SERVICE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              사업자 세무 <br />
              <span className="text-blue-400">(세무기장 · 신고대리)</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              법인 및 개인사업자의 사업자등록부터 체계적인 장부 기장대리, 부가가치세·종합소득세·법인세 신고대리, 원천세 및 4대보험 관리까지 사업에 필요한 세무 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 본문 콘텐츠 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* PART 01: 세무기장 대리 */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                PART 01. BOOKKEEPING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                세무기장 대리 (법인 · 개인사업자)
              </h2>
              <p className="text-slate-600 text-sm">
                매월 발생하는 거래 증빙과 인건비를 체계적으로 관리하여 정확한 재무제표 작성과 절세를 지원합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  사업자등록 및 설립 지원
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  창업 업종별 인허가 요건 및 창업중소기업 세액감면 대상 여부를 사전 검토하여 유리한 사업자등록을 지원합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  장부 기장대리 및 부가가치세 신고
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  매월 발생하는 전자세금계산서, 신용카드, 현금영수증 등 매입·매출 자료를 체계적으로 기장하고 부가가치세 신고를 진행합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  종합소득세 · 법인세 신고
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  기장 장부를 바탕으로 결산 및 세무조정을 수행하며, 업종별 적용 가능한 각종 세액공제·감면을 반영하여 종합소득세 및 법인세를 신고합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  임직원 급여 · 원천세 · 4대보험
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  임직원 급여대장 작성, 매월 원천징수이행상황신고, 일용직·사업소득 지급명세서 제출 및 4대보험 취득·상실 신고를 대행합니다.
                </p>
              </div>
            </div>
          </div>

          {/* PART 02: 세금 신고대리 */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                PART 02. TAX FILING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                세금 신고대리 (부가가치세 · 종합소득세 · 법인세)
              </h2>
              <p className="text-slate-600 text-sm">
                법정 신고 기한에 맞춰 업종별 필요경비와 세액공제·감면 요건을 면밀히 검토하여 정확한 세금 신고를 대행합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <span className="px-2.5 py-1 rounded bg-blue-900 text-white text-xs font-bold inline-block">
                  부가가치세 신고대리
                </span>
                <h3 className="font-bold text-lg text-slate-900">
                  개인 · 법인 부가가치세 신고
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  일반과세자, 간이과세자 및 법인사업자의 부가가치세 확정·예정 신고를 대행하며, 공제 가능한 매입세액이 누락되지 않도록 철저히 점검합니다.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <span className="px-2.5 py-1 rounded bg-emerald-800 text-white text-xs font-bold inline-block">
                  종합소득세 신고대리
                </span>
                <h3 className="font-bold text-lg text-slate-900">
                  5월 종합소득세 확정신고
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  단순·기준경비율 추계신고 대상자부터 간편장부, 복식부기 의무자까지 소득 유형에 맞는 신고 방식을 적용하고 각종 소득·세액공제를 반영합니다.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <span className="px-2.5 py-1 rounded bg-amber-700 text-white text-xs font-bold inline-block">
                  법인세 신고대리
                </span>
                <h3 className="font-bold text-lg text-slate-900">
                  3월 법인세 결산 및 세무조정
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  재무제표 결산 확정과 법인세법상 세무조정계산서 작성을 수행하며, 창업중소기업 세액감면·중소기업 특별세액감면 등을 꼼꼼하게 적용합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 하단 문의 배너 */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                BUSINESS TAX CONSULTATION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                세무기장 및 세금 신고대리 문의
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                신규 사업자 기장, 기장 세무사 변경, 부가세·종합소득세·법인세 신고 등 궁금하신 점을 편하게 남겨주세요.
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
