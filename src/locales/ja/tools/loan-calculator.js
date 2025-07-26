export default {
  name: 'ローン計算機',
  description: '住宅ローン、自動車ローン、個人ローンの月々の支払い、総利息、返済計画を計算',

  // メインインターフェーステキスト
  loanType: 'ローンタイプ',

  housingLoan: '住宅ローン',
  carLoan: '自動車ローン',
  personalLoan: '個人ローン',
  loanAmount: 'ローン金額',
  loanTerm: 'ローン期間',
  interestRate: '年利率',
  paymentMethod: '返済方法',
  equalPrincipalAndInterest: '元利均等返済',
  equalPrincipal: '元金均等返済',
  calculate: '計算結果',
  reset: 'リセット',
  tip: '返済計画を先に計算してください',
  years: '年',
  months: 'ヶ月',
  amount: '金額',
  currency: '通貨',
  CNY: '人民元 (¥)',
  USD: '米ドル ($)',
  EUR: 'ユーロ (€)',
  JPY: '日本円 (¥)',
  GBP: 'ポンド (£)',

  // 結果エリア
  results: '計算結果',

  monthlyPayment: '月々の支払い',
  firstMonthPayment: '初回支払い',
  lastMonthPayment: '最終支払い',
  totalInterest: '総利息',
  totalPayment: '総返済額',
  interestRatio: '利息の割合',

  // 返済計画
  paymentSchedule: '返済計画',

  downloadExcel: 'Excelにエクスポート',
  paymentNo: '回数',
  paymentDate: '返済日',
  principal: '元金',
  interest: '利息',
  payment: '返済額',
  remainingPrincipal: '残元金',

  // グラフ
  paymentChart: '返済分析グラフ',

  principalAndInterest: '元金と利息の比較',
  monthlyPaymentTrend: '月々の支払い推移',

  // ツール紹介部分
  aboutTitle: 'ローン計算機について',

  aboutDescription: 'ローン計算機は、住宅ローン、自動車ローン、個人ローンなど様々なシナリオで使用できる、各種ローンの詳細を計算するのに役立つツールです。ローンコストについて明確に理解することができます。',
  featuresTitle: '主な機能',
  feature1: '元利均等返済と元金均等返済の2つの返済方法をサポート',
  feature2: '月々の支払い、総利息、総返済額を計算',
  feature3: '詳細な返済計画表を生成',
  feature4: '元金と利息の分布を視覚的に表示するグラフ',
  feature5: '複数の通貨単位をサポート',
  usageTitle: '使用方法',
  usageStep1: 'ローンタイプを選択（住宅ローン、自動車ローン、個人ローン）',
  usageStep2: 'ローン金額、期間、年利率を入力',
  usageStep3: '返済方法を選択（元利均等返済または元金均等返済）',
  usageStep4: '「計算結果」ボタンをクリックして詳細情報を取得',
  usageStep5: '返済計画表とグラフ分析を確認',
  explanationTitle: '返済方法の説明',
  explanationEqualPayment: '元利均等返済：毎月の返済額は同じですが、時間の経過とともに利息部分が減少し、元金部分が増加します。',
  explanationEqualPrincipal: '元金均等返済：毎月同額の元金を返済し、利息は残元金の減少に伴って減少するため、月々の支払いは徐々に減少します。',
  tipsTitle: '使用のコツ',
  tip1: 'ローン期間を延長すると月々の支払いは減りますが、総利息支出は増加します',
  tip2: '元金均等返済方式は元利均等返済よりも総利息支出が少ないですが、初期の月々の支払い負担が大きくなります',
  tip3: '繰り上げ返済は利息支出を減らすことができ、特にローンの初期段階で効果的です',
  tip4: 'このツールを使用して異なるローンプランを比較し、あなたの財務状況に最も適したオプションを選択してください'
};