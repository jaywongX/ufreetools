export default {
  name: '비밀번호 강도 검사기',
  description: '비밀번호 강도를 검사하고 분석하여 상세한 보안 지표 제공',

  input: {
    title: '비밀번호 입력',
    placeholder: '비밀번호를 입력하세요...',
    showPassword: '비밀번호 표시',
    hidePassword: '비밀번호 숨기기',
    clear: '지우기',
    generate: '비밀번호 생성',
    check: '강도 검사',
    empty: '평가 결과를 보려면 비밀번호를 입력하세요',
    disclaimer: '비밀번호 강도를 평가하기 위해 비밀번호를 입력하세요. 입력한 비밀번호는 저장되거나 서버로 전송되지 않습니다.'
  },

  results: {
    title: '비밀번호 강도 평가',
    strength: '강도',
    score: '점수',
    entropy: '엔트로피',
    crackTime: '추정 크래킹 시간',
    very_weak: '매우 약함',
    weak: '약함',
    fair: '보통',
    good: '좋음',
    strong: '강함',
    very_strong: '매우 강함',
    feedback: '피드백',
    suggestions: '개선 제안',
    warnings: '발견된 문제점',
    noWarnings: '경고 없음',
    noSuggestions: '제안 사항 없음'
  },

  details: {
    title: '상세 분석',
    length: '비밀번호 길이',
    charset: '문자 다양성',
    patterns: '사용된 패턴',
    uniqueChars: '고유 문자',
    uppercase: '대문자',
    lowercase: '소문자',
    numbers: '숫자',
    symbols: '특수문자',
    repetitions: '반복',
    sequences: '연속성',
    dictionary: '사전 단어',
    leaked: '유출된 적 있음',
    reused: '재사용된 패턴'
  },

  patterns: {
    dictionary: '사전 단어',
    sequence: '연속 문자',
    repeat: '반복 문자',
    spatial: '공간 패턴(키보드)',
    date: '날짜 패턴',
    year: '연도 패턴',
    common: '흔한 비밀번호',
    name: '이름 패턴',
    reversal: '역순 단어',
    leet: '리트 스피크 대체',
    predictable: '예측 가능한 패턴'
  },

  crackTimes: {
    instantly: '즉시',
    seconds: '몇 초 이내',
    minutes: '몇 분 이내',
    hours: '몇 시간 이내',
    days: '몇 일 이내',
    months: '몇 달 이내',
    years: '몇 년 이내',
    centuries: '몇 세기 이내',
    forever: '실제로 영원히'
  },

  suggestions: {
    addWords: '더 많은 단어 또는 문자 추가',
    addSymbols: '특수문자 포함',
    addNumbers: '숫자 포함',
    upperLower: '대소문자 혼합',
    avoidPatterns: '키보드의 연속 문자 또는 반복 문자 사용 피하기',
    avoidCommon: '사전 기반 비밀번호 또는 흔한 비밀번호 사용 피하기(예: "e"를 "3"으로 대체하는 경우 포함)',
    avoidPersonal: '개인 정보 피하기',
    avoidDictionary: '사전 단어 피하기',
    usePassphrase: '연결된 단어 조합, 관련 없는 단어 조합 또는 머리글자어를 사용하여 기억하기 쉬운 강력한 비밀번호 생성 고려',
    increaseLonger: '비밀번호 길이 늘리기',
    avoidSequence: '연속 패턴 피하기',
    avoidRepeated: '반복 문자 피하기',
    avoidDates: '날짜 및 연도 피하기',
    addMoreChars: '비밀번호 길이를 최소 12자 이상으로 늘리기, 각 추가 문자마다 크래킹 난이도가 기하급수적으로 증가',
    addTypes: '{types} 추가하여 비밀번호 복잡성 증가',
    useManager: '비밀번호 관리자 사용하여 강력한 비밀번호 생성 및 관리, 각 사이트마다 다른 비밀번호 사용'
  },

  generator: {
    title: '비밀번호 생성기',
    length: '길이',
    options: '옵션',
    uppercase: '대문자 포함',
    lowercase: '소문자 포함',
    numbers: '숫자 포함',
    symbols: '특수문자 포함',
    excludeSimilar: '유사 문자 제외',
    excludeAmbiguous: '모호한 문자 제외',
    generate: '비밀번호 생성',
    passphrase: '비밀 문구 생성',
    wordCount: '단어 수',
    separator: '단어 구분자',
    capitalize: '첫 글자 대문자',
    includeNumber: '숫자 포함',
    includeSymbol: '특수문자 포함'
  },

  common: {
    copy: '클립보드에 복사',
    save: '기록에 저장',
    clear: '지우기',
    refresh: '새로 고침',
    copied: '클립보드에 복사됨',
    saved: '기록에 저장됨',
    history: '기록',
    noHistory: '기록 없음',
    common: '일반'
  },

  breach: {
    title: '데이터 유출 검사',
    description: '알려진 데이터 유출에서 비밀번호가 노출되었는지 확인',
    disclaimer: '비밀번호는 절대로 네트워크로 전송되지 않습니다. 해시 값의 일부만 확인됩니다.',
    checkButton: '유출 검사',
    safe: '알려진 유출에서 발견되지 않음',
    found: '{count}건의 데이터 유출에서 발견됨!',
    warning: '이 비밀번호는 데이터 유출에서 노출되었으며 더 이상 사용해서는 안 됩니다.',
    checking: '유출 검사 중...'
  },

  settings: {
    title: '설정',
    algorithm: '강도 알고리즘',
    history: '기록 저장',
    clearHistory: '기록 지우기',
    breachCheck: '유출 검사',
    timeout: '시간 초과 후 지우기',
    timeoutDuration: '시간 초과 기간(초)',
    clipboard: '복사 후 클립보드 지우기',
    language: '언어'
  },

  score: {
    none: '점수 없음'
  },

  descriptions: {
    none: '비밀번호 강도를 평가할 수 없음',
    veryWeak: '이 비밀번호는 매우 쉽게 추측되거나 크래킹될 수 있으며 극도로 불안전함',
    weak: '이 비밀번호는 보안 수준이 낮으며 쉽게 크래킹될 수 있음',
    fair: '이 비밀번호는 어느 정도 안전하지만 여전히 개선의 여지가 있음',
    good: '이 비밀번호는 보안 수준이 높으며 크래킹하기 어려움',
    veryStrong: '이 비밀번호는 매우 안전하며 크래킹이 거의 불가능함'
  },

  length: {
    none: '없음',
    tooShort: '너무 짧음',
    acceptable: '수용 가능',
    good: '좋음',
    excellent: '우수함'
  },

  lengthMessage: {
    none: '비밀번호가 입력되지 않았음',
    needMore: '최소 {min}자 이상 필요',
    better: '{min}자 이상이 더 안전함',
    good: '좋습니다! 긴 비밀번호는 크래킹하기 더 어려움',
    excellent: '훌륭한 길이입니다!'
  },

  complexity: {
    none: '없음',
    veryLow: '매우 낮음',
    fair: '보통',
    good: '좋음',
    excellent: '우수함'
  },

  issues: {
    tooShort: '비밀번호가 너무 짧음(8자 미만)',
    noUppercase: '대문자가 포함되지 않음',
    noLowercase: '소문자가 포함되지 않음',
    noNumbers: '숫자가 포함되지 않음',
    noSymbols: '특수문자가 포함되지 않음',
    hasSequence: '일반적인 키보드 연속성 포함(예: "qwerty" 또는 "123456")',
    hasRepeated: '반복된 문자 포함(예: "aaa" 또는 "111")',
    commonPassword: '흔하거나 추측하기 쉬운 비밀번호 사용'
  },

  characters: '자',

  tips: {
    title: '비밀번호 보안 팁',
    length: '최소 12자 이상의 비밀번호 사용',
    mix: '대소문자, 숫자, 특수문자 혼합 사용',
    avoid: '흔한 단어, 구문 또는 개인 정보 사용 피하기',
    unique: '여러 사이트에서 동일한 비밀번호 사용하지 않기',
    manager: '복잡한 비밀번호를 생성하고 저장하기 위해 비밀번호 관리자 사용 고려'
  }
};