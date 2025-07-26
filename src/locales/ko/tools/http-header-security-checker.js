export default {
  name: 'HTTP 헤더 보안 검사기',
  description: 'HTTP 응답 헤더를 분석하고 보안성을 평가합니다',
  title: 'HTTP 헤더 보안 검사 도구',
  intro: '웹사이트의 HTTP 응답 헤더를 분석하여 CSP, HSTS 등의 보안 설정을 검사하고 개선 사항을 제공합니다',

  input: {
    title: 'URL 또는 헤더 입력',
    url: 'URL',
    urlPlaceholder: '검사할 URL 입력 (예: https://example.com)',
    headers: '또는 HTTP 헤더 직접 붙여넣기',
    headersPlaceholder: '원시 HTTP 헤더를 여기에 붙여넣기...',
    options: '스캔 옵션',
    followRedirects: '리디렉션 따라가기',
    includeSubresources: '하위 리소스 검사 (CSS, JS 등)',
    timeout: '타임아웃 (초)',
    checkButton: '헤더 검사',
    analyzing: '분석 중...'
  },

  results: {
    title: '보안 헤더 분석',
    overview: '개요',
    score: '보안 점수',
    totalScore: '총점 100',
    scanned: '스캔된 URL',
    date: '스캔 날짜',
    headers: {
      title: '발견된 헤더',
      name: '헤더',
      value: '값',
      status: '상태'
    },
    allHeaders: {
      title: '모든 응답 헤더',
      name: '이름',
      value: '값',
      noData: '응답 헤더 데이터 없음'
    },
    missing: {
      title: '누락된 보안 헤더',
      description: '다음 권장 보안 헤더를 찾을 수 없습니다:'
    },
    issues: {
      title: '보안 문제',
      critical: '심각',
      high: '높음',
      medium: '중간',
      low: '낮음',
      info: '정보'
    },
    recommendations: {
      title: '권장 사항',
      description: '보안성을 높이기 위해 다음 헤더 추가를 고려하세요:',
      example: '예제 구성'
    },
    rating: {
      unknown: '알 수 없음',
      excellent: '우수',
      good: '좋음',
      fair: '보통',
      poor: '나쁨',
      high_risk: '고위험',
      descriptions: {
        unknown: '웹사이트의 보안 헤더 정보를 가져올 수 없음',
        excellent: '웹사이트가 모든 주요 보안 헤더를 구현함',
        good: '웹사이트가 대부분의 중요한 보안 헤더를 구현함',
        fair: '웹사이트가 일부 중요한 보안 헤더가 누락됨',
        poor: '웹사이트가 여러 핵심 보안 헤더가 누락됨',
        high_risk: '웹사이트가 거의 모든 보안 헤더 보호 기능이 없음'
      }
    }
  },

  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: 'HTTP 대신 HTTPS 연결을 강제합니다',
      recommendation: '"Strict-Transport-Security: max-age=31536000; includeSubDomains; preload" 추가',
      status: {
        good: '올바르게 구성됨',
        bad: '구성되지 않음',
        warning: '개선 가능한 구성'
      },
      recommendationConfigured: '기존 구성이 구현되었으며 충분히 긴 max-age와 includeSubDomains가 포함되어 있는지 확인하세요',
      recommendationMissing: '모든 통신이 HTTPS를 통해 이루어지도록 HSTS를 활성화하는 것이 좋습니다'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: 'MIME 유형 스니핑 방지',
      recommendation: '"X-Content-Type-Options: nosniff" 추가',
      status: {
        good: '올바르게 구성됨',
        bad: '구성되지 않았거나 잘못 구성됨'
      },
      recommendationConfigured: '구성이 올바르며 현재 설정을 유지하세요',
      recommendationMissing: '이 헤더를 "nosniff" 값으로 설정하는 것이 좋습니다'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: '웹사이트가 iframe에 임베드되는 것을 방지하여 클릭재킹 공격을 방지합니다',
      recommendation: '"X-Frame-Options: DENY" 또는 "SAMEORIGIN" 추가',
      status: {
        good: '구성됨',
        bad: '구성되지 않음'
      },
      recommendationConfigured: '기존 구성이 구현되었으며 DENY 또는 SAMEORIGIN 사용을 권장합니다',
      recommendationMissing: '클릭재킹을 방지하기 위해 이 헤더를 DENY 또는 SAMEORIGIN으로 구성하는 것이 좋습니다'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: '사용자 에이전트가 로드할 수 있는 리소스를 제어합니다',
      recommendation: '적절한 지시문이 포함된 Content-Security-Policy 헤더 추가',
      status: {
        good: '올바르게 구성됨',
        bad: '구성되지 않음',
        warning: '개선 가능한 구성'
      },
      recommendationConfigured: '기존 구성이 구현되었으며 정기적으로 정책을 검토하고 업데이트하세요',
      recommendationMissing: 'XSS 공격에 대한 방어력을 높이기 위해 로드할 수 있는 리소스의 출처를 제한하는 CSP를 구성하는 것이 좋습니다'
    },
    xXssProtection: {
      name: 'X-XSS-Protection',
      description: '이 헤더는 구형 브라우저에서 XSS 필터링을 활성화합니다. 최신 브라우저에서는 CSP를 대신 사용하는 것이 좋습니다.',
      recommendation: '이 헤더는 최신 브라우저에서 CSP로 대체되었지만 구형 브라우저와의 호환성을 위해 "1; mode=block"으로 설정하는 것이 좋습니다',
      status: {
        enabled: '활성화됨',
        disabled: '비활성화됨',
        notConfigured: '구성되지 않음 (최신 브라우저에서는 CSP 사용 권장)'
      }
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: 'Referer 헤더에 포함된 정보를 제어합니다',
      recommendation: '"Referrer-Policy: no-referrer-when-downgrade" 또는 더 엄격한 정책 추가',
      status: {
        good: '구성됨',
        bad: '구성되지 않음'
      },
      recommendationConfigured: '기존 구성이 구현되었으며 strict-origin 또는 strict-origin-when-cross-origin 사용을 권장합니다',
      recommendationMissing: '참조 출처 정보 전달을 제어하기 위해 이 헤더를 구성하는 것이 좋습니다'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: '어떤 브라우저 기능과 API를 사용할 수 있는지 제어합니다',
      recommendation: '적절한 제한이 포함된 Permissions-Policy 헤더 추가',
      status: {
        good: '구성됨',
        bad: '구성되지 않음'
      },
      recommendationConfigured: '기존 구성이 구현되었으며 불필요한 기능을 제한하세요',
      recommendationMissing: '웹사이트가 사용할 수 있는 브라우저 기능을 제한하기 위해 이 헤더를 구성하는 것이 좋습니다'
    }
  },

  status: {
    good: '좋음',
    warning: '경고',
    bad: '나쁨',
    info: '정보',
    notApplicable: '해당 없음'
  },

  actions: {
    export: '보고서 내보내기',
    copyHeaders: '헤더 복사',
    copyRecommendations: '권장 사항 복사',
    scan: '새 스캔',
    share: '결과 공유',
    analyze: '헤더 정보 분석'
  },

  emptyState: {
    line1: '웹사이트 URL을 입력하여 HTTP 응답 헤더의 보안 구성을 분석하세요',
    line2: 'CSP, HSTS 등의 보안 헤더에 대한 상세 평가와 권장 사항을 얻으세요'
  },

  messages: {
    scanning: '{url} 스캔 중...',
    completed: '스캔 완료',
    error: '오류: {message}',
    timeout: '요청 시간 초과',
    invalidUrl: '잘못된 URL',
    invalidUrlFormat: 'http:// 또는 https://로 시작하는 유효한 URL을 입력하세요',
    copied: '클립보드에 복사됨',
    exportComplete: '보고서 내보내기 성공',
    httpWarning: '경고: HTTP 사용은 안전하지 않을 수 있습니다',
    noHeaders: '헤더 정보를 찾을 수 없음',
    fetchError: '헤더 정보를 가져올 수 없음: {error}'
  }
};