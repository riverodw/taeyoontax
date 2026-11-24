import React from "react";
import BusinessIndustryNav from "@/components/services/BusinessIndustryNav";
import { BusinessTaxCtaBanner } from "@/components/services/CommonBusinessTaxSection";
import { ShieldCheckIcon } from "@/components/ui/icons";

export const metadata = {
  title: "병원 · 동물병원 세무 | 사업자 세무",
  description: "태윤세무회계 병·의원 및 동물병원 특화 세무 서비스. 과·면세 겸영 안분계산, 성실신고확인 대응, 개원 자금·장비 리스, 동물진료용역 부가가치세 면세 관리."
};

export default function MedicalTaxPage() {
  return (
    <div className="bg-white">
      {/* 서브 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              BUSINESS TAX · HOSPITAL &amp; VETERINARY CLINIC
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              병원 · 동물병원 <br />
              <span className="text-blue-400">업종 특화 세무 관리</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              병·의원과 동물병원은 과·면세 겸영, 현금영수증 의무발행, 높은 성실신고확인 비중 등 전문적인 사전 세무 설계가 필수입니다. 개원 준비부터 매출·경비 정밀 분석까지 원장님이 진료에만 집중하실 수 있도록 지원합니다.
            </p>
          </div>
        </div>
      </section>

      <BusinessIndustryNav currentId="medical-tax" />

      {/* 본문 콘텐츠 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* 상단 핵심 포인트 강조 박스 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200/80 space-y-5">
            <div className="inline-flex items-center gap-2.5 text-base sm:text-lg font-extrabold text-blue-900 tracking-tight">
              <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700 shrink-0" />
              <span>병원 · 동물병원에서 특별히 중요한 세무 핵심</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 text-slate-800">
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-xs space-y-2">
                <div className="text-base sm:text-lg font-extrabold text-blue-950 leading-snug">
                  01. 과·면세 매출 구분 및 공통매입세액 안분
                </div>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  급여·비급여(면세)와 미용·성형·용품판매(과세)를 정확히 구분하고 공통매입세액 안분·정산을 철저히 관리합니다.
                </p>
              </div>
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-xs space-y-2">
                <div className="text-base sm:text-lg font-extrabold text-blue-950 leading-snug">
                  02. 성실신고확인대상 선제적 대응
                </div>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  수입금액 5억 원 이상 보건업 성실신고 기준에 맞춰 연중 소득률·적격증빙·가공경비 리스크를 사전 점검합니다.
                </p>
              </div>
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-xs space-y-2">
                <div className="text-base sm:text-lg font-extrabold text-blue-950 leading-snug">
                  03. 개원 투자 · 의료장비 · 인건비 최적화
                </div>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  고가 의료장비 리스·감가상각, 개원 차입금 이자비용, 공동개원 손익배분 및 통합고용세액공제를 정밀 적용합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 파트 1: 병·의원 핵심 세무 */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                SPECIALTY 01. MEDICAL CLINIC TAX
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                병 · 의원 특화 핵심 세무
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                일반 면세 병·의원부터 피부과·성형외과·치과·한의원 등 과·면세 겸영 병·의원까지 진료과목 특성에 맞춰 정밀 관리합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-lg text-slate-900">
                  면세 사업장현황신고 및 과·면세 겸영 관리
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  건강보험공단 요양급여·자동차보험·산재보험·비급여 수입을 정확히 집계하여 2월 사업장현황신고를 수행하고, 과세 진료 겸영 시 공통매입세액 안분계산을 정확히 처리합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-lg text-slate-900">
                  성실신고확인 및 세무조사 사전 방어
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  국세청 중점 관리 대상인 병·의원 업종의 동종업계 평균 소득률과 경비 구조를 정기 비교 분석하여 비급여 현금매출 누락, 업무무관 경비 등 세무조사 리스크를 사전에 차단합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-lg text-slate-900">
                  개원 자금 · 의료기기 · 공동개원(동업) 설계
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  인테리어·고가 의료기기 도입 시 리스·할부·현금구매별 절세 효과를 비교하고, 개원 차입금 이자비용 인정 요건 및 공동개원 출자금·손익분배비율 세무 이슈를 설계합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 파트 2: 동물병원 특화 세무 */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                SPECIALTY 02. VETERINARY CLINIC TAX
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                동물병원 특화 핵심 세무
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                진료용역 부가가치세 면세 확대 항목과 미용·호텔·용품 판매 등 과세 항목이 혼재된 동물병원 특유의 세무 구조를 명쾌하게 정리합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <h3 className="font-bold text-lg text-blue-950">
                  진료용역 면세 확대 및 과·면세 구분 신고
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  반려동물 주요 질병 진료·예방접종 등 부가가치세 면세 대상과 미용·호텔·처방식 외 용품 판매 등 과세 매출을 정확히 구분하여 부가가치세 신고 오류와 추징을 예방합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <h3 className="font-bold text-lg text-blue-950">
                  의약품 · 사료 매입 및 현금영수증 의무발행 관리
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  수의약품·백신·소모품 매입 적격증빙과 전자차트(EMR) 매출을 대사하여 원가 누락을 방지하고, 건당 10만 원 이상 현금영수증 의무발행 기준을 철저히 안내합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <h3 className="font-bold text-lg text-blue-950">
                  수의사 · 동물보건사 인건비 및 고용 세액공제
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  페이닥터(봉직 수의사) 네트제 급여 계약 검토, 동물보건사·테크니션 4대보험 관리 및 인원 증가에 따른 통합고용세액공제 적용으로 실질 세부담을 절감합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 하단 문의 배너 */}
          <BusinessTaxCtaBanner
            ctaBadge="MEDICAL TAX CONSULTATION"
            ctaTitle="병원 · 동물병원 세무기장 및 개원 상담 문의"
            ctaDescription="신규 개원 세무 설계, 과·면세 겸영 기장, 성실신고확인 및 기장 세무사 변경 문의를 남겨주시면 신속히 안내해 드립니다."
          />
        </div>
      </section>
    </div>
  );
}
