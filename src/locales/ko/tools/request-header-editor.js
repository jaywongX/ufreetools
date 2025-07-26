export default {
  name: 'HTTP 요청 헤더 편집기',
  description: 'HTTP 요청 헤더 생성, 편집 및 테스트',

  editor: {
    title: '헤더 편집기',
    headers: '요청 헤더',
    add: '헤더 추가',
    bulk: '일괄 편집',
    import: '헤더 가져오기',
    export: '헤더 내보내기',
    clear: '모두 지우기',
    importError: '가져오기 오류'
  },

  header: {
    name: '헤더 이름',
    value: '값',
    description: '설명',
    namePlaceholder: '헤더 이름 입력',
    valuePlaceholder: '헤더 값 입력',
    actions: '작업',
    enabled: '활성화',
    duplicate: '복제',
    delete: '삭제',
    noHeaders: '요청 헤더가 없습니다. "추가" 버튼을 클릭하거나 템플릿을 로드하세요',
    bulkPlaceholder: '헤더를 붙여넣으세요. 형식: \'이름: 값\', 한 줄에 하나씩, 또는 원시 요청 헤더 텍스트 붙여넣기'
  },

  presets: {
    title: '프리셋',
    save: '현재 저장',
    load: '프리셋 로드',
    delete: '프리셋 삭제',
    presetName: '프리셋 이름',
    namePlaceholder: '프리셋 이름 입력',
    confirmDelete: '이 프리셋을 삭제하시겠습니까?',
    common: '일반 헤더',
    custom: '사용자 정의 프리셋'
  },

  common: {
    userAgent: 'User-Agent',
    contentType: 'Content-Type',
    authorization: 'Authorization',
    acceptLanguage: 'Accept-Language',
    acceptEncoding: 'Accept-Encoding',
    cacheControl: 'Cache-Control',
    cookie: 'Cookie',
    referer: 'Referer',
    origin: 'Origin'
  },

  test: {
    title: '헤더 테스트',
    url: 'URL',
    urlPlaceholder: '헤더를 테스트할 URL 입력',
    method: '메소드',
    send: '요청 보내기',
    response: '응답'
  },

  response: {
    title: '응답',
    status: '상태',
    headers: '응답 헤더',
    body: '본문',
    time: '시간',
    size: '크기',
    loading: '로드 중...',
    noResponse: '미리보기를 보려면 요청 헤더를 추가하세요',
    headerCount: '개의 헤더'
  },

  options: {
    title: '옵션',
    followRedirects: '리디렉션 따르기',
    timeout: '타임아웃(초)',
    validateSSL: 'SSL 인증서 확인',
    sendCredentials: '자격 증명 보내기'
  },

  formats: {
    title: '내보내기 형식',
    raw: '원시 텍스트',
    json: 'JSON',
    curl: 'cURL 명령',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },

  guides: {
    title: '헤더 가이드',
    description: '일반적인 HTTP 헤더 및 사용 방법 알아보기',
    securityHeaders: '보안 헤더',
    cachingHeaders: '캐싱 헤더',
    corsHeaders: 'CORS 헤더',
    authenticationHeaders: '인증 헤더',
    commonValues: '일반적인 값'
  },

  actions: {
    copy: '복사',
    format: '포맷',
    validate: '검증',
    clear: '지우기'
  },

  messages: {
    headerAdded: '헤더가 추가되었습니다',
    headerDeleted: '헤더가 삭제되었습니다',
    headersCleared: '모든 헤더가 지워졌습니다',
    presetSaved: '프리셋이 저장되었습니다',
    presetLoaded: '프리셋이 로드되었습니다',
    presetDeleted: '프리셋이 삭제되었습니다',
    requestSent: '요청이 전송되었습니다',
    requestFailed: '요청 실패: {error}',
    copied: '클립보드에 복사되었습니다',
    importSuccess: '헤더 가져오기 성공',
    exportSuccess: '헤더 내보내기 성공',
    invalidUrl: '유효하지 않은 URL',
    pleaseEnterHeader: '요청 헤더 텍스트를 입력하세요',
    invalidHeader: '유효한 요청 헤더를 파싱할 수 없습니다. "이름: 값" 형식을 사용하세요',
    invalidHeaderName: '유효하지 않은 헤더 이름: {error}',
    copyFailed: '복사 실패, 수동으로 복사하세요'
  }
};