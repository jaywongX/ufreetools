export default {
  name: '대출 계산기',
  description: '주택담보대출, 자동차 대출 및 개인 대출의 월 상환액, 총 이자 및 상환 일정 계산',

  // 메인 인터페이스 텍스트
  loanType: '대출 유형',

  housingLoan: '주택담보대출',
  carLoan: '자동차 대출',
  personalLoan: '개인 대출',
  loanAmount: '대출 금액',
  loanTerm: '대출 기간',
  interestRate: '연이율',
  paymentMethod: '상환 방식',
  equalPrincipalAndInterest: '원리금균등상환',
  equalPrincipal: '원금균등상환',
  calculate: '계산하기',
  reset: '초기화',
  tip: '먼저 상환 계획을 계산하세요',
  years: '년',
  months: '개월',
  amount: '금액',
  currency: '통화',
  CNY: '중국 위안 (¥)',
  USD: '미국 달러 ($)',
  EUR: '유로 (€)',
  JPY: '일본 엔 (¥)',
  GBP: '영국 파운드 (£)',

  // 결과 영역
  results: '계산 결과',

  monthlyPayment: '월 상환액',
  firstMonthPayment: '첫 달 상환액',
  lastMonthPayment: '마지막 달 상환액',
  totalInterest: '총 이자',
  totalPayment: '총 상환액',
  interestRatio: '이자 비율',

  // 상환 계획
  paymentSchedule: '상환 일정',

  downloadExcel: 'Excel로 내보내기',
  paymentNo: '회차',
  paymentDate: '상환 일자',
  principal: '원금',
  interest: '이자',
  payment: '상환액',
  remainingPrincipal: '잔여 원금',

  // 차트
  paymentChart: '상환 분석 차트',

  principalAndInterest: '원금과 이자 비교',
  monthlyPaymentTrend: '월 상환액 추이',

  // 도구 소개 부분
  aboutTitle: '대출 계산기 정보',

  aboutDescription: '대출 계산기는 주택담보대출, 자동차 대출 및 개인 대출 등 다양한 시나리오에서 대출 비용을 명확히 이해할 수 있도록 도와주는 도구입니다.',
  featuresTitle: '주요 기능',
  feature1: '원리금균등상환과 원금균등상환 두 가지 상환 방식 지원',
  feature2: '월 상환액, 총 이자 및 총 상환액 계산',
  feature3: '상세한 상환 일정표 생성',
  feature4: '원금과 이자 분포를 직관적인 차트로 표시',
  feature5: '다양한 통화 단위 지원',
  usageTitle: '사용 방법',
  usageStep1: '대출 유형 선택(주택담보대출, 자동차 대출 또는 개인 대출)',
  usageStep2: '대출 금액, 기간 및 연이율 입력',
  usageStep3: '상환 방식 선택(원리금균등상환 또는 원금균등상환)',
  usageStep4: '"계산하기" 버튼 클릭하여 상세 정보 확인',
  usageStep5: '상환 일정표와 차트 분석 확인',
  explanationTitle: '상환 방식 설명',
  explanationEqualPayment: '원리금균등상환: 매월 동일한 금액을 상환하지만, 시간이 지남에 따라 이자 부분은 감소하고 원금 부분은 증가합니다.',
  explanationEqualPrincipal: '원금균등상환: 매월 동일한 원금을 상환하며, 이자는 잔여 원금이 감소함에 따라 줄어들어 월 상환액이 점차 감소합니다.',
  tipsTitle: '사용 팁',
  tip1: '대출 기간을 연장하면 월 상환액은 줄어들지만 총 이자 지출은 증가합니다',
  tip2: '원금균등상환 방식은 원리금균등상환보다 총 이자 지출이 적지만 초기 월 상환액 부담이 큽니다',
  tip3: '대출 초기에 특히 조기 상환하면 이자 지출을 줄일 수 있습니다',
  tip4: '이 도구를 사용하여 다양한 대출 옵션을 비교하고 재정 상황에 가장 적합한 선택을 하세요'
};