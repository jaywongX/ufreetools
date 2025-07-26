export default {
  name: '정규 표현식 테스터',
  description: '실시간 하이라이트와 설명으로 정규 표현식을 테스트하고 디버깅',

  actions: {
    test: '테스트',
    clear: '초기화',
    showExamples: '예제 보기',
    hideExamples: '예제 숨기기',
    copy: '복사'
  },

  sections: {
    examples: '일반적인 정규 표현식 예제',
    pattern: '정규 표현식 패턴',
    input: '테스트 문자열',
    results: '매칭 결과',
    flags: '플래그'
  },

  flags: {
    g: '전역 매칭 (g)',
    i: '대소문자 무시 (i)',
    m: '멀티라인 모드 (m)',
    s: '점(.)이 모든 문자 매칭 (s)',
    u: '유니코드 모드 (u)',
    y: '고정 매칭 (y)'
  },

  errors: {
    emptyRegex: '정규 표현식을 입력하세요',
    emptyTestString: '테스트할 텍스트를 입력하세요',
    invalidRegex: '유효하지 않은 정규 표현식'
  },

  messages: {
    matchesFound: '{count}개의 매칭 항목 발견',
    noMatches: '매칭 항목 없음',
    copied: '클립보드에 복사되었습니다!'
  },

  placeholders: {
    pattern: '정규 표현식 패턴 입력',
    testString: '테스트할 텍스트 입력'
  },

  options: {
    flags: '플래그',
    global: '전역 매칭 (g)',
    caseInsensitive: '대소문자 무시 (i)',
    multiline: '멀티라인 모드 (m)',
    dotAll: '점(.)이 모든 문자 매칭 (s)',
    unicode: '유니코드 모드 (u)',
    sticky: '고정 매칭 (y)'
  },

  labels: {
    pattern: '정규 표현식',
    testString: '테스트 문자열',
    matches: '매칭 결과',
    groups: '그룹',
    noMatches: '매칭 항목 없음'
  },

  tips: {
    title: '사용 팁',
    pattern: '정규 표현식 패턴을 입력할 때 양쪽 슬래시(/)는 포함하지 마세요.',
    flags: '플래그를 사용하여 패턴 매칭 동작을 수정하세요 (g: 전역, i: 대소문자 무시, m: 멀티라인).',
    examples: '"예제 보기"를 클릭하여 일반적인 정규 표현식 패턴을 확인하고 사용하세요.',
    testing: '패턴과 테스트 문자열을 입력한 후 "테스트"를 클릭하여 매칭 결과를 확인하세요.'
  },

  match: '매칭',
  position: '위치',
  group: '그룹',
  resultsWillAppearHere: '정규 표현식 매칭 결과가 여기에 표시됩니다...',
  regexError: '정규 표현식 오류: {message}',
  emailAddress: '이메일 주소',
  phoneNumber: '휴대폰 번호(중국)',
  ipAddress: 'IP 주소',
  dateFormat: '날짜(yyyy-mm-dd)',
  chineseCharacters: '중국어 문자',
  phoneNumberExample: '연락처: 13912345678\n위챗 동일 번호: 18887654321\n유선 전화: 010-12345678',
  urlExample: '방문 https://example.com\n또는 http://www.domain.org/path?query=value',
  ipAddressExample: '서버 주소: 192.168.1.1\nDNS: 8.8.8.8, 114.114.114.114',
  dateFormatExample: '시작 날짜: 2023-01-15\n종료 날짜: 2023-02-28\n유효하지 않은 날짜: 2023-13-45',
  chineseCharactersExample: 'Hello 세계! 안녕하세요, World!'
};