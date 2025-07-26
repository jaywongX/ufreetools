export default {
  name: 'Codificador/Decodificador de URL',
  description: 'Codificação URL converte caracteres especiais em formatos aceitáveis para URLs, comumente usado para parâmetros de URL e envio de formulários.',

  options: {
    operationType: 'Tipo de operação',
    encodeMode: 'Modo de codificação'
  },

  encodeOptions: {
    standard: 'Codificação padrão (encodeURI)',
    component: 'Codificação de componente (encodeURIComponent)',
    full: 'Codificação completa (todos caracteres)',
    standardDescription: 'Codifica a URL inteira, preservando caracteres estruturais',
    componentDescription: 'Adequado para parâmetros de URL, codifica todos caracteres especiais',
    fullDescription: 'Codifica todos caracteres não alfanuméricos, incluindo espaços (convertidos para %20 em vez de +)'
  },

  actions: {
    encode: 'Codificar URL',
    decode: 'Decodificar URL',
    clear: 'Limpar',
    copyResult: 'Copiar resultado'
  },

  input: {
    textToEncode: 'Texto para codificar',
    textToDecode: 'Texto para decodificar',
    encodePlaceholder: 'Insira a URL ou texto para codificar...',
    decodePlaceholder: 'Insira a URL ou texto para decodificar...'
  },

  output: {
    encodeResult: 'Resultado da codificação',
    decodeResult: 'Resultado da decodificação'
  },

  messages: {
    copied: '(Copiado',
    error: 'Erro: {message}',
    decodeError: 'Falha ao decodificar: "{text}"',
    copyFailed: 'Falha ao copiar, copie manualmente'
  },

  referenceTable: {
    title: 'Tabela de referência de codificação URL',
    showTable: 'Mostrar tabela',
    hideTable: 'Ocultar tabela',
    character: 'Caractere',
    encoded: 'Codificação URL',
    description: 'Descrição',
    descriptions: {
      space: 'Espaço',
      exclamation: 'Ponto de exclamação',
      doubleQuote: 'Aspas duplas',
      hash: 'Cerquilha',
      dollar: 'Cifrão',
      percent: 'Porcentagem',
      ampersand: 'E comercial',
      singleQuote: 'Aspas simples',
      leftParenthesis: 'Parêntese esquerdo',
      rightParenthesis: 'Parêntese direito',
      asterisk: 'Asterisco',
      plus: 'Sinal de mais',
      comma: 'Vírgula',
      slash: 'Barra',
      colon: 'Dois pontos',
      semicolon: 'Ponto e vírgula',
      lessThan: 'Menor que',
      equals: 'Igual',
      greaterThan: 'Maior que',
      questionMark: 'Ponto de interrogação',
      at: 'Arroba',
      leftBracket: 'Colchete esquerdo',
      backslash: 'Barra invertida',
      rightBracket: 'Colchete direito',
      caret: 'Acento circunflexo',
      backtick: 'Acento grave',
      leftBrace: 'Chave esquerda',
      pipe: 'Barra vertical',
      rightBrace: 'Chave direita',
      tilde: 'Til',
      chinese: 'Caracteres chineses (codificação UTF-8)'
    }
  }
};