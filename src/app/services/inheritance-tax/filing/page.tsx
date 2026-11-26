import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ClockIcon,
  KakaoIcon,
  PhoneIcon,
  ShieldCheckIcon
} from "@/components/ui/icons";

export const metadata = {
  title: "상속세 신고 절차 및 필요서류 | 상속 · 증여 · 양도",
  description:
    "태윤세무회계 상속세 신고 전용 안내. 상담부터 안심상속 자료수집, 재산 평가·10년 금융거래 분석, 재산분할, 신고·납부, 세무조사 대응까지 6단계 흐름도와 필요서류 체크리스트."
};

const processSteps = [
  {
    step: "01",
    title: "사전 상담 및 위임 계약",
    period: "상담 단계",
    deliverable: "예상 세액 1차 진단 · 맞춤 일정표",
    points: [
      "유선·카카오톡으로 기초 현황 파악 후 방문 또는 유선 정밀 상담 진행",
      "상속재산 규모, 사전증여·채무 등 핵심 절세 쟁점 및 대략적인 세액 진단",
      "상속세 신고 및 세무조사 대응 범위 확정 후 위임 계약 체결"
    ]
  },
  {
    step: "02",
    title: "사망신고 및 상속 자료 수집",
    period: "사망 후 1개월 이내",
    deliverable: "상속재산 · 채무 전체 목록표",
    points: [
      "사망신고와 함께 안심상속 원스톱서비스 및 홈택스 상속·증여재산 조회",
      "부동산·예금·주식·보험·퇴직금·채무·장례비용 등 기본 증빙 자료 수집",
      "피상속인 및 상속인의 최근 10년 금융거래내역과 사전증여 내역 확보"
    ]
  },
  {
    step: "03",
    title: "재산 평가 및 10년 금융거래 분석",
    period: "사망 후 2~4개월",
    deliverable: "1차 보고 (재산 평가 · 계좌 분석)",
    points: [
      "아파트 유사매매사례가액 조회 및 상가·토지·단독주택 감정평가 실익 검토(상속세 vs 추후 양도세)",
      "최근 10년 계좌 대액 인출·이체 내역 분석으로 추정상속재산 및 사전증여 리스크 사전 정리",
      "임대보증금·대출금·미납 병원비·공과금 등 누락 없는 채무·공제 항목 확정"
    ]
  },
  {
    step: "04",
    title: "예상세액 확정 및 재산분할 협의",
    period: "사망 후 3~5개월",
    deliverable: "2차 보고 (확정 세액 · 최적 분할안)",
    points: [
      "일괄공제(5억)·배우자공제(5억~30억)·금융재산공제·동거주택공제 최대 적용",
      "향후 2차 상속까지 고려한 배우자·자녀 간 가장 유리한 재산분할 시나리오 비교",
      "상속재산 분할협의서 작성, 부동산 상속등기 및 취득세 신고 일정 연계"
    ]
  },
  {
    step: "05",
    title: "상속세 신고 및 납부 완료",
    period: "사망 말일부터 6개월 이내",
    deliverable: "최종 신고서 접수 · 납부 안내",
    points: [
      "법정 기한 내 상속세 신고서 제출로 3% 신고세액공제 혜택 확보",
      "자금 여력에 맞춰 분납(2개월), 연부연납(최대 10년), 물납 등 최적 납부 방식 신청",
      "신고 후 세무조사에 대비해 주요 거래 소명자료 및 증빙 일체 사전 정리"
    ]
  },
  {
    step: "06",
    title: "세무서 결정 및 상속세 세무조사 대응",
    period: "신고 후 6~9개월 이내",
    deliverable: "조사 입회 · 최종 결정통지 확인",
    points: [
      "신고 후 약 2~3개월 내 조사 안내문 수령 및 세무서·지방국세청 조사 착수 대응",
      "금융계좌 소명자료 작성, 추정상속재산·사전증여·감정평가 쟁점 법리 방어",
      "세무조사 현장 입회, 최종 결정통지서 검토 및 사후 관리 마무리"
    ]
  }
];

const starterDocs = [
  "피상속인 기본증명서 · 가족관계증명서(상세)",
  "안심상속 원스톱서비스 조회 결과",
  "보유 부동산 등기사항전부증명서",
  "사망일 기준 주요 예금 잔액증명서",
  "기존 증여세 신고서(있는 경우)"
];

