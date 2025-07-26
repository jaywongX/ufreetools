export default {
  title: "Guia Completo: Entenda Seu Financiamento Imobiliário, Automotivo e Pessoal",
  intro: {
    title: "O Poder do Planejamento Financeiro",
    p1: "<b>Calculadoras de empréstimos</b> tornaram-se ferramentas essenciais no atual cenário de crédito. Nossa solução simplifica a análise de custos reais para financiamentos imobiliários, veículos e empréstimos pessoais, permitindo decisões conscientes antes de assumir compromissos de longo prazo.",
    p2: "<b>Transparência financeira</b> é fundamental ao avaliar opções de crédito. Além do valor da parcela, nossa calculadora revela o cronograma completo de amortização, custo total de juros e proporção entre principal e juros - informações críticas frequentemente obscurecidas em propostas comerciais.",
    p3: "<b>Cada tipo de financiamento</b> possui características específicas. Nossa ferramenta adapta-se automaticamente a cada modalidade, permitindo comparar diferentes prazos, taxas e sistemas de amortização para encontrar a opção que melhor se adapta aos seus objetivos financeiros."
  },
  useCases: {
    title: "Aplicações Práticas",
    case1: "<h3>Análise de Financiamento Imobiliário</h3><p><b>Simulação de hipotecas</b> ajuda a comparar diferentes entradas, prazos (15 vs 30 anos) e taxas. A calculadora revela como pequenas variações na taxa impactam drasticamente o custo total, auxiliando na decisão entre usar recursos próprios ou crédito.</p>",
    case2: "<h3>Planejamento de Financiamento Veicular</h3><p><b>Cálculos automotivos</b> desmistificam propostas com parcelas alongadas que mascaram custos reais. A ferramenta permite avaliar o equilíbrio ideal entre prazo, valor residual e custo total do crédito.</p>",
    case3: "<h3>Gestão de Empréstimos Pessoais</h3><p><b>Simulação de crédito pessoal</b> ajuda a adequar o valor do empréstimo à capacidade de pagamento real, evitando sobre-endividamento. Ideal para planejar consolidação de dívidas ou grandes gastos.</p>",
    case4: "<h3>Educação Financeira</h3><p><b>Ferramenta educacional</b> que demonstra visualmente como juros compostos funcionam, ajudando a entender o impacto real do tempo e das taxas nos custos do crédito.</p>",
    case5: "<h3>Análise de Investimentos</h3><p><b>Avaliação de viabilidade</b> para empresários compararem custos de financiamento com retornos esperados, auxiliando na decisão entre comprar a prazo ou à vista.</p>"
  },
  loanMethods: {
    title: "Entendendo os Sistemas de Amortização",
    method1: {
      title: "Sistema PRICE (Parcela Fixa)",
      description: "<p>No <b>sistema francês</b>, as parcelas permanecem constantes durante todo o prazo. Inicialmente, maior parte do pagamento destina-se a juros, com a amortização crescendo gradualmente. A fórmula para cálculo é:</p><p class='text-center my-3'><code>Parcela = Principal × [i(1+i)ⁿ] ÷ [(1+i)ⁿ-1]</code></p><p>Onde i é a taxa mensal (anual ÷ 12) e n o número total de parcelas.</p>"
    },
    method2: {
      title: "Sistema SAC (Amortização Constante)",
      description: "<p>No <b>SAC</b>, a amortização do principal é igual em todas as parcelas. Os juros recaem sobre o saldo devedor, resultando em parcelas decrescentes. As fórmulas básicas são:</p><p class='text-center my-3'><code>Amortização = Principal ÷ Número de Parcelas</code><br><code>Juros = Saldo Devedor × Taxa Mensal</code><br><code>Parcela = Amortização + Juros</code></p>"
    }
  },
  tutorial: {
    title: "Guia Passo a Passo para Uso da Calculadora",
    intro: "Siga estas etapas para aproveitar ao máximo nossa calculadora de empréstimos:",
    step1: {
      title: "Passo 1: Seleção do Tipo de Crédito",
      description: "Escolha entre financiamento imobiliário, automotivo ou empréstimo pessoal. Esta seleção ajusta parâmetros padrão conforme características típicas de cada modalidade."
    },
    step2: {
      title: "Passo 2: Inserção dos Dados Básicos",
      description: "Informe o valor total solicitado, prazo (em anos ou meses) e taxa de juros anual efetiva. Utilize a taxa real oferecida pela instituição financeira."
    },
    step3: {
      title: "Passo 3: Escolha do Sistema de Amortização",
      description: "Selecione entre PRICE (parcelas fixas) ou SAC (parcelas decrescentes). O PRICE facilita o planejamento orçamentário, enquanto o SAC oferece menor custo total."
    },
    step4: {
      title: "Passo 4: Análise dos Resultados",
      description: "Revise os valores de parcelas, juros totais e proporção de custos. O cronograma detalhado mostra a evolução mês a mês, e os gráficos comparam a distribuição entre principal e juros."
    }
  },
  faq: {
    title: "Perguntas Frequentes sobre Financiamentos",
    q1: "Como o prazo afeta o custo total do empréstimo?",
    a1: "<b>Prazos maiores reduzem o valor da parcela mas aumentam significativamente os juros totais</b>. Um empréstimo de R$300.000 a 8% a.a. por 30 anos terá juros totais de aproximadamente R$528.000, enquanto o mesmo valor em 15 anos acumulará R$246.000 em juros - economia de R$282.000.",
    
    q2: "Qual sistema de amortização é mais vantajoso?",
    a2: "<b>O SAC geralmente tem menor custo total</b>, mas com parcelas iniciais mais altas. Para um empréstimo de R$200.000 a 9% em 20 anos, o SAC pode economizar R$35.000-R$58.000 em juros comparado ao PRICE. A escolha ideal depende da sua capacidade de pagamento inicial.",
    
    q3: "Pagamentos adicionais reduzem os juros?",
    a3: "<b>Amortizações extras reduzem drasticamente os juros</b>, especialmente no início do financiamento. Em um empréstimo de 30 anos, pagar R$200 extras mensais pode economizar R$186.000 em juros e encurtar o prazo em 11 anos. Mesmo pagamentos únicos têm impacto significativo.",
    
    q4: "Como interpretar o cronograma de amortização?",
    a4: "<b>O cronograma detalha cada parcela</b>, mostrando a evolução do saldo devedor e a proporção entre amortização e juros. Permite identificar pontos estratégicos para amortizações extras e entender como o crédito será liquidado ao longo do tempo.",
    
    q5: "Quais fatores comparar entre diferentes propostas?",
    a5: "<b>Além da taxa de juros</b>, avalie: CET (Custo Efetivo Total), prazo, sistema de amortização, existência de seguros obrigatórios, IOF e tarifas. Nossa calculadora ajuda a padronizar essas variáveis para comparação justa entre diferentes ofertas de crédito."
  },
  relatedTools: {
    title: "Ferramentas Financeiras Relacionadas",
    description: "Complemente sua análise com estas calculadoras úteis:",
    tool1: {
      name: "Calculadora de Juros Compostos",
      url: "https://www.ufreetools.com/tool/compound-interest-calculator",
      description: "Simule como investimentos podem crescer ao longo do tempo."
    },
    tool2: {
      name: "Conversor de Moedas",
      url: "https://www.ufreetools.com/tool/currency-converter",
      description: "Converta valores entre diferentes moedas com taxas atualizadas."
    },
    tool3: {
      name: "Calculadora de Porcentagens",
      url: "https://www.ufreetools.com/tool/percentage-calculator",
      description: "Calcule aumentos, descontos e variações percentuais."
    },
    tool4: {
      name: "Calculadora de Aposentadoria",
      url: "https://www.ufreetools.com/tool/retirement-calculator",
      description: "Planeje sua independência financeira a longo prazo."
    }
  },
  resources: {
    title: "Recursos Oficiais sobre Crédito",
    resource1: {
      name: "Banco Central do Brasil",
      url: "https://www.bcb.gov.br",
      description: "Regulador financeiro com informações sobre taxas e normas de crédito."
    },
    resource2: {
      name: "Procon - Direitos do Consumidor",
      url: "https://www.procon.sp.gov.br",
      description: "Orientações sobre contratos de financiamento e direitos básicos."
    },
    resource3: {
      name: "Febraban - Associação de Bancos",
      url: "https://www.febraban.org.br",
      description: "Informações setoriais sobre produtos financeiros."
    }
  }
}
