export default {
    name: '네덜란드 주소 생성기 - 실제 네덜란드 주소, 신원 정보 및 연락처 온라인 생성',
    description: '무료 온라인 네덜란드 주소 생성기로 실제 형식의 네덜란드 주소, ID 번호, 전화번호, 신용카드 번호 및 완전한 신원 프로필을 생성합니다. 주(州) 필터링, JSON/CSV 내보내기 형식을 지원하며 프라이버시 보호를 위해 브라우저에서 완전히 실행됩니다.',
    inputTitle: '생성 설정',
    outputTitle: '생성된 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 로드 후 생성',
    clearAll: '모두 지우기',
    noOutput: '아직 생성된 결과 없음',
    preview: '데이터 미리보기',
    
    // 지리 필터링
    locationTitle: '지리 필터링',
    selectRegion: '주(州) 선택',
    allRegions: '모든 주(州)',
    postalCodeLabel: '우편번호',
    validatePostalCode: '우편번호 확인',
    
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
    idCardTitle: '네덜란드 ID 카드',
    idCardNumber: 'ID 카드 번호',
    bsnNumber: 'BSN 번호',
    
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
    buildingLabel: '건물',
    floorLabel: '층',
    unitLabel: '호실',
    regionLabel: '주(州)',
    postalCode: '우편번호',
    
    // 주소 형식
    addressNumber: '번지',
    addressFloor: '층',
    addressUnit: '호',
    commercialUnit: '(상업용 호실)',
    netherlands: '네덜란드',
    postOfficeBox: '사서함',
    studentDormitory: '기숙사',
    teachingBuilding: '교육 건물',
    library: '도서관',
    buildingUnit: '동',
    apartment: '아파트',
    
    // 주(州) 이름 (네덜란드 12개 주)
    regions: {
        'Noord-Holland': '노르트홀란트',
        'Zuid-Holland': '위트홀란트',
        'Utrecht': '위트레흐트',
        'Gelderland': '헬데를란트',
        'Overijssel': '오버에이셀',
        'Flevoland': '플레볼란트',
        'Friesland': '프리슬란트',
        'Drenthе': '드렌트',
        'Groningen': '흐로닝언',
        'Limburg': '림뷔르흐',
        'Noord-Brabant': '노르트브라반트',
        'Zeeland': '젤란트'
    },
    
    // 대학교 이름
    universities: {
        'UvA': '암스테르담 대학교',
        'VU': '암스테르담 자유 대학교',
        'TU': '델프트 공과대학교',
        'UU': '위트레흐트 대학교',
        'EUR': '로테르담 에라스무스 대학교',
        'RUG': '흐로닝언 대학교',
        'WUR': '바헤닝언 대학교',
        'UL': '라이덴 대학교',
        'RU': '라드바우트 대학교',
        'UM': '마스트리히트 대학교'
    },
    
    // CSV 열 이름
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '집 번호',
        building: '건물',
        floor: '층',
        unit: '호실',
        region: '주(州)',
        postalCode: '우편번호',
        fullName: '전체 이름',
        gender: '성별',
        age: '나이',
        birthDate: '생년월일',
        phone: '전화',
        email: '이메일',
        cardType: '카드 유형',
        cardNumber: '카드 번호',
        idCardNumber: 'ID 카드 번호'
    }
};