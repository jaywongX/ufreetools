export default {
  name: '쿠키 관리자',
  description: '현재 사이트의 쿠키를 확인, 생성, 편집 및 삭제',

  // 주요 기능 탭
  currentCookies: '현재 쿠키',

  createCookie: '쿠키 생성',
  importExport: '가져오기/내보내기',

  // 쿠키 목록
  noCookies: '현재 사이트에 쿠키가 없습니다',

  cookieName: '이름',
  cookieValue: '값',
  cookieDomain: '도메인',
  cookiePath: '경로',
  cookieExpires: '만료 시간',
  cookieSecure: '보안(Secure)',
  cookieHttpOnly: 'HttpOnly',
  cookieSameSite: 'SameSite',
  actions: '작업',
  edit: '편집',
  delete: '삭제',
  save: '저장',
  cancel: '취소',
  refresh: '새로 고침',

  // 생성/편집 폼
  addCookie: '쿠키 추가',

  editCookie: '쿠키 편집',
  required: '필수 항목',
  optional: '선택 항목',
  days: '일',
  hours: '시간',
  minutes: '분',
  cookieCreated: '쿠키가 생성되었습니다',
  cookieUpdated: '쿠키가 업데이트되었습니다',
  cookieDeleted: '쿠키가 삭제되었습니다',
  createError: '쿠키 생성 중 오류 발생',
  updateError: '쿠키 업데이트 중 오류 발생',
  deleteError: '쿠키 삭제 중 오류 발생',

  // 가져오기/내보내기
  export: '쿠키 내보내기',

  import: '쿠키 가져오기',
  exportAs: '내보내기 형식',
  exportSuccess: '쿠키가 내보내기되었습니다',
  importSuccess: '{count}개의 쿠키를 가져왔습니다',
  importError: '쿠키 가져오기 중 오류 발생',

  // 보안 옵션
  none: '없음',

  strict: '엄격',
  lax: '완화',

  // 팁 및 설명
  domainNote: '비워두면 현재 도메인으로 설정됩니다',

  pathNote: '기본값은 루트 경로 "/" 입니다',
  expiresNote: '설정하지 않으면 세션 쿠키로 설정됩니다',
  secureNote: 'HTTPS를 통해서만 전송됩니다',
  httpOnlyNote: 'JavaScript 접근이 차단됩니다',
  sameSiteNote: '크로스 사이트 요청 제어',

  // 가져오기 형식
  importFormat: '가져오기 형식 예시:\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict',

  jsonFormat: 'JSON 형식',
  textFormat: '텍스트 형식',
  invalidFormat: '잘못된 형식'
};