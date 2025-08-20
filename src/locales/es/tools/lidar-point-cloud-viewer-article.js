export default {
  title: 'Visor de Nubes de Puntos LIDAR en Línea - Herramienta Gratuita de Visualización 3D',
  functionTitle: 'Introducción de Funciones y Casos de Uso',
  intro:
    'Nuestro <strong>visor de nubes de puntos LIDAR en línea</strong> es una herramienta profesional para la visualización 3D de datos de nubes de puntos, que admite la visualización y el análisis en línea de múltiples formatos. Este <strong>visor de nubes de puntos gratuito</strong> se basa en WebGL, no requiere instalación y ofrece renderizado 3D de alta calidad directamente en el navegador. Ya sea que seas ingeniero de topografía, arquitecto o especialista en SIG, este <strong>visor de datos LIDAR</strong> cubre tus necesidades profesionales.',
  useCasesTitle: 'Principales Casos de Uso',
  useCases: [
    'Topografía: ver y analizar datos de escaneo LiDAR para mediciones de terreno y levantamientos de edificios',
    'Diseño arquitectónico: visualizar nubes de puntos de edificios para respaldar flujos de trabajo BIM',
    'Planificación urbana: analizar modelos 3D de ciudades para apoyar ciudades inteligentes y la toma de decisiones',
    'Silvicultura: procesar nubes de puntos forestales para evaluar cobertura vegetal y biomasa',
    'Arqueología: visualizar escaneos 3D de yacimientos para conservación e investigación',
    'Exploración geológica: analizar nubes de puntos de estructuras geológicas para prospección y evaluación de riesgos',
    'Conducción autónoma: visualizar datos LiDAR embarcados para planificación de rutas y detección de obstáculos',
    'Inspección industrial: analizar escaneos 3D de equipos para control de calidad y detección de defectos'
  ],
  tipTitle: 'Consejo Profesional',
  tipContent:
    'Nuestro visor admite formatos principales como LAS, XYZ, PLY y PCD, y ofrece múltiples modos de coloración y controles interactivos para analizar los datos desde distintas perspectivas.',
  conclusion:
    'Con nuestro <strong>visor de nubes de puntos en línea</strong> puedes previsualizar y analizar rápidamente diversos conjuntos de datos LIDAR para aumentar la productividad. Este <strong>visor 3D de nubes de puntos</strong> es completamente gratuito y respeta tu privacidad: todo el procesamiento se realiza localmente en tu navegador.',
  faqTitle: 'Preguntas Frecuentes (FAQ)',
  faqs: [
    {
      question: '¿Qué formatos de archivo admite este visor de nubes de puntos LIDAR?',
      answer:
        'Nuestro <strong>visor de nubes de puntos</strong> admite múltiples formatos principales, incluidos LAS (formato estándar LIDAR), XYZ (nube de puntos ASCII), PLY (formato de archivo de polígono), PCD (Point Cloud Data) y TXT. Estos cubren la mayoría de escenarios de <strong>procesamiento de datos LIDAR</strong> y escaneo 3D.'
    },
    {
      question: '¿Existe un límite de tamaño para los archivos de nubes de puntos?',
      answer:
        'Para garantizar un buen rendimiento del navegador, recomendamos que los <strong>archivos de nubes de puntos</strong> no superen los 100 MB. Para conjuntos de datos grandes, considera el remuestreo o la división en bloques. Nuestro <strong>visor de nubes de puntos en línea</strong> optimiza automáticamente el renderizado para mantener una visualización 3D fluida.'
    },
    {
      question: '¿Cómo puedo ajustar la visualización de la nube de puntos?',
      answer:
        'Nuestra <strong>herramienta de visualización 3D</strong> ofrece varias opciones: ajustar el tamaño de los puntos, elegir modos de coloración (elevación, intensidad, clasificación, RGB), controlar la densidad de puntos y habilitar animaciones. Estas funciones te ayudan a analizar mejor los <strong>datos de escaneo LIDAR</strong>.'
    },
    {
      question: '¿Mis datos de nubes de puntos están seguros?',
      answer:
        'Totalmente. Nuestro <strong>visor LIDAR en línea</strong> procesa todo localmente; tus <strong>datos de nubes de puntos</strong> nunca se suben a ningún servidor. El análisis, el renderizado y el parseo se ejecutan en tu navegador para garantizar privacidad y seguridad, crucial para proyectos sensibles y comerciales.'
    },
    {
      question: '¿Puedo exportar imágenes del resultado?',
      answer:
        'Sí. Nuestra <strong>herramienta de visualización</strong> permite exportar la vista actual como una imagen PNG de alta calidad. Guarda capturas desde distintos ángulos y modos de color para informes, presentaciones o más <strong>análisis de datos de nubes de puntos</strong>.'
    }
  ],
  tutorialTitle: 'Guía de Uso',
  steps: [
    {
      title: 'Elige un archivo de nube de puntos',
      description:
        'Haz clic en “Seleccionar archivo” o arrastra y suelta tu <strong>archivo de nube de puntos LIDAR</strong> en el área de carga. Los formatos de <strong>datos 3D</strong> admitidos incluyen LAS, XYZ, PLY, PCD y TXT.',
      note: 'Se recomiendan archivos inferiores a 100 MB para un mejor rendimiento'
    },
    {
      title: 'Espera el análisis',
      description:
        'El sistema analizará tu <strong>archivo de nube de puntos</strong>, mostrando el progreso y la información del archivo. Al finalizar, los datos se cargarán automáticamente en el visor 3D.',
      note: 'El tiempo depende del tamaño y complejidad del archivo'
    },
    {
      title: 'Controles de navegación 3D',
      description:
        'Usa el ratón para navegar en 3D: <strong>arrastre con botón izquierdo</strong> para rotar, <strong>botón derecho</strong> para desplazar y <strong>rueda</strong> para zoom. Estos controles intuitivos te permiten ver los <strong>datos de nubes de puntos</strong> desde cualquier ángulo.',
      note: 'En dispositivos móviles se admiten gestos táctiles'
    },
    {
      title: 'Ajusta la visualización',
      description:
        'Utiliza el panel derecho para ajustar: modo de coloración (elevación, intensidad, clasificación, RGB), tamaño y densidad de puntos, y animación. Estos ajustes facilitan un análisis más eficaz de los <strong>datos LIDAR</strong>.',
      note: 'Modos de color distintos se adaptan a necesidades de análisis diferentes'
    },
    {
      title: 'Consulta las estadísticas',
      description:
        'Revisa las <strong>estadísticas de la nube de puntos</strong> en el panel de información: número total de puntos, rango de coordenadas y formato del archivo. Son relevantes para la <strong>evaluación de la calidad de los datos</strong>.',
      note: 'Las estadísticas se actualizan en tiempo real'
    },
    {
      title: 'Exporta resultados',
      description:
        'Cuando estés satisfecho, haz clic en “Exportar imagen” para guardar la <strong>visualización 3D</strong> como PNG para informes o análisis posteriores.',
      note: 'La imagen exportada conserva la vista y configuración actuales'
    }
  ],
  successTitle: '¡Listo!',
  successContent:
    '¡Excelente! Ahora sabes utilizar el Visor de Nubes de Puntos LIDAR para una visualización y análisis 3D eficientes.',
  relatedToolsTitle: 'Herramientas Relacionadas',
  relatedTools: [
    {
      name: 'Convertidor de Coordenadas',
      description:
        'Convierte coordenadas geográficas entre sistemas como WGS-84, GCJ-02, BD-09, Web Mercator y UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'Reproducción de Rutas GPS',
      description:
        'Visualiza y reproduce rutas GPS desde varios formatos (GPX, KML, GeoJSON, CSV).',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Proyección de Gauss',
      description:
        'Convierte entre coordenadas de proyección de Gauss y coordenadas geográficas (latitud/longitud)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    }
  ],
  referencesTitle: 'Recursos de Referencia',
  references: [
    {
      name: 'Especificación del Formato LAS de ASPRS',
      description: 'Estándar oficial LAS de la Sociedad Americana de Fotogrametría y Teledetección',
      url: 'https://www.asprs.org/divisions-committees/lidar-division/laser-las-file-format-exchange-activities'
    },
    {
      name: 'Documentación Oficial de WebGL',
      description: 'Documentación y buenas prácticas oficiales de la biblioteca de gráficos web',
      url: 'https://www.khronos.org/webgl/'
    },
    {
      name: 'Point Cloud Library (PCL)',
      description: 'Documentación y tutoriales oficiales de la biblioteca de procesamiento de nubes de puntos',
      url: 'https://pointclouds.org/'
    }
  ]
};