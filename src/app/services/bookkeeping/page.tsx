import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CheckCircleIcon, KakaoIcon, PhoneIcon } from "@/components/ui/icons";

export const metadata = {
  title: "세무기장 및 결산 대행 | 프리미엄 사업자 장부 관리",
  description: "대표 세무사가 직접 소통하고 관리하는 태윤세무회계 프리미엄 기장 서비스. 복식부기 장부 작성, 4대보험 및 원천세 신고, 주기적 결산 리스크 모니터링."
};

export default function BookkeepingPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              BOOKKEEPING & ACCOUNTING
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              프리미엄 세무기장 & <br />
              <span className="text-blue-400">정밀 결산 대행</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              단순한 영수증 입력을 넘어, 기업의 재무 상태와 현금 흐름을 정확히 진단하고 세법상 허용된 모든 감면 혜택을 찾아 적용합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                1. 원스톱 매월 세무 업무 대행
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <span>임직원 급여 대장 작성 및 원천징수이행상황신고</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <span>4대보험 취득·상실 신고 및 정부 지원금 신청 연계</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <span>전자세금계산서 및 신용카드 매입·매출 전표 실시간 수집 및 검토</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                2. 선제적 결산 & 소득률 리스크 점검
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <span>하반기 중간 가결산을 통한 예상 소득세·법인세 모의 산출</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <span>동종 업종 평균 소득률 비교를 통한 과세관청 소명 위험 방어</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                  <span>청년창업중소기업 세액감면, 고용증대세액공제 최대 반영</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-blue-900 text-white text-center space-y-5">
            <h3 className="text-2xl font-bold">
              현재 기장 서비스에 만족하지 못하고 계신가요?
            </h3>
            <p className="text-blue-200 text-sm max-w-xl mx-auto">
              체계적인 일정 관리와 꼼꼼한 결산 검토를 제공하는 태윤세무회계의 프리미엄 기장 서비스를 경험해 보세요.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FEE500] text-[#191919] font-bold text-sm hover:bg-[#fada0a] transition shadow-lg"
              >
                <KakaoIcon className="w-4 h-4" />
                <span>기장 전환 카카오톡 문의하기</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
