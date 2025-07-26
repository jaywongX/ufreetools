export default {
  name: 'JPG에서 JFIF로 변환기',
  description: '온라인에서 JPG 이미지를 JFIF 형식으로 고품질 변환, 다양한 옵션 제공',
  tags: ['이미지', '변환', 'jpg', 'jfif', 'jpeg', '포맷', '도구'],

  meta: {
    title: 'JPG에서 JFIF로 변환기 - 무료 온라인 이미지 변환 도구',
    description: '무료로 JPG를 JFIF로 변환. 빠르고 안전한 브라우저 내 변환, 일괄 처리, 미리보기 비교 및 고급 품질 설정 지원. 워터마크 없음, 회원가입 불필요.'
  },

  upload: {
    title: 'JPG에서 JFIF로 변환기',
    subtitle: '완벽한 품질로 JPG 이미지를 JFIF 형식으로 변환',
    dropzone: 'JPG 파일을 여기에 드래그 앤 드롭하세요',
    dropzoneActive: '파일을 놓아 변환 시작',
    maxSize: '최대 파일 크기: 50MB',
    supportedFormats: '지원 형식: JPG, JPEG'
  },

  settings: {
    title: '변환 설정',
    advanced: '고급 설정',
    quality: {
      label: '이미지 품질',
      description: '높은 품질은 더 큰 파일 크기를 의미합니다',
      auto: '자동 최적화 (권장)'
    },
    qualityLabels: {
      maximum: '최고 품질',
      high: '고품질',
      good: '양호 품질',
      medium: '중간 품질',
      low: '저품질',
      veryLow: '매우 낮은 품질'
    },
    metadata: {
      label: '이미지 메타데이터',
      preserve: '모든 메타데이터 보존 (EXIF, GPS 등)',
      strip: '모든 메타데이터 제거 (파일 크기 감소)',
      keepBasic: '기본 메타데이터만 보존'
    },
    filenameOption: '출력 파일 이름',
    filenameOriginal: '원본',
    filenameConverted: '접두사 추가',
    filenameCustom: '사용자 정의',
    filenameTemplatePlaceholder: '예: converted-{name}',
    filenameTemplateHelp: '{name}을 사용하여 원본 파일 이름 삽입',
    preserveMetadata: '이미지 메타데이터 보존'
  },

  preview: {
    title: '이미지 미리보기',
    before: 'JPG 원본',
    after: 'JFIF 미리보기',
    noPreview: '미리보기 없음',
    togglePreview: '미리보기 표시/숨기기',
    imageDetails: '이미지 상세 정보'
  },

  fileTable: {
    fileName: '파일 이름',
    type: '유형',
    size: '크기',
    status: '상태',
    preview: '미리보기',
    pending: '대기 중',
    converting: '변환 중...',
    done: '완료',
    error: '오류',
    progress: '진행률'
  },

  results: {
    title: '변환된 파일',
    summary: '{count}개 파일 변환 완료, 총 {saved} 공간 절약',
    originalName: '원본 이름',
    convertedName: '변환된 이름',
    originalSize: '원본 크기',
    convertedSize: '새 크기',
    compressionRate: '압축률',
    actions: '작업',
    noResults: '변환 결과 없음'
  },

  actions: {
    selectFile: '파일 선택',
    addMore: '더 추가',
    clear: '파일 지우기',
    convertAll: '모든 파일 변환',
    converting: '변환 중...',
    download: '다운로드',
    downloadAll: '모두 다운로드',
    clearResults: '결과 지우기',
    viewDetails: '상세 보기',
    compare: '비교',
    retry: '실패 재시도',
    cancelAll: '모두 취소',
    optimizeAll: '자동 최적화'
  },

  messages: {
    noValidFiles: '유효한 JPG 또는 JPEG 파일을 선택하세요.',
    conversionError: '파일 변환 중 오류 발생. 다시 시도하세요.',
    conversionSuccess: '모든 파일이 성공적으로 변환되었습니다!',
    partialSuccess: '{total}개 중 {success}개 파일 변환 성공.',
    downloadStarted: '다운로드 시작 중...',
    processingFiles: '파일 처리 중...',
    dragActive: '파일을 여기에 드래그하여 업로드',
    fileSizeExceeded: '파일 크기가 50MB 제한을 초과함',
    unsupportedFormat: '지원되지 않는 파일 형식'
  },

  history: {
    title: '최근 변환',
    empty: '최근 변환 없음',
    clear: '기록 지우기',
    restore: '파일 복원'
  },

  info: {
    title: 'JPG에서 JFIF로 변환 정보',
    description: '우리의 JPG에서 JFIF 변환기를 사용하면 JPG 이미지 파일을 JFIF 형식으로 빠르고 쉽게 변환할 수 있으며, 모든 처리는 브라우저 내에서 안전하게 이루어집니다.',
    
    whatIs: {
      title: 'JFIF란 무엇인가요?',
      content: 'JFIF(JPEG 파일 교환 형식)는 JPEG 파일의 파일 형식 표준입니다. 해상도, 종횡비 및 기타 메타데이터와 같은 추가 정보를 제공하여 JPEG 이미지가 다양한 장치와 플랫폼에서 올바르게 표시되도록 합니다. JPG와 JFIF는 기술적으로 관련된 형식이지만 일부 소프트웨어와 장치는 둘 중 하나에 대해 더 나은 호환성을 가질 수 있습니다.'
    },
    
    whyConvert: {
      title: 'JPG를 JFIF로 변환하는 이유',
      reason1: '일부 레거시 소프트웨어 시스템은 JFIF 형식을 특별히 요구합니다',
      reason2: '일부 전문 애플리케이션은 JFIF와 더 나은 호환성을 가질 수 있습니다',
      reason3: '일관된 파일 확장자로 이미지 컬렉션 표준화',
      reason4: '특정 이미징 워크플로우에서 메타데이터가 올바르게 처리되도록 보장'
    },
    
    howItWorks: {
      title: '작동 방식',
      content: '우리의 변환기는 브라우저 내에서 JPG 파일을 완전히 처리합니다. 이미지는 서버에 업로드되지 않아 완전한 개인 정보 보호와 보안이 보장됩니다. 이 도구는 JPG 이미지 데이터를 읽고 렌더링한 다음 선택한 품질 설정으로 표준 JFIF 형식으로 저장합니다.'
    },
    
    tips: {
      title: '최상의 결과를 위한 팁',
      tip1: '파일 크기와 이미지 품질 사이의 균형을 위해 품질 슬라이더 사용',
      tip2: '텍스트 또는 선명한 디테일이 포함된 이미지의 경우 더 높은 품질 설정 사용',
      tip3: '한 번에 여러 파일을 일괄 변환하고 ZIP 파일로 다운로드',
      tip4: '품질과 파일 크기의 최적 균형을 위해 "자동 최적화" 사용',
      tip5: '개인 정보가 중요한 경우 메타데이터 제거로 파일 크기 감소'
    },
    
    privacy: {
      title: '개인 정보 보호 및 보안',
      content: '우리는 귀하의 개인 정보를 진지하게 고려합니다. 모든 처리는 브라우저 내에서 직접 이루어집니다 - 파일은 서버에 업로드되지 않습니다. 이는 이미지의 완전한 보안과 개인 정보 보호를 보장합니다.'
    }
  }
};