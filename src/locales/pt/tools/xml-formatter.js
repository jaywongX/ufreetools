export default {
  name: 'Formatador XML',
  description: 'Formate, embeleze e valide documentos XML',

  options: {
    indentSize: 'Tamanho da indentação',
    useTabs: 'Usar tabulações',
    collapseContent: 'Recolher conteúdo',
    maxLineWidth: 'Largura máxima da linha',
    indentAttributes: 'Indentar atributos',
    sortAttributes: 'Ordenar atributos',
    newlineAfterPI: 'Nova linha após instruções',
    operationType: 'Tipo de operação',
    indentSettings: 'Configurações de indentação',
    displayOptions: 'Opções de exibição',
    showLineNumbers: 'Mostrar números de linha'
  },

  indentOptions: {
    twoSpaces: '2 espaços',
    fourSpaces: '4 espaços',
    tabIndent: 'Tabulação'
  },

  actions: {
    format: 'Formatar XML',
    minify: 'Minificar XML',
    validate: 'Validar',
    toJSON: 'Converter para JSON',
    copy: 'Copiar',
    clear: 'Limpar',
    download: 'Baixar',
    upload: 'Carregar XML',
    beautify: 'Embelezar',
    copyCode: 'Copiar código'
  },

  messages: {
    copied: 'Copiado para área de transferência!',
    formatSuccess: 'XML formatado com sucesso',
    formatError: 'Erro ao formatar XML',
    validXml: 'XML válido',
    invalidXml: 'XML inválido: {0}',
    lineCol: 'Linha {line}, Coluna {col}',
    minifySuccess: 'XML minificado com sucesso',
    conversionSuccess: 'Conversão bem-sucedida',
    conversionError: 'Erro durante conversão',
    pleaseEnterXml: 'Insira o conteúdo XML',
    processingError: 'Erro ao processar XML: {0}',
    formatResult: 'Resultado da formatação',
    characterCount: 'Caracteres: {0}',
    lineCount: 'Linhas: {0}',
    characterAndLineCount: 'Caracteres: {0} | Linhas: {1}'
  },

  input: {
    xmlInput: 'Entrada XML',
    placeholder: 'Cole ou digite XML aqui...'
  },

  examples: {
    title: 'Exemplos XML',
    description: 'Clique para carregar:',
    simpleXml: 'XML Simples',
    bookstore: 'Catálogo de livraria',
    complexXml: 'XML Complexo'
  }
};