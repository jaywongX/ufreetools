export default {
  name: 'SVG 최적화 도구',
  description: 'SVG 파일을 최적화하고 정리하여 성능 향상 및 파일 크기 감소',

  upload: {
    title: 'SVG 업로드',
    dropzone: 'SVG 파일을 여기에 끌어다 놓거나 클릭하여 업로드',
    or: '또는',
    pasteCode: 'SVG 코드 붙여넣기',
    maxSize: '최대 파일 크기: 5MB',
    onlySvg: 'SVG 형식 파일만 지원',
    selected: '선택됨',
    changeFile: '파일 변경'
  },

  input: {
    title: 'SVG 입력',
    pasteHere: '여기에 SVG 코드를 붙여넣으세요...',
    loadExample: '예제 로드',
    clear: '지우기',
    validate: 'SVG 검증'
  },

  output: {
    title: '최적화 결과',
    copyToClipboard: '클립보드에 복사',
    download: 'SVG 다운로드',
    beforeSize: '원본 크기',
    afterSize: '최적화 후 크기',
    reduction: '감소량',
    reductionBy: '감소율',
    svgCode: 'SVG 코드'
  },

  options: {
    title: '최적화 옵션',
    preset: '프리셋',
    presets: {
      default: '기본',
      light: '경량',
      aggressive: '공격적',
      custom: '사용자 정의'
    },
    removeComments: '주석 제거',
    removeCommentsDesc: '주석 및 cdata 섹션 제거',
    removeHiddenElements: '숨겨진 요소 제거',
    removeEmptyContainers: '빈 컨테이너 제거',
    removeUnusedDefs: '사용되지 않는 정의 제거',
    removeViewBox: 'viewBox 제거',
    keepViewBox: 'viewBox 유지',
    keepViewBoxDesc: 'SVG 확장성을 위해 viewBox 속성 유지',
    cleanupIDs: 'ID 정리',
    cleanupIDsDesc: '참조되지 않은 ID 제거 또는 단축',
    convertColors: '색상을 16진수로 변환',
    removeMetadata: '메타데이터 제거',
    removeMetadataDesc: '&lt;metadata&gt; 요소 제거',
    removeDoctype: '문서 유형 제거',
    removeXMLProcInst: 'XML 처리 명령 제거',
    removeEditorsNS: '편집기 네임스페이스 제거',
    collapseGroups: '그룹 병합',
    collapseGroupsDesc: '특별한 속성이 없는 그룹 요소 병합',
    convertPathData: '경로 데이터 최적화',
    convertPathDataDesc: '상대 좌표로 변환, 소수점 자리 수 감소 등',
    convertTransforms: '변환 최적화',
    convertShapeToPath: '도형을 경로로 변환',
    convertShapeToPathDesc: '기본 도형을 &lt;path&gt; 요소로 변환',
    removeUselessStrokeAndFill: '불필요한 스트로크 및 채우기 제거',
    moveElemsAttrsToGroup: '요소 속성을 그룹으로 이동',
    mergePaths: '경로 병합',
    minifyStyles: '스타일 압축',
    inlineStyles: '인라인 스타일',
    inlineStylesDesc: '&lt;style&gt; 요소의 스타일을 인라인으로 변환',
    cleanupNumericValues: '숫자 값 반올림',
    precision: '숫자 정밀도',
    decimalPlaces: '소수 자리',
    lowPrecision: '낮은 정밀도 (더 작은 크기)',
    highPrecision: '높은 정밀도 (더 나은 품질)',
    removeDimensions: '너비/높이 속성 제거',
    removeDimensionsDesc: '너비/높이 속성 제거, viewBox로 크기 제어',
    sortAttrs: '속성 정렬',
    sortAttrsDesc: '요소 속성을 알파벳 순으로 정렬'
  },

  view: {
    title: '미리보기',
    original: '원본',
    optimized: '최적화 후',
    showBorder: '테두리 표시',
    backgroundColor: '배경 색상',
    grid: '그리드 표시',
    zoom: '확대/축소',
    toggleAnimation: '애니메이션 전환'
  },

  actions: {
    optimize: '최적화 시작',
    optimizing: '최적화 중...',
    resetOptions: '옵션 초기화',
    download: '최적화된 SVG 다운로드',
    copy: '코드 복사',
    copyCode: '코드 복사',
    viewCode: '코드 보기',
    viewPreview: '미리보기 보기'
  },

  messages: {
    optimizationSuccess: 'SVG 최적화 성공',
    optimizationFailed: 'SVG 최적화 실패: {error}',
    invalidSvg: '잘못된 SVG 파일 또는 코드',
    copied: '클립보드에 복사됨',
    copyFailed: '복사 실패, 수동으로 복사하세요',
    downloaded: '최적화된 SVG 다운로드 완료',
    emptyInput: '최적화할 SVG 코드 또는 파일을 제공하세요',
    onlySvgAllowed: 'SVG 형식 파일만 업로드 가능합니다!',
    failedToLoadLibrary: 'SVGO 라이브러리 로드 실패'
  }
};