export default {
  name: '타임스탬프 변환기',
  description: '타임스탬프와 사람이 읽을 수 있는 날짜 간 변환, 다양한 형식과 시간대 지원',

  options: {
    inputType: '입력 유형',
    outputFormat: '출력 형식',
    timezone: '시간대',
    includeTime: '시간 포함',
    format: '형식 문자열'
  },

  inputTypes: {
    timestamp: 'Unix 타임스탬프',
    milliseconds: 'Unix 밀리초',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: '날짜 문자열'
  },

  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: '로컬 형식',
    relative: '상대 시간',
    custom: '사용자 정의 형식'
  },

  actions: {
    convert: '변환',
    nowTimestamp: '현재 타임스탬프',
    nowDate: '현재 날짜',
    copy: '복사',
    clear: '지우기',
    refresh: '새로 고침',
    switch: '전환'
  },

  messages: {
    copied: '클립보드에 복사되었습니다!',
    convertSuccess: '변환 성공',
    convertError: '타임스탬프 변환 중 오류 발생',
    invalidInput: '잘못된 입력 형식',
    invalidFormat: '잘못된 형식 문자열'
  },

  timeUnits: {
    milliseconds: '밀리초',
    seconds: '초',
    minutes: '분',
    hours: '시간',
    days: '일'
  },

  labels: {
    unixTimestamp: 'Unix 타임스탬프 (초)',
    dateTime: '날짜 시간',
    inputValue: '입력 값',
    unitConversion: '시간 단위 변환',
    timeUnitLabel: '시간 단위'
  },

  placeholders: {
    enterTimestamp: 'Unix 타임스탬프를 입력하세요',
    enterValue: '값을 입력하세요'
  },

  info: {
    aboutTimestamp: 'Unix 타임스탬프 정보',
    timestampDescription: 'Unix 타임스탬프는 UTC 시간 1970년 1월 1일 0시 0분 0초부터 경과한 초 수를 나타냅니다. 컴퓨터 시스템과 애플리케이션에서 널리 사용되는 시간 표현 방식입니다.',
    commonUsage: '일반적인 사용 사례:',
    usages: {
      database: '데이터베이스 기록 시간',
      api: 'API 통신에서의 시간 표현',
      logging: '로그 기록',
      filesystem: '파일 시스템의 타임스탬프'
    }
  }
};