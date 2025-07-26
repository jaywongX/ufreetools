export default {
  name: 'Generador de fórmulas LaTeX',
  description: 'Genere y exporte fórmulas matemáticas en LaTeX en tiempo real',

  // UI textos
  input: 'Introducir código LaTeX',

  output: 'Vista previa del resultado',
  renderButton: 'Renderizar fórmula',
  exportButton: 'Exportar como imagen',
  copyButton: 'Copiar código LaTeX',

  // Configuración
  settings: {
    title: 'Configuración',
    fontSize: 'Tamaño de fuente',
    textColor: 'Color del texto',
    backgroundColor: 'Color de fondo',
    displayMode: 'Modo de visualización',
    displayModeInline: 'Modo en línea',
    displayModeBlock: 'Modo de bloque'
  },

  // Ejemplos
  examples: {
    title: 'Ejemplos',
    basic: 'Fórmulas básicas',
    fraction: 'Fracciones',
    superscript: 'Superíndices / Subíndices',
    integral: 'Integrales',
    matrix: 'Matrices',
    more: 'Más ejemplos'
  },

  // Mensajes
  copied: '¡Copiado al portapapeles!',

  errorTitle: 'Error al renderizar',
  errorMessage: 'Verifique la sintaxis de su código LaTeX'
};