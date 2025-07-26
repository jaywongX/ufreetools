export default {
  name: 'HTTP 상태 코드 조회',
  description: 'HTTP 응답 상태 코드와 메시지 조회 및 이해',

  search: {
    title: '상태 코드 검색',
    placeholder: '상태 코드 입력 또는 설명으로 검색',
    button: '조회',
    recent: '최근 검색',
    common: '일반적인 상태 코드',
    filter: {
      all: '모든 카테고리',
      informational: '1xx - 정보 응답',
      success: '2xx - 성공 응답',
      redirection: '3xx - 리다이렉션',
      clientError: '4xx - 클라이언트 오류',
      serverError: '5xx - 서버 오류'
    }
  },

  results: {
    title: '상태 코드 정보',
    code: '상태 코드',
    type: '유형',
    message: '표준 메시지',
    description: '설명',
    spec: '스펙',
    references: '참조 자료',
    examples: '예시',
    noResults: '결과를 찾을 수 없음',
    searchError: '상태 코드 검색 중 오류 발생',
    tryAgain: '다른 검색어로 시도해 보세요',
    example: '예시',
    notes: '주의 사항'
  },

  categories: {
    title: '카테고리',
    information: '정보 응답 (1xx)',
    success: '성공 응답 (2xx)',
    redirection: '리다이렉션 메시지 (3xx)',
    clientError: '클라이언트 오류 응답 (4xx)',
    serverError: '서버 오류 응답 (5xx)',
    unofficial: '비공식 코드',
    internet: '인터넷 정보 서비스',
    nginx: 'Nginx',
    cloudflare: 'Cloudflare',
    aws: 'AWS'
  },

  statusInfo: {
    '100': {
      message: '계속',
      description: '서버가 요청 헤더를 받았으며 클라이언트는 요청 본문을 계속 보내야 합니다.',
      shortDescription: '요청 계속 보내기',
      fullDescription: '서버가 요청의 초기 부분을 받았으며 클라이언트는 나머지 요청을 계속 보내야 합니다.',
      notes: '일반적으로 클라이언트가 큰 요청 본문을 보내기 전에 서버가 요청을 수락할지 확인하기 위해 사용됩니다.'
    },
    '101': {
      message: '프로토콜 전환',
      description: '요청자가 서버에 프로토콜 전환을 요청했으며 서버는 이를 수락했습니다.',
      shortDescription: '프로토콜 전환',
      fullDescription: '서버가 클라이언트의 요청을 이해했으며 Upgrade 메시지 헤더를 통해 다른 프로토콜을 사용하여 이 요청을 완료할 것임을 알립니다.',
      notes: '웹소켓 연결 설정 과정에서 자주 사용됩니다.'
    },
    '200': {
      message: '성공',
      description: '요청이 성공했습니다. 성공의 의미는 HTTP 메소드에 따라 다릅니다.'
    },
    '201': {
      message: '생성됨',
      description: '요청이 성공했으며 새로운 리소스가 생성되었습니다.'
    },
    '204': {
      message: '콘텐츠 없음',
      description: '서버가 요청을 성공적으로 처리했지만 반환할 콘텐츠가 없습니다.'
    },
    '301': {
      message: '영구 이동',
      description: '요청한 리소스의 URL이 영구적으로 변경되었습니다. 새 URL은 응답에서 제공됩니다.'
    },
    '302': {
      message: '임시 이동',
      description: '요청한 리소스가 일시적으로 다른 URL에서 응답하고 있지만 요청자는 계속 원래 URL을 사용해야 합니다.'
    },
    '304': {
      message: '수정되지 않음',
      description: '리소스가 수정되지 않았으므로 클라이언트의 캐시된 버전을 사용할 수 있습니다.'
    },
    '400': {
      message: '잘못된 요청',
      description: '서버가 요청의 구문을 이해하지 못했습니다.'
    },
    '401': {
      message: '권한 없음',
      description: '요청된 리소스를 얻기 위해 클라이언트가 인증되어야 합니다.'
    },
    '403': {
      message: '금지됨',
      description: '클라이언트가 콘텐츠에 접근할 권한이 없습니다.'
    },
    '404': {
      message: '찾을 수 없음',
      description: '서버가 요청한 리소스를 찾을 수 없습니다.'
    },
    '500': {
      message: '내부 서버 오류',
      description: '서버가 처리 방법을 모르는 상황을 마주쳤습니다.'
    },
    '502': {
      message: '잘못된 게이트웨이',
      description: '서버가 게이트웨이 또는 프록시 역할을 할 때 업스트림 서버로부터 잘못된 응답을 받았습니다.'
    },
    '503': {
      message: '서비스를 사용할 수 없음',
      description: '서버가 요청을 처리할 준비가 되어 있지 않습니다. 일반적인 원인은 서버가 유지 보수 중이거나 과부하 상태입니다.'
    }
  },

  tools: {
    title: '도구',
    checkUrl: 'URL 상태 확인',
    statusCodeFlow: '상태 코드 흐름도',
    apiTest: 'API 테스터',
    debugger: '응답 디버거',
    statusInspector: 'URL 상태 검사기'
  },

  features: {
    title: '기능',
    overview: '상태 코드 개요',
    comparison: '상태 코드 비교',
    troubleshooting: '문제 해결 가이드',
    bestPractices: '모범 사례',
    codeExamples: '코드 예시'
  },

  details: {
    title: '상세 정보',
    history: '역사',
    browser: '브라우저 동작',
    seo: 'SEO 영향',
    security: '보안 영향',
    bestPractices: '모범 사례',
    alternatives: '대체 상태 코드',
    commonErrors: '일반적인 오류'
  },

  codeExamples: {
    title: '코드 예시',
    nodejs: 'Node.js',
    python: 'Python',
    php: 'PHP',
    java: 'Java',
    go: 'Go',
    copyCode: '코드 복사',
    response: '응답 예시',
    request: '요청 예시'
  },

  category: {
    intro: 'HTTP 상태 코드는 서버가 브라우저 요청에 대한 응답 상태를 나타내며 5가지 범주로 분류됩니다:',
    informational: '1xx (정보 상태 코드) - 수신된 요청이 처리 중임',
    success: '2xx (성공 상태 코드) - 요청이 정상적으로 처리 완료됨',
    redirection: '3xx (리다이렉션 상태 코드) - 요청 완료를 위해 추가 작업이 필요함',
    clientError: '4xx (클라이언트 오류 상태 코드) - 서버가 요청을 처리할 수 없음',
    serverError: '5xx (서버 오류 상태 코드) - 서버가 요청 처리 중 오류 발생'
  },

  codes: {
    '100': {
      shortDescription: '요청 계속 보내기',
      description: '서버가 요청의 초기 부분을 받았으며 클라이언트는 나머지 요청을 계속 보내야 합니다.',
      notes: '일반적으로 클라이언트가 큰 요청 본문을 보내기 전에 서버가 요청을 수락할지 확인하기 위해 사용됩니다.'
    },
    '101': {
      shortDescription: '프로토콜 전환',
      description: '서버가 클라이언트의 요청을 이해했으며 Upgrade 메시지 헤더를 통해 다른 프로토콜을 사용하여 이 요청을 완료할 것임을 알립니다.',
      notes: '웹소켓 연결 설정 과정에서 자주 사용됩니다.'
    },
    '200': {
      shortDescription: '요청 성공',
      description: '요청이 성공했으며 서버가 요청한 콘텐츠를 반환했습니다. 가장 일반적인 상태 코드입니다.',
      notes: '모든 성공적인 GET 요청은 이 상태 코드를 반환해야 합니다.'
    },
    '201': {
      shortDescription: '생성됨',
      description: '요청이 성공했으며 서버가 새로운 리소스를 생성했습니다. 일반적으로 POST 요청 후 반환됩니다.',
      notes: '새로 생성된 리소스의 위치(URI)를 반환해야 합니다.'
    },
    '204': {
      shortDescription: '콘텐츠 없음',
      description: '서버가 요청을 성공적으로 처리했지만 반환할 엔티티 콘텐츠가 없습니다.',
      notes: '일반적으로 DELETE 요청이 성공했거나 클라이언트 뷰를 재설정하기만 하면 되는 경우에 사용됩니다.'
    },
    '301': {
      shortDescription: '영구 리다이렉션',
      description: '요청한 리소스가 영구적으로 새 위치로 이동되었으며, 이후 이 리소스에 대한 모든 참조는 새 URL을 사용해야 합니다.',
      notes: '검색 엔진은 리소스의 URL을 업데이트하며 브라우저는 일반적으로 이 리다이렉션을 캐시합니다.'
    },
    '302': {
      shortDescription: '임시 리다이렉션',
      description: '요청한 리소스가 일시적으로 다른 URL에서 응답하고 있지만 요청자는 계속 원래 URL을 사용해야 합니다.',
      notes: '301과 달리 검색 엔진은 리소스 링크를 업데이트하지 않으며 브라우저는 이 리다이렉션을 캐시하지 않을 수 있습니다.'
    },
    '304': {
      shortDescription: '수정되지 않음',
      description: '리소스가 수정되지 않았으므로 클라이언트의 캐시된 버전을 사용할 수 있습니다. 일반적으로 조건부 GET 요청에 사용됩니다.',
      notes: '서버는 응답 본문을 반환하지 않아야 하며, 이는 성능 향상과 대역폭 사용 감소에 도움이 됩니다.'
    },
    '400': {
      shortDescription: '잘못된 요청',
      description: '서버가 요청 형식을 이해할 수 없으며 클라이언트는 요청을 수정하지 않고 반복해서 제출해서는 안 됩니다.',
      notes: '일반적으로 요청 매개변수 형식 오류, 필수 매개변수 누락 또는 유효하지 않은 매개변수 값 때문입니다.'
    },
    '401': {
      shortDescription: '권한 없음',
      description: '요청에는 사용자 인증이 필요하며, 사용자가 자격 증명을 제공하지 않았거나 제공한 자격 증명이 유효하지 않습니다.',
      notes: '클라이언트는 올바른 인증 정보를 제공하거나 다시 제공해야 합니다.'
    },
    '403': {
      shortDescription: '접근 금지',
      description: '서버가 요청을 이해했지만 실행을 거부하며, 401과 달리 인증이 도움이 되지 않습니다.',
      notes: '일반적으로 관리자만 볼 수 있는 콘텐츠에 접근하려는 경우와 같이 권한이 부족할 때 발생합니다.'
    },
    '404': {
      shortDescription: '찾을 수 없음',
      description: '서버가 요청한 리소스를 찾을 수 없으며, URL 철자가 틀렸거나 리소스가 삭제되었을 수 있습니다.',
      notes: '가장 일반적인 오류 상태 코드 중 하나이며 사용자에게 리소스가 존재하지 않음을 명확히 알려야 합니다.'
    },
    '405': {
      shortDescription: '허용되지 않는 메소드',
      description: '요청 행에 지정된 요청 메소드는 해당 리소스에 대해 사용할 수 없습니다.',
      notes: '응답에는 해당 리소스에 유효한 요청 메소드를 나타내는 Allow 헤더가 포함되어야 합니다.'
    },
    '409': {
      shortDescription: '충돌',
      description: '요청이 서버의 현재 상태와 충돌하며, 일반적으로 PUT 요청에서 발생합니다.',
      notes: '이미 존재하는 리소스를 생성하려고 하거나 동일한 리소스를 동시에 편집하는 경우에 일반적으로 발생합니다.'
    },
    '429': {
      shortDescription: '너무 많은 요청',
      description: '사용자가 주어진 시간 내에 너무 많은 요청을 보냈습니다("속도 제한").',
      notes: 'Retry-After 헤더를 포함하여 클라이언트가 언제 다시 요청을 보낼 수 있는지 알려야 합니다.'
    },
    '500': {
      shortDescription: '내부 서버 오류',
      description: '서버가 처리 방법을 모르는 상황을 마주쳤으며, 일반적으로 코드 오류 또는 일시적인 오류입니다.',
      notes: '가장 일반적인 서버 오류 상태 코드 중 하나이며 가능한 한 자세한 오류 정보와 로그를 제공하여 디버깅에 도움을 줘야 합니다.'
    },
    '502': {
      shortDescription: '잘못된 게이트웨이',
      description: '서버가 게이트웨이 또는 프록시 역할을 할 때 업스트림 서버로부터 잘못된 응답을 받았습니다.',
      notes: '일반적으로 리버스 프록시 또는 로드 밸런서를 사용할 때 업스트림 서비스를 사용할 수 없거나 응답이 비정상적인 경우 발생합니다.'
    },
    '503': {
      shortDescription: '서비스를 사용할 수 없음',
      description: '서버가 일시적으로 사용할 수 없으며, 일반적으로 과부하 또는 시스템 유지 보수 때문입니다.',
      notes: '클라이언트가 언제 다시 시도해야 하는지 나타내는 Retry-After 헤더를 포함해야 하며, 이는 서버 부하를 줄이는 데 도움이 됩니다.'
    },
    '504': {
      shortDescription: '게이트웨이 시간 초과',
      description: '서버가 게이트웨이 또는 프록시 역할을 할 때 업스트림 서버로부터 응답을 제때 받지 못했습니다.',
      notes: '일반적으로 프록시된 서비스의 처리 시간이 너무 길거나 네트워크 연결 문제가 있을 때 발생합니다.'
    }
  }
};