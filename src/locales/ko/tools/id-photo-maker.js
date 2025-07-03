export default {
  name: '증명사진 제작기',
  description: '사용자 정의 가능한 배경과 크기로 전문적인 증명사진 생성',
  upload: {
    title: '이미지 업로드',
    dropzone: '이미지를 여기에 끌어다 놓거나 클릭하여 탐색',
    or: '또는',
    camera: '카메라로 사진 찍기',
    constraints: '최대 크기: 10MB. 형식: JPG, PNG, WEBP',
    takePicture: '사진 찍기',
    retake: '다시 찍기'
  },
  editing: {
    title: '사진 편집',
    faceDetection: '얼굴 감지',
    autoDetect: '자동 얼굴 감지',
    manualMode: '수동 조정',
    zoom: '확대/축소',
    rotate: '회전',
    brightness: '밝기',
    contrast: '대비',
    saturation: '채도',
    filters: '필터'
  },
  background: {
    title: '배경',
    original: '원본',
    white: '흰색',
    blue: '파란색',
    red: '빨간색',
    custom: '사용자 정의 색상',
    transparent: '투명'
  },
  size: {
    title: '사진 크기',
    presets: '크기 프리셋',
    custom: '사용자 정의 크기',
    width: '너비',
    height: '높이',
    unit: '단위',
    mm: '밀리미터',
    inches: '인치',
    pixels: '픽셀'
  },
  presets: {
    passport: '여권 (35×45mm)',
    visa: '비자 (2×2인치)',
    drivingLicense: '운전면허증 (2.5×3인치)',
    idCard: '주민등록증 (25×35mm)',
    linkedin: '링크드인 (400×400픽셀)',
    schengen: '솅겐 비자 (35×45mm)',
    chinese: '중국 비자 (33×48mm)',
    indian: '인도 비자 (2×2인치)'
  },
  output: {
    title: '출력',
    preview: '미리 보기',
    grid: '여러 사진',
    columns: '열 수',
    rows: '행 수',
    spacing: '간격',
    background: '페이지 배경',
    paperSize: '용지 크기',
    download: '다운로드',
    print: '인쇄',
    downloadAs: '다운로드 형식',
    jpg: 'JPG 이미지',
    png: 'PNG 이미지',
    pdf: 'PDF 문서'
  },
  actions: {
    apply: '적용',
    reset: '재설정',
    undo: '실행 취소',
    redo: '다시 실행',
    save: '사진 저장',
    share: '공유'
  },
  messages: {
    noFaceDetected: '얼굴이 감지되지 않았습니다. 수동으로 조정하거나 다른 사진을 사용해 보세요.',
    multipleFacesDetected: '여러 얼굴이 감지되었습니다. 가장 큰 얼굴을 사용합니다.',
    processing: '사진을 처리 중입니다...',
    downloadReady: '사진 다운로드 준비 완료',
    photoSaved: '사진 저장 성공'
  }
}