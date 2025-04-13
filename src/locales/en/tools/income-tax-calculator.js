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
  taxTip5: 'Accurately report special deductions to avoid tax risks',
  
  // 添加文章内容
  article: {
    title: "Income Tax Calculator: Comprehensive Personal Tax Planning Tool",
    features: {
      title: "Understanding the Income Tax Calculator and Its Benefits",
      description: "The <strong>Income Tax Calculator</strong> is a powerful financial planning tool designed to help individuals accurately estimate their <strong>personal income tax</strong> obligations and take-home pay. Using the latest <strong>tax rates</strong> and deduction rules, this calculator provides a detailed breakdown of your tax liability based on your income and applicable deductions.<br><br>Our calculator currently supports the Chinese <strong>progressive tax system</strong> with its seven-tier structure ranging from 3% to 45%, with plans to expand to other countries' tax systems in the future. The tool not only provides the bottom-line numbers but also offers a transparent view of how your <strong>taxable income</strong> is calculated, which <strong>tax bracket</strong> you fall into, and provides a monthly breakdown of your tax obligations throughout the year.",
      useCases: {
        title: "Practical Applications for Tax Calculation",
        items: [
          "<strong>Salary Negotiation Preparation</strong>: Before accepting a job offer or negotiating a raise, use the calculator to understand the actual take-home pay difference. This allows you to make informed decisions based on your <strong>after-tax income</strong> rather than gross figures, ensuring your salary expectations align with your financial needs.",
          "<strong>Annual Financial Planning</strong>: Incorporate accurate <strong>tax estimates</strong> into your yearly budget planning. Understanding your monthly <strong>tax withholding</strong> allows for more precise cash flow projections and helps avoid financial surprises throughout the fiscal year.",
          "<strong>Optimizing Tax Deductions</strong>: Experiment with different <strong>special deduction</strong> scenarios to understand how various eligible expenses like housing loan interest, children's education, or continuing education can reduce your overall tax burden and maximize your take-home pay.",
          "<strong>Freelance Income Management</strong>: If you earn additional income through freelance work, use the calculator to estimate the <strong>tax impact</strong> of this supplementary income and set aside appropriate amounts for tax payments to avoid penalties.",
          "<strong>Retirement Planning</strong>: Project your <strong>post-retirement tax liability</strong> based on expected pension income and other revenue sources to better prepare for your financial needs during retirement years.",
          "<strong>Relocation Decision Support</strong>: When considering moving to different cities, use the calculator to compare the <strong>tax implications</strong> of your move, particularly regarding housing rent deductions which vary by city tier in the Chinese tax system."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about Income Tax Calculation",
      items: [
        {
          question: "How is personal income tax calculated in China?",
          answer: "Chinese <strong>personal income tax</strong> is calculated using a progressive seven-tier system. First, your <strong>taxable income</strong> is determined by subtracting the standard deduction (¥5,000/month), social security and housing fund contributions, and eligible special deductions from your gross income. This taxable amount is then subject to the appropriate tax rate (ranging from 3% to 45%) based on which income bracket it falls into. A quick deduction amount is then subtracted to ensure smooth transitions between tax brackets. The formula is: Tax Payable = (Income - Social Security - Special Deductions - ¥5,000) × Applicable Tax Rate - Quick Deduction. The calculator handles this complex calculation automatically, showing both your tax liability and effective tax rate."
        },
        {
          question: "What special deductions are available in the Chinese tax system?",
          answer: "The Chinese tax system offers several <strong>special additional deductions</strong> to reduce taxable income: 1) <strong>Children's education</strong>: ¥1,000/month per child for education from preschool through high school. 2) <strong>Continuing education</strong>: ¥400/month for degree education or ¥3,600/year for vocational qualifications. 3) <strong>Housing loan interest</strong>: ¥1,000/month for first-home mortgage interest. 4) <strong>Housing rent</strong>: ¥1,500/month in first-tier cities, ¥1,100/month in second-tier cities, or ¥800/month in other areas. 5) <strong>Elderly support</strong>: Up to ¥2,000/month for supporting elderly parents. 6) <strong>Major medical expenses</strong>: Medical costs exceeding ¥15,000 annually, up to ¥80,000/year. Our calculator includes input fields for all these deductions to help you accurately estimate your tax liability."
        },
        {
          question: "Why does my monthly tax amount change throughout the year?",
          answer: "Your monthly <strong>tax withholding</strong> changes throughout the year due to China's <strong>cumulative withholding method</strong>. Unlike systems that treat each month independently, Chinese income tax is calculated on your cumulative annual income to date. Early in the year, you might be in lower tax brackets, but as your cumulative income increases, you may move into higher brackets, resulting in larger withholdings in later months. This approach ensures your total annual tax matches what you would owe if calculated once at year-end. Our calculator's monthly breakdown feature illustrates this progression clearly, helping you understand why your monthly tax varies and allowing you to plan accordingly for months with higher withholding amounts."
        },
        {
          question: "How do I optimize my tax situation legally?",
          answer: "To legally minimize your <strong>tax burden</strong> in China: 1) Fully utilize all eligible <strong>special deductions</strong> you qualify for, such as children's education, housing rent, and elderly support. 2) Consider contributing the maximum allowable amount to your <strong>housing fund</strong>, as these contributions reduce your taxable income. 3) If your employer offers <strong>enterprise annuity plans</strong> or commercial health insurance, participate in these tax-advantaged benefits. 4) For high-income earners, consider the timing of bonuses, as annual bonuses can sometimes be taxed separately using a preferential calculation method. 5) Keep proper documentation of all deductible expenses to ensure smooth verification if requested by tax authorities. Our calculator helps you model different scenarios to find the optimal approach for your specific financial situation."
        },
        {
          question: "How accurate is this income tax calculator?",
          answer: "Our <strong>income tax calculator</strong> provides highly accurate estimates based on the current Chinese tax regulations, reflecting the 2019 personal income tax reform and subsequent updates. The calculator incorporates the standard seven-tier <strong>tax rate structure</strong>, up-to-date quick deduction amounts, current special deduction policies, and the cumulative withholding methodology. While we strive for maximum accuracy, tax laws can change, and individual circumstances may involve complexities not captured by any calculator. The tool should be used for planning purposes and general guidance, not as a replacement for professional <strong>tax advice</strong>. For individuals with complicated tax situations (multiple income sources, foreign income, stock options, etc.), consultation with a tax professional is still recommended."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the Income Tax Calculator",
      steps: [
        "<strong>Select your tax system</strong>: Start by choosing the appropriate tax system for your calculation. Currently, the calculator supports the Chinese tax system, with more countries planned for future updates.",
        "<strong>Enter your income details</strong>: Input either your monthly or annual income in the corresponding field. The calculator will automatically convert between monthly and annual figures, so you only need to enter one. For the most accurate results, use your pre-tax salary amount.",
        "<strong>Configure social security and housing fund contributions</strong>: You can either enter a specific amount directly or calculate it based on a percentage of your income. If using the percentage method, enter both the contribution base (which might differ from your actual salary in some regions) and the applicable percentage rate.",
        "<strong>Select your city tier</strong>: Choose between first-tier, second-tier, or other cities. This selection affects the housing rent deduction amount automatically applied, though you can override this with a custom amount if needed.",
        "<strong>Enter your special deductions</strong>: Fill in all applicable special deduction amounts you're eligible for, including children's education, continuing education, housing loan interest, housing rent, elderly support, and major medical expenses. For occasional deductions like medical treatment, enter the annual amount.",
        "<strong>Click the 'Calculate' button</strong>: Once you've entered all your information, click the calculate button to process your tax calculation. The system will determine your taxable income, applicable tax rate, quick deduction amount, and total tax payable.",
        "<strong>Review your results</strong>: Examine the calculation summary, which includes your total tax payable, after-tax income, and effective tax rate. The monthly breakdown table shows how your tax is distributed throughout the year under the cumulative withholding system, helping you understand your month-to-month tax obligations."
      ]
    },
    conclusion: "The Income Tax Calculator provides a powerful yet easy-to-use solution for managing your personal tax planning. By giving you clear insights into your tax obligations, take-home pay, and the impact of various deductions, it empowers you to make more informed financial decisions. Whether you're negotiating a new salary, planning your annual budget, or seeking to optimize your tax situation, this calculator offers the precise information you need. Remember that while tax planning is important, it's equally crucial to maintain accurate records of your deductions and stay informed about changes to tax regulations that might affect your calculations. Use this tool regularly as your income and deductions change to ensure you're always working with the most accurate projections of your financial situation."
  }
}; 