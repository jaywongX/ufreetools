export default {
  name: '이미지 일괄 조정기',
  description: '여러 이미지를 한 번에 조정, 변환 및 최적화',

  input: {
    title: '이미지 입력',
    dropzone: '이미지를 여기에 끌어다 놓거나 클릭하여 탐색',
    addMore: '더 많은 이미지 추가',
    selectImages: '이미지 선택',
    clearAll: '모두 지우기',
    maxFiles: '최대 {count}개의 이미지',
    maxSize: '이미지당 최대 크기: {size}MB',
    supportedFormats: '지원 형식: {formats}'
  },

  options: {
    title: '조정 옵션',
    settingsTitle: '조정 설정',
    resizeMode: '크기 조정 모드',
    resizeMethod: '크기 조정 방법',
    pixelMode: '픽셀',
    percentageMode: '백분율',
    maxDimensionMode: '최대 크기',
    outputFormat: '출력 형식',
    quality: '품질',
    width: '너비',
    height: '높이',
    maintainAspectRatio: '종횡비 유지',
    maxWidth: '최대 너비',
    maxHeight: '최대 높이',
    percentage: '백분율',
    backgroundColor: '배경 색상',
    naming: '출력 이름 지정',
    filenamePrefix: '파일 이름 접두사',
    filenameSuffix: '파일 이름 접미사',
    applyToAllImages: '모든 이미지에 적용',
    applyToAll: '모든 이미지에 적용'
  },

  resizeModes: {
    exact: '정확한 크기',
    maxDimensions: '최대 크기',
    percentage: '백분율 크기 조정',
    fit: '내부에 맞추기',
    cover: '덮기',
    crop: '자르기'
  },

  formats: {
    original: '원본과 동일',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },

  namingOptions: {
    original: '원본 파일 이름',
    dimensions: '원본 + 크기',
    format: '원본 + 형식',
    custom: '사용자 정의 모드',
    random: '무작위 문자열'
  },

  output: {
    title: '조정된 이미지',
    downloadAll: '모두 다운로드',
    downloadAsZip: 'ZIP으로 다운로드',
    processingStatus: '처리 중: {processed}/{total}',
    originalSize: '원본 크기',
    newSize: '새 크기',
    reduction: '감소량',
    individualDownload: '다운로드'
  },

  batch: {
    title: '일괄 처리',
    process: '모든 이미지 처리',
    cancel: '처리 취소',
    selectPreset: '프리셋 선택',
    savePreset: '현재 설정 저장',
    progress: '처리 진행률'
  },

  watermark: {
    title: '워터마크',
    enable: '워터마크 추가',
    text: '워터마크 텍스트',
    image: '워터마크 이미지',
    position: '위치',
    opacity: '불투명도',
    rotation: '회전',
    size: '크기',
    padding: '안쪽 여백'
  },

  positions: {
    topLeft: '왼쪽 상단',
    topCenter: '상단 중앙',
    topRight: '오른쪽 상단',
    middleLeft: '왼쪽 중앙',
    middleCenter: '중앙',
    middleRight: '오른쪽 중앙',
    bottomLeft: '왼쪽 하단',
    bottomCenter: '하단 중앙',
    bottomRight: '오른쪽 하단'
  },

  actions: {
    resize: '크기 조정',
    preview: '미리 보기',
    processing: '처리 중...',
    reset: '재설정',
    applySettings: '설정 적용',
    resetSettings: '설정 재설정',
    cancel: '취소'
  },

  messages: {
    resizeSuccess: '이미지 크기 조정 성공',
    resizeFailed: '이미지 크기 조정 실패: {error}',
    invalidDimensions: '유효한 크기를 입력하세요',
    invalidWidthHeight: '유효한 너비와 높이를 입력하세요',
    noImages: '크기를 조정할 이미지를 추가하세요',
    noImagesToDownload: '다운로드할 이미지가 없습니다',
    processing: '이미지 처리 중...',
    processingComplete: '처리 완료',
    processingError: '이미지 처리 중 오류 발생',
    waitingForProcess: '처리 대기 중',
    downloadStarted: '다운로드 시작됨',
    allDownloaded: '모든 이미지 다운로드 완료',
    presetSaved: '프리셋 저장됨',
    presetLoaded: '프리셋 로드됨',
    zipCreated: '{count}개의 이미지를 포함한 ZIP 파일 생성됨',
    zipError: 'ZIP 파일 생성 중 오류 발생'
  },

  preview: {
    title: '이미지 미리 보기 ({count}장)',
    selectImage: '이미지를 선택하세요',
    batchSupport: '여러 이미지를 일괄 선택하여 한 번에 처리 지원',
    download: '다운로드',
    delete: '삭제'
  },

  qualityOptions: {
    fast: '빠른 처리',
    medium: '일반 품질',
    high: '고품질 (권장)',
    best: '최고 품질 (느림)'
  }
};