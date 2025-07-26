export default {
  name: 'Codificador/Decodificador Base64',
  description: 'Convierte rápidamente datos entre texto y codificación Base64',

  mode: {
    title: 'Modo',
    encode: 'Codificar',
    decode: 'Decodificar'
  },

  input: {
    title: 'Entrada',
    placeholder: 'Introduce el texto a procesar...',
    clear: 'Limpiar',
    copy: 'Copiar',
    paste: 'Pegar',
    upload: 'Subir Archivo',
    dragDrop: 'Arrastra y suelta un archivo aquí o haz clic para cargarlo',
    textOption: 'Texto',
    fileOption: 'Archivo',
    hexOption: 'Hex',
    selectFile: 'Seleccionar archivo'
  },

  output: {
    title: 'Salida',
    placeholder: 'El resultado aparecerá aquí...',
    copy: 'Copiar',
    download: 'Descargar',
    empty: 'No hay salida aún'
  },

  options: {
    title: 'Opciones',
    encoding: 'Codificación de Caracteres',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: 'Usar codificación segura para URLs',
    autoDecode: 'Detectar y decodificar automáticamente',
    includeDataURI: 'Incluir prefijo Data URI',
    trimWhitespace: 'Eliminar espacios en blanco',
    preserveLineBreaks: 'Conservar saltos de línea',
    addImageHeader: 'Agregar encabezado de imagen Base64'
  },

  dataUri: {
    title: 'Data URI',
    mimeType: 'Tipo MIME',
    common: 'Tipos Comunes',
    custom: 'Personalizado'
  },

  messages: {
    copied: 'Copiado al portapapeles',
    copyFailed: 'Fallo al copiar',
    pasteFailed: 'Fallo al pegar',
    uploadSuccess: 'Archivo subido correctamente',
    uploadFailed: 'Fallo al cargar el archivo',
    readFailed: 'Fallo al leer el archivo',
    invalidBase64: 'Codificación Base64 inválida',
    invalidHex: 'Codificación Hex inválida',
    fileTooLarge: 'El archivo es demasiado grande, por favor descárgalo directamente',
    processError: 'Ocurrió un error durante el procesamiento',
    encodeSuccess: 'Codificado exitosamente',
    decodeSuccess: 'Decodificado exitosamente',
    processing: 'Procesando...'
  },

  mimeTypes: {
    'text/plain': 'Texto',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'Imagen JPEG',
    'image/png': 'Imagen PNG',
    'image/gif': 'Imagen GIF',
    'image/svg+xml': 'Imagen SVG',
    'application/pdf': 'Documento PDF'
  },

  tips: {
    title: 'Consejos',
    tip1: 'La codificación Base64 puede convertir cualquier dato binario en formato de texto plano',
    tip2: 'Utiliza la opción URL-segura para eliminar los caracteres "+" y "/" de la codificación estándar Base64',
    tip3: 'El prefijo Data URI permite usar datos codificados directamente en etiquetas HTML como img u otras',
    tip4: 'Los archivos grandes consumen más recursos al codificarse, intenta mantenerlos bajo los 2MB',
    tip5: 'Algunos caracteres especiales pueden requerir una codificación específica para ser procesados correctamente'
  },

  about: {
    title: 'Acerca de la Codificación Base64',
    description: 'Base64 es un método de codificar datos binarios utilizando un conjunto de 64 caracteres imprimibles, comúnmente usado para representar, transmitir y almacenar datos binarios en formatos basados en texto.'
  },

  features: {
    title: 'Características',
    multiInput: 'Soporta entrada de texto, hexadecimal y archivos',
    charsetSupport: 'Soporte para decodificación UTF-8 y GBK',
    imagePreview: 'Vista previa de imágenes (para imágenes menores a 1MB)',
    fileDownload: 'Soporte para descarga en múltiples formatos (PDF por defecto)',
    chunkProcessing: 'Procesamiento en bloques para archivos grandes con progreso en tiempo real',
    autoDetect: 'Detección automática y vista previa del tipo de imagen'
  },

  notes: {
    title: 'Notas',
    sizeIncrease: 'La codificación Base64 aumenta el tamaño de los datos aproximadamente un 33%',
    chunkProcessing: 'Los archivos grandes se procesan en bloques con indicación de progreso en dos fases',
    largeFiles: 'Archivos mayores a 10MB solo son descargables, no se muestra su contenido en texto',
    fileInput: 'Para archivos grandes, usa la entrada de archivo en lugar de pegar en el campo de texto'
  },

  fileTypeLabel: {
    pdf: 'Documento PDF',
    txt: 'Archivo de texto',
    jpg: 'Imagen JPG',
    png: 'Imagen PNG',
    zip: 'Paquete ZIP',
    bin: 'Archivo binario'
  }
};