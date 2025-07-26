export default {
  name: '所得税計算機',
  description: '個人の給与所得に対する所得税と手取り額を計算',

  // 主要なインターフェーステキスト
  taxSystem: '税制',

  china: '中国',
  usa: 'アメリカ',
  uk: 'イギリス',
  monthlyIncome: '月収',
  annualIncome: '年収',
  socialSecurity: '社会保険・積立金',
  socialSecurityAmount: '社会保険・積立金額',
  socialSecurityPercent: '社会保険・積立金率',
  socialSecurityBase: '社会保険基数',
  deductions: '特別追加控除',
  childrenEducation: '子女教育',
  continuingEducation: '継続教育',
  housingLoanInterest: '住宅ローン利息',
  housingRent: '住宅賃貸料',
  elderlySupport: '老親扶養',
  medicalTreatment: '重大医療',
  otherDeductions: 'その他控除',
  calculate: '計算',
  reset: 'リセット',

  // 結果エリア
  results: '計算結果',

  taxableIncome: '課税所得額',
  taxRate: '適用税率',
  quickDeduction: '速算控除額',
  taxPayable: '納税額',
  afterTaxIncome: '税引後所得',
  effectiveTaxRate: '実効税率',
  monthlyBreakdown: '月別内訳',

  // グラフエリア
  taxAnalysis: '税金分析',

  incomeDistribution: '所得配分',
  income: '所得',
  tax: '税金',
  takeHome: '手取り',

  // 税率表エリア
  taxBrackets: '税率表',

  bracketRange: '所得区分',
  rate: '税率',

  // 月別内訳
  month: '月',

  cumulativeIncome: '累計所得',
  cumulativeDeduction: '累計控除',
  cumulativeTaxable: '累計課税所得額',
  cumulativeTax: '累計納税額',
  previousTax: '前月までの納税額',
  currentMonthTax: '当月納税額',

  // 都市選択
  city: '都市',

  firstTier: '一線都市',
  secondTier: '二線都市',
  otherCity: 'その他の都市',

  // ツール紹介
  aboutTitle: '所得税について',

  aboutDescription: '所得税は個人が得た各種課税所得に対して課される税金で、ほとんどの国で主要な税種の一つとなっています。中国の個人所得税は超過累進税率を採用しており、税率は3%から45%まで段階的に上がり、所得が高いほど適用される税率も高くなります。',
  howToUseTitle: '計算機の使い方',
  howToUseStep1: '1. 税制を選択（現在は中国の税制に対応）',
  howToUseStep2: '2. 月収または年収を入力（自動的に換算されます）',
  howToUseStep3: '3. 社会保険・積立金の金額を入力するか、比率で計算するかを選択',
  howToUseStep4: '4. 各種特別追加控除を入力',
  howToUseStep5: '5. 「計算」ボタンをクリックして結果を取得',
  chinaTaxRulesTitle: '中国の所得税計算ルール',
  chinaTaxRule1: '基礎控除額：5,000元/月',
  chinaTaxRule2: '課税所得額 = 所得 - 社会保険・積立金 - 特別追加控除 - 基礎控除額',
  chinaTaxRule3: '所得税 = 課税所得額 × 税率 - 速算控除額',
  deductionExplainTitle: '特別追加控除の説明',
  childrenEducationExplain: '子女教育：子供1人につき1,000元/月の控除',
  continuingEducationExplain: '継続教育：学歴教育400元/月；職業資格3,600元/年',
  housingLoanExplain: '住宅ローン利息：1,000元/月',
  housingRentExplain: '住宅賃貸料：一線都市1,500元/月；二線都市1,100元/月；その他の都市800元/月',
  elderlyExplain: '老親扶養：一人っ子2,000元/月；一人っ子でない場合は2,000元/月を分担',
  medicalExplain: '重大医療：年間医療支出が15,000元を超える部分、最大60,000元/年',
  taxTipsTitle: '納税のヒント',
  taxTip1: '特別追加控除を適切に利用することで税負担を効果的に軽減できます',
  taxTip2: '年末ボーナスは単独で課税するか、その年の総合所得に含めて課税するかを選択できます',
  taxTip3: '複数の所得がある場合、合算して個人所得税を計算する必要があります',
  taxTip4: '企業年金、商業健康保険なども一定額まで税前控除できます',
  taxTip5: '特別追加控除を正確に申告し、税務リスクを避けましょう'
};