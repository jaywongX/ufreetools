export default {
    name: 'Planejador de Orçamento de Viagem',
    description: 'Planeje e calcule seu orçamento de viagem, gerencie facilmente os gastos da viagem',
    
    // Elementos principais da interface
    planYourTrip: 'Planeje sua viagem',
    destination: 'Destino',
    startDate: 'Data de início',
    endDate: 'Data de término',
    travelers: 'Número de viajantes',
    currency: 'Moeda de exibição',
    tripDuration: 'Duração da viagem (dias)',
    totalBudget: 'Orçamento total',
    perPersonBudget: 'Orçamento por pessoa',
    perDayBudget: 'Orçamento diário',
    
    // Botões e ações
    calculate: 'Calcular orçamento',
    reset: 'Reiniciar',
    addExpense: 'Adicionar despesa',
    removeExpense: 'Remover',
    saveAsPDF: 'Salvar como PDF',
    
    // Categorias
    categories: {
      transport: 'Transporte',
      accommodation: 'Hospedagem',
      food: 'Alimentação',
      activities: 'Atividades e atrações',
      shopping: 'Compras',
      misc: 'Outras despesas',
      emergency: 'Fundo de emergência'
    },
    
    // Opções de transporte
    transport: {
      title: 'Custos de transporte',
      flight: 'Passagens aéreas',
      train: 'Trem',
      bus: 'Ônibus',
      car: 'Aluguel de carro/combustível',
      taxi: 'Táxi/Transporte por aplicativo',
      publicTransport: 'Transporte público',
      other: 'Outros transportes'
    },
    
    // Opções de hospedagem
    accommodation: {
      title: 'Custos de hospedagem',
      hotel: 'Hotel',
      hostel: 'Albergue',
      apartment: 'Casa de hóspedes/Apartamento',
      camping: 'Camping',
      other: 'Outras hospedagens'
    },
    
    // Opções de alimentação
    food: {
      title: 'Custos de alimentação',
      restaurants: 'Refeições em restaurantes',
      streetFood: 'Comida de rua',
      groceries: 'Compras de mantimentos',
      drinks: 'Bebidas/Álcool',
      other: 'Outras despesas com alimentação'
    },
    
    // Opções de atividades
    activities: {
      title: 'Atividades e atrações',
      attractions: 'Ingressos para atrações',
      tours: 'Guias/Passeios em grupo',
      entertainment: 'Atividades de entretenimento',
      other: 'Outras atividades'
    },
    
    // Outras despesas
    misc: {
      title: 'Outras despesas',
      insurance: 'Seguro viagem',
      visa: 'Taxas de visto',
      souvenirs: 'Lembranças',
      internet: 'Custos com internet',
      tips: 'Gorjetas',
      other: 'Outras despesas diversas'
    },
    
    // Títulos da tabela
    table: {
      category: 'Categoria',
      description: 'Descrição',
      amount: 'Valor',
      actions: 'Ações'
    },
    
    // Estatísticas e análise
    analysis: {
      title: 'Análise de orçamento',
      summary: 'Resumo do orçamento',
      breakdown: 'Detalhamento de gastos',
      distribution: 'Distribuição do orçamento',
      dailyAverage: 'Média diária',
      suggestions: 'Sugestões de orçamento'
    },
    
    // Moedas
    currencies: {
      CNY: 'Yuan chinês (¥)',
      USD: 'Dólar americano ($)',
      EUR: 'Euro (€)',
      JPY: 'Iene japonês (¥)',
      GBP: 'Libra esterlina (£)',
      KRW: 'Won coreano (₩)',
      AUD: 'Dólar australiano ($)',
      CAD: 'Dólar canadense ($)',
      THB: 'Baht tailandês (฿)',
      SGD: 'Dólar de Cingapura ($)'
    },
    
    // Destinos comuns
    destinations: {
      domestic: 'Destinos domésticos',
      international: 'Destinos internacionais',
      popularCities: 'Cidades populares',
      beijing: 'Pequim',
      shanghai: 'Xangai',
      guangzhou: 'Cantão',
      shenzhen: 'Shenzhen',
      hangzhou: 'Hangzhou',
      chengdu: 'Chengdu',
      xian: 'Xi\'an',
      sanya: 'Sanya',
      tokyo: 'Tóquio',
      osaka: 'Osaka',
      seoul: 'Seul',
      bangkok: 'Bangkok',
      singapore: 'Cingapura',
      paris: 'Paris',
      london: 'Londres',
      newyork: 'Nova York',
      sydney: 'Sydney',
      custom: 'Destino personalizado'
    },
    
    // Dicas e sugestões
    tips: {
      general: 'Sugestões gerais',
      saveMoney: 'Dicas para economizar',
      localCurrency: 'Dicas sobre moeda local',
      emergencyFund: 'Recomenda-se reservar 10-15% do orçamento total para emergências',
      transport: 'Reservar passagens com antecedência geralmente economiza dinheiro',
      accommodation: 'Considerar hospedagens com cozinha pode reduzir gastos com alimentação',
      food: 'Experimentar a culinária local costuma ser mais econômico que restaurantes internacionais',
      planning: 'Planejar um itinerário diário detalhado ajuda a controlar o orçamento',
      extraCosts: 'Não se esqueça de considerar pequenas despesas como gorjetas, internet e cartões de transporte'
    },
    
    // Mensagens
    messages: {
      success: 'Orçamento calculado com sucesso',
      error: 'Por favor, preencha todos os campos obrigatórios',
      dateError: 'A data de término deve ser posterior à data de início',
      saved: 'Plano de orçamento salvo',
      deleted: 'Plano de orçamento excluído',
      highBudget: 'Seu orçamento parece acima da média para este destino',
      lowBudget: 'Seu orçamento pode estar baixo, certifique-se de cobrir todas as despesas necessárias'
    },
    
    // Informações do rodapé
    about: {
      title: 'Sobre o Planejador de Orçamento de Viagem',
      description: 'O Planejador de Orçamento de Viagem é uma ferramenta para ajudar a gerenciar seus gastos em viagens, tornando sua experiência mais agradável e econômica. Ao planejar detalhadamente cada despesa, você evita pressões financeiras durante a viagem e aproveita melhor a experiência.',
      
      featuresTitle: 'Principais recursos',
      feature1: 'Crie orçamentos realistas baseados em destino, duração e número de viajantes',
      feature2: 'Detalhe gastos com transporte, hospedagem, alimentação e atividades',
      feature3: 'Fornece análises e visualizações do orçamento',
      feature4: 'Suporte a múltiplas moedas e conversão',
      feature5: 'Oferece dicas práticas para economizar em viagens',
      feature6: 'Permite exportar e salvar planos de orçamento',
      
      benefitsTitle: 'Vantagens',
      benefit1: 'Evita ultrapassar o orçamento durante a viagem',
      benefit2: 'Distribui recursos adequadamente entre diferentes aspectos da viagem',
      benefit3: 'Reduz o estresse financeiro durante a viagem',
      benefit4: 'Aumenta a eficiência no planejamento',
      benefit5: 'Adapta-se a diferentes estilos de viagem e necessidades orçamentárias',
      
      tipsTitle: 'Dicas para planejamento orçamentário',
      tip1: 'Ajuste o orçamento conforme o custo de vida do destino',
      tip2: 'Reserve 10-15% do total para imprevistos',
      tip3: 'Viajar na baixa temporada pode reduzir significativamente custos',
      tip4: 'Ao usar cartões, verifique as taxas para transações internacionais',
      tip5: 'Considere adquirir seguro viagem para emergências'
    }
  };