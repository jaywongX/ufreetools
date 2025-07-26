export default {
  name: 'Recortador de Imágenes',
  description: 'Recortar, redimensionar y rotar imágenes con precisión',

  upload: {
    title: 'Subir Imagen',
    dropzone: 'Arrastre y suelte la imagen aquí o haga clic para navegar',
    maxSize: 'Tamaño máximo del archivo: 10MB',
    supportedFormats: 'Formatos admitidos: JPG, PNG, WEBP, GIF',
    select: 'Por favor seleccione una imagen para comenzar a recortar y editar'
  },

  editor: {
    title: 'Editor de Imagen',
    zoom: 'Zoom',
    rotate: 'Rotar',
    flipHorizontal: 'Voltear Horizontalmente',
    flipVertical: 'Voltear Verticalmente',
    reset: 'Restablecer Imagen',
    undo: 'Deshacer',
    redo: 'Rehacer',
    dragMode: 'Modo Arrastrar',
    scaleMode: 'Modo Escalar'
  },

  crop: {
    title: 'Ajustes de Recorte',
    aspectRatio: 'Relación de Aspecto',
    freeform: 'Forma Libre',
    square: 'Cuadrado (1:1)',
    portrait: 'Vertical (3:4)',
    landscape: 'Horizontal (4:3)',
    widescreen: 'Pantalla Ancha (16:9)',
    panorama: 'Panorámica (2:1)',
    custom: 'Personalizado',
    width: 'Ancho',
    height: 'Alto',
    unit: 'Unidad',
    pixels: 'Píxeles',
    percent: 'Porcentaje',
    lockAspectRatio: 'Bloquear Relación de Aspecto'
  },

  presets: {
    title: 'Preselecciones de Tamaño',
    original: 'Tamaño Original',
    social: 'Redes Sociales',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: 'Tamaños de Impresión',
    fourBySix: '4×6 pulgadas',
    fiveBySeven: '5×7 pulgadas',
    eightByTen: '8×10 pulgadas'
  },

  output: {
    title: 'Salida',
    preview: 'Vista Previa',
    dimensions: 'Dimensiones de Salida',
    quality: 'Calidad',
    format: 'Formato',
    fileName: 'Nombre del Archivo',
    download: 'Descargar',
    saveAs: 'Guardar Como',
    copy: 'Copiar al Portapapeles'
  },

  actions: {
    crop: 'Recortar Imagen',
    apply: 'Aplicar',
    cancel: 'Cancelar',
    save: 'Guardar Imagen',
    download: 'Descargar',
    newImage: 'Nueva Imagen'
  },

  messages: {
    cropSuccess: 'Imagen recortada exitosamente',
    downloadReady: 'Su imagen recortada está lista para descargar',
    processing: 'Procesando la imagen...',
    copied: 'La imagen ha sido copiada al portapapeles',
    invalidFile: 'Archivo inválido. Por favor cargue una imagen válida.',
    fileTooLarge: 'El archivo es demasiado grande. El tamaño máximo es de 10MB.'
  }
};