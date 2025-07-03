export default {
  name: 'Mock API 생성기',
  description: 'OpenAPI 스펙에 따라 Mock API 자동 생성',
  
  options: {
    version: 'OpenAPI 버전',
    format: '출력 형식',
    includeExamples: '예시 응답 포함',
    responseDynamism: '응답 동적성',
    responseType: '응답 유형',
    arrayLength: '배열 길이',
    responseFormat: '응답 형식'
  },
  
  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },
  
  actions: {
    generate: 'Mock 생성',
    preview: 'API 미리보기',
    clear: '초기화',
    copy: '코드 복사',
    download: '다운로드',
    uploadSpec: 'OpenAPI 스펙 업로드',
    uploadJava: 'Java 클래스 파일 업로드',
    generateJson: 'JSON 생성',
    generateBuilder: 'Builder 생성',
    format: '정렬'
  },
  
  messages: {
    copied: '클립보드에 복사되었습니다!',
    generationSuccess: 'Mock API 생성 성공',
    generationError: 'Mock API 생성 중 오류 발생',
    specRequired: 'OpenAPI 스펙을 제공해주세요',
    fileUploaded: '업로드 완료',
    parseError: 'Java 클래스 파싱 실패, 파일 형식이 올바른지 확인하세요'
  },
  
  help: {
    uploadHint: '.java 파일 업로드 지원, 클래스 구조 자동 파싱하여 Mock 구성 생성 (다중 레벨 객체 속성은 아직 지원되지 않음)'
  },
  
  fields: {
    title: '필드 정의',
    addField: '필드 추가',
    addChildField: '하위 필드 추가',
    fieldName: '필드명'
  },
  
  fieldTypes: {
    string: '문자열',
    number: '숫자',
    boolean: '불리언',
    date: '날짜',
    name: '이름',
    email: '이메일',
    phone: '전화번호',
    address: '주소',
    id: 'ID',
    image: '이미지 URL',
    array: '배열',
    object: '객체'
  },
  
  array: {
    itemType: '배열 항목 유형',
    arrayFields: '배열 항목 필드'
  },
  
  object: {
    childFields: '하위 필드'
  },
  
  responseTypes: {
    object: '단일 객체',
    array: '객체 배열',
    custom: '사용자 정의 구조'
  },
  
  responseFormats: {
    dataOnly: '데이터만',
    standard: '표준 REST 응답 (code, data, message)'
  },
  
  placeholder: {
    output: '// 생성된 Mock 데이터가 여기에 표시됩니다'
  },
  
  article: {
    title: "프론트엔드 개발에서 Mock API 생성기의 활용 이해",
    overview: {
      title: "Mock API 생성기란 무엇인가요?",
      content: "<strong>Mock API 생성기</strong>는 OpenAPI 스펙 또는 사용자 정의 필드 정의에 따라 모의 API 엔드포인트와 응답을 생성하는 특수 도구입니다. 이 강력한 개발 도구는 실제 API 동작을 모방하는 현실적인 데이터 구조를 제공하여 프론트엔드 개발자가 백엔드 팀과 독립적으로 작업할 수 있도록 지원합니다.<br><br>Mock API 생성기는 귀하의 스펙에 따라 일관되고 구조화된 데이터를 반환하는 완벽하게 작동하는 엔드포인트를 생성합니다. 이를 통해 실제 백엔드 구현을 기다리지 않고도 프론트엔드 개발을 진행할 수 있어 개발 프로세스를 크게 가속화하고 병렬 워크플로를 가능하게 합니다."
    },
    useCases: {
      title: "Mock API 생성의 일반적인 사용 사례",
      items: [
        {
          title: "백엔드 완료 전 프론트엔드 개발",
          description: "백엔드 API가 아직 개발 중이거나 구현되지 않은 경우, 모의 API를 사용하면 프론트엔드 개발자가 실제 데이터 구조로 UI 컴포넌트 구축을 시작할 수 있어 개발 병목 현상을 방지합니다."
        },
        {
          title: "UI 프로토타이핑 및 테스트",
          description: "제어된 데이터 세트를 사용하여 빠른 프로토타입을 생성하거나 UI 컴포넌트를 테스트할 수 있어 디자이너와 개발자가 실제 백엔드 서비스에 연결하지 않고도 실제 데이터로 인터페이스를 검증할 수 있습니다."
        },
        {
          title: "오프라인 개발",
          description: "실제 API 응답을 모방하는 로컬 모의 API 서버를 제공하여 개발자가 오프라인 상태이거나 프로덕션 또는 스테이징 API에 액세스할 수 없는 환경에서 작업할 수 있도록 합니다."
        },
        {
          title: "경계 조건 테스트",
          description: "실제 백엔드 환경에서 트리거하기 어려울 수 있는 특정 API 응답이나 오류 조건을 복제하는 응답을 생성하여 오류 처리 및 경계 조건을 철저히 테스트할 수 있습니다."
        },
        {
          title: "성능 테스트",
          description: "다양한 응답 시간이나 로드 크기를 시뮬레이션하는 모의 API를 생성하여 프론트엔드 컴포넌트가 최적부터 저하 조건까지 다양한 성능 시나리오를 처리하는 방법을 테스트할 수 있습니다."
        },
        {
          title: "데모 환경",
          description: "실제 백엔드 서비스에 연결할 필요가 없는 완벽하게 기능적인 데모 환경을 구축할 수 있어 영업 데모, 교육 또는 전시 목적에 이상적입니다."
        }
      ]
    },
    guide: {
      title: "Mock API 생성기 사용 방법",
      intro: "개발 워크플로를 지원하기 위해 모의 API를 효과적으로 생성하고 사용하려면 다음 단계를 따르세요:",
      steps: [
        {
          title: "입력 방법 선택",
          description: "먼저 API 구조를 정의할 방법을 선택하세요. 실제 API와 일관성을 유지하기 위해 OpenAPI 스펙을 업로드하거나(권장), Java 클래스 파일을 업로드하여 데이터 구조를 자동으로 추출하거나, 인터페이스를 통해 수동으로 필드와 유형을 정의할 수 있습니다."
        },
        {
          title: "데이터 구조 정의",
          description: "OpenAPI 스펙을 사용하지 않는 경우, 필드를 추가하고 유형(문자열, 숫자, 불리언, 날짜 등)을 설정하여 모의 데이터의 구조를 정의하세요. 복잡한 구조의 경우 실제 API의 데이터 모델과 일치하도록 중첩 객체 또는 객체 배열을 생성하세요."
        },
        {
          title: "출력 옵션 구성",
          description: "프로젝트 요구 사항에 따라 선호하는 출력 형식(JSON Server, Express.js, Mock.js 또는 Mock Service Worker)을 선택하세요. 응답 동적성(데이터가 얼마나 무작위로 생성되어야 하는지), 배열 길이 및 응답 형식과 같은 다른 설정을 조정하세요."
        },
        {
          title: "Mock API 코드 생성",
          description: "\"Mock 생성\" 버튼을 클릭하여 귀하의 스펙에 따라 모의 API 코드를 생성하세요. 이 도구는 귀하의 입력을 처리하고 선택한 형식으로 모의 정의된 API 엔드포인트 및 응답의 코드를 생성합니다."
        },
        {
          title: "생성된 코드 검토 및 복사",
          description: "생성된 모의 API 코드를 검토하여 귀하의 요구 사항을 충족하는지 확인하세요. 코드를 클립보드에 복사하거나 프로젝트와 통합할 수 있도록 파일로 다운로드할 수 있습니다."
        },
        {
          title: "개발 환경과 통합",
          description: "선택한 형식에 따라 생성된 모의 API를 개발 환경과 통합하세요. 여기에는 JSON Server 설정, Express.js 라우트 추가, Mock.js 구성 또는 애플리케이션에서 Mock Service Worker 구현이 포함될 수 있습니다."
        },
        {
          title: "프론트엔드 애플리케이션 연결",
          description: "실제 백엔드 서비스 대신 모의 API 엔드포인트에 연결하도록 프론트엔드 애플리케이션을 업데이트하세요. 이는 일반적으로 API 요청의 기본 URL을 로컬 모의 서버 또는 인터셉터를 가리키도록 변경하는 것을 포함합니다."
        }
      ]
    },
    bestPractices: {
      title: "Mock API 개발을 위한 모범 사례",
      intro: "효과적이고 유지 관리 가능한 모의 API를 생성하려면 다음 권장 사항을 따르세요:",
      items: [
        "가능한 경우 OpenAPI 스펙을 사용하여 모의 API가 실제 API의 구조를 정확하게 반영하도록 보장하세요",
        "페이징 형식, 오류 응답 및 메타데이터를 포함하여 실제 API가 사용할 정확한 응답 구조를 미러링하세요",
        "빈 배열, 널 값 및 다양한 오류 상태와 같은 실제 경계 조건을 모의 데이터에 포함하세요",
        "날짜 또는 ID와 같은 동적 데이터의 경우 정적 값 대신 함수를 사용하여 실제 동작을 시뮬레이션하세요",
        "개발 과정에서 역사적 호환성을 유지하기 위해 모의 API를 프론트엔드 코드와 함께 버전 관리하세요",
        "개발 컨텍스트에 따라 모의와 실제 API 간을 전환하기 위해 환경 변수를 사용하는 것을 고려하세요",
        "통합 중 혼동을 방지하기 위해 모의와 실제 API 간의 모든 편차를 문서화하세요",
        "UI가 로딩 상태를 처리하는 방법을 테스트하기 위해 일관된 지연 시뮬레이션을 구현하세요",
        "API 변경 사항과 동기화되도록 모의 서비스 생성을 빌드 파이프라인에서 자동화하세요",
        "실제 API가 수행할 것과 동일한 제약 조건을 시뮬레이션하기 위해 모의 API에 유효성 검사 논리를 포함하세요"
      ]
    },
    faq: {
      title: "Mock API 생성에 관한 자주 묻는 질문",
      items: [
        {
          question: "사용 가능한 출력 형식 간의 차이점은 무엇인가요?",
          answer: "JSON Server는 기본 요구 사항에 적합한 JSON 파일 기반의 간단한 REST API를 제공합니다. Express.js는 복잡한 시나리오를 위해 더 많은 사용자 정의 및 라우팅 제어를 제공합니다. Mock.js는 브라우저에서 AJAX 요청을 가로채기 위해 JavaScript와 직접 통합됩니다. Mock Service Worker(MSW)는 네트워크 수준에서 요청을 가로채기 위해 Service Workers를 사용하여 코드 변경 없이 모의와 실제 API 간에 원활하게 전환할 수 있습니다."
        },
        {
          question: "매번 변하는 동적 모의 응답을 생성할 수 있나요?",
          answer: "예, '응답 동적성' 옵션은 모의 데이터가 얼마나 많이 변하는지를 제어합니다. 낮은 동적성은 각 요청에 대해 일관된 응답을 의미하는 반면, 높은 동적성은 정의된 데이터 유형 내에서 다른 값을 생성합니다. 또한 Express.js 또는 MSW 형식에서 사용자 정의 논리를 구현하여 더 복잡한 동적 동작을 달성할 수 있습니다."
        },
        {
          question: "모의 API에서 인증을 어떻게 처리하나요?",
          answer: "JSON Server의 경우 json-server-auth 플러그인을 사용할 수 있습니다. Express.js를 사용하는 경우 인증 토큰을 확인하기 위한 미들웨어를 구현하세요. Mock.js 및 MSW의 경우 인증 요청을 가로채고 제공된 자격 증명에 따라 적절한 토큰 또는 오류를 반환하여 실제 인증 흐름을 시뮬레이션할 수 있습니다."
        },
        {
          question: "네트워크 오류 또는 느린 응답을 시뮬레이션할 수 있나요?",
          answer: "예. Express.js에서는 미들웨어를 사용하여 무작위 지연 또는 오류를 도입할 수 있습니다. MSW를 사용하면 ctx.delay() 함수를 사용하여 지연을 추가하거나 오류 응답을 반환할 수 있습니다. JSON Server의 경우 모든 응답에 고정 지연을 추가하기 위해 --delay 플래그를 사용할 수 있습니다."
        },
        {
          question: "프로덕션 환경에서 모의와 실제 API 간에 어떻게 전환하나요?",
          answer: "MSW의 경우 환경 변수를 사용하여 서비스 작업자를 조건부로 시작할 수 있습니다. 다른 방법의 경우 API 기본 URL을 변경하거나 적절한 요청을 라우팅하는 프록시를 구현하기 위해 구성 값을 사용하세요. 이를 통해 개발 및 테스트 중에 모의와 실제 엔드포인트 간에 쉽게 전환할 수 있습니다."
        },
        {
          question: "lorem ipsum 텍스트 대신 실제 데이터를 생성할 수 있나요?",
          answer: "예, Mock API 생성기에는 '이름', '이메일', '전화번호', '주소' 및 '이미지 URL'과 같은 특수 필드 유형이 포함되어 있어 이러한 일반적인 필드에 대한 실제 데이터를 생성합니다. 더 고급 시나리오의 경우 Express.js 또는 MSW 출력 형식과 함께 Faker.js와 같은 라이브러리를 고려하세요."
        },
        {
          question: "모의 API에서 파일 업로드를 어떻게 처리하나요?",
          answer: "Express.js 출력의 경우 multipart/form-data 요청을 수락하고 적절한 응답을 반환하는 라우트를 구현할 수 있습니다. MSW를 사용하면 파일 업로드 요청을 가로채고 성공 응답을 반환하기 전에 처리를 시뮬레이션할 수 있습니다. 이를 통해 실제 파일 처리가 필요 없이 파일 업로드 UI 컴포넌트를 테스트할 수 있습니다."
        }
      ]
    },
    advancedTips: {
      title: "고급 Mock API 통합 기술",
      intro: "이 고급 통합 기술을 사용하여 모의 API 구현을 새로운 수준으로 끌어올리세요:",
      items: [
        "후속 GET 요청에서 새로 생성된 항목 반환과 같이 요청 간 지속성을 시뮬레이션하기 위해 모의 API에 상태 저장 동작 구현",
        "프론트엔드 요청이 API 스펙 요구 사항을 충족하는지 확인하기 위해 OpenAPI 유효성 검사와 모의 서버 결합",
        "다양한 비즈니스 시나리오를 테스트하기 위해 서로 다른 사전 정의된 데이터 세트 간 전환할 수 있는 시나리오 관리자 생성",
        "UI의 페이징 컨트롤을 효과적으로 테스트하기 위해 적절한 메타데이터 및 링크가 있는 실제 페이징 구현",
        "유형 안전성을 유지하면서 복잡한 쿼리 응답을 시뮬레이션하기 위해 GraphQL과 함께 모의 서비스 작업자 사용",
        "아직 사용할 수 없는 다른 서비스를 시뮬레이션하면서 일부 요청을 실제 백엔드 서비스로 프록시하는 하이브리드 접근 방식 생성",
        "백엔드 구현 없이 실시간 기능을 테스트하기 위해 웹소켓 모의 구현",
        "모의 API를 사용하여 프론트엔드 동작을 자동으로 검증하는 지속적 통합 테스트 설정",
        "개발자가 조직에서 사용 가능한 모의 엔드포인트를 탐색하고 선택할 수 있는 모의 API 카탈로그 서비스 생성",
        "요청 매개변수 또는 헤더에 따라 모의 응답을 동적으로 변경하는 응답 템플릿 구현"
      ]
    }
  }
}