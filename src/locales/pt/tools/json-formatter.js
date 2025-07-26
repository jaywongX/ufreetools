export default {
  name: 'Formatador JSON',
  description: 'Ferramenta online para formatar e validar JSON, com suporte a compactação e embelezamento',

  options: {
    indent: 'Recuo',
    sort: 'Ordenar chaves',
    compress: 'Compactar',
    beautify: 'Embelezar'
  },

  actions: {
    format: 'Formatar JSON',
    compress: 'Compactar',
    clear: 'Limpar',
    copy: 'Copiar',
    download: 'Baixar',
    transferMeaning: 'Escapar',
    contraposition: 'Desescapar'
  },

  messages: {
    invalidJson: 'Sintaxe JSON inválida',
    copied: 'Copiado para a área de transferência!',
    empty: 'Insira conteúdo JSON',
    formatTip: 'Exibir lista de propriedades após formatar/compactar JSON',
    formatSuccess: 'JSON formatado com sucesso',
    compressSuccess: 'JSON compactado com sucesso',
    escapeSuccess: 'JSON escapado com sucesso',
    unescapeSuccess: 'JSON desescapado com sucesso',
    copyFailed: 'Falha ao copiar - copie manualmente'
  },

  labels: {
    jsonData: 'Dados JSON',
    propertyList: 'Lista de Propriedades',
    clickToCopy: '(Clique no valor para copiar)'
  },

  placeholders: {
    jsonInput: 'Cole seus dados JSON aqui...'
  }
};