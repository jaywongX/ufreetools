export default {
  name: '贷款计算器',
  description: '计算房贷、车贷和个人贷款的月供、总利息和还款计划',

  // 主界面文本
  loanType: '贷款类型',

  housingLoan: '房贷',
  carLoan: '车贷',
  personalLoan: '个人贷款',
  loanAmount: '贷款金额',
  loanTerm: '贷款期限',
  interestRate: '年利率',
  paymentMethod: '还款方式',
  equalPrincipalAndInterest: '等额本息',
  equalPrincipal: '等额本金',
  calculate: '计算结果',
  reset: '重置',
  tip: '请先计算还款计划',
  years: '年',
  months: '月',
  amount: '金额',
  currency: '货币',
  CNY: '人民币 (¥)',
  USD: '美元 ($)',
  EUR: '欧元 (€)',
  JPY: '日元 (¥)',
  GBP: '英镑 (£)',

  // 结果区域
  results: '计算结果',

  monthlyPayment: '月供',
  firstMonthPayment: '首月还款',
  lastMonthPayment: '末月还款',
  totalInterest: '总利息',
  totalPayment: '总还款额',
  interestRatio: '利息占比',

  // 还款计划
  paymentSchedule: '还款计划',

  downloadExcel: '导出Excel',
  paymentNo: '期数',
  paymentDate: '还款日期',
  principal: '本金',
  interest: '利息',
  payment: '还款额',
  remainingPrincipal: '剩余本金',

  // 图表
  paymentChart: '还款分析图',

  principalAndInterest: '本金与利息对比',
  monthlyPaymentTrend: '月供变化趋势',

  // 工具介绍部分
  aboutTitle: '关于贷款计算器',

  aboutDescription: '贷款计算器是一款帮助您计算各类贷款详情的工具，可用于房贷、车贷和个人贷款等多种场景，让您对贷款成本有清晰的了解。',
  featuresTitle: '主要功能',
  feature1: '支持等额本息和等额本金两种还款方式',
  feature2: '计算月供、总利息和总还款额',
  feature3: '生成详细的还款计划表',
  feature4: '直观的图表展示本金和利息分布',
  feature5: '支持多种货币单位',
  usageTitle: '使用说明',
  usageStep1: '选择贷款类型（房贷、车贷或个人贷款）',
  usageStep2: '输入贷款金额、期限和年利率',
  usageStep3: '选择还款方式（等额本息或等额本金）',
  usageStep4: '点击"计算结果"按钮获取详细信息',
  usageStep5: '查看还款计划表和图表分析',
  explanationTitle: '还款方式说明',
  explanationEqualPayment: '等额本息：每月还款金额相同，但随着时间推移，利息部分减少，本金部分增加。',
  explanationEqualPrincipal: '等额本金：每月归还等额本金，利息随剩余本金减少而减少，因此月供逐月递减。',
  tipsTitle: '使用技巧',
  tip1: '延长贷款期限可以减少月供，但会增加总利息支出',
  tip2: '等额本金方式总利息支出少于等额本息，但前期月供压力较大',
  tip3: '提前还款可以减少利息支出，尤其是在贷款初期',
  tip4: '使用此工具对比不同贷款方案，选择最适合您财务状况的选项'
}; 