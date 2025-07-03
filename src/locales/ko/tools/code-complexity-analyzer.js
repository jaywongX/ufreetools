export default {
  name: '코드 복잡도 분석기',
  description: '순환 복잡도 및 유지보수성과 같은 코드 복잡도 메트릭을 분석합니다',
  title: '코드 복잡도 분석',
  subtitle: '자바스크립트 코드의 순환 복잡도, Halstead 메트릭, 유지보수 지수 등 다양한 복잡도 메트릭 분석',
  input: {
    title: '자바스크립트 코드 입력',
    placeholder: '자바스크립트 코드를 여기에 붙여넣기...',
    loadExample: '예제 불러오기',
    clear: '지우기'
  },
  options: {
    title: '분석 옵션',
    cyclomaticComplexity: '순환 복잡도 계산 (McCabe 복잡도)',
    halsteadMetrics: 'Halstead 메트릭 계산 (프로그램 길이, 어휘, 볼륨 등)',
    maintainabilityIndex: '유지보수 지수 계산 (코드 유지보수성 메트릭)',
    functionDetails: '함수별 분석 결과 표시'
  },
  languages: {
    title: '언어',
    javascript: '자바스크립트',
    typescript: '타입스크립트',
    python: '파이썬',
    java: '자바',
    csharp: 'C#',
    php: 'PHP',
    go: 'Go',
    ruby: '루비'
  },
  metrics: {
    title: '메트릭',
    cyclomaticComplexity: '순환 복잡도',
    maintainabilityIndex: '유지보수 지수',
    halsteadVolume: 'Halstead 볼륨',
    halsteadDifficulty: 'Halstead 난이도',
    halsteadEffort: 'Halstead 노력도',
    halsteadTime: 'Halstead 시간',
    halsteadBugs: 'Halstead 버그',
    linesOfCode: '코드 라인 수',
    logicalLoc: '논리적 코드 라인',
    commentLines: '주석 라인 수',
    commentRatio: '주석 비율',
    operatorCount: '연산자 수',
    operandCount: '피연산자 수',
    functionCount: '함수 수',
    maxNestingDepth: '최대 중첩 깊이',
    averageDepth: '평균 깊이',
    halstead: {
      title: 'Halstead 메트릭',
      length: '프로그램 길이',
      vocabulary: '어휘',
      volume: '프로그램 볼륨',
      difficulty: '난이도'
    }
  },
  results: {
    title: '분석 결과',
    file: '파일',
    method: '메소드',
    score: '점수',
    complexity: '복잡도',
    rating: '평가',
    loc: '라인 수',
    issues: '문제점',
    summary: '코드 요약',
    details: '상세 정보',
    noResults: '분석 결과가 없습니다. 코드를 입력하고 "코드 분석" 버튼을 클릭하세요.',
    avgCyclomaticComplexity: '평균 순환 복잡도',
    maintainabilityIndex: '유지보수 지수',
    linesOfCode: '코드 라인 수',
    functionDetails: '함수별 분석',
    functionName: '함수 이름',
    parameters: '매개변수 수',
    anonymousFunction: '(익명 함수)'
  },
  ratings: {
    excellent: '우수',
    good: '좋음',
    moderate: '보통',
    poor: '나쁨',
    veryPoor: '매우 나쁨'
  },
  complexity: {
    title: '복잡도 평가:',
    low: '낮은 복잡도 - 코드가 단순하고 이해하기 쉬움',
    medium: '중간 복잡도 - 코드가 허용 가능하지만 다소 복잡함',
    high: '높은 복잡도 - 코드가 너무 복잡함, 리팩토링 권장'
  },
  actions: {
    analyze: '코드 분석',
    analyzing: '분석 중...',
    clearCode: '코드 지우기',
    uploadFile: '파일 업로드',
    copy: '결과 복사',
    download: '보고서 다운로드',
    export: '보고서 내보내기 (JSON)'
  },
  messages: {
    analyzing: '코드 분석 중...',
    analysisComplete: '분석 완료',
    analysisError: '코드 분석 오류',
    analysisFailure: '코드 분석 실패: {error}',
    copied: '클립보드에 복사되었습니다!',
    emptyCode: '분석할 코드를 입력해 주세요',
    fileTooBig: '파일이 너무 큼 (최대 1MB)',
    invalidFile: '잘못되거나 지원되지 않는 파일 형식',
    errorTitle: '분석 오류'
  },
  tips: {
    title: '사용 팁',
    cyclomaticComplexity: '순환 복잡도는 코드 내 독립적인 경로의 수를 측정합니다.',
    maintainability: '유지보수 지수는 코드 유지보수성을 나타냅니다 (높을수록 좋음).',
    recommendations: '더 나은 코드 품질을 위해: 낮은 복잡도, 높은 유지보수성을 목표로 하세요.',
    refactoring: '복잡도가 10 이상인 함수는 리팩토링해야 합니다.'
  },
  article: {
    title: "코드 복잡도 분석 이해하기 - 소프트웨어 품질 향상",
    overview: {
      title: "코드 복잡도 분석이란 무엇인가요?",
      content: "<strong>코드 복잡도 분석</strong>은 소스 코드의 구조적 복잡성, 유지보수성 및 위험 요소를 평가하는 전문 도구입니다. 이 강력한 개발 도구는 개발자들이 오류 발생 가능성이 높거나 유지보수 및 확장이 어려울 수 있는 과도하게 복잡한 코드 부분을 식별하는 데 도움을 줍니다.<br><br>순환 복잡도, Halstead 메트릭, 유지보수 지수와 같은 확립된 메트릭을 사용하여 이 도구는 코드 품질을 객관적으로 수량화하고 팀이 리팩토링 조치를 우선 순위화하는 데 도움을 줍니다. 코드 복잡도 분석은 현대적인 소프트웨어 개발의 기본적인 실천 방법이며 기술 부숐 관리와 코드 품질 향상을 지원합니다."
    },
    useCases: {
      title: "코드 복잡도 분석의 사용 사례",
      items: [
        {
          title: "기술 부숐 관리",
          description: "기술 부숐를 유발하는 복잡한 코드 영역을 식별하고 팀이 부숐 감소를 우선 순위화하는 데 도움을 줍니다."
        },
        {
          title: "코드 리뷰 개선",
          description: "수동 코드 리뷰를 객관적인 복잡도 메트릭으로 보완하여 문제 식별을 돕습니다."
        },
        {
          title: "리팩토링 우선 순위 결정",
          description: "어떤 코드 부분을 먼저 리팩토링해야 할지 객관적으로 결정하는 데 도움을 줍니다."
        },
        {
          title: "품질 보증",
          description: "CI/CD 파이프라인에서 복잡도 임계값을 설정하여 높은 품질 표준을 유지할 수 있도록 합니다."
        },
        {
          title: "테스트 리소스 할당",
          description: "통계적으로 오류 발생 가능성이 높은 복잡한 코드에 더 많은 테스트 리소스를 할당합니다."
        },
        {
          title: "새로운 개발자 온보딩",
          description: "새로운 팀 구성원이 복잡한 코드베이스에 점진적으로 적응할 수 있도록 돕습니다."
        },
        {
          title: "레거시 코드 평가",
          description: "구형 시스템의 유지보수 비용과 변경 위험을 평가합니다."
        }
      ]
    },
    guide: {
      title: "코드 복잡도 분석기 사용 가이드",
      intro: "코드 복잡도를 효과적으로 분석하는 방법:",
      steps: [
        {
          title: "코드 준비",
          description: "분석할 자바스크립트 코드를 결정합니다 (전체 파일 또는 특정 함수)."
        },
        {
          title: "코드 입력",
          description: "자바스크립트 코드를 입력 필드에 붙여넣거나 예제를 불러옵니다."
        },
        {
          title: "옵션 선택",
          description: "원하는 복잡도 메트릭을 선택합니다: 순환 복잡도, Halstead 메트릭, 유지보수 지수 및/또는 함수 상세 정보."
        },
        {
          title: "분석 시작",
          description: '"코드 분석"을 클릭하여 메트릭을 계산합니다.'
        },
        {
          title: "요약 확인",
          description: "평균 복잡도, 유지보수 지수 및 코드 라인 수가 포함된 개요를 확인합니다."
        },
        {
          title: "함수 상세 정보 분석",
          description: "강조 표시된 고복잡도 함수를 리팩토링 후보로 식별합니다."
        },
        {
          title: "결과 내보내기",
          description: "문서화 또는 팀 커뮤니케이션을 위해 JSON 내보내기 기능을 사용합니다."
        }
      ]
    },
    metrics: {
      title: "코드 복잡도 메트릭 설명",
      intro: "분석은 코드 평가를 위해 여러 가지 확립된 메트릭을 사용합니다:",
      items: [
        {
          name: "순환 복잡도",
          description: "독립적인 코드 경로의 수를 측정합니다 (분기, 조건). 값이 높을수록 결정 지점이 많고 복잡도가 높음을 의미합니다. 함수당 10 미만이 이상적입니다."
        },
        {
          name: "Halstead 메트릭",
          description: "연산자/피연산자를 기반으로 코드 범위와 인지 부하를 평가합니다. 볼륨, 난이도, 노력도 및 예상 버그 수를 포함합니다. 값이 낮을수록 유지보수가 용이한 코드를 나타냅니다."
        },
        {
          name: "유지보수 지수",
          description: "복잡도, 볼륨 및 코드 라인 수를 결합한 메트릭 (0-100). >70 = 좋음, <20 = 유지보수 어려움."
        },
        {
          name: "코드 라인 수 (LOC)",
          description: "코드 범위에 대한 간단한 측정. 긴 함수 (>100 라인)는 더 작은 단위로 분할해야 합니다."
        },
        {
          name: "매개변수 수",
          description: "함수 매개변수의 수. 많은 매개변수 (>4)는 사용을 어렵게 하고 리팩토링 필요성을 나타냅니다."
        }
      ]
    },
    faq: {
      title: "코드 복잡도 분석에 대한 자주 묻는 질문",
      items: [
        {
          question: "코드 복잡도 분석이 왜 중요한가요?",
          answer: "복잡한 코드는 오류 발생 가능성이 높고 유지보수 비용이 많이 듭니다. 분석은 문제를 조기에 발견하고 품질을 향상시키며 비용을 절감하고 생산성을 높이는 데 도움을 줍니다."
        },
        {
          question: "좋은 순환 복잡도 값은 무엇인가요?",
          answer: "<5 = 단순/우수, 6-10 = 중간/허용 가능, >10 = 복잡/리팩토링 필요, >15 = 고복잡도/높은 우선 순위. 조직별 임계값 설정이 가능합니다."
        },
        {
          question: "이 도구는 자바스크립트 외의 다른 언어에서도 작동하나요?",
          answer: "현재는 자바스크립트만 지원합니다. 메트릭은 일반적이지만 구문 분석은 언어별로 다릅니다. 다른 언어의 경우 해당 도구가 필요합니다."
        },
        {
          question: "이 메트릭들은 얼마나 정확한가요?",
          answer: "이 메트릭들은 객관적인 구조적 평가를 제공하지만 모든 품질 측면 (예: 아키텍처, 명명 규칙)을 포착하지는 않습니다. 코드 리뷰 및 정적 분석과 결합하여 포괄적인 평가를 수행하세요."
        },
        {
          question: "이 분석기를 CI/CD 파이프라인에 통합할 수 있나요?",
          answer: "이 웹 도구는 대화형이지만 'complexity-report', 'eslint-plugin-complexity' 또는 'SonarQube'와 같은 라이브러리는 자바스크립트에 대한 복잡도 임계값과 함께 CI/CD 통합을 가능하게 합니다."
        },
        {
          question: "고복잡도일 경우 어떻게 해야 하나요?",
          answer: "리팩토링 기술 적용: 큰 함수를 작은 단위로 분할, 중첩 감소, 조건 단순화, 복잡한 로직 추출, 디자인 패턴 사용, 라이브러리 활용, 문서 보완 및 테스트 추가."
        },
        {
          question: "낮은 복잡도가 항상 더 나은 코드를 의미하나요?",
          answer: "반드시 그렇지는 않습니다. 때로는 약간 더 복잡한 코드가 성능이 더 좋거나 도메인에 더 적합할 수 있습니다. 메트릭은 결정을 알리는 데 사용해야 하며 결정을 내리는 데 사용하지 마세요. 복잡도, 성능 및 도메인 요구 사항 사이의 균형을 찾으세요."
        }
      ]
    },
    optimization: {
      title: "복잡도 분석 기반 코드 최적화 전략",
      intro: "고복잡도일 경우 다음 기술이 도움이 됩니다:",
      tips: [
        "명확한 책임을 가진 더 작은 단위로 큰 함수 분할",
        "조기 반환, 가드 절 또는 추출을 통해 중첩 감소",
        "복잡한 조건을 명명된 함수/변수로 외부화",
        "Switch-Case 및 If-Else 체인을 전략 패턴 또는 조회 테이블로 대체",
        "복잡한 루프 대신 함수형 프로그래밍 (map/filter/reduce) 사용",
        "반복을 재사용 가능한 도우미 함수로 외부화",
        "단일 책임 원칙 (함수/클래스당 하나의 변경) 적용",
        "복잡한 자체 구현 대신 검증된 라이브러리 사용",
        "긴 매개변수 목록 대신 매개변수 객체 사용",
        "필요한 복잡한 코드에 대해 철저한 문서화",
        "복잡한 코드 부분에 대한 포괄적인 테스트 작성",
        "팀 전체의 복잡도 임계값 정의 및 준수"
      ]
    }
  }
}