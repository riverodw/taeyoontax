import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CheckCircleIcon, MailIcon, PhoneIcon, KakaoIcon } from "@/components/ui/icons";

export const metadata = {
  title: "인재채용 | 태윤세무회계와 함께 성장할 인재를 모십니다",
  description: "태윤세무회계사무소 인재채용 안내. 세무기장, 회계 및 세무 자문 업무를 수행할 전문 인재를 모집합니다."
};

export default function RecruitPage() {
  return (
    <div className="bg-white">
      {/* 서브 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              CAREERS AT TAEYUN
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              태윤세무회계와 함께 <br />
              <span className="text-blue-400">최고의 전문성</span>을 키워갈 인재를 모십니다.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              정확한 원칙과 상호 존중을 바탕으로 직원의 역량 발전과 워라밸을 최우선으로 지원하는 근무 환경을 지향합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 채용 본문 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* 인재상 3가지 */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                OUR VALUES
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                태윤이 추구하는 인재상
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  1. 정직과 신뢰 (Integrity)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  고객의 중요한 재산과 세무 정보를 다루는 만큼 높은 윤리의식과 정확성을 갖춘 분
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  2. 전문성 추구 (Professionalism)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  변화하는 세법과 회계 기준에 능동적으로 학습하고 지속적인 자기개발을 지향하는 분
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  3. 배려와 소통 (Communication)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  고객의 애로사항에 진심으로 귀 기울이고 동료와 원활하게 협업할 수 있는 분
                </p>
              </div>
            </div>
          </div>

          {/* 복리후생 안내 */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                BENEFITS
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                근무 조건 및 복리후생
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-700">
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-blue-700 shrink-0" />
                <span className="font-medium">주 5일 근무 (09:00~18:00)</span>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-blue-700 shrink-0" />
                <span className="font-medium">4대 보험 & 퇴직연금 가입</span>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-blue-700 shrink-0" />
                <span className="font-medium">신고철 야근 최소화 & 석식 지원</span>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-blue-700 shrink-0" />
                <span className="font-medium">세무·회계 직무 교육비 지원</span>
              </div>
            </div>
          </div>

          {/* 입사지원 접수 안내 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-6" id="apply">
            <div className="space-y-2">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
                APPLY NOW
              </span>
              <h3 className="text-2xl font-black tracking-tight">
                입사지원 및 채용 문의
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                경력직 및 신입 상시 인재풀을 운영하고 있습니다. 이력서와 자기소개서를 아래 이메일로 보내주시면 검토 후 개별 연락드립니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                <div className="text-slate-400 text-xs">서류 접수 이메일</div>
                <div className="font-bold text-base text-white">{siteConfig.email}</div>
                <div className="text-xs text-slate-400">제목: [입사지원] 성함_경력구분(신입/경력)</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                <div className="text-slate-400 text-xs">근무지 위치</div>
                <div className="font-bold text-base text-white">{siteConfig.address}</div>
                <div className="text-xs text-slate-400">부산 3호선 거제역 도보 3분 우일빌딩 5층</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
