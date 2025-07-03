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
  },
  article: {
    title: "HTTP 프록시 감지기 - 네트워크 프록시 식별 및 분석",
    intro: {
      title: "HTTP 프록시 감지란 무엇인가요?",
      p1: "<b>HTTP 프록시 감지</b>는 인터넷 연결이 프록시라고 불리는 하나 이상의 중간 서버를 통해 이루어지는지 확인하는 과정입니다. 우리의 HTTP 프록시 감지 도구는 X-Forwarded-For, Via 등의 HTTP 헤더를 검사하여 연결 경로에서 프록시의 존재를 식별합니다.",
      p2: "프록시는 사용자의 장치와 방문하는 웹사이트 사이에 위치하는 중간 서버입니다. 캐싱을 통한 성능 향상, 액세스 제어 적용 또는 익명성 제공과 같은 다양한 합법적인 목적으로 사용될 수 있습니다. 그러나 사용자의 지식이나 동의 없이 프록시를 사용하는 것은 보안 위험을 초래할 수도 있습니다. 우리의 <b>프록시 감지 도구</b>는 네트워크에서 숨겨진 프록시를 식별하여 보안 인식을 높이고 문제 해결을 지원합니다.",
      p3: "<b>HTTP 프록시 서버</b>를 통해 연결할 경우, 사용자의 브라우징 활동에 대한 특정 정보가 프록시 운영자에게 노출될 수 있습니다. 이 온라인 프록시 감지 도구는 사용자의 연결이 직접적인지 또는 하나 이상의 프록시 계층을 통해 이루어지는지 이해할 수 있게 하여 온라인 개인정보 보호 및 보안에 대한 더 큰 통제력을 제공합니다."
    },
    useCases: {
      title: "프록시 감지의 실제 적용 사례",
      case1: "<b>네트워크 문제 해결</b>: 연결 문제가 발생할 때 프록시 감지는 중간 서버가 문제의 원인인지 확인하는 데 도움이 될 수 있습니다. IT 전문가들은 네트워크 문제를 진단하기 위해 프록시 구성을 확인해야 하는 경우가 많습니다.",
      case2: "<b>보안 검증</b>: 개인 브라우징이 트래픽을 모니터링하거나 수정할 수 있는 무단 프록시 서버를 통해 이루어지지 않도록 보장합니다. 조직은 프록시 감지를 사용하여 회사 보안 정책이 올바르게 구현되었는지 확인할 수 있습니다.",
      case3: "<b>웹사이트 개발자</b>: 웹사이트 개발자는 콘텐츠 전송 네트워크(CDN) 또는 로드 밸런서와 같은 프록시 역할을 하는 서비스를 사용할 때 콘텐츠가 사용자에게 어떻게 전달되는지 이해해야 합니다. 보안 및 분석을 위해 올바른 헤더 처리를 테스트하는 것이 중요합니다.",
      case4: "<b>지리적 제한 검증</b>: VPN 또는 프록시 서비스가 지역 제한 콘텐츠에 액세스하기 위해 사용자의 위치를 올바르게 숨기고 있는지 확인합니다. 우리의 도구는 지리적 우회 조치가 제대로 작동하는지 확인하는 데 도움이 됩니다.",
      case5: "<b>기업 환경 검사</b>: 기업 환경에서 근무하는 직원의 경우, 인터넷 액세스 또는 애플리케이션 기능에 영향을 미칠 수 있는 회사 프록시의 존재 및 구성을 확인합니다. 애플리케이션 연결 문제를 해결할 때 특히 중요합니다."
    },
    tutorial: {
      title: "연결에서 HTTP 프록시를 감지하는 방법",
      intro: "우리의 HTTP 프록시 감지 도구를 효과적으로 사용하고 네트워크 구성을 이해하려면 다음 단계별 가이드를 따르십시오:",
      step1: {
        title: "단계 1: 감지 프로세스 시작",
        description: "도구 인터페이스에서 <b>\"감지 시작\"</b> 버튼을 클릭하여 시작하십시오. 감지기는 전용 API 엔드포인트에 요청을 보내 즉시 연결 분석을 시작합니다. 기본적으로 이 도구는 가장 신뢰할 수 있는 감지 방법을 자동으로 선택하지만, 더 포괄적인 테스트를 위해 다른 API를 선택할 수 있습니다."
      },
      step2: {
        title: "단계 2: 요약 결과 확인",
        description: "감지가 완료되면 <b>\"프록시 요약\"</b> 탭에 연결에서 프록시가 감지되었는지 여부가 표시됩니다. 직접 연결을 나타내는 녹색 체크 표시 또는 프록시 발견을 나타내는 노란색 경고 아이콘을 찾으십시오. 요약에는 또한 감지된 IP 주소 및 위치 정보가 표시되며, 이는 실제 위치가 숨겨져 있는지 확인하는 데 도움이 될 수 있습니다."
      },
      step3: {
        title: "단계 3: 프록시 헤더 상세 검사",
        description: "<b>\"전체 요청 헤더\"</b> 탭을 클릭하여 요청의 모든 HTTP 헤더를 확인하십시오. 특히 X-Forwarded-For, Via 및 Forwarded와 같이 프록시 사용을 나타내는 헤더에 주목하십시오. X-Forwarded-For 헤더는 특히 중요하며, 요청이 통과한 다양한 프록시의 경로를 보여주는 일련의 IP 주소를 포함합니다. 이 섹션 하단의 버튼을 사용하여 모든 헤더를 클립보드에 복사하여 추가 분석할 수 있습니다."
      },
      step4: {
        title: "단계 4: 프록시 정보 이해",
        description: "감지된 헤더의 의미를 더 깊이 이해하려면 <b>\"프록시 정보 설명\"</b> 탭을 방문하십시오. 이 섹션은 다양한 프록시 관련 헤더의 목적과 연결 보안에 미치는 영향을 설명합니다. 이 지식을 사용하여 감지된 프록시가 예상된 것(예: 회사 네트워크 프록시)인지 또는 잠재적으로 원치 않는 중간자(man-in-the-middle)인지 확인하십시오."
      }
    },
    techniques: {
      title: "HTTP 프록시 감지 기술 이해",
      intro: "우리의 도구는 네트워크 연결에서 프록시를 정확하게 감지하기 위해 여러 방법을 사용합니다. 다음은 사용되는 주요 기술의 개요입니다:",
      method1: {
        title: "헤더 분석",
        description: "가장 일반적인 감지 방법은 X-Forwarded-For, Via 및 Forwarded와 같이 일반적으로 프록시 서버에 의해 추가되는 HTTP 헤더를 검사하는 것입니다. 이러한 헤더는 일반적으로 클라이언트 원본 IP 주소 및 프록시 체인에 대한 정보를 포함합니다."
      },
      method2: {
        title: "IP 비교",
        description: "우리의 도구는 서버가 보는 IP 주소와 예상 클라이언트 IP를 비교합니다. 이러한 IP 간의 차이는 일반적으로 프록시의 존재를 나타냅니다. 이 방법은 특히 투명 프록시를 감지하는 데 유용합니다."
      },
      method3: {
        title: "응답 시간 분석",
        description: "응답 시간을 분석함으로써 때때로 프록시를 감지할 수 있으며, 이는 일반적으로 네트워크 요청에 지연을 추가합니다. 캐싱 프록시는 콘텐츠가 캐시되었는지 여부에 따라 일관되지 않은 시간 패턴을 보일 수 있습니다."
      },
      method4: {
        title: "서버 측 감지",
        description: "우리의 API는 포트 스캐닝, 알려진 프록시 IP 데이터베이스 및 HTTP 요청의 동작 패턴을 기반으로 특정 유형의 프록시를 식별할 수 있는 서버 측 검사를 수행합니다."
      }
    },
    faq: {
      title: "HTTP 프록시 감지에 관한 자주 묻는 질문",
      q1: "내 연결이 프록시를 사용하는지 확인해야 하는 이유는 무엇인가요?",
      a1: "프록시 확인은 여러 가지 이유로 중요합니다: <b>보안 인식</b>(트래픽이 모니터링되는지 여부 이해), <b>개인정보 보호 우려</b>(누가 브라우징 데이터에 액세스할 수 있는지 이해), <b>네트워크 문제 해결</b>(프록시가 연결 문제의 원인인지 확인), 및 <b>VPN 기능 검증</b>(개인정보 보호 도구가 제대로 작동하는지 확인). 정기적인 프록시 감지는 네트워크 보안 상태에 대한 인식을 유지하는 데 도움이 됩니다.",
      
      q2: "HTTP 프록시 감지 도구가 모든 유형의 프록시를 식별할 수 있나요?",
      a2: "우리의 HTTP 프록시 감지기는 헤더 분석을 통해 일반적인 프록시를 효과적으로 식별할 수 있지만, 일부 고급 프록시 유형은 감지하기 더 어려울 수 있습니다. <b>투명 프록시</b>는 헤더를 수정하지 않으며 때로는 IP 차이를 통해 식별할 수 있습니다. 존재를 숨기도록 설계된 <b>익명 프록시</b>는 시간 분석 또는 서버 측 기술을 통해 감지될 수 있습니다. 그러나 감지를 피하도록 특별히 설계된 <b>고급 익명 프록시</b>는 클라이언트 도구로는 식별되지 않을 수 있습니다. 보다 포괄적인 감지를 위해 우리는 도구에서 여러 API 옵션을 사용할 것을 권장합니다.",
      
      q3: "프록시 사용이 불법이거나 컴퓨터에 해로운가요?",
      a3: "대부분의 국가에서 프록시 사용은 일반적으로 합법적이며 컴퓨터에 해롭지 않습니다. 프록시는 캐싱을 통한 <b>인터넷 성능 향상</b>, IP 주소 숨김을 통한 <b>개인정보 보호 강화</b>, <b>지역 제한 콘텐츠 액세스</b>, 및 기업 환경에서 <b>보안 정책 구현</b>과 같은 많은 합법적인 용도가 있습니다. 그러나 합법성은 프록시 사용 방법에 따라 달라집니다 - 저작권 제한을 우회하거나 서비스 약관을 위반하는 프록시 사용은 문제가 될 수 있습니다. 현지 법률 및 서비스 약관을 준수하면서 프록시를 사용하십시오.",
      
      q4: "프록시와 VPN의 차이점은 무엇인가요?",
      a4: "프록시와 VPN 모두 중간 서버를 통해 트래픽을 라우팅하지만 몇 가지 중요한 차이점이 있습니다: <b>VPN은 모든 트래픽을 암호화</b>(장치와 VPN 서버 간), 반면 대부분의 프록시는 암호화를 제공하지 않습니다. VPN은 일반적으로 장치의 <b>모든 인터넷 트래픽</b>을 라우팅하는 반면, 프록시는 일반적으로 특정 애플리케이션 또는 프로토콜의 트래픽만 처리합니다. VPN은 표준 프록시에 비해 <b>더 나은 개인정보 보호</b> 및 보안 기능을 제공합니다. 두 기술 모두 연결 경로를 수정하기 때문에 우리의 프록시 감지기는 VPN 연결을 프록시로 식별할 수 있습니다.",
      
      q5: "회사가 프록시 서버를 사용하는 이유와 걱정해야 하나요?",
      a5: "회사는 몇 가지 합법적인 이유로 프록시 서버를 구현합니다: <b>콘텐츠 필터링</b>(특정 웹사이트 액세스 제한), <b>대역폭 최적화</b>(자주 액세스하는 콘텐츠 캐싱), <b>보안 강화</b>(악성코드 또는 취약점 스캔), <b>직원 활동 모니터링</b>(허용 가능한 사용 정책 준수 보장), 및 <b>내부 리소스에 대한 원격 액세스 제공</b>. 기업 프록시는 일반적으로 개인정보 보호 문제가 아니지만 회사 네트워크에서의 온라인 활동이 모니터링될 수 있다는 점을 기억하는 것이 중요합니다. 우리의 프록시 감지기가 기업 프록시를 식별하면 이는 일반적으로 기업 환경에서 정상적인 상황입니다.",
      
      q6: "콘텐츠 전송 네트워크(CDN)와 프록시의 관계는 무엇인가요?",
      a6: "콘텐츠 전송 네트워크(CDN)는 <b>리버스 프록시</b>로 기능하며 우리의 도구에 의해 감지될 수 있습니다. CDN은 웹사이트 콘텐츠를 전 세계 서버 네트워크에 분산시켜 로딩 속도와 안정성을 향상시킵니다. CDN을 사용하여 웹사이트에 액세스할 때 요청은 일반적으로 원본 서버가 아닌 가장 가까운 CDN 서버로 라우팅됩니다. 이는 CDN 서버가 중개자 역할을 하기 때문에 연결에서 프록시로 나타납니다. 개인정보 보호 관점에서 우려할 수 있는 전통적인 프록시와 달리, CDN은 웹사이트 소유자가 사용자 경험을 개선하기 위해 구현하며 현대 웹 인프라의 정상적인 부분입니다."
    },
    relatedTools: {
      title: "관련 네트워크 분석 도구",
      description: "네트워크 구성 및 보안에 대한 추가 통찰력을 얻기 위해 다음 도구를 탐색하십시오:",
      tool1: {
        name: "HTTP 헤더 보안 검사기",
        url: "https://www.ufreetools.com/tool/http-header-security-checker",
        description: "웹사이트의 HTTP 응답 헤더를 분석하여 CSP, HSTS 등의 보안 구성을 검사하고 개선 권장 사항 제공"
      },
      tool2: {
        name: "요청 헤더 편집기",
        url: "https://www.ufreetools.com/tool/request-header-editor",
        description: "HTTP 요청 헤더 생성, 편집 및 테스트"
      },
      tool3: {
        name: "HTTP 상태 코드 조회",
        url: "https://www.ufreetools.com/tool/http-status-code-lookup",
        description: "HTTP 응답 상태 코드 및 메시지 조회 및 이해"
      },
      tool4: {
        name: "URL 파라미터 파서",
        url: "https://www.ufreetools.com/tool/url-params-parser",
        description: "URL 파라미터 및 쿼리 문자열 파싱, 분석 및 조작"
      }
    },
    resources: {
      title: "프록시 및 네트워크 보안에 대해 더 알아보기",
      resource1: {
        name: "OWASP 테스트 가이드",
        url: "https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf",
        description: "OWASP는 애플리케이션 소프트웨어의 보안을 향상시키는 데 초점을 맞춘 전 세계적인 무료 및 오픈 커뮤니티입니다."
      },
      resource2: {
        name: "HTTP 헤더 - MDN 웹 문서",
        url: "https://developer.mozilla.org/ko/docs/Web/HTTP/Headers",
        description: "프록시 및 전달과 관련된 내용을 포함한 HTTP 헤더에 대한 Mozilla 개발자 네트워크의 상세 문서."
      },
      resource3: {
        name: "인터넷 엔지니어링 태스크 포스(IETF) - HTTP Forwarded 헤더",
        url: "https://tools.ietf.org/html/rfc7239",
        description: "프록시가 추가한 정보를 표준화하는 Forwarded HTTP 헤더를 정의하는 공식 RFC 7239 문서."
      }
    }
  }
}