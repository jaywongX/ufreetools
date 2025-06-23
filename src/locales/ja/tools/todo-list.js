export default {
  name: 'ToDoリスト',
  description: 'タスクやToDoの作成、管理、整理',
  
  // 主界面文本
  newTask: '新規タスク',
  addTask: 'タスクを追加',
  taskTitle: 'タスク名',
  description: '説明',
  dueDate: '期限',
  priority: '優先度',
  category: 'カテゴリ',
  status: 'ステータス',
  actions: '操作',
  
  // 优先级
  priorities: {
    high: '高',
    medium: '中',
    low: '低'
  },
  
  // 分类
  categories: {
    work: '仕事',
    personal: '個人',
    shopping: 'ショッピング',
    health: '健康',
    finance: '財務',
    other: 'その他'
  },
  
  // 状态
  statuses: {
    all: 'すべて',
    pending: '未完了',
    completed: '完了済み'
  },
  
  // 按钮文本
  edit: '編集',
  delete: '削除',
  save: '保存',
  cancel: 'キャンセル',
  clear: '完了済みを削除',
  clearAll: 'すべて削除',
  
  // 筛选和排序
  filter: 'フィルター',
  filterBy: 'フィルター条件',
  sortBy: '並び替え',
  search: 'タスクを検索...',
  
  // 排序选项
  sortOptions: {
    dateCreatedAsc: '作成日（昇順）',
    dateCreatedDesc: '作成日（降順）',
    dueDateAsc: '期限（昇順）',
    dueDateDesc: '期限（降順）',
    priorityAsc: '優先度（昇順）',
    priorityDesc: '優先度（降順）',
    titleAsc: 'タイトル（A-Z）',
    titleDesc: 'タイトル（Z-A）'
  },
  
  // 统计信息
  statistics: '統計情報',
  totalTasks: '合計タスク数',
  completedTasks: '完了タスク',
  pendingTasks: '未完了タスク',
  completionRate: '完了率',
  tasks: 'タスク',
  
  // 提示和确认信息
  taskAdded: 'タスクが追加されました',
  taskUpdated: 'タスクが更新されました',
  taskDeleted: 'タスクが削除されました',
  confirmDelete: 'このタスクを削除してもよろしいですか？',
  confirmDeleteAll: '完了済みのタスクをすべて削除してもよろしいですか？',
  confirmClearAll: 'すべてのタスクを削除してもよろしいですか？',
  noTasks: 'タスクがありません',
  noFilteredTasks: '条件に一致するタスクがありません',
  titleRequired: 'タスク名は必須です',
  
  // 工具介绍
  aboutTitle: 'ToDoリストについて',
  aboutDescription: 'ToDoリストは、日常の仕事や生活で完了すべきさまざまなタスクを整理するのに役立つ、シンプルで効率的なタスク管理ツールです。タスクの追加、編集、マークを通じて、進捗状況を明確に追跡し、作業効率を向上させることができます。',
  
  featuresTitle: '主な機能',
  feature1: 'タスクの追加、編集、削除',
  feature2: 'タスクの優先度と期限の設定',
  feature3: 'カテゴリ別のタスク整理',
  feature4: 'タスクを完了としてマーク',
  feature5: '複数の条件でタスクをフィルターと並べ替え',
  feature6: 'ローカルストレージでデータが失われない',
  
  howToUseTitle: '使用方法',
  howToUseStep1: '1. 「新規タスク」ボタンをクリックして新しいToDoを追加',
  howToUseStep2: '2. タスク名、説明、期限などの情報を入力',
  howToUseStep3: '3. フィルターと並べ替え機能でタスクリストを整理',
  howToUseStep4: '4. タスク完了後、チェックボックスをクリックして完了としてマーク',
  howToUseStep5: '5. 編集と削除機能を使用して既存のタスクを管理',
  
  tipsTitle: '使用のヒント',
  tip1: '重要なタスクには高優先度を設定し、優先的に処理',
  tip2: 'カテゴリ機能を使用してタスクを異なる領域に整理',
  tip3: '定期的に完了済みのタスクをクリアして、リストを整理',
  tip4: 'フィルター機能を活用して、現在最も重要なタスクに集中',
  tip5: '適切な期限を設定して、時間を合理的に計画'
}; 