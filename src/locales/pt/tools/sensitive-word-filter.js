export default {
    name: 'Filtro de Palavras Sensíveis',
    description: 'Detecta e filtra palavras sensíveis em textos, com suporte a dicionários personalizados e regras de filtro',
    input: {
      title: 'Texto de Entrada',
      placeholder: 'Insira o texto para análise...',
      loadSample: 'Carregar Exemplo',
      clearInput: 'Limpar Entrada',
      uploadFile: 'Upload de Arquivo'
    },
    output: {
      title: 'Texto Filtrado',
      original: 'Texto Original',
      filtered: 'Texto Filtrado',
      statistics: 'Estatísticas',
      copyOutput: 'Copiar Texto Filtrado',
      clearOutput: 'Limpar Saída',
      download: 'Download do Texto Filtrado'
    },
    options: {
      title: 'Opções de Filtro',
      filterMode: 'Modo de Filtro',
      caseSensitive: 'Diferenciar Maiúsculas/Minúsculas',
      wholeWordOnly: 'Apenas Palavras Inteiras',
      customReplacement: 'Substituição Personalizada',
      replacementChar: 'Caractere de Substituição',
      highlightWords: 'Destacar Palavras Sensíveis',
      customDictionary: 'Dicionário Personalizado',
      importDictionary: 'Importar Dicionário',
      exportDictionary: 'Exportar Dicionário'
    },
    filterModes: {
      replace: 'Substituir Palavras',
      highlight: 'Destacar Palavras',
      remove: 'Remover Palavras',
      detect: 'Apenas Detectar'
    },
    dictionary: {
      title: 'Dicionário',
      add: 'Adicionar Palavra',
      remove: 'Remover',
      clear: 'Limpar Dicionário',
      wordInput: 'Insira a palavra para adicionar',
      categories: 'Categorias',
      severity: 'Gravidade',
      bulkAdd: 'Adição em Massa',
      search: 'Buscar no Dicionário'
    },
    categories: {
      profanity: 'Palavrões',
      slurs: 'Calúnias',
      adult: 'Conteúdo Adulto',
      offensive: 'Conteúdo Ofensivo',
      violence: 'Violência',
      discrimination: 'Discriminação',
      personal: 'Informações Pessoais',
      custom: 'Personalizado'
    },
    severityLevels: {
      low: 'Baixa',
      medium: 'Média',
      high: 'Alta',
      critical: 'Crítica'
    },
    statistics: {
      totalWords: 'Total de Palavras',
      sensitiveWords: 'Palavras Sensíveis',
      uniqueSensitiveWords: 'Palavras Sensíveis Únicas',
      severityBreakdown: 'Distribuição por Gravidade',
      categoryBreakdown: 'Distribuição por Categoria',
      cleanlinessScore: 'Pontuação de Limpeza'
    },
    filterOptions: {
      title: 'Modos de Filtro',
      modes: {
        asterisk: 'Substituir por *',
        custom: 'Caractere Personalizado',
        remove: 'Remover Palavras'
      },
      replaceChar: {
        title: 'Caractere de Substituição',
        placeholder: 'Insira o caractere'
      }
    },
    customWords: {
      title: 'Dicionário Personalizado',
      addWord: 'Adicionar Palavra',
      addPrompt: 'Insira a palavra sensível:',
      removeWord: 'Remover'
    },
    actions: {
      filter: 'Filtrar',
      reset: 'Resetar',
      processing: 'Processando...',
      clearAll: 'Limpar Tudo',
      copyFiltered: 'Copiar Texto Filtrado',
      downloadReport: 'Download do Relatório',
      resetSettings: 'Resetar Configurações'
    },
    results: {
      title: 'Resultados',
      tabs: {
        filteredResult: 'Resultado Filtrado',
        detectionReport: 'Relatório de Detecção'
      },
      filteredText: {
        title: 'Texto Filtrado',
        copy: 'Copiar Resultado',
        empty: 'Nenhum resultado'
      },
      statistics: {
        detectedCount: 'Palavras Sensíveis Detectadas',
        retentionRate: 'Taxa de Retenção',
        totalWords: 'Total de Palavras'
      },
      detectedWords: {
        title: 'Palavras Detectadas',
        empty: 'Nenhuma palavra sensível detectada'
      }
    },
    messages: {
      copied: 'Copiado para a área de transferência',
      copyFailed: 'Falha ao copiar, copie manualmente',
      noInput: 'Insira o texto para filtrar',
      inputTooLong: 'Texto muito longo',
      wordAdded: 'Palavra adicionada ao dicionário',
      wordExists: 'Palavra já existe no dicionário',
      wordRemoved: 'Palavra removida do dicionário',
      filterSuccess: 'Filtragem concluída',
      noSensitiveWords: 'Nenhuma palavra sensível encontrada',
      dictionaryCleared: 'Dicionário limpo',
      dictionaryImported: 'Dicionário importado',
      dictionaryExported: 'Dicionário exportado',
      emptyText: 'Insira o texto para filtrar'
    },
    article: {
      title: 'Filtro de Palavras Sensíveis: Ferramenta Completa para Filtragem de Texto',
      functionality: {
        title: 'Funcionalidades',
        description: '<strong>Filtro de Palavras Sensíveis</strong> é uma ferramenta avançada para identificar e filtrar conteúdo inadequado em textos. Utiliza algoritmos de correspondência de padrões para detectar palavras problemáticas e oferece múltiplos modos de filtragem com análise estatística detalhada.'
      },
      useCases: {
        title: 'Aplicações Práticas',
        list: [
          '<strong>Moderação de Conteúdo</strong>: Filtra comentários e posts em fóruns para manter ambientes online seguros.',
          '<strong>Material Educacional</strong>: Garante que materiais didáticos não contenham linguagem inadequada.',
          '<strong>Atendimento ao Cliente</strong>: Filtra comunicações para manter padrões profissionais.',
          '<strong>Redes Sociais</strong>: Prepara conteúdo para publicação em plataformas sociais.',
          '<strong>Preparação de Dados</strong>: Limpa conjuntos de dados para análise e machine learning.',
          '<strong>Comunicação Corporativa</strong>: Garante conformidade com políticas linguísticas empresariais.'
        ]
      },
      faq: {
        title: 'Perguntas Frequentes',
        items: [
          {
            question: 'Qual a precisão da detecção?',
            answer: 'O sistema tem <strong>alta precisão</strong> na detecção, mas o contexto pode afetar resultados. Você pode personalizar o dicionário para melhorar a precisão.'
          },
          {
            question: 'Posso criar meu próprio dicionário?',
            answer: 'Sim, o <strong>dicionário personalizado</strong> permite adicionar palavras específicas para suas necessidades.'
          },
          {
            question: 'Quais modos de filtro estão disponíveis?',
            answer: 'Você pode <strong>substituir por asteriscos</strong>, usar caracteres personalizados ou <strong>remover completamente</strong> as palavras sensíveis.'
          },
          {
            question: 'Funciona com outros idiomas?',
            answer: 'Sim, o <strong>filtro multilíngue</strong> funciona com vários idiomas, embora a eficácia possa variar.'
          },
          {
            question: 'Como lidar com textos grandes?',
            answer: 'Para <strong>grandes volumes de texto</strong>, a ferramenta é otimizada para processamento eficiente, mas textos muito grandes podem exigir processamento em partes.'
          }
        ]
      },
      tutorial: {
        title: 'Guia Passo a Passo',
        steps: [
          '<strong>Insira o texto</strong>: Cole ou digite o texto na área de entrada.',
          '<strong>Configure as opções</strong>: Selecione o modo de filtro desejado.',
          '<strong>Personalize o dicionário</strong> (opcional): Adicione palavras específicas ao filtro.',
          '<strong>Inicie a filtragem</strong>: Clique no botão para processar o texto.',
          '<strong>Analise os resultados</strong>: Verifique o texto filtrado e as estatísticas.',
          '<strong>Copie ou salve</strong>: Use o texto filtrado em seus aplicativos.'
        ]
      }
    }
  }