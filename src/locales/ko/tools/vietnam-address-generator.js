export default {
    name: '베트남 주소 생성기 - 실제 베트남 주소, 신원 정보 및 연락처 온라인 생성',
    description: '무료 온라인 베트남 주소 생성기로 실제 형식의 베트남 주소, ID 번호, 전화번호, 신용카드 번호 및 완전한 신원 프로필을 생성합니다. 도/시 필터링, JSON/CSV 내보내기 형식을 지원하며 프라이버시 보호를 위해 브라우저에서 완전히 실행됩니다.',
    inputTitle: '생성 설정',
    outputTitle: '생성된 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 로드 후 생성',
    clearAll: '모두 지우기',
    noOutput: '아직 생성된 결과 없음',
    preview: '데이터 미리보기',
    
    // 지리 필터링
    locationTitle: '지리 필터링',
    selectProvince: '도/시 선택',
    selectDistrict: '군/구 선택',
    allProvinces: '모든 도/시',
    allDistricts: '모든 군/구',
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
    expiryDate: '유효기간',
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
    
    // 신분증
    idCardTitle: '베트남 신분증',
    idCardNumber: '신분증 번호',
    cmndNumber: 'CMND 번호',
    cccdNumber: 'CCCD 번호',
    serialNumber: '일련번호',
    
    // 디지털 지문
    fingerprintTitle: '디지털 지문',
    os: '운영 체제',
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
    exportIdCard: '신분증 이미지 생성',
    exportBusinessCard: '명함 생성',
    downloadBtn: '다운로드',
    copyBtn: '복사',
    viewDetails: '상세 보기',
    
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
    unitLabel: '유닛',
    wardLabel: '방',
    districtLabel: '군/구',
    provinceLabel: '도/시',
    postalCode: '우편번호',
    
    // 주소 형식
    addressNumber: '번지',
    addressFloor: '층',
    addressUnit: '유닛',
    commercialUnit: '(상업 유닛)',
    vietnam: '베트남',
    postOfficeBox: '우체국 사서함',
    studentDormitory: '기숙사',
    teachingBuilding: '교육 건물',
    library: '도서관',
    buildingUnit: '동',
    apartment: '아파트',
    
    // 알림 메시지
    idCardImageAlert: '신분증 이미지 생성에는 canvas 구현이 필요합니다',
    businessCardAlert: '명함 생성에는 canvas 구현이 필요합니다',
    
    // 도/시 이름 (베트남 도/시)
    provinces: {
        HN: '하노이',
        HCM: '호치민시',
        HP: '하이퐁',
        DN: '다낭',
        CT: '칸터',
        BH: '바리아붕타우',
        BD: '빈즈엉',
        QN: '광닌',
        QG: '광남',
        KG: '까마우',
        DT: '동나이',
        HB: '하남',
        TH: '타이빈',
        NB: '남딘',
        VL: '빈롱',
        TG: '삭쎤',
        NT: '닌투언',
        PY: '푸옌',
        TV: '타이닌',
        BD: '빈딘',
        HT: '호아빈',
        TB: '투옌꽝',
        TN: '타이응우옌',
        LC: '라이쩌우',
        YB: '옌바이',
        DB: '디엔비엔',
        LA: '라오가이',
        CB: '까오방',
        LD: '락동',
        DC: '다글락',
        QN: '광빈',
        QT: '광치',
        HT: '하틴',
        NA: '응에안',
        TT: '타인호아',
        NB: '닌빈',
        ST: '안장',
        CT: '트라빈',
        BP: '벤째',
        BL: '박lickr',
        KG: '까마우',
        CM: '까마우'
    },
    
    // 군/구 데이터 (하노이와 호치민시 예시)
    districtsData: {
        HN: {
            hoanKiem: '호안키엠',
            baDinh: '바딘',
            dongDa: '동다',
            haiBaTrung: '하이바트룽',
            thanhXuan: '탄쑤언',
            cauGiay: '가우자이',
            hoangMai: '호앙마이',
            longBien: '롱비엔',
            tayHo: '서호',
            bacTuLiem: '박투리엠',
            namTuLiem: '남투리엠',
            haDong: '하동'
        },
        HCM: {
            quan1: '1군',
            quan3: '3군',
            quan4: '4군',
            quan5: '5군',
            quan6: '6군',
            quan7: '7군',
            quan10: '10군',
            quan11: '11군',
            binhThanh: '빈탄',
            phuNhuan: '푸뉴언',
            tanBinh: '탄빈',
            goVap: '고깝',
            binhChanh: '빈짱',
            thuDuc: '투득'
        },
        DN: {
            haiChau: '하이쩌우',
            thanhKhe: '탄케',
            sonTra: '산트라',
            NguHanhSon: 'Ngu Hanh Son',
            LienChieu: 'Lien Chieu',
            CamLe: 'Cam Le'
        },
        HP: {
            HongBang: '홍방',
            LeChan: '레찬',
            NgoQuyen: 'Ngo Quyen',
            HaiAn: '하이안',
            KiAn: '키안'
        }
    },
    
    // 대학교 이름
    universities: {
        HUST: '하노이 과학기술대학교',
        VNU: '베트남 국립대학교',
        HANU: '하노이 국립대학교',
        HCMUS: '호치민시 국립대학교',
        RMIT: 'RMIT 대학교 베트남',
        FTU: '대외무역대학교',
        NEU: '국립경제대학교',
        HPU: '하노이 약학대학교',
        PTIT: '우편통신기술대학교',
        FPT: 'FPT 대학교'
    },
    
    // CSV 열 이름
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '집 번호',
        building: '건물',
        floor: '층',
        unit: '유닛',
        ward: '방',
        district: '군/구',
        province: '도/시',
        postalCode: '우편번호',
        fullName: '이름',
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