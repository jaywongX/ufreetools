export default {
  name: 'Gerador de Mock API',
  description: 'Gere automaticamente APIs mock baseadas em especificações OpenAPI',

  options: {
    version: 'Versão OpenAPI',
    format: 'Formato de saída',
    includeExamples: 'Incluir respostas de exemplo',
    responseDynamism: 'Dinamismo da resposta',
    responseType: 'Tipo de resposta',
    arrayLength: 'Tamanho do array',
    responseFormat: 'Formato da resposta'
  },

  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },

  actions: {
    generate: 'Gerar Mock',
    preview: 'Visualizar API',
    clear: 'Limpar',
    copy: 'Copiar código',
    download: 'Baixar',
    uploadSpec: 'Enviar especificação OpenAPI',
    uploadJava: 'Enviar arquivo Java',
    generateJson: 'Gerar JSON',
    generateBuilder: 'Gerar Builder',
    format: 'Formatar'
  },

  messages: {
    copied: 'Copiado para a área de transferência!',
    generationSuccess: 'Mock API gerado com sucesso',
    generationError: 'Erro ao gerar Mock API',
    specRequired: 'Forneça uma especificação OpenAPI',
    fileUploaded: 'Arquivo enviado',
    parseError: 'Falha ao analisar classe Java - verifique o formato do arquivo'
  },

  help: {
    uploadHint: 'Suporte para arquivos .java - análise automática da estrutura da classe para gerar configuração mock (propriedades aninhadas ainda não suportadas)'
  },

  fields: {
    title: 'Definição de campos',
    addField: 'Adicionar campo',
    addChildField: 'Adicionar subcampo',
    fieldName: 'Nome do campo'
  },

  fieldTypes: {
    string: 'Texto',
    number: 'Número',
    boolean: 'Booleano',
    date: 'Data',
    name: 'Nome',
    email: 'E-mail',
    phone: 'Telefone',
    address: 'Endereço',
    id: 'ID',
    image: 'URL de imagem',
    array: 'Array',
    object: 'Objeto'
  },

  array: {
    itemType: 'Tipo do item',
    arrayFields: 'Campos do array'
  },

  object: {
    childFields: 'Subcampos'
  },

  responseTypes: {
    object: 'Objeto único',
    array: 'Array de objetos',
    custom: 'Estrutura personalizada'
  },

  responseFormats: {
    dataOnly: 'Apenas dados',
    standard: 'Resposta REST padrão (code, data, message)'
  },

  placeholder: {
    output: '// Os dados mock gerados aparecerão aqui'
  }
};