export default {
  name: '색상 선택기',
  description: '고급 색상 도구로 색상 팔레트를 선택, 변환 및 생성합니다',

  options: {
    colorSpace: '색 공간',
    paletteType: '팔레트 유형',
    includeAlpha: '투명도 포함',
    colorNaming: '색상 이름 지정'
  },

  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: '색상 이름'
  },

  palettes: {
    monochromatic: '모노크로마틱',
    complementary: '보색',
    analogous: '유사색',
    triadic: '트라이어드',
    tetradic: '테트라드',
    split: '스플릿 컴플리멘터리'
  },

  actions: {
    pickColor: '색상 선택',
    randomColor: '무작위 색상',
    generatePalette: '팔레트 생성',
    convert: '변환',
    copyColor: '현재 색상 복사',
    copyAll: '모두 복사',
    save: '색상 저장',
    reset: '초기화',
    clear: '지우기'
  },

  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },

  colorSchemes: {
    title: '색상 구성표',
    complementary: '보색',
    triadic: '트라이어드',
    analogous: '유사색',
    monochromatic: '모노크로마틱',
    split: '스플릿 컴플리멘터리',
    double: '더블 컴플리멘터리',
    square: '스퀘어',
    compound: '컴파운드'
  },

  colorAdjust: {
    title: '색상 조정',
    hue: '색조',
    saturation: '채도',
    lightness: '명도',
    alpha: '투명도'
  },

  colorInfo: {
    title: '색상 정보',
    name: '색상 이름',
    format: '형식',
    contrast: '대비',
    accessibility: {
      title: '접근성',
      pass: 'WCAG 표준 충족',
      fail: 'WCAG 표준 미충족',
      normal: '일반 텍스트',
      large: '큰 텍스트'
    }
  },

  messages: {
    copied: '색상이 클립보드에 복사되었습니다',
    copyFailed: '색상을 복사할 수 없습니다',
    invalidColor: '잘못된 색상 형식',
    contrastWarning: '낮은 대비',
    saved: '색상이 저장되었습니다',
    contrast: '대비: {ratio}',
    accessibility: {
      AAA: '우수한 대비 (AAA)',
      AA: '좋은 대비 (AA)',
      fail: '불충분한 대비 - 접근성 부족'
    },
    preview: '미리보기',
    colorValue: '색상 값',
  },

  history: {
    title: '색상 기록',
    empty: '기록된 색상이 없습니다',
    clear: '기록 지우기'
  },

  colorPalette: {
    title: '색상 팔레트',
    addToPalette: '팔레트에 추가',
    removeFromPalette: '팔레트에서 제거',
    exportPalette: '팔레트 내보내기',
    importPalette: '팔레트 가져오기',
    clearPalette: '팔레트 비우기'
  }
};