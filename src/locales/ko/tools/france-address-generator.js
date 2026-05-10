export default {
    name: '프랑스 주소 생성기 - 실제 프랑스 주소, 신원 정보 및 연락처 온라인 생성',
    description: '무료 온라인 프랑스 주소 생성기로 실제 형식의 프랑스 주소, ID 번호, 전화번호, 신용카드 번호 및 완전한 신원 프로필을 생성합니다. 부 필터링, JSON/CSV 내보내기 형식을 지원하며 프라이버시 보호를 위해 브라우저에서 완전히 실행됩니다.',
    inputTitle: '생성 설정',
    outputTitle: '생성된 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 로드 후 생성',
    clearAll: '모두 지우기',
    noOutput: '아직 생성된 결과 없음',
    preview: '데이터 미리보기',
    
    // 지리 필터링
    locationTitle: '지리 필터링',
    selectRegion: '지역 선택',
    selectDepartment: '부서 선택',
    allRegions: '모든 지역',
    allDepartments: '모든 부서',
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
    idCardTitle: '프랑스 ID 카드',
    idCardNumber: 'ID 카드 번호',
    nirNumber: 'NIR 번호',
    serialNumber: '시리얼 번호',
    checkKey: '검증 키',
    
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
    exportIdCard: 'ID 카드 이미지 생성',
    exportBusinessCard: '명함 생성',
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
    departmentLabel: '부서',
    regionLabel: '지역',
    postalCode: '우편번호',
    
    // 주소 형식
    addressNumber: '번지',
    addressFloor: '층',
    addressUnit: '호',
    commercialUnit: '(상업용 호실)',
    france: '프랑스',
    postOfficeBox: '사서함',
    studentDormitory: '기숙사',
    teachingBuilding: '교육 건물',
    library: '도서관',
    buildingUnit: '동',
    apartment: '아파트',
    
    // 알림 메시지
    idCardImageAlert: 'ID 카드 이미지 생성에는 canvas 구현이 필요합니다',
    businessCardAlert: '명함 생성에는 canvas 구현이 필요합니다',
    
    // 지역 이름 (프랑스 지역)
    regions: {
        IDF: '일드프랑스',
        ARA: '오베르뉴론알프',
        OCC: '옥시타니',
        NAQ: '누벨아키텐',
        PAC: '프로방스알프코트다쥐르',
        HDF: '오드프랑스',
        BFC: '부르고뉴프랑슈콩테',
        NAC: '루아르',
        PDL: '루아르',
        BRE: '브르타뉴',
        NOR: '노르망디',
        GUA: '과들루프',
        MQ: '마르티니크',
        GUY: '프랑스령 기아나',
        REU: '레위니옹',
        COR: '코르시카',
        ALO: '알자스로렌',
        MP: '메츠포메라니아'
    },
    
    // 부서 데이터 (일드프랑스 지역 예시)
    departmentsData: {
        IDF: {
            paris: '파리',
            hautsDeSeine: '오드센',
            seineSaintDenis: '센생드니',
            valDeMarne: '발드마른',
            yvelines: '이블린',
            essonne: '에ソン',
            valDOise: '발두아즈',
            seineEtMarne: '센에마른'
        },
        ARA: {
            rhone: '론',
            loire: '루아르',
            isere: '이제르',
            ain: '앵',
            savoie: '사부아',
            hauteSavoie: '오트사부아',
            allier: '알리에',
            puyDeDome: '퓌드돔'
        },
        OCC: {
            herault: '에로',
            gard: '가르',
            aude: '오드',
            pyreneesOrientales: '피레네자리앙탈',
            tarn: '타른',
            hauteGaronne: '오트가론',
            gers: '제르',
            lotEtGaronne: '로트에가론'
        },
        NAQ: {
            gironde: '지롱드',
            charenteMaritime: '샤렌트마리팀',
            dordogne: '도르도뉴',
            landes: '랑드',
            vienne: '비엔',
            hauteVienne: '오트비엔',
            charente: '샤렌트',
            correze: '코레즈'
        },
        PAC: {
            bouchesDuRhone: '부슈드론',
            alpesMaritimes: '알프마리팀',
            var: '바르',
            vaucluse: '보클뤼즈',
            alpesDeHauteProvence: '알프드오트프로방스',
            hautesAlpes: '오트알프'
        },
        HDF: {
            nord: '노르',
            pasDeCalais: '파드칼레',
            somme: '솜',
            aisne: '앵',
            oise: '와즈',
            aisne: '앵'
        }
    },
    
    // 대학교 이름
    universities: {
        UP1: '파리 제1대 팡테옹소르봉',
        UP2: '파리 제2대 팡테옹아사스',
        UP3: '파리 제3대 소르봉누벨',
        UP4: '파리 제1대 팡테옹소르봉',
        UP5: '파리 데카르트',
        UP6: '피에르마리퀴리',
        UP7: '파리 디드로',
        UP8: '파리 제8대 뱅센생드니',
        UP9: '파리 도핀',
        UP10: '파리 낭테르',
        UP11: '파리-살리',
        UP12: '파리-에스트 크레테유',
        UP13: '소르봉파리노르',
        ENS: '에콜노르말수페리외르',
        X: '에콜폴리테크니크'
    },
    
    // CSV 열 이름
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '집 번호',
        building: '건물',
        floor: '층',
        unit: '호실',
        department: '부서',
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
        idCardNumber: 'ID 카드 번호'
    }
};