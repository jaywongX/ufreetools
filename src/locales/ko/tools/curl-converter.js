export default {
  name: 'cURL 변환기',
  description: 'cURL 명령어를 다양한 프로그래밍 언어의 코드 스니펫으로 변환',
  title: 'cURL에서 코드로',
  subtitle: 'cURL 명령어를 여러 프로그래밍 언어 코드로 변환하여 프로젝트에 HTTP 요청을 빠르게 통합',

  input: {
    title: 'cURL 명령어',
    placeholder: '여기에 cURL 명령어 입력',
    parse: 'cURL 파싱',
    clear: '지우기',
    examples: '예제 명령어:',
    options: '파서 옵션',
    validateCommand: '명령어 검증',
    formatCurl: 'cURL 포맷팅'
  },

  options: {
    detectAuth: '자동 인증 감지',
    resolveVariables: '환경 변수 해석',
    processContinuations: '줄 연속 문자(\\) 처리',
    followRedirects: '리디렉션 따라가기',
    preserveHeaders: '모든 헤더 유지',
    ignoreErrors: '파싱 오류 무시',
    noDuplicateHeaders: '중복 헤더 없음(마지막 사용)'
  },

  output: {
    title: '코드 출력',
    language: '대상 언어',
    copy: '복사',
    copyTooltip: '클립보드에 복사',
    download: '다운로드',
    beautify: '정렬',
    codeTitle: '{language} 코드',
    errorTitle: '변환 오류',
    languages: {
      python: 'Python (requests)',
      pythonHttp: 'Python (http.client)',
      node: 'Node.js (axios)',
      nodeRequest: 'Node.js (request)',
      nodeFetch: 'Node.js (fetch)',
      java: 'Java (HttpClient)',
      javaOkHttp: 'Java (OkHttp)',
      php: 'PHP (cURL)',
      phpGuzzle: 'PHP (Guzzle)',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      csharp: 'C# (HttpClient)',
      ruby: 'Ruby',
      dart: 'Dart',
      powershell: 'PowerShell',
      browser: '브라우저 (fetch)',
      curl: 'cURL (포맷팅됨)',
      json: 'JSON (요청 객체)',
      har: 'HAR (HTTP 아카이브)',
      javascript: 'JavaScript (Fetch)'
    }
  },

  request: {
    title: '요청 상세',
    method: '메소드',
    url: 'URL',
    headers: '헤더',
    body: '본문',
    auth: '인증',
    options: '옵션',
    cookie: '쿠키',
    queryParams: '쿼리 파라미터',
    formData: '폼 데이터',
    visualize: '시각화'
  },

  visualization: {
    title: '요청 시각화',
    request: '요청',
    response: '응답',
    headers: '헤더',
    body: '본문',
    timing: '타이밍',
    raw: '원본'
  },

  analysis: {
    title: '명령어 분석',
    insecureWarning: '경고: 이 명령어는 --insecure/-k(SSL 검증 비활성화)를 사용합니다',
    verboseIgnored: '참고: 상세 모드(-v)는 변환에서 무시됩니다',
    unsupportedOptions: '지원되지 않는 옵션',
    warnings: '경고',
    info: '정보'
  },

  messages: {
    parsing: 'cURL 명령어 파싱 중...',
    parseFailed: 'cURL 명령어 파싱 실패: {error}',
    parseSuccess: 'cURL 명령어 파싱 성공',
    copied: '코드가 클립보드에 복사되었습니다',
    downloaded: '코드가 다운로드되었습니다',
    invalidCurl: '잘못된 cURL 명령어',
    emptyCurl: 'cURL 명령어를 입력하세요',
    validCurl: '유효한 cURL 명령어',
    unknownOption: '알 수 없는 옵션: {option}',
    unsupportedMethod: '경고: 모든 언어가 HTTP 메소드 {method}를 지원하지는 않습니다',
    curlRequired: '명령어는 "curl "로 시작해야 합니다',
    copyFailed: '복사 실패, 수동으로 복사하세요'
  },

  examples: {
    title: 'cURL 명령어 예제',
    basic: '기본 GET 요청',
    headers: '사용자 정의 헤더',
    post: 'JSON 포함 POST',
    formData: '폼 데이터 제출',
    auth: '기본 인증',
    complex: '복잡한 예제',
    exampleCommands: {
      getRequest: 'GET 요청',
      postJson: 'POST JSON',
      postForm: 'POST 폼',
      withAuth: '인증 포함',
      uploadFile: '파일 업로드'
    }
  },

  actions: {
    convert: '변환',
    converting: '변환 중...'
  }
};