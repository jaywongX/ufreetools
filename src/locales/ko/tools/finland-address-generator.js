export default {
    name: '핀란드 주소 생성기 - 실제 핀란드 주소, 신원 정보 및 연락처 온라인 생성',
    description: '무료 온라인 핀란드 주소 생성기로 실제 형식의 핀란드 주소, ID 번호, 전화번호, 신용카드 번호 및 완전한 신원 프로필을 생성합니다. 지역 필터링, JSON/CSV 내보내기 형식을 지원하며 프라이버시 보호를 위해 브라우저에서 완전히 실행됩니다.',
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
    selectMunicipality: '시군구 선택',
    allRegions: '모든 지역',
    allMunicipalities: '모든 시군구',
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
    idCardTitle: '핀란드 ID 카드',
    idCardNumber: 'ID 카드 번호',
    henkilötunnus: '개인 식별 번호',
    serialNumber: '시리얼 번호',
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
    municipalityLabel: '시군구',
    regionLabel: '지역',
    postalCode: '우편번호',
    
    // 주소 형식
    addressNumber: '번지',
    addressFloor: '층',
    addressUnit: '호',
    commercialUnit: '(상업용 호실)',
    finland: '핀란드',
    postOfficeBox: '사서함',
    studentDormitory: '기숙사',
    teachingBuilding: '교육 건물',
    library: '도서관',
    buildingUnit: '동',
    apartment: '아파트',
    
    // 알림 메시지
    idCardImageAlert: 'ID 카드 이미지 생성에는 canvas 구현이 필요합니다',
    businessCardAlert: '명함 생성에는 canvas 구현이 필요합니다',
    
    // 지역 이름 (핀란드 지역)
    regions: {
        Uusimaa: '우시마',
        Pirkanmaa: '피르칸마',
        VarsinaisSuomi: '바르시나이스수오미',
        PohjoisPohjanmaa: '포흐요이스포흐얀마',
        KeskiSuomi: '케스키수오미',
        PäijätHäme: '파이얏하메',
        KantaHäme: '칸타하메',
        EteläKarjala: '에텔라카리알라',
        PohjoisKarjala: '포흐요이스카리알라',
        PohjoisSavo: '포흐요이스사보',
        EteläSavo: '에텔라사보',
        Kainuu: '카이누',
        KeskiPohjanmaa: '케스키포흐얀마',
        EteläPohjanmaa: '에텔라포흐얀마',
        Satakunta: '사타쿤타',
        Ahvenanmaa: '아흐베난마',
        Lapland: '라피'
    },
    
    // 시군구 데이터 (우시마 지역 예시)
    municipalitiesData: {
        Uusimaa: {
            helsinki: '헬싱키',
            espoo: '에스포',
            vantaa: '반타',
            kauniainen: '카우니아이넨',
            järvenpää: '야르벤페',
            kerava: '케라바',
            tuusula: '투술라',
            nurmijärvi: '누르미야르비',
            lyly: '란시우시마',
            sipoo: '시포'
        },
        Pirkanmaa: {
            tampere: '탐페레',
            Nokia: '노키아',
            ylöjärvi: '위르외야르비',
            kangasala: '칸가살라',
            lempäälä: '렘ﾍﾟ알라',
            pirkkala: '피르칼라',
            orivesi: '오리베시',
            hängenkyrö: '헤멘쿄뢰'
        },
        VarsinaisSuomi: {
            turku: '투르쿠',
            rauma: '라우마',
            salo: '살로',
            pori: '포리',
            kaarina: '카리나',
            littoinen: '리토이넨',
            raisio: '라이시오',
            naantali: '난탈리'
        },
        KeskiSuomi: {
            jyväskylä: '위베스퀼레',
            jyväskylänML: '위베스퀼레 ML',
            lahti: '라흐티',
            hollola: '홀롤라',
            hrmeentti: '헤멘린나',
            asikkala: '아시칼라'
        },
        PäijätHäme: {
            lahti: '라흐티',
            hollola: '홀롤라',
            hrmeentti: '헤멘린나',
            asikkala: '아시칼라',
            pertunmaa: '페르툰마',
            hartola: '하르톨라'
        }
    },
    
    // 대학교 이름
    universities: {
        HY: '헬싱키 대학교',
        AALTO: '알토 대학교',
        TUNI: '탐페레 대학교',
        UTA: '울루 대학교',
        UTU: '투르쿠 대학교',
        JYU: '위베스퀼레 대학교',
        UEF: '동핀란드 대학교',
        TAMK: '탐페레 응용과학 대학교',
        HAAGA: '하가헬리아 응용과학 대학교',
        Laurea: '라우레아 응용과학 대학교'
    },
    
    // CSV 열 이름
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '집 번호',
        building: '건물',
        floor: '층',
        unit: '호실',
        municipality: '시군구',
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