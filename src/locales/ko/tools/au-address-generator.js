export default {
    name: '호주 주소 생성기 - 온라인으로 실제 호주 주소, 신원 정보 및 연락처 생성',
    description: '무료 온라인 호주 주소 생성기. 실제 형식의 호주 주소, 전화번호, 신용카드 번호 및 완전한 신원 프로필을 생성합니다. 주별 필터링, JSON/CSV 내보내기, 프론트엔드에서 실행하여 개인정보 보호.',
    inputTitle: '생성 설정',
    outputTitle: '생성 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 로드 및 생성',
    clearAll: '모두 지우기',
    noOutput: '아직 결과가 없습니다',
    preview: '데이터 미리보기',
    
    // 위치 필터
    locationTitle: '위치 필터',
    selectState: '주/준주 선택',
    selectCity: '도시 선택',
    allStates: '모든 주/준주',
    allCities: '모든 도시',
    postalCodeLabel: '우편번호',
    validatePostalCode: '우편번호 검증',
    
    // 주소 유형
    addressTypeTitle: '주소 유형',
    addressTypeResidential: '주거 주소',
    addressTypeCommercial: '상업 주소',
    addressTypePoBox: '사서함',
    addressTypeCampus: '대학 캠퍼스',
    
    // 신원 정보
    identityTitle: '신원 정보',
    fullName: '성명',
    gender: '성별',
    genderMale: '남성',
    genderFemale: '여성',
    age: '나이',
    birthDate: '생년월일',
    zodiac: '별자리',
    height: '키',
    weight: '몸무게',
    
    // 연락처
    contactTitle: '연락처 정보',
    phoneNumber: '전화번호',
    phoneType: '전화 유형',
    phoneTypeMobile: '휴대전화',
    phoneTypeLandline: '일반전화',
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
    salary: '연봉',
    companyName: '회사명',
    companySize: '회사 규모',
    industry: '산업',
    employmentStatus: '고용 상태',
    employmentFullTime: '정규직',
    employmentPartTime: '시간제',
    
    // 세금 번호
    taxFileTitle: '호주 세금 번호',
    taxFileNumber: '세금 번호(TFN)',
    
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
    
    // 내보내기
    exportTitle: '내보내기 형식',
    exportJson: 'JSON 내보내기',
    exportCsv: 'CSV 내보내기',
    downloadBtn: '다운로드',
    copyBtn: '복사',
    viewDetails: '상세 보기',
    
    // 일괄 생성
    batchTitle: '일괄 생성',
    quantityLabel: '수량',
    quantityPlaceholder: '수량 입력 (1-100)',
    
    // 메시지
    generating: '생성 중...',
    generated: '생성 완료',
    copySuccess: '클립보드에 복사됨',
    downloadSuccess: '다운로드 성공',
    invalidQuantity: '1-100 사이의 숫자를 입력하세요',
    
    // 결과
    resultCount: '{count}개의 레코드 생성됨',
    resultSummary: '결과 요약',
    showAll: '모두 보기',
    collapse: '접기',
    
    // 옵션
    generateOptionsTitle: '생성 옵션',
    
    // 레코드 표시
    recordLabel: '레코드 #{num}',
    addressLabel: '주소',
    streetLabel: '거리',
    streetNumberLabel: '번지',
    suburbLabel: '교외',
    stateLabel: '주',
    postcodeLabel: '우편번호',
    unitLabel: '유닛',
    
    // 주소 형식
    addressNumber: '번지',
    addressFloor: '층',
    addressUnit: '호',
    commercialUnit: '(상업)',
    australia: '호주',
    postOfficeBox: '사서함',
    studentDormitory: '학생 기숙사',
    academicBuilding: '학술 건물',
    library: '도서관',
    buildingUnit: '동',
    
    // 주 이름
    states: {
        NSW: '뉴사우스웨일스주',
        VIC: '빅토리아주',
        QLD: '퀸즐랜드주',
        WA: '서호주',
        SA: '남호주',
        TAS: '태즈메이니아주',
        ACT: '오스트레일리아 수도 준주',
        NT: '노던준주'
    },
    
    // 도시 이름
    cities: {
        NSW: {
            sydney: '시드니',
            newcastle: '뉴캐슬',
            wollongong: '울런공',
            centralCoast: '센트럴코스트',
            canberra: '캔버라'
        },
        VIC: {
            melbourne: '멜버른',
            geelong: '질롱',
            ballarat: '밸러럿',
            bendigo: '벤디고'
        },
        QLD: {
            brisbane: '브리즈번',
            goldCoast: '골드코스트',
            sunshineCoast: '선샤인코스트',
            townsville: '타운즈빌',
            cairns: '케언스'
        },
        WA: {
            perth: '퍼스',
            fremantle: '프리맨틀',
            mandurah: '만두라'
        },
        SA: {
            adelaide: '애들레이드',
            mountGambier: '마운트감비어',
            whyalla: '와이앨라'
        },
        TAS: {
            hobart: '호바트',
            launceston: '론세스턴',
            devonport: '데번포트'
        },
        ACT: {
            canberra: '캔버라',
            queanbeyan: '퀸비얀'
        },
        NT: {
            darwin: '다윈',
            aliceSprings: '앨리스스프링스',
            palmerston: '파머스턴'
        }
    },
    
    // 대학
    universities: {
        USYD: '시드니 대학교',
        UNSW: '뉴사우스웨일스 대학교',
        UMELB: '멜버른 대학교',
        UQ: '퀸즐랜드 대학교',
        ANU: '호주 국립 대학교'
    },
    
    // CSV 헤더
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        streetNumber: '번지',
        suburb: '교외',
        state: '주',
        postcode: '우편번호',
        fullName: '성명',
        gender: '성별',
        age: '나이',
        birthDate: '생년월일',
        phone: '전화',
        email: '이메일',
        cardType: '카드 유형',
        cardNumber: '카드 번호',
        taxFileNumber: '세금 번호'
    }
};
