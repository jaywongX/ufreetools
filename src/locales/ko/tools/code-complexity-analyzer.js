export default {
  name: '코드 복잡도 분석기',
  description: '순환 복잡도 및 유지보수성과 같은 코드 복잡도 메트릭을 분석합니다',
  title: '코드 복잡도 분석',
  subtitle: '자바스크립트 코드의 순환 복잡도, Halstead 메트릭, 유지보수 지수 등 다양한 복잡도 메트릭 분석',

  input: {
    title: '자바스크립트 코드 입력',
    placeholder: '자바스크립트 코드를 여기에 붙여넣기...',
    loadExample: '예제 불러오기',
    clear: '지우기'
  },

  options: {
    title: '분석 옵션',
    cyclomaticComplexity: '순환 복잡도 계산 (McCabe 복잡도)',
    halsteadMetrics: 'Halstead 메트릭 계산 (프로그램 길이, 어휘, 볼륨 등)',
    maintainabilityIndex: '유지보수 지수 계산 (코드 유지보수성 메트릭)',
    functionDetails: '함수별 분석 결과 표시'
  },

  languages: {
    title: '언어',
    javascript: '자바스크립트',
    typescript: '타입스크립트',
    python: '파이썬',
    java: '자바',
    csharp: 'C#',
    php: 'PHP',
    go: 'Go',
    ruby: '루비'
  },

  metrics: {
    title: '메트릭',
    cyclomaticComplexity: '순환 복잡도',
    maintainabilityIndex: '유지보수 지수',
    halsteadVolume: 'Halstead 볼륨',
    halsteadDifficulty: 'Halstead 난이도',
    halsteadEffort: 'Halstead 노력도',
    halsteadTime: 'Halstead 시간',
    halsteadBugs: 'Halstead 버그',
    linesOfCode: '코드 라인 수',
    logicalLoc: '논리적 코드 라인',
    commentLines: '주석 라인 수',
    commentRatio: '주석 비율',
    operatorCount: '연산자 수',
    operandCount: '피연산자 수',
    functionCount: '함수 수',
    maxNestingDepth: '최대 중첩 깊이',
    averageDepth: '평균 깊이',
    halstead: {
      title: 'Halstead 메트릭',
      length: '프로그램 길이',
      vocabulary: '어휘',
      volume: '프로그램 볼륨',
      difficulty: '난이도'
    }
  },

  results: {
    title: '분석 결과',
    file: '파일',
    method: '메소드',
    score: '점수',
    complexity: '복잡도',
    rating: '평가',
    loc: '라인 수',
    issues: '문제점',
    summary: '코드 요약',
    details: '상세 정보',
    noResults: '분석 결과가 없습니다. 코드를 입력하고 "코드 분석" 버튼을 클릭하세요.',
    avgCyclomaticComplexity: '평균 순환 복잡도',
    maintainabilityIndex: '유지보수 지수',
    linesOfCode: '코드 라인 수',
    functionDetails: '함수별 분석',
    functionName: '함수 이름',
    parameters: '매개변수 수',
    anonymousFunction: '(익명 함수)'
  },

  ratings: {
    excellent: '우수',
    good: '좋음',
    moderate: '보통',
    poor: '나쁨',
    veryPoor: '매우 나쁨'
  },

  complexity: {
    title: '복잡도 평가:',
    low: '낮은 복잡도 - 코드가 단순하고 이해하기 쉬움',
    medium: '중간 복잡도 - 코드가 허용 가능하지만 다소 복잡함',
    high: '높은 복잡도 - 코드가 너무 복잡함, 리팩토링 권장'
  },

  actions: {
    analyze: '코드 분석',
    analyzing: '분석 중...',
    clearCode: '코드 지우기',
    uploadFile: '파일 업로드',
    copy: '결과 복사',
    download: '보고서 다운로드',
    export: '보고서 내보내기 (JSON)'
  },

  messages: {
    analyzing: '코드 분석 중...',
    analysisComplete: '분석 완료',
    analysisError: '코드 분석 오류',
    analysisFailure: '코드 분석 실패: {error}',
    copied: '클립보드에 복사되었습니다!',
    emptyCode: '분석할 코드를 입력해 주세요',
    fileTooBig: '파일이 너무 큼 (최대 1MB)',
    invalidFile: '잘못되거나 지원되지 않는 파일 형식',
    errorTitle: '분석 오류'
  },

  tips: {
    title: '사용 팁',
    cyclomaticComplexity: '순환 복잡도는 코드 내 독립적인 경로의 수를 측정합니다.',
    maintainability: '유지보수 지수는 코드 유지보수성을 나타냅니다 (높을수록 좋음).',
    recommendations: '더 나은 코드 품질을 위해: 낮은 복잡도, 높은 유지보수성을 목표로 하세요.',
    refactoring: '복잡도가 10 이상인 함수는 리팩토링해야 합니다.'
  }
};