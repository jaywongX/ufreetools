export default {
  name: 'Conversor CSV para JSON',
  description: 'Converta dados CSV para formato JSON com opções personalizáveis',

  options: {
    delimiter: 'Delimitador',
    quote: 'Caractere de aspas',
    header: 'Primeira linha como cabeçalho',
    dynamicTyping: 'Tipagem dinâmica',
    dynamicTypingDescription: 'Converte strings numéricas para números, "true/false" para booleanos, etc',
    skipEmptyLines: 'Ignorar linhas vazias',
    comments: 'Caractere de comentário',
    outputFormat: 'Formato de saída',
    indentation: 'Indentação',
    encoding: 'Codificação',
    newline: 'Caractere de nova linha',
    title: 'Opções de conversão'
  },

  delimiters: {
    comma: 'Vírgula (,)',
    semicolon: 'Ponto e vírgula (;)',
    tab: 'Tabulação (\\t)',
    pipe: 'Barra vertical (|)',
    custom: 'Personalizado'
  },

  formats: {
    array: 'Array de objetos',
    arrayOfArrays: 'Array de arrays',
    keyed: 'Objeto com chaves',
    nested: 'Objeto aninhado'
  },

  preview: {
    input: 'Entrada...',
    output: 'Saída...',
    rawCsv: 'CSV original',
    parsedCsv: 'CSV processado',
    jsonOutput: 'Saída JSON',
    firstRows: 'Primeiras {count} linhas',
    showAll: 'Mostrar tudo'
  },

  actions: {
    convert: 'Converter',
    copy: 'Copiar JSON',
    download: 'Baixar JSON',
    clear: 'Limpar',
    uploadCsv: 'Enviar CSV',
    swap: 'Trocar entrada/saída',
    loadExample: 'Carregar exemplo',
    clearInput: 'Limpar entrada',
    formatOutput: 'Formatar saída',
    copyResult: 'Copiar resultado',
    downloadResult: 'Baixar resultado',
    paste: 'Colar',
    showOptions: 'Mostrar opções',
    hideOptions: 'Ocultar opções',
    uploadJson: 'Enviar JSON'
  },

  results: {
    rowsProcessed: '{count} linhas processadas',
    conversionComplete: 'Conversão concluída',
    copied: 'Copiado para área de transferência',
    downloaded: 'Download concluído',
    error: 'Erro'
  },

  errors: {
    noData: 'Nenhum dado CSV para converter',
    invalidCsv: 'Formato CSV inválido',
    parsingFailed: 'Falha ao processar: {error}',
    missingHeader: 'Linha de cabeçalho ausente',
    invalidJson: 'Formato JSON inválido',
    formatFailed: 'Falha ao formatar: {error}',
    copyFailed: 'Falha ao copiar, copie manualmente',
    downloadFailed: 'Falha no download',
    pasteError: 'Não foi possível colar da área de transferência',
    conversionFailed: 'Falha na conversão'
  },

  conversion: {
    title: 'Direção da conversão',
    csvToJson: {
      title: 'CSV para JSON',
      delimiterLabel: 'Delimitador',
      headerLabel: 'Primeira linha como cabeçalho',
      dynamicTypingLabel: 'Inferir tipos de dados',
      skipEmptyLinesLabel: 'Ignorar linhas vazias',
      convertButton: 'Converter CSV para JSON'
    },
    jsonToCsv: {
      title: 'JSON para CSV',
      delimiterLabel: 'Delimitador',
      headerLabel: 'Incluir linha de cabeçalho',
      quotesLabel: 'Adicionar aspas a todos campos',
      nestedModeLabel: 'Processamento de dados aninhados',
      flat: 'Achatar',
      stringify: 'Converter para string',
      ignore: 'Ignorar',
      convertButton: 'Converter JSON para CSV'
    }
  },

  stats: {
    processed: 'Linhas processadas',
    fields: 'Campos/colunas',
    inputSize: 'Tamanho original',
    outputSize: 'Tamanho convertido',
    title: 'Estatísticas'
  },

  messages: {
    copied: 'Copiado para área de transferência',
    download: 'Download concluído',
    error: 'Erro'
  },

  formatBytes: {
    bytes: 'bytes',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  }
};