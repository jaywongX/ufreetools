export default {
  name: '비밀번호 생성기',
  description: '사용자 정의 옵션으로 안전하고 무작위한 비밀번호 생성',

  options: {
    length: '비밀번호 길이',
    quantity: '비밀번호 수량',
    includeLowercase: '소문자 포함 (a-z)',
    includeUppercase: '대문자 포함 (A-Z)',
    includeNumbers: '숫자 포함 (0-9)',
    includeSymbols: '특수문자 포함 (!@#$%)',
    excludeSimilar: '유사 문자 제외 (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: '모호한 특수문자 제외 ({}<>[]()\'"`\\)',
    requireAll: '모든 문자 유형 요구',
    noConsecutive: '연속된 유사 문자 없음',
    advancedOptions: '고급 옵션',
    characterTypes: '문자 유형'
  },

  presets: {
    standard: '표준',
    strong: '강력',
    memorable: '기억하기 쉬움',
    pin: 'PIN 코드',
    pronounceable: '발음 가능',
    custom: '사용자 정의',
    easyToRemember: '기억하기 쉬움',
    balanced: '균형 잡힘',
    secure: '안전'
  },

  strength: {
    title: '비밀번호 강도',
    veryWeak: '매우 약함',
    weak: '약함', 
    medium: '보통',
    strong: '강함',
    veryStrong: '매우 강함',
    unknown: '알 수 없음'
  },

  actions: {
    generate: '비밀번호 생성',
    regenerate: '다시 생성',
    copy: '복사',
    copyAll: '전체 복사',
    clear: '지우기',
    expand: '펼치기',
    collapse: '접기'
  },

  messages: {
    copied: '클립보드에 복사되었습니다!',
    allCopied: '모든 비밀번호가 클립보드에 복사되었습니다!',
    generated: '비밀번호 생성 성공',
    invalidOptions: '하나 이상의 문자 유형을 선택해주세요',
    tooManyPasswords: '최대 비밀번호 수량은 100개입니다',
    clickToGenerate: '위 버튼을 클릭하여 비밀번호를 생성하세요'
  },

  errors: {
    copyFailed: '비밀번호 복사 실패: ',
    copyFailedManual: '복사에 실패했습니다. 수동으로 복사해주세요'
  },

  results: {
    title: '생성된 비밀번호'
  },

  units: {
    passwords: '개 비밀번호'
  },

  tips: {
    title: '비밀번호 보안 팁',
    useLength: '충분한 길이의 비밀번호 사용(최소 12자 이상)',
    useDifferent: '각 웹사이트 또는 서비스마다 다른 비밀번호 사용',
    changeRegularly: '중요한 계정의 비밀번호를 정기적으로 변경',
    useManager: '비밀번호 관리자 사용을 고려하여 복잡한 비밀번호를 안전하게 저장',
    use2FA: '추가 보안을 위해 2단계 인증 활성화'
  }
};
