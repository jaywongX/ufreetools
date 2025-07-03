export default {
  name: 'gRPC 디버거',
  description: 'gRPC 서비스와 protobuf 메시지 테스트 및 디버깅',
  title: '온라인 gRPC 디버거',
  intro: '브라우저에서 직접 gRPC 서비스를 디버깅하고, proto 파일 파싱 및 동적 폼 구축 지원',
  connection: {
    title: '연결',
    server: '서버 주소',
    serverPlaceholder: 'gRPC 서버 주소 입력 (예: localhost:50051)',
    useTLS: 'TLS/SSL 사용',
    tlsOptions: 'TLS 옵션',
    caCert: 'CA 인증서',
    clientCert: '클라이언트 인증서',
    clientKey: '클라이언트 키',
    insecure: 'TLS 검증 건너뛰기 (안전하지 않음)',
    timeout: '타임아웃 (초)',
    serverUrl: 'gRPC 서비스 URL',
    serverUrlPlaceholder: 'https://your-grpc-server.com',
    timeoutMs: '요청 타임아웃 (밀리초)',
    timeoutPlaceholder: '30000',
    defaultTimeout: '기본값: 30000ms (30초)',
    corsNote: '참고: 서버는 gRPC-Web 프로토콜과 CORS를 지원해야 합니다',
    keepalive: 'Keepalive 활성화',
    connect: '연결',
    disconnect: '연결 해제'
  },
  service: {
    title: '서비스',
    definition: '서비스 정의',
    load: 'Proto 파일 로드',
    paste: 'Proto 정의 붙여넣기',
    protoPath: 'Proto 파일 경로',
    importPath: '임포트 경로',
    services: '서비스',
    methods: '메소드',
    selectService: '서비스 선택',
    selectMethod: '메소드 선택',
    methodType: '메소드 유형',
    unary: '단항',
    serverStreaming: '서버 스트리밍',
    clientStreaming: '클라이언트 스트리밍',
    bidirectional: '양방향 스트리밍',
    protoDefinition: 'Proto 파일 정의',
    switchToText: '텍스트 입력으로 전환',
    switchToFile: '파일 업로드로 전환',
    dragDrop: '.proto 파일을 여기에 끌어다 놓거나',
    clickUpload: '클릭하여 업로드',
    onlyProto: '.proto 파일 형식만 지원',
    loadExample: '예제 Proto 로드',
    formatProto: '포맷',
    clear: '지우기',
    parse: 'Proto 정의 파싱',
    parsing: '파싱 중...'
  },
  request: {
    title: '요청',
    metadata: '메타데이터',
    addMetadata: '메타데이터 추가',
    key: '키',
    value: '값',
    message: '메시지',
    jsonEditor: 'JSON 편집기',
    protoEditor: 'Proto 편집기',
    formEditor: '폼 편집기',
    send: '요청 보내기',
    cancel: '취소',
    stream: '스트림 메시지',
    endStream: '스트림 종료',
    exampleMessage: '예제 메시지',
    validJson: '유효한 JSON',
    invalidJson: '유효하지 않은 JSON',
    history: '요청 기록',
    body: '요청 본문',
    bodyPlaceholder: 'JSON 형식의 요청 본문을 입력하세요...',
    runQuery: '쿼리 실행',
    requestSent: '전송됨',
    param: '요청 파라미터',
    edit: '편집',
    sending: '전송 중...',
    time: '요청 시간',
  },
  response: {
    title: '응답',
    status: '상태',
    metadata: '메타데이터',
    message: '메시지',
    stream: '스트림',
    noResponse: '응답 없음',
    receivedAt: '수신 시간',
    duration: '지속 시간',
    copy: '응답 복사',
    download: '다운로드',
    clear: '지우기',
    streamClosed: '스트림 종료됨',
    streamMessage: '스트림 메시지 #{number}',
    stats: '통계',
    messagesReceived: '수신된 메시지 수',
    startTime: '시작 시간',
    endTime: '종료 시간',
    time: '응답 시간'
  },
  settings: {
    title: '설정',
    theme: '테마',
    light: '라이트',
    dark: '다크',
    language: '언어',
    maxResponseSize: '최대 응답 크기',
    timeoutMs: '기본 타임아웃 (밀리초)',
    prettyPrint: 'JSON 예쁘게 출력',
    saveDir: '저장 디렉토리',
    clearHistory: '기록 지우기',
    protoFormat: 'Proto 형식',
    protobuf: 'Protobuf.js',
    grpcTools: 'gRPC 도구',
    reflection: '서버 리플렉션 사용'
  },
  messages: {
    connecting: '{server}에 연결 중...',
    connected: '{server}에 연결됨',
    disconnected: '서버에서 연결 해제됨',
    connectionError: '연결 오류: {error}',
    requestSent: '요청 전송됨',
    responseReceived: '응답 수신됨',
    streamingStarted: '스트리밍 시작됨',
    streamingEnded: '스트리밍 종료됨',
    protoLoaded: 'Proto 파일 로드 성공',
    protoError: 'Proto 파일 로드 오류: {error}',
    metadataAdded: '메타데이터 추가됨',
    metadataError: '유효하지 않은 메타데이터',
    savedToFile: '응답을 파일에 저장함',
    parsingError: '메시지 파싱 오류: {error}',
    reflectionError: '서버 리플렉션 오류: {error}',
    invalidProto: '유효하지 않은 Proto 정의',
    emptyUrl: '서비스 URL을 입력하세요',
    selectServiceMethod: '서비스와 메소드를 선택하세요',
    invalidJson: '요청 본문이 유효한 JSON이 아닙니다: {error}',
    copy: '복사',
    copied: '응답이 클립보드에 복사됨',
    copyFailed: '복사 실패, 수동으로 복사하세요'
  },
  errors: {
    invalidArgument: 'INVALID_ARGUMENT - 유효하지 않은 인자',
    notFound: 'NOT_FOUND - 리소스를 찾을 수 없음',
    alreadyExists: 'ALREADY_EXISTS - 리소스가 이미 존재함',
    permissionDenied: 'PERMISSION_DENIED - 권한 거부됨',
    internal: 'INTERNAL - 내부 오류',
    requestFailed: '요청 실패: {error}'
  },
  
  article: {
    title: "gRPC 디버거: 원격 프로시저 호출 대화형 테스트 도구",
    features: {
      title: "gRPC 디버깅 및 API 테스트 이해하기",
      description: "<strong>gRPC 디버거</strong>는 브라우저에서 직접 gRPC 서비스를 테스트, 디버깅 및 탐색하기 위해 설계된 포괄적인 웹 기반 도구입니다. 기존의 REST API 클라이언트와 달리 이 <strong>프로토콜 버퍼 테스트 도구</strong>는 gRPC 바이너리 프로토콜과 Protocol Buffers (protobuf) 메시지 형식에 특화된 기능을 제공하여 개발자가 사용자 정의 클라이언트 코드 없이도 gRPC 서비스와 상호 작용할 수 있도록 합니다.<br><br>우리의 <strong>gRPC 클라이언트 테스터</strong>는 proto 파일 파싱, 서비스 탐색, 동적 폼 구축을 통한 요청 구성, 메타데이터 관리 및 완전한 응답 시각화와 같은 핵심 기능을 지원합니다. 이는 gRPC를 활용하여 서비스 간의 효율적이고 강력한 유형의 고성능 통신을 구현하는 현대적 마이크로서비스 아키텍처를 다루는 API 개발자에게 필수적인 도구입니다.",
      useCases: {
        title: "gRPC 테스트의 실제 적용 사례",
        items: [
          "<strong>마이크로서비스 API 개발</strong>: 마이크로서비스 아키텍처 기반의 분산 시스템을 구축할 때 <strong>gRPC 테스트 도구</strong>를 사용하면 개발자가 서비스 엔드포인트를 검증하고, 메시지 형식을 확인하며, proto 파일에 정의된 서비스 계약이 올바르게 구현되었는지 확인할 수 있습니다. 이러한 대화형 검증은 서비스 통합 전에 문제를 조기에 발견하는 데 도움이 됩니다.",
          "<strong>API 통합 테스트</strong>: 타사 또는 내부 gRPC 서비스를 사용하는 애플리케이션의 경우, 우리의 디버거는 테스트 클라이언트를 작성하지 않고도 사용 가능한 메소드를 탐색하고, 다양한 입력 파라미터를 테스트하며, 응답 형식을 이해할 수 있는 방법을 제공합니다. 엔지니어는 먼저 수동 테스트를 통해 예상 동작을 이해함으로써 통합 코드를 빠르게 프로토타이핑할 수 있습니다.",
          "<strong>프로덕션 문제 해결</strong>: gRPC를 사용하는 프로덕션 시스템에서 예기치 않은 동작이 발생할 경우, 디버거를 사용하면 지원 엔지니어와 개발자가 특정 요청을 제어된 환경에서 복제하고, 파라미터를 조작하며, 응답을 관찰할 수 있습니다. 이러한 격리는 문제가 클라이언트 구현, 서비스 로직 또는 네트워크 구성 중 어디에서 발생했는지 확인하는 데 도움이 됩니다.",
          "<strong>Protocol Buffer 스키마 개발</strong>: API 설계 단계에서 <strong>protobuf 검사기</strong> 기능은 추상적인 메시지 정의가 구체적인 요청 및 응답 구조로 어떻게 변환되는지 시각화하여 스키마 정의를 검증하는 데 도움을 줍니다. 이러한 피드백 루프는 광범위한 구현 전에 proto 파일 설계를 개선합니다.",
          "<strong>성능 분석</strong>: 디버거는 요청에 대한 타이밍 정보를 제공하여 개발자가 다양한 조건에서 gRPC 서비스 성능을 벤치마킹할 수 있도록 합니다. 다양한 페이로드 크기와 복잡성을 테스트함으로써 팀은 서비스 구현에서 잠재적인 성능 병목 현상을 식별할 수 있습니다.",
          "<strong>문서화 및 지식 공유</strong>: <strong>gRPC 서비스 브라우저</strong>의 시각적 인터페이스는 비기술적 이해 관계자, 새로운 팀 구성원 또는 파트너에게 API 기능을 보여주는 것을 더 쉽게 만듭니다. 이 도구는 실제 예제를 통해 서비스 기능을 이해하는 데 도움이 되는 정적 API 문서의 대화형 대안 역할을 합니다."
        ]
      }
    },
    faq: {
      title: "gRPC 디버깅에 관한 자주 묻는 질문",
      items: [
        {
          question: "gRPC와 REST API의 차이점은 무엇인가요?",
          answer: "gRPC와 REST는 각각 다른 특성을 가진 API 설계의 다른 접근 방식을 나타내며, 각각을 언제 사용해야 할지에 영향을 미칩니다.<br><br><strong>gRPC</strong>는 HTTP/2에서 실행되며 Protocol Buffers를 메시지 직렬화에 사용하는 고성능 RPC(원격 프로시저 호출) 프레임워크입니다. 주요 이점은 다음과 같습니다:<br><br>• .proto 파일에서 엄격하게 유형이 지정된 인터페이스를 정의하는 <strong>계약 우선 접근 방식</strong><br>• 더 작은 메시지 크기를 생성하는 <strong>효율적인 바이너리 직렬화</strong><br>• <strong>내장 스트리밍 지원</strong> (단항, 서버 스트리밍, 클라이언트 스트리밍 및 양방향 스트리밍)<br>• HTTP/2를 통한 <strong>멀티플렉싱 연결</strong>로 지연 시간 감소<br>• 여러 언어에 걸친 <strong>코드 생성</strong>으로 유형 안전성 보장<br><br><strong>REST</strong>(Representational State Transfer)는 일반적으로 HTTP/1.1에서 JSON을 사용하는 아키텍처 스타일로, 다음을 제공합니다:<br><br>• 광범위한 채택으로 인한 <strong>단순성과 친숙성</strong><br>• JSON 또는 XML과 같은 <strong>인간이 읽을 수 있는 형식</strong><br>• 추가 라이브러리 없이 <strong>기본 브라우저 지원</strong><br>• 클라이언트와 서버 간의 <strong>느슨한 결합</strong><br>• 테스트 및 문서화를 위한 <strong>광범위한 도구 생태계</strong><br><br><strong>gRPC 디버거</strong>는 gRPC의 도구 격차를 해소하여 전통적으로 사용자 정의 클라이언트 코드가 필요한 gRPC 서비스를 테스트하기 위한 REST와 유사한 탐색 기능을 제공합니다."
        },
        {
          question: "테스트용 .proto 파일을 어떻게 생성하나요?",
          answer: "<strong>Protocol Buffer 정의 파일</strong>(.proto) 생성은 gRPC 개발의 기본 단계입니다. 다음은 우리의 디버거를 사용하여 테스트 파일을 생성하기 위한 가이드입니다:<br><br>1. <strong>구문 버전 정의</strong>: `syntax = \"proto3\";`로 파일을 시작하여 최신 proto 구문 버전을 사용하세요.<br><br>2. <strong>패키지로 구성</strong>: 관련 서비스와 메시지를 그룹화하기 위해 `package` 키워드를 사용하세요. 이는 이름 충돌을 피하는 데 도움이 됩니다 (예: `package ecommerce;`).<br><br>3. <strong>메시지 정의</strong>: 사용할 데이터 구조를 나타내는 메시지 유형을 생성하세요:<br><pre>message Product &#123;\n  string id = 1;\n  string name = 2;\n  double price = 3;\n  repeated string categories = 4;\n&#125;</pre><br>4. <strong>서비스 정의</strong>: 서비스 인터페이스와 해당 메소드를 지정하세요:<br><pre>service ProductService &#123;\n  rpc GetProduct(GetProductRequest) returns (Product);\n  rpc SearchProducts(SearchRequest) returns (stream Product);\n  rpc UpdateProduct(Product) returns (UpdateResponse);\n&#125;</pre><br>5. <strong>다른 proto 가져오기</strong>: 다른 파일의 정의를 참조하려면 `import \"path/to/other.proto\";`를 사용하세요.<br><br>6. <strong>필드 옵션 추가</strong>: `[deprecated=true]` 또는 특정 동작을 위한 사용자 정의 옵션과 같은 옵션을 사용하여 필드를 향상시키세요.<br><br>우리의 <strong>gRPC 디버거</strong>를 테스트할 때 이 파일을 직접 업로드하거나 텍스트 입력 영역에 내용을 붙여넣을 수 있습니다. 디버거는 파일을 파싱하고 서비스에 대한 요청을 구성하기 위한 적절한 폼 인터페이스를 생성합니다."
        },
        {
          question: "이 도구는 SSL/TLS로 보호된 gRPC 서비스에 연결할 수 있나요?",
          answer: "예, <strong>gRPC 디버거</strong>는 SSL/TLS 암호화를 사용하는 보안 gRPC 서비스에 연결하는 것을 지원합니다. 다음은 보안 연결을 처리하는 방법입니다:<br><br>1. <strong>브라우저 기반 제한</strong>: 브라우저에서 실행되는 웹 기반 도구이므로 브라우저 보안 제약 조건 내에서 작동합니다. 다음에 연결할 수 있습니다:<br><br>• <strong>gRPC-Web 프로토콜</strong>을 지원하는 서비스 (표준 gRPC와 약간 다름)<br>• 올바르게 구성된 <strong>CORS(Cross-Origin Resource Sharing)</strong> 헤더가 있는 서비스<br>• 유효한 SSL 인증서가 있는 서비스 (대부분의 경우 자체 서명되지 않음)<br><br>2. <strong>TLS 사용</strong>: 보안 서비스에 연결할 때 다음을 확인하세요:<br><br>• <strong>\"https://\"</strong> 접두사 사용 또는 <strong>\"TLS/SSL 사용\"</strong> 옵션 명시적 활성화<br>• 서비스에 브라우저가 신뢰하는 유효한 인증서가 있어야 함<br>• 클라이언트 인증서 인증(상호 TLS)이 필요한지 확인<br><br>3. <strong>인증 옵션</strong>: 인증이 필요한 서비스의 경우 다음을 추가할 수 있습니다:<br><br>• 메타데이터를 통한 <strong>API 키</strong> 또는 <strong>액세스 토큰</strong><br>• <strong>기본 인증</strong> 헤더<br>• 인증 헤더의 <strong>OAuth 토큰</strong><br><br>4. <strong>프록시 고려 사항</strong>: 일부 기업 환경에서는 브라우저와 실제 gRPC 서비스 사이에 gRPC-Web 프록시(예: Envoy)가 필요할 수 있습니다.<br><br>테스트 중인 내부 서비스가 이러한 요구 사항을 충족하지 않는 경우 데스크톱 gRPC 클라이언트를 사용하거나 보안 요구 사항을 처리하고 디버거에 호환 가능한 엔드포인트를 노출하는 로컬 프록시를 설정하는 것을 고려하세요."
        },
        {
          question: "요청을 보내기 전에 왜 proto 파일을 파싱해야 하나요?",
          answer: "proto 파일 파싱은 <strong>gRPC 디버거</strong>를 사용할 때 중요한 첫 번째 단계이며, 그 이유는 다음과 같습니다:<br><br>1. <strong>유형 발견 및 검증</strong>: gRPC는 강력한 유형 시스템이며, 클라이언트와 서버는 메시지의 정확한 형식에 동의해야 합니다. proto 파일은 다음을 정의하는 계약 역할을 합니다:<br><br>• 사용 가능한 <strong>서비스 및 메소드</strong><br>• 각 메소드가 기대하는 <strong>매개변수 유형</strong><br>• 각 메소드가 반환하는 <strong>응답 유형</strong><br>• API에서 사용되는 모든 <strong>중첩 메시지 구조</strong> 또는 <strong>열거형</strong><br><br>2. <strong>동적 인터페이스 생성</strong>: 파싱 후 디버거는 다음을 수행할 수 있습니다:<br><br>• 사용 가능한 서비스 및 메소드 목록 표시<br>• 올바른 필드로 적절한 요청 폼 구성<br>• 필드 유형별 입력 컨트롤 제공 (텍스트 필드, 숫자 입력, 부울 값 토글 등)<br>• 필드 유형에 따라 적절한 기본값 설정<br><br>3. <strong>바이너리 직렬화</strong>: gRPC는 Protocol Buffers를 바이너리 전송 형식으로 사용합니다. proto 정의를 통해 디버거는 다음을 수행할 수 있습니다:<br><br>• JSON 입력을 올바른 바이너리 protobuf 형식으로 <strong>직렬화</strong><br>• 바이너리 응답을 읽을 수 있는 JSON으로 <strong>역직렬화</strong><br>• <strong>필드 번호 및 유형</strong>이 서버가 기대하는 것과 정확히 일치하는지 확인<br><br>4. <strong>오류 방지</strong>: 적절한 파싱 없이 잘못된 형식의 요청을 보낼 수 있으며, 이는 서비스 로직에 도달하기 전에 직렬화 수준에서 실패합니다.<br><br>proto 파일을 API 문서와 직렬화 스키마의 조합으로 생각하세요. <strong>gRPC 프로토콜</strong>은 기본적으로 이 정보가 필요하며, 이는 사전 지식 없이도 엔드포인트를 탐색할 수 있는 REST API와 다릅니다."
        },
        {
          question: "이 디버거로 어떤 유형의 gRPC 메소드를 테스트할 수 있나요?",
          answer: "이 <strong>gRPC 디버거</strong>는 gRPC 사양에 정의된 모든 네 가지 통신 모드를 지원하며, 각 모드는 다른 사용 사례에 적합합니다:<br><br>1. <strong>단항 RPC</strong>: 표준 요청-응답 모드로, 클라이언트가 단일 요청을 보내고 단일 응답을 받습니다. 이는 기존의 REST API 호출과 가장 유사하며 다음에 적합합니다:<br><br>• 간단한 데이터 검색 작업<br>• 생성, 업데이트 또는 삭제 작업<br>• 인증 및 검증 요청<br><br>예시: `rpc GetUser(GetUserRequest) returns (User);`<br><br>2. <strong>서버 스트리밍 RPC</strong>: 클라이언트가 단일 요청을 보내고 일련의 응답 메시지를 받습니다. 이 모드는 다음에 적합합니다:<br><br>• 실시간 데이터 피드<br>• 장기 실행 작업의 진행 업데이트<br>• 점진적 로딩이 있는 대규모 데이터 세트 검색<br><br>예시: `rpc ListProducts(ListRequest) returns (stream Product);`<br><br>3. <strong>클라이언트 스트리밍 RPC</strong>: 클라이언트가 일련의 메시지를 보내고 단일 응답을 받습니다. 이 방법은 다음에 적합합니다:<br><br>• 대규모 데이터 세트 업로드<br>• 지속적인 센서 데이터 전송<br>• 단일 결과를 생성하는 일괄 작업<br><br>예시: `rpc UploadData(stream DataChunk) returns (UploadSummary);`<br><br>4. <strong>양방향 스트리밍 RPC</strong>: 클라이언트와 서버가 임의의 순서로 여러 메시지를 보내고 받을 수 있습니다. 이 완전히 비동기적인 모드는 다음을 지원합니다:<br><br>• 채팅 애플리케이션<br>• 실시간 게임 또는 협업<br>• 복잡한 워크플로우를 포함하는 양방향 통신<br><br>예시: `rpc Chat(stream ChatMessage) returns (stream ChatMessage);`<br><br>우리의 디버거는 각 유형에 적절한 인터페이스 요소를 제공하여 모든 통신 모드를 테스트할 수 있으며, 스트리밍 응답에 대한 시각적 피드백과 클라이언트에서 스트리밍 메시지를 보내기 위한 적절한 컨트롤을 제공합니다."
        }
      ]
    },
    guide: {
      title: "gRPC 디버거 사용 방법: 단계별 가이드",
      step1: "<strong>gRPC 서비스 URL 정의</strong>: URL 필드에 gRPC 서비스 주소를 입력하세요. 브라우저 기반 테스트의 경우, 이는 gRPC-Web 프로토콜을 지원하고 적절한 CORS 헤더가 활성화된 서비스여야 합니다. 보안 서비스를 테스트하는 경우 HTTPS 프로토콜(예: https://your-grpc-server.com)을 사용해야 합니다.",
      step2: "<strong>타임아웃 및 연결 옵션 설정</strong>: 서비스의 예상 응답 시간에 따라 요청 타임아웃(밀리초 단위)을 구성하세요. 기본값인 30000ms(30초)는 대부분의 서비스에 적합하지만, 장기 실행 작업이나 느린 네트워크에서 테스트할 때 조정이 필요할 수 있습니다.",
      step3: "<strong>Protocol Buffer 정의 제공</strong>: .proto 파일을 업로드 영역에 드래그 앤 드롭하거나 클릭하여 장치에서 선택하거나, 토글 스위치를 사용하여 텍스트 입력 모드로 전환하고 Proto 정의를 직접 붙여넣을 수 있습니다. 초보자를 위해 \"예제 Proto 로드\" 옵션은 형식을 이해하는 데 도움이 되는 시작 템플릿을 제공합니다.",
      step4: "<strong>Proto 정의 파싱</strong>: \"Proto 정의 파싱\" 버튼을 클릭하여 .proto 파일을 처리하세요. 이는 서비스 인터페이스, 메시지 유형 및 필드 정의를 분석하여 디버거가 적절한 요청 폼을 생성하고 메시지를 올바르게 직렬화/역직렬화할 수 있도록 합니다. proto 파일에 구문 오류가 있는 경우 문제를 식별하는 데 도움이 되는 오류 메시지가 표시됩니다.",
      step5: "<strong>서비스 및 메소드 선택</strong>: 파싱이 성공하면 드롭다운 목록에서 특정 서비스(proto 파일에 여러 서비스가 정의된 경우)를 선택하세요. 그런 다음 테스트할 메소드를 사용 가능한 메소드 목록에서 선택하세요. 메소드 유형(단항, 서버 스트리밍, 클라이언트 스트리밍 또는 양방향 스트리밍)이 표시되어 예상되는 통신 모드를 이해하는 데 도움이 됩니다.",
      step6: "<strong>요청 구성 및 사용자 정의</strong>: 디버거는 선택한 메소드의 요청 유형에 대한 JSON 템플릿을 생성합니다. 제공된 JSON 구조를 수정하여 테스트 값을 포함하세요. 편집기는 JSON 내용을 자동으로 포맷하고 검증하여 예상되는 메시지 구조와 일치하는지 확인합니다. 필요한 경우 포맷 버튼을 사용하여 JSON을 정리할 수 있습니다.",
      step7: "<strong>요청 보내기 및 응답 분석</strong>: \"요청 보내기\" 버튼을 클릭하여 gRPC 호출을 서비스로 전송하세요. 단항 호출의 경우 응답 섹션에 표시된 응답 데이터와 타이밍 정보를 볼 수 있습니다. 스트리밍 호출의 경우 응답 메시지가 도착할 때 표시됩니다. 오류가 발생하면 디버거가 문제 해결에 도움이 되는 오류 세부 정보를 표시합니다."
    },
    conclusion: "gRPC 디버거는 강력하지만 복잡한 gRPC 서비스 세계와 상호 작용하기 위한 직관적인 브라우저 기반 인터페이스를 제공합니다. 인간 운영자와 gRPC 바이너리 프로토콜 사이의 간극을 메움으로써, 이 도구는 현대 API 서비스의 개발, 테스트 및 문제 해결 과정을 크게 단순화합니다. 새로운 마이크로서비스 아키텍처를 설계하든, 기존 gRPC 서비스를 통합하든, 프로덕션 시스템의 문제를 진단하든, 이 디버거가 제공하는 시각적 접근 방식은 학습 곡선을 낮추고 개발 워크플로우를 가속화합니다. 더 많은 조직이 성능과 강력한 유형의 이점을 위해 gRPC를 채택함에 따라, 접근 가능한 테스트 도구를 보유하는 것은 API 품질과 신뢰성을 보장하는 데 점점 더 중요해지고 있습니다."
  }
}