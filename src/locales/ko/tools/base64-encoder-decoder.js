export default {
  name: 'Base64 인코더/디코더',
  description: '텍스트와 Base64 인코딩 데이터 간의 빠른 변환',

  mode: {
    title: '모드',
    encode: '인코딩',
    decode: '디코딩'
  },

  input: {
    title: '입력',
    placeholder: '처리할 텍스트 입력...',
    clear: '지우기',
    copy: '복사',
    paste: '붙여넣기',
    upload: '파일 업로드',
    dragDrop: '파일을 여기로 드래그하거나 클릭하여 업로드',
    textOption: '텍스트',
    fileOption: '파일',
    hexOption: '16진수',
    selectFile: '파일 선택',
  },

  output: {
    title: '출력',
    placeholder: '결과가 여기에 표시됩니다...',
    copy: '복사',
    download: '다운로드',
    empty: '출력 없음'
  },

  options: {
    title: '옵션',
    encoding: '문자 인코딩',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: 'URL 안전 인코딩 사용',
    autoDecode: '자동 감지 및 디코딩',
    includeDataURI: 'Data-URI 접두사 포함',
    trimWhitespace: '공백 제거',
    preserveLineBreaks: '줄 바꿈 유지',
    addImageHeader:'이미지 Base64 헤더 추가',
  },

  dataUri: {
    title: 'Data-URI',
    mimeType: 'MIME 타입',
    common: '일반 타입',
    custom: '사용자 정의'
  },

  messages: {
    copied: '클립보드에 복사됨',
    copyFailed: '복사 실패',
    pasteFailed: '붙여넣기 실패',
    uploadSuccess: '파일 업로드 성공',
    uploadFailed: '파일 업로드 실패',
    readFailed: '파일 읽기 실패',
    invalidBase64: '잘못된 Base64 인코딩',
    invalidHex: '잘못된 16진수 인코딩',
    fileTooLarge: '파일이 너무 큽니다. 직접 다운로드하세요',
    processError: '처리 오류',
    encodeSuccess: '인코딩 성공',
    decodeSuccess: '디코딩 성공',
    processing: '처리 중...'
  },

  mimeTypes: {
    'text/plain': '텍스트',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'JPEG 이미지',
    'image/png': 'PNG 이미지',
    'image/gif': 'GIF 이미지',
    'image/svg+xml': 'SVG 이미지',
    'application/pdf': 'PDF 문서'
  },

  tips: {
    title: '사용 팁',
    tip1: 'Base64 인코딩은 모든 바이너리 데이터를 순수 텍스트 형식으로 변환할 수 있습니다',
    tip2: 'URL 안전 옵션은 표준 Base64 인코딩에서 "+"와 "/"를 제거합니다',
    tip3: 'Data-URI 접두사를 사용하면 HTML img 태그에서 인코딩된 데이터를 직접 사용할 수 있습니다',
    tip4: '대용량 파일은 더 많은 리소스가 필요합니다 - 권장 제한: 2MB',
    tip5: '특수 문자는 특정 문자 인코딩이 필요할 수 있습니다'
  },

  about: {
    title: 'Base64 인코딩 정보',
    description: 'Base64는 64개의 인쇄 가능한 ASCII 문자를 사용하여 바이너리 데이터를 표현하는 방법으로, 텍스트 기반 시스템에서 바이너리 데이터를 전송하고 저장할 때 자주 사용됩니다.'
  },

  features: {
    title: '기능 개요',
    multiInput: '텍스트, 16진수 및 파일 입력 지원',
    charsetSupport: 'UTF-8 및 GBK 문자 집합 지원',
    imagePreview: '이미지 미리보기 (1MB 미만 파일)',
    fileDownload: '다양한 파일 형식 다운로드 (기본값: PDF)',
    chunkProcessing: '대용량 파일 청크 처리 및 진행률 표시',
    autoDetect: '이미지 타입 자동 감지'
  },

  notes: {
    title: '참고 사항',
    sizeIncrease: 'Base64 인코딩은 데이터 크기를 약 33% 증가시킵니다',
    chunkProcessing: '대용량 파일은 청크 단위로 처리됩니다',
    largeFiles: '10MB 이상 파일은 다운로드만 가능합니다',
    fileInput: '대용량 파일은 직접 파일 입력을 권장합니다'
  },

  fileTypeLabel: {
    pdf: 'PDF 문서',
    txt: '텍스트 파일',
    jpg: 'JPG 이미지', 
    png: 'PNG 이미지', 
    zip: 'ZIP 아카이브',
    bin: '바이너리 파일',
  }
};