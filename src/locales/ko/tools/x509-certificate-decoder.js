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
  },
  article: {
    title: 'X.509 인증서 파서: SSL/TLS 인증서 분석 및 검증',
    introduction: {
      title: 'X.509 인증서 파서란 무엇인가요?',
      p1: '<strong>X.509 인증서 파서</strong>는 보안 전문가, 웹 개발자 및 IT 관리자가 SSL/TLS 프로토콜에서 사용되는 디지털 인증서를 분석하는 데 도움을 주는 강력한 도구입니다. 우리의 무료 온라인 X.509 인증서 파싱 도구는 소프트웨어 설치 없이도 인증서 구성 요소, 유효성 상태 및 보안 기능에 대한 포괄적인 분석을 제공합니다.',
      p2: '디지털 인증서는 안전한 네트워크 통신에 필수적이며 브라우저와 서버 간의 신뢰할 수 있는 연결을 설정합니다. 그러나 인증서 문제 해결은 복잡한 구조와 인코딩된 데이터를 이해해야 합니다. X.509 인증서 파서는 원시 인증서 데이터를 사람이 읽을 수 있는 정보로 파싱하여 문제를 빠르게 식별하고 인증서의 진위를 검증하는 과정을 단순화합니다.'
    },
    useCases: {
      title: '인증서 파싱의 일반적인 사용 사례',
      case1: '<strong>SSL/TLS 인증서 검증</strong>: 웹사이트 인증서의 진위와 무결성을 배포 전에 확인합니다.',
      case2: '<strong>인증서 만료 모니터링</strong>: 유효기간과 만료 날짜를 확인하여 예기치 않은 서비스 중단을 방지합니다.',
      case3: '<strong>인증서 경로 검증</strong>: 인증서 체인을 확인하여 인증서 간의 올바른 신뢰 관계를 보장합니다.',
      case4: '<strong>인증서 구성 문제 해결</strong>: 브라우저 경고 또는 연결 문제를 일으키는 인증서의 잘못된 구성을 식별합니다.',
      case5: '<strong>디지털 서명 검증</strong>: 보안 평가를 위해 인증서 서명 알고리즘과 공개키 매개변수를 확인합니다.'
    },
    faq: {
      title: 'X.509 인증서에 관한 자주 묻는 질문',
      q1: 'X.509 인증서에서 어떤 정보를 추출할 수 있나요?',
      a1: '우리의 <strong>X.509 인증서 파서</strong>를 사용하면 발급자 상세 정보, 주체 정보, 유효기간, 공개키 매개변수, 주체 대체 이름과 같은 확장, 디지털 서명 알고리즘 및 인증서 지문을 포함한 포괄적인 정보를 추출할 수 있습니다. 이 도구는 또한 인증서 상태와 만료 상태에 대한 시각적 지표를 제공하여 업데이트가 필요한 인증서를 쉽게 식별할 수 있도록 합니다.',
      q2: '내 인증서가 브라우저에서 신뢰되는지 어떻게 알 수 있나요?',
      a2: '인증서가 인정된 인증 기관(CA)에 의해 발급되고 유효한 신뢰 체인을 형성하는 경우 브라우저는 일반적으로 인증서를 신뢰합니다. 우리의 파싱 도구는 인증서 체인을 시각화하고 각 인증서의 유효성을 검증하는 데 도움을 줍니다. 주요 지표에는 인증서 발급자(신뢰할 수 있는 CA여야 함), 유효 날짜(만료되지 않음), 올바른 기본 제약(중간 인증서의 경우) 및 적절한 키 사용 확장이 포함됩니다. 브라우저 신뢰는 또한 인증서가 취소되지 않은 경우에 달려 있으며, 이는 인증서의 OCSP 또는 CRL 정보를 통해 확인할 수 있습니다.',
      q3: 'PEM과 DER 인증서 형식의 차이점은 무엇인가요?',
      a3: 'PEM(Privacy Enhanced Mail)과 DER(Distinguished Encoding Rules)는 X.509 인증서의 두 가지 일반적인 형식입니다. <strong>PEM 형식</strong>은 Base64로 인코딩되어 있으며 "-----BEGIN CERTIFICATE-----"로 시작하는 사람이 읽을 수 있는 텍스트입니다. 이는 웹 서버와 이메일에서 일반적으로 사용됩니다. <strong>DER 형식</strong>은 바이너리 인코딩으로 사람이 읽을 수 없지만 더 컴팩트합니다. 우리의 인증서 파싱 도구는 수동 선택 없이도 이 두 형식을 자동으로 지원하여 적절한 형식을 감지하고 파싱합니다.',
      q4: '내 인증서가 특정 TLS 기능을 지원하는지 어떻게 확인하나요?',
      a4: '인증서의 TLS 기능 지원을 확인하려면 우리의 인증서 파서를 사용하여 <strong>확장 키 사용</strong>과 <strong>키 사용</strong> 확장을 확인하세요. 서버 인증(웹 서버)의 경우 확장 키 사용에서 "서버 인증"(1.3.6.1.5.5.7.3.1) 값을 찾으세요. 키 사용 확장은 디지털 서명 또는 키 암호화와 같은 허용된 작업을 나타냅니다. 또한 SHA-256과 RSA 또는 ECDSA와 같은 현대적이고 안전한 알고리즘(예: SHA-1 또는 MD5와 같은 구식 알고리즘 대신)을 사용하는지 서명 알고리즘을 확인하세요.',
      q5: '내 인증서가 곧 만료되면 어떻게 해야 하나요?',
      a5: '우리의 <strong>인증서 파서</strong>가 인증서가 곧 만료될 것임을 표시하는 경우(일반적으로 30일 이내), 인증서 제공업체 또는 인증 기관을 통해 즉시 갱신해야 합니다. 갱신 프로세스에는 일반적으로 다음이 포함됩니다: 1) 새로운 인증서 서명 요청(CSR) 생성, 2) 이를 CA에 제출, 3) 검증 요구 사항 완료, 4) 서버에 새 인증서 설치. 서비스 중단 또는 사용자 보안 경고를 방지하기 위해 만료 전 최소 2-4주 전에 이 프로세스를 시작하는 것이 좋습니다.'
    },
    tutorial: {
      title: 'X.509 인증서 파서 사용 방법',
      step1: {
        title: '인증서 업로드 또는 붙여넣기',
        content: '먼저 파일 업로더를 통해 인증서 파일(.crt, .cer, .pem 또는 .der)을 업로드하거나 입력 상자에 직접 PEM 형식의 인증서 텍스트를 붙여넣습니다. 우리의 도구는 파일 업로드를 용이하게 하는 드래그 앤 드롭 기능을 지원합니다. 분석할 인증서가 없는 경우 "샘플 로드" 버튼을 클릭하여 도구가 데모 인증서를 어떻게 처리하는지 확인할 수 있습니다.'
      },
      step2: {
        title: '인증서 파싱',
        content: '인증서를 로드한 후 "인증서 파싱" 버튼을 클릭합니다. 우리의 도구는 자동으로 형식(PEM 또는 DER)을 감지하고 인증서 데이터를 파싱합니다. 처리는 완전히 귀하의 브라우저에서 이루어지므로 인증서 데이터가 귀하의 장치를 떠나지 않습니다. 이는 민감한 인증서를 분석하기 위한 안전한 선택입니다.'
      },
      step3: {
        title: '인증서 상세 정보 분석',
        content: '파싱 후 도구는 탐색하기 쉬운 탭 형식으로 포괄적인 인증서 정보를 표시합니다. "기본 정보" 탭은 유효기간, 일련번호 및 서명 알고리즘과 같은 핵심 세부 사항을 보여줍니다. 시각적 지표는 인증서가 유효한지, 곧 만료될지 또는 이미 만료되었는지를 명확하게 표시합니다. 주체 및 발급자, 확장, 공개키 등과 같은 더 자세한 정보는 전용 탭에서 탐색할 수 있습니다.'
      },
      step4: {
        title: '보고서 내보내기 및 다운로드',
        content: '인증서 분석을 저장하거나 공유하려면 결과 섹션 하단의 내보내기 기능을 사용하세요. 다양한 형식(PDF, TXT, HTML 또는 JSON)으로 포괄적인 보고서를 다운로드하거나 특정 섹션을 클립보드에 복사할 수 있습니다. 이러한 보고서는 문서화, 규정 준수 목적 또는 문제 해결 중 팀원과 공유하는 데 유용합니다.'
      }
    },
    resources: {
      title: '추가 자료',
      intro: 'X.509 인증서 및 관련 보안 주제에 대한 지식을 확장하기 위한 유용한 자료:',
      relatedTools: '관련 보안 도구',
      tool1: '해시 생성기 - 데이터 검증을 위한 암호화 해시 생성',
      tool2: 'Base64 인코더/디코더 - 바이너리와 Base64 형식 간 변환',
      tool3: 'JWT 디코더 - 인증에 사용되는 JSON 웹 토큰 분석',
      externalLinks: '외부 참조',
      external1: 'IETF RFC 5280 - 인터넷 X.509 공개키 인프라 인증서',
      external2: '위키백과 - X.509 인증서 표준 개요',
      external3: 'SSL.com - X.509 인증서란 무엇인가요?'
    },
    conclusion: {
      title: '결론',
      content: '<strong>X.509 인증서 파서</strong>는 디지털 인증서와 보안 통신을 사용하는 모든 사람에게 필수적인 도구입니다. 인증서 구조와 유효성에 대한 명확하고 상세한 정보를 제공함으로써 우리의 도구는 SSL/TLS 구현이 안전하고 오류 없음을 보장하는 데 도움을 줍니다. 감사를 수행하는 보안 전문가, HTTPS 문제를 해결하는 웹 개발자 또는 인증서 배포를 관리하는 IT 관리자이든, 이 파서는 인증서 분석을 단순화하고 보안 관행을 강화합니다.'
    }
  },
}