export default {
  name: '가로 이미지를 세로로 변환',
  description: '가로 이미지를 세로 형식으로 변환, 숏폼 비디오, 휴대폰 배경화면 및 소셜 미디어 게시에 적합',
  tags: ['이미지', '변환', '휴대폰', '소셜', '스토리', '세로', '초상화'],

  upload: {
    title: '가로 이미지를 세로로 변환기',
    dropzone: '이미지를 여기에 드롭하세요',
    maxSize: '최대 파일 크기: 10MB',
    supportedFormats: '지원 형식: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: '변환 설정',
    presets: '프리셋',
    conversionMode: '변환 모드',
    modes: {
      crop: '자르기',
      fill: '색상 채우기',
      blur: '흐림 배경',
      stretch: '가장자리 늘리기',
      dualColor: '듀얼 컬러 배경'
    },
    cropPosition: '자르기 위치',
    positions: {
      left: '왼쪽',
      center: '중앙',
      right: '오른쪽'
    },
    fillColor: '채우기 색상',
    blurRadius: '흐림 반경',
    stretchFactor: '늘리기 계수',
    topColor: '상단 색상',
    bottomColor: '하단 색상',
    sizeOption: '출력 크기',
    sizeModes: {
      auto: '자동',
      preset: '프리셋',
      custom: '사용자 정의'
    },
    sizePresets: '크기 프리셋',
    outputSize: '사용자 정의 크기',
    width: '너비',
    height: '높이',
    dimensionsHint: '픽셀 단위로 크기 입력',
    outputFormat: '출력 형식',
    quality: '이미지 품질',
    advancedOptions: '고급 옵션',
    preserveRatio: '종횡비 유지',
    sharpen: '선명하게',
    addWatermark: '워터마크 추가',
    watermarkPlaceholder: '워터마크 텍스트 입력',
    watermarkColor: '워터마크 색상'
  },

  output: {
    preview: '출력 미리보기',
    before: '변환 전',
    after: '변환 후',
    dimensions: '크기'
  },

  actions: {
    selectImage: '이미지 선택',
    convert: '세로 이미지로 변환',
    download: '이미지 다운로드',
    showSideBySide: '비교 보기',
    hideSideBySide: '비교 숨기기',
    hideComparison: '비교 숨기기'
  },

  messages: {
    convertPrompt: '가로 이미지를 업로드하고 세로 형식으로 변환하세요',
    processing: '이미지 처리 중...',
    imageOnly: '이미지 파일을 선택해 주세요'
  },

  examples: {
    title: '적용 예시',
    social: 'Instagram, TikTok 등 플랫폼을 위한 세로 스토리 생성',
    socialTip: '가로 사진을 매력적인 세로 콘텐츠로 완벽 변환',
    mobile: '가로 이미지를 휴대폰 배경화면으로 제작',
    mobileTip: '다양한 화면 비율의 스마트폰에 최적화된 이미지'
  }
};