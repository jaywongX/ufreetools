export default {
  name: '환율 계산기',
  description: '다양한 통화 간 빠르고 정확한 환율 변환 및 조회',
  
  // 메인 인터페이스 텍스트
  amount: '금액',
  from: '원래 통화',
  to: '변환 통화',
  convert: '변환',
  result: '변환 결과',
  swap: '통화 교환',
  rate: '현재 환율',
  lastUpdated: '마지막 업데이트',
  addCurrency: '통화 추가',
  
  // 기록
  history: '변환 기록',
  clearHistory: '기록 지우기',
  noHistory: '변환 기록이 없습니다',
  
  // 통화
  currencies: {
    USD: '미국 달러',
    EUR: '유로',
    JPY: '일본 엔',
    GBP: '영국 파운드',
    AUD: '호주 달러',
    CAD: '캐나다 달러',
    CHF: '스위스 프랑',
    CNY: '중국 위안',
    HKD: '홍콩 달러',
    NZD: '뉴질랜드 달러',
    SEK: '스웨덴 크로나',
    KRW: '대한민국 원',
    SGD: '싱가포르 달러',
    NOK: '노르웨이 크로네',
    MXN: '멕시코 페소',
    INR: '인도 루피',
    RUB: '러시아 루블',
    ZAR: '남아프리카 랜드',
    TRY: '터키 리라',
    BRL: '브라질 레알',
    TWD: '신대만 달러',
    DKK: '덴마크 크로네',
    PLN: '폴란드 즐로티',
    THB: '태국 바트',
    IDR: '인도네시아 루피아',
    MYR: '말레이시아 링깃',
    PHP: '필리핀 페소'
  },
  
  // 오류 메시지
  errors: {
    invalidAmount: '유효한 금액을 입력하세요',
    apiError: '환율 데이터를 가져오는 중 오류 발생',
    samecurrencies: '변환을 위해 다른 통화를 선택하세요'
  },
  
  // 팁 및 정보
  tips: {
    offline: '오프라인 모드: 최근 캐시된 환율 데이터 표시 중',
    refreshing: '환율 데이터 업데이트 중...'
  },
  
  // 과거 환율 보기
  historicalRates: '과거 환율',
  dateRange: '날짜 범위',
  from7days: '지난 7일',
  from30days: '지난 30일',
  from90days: '지난 90일',
  customRange: '사용자 지정 범위',
  startDate: '시작 날짜',
  endDate: '종료 날짜',
  viewChart: '차트 보기',
  
  // 설정
  settings: '설정',
  decimalPlaces: '소수 자릿수',
  autoUpdate: '환율 자동 업데이트',
  defaultCurrency: '기본 통화',
  
  // 도구 소개
  aboutTitle: '환율 계산기 소개',
  aboutDescription: '환율 계산기는 간단하면서도 효율적인 통화 변환 앱으로, 다양한 통화 간 빠르고 정확한 변환을 도와줍니다. 여행 계획, 국제 거래 또는 투자 연구에 이르기까지 이 도구는 모든 요구 사항을 충족시킬 수 있습니다.',
  
  featuresTitle: '주요 기능',
  feature1: '30개 이상의 주요 통화에 대한 환율 변환 지원',
  feature2: '실시간 최신 시장 환율 데이터 제공',
  feature3: '빠르고 직관적인 통화 변환 계산',
  feature4: '과거 환율 데이터 조회 및 차트 표시',
  feature5: '변환 기록 저장으로 편리한 재사용',
  feature6: '표시 설정 및 기본 통화 사용자 지정 가능',
  
  howToUseTitle: '사용 방법',
  howToUseStep1: '1. 변환할 금액 입력',
  howToUseStep2: '2. 원래 통화 선택(어떤 통화에서 변환할지)',
  howToUseStep3: '3. 대상 통화 선택(어떤 통화로 변환할지)',
  howToUseStep4: '4. "변환" 버튼 클릭하여 결과 확인',
  howToUseStep5: '5. "통화 교환" 버튼으로 빠르게 통화 방향 전환 가능',
  
  tipsTitle: '사용 팁',
  tip1: '환율 데이터는 매시간 업데이트되어 비교적 정확한 변환 결과 제공',
  tip2: '자주 사용하는 통화를 즐겨찾기 목록에 추가하여 빠르게 접근',
  tip3: '과거 차트 기능으로 통화 환율 추세 분석',
  tip4: '변환 결과는 자동으로 기록에 저장되어 나중에 확인 가능',
  tip5: '오프라인 상태에서는 최근 캐시된 환율 데이터를 사용하여 계산'
};