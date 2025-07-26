export default {
    title: "ASN.1 구조 파서 - ASN.1 인코딩 데이터 디코딩 및 시각화",

    // 소개 섹션
    introTitle: "ASN.1 구조 파서란?",
    introPara1: "ASN.1 구조 파서는 Abstract Syntax Notation One (ASN.1) 인코딩 데이터 구조를 디코딩하고 시각화하는 강력한 도구입니다. ASN.1은 플랫폼 간에 직렬화 및 역직렬화 가능한 데이터 구조를 정의하기 위한 표준화된 설명 언어로, 주로 통신 및 컴퓨터 네트워크, 특히 암호화 프로토콜에서 사용됩니다.",
    introPara2: "우리의 ASN.1 구조 파서는 복잡한 ASN.1 구조를 조사하기 위한 인터랙티브 방법을 제공하며 PEM, HEX, Base64 및 DER을 포함한 여러 입력 형식을 지원합니다. 트리 기반 시각화는 중첩된 ASN.1 요소를 쉽게 탐색할 수 있게 해주며, 개발자, 보안 연구원 및 네트워크 기술자에게 특히 유용합니다.",

    applicationTitle: "ASN.1 파서의 일반적인 응용 분야",
    application1: "<strong>X.509 인증서 분석</strong>: SSL/TLS 인증서 구조 및 내용을 보안 감사 및 문제 해결을 위해 검사",
    application2: "<strong>PKCS 파일 검사</strong>: 개인 키, 인증서 요청 및 저장 형식에 대한 상세 분석",
    application3: "<strong>암호화 메시지 구문(CMS)</strong>: 안전한 메시지 프로토콜을 위한 서명 및 암호화된 데이터 구조 검사",
    application4: "<strong>네트워크 프로토콜 분석</strong>: SNMP, LDAP 및 H.323과 같은 프로토콜에서 ASN.1 데이터 디코딩",
    introPara3: "ASN.1 구조 파싱은 현대 보안 시스템에서 복잡한 데이터 형식을 이해하는 데 중요합니다. 우리의 파서는 색상 코딩된 시각화, 접을 수 있는 트리 뷰 및 인코딩된 데이터의 Hex 덤프를 통해 이 프로세스를 직관적으로 만듭니다.",

    // FAQ 섹션
    faqTitle: "ASN.1 구조 파서 FAQ",

    faq1Question: "ASN.1 구조 파서는 어떤 형식을 지원하나요?",
    faq1Answer: "우리의 ASN.1 구조 파서는 PEM (Privacy Enhanced Mail), HEX (16진수), Base64 및 DER (Distinguished Encoding Rules) 바이너리 파일을 포함한 여러 입력 형식을 지원합니다. 이 유연성은 다양한 소스의 ASN.1 데이터를 형식 변환 없이 처리할 수 있게 합니다.",

    faq2Question: "ASN.1 파서로 X.509 인증서를 어떻게 분석하나요?",
    faq2Answer: "X.509 인증서를 분석하려면 입력 형식으로 'PEM'을 선택하고 인증서(BEGIN/END CERTIFICATE 마커 포함)를 입력 필드에 붙여넣기만 하면 됩니다. 파서는 자동으로 구조를 디코딩하고 인터랙티브 트리로 표시하며, 노드를 펼쳐 발급자, 유효 기간 및 확장과 같은 특정 인증서 필드를 검사할 수 있습니다.",

    faq3Question: "파싱된 ASN.1 구조를 문서화용으로 내보낼 수 있나요?",
    faq3Answer: "예, 설정 영역에서 \"JSON으로 내보내기\" 버튼을 클릭하여 파싱된 ASN.1 구조를 JSON으로 내보낼 수 있습니다. 이 기능은 구조 문서화, 동료와 공유 또는 자체 애플리케이션에서 추가 처리하는 데 유용합니다.",

    faq4Question: "ASN.1, DER 및 BER 인코딩의 차이점은 무엇인가요?",
    faq4Answer: "ASN.1 (Abstract Syntax Notation One)은 데이터 구조를 정의하는 언어이며, DER (Distinguished Encoding Rules) 및 BER (Basic Encoding Rules)은 ASN.1 구조를 바이너리 형식으로 변환하는 방법을 지정하는 특정 인코딩 규칙입니다. DER은 BER의 부분집합으로 각 ASN.1 값이 하나의 인코딩만 갖도록 보장하므로 암호화 응용 프로그램에서 선호됩니다. 우리의 파서는 주로 보안 응용 프로그램에서 가장 일반적으로 사용되는 DER 인코딩 ASN.1 구조를 처리합니다.",

    faq5Question: "ASN.1 파서는 객체 식별자(OID)를 어떻게 처리하나요?",
    faq5Answer: "ASN.1 구조 파서는 알려진 객체 식별자(OID)를 자동으로 인식하고 숫자 OID 값 옆에 읽을 수 있는 이름을 표시합니다. 예를 들어 '1.2.840.113549.1.1.11'은 'sha256WithRSAEncryption'으로 표시됩니다. 이 기능은 X.509 인증서 및 암호화 메시지와 같은 복잡한 구조에서 다양한 요소를 이해하는 데 도움이 됩니다.",

    // 튜토리얼 섹션
    tutorialTitle: "ASN.1 구조 파서 사용 방법",

    step1Title: "1단계: 입력 형식 선택",
    step1Content: "먼저 ASN.1 데이터에 적합한 입력 형식을 선택하세요. 입력 영역의 라디오 버튼을 사용하여 PEM, HEX, Base64 또는 DER 중에서 선택할 수 있습니다. 선택한 형식은 파서가 입력 데이터를 해석하는 방법을 결정합니다.",

    step2Title: "2단계: ASN.1 데이터 입력 또는 업로드",
    step2Content: "텍스트 필드에 ASN.1 인코딩 데이터를 입력하거나 업로드 영역을 통해 파일을 업로드하세요. PEM 형식의 경우 데이터에 올바른 BEGIN/END 마커가 포함되어 있는지 확인하세요. 16진수 입력의 경우 설정 영역에서 구성할 수 있는 다양한 구분 기호(공백, 콜론 등)를 사용할 수 있습니다.",
    step2Example: "-----BEGIN CERTIFICATE-----\nMIIDazCCAlOgAwIBAgIUXF3AmOAMqvdXdFLJV8C5c9K6cI8wDQYJKoZIhvcNAQEL\n...\n-----END CERTIFICATE-----",

    step3Title: "3단계: ASN.1 트리 구조 탐색",
    step3Content: "데이터가 파싱되면 ASN.1 트리 구조가 왼쪽 하단 영역에 나타납니다. 삼각형을 클릭하여 노드를 접고 펼칠 수 있습니다. 각 노드는 유형(예: SEQUENCE, INTEGER, OBJECT IDENTIFIER)과 값을 표시합니다. 색상 코딩은 다양한 ASN.1 유형을 구별하는 데 도움이 됩니다.",

    step4Title: "4단계: 16진수 표현 확인",
    step4Content: "\"Hex 덤프 표시\" 옵션이 활성화된 경우 오른쪽 영역에 ASN.1 데이터의 Hex 덤프가 표시됩니다. 트리의 요소에 마우스를 올리면 Hex 덤프에서 해당 바이트가 강조 표시되어 바이너리 인코딩을 이해하는 데 도움이 됩니다.",
    step4Example: "00000000 30 82 03 6a 30 82 02 52 a0 03 02 01 02 02 14 5c 0..j0..R........\\",

    step5Title: "5단계: 표시 옵션 구성",
    step5Content: "설정 영역에서 표시를 필요에 맞게 조정하세요. 옵션에는 Hex 덤프 표시 전환, 가독성을 위한 큰 데이터 값 생략, Hex 구분 기호 선택 및 유형별 색상 강조가 포함됩니다. 구조의 전체 보기를 위해 모든 노드를 한 번에 펼칠 수도 있습니다.",

    // 리소스 섹션
    resourcesTitle: "추가 리소스",

    relatedToolsTitle: "관련 도구",
    relatedTool1: "Base64 변환기 - Base64 데이터 인코딩 및 디코딩",
    relatedTool2: "Base64-Hex 변환기 - 사용자 정의 구분 기호 및 대소문자로 Base64와 16진수 간 변환",
    relatedTool3: "인증서 디코더 - X.509 인증서 상세 분석",

    externalResourcesTitle: "외부 리소스",
    externalResource1: "ITU-T ASN.1 소개 - ASN.1 표준 공식 문서",
    externalResource2: "RFC 5280 - 인터넷 X.509 공개 키 인프라 인증서 및 CRL 프로파일"
}
