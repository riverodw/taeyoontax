import React from "react";
import BusinessIndustryNav from "@/components/services/BusinessIndustryNav";
import CommonBusinessTaxSection from "@/components/services/CommonBusinessTaxSection";
import { ShieldCheckIcon } from "@/components/ui/icons";

export const metadata = {
  title: "학원 세무 | 사업자 세무",
  description: "태윤세무회계 학원·교습소·교육서비스업 특화 세무 서비스. 2월 면세사업자 사업장현황신고, 현금영수증 의무발행 방어, 강사 3.3%·근로소득 구분 관리, 교재·과세 겸영 회계처리."
};

export default function AcademyTaxPage() {
  return (
    <div className="bg-white">
      {/* 서브 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              BUSINESS TAX · ACADEMY &amp; EDUCATION
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              학원 <br />
              <span className="text-blue-400">업종 특화 세무 관리</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              학원 및 교습소는 부가가치세 면세사업자이면서 현금영수증 의무발행업종에 해당하여, 2월 사업장현황신고와 강사 인건비 구분, 수강료·교재비 회계처리가 핵심입니다. 교육서비스업 실무 노하우로 안전하게 관리해 드립니다.
            </p>
          </div>
        </div>
      </section>

      <BusinessIndustryNav currentId="academy-tax" />

      {/* 본문 콘텐츠 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* 상단 핵심 포인트 강조 박스 */}
          <div className="p-7 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200/80 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider">
              <ShieldCheckIcon className="w-4 h-4 text-blue-700" />
              <span>학원 업종에서 특별히 중요한 세무 핵심</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-800">
              <div className="p-4 rounded-2xl bg-white border border-blue-100 space-y-1">
                <div className="font-bold text-blue-950">01. 매년 2월 면세 사업장현황신고</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  주무관청 인가·등록 학원은 부가세 대신 매년 2월 10일까지 수강료 수입금액과 강사·시설 현황을 정확히 신고해야 합니다.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-blue-100 space-y-1">
                <div className="font-bold text-blue-950">02. 현금영수증 의무발행 (건당 10만 원)</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  학부모 요청이 없어도 10만 원 이상 현금·계좌이체 수령 시 5일 이내 자진발급해야 20% 가산세를 예방할 수 있습니다.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-blue-100 space-y-1">
                <div className="font-bold text-blue-950">03. 전임 강사 vs 프리랜서 강사 구분</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  근로소득(4대보험)과 3.3% 사업소득 강사를 적법하게 구분하고, 간이지급명세서 매월 제출로 가산세를 방지합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 파트 1: 학원 면세사업자 핵심 신고 및 리스크 방어 */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                SPECIALTY 01. TAX-EXEMPT ACADEMY COMPLIANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                면세사업자 신고 및 수강료 · 교재비 관리
              </h2>
              <p className="text-slate-600 text-sm">
                입시·보습·어학·예체능 학원 및 교습소의 매출 구조와 교육청 등록 기준에 맞춰 신고 누락과 가산세 위험을 원천 차단합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  2월 사업장현황신고 및 수강료 대사
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  카드·현금영수증·계좌이체·결제선생 등 다양한 결제수단별 수강료와 환불 내역을 대사하여 전년도 수입금액, 학원사업자 수입금액 검토표 및 매입처별 계산서합계표를 정확히 제출합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  현금영수증 의무발행 리스크 예방
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  일반교습·외국어·예술·스포츠 등 학원업은 현금영수증 의무발행업종입니다. 건당 10만 원 이상 현금·계좌이체 수강료에 대한 자진발급 절차와 분할결제 유의사항을 철저히 관리합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  교재비 · 스터디카페 등 과세 겸영 구분
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  수강료 외 별도 판매하는 교재·교구, 교육청 미인가 강의, 독서실·스터디카페 겸영 등 과세 매출이 발생하는 경우 면세·과세 구분 기장으로 추후 부가세 추징 리스크를 차단합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 파트 2: 강사 인건비 · 경비 처리 · 성실신고 대비 */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                SPECIALTY 02. INSTRUCTOR PAYROLL &amp; TAX PLANNING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                강사 인건비 · 시설 경비 및 성장 단계별 절세
              </h2>
              <p className="text-slate-600 text-sm">
                학원 비용 중 가장 큰 비중을 차지하는 강사 인건비와 개원 시설투자비를 적법하게 경비화하고 성장 규모에 맞는 세무 전략을 제시합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <h3 className="font-bold text-base text-blue-950">
                  전임 강사(근로) vs 프리랜서 강사(3.3%) 관리
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  강사의 출퇴근·업무지시·보수지급 형태에 따라 근로소득과 3.3% 사업소득을 명확히 구분 신고하고, 매월 원천세 신고와 사업소득 간이지급명세서 제출을 기한 내 이행합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <h3 className="font-bold text-base text-blue-950">
                  개원 인테리어 · 교재 인쇄 · 셔틀버스 경비화
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  면세사업자는 매입 부가가치세 환급이 없는 대신 부가세를 포함한 총 지출액을 취득가액·필요경비로 인정받을 수 있습니다. 인테리어 감가상각, 임차료, 차량유지비, 홍보비를 누락 없이 반영합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <h3 className="font-bold text-base text-blue-950">
                  성실신고확인대상 대응 및 법인전환 검토
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  수강생 증가로 연간 수입금액이 5억 원(교육서비스업 성실신고 기준)에 근접할 경우, 사전 결산 시뮬레이션과 교육법인 전환·지점 확장 절세 전략을 맞춤형으로 제안합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 하단: 공통 세무기장 및 정기 세금 신고 업무 */}
          <CommonBusinessTaxSection
            ctaBadge="ACADEMY TAX CONSULTATION"
            ctaTitle="학원 · 교습소 세무기장 및 사업장현황신고 문의"
            ctaDescription="신규 학원 개원, 2월 사업장현황신고, 강사 인건비 관리 및 종합소득세 절세 문의를 남겨주시면 신속히 안내해 드립니다."
          />
        </div>
      </section>
    </div>
  );
}
