export default {
  name: '세로 이미지를 가로로 변환',
  description: '세로(포트레이트) 이미지를 가로(랜드스케이프) 형식으로 변환하는 도구, 다양한 변환 옵션 제공',

  upload: {
    title: '이미지 업로드',
    dropzone: '이미지를 여기에 드롭하세요',
    maxSize: '최대 파일 크기: 10MB',
    supportedFormats: '지원 형식: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: '변환 설정',
    presets: '빠른 프리셋',
    conversionMode: '변환 모드',
    modes: {
      rotate: '회전',
      fill: '배경 채우기',
      blur: '배경 흐리게',
      stretch: '가장자리 늘리기',
      dualColor: '이중 색상 배경'
    },
    rotationAngle: '회전 각도',
    fillColor: '배경 색상',
    blurRadius: '흐림 정도',
    stretchEdges: '늘림 정도',
    leftColor: '왼쪽 색상',
    rightColor: '오른쪽 색상',
    sizeOption: '크기 설정',
    sizeModes: {
      auto: '자동 크기',
      preset: '일반 크기',
      custom: '사용자 정의 크기'
    },
    sizePresets: '크기 프리셋',
    outputSize: '출력 크기',
    width: '너비',
    height: '높이',
    dimensionsHint: '픽셀 단위로 크기 입력',
    autoSize: '크기 자동 계산',
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
    preview: '결과 미리보기',
    dimensions: '크기',
    before: '변환 전',
    after: '변환 후'
  },

  actions: {
    selectImage: '이미지 선택',
    convert: '이미지 변환',
    download: '이미지 다운로드',
    reset: '제거',
    showSideBySide: '비교 보기',
    hideComparison: '비교 숨기기',
    hideSideBySide: '닫기'
  },

  messages: {
    processing: '이미지 처리 중...',
    convertPrompt: '이미지 변환 후 결과가 여기에 표시됩니다',
    error: '이미지 처리 중 오류 발생',
    success: '변환이 성공적으로 완료되었습니다!'
  },

  examples: {
    title: '사용 팁',
    social: '소셜 미디어 게시물에 적합, 가로 이미지가 더 잘 표시됨',
    socialTip: '흐림 모드를 사용하여 소셜 미디어 최적 효과 얻기',
    website: '웹사이트 및 블로그용 배너 이미지 생성',
    websiteTip: '이중 색상 모드는 웹 배너에 완벽함'
  },

  help: {
    title: '이 도구 사용 방법',
    description: '이 도구는 다양한 방법을 사용하여 세로(포트레이트) 이미지를 가로(랜드스케이프) 형식으로 변환하면서 시각적 품질과 효과를 유지할 수 있게 해줍니다.',
    example1: {
      title: '소셜 미디어 게시물',
      description: '흐린 배경이 있는 세로 사진을 소셜 미디어 친화적인 가로 형식으로 변환'
    },
    example2: {
      title: '웹사이트 배너',
      description: '색상 채우기 배경을 사용하여 세로 이미지에서 웹사이트 헤더 및 배너 생성'
    }
  }
};