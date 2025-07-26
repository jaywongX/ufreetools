export default {
  name: 'Gerador OpenAPI → Cliente TypeScript',
  description: 'Gera automaticamente interfaces TypeScript e código de cliente a partir de especificações OpenAPI, melhorando a eficiência da colaboração entre front-end e back-end',

  options: {
    exportSchemas: 'Exportar todas as definições de modelo',
    generateClient: 'Gerar código de cliente API',
    addComments: 'Adicionar comentários e documentação',
    useEnums: 'Usar enums TypeScript (em vez de tipos união de strings)',
    indentSize: 'Tamanho da indentação',
    operationType: 'Tipo de operação',
    displayOptions: 'Opções de exibição'
  },

  inputMode: {
    toggleToFile: 'Alternar para upload de arquivo',
    toggleToText: 'Alternar para entrada de texto',
    loadExample: 'Carregar exemplo'
  },

  fileUpload: {
    dragAndDrop: 'Arraste e solte o arquivo OpenAPI aqui ou clique para fazer upload',
    supportedFormats: 'Formatos suportados: .json, .yaml e .yml',
    fileSelected: 'Selecionado: {0} ({1})'
  },

  textInput: {
    placeholder: 'Cole a especificação OpenAPI (JSON ou YAML) aqui...'
  },

  actions: {
    generate: 'Gerar código TypeScript',
    processing: 'Processando...',
    clear: 'Limpar',
    copy: 'Copiar código',
    download: 'Baixar código'
  },

  results: {
    generatedCode: 'Código TypeScript gerado',
    copied: 'Copiado para a área de transferência',
    error: 'Erro',
    characterCount: 'Contagem de caracteres: {0}'
  },

  errors: {
    parseError: 'Não foi possível analisar a especificação OpenAPI. Certifique-se de fornecer um formato JSON ou YAML válido.',
    invalidSpec: 'Especificação OpenAPI inválida. Nenhum identificador de versão openapi ou swagger encontrado.',
    processingError: 'Erro ao processar a especificação OpenAPI: {0}'
  }
};