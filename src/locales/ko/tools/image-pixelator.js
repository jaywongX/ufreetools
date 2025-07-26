export default {
  name: '이미지 픽셀화 도구',
  description: '사용자 정의 가능한 해상도와 효과로 이미지를 픽셀 아트로 변환',

  upload: {
    title: '이미지 업로드',
    dropzone: '이미지를 여기에 끌어다 놓거나 클릭하여 탐색',
    maxSize: '최대 파일 크기: 10MB',
    supportedFormats: '지원 형식: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: '픽셀화 설정',
    pixelSize: '픽셀 크기',
    pixelShape: '픽셀 모양',
    shapes: {
      square: '사각형',
      rounded: '둥근 모서리',
      circle: '원형',
      diamond: '다이아몬드',
      custom: '사용자 정의'
    },
    resolution: '해상도',
    width: '너비',
    height: '높이',
    preserveAspect: '종횡비 유지',
    colorReduction: '색상 감소',
    colors: '색상 수',
    dithering: '디더링',
    ditheringTypes: {
      none: '없음',
      floydSteinberg: '플로이드-스타인버그',
      atkinson: '애킨슨',
      ordered: '정렬',
      bayer: '바이어'
    },
    palette: '색상 팔레트',
    palettes: {
      auto: '자동',
      grayscale: '회색조',
      gameboy: '게임보이',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: '사용자 정의',
      normal: '일반',
      retro: '레트로',
      sepia: '세피아',
      bright: '밝은',
      cool: '쿨 톤',
      warm: '웜 톤',
      bw: '흑백',
      invert: '반전'
    },
    customPalette: '사용자 정의 팔레트 색상',
    small: '작음 (세밀함)',
    large: '큼 (거침)',
    low: '낮음 (레트로)',
    high: '높음 (트루컬러)'
  },

  effects: {
    title: '효과',
    brightness: '밝기',
    contrast: '대비',
    saturation: '채도',
    hue: '색조',
    outline: '윤곽선',
    outlineColor: '윤곽선 색상',
    noise: '노이즈',
    posterize: '포스터라이즈',
    invert: '색상 반전',
    grayscale: '회색조',
    sepia: '세피아',
    vignette: '비네팅'
  },

  animation: {
    title: '애니메이션 설정',
    animated: '애니메이션 처리',
    frameRate: '프레임 속도',
    optimizeFrames: '프레임 최적화',
    looping: '루프',
    loopCount: '루프 횟수'
  },

  output: {
    title: '출력',
    preview: '미리보기',
    original: '원본',
    pixelated: '픽셀화',
    comparison: '비교',
    zoomIn: '확대',
    zoomOut: '축소',
    gridOverlay: '그리드 오버레이',
    downloadAs: '다운로드 형식',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: '스프라이트 시트',
    quality: '품질',
    scale: '크기 조정',
    loading: '로딩 중...',
    noImage: '이미지를 선택하세요',
    processing: '처리 중...'
  },

  presets: {
    title: '프리셋',
    save: '현재 설정 저장',
    load: '프리셋 불러오기',
    delete: '프리셋 삭제',
    presetName: '프리셋 이름',
    defaults: {
      lowRes: '저해상도',
      highContrast: '고대비',
      retro: '레트로',
      minimal: '미니멀',
      sketch: '스케치',
      blueprint: '청사진'
    }
  },

  actions: {
    pixelate: '이미지 픽셀화',
    reset: '설정 초기화',
    applyChanges: '변경 적용',
    undoChanges: '변경 취소',
    downloadImage: '이미지 다운로드',
    selectImage: '이미지 선택'
  },

  messages: {
    processing: '이미지 처리 중...',
    success: '이미지 픽셀화 성공',
    downloading: '다운로드 준비 중...',
    presetSaved: '프리셋 저장 성공',
    presetLoaded: '프리셋 불러옴',
    presetDeleted: '프리셋 삭제됨',
    error: '오류: {error}',
    fileSize: '파일 크기',
    pixels: '픽셀',
    imageSize: '이미지 크기',
    downloadSuccess: '이미지 다운로드 성공',
    downloadFailed: '다운로드 실패',
    resetSuccess: '초기화 완료',
    fileName: '파일 이름'
  }
};