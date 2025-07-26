export default {
  name: 'OpenAPI → TypeScript 클라이언트 생성기',
  description: 'OpenAPI 스펙을 기반으로 TypeScript 인터페이스 및 클라이언트 코드 자동 생성, 프론트엔드-백엔드 협업 효율성 향상',

  options: {
    exportSchemas: '모든 모델 정의 내보내기',
    generateClient: 'API 클라이언트 코드 생성',
    addComments: '주석 및 문서 설명 추가',
    useEnums: 'TypeScript 열거형 사용 (문자열 유니온 타입 대신)',
    indentSize: '들여쓰기 크기',
    operationType: '작업 유형',
    displayOptions: '표시 옵션'
  },

  inputMode: {
    toggleToFile: '파일 업로드로 전환',
    toggleToText: '텍스트 입력으로 전환',
    loadExample: '예제 로드'
  },

  fileUpload: {
    dragAndDrop: 'OpenAPI 파일을 여기에 드래그 앤 드롭하거나 클릭하여 업로드',
    supportedFormats: '.json, .yaml 및 .yml 파일 형식 지원',
    fileSelected: '선택됨: {0} ({1})'
  },

  textInput: {
    placeholder: 'OpenAPI 스펙(JSON 또는 YAML)을 여기에 붙여넣기...'
  },

  actions: {
    generate: 'TypeScript 코드 생성',
    processing: '처리 중...',
    clear: '초기화',
    copy: '코드 복사',
    download: '코드 다운로드'
  },

  results: {
    generatedCode: '생성된 TypeScript 코드',
    copied: '클립보드에 복사됨',
    error: '오류',
    characterCount: '문자 수: {0}'
  },

  errors: {
    parseError: 'OpenAPI 스펙을 파싱할 수 없습니다. 유효한 JSON 또는 YAML 형식인지 확인하세요.',
    invalidSpec: '잘못된 OpenAPI 스펙. openapi 또는 swagger 버전 식별자를 찾을 수 없음.',
    processingError: 'OpenAPI 스펙 처리 중 오류 발생: {0}'
  }
};