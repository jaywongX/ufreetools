export default {
  name: 'Conversor de cURL',
  description: 'Converta comandos cURL em snippets de código para várias linguagens de programação',
  title: 'cURL para Código',
  subtitle: 'Transforme comandos cURL em código em múltiplas linguagens para fácil integração de requisições HTTP em seus projetos',

  input: {
    title: 'Comando cURL',
    placeholder: 'Insira o comando cURL aqui',
    parse: 'Analisar cURL',
    clear: 'Limpar',
    examples: 'Exemplos de comandos:',
    options: 'Opções do analisador',
    validateCommand: 'Validar comando',
    formatCurl: 'Formatar cURL'
  },

  options: {
    detectAuth: 'Detectar autenticação automaticamente',
    resolveVariables: 'Resolver variáveis de ambiente',
    processContinuations: 'Processar continuadores de linha (\\)',
    followRedirects: 'Seguir redirecionamentos',
    preserveHeaders: 'Manter todos os cabeçalhos',
    ignoreErrors: 'Ignorar erros de análise',
    noDuplicateHeaders: 'Sem cabeçalhos duplicados (usar o último)'
  },

  output: {
    title: 'Saída de código',
    language: 'Linguagem alvo',
    copy: 'Copiar',
    copyTooltip: 'Copiar para área de transferência',
    download: 'Baixar',
    beautify: 'Formatar',
    codeTitle: 'Código {language}',
    errorTitle: 'Erro de conversão',
    languages: {
      python: 'Python (requests)',
      pythonHttp: 'Python (http.client)',
      node: 'Node.js (axios)',
      nodeRequest: 'Node.js (request)',
      nodeFetch: 'Node.js (fetch)',
      java: 'Java (HttpClient)',
      javaOkHttp: 'Java (OkHttp)',
      php: 'PHP (cURL)',
      phpGuzzle: 'PHP (Guzzle)',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      csharp: 'C# (HttpClient)',
      ruby: 'Ruby',
      dart: 'Dart',
      powershell: 'PowerShell',
      browser: 'Navegador (fetch)',
      curl: 'cURL (formatado)',
      json: 'JSON (objeto de requisição)',
      har: 'HAR (arquivo HTTP)',
      javascript: 'JavaScript (Fetch)'
    }
  },

  request: {
    title: 'Detalhes da requisição',
    method: 'Método',
    url: 'URL',
    headers: 'Cabeçalhos',
    body: 'Corpo',
    auth: 'Autenticação',
    options: 'Opções',
    cookie: 'Cookie',
    queryParams: 'Parâmetros de consulta',
    formData: 'Dados de formulário',
    visualize: 'Visualizar'
  },

  visualization: {
    title: 'Visualização da requisição',
    request: 'Requisição',
    response: 'Resposta',
    headers: 'Cabeçalhos',
    body: 'Corpo',
    timing: 'Tempo',
    raw: 'Bruto'
  },

  analysis: {
    title: 'Análise do comando',
    insecureWarning: 'Aviso: Este comando usa --insecure/-k (verificação SSL desativada)',
    verboseIgnored: 'Nota: Modo verbose (-v) ignorado na conversão',
    unsupportedOptions: 'Opções não suportadas',
    warnings: 'Avisos',
    info: 'Informações'
  },

  messages: {
    parsing: 'Analisando comando cURL...',
    parseFailed: 'Falha ao analisar comando cURL: {error}',
    parseSuccess: 'Comando cURL analisado com sucesso',
    copied: 'Código copiado para área de transferência',
    downloaded: 'Código baixado',
    invalidCurl: 'Comando cURL inválido',
    emptyCurl: 'Por favor, insira um comando cURL',
    validCurl: 'Comando cURL válido',
    unknownOption: 'Opção desconhecida: {option}',
    unsupportedMethod: 'Aviso: Nem todas as linguagens suportam o método HTTP {method}',
    curlRequired: 'O comando deve começar com "curl "',
    copyFailed: 'Falha ao copiar, copie manualmente'
  },

  examples: {
    title: 'Exemplos de comandos cURL',
    basic: 'Requisição GET básica',
    headers: 'Cabeçalhos personalizados',
    post: 'POST com JSON',
    formData: 'Envio de formulário',
    auth: 'Autenticação básica',
    complex: 'Exemplo complexo',
    exampleCommands: {
      getRequest: 'Requisição GET',
      postJson: 'POST JSON',
      postForm: 'POST formulário',
      withAuth: 'Com autenticação',
      uploadFile: 'Upload de arquivo'
    }
  },

  actions: {
    convert: 'Converter',
    converting: 'Convertendo...'
  }
};