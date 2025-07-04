export default {
  name: '名字生成器',
  description: '隨機生成各種類型的名字，包括不同文化背景和風格的姓名',
  
  // 主要功能
  generateNames: '生成名字',
  regenerate: '重新生成',
  copy: '複製',
  copyAll: '複製全部',
  reset: '重置',
  copied: '已複製',
  
  // 設置和選項
  settings: {
    title: '設置',
    quantity: '數量',
    type: '類型',
    gender: '性別',
    culture: '文化背景',
    style: '風格',
    startsWith: '首字母',
    endsWith: '尾字母',
    minLength: '最小長度',
    maxLength: '最大長度',
    includeMiddleName: '包含中間名',
    includeSurname: '包含姓氏',
    advancedOptions: '進階選項'
  },
  
  // 名字類型
  types: {
    fullName: '完整姓名',
    firstName: '名字',
    lastName: '姓氏',
    nickname: '暱稱',
    fantasy: '奇幻名字',
    scifi: '科幻名字',
    ancient: '古代名字',
    modern: '現代名字',
    custom: '自定義'
  },
  
  // 性別選項
  genders: {
    any: '不限',
    male: '男性',
    female: '女性',
    neutral: '中性'
  },
  
  // 文化背景
  cultures: {
    any: '隨機',
    chinese: '中國',
    japanese: '日本',
    korean: '韓國',
    english: '英語國家',
    spanish: '西班牙語國家',
    french: '法語國家',
    german: '德語國家',
    nordic: '北歐',
    arabic: '阿拉伯',
    indian: '印度',
    russian: '俄羅斯',
    italian: '意大利',
    greek: '希臘',
    fantasy: '奇幻',
    scifi: '科幻'
  },
  
  // 風格選項
  styles: {
    classic: '經典',
    modern: '現代',
    unique: '獨特',
    popular: '流行',
    traditional: '傳統',
    literary: '文學風格',
    historical: '歷史人物風格'
  },
  
  // 結果區域
  results: {
    title: '生成結果',
    empty: '設置參數並點擊"生成名字"按鈕',
    count: '已生成 {count} 個名字'
  },
  
  // 工具介紹信息
  aboutTitle: '關於名字生成器',
  aboutDescription: '名字生成器是一個實用的工具，能夠根據您的需求和偏好隨機生成各種類型的名字。無論是為小說角色、遊戲人物、創意項目，還是尋找靈感為新生兒命名，這個工具都能提供多樣化的選擇。',
  
  featuresTitle: '主要功能',
  feature1: '支援生成來自不同文化背景的名字',
  feature2: '可根據性別、風格和其他參數定制生成結果',
  feature3: '提供完整姓名、單獨名字或姓氏、暱稱等多種類型',
  feature4: '可設置名字的長度範圍和首尾字母',
  feature5: '支援生成獨特的奇幻和科幻名字',
  feature6: '可一次性生成多個名字供您選擇',
  
  useCasesTitle: '使用場景',
  useCase1: '作家為小說、劇本中的角色命名',
  useCase2: '遊戲開發者為遊戲角色創建名字',
  useCase3: '父母尋找嬰兒名字的靈感',
  useCase4: '創作者為藝術作品、品牌或產品命名',
  useCase5: '角色扮演遊戲玩家為角色取名',
  
  tipsTitle: '使用提示',
  tip1: '嘗試不同的文化背景組合獲取更加多樣化的名字',
  tip2: '調整名字長度和首尾字母可以得到更符合需求的名字',
  tip3: '保存您喜歡的名字結果，以便日後參考',
  tip4: '使用"重新生成"按鈕可以基於當前設置快速獲取新的名字',
  tip5: '奇幻和科幻名字類型特別適合為虛構角色或未來世界的人物命名'
};