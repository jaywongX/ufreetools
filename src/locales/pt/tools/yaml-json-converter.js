export default {
  name: 'Conversor YAML-JSON',
  description: 'Converta facilmente entre formatos YAML e JSON com opções personalizáveis',

  input: {
    title: 'Entrada',
    yamlPlaceholder: 'Insira YAML aqui...',
    jsonPlaceholder: 'Insira JSON aqui...',
    loadSample: 'Carregar exemplo',
    clearInput: 'Limpar entrada',
    uploadFile: 'Enviar arquivo'
  },

  output: {
    title: 'Saída',
    copyOutput: 'Copiar saída',
    downloadOutput: 'Baixar saída',
    clearOutput: 'Limpar saída'
  },

  options: {
    conversionMode: 'Modo de conversão',
    jsonToYaml: 'JSON para YAML',
    yamlToJson: 'YAML para JSON',
    formatOutput: 'Formatar saída',
    indentSize: 'Tamanho da indentação',
    quoteKeys: 'Aspas nas chaves',
    sortKeys: 'Ordenar chaves alfabeticamente',
    flowStyle: 'Estilo de fluxo YAML',
    jsonCompatible: 'Compatível com JSON',
    singleQuotes: 'Usar aspas simples',
    includeSchema: 'Incluir esquema',
    preserveKeyOrder: 'Manter ordem das chaves'
  },

  flowStyles: {
    block: 'Estilo bloco',
    flow: 'Estilo fluxo',
    auto: 'Automático'
  },

  validation: {
    validate: 'Validar antes de converter',
    validInput: '{format} válido',
    invalidInput: '{format} inválido: {error}',
    checkSyntax: 'Verificar sintaxe'
  },

  actions: {
    convert: 'Converter',
    swap: 'Trocar formatos',
    beautify: 'Formatar',
    minify: 'Minificar'
  },

  messages: {
    conversionSuccess: 'Conversão realizada com sucesso',
    conversionFailed: 'Falha na conversão: {error}',
    copySuccess: 'Copiado para área de transferência',
    downloadSuccess: 'Arquivo baixado com sucesso',
    emptyInput: 'Insira conteúdo para conversão',
    invalidYaml: 'Sintaxe YAML inválida',
    invalidJson: 'Sintaxe JSON inválida'
  }
};