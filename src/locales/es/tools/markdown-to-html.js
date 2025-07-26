export default {
  name: 'Markdown a HTML',
  description: 'Convierta texto Markdown a HTML con opciones personalizables',

  input: {
    title: 'Entrada Markdown',
    placeholder: 'Introduzca o pegue su texto Markdown aquí...',
    loadSample: 'Cargar Ejemplo',
    clearInput: 'Limpiar Entrada',
    uploadFile: 'Subir Archivo Markdown',
    paste: 'Pegar del portapapeles',
    charCount: 'Caracteres',
    lineCount: 'Líneas'
  },

  output: {
    title: 'Salida HTML',
    copied: 'HTML copiado al portapapeles',
    download: 'Descargar HTML',
    copyOutput: 'Copiar HTML',
    clearOutput: 'Limpiar Salida',
    previewTab: 'Vista Previa',
    htmlTab: 'Código HTML',
    previewMode: 'Modo Vista Previa',
    sourceMode: 'Fuente HTML'
  },

  options: {
    title: 'Opciones de Conversión',
    headerIds: 'IDs Automáticas en Encabezados',
    gfm: 'GitHub Flavored Markdown',
    tables: 'Tablas',
    breaks: 'Saltos de Línea',
    smartLists: 'Listas Inteligentes',
    smartypants: 'Smartypants',
    xhtml: 'XHTML',
    highlight: 'Resaltado de Sintaxis',
    sanitize: 'Sanitizar HTML',
    footnotes: 'Notas al Pie',
    taskLists: 'Listas de Tareas',
    emoji: 'Soporte Emoji',
    includeStyle: 'Incluir CSS por Defecto',
    realtimePreview: 'Vista Previa en Tiempo Real',
    scrollSync: 'Sincronización de Desplazamiento',
    htmlOptions: 'Opciones HTML'
  },

  styles: {
    title: 'Opciones de Estilo',
    theme: 'Tema',
    codeTheme: 'Tema de Código',
    customCSS: 'CSS Personalizado',
    fontSize: 'Tamaño de Fuente',
    lineHeight: 'Altura de Línea',
    enableCustom: 'Habilitar Estilizado Personalizado'
  },

  themes: {
    default: 'Por Defecto',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: 'Modo Oscuro',
    custom: 'Personalizado'
  },

  codeThemes: {
    default: 'Por Defecto',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },

  actions: {
    convert: 'Convertir a HTML',
    clearAll: 'Limpiar Todo',
    copyHtml: 'Copiar HTML',
    saveAsHtml: 'Guardar como HTML',
    generateToc: 'Generar Tabla de Contenidos'
  },

  messages: {
    conversionSuccess: 'Markdown convertido exitosamente',
    conversionFailed: 'Fallo al convertir Markdown: {error}',
    emptyInput: 'Por favor introduzca algo de Markdown para convertir',
    copied: 'HTML copiado al portapapeles',
    tocGenerated: 'Tabla de contenidos generada'
  },

  alerts: {
    copied: 'Copiado al portapapeles',
    copyFailed: 'Fallo al copiar al portapapeles',
    pasteFailed: 'Fallo al pegar desde el portapapeles',
    confirmClear: '¿Está seguro que desea limpiar la entrada?'
  },

  status: {
    lastConversion: 'Última hora de conversión'
  },

  samples: {
    basic: 'Básico',
    extended: 'Extendido',
    article: 'Artículo'
  },

  download: {
    title: 'Exportar Markdown a HTML'
  }
}; 