export default {
    name: '캐나다 주소 생성기 - 온라인으로 실제 캐나다 주소 및 신원 정보 생성',
    description: '무료 온라인 캐나다 주소 생성기. 실제 형식의 캐나다 주소, 우편번호, 전화번호, 신용카드 번호 등 완전한 신원 프로필 생성. 주별 필터링, JSON/CSV 내보내기, 로컬 실행으로 개인정보 보호.',
    inputTitle: '생성 설정',
    outputTitle: '생성 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 불러오기 및 생성',
    clearAll: '모두 지우기',
    noOutput: '아직 결과 없음',
    preview: '미리보기',
    
    locationTitle: '위치 필터',
    selectProvince: '주 선택',
    selectCity: '도시 선택',
    allProvinces: '모든 주',
    allCities: '모든 도시',
    postalCodeLabel: '우편번호',
    validatePostalCode: '우편번호 검증',
    
    addressTypeTitle: '주소 유형',
    addressTypeResidential: '주거 주소',
    addressTypeCommercial: '상업 주소',
    addressTypeVirtual: '사서함',
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
    phoneTypeLandline: '유선전화',
    areaCode: '지역번호',
    email: '이메일 주소',
    tempEmail: '임시 이메일',
    
    creditCardTitle: '신용카드 정보',
    cardType: '카드 유형',
    cardNumber: '카드 번호',
    expiryDate: '만료일',
    cvv: 'CVV',
    bankBin: '은행 BIN',
    
    careerTitle: '직업 프로필',
    jobTitle: '직위',
    salary: '급여',
    companyName: '회사명',
    companySize: '회사 규모',
    industry: '산업',
    employmentStatus: '고용 상태',
    employmentFullTime: '정규직',
    employmentPartTime: '파트타임',
    
    sinTitle: '사회보장번호(SIN)',
    sinNumber: 'SIN 번호',
    
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
    
    exportTitle: '내보내기 형식',
    exportJson: 'JSON 내보내기',
    exportCsv: 'CSV 내보내기',
    exportIdCard: 'ID 카드 생성',
    exportBusinessCard: '명함 생성',
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
    
    resultCount: '{count}개의 레코드 생성됨',
    resultSummary: '결과 요약',
    showAll: '모두 표시',
    collapse: '접기',
    
    generateOptionsTitle: '생성 옵션',
    
    recordLabel: '레코드 #{num}',
    addressLabel: '주소',
    streetLabel: '거리',
    houseNumberLabel: '집 번호',
    buildingLabel: '건물',
    unitLabel: '유닛',
    cityLabel: '도시',
    provinceLabel: '주',
    postalCodeDisplay: '우편번호',
    
    addressUnit: '유닛',
    aptNumber: '아파트',
    suiteNumber: '스위트',
    pobox: '사서함',
    
    idCardImageAlert: 'ID 카드 생성에는 canvas가 필요합니다',
    businessCardAlert: '명함 생성에는 canvas가 필요합니다',
    
    provinces: {
        ON: '온타리오주',
        QC: '퀘벡주',
        BC: '브리티시컬럼비아주',
        AB: '앨버타주',
        MB: '매니토바주',
        SK: '서스캐처원주',
        NS: '노바스코샤주',
        NB: '뉴브런즈윅주',
        NL: '뉴펀들랜드래브라도주',
        PE: '프린스에드워드아일랜드주',
        NT: '노스웨스트 준주',
        YT: '유콘 준주',
        NU: '누나부트 준주'
    },
    
    cities: {
        ON: {
            toronto: '토론토',
            ottawa: '오타와',
            mississauga: '미시소가',
            hamilton: '해밀턴',
            london: '런던',
            markham: '마컴',
            vaughan: '본',
            kitchener: '키치너',
            waterloo: '워털루',
            brampton: '브램턴'
        },
        QC: {
            montreal: '몬트리올',
            quebec: '퀘벡 시티',
            laval: '라발',
            gatineau: '가티노',
            sherbrooke: '셔브룩'
        },
        BC: {
            vancouver: '밴쿠버',
            victoria: '빅토리아',
            burnaby: '버나비',
            richmond: '리치먼드',
            surrey: '서리',
            kelowna: '캘로나'
        },
        AB: {
            calgary: '캘거리',
            edmonton: '에드먼턴',
            redDeer: '레드디어',
            lethbridge: '레스브리지'
        },
        MB: {
            winnipeg: '위니펙',
            brandon: '브랜던'
        },
        SK: {
            saskatoon: '서스캐툰',
            regina: '리자이나'
        },
        NS: {
            halifax: '할리팩스'
        },
        NB: {
            fredericton: '프레더릭턴',
            moncton: '몽크턴',
            saintJohn: '세인트존'
        },
        NL: {
            stJohns: '세인트존스'
        },
        PE: {
            charlottetown: '샬럿타운'
        },
        NT: {
            yellowknife: '옐로나이프'
        },
        YT: {
            whitehorse: '화이트호스'
        },
        NU: {
            iqaluit: '이칼루이트'
        }
    },
    
    universities: {
        UofT: '토론토 대학교',
        UBC: '브리티시컬럼비아 대학교',
        McGill: '맥길 대학교',
        McMaster: '맥마스터 대학교',
        Waterloo: '워털루 대학교',
        Alberta: '앨버타 대학교',
        Ottawa: '오타와 대학교',
        Montreal: '몬트리올 대학교'
    },
    
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '집 번호',
        building: '건물',
        unit: '유닛',
        city: '도시',
        province: '주',
        postalCode: '우편번호',
        fullName: '전체 이름',
        gender: '성별',
        age: '나이',
        birthDate: '생년월일',
        phone: '전화',
        email: '이메일',
        cardType: '카드 유형',
        cardNumber: '카드 번호',
        sinNumber: 'SIN 번호'
    }
};
