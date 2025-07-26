export default {
  name: '이미지 EXIF 뷰어',
  description: '사진의 EXIF 메타데이터 확인 및 분석',

  upload: {
    title: '이미지 업로드',
    dropzone: '이미지를 여기에 끌어다 놓거나 클릭하여 탐색',
    maxSize: '최대 파일 크기: 15MB',
    supportedFormats: '지원 형식: JPG, TIFF, HEIC, PNG',
    anyImageFile: 'EXIF 데이터가 포함된 모든 이미지 파일'
  },

  display: {
    title: '이미지 정보',
    noExif: '이 이미지에서 EXIF 데이터를 찾을 수 없습니다',
    basicInfo: '기본 정보',
    camera: '카메라 정보',
    exposure: '노출 정보',
    location: '위치 정보',
    dates: '날짜 정보',
    advanced: '고급 EXIF 데이터',
    thumbnail: 'EXIF 썸네일'
  },

  exif: {
    fileName: '파일 이름',
    fileSize: '파일 크기',
    fileType: '파일 형식',
    dimensions: '크기',
    make: '카메라 제조사',
    model: '카메라 모델',
    lens: '렌즈',
    focalLength: '초점 거리',
    focalLength35: '초점 거리(35mm)',
    aperture: '조리개',
    fNumber: 'F 값',
    exposureTime: '노출 시간',
    shutterSpeed: '셔터 속도',
    iso: 'ISO',
    exposureMode: '노출 모드',
    exposureProgram: '노출 프로그램',
    meteringMode: '측광 모드',
    flash: '플래시',
    flashMode: '플래시 모드',
    whiteBalance: '화이트 밸런스',
    exposureBias: '노출 보정',
    latitude: '위도',
    longitude: '경도',
    altitude: '고도',
    locationName: '위치 이름',
    dateOriginal: '촬영 날짜',
    dateDigitized: '디지털화 날짜',
    dateModified: '수정 날짜',
    software: '소프트웨어',
    artist: '아티스트',
    copyright: '저작권',
    resolution: '해상도',
    colorSpace: '색 공간',
    orientation: '방향',
    compression: '압축',
    bitsPerSample: '샘플당 비트 수',
    maxAperture: '최대 조리개',
    contrast: '대비',
    saturation: '채도',
    sharpness: '선명도',
    brightness: '밝기',
    sceneCaptureType: '장면 캡처 유형',
    gainControl: '이득 제어',
    serialNumber: '일련번호',
    width: '너비',
    height: '높이',
  },

  map: {
    title: '사진 위치',
    show: '지도에서 보기',
    noLocation: '사용 가능한 위치 데이터 없음',
    directions: '길찾기',
    copy: '좌표 복사',
    warning: '경고: 이 이미지에는 위치 데이터가 포함되어 있습니다. 공유 시 주의하세요.'
  },

  actions: {
    showAll: '모든 메타데이터 표시',
    hideAll: '모든 메타데이터 숨기기',
    copyAll: '모든 메타데이터 복사',
    save: '메타데이터를 JSON으로 저장',
    removeMeta: '메타데이터 제거',
    download: '메타데이터가 제거된 이미지 다운로드',
    viewFullSize: '원본 크기 보기',
    refresh: '데이터 다시 불러오기'
  },

  settings: {
    title: '표시 설정',
    showGroups: '메타데이터 그룹화',
    showRaw: '원시 값 표시',
    showTechnical: '기술 데이터 표시',
    showFiltered: '빈 필드 숨기기',
    darkMode: '다크 모드',
    mapProvider: '지도 공급자'
  },

  tips: {
    privacy: '개인정보 보호 팁: 사진에는 위치 및 장치 정보와 같은 개인 데이터가 포함될 수 있습니다.',
    noExif: 'EXIF 데이터가 보이지 않나요? 일부 소셜 미디어 및 이미지 편집 도구는 메타데이터를 제거합니다.',
    rawView: '"원시 보기"로 전환하여 사용 가능한 모든 메타데이터를 확인하세요.'
  },

  messages: {
    copied: '메타데이터가 클립보드에 복사되었습니다',
    saved: '메타데이터가 JSON 파일로 저장되었습니다',
    noExif: '이 이미지에서 EXIF 데이터를 찾을 수 없습니다',
    metadataRemoved: '메타데이터가 성공적으로 제거되었습니다',
    imageLoaded: '이미지가 성공적으로 로드되었습니다',
    notUse: '사용 안 함',
    use: '사용',
    auto: '자동',
    manual: '수동',
    reset: '재설정됨',
    exifExtracted: 'EXIF 데이터가 추출되었습니다',
  },

  error: {
    copyFailed: '복사 실패',
    exportFailed: '내보내기 실패',
    exifExtractionFailed: 'EXIF 데이터 추출 실패',
    imageLoadFailed: '이미지 로드 실패',
  },

  orientation: {
    normal: '정상',
    horizontalFlip: '수평 뒤집기',
    rotate180: '180° 회전',
    verticalFlip: '수직 뒤집기',
    rotate90VerticalFlip: '90° 시계 방향 회전 및 수직 뒤집기',
    rotate90: '90° 시계 방향 회전',
    rotate90HorizontalFlip: '90° 시계 방향 회전 및 수평 뒤집기',
    rotate270: '90° 반시계 방향 회전'
  }
};