export default {
  name: '이미지 크롭퍼',
  description: '정밀한 이미지 자르기, 크기 조정 및 회전',

  upload: {
    title: '이미지 업로드',
    dropzone: '이미지를 여기에 끌어다 놓거나 클릭하여 탐색',
    maxSize: '최대 파일 크기: 10MB',
    supportedFormats: '지원 형식: JPG, PNG, WEBP, GIF',
    select: '이미지를 선택하여 자르기 및 편집 시작'
  },

  editor: {
    title: '이미지 편집기',
    zoom: '확대/축소',
    rotate: '회전',
    flipHorizontal: '수평 뒤집기',
    flipVertical: '수직 뒤집기',
    reset: '이미지 초기화',
    undo: '실행 취소',
    redo: '다시 실행',
    dragMode: '드래그 모드',
    scaleMode: '스케일 모드'
  },

  crop: {
    title: '자르기 설정',
    aspectRatio: '종횡비',
    freeform: '자유형',
    square: '정사각형 (1:1)',
    portrait: '세로 (3:4)',
    landscape: '가로 (4:3)',
    widescreen: '와이드스크린 (16:9)',
    panorama: '파노라마 (2:1)',
    custom: '사용자 정의',
    width: '너비',
    height: '높이',
    unit: '단위',
    pixels: '픽셀',
    percent: '퍼센트',
    lockAspectRatio: '종횡비 고정'
  },

  presets: {
    title: '사이즈 프리셋',
    original: '원본 크기',
    social: '소셜 미디어',
    facebook: '페이스북',
    instagram: '인스타그램',
    twitter: '트위터',
    linkedin: '링크드인',
    youtube: '유튜브',
    print: '인쇄 크기',
    fourBySix: '4×6 인치',
    fiveBySeven: '5×7 인치',
    eightByTen: '8×10 인치'
  },

  output: {
    title: '출력',
    preview: '미리보기',
    dimensions: '출력 크기',
    quality: '품질',
    format: '형식',
    fileName: '파일 이름',
    download: '다운로드',
    saveAs: '다른 이름으로 저장',
    copy: '클립보드에 복사'
  },

  actions: {
    crop: '이미지 자르기',
    apply: '적용',
    cancel: '취소',
    save: '이미지 저장',
    download: '다운로드',
    newImage: '새 이미지'
  },

  messages: {
    cropSuccess: '이미지가 성공적으로 잘렸습니다',
    downloadReady: '자른 이미지가 다운로드 준비되었습니다',
    processing: '이미지 처리 중...',
    copied: '이미지가 클립보드에 복사되었습니다',
    invalidFile: '잘못된 파일입니다. 유효한 이미지를 업로드하세요.',
    fileTooLarge: '파일이 너무 큽니다. 최대 크기는 10MB입니다.'
  }
};