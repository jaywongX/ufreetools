export default {
  name: 'QR 코드 생성기',
  description: 'URL, 텍스트 등을 위한 커스터마이징 가능한 QR 코드 생성',

  options: {
    content: 'QR 코드 내용',
    contentType: '내용 유형',
    errorCorrectionLevel: '오류 수정 레벨',
    size: '크기',
    margin: '여백',
    foregroundColor: '전경색',
    backgroundColor: '배경색',
    logo: '로고 추가',
    logoSize: '로고 크기',
    cornerRadius: '코너 반경'
  },

  contentTypes: {
    url: '웹 주소',
    text: '일반 텍스트',
    email: '이메일',
    phone: '전화번호',
    sms: '문자 메시지',
    wifi: 'WiFi 네트워크',
    vcard: '전자명함(vCard)',
    mecard: '전자명함(MeCard)'
  },

  errorLevels: {
    L: '낮음 (7%)',
    M: '중간 (15%)',
    Q: '높음 (25%)',
    H: '최고 (30%)'
  },

  actions: {
    generate: 'QR 코드 생성',
    download: '다운로드',
    downloadSVG: 'SVG 다운로드',
    downloadPNG: 'PNG 다운로드',
    copy: '이미지 복사',
    clear: '초기화',
    uploadLogo: '로고 업로드'
  },

  templates: {
    title: '빠른 템플릿',
    confirmReplace: '현재 내용을 교체하시겠습니까?',
    confirm: '확인',
    cancel: '취소',
    url: {
      name: '웹 링크'
    },
    email: {
      name: '이메일 주소'
    },
    phone: {
      name: '전화번호'
    },
    sms: {
      name: '문자 메시지'
    },
    wifi: {
      name: 'Wi-Fi 설정',
      example: {
        ssid: '네트워크 이름',
        password: '비밀번호'
      }
    },
    geo: {
      name: '지리적 위치'
    }
  },

  appearance: {
    title: '외관 설정'
  },

  preview: {
    title: '미리보기',
    generating: '생성 중...',
    clickGenerateButton: '"QR 코드 생성" 버튼 클릭',
    clickToDownload: 'QR 코드 다운로드'
  },

  tips: {
    title: '팁',
    saveToPrint: '생성된 QR 코드는 이미지로 저장하여 인쇄하거나 공유할 수 있습니다.',
    errorCorrection: '오류 수정 레벨은 QR 코드가 부분적으로 가려지거나 손상되었을 때 읽을 수 있는 정도를 나타냅니다. L 레벨은 오류 허용도가 가장 낮고, H 레벨은 가장 높지만 QR 코드를 더 복잡하게 만듭니다.'
  },

  wifi: {
    ssid: '네트워크 이름(SSID)',
    password: '비밀번호',
    encryption: '암호화 방식',
    hidden: '숨겨진 네트워크'
  },

  placeholders: {
    content: '텍스트, 링크 또는 기타 내용 입력...'
  },

  characters: '자',
  maxChars: '300자 이내 권장',

  messages: {
    copied: '클립보드에 복사되었습니다!',
    generated: 'QR 코드 생성 성공',
    contentRequired: 'QR 코드 내용을 입력하세요',
    downloaded: 'QR 코드 다운로드 완료',
    confirmReplace: '확인을 클릭하여 현재 내용 교체',
    contentUpdated: '내용 업데이트 완료',
    changesCancelled: '변경 사항 취소됨',
    invalidUrl: '유효한 URL을 입력하세요',
    invalidEmail: '유효한 이메일 주소를 입력하세요',
    invalidPhone: '유효한 전화번호를 입력하세요',
    logoTooBig: '로고 파일이 너무 큽니다. 최대 파일 크기는 1MB입니다'
  },

  errors: {
    canvasNotReady: 'Canvas 요소가 준비되지 않았습니다',
    generationError: 'QR 코드 생성 오류',
    generationErrorWithMessage: 'QR 코드 생성 중 오류 발생: {message}',
    downloadError: 'QR 코드 다운로드 오류: {message}'
  }
};