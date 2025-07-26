export default {
  name: 'Editor de Encabezados de Solicitud',
  description: 'Cree, edite y pruebe encabezados de solicitud HTTP',

  editor: {
    title: 'Editor de Encabezados',
    headers: 'Encabezados de Solicitud',
    add: 'Añadir Encabezado',
    bulk: 'Edición Masiva',
    import: 'Importar Encabezados',
    export: 'Exportar Encabezados',
    clear: 'Limpiar Todo',
    importError: 'Error de Importación'
  },

  header: {
    name: 'Nombre del Encabezado',
    value: 'Valor',
    description: 'Descripción',
    namePlaceholder: 'Ingrese el nombre del encabezado',
    valuePlaceholder: 'Ingrese el valor del encabezado',
    actions: 'Acciones',
    enabled: 'Habilitado',
    duplicate: 'Duplicar',
    delete: 'Eliminar',
    noHeaders: 'No hay encabezados, haga clic en "Añadir" o cargue una plantilla para comenzar',
    bulkPlaceholder: 'Pegue encabezados, formato: \'nombre: valor\', uno por línea, o pegue texto de encabezados sin formato'
  },

  presets: {
    title: 'Plantillas',
    save: 'Guardar Actual',
    load: 'Cargar Plantilla',
    delete: 'Eliminar Plantilla',
    presetName: 'Nombre de la Plantilla',
    namePlaceholder: 'Ingrese el nombre de la plantilla',
    confirmDelete: '¿Está seguro que desea eliminar esta plantilla?',
    common: 'Encabezados Comunes',
    custom: 'Plantillas Personalizadas'
  },

  common: {
    userAgent: 'User-Agent',
    contentType: 'Content-Type',
    authorization: 'Authorization',
    acceptLanguage: 'Accept-Language',
    acceptEncoding: 'Accept-Encoding',
    cacheControl: 'Cache-Control',
    cookie: 'Cookie',
    referer: 'Referer',
    origin: 'Origin'
  },

  test: {
    title: 'Probar Encabezados',
    url: 'URL',
    urlPlaceholder: 'Ingrese la URL para probar los encabezados',
    method: 'Método',
    send: 'Enviar Solicitud',
    response: 'Respuesta'
  },

  response: {
    title: 'Respuesta',
    status: 'Estado',
    headers: 'Encabezados de Respuesta',
    body: 'Cuerpo',
    time: 'Tiempo',
    size: 'Tamaño',
    loading: 'Cargando...',
    noResponse: 'Añada encabezados para ver la vista previa',
    headerCount: 'encabezados'
  },

  options: {
    title: 'Opciones',
    followRedirects: 'Seguir Redirecciones',
    timeout: 'Tiempo de Espera (segundos)',
    validateSSL: 'Validar Certificado SSL',
    sendCredentials: 'Enviar Credenciales'
  },

  formats: {
    title: 'Formato de Exportación',
    raw: 'Texto Sin Formato',
    json: 'JSON',
    curl: 'Comando cURL',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },

  guides: {
    title: 'Guías de Encabezados',
    description: 'Aprenda sobre encabezados HTTP comunes y su uso',
    securityHeaders: 'Encabezados de Seguridad',
    cachingHeaders: 'Encabezados de Almacenamiento en Caché',
    corsHeaders: 'Encabezados CORS',
    authenticationHeaders: 'Encabezados de Autenticación',
    commonValues: 'Valores Comunes'
  },

  actions: {
    copy: 'Copiar',
    format: 'Formatear',
    validate: 'Validar',
    clear: 'Limpiar'
  },

  messages: {
    headerAdded: 'Encabezado añadido',
    headerDeleted: 'Encabezado eliminado',
    headersCleared: 'Todos los encabezados limpiados',
    presetSaved: 'Plantilla guardada',
    presetLoaded: 'Plantilla cargada',
    presetDeleted: 'Plantilla eliminada',
    requestSent: 'Solicitud enviada',
    requestFailed: 'Fallo en la solicitud: {error}',
    copied: '¡Copiado al portapapeles!',
    importSuccess: 'Encabezados importados exitosamente',
    exportSuccess: 'Encabezados exportados exitosamente',
    invalidUrl: 'URL inválida',
    pleaseEnterHeader: 'Por favor ingrese el texto del encabezado',
    invalidHeader: 'No se pudieron analizar encabezados válidos, use el formato "nombre: valor"',
    invalidHeaderName: 'Nombre de encabezado inválido: {error}',
    copyFailed: 'Fallo al copiar, por favor copie manualmente'
  }
};