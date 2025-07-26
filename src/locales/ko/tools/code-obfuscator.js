export default {
  name: '코드 난독화 도구',
  description: 'JavaScript 및 CSS 코드를 난독화하여 보안 강화 및 지적 재산 보호',

  languages: {
    title: '언어 선택',
    javascript: 'JavaScript',
    css: 'CSS'
  },

  options: {
    title: '난독화 옵션',
    javascript: {
      compact: '압축 출력 (공백 제거)',
      controlFlowFlattening: '제어 흐름 평탄화',
      deadCodeInjection: '데드 코드 삽입',
      debugProtection: '디버그 보호',
      selfDefending: '자체 방어 (포맷팅 방지)',
      stringArray: '문자열 배열',
      renameGlobals: '전역 변수 이름 변경',
      renameProperties: '속성 이름 변경',
      mangle: '변수 난독화',
      stringArrayEncoding: '문자열 배열 인코딩',
      stringArrayThreshold: '문자열 배열 임계값',
      unicodeEscapeSequence: '유니코드 이스케이프 시퀀스'
    },
    css: {
      compact: '압축 출력',
      renameSelectors: '선택자 이름 변경',
      preserveImportant: '!important 유지',
      restructure: '규칙 재구성',
      keepVendorPrefixes: '브라우저 접두사 유지',
      removeComments: '주석 제거'
    }
  },

  input: {
    title: '코드 입력',
    placeholder: '난독화할 코드를 여기에 입력하세요...',
    clear: '지우기',
    paste: '붙여넣기',
    upload: '파일 업로드',
    inputObfuscatorCode: '난독화할 코드를 입력해 주세요',
  },

  output: {
    title: '난독화 결과',
    placeholder: '난독화된 코드가 여기에 표시됩니다...',
    copy: '복사',
    download: '다운로드',
    stats: {
      original: '원본 크기',
      obfuscated: '난독화 크기',
      ratio: '압축률'
    },
    increase: '증가',
    decrease: '감소',
  },

  actions: {
    obfuscate: '난독화',
    clear: '지우기'
  },

  messages: {
    copied: '클립보드에 복사되었습니다',
    copyFailed: '복사 실패, 수동으로 복사해 주세요',
    processing: '처리 중...',
    error: '난독화 중 오류 발생',
    invalidInput: '잘못된 입력 코드',
    uploadError: '파일 업로드 실패',
    fileTooLarge: '파일이 너무 큼 (최대 2MB)'
  },

  tips: {
    title: '사용 팁',
    tip1: '코드 난독화는 리버스 엔지니어링을 어렵게 하지만 완전히 방지하지는 않습니다',
    tip2: '더 많은 난독화 옵션은 코드 크기와 런타임 오버헤드를 증가시킵니다',
    tip3: '일부 난독화 옵션은 디버깅 기능에 영향을 줄 수 있습니다',
    tip4: '권장: 난독화 전 원본 코드를 백업하세요',
    tip5: '대규모 프로젝트에는 전문적인 난독화 도구를 사용하세요'
  },

  demo: {
    title: '예제',
    function: '함수 예제',
    class: '클래스 예제',
    simple: '간단한 스타일링',
    animation: '애니메이션 효과',
  }
};