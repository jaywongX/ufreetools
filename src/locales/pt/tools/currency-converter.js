export default {
    name: 'Conversor de Moedas',
    description: 'Converta entre diferentes moedas com precisão e consulte taxas de câmbio atualizadas',
    
    // Textos principais da interface
    amount: 'Valor',
    from: 'De',
    to: 'Para',
    convert: 'Converter',
    result: 'Resultado',
    swap: 'Inverter moedas',
    rate: 'Taxa atual',
    lastUpdated: 'Última atualização',
    addCurrency: 'Adicionar moeda',
    
    // Histórico
    history: 'Histórico',
    clearHistory: 'Limpar histórico',
    noHistory: 'Nenhuma conversão recente',
    
    // Moedas
    currencies: {
      USD: 'Dólar Americano',
      EUR: 'Euro',
      JPY: 'Iene Japonês',
      GBP: 'Libra Esterlina',
      AUD: 'Dólar Australiano',
      CAD: 'Dólar Canadense',
      CHF: 'Franco Suíço',
      CNY: 'Yuan Chinês',
      HKD: 'Dólar de Hong Kong',
      NZD: 'Dólar Neozelandês',
      SEK: 'Coroa Sueca',
      KRW: 'Won Sul-Coreano',
      SGD: 'Dólar de Singapura',
      NOK: 'Coroa Norueguesa',
      MXN: 'Peso Mexicano',
      INR: 'Rúpia Indiana',
      RUB: 'Rublo Russo',
      ZAR: 'Rand Sul-Africano',
      TRY: 'Lira Turca',
      BRL: 'Real Brasileiro',
      TWD: 'Dólar Taiwanês',
      DKK: 'Coroa Dinamarquesa',
      PLN: 'Zlóti Polonês',
      THB: 'Baht Tailandês',
      IDR: 'Rupia Indonésia',
      MYR: 'Ringgit Malaio',
      PHP: 'Peso Filipino'
    },
    
    // Mensagens de erro
    errors: {
      invalidAmount: 'Insira um valor válido',
      apiError: 'Erro ao obter taxas de câmbio',
      samecurrencies: 'Selecione moedas diferentes para conversão'
    },
    
    // Dicas e informações
    tips: {
      offline: 'Modo offline: mostrando taxas em cache',
      refreshing: 'Atualizando taxas de câmbio...'
    },
    
    // Taxas históricas
    historicalRates: 'Histórico de cotações',
    dateRange: 'Período',
    from7days: 'Últimos 7 dias',
    from30days: 'Últimos 30 dias',
    from90days: 'Últimos 90 dias',
    customRange: 'Período personalizado',
    startDate: 'Data inicial',
    endDate: 'Data final',
    viewChart: 'Ver gráfico',
    
    // Configurações
    settings: 'Configurações',
    decimalPlaces: 'Casas decimais',
    autoUpdate: 'Atualizar taxas automaticamente',
    defaultCurrency: 'Moeda padrão',
    
    // Sobre o conversor
    aboutTitle: 'Sobre o Conversor de Moedas',
    aboutDescription: 'O Conversor de Moedas é um aplicativo simples e eficiente para conversão entre diferentes moedas. Seja para viagens, comércio internacional ou análise de investimentos, esta ferramenta atende às suas necessidades de conversão cambial.',
    
    featuresTitle: 'Principais recursos',
    feature1: 'Suporte a mais de 30 moedas principais',
    feature2: 'Taxas de câmbio atualizadas em tempo real',
    feature3: 'Cálculo rápido e intuitivo',
    feature4: 'Consulta ao histórico de cotações e visualização gráfica',
    feature5: 'Salvamento do histórico de conversões',
    feature6: 'Personalização de exibição e moeda padrão',
    
    howToUseTitle: 'Como usar',
    howToUseStep1: '1. Insira o valor a ser convertido',
    howToUseStep2: '2. Selecione a moeda de origem',
    howToUseStep3: '3. Escolha a moeda de destino',
    howToUseStep4: '4. Clique em "Converter" para obter o resultado',
    howToUseStep5: '5. Use o botão "Inverter" para trocar as moedas rapidamente',
    
    tipsTitle: 'Dicas úteis',
    tip1: 'As taxas são atualizadas a cada hora para maior precisão',
    tip2: 'Adicione moedas favoritas para acesso rápido',
    tip3: 'Use o gráfico histórico para analisar tendências cambiais',
    tip4: 'Os resultados são salvos automaticamente no histórico',
    tip5: 'Em modo offline, são usadas as últimas taxas armazenadas'
  };