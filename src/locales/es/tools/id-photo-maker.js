export default {
  name: 'Creador de Fotos de Identificación',
  description: 'Crear fotos profesionales de identificación con fondos y dimensiones personalizables',
  upload: {
    title: 'Subir Imagen',
    dropzone: 'Arrastre su imagen aquí o haga clic para buscar',
    or: 'O',
    camera: 'Tomar una foto con la cámara',
    constraints: 'Tamaño máximo: 10MB. Formatos admitidos: JPG, PNG, WEBP',
    takePicture: 'Tomar Foto',
    retake: 'Volver a Tomar'
  },
  editing: {
    title: 'Editar Foto',
    faceDetection: 'Detección Facial',
    autoDetect: 'Detectar automáticamente el rostro',
    manualMode: 'Ajuste Manual',
    zoom: 'Zoom',
    rotate: 'Rotar',
    brightness: 'Brillo',
    contrast: 'Contraste',
    saturation: 'Saturación',
    filters: 'Filtros'
  },
  background: {
    title: 'Fondo',
    original: 'Original',
    white: 'Blanco',
    blue: 'Azul',
    red: 'Rojo',
    custom: 'Color Personalizado',
    transparent: 'Transparente'
  },
  size: {
    title: 'Tamaño de la Foto',
    presets: 'Preselecciones de Tamaño',
    custom: 'Tamaño Personalizado',
    width: 'Ancho',
    height: 'Alto',
    unit: 'Unidad',
    mm: 'mm',
    inches: 'pulgadas',
    pixels: 'píxeles'
  },
  presets: {
    passport: 'Pasaporte (35×45mm)',
    visa: 'Visa (2×2 pulgadas)',
    drivingLicense: 'Licencia de Conducir (2.5×3 pulgadas)',
    idCard: 'Carné de Identidad (25×35mm)',
    linkedin: 'LinkedIn (400×400 píxeles)',
    schengen: 'Visa Schengen (35×45mm)',
    chinese: 'Visa China (33×48mm)',
    indian: 'Visa India (2×2 pulgadas)'
  },
  output: {
    title: 'Salida',
    preview: 'Vista Previa',
    grid: 'Fotos Múltiples',
    columns: 'Columnas',
    rows: 'Filas',
    spacing: 'Espaciado',
    background: 'Fondo de Página',
    paperSize: 'Tamaño de Papel',
    download: 'Descargar',
    print: 'Imprimir',
    downloadAs: 'Descargar como',
    jpg: 'Imagen JPG',
    png: 'Imagen PNG',
    pdf: 'Documento PDF'
  },
  actions: {
    apply: 'Aplicar',
    reset: 'Restablecer',
    undo: 'Deshacer',
    redo: 'Rehacer',
    save: 'Guardar Foto',
    share: 'Compartir'
  },
  messages: {
    noFaceDetected: 'No se detectó ningún rostro. Pruebe ajustando manualmente o usando otra foto.',
    multipleFacesDetected: 'Se detectaron múltiples rostros. Usando el rostro más grande.',
    processing: 'Procesando su foto...',
    downloadReady: 'Su foto está lista para ser descargada',
    photoSaved: 'Foto guardada exitosamente'
  }
}