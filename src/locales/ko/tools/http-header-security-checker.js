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
  },
  article: {
    title: "HTTP 헤더 보안 검사기: 웹사이트 보안 상태 강화",
    features: {
      title: "HTTP 헤더 보안 이해",
      description: "<strong>HTTP 헤더 보안 검사기</strong>는 모든 웹사이트의 <strong>보안 헤더</strong>를 분석하고 평가하도록 특별히 설계된 도구입니다. <strong>보안 헤더</strong>는 서버가 설정할 수 있는 특별한 HTTP 응답 헤더로, XSS(교차 사이트 스크립팅), 클릭재킹 및 기타 코드 주입 공격과 같은 일반적인 웹 취약점으로부터 방어하는 데 도움을 주는 추가적인 <strong>보안</strong> 계층을 제공합니다.<br><br>우리 도구는 콘텐츠 보안 정책(CSP), Strict-Transport-Security(HSTS), X-Content-Type-Options, X-Frame-Options 등의 주요 <strong>보안 헤더</strong>를 스캔합니다. 기존 <strong>헤더 구성</strong>을 평가하고 누락된 <strong>보안 헤더</strong>를 식별하며, 웹사이트의 <strong>보안 상태</strong>를 개선하기 위한 포괄적인 <strong>보안 점수</strong>와 실행 가능한 권장 사항을 제공합니다.",
      useCases: {
        title: "HTTP 헤더 보안 검사기의 일반적인 사용 사례",
        items: [
          "웹 개발자가 배포 전 새로 개발된 웹사이트에 대한 보안 감사 수행",
          "보안 전문가가 침투 테스트 및 취약점 평가 수행",
          "시스템 관리자가 여러 도메인에 걸친 서버 보안 구성 검증",
          "DevOps 팀이 CI/CD 파이프라인에 지속적인 보안 모니터링 구현",
          "웹사이트 소유자가 권장 헤더 구현 후 보안 상태 확인",
          "보안 컨설턴트가 고객에게 보안 조치 개선 필요성 설명",
          "규정 준수 담당자가 웹사이트가 업계 보안 표준 및 규정을 준수하는지 확인"
        ]
      }
    },
    faq: {
      title: "HTTP 헤더 보안에 관한 자주 묻는 질문",
      items: [
        {
          question: "HTTP 보안 헤더란 무엇이며 왜 중요한가요?",
          answer: "HTTP 보안 헤더는 서버에서 브라우저로 전송되는 특별한 지시사항으로, 브라우저가 웹사이트 콘텐츠를 처리할 때 어떻게 동작해야 하는지 제어합니다. 이들은 XSS, CSRF, 클릭재킹 및 코드 주입 공격과 같은 일반적인 웹 취약점으로부터 방어하는 추가적인 보안 계층을 제공하므로 매우 중요합니다. 적절히 구성된 보안 헤더는 최소한의 노력으로 웹사이트 보안 상태를 크게 향상시킬 수 있습니다."
        },
        {
          question: "모든 웹사이트가 구현해야 하는 보안 헤더는 무엇인가요?",
          answer: "최소한 모든 현대 웹사이트는 XSS 공격을 방지하기 위한 콘텐츠 보안 정책(CSP), HTTPS 사용을 강제하기 위한 Strict-Transport-Security(HSTS), MIME 유형 스니핑을 방지하기 위한 X-Content-Type-Options, 클릭재킹을 방지하기 위한 X-Frame-Options, 그리고 참조 헤더의 정보를 제어하기 위한 Referrer-Policy를 구현해야 합니다. 우리의 보안 헤더 검사기는 이러한 필수 헤더와 더 많은 항목을 자동으로 평가합니다."
        },
        {
          question: "보안 점수는 어떻게 계산되나요?",
          answer: "보안 점수는 주요 보안 헤더의 존재와 올바른 구성을 기반으로 계산됩니다. 콘텐츠 보안 정책과 HSTS와 같은 주요 보안 헤더는 각각 최대 20점을 기여하며, X-Content-Type-Options 및 X-Frame-Options와 같은 다른 헤더는 각각 10-15점을 기여합니다. 우리는 헤더의 존재뿐만 아니라 구현 품질도 평가하며, 최대 점수는 100점입니다."
        },
        {
          question: "이 도구를 사용해 소유하지 않은 웹사이트를 검사할 수 있나요?",
          answer: "예, HTTP 헤더 보안 검사기를 사용해 공개적으로 접근 가능한 모든 웹사이트를 분석할 수 있습니다. 이 도구는 웹 서버가 보내는 공개적으로 사용 가능한 정보인 HTTP 응답 헤더만 검사합니다. 그러나 주로 소유하거나 테스트 권한이 있는 웹사이트에서 사용하는 것이 좋습니다."
        },
        {
          question: "이 도구가 권장하는 보안 헤더를 어떻게 구현할 수 있나요?",
          answer: "구현은 웹 서버 또는 플랫폼에 따라 다릅니다. Apache의 경우 .htaccess 파일에 헤더를 추가할 수 있습니다. Nginx의 경우 서버 구성에 추가할 수 있습니다. 많은 콘텐츠 관리 시스템에는 보안 헤더 플러그인이 있습니다. HTTP 헤더 보안 검사기는 특정 환경에 맞게 조정할 수 있는 예제 구성을 제공합니다."
        }
      ]
    },
    guide: {
      title: "HTTP 헤더 보안 검사기 사용 방법",
      steps: [
        "URL 입력 필드에 검사할 웹사이트의 전체 URL을 입력하세요 (http:// 또는 https:// 포함해야 함)",
        "고급 검사를 위해 웹사이트가 리디렉션을 사용하는 경우 '리디렉션 따라가기'와 같은 옵션을 활성화하세요",
        "'헤더 검사' 버튼을 클릭하여 보안 분석 시작",
        "결과 섹션 상단의 보안 점수와 전체 등급 확인",
        "각각 상태 표시기(좋음, 경고 또는 나쁨)로 표시된 감지된 보안 헤더의 상세 분석 검사",
        "현재 값, 용도 및 구체적인 권장 사항을 보려면 보안 헤더를 클릭하여 확장",
        "'모든 응답 헤더' 섹션에서 서버가 반환한 모든 HTTP 응답 헤더의 전체 목록 확인",
        "제공된 권장 사항에 따라 웹 서버에 권장 보안 헤더를 구현한 후 검사기를 다시 실행하여 개선 사항 확인"
      ]
    },
    conclusion: "웹사이트 보안 헤더를 정기적으로 검사하고 업데이트하는 것은 웹 보안 유지 관리의 기본적인 관행입니다. HTTP 헤더 보안 검사기를 사용하면 현재 구성의 약점을 쉽게 식별하고 일반적인 웹 공격에 대한 방어력을 강화하기 위해 필요한 개선 사항을 구현할 수 있습니다. 보안 헤더는 포괄적인 보안 전략의 한 측면일 뿐이지만, 상대적으로 적은 구현 노력으로 상당한 보호 기능을 제공한다는 것을 기억하세요."
  }
}