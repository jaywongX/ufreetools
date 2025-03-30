export default {
  name: '待办事项清单',
  description: '创建、管理和组织您的任务和待办事项',
  
  // 主界面文本
  newTask: '新建任务',
  addTask: '添加任务',
  taskTitle: '任务标题',
  description: '描述',
  dueDate: '截止日期',
  priority: '优先级',
  category: '分类',
  status: '状态',
  actions: '操作',
  
  // 优先级
  priorities: {
    high: '高',
    medium: '中',
    low: '低'
  },
  
  // 分类
  categories: {
    work: '工作',
    personal: '个人',
    shopping: '购物',
    health: '健康',
    finance: '财务',
    other: '其他'
  },
  
  // 状态
  statuses: {
    all: '全部',
    pending: '待处理',
    completed: '已完成'
  },
  
  // 按钮文本
  edit: '编辑',
  delete: '删除',
  save: '保存',
  cancel: '取消',
  clear: '清除已完成',
  clearAll: '清除全部',
  
  // 筛选和排序
  filter: '筛选',
  filterBy: '筛选条件',
  sortBy: '排序方式',
  search: '搜索任务...',
  
  // 排序选项
  sortOptions: {
    dateCreatedAsc: '创建时间（升序）',
    dateCreatedDesc: '创建时间（降序）',
    dueDateAsc: '截止日期（升序）',
    dueDateDesc: '截止日期（降序）',
    priorityAsc: '优先级（升序）',
    priorityDesc: '优先级（降序）',
    titleAsc: '标题（A-Z）',
    titleDesc: '标题（Z-A）'
  },
  
  // 统计信息
  statistics: '统计信息',
  totalTasks: '总任务数',
  completedTasks: '已完成任务',
  pendingTasks: '待完成任务',
  completionRate: '完成率',
  tasks: '任务',
  
  // 提示和确认信息
  taskAdded: '任务已添加',
  taskUpdated: '任务已更新',
  taskDeleted: '任务已删除',
  confirmDelete: '确定要删除这个任务吗？',
  confirmDeleteAll: '确定要删除所有已完成的任务吗？',
  confirmClearAll: '确定要清除所有任务吗？',
  noTasks: '暂无任务',
  noFilteredTasks: '没有符合条件的任务',
  titleRequired: '任务标题不能为空',
  
  // 工具介绍
  aboutTitle: '关于待办事项清单',
  aboutDescription: '待办事项清单是一个简单高效的任务管理工具，帮助您组织日常工作和生活中需要完成的各项任务。通过添加、编辑和标记任务，您可以清晰地跟踪您的进度并提高工作效率。',
  
  featuresTitle: '主要功能',
  feature1: '添加、编辑和删除任务',
  feature2: '设置任务优先级和截止日期',
  feature3: '按类别组织任务',
  feature4: '标记任务为已完成',
  feature5: '按多种条件筛选和排序任务',
  feature6: '本地存储，数据不会丢失',
  
  howToUseTitle: '如何使用',
  howToUseStep1: '1. 点击"新建任务"按钮添加新的待办事项',
  howToUseStep2: '2. 填写任务标题、描述、截止日期等信息',
  howToUseStep3: '3. 通过筛选和排序功能整理您的任务列表',
  howToUseStep4: '4. 完成任务后勾选复选框标记为已完成',
  howToUseStep5: '5. 使用编辑和删除功能管理现有任务',
  
  tipsTitle: '使用小贴士',
  tip1: '为重要任务设置高优先级，以便优先处理',
  tip2: '使用分类功能将任务组织到不同领域',
  tip3: '定期清理已完成的任务，保持清单整洁',
  tip4: '充分利用筛选功能，专注于当前最重要的任务',
  tip5: '设置适当的截止日期，帮助您合理安排时间'
}; 