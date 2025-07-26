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
  }
};