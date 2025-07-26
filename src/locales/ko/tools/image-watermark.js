export default {
  name: '이미지 워터마크',
  description: '사용자 정의 설정으로 사진에 텍스트 또는 이미지 워터마크 추가',

  upload: {
    title: '이미지 업로드',
    dropzone: '이미지를 여기에 끌어다 놓거나 클릭하여 탐색',
    addMore: '더 많은 이미지 추가',
    clearAll: '모두 지우기',
    maxFiles: '최대 {count}개의 이미지',
    maxSize: '이미지당 최대 크기: {size}MB',
    supportedFormats: '지원 형식: JPG, PNG, WEBP, GIF'
  },

  watermarkType: {
    title: '워터마크 유형',
    text: '텍스트 워터마크',
    image: '이미지 워터마크',
    both: '텍스트 및 이미지'
  },

  textWatermark: {
    title: '텍스트 워터마크',
    text: '워터마크 텍스트',
    font: '글꼴',
    size: '크기',
    color: '색상',
    opacity: '불투명도',
    rotation: '회전',
    shadow: '텍스트 그림자',
    background: '텍스트 배경',
    padding: '패딩',
    border: '테두리',
    spacing: '자간'
  },

  imageWatermark: {
    title: '이미지 워터마크',
    upload: '워터마크 이미지 업로드',
    selectLogo: '로고 선택',
    presetLogos: '프리셋 로고',
    size: '크기',
    opacity: '불투명도',
    rotation: '회전',
    offset: '오프셋'
  },

  positioning: {
    title: '위치 지정',
    position: '위치',
    custom: '사용자 정의 위치',
    xPosition: 'X 위치',
    yPosition: 'Y 위치',
    tiled: '타일 모드',
    margin: '여백',
    scale: '이미지에 따라 크기 조정'
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
    bottomRight: '오른쪽 하단',
    custom: '사용자 정의 위치'
  },

  output: {
    title: '출력',
    quality: '출력 품질',
    format: '출력 형식',
    original: '원본과 동일',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: '미리보기',
    downloadIndividual: '개별 다운로드',
    downloadAll: '모두 다운로드',
    downloadAsZip: 'ZIP으로 다운로드'
  },

  presets: {
    title: '프리셋',
    save: '현재 설정 저장',
    load: '프리셋 불러오기',
    delete: '프리셋 삭제',
    presetName: '프리셋 이름'
  },

  actions: {
    apply: '워터마크 적용',
    applyToAll: '모두에 적용',
    reset: '재설정',
    preview: '미리보기',
    undo: '실행 취소',
    cancel: '처리 취소'
  },

  messages: {
    processing: '처리 중...',
    success: '워터마크 적용 성공',
    error: '오류: {error}',
    noImages: '먼저 이미지를 추가하세요',
    noWatermark: '텍스트 또는 이미지 워터마크를 추가하세요',
    presetSaved: '프리셋 저장 성공',
    presetLoaded: '프리셋 불러오기 성공',
    presetDeleted: '프리셋 삭제됨',
    watermarkApplied: '워터마크가 적용되었습니다',
    watermarkImageLoadError: '워터마크 이미지 로드 실패',
    imageLoadError: '이미지 로드 실패',
    resetSuccess: '재설정 완료',
    downloadStarted: '다운로드 시작',
    downloadError: '이미지 다운로드 실패',
    imageLoaded: '이미지 로드 성공',
    canvasInitError: '캔버스 초기화 실패',
    tiledWatermarkError: '타일 워터마크 생성 실패'
  }
};