export default {
  name: 'HMAC 계산기',
  description: '데이터의 HMAC(해시 기반 메시지 인증 코드) 계산',
  title: 'HMAC 메시지 인증 코드 계산 도구',
  intro: '비밀 키를 사용하여 메시지 인증 코드 생성, 다양한 해시 알고리즘 및 출력 형식 지원',

  input: {
    title: '입력',
    message: '메시지',
    messagePlaceholder: '인증할 메시지 입력',
    key: '키',
    keyLabel: '키 (비밀 키)',
    keyPlaceholder: 'HMAC 키 입력',
    messageLabel: '메시지 (Message)',
    messageLongPlaceholder: 'HMAC을 계산할 메시지 입력',
    file: '파일',
    text: '텍스트',
    fileSelect: '파일 선택',
    fileDrop: '또는 파일을 여기에 드롭',
    fileSelected: '선택한 파일: {name}',
    clearFile: '파일 지우기',
    encoding: '입력 인코딩',
    keyEncoding: '키 인코딩',
    outputFormat: '출력 형식',
    inputType: '입력 유형',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: '16진수',
    binary: '2진수',
    calculate: 'HMAC 계산',
    calculating: '계산 중...',
    clear: '모두 지우기'
  },

  algorithms: {
    title: '알고리즘',
    label: '해시 알고리즘',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'HMAC 결과',
    digest: 'HMAC 다이제스트',
    outputLabel: 'HMAC 결과',
    copy: '복사',
    copied: '복사 완료!',
    noResult: '메시지와 키를 입력하여 HMAC을 계산하세요',
    calculating: '계산 중...',
    placeholder: 'HMAC 결과가 여기에 표시됩니다',
    useExample: '예제 사용',
    jsExample: 'JavaScript 예제:',
  },

  validation: {
    title: 'HMAC 검증',
    hmacToVerify: '검증할 HMAC',
    verifyPlaceholder: '검증할 HMAC 입력',
    verify: 'HMAC 검증',
    valid: 'HMAC 유효',
    invalid: 'HMAC 무효',
    verifying: '검증 중...'
  },

  options: {
    title: '옵션',
    uppercase: '대문자 출력',
    showDetails: '기술적 세부 정보 표시',
    autoUpdate: '자동 업데이트',
    truncate: '출력 생략',
    truncateLength: '생략 길이'
  },

  details: {
    title: '기술적 세부 정보',
    algorithm: '알고리즘',
    keyLength: '키 길이',
    blockSize: '블록 크기',
    outputLength: '출력 길이',
    execution: '실행 시간',
    ms: '밀리초'
  },

  messages: {
    noMessage: '메시지를 입력하세요',
    noKey: '키를 입력하세요',
    invalidEncoding: '잘못된 인코딩 형식',
    processingError: '처리 오류: {error}',
    success: 'HMAC 계산 성공',
    invalidKey: '선택한 인코딩의 키 형식이 잘못되었습니다',
    fileTooBig: '파일이 너무 큽니다. 최대 크기는 5MB입니다',
    copied: '클립보드에 복사되었습니다',
    copyFailed: '복사 실패, 수동으로 복사하세요',
    invalidHex: '키가 유효한 16진수 형식이 아닙니다',
    invalidBase64: '키가 유효한 Base64 형식이 아닙니다',
  },

  security: {
    title: '보안 안내',
    keyStorage: '키를 공유하지 마세요',
    keyStrength: '각 애플리케이션에 강력하고 고유한 키 사용',
    recommendation: '보안이 중요한 애플리케이션의 경우 최소한 HMAC-SHA256 사용',
    warning: 'HMAC-MD5와 HMAC-SHA1은 높은 보안이 필요한 애플리케이션에는 적합하지 않을 수 있습니다'
  }
};
