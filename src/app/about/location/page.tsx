import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  KakaoIcon,
  MailIcon,
  ExternalLinkIcon,
  CheckCircleIcon
} from "@/components/ui/icons";

export const metadata = {
  title: "오시는 길 | 부산 연제구 월드컵대로 225-1 우일빌딩 5층",
  description: "태윤세무회계사무소 오시는 길 안내. 부산지방법원·검찰청 및 지하철 3호선 거제역 인근, 우일빌딩 5층."
};

export default function LocationPage() {
  const encodedAddress = encodeURIComponent(siteConfig.address);

  return (
    <div className="bg-white">
      {/* 서브 헤더 배너 */}
      <section className="bg-slate-950 text-white py-14 lg:py-18 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              LOCATION & DIRECTIONS
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              오시는 길
            </h1>
            <p className="text-slate-300 text-sm sm:text-base">
              태윤세무회계는 부산 법조타운 및 거제역 인근으로 새롭게 이전하여 더욱 편리하게 방문상담을 받으실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 본문 콘텐츠 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* 좌측: 사무소 정보 & 교통편 */}
            <div className="lg:col-span-5 space-y-8">
              {/* 기본 정보 카드 */}
              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-blue-700 uppercase">
                    OFFICE ADDRESS
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">
                    {siteConfig.fullName}
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">{siteConfig.address}</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {siteConfig.locationDetail}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">대표전화: {siteConfig.tel}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MailIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">이메일: {siteConfig.email}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">업무 시간</div>
                      <div className="text-xs text-slate-500 mt-0.5">{siteConfig.businessHours}</div>
                    </div>
                  </div>
                </div>

                {/* 지도 앱 바로가기 버튼 */}
                <div className="pt-2 grid grid-cols-2 gap-3">
                  <a
                    href={`https://map.naver.com/v5/search/${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition"
                  >
                    <span>네이버 지도 보기</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`https://map.kakao.com/link/search/${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-xs transition"
                  >
                    <span>카카오맵 보기</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* 교통편 안내 카드 */}
              <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-5">
                <h3 className="font-bold text-base text-slate-900">
                  대중교통 안내
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="space-y-1">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      지하철 이용 시
                    </div>
                    <p className="pl-3.5 text-xs text-slate-600 leading-relaxed">
                      부산 지하철 <strong>3호선 거제역</strong> 도보 약 3~5분거리 / 동해선 거제역 및 거제해맞이역 인접.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      버스 이용 시
                    </div>
                    <p className="pl-3.5 text-xs text-slate-600 leading-relaxed">
                      '부산지방법원·검찰청' 또는 '거제역' 정류소 하차 후 월드컵대로변 우일빌딩 도보 이동.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 우측: 시각적 지도 안내 뷰 및 방문 예약 */}
            <div className="lg:col-span-7 space-y-6">
              {/* 지도 뷰 프레임 */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-slate-100 min-h-[420px] flex flex-col justify-between p-8 relative">
                <div className="space-y-2 relative z-10">
                  <span className="px-3 py-1 rounded-full bg-blue-900 text-white text-xs font-bold inline-block">
                    신규 이전 위치 안내
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    우일빌딩 5층 (부산 연제구 월드컵대로 225-1)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    거제대로와 월드컵대로가 만나는 법조타운 주요 요지에 위치해 있습니다.
                  </p>
                </div>

                {/* 중앙 심볼 카드 */}
                <div className="my-10 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md text-center max-w-md mx-auto space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center mx-auto">
                    <MapPinIcon className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-slate-900">태윤세무회계사무소</div>
                    <div className="text-xs text-slate-600 mt-1">{siteConfig.address}</div>
                  </div>
                  <div className="flex justify-center gap-2 pt-2">
                    <a
                      href={`https://map.naver.com/v5/search/${encodedAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition"
                    >
                      네이버 지도 길찾기
                    </a>
                    <a
                      href={`https://map.kakao.com/link/search/${encodedAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-[#FEE500] text-[#191919] text-xs font-bold hover:bg-[#fada0a] transition"
                    >
                      카카오맵 길찾기
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-200">
                  <span>내비게이션 검색: '우일빌딩' 또는 '월드컵대로 225-1'</span>
                  <span className="text-blue-700 font-semibold">5층 태윤세무회계</span>
                </div>
              </div>

              {/* 방문 상담 사전 예약 안내 */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-bold text-base">
                    방문 상담을 원하시나요?
                  </h4>
                  <p className="text-xs text-blue-200">
                    사전에 카카오톡 채널 또는 유선으로 일정을 예약해 주시면 대기 없이 편리하게 방문 상담을 받으실 수 있습니다.
                  </p>
                </div>
                <a
                  href={siteConfig.kakaoChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-5 py-3 rounded-xl bg-[#FEE500] text-[#191919] font-bold text-xs hover:bg-[#FADA0A] transition"
                >
                  카카오톡 방문예약 문의
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
