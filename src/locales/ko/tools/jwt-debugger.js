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
  },
  article: {
    title: "JWT 디버깅 도구: JSON 웹 토큰 디코딩, 검증 및 디버깅",
    features: {
      title: "JWT 디버깅 이해",
      description: "이 <strong>JWT 디버깅 도구</strong>는 개발자와 보안 전문가를 위해 설계된 <strong>토큰 분석 도구</strong>로, JSON 웹 토큰(JWT)을 검사, 검증 및 문제 해결하는 데 사용됩니다. 이 <strong>온라인 JWT 디코더</strong>를 사용하면 모든 JWT를 붙여넣고 즉시 디코딩된 헤더, 페이로드 및 서명 구성 요소를 사람이 읽을 수 있는 형식으로 볼 수 있습니다.<br><br>간단한 <strong>토큰 디코딩</strong> 외에도 이 도구는 적절한 키 또는 공개키를 사용하여 토큰의 서명이 유효한지 확인하는 포괄적인 검증 기능을 제공합니다. 이 <strong>JWT 검증 도구</strong>는 HS256, RS256, ES256 등 모든 표준 JWT 알고리즘을 지원하여 현대 인증 시스템과 호환됩니다. 토큰 기반 인증을 구축하거나 유지 관리하는 개발자를 위해 이 <strong>JWT 디버깅 유틸리티</strong>는 토큰 구조, 만료 상태 및 보안 클레임에 대한 중요한 통찰력을 제공합니다.",
      useCases: {
        title: "JWT 디버깅의 실제 적용 사례",
        items: [
          "<strong>API 인증 문제 해결</strong>: API 호출이 인증 오류로 실패할 때 개발자는 <strong>JWT 검증 도구</strong>를 사용하여 토큰을 검사하고 토큰 만료, 잘못된 서명 또는 잘못된 클레임과 같은 문제를 식별할 수 있습니다",
          "<strong>ID 공급자 통합</strong>: OAuth 또는 OpenID Connect 서비스와 통합하는 과정에서 <strong>토큰 검사기</strong>는 ID 토큰이 예상된 클레임을 포함하고 올바르게 서명되었는지 확인하는 데 도움을 줍니다",
          "<strong>보안 감사</strong>: 보안 전문가는 <strong>인증 토큰</strong>을 검사하여 적절한 권한, 합리적인 만료 시간을 포함하고 보안 모범 사례를 따르는지 확인할 수 있습니다",
          "<strong>사용자 정의 JWT 생성</strong>: 사용자 정의 인증 시스템을 구현할 때 개발자는 이 도구를 사용하여 특정 클레임과 서명 알고리즘이 있는 <strong>인코딩된 JWT 토큰</strong>을 생성하고 테스트할 수 있습니다",
          "<strong>Bearer 토큰 디버깅</strong>: <strong>bearer 인증</strong>을 사용하는 프론트엔드 개발자는 애플리케이션 헤더에서 사용되는 토큰이 올바르게 형식화되고 필요한 데이터를 포함하는지 확인할 수 있습니다",
          "<strong>마이크로서비스 인증</strong>: 마이크로서비스 아키텍처를 구축하는 팀은 <strong>서비스 토큰</strong>이 서비스 간에 올바른 권한 정보를 전달하고 적절한 보안 경계를 유지하는지 확인할 수 있습니다"
        ]
      }
    },
    faq: {
      title: "JWT 디버깅에 관한 자주 묻는 질문",
      items: [
        {
          question: "JWT를 이 온라인 디버거에 붙여넣는 것이 안전한가요?",
          answer: "예, 우리의 JWT 디버거는 보안을 고려하여 설계되었습니다. 모든 토큰 처리는 클라이언트 측 JavaScript를 사용하여 브라우저 내에서 완전히 이루어지며, 이는 귀하의 토큰이 디코딩 또는 검증을 위해 서버로 전송되지 않음을 의미합니다. JWT 디코더는 어떤 방식으로도 귀하의 토큰, 키 또는 페이로드 데이터를 저장하지 않습니다. 그러나 보안 모범 사례로서, 민감한 정보가 포함된 프로덕션 토큰 대신 테스트 토큰만 사용할 것을 권장합니다. 매우 민감한 인증 시스템을 다루는 경우 모든 온라인 토큰 검증 서비스 대신 보안 개발 환경에서 로컬 JWT 디버깅 도구를 사용하는 것을 고려하세요."
        },
        {
          question: "JWT의 헤더, 페이로드 및 서명의 차이점은 무엇인가요?",
          answer: "JSON 웹 토큰은 점으로 구분된 세 가지 다른 부분으로 구성됩니다: 헤더, 페이로드 및 서명. 헤더에는 일반적으로 토큰 유형('JWT')과 사용된 서명 알고리즘(예: 'HS256' 또는 'RS256')이 포함됩니다. 페이로드에는 클레임 또는 주장이 포함되며, 이는 일반적으로 사용자에 대한 진술 및 추가 데이터입니다. 일반적인 클레임에는 사용자 ID, 만료 시간 및 발행자가 포함됩니다. 서명은 인코딩된 헤더와 페이로드를 키와 함께 헤더에 지정된 알고리즘을 사용하여 생성됩니다. 이 서명은 메시지가 변경되지 않았음을 확인하고 일부 알고리즘의 경우 발신자의 신원을 확인합니다. 우리의 토큰 디코더는 세 부분을 모두 명확하게 표시하여 인증 토큰을 이해하고 디버깅하는 데 도움을 줍니다."
        },
        {
          question: "JWT 서명이 유효한지 어떻게 확인하나요?",
          answer: "우리의 토큰 검증 도구를 사용하여 JWT 서명을 확인하려면 입력 필드에 토큰을 입력하고 적절한 키 또는 공개키(사용된 알고리즘에 따라 다름)를 제공하세요. HS256과 같은 HMAC 기반 알고리즘의 경우 토큰 생성 시 사용된 것과 동일한 키가 필요합니다. RS256 또는 ES256과 같은 RSA 또는 ECDSA 알고리즘의 경우 서명에 사용된 개인키에 해당하는 공개키가 필요합니다. 그런 다음 JWT 디버거는 제공된 키를 기반으로 헤더와 페이로드에 대한 서명을 계산하고 토큰의 서명과 비교합니다. 일치하면 서명이 유효하며, 이는 토큰이 변조되지 않았고 올바른 개인키 또는 키를 가진 신뢰할 수 있는 당사자에 의해 서명되었음을 확인합니다."
        },
        {
          question: "올바른 키를 사용해도 JWT 검증이 실패할 수 있는 이유는 무엇인가요?",
          answer: "올바른 키를 사용하더라도 토큰 디코더에서 JWT 검증이 실패할 수 있는 몇 가지 이유가 있습니다. 일반적인 문제에는 다음이 포함됩니다: 토큰 만료(페이로드의 'exp' 클레임 확인), 토큰이 아직 유효하지 않음('nbf' 클레임 확인), 잘못된 알고리즘 사용(헤더에 지정된 알고리즘이 검증에 사용한 알고리즘과 일치하는지 확인), 토큰 변조(헤더 또는 페이로드의 사소한 변경도 서명 검증 실패를 초래할 수 있음), 키 형식이 잘못됨(특히 RSA 및 ECDSA 키의 경우 키 형식이 올바른지 확인), 또는 인코딩 문제(키에 특수 문자가 포함된 경우). JWT 디버거는 검증 실패의 구체적인 원인을 식별하는 데 도움이 되는 자세한 오류 메시지를 제공하여 인증 토큰 문제를 해결하기 쉽게 합니다."
        },
        {
          question: "이 도구로 새 JWT를 생성할 수 있나요?",
          answer: "예, 우리의 JWT 디버거에는 토큰 생성 기능이 포함되어 있습니다. 새 JWT를 생성하려면 원하는 페이로드(포함하려는 클레임)를 지정하고 적절한 서명 알고리즘(예: HS256, RS256 등)을 선택하며 필요한 서명 키를 제공하세요. HS256과 같은 대칭 알고리즘의 경우 키가 필요합니다. RS256과 같은 비대칭 알고리즘의 경우 서명에 사용할 개인키가 필요합니다. 필요한 경우 이 도구는 랜덤 키 생성에도 도움을 줄 수 있습니다. 이러한 옵션을 구성한 후 토큰 인코더는 테스트 또는 구현에 사용할 수 있는 유효한 JWT를 생성합니다. 이 기능은 JWT 기반 인증을 구현하고 테스트 목적으로 특정 클레임이 있는 예제 토큰을 생성해야 하는 개발자에게 특히 유용합니다."
        }
      ]
    },
    guide: {
      title: "JWT 디버깅 도구 사용 단계별 안내",
      steps: [
        "<strong>JSON 웹 토큰</strong>을 디버거 상단의 토큰 입력 필드에 입력하세요. 인증 시스템 또는 API에서 가져온 전체 JWT(점으로 구분된 세 부분 모두 포함)를 붙여넣을 수 있습니다",
        "<strong>디코드</strong> 버튼을 클릭하여 토큰의 디코딩된 구성 요소를 즉시 확인하세요. JWT 디코더는 읽기 쉬운 형식의 JSON 뷰로 헤더와 페이로드 부분을 표시합니다",
        "<strong>헤더 부분</strong>을 확인하세요. 일반적으로 토큰 유형('typ')과 서명 알고리즘('alg')이 표시됩니다. 이 정보는 토큰이 어떻게 생성되었는지와 서명을 어떻게 검증해야 하는지 나타냅니다",
        "<strong>페이로드 부분</strong>을 검사하세요. 여기에는 토큰에 저장된 모든 클레임 또는 데이터가 포함됩니다. 유효성을 결정하는 만료 시간('exp'), 발행 시간('iat') 및 주제('sub') 클레임에 특히 주의하세요",
        "토큰의 서명을 검증하려면 지정된 필드에 적절한 <strong>검증 키</strong>를 입력하세요. 대칭 알고리즘(HS256)은 키를 사용하고, 비대칭 알고리즘(RS256/ES256)은 공개키를 사용합니다",
        "<strong>서명 검증</strong> 버튼을 클릭하여 토큰의 서명이 유효한지 확인하세요. JWT 검증기는 검증이 성공했는지 실패했는지 및 관련 세부 정보를 표시합니다",
        "<strong>새 토큰 생성</strong>하려면 '토큰 생성' 옵션을 클릭하고, JSON 형식으로 원하는 페이로드를 지정하고, 알고리즘을 선택하고, 서명 키를 제공(또는 생성)하면 도구가 올바르게 형식화된 JWT를 생성합니다"
      ]
    },
    conclusion: "JWT 디버깅 도구는 현대 인증 시스템을 사용하는 개발자에게 필수적인 도구로, 토큰 검사, 검증 및 생성을 위한 포괄적인 기능을 제공합니다. 토큰 구조와 검증 상태에 대한 명확한 가시성을 제공함으로써 디버깅 프로세스를 간소화하고 JWT 구현의 보안을 보장하는 데 도움을 줍니다. 인증 문제를 해결하든, ID 공급자와 통합하든, 새로운 토큰 기반 시스템을 설계하든, 이 도구는 JWT 사용의 복잡한 프로세스를 단순화합니다. 인증 토큰이 웹 애플리케이션 보안의 초석으로 계속되는 가운데, 개발자 도구 키트에 신뢰할 수 있는 JWT 디버깅 유틸리티를 보유하는 것은 안전하고 제대로 작동하는 인증 워크플로우를 유지하는 데 점점 더 가치가 있습니다."
  }
}