export default {
  name: 'Base64 인코더/디코더',
  description: '텍스트와 Base64 인코딩 데이터 간의 빠른 변환',
  mode: {
    title: '모드',
    encode: '인코딩',
    decode: '디코딩'
  },
  input: {
    title: '입력',
    placeholder: '처리할 텍스트 입력...',
    clear: '지우기',
    copy: '복사',
    paste: '붙여넣기',
    upload: '파일 업로드',
    dragDrop: '파일을 여기로 드래그하거나 클릭하여 업로드',
    textOption: '텍스트',
    fileOption: '파일',
    hexOption: '16진수',
    selectFile: '파일 선택',
  },
  output: {
    title: '출력',
    placeholder: '결과가 여기에 표시됩니다...',
    copy: '복사',
    download: '다운로드',
    empty: '출력 없음'
  },
  options: {
    title: '옵션',
    encoding: '문자 인코딩',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: 'URL 안전 인코딩 사용',
    autoDecode: '자동 감지 및 디코딩',
    includeDataURI: 'Data-URI 접두사 포함',
    trimWhitespace: '공백 제거',
    preserveLineBreaks: '줄 바꿈 유지',
    addImageHeader:'이미지 Base64 헤더 추가',
  },
  dataUri: {
    title: 'Data-URI',
    mimeType: 'MIME 타입',
    common: '일반 타입',
    custom: '사용자 정의'
  },
  messages: {
    copied: '클립보드에 복사됨',
    copyFailed: '복사 실패',
    pasteFailed: '붙여넣기 실패',
    uploadSuccess: '파일 업로드 성공',
    uploadFailed: '파일 업로드 실패',
    readFailed: '파일 읽기 실패',
    invalidBase64: '잘못된 Base64 인코딩',
    invalidHex: '잘못된 16진수 인코딩',
    fileTooLarge: '파일이 너무 큽니다. 직접 다운로드하세요',
    processError: '처리 오류',
    encodeSuccess: '인코딩 성공',
    decodeSuccess: '디코딩 성공',
    processing: '처리 중...'
  },
  mimeTypes: {
    'text/plain': '텍스트',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'JPEG 이미지',
    'image/png': 'PNG 이미지',
    'image/gif': 'GIF 이미지',
    'image/svg+xml': 'SVG 이미지',
    'application/pdf': 'PDF 문서'
  },
  tips: {
    title: '사용 팁',
    tip1: 'Base64 인코딩은 모든 바이너리 데이터를 순수 텍스트 형식으로 변환할 수 있습니다',
    tip2: 'URL 안전 옵션은 표준 Base64 인코딩에서 "+"와 "/"를 제거합니다',
    tip3: 'Data-URI 접두사를 사용하면 HTML img 태그에서 인코딩된 데이터를 직접 사용할 수 있습니다',
    tip4: '대용량 파일은 더 많은 리소스가 필요합니다 - 권장 제한: 2MB',
    tip5: '특수 문자는 특정 문자 인코딩이 필요할 수 있습니다'
  },
  about: {
    title: 'Base64 인코딩 정보',
    description: 'Base64는 64개의 인쇄 가능한 ASCII 문자를 사용하여 바이너리 데이터를 표현하는 방법으로, 텍스트 기반 시스템에서 바이너리 데이터를 전송하고 저장할 때 자주 사용됩니다.'
  },
  features: {
    title: '기능 개요',
    multiInput: '텍스트, 16진수 및 파일 입력 지원',
    charsetSupport: 'UTF-8 및 GBK 문자 집합 지원',
    imagePreview: '이미지 미리보기 (1MB 미만 파일)',
    fileDownload: '다양한 파일 형식 다운로드 (기본값: PDF)',
    chunkProcessing: '대용량 파일 청크 처리 및 진행률 표시',
    autoDetect: '이미지 타입 자동 감지'
  },
  notes: {
    title: '참고 사항',
    sizeIncrease: 'Base64 인코딩은 데이터 크기를 약 33% 증가시킵니다',
    chunkProcessing: '대용량 파일은 청크 단위로 처리됩니다',
    largeFiles: '10MB 이상 파일은 다운로드만 가능합니다',
    fileInput: '대용량 파일은 직접 파일 입력을 권장합니다'
  },
  fileTypeLabel: {
    pdf: 'PDF 문서',
    txt: '텍스트 파일',
    jpg: 'JPG 이미지', 
    png: 'PNG 이미지', 
    zip: 'ZIP 아카이브',
    bin: '바이너리 파일',
  },
  article: {
    title: "Base64 인코더/디코더: 데이터 변환 및 보호",
    features: {
      title: "Base64 인코딩 및 디코딩 이해",
      description: "<strong>Base64 인코더/디코더</strong>는 바이너리 데이터와 ASCII 텍스트 형식 간 변환을 위한 필수 도구입니다. 이 강력한 <strong>데이터 인코딩 도구</strong>는 모든 종류의 바이너리 정보를 64개의 인쇄 가능한 ASCII 문자(A-Z, a-z, 0-9, +, /)로 표현하여 텍스트 기반 시스템을 통한 전송에 적합하게 합니다.<br><br>우리의 <strong>Base64 변환기</strong>는 텍스트, 파일 및 16진수 입력을 포함한 다양한 입력 방법을 지원하며, 문자 인코딩(UTF-8 및 GBK)에 대한 고급 옵션을 제공합니다. <strong>Base64 디코딩</strong> 시 이 도구는 이미지, 문서 및 아카이브와 같은 파일 유형을 자동으로 감지하며, 이미지 미리보기를 제공하고 다양한 형식으로 다운로드를 지원합니다. 대용량 파일의 경우 우리의 <strong>Base64 인코더</strong>는 실시간 진행률 표시와 함께 효율적인 청크 처리를 구현합니다.",
      useCases: {
        title: "Base64 인코딩의 일반적인 사용 사례",
        items: [
          "이미지와 같은 바이너리 파일을 Data-URI를 사용하여 HTML, CSS 또는 JavaScript 코드에 직접 포함시켜 외부 리소스 없이 독립형 웹 페이지 생성",
          "이메일 시스템 또는 순수 텍스트 프로토콜을 통해 바이너리 데이터를 안전하게 전송하여 비텍스트 문자로 인한 데이터 손상 방지",
          "쿠키 또는 localStorage와 같은 텍스트 기반 저장 메커니즘에 복잡한 데이터 구조 저장",
          "HTTP 헤더(Basic Authentication)에서 인증 데이터 또는 API 토큰을 안전하게 전송하기 위한 인코딩",
          "XML, JSON 또는 기타 텍스트 기반 교환 형식에 바이너리 파일 첨부를 위한 변환",
          "특수 문자 없이 URL 매개변수에 사용할 수 있는 URL 안전 데이터 문자열 생성"
        ]
      }
    },
    faq: {
      title: "Base64 인코딩 FAQ",
      items: [
        {
          question: "왜 Base64 인코딩된 데이터가 원본 데이터보다 큰가요?",
          answer: "Base64 인코딩은 3바이트의 바이너리 데이터를 표현하기 위해 4개의 ASCII 문자를 사용하므로 데이터 크기가 약 33% 증가합니다. 이 크기 증가는 Base64의 기본적인 특성으로, 각 문자가 8비트 대신 6비트(2^6 = 64 가능한 값)만 사용하기 때문입니다. 이 절충은 특히 ASCII 기반 시스템에서 다양한 시스템 간 텍스트 호환성을 위해 필요합니다. 대용량 파일의 경우 저장 또는 전송 요구 사항을 계획할 때 이 크기 증가를 고려해야 합니다."
        },
        {
          question: "표준 Base64와 URL 안전 Base64 인코딩의 차이점은 무엇인가요?",
          answer: "표준 Base64는 URL에서 특별한 의미를 가지며 문제를 일으킬 수 있는 '+'와 '/' 문자를 사용합니다. URL 안전 Base64는 이러한 문자를 '-'와 '_'로 대체하여 인코딩된 문자열을 URL 매개변수에서 안전하게 사용할 수 있도록 합니다. 우리의 Base64 인코더는 URL 안전 출력 옵션을 제공하므로 인코딩된 데이터의 사용 목적에 따라 적절한 형식을 선택할 수 있습니다."
        },
        {
          question: "Base64 인코딩을 데이터 암호화 또는 보안에 사용할 수 있나요?",
          answer: "아니요, Base64 인코딩은 암호화가 아니며 데이터 보안이나 기밀성을 제공하지 않습니다. 이는 단순히 바이너리 데이터를 텍스트 형식으로 변환하는 체계입니다. Base64 인코딩된 데이터는 일반적으로 사용 가능한 도구(우리의 Base64 디코더 포함)로 쉽게 변환될 수 있습니다. 데이터 보안이 필요한 경우 Base64 인코딩 전에 적절한 암호화 알고리즘(AES 또는 RSA 등)을 사용해야 합니다. Base64는 주로 호환성을 위한 것이지 보안을 위한 것이 아닙니다."
        },
        {
          question: "Base64 인코딩된 텍스트를 어떻게 식별하나요?",
          answer: "Base64 인코딩된 텍스트는 일반적으로 다음과 같은 특징을 가집니다: 문자(A-Z, a-z), 숫자(0-9) 및 일반적으로 '+'와 '/' 문자(또는 URL 안전 변형인 '-'와 '_')로만 구성됨; 길이가 항상 4의 배수임(종종 끝에 '=' 문자가 패딩으로 추가됨); 인식 가능한 단어 패턴 없이 무작위 문자열처럼 보임. 우리의 Base64 디코더는 디코딩 전에 입력이 유효한 Base64인지 확인하는 검증 기능을 포함하고 있습니다."
        },
        {
          question: "Base64 문자열에 패딩 문자가 없으면 어떻게 되나요?",
          answer: "Base64 인코딩은 문자열 길이가 4의 배수가 되도록 하기 위해 종종 끝에 패딩 문자('=')를 추가합니다. Base64 표준은 이 패딩을 요구하지만, 많은 현대 Base64 디코더(우리의 디코더 포함)는 문자열 길이를 기반으로 올바른 패딩을 자동으로 계산하여 패딩 문자가 없는 Base64 문자열도 처리할 수 있습니다. 그러나 모든 Base64 디코더와의 최대 호환성을 위해 Base64 인코딩된 데이터를 생성할 때 올바른 패딩을 유지하는 것이 좋습니다."
        }
      ]
    },
    guide: {
      title: "Base64 인코더/디코더 사용 단계별 가이드",
      steps: [
        "도구 상단의 '인코딩' 또는 '디코딩'을 클릭하여 원하는 모드를 선택하세요",
        "인코딩 시 입력 방법 선택: 순수 텍스트 입력은 '텍스트', 바이너리 파일 업로드는 '파일', 16진수 문자열 표현은 '16진수'",
        "파일 인코딩 시 '이미지 Base64 헤더 추가'를 활성화하면 해당 Data-URI 접두사가 추가되어 웹 환경에서 직접 사용하기 쉬워집니다",
        "디코딩 시 Base64 문자열 입력은 '텍스트', Base64 데이터가 포함된 텍스트 파일 업로드는 '파일'을 선택하세요",
        "디코딩 시 드롭다운 메뉴에서 원하는 문자 인코딩(UTF-8 또는 GBK)을 선택하여 국제 문자를 올바르게 처리할 수 있습니다",
        "선택한 방법에 따라 데이터를 입력하거나 파일을 업로드하세요",
        "'인코딩' 또는 '디코딩'을 클릭하여 데이터를 처리하세요 - 결과가 하단 출력 필드에 표시됩니다",
        "디코딩된 이미지의 경우 '이미지 보기'로 결과를 확인하거나 다운로드 옵션으로 원하는 형식의 디코딩된 내용을 저장할 수 있습니다"
      ]
    },
    conclusion: "Base64 인코더/디코더는 순수 텍스트 기반 시스템 간에 데이터를 전송해야 하는 다양한 시나리오를 위한 다목적 도구입니다. 웹 개발자로서 CSS에 이미지를 포함하거나, 시스템 엔지니어로서 텍스트 프로토콜을 통해 바이너리 데이터를 전송하거나, 단순히 Base64 문자열을 디코딩해야 하는 경우에도 이 도구는 특정 요구 사항에 대한 고급 옵션과 함께 효율적인 솔루션을 제공합니다. 다양한 입력 방법, 문자 인코딩 및 파일 형식을 지원함으로써 우리의 Base64 도구는 오늘날의 다양한 컴퓨팅 환경에서 바이너리와 텍스트 기반 시스템을 연결하는 데 도움을 줍니다."
  }
}