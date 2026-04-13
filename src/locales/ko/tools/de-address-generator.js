export default {
    name: '독일 주소 생성기 - 온라인으로 실제 독일 주소 및 신원 정보 생성',
    description: '무료 온라인 독일 주소 생성기, 실제 형식의 독일 주소, 신분증 번호, 전화번호, 신용카드 번호 등 완전한 신원 프로필을 생성합니다. 주별 필터링, JSON/CSV 내보내기 지원, 완전 프론트엔드 실행으로 개인정보 보호.',
    inputTitle: '생성 구성',
    outputTitle: '생성 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 로드 및 생성',
    clearAll: '모두 지우기',
    noOutput: '생성 결과 없음',
    preview: '데이터 미리보기',
    
    // 지리적 필터
    locationTitle: '지리적 위치 필터',
    selectState: '주 선택',
    selectCity: '도시 선택',
    allStates: '모든 주',
    allCities: '모든 도시',
    
    // 주소 유형
    addressTypeTitle: '주소 유형',
    addressTypeResidential: '주거 주소',
    addressTypeCommercial: '상업 주소',
    addressTypePoBox: '사서함',
    addressTypeCampus: '대학 캠퍼스',
    
    // 신원 정보
    identityTitle: '신원 정보',
    fullName: '전체 이름',
    firstName: '이름',
    lastName: '성',
    gender: '성별',
    genderMale: '남성',
    genderFemale: '여성',
    age: '나이',
    birthDate: '생년월일',
    height: '키',
    weight: '몸무게',
    
    // 연락처
    contactTitle: '연락처',
    phoneNumber: '전화번호',
    phoneType: '전화 유형',
    phoneTypeMobile: '휴대전화',
    phoneTypeLandline: '유선전화',
    areaCode: '지역번호',
    email: '이메일 주소',
    tempEmail: '임시 이메일',
    
    // 신용카드
    creditCardTitle: '신용카드 정보',
    cardType: '카드 유형',
    cardNumber: '카드 번호',
    expiryDate: '만료일',
    cvv: 'CVV',
    bankBin: '은행 BIN 코드',
    
    // 경력
    careerTitle: '경력 프로필',
    jobTitle: '직위',
    salary: '급여',
    companyName: '회사명',
    companySize: '회사 규모',
    industry: '산업',
    employmentStatus: '고용 상태',
    
    // 신분증
    idCardTitle: '독일 신분증(Personalausweis)',
    idCardNumber: '신분증 번호',
    
    // 디지털 지문
    fingerprintTitle: '디지털 지문',
    os: '운영체제',
    osVersion: 'OS 버전',
    browser: '브라우저',
    userAgent: 'User Agent',
    screenResolution: '화면 해상도',
    timezone: '시간대',
    guid: 'GUID',
    ipAddress: 'IP 주소',
    macAddress: 'MAC 주소',
    cookiePolicy: '쿠키 정책',
    
    // 내보내기 옵션
    exportTitle: '내보내기 형식',
    exportJson: 'JSON 내보내기',
    exportCsv: 'CSV 내보내기',
    downloadBtn: '다운로드',
    copyBtn: '복사',
    viewDetails: '상세보기',
    
    // 일괄 생성
    batchTitle: '일괄 생성',
    quantityLabel: '생성 수량',
    quantityPlaceholder: '수량 입력 (1-100)',
    
    // 메시지
    generating: '생성 중...',
    generated: '생성 완료',
    copySuccess: '클립보드에 복사됨',
    downloadSuccess: '다운로드 성공',
    invalidQuantity: '1-100 사이의 숫자를 입력하세요',
    
    // 결과 표시
    resultCount: '{count}개 레코드 생성됨',
    resultSummary: '결과 요약',
    showAll: '모두 표시',
    collapse: '접기',
    
    // 생성 옵션
    generateOptionsTitle: '생성 옵션',
    
    // 레코드 표시
    recordLabel: '레코드 #{num}',
    addressLabel: '주소',
    streetLabel: '거리',
    houseNumberLabel: '번지',
    postalCodeLabel: '우편번호',
    cityLabel: '도시',
    stateLabel: '주',
    
    // 주소 형식
    commercialArea: '상업 지구',
    studentDormitory: '학생 기숙사',
    library: '도서관',
    
    // 독일 16개 주
    states: {
        BW: '바덴뷔르템베르크주',
        BY: '바이에른주',
        BE: '베를린',
        BB: '브란덴부르크주',
        HB: '브레멘',
        HH: '함부르크',
        HE: '헤센주',
        MV: '메클렌부르크포어포메른주',
        NI: '니더작센주',
        NW: '노르트라인베스트팔렌주',
        RP: '라인란트팔츠주',
        SL: '자를란트주',
        SN: '작센주',
        ST: '작센안할트주',
        SH: '슐레스비히홀슈타인주',
        TH: '튀링겐주'
    },
    
    // 대학 이름
    universities: {
        TUM: '뮌헨 공과대학교',
        LMU: '뮌헨 대학교',
        HU: '베를린 훔볼트 대학교',
        TU: '베를린 공과대학교',
        UniHeidelberg: '하이델베르크 대학교'
    },
    
    // CSV 열 이름
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '번지',
        postalCode: '우편번호',
        city: '도시',
        state: '주',
        fullName: '이름',
        gender: '성별',
        age: '나이',
        birthDate: '생년월일',
        phone: '전화',
        email: '이메일',
        cardType: '카드 유형',
        cardNumber: '카드 번호',
        idCardNumber: '신분증 번호'
    }
};
