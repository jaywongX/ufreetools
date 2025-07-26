export default {
  name: '이미지 필터',
  description: '실시간 미리보기로 이미지에 다양한 필터와 효과 적용',

  upload: {
    title: '이미지 업로드',
    dropzone: '이미지를 여기에 끌어다 놓거나 클릭하여 탐색',
    maxSize: '최대 파일 크기: 10MB',
    supportedFormats: '지원 형식: JPG, PNG, WEBP, GIF'
  },

  editor: {
    title: '필터 편집기',
    original: '원본',
    filtered: '필터 적용됨',
    reset: '모두 재설정',
    undo: '실행 취소',
    redo: '다시 실행',
    zoomIn: '확대',
    zoomOut: '축소',
    fitToScreen: '화면에 맞추기',
    showOriginal: '원본 보기'
  },

  filters: {
    title: '필터',
    basic: '기본 조정',
    brightness: '밝기',
    contrast: '대비',
    saturation: '채도',
    hue: '색조',
    exposure: '노출',
    vibrance: '생동감',
    temperature: '색온도',
    gamma: '감마',
    clarity: '선명도',
    effects: '효과',
    grayscale: '흑백',
    sepia: '세피아',
    vintage: '빈티지',
    polaroid: '폴라로이드',
    duotone: '듀오톤',
    noise: '노이즈',
    pixelate: '픽셀화',
    blur: '흐림',
    sharpen: '선명하게',
    vignette: '비네팅',
    color: '색상',
    colorOverlay: '색상 오버레이',
    colorize: '색상화',
    gradientMap: '그라데이션 맵',
    replaceColor: '색상 교체',
    advanced: '고급',
    levels: '레벨',
    curves: '곡선',
    shadows: '그림자',
    highlights: '하이라이트',
    blacks: '블랙',
    whites: '화이트',
    channels: 'RGB 채널'
  },

  presets: {
    title: '프리셋',
    custom: '사용자 정의',
    blackAndWhite: '흑백',
    highContrast: '고대비',
    normal: '일반',
    cinematic: '시네마틱',
    warm: '따뜻한 톤',
    cool: '차가운 톤',
    sunset: '일몰',
    vintage: '빈티지',
    invert: '반전',
    cross: '크로스 프로세싱',
    matte: '매트',
    flat: '플랫',
    portrait: '인물',
    landscape: '풍경',
    vivid: '선명한',
    moody: '무드',
    savePreset: '현재 설정을 프리셋으로 저장',
    deletePreset: '프리셋 삭제',
    presetName: '프리셋 이름'
  },

  output: {
    title: '출력',
    fileName: '파일 이름',
    format: '형식',
    quality: '품질',
    width: '너비',
    height: '높이',
    download: '이미지 다운로드',
    saveOnline: '온라인 저장',
    share: '공유',
    applyToNew: '새 이미지에 적용'
  },

  history: {
    title: '히스토리',
    revert: '이 단계로 되돌리기',
    clear: '히스토리 지우기'
  },

  actions: {
    apply: '필터 적용',
    download: '다운로드',
    save: '저장',
    reset: '재설정',
    cancel: '취소'
  },

  messages: {
    imageLoaded: '이미지 로드 성공',
    filterApplied: '필터 적용 성공',
    filtersReset: '필터가 기본값으로 재설정됨',
    downloadStarted: '다운로드 시작됨',
    presetSaved: '프리셋 저장 성공',
    presetDeleted: '프리셋 삭제됨',
    invalidFile: '잘못된 파일입니다. 유효한 이미지를 업로드하세요.',
    fileTooLarge: '파일이 너무 큽니다. 최대 크기는 10MB입니다.'
  }
};