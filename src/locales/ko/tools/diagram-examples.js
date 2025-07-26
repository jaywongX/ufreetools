export default {
  name: '다이어그램 예제',
  description: '다양한 모델링 요구사항을 충족하기 위한 다양한 다이어그램 예제 탐색 및 사용',
  title: '고급 플로우차트 예제',

  categories: {
    title: '카테고리',
    flowcharts: '플로우차트',
    uml: 'UML 다이어그램',
    network: '네트워크 다이어그램',
    architecture: '아키텍처 다이어그램',
    entity: '엔티티 관계도',
    sequence: '시퀀스 다이어그램',
    mindmaps: '마인드맵',
    gantt: '간트 차트',
    other: '기타 다이어그램'
  },

  actions: {
    search: '예제 검색',
    filter: '카테고리별 필터링',
    sortBy: '정렬 기준',
    useExample: '이 예제 사용',
    viewFull: '전체 크기 보기',
    copyCode: '코드 복사',
    addToFavorites: '즐겨찾기에 추가',
    removeFavorite: '즐겨찾기에서 제거'
  },

  sortOptions: {
    popularity: '인기순',
    newest: '최신순',
    alphabetical: '알파벳순',
    complexity: '복잡도순'
  },

  exampleDetail: {
    title: '예제 상세 정보',
    description: '설명',
    syntax: '구문',
    codeView: '코드 보기',
    diagramView: '다이어그램 보기',
    complexity: '복잡도',
    tags: '태그',
    relatedExamples: '관련 예제'
  },

  complexityLevels: {
    beginner: '초보자',
    intermediate: '중급자',
    advanced: '고급자'
  },

  messages: {
    copied: '코드가 클립보드에 복사되었습니다',
    copyFailed: '복사 실패, 수동으로 복사해주세요',
    added: '즐겨찾기에 추가되었습니다',
    removed: '즐겨찾기에서 제거되었습니다',
    noResults: '검색 조건에 맞는 예제가 없습니다',
    loading: '예제를 불러오는 중...'
  },

  filters: {
    all: '모든 카테고리',
    favorites: '즐겨찾기만',
    recently: '최근 본 항목'
  },

  examples: {
    softwareDevelopment: '소프트웨어 개발 플로우차트',
    projectManagement: '프로젝트 관리 간트 차트',
    userRegistration: '사용자 등록 프로세스'
  },

  exampleCodes: {
    softwareDevelopment: `graph TD
    A[요구사항 분석] --> B[시스템 설계]
    B --> C[코딩 구현]
    C --> D[단위 테스트]
    D --> E(테스트 통과?)
    E -- 아니오 --> C
    E -- 예 --> F[시스템 통합]
    F --> G[시스템 테스트]
    G --> H(테스트 통과?)
    H -- 아니오 --> F
    H -- 예 --> I[배포]
    I --> J[유지보수 및 업데이트]
    
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style E fill:#e3f0f7,stroke:#333,stroke-width:2px
    style H fill:#e3f0f7,stroke:#333,stroke-width:2px
    style I fill:#d5f5e3,stroke:#333,stroke-width:2px
    style J fill:#d5f5e3,stroke:#333,stroke-width:2px`,
    
    projectManagement: `gantt
    title 제품 개발 프로젝트 계획
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    
    section 계획
    시장 조사           :a1, 2023-01-01, 15d
    요구사항 분석       :a2, after a1, 10d
    제품 계획           :a3, after a2, 5d
    
    section 설계
    프로토타입 설계     :b1, after a3, 15d
    UI 설계             :b2, after b1, 10d
    사용자 테스트       :b3, after b2, 5d
    
    section 개발
    백엔드 아키텍처    :c1, after b1, 20d
    프론트엔드 개발    :c2, after b2, 15d
    API 통합           :c3, after c1, 10d
    
    section 테스트
    단위 테스트        :d1, after c2, 8d
    통합 테스트        :d2, after c3, 7d
    성능 테스트        :d3, after d2, 5d
    
    section 출시
    내부 검토          :e1, after d3, 5d
    배포 준비          :e2, after e1, 2d
    공식 출시          :milestone, after e2, 0d`,
    
    userRegistration: `sequenceDiagram
    participant 사용자
    participant 프론트엔드
    participant 백엔드
    participant 데이터베이스
    participant 이메일 서비스
    
    사용자->>프론트엔드: 등록 양식 작성
    프론트엔드->>프론트엔드: 양식 유효성 검사
    프론트엔드->>백엔드: 등록 정보 제출
    백엔드->>백엔드: 사용자 데이터 검증
    백엔드->>데이터베이스: 사용자 존재 여부 확인
    데이터베이스-->>백엔드: 확인 결과 반환
    
    alt 사용자 존재
        백엔드-->>프론트엔드: 사용자 존재 오류 반환
        프론트엔드-->>사용자: 오류 메시지 표시
    else 사용자 없음
        백엔드->>데이터베이스: 새 사용자 레코드 생성
        백엔드->>이메일 서비스: 인증 이메일 전송
        이메일 서비스-->>사용자: 인증 링크 포함 이메일 전송
        백엔드-->>프론트엔드: 등록 성공 반환
        프론트엔드-->>사용자: 등록 성공 메시지 표시
    end
    
    사용자->>이메일 서비스: 인증 링크 클릭
    이메일 서비스->>백엔드: 인증 요청
    백엔드->>데이터베이스: 사용자 상태를 인증됨으로 업데이트
    백엔드-->>사용자: 로그인 페이지로 리디렉션`
  }
};