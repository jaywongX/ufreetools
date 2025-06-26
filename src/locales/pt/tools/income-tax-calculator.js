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
    taxTip5: 'Mantenha comprovantes de todas as deduções',
    
    article: {
      title: "Calculadora de IR: Ferramenta Completa para Planejamento Tributário",
      features: {
        title: "Benefícios da Calculadora de IR",
        description: "Esta <strong>calculadora de imposto de renda</strong> ajuda a estimar com precisão suas obrigações fiscais e salário líquido. Com base na <strong>tabela progressiva</strong> atual, mostra detalhadamente como seu imposto é calculado.<br><br>Atualmente configurada para o sistema chinês com 7 faixas de 3% a 45%, a ferramenta mostra sua <strong>alíquota efetiva</strong> e fornece um detalhamento mensal completo.",
        useCases: {
          title: "Aplicações Práticas",
          items: [
            "<strong>Negociação Salarial</strong>: Calcule o líquido antes de negociar aumentos",
            "<strong>Planejamento Financeiro</strong>: Antecipe seus encargos fiscais no orçamento",
            "<strong>Otimização Fiscal</strong>: Simule diferentes cenários de dedução",
            "<strong>Renda Extra</strong>: Estime o impacto tributário de trabalhos extras",
            "<strong>Aposentadoria</strong>: Projete impostos sobre pensões e rendimentos",
            "<strong>Mudança de Cidade</strong>: Compare diferenças nas deduções por localidade"
          ]
        }
      },
      faq: {
        title: "Perguntas Frequentes",
        items: [
          {
            question: "Como calcular o IR na China?",
            answer: "O <strong>imposto de renda chinês</strong> usa 7 faixas progressivas. Primeiro subtraia a isenção (¥5.000/mês), contribuições previdenciárias e deduções para obter a <strong>base de cálculo</strong>. Depois aplique a alíquota correspondente e reduza pela dedução rápida. Fórmula: IR = (Renda - Previdência - Deduções - ¥5.000) × Alíquota - Dedução."
          },
          {
            question: "Quais deduções são permitidas?",
            answer: "Na China incluem: 1) <strong>Educação</strong>: ¥1.000/mês por filho; 2) <strong>Cursos</strong>: ¥400/mês ou ¥3.600/ano; 3) <strong>Financiamento</strong>: ¥1.000/mês; 4) <strong>Aluguel</strong>: ¥1.500 (globais), ¥1.100 (principais) ou ¥800 (outras); 5) <strong>Idosos</strong>: Até ¥2.000/mês; 6) <strong>Saúde</strong>: Acima de ¥15.000/ano (limite ¥60.000)."
          },
          {
            question: "Por que o imposto mensal varia?",
            answer: "O sistema chinês usa <strong>cálculo acumulativo</strong>. No início do ano você pode estar em faixas menores, mas conforme a renda acumula, as alíquotas aumentam. Nosso detalhamento mensal mostra essa progressão claramente."
          },
          {
            question: "Como reduzir legalmente o IR?",
            answer: "1) Use todas as <strong>deduções permitidas</strong>; 2) Contribua com <strong>previdência oficial</strong> no limite; 3) Participe de <strong>planos empresariais</strong> com benefícios fiscais; 4) Para altas rendas, otimize o timing de bônus; 5) Mantenha toda documentação comprobatória."
          },
          {
            question: "Qual a precisão da calculadora?",
            answer: "Baseada na legislação atual chinesa pós-reforma de 2019, nossa <strong>calculadora</strong> oferece estimativas confiáveis para planejamento. Para situações complexas (múltiplas rendas, ganhos no exterior etc), consulte sempre um contador."
          }
        ]
      },
      guide: {
        title: "Guia Passo a Passo",
        steps: [
          "<strong>Selecione o sistema</strong>: Atualmente configurado para tributação chinesa",
          "<strong>Informe sua renda</strong>: Digite o valor mensal ou anual (conversão automática)",
          "<strong>Adicione descontos</strong>: Contribuições previdenciárias (valor ou percentual)",
          "<strong>Escolha a cidade</strong>: Isso afeta a dedução de aluguel",
          "<strong>Preencha deduções</strong>: Educação, saúde, moradia e sustento familiar",
          "<strong>Calcule</strong>: Obtenha instantaneamente seu imposto e salário líquido",
          "<strong>Analise</strong>: Veja a distribuição mensal e sua alíquota real"
        ]
      },
      conclusion: "Esta calculadora oferece uma solução completa para gerenciar suas obrigações fiscais pessoais. Ao fornecer visibilidade total sobre como seu imposto é calculado e como diferentes deduções afetam seu salário líquido, ela permite decisões financeiras mais informadas. Use regularmente para manter seu planejamento tributário sempre atualizado conforme mudam sua renda e circunstâncias pessoais."
    }
  }