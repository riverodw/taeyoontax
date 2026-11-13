export const siteConfig = {
  name: "태윤세무회계",
  fullName: "태윤세무회계사무소",
  representative: "오동욱 공인회계사 · 세무사",
  slogan: "세무의 깊이가 다르면, 절세의 결과가 달라집니다.",
  subSlogan: "20년 경력의 공인회계사이자 베스트셀러 저자가 직접 분석하고 책임 관리합니다.",
  address: "부산광역시 연제구 월드컵대로 225-1 우일빌딩 5층",
  locationDetail: "부산지방법원·검찰청 및 지하철 3호선 거제역 인근",
  tel: "051-503-2162", // 대표전화
  email: "riverodw@naver.com",
  kakaoChannelUrl: "http://pf.kakao.com/_nGpLb/chat",
  kakaoProfileUrl: "http://pf.kakao.com/_nGpLb",
  naverFormUrl: "https://form.naver.com/response/CQB7czBJN4i032nNc-VXEQ",
  blogUrl: "https://blog.naver.com/riverodw",
  businessHours: "평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00 / 토, 일, 공휴일 휴무)",
  
  // 대표 세무사 상세 프로필
  profile: {
    name: "오동욱",
    image: "/images/accountant-profile.jpg",
    titles: ["공인회계사 (KICPA)", "세무사 (KACPTA)"],
    greeting: "안녕하십니까, 태윤세무회계 대표 오동욱 회계사/세무사입니다. 20년의 경력과 세법에 대한 깊이 있는 이해를 바탕으로, 항상 고객 여러분의 입장을 최우선으로 생각하여 최고의 서비스를 제공하도록 노력을 다하겠습니다.",
    intro: "2002년 공인회계사 합격 후, 한영회계법인 및 대기업에서 세무, 감사, 컨설팅 업무를 수행하였고 현재 태윤세무회계 대표를 맡고 있습니다.",
    career: [
      "2002년 공인회계사 합격 후, 한영회계법인 및 대기업에서 세무, 감사, 컨설팅 업무 수행",
      "현) 태윤세무회계 대표 공인회계사 · 세무사"
    ],
    activities: [
      "저서 《이렇게 쉬운데 왜 부동산 절세를 하지 않았을까》 집필",
      "저서 《부동산매매사업자 세금 완전정복》 집필",
      "부동산시장 안정을 위한 정책과제와 대응방안 연구 (국토연구원 공동연구)",
      "주간동아, IBK WIN CLASS, 한국일자리신문 등 다수 절세관련 칼럼 기고",
      "세법 관련 다수 강연 및 특강",
      "(前) 재개발/재건축 도시분쟁조정위원 (수영구)",
      "네이버 공식 블로그 《오회계사의 지식창고》 운영"
    ],
    history: [
      "2002년 공인회계사 합격 후, 한영회계법인 및 대기업에서 세무, 감사, 컨설팅 업무 수행",
      "현) 태윤세무회계 대표 공인회계사 · 세무사",
      "저서 《이렇게 쉬운데 왜 부동산 절세를 하지 않았을까》 집필",
      "저서 《부동산매매사업자 세금 완전정복》 집필",
      "부동산시장 안정을 위한 정책과제와 대응방안 연구 (국토연구원 공동연구)",
      "주간동아, IBK WIN CLASS, 한국일자리신문 등 다수 절세관련 칼럼 기고",
      "세법 관련 다수 강연 및 특강",
      "(前) 재개발/재건축 도시분쟁조정위원 (수영구)",
      "네이버 공식 블로그 《오회계사의 지식창고》 운영"
    ],
    books: [
      {
        title: "부동산매매사업자 세금 완전정복",
        desc: "복잡하고 까다로운 부동산 매매사업자의 부가가치세, 종합소득세, 비교과세 체계를 완벽하게 정리한 국내 대표 실전 지침서",
        badge: "부동산 세무 필독서"
      },
      {
        title: "이렇게 쉬운데 왜 부동산절세를 하지 않았을까",
        desc: "양도소득세 비과세·감면부터 증여세 분산, 상속세 방어까지 일반인과 사업자를 위한 쉽고 명쾌한 절세 솔루션",
        badge: "실전 절세 가이드"
      }
    ]
  },

  // 메인 네비게이션 메뉴 (회사 소개 삭제, 전문 서비스 3대 분야로 재구성)
  navItems: [
    {
      title: "대표 회계사",
      href: "/accountant"
    },
    {
      title: "전문 서비스",
      href: "/services",
      subItems: [
        { title: "사업자 세무", href: "/services/business-tax" },
        { title: "부동산 임대업/매매업", href: "/services/property-tax" },
        { title: "상속 · 증여 · 양도", href: "/services/inheritance-tax" }
      ]
    },
    {
      title: "칼럼",
      href: "/column"
    },
    {
      title: "상담 신청",
      href: "/contact"
    },
    {
      title: "비용안내",
      href: "/pricing",
      subItems: [
        { title: "세무기장 보수 기준", href: "/pricing#bookkeeping" },
        { title: "세금 신고대행 수수료", href: "/pricing#filing" },
        { title: "상속 · 증여 · 양도 및 조세불복", href: "/pricing#consulting" },
        { title: "맞춤 견적 문의", href: "http://pf.kakao.com/_nGpLb/chat", external: true }
      ]
    }
  ],

  // 3대 핵심 전문 서비스 상세 목록 (사업자세무, 부동산세무, 상속증여양도)
  services: [
    {
      id: "business-tax",
      title: "사업자 세무",
      summary: "법인 및 개인사업자를 위한 세무기장 및 세금 신고대리",
      desc: "사업자등록부터 장부 기장대리, 부가가치세·종합소득세·법인세 신고대리, 원천세·4대보험 관리까지 사업자의 세무를 체계적으로 지원합니다.",
      href: "/services/business-tax",
      isSpecial: false
    },
    {
      id: "property-tax",
      title: "부동산 임대업/매매업",
      summary: "부동산 세무 저서 집필 저자의 특화된 절세 솔루션",
      desc: "부동산 매매사업자 및 주택·상가 임대사업자를 위한 장부 기장, 부가가치세·종합소득세 신고와 맞춤형 절세 관리를 제공합니다.",
      href: "/services/property-tax",
      isSpecial: false
    },
    {
      id: "inheritance-tax",
      title: "상속 · 증여 · 양도",
      summary: "사전 절세 설계부터 신고 대행, 세무조사 및 조세불복 대응",
      desc: "상속세·증여세·양도소득세 사전 절세 플랜 수립 및 신고 대행부터 해명자료 제출, 세무조사 대응, 조세불복까지 안전하게 자산을 지켜드립니다.",
      href: "/services/inheritance-tax",
      isSpecial: false
    }
  ]
};
