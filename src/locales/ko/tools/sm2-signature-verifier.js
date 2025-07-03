export default {
    name: "SM2 서명 및 검증",
    description: "SM2 개인키로 데이터 서명 및 공개키로 서명 검증, 다양한 해시 알고리즘 지원",
    keyInput: "키 입력",
    privateKey: "개인키 (서명용)",
    publicKey: "공개키 (검증용)",
    privateKeyPlaceholder: "16진수 형식의 SM2 개인키를 입력하세요",
    publicKeyPlaceholder: "16진수 형식의 SM2 공개키를 입력하세요",
    generateKeyPair: "키 쌍 생성",
    clear: "지우기",
    keyGenError: "키 쌍 생성 오류",
    hashAlgorithm: "해시 알고리즘",
    processMode: "처리 모드",
    originalData: "원본 데이터",
    preHashed: "사전 해시",
    sign: "서명",
    verify: "검증",
    dataToSign: "서명할 데이터",
    dataToSignPlaceholder: "서명할 텍스트 또는 데이터 입력",
    preHashedDataToSign: "서명할 해시 값",
    preHashedDataToSignPlaceholder: "16진수 형식의 해시 값 입력",
    dataToVerify: "검증할 데이터",
    dataToVerifyPlaceholder: "검증할 텍스트 또는 데이터 입력",
    preHashedDataToVerify: "검증할 해시 값",
    preHashedDataToVerifyPlaceholder: "16진수 형식의 해시 값 입력",
    signatureToVerify: "검증할 서명",
    signatureToVerifyPlaceholder: "검증할 서명 입력",
    inputFormat: "입력 형식",
    outputFormat: "출력 형식",
    signatureFormat: "서명 형식",
    text: "텍스트",
    hex: "16진수",
    base64: "Base64",
    signature: "서명",
    copySignature: "서명 복사",
    signatureCopied: "서명이 클립보드에 복사되었습니다",
    copyError: "클립보드 복사 중 오류 발생",
    signError: "서명 생성 실패",
    verifyError: "서명 검증 실패",
    invalidInputData: "잘못된 입력 데이터",
    unsupportedInputFormat: "지원되지 않는 입력 형식",
    unsupportedHashAlgorithm: "지원되지 않는 해시 알고리즘",
    waitingForVerification: "검증을 위해 데이터와 서명을 입력하세요",
    verificationSuccess: "검증 성공! 서명이 유효합니다.",
    verificationFailed: "검증 실패! 서명이 유효하지 않습니다.",
    preHashedMustBeHex: "사전 해시 입력은 16진수 형식이어야 합니다",
    idParameter: "ID 매개변수",
    idValue: "ID 값",
    idPlaceholder: "ID 값 입력 (기본값: 1234567812345678)",
    idDescription: "SM2 알고리즘은 서명 생성 및 검증 과정에서 ID 값을 사용합니다. 기본값은 1234567812345678입니다.",
    signatureComponents: "서명 구성 요소 (R 및 S 값)",
    invalidKeyFormat: "잘못된 키 형식",
    invalidSignatureFormat: "잘못된 서명 형식",
    formatError: "형식 오류",
    signatureHashMismatch: "서명 해시 불일치 - 서명 시 사용한 데이터와 해시 알고리즘이 일치하는지 확인하세요",
    copy: "복사",
    export: "내보내기",
    signatureExported: "서명이 파일로 내보내졌습니다",
    exportError: "서명 내보내기 오류",
    privateKeyType: "개인키",
    publicKeyType: "공개키",
    signatureType: "서명",
    derEncodingFailed: "서명을 DER 형식으로 인코딩할 수 없음",
    invalidIdFormat: "잘못된 ID 형식",
    invalidDerFormat: "잘못된 DER 형식",
    invalidSignatureLength: "DER 인코딩에 적합하지 않은 서명 길이",
    zValue: "사전 처리 해시 값",
    zValueFormula: "Z 값 계산 공식",
    showDetails: "상세 보기",
    hideDetails: "상세 숨기기",
    zCalculationFailed: "Z 값 계산 실패",
    invalidPublicKeyFormat: "잘못된 공개키 형식",
    importPfx: "PFX/P12 파일 가져오기",
    enterPin: "PIN 코드/비밀번호 입력",
    pinPlaceholder: "PFX 파일의 비밀번호 입력",
    cancel: "취소",
    confirm: "확인",
    fileReadError: "파일 읽기 오류",
    pfxImportSuccess: "PFX 파일 가져오기 성공",
    pfxImportError: "PFX 파일 가져오기 오류",
    noPrivateKeyFound: "PFX 파일에서 개인키를 찾을 수 없음",
    invalidPrivateKeyFormat: "PFX 파일의 개인키 형식이 잘못됨",
    privateKeyExtractionFailed: "개인키 추출 실패",
    pkcs8ParseError: "PKCS#8 구조 파싱 오류",
    rsaKeyNotSupported: "RSA 키가 감지되었습니다. 이 도구는 SM2 키만 지원합니다.",
    rsaCertNotSupported: "RSA 인증서가 감지되었습니다. 이 도구는 SM2 인증서만 지원합니다.",
    failedToDerivePublicKey: "개인키에서 공개키를 파생할 수 없음",
    article: {
        title: "SM2 디지털 서명 도구 - 안전한 온라인 서명 생성 및 검증",
        introduction: {
            title: "SM2 디지털 서명이란?",
            p1: "SM2 디지털 서명은 중국 상용 암호 표준의 일부로, 암호 알고리즘입니다. 저희의 <strong>SM2 디지털 서명 검증 도구</strong>는 사용자 친화적인 인터페이스를 제공하여 SM2 타원 곡선 알고리즘을 사용하여 디지털 서명을 생성하고 검증합니다. 이 알고리즘은 256비트 RSA에 상응하는 강력한 보안성을 제공하면서 더 작은 키 크기를 사용합니다.",
            p2: "이 온라인 SM2 서명 도구는 전문 소프트웨어를 설치하지 않고도 디지털 데이터를 안전하게 서명하고 검증하는 과제를 해결하기 위해 설계되었습니다. SM2 서명 검증을 애플리케이션에 구현하는 개발자, 디지털 인증서를 검증하는 보안 전문가, 또는 중국 암호 표준을 준수해야 하는 기업이라면 저희 도구가 효율적인 솔루션을 제공합니다.",
            p3: "SM2 암호화 표준이 특히 중국 규정을 준수해야 하는 지역에서 전 세계적으로 적용 범위가 확대됨에 따라, 신뢰할 수 있는 <strong>SM2 디지털 서명 생성기 및 검증기</strong>를 보유하는 것은 국제 기업과 보안 전문가에게 매우 중요합니다."
        },
        applications: {
            title: "SM2 서명의 실제 적용 시나리오",
            p1: "SM2 서명 검증은 데이터 무결성과 신원 확인이 중요한 다양한 산업에서 실제로 적용되고 있습니다:",
            scenario1: {
                title: "핀테크 및 은행업",
                description: "금융 서비스 분야에서 <strong>온라인 뱅킹 SM2 서명 검증</strong>은 거래 보안을 보장하고 규정 준수를 유지하는 데 도움이 됩니다. SM 암호 표준을 준수해야 하는 지역에서 운영되는 은행은 SM2 서명을 사용하여 거래 요청을 인증하고 고객 신원을 확인하며 은행 간 통신을 보호합니다. SM2 서명을 신속하게 검증하는 기능은 금융 문서가 변조되지 않았고 합법적인 출처에서 왔음을 보장합니다."
            },
            scenario2: {
                title: "정부 및 공공 부문",
                description: "<strong>공식 문서에 보안 SM2 암호를 구현</strong>하는 정부 기관은 전자 기록의 진위를 확인하기 위해 디지털 서명에 의존합니다. 저희 도구는 디지털 인증서, 공식 통신 및 법률 문서의 서명 검증을 지원합니다. 이는 국가 암호 표준 준수를 요구하는 중국 정부 기관과 협력하는 국제 조직에게 특히 가치가 있습니다."
            },
            scenario3: {
                title: "크로스보더 전자상거래 및 국제 무역",
                description: "<strong>국경 간 무역 SM2 디지털 서명 검증</strong>을 수행하는 기업은 계약 보호, 선적 목록 확인 및 관세 문서 인증을 위해 암호 서명을 사용합니다. 저희 도구는 기업이 높은 보안 표준을 유지하면서도 기본 암호학 원리에 대한 전문 지식 없이 SM2 서명 검증 프로세스를 쉽게 구현할 수 있도록 합니다."
            }
        },
        tutorial: {
            title: "SM2 서명 도구 사용 방법",
            intro: "온라인 도구를 사용하여 SM2 디지털 서명을 생성하고 검증하는 단계별 가이드를 따르세요:",
            step1: {
                title: "1단계: 키 관리",
                description: "먼저 SM2 개인키(서명용)와 공개키(검증용)를 입력하세요. 기존 키를 다양한 형식(HEX, PEM, Base64 또는 DER)으로 붙여넣거나 \"키 쌍 생성\" 버튼을 클릭하여 도구 내에서 직접 새 키 쌍을 생성할 수 있습니다. 보안을 위해 모든 암호 작업은 브라우저에서 로컬로 실행됩니다 - 키는 절대 저희 서버로 전송되지 않습니다."
            },
            step2: {
                title: "2단계: ID 매개변수 구성",
                description: "SM2 서명 알고리즘에서 사용되는 고유 식별자인 ID 매개변수를 입력하세요. 기본값은 \"1234567812345678\"이지만 특정 요구 사항에 맞게 사용자 정의할 수 있습니다. ID를 텍스트, HEX 또는 Base64 형식으로 입력할 수 있습니다."
            },
            step3: {
                title: "3단계: 서명 생성",
                description: "서명 섹션에서 서명할 데이터를 입력하고 적절한 입력 형식(텍스트, HEX 또는 Base64)을 선택하세요. \"서명\" 버튼을 클릭하여 서명을 생성합니다. 도구는 전체 서명과 그 구성 요소(R 및 S 값)를 표시합니다. 선호하는 출력 형식(DER, HEX, Base64 또는 PEM)을 선택하고 서명을 쉽게 복사하거나 내보낼 수 있습니다."
            },
            step4: {
                title: "4단계: 서명 검증",
                description: "서명을 검증하려면 검증 섹션에서 원본 데이터와 검증할 서명을 입력하세요. 데이터와 서명에 대한 적절한 형식을 선택한 다음 \"검증\"을 클릭하세요. 도구는 주어진 데이터와 공개키에 대한 서명이 유효한지 즉시 확인하고 명확한 성공 또는 실패 메시지와 적용 가능한 상세 오류 정보를 표시합니다."
            }
        },
        specifications: {
            title: "기술 사양",
            p1: "저희 SM2 서명 도구는 중국 국가 암호 관리국에서 발표한 GM/T 0003-2012 표준에 정의된 SM2 타원 곡선 디지털 서명 알고리즘을 구현합니다. 이 도구는 이러한 표준을 완전히 준수하면서 사용 편의성을 위한 추가 기능을 제공합니다.",
            p2: "주요 기술 특징은 다음과 같습니다:",
            feature1: "표준 요구 사항에 따라 SM3 해시 알고리즘(256비트)을 고정 사용",
            feature2: "사용자 정의 ID 매개변수(텍스트/HEX/Base64) 지원",
            feature3: "다양한 시스템과의 호환성을 위한 여러 서명 출력 형식(DER/HEX/Base64/PEM)",
            feature4: "기술 검증을 위한 완전한 서명 구성 요소 표시(R 및 S 값)",
            feature5: "유연한 키 관리를 위한 다양한 키 형식(PEM/HEX/Base64/DER) 지원",
            feature6: "검증 문제 해결을 위한 상세한 오류 보고"
        },
        faq: {
            title: "자주 묻는 질문",
            q1: "SM2 서명은 다른 디지털 서명 알고리즘과 어떻게 다른가요?",
            a1: "SM2 디지털 서명은 타원 곡선 암호학(ECC)을 기반으로 하며 중국 상용 암호 표준의 일부입니다. RSA 서명과 비교하여 <strong>SM2 서명 암호화</strong>는 더 작은 키 크기에서 동등한 보안성을 제공하므로 더 효율적입니다. ECDSA와 같은 국제 표준과 달리 SM2는 다른 곡선을 사용하며 서명자의 신원(ID)을 서명 생성 과정에 포함시켜 추가적인 보안 계층을 제공합니다. SM2는 특히 중국 규정을 준수해야 하거나 중국 사이버 보안 프레임워크 내에서 운영되는 애플리케이션에 중요합니다.",

            q2: "SM2 서명 도구는 민감한 데이터에 대해 안전한가요?",
            a2: "예, 저희의 <strong>보안 SM2 서명 검증 도구</strong>는 클라이언트 측 JavaScript를 사용하여 브라우저에서 직접 모든 암호 작업을 실행합니다. 개인키와 민감한 데이터는 절대 사용자의 기기를 떠나지 않으며 저희 서버로 전송되지 않습니다. 이 구현은 SM2 디지털 서명 표준(GM/T 0003-2012)을 따르며 사양에 따라 SM3를 해시 처리에 사용합니다. 고도로 민감한 기업 애플리케이션의 경우, 저희 도구를 포함한 모든 온라인 도구를 프로덕션 환경에서 사용하기 전에 추가 검토를 권장합니다.",

            q3: "SM2 서명에서 ID 매개변수가 중요한 이유는 무엇인가요?",
            a3: "ID 매개변수는 <strong>사용자 정의 ID가 있는 SM2 디지털 서명 알고리즘</strong>의 독특한 특성으로, 이를 다른 ECC 기반 서명 체계와 구별합니다. 이는 서명 생성 과정에 대한 추가 입력으로 작용하며, 본질적으로 서명자의 신원을 서명에 바인딩합니다. 이는 특정 유형의 공격을 방지하고 인증 계층을 추가합니다. 대부분의 구현(저희 도구 포함)에서는 특정 ID가 필요하지 않을 때 기본값 '1234567812345678'을 사용하지만, 조직은 일반적으로 보안성과 추적성을 강화하기 위해 사용자 신원 또는 시스템 식별자와 관련된 사용자 정의 ID를 사용합니다.",

            q4: "중국 이외의 국제 비즈니스에서 SM2 서명을 사용할 수 있나요?",
            a4: "물론 가능합니다. SM2는 중국 암호 표준의 일부에서 비롯되었지만, 특히 중국에서 사업을 하거나 중국 기관과 협력 관계를 맺고 있는 기업을 위해 <strong>SM2 서명의 국제적 채택</strong>이 증가하고 있습니다. 저희 도구는 다양한 국제 시스템과 호환되는 여러 입력 및 출력 형식을 지원함으로써 국경 간 암호 작업을 용이하게 합니다. 국제 무역에 종사하는 기업의 경우 SM2 서명 사용은 중국 규제 요구 사항을 준수하는 동시에 글로벌 표준에 부합하는 강력한 암호 보안을 유지하는 데 도움이 될 수 있습니다.",

            q5: "서명 검증이 실패하면 어떻게 해야 하나요?",
            a5: "<strong>SM2 서명 검증 오류</strong>가 발생하면 다음 일반적인 문제를 확인하세요: 1) 서명에 사용된 개인키와 일치하는 올바른 공개키를 사용하고 있는지 확인; 2) ID 매개변수가 서명 생성 시 사용된 매개변수와 일치하는지 확인; 3) 검증 중인 데이터가 원본 서명된 데이터와 완전히 동일한지 확인(형식(텍스트/HEX/Base64) 포함); 4) 서명 형식(DER/HEX/Base64/PEM)을 올바르게 선택했는지 확인. 저희 도구는 특정 문제를 진단하는 데 도움이 되는 상세한 오류 메시지를 제공합니다. 지속적인 문제가 있는 경우 서명을 다시 생성하거나 키 쌍이 유효한지 확인해야 할 수 있습니다."
        },
        related: {
            title: "관련 암호학 도구",
            description: "이 보완적인 암호학 유틸리티로 보안 도구 키트를 강화하세요:",
            tool1: "<a href='https://www.ufreetools.com/tool/rsa-signature-verifier' target='_blank'>RSA 서명 검증기</a> - 널리 채택된 RSA 알고리즘을 사용하여 디지털 서명을 생성하고 검증합니다.",
            tool2: "<a href='https://www.ufreetools.com/tool/hash-calculator' target='_blank'>해시 계산기</a> - SM3를 포함한 다양한 알고리즘으로 보안 해시 값을 생성합니다.",
            tool3: "<a href='https://www.ufreetools.com/tool/x509-certificate-decoder' target='_blank'>인증서 디코더</a> - SM2 암호학을 사용하는 인증서를 포함한 X.509 인증서를 디코딩하고 검사합니다."
        }
    },
}