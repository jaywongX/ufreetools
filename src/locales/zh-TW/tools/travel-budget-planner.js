export default {
  name: '旅行預算規劃器',
  description: '規劃並計算您的旅行預算，輕鬆管理旅行花費',
  
  // 主要界面元素
  planYourTrip: '規劃您的旅行',
  destination: '目的地',
  startDate: '開始日期',
  endDate: '結束日期',
  travelers: '旅客人數',
  currency: '顯示貨幣',
  tripDuration: '旅行天數',
  totalBudget: '總預算',
  perPersonBudget: '每人預算',
  perDayBudget: '每日預算',
  
  // 按鈕和操作
  calculate: '計算預算',
  reset: '重置',
  addExpense: '添加支出項',
  removeExpense: '移除',
  saveAsPDF: '保存為PDF',
  
  // 分類標題
  categories: {
    transport: '交通',
    accommodation: '住宿',
    food: '餐飲',
    activities: '活動和景點',
    shopping: '購物',
    misc: '其他費用',
    emergency: '緊急備用金'
  },
  
  // 交通選項
  transport: {
    title: '交通費用',
    flight: '機票',
    train: '火車',
    bus: '巴士',
    car: '汽車租賃/燃油',
    taxi: '計程車/網約車',
    publicTransport: '公共交通',
    other: '其他交通'
  },
  
  // 住宿選項
  accommodation: {
    title: '住宿費用',
    hotel: '酒店',
    hostel: '青年旅舍',
    apartment: '民宿/公寓',
    camping: '露營',
    other: '其他住宿'
  },
  
  // 餐飲選項
  food: {
    title: '餐飲費用',
    restaurants: '餐廳用餐',
    streetFood: '街邊小吃',
    groceries: '採購食材',
    drinks: '飲料/酒水',
    other: '其他餐飲'
  },
  
  // 活動選項
  activities: {
    title: '活動和景點',
    attractions: '景點門票',
    tours: '導遊/團隊活動',
    entertainment: '娛樂活動',
    other: '其他活動'
  },
  
  // 其他費用
  misc: {
    title: '其他費用',
    insurance: '旅行保險',
    visa: '簽證費用',
    souvenirs: '紀念品',
    internet: '上網費用',
    tips: '小費',
    other: '其他雜費'
  },
  
  // 表格標題
  table: {
    category: '類別',
    description: '描述',
    amount: '金額',
    actions: '操作'
  },
  
  // 統計和分析
  analysis: {
    title: '預算分析',
    summary: '預算摘要',
    breakdown: '花費細分',
    distribution: '預算分佈',
    dailyAverage: '每日平均',
    suggestions: '預算建議'
  },
  
  // 貨幣
  currencies: {
    CNY: '人民幣 (¥)',
    USD: '美元 ($)',
    EUR: '歐元 (€)',
    JPY: '日元 (¥)',
    GBP: '英鎊 (£)',
    KRW: '韓元 (₩₩)',
    AUD: '澳元 ($)',
    CAD: '加元 ($)',
    THB: '泰銖 (฿฿)',
    SGD: '新加坡元 ($)'
  },
  
  // 常見目的地
  destinations: {
    domestic: '國內目的地',
    international: '國際目的地',
    popularCities: '熱門城市',
    beijing: '北京',
    shanghai: '上海',
    guangzhou: '廣州',
    shenzhen: '深圳',
    hangzhou: '杭州',
    chengdu: '成都',
    xian: '西安',
    sanya: '三亞',
    tokyo: '東京',
    osaka: '大阪',
    seoul: '首爾',
    bangkok: '曼谷',
    singapore: '新加坡',
    paris: '巴黎',
    london: '倫敦',
    newyork: '紐約',
    sydney: '悉尼',
    custom: '自定義目的地'
  },
  
  // 提示和建議
  tips: {
    general: '一般建議',
    saveMoney: '節省預算建議',
    localCurrency: '當地貨幣提示',
    emergencyFund: '建議預留總預算的10-15%作為緊急備用金',
    transport: '提前預訂機票通常可以節省費用',
    accommodation: '考慮選擇帶廚房的住宿可以減少餐飲開支',
    food: '嘗試當地平價美食比國際連鎖餐廳更經濟',
    planning: '制定詳細的每日行程有助於控制預算',
    extraCosts: '別忘了考慮小費、網絡和交通卡等小額費用'
  },
  
  // 提示信息
  messages: {
    success: '預算已成功計算',
    error: '請填寫所有必填項',
    dateError: '結束日期必須晚於開始日期',
    saved: '預算方案已保存',
    deleted: '預算方案已刪除',
    highBudget: '您的預算看起來高於該目的地的平均水平',
    lowBudget: '您的預算可能偏低，請確保涵蓋了所有必要開支'
  },
  
  // 頁腳介紹信息
  about: {
    title: '關於旅行預算規劃器',
    description: '旅行預算規劃器是一個幫助您管理旅行花費的工具，讓您的旅行既愉快又經濟。通過詳細規劃各項開支，避免旅途中的資金壓力，充分享受旅行體驗。',
    
    featuresTitle: '主要功能',
    feature1: '根據旅行目的地、時長和人數制定合理預算',
    feature2: '細分交通、住宿、餐飲、活動等各類旅行支出',
    feature3: '提供預算分析和視覺化展示',
    feature4: '支持多種貨幣顯示和轉換',
    feature5: '提供節省旅行開支的實用建議',
    feature6: '可導出和保存預算方案',
    
    benefitsTitle: '使用優勢',
    benefit1: '避免旅行中的預算超支',
    benefit2: '合理分配資金到不同旅行環節',
    benefit3: '減少旅行財務壓力',
    benefit4: '提高旅行規劃效率',
    benefit5: '適應不同旅行風格和預算需求',
    
    tipsTitle: '預算規劃小貼士',
    tip1: '根據旅行目的地的消費水平調整預算',
    tip2: '預留10-15%的資金作為突發狀況備用',
    tip3: '淡季出行可以顯著節省住宿和交通費用',
    tip4: '使用信用卡時注意了解國外刷卡手續費',
    tip5: '考慮購買旅行保險以應對可能的緊急情況'
  }
};