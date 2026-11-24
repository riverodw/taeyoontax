import React from "react";
import BusinessIndustryNav from "@/components/services/BusinessIndustryNav";
import {
  BusinessTaxCtaBanner,
  BusinessTaxPricingBanner
} from "@/components/services/CommonBusinessTaxSection";
import { CheckCircleIcon, ShieldCheckIcon } from "@/components/ui/icons";

export const metadata = {
  title: "학원 · 요가 · 필라테스 세무 | 사업자 세무",
  description: "태윤세무회계 학원·요가·필라테스 특화 세무 서비스. 교육청 등록 면세 학원(사업장현황신고)부터 요가·필라테스·PT·취미학원 등 과세 학원(부가세 조기환급·수강권 관리), 강사 인건비 및 현금영수증 의무발행 관리."
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
              BUSINESS TAX · ACADEMY · YOGA · PILATES
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              학원 · 요가 · 필라테스 <br />
              <span className="text-blue-400">면세 학원 · 과세 스튜디오 맞춤 세무</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              교육청 인가·등록을 받은 면세 학원·교습소부터 요가·필라테스·PT·취미·성인 교육 등 과세 학원까지, 업종별 과·면세 구조에 따라 신고 방식과 절세 전략이 완전히 달라집니다. 유형별 핵심 쟁점을 정확히 구분해 관리해 드립니다.
            </p>
          </div>
        </div>
      </section>

      <BusinessIndustryNav currentId="academy-tax" />

      {/* 본문 콘텐츠 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* 상단 핵심 포인트 강조 박스 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200/80 space-y-5">
            <div className="inline-flex items-center gap-2.5 text-base sm:text-lg font-extrabold text-blue-900 tracking-tight">
              <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700 shrink-0" />
              <span>학원 · 요가 · 필라테스 업종에서 특별히 중요한 세무 핵심</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 text-slate-800">
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-xs space-y-2">
                <div className="text-base sm:text-lg font-extrabold text-blue-950 leading-snug">
                  01. 면세 학원 vs 과세 학원 정확한 구분
                </div>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  교육청 등록 학원은 부가세 면세(2월 사업장현황신고), 요가·필라테스·취미학원 등은 부가세 과세(부가세 신고·조기환급)로 세무 처리가 달라집니다.
                </p>
              </div>
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-xs space-y-2">
                <div className="text-base sm:text-lg font-extrabold text-blue-950 leading-snug">
                  02. 현금영수증 의무발행 (건당 10만 원)
                </div>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  일반 교습학원·예체능학원·체력단련장 등은 10만 원 이상 현금·계좌이체 수령 시 5일 이내 자진발급해야 20% 가산세를 예방할 수 있습니다.
                </p>
              </div>
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-xs space-y-2">
                <div className="text-base sm:text-lg font-extrabold text-blue-950 leading-snug">
                  03. 전임 강사 vs 프리랜서 강사(3.3%) 구분
                </div>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  학원·요가·필라테스 강사의 근로소득(4대보험)과 3.3% 사업소득을 적법하게 구분하고 매월 간이지급명세서 제출로 가산세를 방지합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 비용안내 바로가기 */}
          <BusinessTaxPricingBanner />

          {/* 파트 1: 면세 학원 vs 과세 학원(요가·필라테스 등) 구분 설명 */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                SPECIALTY 01. TAX-EXEMPT VS TAXABLE ACADEMY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                면세 학원 vs 과세 학원(요가 · 필라테스 등) 구분 세무
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                주무관청(교육청) 인가·등록 여부 및 업종 성격에 따라 부가가치세 신고 의무와 초기 시설투자비 절세 방법이 크게 달라집니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 좌측: 면세 학원 */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
                <div className="space-y-2 border-b border-slate-200 pb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-900 text-white text-xs font-bold inline-block">
                    부가가치세 면세 학원
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    입시 · 보습 · 어학 · 음악 · 미술 등 교육청 등록 학원 · 교습소
                  </h3>
                  <p className="text-sm text-slate-600">
                    주무관청의 허가·인가·등록을 받아 교육용역을 제공하는 면세사업자 (자동차운전·무도학원 제외)
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-base font-bold text-slate-900">
                        매년 2월 면세사업자 사업장현황신고
                      </div>
                      <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                        부가가치세 신고 대신 매년 2월 10일까지 카드·현금영수증·계좌이체·결제선생 수강료와 환불 내역을 대사하여 전년도 수입금액과 학원사업자 수입금액 검토표를 정확히 제출합니다.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-base font-bold text-slate-900">
                        개원 인테리어 · 설비 부가세 포함 전액 경비화
                      </div>
                      <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                        매입 부가가치세 환급이 없는 대신, 부가가치세를 포함한 총 지출액을 자산 취득가액·필요경비로 인정받아 인테리어 감가상각, 교재 인쇄비, 셔틀버스 유지비 등을 빠짐없이 반영합니다.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-base font-bold text-slate-900">
                        교재 판매 · 스터디카페 등 과세 겸영 구분
                      </div>
                      <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                        수강료 외 별도 판매하는 교재·교구, 교육청 미인가 강의, 독서실·스터디카페 겸영 등 과세 매출이 발생하면 면세·과세 구분 기장으로 추후 부가세 추징 리스크를 차단합니다.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 우측: 과세 학원 (요가 · 필라테스 등 일반 학원) */}
              <div className="p-7 sm:p-8 rounded-3xl bg-blue-50/50 border border-blue-200 space-y-6">
                <div className="space-y-2 border-b border-blue-200/80 pb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-800 text-white text-xs font-bold inline-block">
                    부가가치세 과세 학원 · 스튜디오
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-blue-950">
                    요가 · 필라테스 · PT · 스포츠 · 성인 취미 · 미등록 일반 학원
                  </h3>
                  <p className="text-sm text-slate-700">
                    교육청 등록 대상이 아닌 요가원, 필라테스 스튜디오, 체력단련장, 댄스·무도·성인 취미·직무 교육 등 과세사업자
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-base font-bold text-slate-900">
                        개업 인테리어 · 필라테스 기구 부가가치세 조기환급
                      </div>
                      <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                        일반과세자로 창업 시 초기 인테리어 공사비, 리포머·캐딜락 등 고가 필라테스 기구 및 운동장비 구입에 따른 세금계산서를 검토하여 부가가치세 조기환급으로 초기 자금 부담을 덜어드립니다.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-base font-bold text-slate-900">
                        정기 부가가치세 신고 및 일반 · 간이과세자 유리성 검토
                      </div>
                      <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                        초기 투자 규모와 예상 연매출에 따라 간이과세자(낮은 부가세 부담)와 일반과세자(초기 시설투자 부가세 환급) 중 실질 세부담이 적은 사업자 유형을 사전 시뮬레이션하고 1월·7월 부가세 신고를 대행합니다.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-base font-bold text-slate-900">
                        장기 수강권 · 회원권 선결제 및 환불 매출 관리
                      </div>
                      <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                        3개월·6개월·1년 단위 장기 회원권 및 횟수권 선결제 매출, 중도 해지·환불, 양도 처리, 운동복·용품 판매 매출을 정확히 정리하여 매출 누락 및 과다 신고를 방지합니다.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 파트 2: 면세 · 과세 학원 공통 핵심 세무 */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                SPECIALTY 02. COMMON ACADEMY TAX MANAGEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                면세 · 과세 학원 공통 핵심 세무 관리
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                면세 학원과 요가·필라테스 등 과세 학원 모두에게 공통적으로 중요하게 관리해야 하는 강사 인건비, 현금영수증, 성실신고 대응입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-lg text-slate-900">
                  전임 강사(근로) vs 프리랜서 강사(3.3%) 관리
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  학원 강사 및 요가·필라테스·PT 프리랜서 강사의 근무 형태와 수수료 정산 구조에 맞춰 근로소득(4대보험)과 3.3% 사업소득을 정확히 구분 신고하고, 매월 원천세 및 간이지급명세서를 기한 내 제출합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-lg text-slate-900">
                  현금영수증 의무발행 리스크 예방
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  교습학원·예체능학원·체력단련장 등 현금영수증 의무발행업종 해당 여부를 정확히 점검하고, 건당 10만 원 이상 현금·계좌이체 수강료에 대한 5일 이내 자진발급 절차와 분할결제 유의사항을 철저히 안내합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-lg text-slate-900">
                  성실신고확인대상 대응 및 법인전환 검토
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  수강생·회원 증가로 연간 수입금액이 성실신고확인 기준(5억 원 이상)에 근접할 경우, 사전 결산 시뮬레이션과 법인전환·지점 확장 절세 전략을 맞춤형으로 제안합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 하단 문의 배너 */}
          <BusinessTaxCtaBanner
            ctaBadge="ACADEMY & STUDIO TAX CONSULTATION"
            ctaTitle="면세 학원 · 요가 · 필라테스 세무기장 및 신고 문의"
            ctaDescription="교육청 등록 면세 학원(사업장현황신고)부터 요가·필라테스·취미학원(부가세 조기환급·신고), 강사 인건비 관리까지 편하게 문의해 주세요."
          />
        </div>
      </section>
    </div>
  );
}
