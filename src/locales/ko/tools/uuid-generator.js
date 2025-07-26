export default {
  name: 'UUID 생성기',
  description: '임의의 UUID 및 GUID 생성, 데이터베이스 기본 키, 임시 파일 이름 등 다양한 시나리오에 맞게 사용자 정의 옵션 제공',

  options: {
    version: 'UUID 버전',
    quantity: '수량',
    format: '형식 옵션',
    includeDash: '하이픈(-) 포함',
    generateCount: '생성 수량'
  },

  versions: {
    v1: '버전 1(시간 기반)',
    v4: '버전 4(임의)',
    v5: '버전 5(네임스페이스)',
    custom: '사용자 정의'
  },

  quantities: {
    single: '단일',
    five: '5개',
    ten: '10개',
    twenty: '20개'
  },

  formats: {
    default: '기본값',
    base64: 'Base64',
    binary: '이진',
    hex: '16진수',
    noDash: '하이픈 없음'
  },

  actions: {
    generate: 'UUID 생성',
    copy: '복사',
    copyAll: '모두 복사',
    clear: '결과 지우기',
    download: 'TXT로 다운로드'
  },

  messages: {
    copied: '클립보드에 복사되었습니다!',
    generated: 'UUID 생성 성공',
    tooMany: '최대 허용 수량은 1000개입니다',
    invalidVersion: '잘못된 UUID 버전',
    invalidNamespace: '잘못된 네임스페이스 UUID',
    copyFailed: '복사 실패'
  }
};
