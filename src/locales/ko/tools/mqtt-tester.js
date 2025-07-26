export default {
  name: 'MQTT 테스트 도구',
  description: 'MQTT 연결 테스트 및 디버깅, 메시지 발행 및 주제 구독',

  connection: {
    title: '연결',
    broker: '브로커 URL',
    url: '브로커 URL',
    urlPlaceholder: '예: mqtt://broker.example.com:1883',
    clientId: '클라이언트 ID',
    clientIdPlaceholder: '클라이언트 ID 입력 또는 공백으로 랜덤 생성',
    username: '사용자 이름',
    password: '비밀번호',
    keepAlive: '연결 유지',
    cleanSession: '세션 정리',
    autoReconnect: '자동 재연결',
    ssl: 'SSL/TLS 사용',
    sslOptions: 'SSL/TLS 옵션',
    protocol: '프로토콜 버전',
    portInfo: '기본 포트: MQTT(1883), WebSocket(8083)',
    connect: '연결',
    disconnect: '연결 해제',
    status: '상태',
    connected: '연결됨',
    disconnected: '연결 해제됨',
    connecting: '연결 중...'
  },

  publish: {
    title: '발행',
    topic: '주제',
    topicPlaceholder: '발행할 주제 입력',
    message: '메시지',
    messagePlaceholder: '메시지 내용 입력',
    qos: '서비스 품질(QoS)',
    retain: '보존',
    format: '내용 형식',
    text: '텍스트',
    json: 'JSON',
    hex: '16진수',
    binary: '바이너리',
    send: '발행',
    clear: '지우기',
    history: '기록',
    addToFavorites: '즐겨찾기에 추가',
    validateJson: 'JSON 검증'
  },

  subscribe: {
    title: '구독',
    topic: '주제',
    topicPlaceholder: '구독할 주제 입력 (와일드카드 # 및 + 지원)',
    qos: '서비스 품질(QoS)',
    subscribe: '구독',
    unsubscribe: '구독 해제',
    unsubscribeAll: '모두 구독 해제',
    subscriptions: '활성 구독',
    noSubscriptions: '활성 구독 없음',
    addSubscription: '구독 추가',
    topicPatterns: '주제 패턴',
    systemTopics: '시스템 주제'
  },

  messages: {
    title: '메시지',
    received: '수신된 메시지',
    sent: '발송된 메시지',
    topic: '주제',
    payload: '페이로드',
    qos: 'QoS',
    retained: '보존됨',
    time: '시간',
    clear: '메시지 지우기',
    export: '메시지 내보내기',
    filter: '필터',
    noMessages: '메시지 없음',
    view: '상세 보기',
    copy: '페이로드 복사',
    duplicate: '발행으로 복사'
  },

  tools: {
    title: '도구',
    topicGenerator: '주제 생성기',
    payloadFormatter: '페이로드 포맷터',
    qosExplainer: 'QoS 설명',
    wildcardTester: '와일드카드 테스터',
    packetInspector: '패킷 검사기',
    loadTest: '부하 테스트'
  },

  settings: {
    title: '설정',
    maxMessages: '최대 메시지 수',
    timeFormat: '시간 형식',
    theme: '테마',
    autoExpand: '메시지 자동 확장',
    saveHistory: '기록 저장',
    clearOnDisconnect: '연결 해제 시 메시지 지우기',
    advanced: '고급 설정',
    lastWill: '유언 메시지'
  },

  lastWill: {
    title: '유언',
    enable: '유언 활성화',
    topic: '유언 주제',
    message: '유언 메시지',
    qos: '유언 QoS',
    retain: '유언 보존'
  },

  notifications: {
    connectSuccess: '{broker}에 연결됨',
    connectError: '연결 오류: {error}',
    disconnected: '브로커와 연결 해제됨',
    subscribeSuccess: '{topic} 구독됨',
    subscribeError: '구독 실패: {error}',
    unsubscribeSuccess: '{topic} 구독 해제됨',
    publishSuccess: '{topic}에 메시지 발행됨',
    publishError: '발행 실패: {error}',
    invalidJson: '잘못된 JSON 페이로드',
    packetReceived: '{packets} 패킷 수신됨'
  }
};