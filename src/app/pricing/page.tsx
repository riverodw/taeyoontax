import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  CheckCircleIcon,
  KakaoIcon,
  PhoneIcon,
  ShieldCheckIcon,
  CalculatorIcon,
  ArrowRightIcon
} from "@/components/ui/icons";

export const metadata = {
  title: "비용안내 | 합리적이고 투명한 세무 보수 기준",
  description: "태윤세무회계의 투명한 세무 보수 기준 안내. 개인 및 법인 세무기장료, 종합소득세·부가세·법인세 신고대행 수수료, 재산제세 컨설팅 비용."
};

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* 서브 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              TRANSPARENT PRICING
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              투명하고 합리적인 <br />
              <span className="text-blue-400">세무 보수 기준 안내</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              태윤세무회계는 부당한 추가 비용이나 불투명한 수수료 청구 없이, 합리적인 기준과 정직한 가격으로 고객의 부담을 덜어드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3대 정직 원칙 */}
      <section className="py-12 bg-blue-50/60 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-800">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-blue-200/60 shadow-xs">
              <ShieldCheckIcon className="w-5 h-5 text-blue-700 shrink-0" />
              <span className="font-semibold">계약 전 명확한 보수 협의 및 사전 확정</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-blue-200/60 shadow-xs">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="font-semibold">숨겨진 항목 없는 투명한 견적서 제공</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-blue-200/60 shadow-xs">
              <CalculatorIcon className="w-5 h-5 text-amber-600 shrink-0" />
              <span className="font-semibold">절세 혜택으로 보수 이상의 실질 이익 실현</span>
            </div>
          </div>
        </div>
      </section>

      {/* 보수 체계 상세 섹션 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* 1. 세무기장 보수 기준 */}
          <div className="space-y-6" id="bookkeeping">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                01. BOOKKEEPING FEES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                세무기장 대행 보수 기준
              </h2>
              <p className="text-slate-600 text-sm">
                사업 규모, 매출액 및 거래 증빙의 양에 따라 합리적으로 책정됩니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 개인사업자 기장 */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
                      개인사업자
                    </span>
                    <span className="text-xs text-slate-500">부가가치세 별도</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-slate-600">월 기장료</div>
                    <div className="text-3xl font-black text-slate-900">
                      8만 원 ~ <span className="text-sm font-normal text-slate-500">/ 월 (매출, 업종 및 직원 수에 따른 협의)</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-3 border-t border-slate-200">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>복식부기 장부 작성 및 결산</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>임직원 급여대장 작성 및 원천세와 4대보험 신고</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>부가가치세 정기 신고</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>토지등 매매차익예정신고 포함(부동산매매사업자)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>연 1회 종합소득세 신고시 결산조정료 별도로 추가 발생</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <a
                    href={siteConfig.kakaoChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-xs transition"
                  >
                    <KakaoIcon className="w-4 h-4" />
                    <span>개인사업자 기장 견적 문의</span>
                  </a>
                </div>
              </div>

              {/* 법인사업자 기장 */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-900 text-white text-xs font-bold">
                      법인사업자
                    </span>
                    <span className="text-xs text-slate-500">부가가치세 별도</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-slate-600">월 기장료</div>
                    <div className="text-3xl font-black text-slate-900">
                      10만 원 ~ <span className="text-sm font-normal text-slate-500">/ 월 (매출, 업종 및 직원 수에 따른 협의)</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-3 border-t border-slate-200">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>기업회계기준 복식부기 및 전표 관리</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>원천세 신고 및 4대보험 토탈 관리</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>분기별 부가가치세 정기 신고</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>세무 리스크 진단 및 세액공제·감면 검토</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>연 1회 법인세 신고시 결산조정료 별도로 추가 발생</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <a
                    href={siteConfig.kakaoChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition"
                  >
                    <span>법인사업자 기장 견적 문의</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 세금 신고대행 수수료 */}
          <div className="space-y-6" id="filing">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                02. TAX FILING FEES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                세금 신고대행 수수료 (비기장 고객 대상)
              </h2>
              <p className="text-slate-600 text-sm">
                정기 기장 계약 없이 특정 세목 신고만 의뢰하시는 고객을 위한 투명한 보수 기준입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  1월 / 7월
                </span>
                <h3 className="font-bold text-base text-slate-900">부가가치세 신고대행</h3>
                <div className="text-lg font-extrabold text-slate-900">10만 원 ~</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  매출 규모 및 매입 세금계산서·카드 전표 건수에 따라 합리적으로 산정됩니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  5월 정기
                </span>
                <h3 className="font-bold text-base text-slate-900">종합소득세 확정신고</h3>
                <div className="text-lg font-extrabold text-slate-900">30만 원 ~</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  단순경비율·기준경비율 추계 및 간편장부, 복식부기 등 작성 방식에 따라 차등 적용됩니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  3월 정기
                </span>
                <h3 className="font-bold text-base text-slate-900">법인세 결산 및 조정</h3>
                <div className="text-lg font-extrabold text-slate-900">별도 협의</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  재무제표 작성 여부, 회계 결산 상태 및 세무조정 계산서 작성 난이도에 따라 협의합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 3. 상속증여양도세 신고 대행 및 조세불복 보수 체계 */}
          <div className="space-y-6" id="consulting">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                03. INHERITANCE · GIFT · CAPITAL GAINS & TAX APPEAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                상속 · 증여 · 양도세 신고 대행 및 조세불복
              </h2>
              <p className="text-slate-600 text-sm">
                과세 대상 재산의 평가 가액과 사안의 난이도에 따라 합리적으로 산정되며, 착수 전 상호 협의 후 진행합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <h3 className="font-bold text-base text-slate-900">
                  상속세 신고 및 세무조사 대응
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  상속재산 정밀 평가 및 감정평가 연계, 배우자·일괄공제 등 상속공제 최적화, 사전 10년 금융계좌 분석 및 세무조사 입회. (상속재산 가액 및 업무 범위에 따라 별도 협의)
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <h3 className="font-bold text-base text-slate-900">
                  증여세 절세 플랜 및 신고 대행
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  단순증여·부담부증여·저가양수도 세액 비교 분석, 증여재산공제 및 창업·가업승계 과세특례 검토, 자금출처 소명 대비 적법 신고. (증여재산 가액 및 유형에 따라 별도 협의)
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <h3 className="font-bold text-base text-slate-900">
                  양도소득세 절세 진단 및 신고 대행
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  1세대 1주택 비과세 및 일시적 2주택 특례 판정, 다주택자 중과 배제 및 장기보유특별공제 검토, 부동산·분양권·토지 양도세 신고. (양도가액 및 계산 난이도에 따라 별도 협의)
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <h3 className="font-bold text-base text-slate-900">
                  해명자료 제출 · 세무조사 대응 및 조세불복
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  자금출처 및 비과세 해명 안내문 소명자료 작성, 세무조사 대리, 과세전적부심사·이의신청·심판청구 및 경정청구 대행. (사안의 난이도 및 감액·환급 세액에 따라 별도 협의)
                </p>
              </div>
            </div>
          </div>

          {/* 1분 카카오톡 빠른 견적 확인 배너 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-[#FEE500] text-[#191919] text-xs font-bold inline-block">
                1분 간편 견적
              </span>
              <h3 className="text-2xl font-bold">
                우리 회사에 딱 맞는 세무 보수가 궁금하신가요?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                업종과 대략적인 연매출, 임직원 수를 카카오톡 채널로 남겨주시면 합리적인 맞춤 견적을 안내해 드립니다.
              </p>
            </div>
            <a
              href={siteConfig.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-7 py-4 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-sm transition shadow-lg flex items-center gap-2"
            >
              <KakaoIcon className="w-5 h-5 text-[#191919]" />
              <span>카카오톡으로 견적 문의하기</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
