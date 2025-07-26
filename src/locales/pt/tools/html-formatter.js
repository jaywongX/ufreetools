export default {
  name: 'Formatador HTML',
  description: 'Organize e otimize seu código HTML com formatação e minificação',
  formatMode: 'Modo de Formatação',
  beautify: 'Formatar',
  minify: 'Minificar',
  formatOptions: 'Opções de Formatação',
  removeComments: 'Remover comentários',
  preserveComments: 'Preservar comentários',
  showLineNumbers: 'Mostrar números de linha',
  helpText: 'Esta ferramenta ajuda desenvolvedores a organizar ou otimizar código HTML, melhorando legibilidade ou reduzindo tamanho de arquivos.',
  input: 'HTML de Entrada',
  inputPlaceholder: 'Cole ou digite seu código HTML aqui...',
  examples: 'Exemplos',

  exampleNames: {
    simple: 'HTML Simples',
    complex: 'Página HTML Complexa'
  },

  beautifiedResult: 'Resultado Formatado',
  minifiedResult: 'Resultado Minificado',

  stats: {
    chars: 'Caracteres',
    lines: 'Linhas',
    reduction: 'Redução de {chars} caracteres ({percent}%)'
  },

  indentOptions: {
    spaces: '{count} espaços',
    tab: 'Tabulação'
  },

  errorMessages: {
    emptyInput: 'Insira o código HTML para processar',
    processingFailed: 'Falha ao processar HTML: {message}'
  },

  options: {
    indentSize: 'Tamanho da Indentação',
    wrapLength: 'Comprimento de Linha',
    indentInnerHtml: 'Indentar HTML interno',
    preserveNewlines: 'Preservar quebras de linha',
    maxPreserveNewlines: 'Máximo de quebras consecutivas',
    wrapAttributes: 'Quebrar atributos',
    sortAttributes: 'Ordenar atributos',
    sortClassNames: 'Ordenar classes CSS'
  },

  actions: {
    format: 'Formatar HTML',
    minify: 'Minificar',
    clear: 'Limpar',
    copy: 'Copiar',
    download: 'Baixar',
    upload: 'Carregar Arquivo'
  },

  messages: {
    copied: 'Copiado para área de transferência!',
    formatSuccess: 'HTML formatado com sucesso',
    formatError: 'Erro ao formatar HTML',
    invalidHtml: 'HTML inválido'
  }
};