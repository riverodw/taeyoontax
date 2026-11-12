import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  KakaoIcon,
  NaverIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExternalLinkIcon
} from "@/components/ui/icons";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* 서브 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              CONSULTATION & INQUIRY
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              상담 신청
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              세무기장 및 세무신고 문의부터 상속·증여·양도 상담 문의까지 궁금하신 사항이 있으시면 언제든 부담 없이 연락해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </section>

      {/* 상담 채널 선택 및 폼 섹션 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* 카카오톡 비즈니스 채널 최상단 강조 배너 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500 via-[#FEE500] to-yellow-300 text-[#191919] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/10 text-xs font-black">
                <KakaoIcon className="w-4 h-4" />
                <span>빠르고 편리한 문의</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                카카오 비즈니스 채널 상담 문의
              </h2>
              <p className="text-xs sm:text-sm font-medium text-slate-800 max-w-xl">
                양식 작성이 번거로우시다면? 카카오톡 채널로 간편하게 문의를 남겨주세요.
              </p>
            </div>

            <a
              href={siteConfig.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-8 py-4 rounded-2xl bg-[#191919] hover:bg-slate-800 text-white font-bold text-sm shadow-2xl transition transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
            >
              <KakaoIcon className="w-5 h-5 text-[#FEE500]" />
              <span>카카오톡 채널 문의하기</span>
              <ExternalLinkIcon className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* 온라인 네이버 폼 & 사무소 정보 2단 그리드 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* 좌측: 네이버 폼 상담 신청 연결 */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  상담 신청
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  접수해 주신 내용은 비밀이 철저히 보장되며, 확인 후 신속하게 연락드립니다.
                </p>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <NaverIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>네이버 폼 공식 접수처</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    태윤세무회계 온라인 상담 신청서
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    아래 버튼을 클릭하여 네이버 폼 상담 신청서를 작성해 주시면, 입력하신 내역이 태윤세무회계로 즉시 접수됩니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-medium">사업자 세무기장 · 신고대리</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-medium">부동산 임대업 · 매매업 세무</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-medium">상속 · 증여 · 양도소득세</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-medium">세무조사 대응 · 조세불복</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={siteConfig.naverFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md transition flex items-center justify-center gap-2"
                  >
                    <span>상담 신청 작성하기 (네이버 폼)</span>
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* 우측: 사무소 정보 & 지도 바로가기 */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl">
                <div className="space-y-1">
                  <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
                    DIRECT CONTACT
                  </span>
                  <h3 className="text-xl font-bold tracking-tight">
                    태윤세무회계 연락처 & 위치
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-base text-white">{siteConfig.tel}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">{siteConfig.address}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{siteConfig.locationDetail}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">업무 시간</div>
                      <div className="text-xs text-slate-400 mt-0.5">{siteConfig.businessHours}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <Link
                    href="/about/location"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition"
                  >
                    <span>오시는 길 상세 보기</span>
                  </Link>

                  <a
                    href={siteConfig.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition"
                  >
                    <span>오회계사의 지식창고 블로그 둘러보기</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
