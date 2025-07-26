export default {
  name: 'CORS 설정 생성기',
  description: '다양한 서버 환경에서 CORS(Cross-Origin Resource Sharing) 구성을 빠르게 생성',

  options: {
    title: 'CORS 옵션',
    allowedOrigins: {
      title: '허용 출처 도메인 (Access-Control-Allow-Origin)',
      allowAll: '모든 출처 허용 (*) <span class="text-yellow-500 text-xs ml-1">(보안 취약, 인증 정보 미지원)</span>',
      specific: '특정 도메인 허용 (권장)',
      addOrigin: '출처 추가',
      placeholder: '출처 입력 (예: https://example.com)',
      wildcard: '하위 도메인 허용 (와일드카드)',
      null: 'null 출처 허용',
      remove: '도메인 제거'
    },
    allowedMethods: {
      title: '허용 HTTP 메소드 (Access-Control-Allow-Methods)',
      selectMethods: 'HTTP 메소드 선택',
      get: 'GET',
      post: 'POST',
      put: 'PUT',
      delete: 'DELETE',
      patch: 'PATCH',
      head: 'HEAD',
      options: 'OPTIONS'
    },
    allowedHeaders: {
      title: '허용 헤더 (Access-Control-Allow-Headers)',
      all: '모든 헤더 허용(*)',
      specific: '특정 헤더만',
      addHeader: '헤더 추가',
      headerPlaceholder: '헤더 이름 입력',
      common: '일반 헤더',
      custom: '사용자 정의 헤더',
      contentType: 'Content-Type',
      accept: 'Accept',
      authorization: 'Authorization',
      origin: 'Origin',
      xRequestedWith: 'X-Requested-With',
      contentDisposition: 'Content-Disposition',
      remove: '헤더 제거'
    },
    exposedHeaders: {
      title: '노출 헤더 (Access-Control-Expose-Headers)',
      description: '브라우저에서 접근 가능한 응답 헤더',
      addHeader: '노출 헤더 추가',
      headerPlaceholder: '헤더 이름 입력'
    },
    credentials: {
      title: '인증 정보 허용 (Access-Control-Allow-Credentials)',
      description: '쿠키 및 인증 헤더 사용 허용',
      allow: '인증 정보 허용',
      warning: '와일드카드(*)와 함께 사용할 수 없으며 특정 출처와만 사용 가능'
    },
    maxAge: {
      title: '프리플라이트 요청 캐시 시간 (Access-Control-Max-Age)',
      description: '프리플라이트 요청 결과 캐시 시간(초)',
      seconds: '초',
      default: '기본값: ',
      recommended: '권장: 3600 (1시간)'
    },
    serverType: {
      title: '서버 유형',
      apache: 'Apache (.htaccess)',
      nginx: 'Nginx',
      express: 'Express.js',
      springBoot: 'Spring Boot',
      php: 'PHP',
      flask: 'Flask (Python)',
      django: 'Django',
      rails: 'Ruby on Rails',
      aws: 'AWS S3/CloudFront',
      azure: 'Azure',
      iis: 'IIS (web.config)',
      jetty: 'Jetty',
      headers: 'HTTP 헤더'
    }
  },

  output: {
    title: '생성된 헤더',
    instructions: '이 헤더들을 서버 응답에 추가하세요:',
    copy: '헤더 복사',
    test: '헤더 테스트',
    downloadConfig: '구성 다운로드'
  },

  configs: {
    title: '구성 예시',
    nginx: 'Nginx',
    apache: 'Apache (.htaccess)',
    express: 'Express.js',
    springBoot: 'Spring Boot',
    php: 'PHP',
    flask: 'Flask (Python)',
    django: 'Django',
    rails: 'Ruby on Rails',
    aws: 'AWS S3/CloudFront',
    azure: 'Azure',
    iis: 'IIS Web.config'
  },

  testing: {
    title: 'CORS 테스트',
    description: 'CORS 구성이 올바르게 작동하는지 테스트',
    originUrl: '출처 URL',
    targetUrl: '대상 URL',
    method: '요청 메소드',
    credentials: '인증 정보 포함',
    headers: '사용자 정의 헤더',
    addHeader: '헤더 추가',
    testButton: 'CORS 테스트',
    results: '테스트 결과',
    success: 'CORS 테스트 성공 ✓',
    failure: 'CORS 테스트 실패 ✗✗',
    details: '응답 상세',
    response: '응답',
    logs: 'CORS 로그',
    errorDetails: '오류 상세'
  },

  presets: {
    title: '프리셋',
    api: 'API 서버',
    assets: '정적 자원 (CDN)',
    auth: '인증 서비스',
    publicAccess: '공개 접근',
    restrictive: '제한적',
    load: '프리셋 로드',
    save: '현재 설정을 프리셋으로 저장'
  },

  tips: {
    title: 'CORS 팁',
    tip1: 'CORS(Cross-Origin Resource Sharing)는 HTTP 헤더 기반 메커니즘으로, 서버가 자신 이외의 출처(도메인, 프로토콜 또는 포트)에서 리소스를 로드할 수 있도록 허용합니다.',
    tip2: 'CORS 보호는 현대 브라우저의 보안 기능으로, 웹 페이지가 동일 출처가 아닌 서버로 요청을 보내는 것을 방지하여 사용자를 교차 사이트 요청 위조 공격으로부터 보호합니다.',
    usage: {
      title: 'CORS 사용 사례:',
      tip1: '다른 도메인의 API에 프론트엔드 JavaScript 접근 허용',
      tip2: '크로스 도메인 Ajax 또는 Fetch 요청 지원',
      tip3: '폰트, CSS 또는 기타 리소스에 대한 크로스 도메인 접근 허용',
      tip4: '마이크로서비스 아키텍처에서 서비스 간 통신 설정',
    },
    safe: '보안 팁: 일반적으로 "*" 와일드카드를 허용 출처로 사용하지 말고, 잠재적인 보안 위험을 줄이기 위해 신뢰할 수 있는 도메인을 명시적으로 지정해야 합니다.'
  },

  messages: {
    copied: '헤더가 클립보드에 복사되었습니다',
    configDownloaded: '구성이 다운로드되었습니다',
    testStarted: 'CORS 테스트 시작됨',
    testSucceeded: 'CORS 요청 성공',
    testFailed: 'CORS 요청 실패: {error}',
    presetSaved: '프리셋 저장됨',
    presetLoaded: '프리셋 로드됨'
  },

  config: {
    title: '구성',
    empty: 'CORS 설정을 생성하려면 옵션을 구성하세요',
    copied: '구성이 클립보드에 복사되었습니다!',
    copy: '복사'
  },

  comments: {
    expressMiddleware: "// Express 애플리케이션 미들웨어 사용",
    applyGlobalCors: "// CORS 미들웨어 적용",
    applySpecificRoute: "// 또는 특정 경로에만 적용",
    applyRequest: "// 요청 처리",
    apacheAllowedOrigins: "# 허용 도메인",
    apacheAllowedMethods: "# 허용 HTTP 메소드",
    apacheAllowedHeaders: "# 허용 HTTP 헤더",
    apacheAllowedCredentials: "# 허용 인증 정보",
    preflightCacheDuration: "# 프리플라이트 요청 캐시 시간",
    apacheExposeHeaders: '# 노출 응답 헤더',
    handlePreflightRequest: "# 프리플라이트 요청 처리",
    nginxConfiguration: "# CORS 구성\n# 이 구성을 server 또는 location 블록에 추가하세요",
    nginxAllowedOrigins: "# 허용 도메인",
    nginxAllowedMethods: "# 허용 HTTP 메소드",
    nginxAllowedHeaders: "# 허용 HTTP 헤더",
    nginxAllowedCredentials: "# 허용 인증 정보",
    nginxPreflightCacheDuration: "# 프리플라이트 요청 캐시 시간",
    nginxExposeHeaders: '# 노출 응답 헤더',
    nginxHandlePreflight: "# 프리플라이트 요청 처리",
    httpHeadersConfiguration: "# CORS HTTP 헤더 구성",
    httpAllowedOrigins: "# 허용 도메인",
    httpAllowedMethods: "# 허용 HTTP 메소드",
    httpAllowedHeaders: "# 허용 HTTP 헤더",
    httpAllowedCredentials: "# 허용 인증 정보",
    httpPreflightCacheDuration: "# 프리플라이트 요청 캐시 시간",
    httpExposeHeaders: '# 노출 응답 헤더',
  }
};