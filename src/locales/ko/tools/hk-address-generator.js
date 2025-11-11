export default {
    name: 'HK 주소 생성기 - 온라인에서 실제 홍콩 주소, 신원 정보 및 연락처 생성',
    description: '실제 형식의 홍콩 주소, 신분증 번호, 전화번호, 신용카드 번호 및 완전한 신원 프로필을 생성하는 무료 온라인 HK 주소 생성기. 지역별 필터링, JSON/CSV 내보내기 형식을 지원하며 개인정보 보호를 위해 브라우저에서만 실행됩니다.',
    inputTitle: '생성 설정',
    outputTitle: '생성 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 로드 및 생성',
    clearAll: '모두 지우기',
    noOutput: '아직 생성된 결과가 없습니다',
    preview: '데이터 미리보기',
    
    // 지리적 필터링
    locationTitle: '지리적 필터링',
    selectDistrict: '구역 선택',
    selectArea: '지역 선택',
    allDistricts: '모든 구역',
    allAreas: '모든 지역',
    postalCodeLabel: '우편번호',
    validatePostalCode: '우편번호 확인',
    
    // 주소 유형
    addressTypeTitle: '주소 유형',
    addressTypeResidential: '주거 주소',
    addressTypeCommercial: '상업 주소',
    addressTypeVirtual: '가상 우편함',
    addressTypeCampus: '대학 캠퍼스',
    
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
    
    // 직업
    careerTitle: '직업 프로필',
    jobTitle: '직책',
    salary: '급여',
    companyName: '회사명',
    companySize: '회사 규모',
    industry: '산업',
    employmentStatus: '고용 상태',
    employmentFullTime: '정규직',
    employmentPartTime: '파트타임',
    
    // 신분증
    idCardTitle: '홍콩 신분증',
    idCardNumber: '신분증 번호',
    prefixLetter: '접두사 문자',
    serialNumber: '일련번호',
    checkDigit: '체크 디지트',
    
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
    invalidQuantity: '1-100 사이의 숫자를 입력하세요',
    
    // 결과 표시
    resultCount: '{count}개의 레코드가 생성됨',
    resultSummary: '결과 요약',
    showAll: '모두 보기',
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
    districtLabel: '구역',
    
    // 주소 형식
    addressNumber: '번지',
    addressFloor: '층',
    addressUnit: '호',
    commercialUnit: '(상업용 유닛)',
    hongKong: '홍콩',
    postOfficeBox: '사서함',
    studentDormitory: '학생 기숙사',
    teachingBuilding: '강의동',
    library: '도서관',
    buildingUnit: '동',
    
    // 경고 메시지
    idCardImageAlert: '신분증 이미지 생성에는 캔버스 구현이 필요합니다',
    businessCardAlert: '명함 생성에는 캔버스 구현이 필요합니다',
    
    // 구역 이름
    districts: {
        CW: '중서구',
        WAN: '완차이구',
        E: '동구',
        S: '남구',
        YTM: '유첨망구',
        SSP: '심수포구',
        KC: '구룡성구',
        WTS: '왕대선구',
        KT: '관통구',
        TM: '둔문구',
        YL: '원랑구',
        N: '북구',
        TP: '대포구',
        ST: '사전구',
        SK: '사이공구',
        TW: '전완구',
        KW: '계청구',
        IS: '이섬구'
    },
    
    // 지역 이름
    areas: {
        CW: {
            central: '중환',
            sheungWan: '샹완',
            saiWan: '사이완',
            midLevels: '미드레벨스'
        },
        WAN: {
            wanChai: '완차이',
            causewayBay: '코즈웨이 베이',
            happyValley: '해피 밸리',
            taiHang: '다이항'
        },
        E: {
            northPoint: '노스 포인트',
            quarryBay: '쿼리 베이',
            taiKooShing: '다이쿠 싱',
            shauKeiWan: '샤우케이완',
            chaiWan: '차이완'
        },
        S: {
            repulseBay: '리펄스 베이',
            deepWaterBay: '딥 워터 베이',
            stanley: '스탠리',
            aberdeen: '아버딘',
            apLeiChau: '압레이차우'
        },
        YTM: {
            tsimShaTsui: '침사추이',
            yauMaTei: '요마떼이',
            mongKok: '망콕',
            jordan: '조던'
        },
        SSP: {
            shamShuiPo: '심수포',
            cheungShaWan: '청사완',
            laiChiKok: '라이치콕',
            shekKipMei: '섹킵메이'
        },
        KC: {
            kowloonCity: '구룡성',
            toKwaWan: '토과완',
            hungHom: '훙훔',
            hoManTin: '호만틴'
        },
        WTS: {
            wongTaiSin: '왕대선',
            diamondHill: '다이몬드 힐',
            sanPoKong: '산포콩',
            lokFu: '록후'
        },
        KT: {
            kwunTong: '관통',
            lamTin: '람틴',
            ngauTauKok: '나우타우콕',
            kowloonBay: '구룡만'
        },
        TM: {
            tuenMun: '둔문',
            yuenLong: '원랑',
            tinShuiWai: '틴수와이',
            tsingShan: '칭산'
        },
        YL: {
            yuenLong: '원랑',
            tinShuiWai: '틴수와이',
            kamTin: '감틴',
            pingShan: '핑산'
        },
        N: {
            sheungShui: '샹수이',
            fanLing: '판링',
            shaTauKok: '샤타우콕',
            taKuLing: '타쿨링'
        },
        TP: {
            taiPo: '대포',
            taiPoMarket: '대포시장',
            taiWo: '다이오',
            lamTsuen: '람전'
        },
        ST: {
            shaTin: '사천',
            taiWai: '다이와이',
            maOnShan: '마온산',
            foTan: '포탄'
        },
        SK: {
            saiKung: '사이공',
            tseungKwanO: '증관오',
            hangHau: '항하우',
            clearWaterBay: '클리어 워터 베이'
        },
        TW: {
            tsuenWan: '전완',
            kwaiChung: '괴중',
            tsingYi: '칭이',
            shamTseng: '심증'
        }
    },
    
    // 대학 이름
    universities: {
        HKU: '홍콩 대학교',
        CUHK: '중국어 홍콩 대학교',
        HKUST: '홍콩 과학기술 대학교',
        PolyU: '홍콩 이공 대학교',
        CityU: '홍콩 시티 대학교'
    },
    
    // CSV 열 이름
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '집 번호',
        building: '건물',
        floor: '층',
        unit: '호',
        district: '구역',
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