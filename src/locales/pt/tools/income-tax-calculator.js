export default {
  name: 'Calculadora de Imposto de Renda',
  description: 'Calcule o imposto sobre salários e o salário líquido',

  // Interface principal
  taxSystem: 'Sistema Tributário',

  china: 'China',
  usa: 'EUA',
  uk: 'Reino Unido',
  monthlyIncome: 'Renda Mensal',
  annualIncome: 'Renda Anual',
  socialSecurity: 'Previdência Social',
  socialSecurityAmount: 'Valor da Previdência',
  socialSecurityPercent: 'Percentual da Previdência',
  socialSecurityBase: 'Base de Cálculo',
  deductions: 'Deduções Especiais',
  childrenEducation: 'Educação de Filhos',
  continuingEducation: 'Educação Continuada',
  housingLoanInterest: 'Juros de Financiamento',
  housingRent: 'Aluguel',
  elderlySupport: 'Sustento de Idosos',
  medicalTreatment: 'Tratamento Médico',
  otherDeductions: 'Outras Deduções',
  calculate: 'Calcular',
  reset: 'Redefinir',

  // Resultados
  results: 'Resultados',

  taxableIncome: 'Renda Tributável',
  taxRate: 'Alíquota',
  quickDeduction: 'Dedução Rápida',
  taxPayable: 'Imposto Devido',
  afterTaxIncome: 'Salário Líquido',
  effectiveTaxRate: 'Alíquota Efetiva',
  monthlyBreakdown: 'Detalhamento Mensal',

  // Gráficos
  taxAnalysis: 'Análise Tributária',

  incomeDistribution: 'Distribuição de Renda',
  income: 'Renda',
  tax: 'Imposto',
  takeHome: 'Líquido',

  // Tabela de alíquotas
  taxBrackets: 'Tabela Progressiva',

  bracketRange: 'Faixa Salarial',
  rate: 'Alíquota',

  // Detalhamento mensal
  month: 'Mês',

  cumulativeIncome: 'Renda Acumulada',
  cumulativeDeduction: 'Deduções Acumuladas',
  cumulativeTaxable: 'Base de Cálculo Acumulada',
  cumulativeTax: 'Imposto Acumulado',
  previousTax: 'Imposto Pago Anteriormente',
  currentMonthTax: 'Imposto do Mês',

  // Cidades
  city: 'Cidade',

  firstTier: 'Cidades Globais',
  secondTier: 'Cidades Principais',
  otherCity: 'Outras Cidades',

  // Sobre
  aboutTitle: 'Sobre o IRPF',

  aboutDescription: 'O Imposto de Renda é um tributo federal sobre a renda do cidadão. No Brasil, segue tabela progressiva com alíquotas de 0% a 27,5%.',
  howToUseTitle: 'Como usar a calculadora',
  howToUseStep1: '1. Selecione o sistema tributário',
  howToUseStep2: '2. Informe a renda mensal/anual',
  howToUseStep3: '3. Adicione descontos de previdência',
  howToUseStep4: '4. Preencha as deduções permitidas',
  howToUseStep5: '5. Clique em "Calcular" para ver os resultados',
  chinaTaxRulesTitle: 'Regras do IR Chinês',
  chinaTaxRule1: 'Isenção: ¥5.000/mês',
  chinaTaxRule2: 'Base de cálculo = Renda - Previdência - Deduções - Isenção',
  chinaTaxRule3: 'IR = Base × Alíquota - Dedução',
  deductionExplainTitle: 'Explicação das Deduções',
  childrenEducationExplain: 'Educação: ¥1.000/mês por filho',
  continuingEducationExplain: 'Cursos: ¥400/mês ou ¥3.600/ano',
  housingLoanExplain: 'Financiamento: ¥1.000/mês',
  housingRentExplain: 'Aluguel: ¥1.500 (globais), ¥1.100 (principais), ¥800 (outras)',
  elderlyExplain: 'Idosos: ¥2.000/mês (filho único) ou rateado',
  medicalExplain: 'Saúde: Acima de ¥15.000/ano, até ¥60.000',
  taxTipsTitle: 'Dicas Fiscais',
  taxTip1: 'Use todas as deduções permitidas',
  taxTip2: 'Bônus pode ter tributação diferenciada',
  taxTip3: 'Rendas múltiplas devem ser somadas',
  taxTip4: 'Planos de saúde e previdência privada podem deduzir',
  taxTip5: 'Mantenha comprovantes de todas as deduções'
};