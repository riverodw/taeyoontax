import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRightIcon, KakaoIcon } from "@/components/ui/icons";

export function BusinessTaxPricingBanner() {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="space-y-1">
        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
          TRANSPARENT PRICING
        </span>
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
          세무기장 · 신고대행 비용이 궁금하신가요?
        </h3>
        <p className="text-sm text-slate-600">
          개인·법인 세무기장 보수 기준과 정기 세금 신고대행 수수료를 투명하게 확인하실 수 있습니다.
        </p>
      </div>
      <Link
        href="/pricing"
        className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition"
      >
        <span>비용안내 바로가기</span>
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </div>
  );
}

export interface BusinessTaxCtaBannerProps {
  ctaBadge?: string;
  ctaTitle?: string;
  ctaDescription?: string;
}

export function BusinessTaxCtaBanner({
  ctaBadge = "BUSINESS TAX CONSULTATION",
  ctaTitle = "세무기장 및 세금 신고대리 문의",
  ctaDescription = "신규 사업자 기장, 기장 세무사 변경, 부가세·종합소득세·법인세 신고 등 궁금하신 점을 편하게 남겨주세요."
}: BusinessTaxCtaBannerProps) {
  return (
    <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
      <div className="space-y-2">
        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
          {ctaBadge}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold">{ctaTitle}</h3>
        <p className="text-xs sm:text-sm text-slate-300">{ctaDescription}</p>
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
        <a
          href={siteConfig.naverFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-xl bg-[#03C75A] hover:bg-[#02B351] text-white font-semibold text-sm transition"
        >
          상담 신청
        </a>
      </div>
    </div>
  );
}

interface CommonBusinessTaxSectionProps extends BusinessTaxCtaBannerProps {
  sectionLabel?: string;
  showSectionIntro?: boolean;
}

export default function CommonBusinessTaxSection({
  ctaBadge = "BUSINESS TAX CONSULTATION",
  ctaTitle = "세무기장 및 세금 신고대리 문의",
  ctaDescription = "신규 사업자 기장, 기장 세무사 변경, 부가세·종합소득세·법인세 신고 등 궁금하신 점을 편하게 남겨주세요.",
  sectionLabel = "COMMON BUSINESS TAX SERVICES",
  showSectionIntro = true
}: CommonBusinessTaxSectionProps) {
  return (
    <div className="space-y-16">
      {showSectionIntro && (
        <div className="pt-12 border-t-2 border-slate-200/80 space-y-2">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
            {sectionLabel}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            공통 세무기장 및 정기 세금 신고 업무
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            업종별 특화 관리와 더불어 모든 사업자에게 필수적인 월별 장부 기장, 원천세·4대보험 관리 및 법정 정기 세금 신고를 빈틈없이 수행합니다.
          </p>
        </div>
      )}

      {/* 공통 01: 세무기장 대리 */}
      <div id="bookkeeping" className="space-y-8 scroll-mt-24">
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
            COMMON 01. BOOKKEEPING
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            세무기장 대리 (법인 · 개인사업자)
          </h3>
          <p className="text-slate-600 text-sm">
            매월 발생하는 거래 증빙과 인건비를 체계적으로 관리하여 정확한 재무제표 작성과 절세를 지원합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-base text-slate-900">
              사업자등록 및 설립 지원
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              창업 업종별 인허가 요건 및 창업중소기업 세액감면 대상 여부를 사전 검토하여 유리한 사업자등록을 지원합니다.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-base text-slate-900">
              장부 기장대리 및 부가가치세 신고
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              매월 발생하는 전자세금계산서, 신용카드, 현금영수증 등 매입·매출 자료를 체계적으로 기장하고 부가가치세 신고를 진행합니다.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-base text-slate-900">
              종합소득세 · 법인세 결산 신고
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              기장 장부를 바탕으로 결산 및 세무조정을 수행하며, 업종별 적용 가능한 각종 세액공제·감면을 반영하여 종합소득세 및 법인세를 신고합니다.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-base text-slate-900">
              임직원 급여 · 원천세 · 4대보험
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              임직원 급여대장 작성, 매월 원천징수이행상황신고, 일용직·사업소득 지급명세서 제출 및 4대보험 취득·상실 신고를 대행합니다.
            </p>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <Link
            href="/pricing#bookkeeping"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 font-bold text-xs sm:text-sm transition shadow-xs"
          >
            <span>세무기장 보수 기준 확인하기 (비용안내)</span>
            <ArrowRightIcon className="w-4 h-4 text-blue-700" />
          </Link>
        </div>
      </div>

      {/* 공통 02: 세금 신고대리 */}
      <div id="filing" className="space-y-8 scroll-mt-24">
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
            COMMON 02. TAX FILING
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            정기 세금 신고대리 (부가가치세 · 종합소득세 · 법인세 · 사업장현황신고)
          </h3>
          <p className="text-slate-600 text-sm">
            법정 신고 기한에 맞춰 업종별 필요경비와 세액공제·감면 요건을 면밀히 검토하여 정확한 세금 신고를 대행합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
            <span className="px-2.5 py-1 rounded bg-blue-900 text-white text-xs font-bold inline-block">
              부가가치세 · 사업장현황신고
            </span>
            <h4 className="font-bold text-lg text-slate-900">
              과세 부가세 / 면세 사업장현황신고
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              일반·간이·법인사업자의 부가가치세 예정·확정 신고와 병·의원·학원·주택임대 등 면세사업자의 2월 사업장현황신고를 정확히 대행합니다.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
            <span className="px-2.5 py-1 rounded bg-emerald-800 text-white text-xs font-bold inline-block">
              종합소득세 신고대리
            </span>
            <h4 className="font-bold text-lg text-slate-900">
              5월 종합소득세 확정신고
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              간편장부·복식부기 의무자부터 성실신고확인대상자까지 소득 유형에 맞는 신고 방식을 적용하고 각종 소득·세액공제를 빈틈없이 반영합니다.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
            <span className="px-2.5 py-1 rounded bg-amber-700 text-white text-xs font-bold inline-block">
              법인세 신고대리
            </span>
            <h4 className="font-bold text-lg text-slate-900">
              3월 법인세 결산 및 세무조정
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              재무제표 결산 확정과 법인세법상 세무조정계산서 작성을 수행하며, 창업중소기업 세액감면·중소기업 특별세액감면 등을 꼼꼼하게 적용합니다.
            </p>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <Link
            href="/pricing#filing"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 font-bold text-xs sm:text-sm transition shadow-xs"
          >
            <span>세금 신고대행 수수료 확인하기 (비용안내)</span>
            <ArrowRightIcon className="w-4 h-4 text-blue-700" />
          </Link>
        </div>
      </div>

      {/* 하단 문의 배너 */}
      <BusinessTaxCtaBanner
        ctaBadge={ctaBadge}
        ctaTitle={ctaTitle}
        ctaDescription={ctaDescription}
      />
    </div>
  );
}
