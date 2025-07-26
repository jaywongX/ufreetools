export default {
  name: 'Analizador de User Agent',
  description: 'Analizar y procesar cadenas de user agent del navegador para identificar información del navegador, sistema operativo y dispositivo',

  input: {
    label: 'Cadena de User Agent',
    placeholder: 'Introduzca o pegue la cadena de user agent...'
  },

  actions: {
    parse: 'Analizar',
    detect: 'Detectar Navegador Actual',
    clear: 'Limpiar'
  },

  results: {
    title: 'Resultados del Análisis',
    summary: 'Resumen',
    details: 'Detalles',
    originalUA: 'Cadena Original de User Agent'
  },

  sections: {
    browser: 'Navegador',
    os: 'Sistema Operativo',
    device: 'Dispositivo',
    other: 'Otra Información'
  },

  deviceTypes: {
    mobile: 'Dispositivo Móvil',
    tablet: 'Tableta',
    desktop: 'Escritorio'
  },

  fields: {
    name: 'Nombre',
    version: 'Versión',
    engine: 'Motor',
    platform: 'Plataforma',
    type: 'Tipo',
    vendor: 'Proveedor',
    model: 'Modelo',
    isMobile: 'Dispositivo Móvil',
    isTablet: 'Tableta',
    isDesktop: 'Dispositivo de Escritorio'
  },

  messages: {
    parsingError: 'Error al analizar la cadena de user agent',
    emptyInput: 'Por favor ingrese una cadena de user agent',
    unknown: 'Desconocido',
    yes: 'Sí',
    no: 'No'
  },

  tips: {
    description: 'User Agent es una cadena de identificación que los navegadores envían a los servidores, conteniendo información sobre el navegador, sistema operativo y dispositivo.',
    useCases: 'Comúnmente utilizada para análisis web, manejo de compatibilidad entre navegadores y adaptación por dispositivo.'
  }
};