export default {
    name: 'Livro de Contas Pessoal',
    description: 'Acompanhe suas receitas e despesas com esta ferramenta financeira pessoal fácil de usar',
    tags: ['finanças', 'contabilidade', 'orçamento', 'dinheiro', 'rastreamento de gastos', 'finanças pessoais'],
    category: 'ferramentas-praticas',
    
    // Elementos da interface
    ui: {
      addTransaction: 'Adicionar transação',
      editTransaction: 'Editar transação',
      deleteTransaction: 'Excluir transação',
      income: 'Receita',
      expense: 'Despesa',
      transfer: 'Transferência',
      date: 'Data',
      amount: 'Valor',
      category: 'Categoria',
      account: 'Conta',
      description: 'Descrição',
      tags: 'Tags',
      save: 'Salvar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      filter: 'Filtrar',
      search: 'Pesquisar',
      clear: 'Limpar',
      overview: 'Visão geral',
      transactions: 'Transações',
      statistics: 'Estatísticas',
      budget: 'Orçamento',
      settings: 'Configurações',
      exportData: 'Exportar dados',
      importData: 'Importar dados',
      backup: 'Backup',
      restore: 'Restaurar',
      currency: 'Moeda',
      language: 'Idioma',
      theme: 'Tema',
      darkMode: 'Modo escuro',
      lightMode: 'Modo claro',
      resetData: 'Redefinir dados',
      resetConfirmation: 'Tem certeza que deseja redefinir todos os dados? Esta ação não pode ser desfeita.',
      from: 'De',
      to: 'Para',
      filterByDate: 'Filtrar por data',
      noTransactions: 'Nenhuma transação para exibir',
      allCategories: 'Todas as categorias',
      addCategory: 'Adicionar categoria',
      editCategory: 'Editar categoria',
      deleteCategory: 'Excluir categoria',
      categoryName: 'Nome da categoria',
      categoryIcon: 'Ícone da categoria',
      categoryColor: 'Cor da categoria',
      addAccount: 'Adicionar conta',
      editAccount: 'Editar conta',
      deleteAccount: 'Excluir conta',
      accountName: 'Nome da conta',
      accountType: 'Tipo de conta',
      accountBalance: 'Saldo da conta',
      totalIncome: 'Receita total',
      totalExpense: 'Despesa total',
      balance: 'Saldo',
      netWorth: 'Patrimônio líquido',
      daily: 'Diário',
      weekly: 'Semanal',
      monthly: 'Mensal',
      yearly: 'Anual',
      today: 'Hoje',
      thisWeek: 'Esta semana',
      thisMonth: 'Este mês',
      thisYear: 'Este ano',
      lastWeek: 'Semana passada',
      lastMonth: 'Mês passado',
      lastYear: 'Ano passado',
      custom: 'Personalizado',
      setBudget: 'Definir orçamento',
      budgetLimit: 'Limite do orçamento',
      budgetPeriod: 'Período do orçamento',
      budgetCategory: 'Categoria do orçamento',
      budgetAlert: 'Alerta de orçamento',
      budgetUsage: 'Uso do orçamento',
      remaining: 'Restante',
      spent: 'Gasto',
      over: 'Acima',
      exportFormat: 'Formato de exportação',
      importFormat: 'Formato de importação',
      csv: 'CSV',
      json: 'JSON',
      selectFile: 'Selecionar arquivo',
      successfullyImported: 'Dados importados com sucesso',
      errorImporting: 'Erro ao importar dados',
      successfullyExported: 'Dados exportados com sucesso',
      errorExporting: 'Erro ao exportar dados',
      confirmDelete: 'Tem certeza que deseja excluir este item?',
      recurringTransaction: 'Transação recorrente',
      frequency: 'Frequência',
      startDate: 'Data de início',
      endDate: 'Data de término',
      never: 'Nunca',
      daily: 'Diariamente',
      weekly: 'Semanalmente',
      monthly: 'Mensalmente',
      yearly: 'Anualmente',
      note: 'Nota',
      attachment: 'Anexo',
      dataSecurity: 'Segurança de dados',
      type: 'Tipo',
      clearTransactions: 'Limpar transações',
      confirmClearTransactions: 'Tem certeza que deseja limpar todas as transações? Esta ação não pode ser desfeita.',
      transactionsCleared: 'Todas as transações foram limpas',
      enterValidAmount: 'Por favor, insira um valor válido',
      selectDate: 'Por favor, selecione uma data',
      selectCategory: 'Por favor, selecione uma categoria'
    },
    
    // Categorias pré-definidas
    categories: {
      income: {
        salary: 'Salário',
        freelance: 'Freelance',
        investments: 'Rendimentos de investimentos',
        gifts: 'Presentes',
        refunds: 'Reembolsos',
        other: 'Outras receitas'
      },
      expense: {
        food: 'Alimentação',
        groceries: 'Mercado',
        rent: 'Aluguel/Financiamento',
        utilities: 'Contas (água, luz, gás)',
        transportation: 'Transporte',
        entertainment: 'Entretenimento',
        shopping: 'Compras',
        health: 'Saúde',
        education: 'Educação',
        personal: 'Cuidados pessoais',
        travel: 'Viagens',
        insurance: 'Seguros',
        taxes: 'Impostos',
        debt: 'Pagamento de dívidas',
        subscription: 'Assinaturas',
        charity: 'Doações e caridade',
        business: 'Despesas comerciais',
        other: 'Outras despesas'
      },
      transfer: {
        bank_transfer: 'Transferência bancária',
        savings: 'Poupança',
        investment: 'Investimento',
        debt_payment: 'Pagamento de dívida',
        other: 'Outras transferências'
      }
    },
    
    // Tipos de conta
    accountTypes: {
      cash: 'Dinheiro',
      checking: 'Conta corrente',
      savings: 'Poupança',
      creditCard: 'Cartão de crédito',
      investment: 'Investimentos',
      loan: 'Empréstimo',
      asset: 'Ativo',
      other: 'Outro'
    },
    
    // Rótulos dos gráficos
    charts: {
      incomeVsExpense: 'Receitas vs Despesas',
      expenseByCategory: 'Despesas por categoria',
      monthlyTrend: 'Tendência mensal',
      savingsRate: 'Taxa de poupança',
      netWorthTrend: 'Evolução do patrimônio',
      budgetPerformance: 'Desempenho do orçamento',
      topExpenseCategories: 'Principais categorias de despesas',
      cashFlow: 'Fluxo de caixa'
    },
    
    // Documentação
    documentation: {
      title: 'Sobre o Livro de Contas Pessoal',
      introduction: 'O Livro de Contas Pessoal é uma ferramenta projetada para gestão financeira pessoal. Todos os dados são armazenados no seu navegador, garantindo total privacidade das suas informações financeiras.',
      whyUse: {
        title: 'Por que usar o Livro de Contas Pessoal?',
        points1: 'Totalmente privado - Todos os dados ficam armazenados localmente',
        points2: 'Interface simples - Design intuitivo para registrar transações facilmente',
        points3: 'Visualização de dados - Gráficos para entender seus hábitos de consumo',
        points4: 'Categorias personalizáveis - Crie categorias que atendam suas necessidades',
        points5: 'Exportação de dados - Exporte para CSV para backup ou análise'
      },
      tips: {
        title: 'Dicas de uso',
        points1: 'Registre transações regularmente para manter seus dados atualizados',
        points2: 'Use tags para categorizar despesas com mais detalhes',
        points3: 'Defina orçamentos mensais para controlar gastos',
        points4: 'Exporte seus dados periodicamente como backup',
        points5: 'Use as estatísticas para identificar padrões de consumo'
      },
      dataStorage: {
        title: 'Armazenamento de dados',
        content: 'Todos os seus dados financeiros são armazenados localmente no navegador. Isso significa que suas informações nunca saem do seu dispositivo. Limpar os dados do navegador também apagará seus registros, então lembre-se de fazer backups regulares.'
      }
    },
    
    // Artigo
    article: {
      title: "Livro de Contas Pessoal: Controle sua saúde financeira",
      features: {
        title: "Gestão financeira pessoal",
        description: "O Livro de Contas Pessoal é uma ferramenta completa para ajudar você a controlar sua vida financeira. Este rastreador de gastos seguro e privado permite registrar receitas e despesas, monitorar seu fluxo de caixa e analisar padrões financeiros, sem compartilhar dados com servidores externos.<br><br>Nosso gerenciador financeiro pessoal oferece categorização de transações, planejamento orçamentário, visualizações estatísticas e exportação de dados. A interface intuitiva facilita o acompanhamento diário, enquanto relatórios avançados fornecem insights sobre seus hábitos de consumo e padrões de poupança. Seja para reduzir dívidas, economizar para grandes compras ou simplesmente entender melhor seus gastos, esta ferramenta de orçamento oferece tudo que você precisa para uma gestão financeira eficaz.",
        useCases: {
          title: "Aplicações práticas do orçamento pessoal",
          items: [
            "Estudantes acompanhando gastos e mesada para evitar excessos",
            "Freelancers monitorando renda por projeto e despesas fixas",
            "Jovens profissionais economizando para metas como entrada de imóvel",
            "Famílias gerenciando orçamento doméstico e planejando despesas futuras",
            "Pequenos empresários separando finanças pessoais e empresariais",
            "Aposentados monitorando renda fixa e gastos mensais"
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre gestão financeira",
        items: [
          {
            question: "Meus dados financeiros estão seguros usando este aplicativo?",
            answer: "Totalmente seguro. Suas informações financeiras são armazenadas apenas no seu navegador, nunca são enviadas para servidores externos. Não requer cadastro ou login, garantindo privacidade total. Recomendamos exportar backups regulares, pois limpar os dados do navegador apagará seus registros."
          },
          {
            question: "Como o controle de orçamento pode me ajudar a economizar?",
            answer: "Definindo limites para categorias de gastos e monitorando seu progresso, você cria consciência financeira. Alertas visuais quando você se aproxima dos limites ajudam a evitar excessos. Relatórios mensais revelam padrões de gastos, destacando oportunidades para economizar."
          },
          {
            question: "Posso gerenciar múltiplas contas ou moedas?",
            answer: "Sim, você pode criar e monitorar diferentes tipos de contas (corrente, poupança, investimentos etc.) em um único painel. Para moedas diferentes, o aplicativo permite definir tipos de moeda e fazer conversões. Transferências entre contas mantêm seus saldos atualizados."
          },
          {
            question: "Quão detalhados são os relatórios financeiros?",
            answer: "Os relatórios oferecem profundidade com interface amigável. O painel de análise inclui comparação receitas/despesas, detalhamento por categoria, tendências mensais e acompanhamento de poupança. Filtros por período, categoria ou conta permitem análises específicas."
          },
          {
            question: "Como isso difere de aplicativos bancários?",
            answer: "Enquanto apps bancários focam em saldos e transações de uma instituição, nossa ferramenta oferece visão completa de todas suas finanças com privacidade total. Diferente dos apps bancários que mostram o passado, nosso foco é planejamento, orçamento e análise com categorias personalizadas."
          }
        ]
      },
      guide: {
        title: "Guia passo a passo para gestão financeira",
        steps: [
          "Comece pelo painel de visão geral para ver sua situação financeira completa",
          "Adicione suas contas (corrente, poupança, cartões etc.) com saldos iniciais",
          "Registre transações (receitas, despesas ou transferências) com data, valor e categoria",
          "Defina orçamentos mensais para categorias de gastos principais",
          "Analise seus padrões de gastos através dos gráficos estatísticos",
          "Revise regularmente seu histórico de transações para manter dados precisos",
          "Exporte backups periódicos para proteger seus registros"
        ]
      },
      conclusion: "O Livro de Contas Pessoal transforma a gestão financeira em um processo simples e até prazeroso. Ao fornecer um ambiente seguro para acompanhar gastos, monitorar receitas e visualizar padrões, esta ferramenta oferece clareza sobre seus hábitos financeiros. Com uso contínuo, você ganhará compreensão mais profunda de sua relação com o dinheiro, identificando oportunidades para melhorias. Seja para reduzir dívidas, acumular poupança ou simplesmente ter maior consciência financeira, esta ferramenta o guiará rumo a uma saúde financeira melhor e maior tranquilidade econômica."
    }
  }