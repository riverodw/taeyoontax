import React from "react";
import { KakaoIcon } from "@/components/ui/icons";

interface ChatMessage {
  sender: "client" | "taeyun";
  text: string;
  time: string;
}

interface FeedbackCase {
  id: string;
  category: string;
  badgeColor: string;
  clientName: string;
  roomTitle: string;
  dateLabel: string;
  messages: ChatMessage[];
}

const feedbackCases: FeedbackCase[] = [
  {
    id: "property",
    category: "부동산 임대업 · 매매업",
    badgeColor: "bg-blue-900 text-white",
    clientName: "김○○ 대표님",
    roomTitle: "태윤세무회계 업무 채팅방",
    dateLabel: "부동산 매매차익 예정신고 완료 후",
    messages: [
      {
        sender: "client",
        text: "대표님, 이번에 매매차익 예정신고랑 비교과세 정리해주신 덕분에 예상보다 세금이 훨씬 줄었습니다. 매번 자료 올리면 대표님이 직접 확인해주셔서 정말 든든합니다.",
        time: "오후 2:18"
      },
      {
        sender: "taeyun",
        text: "감사합니다 대표님! 다음 물건 계약 전에도 비교과세 미리 시뮬레이션해 드릴 테니 언제든 편하게 채팅방에 남겨주세요.",
        time: "오후 2:24"
      }
    ]
  },
  {
    id: "medical",
    category: "병원 · 동물병원",
    badgeColor: "bg-emerald-800 text-white",
    clientName: "박○○ 원장님",
    roomTitle: "태윤세무회계 업무 채팅방",
    dateLabel: "종합소득세 결산 보고 후",
    messages: [
      {
        sender: "client",
        text: "개원하고 과세·면세 구분 때문에 막막했는데 하나하나 짚어주시고, 5월 종소세도 성실신고 대비해서 미리 챙겨주셔서 정말 감사합니다!",
        time: "오전 11:05"
      },
      {
        sender: "taeyun",
        text: "원장님께서 진료에만 집중하실 수 있도록 하반기 결산 예측도 미리 정리해서 채팅방으로 공유드리겠습니다.",
        time: "오전 11:12"
      }
    ]
  },
  {
    id: "restaurant",
    category: "식당 · 카페",
    badgeColor: "bg-amber-700 text-white",
    clientName: "이○○ 대표님",
    roomTitle: "태윤세무회계 업무 채팅방",
    dateLabel: "부가가치세 조기환급 완료 후",
    messages: [
      {
        sender: "client",
        text: "오픈 인테리어 부가세 조기환급이랑 의제매입세액공제까지 꼼꼼하게 챙겨주셔서 초기 자금에 큰 도움이 됐습니다. 카톡방 답변도 늘 빠르셔서 좋아요.",
        time: "오후 4:42"
      },
      {
        sender: "taeyun",
        text: "도움이 되셨다니 다행입니다 대표님! 직원·알바 인건비 변동 사항 있으실 때도 채팅방에 바로 남겨주시면 바로 처리해 드리겠습니다.",
        time: "오후 4:48"
      }
    ]
  },
  {
    id: "inheritance",
    category: "상속 · 증여 · 양도",
    badgeColor: "bg-slate-800 text-white",
    clientName: "정○○ 고객님",
    roomTitle: "태윤세무회계 1:1 상담",
    dateLabel: "양도 · 사전증여 절세 설계 후",
    messages: [
      {
        sender: "client",
        text: "매도 계약 전에 상담받길 정말 잘했습니다. 일시적 2주택 비과세 요건이랑 자녀 사전증여 시기를 딱 맞춰주셔서 세금을 크게 아꼈습니다. 정말 감사드립니다.",
        time: "오후 3:31"
      },
      {
        sender: "taeyun",
        text: "계약 전 미리 상담 주신 덕분에 가장 유리한 일정으로 설계할 수 있었습니다. 잔금 후 신고까지 끝까지 책임지고 마무리하겠습니다.",
        time: "오후 3:36"
      }
    ]
  }
];

export default function KakaoFeedbackSection() {
  return (
    <section
      className="py-24 bg-blue-50/40 border-y border-blue-100"
      id="feedback"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FEE500] text-[#191919] text-xs font-extrabold tracking-wide shadow-xs">
            <KakaoIcon className="w-3.5 h-3.5" />
            <span>REAL CLIENT FEEDBACK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            대표님과 자산가들이 보내주신 <br />
            <span className="text-blue-900">생생한 카카오톡 피드백</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            대표 세무사와 담당자가 함께하는 전담 업무 채팅방을 통해 신속하고 명확한 세무 소통을 이어가고 있습니다.
          </p>
        </div>

        {/* 2x2 카톡 대화 피드백 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
          {feedbackCases.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* 카톡방 상단 헤더 바 */}
              <div className="px-5 py-3.5 bg-white border-b border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 ${item.badgeColor}`}
                  >
                    {item.category}
                  </span>
                  <span className="text-sm font-bold text-slate-800 truncate">
                    {item.clientName}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-400 shrink-0">
                  {item.roomTitle}
                </span>
              </div>

              {/* 카톡 채팅창 본문 */}
              <div className="flex-1 p-5 sm:p-6 bg-[#BACEE0] space-y-4">
                {/* 중앙 날짜/상황 칩 */}
                <div className="flex justify-center">
                  <span className="px-3 py-1 rounded-full bg-slate-900/15 text-slate-800 text-[11px] font-semibold">
                    {item.dateLabel}
                  </span>
                </div>

                {/* 말풍선 리스트 */}
                <div className="space-y-4">
                  {item.messages.map((msg, idx) =>
                    msg.sender === "client" ? (
                      <div key={idx} className="flex items-start gap-2.5">
                        {/* 고객 프로필 아이콘 */}
                        <div className="w-9 h-9 rounded-2xl bg-white/90 text-slate-500 font-bold text-xs flex items-center justify-center shrink-0 shadow-xs border border-white">
                          {item.clientName.slice(0, 1)}
                        </div>
                        <div className="space-y-1 max-w-[82%]">
                          <div className="text-xs font-semibold text-slate-800 pl-0.5">
                            {item.clientName}
                          </div>
                          <div className="flex items-end gap-1.5">
                            <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white text-slate-900 text-sm sm:text-[15px] leading-relaxed shadow-xs">
                              {msg.text}
                            </div>
                            <span className="text-[11px] text-slate-700/80 shrink-0 pb-0.5">
                              {msg.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={idx}
                        className="flex items-end justify-end gap-1.5"
                      >
                        <span className="text-[11px] text-slate-700/80 shrink-0 pb-0.5">
                          {msg.time}
                        </span>
                        <div className="max-w-[82%] px-4 py-3 rounded-2xl rounded-tr-sm bg-[#FEE500] text-[#191919] text-sm sm:text-[15px] font-medium leading-relaxed shadow-xs">
                          {msg.text}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 안내 문구 */}
        <p className="mt-8 text-center text-xs text-slate-500">
          ※ 고객님들과의 실제 업무 소통 및 상담 사례를 바탕으로 구성한 샘플 피드백이며, 개인정보 보호를 위해 성함 등은 익명 처리하였습니다.
        </p>
      </div>
    </section>
  );
}
