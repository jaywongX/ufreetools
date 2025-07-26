export default {
  name: '이미지 압축기',
  description: '품질을 유지하면서 이미지 압축 및 최적화',

  input: {
    dragDrop: '이미지를 여기에 끌어다 놓거나 클릭하여 업로드',
    supportedFormats: '지원 형식: JPG, PNG, GIF, WEBP',
    selected: '{count}개 파일 선택됨',
    changeFiles: '파일 변경',
    width: '너비',
    height: '높이',
    keepOriginal: '0으로 설정하면 원본 크기 유지'
  },

  results: {
    originalImage: '원본 이미지',
    compressedImage: '압축 후',
    filename: '파일명:',
    dimensions: '크기:',
    fileSize: '용량:',
    compressionRatio: '압축률:',
    viewOriginal: '원본 보기'
  },

  about: {
    title: '이미지 압축 정보',
    description: '이 도구는 브라우저의 Canvas API를 사용하여 이미지를 압축합니다. 모든 처리는 사용자의 기기에서 이루어지며, 이미지는 서버로 업로드되지 않습니다.',
    principlesTitle: '압축 원리:',
    principles: {
      resize: '이미지 크기 조정: 작은 크기는 더 적은 픽셀 데이터를 의미',
      quality: '품질 저하: 이미지 품질 매개변수를 낮추어 파일 크기 감소',
      format: '형식 변환: 다른 이미지 형식은 다른 압축 특성을 가짐'
    },
    useCasesTitle: '적용 시나리오:',
    useCases: {
      web: '웹사이트 이미지 최적화, 로딩 속도 향상',
      email: '이메일 첨부 파일 크기 축소',
      social: '소셜 미디어 업로드 전 압축',
      storage: '저장 공간 최적화'
    }
  },

  options: {
    quality: '품질',
    qualityValue: '품질 ({value}%)',
    lowQuality: '저품질/소형 파일',
    highQuality: '고품질/대형 파일',
    format: '출력 형식',
    maxSize: '최대 크기 ({width} × {height} px)',
    keepExif: 'EXIF 데이터 유지',
    resizeImage: '이미지 크기 조정',
    maxWidth: '최대 너비',
    maxHeight: '최대 높이',
    compressionLevel: '압축 수준',
    maxFileSize: '목표 파일 크기',
    optimizationLevel: '최적화 수준',
    convertTo: '변환 형식'
  },

  presets: {
    web: '웹 최적화',
    highQuality: '고품질',
    balanced: '균형',
    smallSize: '소형',
    custom: '사용자 정의'
  },

  formats: {
    original: '원본 형식',
    jpeg: 'JPEG',
    jpegDesc: 'JPEG 형식은 사진에 적합하며 투명 배경을 지원하지 않음',
    png: 'PNG',
    pngDesc: 'PNG 형식은 투명 배경을 지원하며 아이콘 및 일러스트레이션에 적합',
    webp: 'WebP',
    webpDesc: 'WebP 형식은 높은 압축률을 제공하며 웹 사용에 적합',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: '크기 조정 안 함',
    maxDimension: '최대 크기',
    exactDimensions: '정확한 크기',
    percentage: '백분율 크기 조정'
  },

  actions: {
    upload: '이미지 업로드',
    compress: '압축',
    processing: '처리 중...',
    download: '다운로드',
    downloadAll: '전체 다운로드',
    batchDownload: '일괄 다운로드',
    clear: '지우기',
    addMore: '이미지 추가',
    removeAll: '모두 제거',
    preview: '미리 보기',
    delete: '삭제'
  },

  table: {
    filename: '파일명',
    originalSize: '원본 크기',
    original: '원본 파일 크기',
    compressedSize: '압축 후 크기',
    compressed: '압축 후 크기',
    savings: '절약',
    ratio: '압축률',
    quality: '품질',
    dimensions: '크기',
    originalDimensions: '원본 크기',
    newDimensions: '새 크기',
    status: '상태'
  },

  messages: {
    dropped: '{count}개의 이미지 드롭됨',
    uploading: '이미지 업로드 중...',
    compressing: '이미지 압축 중...',
    compressed: '이미지 압축 성공',
    downloadPreparing: '다운로드 준비 중...',
    downloadReady: '다운로드 준비 완료',
    cleared: '모든 이미지 삭제됨',
    tooManyFiles: '파일이 너무 많습니다. 최대 허용: {max}',
    fileTooLarge: '파일이 너무 큽니다. 최대 허용: {max}MB',
    unsupportedFormat: '지원되지 않는 파일 형식: {format}',
    imageError: '이미지 처리 중 오류 발생: {error}',
    batchDownloadNotSupported: '일괄 다운로드 기능을 사용하려면 JSZip 라이브러리를 추가해야 합니다. 개별적으로 다운로드하거나 zip 라이브러리 지원을 추가하세요.',
    batchDownloadError: '일괄 다운로드 중 오류 발생: {error}',
    invalidImage: '유효한 이미지 파일을 선택하세요'
  }
};