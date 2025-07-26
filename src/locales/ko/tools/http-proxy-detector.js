export default {
  name: 'HTTP 프록시 감지기',
  description: '연결에서 HTTP 프록시 및 중간 장치 감지 및 분석',
  title: '프론트엔드 프록시 감지기',
  intro: '네트워크 연결이 프록시를 사용하는지 감지하고, X-Forwarded-For 및 기타 프록시 관련 HTTP 헤더 정보 분석',

  detection: {
    title: '프록시 감지',
    start: '감지 시작',
    detecting: '감지 중...',
    stop: '감지 중지',
    completed: '감지 완료',
    noProxies: '프록시 감지되지 않음',
    proxiesFound: '감지된 프록시: {count}'
  },

  options: {
    title: '감지 옵션',
    testUrl: '테스트 URL',
    urlPlaceholder: '테스트할 URL 입력 (기본값: 자동)',
    testMethod: 'HTTP 메소드',
    get: 'GET',
    head: 'HEAD',
    options: 'OPTIONS',
    timeout: '타임아웃 (초)',
    parallel: '병렬 테스트',
    techniques: '감지 기술',
    headerAnalysis: '헤더 분석',
    traceMethod: 'TRACE 메소드',
    viaHeader: 'Via 헤더 검사',
    maxForwards: 'Max-Forwards 테스트',
    fingerprinting: '프록시 지문 인식',
    timing: '시간 분석',
    advanced: '고급 옵션',
    apiSelection: 'API 선택'
  },

  apis: {
    ipify: 'ipify API',
    ipapi: 'IP-API',
    httpbin: 'httpbin'
  },

  results: {
    title: '감지 결과',
    summary: '프록시 요약',
    headers: '전체 요청 헤더',
    info: '프록시 정보 설명',
    detected: '프록시 감지됨',
    notDetected: '프록시 감지되지 않음',
    detectedDescription: '요청이 하나 이상의 프록시 서버를 통해 전달되었을 수 있습니다',
    notDetectedDescription: '요청이 직접 대상 서버에 도달한 것으로 보이며 프록시를 통과하지 않았습니다',
    clientInfo: '클라이언트 IP 정보',
    remoteIp: '원격 IP 주소',
    location: '지리적 위치',
    isp: 'ISP 제공자',
    proxyHeaders: '프록시 관련 헤더 정보',
    details: '상세 결과',
    proxy: '프록시',
    type: '유형',
    ip: 'IP 주소',
    software: '소프트웨어',
    confidence: '신뢰도',
    latency: '지연 시간',
    headers: '수정된 헤더',
    fingerprint: '지문',
    export: '결과 내보내기',
    clear: '결과 지우기',
    noData: '사용 가능한 데이터 없음',
    originalRequest: '원본 요청',
    modifiedRequest: '수정된 요청',
    proxyChain: '프록시 체인',
    server: '서버',
    notSet: '설정되지 않음'
  },

  types: {
    forward: '포워드 프록시',
    reverse: '리버스 프록시',
    transparent: '투명 프록시',
    anonymous: '익명 프록시',
    elite: '고급 익명 프록시',
    caching: '캐싱 프록시',
    gateway: '게이트웨이',
    loadBalancer: '로드 밸런서',
    cdn: 'CDN',
    corporate: '기업 프록시',
    unknown: '알 수 없는 유형'
  },

  headers: {
    title: '헤더 분석',
    original: '원본 헤더',
    modified: '수정된 헤더',
    added: '추가된 헤더',
    removed: '제거된 헤더',
    changed: '변경된 헤더',
    suspicious: '의심스러운 헤더',
    select: '분석할 헤더 선택',
    name: '헤더 이름',
    value: '값',
    all: '모든 HTTP 요청 헤더',
    notFound: '이 헤더를 찾을 수 없음'
  },

  details: {
    title: '프록시 상세 정보',
    software: '소프트웨어',
    version: '버전',
    features: '기능',
    modifications: '수정 사항',
    behavior: '동작',
    security: '보안 영향',
    recommendations: '권장 사항'
  },

  map: {
    title: '연결 다이어그램',
    client: '클라이언트',
    target: '대상 서버',
    hop: '홉 {n}',
    direct: '직접 연결',
    proxied: '프록시 연결',
    unknown: '알 수 없는 경로'
  },

  actions: {
    copyHeaders: '요청 헤더 복사',
    copyToClipboard: '클립보드에 복사'
  },

  messages: {
    startDetection: '프록시 감지 시작...',
    detectionComplete: '프록시 감지 완료',
    error: '감지 실패: {message}',
    timeout: '감지 시간 초과',
    exportComplete: '결과 내보내기 성공',
    noConnection: '연결을 설정할 수 없음',
    limitedResults: '제한으로 인해 결과가 제한됨',
    privateNetwork: '개인 네트워크 감지됨',
    publicNetwork: '공용 네트워크 감지됨',
    warning: '경고: {message}',
    proxyRemoved: '감지 헤더를 제거하는 프록시가 있을 수 있습니다',
    copied: '요청 헤더가 클립보드에 복사되었습니다',
    copyFailed: '복사 실패, 수동으로 복사하십시오',
    unknown: '알 수 없는 오류'
  },

  info: {
    description: 'HTTP 프록시는 클라이언트와 서버 사이에 위치하여 다양한 목적으로 HTTP 요청을 처리할 수 있는 중간 서버입니다. 프록시는 네트워크 제공자, 조직, 회사 또는 개인에 의해 설정될 수 있습니다.'
  },

  xff: {
    title: 'X-Forwarded-For란 무엇인가요?',
    description: 'X-Forwarded-For (XFF)는 HTTP 프록시 또는 로드 밸런서를 통해 웹 서버에 연결하는 클라이언트의 원본 IP 주소를 식별하는 데 사용되는 HTTP 헤더 필드입니다. 요청이 프록시를 통과할 때 서버는 일반적으로 프록시 서버의 IP 주소만 볼 수 있으며, XFF 헤더는 원본 클라이언트 IP를 추적하는 방법을 제공합니다.',
    notFound: 'X-Forwarded-For 헤더를 찾을 수 없습니다. 이는 요청이 프록시를 통과하지 않았거나 프록시가 이 헤더를 추가하지 않았음을 나타낼 수 있습니다.',
    format: {
      title: 'XFF 헤더 형식',
      description: 'XFF 헤더의 표준 형식은 쉼표로 구분된 IP 주소 목록이며, 가장 왼쪽의 IP는 원본 클라이언트이고 후속 IP는 통과한 프록시 서버입니다:'
    },
    related: {
      title: '기타 관련 프록시 헤더',
      forwardedProto: '클라이언트가 프록시에 연결하는 데 사용한 프로토콜(HTTP 또는 HTTPS) 식별',
      forwardedHost: '클라이언트가 요청한 원본 호스트 이름 식별',
      via: '요청 및 응답이 통과한 프록시 서버 표시',
      forwarded: '클라이언트 및 모든 프록시 정보를 포함하는 최신 표준 헤더'
    },
    importance: {
      title: '프록시 정보가 중요한 이유',
      security: '보안 및 액세스 제어 - 클라이언트 IP를 정확히 식별하는 것은 남용 방지 및 IP 기반 액세스 제어에 중요합니다',
      logging: '로깅 - 감사 및 문제 해결을 위해 프록시 IP보다 실제 클라이언트 IP를 기록하는 것이 더 유용합니다',
      geolocation: '지리적 위치 서비스 - IP 기반 지리적 위치 서비스는 정확한 결과를 제공하기 위해 실제 클라이언트 IP가 필요합니다',
      content: '콘텐츠 맞춤 - 일부 서비스는 사용자의 지리적 위치에 따라 지역화된 콘텐츠를 제공합니다'
    },
    security: {
      title: '보안 고려 사항',
      description: 'X-Forwarded-For 헤더는 클라이언트에 의해 위조될 수 있다는 점에 유의해야 합니다. 높은 보안 요구 사항이 있는 환경에서는 알려진 프록시 서버에서 추가한 XFF 정보만 신뢰하거나 클라이언트 IP를 확인하는 다른 방법을 사용해야 합니다.'
    }
  },

  privacy: {
    title: '개인정보 보호 팁',
    description: '감지 과정에서 귀하의 IP 주소 및 HTTP 헤더 정보는 분석을 위해 제3자 API 서비스로 전송됩니다. 이러한 서비스는 서비스를 제공하기 위해 이 정보를 수집하고 저장할 수 있습니다.',
    suggestion: '개인정보 보호에 대한 우려가 있는 경우 다른 API 제공자를 선택하거나 VPN 서비스 사용을 고려하십시오.'
  }
};