export default {
  name: '여행 예산 플래너',
  description: '여행 예산을 계획하고 계산하여 여행 비용을 쉽게 관리하세요',
  
  // 주요 인터페이스 요소
  planYourTrip: '여행 계획하기',
  destination: '목적지',
  startDate: '시작 날짜',
  endDate: '종료 날짜',
  travelers: '여행자 수',
  currency: '표시 통화',
  tripDuration: '여행 기간(일)',
  totalBudget: '총 예산',
  perPersonBudget: '인당 예산',
  perDayBudget: '일일 예산',
  
  // 버튼 및 작업
  calculate: '예산 계산',
  reset: '초기화',
  addExpense: '지출 항목 추가',
  removeExpense: '제거',
  saveAsPDF: 'PDF로 저장',
  
  // 카테고리 제목
  categories: {
    transport: '교통',
    accommodation: '숙박',
    food: '식사',
    activities: '활동 및 관광지',
    shopping: '쇼핑',
    misc: '기타 비용',
    emergency: '비상 예비금'
  },
  
  // 교통 옵션
  transport: {
    title: '교통 비용',
    flight: '항공권',
    train: '기차',
    bus: '버스',
    car: '차량 렌트/연료',
    taxi: '택시/라이드셰어링',
    publicTransport: '대중교통',
    other: '기타 교통'
  },
  
  // 숙박 옵션
  accommodation: {
    title: '숙박 비용',
    hotel: '호텔',
    hostel: '호스텔',
    apartment: '게스트하우스/아파트',
    camping: '캠핑',
    other: '기타 숙박'
  },
  
  // 식사 옵션
  food: {
    title: '식사 비용',
    restaurants: '레스토랑 식사',
    streetFood: '길거리 음식',
    groceries: '식료품 구매',
    drinks: '음료/주류',
    other: '기타 식사'
  },
  
  // 활동 옵션
  activities: {
    title: '활동 및 관광지',
    attractions: '관광지 입장료',
    tours: '가이드/단체 활동',
    entertainment: '엔터테인먼트',
    other: '기타 활동'
  },
  
  // 기타 비용
  misc: {
    title: '기타 비용',
    insurance: '여행 보험',
    visa: '비자 비용',
    souvenirs: '기념품',
    internet: '인터넷 비용',
    tips: '팁',
    other: '기타 잡비'
  },
  
  // 테이블 제목
  table: {
    category: '카테고리',
    description: '설명',
    amount: '금액',
    actions: '작업'
  },
  
  // 통계 및 분석
  analysis: {
    title: '예산 분석',
    summary: '예산 요약',
    breakdown: '지출 세부 내역',
    distribution: '예산 분포',
    dailyAverage: '일일 평균',
    suggestions: '예산 제안'
  },
  
  // 통화
  currencies: {
    CNY: '위안화 (¥)',
    USD: '미국 달러 ($)',
    EUR: '유로 (€)',
    JPY: '일본 엔 (¥)',
    GBP: '영국 파운드 (£)',
    KRW: '대한민국 원 (₩)',
    AUD: '호주 달러 ($)',
    CAD: '캐나다 달러 ($)',
    THB: '태국 바트 (฿)',
    SGD: '싱가포르 달러 ($)'
  },
  
  // 일반적인 목적지
  destinations: {
    domestic: '국내 목적지',
    international: '국제 목적지',
    popularCities: '인기 도시',
    beijing: '베이징',
    shanghai: '상하이',
    guangzhou: '광저우',
    shenzhen: '선전',
    hangzhou: '항저우',
    chengdu: '청두',
    xian: '시안',
    sanya: '산야',
    tokyo: '도쿄',
    osaka: '오사카',
    seoul: '서울',
    bangkok: '방콕',
    singapore: '싱가포르',
    paris: '파리',
    london: '런던',
    newyork: '뉴욕',
    sydney: '시드니',
    custom: '사용자 정의 목적지'
  },
  
  // 팁 및 제안
  tips: {
    general: '일반적인 조언',
    saveMoney: '예산 절약 제안',
    localCurrency: '현지 통화 팁',
    emergencyFund: '총 예산의 10-15%를 비상 예비금으로 남겨두는 것이 좋습니다',
    transport: '항공권을 미리 예약하면 일반적으로 비용을 절약할 수 있습니다',
    accommodation: '주방이 있는 숙소를 고려하면 식사 비용을 줄일 수 있습니다',
    food: '국제 체인 레스토랑보다 현지 저렴한 음식을 시도하는 것이 더 경제적입니다',
    planning: '상세한 일일 일정을 세우면 예산을 통제하는 데 도움이 됩니다',
    extraCosts: '팁, 인터넷 및 교통 카드와 같은 소액 비용을 고려하는 것을 잊지 마세요'
  },
  
  // 메시지
  messages: {
    success: '예산이 성공적으로 계산되었습니다',
    error: '모든 필수 항목을 작성해 주세요',
    dateError: '종료 날짜는 시작 날짜보다 뒤여야 합니다',
    saved: '예산 계획이 저장되었습니다',
    deleted: '예산 계획이 삭제되었습니다',
    highBudget: '예산이 해당 목적지의 평균보다 높아 보입니다',
    lowBudget: '예산이 낮을 수 있으므로 모든 필수 지출을 포함했는지 확인하세요'
  },
  
  // 푸터 소개 정보
  about: {
    title: '여행 예산 플래너 정보',
    description: '여행 예산 플래너는 여행 비용을 관리하는 데 도움이 되는 도구로, 여행을 즐겁고 경제적으로 만들 수 있습니다. 다양한 지출을 상세히 계획함으로써 여행 중의 재정적 스트레스를 피하고 여행 경험을 충분히 즐길 수 있습니다.',
    
    featuresTitle: '주요 기능',
    feature1: '여행 목적지, 기간 및 인원에 따라 합리적인 예산 수립',
    feature2: '교통, 숙박, 식사, 활동 등 다양한 여행 지출 분류',
    feature3: '예산 분석 및 시각화 제공',
    feature4: '다양한 통화 표시 및 변환 지원',
    feature5: '여행 비용 절감을 위한 실용적인 제안 제공',
    feature6: '예산 계획 내보내기 및 저장 가능',
    
    benefitsTitle: '사용 이점',
    benefit1: '여행 중 예산 초과 방지',
    benefit2: '다른 여행 요소에 자금을 합리적으로 분배',
    benefit3: '여행 재정적 스트레스 감소',
    benefit4: '여행 계획 효율성 향상',
    benefit5: '다양한 여행 스타일과 예산 요구 사항에 적응',
    
    tipsTitle: '예산 계획 팁',
    tip1: '여행 목적지의 소비 수준에 따라 예산을 조정하세요',
    tip2: '예상치 못한 상황을 대비해 10-15%의 자금을 비상용으로 남겨두세요',
    tip3: '성수기가 아닌 시기에 여행하면 숙박 및 교통 비용을 크게 절약할 수 있습니다',
    tip4: '해외에서 신용카드를 사용할 때 수수료를 잘 알아두세요',
    tip5: '가능한 비상 상황에 대비해 여행 보험을 구입하는 것을 고려하세요'
  }
};
