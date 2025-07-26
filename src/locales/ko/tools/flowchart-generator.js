export default {
  name: '플로우차트 생성기',
  description: '간단한 텍스트 기반 문법으로 플로우차트와 다이어그램 생성',
  title: '플로우차트 및 다이어그램 생성기',
  renderBtn: '다이어그램 렌더링',
  resetBtn: '초기화',
  downloadSvgBtn: 'SVG 다운로드',
  copySvgBtn: 'SVG 복사',

  input: {
    title: '플로우차트 정의',
    placeholder: 'Mermaid 문법 코드 입력...',
    loadExample: '예제 로드',
    clear: '지우기',
    uploadFile: '파일 업로드'
  },

  output: {
    title: '생성된 플로우차트',
    downloadImage: '이미지 다운로드',
    downloadSVG: 'SVG 다운로드',
    copyImage: '이미지 복사',
    copySVG: 'SVG 복사',
    zoomIn: '확대',
    zoomOut: '축소',
    fitView: '뷰 맞추기',
    resetView: '뷰 초기화',
    preview: '미리보기',
    code: 'Mermaid 코드'
  },

  options: {
    title: '옵션',
    theme: '테마',
    orientation: '방향',
    nodeShape: '노드 모양',
    arrowStyle: '화살표 스타일',
    lineStyle: '선 스타일',
    textPosition: '텍스트 위치',
    fontSize: '글자 크기',
    fontFamily: '글꼴',
    showGrid: '그리드 표시',
    autoRender: '자동 렌더링'
  },

  themes: {
    default: '기본',
    simple: '심플',
    forest: '포레스트',
    neutral: '중립',
    dark: '다크',
    business: '비즈니스',
    base: '베이스',
    custom: '사용자 정의'
  },

  orientations: {
    topToBottom: '위에서 아래로',
    bottomToTop: '아래에서 위로',
    leftToRight: '왼쪽에서 오른쪽으로',
    rightToLeft: '오른쪽에서 왼쪽으로'
  },

  nodeShapes: {
    rectangle: '직사각형',
    roundedRectangle: '둥근 직사각형',
    circle: '원형',
    diamond: '다이아몬드',
    hexagon: '육각형',
    parallelogram: '평행사변형'
  },

  arrowStyles: {
    arrow: '화살표',
    open: '열린 화살표',
    filled: '채워진 화살표',
    diamond: '다이아몬드',
    circle: '원형'
  },

  lineStyles: {
    solid: '실선',
    dashed: '파선',
    dotted: '점선',
    curved: '곡선',
    straight: '직선',
    orthogonal: '직교'
  },

  syntax: {
    title: '문법 도움말',
    node: '노드',
    edge: '간선',
    subgraph: '서브그래프',
    comment: '주석',
    styling: '스타일링',
    showMore: '더 보기'
  },

  actions: {
    render: '플로우차트 렌더링',
    save: '다이어그램 저장',
    export: '내보내기',
    share: '공유'
  },

  messages: {
    renderSuccess: '플로우차트 렌더링 성공',
    renderError: '플로우차트 렌더링 오류: {error}',
    syntaxError: '문법 오류: {error}',
    saved: '다이어그램 저장됨',
    copied: 'SVG 코드가 클립보드에 복사됨',
    copyFailed: '복사 실패, 수동으로 복사하세요',
    exported: '플로우차트 내보내기 완료',
    emptyCode: 'Mermaid 문법 코드를 입력하세요',
    rendering: '렌더링 중...',
    errorTitle: '렌더링 오류'
  },

  examples: {
    flowchart: '플로우차트',
    classDiagram: '클래스 다이어그램',
    sequenceDiagram: '시퀀스 다이어그램',
    entityRelationship: '엔티티 관계도',
    gantt: '간트 차트',
    stateDiagram: '상태 다이어그램',
    pieChart: '파이 차트',
    userJourney: '사용자 여정도'
  },

  exampleCodes: {
    flowchart: `graph TD
    A[시작] --> B{올바른가?}
    B -->|예| C[결과 정확]
    B -->|아니오| D[결과 오류]
    C --> E[종료]
    D --> E
`,
    sequenceDiagram: `sequenceDiagram
    participant 클라이언트
    participant 서버
    클라이언트->>서버: 데이터 요청
    서버-->>클라이언트: 데이터 응답
    클라이언트->>서버: 폼 제출
    서버-->>클라이언트: 제출 확인
`,
    gantt: `gantt
    title 프로젝트 일정 계획
    dateFormat  YYYY-MM-DD
    section 계획 단계
    요구사항 수집       :a1, 2023-01-01, 30d
    시스템 설계         :after a1, 20d
    section 개발 단계
    백엔드 개발         :2023-02-20, 45d
    프론트엔드 개발     :2023-02-25, 40d
    section 테스트 단계
    시스템 테스트       :2023-04-05, 20d
    사용자 테스트       :2023-04-20, 15d
    section 출시 단계
    배포               :2023-05-05, 10d
`,
    stateDiagram: `stateDiagram-v2
    [*] --> 편집중
    편집중 --> 검토중: 검토 제출
    검토중 --> 거부됨: 거절
    검토중 --> 게시됨: 승인
    거부됨 --> 편집중: 수정 후 재제출
    게시됨 --> [*]
`,
    pieChart: `pie
    title 웹사이트 트래픽 소스 분포
    "검색 엔진" : 42.7
    "직접 접속" : 28.9
    "소셜 미디어" : 18.5
    "기타 채널" : 9.9
`,
    classDiagram: `classDiagram
    class 동물 {
        +String 이름
        +int 나이
        +소리내기() void
    }
    class 개 {
        +String 품종
        +물어오기() void
    }
    class 고양이 {
        +String 색상
        +올라가기() void
    }
    동물 <|-- 개
    동물 <|-- 고양이
`
  }
};