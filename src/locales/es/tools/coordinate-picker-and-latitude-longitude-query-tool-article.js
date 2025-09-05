export default {
  title: 'Herramienta de Selección de Coordenadas y Consulta de Latitud y Longitud: Tutorial de Consulta de Latitud y Longitud en Línea y Conversión de Coordenadas de Proyección EPSG',
  functionTitle: '¿Qué es la Herramienta de Selección de Coordenadas y Consulta de Latitud y Longitud? ¿Cuáles son sus funciones principales?',
  intro: 'Nuestra <strong>Herramienta de Selección de Coordenadas y Consulta de Latitud y Longitud</strong> integra capacidades de selección de puntos por clic en mapa, <strong>consulta de latitud y longitud</strong>, <strong>conversión de coordenadas de proyección EPSG</strong> y búsqueda y posicionamiento de nombres de lugares, con el objetivo de completar rápida y precisamente la selección de coordenadas y exportación de formatos de coordenadas. A través de esta herramienta en línea, puede completar conversiones desde nombres de lugares a coordenadas, desde WGS84 a varias coordenadas de proyección EPSG en su navegador, mejorando significativamente la eficiencia de anotación topográfica, análisis de ubicación y cartografía.',
  useCasesTitle: 'Escenarios de Aplicación Típicos: Cómo la Herramienta de Selección de Coordenadas y Consulta de Latitud y Longitud Resuelve Problemas',
  useCases: [
    'Selección de sitios de nuevos medios y creación de puntos de registro: Seleccionar rápidamente latitud y longitud y exportar para visualización de mapas',
    'Cartografía GIS y recolección de datos de campo: Hacer clic para seleccionar puntos y luego exportar como CSV/GeoJSON para fácil importación en ArcGIS/QGIS',
    'Selección de sitios gubernamentales y inmobiliarios: Búsqueda de nombres de lugares → coordenadas, recolección con un clic de ubicaciones de sitios candidatos',
    'Posicionamiento logístico y de mantenimiento: Registrar múltiples coordenadas de dispositivos/órdenes de trabajo y exportar centralmente',
    'Educación y investigación: Demostrar diferencias y conversiones entre coordenadas WGS84 y proyección EPSG',
    'Turismo y navegación al aire libre: Guardar latitud longitud y coordenadas de proyección de atracciones y campamentos',
    'Desarrollo y pruebas: Muestras precisas de latitud longitud necesarias para integración frontend/backend',
    'Anotación de contenido multi-regional: Archivos de coordenadas de formato unificado para integración de datos inter-regionales'
  ],
  tipTitle: 'Consejo Profesional:',
  tipContent: 'Al exportar a CSV, se recomienda incluir campos: name, lat, lon, epsg, x, y, time, para procesamiento por lotes conveniente y trazabilidad en QGIS/Excel.',
  conclusion: 'Esta <strong>Herramienta de Selección de Coordenadas y Consulta de Latitud y Longitud</strong> está diseñada para escenarios de topografía, visualización, desarrollo y mantenimiento, soportando <strong>conversión de coordenadas de proyección EPSG</strong>, búsqueda de nombres de lugares y exportación por lotes. Completar consultas de latitud longitud y conversiones de coordenadas en línea puede reducir significativamente los costos de instalación de software y mejorar la eficiencia de colaboración.',
  faqTitle: 'Preguntas Frecuentes (FAQ)',
  faqs: [
    {
      question: '¿Qué conversiones de coordenadas de proyección EPSG soporta la Herramienta de Selección de Coordenadas y Consulta de Latitud y Longitud?',
      answer: 'La herramienta tiene conversiones integradas de WGS84 (EPSG:4326), Web Mercator (EPSG:3857) y CGCS2000 (EPSG:4490), y soporta la entrada de definiciones PROJ4 personalizadas. Después de hacer clic en el mapa, mostrará simultáneamente latitud longitud y coordenadas de proyección EPSG seleccionadas.'
    },
    {
      question: '¿Cómo convertir rápidamente nombres de lugares a coordenadas de latitud longitud y marcarlos en el mapa?',
      answer: 'Después de ingresar un nombre de lugar en el cuadro de búsqueda, use la función de búsqueda de nombres de lugares → coordenadas para recuperar resultados de Nominatim, seleccione un candidato para localizar y agregar como marcador, luego exporte CSV o GeoJSON.'
    },
    {
      question: '¿Cómo copiar resultados de consulta de latitud longitud o exportar archivos de coordenadas por lotes?',
      answer: 'El área de resultados derecha soporta copia con un clic de todo el texto de coordenadas, y puede exportar archivos en formato CSV o GeoJSON, compatible con la mayoría de plataformas GIS/visualización.'
    },
    {
      question: '¿La herramienta de selección de coordenadas soporta dispositivos móviles y tabletas?',
      answer: 'Sí, la interfaz usa diseño de cuadrícula responsiva, <strong>consulta de latitud longitud</strong>, marcado y operaciones de exportación son igualmente fluidas en teléfonos y tabletas.'
    },
    {
      question: '¿Qué se debe tener en cuenta al usar la conversión de coordenadas de proyección EPSG?',
      answer: 'Diferentes datums y proyecciones EPSG tienen diferencias. Si el sistema de coordenadas objetivo no está integrado, proporcione la definición PROJ4 correcta, y verifique las unidades antes de la conversión (latitud longitud en grados, proyecciones a menudo en metros).'
    }
  ],
  tutorialTitle: 'Cómo Usar la Herramienta de Selección de Coordenadas y Consulta de Latitud y Longitud: Pasos de Operación Detallados',
  steps: [
    {
      title: 'Abrir la herramienta y cargar el mapa',
      description: 'El mapa se carga automáticamente después de ingresar a la página de la herramienta. Si la red está limitada, verifique el acceso a la red externa o cambie el entorno de red para asegurar que el mapa base y la búsqueda de nombres de lugares estén disponibles.',
      note: 'El sistema de coordenadas predeterminado del mapa es WGS84, las unidades de latitud longitud son grados.'
    },
    {
      title: 'Buscar nombres de lugares y localizar',
      description: 'Ingrese un nombre de lugar en el cuadro de búsqueda (soporta múltiples idiomas), haga clic en "Buscar", seleccione la ubicación objetivo de los candidatos y localice al centro del mapa.',
      note: 'Los candidatos provienen de OpenStreetMap Nominatim.'
    },
    {
      title: 'Hacer clic en el mapa para seleccionar latitud longitud',
      description: 'Haga clic en cualquier lugar del mapa para registrar automáticamente latitud longitud y coordenadas de proyección EPSG seleccionadas, y mostrar en la lista de resultados de coordenadas a la derecha.',
      note: 'Soporta múltiples clics para marcar múltiples puntos.'
    },
    {
      title: 'Cambiar o personalizar proyección EPSG',
      description: 'Seleccione sistemas de coordenadas comunes (4326/3857/4490) a la izquierda, o complete la definición PROJ4 personalizada, la herramienta convertirá instantáneamente coordenadas de proyección para la selección de puntos posterior.',
      note: 'Cambiar sistemas de coordenadas no cambiará la latitud longitud de puntos existentes, solo afecta los campos de coordenadas de proyección.'
    },
    {
      title: 'Copiar o exportar coordenadas',
      description: 'Seleccione formato de exportación (CSV o GeoJSON), haga clic en "Copiar Todo" o "Exportar Archivo" para usar coordenadas en procesos GIS/visualización/desarrollo.',
      note: 'CSV es adecuado para procesamiento por lotes Excel/QGIS, GeoJSON es conveniente para mapas web y uso de API.'
    },
    {
      title: 'Limpiar o continuar marcando',
      description: 'Si necesita empezar de nuevo, haga clic en "Limpiar Marcadores". Luego continúe buscando o seleccionando puntos para mejorar gradualmente la lista de coordenadas.',
      note: 'Recuerde cambiar sistemas de coordenadas EPSG según sea necesario para cumplir diferentes requisitos de proyecto.'
    }
  ],
  successTitle: '¡Felicidades!',
  successContent: 'Ha aprendido a usar la Herramienta de Selección de Coordenadas y Consulta de Latitud y Longitud para completar la recolección de coordenadas y conversión de coordenadas de proyección EPSG, y ahora puede generar eficientemente archivos de datos estándar para GIS y visualización.',
  relatedToolsTitle: 'Herramientas Relacionadas que Podrían Interesarte',
  relatedTools: [
    {
      name: 'Convertidor de Sistema de Coordenadas',
      description: 'Convertir coordenadas geográficas entre diferentes sistemas de coordenadas, incluyendo WGS-84, GCJ-02, BD-09, Web Mercator y UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'Reproducción de Pista GPS',
      description: 'Visualizar y reproducir pistas GPS de varios formatos de archivo (GPX, KML, GeoJSON, CSV).',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Proyección Gaussiana Directa e Inversa',
      description: 'Herramienta para conversión mutua entre coordenadas de proyección Gaussiana y coordenadas geográficas (latitud longitud)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    },
    {
      name: 'Visor de Nube de Puntos LIDAR',
      description: 'Visor gratuito en línea de nube de puntos LIDAR que soporta formatos LAS, XYZ, PLY, PCD. Proporciona visualización 3D, múltiples modos de coloración, navegación interactiva y funciones de análisis de datos',
      url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
    }
  ],
  referencesTitle: 'Recursos de Referencia',
  references: [
    {
      name: 'OpenStreetMap Nominatim',
      description: 'Servicio de búsqueda de nombres de lugares y geocodificación',
      url: 'https://nominatim.org/'
    },
    {
      name: 'EPSG.io',
      description: 'Buscar sistemas de referencia de coordenadas EPSG y definiciones PROJ4',
      url: 'https://epsg.io/'
    },
    {
      name: 'Documentación de Leaflet',
      description: 'Biblioteca de mapas web ligera',
      url: 'https://leafletjs.com/'
    },
    {
      name: 'Documentación de Proj4',
      description: 'Documentación de biblioteca de transformación de coordenadas',
      url: 'https://proj.org/apps/proj.html'
    }
  ]
}