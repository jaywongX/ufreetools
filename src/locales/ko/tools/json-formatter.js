export default {
  name: 'JSON 포맷터',
  description: '온라인 JSON 포맷팅 및 검증 도구, 압축 및 가독성 향상 지원',

  options: {
    indent: '들여쓰기',
    sort: '키 정렬',
    compress: '압축',
    beautify: '가독성 향상'
  },

  actions: {
    format: 'JSON 포맷팅',
    compress:'압축',
    clear: '지우기',
    copy: '복사',
    download: '다운로드',
    transferMeaning: '이스케이프',
    contraposition: '역이스케이프'
  },

  messages: {
    invalidJson: 'JSON 문법이 유효하지 않음',
    copied: '클립보드에 복사되었습니다!',
    empty: 'JSON 내용을 입력하세요',
    formatTip: 'JSON 포맷팅 또는 압축 후 속성 목록 표시',
    formatSuccess: 'JSON 포맷팅 성공',
    compressSuccess: 'JSON 압축 성공',
    escapeSuccess: 'JSON 이스케이프 성공',
    unescapeSuccess: 'JSON 역이스케이프 성공',
    copyFailed: '복사 실패, 수동으로 복사하세요'
  },

  labels: {
    jsonData: 'JSON 데이터',
    propertyList: '속성 목록',
    clickToCopy: '(값 클릭 시 복사)'
  },

  placeholders: {
    jsonInput: 'JSON 데이터를 붙여넣으세요...'
  }
};