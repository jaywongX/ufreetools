export default {
  name: '마크다운에서 HTML로 변환',
  description: '마크다운 텍스트를 사용자 정의 가능한 옵션으로 HTML로 변환',

  input: {
    title: '마크다운 입력',
    placeholder: '여기에 마크다운 텍스트를 입력하거나 붙여넣기...',
    loadSample: '예제 로드',
    clearInput: '지우기',
    uploadFile: '마크다운 파일 업로드',
    paste: '클립보드에서 붙여넣기',
    charCount: '문자 수',
    lineCount: '줄 수'
  },

  output: {
    title: 'HTML 출력',
    copied: 'HTML이 클립보드에 복사되었습니다',
    download: 'HTML 다운로드',
    copyOutput: 'HTML 복사',
    clearOutput: '출력 지우기',
    previewTab: '미리보기',
    htmlTab: 'HTML 코드',
    previewMode: '미리보기 모드',
    sourceMode: 'HTML 소스'
  },

  options: {
    title: '변환 옵션',
    headerIds: '자동 제목 ID',
    gfm: 'GitHub 스타일 마크다운',
    tables: '표',
    breaks: '줄바꿈',
    smartLists: '스마트 목록',
    smartypants: '스마트 구두점',
    xhtml: 'XHTML',
    highlight: '구문 강조',
    sanitize: 'HTML 정화',
    footnotes: '각주',
    taskLists: '작업 목록',
    emoji: '이모지 지원',
    includeStyle: '기본 CSS 포함',
    realtimePreview: '실시간 미리보기',
    scrollSync: '스크롤 동기화',
    htmlOptions: 'HTML 옵션'
  },

  styles: {
    title: '스타일 옵션',
    theme: '테마',
    codeTheme: '코드 테마',
    customCSS: '사용자 정의 CSS',
    fontSize: '글꼴 크기',
    lineHeight: '줄 간격',
    enableCustom: '사용자 정의 스타일 활성화'
  },

  themes: {
    default: '기본',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: '다크 모드',
    custom: '사용자 정의'
  },

  codeThemes: {
    default: '기본',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },

  actions: {
    convert: 'HTML로 변환',
    clearAll: '모두 지우기',
    copyHtml: 'HTML 복사',
    saveAsHtml: 'HTML로 저장',
    generateToc: '목차 생성'
  },

  messages: {
    conversionSuccess: '마크다운 변환 성공',
    conversionFailed: '마크다운 변환 실패: {error}',
    emptyInput: '변환할 마크다운을 입력하세요',
    copied: 'HTML이 클립보드에 복사되었습니다',
    tocGenerated: '목차가 생성되었습니다'
  },

  alerts: {
    copied: '클립보드에 복사되었습니다',
    copyFailed: '클립보드 복사 실패',
    pasteFailed: '클립보드 붙여넣기 실패',
    confirmClear: '입력 내용을 지우시겠습니까?'
  },

  status: {
    lastConversion: '마지막 변환 시간'
  },

  samples: {
    basic: '기본 예제',
    extended: '확장 예제',
    article: '문서 예제'
  },

  download: {
    title: '마크다운에서 HTML로 내보내기'
  }
};