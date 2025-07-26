export default {
  name: '이미지 to ASCII 변환기',
  description: '사용자 정의 가능한 옵션으로 이미지를 ASCII 아트 텍스트로 변환',

  upload: {
    title: '이미지 업로드',
    dropzone: '이미지를 여기에 끌어다 놓거나 클릭하여 탐색',
    maxSize: '최대 파일 크기: 5MB',
    supportedFormats: '지원 형식: JPG, PNG, WEBP, GIF',
    pasteImage: '또는 클립보드에서 이미지 붙여넣기'
  },

  options: {
    title: '변환 옵션',
    width: '출력 너비',
    height: '출력 높이',
    preserveAspect: '종횡비 유지',
    colored: '컬러 출력',
    charSet: '문자 세트',
    charSets: {
      standard: '표준',
      simple: '간단',
      complex: '복잡',
      blocks: '블록 문자',
      custom: '사용자 정의'
    },
    customChars: '사용자 정의 문자',
    invert: '색상 반전',
    threshold: '밝기 임계값',
    brightness: '밝기',
    contrast: '대비',
    fontFamily: '글꼴 패밀리',
    fontSize: '글꼴 크기',
    lineHeight: '줄 간격',
    backgroundColor: '배경 색상',
    textColor: '텍스트 색상'
  },

  output: {
    title: 'ASCII 출력',
    preview: '미리보기',
    raw: '원본 ASCII',
    html: 'HTML',
    copyToClipboard: '클립보드에 복사',
    downloadTxt: 'TXT로 다운로드',
    downloadHtml: 'HTML로 다운로드',
    downloadImage: '이미지로 다운로드',
    stats: {
      title: '통계',
      characters: '문자 수',
      lines: '줄 수',
      colors: '색상 수',
      size: '텍스트 크기'
    }
  },

  presets: {
    title: '프리셋',
    save: '현재 설정 저장',
    load: '프리셋 불러오기',
    delete: '프리셋 삭제',
    presetName: '프리셋 이름',
    default: '기본',
    detailed: '상세',
    minimalist: '미니멀',
    blocky: '블록 스타일',
    small: '소형',
    inverted: '반전'
  },

  adjustment: {
    title: '이미지 조정',
    grayscale: '그레이스케일',
    negative: '네거티브',
    resize: '변환 전 크기 조정',
    crop: '이미지 자르기',
    rotate: '회전',
    flipH: '수평 뒤집기',
    flipV: '수직 뒤집기'
  },

  animation: {
    title: '애니메이션',
    animated: '애니메이션 처리',
    frameDelay: '프레임 지연',
    loop: '애니메이션 반복',
    loopCount: '반복 횟수',
    extractFrame: '현재 프레임 추출'
  },

  actions: {
    convert: 'ASCII로 변환',
    resetOptions: '옵션 재설정',
    refreshPreview: '미리보기 새로 고침',
    loadImage: '새 이미지 로드',
    applyChanges: '변경 사항 적용',
    selectImage: '이미지 선택',
    reset: '재설정',
    processing: '처리 중...',
    generate: 'ASCII 생성',
    copy: '복사',
    download: '다운로드'
  },

  messages: {
    converting: '이미지를 ASCII로 변환 중...',
    conversionComplete: '변환 완료',
    conversionFailed: '이미지 변환 실패: {error}',
    copied: 'ASCII가 클립보드에 복사되었습니다',
    downloadStarted: '다운로드 시작',
    downloadComplete: 'ASCII 다운로드 완료',
    downloadFailed: '다운로드 실패',
    copyFailed: '복사 실패',
    resetComplete: '재설정 완료',
    asciiGenerated: 'ASCII 아트 생성 완료',
    generationFailed: 'ASCII 생성 실패',
    presetSaved: '프리셋 저장됨',
    presetLoaded: '프리셋 불러옴',
    presetDeleted: '프리셋 삭제됨',
    invalidImage: '잘못된 이미지 형식 또는 손상된 파일',
    imageTooBig: '변환하기에 이미지 크기가 너무 큽니다',
    selectOrLoad: '이미지를 선택하거나 URL에서 로드하세요',
    asciiWillDisplay: 'ASCII가 여기에 표시됩니다',
    customCharsPlaceholder: '어두움에서 밝음 순으로 문자 입력...',
    tip: '설정 조정 후 "ASCII 생성" 버튼을 클릭하여 효과 확인',
    drapPlaceHolder: '이미지를 선택하거나 여기에 끌어다 놓으세요',
    noImage: '먼저 이미지를 선택하세요',
    generateAscii: '"ASCII 생성" 버튼을 클릭하여 이미지 변환',
    tip2: '팁: 복사 버튼을 사용하여 ASCII 아트를 클립보드에 복사하거나 다운로드 버튼을 사용하여 텍스트 파일로 저장할 수 있습니다.'
  },

  charSets: {
    standard: '표준',
    simple: '간단',
    blocks: '블록',
    custom: '사용자 정의'
  },

  settings: {
    title: 'ASCII 설정',
    customCharsetLabel: '사용자 정의 문자 세트 (어두움에서 밝음 순)',
    asciiWidth: 'ASCII 너비',
    invert: '색상 반전',
    colored: '컬러 출력',
    fontSize: '글꼴 크기'
  },

  preview: {
    originalImage: '원본 이미지',
    generatedAscii: '생성된 ASCII'
  }
};