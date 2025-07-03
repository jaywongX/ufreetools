export default {
  name: 'CSS 포맷터',
  description: '가독성 향상을 위한 CSS 코드 포맷팅 및 정리',
  options: {
    indentSize: '들여쓰기 크기',
    indentWithTabs: '탭으로 들여쓰기',
    convertQuotes: '따옴표 변환',
    sortSelectors: '선택자 정렬',
    sortProperties: '속성 정렬',
    compressColors: '색상 값 압축',
    expandShorthand: '단축 속성 확장'
  },
  actions: {
    format: 'CSS 포맷팅',
    minify: '압축',
    clear: '지우기',
    copy: '복사',
    download: '다운로드',
    upload: '파일 업로드'
  },
  messages: {
    copied: '클립보드에 복사되었습니다!',
    formatSuccess: 'CSS 포맷팅 성공',
    formatError: 'CSS 포맷팅 중 오류 발생',
    invalidCss: '잘못된 CSS 문법'
  }
}