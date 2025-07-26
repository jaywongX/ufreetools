export default {
  name: '개인소득세 계산기',
  description: '급여 소득에 대한 세금 및 실수령액 계산',

  // 주요 인터페이스 텍스트
  taxSystem: '세제',

  china: '중국',
  usa: '미국',
  uk: '영국',
  monthlyIncome: '월 소득',
  annualIncome: '연 소득',
  socialSecurity: '사회보험 및 주택공적금',
  socialSecurityAmount: '사회보험 및 주택공적금 금액',
  socialSecurityPercent: '사회보험 및 주택공적금 비율',
  socialSecurityBase: '사회보험 기준액',
  deductions: '특별공제 항목',
  childrenEducation: '자녀 교육',
  continuingEducation: '계속 교육',
  housingLoanInterest: '주택 대출 이자',
  housingRent: '주택 임대료',
  elderlySupport: '노인 부양',
  medicalTreatment: '대형 질병 치료',
  otherDeductions: '기타 공제',
  calculate: '계산',
  reset: '초기화',

  // 결과 영역
  results: '계산 결과',

  taxableIncome: '과세 소득',
  taxRate: '적용 세율',
  quickDeduction: '간이 공제액',
  taxPayable: '납부할 세금',
  afterTaxIncome: '세후 소득',
  effectiveTaxRate: '실효 세율',
  monthlyBreakdown: '월별 상세 내역',

  // 차트 영역
  taxAnalysis: '세금 분석',

  incomeDistribution: '소득 분배',
  income: '소득',
  tax: '세금',
  takeHome: '실수령액',

  // 세율표 영역
  taxBrackets: '세율표',

  bracketRange: '구간 범위',
  rate: '세율',

  // 월별 상세
  month: '월',

  cumulativeIncome: '누적 소득',
  cumulativeDeduction: '누적 공제',
  cumulativeTaxable: '누적 과세 소득',
  cumulativeTax: '누적 세금',
  previousTax: '이전 달 납부 세금',
  currentMonthTax: '이번 달 납부 세금',

  // 도시 선택
  city: '도시',

  firstTier: '1선 도시',
  secondTier: '2선 도시',
  otherCity: '기타 도시',

  // 도구 소개
  aboutTitle: '개인소득세 정보',

  aboutDescription: '개인소득세는 개인이 얻은 각종 과세 소득에 대해 부과하는 세금으로, 대부분의 국가에서 주요 세금 중 하나입니다. 중국의 개인소득세는 초과누진세율을 적용하며, 세율은 3%부터 45%까지 다양하며 소득이 높을수록 적용되는 세율도 높아집니다.',
  howToUseTitle: '계산기 사용 방법',
  howToUseStep1: '1. 세제 선택 (현재 중국 세제 지원)',
  howToUseStep2: '2. 월 소득 또는 연 소득 입력 (자동 변환됨)',
  howToUseStep3: '3. 사회보험 및 주택공적금 금액 입력 또는 비율로 계산 선택',
  howToUseStep4: '4. 각종 특별공제 항목 작성',
  howToUseStep5: '5. "계산" 버튼 클릭하여 결과 확인',
  chinaTaxRulesTitle: '중국 개인소득세 계산 규칙',
  chinaTaxRule1: '기본 공제액: 월 5,000위안',
  chinaTaxRule2: '과세 소득 = 소득 - 사회보험 및 주택공적금 - 특별공제 항목 - 기본 공제액',
  chinaTaxRule3: '개인소득세 = 과세 소득 × 세율 - 간이 공제액',
  deductionExplainTitle: '특별공제 항목 설명',
  childrenEducationExplain: '자녀 교육: 자녀당 월 1,000위안 공제 가능',
  continuingEducationExplain: '계속 교육: 학력 교육 월 400위안; 직업 자격 연 3,600위안',
  housingLoanExplain: '주택 대출 이자: 월 1,000위안',
  housingRentExplain: '주택 임대료: 1선 도시 월 1,500위안; 2선 도시 월 1,100위안; 기타 도시 월 800위안',
  elderlyExplain: '노인 부양: 독자 자녀 월 2,000위안; 비독자 자녀 월 2,000위안 분할',
  medicalExplain: '대형 질병 치료: 연간 의료비 지출 15,000위안 초과 부분, 최대 연 60,000위안',
  taxTipsTitle: '세금 팁',
  taxTip1: '특별공제 항목을 합리적으로 활용하면 세부담을 효과적으로 줄일 수 있습니다',
  taxTip2: '연말 보너스는 별도 과세 또는 종합 소득에 합산하여 과세할 수 있습니다',
  taxTip3: '다수 소득원이 있는 경우 개인소득세를 합산 계산해야 합니다',
  taxTip4: '기업 연금, 상업 건강 보험 등도 일정 한도 내에서 세전 공제 가능',
  taxTip5: '특별공제 항목을 정확히 신고하여 세무 리스크를 피하세요'
};