import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CheckCircleIcon, KakaoIcon, ArrowRightIcon } from "@/components/ui/icons";

export const metadata = {
  title: "세금 신고대행 | 부가세 · 종합소득세 · 법인세",
  description: "종합소득세, 부가가치세, 법인세 법정 신고대행. 최신 세법 개정 반영 및 세액공제·감면 혜택을 100% 반영합니다."
};

export default function TaxFilingPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              TAX FILING SERVICES
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              법정 세금 신고대행
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              부가가치세, 종합소득세, 법인세 신고. 철저한 기한 준수와 정밀한 세액 감면 검토로 가산세 위험 없이 세금 부담을 최소화합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="px-2.5 py-1 rounded bg-blue-900 text-white text-xs font-bold">1월 / 7월</span>
              <h3 className="text-lg font-bold text-slate-900">부가가치세 신고대행</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                일반과세자, 간이과세자, 법인의 부가가치세 정기 및 조기환급 신고. 신용카드 매출전표 등 수취명세서 및 매입세액 공제 요건을 누락 없이 검토합니다.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="px-2.5 py-1 rounded bg-emerald-800 text-white text-xs font-bold">5월 정기</span>
              <h3 className="text-lg font-bold text-slate-900">종합소득세 확정신고</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                단순경비율·기준경비율 추계 신고부터 간편장부, 복식부기 의무자까지 납세자 유형에 맞춘 최적의 신고 방식을 찾아 세액을 최소화합니다.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="px-2.5 py-1 rounded bg-amber-600 text-white text-xs font-bold">3월 정기</span>
              <h3 className="text-lg font-bold text-slate-900">법인세 결산 및 세무조정</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                기업회계기준에 부합하는 재무제표 작성과 법인세법상 익금산입·손금산입 세무조정 계산서를 완벽하게 작성하여 제출합니다.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">신고 기한이 임박하셨나요?</h3>
              <p className="text-xs text-slate-300">
                카카오톡 채널로 관련 안내문이나 서류를 보내주시면 확인 후 빠른 접수를 도와드립니다.
              </p>
            </div>
            <a
              href={siteConfig.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-[#FEE500] text-[#191919] font-bold text-xs hover:bg-[#FADA0A] transition"
            >
              카톡으로 신고 서류 보내기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
