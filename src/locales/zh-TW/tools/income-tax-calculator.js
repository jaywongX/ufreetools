export default {
  name: '個人所得稅計算器',
  description: '計算個人薪資收入應繳納的所得稅及實際到手薪資',

  // 主要界面文本
  taxSystem: '稅收體系',

  china: '中國',
  usa: '美國',
  uk: '英國',
  monthlyIncome: '月收入',
  annualIncome: '年收入',
  socialSecurity: '社保公積金',
  socialSecurityAmount: '社保公積金金額',
  socialSecurityPercent: '社保公積金比例',
  socialSecurityBase: '社保基數',
  deductions: '專項附加扣除',
  childrenEducation: '子女教育',
  continuingEducation: '繼續教育',
  housingLoanInterest: '住房貸款利息',
  housingRent: '住房租金',
  elderlySupport: '贍養老人',
  medicalTreatment: '大病醫療',
  otherDeductions: '其他扣除',
  calculate: '計算',
  reset: '重置',

  // 結果區域
  results: '計算結果',

  taxableIncome: '應納稅所得額',
  taxRate: '適用稅率',
  quickDeduction: '速算扣除數',
  taxPayable: '應納稅額',
  afterTaxIncome: '稅後收入',
  effectiveTaxRate: '實際稅率',
  monthlyBreakdown: '月度明細',

  // 圖表區域
  taxAnalysis: '稅收分析',

  incomeDistribution: '收入分配',
  income: '收入',
  tax: '稅金',
  takeHome: '實得',

  // 稅率表區域
  taxBrackets: '稅率表',

  bracketRange: '級距範圍',
  rate: '稅率',

  // 月度明細
  month: '月份',

  cumulativeIncome: '累計收入',
  cumulativeDeduction: '累計扣除',
  cumulativeTaxable: '累計應納稅所得額',
  cumulativeTax: '累計應納稅額',
  previousTax: '上月已繳稅額',
  currentMonthTax: '本月應繳稅額',

  // 城市選擇
  city: '城市',

  firstTier: '一線城市',
  secondTier: '二線城市',
  otherCity: '其他城市',

  // 工具介紹
  aboutTitle: '關於個人所得稅',

  aboutDescription: '個人所得稅是對個人取得的各項應稅所得徵收的一種稅，在大多數國家都是主要的稅種之一。中國個人所得稅採用超額累進稅率，稅率從3%到45%不等，收入越高適用的稅率越高。',
  howToUseTitle: '如何使用本計算器',
  howToUseStep1: '1. 選擇稅收體系（目前支援中國稅制）',
  howToUseStep2: '2. 輸入月收入或年收入（二者會自動換算）',
  howToUseStep3: '3. 輸入社保公積金金額或選擇按比例計算',
  howToUseStep4: '4. 填寫各項專項附加扣除',
  howToUseStep5: '5. 點擊"計算"按鈕獲取結果',
  chinaTaxRulesTitle: '中國個稅計算規則',
  chinaTaxRule1: '起徵點：5,000元/月',
  chinaTaxRule2: '應納稅所得額 = 收入 - 社保公積金 - 專項附加扣除 - 起徵點',
  chinaTaxRule3: '個稅 = 應納稅所得額 × 稅率 - 速算扣除數',
  deductionExplainTitle: '專項附加扣除說明',
  childrenEducationExplain: '子女教育：每個子女可按1,000元/月扣除',
  continuingEducationExplain: '繼續教育：學歷教育400元/月；職業資格3,600元/年',
  housingLoanExplain: '住房貸款利息：1,000元/月',
  housingRentExplain: '住房租金：一線城市1,500元/月；二線城市1,100元/月；其他城市800元/月',
  elderlyExplain: '贍養老人：獨生子女2,000元/月；非獨生子女分攤2,000元/月',
  medicalExplain: '大病醫療：年度醫療支出超過15,000元部分，最高60,000元/年',
  taxTipsTitle: '納稅小貼士',
  taxTip1: '合理利用專項附加扣除可以有效減輕稅負',
  taxTip2: '年終獎可選擇單獨計稅或併入當年綜合所得計稅',
  taxTip3: '如有多處收入，需合併計算個人所得稅',
  taxTip4: '企業年金、商業健康保險等也可在一定額度內稅前扣除',
  taxTip5: '準確申報專項附加扣除，避免稅務風險'
};