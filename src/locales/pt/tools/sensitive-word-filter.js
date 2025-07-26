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
  }
};