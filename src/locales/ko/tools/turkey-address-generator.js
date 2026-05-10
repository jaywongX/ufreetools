export default {
    name: '터키 주소 생성기 - 실제 터키 주소, 신원 정보 및 연락처 세부 정보 온라인 생성',
    description: '실제 형식의 터키 주소, 신분증 번호, 전화번호, 신용카드 번호 및 완전한 신원 프로필을 만드는 무료 온라인 터키 주소 생성기. 주(州) 필터링, JSON/CSV 내보내기 형식을 지원하며 개인 정보 보호를 위해 브라우저에서 완전히 실행됩니다.',
    inputTitle: '생성 설정',
    outputTitle: '생성된 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 로드 및 생성',
    clearAll: '모두 지우기',
    noOutput: '아직 생성된 결과 없음',
    preview: '데이터 미리보기',
    
    // 지리적 필터링
    locationTitle: '지리적 필터링',
    selectProvince: '주(州) 선택',
    selectDistrict: '지역 선택',
    allProvinces: '모든 주(州)',
    allDistricts: '모든 지역',
    postalCodeLabel: '우편번호',
    validatePostalCode: '우편번호 확인',
    
    // 주소 유형
    addressTypeTitle: '주소 유형',
    addressTypeResidential: '주택 주소',
    addressTypeCommercial: '상업 주소',
    addressTypeVirtual: '가상 우체통',
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
    areaCode: '지역 번호',
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
    careerTitle: '직업 프로필',
    jobTitle: '직위',
    salary: '급여',
    companyName: '회사명',
    companySize: '회사 규모',
    industry: '산업',
    employmentStatus: '고용 상태',
    employmentFullTime: '정규직',
    employmentPartTime: '비정규직',
    
    // 신분증
    idCardTitle: '터키 신분증',
    idCardNumber: '신분증 번호',
    nationalId: '주민등록번호',
    serialNumber: '일련번호',
    checkDigit: '검증 숫자',
    
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
    exportIdCard: '신분증 이미지 생성',
    exportBusinessCard: '명함 생성',
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
    districtLabel: '지역',
    provinceLabel: '주(州)',
    postalCode: '우편번호',
    
    // 주소 형식
    addressNumber: '번지',
    addressFloor: '층',
    addressUnit: '호',
    commercialUnit: '(상업용 호)',
    turkey: '터키',
    postOfficeBox: '사서함',
    studentDormitory: '기숙사',
    teachingBuilding: '교육관',
    library: '도서관',
    buildingUnit: '동',
    apartment: '아파트',
    
    // 경고 메시지
    idCardImageAlert: '신분증 이미지 생성에는 canvas 구현이 필요합니다',
    businessCardAlert: '명함 생성에는 canvas 구현이 필요합니다',
    
    // 주(州) 이름 (주요 터키 주)
    provinces: {
        IST: '이스탄불',
        ANk: '앙카라',
        IZM: '이즈미르',
        BUR: '부르사',
        ANT: '안탈리아',
        ADN: '아다나',
        GAZ: '가지안테프',
        KON: '코니아',
        MRA: '메르신',
        KAY: '카이세리',
        ESK: '에스키셰히르',
        TRA: '트라브존',
        SAM: '삼순',
        MAL: '말라티아',
        DIA: '디야르바키르',
        ERZ: '에르주룸',
        VAN: '반',
        SIV: '시바스',
        TOK: '토크앗',
        COR: '초룸'
    },
    
    // 지역 이름 (이스탄불 예시)
    districtsData: {
        IST: {
            beyoglu: '베이올루',
            fatih: '파티히',
            kadikoy: '카드이쾨이',
            besiktas: '베식타슈',
            sisli: '시슬리',
            uskudar: '우스퀴다르',
            bakirkoy: '바키르쾨이',
            zeytinburnu: '제이틴부르누',
            beylikduzu: '베일릭드즈',
            pendik: '펜딕',
            maltepe: '말테페',
            kartal: '카르탈',
            tuzla: '트즐라',
            catalca: '차탈자'
        },
        ANK: {
            cankaya: '앙카야',
            yenimahalle: '예니마할레',
            altindag: '알틴다그',
            pursaklar: '푸르삭플라르',
            eryaman: '에리아만',
            etimesgut: '에티메스그트',
            sincan: '싱잔'
        },
        IZM: {
            konak: '코나크',
            karsiyaka: '카르시야카',
            bornova: '보르노바',
            cigli: '츠글리',
            bayrakli: '바이라크르',
            balcova: '발초바',
            guzelbahce: '구젤바흐체'
        },
        BUR: {
            nilufer: '닐루페르',
            osmangazi: '오스만가지',
            yildirim: '일드름',
            mudanya: '무다니아',
            gemlik: '젬릭'
        },
        ANT: {
            muratpasa: '무라트파샤',
            kepez: '케페즈',
            konyaalti: '코냐알트',
            aksu: '악수',
            dosenmeadi: '도센메아디'
        }
    },
    
    // 대학교 이름
    universities: {
        ITU: '이스탄불 공과대학교',
        ITU: '이스탄불 대학교',
        BOUN: '보아지치 대학교',
        METU: '중동 공과대학교',
        HU: '하제테페 대학교',
        ANU: '앙카라 대학교',
        DEU: '도쿠즈 에이ӱ르 대학교'
    },
    
    // CSV 열 이름
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '집 번호',
        building: '건물',
        floor: '층',
        unit: '호',
        district: '지역',
        province: '주(州)',
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