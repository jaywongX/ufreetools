export default {
    name: '카자흐스탄 주소 생성기 - 실제 카자흐스탄 주소, 신원 정보 및 연락처 세부정보 온라인 생성',
    description: '실제 형식의 카자흐스탄 주소, 신분증 번호(ИИН), 전화번호, 신용카드 번호 및 완전한 신원 프로필을 생성하는 무료 온라인 카자흐스탄 주소 생성기. 지역 필터링, JSON/CSV 내보내기 형식을 지원하며 개인정보 보호를 위해 브라우저에서 완전히 작동합니다.',
    inputTitle: '생성 설정',
    outputTitle: '생성된 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 로드 및 생성',
    clearAll: '모두 지우기',
    noOutput: '아직 생성된 결과 없음',
    preview: '데이터 미리보기',
    
    // 지리적 필터링
    locationTitle: '지리적 필터링',
    selectRegion: '지역/도시 선택',
    selectCity: '도시 선택',
    allRegions: '모든 지역/도시',
    allCities: '모든 도시',
    postalCodeLabel: '우편번호',
    
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
    weight: '몸무게',
    
    // 연락처 정보
    contactTitle: '연락처 정보',
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
    expiryDate: '유효기간',
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
    
    // 신분증
    idCardTitle: '카자흐스탄 신분증 (ИИН)',
    idCardNumber: '신분증 번호 (ИИН)',
    
    // 디지털 지문
    fingerprintTitle: '디지털 지문',
    os: '운영체제',
    osVersion: '시스템 버전',
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
    viewDetails: '세부정보 보기',
    
    // 일괄 생성
    batchTitle: '일괄 생성',
    quantityLabel: '수량',
    quantityPlaceholder: '수량 입력 (1-100)',
    
    // 알림 메시지
    generating: '생성 중...',
    generated: '생성 완료',
    copySuccess: '클립보드에 복사됨',
    downloadSuccess: '다운로드 성공',
    invalidQuantity: '1에서 100 사이의 숫자를 입력하세요',
    
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
    houseNumberLabel: '집 번호',
    buildingLabel: '건물',
    floorLabel: '층',
    unitLabel: '유닛',
    regionLabel: '지역/도시',
    
    // 주소 형식
    addressFloor: '층',
    addressUnit: '유닛',
    commercialUnit: '(상업 유닛)',
    postOfficeBox: '사서함',
    studentDormitory: '학생 기숙사',
    teachingBuilding: '교육 건물',
    library: '도서관',
    buildingUnit: '건물',
    
    // 지역명 (카자흐스탄 지역)
    regions: {
        NUR: '누르스ולטאן (아스타나)',
        ALA: '알마티',
        SHY: '시ম켄트',
        AKM: '아크мол라 주',
        AKT: '악토베 주',
        ATY: '아티라우 주',
        MAN: '망기스타우 주',
        PAV: '파블로다르 주',
        SKZ: '남카자흐스탄 주',
        KUS: '코스타나이 주',
        KAR: '카라ガン다 주',
        ZAP: '서카자흐스탄 주',
        MNG: '잠빌 주',
        TUR: '알마티 주',
        YUZ: '크즐로르다 주',
        VOS: '동카자흐스탄 주',
        ZHE: '제즈카즈간 주'
    },
    
    // 도시 데이터
    cities: {
        NUR: {
            nursultan: '누르스ולטאן'
        },
        ALA: {
            almaty: '알마티'
        },
        SHY: {
            shymkent: '시-mken-т'
        },
        AKM: {
            akmola: '아크мол라',
            kokshetau: '콕세타우'
        },
        AKT: {
            aktobe: '악토베'
        },
        ATY: {
            atyrau: '아티라우'
        },
        MAN: {
            aktau: '아크타우'
        },
        PAV: {
            pavlodar: '파블로다르'
        },
        SKZ: {
            turkestan: '투르케스탄'
        },
        KUS: {
            kostanay: '코스타나이'
        },
        KAR: {
            karaganda: '카라ガン다'
        },
        ZAP: {
            uralsk: '우랄스크'
        },
        MNG: {
            taraz: '타라즈'
        },
        TUR: {
            taldykorgan: '탈디코르간'
        },
        YUZ: {
            kyzylorda: '크즐로르다'
        },
        VOS: {
            'ust-kamenogorsk': '우스트카메노고르스크'
        },
        ZHE: {
            temirtau: '테미르타우'
        }
    },
    
    // CSV 열 이름
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '집 번호',
        building: '건물',
        floor: '층',
        unit: '유닛',
        region: '지역/도시',
        postalCode: '우편번호',
        fullName: '전체 이름',
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