import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  BookOpenIcon,
  KakaoIcon
} from "@/components/ui/icons";

export const metadata = {
  title: "부동산 임대업/매매업 | 부동산 매매사업자 · 임대사업자 세무",
  description: "부동산 세무 전문 저자 오동욱 공인회계사·세무사의 부동산 매매사업자 및 임대사업자 세무 서비스. 매매차익 예정신고, 비교과세 검토, 상가·주택 임대사업자 기장 및 신고."
};

export default function PropertyTaxPage() {
  return (
    <div className="bg-white">
      {/* 서브 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              REAL ESTATE RENTAL & TRADING TAX
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              부동산 임대업/매매업 <br />
              <span className="text-blue-400">(매매사업자 · 임대사업자)</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              《부동산매매사업자 세금 완전정복》 및 《이렇게 쉬운데 왜 부동산 절세를 하지 않았을까》 저자의 깊이 있는 부동산 세법 전문성으로 매매사업자와 임대사업자의 세무를 빈틈없이 관리합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 본문 콘텐츠 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* 파트 1: 부동산 매매사업자 */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                PART 01. REAL ESTATE TRADING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                부동산 매매사업자 세무
              </h2>
              <p className="text-slate-600 text-sm">
                복잡하고 까다로운 부동산 매매사업자의 장부 기장부터 매매차익 예정신고, 비교과세 검토까지 정밀하게 수행합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  매매사업자 장부 기장 및 필요경비 관리
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  부동산 취득부터 보유·매도 시까지 발생하는 대출 이자비용, 명도비, 인테리어비, 취득세, 중개수수료 등 각종 필요경비를 장부에 체계적으로 반영하여 소득세를 절감합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  매매차익 예정신고 및 비교과세 검토
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  부동산 매도 시 법정 기한 내 토지등 매매차익 예정신고를 대행하며, 종합소득세율과 양도소득세 중과세율을 비교하는 주택·비사업용토지 비교과세 규정을 면밀히 검토합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  부가가치세 · 종합소득세 · 법인세 신고
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  국민주택 규모 초과 주택 및 상가·오피스텔 매매에 따른 부가가치세 안분 계산·신고와 개인·법인 매매사업자의 정기 종합소득세 및 법인세 결산 신고를 진행합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 파트 2: 부동산 임대사업자 */}
          <div className="space-y-8">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                PART 02. REAL ESTATE RENTAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                부동산 임대사업자 세무
              </h2>
              <p className="text-slate-600 text-sm">
                상가·오피스텔·꼬마빌딩 등 일반임대사업자와 주택임대사업자의 기장, 세금 신고 및 감면 요건을 체계적으로 관리합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <h3 className="font-bold text-base text-blue-950">
                  상가 · 오피스텔 임대사업자 세무
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  상업용 부동산 분양·취득 시 건물분 부가가치세 조기환급 신청, 포괄양수도 계약 검토, 임대료 및 간주임대료 부가가치세 정기 신고를 정확히 대행합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <h3 className="font-bold text-base text-blue-950">
                  주택임대사업자 신고 및 세제 혜택 관리
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  면세사업자 사업장현황신고 대행은 물론, 등록 임대주택의 임대소득세 감면, 종합부동산세 합산배제, 거주주택 비과세 특례 요건을 꼼꼼하게 점검합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
                <h3 className="font-bold text-base text-blue-950">
                  임대소득 장부 기장 및 종합소득세 · 법인세 신고
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  임대 부동산의 감가상각비, 대출이자, 수선비, 재산세 등 필요경비를 빠짐없이 반영하여 개인 및 법인 임대사업자의 소득세·법인세 부담을 최소화합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 하단 배너 */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400">
                <BookOpenIcon className="w-4 h-4" />
                <span>검증된 부동산 세무 전문성</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                부동산 임대업 · 매매업 세무 기장 및 신고 문의
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                매매사업자 및 임대사업자 기장, 매매차익 예정신고, 종합소득세·부가세 신고 문의를 남겨주시면 신속히 안내해 드립니다.
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
