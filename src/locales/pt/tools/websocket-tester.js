export default {
  name: 'Testador WebSocket',
  description: 'Conecte-se a servidores WebSocket, envie mensagens e visualize respostas',

  connection: {
    url: 'URL WebSocket',
    urlPlaceholder: 'Exemplo: wss://echo.websocket.org',
    protocol: 'Subprotocolo (opcional)',
    protocolPlaceholder: 'Separados por vírgula',
    connect: 'Conectar',
    disconnect: 'Desconectar',
    status: 'Status da conexão',
    connected: 'Conectado',
    disconnected: 'Desconectado',
    waiting: 'Aguardando conexão',
    autoReconnect: 'Reconexão automática',
    reconnectMessage: 'Tentando reconectar em {0} segundos...'
  },

  options: {
    title: 'Opções',
    autoScroll: 'Rolagem automática'
  },

  messages: {
    send: 'Enviar mensagem',
    logs: 'Registro de mensagens',
    emptyLogs: 'Mensagens aparecerão aqui após conexão',
    placeholder: 'Digite a mensagem...',
    sendButton: 'Enviar',
    clearButton: 'Limpar',
    copyButton: 'Copiar',
    clearLogs: 'Limpar registros',
    copyLogs: 'Copiar registros',
    format: {
      title: 'Formato',
      text: 'Texto simples',
      json: 'JSON',
      binary: 'Binário'
    },
    templates: {
      json: 'JSON',
      text: 'Texto'
    },
    types: {
      sent: 'Enviado →',
      received: 'Recebido ←',
      error: 'Erro !',
      info: 'Informação'
    }
  },

  savedConnections: {
    title: 'Conexões salvas',
    empty: 'Nenhuma conexão salva',
    save: 'Salvar conexão',
    saveConnection: 'Salvar conexão',
    connectionName: 'Nome da conexão',
    load: 'Carregar',
    delete: 'Excluir',
    cancel: 'Cancelar'
  },

  testServers: {
    title: 'Servidores de teste',
    description: 'Servidores WebSocket públicos para testes:',
    useServer: 'Usar este servidor',
    servers: {
      echo: {
        name: 'Servidor Echo',
        description: 'Servidor de eco seguro com suporte WSS'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Serviço Echo do Postman com WSS'
      }
    }
  },

  logs: {
    connectingTo: 'Conectando a {0}...',
    connectionSuccess: 'Conexão estabelecida',
    connectionError: 'Erro WebSocket',
    connectionClosed: 'Conexão fechada (código: {0}{1})',
    invalidJson: 'JSON inválido: {0}',
    sendFailed: 'Falha ao enviar: {0}',
    emptyMessage: 'Mensagem não pode estar vazia',
    notConnected: 'Não conectado',
    copied: 'Registros copiados',
    copyFailed: 'Falha ao copiar: {0}',
    serverSelected: 'Servidor selecionado: {0}',
    binaryData: '[Dados binários]'
  }
};