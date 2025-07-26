export default {
  name: '민감어 필터',
  description: '텍스트 내 민감어를 감지하고 필터링하며, 사용자 정의 민감어 사전과 필터링 규칙을 지원합니다',

  input: {
    title: '입력 텍스트',
    placeholder: '검사할 텍스트 내용을 입력하세요...',
    loadSample: '예제 불러오기',
    clearInput: '입력 지우기',
    uploadFile: '텍스트 파일 업로드'
  },

  output: {
    title: '필터링된 텍스트',
    original: '원본 텍스트',
    filtered: '필터링된 텍스트',
    statistics: '통계 데이터',
    copyOutput: '필터링된 텍스트 복사',
    clearOutput: '출력 지우기',
    download: '필터링된 텍스트 다운로드'
  },

  options: {
    title: '필터 옵션',
    filterMode: '필터 모드',
    caseSensitive: '대소문자 구분',
    wholeWordOnly: '완전한 단어만',
    customReplacement: '사용자 정의 대체',
    replacementChar: '대체 문자',
    highlightWords: '민감어 강조 표시',
    customDictionary: '사용자 정의 사전',
    importDictionary: '사전 가져오기',
    exportDictionary: '사전 내보내기'
  },

  filterModes: {
    replace: '민감어 대체',
    highlight: '민감어 강조',
    remove: '민감어 제거',
    detect: '감지만'
  },

  dictionary: {
    title: '단어 사전',
    add: '단어 추가',
    remove: '제거',
    clear: '사전 비우기',
    wordInput: '추가할 단어 입력',
    categories: '분류',
    severity: '심각도',
    bulkAdd: '일괄 추가',
    search: '사전 검색'
  },

  categories: {
    profanity: '욕설',
    slurs: '비방',
    adult: '성인 콘텐츠',
    offensive: '모욕적 내용',
    violence: '폭력',
    discrimination: '차별',
    personal: '개인 정보',
    custom: '사용자 정의'
  },

  severityLevels: {
    low: '낮음',
    medium: '중간',
    high: '높음',
    critical: '심각'
  },

  statistics: {
    totalWords: '총 단어 수',
    sensitiveWords: '민감어 수',
    uniqueSensitiveWords: '고유 민감어 수',
    severityBreakdown: '심각도 분포',
    categoryBreakdown: '분류별 분포',
    cleanlinessScore: '청결도 점수'
  },

  filterOptions: {
    title: '필터 모드',
    modes: {
      asterisk: '*로 대체',
      custom: '사용자 정의 대체 문자',
      remove: '민감어 삭제'
    },
    replaceChar: {
      title: '대체 문자',
      placeholder: '대체 문자 입력'
    }
  },

  customWords: {
    title: '사용자 정의 민감어 사전',
    addWord: '단어 추가',
    addPrompt: '추가할 민감어를 입력하세요:',
    removeWord: '제거'
  },

  actions: {
    filter: '필터링 시작',
    reset: '초기화',
    processing: '처리 중...',
    clearAll: '모두 지우기',
    copyFiltered: '필터링된 텍스트 복사',
    downloadReport: '보고서 다운로드',
    resetSettings: '설정 초기화'
  },

  results: {
    title: '필터 결과',
    tabs: {
      filteredResult: '필터 결과',
      detectionReport: '감지 보고서'
    },
    filteredText: {
      title: '필터링된 텍스트',
      copy: '결과 복사',
      empty: '표시할 필터 결과 없음'
    },
    statistics: {
      detectedCount: '감지된 민감어 수',
      retentionRate: '텍스트 보존율',
      totalWords: '텍스트 총 글자 수'
    },
    detectedWords: {
      title: '감지된 민감어',
      empty: '민감어가 감지되지 않았습니다'
    }
  },

  messages: {
    copied: '클립보드에 복사되었습니다',
    copyFailed: '복사 실패, 수동으로 복사해 주세요',
    noInput: '필터링할 텍스트를 입력하세요',
    inputTooLong: '입력 텍스트가 너무 깁니다',
    wordAdded: '민감어 사전에 단어가 추가되었습니다',
    wordExists: '이 단어는 이미 민감어 사전에 존재합니다',
    wordRemoved: '민감어 사전에서 단어가 제거되었습니다',
    filterSuccess: '텍스트 필터링이 성공했습니다',
    noSensitiveWords: '민감어가 발견되지 않았습니다',
    dictionaryCleared: '사전이 비워졌습니다',
    dictionaryImported: '사전이 가져와졌습니다',
    dictionaryExported: '사전이 내보내졌습니다',
    emptyText: '필터링할 텍스트를 입력하세요'
  }
};