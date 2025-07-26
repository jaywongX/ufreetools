export default {
  name: 'YAML-JSON 변환기',
  description: 'YAML과 JSON 형식 간 변환, 사용자 정의 옵션 제공',

  input: {
    title: '입력',
    yamlPlaceholder: 'YAML 입력...',
    jsonPlaceholder: 'JSON 입력...',
    loadSample: '예제 로드',
    clearInput: '입력 지우기',
    uploadFile: '파일 업로드'
  },

  output: {
    title: '출력',
    copyOutput: '출력 복사',
    downloadOutput: '출력 다운로드',
    clearOutput: '출력 지우기'
  },

  options: {
    conversionMode: '변환 모드',
    jsonToYaml: 'JSON → YAML',
    yamlToJson: 'YAML → JSON',
    formatOutput: '출력 포맷팅',
    indentSize: '들여쓰기 크기',
    quoteKeys: '객체 키에 따옴표 추가',
    sortKeys: '알파벳 순으로 키 정렬',
    flowStyle: 'YAML 흐름 스타일',
    jsonCompatible: 'JSON 호환',
    singleQuotes: '작은따옴표 사용',
    includeSchema: '스키마 포함',
    preserveKeyOrder: '키 순서 유지'
  },

  flowStyles: {
    block: '블록 스타일',
    flow: '흐름 스타일',
    auto: '자동'
  },

  validation: {
    validate: '변환 전 검증',
    validInput: '유효한 {format}',
    invalidInput: '잘못된 {format}: {error}',
    checkSyntax: '구문 확인'
  },

  actions: {
    convert: '변환',
    swap: '형식 교체',
    beautify: '정형화',
    minify: '압축'
  },

  messages: {
    conversionSuccess: '변환 성공',
    conversionFailed: '변환 실패: {error}',
    copySuccess: '클립보드에 복사됨',
    downloadSuccess: '파일 다운로드 성공',
    emptyInput: '변환할 내용을 입력하세요',
    invalidYaml: '잘못된 YAML 구문',
    invalidJson: '잘못된 JSON 구문'
  }
};