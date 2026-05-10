export default {
    name: '이탈리아 주소 생성기 - 실제 이탈리아 주소, 신원 정보 및 연락처 세부 정보를 온라인으로 생성',
    description: '무료 온라인 이탈리아 주소 생성기로 실제 형식의 이탈리아 주소, Codice Fiscale 세금 번호, 전화번호, 신용카드 번호 및 완전한 신원 프로필을 생성합니다. 지역 필터링, JSON/CSV 내보내기 형식을 지원하며 프라이버시 보호를 위해 브라우저에서 완전히 실행됩니다.',
    inputTitle: '생성 설정',
    outputTitle: '생성된 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 로드 및 생성',
    clearAll: '모두 지우기',
    noOutput: '아직 생성된 결과가 없습니다',
    preview: '데이터 미리보기',
    
    // 지리적 필터링
    locationTitle: '지리적 필터링',
    selectRegion: '지역 선택',
    allRegions: '모든 지역',
    postalCodeLabel: '우편번호',
    validatePostalCode: '우편번호 확인',
    
    // 주소 유형
    addressTypeTitle: '주소 유형',
    addressTypeResidential: '거주지 주소',
    addressTypeCommercial: '상업용 주소',
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
    expiryDate: '만료일',
    cvv: 'CVV',
    bankBin: '은행 BIN',
    
    // 경력
    careerTitle: '경력 프로필',
    jobTitle: '직책',
    salary: '급여',
    companyName: '회사명',
    companySize: '회사 규모',
    industry: '산업',
    employmentStatus: '고용 상태',
    employmentFullTime: '정규직',
    employmentPartTime: '파트타임',
    
    // 신분증
    idCardTitle: '이탈리아 신분증',
    idCardNumber: '신분증 번호',
    codiceFiscale: 'Codice Fiscale',
    
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
    viewDetails: '세부 정보 보기',
    
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
    unitLabel: '호',
    regionLabel: '지역',
    postalCode: '우편번호',
    
    // 주소 형식
    addressNumber: '번',
    addressFloor: '층',
    addressUnit: '호',
    commercialUnit: '(상업용 호)',
    italy: '이탈리아',
    postOfficeBox: '사서함',
    studentDormitory: '학생 기숙사',
    teachingBuilding: '교육 건물',
    library: '도서관',
    buildingUnit: '동',
    apartment: '아파트',
    
    // 지역명 (이탈리아 20개 지역)
    regions: {
        'Lombardia': '롬바르디아',
        'Lazio': '라치오',
        'Campania': '캄파니아',
        'Sicilia': '시칠리아',
        'Veneto': '베네토',
        'Emilia-Romagna': '에밀리아-로마냐',
        'Piemonte': '피에몬테',
        'Toscana': '토스카나',
        'Puglia': '풀리아',
        'Calabria': '칼라브리아',
        'Sardegna': '사르데냐',
        'Friuli Venezia Giulia': '프리울리 베네치아 줄리아',
        'Liguria': '리구리아',
        'Marche': '마르케',
        'Abruzzo': '아브루초',
        'Molise': '몰리세',
        'Basilicata': '바실리카타',
        'Umbria': '움브리아',
        "Valle d'Aosta": "발레 다오스타",
        'Trentino-Alto Adige': '트렌티노-알토 아디제'
    },
    
    // 대학명
    universities: {
        'Politecnico di Milano': '폴리테크니코 디 밀라노',
        'Sapienza': '로마 라 사피엔자 대학교',
        'Bocconi': '보코니 대학교',
        'Politecnico di Torino': '폴리테크니코 디 토리노',
        'UniMI': '밀라노 대학교',
        'UniFI': '피렌체 대학교',
        'UniBO': '볼로냐 대학교',
        'UniPd': '파도바 대학교',
        'UniNa': '나폴리 페데리코 2세 대학교',
        'UniTo': '토리노 대학교'
    },
    
    // CSV 열 이름
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '집 번호',
        building: '건물',
        floor: '층',
        unit: '호',
        region: '지역',
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