export default {
  name: '대칭 암호화 알고리즘',
  description: '텍스트와 파일의 안전한 암호화 및 복호화 구현, AES, DES 및 중국 국가 표준 SM4를 포함한 다양한 대칭 암호화 알고리즘 지원',

  encryption: {
    title: '암호화/복호화',
    plaintext: '평문',
    plaintextPlaceholder: '암호화할 텍스트 입력',
    ciphertext: '암호문',
    ciphertextPlaceholder: '암호화된 데이터가 여기에 표시됩니다',
    encrypt: '암호화',
    decrypt: '복호화',
    decrypted: '복호화된 텍스트',
    decryptedPlaceholder: '복호화된 데이터가 여기에 표시됩니다',
    encryptSuccess: '암호화 성공',
    decryptSuccess: '복호화 성공',
    encryptError: '암호화 실패: {error}',
    decryptError: '복호화 실패: {error}'
  },

  algorithm: {
    title: '알고리즘 선택',
    aes: 'AES',
    des: 'DES',
    tripledes: '3DES(트리플 DES)',
    sm4: 'SM4 (중국 국가 표준)',
    "3des": '3DES(트리플 DES)'
  },

  mode: {
    title: '작동 모드',
    ecb: 'ECB - 전자 코드북 모드',
    cbc: 'CBC - 암호 블록 체인 모드',
    cfb: 'CFB - 암호 피드백 모드',
    ofb: 'OFB - 출력 피드백 모드',
    ctr: 'CTR - 카운터 모드'
  },

  padding: {
    title: '패딩 방식',
    pkcs7: 'PKCS7',
    zeroPadding: '제로 패딩',
    zeropadding: '제로 패딩'
  },

  operation: {
    title: '작업 유형',
    encrypt: '암호화',
    decrypt: '복호화'
  },

  key: {
    title: '암호 키',
    label: '키',
    placeholder: '{keySize} 키 입력',
    placeholderString: '{keySize} 문자열 키 입력 (부족 시 자동 채움)',
    placeholderHex: '{keySize} 16진수 키 입력 (부족 시 자동 채움)',
    placeholderBase64: '{keySize} Base64 키 입력 (부족 시 자동 채움)',
    generateRandom: '무작위 생성',
    sizeHint: '{keySize}',
    autoFillHint: '키 길이가 부족하면 자동으로 0으로 채워지고, 초과하면 잘립니다'
  },

  iv: {
    title: '초기화 벡터 (IV)',
    label: '초기화 벡터 (IV)',
    placeholder: '{blockSize} 초기화 벡터 입력',
    placeholderString: '{blockSize} 문자열 IV 입력 (부족 시 자동 채움)',
    placeholderHex: '{blockSize} 16진수 IV 입력 (부족 시 자동 채움)',
    placeholderBase64: '{blockSize} Base64 IV 입력 (부족 시 자동 채움)',
    generateRandom: '무작위 생성',
    sizeHint: '{blockSize}',
    autoFillHint: 'IV 길이가 부족하면 자동으로 0으로 채워지고, 초과하면 잘립니다'
  },

  input: {
    title: '암호화할 내용',
    titleDecrypt: '복호화할 내용',
    clear: '지우기',
    placeholder: '암호화할 텍스트 입력',
    placeholderDecrypt: '복호화할 {format} 형식 암호문 입력'
  },

  inputFormat: {
    title: '입력 형식',
    string: '문자열',
    hex: 'HEX',
    base64: 'Base64'
  },

  output: {
    title: '암호화 결과',
    titleDecrypt: '복호화 결과',
    copyResult: '결과 복사',
    copied: '복사됨'
  },

  outputFormat: {
    title: '출력 형식',
    string: '문자열',
    hex: 'HEX',
    base64: 'Base64'
  },

  error: {
    title: '오류',
    invalidHex: '키는 HEX 형식이어야 합니다',
    invalidIvHex: 'IV는 HEX 형식이어야 합니다',
    invalidHexInput: '잘못된 HEX 형식 입력',
    invalidBase64: '잘못된 Base64 형식 입력',
    unsupportedAlgorithm: '지원되지 않는 알고리즘',
    decryptionFailed: '복호화 실패: {message}',
    copyFailed: '복사 실패, 수동으로 복사하세요',
    unknownError: '처리 중 오류 발생',
    invalidHexFormat: '잘못된 HEX 형식',
    invalidBase64Format: '잘못된 Base64 형식',
    emptyBase64: '잘못된 Base64 인코딩',
    decryptFailed: '복호화 실패:'
  },

  info: {
    title: '알고리즘 설명',
    algorithms: {
      aes: 'AES: 고급 암호화 표준, 128비트, 192비트 또는 256비트 키 사용 가능',
      des: 'DES: 데이터 암호화 표준, 56비트 키 사용, 보안 수준 낮음',
      tripledes: '3DES: 트리플 DES, 세 개의 56비트 DES 키 사용, 더 높은 보안 제공',
      sm4: 'SM4: 중국 국가 표준 블록 암호 알고리즘, 128비트 키 사용',
      "3des": '3DES: 트리플 DES, 세 개의 56비트 DES 키 사용, 더 높은 보안 제공'
    },
    modes: {
      title: '작동 모드 설명',
      ecb: 'ECB: 전자 코드북 모드, 각 블록 독립적으로 암호화, 민감한 데이터에 권장되지 않음',
      cbc: 'CBC: 암호 블록 체인 모드, 각 블록이 이전 블록에 의존, 더 안전함',
      cfb: 'CFB: 암호 피드백 모드, 블록 암호를 스트림 암호로 변환',
      ofb: 'OFB: 출력 피드백 모드, 또 다른 스트림 암호 모드, 암호화/복호화에 동일한 작업 사용',
      ctr: 'CTR: 카운터 모드, 각 블록에 증가하는 카운터로 암호화, 병렬 처리 가능'
    }
  },

  buttons: {
    process: '암호화',
    processDecrypt: '복호화'
  },

  file: {
    title: '파일 암호화',
    select: '파일 선택',
    drop: '또는 파일을 여기에 드롭',
    encrypt: '파일 암호화',
    decrypt: '파일 복호화',
    download: '결과 다운로드',
    selected: '선택됨: {name}',
    size: '크기: {size}',
    maxSize: '최대 크기: 100MB',
    encryptingFile: '파일 암호화 중...',
    decryptingFile: '파일 복호화 중...',
    downloadReady: '다운로드 준비 완료',
    fileTooBig: '파일이 너무 큽니다. 최대 허용 크기는 100MB입니다.'
  },

  options: {
    title: '옵션',
    autoDecrypt: '암호화 후 자동 복호화',
    includeMeta: '출력에 알고리즘 메타데이터 포함',
    kdf: '키 파생 함수',
    pbkdf2: 'PBKDF2',
    scrypt: 'scrypt',
    argon2: 'Argon2id',
    salt: '솔트(키 파생용)',
    saltPlaceholder: '16진수로 솔트 입력 또는 공백으로 무작위 생성',
    autoClear: '민감한 데이터 자동 삭제',
    saveSettings: '설정 저장'
  },

  security: {
    title: '보안 정보',
    description: '암호화 보안에 관하여',
    warning: '경고',
    ecbInsecure: 'ECB 모드는 데이터 패턴을 잘 숨기지 못하므로 보안 애플리케이션에는 권장되지 않습니다.',
    useModern: '민감한 데이터의 경우 GCM 또는 CBC 모드의 AES-256을 사용하세요.',
    keyWarning: '암호화 키를 안전하게 보관하세요. 분실 시 데이터를 복구할 수 없습니다.',
    browserWarning: '브라우저 기반 암호화는 편리하지만 매우 민감한 데이터에는 적합하지 않을 수 있습니다.',
    learnMore: '암호화에 대해 더 알아보기'
  },

  messages: {
    noAlgorithm: '암호화 알고리즘을 선택하세요',
    noKey: '암호화 키 또는 비밀번호를 입력하세요',
    invalidKeyLength: '선택한 알고리즘의 키 길이가 유효하지 않습니다',
    invalidIv: '선택한 알고리즘 및 모드의 IV 길이가 유효하지 않습니다',
    noData: '암호화/복호화할 데이터를 입력하세요',
    padError: '패딩 오류 - 키 또는 데이터가 올바르지 않을 수 있습니다',
    fileSuccess: '파일 처리 성공',
    fileError: '파일 처리 오류: {error}',
    clipboardError: '클립보드 복사 오류: {error}',
    invalidFormat: '잘못된 입력 형식'
  }
};