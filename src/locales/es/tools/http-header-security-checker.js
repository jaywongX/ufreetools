export default {
  name: 'Verificador de Seguridad de Cabeceras HTTP',
  description: 'Analiza y evalúa la seguridad de las cabeceras de respuesta HTTP',
  title: 'Verificador de Seguridad de Cabeceras HTTP',
  intro: 'Analiza las cabeceras de respuesta HTTP de un sitio web, detecta configuraciones de seguridad como CSP, HSTS y proporciona sugerencias de mejora',

  input: {
    title: 'Introduce URL o Cabeceras',
    url: 'URL',
    urlPlaceholder: 'Introduce la URL a revisar (ejemplo: https://ejemplo.com)',
    headers: 'O pega directamente las cabeceras HTTP',
    headersPlaceholder: 'Pega aquí las cabeceras HTTP en bruto...',
    options: 'Opciones de Escaneo',
    followRedirects: 'Seguir Redirecciones',
    includeSubresources: 'Revisar Subrecursos (CSS, JS, etc.)',
    timeout: 'Tiempo de Espera (segundos)',
    checkButton: 'Verificar Cabeceras',
    analyzing: 'Analizando...'
  },

  results: {
    title: 'Análisis de Seguridad de Cabeceras',
    overview: 'Resumen',
    score: 'Puntuación de Seguridad',
    totalScore: 'Puntuación Total sobre 100',
    scanned: 'URLs Escaneadas',
    date: 'Fecha del Escaneo',
    headers: {
      title: 'Cabeceras Detectadas',
      name: 'Cabecera',
      value: 'Valor',
      status: 'Estado'
    },
    allHeaders: {
      title: 'Todas las Cabeceras de Respuesta',
      name: 'Nombre',
      value: 'Valor',
      noData: 'No hay datos disponibles de cabeceras de respuesta'
    },
    missing: {
      title: 'Cabeceras de Seguridad Faltantes',
      description: 'Las siguientes cabeceras de seguridad recomendadas no se encontraron:'
    },
    issues: {
      title: 'Problemas de Seguridad',
      critical: 'Crítico',
      high: 'Alto',
      medium: 'Medio',
      low: 'Bajo',
      info: 'Informativo'
    },
    recommendations: {
      title: 'Recomendaciones',
      description: 'Considera añadir las siguientes cabeceras para mejorar la seguridad:',
      example: 'Ejemplo de Configuración'
    },
    rating: {
      unknown: 'Desconocido',
      excellent: 'Excelente',
      good: 'Bueno',
      fair: 'Aceptable',
      poor: 'Malo',
      high_risk: 'Alto Riesgo',
      descriptions: {
        unknown: 'No se pudo obtener información sobre las cabeceras de seguridad del sitio',
        excellent: 'El sitio ha implementado todas las cabeceras de seguridad principales',
        good: 'El sitio ha implementado la mayoría de las cabeceras importantes de seguridad',
        fair: 'Al sitio le faltan algunas cabeceras importantes de seguridad',
        poor: 'Al sitio le faltan múltiples cabeceras clave de seguridad',
        high_risk: 'El sitio prácticamente no tiene protección mediante cabeceras de seguridad'
      }
    }
  },

  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: 'Exige conexiones HTTPS en lugar de HTTP',
      recommendation: 'Añade "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"',
      status: {
        good: 'Configurado correctamente',
        bad: 'No configurado',
        warning: 'La configuración puede mejorarse'
      },
      recommendationConfigured: 'La configuración existente está implementada; asegúrate de que incluya un valor de max-age suficientemente largo e incluya includeSubDomains',
      recommendationMissing: 'Se recomienda habilitar HSTS para asegurar que todas las comunicaciones sean a través de HTTPS'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: 'Evita el análisis MIME (sniffing) del navegador',
      recommendation: 'Añade "X-Content-Type-Options: nosniff"',
      status: {
        good: 'Configurado correctamente',
        bad: 'No configurado o configuración incorrecta'
      },
      recommendationConfigured: 'La configuración es correcta; mantén los ajustes actuales',
      recommendationMissing: 'Se recomienda establecer esta cabecera con el valor "nosniff"'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: 'Impide que el sitio se cargue dentro de un iframe, evitando así ataques de clickjacking',
      recommendation: 'Añade "X-Frame-Options: DENY" o "SAMEORIGIN"',
      status: {
        good: 'Configurado',
        bad: 'No configurado'
      },
      recommendationConfigured: 'La configuración existente está implementada; se recomienda usar DENY o SAMEORIGIN',
      recommendationMissing: 'Se recomienda configurar esta cabecera con los valores DENY o SAMEORIGIN para prevenir clickjacking'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: 'Controla qué recursos puede cargar el agente de usuario',
      recommendation: 'Añade una cabecera Content-Security-Policy con directivas adecuadas',
      status: {
        good: 'Configurado correctamente',
        bad: 'No configurado',
        warning: 'La configuración puede mejorarse'
      },
      recommendationConfigured: 'La configuración existente está implementada; asegúrate de auditar y actualizar regularmente la política',
      recommendationMissing: 'Se recomienda configurar CSP para restringir orígenes de recursos, mejorando la defensa contra ataques XSS'
    },
    xXssProtection: {
      name: 'X-XSS-Protection',
      description: 'Esta cabecera activa el filtrado XSS en navegadores antiguos. En navegadores modernos, se recomienda CSP.',
      recommendation: 'Aunque esta cabecera está obsoleta en navegadores modernos, aún se recomienda establecerla a "1; mode=block" para compatibilidad con navegadores antiguos',
      status: {
        enabled: 'Habilitado',
        disabled: 'Deshabilitado',
        notConfigured: 'No configurado (CSP se recomienda para navegadores modernos)'
      }
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: 'Controla la información incluida en el encabezado Referer',
      recommendation: 'Añade "Referrer-Policy: no-referrer-when-downgrade" o una política más estricta',
      status: {
        good: 'Configurado',
        bad: 'No configurado'
      },
      recommendationConfigured: 'La configuración existente está implementada; se recomienda usar strict-origin o strict-origin-when-cross-origin',
      recommendationMissing: 'Se recomienda configurar esta cabecera para controlar la transmisión de información de referer'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: 'Controla qué características y APIs del navegador pueden usarse',
      recommendation: 'Añade una cabecera Permissions-Policy con restricciones adecuadas',
      status: {
        good: 'Configurado',
        bad: 'No configurado'
      },
      recommendationConfigured: 'La configuración existente está implementada; asegúrate de restringir funciones innecesarias',
      recommendationMissing: 'Se recomienda configurar esta cabecera para limitar las características del navegador que puede usar el sitio'
    }
  },

  status: {
    good: 'Bueno',
    warning: 'Advertencia',
    bad: 'Malo',
    info: 'Informativo',
    notApplicable: 'No Aplicable'
  },

  actions: {
    export: 'Exportar Informe',
    copyHeaders: 'Copiar Cabeceras',
    copyRecommendations: 'Copiar Recomendaciones',
    scan: 'Nuevo Escaneo',
    share: 'Compartir Resultados',
    analyze: 'Analizar Información de Cabeceras'
  },

  emptyState: {
    line1: 'Introduce una URL para analizar la configuración de seguridad de las cabeceras HTTP',
    line2: 'Obtén evaluaciones detalladas y recomendaciones sobre CSP, HSTS y otras cabeceras de seguridad'
  },

  messages: {
    scanning: 'Escaneando {url}...',
    completed: 'Escaneo Completado',
    error: 'Error: {message}',
    timeout: 'Tiempo de espera Agotado',
    invalidUrl: 'URL Inválida',
    invalidUrlFormat: 'Por favor introduce una URL válida comenzando por http:// o https://',
    copied: '¡Copiado al Portapapeles!',
    exportComplete: 'Informe Exportado Exitosamente',
    httpWarning: 'Advertencia: Usar HTTP puede ser inseguro',
    noHeaders: 'No se encontró información de cabeceras',
    fetchError: 'No se pudo obtener información de cabeceras: {error}'
  }
};