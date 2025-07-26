export default {
  name: 'Consultor de Códigos de Status HTTP',
  description: 'Pesquise e compreenda códigos de status e mensagens de resposta HTTP',

  search: {
    title: 'Buscar Código de Status',
    placeholder: 'Digite o código ou pesquise por descrição',
    button: 'Consultar',
    recent: 'Buscas recentes',
    common: 'Códigos comuns',
    filter: {
      all: 'Todas categorias',
      informational: '1xx - Informativo',
      success: '2xx - Sucesso',
      redirection: '3xx - Redirecionamento',
      clientError: '4xx - Erro do cliente',
      serverError: '5xx - Erro do servidor'
    }
  },

  results: {
    title: 'Informações do Código',
    code: 'Código',
    type: 'Tipo',
    message: 'Mensagem padrão',
    description: 'Descrição',
    spec: 'Especificação',
    references: 'Referências',
    examples: 'Exemplos',
    noResults: 'Nenhum resultado encontrado',
    searchError: 'Erro ao buscar código',
    tryAgain: 'Tente outra pesquisa',
    example: 'Exemplo',
    notes: 'Observações'
  },

  categories: {
    title: 'Categorias',
    information: 'Informativo (1xx)',
    success: 'Sucesso (2xx)',
    redirection: 'Redirecionamento (3xx)',
    clientError: 'Erro do cliente (4xx)',
    serverError: 'Erro do servidor (5xx)',
    unofficial: 'Códigos não oficiais',
    internet: 'Internet Information Services',
    nginx: 'Nginx',
    cloudflare: 'Cloudflare',
    aws: 'AWS'
  },

  statusInfo: {
    '100': {
      message: 'Continuar',
      description: 'Servidor recebeu cabeçalhos, cliente deve enviar corpo da requisição.',
      shortDescription: 'Continue enviando',
      fullDescription: 'Servidor recebeu parte inicial da requisição, cliente deve enviar o restante.',
      notes: 'Usado para verificar se servidor aceitará requisição antes de enviar corpo grande.'
    },
    '101': {
      message: 'Mudando protocolos',
      description: 'Servidor concorda em mudar protocolo conforme solicitado.',
      shortDescription: 'Troca de protocolo',
      fullDescription: 'Servidor entende requisição e notificará mudança de protocolo via cabeçalho Upgrade.',
      notes: 'Comum em estabelecimento de conexões WebSocket.'
    },
    '200': {
      message: 'OK',
      description: 'Requisição foi bem-sucedida.'
    },
    '201': {
      message: 'Criado',
      description: 'Requisição foi bem-sucedida e novo recurso foi criado.'
    },
    '204': {
      message: 'Sem conteúdo',
      description: 'Servidor processou com sucesso mas não retornará conteúdo.'
    },
    '301': {
      message: 'Movido permanentemente',
      description: 'Recurso foi movido permanentemente para novo URL.'
    },
    '302': {
      message: 'Encontrado',
      description: 'Recurso foi movido temporariamente para novo URL.'
    },
    '304': {
      message: 'Não modificado',
      description: 'Recurso não foi modificado desde última requisição.'
    },
    '400': {
      message: 'Requisição inválida',
      description: 'Servidor não entendeu a requisição devido à sintaxe inválida.'
    },
    '401': {
      message: 'Não autorizado',
      description: 'Autenticação é necessária para acessar o recurso.'
    },
    '403': {
      message: 'Proibido',
      description: 'Cliente não tem permissão para acessar este recurso.'
    },
    '404': {
      message: 'Não encontrado',
      description: 'Servidor não encontrou o recurso solicitado.'
    },
    '500': {
      message: 'Erro interno do servidor',
      description: 'Servidor encontrou situação inesperada.'
    },
    '502': {
      message: 'Bad Gateway',
      description: 'Servidor agindo como gateway/proxy recebeu resposta inválida.'
    },
    '503': {
      message: 'Serviço indisponível',
      description: 'Servidor não está pronto para processar requisição.'
    }
  },

  tools: {
    title: 'Ferramentas',
    checkUrl: 'Verificar status de URL',
    statusCodeFlow: 'Fluxograma de códigos',
    apiTest: 'Testador de API',
    debugger: 'Depurador de resposta',
    statusInspector: 'Inspetor de status'
  },

  features: {
    title: 'Funcionalidades',
    overview: 'Visão geral',
    comparison: 'Comparação',
    troubleshooting: 'Solução de problemas',
    bestPractices: 'Melhores práticas',
    codeExamples: 'Exemplos de código'
  },

  details: {
    title: 'Detalhes',
    history: 'Histórico',
    browser: 'Comportamento do navegador',
    seo: 'Impacto no SEO',
    security: 'Impacto na segurança',
    bestPractices: 'Melhores práticas',
    alternatives: 'Alternativas',
    commonErrors: 'Erros comuns'
  },

  codeExamples: {
    title: 'Exemplos de código',
    nodejs: 'Node.js',
    python: 'Python',
    php: 'PHP',
    java: 'Java',
    go: 'Go',
    copyCode: 'Copiar código',
    response: 'Exemplo de resposta',
    request: 'Exemplo de requisição'
  },

  category: {
    intro: 'Códigos de status HTTP são respostas do servidor a requisições do navegador, divididos em 5 categorias:',
    informational: '1xx (Informativo) - Requisição recebida e sendo processada',
    success: '2xx (Sucesso) - Requisição processada com sucesso',
    redirection: '3xx (Redirecionamento) - Ação adicional necessária',
    clientError: '4xx (Erro do cliente) - Servidor não pode processar requisição',
    serverError: '5xx (Erro do servidor) - Servidor falhou ao processar requisição'
  },

  codes: {
    '100': {
      shortDescription: 'Continue enviando',
      description: 'Servidor recebeu parte inicial, cliente deve enviar o restante.',
      notes: 'Usado para verificar aceitação antes de enviar corpo grande.'
    },
    '101': {
      shortDescription: 'Troca de protocolo',
      description: 'Servidor concorda em mudar protocolo conforme solicitado.',
      notes: 'Usado para WebSocket e HTTP/2.'
    },
    '200': {
      shortDescription: 'Sucesso',
      description: 'Requisição foi bem-sucedida e conteúdo foi retornado.',
      notes: 'Padrão para requisições GET bem-sucedidas.'
    },
    '201': {
      shortDescription: 'Criado',
      description: 'Requisição foi bem-sucedida e novo recurso foi criado.',
      notes: 'Comum após requisições POST.'
    },
    '204': {
      shortDescription: 'Sem conteúdo',
      description: 'Servidor processou com sucesso mas não retornará conteúdo.',
      notes: 'Usado para DELETE ou reset de formulários.'
    },
    '301': {
      shortDescription: 'Movido permanentemente',
      description: 'Recurso foi movido permanentemente para novo URL.',
      notes: 'SEO: Transfere ranking para novo URL.'
    },
    '302': {
      shortDescription: 'Encontrado',
      description: 'Recurso foi movido temporariamente para novo URL.',
      notes: 'SEO: Mantém ranking no URL original.'
    },
    '304': {
      shortDescription: 'Não modificado',
      description: 'Recurso não foi modificado desde última requisição.',
      notes: 'Melhora desempenho usando cache.'
    },
    '400': {
      shortDescription: 'Requisição inválida',
      description: 'Servidor não entendeu requisição devido à sintaxe inválida.',
      notes: 'Verifique parâmetros e formato.'
    },
    '401': {
      shortDescription: 'Não autorizado',
      description: 'Autenticação é necessária para acessar o recurso.',
      notes: 'Forneça credenciais válidas.'
    },
    '403': {
      shortDescription: 'Proibido',
      description: 'Cliente não tem permissão para acessar este recurso.',
      notes: 'Verifique permissões de acesso.'
    },
    '404': {
      shortDescription: 'Não encontrado',
      description: 'Servidor não encontrou o recurso solicitado.',
      notes: 'Verifique URL ou recurso pode ter sido removido.'
    },
    '405': {
      shortDescription: 'Método não permitido',
      description: 'Método HTTP não é suportado para este recurso.',
      notes: 'Verifique cabeçalho Allow para métodos permitidos.'
    },
    '409': {
      shortDescription: 'Conflito',
      description: 'Requisição conflita com estado atual do servidor.',
      notes: 'Comum em edições concorrentes.'
    },
    '429': {
      shortDescription: 'Muitas requisições',
      description: 'Usuário enviou muitas requisições em pouco tempo.',
      notes: 'Aguarde antes de tentar novamente.'
    },
    '500': {
      shortDescription: 'Erro interno',
      description: 'Servidor encontrou erro ao processar requisição.',
      notes: 'Verifique logs do servidor.'
    },
    '502': {
      shortDescription: 'Bad Gateway',
      description: 'Servidor proxy recebeu resposta inválida.',
      notes: 'Problema no servidor upstream.'
    },
    '503': {
      shortDescription: 'Serviço indisponível',
      description: 'Servidor não pode processar requisição no momento.',
      notes: 'Tente novamente mais tarde.'
    },
    '504': {
      shortDescription: 'Gateway Timeout',
      description: 'Servidor proxy não recebeu resposta a tempo.',
      notes: 'Timeout no servidor upstream.'
    }
  }
};