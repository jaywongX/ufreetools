export default {
  name: 'Calculadora de Empréstimos',
  description: 'Calcule prestações de financiamento imobiliário, automotivo e pessoal, incluindo juros totais e cronograma de pagamentos',

  // Textos da interface principal
  loanType: 'Tipo de Empréstimo',

  housingLoan: 'Financiamento Imobiliário',
  carLoan: 'Financiamento Automotivo',
  personalLoan: 'Empréstimo Pessoal',
  loanAmount: 'Valor do Empréstimo',
  loanTerm: 'Prazo do Empréstimo',
  interestRate: 'Taxa de Juros Anual',
  paymentMethod: 'Método de Pagamento',
  equalPrincipalAndInterest: 'Parcela Fixa (SAC)',
  equalPrincipal: 'Amortização Constante (PRICE)',
  calculate: 'Calcular',
  reset: 'Redefinir',
  tip: 'Calcule primeiro o cronograma',
  years: 'Anos',
  months: 'Meses',
  amount: 'Valor',
  currency: 'Moeda',
  CNY: 'Yuan Chinês (¥)',
  USD: 'Dólar Americano ($)',
  EUR: 'Euro (€)',
  JPY: 'Iene Japonês (¥)',
  GBP: 'Libra Esterlina (£)',

  // Área de resultados
  results: 'Resultados',

  monthlyPayment: 'Parcela Mensal',
  firstMonthPayment: 'Primeira Parcela',
  lastMonthPayment: 'Última Parcela',
  totalInterest: 'Juros Totais',
  totalPayment: 'Pagamento Total',
  interestRatio: 'Proporção de Juros',

  // Cronograma de pagamentos
  paymentSchedule: 'Cronograma de Pagamentos',

  downloadExcel: 'Exportar para Excel',
  paymentNo: 'Parcela',
  paymentDate: 'Data de Pagamento',
  principal: 'Principal',
  interest: 'Juros',
  payment: 'Pagamento',
  remainingPrincipal: 'Saldo Devedor',

  // Gráficos
  paymentChart: 'Análise de Pagamentos',

  principalAndInterest: 'Comparação Principal/Juros',
  monthlyPaymentTrend: 'Variação das Parcelas',

  // Seção de informações
  aboutTitle: 'Sobre a Calculadora',

  aboutDescription: 'Esta calculadora ajuda a simular diferentes cenários de financiamento para imóveis, veículos e empréstimos pessoais, proporcionando clareza sobre os custos totais do crédito.',
  featuresTitle: 'Principais Funcionalidades',
  feature1: 'Suporte aos sistemas SAC e PRICE',
  feature2: 'Cálculo de parcelas, juros totais e custo efetivo',
  feature3: 'Geração de cronograma completo de amortização',
  feature4: 'Gráficos comparativos de evolução dos pagamentos',
  feature5: 'Conversão entre múltiplas moedas',
  usageTitle: 'Como Usar',
  usageStep1: 'Selecione o tipo de financiamento',
  usageStep2: 'Informe valor, prazo e taxa de juros',
  usageStep3: 'Escolha o sistema de amortização',
  usageStep4: 'Clique em "Calcular" para ver os resultados',
  usageStep5: 'Analise o cronograma e gráficos detalhados',
  explanationTitle: 'Sistemas de Amortização',
  explanationEqualPayment: 'PRICE (Parcela Fixa): Valor mensal constante, com juros decrescentes e amortização crescente ao longo do tempo.',
  explanationEqualPrincipal: 'SAC (Amortização Constante): Parcelas decrescentes com amortização fixa, resultando em menor custo total de juros.',
  tipsTitle: 'Dicas Financeiras',
  tip1: 'Prazos maiores reduzem a parcela mas aumentam os juros totais',
  tip2: 'O SAC tem menor custo total mas parcelas iniciais mais altas',
  tip3: 'Pagamentos antecipados reduzem significativamente os juros',
  tip4: 'Compare diferentes cenários para encontrar a melhor opção'
};