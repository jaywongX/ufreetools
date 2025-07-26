export default {
  name: 'CSV-JSON 변환 도구',
  description: '사용자 정의 옵션으로 CSV 데이터를 JSON 형식으로 변환',

  options: {
    delimiter: '구분자',
    quote: '따옴표 문자',
    header: '첫 행을 헤더로',
    dynamicTyping: '동적 타입 변환',
    dynamicTypingDescription: '숫자 문자열을 숫자로, "true/false"를 불리언 값 등으로 변환',
    skipEmptyLines: '빈 줄 건너뛰기',
    comments: '주석 문자',
    outputFormat: '출력 형식',
    indentation: '들여쓰기',
    encoding: '인코딩',
    newline: '줄 바꿈 문자',
    title: '변환 옵션'
  },

  delimiters: {
    comma: '쉼표 (,)',
    semicolon: '세미콜론 (;)',
    tab: '탭 (\\t)',
    pipe: '파이프 (|)',
    custom: '사용자 정의'
  },

  formats: {
    array: '객체 배열',
    arrayOfArrays: '배열의 배열',
    keyed: '키-값 객체',
    nested: '중첩 객체'
  },

  preview: {
    input: '입력...',
    output: '출력...',
    rawCsv: '원본 CSV',
    parsedCsv: '파싱된 CSV',
    jsonOutput: 'JSON 출력',
    firstRows: '처음 {count} 행',
    showAll: '전체 보기'
  },

  actions: {
    convert: '변환',
    copy: 'JSON 복사',
    download: 'JSON 다운로드',
    clear: '지우기',
    uploadCsv: 'CSV 업로드',
    swap: '입력/출력 전환',
    loadExample: '예제 로드',
    clearInput: '입력 지우기',
    formatOutput: '출력 포맷팅',
    copyResult: '결과 복사',
    downloadResult: '결과 다운로드',
    paste: '붙여넣기',
    showOptions: '옵션 표시',
    hideOptions: '옵션 숨기기',
    uploadJson: 'JSON 업로드'
  },

  results: {
    rowsProcessed: '{count} 행 처리됨',
    conversionComplete: '변환 완료',
    copied: '클립보드에 복사됨',
    downloaded: '다운로드 완료',
    error: '오류'
  },

  errors: {
    noData: '변환할 CSV 데이터 없음',
    invalidCsv: '잘못된 CSV 형식',
    parsingFailed: '파싱 실패: {error}',
    missingHeader: '헤더 행 누락',
    invalidJson: '잘못된 JSON 형식',
    formatFailed: '포맷팅 실패: {error}',
    copyFailed: '복사 실패, 수동으로 복사하세요',
    downloadFailed: '다운로드 실패',
    pasteError: '클립보드에서 붙여넣기 실패',
    conversionFailed: '변환 실패'
  },

  conversion: {
    title: '변환 방향',
    csvToJson: {
      title: 'CSV → JSON',
      delimiterLabel: '구분자',
      headerLabel: '첫 행을 헤더로',
      dynamicTypingLabel: '데이터 타입 자동 추론',
      skipEmptyLinesLabel: '빈 줄 건너뛰기',
      convertButton: 'CSV를 JSON으로 변환'
    },
    jsonToCsv: {
      title: 'JSON → CSV',
      delimiterLabel: '구분자',
      headerLabel: '헤더 행 포함',
      quotesLabel: '모든 필드에 따옴표 추가',
      nestedModeLabel: '중첩 데이터 처리 방식',
      flat: '평탄화 처리',
      stringify: '문자열로 변환',
      ignore: '무시',
      convertButton: 'JSON을 CSV로 변환'
    }
  },

  stats: {
    processed: '처리된 데이터 행 수',
    fields: '필드/열 수',
    inputSize: '변환 전 크기',
    outputSize: '변환 후 크기',
    title: '통계'
  },

  messages: {
    copied: '클립보드에 복사됨',
    download: '다운로드 완료',
    error: '오류'
  },

  formatBytes: {
    bytes: '바이트',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  }
};