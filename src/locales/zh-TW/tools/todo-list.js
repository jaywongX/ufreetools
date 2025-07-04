export default {
  name: '待辦事項清單',
  description: '創建、管理和組織您的任務和待辦事項',
  
  // 主界面文本
  newTask: '新增任務',
  addTask: '添加任務',
  taskTitle: '任務標題',
  description: '描述',
  dueDate: '截止日期',
  priority: '優先級',
  category: '分類',
  status: '狀態',
  actions: '操作',
  
  // 優先級
  priorities: {
    high: '高',
    medium: '中',
    low: '低'
  },
  
  // 分類
  categories: {
    work: '工作',
    personal: '個人',
    shopping: '購物',
    health: '健康',
    finance: '財務',
    other: '其他'
  },
  
  // 狀態
  statuses: {
    all: '全部',
    pending: '待處理',
    completed: '已完成'
  },
  
  // 按鈕文本
  edit: '編輯',
  delete: '刪除',
  save: '保存',
  cancel: '取消',
  clear: '清除已完成',
  clearAll: '清除全部',
  
  // 篩選和排序
  filter: '篩選',
  filterBy: '篩選條件',
  sortBy: '排序方式',
  search: '搜尋任務...',
  
  // 排序選項
  sortOptions: {
    dateCreatedAsc: '創建時間（升序）',
    dateCreatedDesc: '創建時間（降序）',
    dueDateAsc: '截止日期（升序）',
    dueDateDesc: '截止日期（降序）',
    priorityAsc: '優先級（升序）',
    priorityDesc: '優先級（降序）',
    titleAsc: '標題（A-Z）',
    titleDesc: '標題（Z-A）'
  },
  
  // 統計信息
  statistics: '統計信息',
  totalTasks: '總任務數',
  completedTasks: '已完成任務',
  pendingTasks: '待完成任務',
  completionRate: '完成率',
  tasks: '任務',
  
  // 提示和確認信息
  taskAdded: '任務已添加',
  taskUpdated: '任務已更新',
  taskDeleted: '任務已刪除',
  confirmDelete: '確定要刪除這個任務嗎？',
  confirmDeleteAll: '確定要刪除所有已完成的任務嗎？',
  confirmClearAll: '確定要清除所有任務嗎？',
  noTasks: '暫無任務',
  noFilteredTasks: '沒有符合條件的任務',
  titleRequired: '任務標題不能為空',
  
  // 工具介紹
  aboutTitle: '關於待辦事項清單',
  aboutDescription: '待辦事項清單是一個簡單高效的任務管理工具，幫助您組織日常工作和生活中需要完成的各項任務。通過添加、編輯和標記任務，您可以清晰地跟踪您的進度並提高工作效率。',
  
  featuresTitle: '主要功能',
  feature1: '添加、編輯和刪除任務',
  feature2: '設置任務優先級和截止日期',
  feature3: '按類別組織任務',
  feature4: '標記任務為已完成',
  feature5: '按多種條件篩選和排序任務',
  feature6: '本地存儲，數據不會丟失',
  
  howToUseTitle: '如何使用',
  howToUseStep1: '1. 點擊"新增任務"按鈕添加新的待辦事項',
  howToUseStep2: '2. 填寫任務標題、描述、截止日期等信息',
  howToUseStep3: '3. 通過篩選和排序功能整理您的任務列表',
  howToUseStep4: '4. 完成任務後勾選複選框標記為已完成',
  howToUseStep5: '5. 使用編輯和刪除功能管理現有任務',
  
  tipsTitle: '使用小貼士',
  tip1: '為重要任務設置高優先級，以便優先處理',
  tip2: '使用分類功能將任務組織到不同領域',
  tip3: '定期清理已完成的任務，保持清單整潔',
  tip4: '充分利用篩選功能，專注於當前最重要的任務',
  tip5: '設置適當的截止日期，幫助您合理安排時間'
};