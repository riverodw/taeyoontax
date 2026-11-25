import React from "react";

interface ReviewItem {
  id: string;
  industry: string;
  badgeColor: string;
  author: string;
  comment: string;
}

const reviews: ReviewItem[] = [
  {
    id: "property",
    industry: "부동산 임대업 · 매매업",
    badgeColor: "bg-blue-900 text-white",
    author: "김*현 대표님",
    comment:
      "매매차익 예정신고와 비교과세 검토를 꼼꼼하게 정리해주신 덕분에 예상보다 세부담이 크게 줄었습니다. 자료를 올릴 때마다 대표 세무사님이 직접 확인해주셔서 늘 든든합니다."
  },
  {
    id: "medical",
    industry: "병원 · 동물병원",
    badgeColor: "bg-emerald-800 text-white",
    author: "박*수 원장님",
    comment:
      "개원 초기 과세·면세 매출 구분과 공통매입세액 안분 때문에 막막했는데 하나하나 명확히 짚어주셨습니다. 성실신고 대비 결산 예측도 미리 챙겨주셔서 진료에만 집중할 수 있습니다."
  },
  {
    id: "restaurant",
    industry: "식당 · 카페",
    badgeColor: "bg-amber-700 text-white",
    author: "이*진 대표님",
    comment:
      "오픈 인테리어 부가가치세 조기환급부터 의제매입세액공제, 배달앱 매출 대사까지 놓치는 부분 없이 챙겨주셔서 초기 운영자금에 큰 도움이 됐습니다. 소통도 늘 빨라서 만족스럽습니다."
  },
  {
    id: "academy",
    industry: "학원 · 요가 · 필라테스",
    badgeColor: "bg-indigo-800 text-white",
    author: "최*아 원장님",
    comment:
      "필라테스 기구 구입 부가세 환급과 프리랜서 강사 3.3% 원천세, 현금영수증 의무발행 기준까지 업종에 딱 맞게 안내해주셔서 세무 걱정 없이 센터 운영에 집중하고 있습니다."
  },
  {
    id: "inheritance",
    industry: "상속 · 증여 · 양도",
    badgeColor: "bg-slate-800 text-white",
    author: "정*우 고객님",
    comment:
      "매도 계약 전에 사전 상담을 받길 정말 잘했습니다. 일시적 2주택 비과세 요건과 자녀 사전증여 시기를 정확하게 설계해주셔서 세금을 크게 절감할 수 있었습니다."
  },
  {
    id: "corporate",
    industry: "법인 사업자",
    badgeColor: "bg-cyan-800 text-white",
    author: "강*호 대표님",
    comment:
      "법인전환 이후 장부 기장부터 임직원 4대보험, 법인세 세액감면 검토까지 체계적으로 관리해주십니다. 궁금한 사항을 문의하면 항상 대표 세무사님이 명쾌하게 답변해주셔서 신뢰가 갑니다."
  }
];

function ReviewCard({ item }: { item: ReviewItem }) {
  return (
    <article className="w-[300px] sm:w-[370px] shrink-0 rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between gap-5">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`px-3 py-1 rounded-lg text-xs font-bold ${item.badgeColor}`}
          >
            {item.industry}
          </span>
          <span className="text-sm font-extrabold text-slate-900">
            {item.author}
          </span>
        </div>

        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
          &ldquo;{item.comment}&rdquo;
        </p>
      </div>
    </article>
  );
}

export default function ClientReviewSlider() {
  return (
    <section
      className="py-24 bg-blue-50/40 border-y border-blue-100 overflow-hidden"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-extrabold uppercase tracking-wider">
            CLIENT REVIEWS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            태윤세무회계와 함께한 <br />
            <span className="text-blue-900">고객님들의 생생한 후기</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            다양한 업종의 대표님과 자산가분들이 직접 경험한 태윤세무회계의 세무 관리 후기입니다.
          </p>
        </div>
      </div>

      {/* 왼쪽으로 무한 슬라이딩하는 리뷰 마퀴 트랙 */}
      <div className="relative w-full overflow-hidden">
        {/* 좌우 페이드 오버레이 */}
        <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#f6f9fe] to-transparent" />
        <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#f6f9fe] to-transparent" />

        <div className="animate-review-marquee py-2">
          <div className="flex gap-6 pr-6">
            {reviews.map((item) => (
              <ReviewCard key={`track-1-${item.id}`} item={item} />
            ))}
          </div>
          <div className="flex gap-6 pr-6" aria-hidden="true">
            {reviews.map((item) => (
              <ReviewCard key={`track-2-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 px-6 text-center text-xs text-slate-500">
        ※ 실제 상담 및 기장 관리 사례를 바탕으로 작성되었으며, 개인정보 보호를 위해 고객 성함 일부를 *표 처리하였습니다.
      </p>
    </section>
  );
}
