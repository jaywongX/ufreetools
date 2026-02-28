export default {
    title: 'MAC 주소 생성기: 온라인 랜덤 MAC 주소 및 네트워크 기기 식별자 생성',
    functionTitle: 'MAC 주소 생성기는 어떻게 유효한 네트워크 기기 식별자를 빠르게 생성하는 데 도움이 됩니까?',

    useCasesTitle: 'MAC 주소 생성기의 일반적인 사용 사례',
    useCase1: '<strong>네트워크 기기 테스트:</strong> MAC 주소 생성기는 네트워크 엔지니어와 개발자에게 IEEE 표준을 준수하는 대량의 MAC 주소를 제공하여 라우터, 스위치, 방화벽 등 네트워크 기기의 구성 테스트와 기능 검증에 사용됩니다.',
    useCase2: '<strong>소프트웨어 개발 및 디버깅:</strong> MAC 주소 생성기는 구조화된 MAC 주소 데이터를 일괄 생성하여 네트워크 애플리케이션 개발, IoT 프로젝트, 블루투스 기기 시뮬레이션의 테스트와 디버깅에 사용됩니다.',
    useCase3: '<strong>IoT 기기 시뮬레이션:</strong> MAC 주소 생성기는 개발자가 스마트 홈, 산업용 IoT, 커넥티드 카 프로젝트에서 기기 관리와 통신 테스트를 위한 가상 기기 식별자를 생성하는 데 도움을 줍니다.',
    useCase4: '<strong>보안 테스트 및 연구:</strong> MAC 주소 생성기는 보안 연구원에게 익명화된 MAC 주소를 제공하여 네트워크 보안 테스트, 침투 테스트, MAC 필터링 우회 연구에 사용됩니다.',
    useCase5: '<strong>교육 및 훈련:</strong> MAC 주소 생성기는 표준 형식의 MAC 주소를 생성하여 교사와 학생이 네트워크 계층 주소 구조, OUI 할당 규칙, 유니캐스트와 멀티캐스트 구분을 이해하는 데 도움을 줍니다.',
    useCase6: '<strong>데이터베이스 채우기:</strong> MAC 주소 생성기는 실제 패턴을 따르는 MAC 주소 데이터를 생성하여 네트워크 관리 시스템, 기기 모니터링 플랫폼, 자산 관리 시스템의 개발 및 테스트 데이터베이스에 사용됩니다.',

    tipTitle: '전문가 사용 팁',
    tipContent: 'MAC 주소 생성기를 사용할 때는 실제 요구 사항에 따라 적절한 형식과 제조사 접두사를 선택하는 것이 좋습니다. 실제 기기 시뮬레이션이 필요한 시나리오에서는 특정 제조사의 OUI 접두사를 선택하세요. 보안 테스트 시나리오에서는 실제 기기와의 충돌을 피하기 위해 로컬 관리 주소(LAA)를 사용하세요.',

    conclusion: '<p>네트워크 엔지니어링, 소프트웨어 개발 또는 보안 연구 등 어떤 분야이든 <strong>MAC 주소 생성기</strong>는 IEEE 표준을 준수하는 고품질 MAC 주소를 제공합니다. MAC 주소 생성기는 콜론, 하이픈, 점으로 구분된 형식을 포함한 다양한 출력 형식을 지원하며, 제조사 OUI 접두사 선택 기능을 제공하여 생성된 주소를 더욱 현실적으로 만듭니다. 모든 처리는 브라우저에서 로컬로 수행되어 데이터 유출 위험이 없습니다.</p>',

    faqTitle: 'MAC 주소 생성기에 대한 자주 묻는 질문',
    faq1Question: 'MAC 주소 생성기에서 생성된 주소가 실제이고 유효한가요?',
    faq1Answer: 'MAC 주소 생성기에서 생성된 MAC 주소는 IEEE 802 표준 형식을 완전히 준수하며, 적절한 비트 설정을 통해 주소 유효성을 보장합니다. 그러나 이는 실제 네트워크 기기와 연관되지 않은 랜덤 생성된 가상 주소입니다. MAC 주소 생성기는 테스트 및 개발 목적으로만 사용되며, 프로덕션 환경에서 실제 기기 식별자로 사용하기 위한 것이 아닙니다.',

    faq2Question: 'OUI 접두사란 무엇인가요? 제조사 접두사 기능은 어떻게 사용하나요?',
    faq2Answer: 'OUI(Organizationally Unique Identifier)는 MAC 주소의 처음 3바이트로, IEEE가 네트워크 기기 제조사에 할당합니다. MAC 주소 생성기는 일반적인 제조사의 OUI 접두사를 제공합니다. 특정 제조사를 선택하면 생성된 MAC 주소는 해당 제조사의 OUI를 사용하여 주소가 실제 기기처럼 보이게 됩니다. 사용자 정의 OUI 접두사를 입력할 수도 있습니다.',

    faq3Question: 'MAC 주소 생성기는 어떤 출력 형식을 지원하나요?',
    faq3Answer: 'MAC 주소 생성기는 여러 일반적인 형식을 지원합니다: Linux/Unix 시스템용 콜론 구분 형식(XX:XX:XX:XX:XX:XX), Windows 시스템용 하이픈 구분 형식(XX-XX-XX-XX-XX-XX), Cisco 기기용 점 구분 형식(XXXX.XXXX.XXXX), 일부 임베디드 시스템용 구분자 없는 형식(XXXXXXXXXXXX).',

    faq4Question: '유니캐스트 주소와 멀티캐스트 주소의 차이는 무엇인가요?',
    faq4Answer: 'MAC 주소의 첫 번째 바이트의 최하위 비트가 주소 유형을 결정합니다. 유니캐스트 주소는 이 비트가 0으로 설정되어 지점 간 통신에서 특정 네트워크 기기를 식별하는 데 사용됩니다. 멀티캐스트 주소는 이 비트가 1로 설정되어 그룹 통신에서 네트워크 기기 그룹을 식별하는 데 사용됩니다. MAC 주소 생성기는 두 유형 모두의 생성을 지원합니다.',

    faq5Question: '전역 고유 주소(UAA)와 로컬 관리 주소(LAA)의 차이는 무엇인가요?',
    faq5Answer: '전역 고유 주소(UAA, Universally Administered Address)는 기기 제조사가 할당하며, 첫 번째 바이트의 두 번째 최하위 비트가 0입니다. 로컬 관리 주소(LAA, Locally Administered Address)는 네트워크 관리자가 할당하며, 이 비트가 1입니다. MAC 주소 생성기는 두 유형 모두를 지원하며, LAA는 일반적으로 가상 머신과 테스트 환경에서 사용됩니다.',

    tutorialTitle: 'MAC 주소 생성기 사용 가이드',
    step1Title: '1단계: MAC 주소 형식 선택',
    step1Description: 'MAC 주소 생성기에서 먼저 출력 형식을 선택합니다. 콜론 구분 형식은 대부분의 Linux/Unix 시스템에 적합하고, 하이픈 구분 형식은 Windows 시스템에, 점 구분 형식은 Cisco 네트워크 기기에 적합합니다. 대문자 또는 소문자 출력도 선택할 수 있습니다.',
    step1Note: '다른 시스템과 기기는 다른 형식이 필요할 수 있습니다. 사용 사례에 따라 적절한 형식을 선택하세요.',

    step2Title: '2단계: 주소 유형 선택',
    step2Description: 'MAC 주소 생성기에서 주소 유형을 선택합니다: 유니캐스트 주소는 개별 기기를 식별하고, 멀티캐스트 주소는 기기 그룹을 식별합니다. 전역 고유 주소(UAA)는 실제 기기를 시뮬레이션하고, 로컬 관리 주소(LAA)는 가상 환경용입니다. 테스트 요구 사항에 따라 적절한 조합을 선택하세요.',
    step2Note: '대부분의 테스트 시나리오는 유니캐스트 + 전역 고유 주소 조합을 사용하고, 가상 머신 환경은 일반적으로 유니캐스트 + 로컬 관리 주소 조합을 사용합니다.',

    step3Title: '3단계: 제조사 접두사 선택 (선택사항)',
    step3Description: 'MAC 주소 생성기는 Apple, Cisco, Intel, Huawei 등 일반적인 네트워크 기기 제조사의 OUI 접두사를 제공합니다. 특정 제조사를 선택하면 생성된 MAC 주소는 해당 제조사의 실제 OUI 접두사를 사용하여 테스트 데이터가 더욱 현실적으로 됩니다. 사용자 정의 OUI 접두사를 입력할 수도 있습니다.',
    step3Note: '특정 제조사 기기를 시뮬레이션할 필요가 없다면 "랜덤 제조사"를 선택하여 완전히 랜덤한 MAC 주소를 생성하세요.',

    step4Title: '4단계: 생성 수량 설정',
    step4Description: 'MAC 주소 생성기에서 생성할 MAC 주소 수를 입력하고(1-1000), "주소 생성" 버튼을 클릭합니다. 시스템은 서버 응답을 기다리지 않고 브라우저에서 로컬로 모든 주소를 빠르게 생성합니다.',
    step4Note: '대량으로 일괄 생성할 때는 먼저 소량으로 테스트하여 형식과 유형이 요구 사항을 충족하는지 확인하세요.',

    step5Title: '5단계: 결과 보기 및 검증',
    step5Description: '생성이 완료되면 MAC 주소 생성기는 출력 영역에 생성된 모든 주소를 표시합니다. 각 레코드를 확장하여 제조사 이름, 주소 유형, 형식 등의 상세 정보를 볼 수 있습니다. 주소 형식과 유형이 요구 사항을 충족하는지 확인하세요.',
    step5Note: 'MAC 주소 생성기에서 생성된 모든 주소는 IEEE 802 표준을 준수하며 테스트 및 개발에 직접 사용할 수 있습니다.',

    step6Title: '6단계: 데이터 내보내기',
    step6Description: '데이터가 올바른지 확인한 후, MAC 주소 생성기에서 내보내기 형식을 선택합니다: JSON은 프로그램 처리용, CSV는 스프레드시트 분석용입니다. 개별 주소 또는 모든 주소를 클립보드에 복사하여 다른 애플리케이션에 붙여넣을 수도 있습니다.',
    step6Note: '내보낸 파일에는 생성된 모든 필드가 포함되어 후속 데이터 처리와 일괄 가져오기가 용이합니다.',

    successTitle: '생성 완료!',
    successContent: '축하합니다! MAC 주소 생성기를 성공적으로 마스터했습니다! 이제 네트워크 기기 테스트, 소프트웨어 개발, IoT 시뮬레이션 등 다양한 시나리오에서 IEEE 준수 MAC 주소를 빠르게 생성할 수 있습니다.',

    relatedToolsTitle: '관련 도구',
    relatedTool1Name: 'UUID 생성기',
    relatedTool1Description: '데이터베이스 기본 키 및 고유 식별을 위한 고유 식별자(UUID) 생성.',
    relatedTool1Url: 'https://www.ufreetools.com/tool/uuid-generator',

    relatedTool2Name: '홍콩 주소 생성기',
    relatedTool2Description: '온라인에서 실제 홍콩 주소, 신원 정보 및 연락처 세부 정보 생성.',
    relatedTool2Url: 'https://www.ufreetools.com/tool/hk-address-generator',

    relatedTool3Name: '랜덤 비밀번호 생성기',
    relatedTool3Description: '계정 보안 보호를 위한 안전하고 신뢰할 수 있는 랜덤 비밀번호 생성.',
    relatedTool3Url: 'https://www.ufreetools.com/tool/password-generator',

    relatedTool4Name: 'JSON 포맷터',
    relatedTool4Description: '읽기 쉽고 디버깅하기 쉽게 JSON 데이터 미화 및 검증.',
    relatedTool4Url: 'https://www.ufreetools.com/tool/json-formatter',

    reference1Name: 'IEEE OUI 데이터베이스',
    reference1Description: '공식 OUI 할당 정보 및 제조사 목록 조회.',
    reference1Url: 'https://standards-oui.ieee.org/',

    reference2Name: 'MAC 주소 - 위키백과',
    reference2Description: 'MAC 주소 구조, 유형 및 응용 시나리오에 대해 알아보기.',
    reference2Url: 'https://en.wikipedia.org/wiki/MAC_address',

    reference3Name: 'IEEE 802 표준',
    reference3Description: '네트워크 주소 표준 및 사양 심층 이해.',
    reference3Url: 'https://standards.ieee.org/ieee/802/10328/'
};
