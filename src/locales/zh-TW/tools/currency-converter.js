export default {
  name: '匯率換算',
  description: '快速準確地在不同貨幣之間進行轉換和匯率查詢',
  
  // 主界面文本
  amount: '金額',
  from: '從',
  to: '至',
  convert: '轉換',
  result: '轉換結果',
  swap: '交換貨幣',
  rate: '當前匯率',
  lastUpdated: '最後更新',
  addCurrency: '添加貨幣',
  
  // 歷史記錄
  history: '歷史記錄',
  clearHistory: '清除記錄',
  noHistory: '暫無歷史記錄',
  
  // 貨幣
  currencies: {
    USD: '美元',
    EUR: '歐元',
    JPY: '日元',
    GBP: '英鎊',
    AUD: '澳元',
    CAD: '加元',
    CHF: '瑞士法郎',
    CNY: '人民幣',
    HKD: '港幣',
    NZD: '新西蘭元',
    SEK: '瑞典克朗',
    KRW: '韓元',
    SGD: '新加坡元',
    NOK: '挪威克朗',
    MXN: '墨西哥比索',
    INR: '印度盧比',
    RUB: '俄羅斯盧布',
    ZAR: '南非蘭特',
    TRY: '土耳其里拉',
    BRL: '巴西雷亞爾',
    TWD: '新台幣',
    DKK: '丹麥克朗',
    PLN: '波蘭茲羅提',
    THB: '泰銖',
    IDR: '印尼盾',
    MYR: '馬來西亞林吉特',
    PHP: '菲律賓比索'
  },
  
  // 錯誤消息
  errors: {
    invalidAmount: '請輸入有效的金額',
    apiError: '獲取匯率數據時出錯',
    samecurrencies: '請選擇不同的貨幣進行轉換'
  },
  
  // 提示和信息
  tips: {
    offline: '離線模式：顯示的是最近緩存的匯率數據',
    refreshing: '正在更新匯率數據...'
  },
  
  // 查看歷史匯率
  historicalRates: '歷史匯率',
  dateRange: '日期範圍',
  from7days: '過去7天',
  from30days: '過去30天',
  from90days: '過去90天',
  customRange: '自定義範圍',
  startDate: '開始日期',
  endDate: '結束日期',
  viewChart: '查看圖表',
  
  // 設置
  settings: '設置',
  decimalPlaces: '小數位數',
  autoUpdate: '自動更新匯率',
  defaultCurrency: '默認貨幣',
  
  // 工具介紹
  aboutTitle: '關於匯率換算工具',
  aboutDescription: '匯率換算工具是一個簡單高效的貨幣轉換應用，幫助您快速準確地在不同貨幣之間進行轉換。無論是旅行計劃、國際貿易，還是投資研究，這個工具都能滿足您的需求。',
  
  featuresTitle: '主要功能',
  feature1: '支持30多種主要貨幣的匯率轉換',
  feature2: '實時獲取最新的市場匯率數據',
  feature3: '快速直觀的貨幣轉換計算',
  feature4: '歷史匯率數據查詢和圖表展示',
  feature5: '保存轉換歷史記錄，方便重複使用',
  feature6: '可自定義顯示設置和默認貨幣',
  
  howToUseTitle: '如何使用',
  howToUseStep1: '1. 輸入您想要轉換的金額',
  howToUseStep2: '2. 選擇原始貨幣（從哪種貨幣轉換）',
  howToUseStep3: '3. 選擇目標貨幣（轉換成哪種貨幣）',
  howToUseStep4: '4. 點擊"轉換"按鈕獲取結果',
  howToUseStep5: '5. 可以使用"交換貨幣"按鈕快速切換貨幣方向',
  
  tipsTitle: '使用小貼士',
  tip1: '匯率數據每小時更新一次，確保您獲得較為準確的換算結果',
  tip2: '添加常用貨幣到您的收藏列表，以便快速訪問',
  tip3: '使用歷史圖表功能分析貨幣匯率趨勢',
  tip4: '轉換結果會自動保存在歷史記錄中，方便您稍後查看',
  tip5: '在離線狀態下，工具會使用最近緩存的匯率數據進行計算'
};