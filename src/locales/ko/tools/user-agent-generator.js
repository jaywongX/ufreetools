export default {
  name: 'User-Agent 생성기',
  description: '다양한 브라우저와 기기의 User-Agent 문자열을 생성하여 웹사이트 테스트, 크롤링 및 개발에 활용하세요',

  filters: {
    title: '필터 조건',
    browser: '브라우저',
    os: '운영체제',
    deviceType: '기기 유형'
  },

  browsers: {
    all: '모든 브라우저',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: '알 수 없는 브라우저'
  },

  operatingSystems: {
    all: '모든 시스템',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: '알 수 없는 시스템'
  },

  deviceTypes: {
    all: '모든 기기',
    desktop: '데스크톱',
    mobile: '모바일',
    tablet: '태블릿',
    unknown: '알 수 없는 기기'
  },

  generation: {
    quantity: '생성 수량',
    generateRandom: '랜덤 User-Agent 생성',
    clearResults: '결과 초기화'
  },

  results: {
    title: '생성 결과',
    copyAll: '전체 복사',
    empty: '"랜덤 User-Agent 생성" 버튼을 클릭하여 결과를 생성하세요'
  },

  messages: {
    copied: '클립보드에 복사되었습니다',
    allCopied: '모든 User-Agent가 클립보드에 복사되었습니다',
    copyFailed: '복사 실패, 수동으로 복사해 주세요'
  },

  info: {
    formatTitle: 'User-Agent 형식 설명',
    formatDescription: 'User-Agent 문자열은 일반적으로 브라우저 이름, 버전, 운영체제 및 기기 정보 등을 포함하며 형식은 다음과 같습니다:',
    formatExample: 'Mozilla/5.0 (플랫폼 정보) 엔진 정보 브라우저 정보',
    examplesTitle: '일반적인 User-Agent 예시:',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: '사용 시나리오:',
    useCases: [
      '웹사이트 호환성 테스트',
      '크롤링 및 데이터 수집',
      'API 개발 및 테스트',
      '브라우저 감지 우회',
      '다양한 기기 접근 시뮬레이션'
    ]
  }
};