const documentCategories = [
  {
    category: "가족관계 · 기본",
    items:
      "사망진단서(시체검안서), 피상속인 기본증명서·가족관계증명서(상세), 제적등본(필요 시), 상속인 신분증 사본"
  },
  {
    category: "금융재산 (예금 · 주식)",
    items:
      "상속개시일(불가 시 전일자) 기준 잔액·잔고증명서, 피상속인·상속인 최근 10년 계좌 거래내역(엑셀), 증권 잔고·주식예탁증명서"
  },
  {
    category: "부동산",
    items:
      "등기사항전부증명서, 취득·매매계약서, 감정평가서(있는 경우), 임대차계약서(임대보증금 채무 공제용)"
  },
  {
    category: "보험 · 퇴직금",
    items:
      "보험증권(계약자·피보험자·수익자 확인용), 사망보험금 지급·해약 확인서, 퇴직소득 원천징수영수증 및 지급내역"
  },
  {
    category: "차량 · 회원권 · 기타",
    items:
      "자동차등록증 또는 매매계약서, 골프·콘도 등 회원증·회원확인서, 비상장법인 재무제표·주주명부(해당 시)"
  },
  {
    category: "사전증여 내역",
    items:
      "홈택스 증여재산 조회내역, 과거 증여세 신고서 (상속인 10년 이내 · 상속인 외 5년 이내 증여분)"
  },
  {
    category: "채무 · 공과금",
    items:
      "금융기관 부채증명서, 차용증 및 이자지급내역, 미납 병원비·카드대금, 사망일 기준 미납 국세·지방세·건강보험료 고지서"
  },
  {
    category: "장례비용",
    items:
      "장례식장·병원·상조 영수증 (최소 500만 원~최대 1,000만 원 공제), 봉안시설·자연장지 사용 영수증 (최대 500만 원 별도 공제)"
  }
];

const tocItems = [
  { label: "01. 신고 핵심 요약", href: "#overview" },
  { label: "02. 진행 절차 흐름도", href: "#process" },
  { label: "03. 필요서류 체크리스트", href: "#documents" },
  { label: "04. 납부 방법 · 비용안내", href: "#payment" }
];

