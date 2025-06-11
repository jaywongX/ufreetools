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
  },
  article: {
    title: "Verificador de Seguridad de Cabeceras HTTP: Mejora la Postura de Seguridad de tu Sitio Web",
    features: {
      title: "Entendiendo la Seguridad de Cabeceras HTTP",
      description: "El <strong>Verificador de Seguridad de Cabeceras HTTP</strong> es una herramienta especializada diseñada para analizar y evaluar las <strong>cabeceras de seguridad</strong> de cualquier sitio web. Las <strong>cabeceras de seguridad</strong> son directivas especiales enviadas desde el servidor al navegador para proporcionar una capa adicional de <strong>seguridad</strong>, ayudando a proteger contra vulnerabilidades web comunes como Cross-Site Scripting (XSS), clickjacking y otros ataques por inyección de código.<br><br>Nuestra herramienta escanea cabeceras <strong>de seguridad críticas</strong> incluyendo Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Content-Type-Options, X-Frame-Options y otras. Evalúa la configuración actual de <strong>cabeceras</strong>, identifica <strong>cabeceras de seguridad</strong> faltantes y proporciona una <strong>puntuación de seguridad completa</strong> con recomendaciones accionables para mejorar la postura de seguridad de tu sitio web.",
      useCases: {
        title: "Aplicaciones Comunes del Verificador de Seguridad de Cabeceras",
        items: [
          "Desarrolladores web realizando auditorías de seguridad en sitios recién desarrollados antes del despliegue",
          "Profesionales de seguridad ejecutando pruebas de penetración y evaluaciones de vulnerabilidad",
          "Administradores de sistemas verificando configuraciones de seguridad en múltiples dominios",
          "Equipos DevOps implementando monitoreo continuo de seguridad en sus pipelines CI/CD",
          "Dueños de sitios web validando su postura de seguridad tras aplicar las cabeceras recomendadas",
          "Consultores de seguridad demostrando la necesidad de medidas de seguridad mejoradas a sus clientes",
          "Responsables de cumplimiento verificando que los sitios cumplan con estándares y regulaciones de seguridad"
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre Seguridad de Cabeceras HTTP",
      items: [
        {
          question: "¿Qué son las cabeceras de seguridad HTTP y por qué son importantes?",
          answer: "Las cabeceras de seguridad HTTP son directivas especiales enviadas desde el servidor al navegador que controlan cómo debe comportarse este al manejar el contenido de tu sitio web. Son cruciales porque proveen una capa adicional de seguridad contra vulnerabilidades web comunes como XSS, CSRF, clickjacking y ataques de inyección de código. Una configuración adecuada de estas cabeceras puede mejorar significativamente la postura de seguridad de tu sitio web con mínimo esfuerzo."
        },
        {
          question: "¿Qué cabeceras de seguridad debería implementar cada sitio web?",
          answer: "Como mínimo, cada sitio web moderno debería implementar: Content-Security-Policy (CSP) para prevenir ataques XSS, Strict-Transport-Security (HSTS) para exigir HTTPS, X-Content-Type-Options para evitar análisis MIME-type, X-Frame-Options para prevenir clickjacking y Referrer-Policy para controlar información en cabeceras de referer. Nuestro verificador evalúa automáticamente estas cabeceras esenciales y muchas más."
        },
        {
          question: "¿Cómo se calcula la puntuación de seguridad?",
          answer: "La puntuación de seguridad se calcula basándose en la presencia y configuración correcta de cabeceras críticas de seguridad. Cabeceras importantes como Content-Security-Policy y HSTS contribuyen hasta 20 puntos cada una, mientras que otras como X-Content-Type-Options y X-Frame-Options aportan entre 10 y 15 puntos cada una. También evaluamos la calidad de la implementación, no solo la presencia de las cabeceras, para una puntuación máxima de 100 puntos."
        },
        {
          question: "¿Puedo usar esta herramienta para revisar sitios web que no me pertenecen?",
          answer: "Sí, puedes usar el Verificador de Cabeceras de Seguridad HTTP para analizar cualquier sitio web accesible públicamente. La herramienta solo examina cabeceras de respuesta HTTP, que son información pública enviada por servidores web. Sin embargo, recomendamos usarla principalmente en sitios web que posees o tienes permiso para probar."
        },
        {
          question: "¿Cómo implemento las cabeceras de seguridad recomendadas por esta herramienta?",
          answer: "La implementación depende de tu servidor web o plataforma. Para Apache, puedes añadirlas en tu archivo .htaccess. Para Nginx, en la configuración del servidor. Muchos sistemas de gestión de contenidos tienen plugins específicos para cabeceras de seguridad. El Verificador de Cabeceras de Seguridad proporciona ejemplos de configuración que puedes adaptar a tu entorno específico."
        }
      ]
    },
    guide: {
      title: "Guía de Uso del Verificador de Seguridad de Cabeceras HTTP",
      steps: [
        "Introduce la URL completa del sitio web que quieres revisar en el campo de entrada de URL (debe incluir http:// o https://)",
        "Para revisiones avanzadas, considera habilitar opciones como 'Seguir Redirecciones' si el sitio usa redireccionamiento",
        "Haz clic en el botón 'Verificar Cabeceras' para iniciar el análisis de seguridad",
        "Revisa la puntuación de seguridad y la calificación general en la parte superior de los resultados",
        "Analiza el desglose detallado de las cabeceras de seguridad detectadas, cada una marcada con un indicador de estado (bueno, advertencia o malo)",
        "Haz clic en cualquier cabecera de seguridad para expandir y ver información detallada, incluido su valor actual, propósito y recomendaciones específicas",
        "Consulta la lista completa de todas las cabeceras de respuesta HTTP devueltas por el servidor en la sección 'Todas las Cabeceras de Respuesta'",
        "Implementa las cabeceras de seguridad recomendadas en tu servidor web según las sugerencias proporcionadas, luego vuelve a ejecutar el verificador para confirmar las mejoras"
      ]
    },
    conclusion: "Revisar y actualizar regularmente las cabeceras de seguridad de tu sitio web es una práctica fundamental en mantenimiento de seguridad web. Con el Verificador de Seguridad de Cabeceras HTTP, puedes identificar fácilmente debilidades en tu configuración actual e implementar las mejoras necesarias para fortalecer tu defensa contra ataques web comunes. Recuerda que las cabeceras de seguridad son solo un aspecto de una estrategia integral de seguridad, pero ofrecen una protección significativa con relativamente poco esfuerzo de implementación."
  }
}