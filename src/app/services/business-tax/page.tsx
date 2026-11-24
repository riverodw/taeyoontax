import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import BusinessIndustryNav from "@/components/services/BusinessIndustryNav";
import CommonBusinessTaxSection from "@/components/services/CommonBusinessTaxSection";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata = {
  title: "사업자 세무 | 업종별 특화 세무 · 세무기장 · 신고대리",
  description: "태윤세무회계 사업자 세무 서비스. 부동산 임대업·매매업, 병원·동물병원, 식당·카페, 학원 등 업종별 특화 세무와 법인·개인사업자 세무기장 및 신고대리."
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
              <span className="text-blue-400">업종별 특화 관리 · 기장 · 신고</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              부동산 임대업·매매업, 병원·동물병원, 식당·카페, 학원 등 업종마다 달라지는 핵심 세무 쟁점을 정밀 관리하고, 법인·개인사업자의 월별 세무기장과 정기 세금 신고를 책임지고 수행합니다.
            </p>
          </div>
        </div>
      </section>

      <BusinessIndustryNav />

      {/* 본문 콘텐츠 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* 상단: 업종별 특화 세무 안내 (4대 핵심 업종) */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                INDUSTRY SPECIALTIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                업종별 특화 세무 안내
              </h2>
              <p className="text-slate-600 text-sm">
                해당 업종을 선택하시면 업종 특유의 필수 세무 체크포인트와 절세 전략을 상세히 확인하실 수 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteConfig.businessTaxIndustries.map((industry, idx) => (
                <Link
                  key={industry.id}
                  href={industry.href}
                  className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between gap-5 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded bg-blue-900 text-white text-xs font-bold">
                        {industry.badge}
                      </span>
                      <span className="text-xs font-black text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-900 transition">
                      {industry.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {industry.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-900">
                    <span>{industry.title} 핵심 세무 보기</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 하단: 공통 세무기장 및 정기 세금 신고 업무 */}
          <CommonBusinessTaxSection />
        </div>
      </section>
    </div>
  );
}
