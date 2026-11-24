import React from "react";
import BusinessIndustryNav from "@/components/services/BusinessIndustryNav";
import {
  BusinessTaxCtaBanner,
  BusinessTaxPricingBanner
} from "@/components/services/CommonBusinessTaxSection";
import { ShieldCheckIcon } from "@/components/ui/icons";

export const metadata = {
  title: "식당 · 카페 세무 | 사업자 세무",
  description: "태윤세무회계 식당·카페·외식업 특화 세무 서비스. 의제매입세액공제, 배달앱·POS 매출 정밀 대사, 개업 인테리어 부가세 조기환급, 아르바이트 인건비 및 창업세액감면."
};

export default function RestaurantTaxPage() {
  return (
    <div className="bg-white">
      {/* 서브 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              BUSINESS TAX · RESTAURANT &amp; CAFE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              식당 · 카페 <br />
              <span className="text-blue-400">업종 특화 세무 관리</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              외식업과 카페는 면세 식자재 매입 비중이 높고 배달 플랫폼·POS·아르바이트 인건비 관리가 빈번합니다. 의제매입세액공제부터 창업중소기업 세액감면까지 매장 수익을 지키는 실전 절세를 지원합니다.
            </p>
          </div>
        </div>
      </section>

      <BusinessIndustryNav currentId="restaurant-tax" />

      {/* 본문 콘텐츠 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* 상단 핵심 포인트 강조 박스 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200/80 space-y-5">
            <div className="inline-flex items-center gap-2.5 text-base sm:text-lg font-extrabold text-blue-900 tracking-tight">
              <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700 shrink-0" />
              <span>식당 · 카페에서 특별히 중요한 세무 핵심</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 text-slate-800">
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-xs space-y-2">
                <div className="text-base sm:text-lg font-extrabold text-blue-950 leading-snug">
                  01. 의제매입세액공제 최대 활용
                </div>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  채소·육류·원두·우유 등 면세 식자재의 계산서·카드·현금영수증 증빙을 꼼꼼히 모아 부가세 부담을 크게 줄입니다.
                </p>
              </div>
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-xs space-y-2">
                <div className="text-base sm:text-lg font-extrabold text-blue-950 leading-snug">
                  02. 배달앱 · POS 매출 중복·누락 검증
                </div>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  배달의민족·쿠팡이츠·요기요·키오스크·카드 매출을 정밀 대사하여 이중 신고나 누락 추징을 방지합니다.
                </p>
              </div>
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-xs space-y-2">
                <div className="text-base sm:text-lg font-extrabold text-blue-950 leading-snug">
                  03. 창업세액감면 · 인테리어 조기환급
                </div>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  청년·일반 창업중소기업 5년 감면 요건 검토 및 개업 초기 인테리어·설비 부가세 조기환급을 지원합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 비용안내 바로가기 */}
          <BusinessTaxPricingBanner />

          {/* 파트 1: 식당 · 카페 부가가치세 절세 핵심 */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                SPECIALTY 01. VAT SAVINGS &amp; SALES RECONCILIATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                부가가치세 절세 및 매출 · 매입 정밀 관리
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                식당과 카페에서 가장 체감 세부담이 큰 부가가치세를 적격증빙 관리와 공제 특례 적용으로 합법적으로 절감합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-lg text-slate-900">
                  의제매입세액공제 및 식자재 증빙 관리
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  부가가치세가 면제되는 농·축·수·임산물 식자재 매입 시 계산서, 사업용 신용카드, 지출증빙용 현금영수증 수취 기준을 안내하고 공제 한도 내에서 최대한의 부가세 절감을 적용합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-lg text-slate-900">
                  배달플랫폼 · 카드 · 간편결제 매출 대사
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  배달앱 온라인 결제, 현장결제, 네이버페이·카카오페이, 지역화폐 매출이 POS와 중복 집계되거나 누락되지 않도록 정밀 검증하고, 개인사업자 신용카드 등 매출세액공제를 반영합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-lg text-slate-900">
                  오픈 인테리어 · 주방설비 부가세 조기환급
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  신규 개업 시 발생하는 인테리어 공사비, 에스프레소 머신·주방기기 구입비, 프랜차이즈 가맹비 등의 세금계산서를 검토하여 부가가치세 조기환급으로 초기 운영자금 확보를 돕습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 파트 2: 인건비 · 창업감면 · 운영경비 관리 */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                SPECIALTY 02. PAYROLL &amp; TAX REDUCTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                매장 인건비 · 창업세액감면 · 운영경비 관리
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                입·퇴사가 잦은 매장 인력 구조와 플랫폼 수수료·배달대행비 등 외식업 특유의 경비 항목을 빠짐없이 처리합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <h3 className="font-bold text-lg text-blue-950">
                  직원 · 아르바이트 · 일용직 인건비 관리
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  정규직 직원부터 단시간 아르바이트(초단시간 근로자), 일용근로자 급여의 매월 원천세 신고·지급명세서 제출 및 4대보험·두루누리 사회보험 지원을 체계적으로 처리합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <h3 className="font-bold text-lg text-blue-950">
                  창업중소기업 세액감면 요건 사전 진단
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  음식점업 창업 시 대표자 연령(청년 창업), 최초 창업 여부, 사업장 소재지에 따른 5년간 50%~100% 소득세·법인세 감면 요건을 면밀히 검토하고 포괄양수도·폐업 후 재창업 주의사항을 안내합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <h3 className="font-bold text-lg text-blue-950">
                  배달대행료 · 플랫폼 수수료 · 권리금 경비화
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  배달대행 충전금, 플랫폼 중개·광고 수수료, 월세·관리비, 그리고 영업권(권리금) 기타소득 원천징수 및 감가상각까지 매장 운영 경비를 누락 없이 반영합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 하단 문의 배너 */}
          <BusinessTaxCtaBanner
            ctaBadge="RESTAURANT & CAFE CONSULTATION"
            ctaTitle="식당 · 카페 세무기장 및 창업 절세 문의"
            ctaDescription="신규 오픈 부가세 환급, 의제매입세액공제, 창업세액감면 및 매장 세무기장 문의를 남겨주시면 신속히 안내해 드립니다."
          />
        </div>
      </section>
    </div>
  );
}
