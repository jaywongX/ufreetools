export default {
  name: 'JavaScript 포맷터',
  description: '온라인 JavaScript 포맷팅 및 검증 도구, 압축과 미화 지원',
  options: {
    indent: '들여쓰기',
    quotes: '따옴표 스타일',
    semicolons: '세미콜론',
    trailingComma: '후행 쉼표'
  },
  actions: {
    format: 'JavaScript 포맷팅',
    minify: '압축',
    beautify: '미화',
    clear: '지우기',
    copy: '복사',
    download: '다운로드'
  },
  messages: {
    copied: '클립보드에 복사되었습니다!',
    formatSuccess: 'JavaScript 포맷팅 성공',
    formatError: 'JavaScript 포맷팅 중 오류 발생'
  }
}