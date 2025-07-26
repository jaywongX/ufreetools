export default {
  name: '색상 팔레트 생성기',
  description: '색상 이론에 기반한 조화로운 색상 구성을 생성하여 디자이너들이 빠르게 조화로운 색상 팔레트를 만들 수 있도록 합니다',

  baseColor: {
    title: '기본 색상',
    picker: '색상 선택기',
    hex: '16진수',
    rgb: 'RGB',
    hsl: 'HSL',
    random: '무작위 색상',
    recent: '최근 사용한 색상',
    hint: '색상 영역 클릭 또는 16진수 색상 값 입력',
  },

  schemeTypes: {
    title: '색상 이론',
    monochromatic: '모노크로마틱',
    analogous: '유사 색상',
    complementary: '보색',
    splitComplementary: '스플릿 컴플리멘터리',
    triadic: '트라이어딕',
    tetradic: '테트라딕',
    square: '스퀘어',
    compound: '컴파운드',
    shades: '색조 변형',
    custom: '사용자 정의',
  },

  options: {
    colorCount: '색상 수',
    saturationRange: '채도 범위',
    brightnessRange: '명도 범위',
    includeBaseColor: '기본 색상 포함',
    lockBaseColor: '기본 색상 잠금',
    colorSpace: '색 공간',
    sortBy: '정렬 기준',
    colorBlindSafe: '색맹 안전',
    contrastRatio: '최소 대비율'
  },

  colorSpaces: {
    rgb: 'RGB',
    hsl: 'HSL',
    lab: 'LAB',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },

  sortOptions: {
    hue: '색조',
    saturation: '채도',
    brightness: '명도',
    harmony: '조화도',
    none: '없음'
  },

  palettes: {
    title: '생성된 색상 팔레트',
    save: '색상 팔레트 저장',
    copy: '색상 팔레트 복사',
    export: 'CSS 변수로 내보내기',
    apply: '미리보기에 적용'
  },

  exportFormats: {
    title: '내보내기 형식',
    css: 'CSS 변수',
    scss: 'SCSS 변수',
    less: 'LESS 변수',
    json: 'JSON',
    svg: 'SVG 색상 팔레트',
    ase: 'Adobe ASE',
    tailwind: 'Tailwind 설정',
    pdf: 'PDF'
  },

  preview: {
    title: '미리보기',
    website: '웹사이트',
    mobilApp: '모바일 앱',
    dashboard: '대시보드',
    card: '카드',
    poster: '포스터',
    custom: '사용자 정의',
    mainButton: '기본 버튼',
    secondButton: '보조 버튼',
    tag: '태그'
  },

  savedPalettes: {
    title: '저장된 색상 팔레트',
    load: '불러오기',
    delete: '삭제',
    rename: '이름 변경',
    noSavedPalettes: '저장된 색상 팔레트 없음',
    saved: '색상 팔레트 저장됨',
    schemeNameEmpty: '색상 팔레트 이름 없음',
  },

  actions: {
    generate: '색상 구성 생성',
    regenerate: '다시 생성',
    reset: '초기화',
    lockColor: '색상 잠금',
    unlockColor: '색상 잠금 해제',
    save: '색상 팔레트 저장',
  },

  messages: {
    paletteSaved: '색상 팔레트가 성공적으로 저장되었습니다',
    paletteDeleted: '색상 팔레트 삭제됨',
    copied: '클립보드에 복사됨',
    exported: '내보내기 성공',
    adjustmentParam: '조정 매개변수',
    schemeName: '구성 이름',
    copyAllColors: '모든 색상 복사됨',
  }
};