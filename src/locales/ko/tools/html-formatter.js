export default {
  name: 'HTML 포맷터',
  description: 'HTML 코드를 포맷팅하고 가독성을 높입니다',
  formatMode: '포맷팅 모드',
  beautify: '예쁘게 만들기',
  minify: '압축하기',
  formatOptions: '포맷팅 옵션',
  removeComments: '주석 제거',
  preserveComments: '주석 유지',
  showLineNumbers: '줄 번호 표시',
  helpText: 'HTML 예쁘게 만들기/압축 도구는 개발자가 HTML 코드를 빠르게 정리하거나 최적화하여 가독성을 높이거나 파일 크기를 줄일 수 있도록 도와줍니다.',
  input: 'HTML 입력',
  inputPlaceholder: '여기에 HTML 코드를 붙여넣거나 입력하세요...',
  examples: '예제',

  exampleNames: {
    simple: '간단한 HTML',
    complex: '복잡한 HTML 페이지'
  },

  beautifiedResult: '예쁘게 만든 결과',
  minifiedResult: '압축된 결과',

  stats: {
    chars: '문자 수',
    lines: '줄 수',
    reduction: '{chars}자 감소 ({percent}%)'
  },

  indentOptions: {
    spaces: '{count}개의 공백',
    tab: '탭 들여쓰기'
  },

  errorMessages: {
    emptyInput: '처리할 HTML 코드를 입력하세요',
    processingFailed: 'HTML 처리 실패: {message}'
  },

  options: {
    indentSize: '들여쓰기 크기',
    wrapLength: '줄 바꿈 길이',
    indentInnerHtml: '내부 HTML 들여쓰기',
    preserveNewlines: '줄 바꿈 유지',
    maxPreserveNewlines: '최대 연속 줄 바꿈 수',
    wrapAttributes: '속성 줄 바꿈',
    sortAttributes: '속성 정렬',
    sortClassNames: '클래스 이름 정렬'
  },

  actions: {
    format: 'HTML 포맷팅',
    minify: '압축',
    clear: '지우기',
    copy: '복사',
    download: '다운로드',
    upload: '파일 업로드'
  },

  messages: {
    copied: '클립보드에 복사되었습니다!',
    formatSuccess: 'HTML 포맷팅 성공',
    formatError: 'HTML 포맷팅 중 오류 발생',
    invalidHtml: 'HTML 문법이 잘못되었습니다'
  }
};