export default {
    name: '싱가포르 주소 생성기 - 온라인으로 실제 싱가포르 주소 생성',
    description: '무료 온라인 싱가포르 주소 생성기, 실제 싱가포르 주소, NRIC 번호, 전화번호, 신용카드 번호 및 완전한 신원 프로필 생성. 지역별 필터링, JSON/CSV 내보내기, 개인정보 보호를 위해 로컬에서 실행.',
    inputTitle: '생성 설정',
    outputTitle: '생성 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 로드 및 생성',
    clearAll: '모두 지우기',
    noOutput: '결과 없음',
    preview: '데이터 미리보기',
    
    locationTitle: '위치 필터',
    selectRegion: '지역 선택',
    selectArea: '구역 선택',
    allRegions: '모든 지역',
    allAreas: '모든 구역',
    postalCodeLabel: '우편번호',
    
    addressTypeTitle: '주소 유형',
    addressTypeResidential: '주거용',
    addressTypeCommercial: '상업용',
    addressTypeHDB: 'HDB 아파트',
    addressTypeCondo: '개인 콘도',
    
    identityTitle: '신원 정보',
    fullName: '전체 이름',
    gender: '성별',
    genderMale: '남성',
    genderFemale: '여성',
    age: '나이',
    birthDate: '생년월일',
    race: '인종',
    raceChinese: '중국계',
    raceMalay: '말레이계',
    raceIndian: '인도계',
    raceOthers: '기타',
    
    contactTitle: '연락처 정보',
    phoneNumber: '전화번호',
    areaCode: '지역번호',
    email: '이메일 주소',
    tempEmail: '임시 이메일',
    
    creditCardTitle: '신용카드 정보',
    cardType: '카드 유형',
    cardNumber: '카드 번호',
    expiryDate: '만료일',
    cvv: 'CVV',
    bankBin: '은행 BIN',
    
    careerTitle: '경력 프로필',
    jobTitle: '직책',
    salary: '급여',
    companyName: '회사명',
    companySize: '회사 규모',
    industry: '산업',
    employmentStatus: '고용 상태',
    employmentFullTime: '정규직',
    employmentPartTime: '파트타임',
    
    idCardTitle: 'NRIC ID 카드',
    idCardNumber: 'NRIC 번호',
    prefixLetter: '접두사 문자',
    serialNumber: '일련번호',
    checkLetter: '확인 문자',
    
    exportTitle: '내보내기 형식',
    exportJson: 'JSON 내보내기',
    exportCsv: 'CSV 내보내기',
    downloadBtn: '다운로드',
    copyBtn: '복사',
    viewDetails: '상세 보기',
    
    batchTitle: '일괄 생성',
    quantityLabel: '수량',
    quantityPlaceholder: '수량 입력 (1-100)',
    
    generating: '생성 중...',
    generated: '생성 완료',
    copySuccess: '클립보드에 복사됨',
    downloadSuccess: '다운로드 완료',
    invalidQuantity: '1-100 사이의 숫자를 입력하세요',
    
    resultCount: '{count}개 레코드 생성됨',
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
    postalCodeLabel: '우편번호',
    regionLabel: '지역',
    
    regions: {
        CR: '중부 지역',
        ER: '동부 지역',
        NR: '북부 지역',
        NER: '북동부 지역',
        WR: '서부 지역'
    },
    
    areas: {
        CR: {
            orchard: '오차드',
            riverValley: '리버 밸리',
            newton: '뉴턴',
            tanglin: '탕글린',
            bukitTimah: '부킷티마',
            clementi: '클레멘티',
            queenstown: '퀸스타운'
        },
        ER: {
            bedok: '베독',
            changi: '창이',
            pasirRis: '파시르리스',
            tampines: '탐피네스',
            payaLebar: '파야르바르'
        },
        NR: {
            angMoKio: '앙모키오',
            bishan: '비산',
            serangoon: '세랑구',
            hougang: '하우강',
            sengkang: '성강',
            punggol: '풍골'
        },
        NER: {
            hougang: '하우강',
            punggol: '풍골',
            seletar: '셀레타르',
            sengkang: '성강',
            serangoon: '세랑구'
        },
        WR: {
            jurongEast: '주롱 동부',
            jurongWest: '주롱 서부',
            bukitBatok: '부킷바톡',
            choaChuKang: '초아추캉',
            woodlands: '우들랜즈',
            sembawang: '셈바왕',
            yishun: '이슌'
        }
    },
    
    csv: {
        fullAddress: '전체 주소',
        street: '거리',
        houseNumber: '집 번호',
        building: '건물',
        postalCode: '우편번호',
        fullName: '이름',
        gender: '성별',
        age: '나이',
        birthDate: '생년월일',
        phone: '전화',
        email: '이메일',
        cardType: '카드 유형',
        cardNumber: '카드 번호',
        idCardNumber: 'NRIC 번호'
    }
};
