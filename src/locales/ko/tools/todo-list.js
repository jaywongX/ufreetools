export default {
  name: '할 일 목록',
  description: '작업 및 할 일을 생성, 관리 및 조직화',
  
  // 메인 인터페이스 텍스트
  newTask: '새 작업',
  addTask: '작업 추가',
  taskTitle: '작업 제목',
  description: '설명',
  dueDate: '마감일',
  priority: '우선순위',
  category: '카테고리',
  status: '상태',
  actions: '작업',
  
  // 우선순위
  priorities: {
    high: '높음',
    medium: '중간',
    low: '낮음'
  },
  
  // 카테고리
  categories: {
    work: '업무',
    personal: '개인',
    shopping: '쇼핑',
    health: '건강',
    finance: '재정',
    other: '기타'
  },
  
  // 상태
  statuses: {
    all: '전체',
    pending: '대기 중',
    completed: '완료됨'
  },
  
  // 버튼 텍스트
  edit: '편집',
  delete: '삭제',
  save: '저장',
  cancel: '취소',
  clear: '완료된 항목 지우기',
  clearAll: '전체 지우기',
  
  // 필터 및 정렬
  filter: '필터',
  filterBy: '필터 조건',
  sortBy: '정렬 기준',
  search: '작업 검색...',
  
  // 정렬 옵션
  sortOptions: {
    dateCreatedAsc: '생성 시간 (오름차순)',
    dateCreatedDesc: '생성 시간 (내림차순)',
    dueDateAsc: '마감일 (오름차순)',
    dueDateDesc: '마감일 (내림차순)',
    priorityAsc: '우선순위 (오름차순)',
    priorityDesc: '우선순위 (내림차순)',
    titleAsc: '제목 (A-Z)',
    titleDesc: '제목 (Z-A)'
  },
  
  // 통계 정보
  statistics: '통계',
  totalTasks: '총 작업 수',
  completedTasks: '완료된 작업',
  pendingTasks: '대기 중 작업',
  completionRate: '완료율',
  tasks: '작업',
  
  // 알림 및 확인 메시지
  taskAdded: '작업이 추가되었습니다',
  taskUpdated: '작업이 업데이트되었습니다',
  taskDeleted: '작업이 삭제되었습니다',
  confirmDelete: '이 작업을 삭제하시겠습니까?',
  confirmDeleteAll: '완료된 모든 작업을 삭제하시겠습니까?',
  confirmClearAll: '모든 작업을 지우시겠습니까?',
  noTasks: '작업이 없습니다',
  noFilteredTasks: '조건에 맞는 작업이 없습니다',
  titleRequired: '작업 제목은 필수입니다',
  
  // 도구 소개
  aboutTitle: '할 일 목록 정보',
  aboutDescription: '할 일 목록은 일상 업무와 생활에서 완료해야 할 다양한 작업을 조직화하는 데 도움이 되는 간단하고 효율적인 작업 관리 도구입니다. 작업을 추가, 편집 및 표시함으로써 진행 상황을 명확하게 추적하고 작업 효율성을 높일 수 있습니다.',
  
  featuresTitle: '주요 기능',
  feature1: '작업 추가, 편집 및 삭제',
  feature2: '작업 우선순위 및 마감일 설정',
  feature3: '카테고리별 작업 조직',
  feature4: '작업을 완료됨으로 표시',
  feature5: '다양한 조건으로 작업 필터링 및 정렬',
  feature6: '로컬 저장소 사용으로 데이터 손실 없음',
  
  howToUseTitle: '사용 방법',
  howToUseStep1: '1. "새 작업" 버튼을 클릭하여 새 할 일 추가',
  howToUseStep2: '2. 작업 제목, 설명, 마감일 등 정보 입력',
  howToUseStep3: '3. 필터 및 정렬 기능을 사용하여 작업 목록 정리',
  howToUseStep4: '4. 작업 완료 후 체크박스를 선택하여 완료됨으로 표시',
  howToUseStep5: '5. 편집 및 삭제 기능을 사용하여 기존 작업 관리',
  
  tipsTitle: '사용 팁',
  tip1: '중요한 작업에 높은 우선순위를 설정하여 우선 처리',
  tip2: '카테고리 기능을 사용하여 작업을 다른 영역으로 조직',
  tip3: '정기적으로 완료된 작업을 정리하여 목록을 깔끔하게 유지',
  tip4: '필터 기능을 최대한 활용하여 현재 가장 중요한 작업에 집중',
  tip5: '적절한 마감일을 설정하여 시간을 합리적으로 배치'
};