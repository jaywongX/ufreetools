export default {
  name: '도장 생성기',
  description: '온라인에서 다양한 도장 이미지 제작, 회사 공인도장, 개인 도장 등 디지털 도장 생성',

  // 메인 인터페이스
  text: '도장 글자',

  textPlaceholder: '주변에 표시할 글자를 입력하세요',
  centerText: '중심 글자',
  centerTextPlaceholder: '중심에 표시할 글자 또는 기호 입력',
  font: '글꼴 선택',
  shape: '도장 모양',
  size: '도장 크기',
  color: '도장 색상',
  generate: '도장 생성',
  download: '이미지 다운로드',
  reset: '초기화',
  preview: '도장 미리보기',
  previewPlaceholder: '"도장 생성" 버튼을 클릭하여 효과 미리보기',
  bottomText: '하단 글자',
  bottomTextPlaceholder: '하단에 표시할 글자 입력',
  centerSymbol: '중심 기호',
  centerImage: '중심 패턴 업로드',
  template: '도장 템플릿',
  centerSymbolSize: '중심 기호 크기',
  exportFormat: '내보내기 형식',
  lineWidth: '선 두께',
  defaultSealText: '어떤어떤 유한회사',
  defaultBottomText: '계약 전용 도장',
  width: '너비',
  height: '높이',
  agingEffect: '노화 효과',
  colorHex: '16진수 색상 값',
  customColor: '사용자 정의 색상',

  // 글꼴 옵션
  fonts: {
    simsun: '명조체',
    kaiti: '굴림체',
    simhei: '돋움체',
    yahei: '마이크로소프트 야헤이',
    stxingkai: '화문행서체',
    stzhongsong: '화문중송체',
    stfangsong: '화문방송체',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // 모양 옵션
  shapes: {
    circle: '원형',
    ellipse: '타원형',
    square: '사각형'
  },

  // 색상 옵션
  colors: {
    red: '빨강',
    darkRed: '진한 빨강',
    blue: '파랑',
    navy: '네이비',
    green: '초록',
    darkGreen: '진한 초록',
    purple: '보라',
    magenta: '자홍색',
    brown: '갈색',
    black: '검정',
    custom: '사용자 정의 색상'
  },

  // 사용 가이드
  howToUse: '사용 설명',

  instructions: {
    step1: '도장 주변에 표시할 글자를 입력하세요. 회사 이름, 개인 이름 등',
    step2: '도장 중심에 표시할 글자 또는 패턴을 선택하세요. 별표, "장"자 또는 기타 상징적인 기호 등',
    step3: '도장 모양, 크기 및 색상을 조정하고 미리보기',
    step4: '만족스러우면 "이미지 다운로드" 버튼을 클릭하여 사용자 정의 도장 저장'
  },

  templates: {
    custom: '사용자 정의',
    company: '회사 공인도장',
    contract: '계약 전용 도장',
    finance: '재무 전용 도장',
    legal: '법인 명의 도장',
    personal: '개인 도장'
  }
};