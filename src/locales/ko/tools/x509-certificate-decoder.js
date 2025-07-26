export default {
  name: 'X.509 인증서 파서',
  description: '무료 온라인 X.509 인증서 분석 도구. SSL/TLS 인증서를 파싱하고 분석하여 인증서 상세 정보 확인, 유효기간 검사, 공개키 추출, 보고서 내보내기 기능 제공',

  instructions: {
    title: '인증서 파서',
    description: '인증서 파일을 업로드하거나 PEM 형식의 인증서를 붙여넣어 상세 정보를 확인하세요.'
  },

  dropzone: {
    title: '인증서 파일을 여기에 드래그 앤 드롭',
    formats: '.crt, .cer, .pem, .der, .p12 및 .pfx 파일 형식 지원'
  },

  buttons: {
    browse: '파일 찾기',
    decode: '인증서 파싱',
    loadSample: '샘플 로드',
    downloadPdf: 'PDF 보고서 다운로드',
    downloadTxt: '텍스트 보고서 다운로드',
    downloadHtml: 'HTML 보고서 다운로드',
    downloadJson: 'JSON 보고서 다운로드',
    copyBasic: '기본 정보 복사',
    copySubject: '주체/발급자 복사',
    copyAll: '전체 정보 복사',
    copyValue: '값 복사',
    downloadKey: '키 다운로드',
    exportPem: 'PEM 내보내기',
    downloadCert: '인증서 다운로드',
  },

  input: {
    paste: '또는 인증서 데이터 붙여넣기:',
    placeholder: 'PEM 형식 인증서 붙여넣기 (-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----)'
  },

  loading: '인증서 파싱 중...',

  error: {
    title: '인증서 파싱 오류',
    invalidFormat: '잘못된 인증서 형식',
    invalidBase64: '유효한 base64 인코딩 인증서가 아님',
    invalidStructure: '잘못된 인증서 데이터 구조',
    invalidDer: '잘못된 DER 형식 인증서',
    invalidAsn1: '유효하지 않은 인증서: ASN.1 데이터 파싱 불가',
    unsupportedType: '지원되지 않는 인증서 데이터 유형',
    failedParse: '인증서 데이터 파싱 실패',
    invalidP12: '잘못된 PKCS#12 파일 형식',
    invalidP12Password: '잘못된 PKCS#12 비밀번호',
    noCertificatesInP12: 'PKCS#12 파일에서 인증서를 찾을 수 없음',
    unableToProcessP12: 'PKCS#12 파일 처리 불가'
  },

  guide: {
    title: '이 도구 사용 방법',
    step1: 'X.509 인증서 파일(.crt, .cer, .pem, .der, .p12 또는 .pfx)을 업로드하거나 아래 텍스트 상자에 인증서 데이터를 붙여넣습니다.',
    step2: '도구가 자동으로 형식(PEM, DER 또는 PKCS#12)을 감지하고 디코딩합니다.',
    step3: '주체, 발급자, 유효기간, 확장 및 공개키 데이터를 포함한 상세 인증서 정보를 확인합니다.',
    step4: '하단 버튼을 사용하여 다양한 형식으로 인증서 보고서를 다운로드하거나 정보를 클립보드에 복사할 수 있습니다.'
  },

  tabs: {
    basic: '기본 정보',
    subject: '주체 및 발급자',
    extensions: '확장',
    publicKey: '공개키',
    fingerprints: '지문',
    raw: '원본 인증서'
  },

  results: {
    title: '인증서 상세 정보',
    serialNumber: '일련번호',
    version: '버전',
    sigAlg: '서명 알고리즘',
    validFrom: '유효 시작일',
    validTo: '유효 종료일',
    subject: '주체',
    issuer: '발급자',
    extensions: '확장',
    publicKey: '공개키',
    algorithm: '알고리즘',
    keySize: '키 크기',
    keyValue: '키 값',
    fingerprints: '지문',
    rawCertificate: '원본 인증서',
    field: '필드',
    value: '값',
    critical: '중요',
    noExtensions: '이 인증서에서 확장 정보를 찾을 수 없습니다.',
    validity: '인증서 유효기간',
    expiresIn: '{days}일 후 만료 예정',
    visualization: '인증서 시각화',
    daysRemaining: '남은 일수',
    valid: '유효',
    expired: '만료됨',
    expiringSoon: '곧 만료 예정',
    fieldDescriptions: '필드 설명',
    certificateUsage: '인증서 용도',
    certificateChain: '인증서 체인',
    signatureValue: '서명 값',
    notAvailable: '사용 불가',
    noSpecificUsage: '특정 용도 없음',
    signatureError: '서명 값 파싱 오류',
    keyDetails: '키 상세 정보',
    enhancedView: '향상된 보기',
    endEntity: '최종 개체',
    intermediate: '중간 인증서',
    rootCA: '루트 CA',
    endEntityCert: '최종 개체 인증서',
    intermediateCert: '중간 인증서',
    rootCert: '루트 인증 기관',
    issuedBy: '발급자',
    unknownIssuer: '알 수 없는 발급자',
    notYetValid: '아직 유효하지 않음'
  },

  report: {
    title: 'X.509 인증서 보고서',
    generatedOn: '생성일'
  },

  extensions: {
    subjectKeyIdentifier: '주체 키 식별자',
    keyUsage: '키 사용',
    subjectAltName: '주체 대체 이름',
    basicConstraints: '기본 제약',
    crlDistributionPoints: 'CRL 배포 지점',
    certificatePolicies: '인증서 정책',
    authorityKeyIdentifier: '인증 기관 키 식별자',
    extKeyUsage: '확장 키 사용',
    authorityInfoAccess: '인증 기관 정보 접근',
    ctPrecertificateScts: 'CT 사전 인증서 SCTs'
  },

  usage: {
    serverAuth: '서버 인증',
    clientAuth: '클라이언트 인증',
    codeSigning: '코드 서명',
    emailProtection: '이메일 보호',
    timeStamping: '타임스탬핑',
    ocspSigning: 'OCSP 서명'
  },

  customOID: {
    title: '사용자 정의 OID 조회',
    placeholder: 'OID 입력 (예: 2.5.29.15)',
    lookup: '조회',
    result: '결과',
    value: '값',
    notFound: '이 OID에 대한 정보를 찾을 수 없음',
    foundButComplex: 'OID를 찾았지만 값이 복잡함',
    unknownName: '알려지지 않은 이름의 OID',
    complexValue: '복잡한 값, 직접 표시 불가'
  },

  descriptions: {
    serialNumber: '인증 기관이 할당한 인증서의 고유 일련번호',
    version: '인증서 형식의 버전 번호, 일반적으로 V3',
    sigAlg: '인증서 서명 생성에 사용된 알고리즘',
    validFrom: '인증서 유효기간 시작 일시',
    validTo: '인증서 유효기간 종료 일시',
    subject: '인증서 소유자의 신원 정보',
    issuer: '인증서를 발급한 인증 기관의 신원 정보',
    publicKey: '인증서 소유자의 공개키 정보',
    extensions: '인증서 용도에 대한 추가 정보를 포함하는 확장 필드'
  },

  messages: {
    copiedToClipboard: '클립보드에 복사됨',
    copyError: '클립보드 복사 실패'
  },

  pkcs12: {
    passwordPrompt: 'PKCS#12 파일 비밀번호 입력',
    noPassword: '비밀번호 없음'
  },

  keyUsages: {
    digitalSignature: '디지털 서명',
    nonRepudiation: '부인 방지',
    keyEncipherment: '키 암호화',
    dataEncipherment: '데이터 암호화',
    keyAgreement: '키 합의',
    keyCertSign: '인증서 서명',
    crlSign: 'CRL 서명',
    encipherOnly: '암호화 전용',
    decipherOnly: '복호화 전용'
  }
};