export interface NavSubItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface NavItem {
  title: string;
  href: string;
  subItems?: NavSubItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  desc: string;
  href: string;
  highlights: string[];
  secondaryLinks?: {
    label: string;
    href: string;
  }[];
  isSpecial: boolean;
}

export interface BusinessIndustryItem {
  id: string;
  title: string;
  badge: string;
  summary: string;
  href: string;
}

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
        badge: "부동산 세무 필독서",
        image: "/images/book-property-tax.jpg"
      },
      {
        title: "이렇게 쉬운데 왜 부동산절세를 하지 않았을까",
        desc: "양도소득세 비과세·감면부터 증여세 분산, 상속세 방어까지 일반인과 사업자를 위한 쉽고 명쾌한 절세 솔루션",
        badge: "실전 절세 가이드",
        image: "/images/book-easy-tax.jpg"
      }
    ]
  },

  // 메인 네비게이션 메뉴 (5대 메뉴: 대표 회계사, 사업자 세무, 상속 · 증여 · 양도, 칼럼, 비용안내)
  navItems: [
    {
      title: "대표 회계사",
      href: "/accountant"
    },
    {
      title: "사업자 세무",
      href: "/services/business-tax",
      subItems: [
        { title: "부동산 임대업 · 매매업", href: "/services/property-tax" },
        { title: "병원 · 동물병원", href: "/services/medical-tax" },
        { title: "식당 · 카페", href: "/services/restaurant-tax" },
        { title: "학원", href: "/services/academy-tax" }
      ]
    },
    {
      title: "상속 · 증여 · 양도",
      href: "/services/inheritance-tax",
      subItems: [
        { title: "상속세 신고 · 조사 대응", href: "/services/inheritance-tax#inheritance" },
        { title: "증여세 절세 플랜 · 신고", href: "/services/inheritance-tax#gift" },
        { title: "양도소득세 절세 · 신고", href: "/services/inheritance-tax#capital-gains" },
        { title: "세무조사 대응 · 조세불복", href: "/services/inheritance-tax#appeal" }
      ]
    },
    {
      title: "칼럼",
      href: "/column"
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
  ] as NavItem[],

  // 사업자 세무 업종별 특화 4대 분야
  businessTaxIndustries: [
    {
      id: "property-tax",
      title: "부동산 임대업 · 매매업",
      badge: "부동산 세무 특화",
      summary: "매매차익 예정신고, 비교과세 검토, 상가·주택 임대사업자 세무 및 부가세 조기환급",
      href: "/services/property-tax"
    },
    {
      id: "medical-tax",
      title: "병원 · 동물병원",
      badge: "의료 · 수의업 특화",
      summary: "과·면세 겸영 안분계산, 성실신고확인 대응, 개원 자금·장비 리스 및 진료용역 면세 관리",
      href: "/services/medical-tax"
    },
    {
      id: "restaurant-tax",
      title: "식당 · 카페",
      badge: "외식 · F&B 특화",
      summary: "의제매입세액공제, 배달앱·POS 매출 대사, 창업중소기업 세액감면 및 인건비 관리",
      href: "/services/restaurant-tax"
    },
    {
      id: "academy-tax",
      title: "학원",
      badge: "교육 · 스튜디오 특화",
      summary: "면세 학원(2월 사업장현황신고)과 요가·필라테스 등 과세 학원(부가세 조기환급) 구분 관리 및 강사 인건비·현금영수증 대응",
      href: "/services/academy-tax"
    }
  ] as BusinessIndustryItem[],

  // 2대 핵심 세무 서비스 상세 목록 (사업자 세무, 상속 · 증여 · 양도)
  services: [
    {
      id: "business-tax",
      title: "사업자 세무",
      summary: "업종별 특화 절세 관리부터 법인 · 개인사업자 세무기장 및 신고대리까지",
      desc: "부동산 임대·매매업, 병원·동물병원, 식당·카페, 학원 등 업종별 핵심 세무 리스크를 정밀 관리하고, 장부 기장대리·부가세·종합소득세·법인세 신고와 원천세·4대보험까지 체계적으로 지원합니다.",
      href: "/services/business-tax",
      highlights: [
        "부동산 임대업·매매업, 병원·동물병원, 식당·카페, 학원 업종별 특화 세무",
        "법인 · 개인사업자 세무기장 및 원천세 · 4대보험 관리",
        "부가가치세 · 사업장현황신고 · 종합소득세 · 법인세 신고대리"
      ],
      secondaryLinks: [
        { label: "부동산 임대업 · 매매업", href: "/services/property-tax" },
        { label: "병원 · 동물병원", href: "/services/medical-tax" },
        { label: "식당 · 카페", href: "/services/restaurant-tax" },
        { label: "학원", href: "/services/academy-tax" }
      ],
      isSpecial: false
    },
    {
      id: "inheritance-tax",
      title: "상속 · 증여 · 양도",
      summary: "사전 절세 설계부터 신고 대행, 세무조사 및 조세불복 대응",
      desc: "상속세·증여세·양도소득세 사전 절세 플랜 수립 및 신고 대행부터 해명자료 제출, 세무조사 대응, 조세불복까지 안전하게 자산을 지켜드립니다.",
      href: "/services/inheritance-tax",
      highlights: [
        "상속세 신고 · 감정평가 연계 · 세무조사 대응",
        "증여세 10년 주기 사전증여 · 부담부증여 플랜",
        "양도소득세 비과세 · 다주택 중과 검토 및 신고",
        "해명자료 제출 · 세무조사 대응 및 조세불복"
      ],
      isSpecial: false
    }
  ] as ServiceItem[]
};
