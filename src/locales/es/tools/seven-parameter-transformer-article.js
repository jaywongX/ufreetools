export default {
    title: 'Transformador de Siete Parámetros: Tutorial de Conversión por Lotes de Coordenadas Geodésicas Bursa-Wolf',
    functionTitle: '¿Cómo resuelve el Transformador de Siete Parámetros los desafíos de integración de múltiples sistemas de coordenadas?',
    intro: '<p>El Transformador de Siete Parámetros proporciona conversión por lotes entre coordenadas XYZ y BLH de <strong>WGS84, CGCS2000, Beijing 54, Xi\'an 80</strong> basado en el modelo Bursa-Wolf, enfocándose en resolver problemas de desplazamiento y trazabilidad en la fusión de coordenadas de múltiples fuentes en plataformas topográficas, ingeniería y SIG. La herramienta cuenta con algoritmos abiertos, ajuste de errores y registros de proceso para garantizar que cada conversión sea rastreable, reproducible y evaluable.</p><p>Con ajuste automático y gestión de parámetros mediante plantillas, los equipos pueden reutilizar rápidamente conjuntos de siete parámetros de alta confiananza entre proyectos y verificar cada paso de rotación y corrección de escala a través de registros, facilitando la presentación de documentación técnica completa durante las fases de licitación pública y aceptación.</p>',
    useCasesTitle: 'Escenarios de Aplicación Práctica',
    useCases: {
        first: '<strong>Topografía Municipal e Industrial</strong>: Integración de resultados CGCS2000 con sistemas de coordenadas locales independientes para garantizar una unión perfecta de redes subterráneas, modelos BIM y planos de acabado.',
        second: '<strong>Ingeniería Energética y de Transporte</strong>: Construcción interprovincial que requiere interoperabilidad entre coordenadas Beijing 54, Xi\'an 80 y WGS84, con el Transformador de Siete Parámetros proporcionando evaluación de errores de proceso completo.',
        third: '<strong>Teledetección y Drones</strong>: Los resultados de fotografía aérea a menudo se emiten en WGS84, requiriendo conversión de siete parámetros de alta precisión antes de importar a proyección Gauss-Krüger local.',
        fourth: '<strong>Titulación de Recursos Naturales</strong>: Las coordenadas históricas de mojones suelen utilizar datum geodésicos antiguos, y la herramienta puede mapearlas de manera confiable a CGCS2000 para registro y revisión.'
    },
    tipTitle: 'Ilustración del Producto',
    logoAlt: '/seven-parameter-transformer-logo.png',
    tipContent: 'Esta ilustración puede ser rastreada por motores de búsqueda para fragmentos multimedia en resultados de búsqueda.',
    conclusion: '<p>Desde verificación de punto único hasta procesamiento de decenas de miles por lotes, el Transformador de Siete Parámetros puede generar informes que contienen residuos de coordenadas, RMSE e intervalos de confianza. Basándose en implementación 100% frontend, las coordenadas sensibles nunca salen del navegador, cumpliendo con los requisitos normativos para datos en proyectos clasificados.</p>',
    faqTitle: 'Preguntas Frecuentes',
    faqs: {
        q1: {
            question: '¿Cómo garantiza el Transformador de Siete Parámetros la precisión del cálculo de siete parámetros Bursa-Wolf?',
            answer: '<p>La herramienta utiliza el método de mínimos cuadrados de puntos comunes para resolver siete parámetros y genera vectores residuales, Sigma0 e intervalos de confianza del 95%. Puede verificar el proceso de cálculo matricial mediante registros para asegurar que la precisión de los siete parámetros Bursa-Wolf cumpla con las especificaciones del proyecto.</p>'
        },
        q2: {
            question: '¿Cómo configurar delimitadores personalizados al importar CSV por lotes?',
            answer: '<p>En el área de "Entrada de Datos de Coordenadas", ajuste el campo delimitador. El Transformador de Siete Parámetros analizará los datos XYZ/BLH/ENH según el nuevo delimitador mientras preserva columnas de nombres de puntos o comentarios para coincidencia posterior.</p>'
        },
        q3: {
            question: '¿Puede el Transformador de Siete Parámetros manejar simultáneamente proyecciones Gauss-Krüger y UTM?',
            answer: '<p>Sí, simplemente seleccione el modo correspondiente en "Parámetros de Proyección/Altura" y complete el meridiano central, ancho de zona y factor de escala. El proceso de conversión realizará primero un cálculo directo 3D, luego calculará inversamente a las coordenadas de proyección objetivo.</p>'
        },
        q4: {
            question: '¿Cómo obtener siete parámetros cuando hay pocos puntos comunes?',
            answer: '<p>Si tiene menos de tres puntos comunes, puede llamar parámetros de ejemplo integrados en la "Plantilla de Parámetros", o ingresar valores de referencia de proyectos históricos, luego actualizar iterativamente con nuevos puntos recopilados en campo.</p>'
        },
        q5: {
            question: '¿El Transformador de Siete Parámetros admite sistemas de coordenadas locales independientes?',
            answer: '<p>Sí. Puede ingresar el semieje mayor y el inverso del achatamiento en "Parámetros de Elipsoide Personalizados" y combinarlos con parámetros de proyección personalizados para lograr una restauración realista y conversión mutua de sistemas de coordenadas locales independientes.</p>'
        }
    },
    tutorialTitle: 'Guía de Operación del Transformador de Siete Parámetros',
    steps: {
        step1: {
            title: 'Seleccionar Sistema de Coordenadas y Modo de Proyección',
            description: 'Primero seleccione los sistemas de coordenadas fuente y destino, luego complete información como meridiano central y ancho de zona en el área de parámetros de proyección para garantizar consistencia con los datos medidos.'
        },
        step2: {
            title: 'Ingresar o Importar Puntos de Coordenadas',
            description: 'Ingrese manualmente puntos únicos XYZ/BLH/ENH, o arrastre CSV/TXT para importación por lotes. Ajuste delimitadores según sea necesario para mantener análisis correcto.'
        },
        step3: {
            title: 'Configurar Siete Parámetros',
            description: 'Si los parámetros son conocidos, complete directamente ΔX, ΔY, ΔZ, Rx, Ry, Rz y escala; si son desconocidos, pegue pares de puntos en "Solucionador de Puntos Comunes" y ejecute el ajuste.'
        },
        step4: {
            title: 'Ejecutar Conversión y Ver Registros',
            description: 'Tras hacer clic en "Realizar Conversión", los registros en tiempo real mostrarán análisis, cálculos directos/inversos, rotaciones y correcciones de escala, facilitando el seguimiento de problemas.'
        },
        step5: {
            title: 'Evaluar Precisión',
            description: 'El panel de resultados muestra RMSE, residuo máximo e intervalo de confianza del 95%. Si las métricas exceden límites, regrese al área de parámetros para ajustar o readecuar.'
        },
        step6: {
            title: 'Exportar Resultados e Informes',
            description: 'Tras confirmar precisión, exporte el CSV de resultados y registros juntos para archivo o presentación de revisión.'
        }
    },
    successTitle: 'Implementación Completada',
    successContent: '¡Felicitaciones! Ha dominado todo el flujo de trabajo del Transformador de Siete Parámetros y ahora puede completar rápidamente conversiones por lotes en proyectos de fusión de coordenadas de múltiples fuentes mientras genera informes de precisión de nivel profesional.',
    relatedToolsTitle: 'Herramientas Relacionadas Recomendadas',
    relatedTools: {
        first: {
            name: 'Calculadora de Hojas Cartográficas',
            description: 'Calcula números de hojas basados en coordenadas de latitud y longitud, compatible con múltiples escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'Convertidor de Tiempo GNSS',
            description: 'Herramienta para convertir entre tiempo GPS, tiempo BeiDou y tiempo UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: 'Calculadora de Área y Perímetro',
            description: 'Soporta dibujo de polígonos para calcular automáticamente área y perímetro con cambio de múltiples unidades.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: 'Calculadora de Línea Base',
            description: 'Ingresa coordenadas de inicio y fin para calcular longitud y acimut de línea base, soporta análisis de propagación de errores.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: 'Referencias Externas',
    references: {
        first: {
            name: 'Asociación China de Ciencias de Información Geográfica - Normas y Regulaciones',
            description: 'Normas técnicas y estándares industriales chinos de información geográfica',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'Estándar ISO 19111 de Sistemas de Coordenadas de Referencia',
            description: 'Estándar internacional autoritario para referencia de coordenadas y transformación de proyección.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: 'Estándares del Consorcio Geoespacial Abierto (OGC)',
            description: 'Estándares internacionales para transformación de datos geoespaciales',
            url: 'https://www.ogc.org/'
        }
    }
}