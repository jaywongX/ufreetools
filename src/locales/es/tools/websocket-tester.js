export default {
  name: 'Probador de WebSocket',
  description: 'Conectarse a servidores WebSocket, enviar mensajes y ver respuestas',

  connection: {
    url: 'URL del WebSocket',
    urlPlaceholder: 'Ej. ws://echo.websocket.org',
    protocol: 'Subprotocolo (opcional)',
    protocolPlaceholder: 'Separados por comas',
    connect: 'Conectar',
    disconnect: 'Desconectar',
    status: 'Estado de la Conexión',
    connected: 'Conectado',
    disconnected: 'Desconectado',
    waiting: 'Esperando Conexión',
    autoReconnect: 'Volver a Conectar Automáticamente',
    reconnectMessage: 'Intentará reconectar en {0} segundos...'
  },

  options: {
    title: 'Opciones',
    autoScroll: 'Auto desplazar Registros'
  },

  messages: {
    send: 'Enviar Mensajes',
    logs: 'Registro de Mensajes',
    emptyLogs: 'Los mensajes aparecerán aquí una vez conectado',
    placeholder: 'Ingrese el mensaje a enviar...',
    sendButton: 'Enviar',
    clearButton: 'Limpiar',
    copyButton: 'Copiar',
    clearLogs: 'Limpiar Registros',
    copyLogs: 'Copiar Registros',
    format: {
      title: 'Formato',
      text: 'Texto Plano',
      json: 'JSON',
      binary: 'Binario'
    },
    templates: {
      json: 'JSON',
      text: 'Texto'
    },
    types: {
      sent: 'Enviado →',
      received: 'Recibido ←',
      error: 'Error !',
      info: 'Información'
    }
  },

  savedConnections: {
    title: 'Conexiones Guardadas',
    empty: 'Sin conexiones guardadas',
    save: 'Guardar Conexión Actual',
    saveConnection: 'Guardar Conexión',
    connectionName: 'Nombre de la Conexión',
    load: 'Cargar',
    delete: 'Eliminar',
    cancel: 'Cancelar'
  },

  testServers: {
    title: 'Servidores de Prueba',
    description: 'Aquí hay algunos servidores WebSocket públicos disponibles para pruebas:',
    useServer: 'Usar Este Servidor',
    servers: {
      echo: {
        name: 'Prueba de Eco',
        description: 'Servidor de prueba seguro de eco, soporta conexiones WSS'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Servicio de eco proporcionado por Postman, soporta WSS'
      }
    }
  },

  logs: {
    connectingTo: 'Conectando a {0}...',
    connectionSuccess: 'Conexión exitosa',
    connectionError: 'Error en WebSocket',
    connectionClosed: 'Conexión cerrada (Código: {0}{1})',
    invalidJson: 'Formato JSON inválido: {0}',
    sendFailed: 'Fallo al enviar: {0}',
    emptyMessage: 'El mensaje no puede estar vacío',
    notConnected: 'WebSocket no conectado',
    copied: 'Registros copiados al portapapeles',
    copyFailed: 'Fallo al copiar: {0}',
    serverSelected: 'Servidor seleccionado: {0}',
    binaryData: '[Datos binarios]'
  }
};