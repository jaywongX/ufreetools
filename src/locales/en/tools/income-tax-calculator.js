export default {
  name: 'Income Tax Calculator',
  description: 'Calculate personal income tax and take-home salary from your earnings',
  
  // Main interface text
  taxSystem: 'Tax System',
  china: 'China',
  usa: 'USA',
  uk: 'UK',
  
  monthlyIncome: 'Monthly Income',
  annualIncome: 'Annual Income',
  socialSecurity: 'Social Security & Fund',
  socialSecurityAmount: 'Social Security Amount',
  socialSecurityPercent: 'Social Security Percentage',
  socialSecurityBase: 'Social Security Base',
  
  deductions: 'Special Deductions',
  childrenEducation: 'Children Education',
  continuingEducation: 'Continuing Education',
  housingLoanInterest: 'Housing Loan Interest',
  housingRent: 'Housing Rent',
  elderlySupport: 'Elderly Support',
  medicalTreatment: 'Medical Treatment',
  otherDeductions: 'Other Deductions',
  
  calculate: 'Calculate',
  reset: 'Reset',
  
  // Results area
  results: 'Results',
  taxableIncome: 'Taxable Income',
  taxRate: 'Tax Rate',
  quickDeduction: 'Quick Deduction',
  taxPayable: 'Tax Payable',
  afterTaxIncome: 'After-tax Income',
  effectiveTaxRate: 'Effective Tax Rate',
  monthlyBreakdown: 'Monthly Breakdown',
  
  // Chart area
  taxAnalysis: 'Tax Analysis',
  incomeDistribution: 'Income Distribution',
  income: 'Income',
  tax: 'Tax',
  takeHome: 'Take Home',
  
  // Tax bracket area
  taxBrackets: 'Tax Brackets',
  bracketRange: 'Bracket Range',
  rate: 'Rate',
  
  // Monthly breakdown
  month: 'Month',
  cumulativeIncome: 'Cumulative Income',
  cumulativeDeduction: 'Cumulative Deduction',
  cumulativeTaxable: 'Cumulative Taxable',
  cumulativeTax: 'Cumulative Tax',
  previousTax: 'Previous Tax Paid',
  currentMonthTax: 'Current Month Tax',
  
  // City selection
  city: 'City',
  firstTier: 'First-tier City',
  secondTier: 'Second-tier City',
  otherCity: 'Other City',
  
  // Tool introduction
  aboutTitle: 'About Income Tax',
  aboutDescription: 'Personal income tax is levied on an individual\'s income in most countries. In China, a progressive tax system is used with rates ranging from 3% to 45%, with higher incomes subject to higher tax rates.',
  
  howToUseTitle: 'How to Use This Calculator',
  howToUseStep1: '1. Select the tax system (currently supporting Chinese tax system)',
  howToUseStep2: '2. Enter your monthly or annual income (they automatically convert)',
  howToUseStep3: '3. Enter social security amount or choose percentage calculation',
  howToUseStep4: '4. Fill in special deductions applicable to you',
  howToUseStep5: '5. Click "Calculate" to see the results',
  
  chinaTaxRulesTitle: 'Chinese Tax Calculation Rules',
  chinaTaxRule1: 'Tax threshold: 5,000 CNY/month',
  chinaTaxRule2: 'Taxable income = Income - Social security - Special deductions - Threshold',
  chinaTaxRule3: 'Tax = Taxable income × Tax rate - Quick deduction',
  
  deductionExplainTitle: 'Special Deductions Explained',
  childrenEducationExplain: 'Children Education: 1,000 CNY/month per child',
  continuingEducationExplain: 'Continuing Education: 400 CNY/month for academic education; 3,600 CNY/year for vocational qualification',
  housingLoanExplain: 'Housing Loan Interest: 1,000 CNY/month',
  housingRentExplain: 'Housing Rent: 1,500 CNY/month in first-tier cities; 1,100 CNY/month in second-tier cities; 800 CNY/month in other cities',
  elderlyExplain: 'Elderly Support: 2,000 CNY/month for only child; divided among siblings otherwise',
  medicalExplain: 'Medical Treatment: Annual medical expenses exceeding 15,000 CNY, up to 60,000 CNY/year',
  
  taxTipsTitle: 'Tax Tips',
  taxTip1: 'Make full use of special deductions to reduce your tax burden',
  taxTip2: 'Annual bonuses can be taxed separately or combined with annual income',
  taxTip3: 'Multiple income sources should be combined for tax calculation',
  taxTip4: 'Enterprise annuities and commercial health insurance may be tax-deductible within limits',
  taxTip5: 'Accurately report special deductions to avoid tax risks'
}; 