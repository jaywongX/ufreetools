export default {
  name: 'Generador de cliente TypeScript desde OpenAPI',
  description: 'Genera automáticamente interfaces y código cliente en TypeScript basado en especificaciones OpenAPI',

  options: {
    exportSchemas: 'Exportar todas las definiciones de modelos',
    generateClient: 'Generar código del cliente API',
    addComments: 'Agregar comentarios y documentación',
    useEnums: 'Usar enums de TypeScript (en lugar de uniones de cadenas)',
    indentSize: 'Tamaño de sangría',
    operationType: 'Tipo de operación',
    displayOptions: 'Opciones de visualización'
  },

  inputMode: {
    toggleToFile: 'Cambiar a carga de archivo',
    toggleToText: 'Cambiar a entrada de texto',
    loadExample: 'Cargar ejemplo'
  },

  fileUpload: {
    dragAndDrop: 'Arrastre y suelte el archivo OpenAPI aquí, o haga clic para cargarlo',
    supportedFormats: 'Soporta formatos de archivo .json, .yaml y .yml',
    fileSelected: 'Seleccionado: {0} ({1})'
  },

  textInput: {
    placeholder: 'Pegue la especificación OpenAPI (JSON o YAML) aquí...'
  },

  actions: {
    generate: 'Generar código TypeScript',
    processing: 'Procesando...',
    clear: 'Limpiar',
    copy: 'Copiar código',
    download: 'Descargar código'
  },

  results: {
    generatedCode: 'Código TypeScript generado',
    copied: 'Copiado al portapapeles',
    error: 'Error',
    characterCount: 'Conteo de caracteres: {0}'
  },

  errors: {
    parseError: 'No se pudo analizar la especificación OpenAPI. Asegúrese de proporcionar un formato JSON o YAML válido.',
    invalidSpec: 'Especificación OpenAPI no válida. No se encontró identificador de versión openapi o swagger.',
    processingError: 'Error procesando la especificación OpenAPI: {0}'
  }
};