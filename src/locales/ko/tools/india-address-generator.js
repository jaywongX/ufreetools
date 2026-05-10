export default {
   name: '인도 주소 생성기 - 온라인으로 실제 인도 주소, 신원 정보 및 연락처 세부 정보 생성',
   description: '무료 온라인 인도 주소 생성기로 실제 형식의 인도 주소, 신분증 번호, 전화번호, 신용카드 번호 및 완전한 신원 프로필을 만듭니다. 주(州) 필터링, JSON/CSV 내보내기 형식을 지원하며 개인 정보 보호를 위해 브라우저에서 완전히 실행됩니다.',
   inputTitle: '생성 설정',
   outputTitle: '생성된 결과',
   generateBtn: '데이터 생성',
   loadSampleBtn: '샘플 로드 및 생성',
   clearAll: '모두 지우기',
   noOutput: '아직 생성된 결과가 없습니다',
   preview: '데이터 미리보기',
   
   // 지리적 필터링
   locationTitle: '지리적 필터링',
   selectRegion: '주 선택',
   allRegions: '모든 주',
   postalCodeLabel: '우편번호',
   validatePostalCode: '우편번호 확인',
   
   // 주소 유형
   addressTypeTitle: '주소 유형',
   addressTypeResidential: '주거용 주소',
   addressTypeCommercial: '상업용 주소',
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
   phoneTypeMobile: '휴대전화',
   phoneTypeLandline: '유선전화',
   areaCode: '지역 코드',
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
   
   // 신분증
   idCardTitle: '인도 신분증',
   idCardNumber: '신분증 번호',
   aadhaarNumber: '아아드haar 번호',
   
   // 디지털 지문
   fingerprintTitle: '디지털 지문',
   os: '운영체제',
   osVersion: '시스템 버전',
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
   invalidQuantity: '1~100 사이의 숫자를 입력하세요',
   
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
   regionLabel: '주',
   postalCode: '우편번호',
   
   // 주소 형식
   addressNumber: '번지',
   addressFloor: '층',
   addressUnit: '호',
   commercialUnit: '(상업용 호)',
   india: '인도',
   postOfficeBox: '사서함',
   studentDormitory: '기숙사',
   teachingBuilding: '강의동',
   library: '도서관',
   buildingUnit: '동',
   apartment: '아파트',
   
   // 지역명 (인도 주)
   regions: {
       'Maharashtra': '마하라슈트라',
       'Karnataka': '카르나타카',
       'Tamil Nadu': '타밀나두',
       'Delhi': '델리',
       'Gujarat': '구자라트',
       'Rajasthan': '라자스탄',
       'Uttar Pradesh': '우타르 프라데시',
       'West Bengal': '서벵갈',
       'Kerala': '케랄라',
       'Andhra Pradesh': '안드라 프라데시',
       'Telangana': '텔랑가나',
       'Madhya Pradesh': '마디아 프라데시',
       'Bihar': '비하르',
       'Punjab': '펀자브',
       'Haryana': '하리아나',
       'Odisha': '오디샤',
       'Chhattisgarh': '차티스가르',
       'Jharkhand': '자르칸드',
       'Assam': '아삼',
       'Jammu and Kashmir': '잠무 카슈미르'
   },
   
   // 대학명
   universities: {
       'IIT': '인도 공과대학교',
       'IISc': '인도 과학기술대학교',
       'IIM': '인도 경영대학교',
       'AIIMS': '인도 의과학대학교',
       'JNU': '자와할랄 네루대학교',
       'DU': '델리대학교',
       'BHU': '바라나스 힌두대학교',
       'Jadavpur': '자다브푸르대학교',
       'Anna': '안나대학교',
       'Osmania': '오스마니아대학교'
   },
   
   // CSV 열 이름
   csv: {
       fullAddress: '전체 주소',
       street: '거리',
       houseNumber: '집 번호',
       building: '건물',
       floor: '층',
       unit: '호',
       region: '주',
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