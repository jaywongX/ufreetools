export default {
  name: 'Convertidor de cURL',
  description: 'Convierte comandos cURL en fragmentos de código en varios lenguajes de programación',
  title: 'cURL a Código',
  subtitle: 'Convierte comandos cURL en códigos de múltiples lenguajes para integrar rápidamente solicitudes HTTP en sus proyectos',

  input: {
    title: 'Comando cURL',
    placeholder: 'Ingrese un comando cURL aquí',
    parse: 'Analizar cURL',
    clear: 'Limpiar',
    examples: 'Comandos de ejemplo:',
    options: 'Opciones del Analizador',
    validateCommand: 'Validar Comando',
    formatCurl: 'Formatear cURL'
  },

  options: {
    detectAuth: 'Detección automática de autenticación',
    resolveVariables: 'Resolver variables de entorno',
    processContinuations: 'Manejar continuidad de línea (\\)',
    followRedirects: 'Seguir redirecciones',
    preserveHeaders: 'Preservar todos los encabezados',
    ignoreErrors: 'Ignorar errores de análisis',
    noDuplicateHeaders: 'Sin encabezados duplicados (usar el último)'
  },

  output: {
    title: 'Salida de Código',
    language: 'Lenguaje objetivo',
    copy: 'Copiar',
    copyTooltip: 'Copiar al Portapapeles',
    download: 'Descargar',
    beautify: 'Formatear',
    codeTitle: '{language} Código',
    errorTitle: 'Error de Conversión',
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
      curl: 'cURL (Formateado)',
      json: 'JSON (Objeto de solicitud)',
      har: 'HAR (Archivo de HTTP)',
      javascript: 'JavaScript (Fetch)'
    }
  },

  request: {
    title: 'Detalles de la Solicitud',
    method: 'Método',
    url: 'URL',
    headers: 'Encabezados',
    body: 'Cuerpo',
    auth: 'Autenticación',
    options: 'Opciones',
    cookie: 'Cookies',
    queryParams: 'Parámetros de consulta',
    formData: 'Datos de formulario',
    visualize: 'Visualizar'
  },

  visualization: {
    title: 'Visualización de la Solicitud',
    request: 'Solicitud',
    response: 'Respuesta',
    headers: 'Encabezados',
    body: 'Cuerpo',
    timing: 'Tiempo',
    raw: 'Bruto'
  },

  analysis: {
    title: 'Análisis del Comando',
    insecureWarning: 'Advertencia: Este comando utiliza --insecure/-k (se desactiva la verificación SSL)',
    verboseIgnored: 'Nota: El modo detallado (-v) fue ignorado durante la conversión',
    unsupportedOptions: 'Opciones no compatibles',
    warnings: 'Advertencias',
    info: 'Información'
  },

  messages: {
    parsing: 'Analizando el comando cURL...',
    parseFailed: 'Fallo al analizar el comando cURL: {error}',
    parseSuccess: 'Comando cURL analizado correctamente',
    copied: 'Código copiado al portapapeles',
    downloaded: 'Código descargado',
    invalidCurl: 'Comando cURL inválido',
    emptyCurl: 'Por favor ingrese un comando cURL',
    validCurl: 'Comando cURL válido',
    unknownOption: 'Opción desconocida: {option}',
    unsupportedMethod: 'Advertencia: No todos los lenguajes admiten el método HTTP {method}',
    curlRequired: 'El comando debe comenzar con "curl "',
    copyFailed: 'Fallo al copiar, por favor cópielo manualmente'
  },

  examples: {
    title: 'Comandos cURL de Ejemplo',
    basic: 'Solicitud GET Básica',
    headers: 'Encabezados personalizados',
    post: 'POST con JSON',
    formData: 'Envío de datos de formulario',
    auth: 'Autenticación Básica',
    complex: 'Ejemplo Complejo',
    exampleCommands: {
      getRequest: 'Solicitud GET',
      postJson: 'POST JSON',
      postForm: 'POST Formulario',
      withAuth: 'Con Autenticación',
      uploadFile: 'Subida de Archivo'
    }
  },

  actions: {
    convert: 'Convertir',
    converting: 'Convirtiendo...'
  }
};