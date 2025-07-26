export default {
  name: '시간대 변환기',
  description: '전 세계 시간대 비교 및 변환 도구로 다양한 국가 및 지역의 현재 시간을 쉽게 확인',

  // 주요 기능 탭
  currentTime: '현재 시간',

  addTimezone: '시간대 추가',
  removeTimezone: '시간대 제거',
  convertTime: '시간 변환',
  compareTimezones: '시간대 비교',

  // 설정 및 옵션
  settings: {
    date: '날짜',
    time: '시간',
    format: '형식',
    select24Hour: '24시간제',
    select12Hour: '12시간제',
    showSeconds: '초 표시',
    hideSeconds: '초 숨기기',
    showDate: '날짜 표시',
    hideDate: '날짜 숨기기',
  },

  // 시간대 관련
  timezone: {
    title: '시간대',
    search: '시간대 또는 도시 검색...',
    yourLocal: '로컬 시간대',
    popular: '인기 시간대',
    allTimezones: '모든 시간대',
    utc: 'UTC(협정 세계시)',
    gmt: 'GMT(그리니치 표준시)',
    est: '미국 동부 시간',
    cst: '중국 표준시',
    jst: '일본 표준시',
    ist: '인도 표준시',
    cet: '중부 유럽 시간',
    bst: '영국 서머 타임',
    aest: '호주 동부 표준시',
    nzst: '뉴질랜드 표준시',
    custom: '사용자 정의 시간대'
  },

  // 지역 및 대륙 그룹
  regions: {
    africa: '아프리카',
    america: '아메리카',
    asia: '아시아',
    atlantic: '대서양',
    australia: '호주',
    europe: '유럽',
    indian: '인도양',
    pacific: '태평양'
  },

  // 변환 관련
  conversion: {
    from: '시작',
    to: '종료',
    convert: '변환',
    result: '변환 결과',
    timeIn: '시간'
  },

  // UI 요소
  ui: {
    now: '지금',
    refresh: '새로 고침',
    copy: '복사',
    copied: '복사됨',
    share: '공유',
    reset: '재설정',
    empty: '결과 없음',
    offset: '오프셋',
    add: '추가'
  },

  // 메시지 알림
  messages: {
    invalid: '유효하지 않은 시간',
    copied: '클립보드에 복사됨',
    removed: '시간대가 제거됨',
    added: '시간대가 추가됨',
    maxTimezones: '최대 10개의 시간대만 추가할 수 있습니다',
    selectTimezone: '시간대를 선택하세요'
  },

  // 도구 소개
  aboutTitle: '시간대 변환기 정보',

  aboutDescription: '시간대 변환기는 전 세계 다른 지역의 시간을 쉽게 확인하고 비교할 수 있는 편리한 도구로, 국제 커뮤니케이션, 여행 계획, 국제 회의 일정 등에 유용합니다.',
  featuresTitle: '주요 기능',
  feature1: '세계 주요 도시 및 시간대의 실시간 현재 시간 표시',
  feature2: '여러 시간대 간 시간 차이 빠르게 비교',
  feature3: '임의의 시간대 시간을 다른 시간대로 변환',
  feature4: '24시간제 및 12시간제 시간 형식 지원',
  feature5: '작업 시간 중복 상황을 한눈에 확인',
  feature6: '도시 또는 국가 검색으로 해당 시간대 찾기 지원',
  useCasesTitle: '사용 시나리오',
  useCase1: '국제 비즈니스 회의 또는 전화 회의 일정',
  useCase2: '국제 여행 및 항공편 시간 계획',
  useCase3: '해외 친구 또는 가족과 연락 유지',
  useCase4: '중요한 국제 이벤트의 현지 시간 추적',
  useCase5: '원격 근무 팀의 협업 시간 조정',
  howToUseTitle: '사용 방법',
  howToUse1: '여러 시간대를 추가하여 다른 지역의 현재 시간 동시 확인',
  howToUse2: '특정 시간을 한 시간대에서 다른 시간대로 변환하는 기능 사용',
  howToUse3: '개인화된 요구 사항을 충족하도록 날짜 및 시간 형식 조정',
  howToUse4: '결과 복사 또는 링크 생성하여 다른 사람과 공유'
};