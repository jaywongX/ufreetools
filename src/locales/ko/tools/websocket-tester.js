export default {
  name: 'WebSocket 테스터',
  description: 'WebSocket 서버에 연결하여 메시지를 전송하고 응답을 확인하는 도구',

  connection: {
    url: 'WebSocket 주소',
    urlPlaceholder: '예: ws://echo.websocket.org',
    protocol: '서브 프로토콜 (선택사항)',
    protocolPlaceholder: '쉼표로 구분',
    connect: '연결',
    disconnect: '연결 해제',
    status: '연결 상태',
    connected: '연결됨',
    disconnected: '연결 안됨',
    waiting: '연결 대기 중',
    autoReconnect: '자동 재연결',
    reconnectMessage: '{0}초 후 재연결 시도...'
  },

  options: {
    title: '옵션',
    autoScroll: '로그 자동 스크롤'
  },

  messages: {
    send: '메시지 전송',
    logs: '메시지 로그',
    emptyLogs: '연결 후 메시지가 여기에 표시됩니다',
    placeholder: '전송할 메시지 입력...',
    sendButton: '전송',
    clearButton: '지우기',
    copyButton: '복사',
    clearLogs: '로그 지우기',
    copyLogs: '로그 복사',
    format: {
      title: '형식',
      text: '일반 텍스트',
      json: 'JSON',
      binary: '바이너리'
    },
    templates: {
      json: 'JSON',
      text: '텍스트'
    },
    types: {
      sent: '전송 →',
      received: '수신 ←',
      error: '오류 !',
      info: '정보'
    }
  },

  savedConnections: {
    title: '저장된 연결',
    empty: '저장된 연결이 없습니다',
    save: '현재 연결 저장',
    saveConnection: '연결 저장',
    connectionName: '연결 이름',
    load: '불러오기',
    delete: '삭제',
    cancel: '취소'
  },

  testServers: {
    title: '테스트 서버',
    description: '테스트에 사용할 수 있는 공개 WebSocket 서버 목록:',
    useServer: '이 서버 사용',
    servers: {
      echo: {
        name: 'Echo 테스트',
        description: 'WSS 연결을 지원하는 보안 Echo 테스트 서버'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Postman에서 제공하는 WSS 지원 Echo 서비스'
      }
    }
  },

  logs: {
    connectingTo: '{0}에 연결 중...',
    connectionSuccess: '연결 성공',
    connectionError: 'WebSocket 오류',
    connectionClosed: '연결 종료 (코드: {0}{1})',
    invalidJson: '잘못된 JSON 형식: {0}',
    sendFailed: '전송 실패: {0}',
    emptyMessage: '메시지는 비어 있을 수 없습니다',
    notConnected: 'WebSocket에 연결되지 않았습니다',
    copied: '로그가 클립보드에 복사되었습니다',
    copyFailed: '복사 실패: {0}',
    serverSelected: '서버 선택됨: {0}',
    binaryData: '[바이너리 데이터]'
  }
};