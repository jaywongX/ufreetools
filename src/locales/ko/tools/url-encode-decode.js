export default {
  name: 'URL 인코딩/디코딩',
  description: 'URL 인코딩은 특수 문자를 URL에서 허용되는 형식으로 변환하는 데 사용되며, 주로 URL 매개변수 및 폼 제출 처리에 활용됩니다.',

  options: {
    operationType: '작업 유형',
    encodeMode: '인코딩 모드'
  },

  encodeOptions: {
    standard: '표준 인코딩 (encodeURI)',
    component: '컴포넌트 인코딩 (encodeURIComponent)',
    full: '전체 인코딩 (모든 문자)',
    standardDescription: '전체 URL을 인코딩하며 URL 구조 문자는 유지합니다',
    componentDescription: 'URL 매개변수에 적합하며 모든 특수 문자를 인코딩합니다',
    fullDescription: '알파벳과 숫자가 아닌 모든 문자를 인코딩하며 공백은 + 대신 %20으로 변환합니다'
  },

  actions: {
    encode: 'URL 인코딩',
    decode: 'URL 디코딩',
    clear: '초기화',
    copyResult: '결과 복사'
  },

  input: {
    textToEncode: '인코딩할 텍스트',
    textToDecode: '디코딩할 텍스트',
    encodePlaceholder: '인코딩할 URL 또는 텍스트 입력...',
    decodePlaceholder: '디코딩할 URL 또는 텍스트 입력...'
  },

  output: {
    encodeResult: '인코딩 결과',
    decodeResult: '디코딩 결과'
  },

  messages: {
    copied: '(복사 완료',
    error: '오류: {message}',
    decodeError: '디코딩 불가: "{text}"',
    copyFailed: '복사 실패, 수동으로 복사해 주세요'
  },

  referenceTable: {
    title: '일반적인 URL 문자 인코딩 참조 테이블',
    showTable: '테이블 보기',
    hideTable: '테이블 숨기기',
    character: '문자',
    encoded: 'URL 인코딩',
    description: '설명',
    descriptions: {
      space: '공백',
      exclamation: '느낌표',
      doubleQuote: '큰따옴표',
      hash: '해시 기호',
      dollar: '달러 기호',
      percent: '퍼센트 기호',
      ampersand: '앰퍼샌드',
      singleQuote: '작은따옴표',
      leftParenthesis: '왼쪽 괄호',
      rightParenthesis: '오른쪽 괄호',
      asterisk: '별표',
      plus: '더하기 기호',
      comma: '쉼표',
      slash: '슬래시',
      colon: '콜론',
      semicolon: '세미콜론',
      lessThan: '보다 작음 기호',
      equals: '등호',
      greaterThan: '보다 큼 기호',
      questionMark: '물음표',
      at: '앳 기호',
      leftBracket: '왼쪽 대괄호',
      backslash: '역슬래시',
      rightBracket: '오른쪽 대괄호',
      caret: '캐럿',
      backtick: '백틱',
      leftBrace: '왼쪽 중괄호',
      pipe: '파이프',
      rightBrace: '오른쪽 중괄호',
      tilde: '물결표',
      chinese: 'UTF-8 인코딩된 한자'
    }
  }
};