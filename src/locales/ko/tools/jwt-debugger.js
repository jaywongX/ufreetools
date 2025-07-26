export default {
  name: 'JWT 디버깅 도구',
  description: 'JWT 토큰을 파싱, 검증 및 디버깅하는 온라인 도구',

  sections: {
    encoded: '인코딩된 JWT',
    decoded: '디코딩된 JWT',
    header: '헤더',
    payload: '페이로드',
    signature: '서명',
    verification: '검증'
  },

  actions: {
    decode: '디코드',
    verify: '서명 검증',
    copy: '복사',
    share: '토큰 공유',
    generateToken: '토큰 생성',
    generateRandomToken: '랜덤 토큰',
    clear: '초기화',
    generateRandomPayload: '랜덤 페이로드 생성',
    generateRandomKey: '랜덤 키 생성',
    generateKeyPair: '키 쌍 생성'
  },

  messages: {
    invalidToken: '잘못된 JWT 형식',
    copied: '클립보드에 복사되었습니다!',
    copyFailed: '복사 실패, 수동으로 복사하세요',
    verificationSuccess: '서명 검증 성공',
    verificationFailed: '서명 검증 실패',
    keyGenerated: '키 쌍 생성 성공',
    keyGenerationFailed: '키 쌍 생성 실패',
    tokenGenerated: '토큰 생성 성공',
    tokenGenerationFailed: '토큰 생성 실패',
    randomTokenGenerated: '랜덤 토큰 생성 및 파싱 성공',
    certUploadSuccess: '인증서 업로드 성공',
    certFormatInvalid: '잘못된 인증서 형식',
    certReadFailed: '인증서 읽기 실패',
    tokenFormatError: '잘못된 토큰 형식, JWT는 점으로 구분된 세 부분으로 구성되어야 합니다',
    tokenHeaderMissingAlg: '토큰 헤더에 알고리즘(alg) 필드가 없습니다',
    tokenHeaderInvalid: '잘못된 토큰 헤더 형식',
    tokenVerificationFailed: '토큰 형식 검증 실패',
    tokenExpired: '토큰이 만료되었습니다. 만료 시간: {time}',
    tokenNotEffective: '토큰이 아직 유효하지 않습니다. 유효 시간: {time}',
    tokenIssuedInFuture: '토큰 발행 시간이 이상합니다, 발행 시간이 미래입니다. 발행 시간: {time}',
    algorithmNotSupported: '지원되지 않는 알고리즘',
    randomSecretGenerated: '랜덤 시크릿 생성 성공',
    randomSecretGenerationFailed: '랜덤 시크릿 생성 실패',
    randomPayloadGenerated: '랜덤 페이로드 생성됨',
    randomPayloadGenerationFailed: '랜덤 페이로드 생성 실패',
    contentCleared: '모든 내용이 초기화되었습니다',
    tokenDecodeSuccess: '토큰 파싱 성공',
    tokenDecodeFailed: '토큰 파싱 실패',
    pleaseInputKey: '키를 입력하세요',
    pleaseGenerateKeyPair: '먼저 {type} 키 쌍을 생성하세요',
    pleaseInputVerificationKey: '검증 키를 입력하세요',
    pleaseInputPublicKey: '검증 공개키를 입력하세요',
    pleaseInputToken: '검증할 토큰을 입력하세요',
    payloadFormatError: '페이로드 형식 오류, JSON 형식을 확인하세요',
    invalidTimestamp: '잘못된 타임스탬프'
  },

  placeholders: {
    secretKey: '시크릿 키를 입력하세요',
    privateKey: '개인키를 입력하거나 생성하세요',
    publicKey: '공개키를 입력하거나 생성하세요',
    payload: 'JSON 형식의 페이로드를 입력하세요',
    token: 'JWT 토큰을 입력하거나 생성하세요',
    verificationSecretKey: '검증 시크릿 키를 입력하세요',
    verificationPublicKey: '검증 공개키를 입력하세요'
  },

  labels: {
    algorithm: '알고리즘',
    secretKey: '시크릿 키',
    privateKey: '개인키',
    publicKey: '공개키',
    certificate: '디지털 인증서 (선택사항)',
    payload: '페이로드 (Payload)',
    token: '토큰',
    verificationPublicKey: '검증 공개키',
    tokenResult: '토큰 파싱 결과',
    verifyToken: '토큰 검증',
    tokenDecoded: '{alg} 알고리즘으로 서명된 토큰이 감지되었습니다',
    timestamp: '타임스탬프 파싱',
    issuedAt: '발행 시간 (iat)',
    expiration: '만료 시간 (exp)',
    notBefore: '유효 시간 (nbf)',
    tokenFormat: '내용 없음 안내',
    tokenFormatDesc: 'JWT 토큰을 입력하거나 생성하면 파싱 결과가 여기에 표시됩니다',
    uploadCert: '인증서 파일을 드래그 앤 드롭하거나 클릭하여 선택',
    certName: '인증서 이름',
    sm3Fingerprint: 'SM3 지문 (x5t#sm3)',
    certUploadNote: '인증서 업로드 후 JWT 헤더에 "x5t#sm3" 필드가 추가됩니다',
    secondsTimestamp: '초 단위 타임스탬프',
    millisecondsTimestamp: '밀리초 단위 타임스탬프'
  },

  buttons: {
    cancel: '취소',
    verify: '검증',
    clearCert: '지우기',
    generateToken: '토큰 생성',
    decodeToken: '토큰 파싱',
    verifyToken: '토큰 검증',
    close: '닫기'
  },

  verification: {
    success: '검증 성공',
    failure: '검증 실패',
    validMessage: '토큰 서명 검증이 완료되었으며, 서명이 유효합니다.',
    invalidMessage: '토큰 서명 검증에 실패하였으며, 서명이 유효하지 않습니다.'
  },

  errors: {
    noToken: '검증할 토큰을 입력하세요',
    invalidToken: '잘못된 토큰 형식',
    noSecretKey: '검증 키를 제공하세요',
    noPublicKey: '검증 공개키를 제공하세요',
    invalidSignature: '잘못된 서명',
    verificationFailed: '토큰 검증 실패'
  }
};