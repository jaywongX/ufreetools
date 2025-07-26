export default {
  name: '이미지 색상 추출기',
  description: '이미지에서 색상 팔레트와 주요 색상을 추출',

  input: {
    title: '이미지 업로드',
    dropzone: '이미지를 여기에 끌어다 놓거나 클릭하여 업로드',
    formats: '지원 형식: JPG, PNG, GIF, WebP, SVG',
    browse: '파일 탐색',
    selectImage: '이미지 선택',
    orText: '또는',
    pasteUrl: '이미지 URL 붙여넣기:',
    loadUrl: 'URL에서 로드',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: '이름 없는 이미지'
  },

  options: {
    title: '추출 옵션',
    extractSettings: '추출 설정',
    colorCount: '색상 수',
    paletteSize: '팔레트 크기',
    paletteMin: '최소 (3)',
    paletteMax: '최대 (20)',
    colorSimilarity: '색상 유사도',
    similiarityToggle: '유사 색상 허용',
    quality: '추출 품질',
    colorModel: '색상 모델',
    colorSpace: '색 공간',
    colorFormat: '색상 형식',
    sortBy: '색상 정렬 방식',
    sortByPopularity: '색상 빈도순',
    sortByLuminance: '명도순',
    sortByHue: '색조순',
    sortBySaturation: '채도순',
    ignoreWhite: '흰색 무시',
    ignoreBlack: '검은색 무시',
    threshold: '유사도 임계값'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: '16진수 (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: '투명도 포함 RGBA',
    hsl: 'HSL',
    hsla: '투명도 포함 HSLA',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: '빈도',
    luminance: '명도',
    hue: '색조',
    saturation: '채도',
    original: '원본 순서'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: '추출된 색상',
    colorsFound: '{count}개의 색상 추출됨',
    dominantColor: '주요 색상',
    mainColor: '메인 색상',
    complementary: '보색',
    palette: '색상 팔레트',
    colorPalette: '색상 팔레트',
    palettePreview: '팔레트 미리보기',
    usage: '색상 사용률 (%)',
    percentage: '비율: {value}%',
    copyAll: '모든 색상 복사',
    clickToCopy: '클릭하여 색상 복사: {color}',
    downloading: '팔레트 다운로드 중...'
  },

  display: {
    originalImage: '원본 이미지',
    colorPalette: '색상 팔레트',
    uploadFirst: '먼저 이미지를 업로드하세요',
    clickExtract: '"색상 추출" 버튼을 클릭하여 이미지의 팔레트를 가져오세요',
  },

  actions: {
    extract: '색상 추출',
    extracting: '처리 중...',
    download: '팔레트 다운로드',
    copy: '복사',
    copyValue: '값 복사',
    reset: '재설정',
    copyPalette: '팔레트 복사',
    exportJson: 'JSON으로 내보내기',
    exportCss: 'CSS 변수로 내보내기',
    exportSass: 'SASS 변수로 내보내기',
    exportSwatch: 'ASE 스워치로 내보내기'
  },

  palette: {
    title: '명명된 팔레트',
    vibrant: '선명한',
    muted: '탁한',
    dark: '어두운',
    light: '밝은',
    custom: '사용자 정의'
  },

  messages: {
    imageLoaded: '이미지 로드 성공',
    processingImage: '이미지 처리 중...',
    extractionComplete: '색상 추출 완료',
    extractionFailed: '색상 추출 실패: {error}',
    copied: '클립보드에 복사됨',
    copiedColor: '복사됨: {color}',
    copiedAll: '모든 색상 복사됨',
    copyFailed: '복사 실패',
    resetDone: '재설정 완료',
    invalidImage: '잘못된 이미지 파일',
    noImageSelected: '선택된 이미지 없음'
  }
};