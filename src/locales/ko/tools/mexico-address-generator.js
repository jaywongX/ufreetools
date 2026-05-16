export default {
    name: '멕시코 주소 생성기 - 실제 멕시코 주소, 신원 정보 및 연락처 온라인 생성',
    description: '무료 온라인 멕시코 주소 생성기로 실제 형식의 멕시코 주소, RFC/CURP 신분증 번호, 전화번호, 신용카드 번호 및 완전한 신원 프로필을 생성합니다. 주 필터링, JSON/CSV 내보내기 형식을 지원하며 프라이버시 보호를 위해 브라우저에서 완전히 실행됩니다.',
    inputTitle: '생성 설정',
    outputTitle: '생성된 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 로드 후 생성',
    clearAll: '모두 지우기',
    noOutput: '아직 생성된 결과 없음',
    preview: '데이터 미리보기',
    
    // 지리 필터링
    locationTitle: '지리 필터링',
    selectState: '주 선택',
    selectCity: '도시 선택',
    allStates: '모든 주',
    allCities: '모든 도시',
    
    // 주소 유형
    addressTypeTitle: '주소 유형',
    addressTypeResidential: '주거지 주소',
    addressTypeCommercial: '상업 주소',
    addressTypeVirtual: '가상 사서함',
    addressTypeCampus: '대학교 캠퍼스',
    
    // 신원 정보
    identityTitle: '신원 정보',
    fullName: '전체 이름',
    gender: '성별',
    genderMale: '남성',
    genderFemale: '여성',
    age: '나이',
    birthDate: '생년월일',
    zodiac: '별자리',
    height: '키',
    weight: '체중',
    
    // 연락처 정보
    contactTitle: '연락처 정보',
    phoneNumber: '전화번호',
    phoneType: '전화 유형',
    phoneTypeMobile: '휴대폰',
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
    bankBin: '은행 BIN',
    
    // 경력
    careerTitle: '경력 프로필',
    jobTitle: '직위',
    salary: '급여',
    companyName: '회사명',
    companySize: '회사 규모',
    industry: '산업',
    employmentStatus: '고용 상태',
    employmentFullTime: '정규직',
    employmentPartTime: '파트타임',
    
    // ID 카드
    idCardTitle: '멕시코 신분증',
    rfcLabel: 'RFC (연방 납세자 등록 번호)',
    curpLabel: 'CURP (인구 등록 고유 키)',
    
    // 디지털 지문
    fingerprintTitle: '디지털 지문',
    os: '운영체제',
    osVersion: 'OS 버전',
    browser: '브라우저',
    userAgent: '사용자 에이전트',
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
    quantityLabel: '수량',
    quantityPlaceholder: '수량 입력 (1-100)',
    
    // 알림 메시지
    generating: '생성 중...',
    generated: '생성 완료',
    copySuccess: '클립보드에 복사됨',
    downloadSuccess: '다운로드 성공',
    invalidQuantity: '1-100 사이의 숫자를 입력하세요',
    
    // 결과 표시
    resultCount: '{count} 개의 레코드 생성됨',
    resultSummary: '결과 요약',
    showAll: '모두 표시',
    collapse: '접기',
    
    // 생성 옵션
    generateOptionsTitle: '생성 옵션',
    
    // 레코드 표시
    recordLabel: '레코드 #{num}',
    addressLabel: '주소',
    streetLabel: '거리',
    houseNumberLabel: '집 번호',
    neighborhoodLabel: '街区',
    postalCodeLabel: '우편번호',
    cityLabel: '도시',
    stateLabel: '주',
    
    // 주소 형식
    commercialAddress: '(상업 주소)',
    postOfficeBox: '사서함',
    studentDormitory: '기숙사',
    teachingBuilding: '교육 건물',
    library: '도서관',
    
    // 멕시코 32개 주
    states: {
        AGS: '아과스칼리엔테스 주',
        BCN: '바하 캘리포니아 주',
        BCS: '남바하 캘리포니아 주',
        CAMP: '캄페체 주',
        COAH: '코아우일라 주',
        COL: '콜리마 주',
        CHIS: '치아파스 주',
        CHIH: '치와와 주',
        CDMX: '멕시코시티',
        DUR: '두랑고 주',
        GTO: '과나후아토 주',
        GRO: '게레로 주',
        HGO: '이달고 주',
        JAL: '할리스코 주',
        MEX: '멕시코 주',
        MIC: '미초아칸 주',
        MOR: '모렐로스 주',
        NAY: '나야리트 주',
        NLE: '누에보레온 주',
        OAX: '와하카 주',
        PUE: '푸에블라 주',
        QRO: '케레타로 주',
        QROO: '킨타나로오 주',
        SLP: '산루이스포토피 주',
        SIN: '시날로아 주',
        SON: '소노라 주',
        TAB: '타바스코 주',
        TAM: '타마울리파스 주',
        TLAX: '틀락스칼라 주',
        VER: '베라크루스 주',
        YUC: '유카탄 주',
        ZAC: '사카테카스 주'
    },
    
    // 대학교 이름
    universities: {
        UNAM: '멕시코 국립 자치 대학교',
        IPN: '국립 공과 대학교',
        UdeG: '과달라하라 대학교',
        UANL: '누에보레온 자치 대학교'
    },
    
    // CSV 열 이름
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '집 번호',
        neighborhood: '街区',
        postalCode: '우편번호',
        city: '도시',
        state: '주',
        fullName: '전체 이름',
        gender: '성별',
        age: '나이',
        birthDate: '생년월일',
        phone: '전화',
        email: '이메일',
        cardType: '카드 유형',
        cardNumber: '카드 번호',
        rfc: 'RFC',
        curp: 'CURP'
    }
};