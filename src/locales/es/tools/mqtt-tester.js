export default {
  name: 'MQTT Tester',
  description: 'Pruebe y depure conexiones MQTT, publique mensajes y suscríbase a temas',

  connection: {
    title: 'Conexión',
    broker: 'Puerto',
    url: 'URL del Broker',
    urlPlaceholder: 'Ejemplo: mqtt://broker.example.com:1883',
    clientId: 'ID del Cliente',
    clientIdPlaceholder: 'Ingrese el ID o déjelo vacío para uno aleatorio',
    username: 'Nombre de Usuario',
    password: 'Contraseña',
    keepAlive: 'Keep Alive',
    cleanSession: 'Sesión Limpia',
    autoReconnect: 'Reconexión Automática',
    ssl: 'Usar SSL/TLS',
    sslOptions: 'Opciones SSL/TLS',
    protocol: 'Versión del Protocolo',
    portInfo: 'Puertos predeterminados: MQTT(1883), WebSocket(8083)',
    connect: 'Conectar',
    disconnect: 'Desconectar',
    status: 'Estado',
    connected: 'Conectado',
    disconnected: 'Desconectado',
    connecting: 'Conectando...'
  },

  publish: {
    title: 'Publicar',
    topic: 'Tema',
    topicPlaceholder: 'Ingrese el tema al que desea publicar',
    message: 'Mensaje',
    messagePlaceholder: 'Ingrese el contenido del mensaje',
    qos: 'QoS',
    retain: 'Retener',
    format: 'Formato del Payload',
    text: 'Texto',
    json: 'JSON',
    hex: 'Hexadecimal',
    binary: 'Binario',
    send: 'Publicar',
    clear: 'Limpiar',
    history: 'Historial',
    addToFavorites: 'Agregar a Favoritos',
    validateJson: 'Validar JSON'
  },

  subscribe: {
    title: 'Suscribirse',
    topic: 'Tema',
    topicPlaceholder: 'Ingrese el tema al que desea suscribirse (admite comodines # y +)',
    qos: 'QoS',
    subscribe: 'Suscribirse',
    unsubscribe: 'Darse de Baja',
    unsubscribeAll: 'Cancelar Todas las Suscripciones',
    subscriptions: 'Suscripciones Activas',
    noSubscriptions: 'No hay suscripciones activas',
    addSubscription: 'Agregar Suscripción',
    topicPatterns: 'Patrones de Tema',
    systemTopics: 'Temas del Sistema'
  },

  messages: {
    title: 'Mensajes',
    received: 'Mensajes Recibidos',
    sent: 'Mensajes Enviados',
    topic: 'Tema',
    payload: 'Payload',
    qos: 'QoS',
    retained: 'Retenido',
    time: 'Hora',
    clear: 'Limpiar Mensajes',
    export: 'Exportar Mensajes',
    filter: 'Filtrar',
    noMessages: 'No hay mensajes',
    view: 'Ver Detalles',
    copy: 'Copiar Payload',
    duplicate: 'Duplicar como Publicación'
  },

  tools: {
    title: 'Herramientas',
    topicGenerator: 'Generador de Temas',
    payloadFormatter: 'Formateador de Payload',
    qosExplainer: 'Explicador de QoS',
    wildcardTester: 'Probador de Comodines',
    packetInspector: 'Inspector de Paquetes',
    loadTest: 'Prueba de Carga'
  },

  settings: {
    title: 'Ajustes',
    maxMessages: 'Número Máximo de Mensajes',
    timeFormat: 'Formato de Hora',
    theme: 'Tema',
    autoExpand: 'Expandir Automáticamente los Mensajes',
    saveHistory: 'Guardar Historial',
    clearOnDisconnect: 'Limpiar Mensajes al Desconectarse',
    advanced: 'Ajustes Avanzados',
    lastWill: 'Última Voluntad'
  },

  lastWill: {
    title: 'Última Voluntad',
    enable: 'Activar Última Voluntad',
    topic: 'Tema de la Última Voluntad',
    message: 'Mensaje de la Última Voluntad',
    qos: 'QoS de la Última Voluntad',
    retain: 'Retener Mensaje de la Última Voluntad'
  },

  notifications: {
    connectSuccess: '¡Conectado a {broker}!',
    connectError: 'Error de conexión: {error}',
    disconnected: 'Desconectado del broker',
    subscribeSuccess: 'Suscrito a {topic}',
    subscribeError: 'Fallo al suscribirse: {error}',
    unsubscribeSuccess: 'Cancelada la suscripción a {topic}',
    publishSuccess: 'Mensaje publicado en {topic}',
    publishError: 'Fallo al publicar: {error}',
    invalidJson: 'Payload JSON inválido',
    packetReceived: '{packets} paquete(s) recibido(s)'
  }
};