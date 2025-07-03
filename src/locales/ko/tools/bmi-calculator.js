export default {
  name: 'BMI 계산기',
  description: '체질량 지수(BMI)를 계산하고 체중 상태를 평가하세요',
  
  // 주요 인터페이스 텍스트
  height: '키',
  weight: '체중',
  calculate: 'BMI 계산',
  reset: '초기화',
  yourBmi: '당신의 BMI 값',
  bmiCategory: 'BMI 범주',
  
  // 단위 선택
  unitSystem: '단위 시스템',
  metric: '미터법 (cm/kg)',
  imperial: '영미식 (피트/파운드)',
  cm: '센티미터',
  ft: '피트',
  in: '인치',
  kg: '킬로그램',
  lbs: '파운드',
  
  // BMI 범주
  underweight: '저체중',
  normalWeight: '정상 체중',
  overweight: '과체중',
  obesity: '비만',
  severeObesity: '고도 비만',
  
  // 범주 설명
  underweightDesc: 'BMI 18.5 미만',
  normalWeightDesc: 'BMI 18.5 ~ 24.9',
  overweightDesc: 'BMI 25 ~ 29.9',
  obesityDesc: 'BMI 30 ~ 34.9',
  severeObesityDesc: 'BMI 35 이상',
  
  // 결과 설명
  resultPrefix: '당신의 BMI 값은',
  resultSuffix: '이며, 이는',
  
  // 도구 소개
  aboutTitle: 'BMI 계산기 정보',
  aboutDescription: 'BMI(체질량 지수)는 체중과 키의 비율을 나타내는 지표입니다. 이 도구는 키와 체중을 기반으로 BMI를 계산하고 해당 건강 평가를 제공합니다.',
  
  whatIsTitle: 'BMI란 무엇인가요?',
  whatIsDescription: 'BMI(체질량 지수)는 체중(kg)을 키(m)의 제곱으로 나누어 계산합니다. BMI 값은 건강한 체중 범위에 있는지 평가하는 데 사용되며, 국제적으로 과체중 또는 저체중을 평가하는 표준입니다.',
  
  howToCalculateTitle: 'BMI 계산 방법',
  metricFormula: '미터법 공식: BMI = 체중(kg) / 키(m)²',
  imperialFormula: '영미식 공식: BMI = 체중(lbs) × 703 / 키(in)²',
  
  interpretationTitle: 'BMI 값 해석',
  interpretationDesc: 'BMI 값은 다음과 같은 체중 범주에 해당합니다:',
  
  limitationsTitle: 'BMI의 한계',
  limitation1: 'BMI는 체지방률, 근육량 및 뼈 밀도의 차이를 고려하지 않습니다',
  limitation2: '운동선수, 임산부 및 어린이 평가에는 적합하지 않습니다',
  limitation3: '체내 지방 분포를 나타내지 않습니다',
  limitation4: '인종, 연령 및 성별 차이를 고려하지 않습니다',
  
  tipsTitle: '건강한 체중을 위한 팁',
  tip1: '충분한 단백질, 과일 및 전곡을 포함한 균형 잡힌 식단',
  tip2: '주당 최소 150분의 중간 강도 유산소 운동',
  tip3: '장시간 앉아 있는 것을 피하고 일상적인 활동 증가',
  tip4: '충분한 수면과 수분 섭취',
  tip5: '비정상적인 BMI 값의 경우 의사 또는 영양사와 상담',
  
  emptyStateMessage: '키와 체중을 입력하고 "BMI 계산"을 클릭하세요'
};