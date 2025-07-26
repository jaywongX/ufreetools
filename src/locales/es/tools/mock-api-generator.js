export default {
  name: 'Mock API Generator',
  description: 'Genera automáticamente una API de simulación basada en especificaciones OpenAPI',

  options: {
    version: 'Versión de OpenAPI',
    format: 'Formato de salida',
    includeExamples: 'Incluir respuestas de ejemplo',
    responseDynamism: 'Dinamismo de respuesta',
    responseType: 'Tipo de Respuesta',
    arrayLength: 'Longitud del Array',
    responseFormat: 'Formato de Respuesta'
  },

  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },

  actions: {
    generate: 'Generar Mock',
    preview: 'Previsualizar API',
    clear: 'Limpiar',
    copy: 'Copiar Código',
    download: 'Descargar',
    uploadSpec: 'Subir Especificación OpenAPI',
    uploadJava: 'Subir Clase Java',
    generateJson: 'Generar JSON',
    generateBuilder: 'Generar Constructor',
    format: 'Formato'
  },

  messages: {
    copied: '¡Copiado al portapapeles!',
    generationSuccess: 'API de simulación generada con éxito',
    generationError: 'Error al generar la API de simulación',
    specRequired: 'Proporcione una especificación OpenAPI',
    fileUploaded: 'Archivo subido',
    parseError: 'Error al analizar la clase Java, asegúrese de que el formato del archivo sea correcto'
  },

  help: {
    uploadHint: 'Sube archivos .java para analizar automáticamente la estructura de la clase. Todavía no se admiten propiedades de objetos multinivel.'
  },

  fields: {
    title: 'Definiciones de campo',
    addField: 'Agregar Campo',
    addChildField: 'Agregar Campo Secundario',
    fieldName: 'Nombre del Campo'
  },

  fieldTypes: {
    string: 'Cadena',
    number: 'Número',
    boolean: 'Booleano',
    date: 'Fecha',
    name: 'Nombre',
    email: 'Correo Electrónico',
    phone: 'Teléfono',
    address: 'Dirección',
    id: 'ID',
    image: 'URL de Imagen',
    array: 'Array',
    object: 'Objeto'
  },

  array: {
    itemType: 'Tipo de Elemento del Array',
    arrayFields: 'Campos del Elemento del Array'
  },

  object: {
    childFields: 'Campos Secundarios'
  },

  responseTypes: {
    object: 'Objeto Individual',
    array: 'Array de Objetos',
    custom: 'Estructura Personalizada'
  },

  responseFormats: {
    dataOnly: 'Solo Datos',
    standard: 'Respuesta REST estándar (código, datos, mensaje)'
  },

  placeholder: {
    output: '// Aquí se mostrarán los datos simulados generados'
  }
};