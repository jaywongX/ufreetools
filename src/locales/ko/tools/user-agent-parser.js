export default {
  name: 'User Agent 파서',
  description: '브라우저 사용자 에이전트 문자열을 분석하여 브라우저, 운영체제 및 기기 정보를 식별합니다',

  input: {
    label: '사용자 에이전트(User-Agent) 문자열',
    placeholder: '사용자 에이전트 문자열을 입력하거나 붙여넣기...'
  },

  actions: {
    parse: '파싱',
    detect: '현재 브라우저 감지',
    clear: '초기화'
  },

  results: {
    title: '분석 결과',
    summary: '요약',
    details: '상세 정보',
    originalUA: '원본 사용자 에이전트 문자열'
  },

  sections: {
    browser: '브라우저',
    os: '운영체제',
    device: '기기',
    other: '기타 정보'
  },

  deviceTypes: {
    mobile: '모바일 기기',
    tablet: '태블릿',
    desktop: '데스크톱'
  },

  fields: {
    name: '이름',
    version: '버전',
    engine: '엔진',
    platform: '플랫폼',
    type: '유형',
    vendor: '제조사',
    model: '모델',
    isMobile: '모바일 기기',
    isTablet: '태블릿',
    isDesktop: '데스크톱'
  },

  messages: {
    parsingError: '사용자 에이전트 문자열 파싱 중 오류 발생',
    emptyInput: '사용자 에이전트 문자열을 입력하세요',
    unknown: '알 수 없음',
    yes: '예',
    no: '아니오'
  },

  tips: {
    description: '사용자 에이전트(User-Agent)는 브라우저가 서버로 전송하는 식별 문자열로, 브라우저, 운영체제 및 기기 정보 등을 포함합니다.',
    useCases: '주로 웹 분석, 브라우저 호환성 처리 및 기기 최적화 등의 시나리오에서 사용됩니다.'
  }
};