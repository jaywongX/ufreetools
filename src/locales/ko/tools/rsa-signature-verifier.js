export default {
    name: "RSA 서명 및 검증",
    description: "RSA 개인 키로 데이터에 서명하고 공개 키로 서명을 검증하며, 다양한 형식과 알고리즘 지원",
    keyInput: "키 입력",
    privateKey: "개인 키 (서명용)",
    publicKey: "공개 키 (검증용)",
    privateKeyPlaceholder: "선택한 형식의 RSA 개인 키를 입력하세요",
    publicKeyPlaceholder: "선택한 형식의 RSA 공개 키 또는 인증서를 입력하세요",
    generateKeyPair: "키 쌍 생성",
    extractFromCert: "인증서에서 추출",
    clear: "지우기",
    keySize: "키 길이",
    hashAlgorithm: "해시 알고리즘",
    paddingScheme: "패딩 방식",
    keyFormat: "키 형식",
    inputFormat: "입력 형식",
    processMode: "처리 모드",
    originalData: "원본 데이터",
    preProcessed: "사전 처리됨",
    sign: "서명",
    verify: "검증",
    dataToSign: "서명할 데이터",
    dataToSignPlaceholder: "서명할 텍스트 또는 데이터 입력",
    preProcessedDataToSign: "서명할 해시 값",
    preProcessedDataToSignPlaceholder: "16진수 형식의 해시 값 입력",
    preprocessOnly: "사전 처리만 (해시 다이제스트 얻기)",
    preprocessedData: "사전 처리된 데이터",
    hashDigest: "해시 다이제스트 (1단계)",
    paddedData: "패딩된 데이터 (2단계)",
    showDetailed: "상세 정보 표시",
    showSimple: "간단한 정보 표시",
    signButton: "데이터 서명",
    signature: "서명 결과",
    dataToVerify: "검증할 데이터",
    dataToVerifyPlaceholder: "원본 서명된 텍스트 또는 데이터 입력",
    preProcessedDataToVerify: "검증할 해시 값",
    preProcessedDataToVerifyPlaceholder: "16진수 형식의 해시 값 입력",
    signatureToVerify: "검증할 서명",
    signatureToVerifyPlaceholder: "검증할 서명 입력 (선택한 형식)",
    verifyButton: "서명 검증",
    verificationResult: "검증 결과",
    notVerifiedYet: "아직 검증되지 않음",
    signatureValid: "서명 유효 ✓",
    signatureInvalid: "서명 무효 ✗✗",
    copy: "복사",
    copied: "클립보드에 복사됨",
    copyFailed: "클립보드 복사 실패",
    generatingKeys: "키 생성 중...",
    keysGenerated: "{bits}비트 RSA 키 쌍 생성 완료, 소요 시간 {time}초",
    keyGenerationFailed: "키 쌍 생성 실패",
    notValidCertificate: "유효한 X.509 인증서가 아닙니다",
    publicKeyExtracted: "인증서에서 공개 키 추출 완료",
    extractionFailed: "인증서에서 공개 키 추출 실패",
    preprocessingError: "사전 처리 중 오류 발생",
    paddingError: "패딩 적용 중 오류 발생",
    invalidPrivateKey: "잘못된 개인 키 형식",
    invalidPublicKey: "잘못된 공개 키 형식",
    invalidInputData: "잘못된 입력 데이터 형식",
    invalidSignature: "잘못된 서명 형식",
    invalidVerificationData: "잘못된 검증 데이터 형식",
    signatureCreated: "서명 생성 성공",
    signingFailed: "서명 생성 실패",
    verificationSuccess: "서명 검증 성공",
    verificationFailed: "서명 검증 실패",
    verificationError: "검증 과정 중 오류 발생",
    noSignatureToExport: "내보낼 서명이 없습니다",
    signatureExported: "서명이 {format} 파일로 내보내기 완료",
    signatureImported: "서명 가져오기 성공",
    signatureImportFailed: "서명 가져오기 실패",
    article:{
        title: "RSA 서명 검증 도구: 데이터 무결성을 보장하는 안전한 디지털 서명",
        
        introduction: {
            title: "RSA 서명 검증이란 무엇인가요?",
            p1: "RSA 서명 검증은 디지털 통신에서 데이터 무결성, 진위성 및 부인 방지를 보장하기 위한 암호화 과정입니다. 우리의 RSA 서명 검증 도구를 사용하면 RSA 개인 키로 데이터에 서명하고 해당 공개 키로 서명을 검증할 수 있어, 전송 중 정보가 변조되지 않았음을 확인하는 안전한 방법을 제공합니다.",
            p2: "데이터 보안이 중요한 시대에 RSA 디지털 서명은 전자 문서, 소프트웨어 배포 및 안전한 통신을 보호하는 산업 표준이 되었습니다. 이 도구는 PKCS#1 v1.5 및 PSS 패딩 방식을 구현하며 SHA-1, SHA-256, SHA-384 및 SHA-512를 포함한 다양한 해시 알고리즘을 지원합니다.",
            p3: "암호화 구현을 테스트하는 개발자, 디지털 서명을 검증하는 보안 전문가, 공개 키 암호화를 배우는 학생이든, 우리의 RSA 서명 검증 도구는 모든 디지털 서명 요구 사항을 충족하는 사용자 친화적인 인터페이스와 포괄적인 기능을 제공합니다.",
            p4: "RSA 서명 검증 과정은 데이터의 암호화 해시 값을 생성한 후 발신자의 개인 키로 암호화하는 방식으로 작동합니다. 해당 공개 키를 가진 사람은 누구나 서명을 검증할 수 있으며 동시에 데이터의 무결성과 발신자의 신원을 확인할 수 있습니다."
        },
        
        useCases: {
            title: "RSA 서명 검증의 일반적인 응용 분야",
            case1: "악성 소프트웨어 배포를 방지하기 위해 소프트웨어 다운로드 및 업데이트의 진위성 검증",
            case2: "안전한 네트워크 통신(HTTPS)에서 디지털 인증서 검증",
            case3: "법률 및 비즈니스 환경에서 전자 문서 및 계약서의 무결성 보장",
            case4: "통신 프로토콜 및 애플리케이션에서 안전한 메시지 인증 구현"
        },
        
        tutorial: {
            title: "RSA 서명 검증 도구 사용 방법",
            step1: {
            title: "1단계: 키 준비",
            description: "서명 또는 검증 전에 RSA 키가 필요합니다:",
            option1: "\"키 쌍 생성\" 버튼을 클릭하고 원하는 키 크기(보안을 위해 2048비트 이상 권장)를 선택하여 도구 내에서 직접 새 키 쌍 생성",
            option2: "기존 키를 PEM, DER, HEX 또는 Base64와 같은 다양한 형식으로 가져오기"
            },
            step2: {
            title: "2단계: 서명 설정 구성",
            description: "서명 작업에 적절한 설정 선택:",
            option1: "해시 알고리즘: SHA-1, SHA-256, SHA-384 또는 SHA-512 중 선택(SHA-256 이상 권장)",
            option2: "패딩 방식: PKCS#1 v1.5(가장 일반적) 또는 PSS(더 현대적이고 안전함) 중 선택",
            option3: "입력 형식: 입력이 일반 텍스트, 16진수 또는 Base64 인코딩인지 지정"
            },
            step3: {
            title: "3단계: 데이터 서명 또는 검증",
            description: "요구 사항에 따라:",
            option1: "서명: 서명 섹션에 데이터 입력 후 \"데이터 서명\" 클릭하여 서명 생성",
            option2: "검증: 검증 섹션에 원본 데이터와 서명 입력 후 \"서명 검증\" 클릭"
            },
            step4: {
            title: "4단계: 결과 확인 및 필요 시 내보내기",
            description: "서명 후 서명을 복사하거나 Base64, HEX, DER, PEM과 같은 다양한 형식으로 내보낼 수 있습니다. 검증의 경우 도구는 서명이 유효한지 무효한지 표시합니다."
            },
            note: "참고: 고급 사용자를 위해 이 도구는 해시 다이제스트 및 패딩된 데이터를 포함한 상세한 사전 처리 정보도 표시하여 RSA 서명 과정의 각 단계를 이해하는 데 도움을 줍니다."
        },
        
        faq: {
            title: "RSA 서명에 관한 자주 묻는 질문",
            q1: "PKCS#1 v1.5와 PSS 패딩 방식의 차이점은 무엇인가요?",
            a1: "PKCS#1 v1.5는 RSA 서명의 전통적인 패딩 방식으로 모든 시스템에서 널리 지원되지만 알려진 이론적 취약점이 있습니다. PSS(확률적 서명 방식)는 더 현대적인 방법으로 증명 가능한 보안 속성과 무작위 패딩을 제공하여 특정 암호 공격에 더 강력합니다. 대부분의 애플리케이션에서는 강력한 해시 알고리즘과 적절한 키 길이를 사용할 때 두 방식 모두 충분한 보안을 제공합니다.",
            
            q2: "RSA 서명에 어떤 해시 알고리즘을 사용해야 하나요?",
            a2: "현대 애플리케이션의 경우 충분한 보안을 보장하기 위해 최소한 SHA-256을 사용하는 것이 좋습니다. SHA-1은 암호학적으로 약한 것으로 간주되며 레거시 호환성에만 사용해야 합니다. 매우 민감한 애플리케이션이나 대량의 데이터에 서명할 경우 SHA-384 또는 SHA-512가 추가적인 보안 여유를 제공합니다.",
            
            q3: "안전한 RSA 서명을 위해 어떤 키 크기를 권장하나요?",
            a3: "2023년 기준으로 RSA 키는 최소 2048비트를 사용하는 것이 권장되며 장기적인 보안을 위해 3072 또는 4096비트가 선호됩니다. 2048비트 미만의 키는 현대 컴퓨팅 자원에 대한 인수분해 공격에 취약한 것으로 간주됩니다. 더 큰 키 크기는 서명 작업의 처리 시간을 증가시킨다는 점에 유의하세요.",
            
            q4: "이 도구로 사전 해시된 데이터를 처리할 수 있나요?",
            a4: "예, 우리 도구는 사전 해시된 데이터의 서명 및 검증을 지원합니다. 외부 도구로 이미 해시 다이제스트를 계산했거나 대용량 파일을 처리하면서 해시를 별도로 계산하려는 경우에 유용합니다. \"사전 해시\" 옵션을 선택하고 16진수 형식으로 해시 값을 제공하기만 하면 됩니다.",
            
            q5: "이 온라인 도구로 민감한 서명을 처리하는 것이 안전한가요?",
            a5: "이 도구는 모든 데이터를 브라우저 내에서 완전히 처리합니다 - 어떤 정보도 우리 서버로 전송되지 않습니다. 그러나 매우 민감하거나 프로덕션 환경의 암호화 작업의 경우 전용 보안 하드웨어(예: HSM)를 사용하거나 검증된 암호화 라이브러리를 제어된 환경에서 사용하는 것이 좋습니다.",
            a5_extra: "교육 목적, 테스트 또는 중요하지 않은 애플리케이션의 경우 이 도구는 RSA 서명을 처리하는 편리하고 안전한 방법을 제공합니다."
        },
        
        resources: {
            title: "관련 도구 및 자료",
            description: "이 보조 도구들을 사용하여 암호화 워크플로우를 강화하세요:",
            tool1: "해시 생성기 - 다양한 알고리즘으로 해시 다이제스트 생성",
            tool2: "Base64 인코더/디코더 - 원시 데이터와 Base64 형식 간 변환",
            tool3: "JWT 디버거 - JWT 토큰을 파싱, 검증 및 디버깅하는 온라인 도구",
            
            external: {
            title: "외부 자료",
            resource1: "RFC 8017 - PKCS #1: RSA 암호화 사양 버전 2.2",
            resource2: "NIST FIPS 186-4 - 디지털 서명 표준(DSS)"
            }
        },
        
        conclusion: {
            title: "결론",
            p1: "RSA 서명 검증은 여전히 현대 암호 보안의 초석으로, 데이터 무결성과 진위성을 보장하는 강력한 메커니즘을 제공합니다. 우리의 RSA 서명 검증 도구는 이 강력한 기술을 암호학 초보자부터 보안 전문가까지 모두가 접근할 수 있도록 합니다.",
            p2: "코드 서명, 문서 진위성 검증 또는 공개 키 암호화 학습 여부에 관계없이 이 도구는 RSA 서명을 처리하기 위한 포괄적인 기능 세트를 안전한 브라우저 기반 환경에서 제공합니다. 지금 RSA 서명 검증 도구를 사용하여 디지털 자산과 통신을 보호하세요."
        }
    }
}