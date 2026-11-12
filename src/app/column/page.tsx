import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  NaverIcon,
  BookOpenIcon,
  ExternalLinkIcon,
  ChevronRightIcon,
  KakaoIcon,
  CheckCircleIcon
} from "@/components/ui/icons";

export const metadata = {
  title: "세무 칼럼 | 오회계사의 지식창고 (네이버 블로그)",
  description: "오동욱 대표 공인회계사·세무사의 네이버 공식 블로그 《오회계사의 지식창고》 최신 세무 칼럼 및 실전 절세 팁."
};

export default function ColumnPage() {
  const articles = [
    {
      title: "부동산 매매사업자, 종합소득세 vs 비교과세 어떻게 적용되나?",
      category: "부동산 세무",
      date: "2024.10",
      desc: "주택 및 토지 매매사업을 영위할 때 종합소득세 기본세율과 양도소득세 중과세율 중 높은 세액을 납부하는 비교과세 제도의 실무 핵심 쟁점을 분석합니다.",
      tags: ["부동산매매업", "비교과세", "종합소득세"]
    },
    {
      title: "10년 주기 증여세 공제를 활용한 가족 자산 이전 전략",
      category: "상속 · 증여",
      date: "2024.09",
      desc: "배우자 6억 원, 직계존비속 5천만 원의 증여재산공제를 10년 단위로 전략적으로 활용하여 상속세 과세표준을 획기적으로 낮추는 실무 플랜을 공개합니다.",
      tags: ["증여세공제", "상속세절세", "사전증여"]
    },
    {
      title: "개인사업자 법인전환, 언제 그리고 어떤 방식으로 해야 유리할까?",
      category: "법인 컨설팅",
      date: "2024.08",
      desc: "성실신고확인대상 기준과 높은 종합소득세율을 피하고, 영업권 평가 및 세감면 포괄양수도를 통해 취득세를 절감하는 법인전환 실전 가이드입니다.",
      tags: ["법인전환", "포괄양수도", "영업권평가"]
    },
    {
      title: "상속세 세무조사 대비, 10년 치 금융계좌 정리의 모든 것",
      category: "상속세 전문",
      date: "2024.07",
      desc: "피상속인뿐만 아니라 상속인의 10년 계좌 입출금 내역까지 추적하는 국세청 상속세 조사의 핵심 포인트와 사전 소명 노하우를 알아봅니다.",
      tags: ["상속세조사", "금융계좌소명", "세무조사방어"]
    },
    {
      title: "부동산 법인의 취득세 중과세 예외 요건 총정리",
      category: "부동산 세무",
      date: "2024.06",
      desc: "수도권 과밀억제권역 및 다주택 법인의 취득세 중과세율(최대 12%)을 합법적으로 피할 수 있는 목적사업 등록 및 예외 조항을 해설합니다.",
      tags: ["부동산법인", "취득세중과", "과밀억제권역"]
    },
    {
      title: "창업중소기업 세액감면 5년간 50~100% 감면 요건 체크",
      category: "기장 · 세액감면",
      date: "2024.05",
      desc: "청년 창업 및 수도권 과밀억제권역 외 창업 시 5년간 소득세·법인세를 대폭 감면받는 조세특례제한법 제6조의 필수 충족 요건을 안내합니다.",
      tags: ["창업감면", "조특법제6조", "청년창업"]
    }
  ];

  return (
    <div className="bg-white">
      {/* 서브 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <NaverIcon className="w-4 h-4" />
              <span>OFFICIAL BLOG & COLUMN</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              오회계사의 세무 칼럼
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              오동욱 대표 공인회계사·세무사가 직접 연재하는 네이버 공식 블로그 《오회계사의 지식창고》의 전문 칼럼과 실전 세법 해석을 만나보세요.
            </p>
          </div>
        </div>
      </section>

      {/* 공식 블로그 링크 배너 */}
      <section className="py-8 bg-emerald-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              <NaverIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                네이버 공식 블로그: blog.naver.com/riverodw
              </h2>
              <p className="text-xs text-slate-600">
                수백 편의 깊이 있는 부동산 세무 칼럼과 실무 질의응답을 블로그에서 바로 확인하실 수 있습니다.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-sm"
          >
            <span>네이버 블로그 바로가기</span>
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 칼럼 리스트 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              주요 추천 절세 칼럼
            </h2>
            <span className="text-xs text-slate-500">
              클릭 시 네이버 공식 블로그 원문으로 연결됩니다
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((item, idx) => (
              <a
                key={idx}
                href={siteConfig.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition">
                    원문 <ChevronRightIcon className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* FAQ 섹션 */}
          <div className="pt-16 border-t border-slate-200" id="faq">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-center space-y-2 mb-10">
                <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  부동산 세무 핵심 자주 묻는 질문
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <span className="text-blue-700 font-bold">Q.</span>
                    부동산 매매사업자와 일반 개인 양도 중 어느 쪽이 유리한가요?
                  </h4>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    단기 매매나 다주택자 중과 대상 주택의 경우 매매사업자가 필요경비 인정 범위(대출이자, 중개수수료 등)가 넓어 유리할 수 있습니다. 단, 비교과세 규정이 적용되므로 사전에 양도소득세율과 종합소득세율을 정밀 시뮬레이션해야 합니다.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <span className="text-blue-700 font-bold">Q.</span>
                    상속 개시 전 증여는 몇 년 전에 하는 것이 안전한가요?
                  </h4>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    상속세법상 상속인(배우자, 자녀)에 대한 증여는 사망일 전 10년 이내의 재산이 상속재산에 합산됩니다. 따라서 10년 주기로 사전에 분산 증여를 실행하는 것이 상속세 절세의 핵심입니다.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <span className="text-blue-700 font-bold">Q.</span>
                    기장 대행을 맡기면 세무사가 직접 장부를 검토하나요?
                  </h4>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    네, 태윤세무회계는 직원에게만 전담시키지 않고, 매 정기 결산 및 주요 세무 이슈 발생 시 오동욱 대표 세무사가 직접 계정과목과 세액감면 여부를 최종 검토합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
