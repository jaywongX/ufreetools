export default {
  name: 'Gerador de Configuração CORS',
  description: 'Crie rapidamente configurações de Compartilhamento de Recursos entre Origens (CORS) com suporte para diversos ambientes de servidor',

  options: {
    title: 'Opções CORS',
    allowedOrigins: {
      title: 'Origens permitidas (Access-Control-Allow-Origin)',
      allowAll: 'Permitir todas as origens (*) <span class="text-yellow-500 text-xs ml-1">(inseguro, não suporta credenciais)</span>',
      specific: 'Especificar domínios permitidos (recomendado)',
      addOrigin: 'Adicionar origem',
      placeholder: 'Digite a origem (ex: https://exemplo.com)',
      wildcard: 'Permitir subdomínios (curinga)',
      null: 'Permitir origem nula',
      remove: 'Remover domínio'
    },
    allowedMethods: {
      title: 'Métodos HTTP permitidos (Access-Control-Allow-Methods)',
      selectMethods: 'Selecione os métodos HTTP',
      get: 'GET',
      post: 'POST',
      put: 'PUT',
      delete: 'DELETE',
      patch: 'PATCH',
      head: 'HEAD',
      options: 'OPTIONS'
    },
    allowedHeaders: {
      title: 'Cabeçalhos permitidos (Access-Control-Allow-Headers)',
      all: 'Permitir todos os cabeçalhos (*)',
      specific: 'Apenas cabeçalhos específicos',
      addHeader: 'Adicionar cabeçalho',
      headerPlaceholder: 'Digite o nome do cabeçalho',
      common: 'Cabeçalhos comuns',
      custom: 'Cabeçalhos personalizados',
      contentType: 'Content-Type',
      accept: 'Accept',
      authorization: 'Authorization',
      origin: 'Origin',
      xRequestedWith: 'X-Requested-With',
      contentDisposition: 'Content-Disposition',
      remove: 'Remover cabeçalho'
    },
    exposedHeaders: {
      title: 'Cabeçalhos expostos (Access-Control-Expose-Headers)',
      description: 'Cabeçalhos de resposta acessíveis pelo navegador',
      addHeader: 'Adicionar cabeçalho exposto',
      headerPlaceholder: 'Digite o nome do cabeçalho'
    },
    credentials: {
      title: 'Credenciais permitidas (Access-Control-Allow-Credentials)',
      description: 'Permitir uso de cookies e cabeçalhos de autenticação',
      allow: 'Permitir credenciais',
      warning: 'Deve ser usado apenas com origens específicas, não pode ser usado com curinga (*)'
    },
    maxAge: {
      title: 'Tempo de cache para requisições pré-voo (Access-Control-Max-Age)',
      description: 'Tempo de cache para resultados de requisições pré-voo (segundos)',
      seconds: 'segundos',
      default: 'Padrão: ',
      recommended: 'Recomendado: 3600 (1 hora)'
    },
    serverType: {
      title: 'Tipo de servidor',
      apache: 'Apache (.htaccess)',
      nginx: 'Nginx',
      express: 'Express.js',
      springBoot: 'Spring Boot',
      php: 'PHP',
      flask: 'Flask (Python)',
      django: 'Django',
      rails: 'Ruby on Rails',
      aws: 'AWS S3/CloudFront',
      azure: 'Azure',
      iis: 'IIS (web.config)',
      jetty: 'Jetty',
      headers: 'Cabeçalhos HTTP'
    }
  },

  output: {
    title: 'Cabeçalhos gerados',
    instructions: 'Adicione estes cabeçalhos às respostas do seu servidor:',
    copy: 'Copiar cabeçalhos',
    test: 'Testar cabeçalhos',
    downloadConfig: 'Baixar configuração'
  },

  configs: {
    title: 'Exemplos de configuração',
    nginx: 'Nginx',
    apache: 'Apache (.htaccess)',
    express: 'Express.js',
    springBoot: 'Spring Boot',
    php: 'PHP',
    flask: 'Flask (Python)',
    django: 'Django',
    rails: 'Ruby on Rails',
    aws: 'AWS S3/CloudFront',
    azure: 'Azure',
    iis: 'IIS Web.config'
  },

  testing: {
    title: 'Teste CORS',
    description: 'Teste se sua configuração CORS está funcionando corretamente',
    originUrl: 'URL de origem',
    targetUrl: 'URL de destino',
    method: 'Método de requisição',
    credentials: 'Incluir credenciais',
    headers: 'Cabeçalhos personalizados',
    addHeader: 'Adicionar cabeçalho',
    testButton: 'Testar CORS',
    results: 'Resultados do teste',
    success: 'Teste CORS bem-sucedido ✓',
    failure: 'Teste CORS falhou ✗✗',
    details: 'Detalhes da resposta',
    response: 'Resposta',
    logs: 'Logs CORS',
    errorDetails: 'Detalhes do erro'
  },

  presets: {
    title: 'Predefinições',
    api: 'Servidor API',
    assets: 'Recursos estáticos (CDN)',
    auth: 'Serviço de autenticação',
    publicAccess: 'Acesso público',
    restrictive: 'Restritivo',
    load: 'Carregar predefinição',
    save: 'Salvar atual como predefinição'
  },

  tips: {
    title: 'Dicas CORS',
    tip1: 'O Compartilhamento de Recursos entre Origens (CORS) é um mecanismo baseado em cabeçalhos HTTP que permite que servidores indiquem quais outras origens (domínios, protocolos ou portas) podem carregar recursos além de si mesmas.',
    tip2: 'A proteção CORS é um recurso de segurança dos navegadores modernos que impede que páginas web façam requisições para servidores de origens diferentes, protegendo os usuários contra ataques de falsificação de requisição entre sites.',
    usage: {
      title: 'Cenários de uso do CORS:',
      tip1: 'Permitir que JavaScript front-end acesse APIs em domínios diferentes',
      tip2: 'Suportar requisições Ajax ou Fetch entre origens',
      tip3: 'Permitir acesso entre origens a fontes, CSS ou outros recursos',
      tip4: 'Configurar comunicação entre serviços em arquitetura de microsserviços',
    },
    safe: 'Dica de segurança: Geralmente deve-se evitar usar o curinga "*" para origens permitidas, especificando explicitamente os domínios confiáveis para reduzir riscos de segurança.'
  },

  messages: {
    copied: 'Cabeçalhos copiados para a área de transferência',
    configDownloaded: 'Configuração baixada',
    testStarted: 'Teste CORS iniciado',
    testSucceeded: 'Requisição CORS bem-sucedida',
    testFailed: 'Requisição CORS falhou: {error}',
    presetSaved: 'Predefinição salva',
    presetLoaded: 'Predefinição carregada'
  },

  config: {
    title: 'Configuração',
    empty: 'Configure as opções para gerar as definições CORS',
    copied: 'Configuração copiada para a área de transferência!',
    copy: 'Copiar'
  },

  comments: {
    expressMiddleware: "// Usar middleware Express",
    applyGlobalCors: "// Aplicar middleware CORS",
    applySpecificRoute: "// Ou aplicar apenas para rotas específicas",
    applyRequest: "// Processar requisição",
    apacheAllowedOrigins: "# Domínios permitidos",
    apacheAllowedMethods: "# Métodos HTTP permitidos",
    apacheAllowedHeaders: "# Cabeçalhos HTTP permitidos",
    apacheAllowedCredentials: "# Credenciais permitidas",
    preflightCacheDuration: "# Tempo de cache para pré-voo",
    apacheExposeHeaders: '# Cabeçalhos de resposta expostos',
    handlePreflightRequest: "# Processar requisição de pré-voo",
    nginxConfiguration: "# Configuração CORS\n# Adicione esta configuração ao seu bloco server ou location",
    nginxAllowedOrigins: "# Domínios permitidos",
    nginxAllowedMethods: "# Métodos HTTP permitidos",
    nginxAllowedHeaders: "# Cabeçalhos HTTP permitidos",
    nginxAllowedCredentials: "# Credenciais permitidas",
    nginxPreflightCacheDuration: "# Tempo de cache para pré-voo",
    nginxExposeHeaders: '# Cabeçalhos de resposta expostos',
    nginxHandlePreflight: "# Processar requisição de pré-voo",
    httpHeadersConfiguration: "# Configuração de cabeçalhos HTTP CORS",
    httpAllowedOrigins: "# Domínios permitidos",
    httpAllowedMethods: "# Métodos HTTP permitidos",
    httpAllowedHeaders: "# Cabeçalhos HTTP permitidos",
    httpAllowedCredentials: "# Credenciais permitidas",
    httpPreflightCacheDuration: "# Tempo de cache para pré-voo",
    httpExposeHeaders: '# Cabeçalhos de resposta expostos',
  }
};