export default {
  name: 'Ferramenta de Teste MQTT',
  description: 'Teste e depure conexões MQTT, publique mensagens e assine tópicos',

  connection: {
    title: 'Conexão',
    broker: 'Porta',
    url: 'URL do Broker',
    urlPlaceholder: 'Exemplo: mqtt://broker.exemplo.com:1883',
    clientId: 'ID do Cliente',
    clientIdPlaceholder: 'Insira o ID do cliente ou deixe em branco para gerar aleatório',
    username: 'Usuário',
    password: 'Senha',
    keepAlive: 'Manter Conexão',
    cleanSession: 'Limpar Sessão',
    autoReconnect: 'Reconexão Automática',
    ssl: 'Usar SSL/TLS',
    sslOptions: 'Opções SSL/TLS',
    protocol: 'Versão do Protocolo',
    portInfo: 'Portas padrão: MQTT(1883), WebSocket(8083)',
    connect: 'Conectar',
    disconnect: 'Desconectar',
    status: 'Status',
    connected: 'Conectado',
    disconnected: 'Desconectado',
    connecting: 'Conectando...'
  },

  publish: {
    title: 'Publicar',
    topic: 'Tópico',
    topicPlaceholder: 'Insira o tópico para publicação',
    message: 'Mensagem',
    messagePlaceholder: 'Insira o conteúdo da mensagem',
    qos: 'Qualidade de Serviço (QoS)',
    retain: 'Reter',
    format: 'Formato do Conteúdo',
    text: 'Texto',
    json: 'JSON',
    hex: 'Hexadecimal',
    binary: 'Binário',
    send: 'Publicar',
    clear: 'Limpar',
    history: 'Histórico',
    addToFavorites: 'Adicionar aos Favoritos',
    validateJson: 'Validar JSON'
  },

  subscribe: {
    title: 'Assinar',
    topic: 'Tópico',
    topicPlaceholder: 'Insira o tópico para assinar (suporta curingas # e +)',
    qos: 'Qualidade de Serviço (QoS)',
    subscribe: 'Assinar',
    unsubscribe: 'Cancelar Assinatura',
    unsubscribeAll: 'Cancelar Todas',
    subscriptions: 'Assinaturas Ativas',
    noSubscriptions: 'Nenhuma assinatura ativa',
    addSubscription: 'Adicionar Assinatura',
    topicPatterns: 'Padrões de Tópico',
    systemTopics: 'Tópicos do Sistema'
  },

  messages: {
    title: 'Mensagens',
    received: 'Mensagens Recebidas',
    sent: 'Mensagens Enviadas',
    topic: 'Tópico',
    payload: 'Conteúdo',
    qos: 'QoS',
    retained: 'Retido',
    time: 'Hora',
    clear: 'Limpar Mensagens',
    export: 'Exportar Mensagens',
    filter: 'Filtrar',
    noMessages: 'Nenhuma mensagem',
    view: 'Ver Detalhes',
    copy: 'Copiar Conteúdo',
    duplicate: 'Duplicar para Publicação'
  },

  tools: {
    title: 'Ferramentas',
    topicGenerator: 'Gerador de Tópicos',
    payloadFormatter: 'Formatador de Conteúdo',
    qosExplainer: 'Explicador QoS',
    wildcardTester: 'Testador de Curingas',
    packetInspector: 'Inspetor de Pacotes',
    loadTest: 'Teste de Carga'
  },

  settings: {
    title: 'Configurações',
    maxMessages: 'Máximo de Mensagens',
    timeFormat: 'Formato de Hora',
    theme: 'Tema',
    autoExpand: 'Expandir Mensagens Automaticamente',
    saveHistory: 'Salvar Histórico',
    clearOnDisconnect: 'Limpar ao Desconectar',
    advanced: 'Configurações Avançadas',
    lastWill: 'Mensagem de Testamento'
  },

  lastWill: {
    title: 'Testamento',
    enable: 'Habilitar Testamento',
    topic: 'Tópico do Testamento',
    message: 'Mensagem do Testamento',
    qos: 'QoS do Testamento',
    retain: 'Reter Testamento'
  },

  notifications: {
    connectSuccess: 'Conectado a {broker}',
    connectError: 'Erro de conexão: {error}',
    disconnected: 'Desconectado do broker',
    subscribeSuccess: 'Assinado em {topic}',
    subscribeError: 'Falha na assinatura: {error}',
    unsubscribeSuccess: 'Assinatura cancelada em {topic}',
    publishSuccess: 'Mensagem publicada em {topic}',
    publishError: 'Falha na publicação: {error}',
    invalidJson: 'Conteúdo JSON inválido',
    packetReceived: '{packets} pacotes recebidos'
  }
};