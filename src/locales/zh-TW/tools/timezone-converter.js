export default {
  name: '時區轉換器',
  description: '全球各地時區時間對比和轉換工具，方便查看不同國家和地區的當前時間',

  // 主要功能標籤
  currentTime: '當前時間',

  addTimezone: '添加時區',
  removeTimezone: '移除時區',
  convertTime: '轉換時間',
  compareTimezones: '比較時區',

  // 設置和選項
  settings: {
    date: '日期',
    time: '時間',
    format: '格式',
    select24Hour: '24小時制',
    select12Hour: '12小時制',
    showSeconds: '顯示秒數',
    hideSeconds: '隱藏秒數',
    showDate: '顯示日期',
    hideDate: '隱藏日期',
  },

  // 時區相關
  timezone: {
    title: '時區',
    search: '搜尋時區或城市...',
    yourLocal: '您的本地時區',
    popular: '常用時區',
    allTimezones: '所有時區',
    utc: 'UTC(協調世界時)',
    gmt: 'GMT(格林威治標準時間)',
    est: '美國東部時間',
    cst: '中國標準時間',
    jst: '日本標準時間',
    ist: '印度標準時間',
    cet: '中歐時間',
    bst: '英國夏令時間',
    aest: '澳大利亞東部標準時間',
    nzst: '新西蘭標準時間',
    custom: '自定義時區'
  },

  // 區域和洲分組
  regions: {
    africa: '非洲',
    america: '美洲',
    asia: '亞洲',
    atlantic: '大西洋',
    australia: '澳大利亞',
    europe: '歐洲',
    indian: '印度洋',
    pacific: '太平洋'
  },

  // 轉換相關
  conversion: {
    from: '從',
    to: '到',
    convert: '轉換',
    result: '轉換結果',
    timeIn: '時間在'
  },

  // 界面元素
  ui: {
    now: '現在',
    refresh: '刷新',
    copy: '複製',
    copied: '已複製',
    share: '分享',
    reset: '重置',
    empty: '無結果',
    offset: '偏移',
    add: '添加'
  },

  // 消息提示
  messages: {
    invalid: '無效的時間',
    copied: '已複製到剪貼板',
    removed: '已移除時區',
    added: '已添加時區',
    maxTimezones: '最多只能添加10個時區',
    selectTimezone: '請選擇時區'
  },

  // 工具介紹
  aboutTitle: '關於時區轉換器',

  aboutDescription: '時區轉換器是一個便捷的工具，幫助您輕鬆查看和比較全球不同地區的時間，對於跨國溝通、旅行規劃、國際會議安排等場景非常實用。',
  featuresTitle: '主要功能',
  feature1: '實時顯示世界各主要城市和時區的當前時間',
  feature2: '快速比較多個時區之間的時間差異',
  feature3: '轉換任意時區的時間到另一個時區',
  feature4: '支持24小時制和12小時制時間格式',
  feature5: '一目了然地查看工作時間重疊情況',
  feature6: '支持搜索城市或國家來找到對應時區',
  useCasesTitle: '使用場景',
  useCase1: '安排跨國商務會議或電話會議',
  useCase2: '規劃國際旅行和航班時間',
  useCase3: '與海外朋友或家人保持聯繫',
  useCase4: '跟踪重要國際事件的當地時間',
  useCase5: '遠程工作團隊的協作時間安排',
  howToUseTitle: '如何使用',
  howToUse1: '添加多個時區來同時查看不同地區的當前時間',
  howToUse2: '使用轉換功能將特定時間從一個時區轉換到另一個時區',
  howToUse3: '調整日期和時間格式滿足您的個性化需求',
  howToUse4: '複製結果或生成鏈接與他人分享'
};