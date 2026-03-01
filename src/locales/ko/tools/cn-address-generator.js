export default {
    name: '중국 주소 생성기 - 온라인 실제 중국 주소 및 신원 정보 생성',
    description: '무료 온라인 중국 주소 생성기, 실제 형식의 중국 우편 주소, 신원 번호, 전화번호, 은행 카드 번호를 생성합니다. 성별 필터링, JSON/CSV 내보내기 지원, 개인정보 보호를 위해 클라이언트 측에서 실행됩니다.',
    inputTitle: '생성 설정',
    outputTitle: '생성 결과',
    generateBtn: '데이터 생성',
    loadSampleBtn: '샘플 로드 및 생성',
    clearAll: '모두 지우기',
    noOutput: '아직 결과 없음',
    preview: '데이터 미리보기',
    
    // 지리적 필터링
    locationTitle: '지리적 필터링',
    selectProvince: '성 선택',
    selectCity: '시 선택',
    selectDistrict: '구 선택',
    allProvinces: '모든 성',
    allCities: '모든 시',
    allDistricts: '모든 구',
    postalCodeLabel: '우편번호',
    
    // 주소 유형
    addressTypeTitle: '주소 유형',
    addressTypeResidential: '주거 주소',
    addressTypeCommercial: '상업 주소',
    addressTypeCampus: '대학 캠퍼스',
    
    // 신원 정보
    identityTitle: '신원 정보',
    fullName: '전체 이름',
    gender: '성별',
    genderMale: '남성',
    genderFemale: '여성',
    age: '나이',
    birthDate: '생년월일',
    zodiac: '띠',
    
    // 연락처 정보
    contactTitle: '연락처 정보',
    phoneNumber: '전화번호',
    email: '이메일 주소',
    
    // 은행 카드
    bankCardTitle: '은행 카드 정보',
    bankName: '은행 이름',
    cardNumber: '카드 번호',
    
    // 신분증
    idCardTitle: '신분증',
    idCardNumber: '신분증 번호',
    
    // 내보내기 옵션
    exportTitle: '내보내기 형식',
    exportJson: 'JSON 내보내기',
    exportCsv: 'CSV 내보내기',
    downloadBtn: '다운로드',
    copyBtn: '복사',
    viewDetails: '상세 보기',
    
    // 일괄 생성
    batchTitle: '일괄 생성',
    quantityLabel: '수량',
    quantityPlaceholder: '숫자 입력 (1-100)',
    
    // 메시지
    generating: '생성 중...',
    generated: '생성 완료',
    copySuccess: '클립보드에 복사됨',
    downloadSuccess: '다운로드 완료',
    invalidQuantity: '1에서 100 사이의 숫자를 입력하세요',
    
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
    provinceLabel: '성/직할시',
    cityLabel: '시',
    districtLabel: '구/현',
    streetLabel: '거리',
    communityLabel: '단지/건물',
    
    // 성
    provinces: {
        beijing: '베이징시',
        shanghai: '상하이시',
        tianjin: '톈진시',
        chongqing: '충칭시',
        guangdong: '광둥성',
        jiangsu: '장쑤성',
        zhejiang: '저장성',
        shandong: '산둥성',
        henan: '허난성',
        sichuan: '쓰촨성',
        hubei: '후베이성',
        hunan: '후난성',
        fujian: '푸젠성',
        anhui: '안후이성',
        hebei: '허베이성',
        shaanxi: '산시성',
        liaoning: '랴오닝성',
        jilin: '지린성',
        heilongjiang: '헤이룽장성',
        yunnan: '윈난성',
        guizhou: '구이저우성',
        guangxi: '광시 좡족 자치구',
        hainan: '하이난성',
        shanxi: '산시성',
        jiangxi: '장시성',
        gansu: '간쑤성',
        qinghai: '칭하이성',
        neimenggu: '내몽골 자치구',
        ningxia: '닝샤 후이족 자치구',
        xinjiang: '신장 위구르 자치구',
        xizang: '티베트 자치구'
    },
    
    // 주요 도시
    cities: {
        beijing: ['차오양구', '하이뎬구', '둥청구', '시청구', '펑타이구', '스징산구', '통저우구', '순이구', '다싱구', '창핑구'],
        shanghai: ['푸둥신구', '황푸구', '쉬후이구', '창닝구', '징안구', '푸투구', '홍커우구', '양푸구', '민항구', '바오산구'],
        tianjin: ['허핑구', '허둥구', '허시구', '난카이구', '허베이구', '홍차오구', '빈하이신구', '둥리구', '시칭구', '진난구'],
        chongqing: ['위중구', '다두커우구', '장베이구', '사핑바구', '주룽포구', '난안구', '베이베이구', '위베이구', '바난구'],
        guangzhou: ['톈허구', '위에슈구', '하이주구', '리완구', '바이윈구', '황푸구', '판위구', '화두구', '난사구', '충청구'],
        shenzhen: ['푸톈구', '루오후구', '난산구', '옌톈구', '바오안구', '룽강구', '룽화구', '핑산구', '광밍구'],
        hangzhou: ['상청구', '하청구', '장간구', '공수구', '시후구', '빈장구', '샤오산구', '위항구', '푸양구', '린안구'],
        nanjing: ['쉬안우구', '친화이구', '지안예구', '구러우구', '푸커우구', '치샤구', '위화타이구', '장닝구', '류허구', '리수이구'],
        chengdu: ['진장구', '칭양구', '진뉴구', '우허우구', '청화구', '룽취안이구', '칭바이장구', '신두구', '원장구', '솽류구'],
        wuhan: ['장안구', '장한구', '차오커우구', '한양구', '우창구', '칭산구', '홍산구', '둥시후구', '한난구', '차이뎬구'],
        xian: ['신청구', '베일린구', '롄후구', '바차오구', '웨이양구', '옌타구', '옌량구', '린퉁구', '창안구', '가오링구'],
        suzhou: ['구수구', '후치우구', '우중구', '샹청구', '우장구', '쿤산시', '창수시', '장자강시', '타이창시']
    },
    
    // 거리 이름 접두사
    streetPrefixes: ['인민', '해방', '건설', '평화', '중산', '베이징', '상하이', '난징', '장강', '황하', '둥펑', '승리', '광명', '행복', '단결', '우의', '문화', '기술', '혁신', '발전'],
    streetSuffixes: ['로', '대로', '길', '골목', '胡同'],
    
    // 단지 이름
    communityPrefixes: ['햇빛', '정원', '녹지', '금색', '조화', '행복', '건강', '개나리', '장미', '모란', '푸른 물', '푸른 하늘', '산들바람', '달', '은하', '대나무', '오동나무', '버들', '연꽃', '백합'],
    communitySuffixes: ['단지', '정원', '원', '성', '만', '부', '정', '공원', '거주', '촌', '아파트', '타워', '광장', '센터'],
    
    // 은행 목록
    banks: [
        '중국 공상은행', '중국 건설은행', '중국 농업은행', '중국 은행', '교통 은행',
        '초상 은행', '중신 은행', '푸둥 발전 은행', '민생 은행', '흥업 은행',
        '광대 은행', '화하 은행', '평안 은행', '광발 은행', '우저축 은행'
    ],
    
    // CSV 열 머리글
    csv: {
        fullAddress: '전체 주소',
        province: '성',
        city: '시',
        district: '구',
        street: '거리',
        community: '단지',
        fullName: '이름',
        gender: '성별',
        age: '나이',
        birthDate: '생년월일',
        phone: '전화번호',
        email: '이메일',
        idCardNumber: '신분증 번호',
        bankName: '은행',
        cardNumber: '카드 번호'
    }
};
