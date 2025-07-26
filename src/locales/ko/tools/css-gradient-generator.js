export default {
  name: '그라데이션 색상 생성기',
  description: '아름다운 CSS 그라데이션을 생성하고 커스터마이징하며, 실시간으로 미리보고 프로젝트에 코드를 복사하세요',

  gradientTypes: {
    title: '그라데이션 유형',
    linear: '선형 그라데이션',
    radial: '방사형 그라데이션',
    conic: '원뿔형 그라데이션'
  },

  controls: {
    title: '색상 컨트롤',
    addColor: '색상 추가',
    color: '색상',
    position: '위치 (%)',
    delete: '색상 삭제',
    angle: '각도',
    degrees: '도',
    shape: '모양',
    circle: '원형',
    ellipse: '타원형',
    positionX: 'X 위치 (%)',
    positionY: 'Y 위치 (%)',
    size: '크기',
    closestSide: '가장 가까운 측면',
    closestCorner: '가장 가까운 코너',
    farthestSide: '가장 먼 측면',
    farthestCorner: '가장 먼 코너',
    fromAngle: '시작 각도'
  },

  output: {
    title: 'CSS 코드',
    copyCode: '코드 복사',
    preview: '미리보기 영역',
    copied: 'CSS 코드가 클립보드에 복사되었습니다!',
    download: 'PNG 다운로드'
  },

  presets: {
    title: '그라데이션 프리셋',
    apply: '프리셋 적용',
    sunnyMorning: '화창한 아침',
    winterNeva: '겨울의 네바',
    rareWind: '희귀한 바람',
    deepBlue: '심해',
    perfect: '완벽한 흰색',
    cloudyKnoxville: '흐린 녹스빌',
    greenBeach: '녹색 해변',
    plumBath: '자두 목욕',
    everlasting: '영원한 하늘'
  },

  accessibility: {
    colorPicker: '색상 선택기',
    deleteSwatch: '색상 정지점 삭제',
    dragToReposition: '색상 정지점 재배치를 위해 드래그'
  },

  actions: {
    reset: '초기화',
    generateCSS: 'CSS 생성',
    clickToCopy: '클릭하여 코드 복사',
    completeEdit: '편집 완료'
  },

  messages: {
    copied: 'CSS 코드가 클립보드에 복사되었습니다!',
    noColors: '그라데이션을 생성하려면 최소 두 가지 색상을 추가하세요',
    maxColors: '최대 색상 정지점 수(10)에 도달했습니다',
    useKeyboard: 'Delete 키를 사용하여 선택한 색상 정지점 삭제',
    invalidHex: '유효한 16진수 색상 코드를 입력하세요',
    downloadError: 'PNG 다운로드 실패, 나중에 다시 시도하세요',
    preview: '미리보기'
  },

  anglePresets: {
    top: '상단',
    topRight: '우측 상단',
    right: '우측',
    bottomRight: '우측 하단',
    bottom: '하단',
    bottomLeft: '좌측 하단',
    left: '좌측',
    topLeft: '좌측 상단'
  },

  radialShapes: {
    circle: '원형',
    ellipse: '타원형'
  },

  radialSizes: {
    farthestCorner: '가장 먼 코너',
    closestCorner: '가장 가까운 코너',
    farthestSide: '가장 먼 측면',
    closestSide: '가장 가까운 측면',
  }
};