export default function InheritanceFilingPage() {
  return (
    <div className="bg-white">
      {/* 서브 배너 */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300">
              <Link
                href="/services/inheritance-tax"
                className="hover:text-white transition"
              >
                상속 · 증여 · 양도
              </Link>
              <ChevronRightIcon className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-white">상속세 신고 안내</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              상속세 신고 절차 · 필요서류 <br />
              <span className="text-blue-400">상담부터 세무조사까지 원스톱 안내</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              상속세는 신고 기한 내 정확한 재산 평가와 10년 금융거래 분석, 그리고 신고 이후 세무조사 대응까지 체계적으로 이어져야 합니다. 전체 진행 흐름과 준비 서류를 한눈에 정리해 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 상단 서브 네비게이션 바 */}
      <nav
        aria-label="상속·증여·양도 이동 메뉴"
        className="bg-slate-50 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex flex-wrap items-center gap-2">
          <Link
            href="/services/inheritance-tax"
            className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-900 transition"
          >
            상속 · 증여 · 양도 전체
          </Link>
          <Link
            href="/services/inheritance-tax/filing"
            className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-900 text-white shadow-xs transition"
          >
            상속세 신고 절차 · 필요서류
          </Link>
          <Link
            href="/services/inheritance-tax#gift"
            className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-900 transition"
          >
            증여세
          </Link>
          <Link
            href="/services/inheritance-tax#capital-gains"
            className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-900 transition"
          >
            양도소득세
          </Link>
        </div>
      </nav>

      {/* 본문 2단 레이아웃 (좌측 콘텐츠 + 우측 스티키 목차/문의) */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* 좌측 메인 본문 */}
            <div className="lg:col-span-9 space-y-20">
              {/* =====================================================
                  01. 상속세 신고 핵심 요약
              ===================================================== */}
              <div id="overview" className="space-y-6 scroll-mt-28">
                <div className="space-y-2 border-b border-slate-200 pb-4">
                  <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                    01. OVERVIEW
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    상속세 신고, 꼭 알아야 할 3가지 핵심
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                    <div className="text-xs font-bold text-blue-800">
                      신고 · 납부 기한
                    </div>
                    <div className="text-lg font-extrabold text-slate-900">
                      사망 말일부터 6개월 이내
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      기한 내 신고 시 <strong>3% 신고세액공제</strong>를 받습니다. 피상속인·상속인 중 외국 거주자가 있으면 9개월로 연장됩니다.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-xs font-bold text-blue-800">
                      주요 기본 공제
                    </div>
                    <div className="text-lg font-extrabold text-slate-900">
                      일괄 5억 + 배우자 최소 5억
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      배우자 생존 시 최소 10억 원(배우자 없을 시 5억 원)까지 기본 공제되며, 금융재산·동거주택 공제가 추가 적용됩니다.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-xs font-bold text-blue-800">
                      신고 후 세무조사
                    </div>
                    <div className="text-lg font-extrabold text-slate-900">
                      신고 후 6~9개월 내 결정
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      과세관청은 최근 10년 금융거래와 사전증여를 검증합니다. 신고 단계부터 조사에 대비한 소명 준비가 핵심입니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  02. 상담부터 세무조사까지 6단계 흐름도
              ===================================================== */}
              <div id="process" className="space-y-10 scroll-mt-28">
                <div className="space-y-2 border-b border-slate-200 pb-4">
                  <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                    02. PROCESS FLOW
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    상담부터 세무조사까지 6단계 진행 흐름도
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base">
                    복잡한 상속세 절차를 6단계로 나누어, 각 단계별 핵심 점검 사항과 산출물을 투명하게 공유하며 진행합니다.
                  </p>
                </div>

                {/* 한눈에 보는 6단계 흐름 요약 다이어그램 */}
                <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {processSteps.map((item, idx) => (
                      <div
                        key={item.step}
                        className="relative flex flex-col justify-between p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-center space-y-1.5"
                      >
                        <div className="mx-auto w-8 h-8 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center">
                          {item.step}
                        </div>
                        <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug break-keep">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-blue-700 font-medium">
                          {item.period}
                        </div>
                        {idx < processSteps.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="hidden lg:flex items-center justify-center absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-blue-100 text-blue-800"
                          >
                            <ChevronRightIcon className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 단계별 상세 수직 타임라인 */}
                <div className="relative pl-4 sm:pl-6 space-y-6">
                  {/* 수직 연결선 */}
                  <div
                    aria-hidden="true"
                    className="absolute left-[27px] sm:left-[35px] top-6 bottom-6 w-0.5 bg-blue-200"
                  />

                  {processSteps.map((item) => (
                    <div
                      key={item.step}
                      className="relative flex items-start gap-4 sm:gap-6"
                    >
                      {/* 단계 번호 노드 */}
                      <div className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-blue-900 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm ring-4 ring-white">
                        {item.step}
                      </div>

                      {/* 단계 내용 카드 */}
                      <div className="flex-1 p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition space-y-3.5 shadow-xs">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                            {item.title}
                          </h3>
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-100 text-xs font-semibold">
                            <ClockIcon className="w-3.5 h-3.5" />
                            <span>{item.period}</span>
                          </span>
                        </div>

                        <ul className="space-y-2 text-sm sm:text-[15px] text-slate-700">
                          {item.points.map((point) => (
                            <li key={point} className="flex items-start gap-2.5">
                              <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-900">
                          <ArrowRightIcon className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{item.deliverable}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* =====================================================
                  03. 필요서류 체크리스트
              ===================================================== */}
              <div id="documents" className="space-y-8 scroll-mt-28">
                <div className="space-y-2 border-b border-slate-200 pb-4">
                  <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                    03. REQUIRED DOCUMENTS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    상속세 신고 필요서류 안내
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base">
                    처음부터 모든 서류를 다 준비하실 필요는 없습니다. 첫 상담용 기본 자료부터 시작해 진행 단계에 맞춰 안내해 드립니다.
                  </p>
                </div>

                {/* 핵심 팁 박스 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3.5">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-base font-extrabold text-blue-950">
                      주민센터 · 정부24 「안심상속 원스톱서비스」부터 신청해 두세요
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      사망신고 시 함께 신청하시면 피상속인의 금융거래·토지·자동차·국세·지방세·국민연금 내역을 한 번에 조회할 수 있어 재산 누락을 크게 줄일 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 첫 상담 시 먼저 준비할 기본 서류 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      첫 상담 시 먼저 준비하시면 좋은 서류 (5가지)
                    </h3>
                    <span className="text-xs text-slate-500">
                      없는 서류는 상담 후 안내에 따라 준비하셔도 됩니다
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {starterDocs.map((doc) => (
                      <span
                        key={doc}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-800"
                      >
                        <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{doc}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* 정식 신고 분야별 필요서류 표 */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                    정식 상속세 신고 분야별 필요서류 (8대 분류)
                  </h3>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
                    <div className="divide-y divide-slate-200">
                      {documentCategories.map((row) => (
                        <div
                          key={row.category}
                          className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 px-5 sm:px-6 py-4 sm:py-5 hover:bg-slate-50/70 transition"
                        >
                          <div className="sm:col-span-3 font-bold text-sm sm:text-[15px] text-blue-950">
                            {row.category}
                          </div>
                          <div className="sm:col-span-9 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                            {row.items}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">
                    ※ 예금·증권 잔액증명서는 사망일 당일 기준 발급이 원칙이며, 불가한 경우 전일자 기준으로 발급받으시면 됩니다.
                  </p>
                </div>
              </div>

              {/* =====================================================
                  04. 납부 방법 및 비용안내
              ===================================================== */}
              <div id="payment" className="space-y-8 scroll-mt-28">
                <div className="space-y-2 border-b border-slate-200 pb-4">
                  <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                    04. PAYMENT OPTIONS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    상속세 납부 부담을 줄이는 분할 납부 제도
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="px-2.5 py-1 rounded bg-blue-900 text-white text-xs font-bold inline-block">
                      분납
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      2개월 이내 나누어 납부
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      납부할 세액이 1,000만 원을 초과하는 경우, 일부 금액을 납부기한 경과 후 2개월 이내에 나누어 납부할 수 있습니다.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="px-2.5 py-1 rounded bg-emerald-800 text-white text-xs font-bold inline-block">
                      연부연납
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      최대 10년간 장기 분할 납부
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      납부세액이 2,000만 원을 초과하면 납세담보를 제공하고 최대 10년(가업상속 시 최대 20년)에 걸쳐 연 단위로 분할 납부할 수 있습니다.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="px-2.5 py-1 rounded bg-amber-700 text-white text-xs font-bold inline-block">
                      물납
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      부동산 · 유가증권으로 납부
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      상속재산 중 부동산·유가증권 비중이 50%를 초과하고 금융재산으로 납부가 어려운 경우, 일정 요건 하에 부동산 등으로 납부 신청이 가능합니다.
                    </p>
                  </div>
                </div>

                {/* 비용안내 바로가기 박스 */}
                <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                      TRANSPARENT PRICING
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      상속세 신고 · 조사 대응 보수 기준이 궁금하신가요?
                    </h3>
                    <p className="text-sm text-slate-600">
                      상속재산 가액과 업무 범위에 따른 합리적인 보수 기준을 확인하실 수 있습니다.
                    </p>
                  </div>
                  <Link
                    href="/pricing#consulting"
                    className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base shadow-md transition"
                  >
                    <span>비용안내 바로가기</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* 하단 상담 배너 */}
              <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    INHERITANCE TAX CONSULTATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    상속세 신고 · 세무조사, 대표 세무사가 직접 챙깁니다
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    사망 직후 초기 안내부터 감정평가, 10년 계좌 분석, 세무조사 입회까지 편하게 상담 신청해 주세요.
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
                  <a
                    href={siteConfig.naverFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-[#03C75A] hover:bg-[#02B351] text-white font-semibold text-sm transition"
                  >
                    상담 신청
                  </a>
                </div>
              </div>
            </div>

            {/* 우측 스티키 사이드바 (데스크톱 전용 목차 + 빠른 문의) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-5">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  목차 바로가기
                </div>
                <ul className="space-y-2.5 text-sm">
                  {tocItems.map((toc) => (
                    <li key={toc.href}>
                      <a
                        href={toc.href}
                        className="flex items-center justify-between text-slate-700 hover:text-blue-900 font-medium py-1 transition"
                      >
                        <span>{toc.label}</span>
                        <ChevronRightIcon className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-blue-700">
                    {siteConfig.name}
                  </div>
                  <div className="text-base font-extrabold text-slate-900">
                    {siteConfig.representative}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    상속세 신고 및 세무조사 대응 1:1 전담 상담
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <a
                    href={siteConfig.kakaoChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <KakaoIcon className="w-4 h-4" />
                    <span>카카오톡 상담 문의</span>
                  </a>
                  <a
                    href={siteConfig.naverFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#03C75A] hover:bg-[#02B351] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <span>상담 신청 (네이버 폼)</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.tel}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <PhoneIcon className="w-3.5 h-3.5 text-blue-700" />
                    <span>{siteConfig.tel}</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
