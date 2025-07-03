export default {
  name: '코드 포맷터',
  description: '다양한 언어의 코드를 포맷팅하고 정리합니다',
  languages: {
    title: '언어',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown'
  },
  options: {
    title: '옵션',
    indent: '들여쓰기',
    tabSize: '탭 크기',
    insertSpaces: '공백 삽입',
    formatSelection: '선택 영역 포맷팅',
    formatOnType: '입력 시 자동 포맷팅',
    removeComments: '주석 제거',
    mangle: '변수명 난독화',
    lineBreak: '줄바꿈 스타일'
  },
  actions: {
    beautify: '정형화',
    minify: '압축',
    format: '포맷팅',
    copy: '결과 복사',
    clear: '초기화',
    download: '다운로드',
    paste: '클립보드에서 붙여넣기',
    loadSample: '예제 코드 로드'
  },
  messages: {
    formatSuccess: '코드 포맷팅 성공',
    formatError: '코드 포맷팅 중 오류 발생',
    copied: '클립보드에 복사되었습니다!',
    languageChangeWarning: '언어 변경 시 코드가 초기화됩니다. 계속하시겠습니까?'
  },
  errors: {
    emptyCode: '포맷팅할 코드를 입력하세요',
    invalidJson: '잘못된 JSON 형식',
    jsCompressionError: 'JavaScript 압축 오류'
  },
  input: '입력',
  output: '출력',
  placeholders: {
    input: '여기에 코드를 붙여넣으세요...',
    output: '포맷팅된 코드가 여기에 표시됩니다...'
  },
  characters: '문자',
  space: '공백',
  spaces: '공백',
  auto: '자동',
  tips: {
    title: '사용 팁',
    selectLanguage: '최적의 포맷팅 결과를 위해 코드에 맞는 언어를 선택하세요.',
    beautifyMinify: '"정형화" 기능으로 코드 가독성을 높이고, "압축" 기능으로 파일 크기를 줄이세요.',
    customizeOptions: '아래 설정 패널을 사용하여 포맷팅 옵션을 사용자 정의하세요.',
    keyboard: '편집기에서 Tab 키를 눌러 들여쓰기를 삽입할 수 있습니다.'
  }
}