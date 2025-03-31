export default {
  name: '个人所得税计算器',
  description: '计算个人工资收入应缴纳的所得税及实际到手工资',
  
  // 主要界面文本
  taxSystem: '税收体系',
  china: '中国',
  usa: '美国',
  uk: '英国',
  
  monthlyIncome: '月收入',
  annualIncome: '年收入',
  socialSecurity: '社保公积金',
  socialSecurityAmount: '社保公积金金额',
  socialSecurityPercent: '社保公积金比例',
  socialSecurityBase: '社保基数',
  
  deductions: '专项附加扣除',
  childrenEducation: '子女教育',
  continuingEducation: '继续教育',
  housingLoanInterest: '住房贷款利息',
  housingRent: '住房租金',
  elderlySupport: '赡养老人',
  medicalTreatment: '大病医疗',
  otherDeductions: '其他扣除',
  
  calculate: '计算',
  reset: '重置',
  
  // 结果区域
  results: '计算结果',
  taxableIncome: '应纳税所得额',
  taxRate: '适用税率',
  quickDeduction: '速算扣除数',
  taxPayable: '应纳税额',
  afterTaxIncome: '税后收入',
  effectiveTaxRate: '实际税率',
  monthlyBreakdown: '月度明细',
  
  // 图表区域
  taxAnalysis: '税收分析',
  incomeDistribution: '收入分配',
  income: '收入',
  tax: '税金',
  takeHome: '实得',
  
  // 税率表区域
  taxBrackets: '税率表',
  bracketRange: '级距范围',
  rate: '税率',
  
  // 月度明细
  month: '月份',
  cumulativeIncome: '累计收入',
  cumulativeDeduction: '累计扣除',
  cumulativeTaxable: '累计应纳税所得额',
  cumulativeTax: '累计应纳税额',
  previousTax: '上月已缴税额',
  currentMonthTax: '本月应缴税额',
  
  // 城市选择
  city: '城市',
  firstTier: '一线城市',
  secondTier: '二线城市',
  otherCity: '其他城市',
  
  // 工具介绍
  aboutTitle: '关于个人所得税',
  aboutDescription: '个人所得税是对个人取得的各项应税所得征收的一种税，在大多数国家都是主要的税种之一。中国个人所得税采用超额累进税率，税率从3%到45%不等，收入越高适用的税率越高。',
  
  howToUseTitle: '如何使用本计算器',
  howToUseStep1: '1. 选择税收体系（目前支持中国税制）',
  howToUseStep2: '2. 输入月收入或年收入（二者会自动换算）',
  howToUseStep3: '3. 输入社保公积金金额或选择按比例计算',
  howToUseStep4: '4. 填写各项专项附加扣除',
  howToUseStep5: '5. 点击"计算"按钮获取结果',
  
  chinaTaxRulesTitle: '中国个税计算规则',
  chinaTaxRule1: '起征点：5,000元/月',
  chinaTaxRule2: '应纳税所得额 = 收入 - 社保公积金 - 专项附加扣除 - 起征点',
  chinaTaxRule3: '个税 = 应纳税所得额 × 税率 - 速算扣除数',
  
  deductionExplainTitle: '专项附加扣除说明',
  childrenEducationExplain: '子女教育：每个子女可按1,000元/月扣除',
  continuingEducationExplain: '继续教育：学历教育400元/月；职业资格3,600元/年',
  housingLoanExplain: '住房贷款利息：1,000元/月',
  housingRentExplain: '住房租金：一线城市1,500元/月；二线城市1,100元/月；其他城市800元/月',
  elderlyExplain: '赡养老人：独生子女2,000元/月；非独生子女分摊2,000元/月',
  medicalExplain: '大病医疗：年度医疗支出超过15,000元部分，最高60,000元/年',
  
  taxTipsTitle: '纳税小贴士',
  taxTip1: '合理利用专项附加扣除可以有效减轻税负',
  taxTip2: '年终奖可选择单独计税或并入当年综合所得计税',
  taxTip3: '如有多处收入，需合并计算个人所得税',
  taxTip4: '企业年金、商业健康保险等也可在一定额度内税前扣除',
  taxTip5: '准确申报专项附加扣除，避免税务风险'
}; 