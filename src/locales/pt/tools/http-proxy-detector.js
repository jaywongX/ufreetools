export default {
  name: 'Detector de Proxy HTTP',
  description: 'Detecta e analisa proxies HTTP e dispositivos intermediários em conexões',
  title: 'Detector de Proxy no Frontend',
  intro: 'Verifica se sua conexão de rede utiliza proxy, analisando cabeçalhos HTTP como X-Forwarded-For e outros relacionados a proxies',

  detection: {
    title: 'Detecção de Proxy',
    start: 'Iniciar Detecção',
    detecting: 'Detectando...',
    stop: 'Parar Detecção',
    completed: 'Detecção Concluída',
    noProxies: 'Nenhum proxy detectado',
    proxiesFound: 'Proxies detectados: {count}'
  },

  options: {
    title: 'Opções de Detecção',
    testUrl: 'URL de Teste',
    urlPlaceholder: 'Digite a URL para teste (padrão: automático)',
    testMethod: 'Método HTTP',
    get: 'GET',
    head: 'HEAD',
    options: 'OPTIONS',
    timeout: 'Tempo Limite (segundos)',
    parallel: 'Testes Paralelos',
    techniques: 'Técnicas de Detecção',
    headerAnalysis: 'Análise de Cabeçalhos',
    traceMethod: 'Método TRACE',
    viaHeader: 'Verificação Via Header',
    maxForwards: 'Teste Max-Forwards',
    fingerprinting: 'Identificação de Proxy',
    timing: 'Análise Temporal',
    advanced: 'Opções Avançadas',
    apiSelection: 'Selecionar API'
  },

  apis: {
    ipify: 'API ipify',
    ipapi: 'IP-API',
    httpbin: 'httpbin'
  },

  results: {
    title: 'Resultados da Detecção',
    summary: 'Resumo de Proxy',
    headers: 'Cabeçalhos Completos',
    info: 'Explicação das Informações de Proxy',
    detected: 'Proxy Detectado',
    notDetected: 'Nenhum Proxy Detectado',
    detectedDescription: 'Sua requisição pode ter passado por um ou mais servidores proxy',
    notDetectedDescription: 'Sua requisição parece ter alcançado o servidor destino diretamente, sem proxies intermediários',
    clientInfo: 'Informações de IP do Cliente',
    remoteIp: 'Endereço IP Remoto',
    location: 'Localização Geográfica',
    isp: 'Provedor de Internet',
    proxyHeaders: 'Cabeçalhos Relacionados a Proxy',
    details: 'Resultados Detalhados',
    proxy: 'Proxy',
    type: 'Tipo',
    ip: 'Endereço IP',
    software: 'Software',
    confidence: 'Confiança',
    latency: 'Latência',
    headers: 'Cabeçalhos Modificados',
    fingerprint: 'Identificação',
    export: 'Exportar Resultados',
    clear: 'Limpar Resultados',
    noData: 'Nenhum dado disponível',
    originalRequest: 'Requisição Original',
    modifiedRequest: 'Requisição Modificada',
    proxyChain: 'Cadeia de Proxy',
    server: 'Servidor',
    notSet: 'Não configurado'
  },

  types: {
    forward: 'Proxy Direto',
    reverse: 'Proxy Reverso',
    transparent: 'Proxy Transparente',
    anonymous: 'Proxy Anônimo',
    elite: 'Proxy Elite',
    caching: 'Proxy de Cache',
    gateway: 'Gateway',
    loadBalancer: 'Balanceador de Carga',
    cdn: 'CDN',
    corporate: 'Proxy Corporativo',
    unknown: 'Tipo Desconhecido'
  },

  headers: {
    title: 'Análise de Cabeçalhos',
    original: 'Cabeçalhos Originais',
    modified: 'Cabeçalhos Modificados',
    added: 'Cabeçalhos Adicionados',
    removed: 'Cabeçalhos Removidos',
    changed: 'Cabeçalhos Alterados',
    suspicious: 'Cabeçalhos Suspeitos',
    select: 'Selecione Cabeçalhos para Análise',
    name: 'Nome do Cabeçalho',
    value: 'Valor',
    all: 'Todos os Cabeçalhos HTTP',
    notFound: 'Cabeçalho não encontrado'
  },

  details: {
    title: 'Detalhes do Proxy',
    software: 'Software',
    version: 'Versão',
    features: 'Funcionalidades',
    modifications: 'Modificações',
    behavior: 'Comportamento',
    security: 'Impacto na Segurança',
    recommendations: 'Recomendações'
  },

  map: {
    title: 'Mapa de Conexão',
    client: 'Seu Cliente',
    target: 'Servidor Destino',
    hop: 'Ponto {n}',
    direct: 'Conexão Direta',
    proxied: 'Conexão por Proxy',
    unknown: 'Caminho Desconhecido'
  },

  actions: {
    copyHeaders: 'Copiar Cabeçalhos',
    copyToClipboard: 'Copiar para Área de Transferência'
  },

  messages: {
    startDetection: 'Iniciando detecção de proxy...',
    detectionComplete: 'Detecção de proxy concluída',
    error: 'Falha na detecção: {message}',
    timeout: 'Tempo limite excedido',
    exportComplete: 'Resultados exportados com sucesso',
    noConnection: 'Não foi possível estabelecer conexão',
    limitedResults: 'Resultados limitados devido a restrições',
    privateNetwork: 'Rede privada detectada',
    publicNetwork: 'Rede pública detectada',
    warning: 'Aviso: {message}',
    proxyRemoved: 'Possível remoção de cabeçalhos de detecção por proxy',
    copied: 'Cabeçalhos copiados para área de transferência',
    copyFailed: 'Falha ao copiar, copie manualmente',
    unknown: 'Erro desconhecido'
  },

  info: {
    description: 'Um proxy HTTP é um servidor intermediário entre clientes e servidores que pode processar requisições HTTP para diversos propósitos. Proxies podem ser configurados por provedores de internet, organizações, empresas ou indivíduos.'
  },

  xff: {
    title: 'O que é X-Forwarded-For?',
    description: 'X-Forwarded-For (XFF) é um campo de cabeçalho HTTP que identifica o endereço IP original de um cliente conectado a um servidor web através de um proxy HTTP ou balanceador de carga. Quando uma requisição passa por um proxy, o servidor normalmente só vê o endereço IP do proxy, enquanto o cabeçalho XFF fornece um método para rastrear o IP original do cliente.',
    notFound: 'Cabeçalho X-Forwarded-For não encontrado, indicando que a requisição pode não ter passado por proxy ou o proxy não adicionou este cabeçalho.',
    format: {
      title: 'Formato do Cabeçalho XFF',
      description: 'O formato padrão do cabeçalho XFF é uma lista de endereços IP separados por vírgula, onde o IP mais à esquerda é o cliente original e os IPs subsequentes são os proxies intermediários:'
    },
    related: {
      title: 'Outros Cabeçalhos Relacionados a Proxy',
      forwardedProto: 'Identifica o protocolo usado pelo cliente para conectar ao proxy (HTTP ou HTTPS)',
      forwardedHost: 'Identifica o nome do host original requisitado pelo cliente',
      via: 'Indica servidores proxy pelos quais a requisição e resposta passaram',
      forwarded: 'Cabeçalho mais novo que contém informações sobre cliente e todos os proxies'
    },
    importance: {
      title: 'Por que informações de proxy são importantes',
      security: 'Segurança e controle de acesso - Identificar corretamente o IP do cliente é crucial para prevenir abuso e implementar controles baseados em IP',
      logging: 'Registros - Para auditoria e diagnóstico de problemas, registrar o IP real do cliente é mais útil que o IP do proxy',
      geolocation: 'Serviços de geolocalização - Serviços baseados em localização precisam do IP real do cliente para resultados precisos',
      content: 'Personalização de conteúdo - Alguns serviços fornecem conteúdo localizado baseado na localização do usuário'
    },
    security: {
      title: 'Considerações de Segurança',
      description: 'É importante notar que o cabeçalho X-Forwarded-For pode ser falsificado pelo cliente. Em ambientes com altos requisitos de segurança, só devem ser confiáveis informações XFF adicionadas por proxies conhecidos, ou outros métodos devem ser usados para validar o IP do cliente.'
    }
  },

  privacy: {
    title: 'Aviso de Privacidade',
    description: 'Durante a detecção, seu endereço IP e cabeçalhos HTTP serão enviados para serviços de API terceiros para análise. Esses serviços podem coletar e armazenar essas informações para fornecer seus serviços.',
    suggestion: 'Se houver preocupações com privacidade, considere selecionar um provedor de API diferente ou usar um serviço VPN.'
  }
};