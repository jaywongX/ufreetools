export default {
  name: '이미지 모자이크 생성기',
  description: '작은 이미지를 조합하여 더 큰 그림을 만드는 모자이크 아트 생성',

  upload: {
    title: '메인 이미지 업로드',
    dropzone: '메인 이미지를 여기에 끌어다 놓거나 클릭하여 탐색',
    maxSize: '최대 파일 크기: 15MB',
    supportedFormats: '지원 형식: JPG, PNG, WEBP'
  },

  tiles: {
    title: '타일 이미지',
    uploadTiles: '타일 이미지 업로드',
    dropzoneTiles: '타일 이미지를 여기에 끌어다 놓거나 클릭하여 탐색',
    maxTiles: '최대 {count}개 이미지',
    useFolder: '이미지 폴더 업로드',
    orUseSample: '또는 샘플 갤러리 사용',
    sampleSets: '샘플 타일 세트',
    nature: '자연',
    people: '사람',
    art: '예술',
    abstract: '추상',
    animals: '동물',
    clearAll: '모든 타일 지우기'
  },

  settings: {
    title: '모자이크 설정',
    tileSize: '타일 크기',
    small: '작은 (세밀함)',
    medium: '중간',
    large: '큰 (거칠음)',
    square: '사각형',
    circle: '원형',
    applicationMode: '모자이크 적용 방식',
    all: '전체 이미지',
    selectRegion: '영역 선택',
    selectingRegion: '영역 선택 중...',
    autoDetectFaces: '얼굴 자동 감지',
    detectFaces: '얼굴 감지',
    detectFacesDescription: '이미지에서 얼굴을 감지하고 자동으로 모자이크 처리',
    edgeSmoothing: '가장자리 부드럽게',
    edgeSmoothingDescription: '모자이크 타일의 가장자리를 부드럽게 하여 자연스러운 전환 효과',
    custom: '사용자 정의',
    width: '너비',
    height: '높이',
    tilesWide: '가로 타일 수',
    tilesHigh: '세로 타일 수',
    colorMatch: '색상 일치',
    intensity: '강도',
    low: '낮음',
    high: '높음',
    reuseTiles: '타일 재사용',
    allowDuplicates: '중복 허용',
    maxUses: '타일당 최대 사용 횟수',
    colorAdjustment: '색상 조정',
    adjustTiles: '타일 색상 조정',
    blendOriginal: '원본 이미지와 혼합',
    blendAmount: '혼합 정도',
    random: '무작위 변화',
    shuffle: '타일 무작위 배열'
  },

  advanced: {
    title: '고급 옵션',
    algorithm: '매칭 알고리즘',
    algorithms: {
      average: '평균 색상',
      dominant: '주요 색상',
      histogram: '색상 히스토그램',
      pattern: '패턴 매칭'
    },
    tileShape: '타일 모양',
    shapes: {
      square: '정사각형',
      circle: '원형',
      hexagon: '육각형',
      triangle: '삼각형',
      random: '무작위'
    },
    tileGap: '타일 간격',
    borderColor: '테두리 색상',
    backgroundColor: '배경 색상'
  },

  output: {
    fileName: '파일 이름',
    title: '출력',
    preview: '미리보기',
    original: '원본',
    mosaic: '모자이크',
    sideBySide: '나란히 비교',
    zoomIn: '확대',
    zoomOut: '축소',
    download: '모자이크 다운로드',
    asJpg: 'JPG로 다운로드',
    asPng: 'PNG로 다운로드',
    highRes: '고해상도',
    resolution: '출력 해상도',
    format: '형식',
    quality: '품질',
    size: '크기',
    pixel: '픽셀',
    pleaseSelectImage: '이미지를 선택하세요',
    pleaseSelectImageAndAdjustSettings: '이미지를 선택하고 설정을 조정하세요'
  },

  actions: {
    generate: '모자이크 생성',
    regenerate: '재생성',
    cancel: '생성 취소',
    reset: '초기화',
    detectFaces: '얼굴 감지',
    saveSettings: '설정 저장',
    loadSettings: '설정 불러오기'
  },

  messages: {
    generating: '모자이크 생성 중... 시간이 걸릴 수 있습니다.',
    generationComplete: '모자이크 생성 완료!',
    notEnoughTiles: '타일 이미지가 부족합니다. 더 많은 이미지를 업로드하세요.',
    tileProcessing: '타일 이미지 처리 중: {progress}%',
    downloadStarted: '다운로드 시작됨',
    settingsSaved: '설정 저장됨',
    selecting: '영역 선택 중...',
    preview: '모자이크 적용 결과가 여기에 표시됩니다',
    faceDetected: '얼굴 영역 감지됨',
    facesDetected: '{count}개의 얼굴 감지됨',
    noFacesDetected: '감지된 얼굴 없음',
    loadingModels: '얼굴 감지 모델 로딩 중...',
    faceDetectionFailed: '얼굴 감지 실패',
    reset: '초기화됨',
    error: '오류: {message}'
  }
};