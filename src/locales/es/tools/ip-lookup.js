export default {
  name: 'Herramienta de Búsqueda de IP',
  description: 'Obtén información detallada sobre una dirección IP, incluyendo ubicación y detalles de red',

  input: {
    title: 'Búsqueda de Dirección IP',
    ipAddress: 'Dirección IP',
    ipPlaceholder: 'Ingrese una dirección IP (ej. 8.8.8.8)',
    hostname: 'Nombre de Host',
    hostnamePlaceholder: 'O ingrese un nombre de host (ej. google.com)',
    options: 'Opciones de Búsqueda',
    includeGeolocation: 'Incluir Geolocalización',
    includeASN: 'Incluir Información ASN',
    includeDomains: 'Incluir Dominios Asociados',
    includeAbuse: 'Incluir Contacto de Abuso',
    myIP: 'Usar Mi Dirección IP'
  },

  actions: {
    lookup: 'Buscar IP',
    clear: 'Limpiar Resultados',
    copyIP: 'Copiar IP',
    copyAll: 'Copiar Toda la Información',
    export: 'Exportar Resultados'
  },

  results: {
    title: 'Información de IP',
    noResults: 'No hay información para mostrar',
    error: 'Error: {message}',
    unknown: 'Desconocido',
    general: {
      title: 'Información General',
      ipAddress: 'Dirección IP',
      hostname: 'Nombre de Host',
      type: 'Tipo',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: 'IP Pública',
      yes: 'Sí',
      no: 'No',
      reverse: 'DNS Reverso'
    },
    location: {
      title: 'Ubicación',
      country: 'País',
      region: 'Región',
      city: 'Ciudad',
      postalCode: 'Código Postal',
      timezone: 'Zona Horaria',
      coordinates: 'Coordenadas',
      latitude: 'Latitud',
      longitude: 'Longitud'
    },
    network: {
      title: 'Red',
      asn: 'ASN',
      organization: 'Organización',
      isp: 'Proveedor de Servicios de Internet (ISP)',
      usage: 'Tipo de Uso',
      domain: 'Dominio',
      route: 'Ruta',
      subnet: 'Subred',
      netmask: 'Máscara de Red',
      cidr: 'Notación CIDR'
    },
    security: {
      title: 'Información de Seguridad',
      threat: 'Detección de Amenazas',
      isTor: 'Nodo de Salida Tor',
      isProxy: 'Proxy',
      isVpn: 'VPN',
      isAttacker: 'Atacante Conocido',
      isAbuser: 'Abusador Conocido',
      threatLevel: 'Nivel de Amenaza',
      confidenceScore: 'Puntaje de Confianza',
      abuseReports: 'Reportes de Abuso',
      lastReported: 'Última Denuncia'
    },
    additional: {
      title: 'Información Adicional',
      mobile: 'Red Móvil',
      hosting: 'Proveedor de Hosting',
      associated: 'Dominios Asociados',
      abuseContact: 'Contacto de Abuso'
    },
    queryTime: 'Tiempo de Consulta',
    dataSource: 'Fuente de Datos'
  },

  map: {
    title: 'Mapa de Ubicación',
    noLocation: 'No hay datos de ubicación disponibles',
    viewLarger: 'Ver Mapa Ampliado'
  },

  messages: {
    lookingUp: 'Buscando información para {query}...',
    copied: 'Copiado al portapapeles',
    exported: 'Resultados exportados exitosamente',
    invalidIP: 'Dirección IP inválida',
    invalidHostname: 'Nombre de host inválido',
    publicIPOnly: 'Esta herramienta solo funciona con direcciones IP públicas',
    rateLimited: 'Límite de consultas excedido. Inténtelo más tarde.',
    historyCleared: 'Historial limpiado'
  },

  history: {
    title: 'Historial de Búsquedas',
    clear: 'Limpiar Historial'
  }
};