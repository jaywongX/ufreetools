export default {
    name: '일본 주소 생성기 - 실제 일본 주소, 신원 정보 및 연락처 온라인 생성',
    description: '무료 온라인 일본 주소 생성기. 실제 형식의 일본 주소, 개인 번호(My Number), 전화번호, 신용카드 번호 등 완전한 신원 프로필을 생성합니다. 도도부현별 필터링, JSON/CSV 내보내기 지원, 브라우저에서 실행되어 개인정보 보호.',
    inputTitle: '생성 설정',
    outputTitle: '생성 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 불러오기 및 생성',
    clearAll: '모두 지우기',
    noOutput: '생성된 결과 없음',
    preview: '데이터 미리보기',
    
    // 지역 필터링
    locationTitle: '지리적 위치 필터',
    selectPrefecture: '도도부현 선택',
    selectCity: '시구정촌 선택',
    allPrefectures: '모든 도도부현',
    allCities: '모든 시구정촌',
    postalCodeLabel: '우편번호',
    validatePostalCode: '우편번호 검증',
    
    // 주소 유형
    addressTypeTitle: '주소 유형',
    addressTypeResidential: '주거지 주소',
    addressTypeCommercial: '상업지 주소',
    addressTypeVirtual: '가상 우편함',
    addressTypeCampus: '대학 캠퍼스',
    
    // 신원 정보
    identityTitle: '신원 정보',
    fullName: '성명',
    fullNameKana: '가타카나 이름',
    gender: '성별',
    genderMale: '남성',
    genderFemale: '여성',
    age: '나이',
    birthDate: '생년월일',
    zodiac: '별자리',
    bloodType: '혈액형',
    height: '신장',
    weight: '체중',
    
    // 연락처
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
    bankBin: '은행 BIN 코드',
    
    // 직업
    careerTitle: '직업 프로필',
    jobTitle: '직함',
    salary: '급여',
    companyName: '회사명',
    companySize: '회사 규모',
    industry: '산업',
    employmentStatus: '고용 상태',
    employmentFullTime: '정규직',
    employmentPartTime: '계약직',
    
    // 개인 번호(My Number)
    idCardTitle: '개인 번호(My Number)',
    idCardNumber: '개인 번호',
    
    // 디지털 지문
    fingerprintTitle: '디지털 지문',
    os: '운영 체제',
    osVersion: 'OS 버전',
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
    exportIdCard: '주민카드 이미지 생성',
    exportBusinessCard: '명함 생성',
    downloadBtn: '다운로드',
    copyBtn: '복사',
    viewDetails: '상세 보기',
    
    // 일괄 생성
    batchTitle: '일괄 생성',
    quantityLabel: '생성 수량',
    quantityPlaceholder: '수량 입력 (1-100)',
    
    // 상태 메시지
    generating: '생성 중...',
    generated: '생성 완료',
    copySuccess: '클립보드에 복사됨',
    downloadSuccess: '다운로드 완료',
    invalidQuantity: '1-100 사이의 숫자를 입력하세요',
    
    // 결과 표시
    resultCount: '{count}개의 레코드 생성됨',
    resultSummary: '결과 요약',
    showAll: '모두 표시',
    collapse: '접기',
    
    // 생성 옵션
    generateOptionsTitle: '생성 옵션',
    
    // 레코드 표시
    recordLabel: '레코드 #{num}',
    addressLabel: '주소',
    postalCodeLabelDisplay: '우편번호',
    prefectureLabel: '도도부현',
    cityLabel: '시구정촌',
    townLabel: '정명',
    chomeLabel: '초메',
    banLabel: '번지',
    goLabel: '호',
    buildingLabel: '건물명',
    floorLabel: '층',
    roomLabel: '호실',
    
    // 주소 형식
    addressNumber: '호',
    addressFloor: '층',
    addressRoom: '호실',
    commercialUnit: ' (상업용)',
    japan: '일본',
    postOfficeBox: '사서함',
    studentDormitory: '학생 기숙사',
    teachingBuilding: '강의동',
    library: '도서관',
    buildingUnit: '동',
    
    // 알림 메시지
    idCardImageAlert: '주민카드 이미지 생성은 canvas 구현이 필요합니다',
    businessCardAlert: '명함 생성은 canvas 구현이 필요합니다',
    
    // 도도부현
    prefectures: {
        '01': '홋카이도',
        '02': '아오모리현',
        '03': '이와테현',
        '04': '미야기현',
        '05': '아키타현',
        '06': '야마가타현',
        '07': '후쿠시마현',
        '08': '이바라키현',
        '09': '토치기현',
        '10': '군마현',
        '11': '사이타마현',
        '12': '치바현',
        '13': '도쿄도',
        '14': '가나가와현',
        '15': '니가타현',
        '16': '토야마현',
        '17': '이시카와현',
        '18': '후쿠이현',
        '19': '야마나시현',
        '20': '나가노현',
        '21': '기후현',
        '22': '시즈오카현',
        '23': '아이치현',
        '24': '미에현',
        '25': '시가현',
        '26': '교토부',
        '27': '오사카부',
        '28': '효고현',
        '29': '나라현',
        '30': '와카야마현',
        '31': '돗토리현',
        '32': '시마네현',
        '33': '오카야마현',
        '34': '히로시마현',
        '35': '야마구치현',
        '36': '도쿠시마현',
        '37': '가가와현',
        '38': '에히메현',
        '39': '고치현',
        '40': '후쿠오카현',
        '41': '사가현',
        '42': '나가사키현',
        '43': '구마모토현',
        '44': '오이타현',
        '45': '미야자키현',
        '46': '가고시마현',
        '47': '오키나와현'
    },
    
    // 시구정촌
    cities: {
        '01': {
            sapporo: '삿포로시',
            asahikawa: '아사히카와시',
            hakodate: '하코다테시',
            obihiro: '오비히로시'
        },
        '04': {
            sendai: '센다이시',
            shiogama: '시오가마시',
            ishinomaki: '이시노마키시'
        },
        '13': {
            chiyoda: '치요다구',
            chuo: '주오구',
            minato: '미나토구',
            shinjuku: '신주쿠구',
            shibuya: '시부야구',
            shinagawa: '시나가와구',
            meguro: '메구로구',
            setagaya: '세타가야구',
            ota: '오타구',
            nerima: '네리마구'
        },
        '14': {
            yokohama: '요코하마시',
            kawasaki: '가와사키시',
            sagamihara: '사가미하라시',
            fujisawa: '후지사와시'
        },
        '23': {
            nagoya: '나고야시',
            toyohashi: '도요하시시',
            okazaki: '오카자키시'
        },
        '26': {
            kyoto: '교토시',
            utsunomiya: '우지시'
        },
        '27': {
            osaka: '오사카시',
            sakai: '사카이시',
            hirakata: '히라카타시',
            toyonaka: '토요나카시'
        },
        '28': {
            kobe: '고베시',
            himeji: '히메지시',
            amagasaki: '아마가사키시'
        },
        '40': {
            fukuoka: '후쿠오카시',
            kitakyushu: '기타큐슈시',
            kurume: '구루메시'
        },
        '47': {
            naha: '나하시',
            okinawa: '오키나와시'
        }
    },
    
    // 대학
    universities: {
        UTokyo: '도쿄대학',
        KyotoU: '교토대학',
        OsakaU: '오사카대학',
        TohokuU: '토호쿠대학',
        NagoyaU: '나고야대학',
        KyushuU: '규슈대학',
        HokkaidoU: '홋카이도대학',
        Keio: '게이오기주쿠대학',
        Waseda: '와세다대학'
    },
    
    // 혈액형
    bloodTypes: {
        A: 'A형',
        B: 'B형',
        O: 'O형',
        AB: 'AB형'
    },
    
    // CSV 열 이름
    csv: {
        fullAddress: '전체 주소',
        postalCode: '우편번호',
        prefecture: '도도부현',
        city: '시구정촌',
        town: '정명',
        building: '건물명',
        fullName: '성명',
        fullNameKana: '가타카나 이름',
        gender: '성별',
        age: '나이',
        birthDate: '생년월일',
        phone: '전화번호',
        email: '이메일',
        cardType: '카드 유형',
        cardNumber: '카드 번호',
        idCardNumber: '개인 번호'
    }
};
