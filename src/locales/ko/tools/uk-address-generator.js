export default {
    name: '영국 주소 생성기 - 온라인으로 실제 영국 주소, 신원 정보 및 연락처 생성',
    description: '무료 온라인 영국 주소 생성기. 실제 형식의 영국 주소, 국민보험번호(NINO), 전화번호, 신용카드 번호 및 완전한 신원 프로필을 생성합니다. 카운티별 필터링, JSON/CSV 내보내기, 개인정보 보호를 위한 순수 프론트엔드 처리.',
    inputTitle: '생성 설정',
    outputTitle: '결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '예제 불러오기 및 생성',
    clearAll: '모두 지우기',
    noOutput: '결과 없음',
    preview: '미리보기',
    
    locationTitle: '지리적 필터',
    selectCounty: '카운티 선택',
    selectCity: '도시 선택',
    allCounties: '모든 카운티',
    allCities: '모든 도시',
    postcodeLabel: '우편번호',
    validatePostcode: '우편번호 검증',
    
    addressTypeTitle: '주소 유형',
    addressTypeResidential: '주거지 주소',
    addressTypeCommercial: '상업지 주소',
    addressTypePoBox: '사서함',
    addressTypeCampus: '대학 캠퍼스',
    
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
    
    contactTitle: '연락처 정보',
    phoneNumber: '전화번호',
    phoneType: '전화 유형',
    phoneTypeMobile: '휴대전화',
    phoneTypeLandline: '일반전화',
    areaCode: '지역번호',
    email: '이메일 주소',
    tempEmail: '임시 이메일',
    
    creditCardTitle: '신용카드 정보',
    cardType: '카드 유형',
    cardNumber: '카드 번호',
    expiryDate: '만료일',
    cvv: 'CVV',
    bankBin: '은행 BIN 코드',
    
    careerTitle: '직업 프로필',
    jobTitle: '직책',
    salary: '급여',
    companyName: '회사명',
    companySize: '회사 규모',
    industry: '산업',
    employmentStatus: '고용 상태',
    employmentFullTime: '정규직',
    employmentPartTime: '파트타임',
    
    idCardTitle: '국민보험번호(NINO)',
    idCardNumber: '국민보험번호',
    prefixLetter: '접두사 문자',
    serialNumber: '일련번호',
    suffixLetter: '접미사 문자',
    
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
    
    exportTitle: '내보내기 형식',
    exportJson: 'JSON 내보내기',
    exportCsv: 'CSV 내보내기',
    downloadBtn: '다운로드',
    copyBtn: '복사',
    viewDetails: '상세 보기',
    
    batchTitle: '일괄 생성',
    quantityLabel: '생성 수량',
    quantityPlaceholder: '수량 입력 (1-100)',
    
    generating: '생성 중...',
    generated: '생성 완료',
    copySuccess: '클립보드에 복사됨',
    downloadSuccess: '다운로드 성공',
    invalidQuantity: '1-100 사이의 숫자를 입력하세요',
    
    resultCount: '총 {count}개의 레코드 생성',
    resultSummary: '결과 요약',
    showAll: '모두 표시',
    collapse: '접기',
    
    generateOptionsTitle: '생성 옵션',
    
    recordLabel: '레코드 #{num}',
    addressLabel: '주소',
    streetLabel: '거리',
    houseNumberLabel: '집 번호',
    buildingLabel: '건물',
    cityLabel: '도시',
    countyLabel: '카운티',
    
    counties: {
        LND: '그레이터 런던',
        GRM: '그레이터 맨체스터',
        MAN: '맨체스터',
        BIR: '웨스트 미들랜즈',
        LEE: '웨스트 요크셔',
        SHE: '사우스 요크셔',
        LIV: '머지사이드',
        BRS: '브리스톨',
        NEW: '타인 앤 위어',
        NOT: '노팅엄셔',
        EDB: '에든버러',
        GLA: '글래스고',
        CDF: '카디프',
        BEL: '벨파스트',
        SOU: '사우샘프턴',
        POR: '플리머스',
        BRI: '브라이턴',
        CAM: '케임브리지셔'
    },
    
    cities: {
        LND: {
            westminster: '웨스트민스터',
            kensington: '켄싱턴',
            chelsea: '첼시',
            camden: '캠던',
            islington: '이즐링턴',
            hackney: '해크니',
            towerHamlets: '타워 햄릿',
            greenwich: '그리니치'
        },
        GRM: {
            manchester: '맨체스터',
            salford: '살포드',
            bolton: '볼턴',
            bury: '베리',
            oldham: '올덤',
            rochdale: '로치데일',
            stockport: '스톡포트',
            wigan: '위건'
        },
        MAN: {
            manchesterCity: '맨체스터 시',
            trafford: '트래포드',
            tameside: '테임사이드',
            sale: '세일'
        },
        BIR: {
            birmingham: '버밍엄',
            coventry: '코벤트리',
            wolverhampton: '울버햄프턴',
            dudley: '더들리',
            walsall: '월솔',
            sandwell: '샌드웰',
            solihull: '솔리헐'
        },
        LEE: {
            leeds: '리즈',
            bradford: '브래드포드',
            wakefield: '웨이크필드',
            kirklees: '커클리스',
            calderdale: '콜더데일'
        },
        SHE: {
            sheffield: '셰필드',
            rotherham: '로더럼',
            doncaster: '던캐스터',
            barnsley: '반즐리'
        },
        LIV: {
            liverpool: '리버풀',
            knowsley: '노즐리',
            sefton: '세프턴',
            wirral: '위럴',
            stHelens: '세인트헬렌스'
        },
        BRS: {
            bristol: '브리스톨',
            southGloucestershire: '사우스 글로스터셔',
            bath: '바스'
        },
        NEW: {
            newcastle: '뉴캐슬',
            gateshead: '게이츠헤드',
            sunderland: '선더랜드',
            durham: '더럼',
            northTyneside: '노스 타인사이드',
            southTyneside: '사우스 타인사이드'
        },
        NOT: {
            nottingham: '노팅엄',
            derby: '더비',
            leicester: '레스터',
            lincoln: '링컨'
        },
        EDB: {
            edinburgh: '에든버러',
            glasgow: '글래스고',
            aberdeen: '애버딘',
            dundee: '던디',
            inverness: '인버네스'
        },
        GLA: {
            glasgowCity: '글래스고 시',
            paisley: '페이즐리',
            motherwell: '마더웰',
            hamilton: '해밀턴',
            eastKilbride: '이스트 킬브라이드'
        },
        CDF: {
            cardiff: '카디프',
            swansea: '스완지',
            newport: '뉴포트',
            wrexham: '렉섬',
            barry: '배리'
        },
        BEL: {
            belfast: '벨파스트',
            derry: '데리',
            lisburn: '리스번',
            newry: '뉴리',
            bangor: '뱅거'
        },
        SOU: {
            southampton: '사우샘프턴',
            portsmouth: '포츠머스',
            bournemouth: '본머스',
            poole: '풀',
            winchester: '윈체스터'
        },
        POR: {
            plymouth: '플리머스',
            exeter: '엑서터',
            truro: '트루로',
            bath: '바스',
            taunton: '톤턴'
        },
        BRI: {
            brighton: '브라이턴',
            hove: '호브',
            worthing: '워딩',
            eastbourne: '이스트본',
            hastings: '헤이스팅스'
        },
        CAM: {
            cambridge: '케임브리지',
            oxford: '옥스퍼드',
            peterborough: '피터버러',
            luton: '루턴',
            miltonKeynes: '밀턴케인스'
        }
    },
    
    universities: {
        OXF: '옥스퍼드 대학교',
        CAM: '케임브리지 대학교',
        IMP: '임페리얼 칼리지 런던',
        UCL: '유니버시티 칼리지 런던',
        EDB: '에든버러 대학교'
    },
    
    studentHall: '학생 기숙사',
    academicBuilding: '학술 건물',
    library: '도서관',
    
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '집 번호',
        building: '건물',
        postcode: '우편번호',
        city: '도시',
        county: '카운티',
        fullName: '이름',
        gender: '성별',
        age: '나이',
        birthDate: '생년월일',
        phone: '전화',
        email: '이메일',
        cardType: '카드 유형',
        cardNumber: '카드 번호',
        idCardNumber: '국민보험번호'
    }
};
