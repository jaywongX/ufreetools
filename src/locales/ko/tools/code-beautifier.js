export default {
  name: '코드 포매터',
  description: '구문 강조 및 들여쓰기로 코드를 포맷팅하고 정리합니다',
  languages: {
    title: '언어',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    cpp: 'C++',
    typescript: 'TypeScript'
  },
  actions: {
    beautify: '정형화',
    minify: '압축',
    clear: '지우기',
    copy: '복사',
    download: '다운로드',
    upload: '파일 업로드'
  },
  options: {
    title: '옵션',
    indentSize: '들여쓰기 크기',
    indentWith: '들여쓰기 방식',
    spaces: '공백',
    tabs: '탭',
    lineBreaks: '줄바꿈 스타일',
    quoteStyle: '따옴표 스타일',
    bracketStyle: '괄호 스타일',
    preserveNewlines: '줄바꿈 유지',
    endWithNewline: '줄바꿈으로 끝내기',
    removeComments: '주석 제거',
    wrapLineLength: '줄바꿈 길이',
    lineNumbers: '줄 번호',
    showLineNumbers: '줄 번호 표시',
    wrapLines: '자동 줄바꿈',
    theme: '테마',
    autoDetect: '자동 감지',
    tryAutoDetect: '언어 자동 감지 시도'
  },
  input: {
    title: '입력',
    placeholder: '여기에 코드를 붙여넣으세요...'
  },
  output: {
    title: '출력',
    placeholder: '정형화된 코드가 여기에 표시됩니다...'
  },
  messages: {
    copied: '클립보드에 복사되었습니다!',
    beautifySuccess: '코드 정형화 성공',
    minifySuccess: '코드 압축 성공',
    beautifyError: '코드 정형화 중 오류 발생',
    minifyError: '코드 압축 중 오류 발생',
    emptyCode: '정형화할 코드를 입력하세요',
    fileTooBig: '파일이 너무 큽니다(최대 2MB)',
    invalidFile: '잘못되거나 지원되지 않는 파일 형식',
    preview: '미리보기',
    HTMLCode: 'HTML 코드',
  },
  stats: {
    original: '원본',
    beautified: '정형화 후',
    minified: '압축 후',
    size: '크기',
    characters: '문자 수',
    lines: '줄 수'
  },
  tips: {
    title: '사용 팁',
    tip1: '최적의 구문 강조 효과를 위해 적절한 프로그래밍 언어를 선택하세요',
    tip2: '웹사이트 스타일에 맞게 다양한 테마 스타일을 선택할 수 있습니다',
    tip3: '생성된 HTML 코드를 복사하여 HTML을 지원하는 편집기나 웹사이트에 직접 붙여넣을 수 있습니다',
    tip4: '생성된 강조 코드는 반응형 및 다크 모드를 지원합니다',
    tip5: '코드를 표시할 때 줄 번호를 추가하면 가독성과 참조 편의성이 향상됩니다'
  }
}