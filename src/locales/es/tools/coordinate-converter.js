export default {
  name: 'Convertidor de sistemas de coordenadas',
  description: 'Convierte coordenadas geográficas entre diferentes sistemas de coordenadas, incluyendo WGS-84, GCJ-02, BD-09, Mercator Web y UTM',
  title: 'Convertidor de sistemas de coordenadas - Convierte entre WGS-84, GCJ-02, BD-09, etc.',
  metaDescription: 'Herramienta en línea gratuita para convertir coordenadas entre los sistemas WGS-84, GCJ-02 (coordenadas chinas), BD-09 (coordenadas de Baidu), Mercator Web y UTM. No requiere instalación.',

  seo: {
    title: 'Herramienta de conversión de sistemas de coordenadas | Convertidor de coordenadas geográficas',
    description: 'Herramienta en línea gratuita para convertir coordenadas entre diferentes sistemas geográficos como WGS-84, GCJ-02 (China), BD-09, Mercator Web y proyección UTM.'
  },

  labels: {
    sourceSystem: 'Sistema de coordenadas original',
    targetSystem: 'Sistema de coordenadas destino',
    latitude: 'Latitud',
    longitude: 'Longitud',
    x: 'Coordenada X (este)',
    y: 'Coordenada Y (norte)',
    results: 'Resultados de la conversión',
    formatted: 'Coordenadas formateadas',
    mapPreview: 'Vista previa en mapa',
    batchConversion: 'Conversión por lotes',
    batchInput: 'Introduzca coordenadas (una por línea)',
    inputFormat: 'Formato de entrada',
    batchResults: 'Resultados de la conversión'
  },

  placeholders: {
    latitude: 'Introduzca la latitud (ejemplo: 39.909187)',
    longitude: 'Introduzca la longitud (ejemplo: 116.397451)',
    x: 'Introduzca la coordenada X (ejemplo: 12959167.71)',
    y: 'Introduzca la coordenada Y (ejemplo: 4825908.23)',
    batchInput: 'Introduzca las coordenadas, una por línea\nEjemplo:\n39.909187, 116.397451\n31.230416, 121.473701'
  },

  buttons: {
    convert: 'Convertir coordenadas',
    converting: 'Convirtiendo...',
    swap: 'Intercambiar sistemas',
    reset: 'Restablecer',
    batchConvert: 'Conversión por lotes',
    batchConverting: 'Convirtiendo por lotes...',
    copyResults: 'Copiar resultados',
    exportCsv: 'Exportar a CSV',
    loadExample: 'Cargar ejemplo',
    loadBatchExample: 'Cargar ejemplo por lotes'
  },

  formats: {
    latlon: 'Latitud Longitud (separado por espacio)',
    lonlat: 'Longitud Latitud (separado por espacio)',
    latlon_comma: 'Latitud, Longitud (separado por coma)',
    lonlat_comma: 'Longitud, Latitud (separado por coma)',
    latLng: '{lat}, {lng}',
    xy: '{x}, {y}'
  },

  messages: {
    copied: 'Copiado al portapapeles',
    noCoordinates: 'Por favor introduzca coordenadas para convertir',
    batchSuccess: 'Todas las coordenadas se han convertido correctamente'
  },

  errors: {
    invalidCoordinates: 'Valor de coordenada inválido',
    conversionFailed: 'Fallo en la conversión',
    copyFailed: 'No se pudo copiar al portapapeles',
    invalidFormat: 'Formato de coordenada inválido',
    batchFailed: 'Algunas coordenadas no pudieron convertirse'
  },

  sections: {
    tips: {
      title: 'Consejos de conversión',
      item1: 'WGS-84 es el estándar global utilizado por GPS y mapas internacionales fuera de China',
      item2: 'GCJ-02 es el sistema oficial requerido legalmente en mapas del continente chino',
      item3: 'BD-09 se utiliza específicamente para servicios de mapas de Baidu',
      item4: 'Mercator Web es usado por la mayoría de aplicaciones de mapas en Internet'
    },
    about: {
      title: 'Acerca de los sistemas de coordenadas',
      wgs84: 'WGS-84 (World Geodetic System 1984) es el sistema de referencia utilizado por el Sistema de Posicionamiento Global (GPS) y es el estándar internacional para mapas y posicionamiento.',
      gcj02: 'GCJ-02 es el sistema oficial de coordenadas requerido legalmente en el continente chino. Aplica un algoritmo cifrado a WGS-84 causando desplazamientos de posición por razones de seguridad.',
      bd09: 'BD-09 es el sistema de coordenadas utilizado por Baidu Maps, aplicando transformaciones adicionales al sistema GCJ-02 para mayor cifrado.',
      webmercator: 'Mercator Web (EPSG:3857) es una proyección cilíndrica utilizada por muchas aplicaciones de mapas en Internet. Representa la Tierra como un plano con coordenadas en metros, ideal para visualización web.',
      utm: 'UTM (Universal Transverse Mercator) es un sistema basado en cuadrículas que divide la Tierra en 60 zonas. Las coordenadas se expresan en metros como este y norte relativos al origen de cada zona.',
      dms: 'Grados-minutos-segundos (DMS) es una forma tradicional de representar coordenadas geográficas. En lugar de usar grados decimales, divide las coordenadas en grados (°), minutos (′) y segundos (″).',
      epsg3857: 'EPSG:3857 es el identificador oficial para la proyección Mercator Web, utilizada por principales aplicaciones de mapas en Internet. Proyecta la Tierra elipsoidal sobre un plano para facilitar su visualización en pantalla.',
      amap: 'El sistema de coordenadas de Amap es idéntico a GCJ-02, siendo el sistema requerido legalmente en mapas del continente chino. Aplica complejos algoritmos de cifrado a coordenadas WGS-84 para generar desplazamientos.',
      cgcs2000: 'Sistema Nacional de Coordenadas Geodésicas de China 2000 (CGCS2000) es el sistema nacional de coordenadas establecido en China en el año 2000. Está muy próximo a WGS-84 con solo pequeñas diferencias.',
      lambert: 'La proyección cónica conforme de Lambert preserva ángulos y formas de áreas pequeñas. Se usa comúnmente para mapas de regiones de latitudes medias como países, estados o continentes.',
      miller: 'La proyección cilíndrica de Miller es una modificación de la proyección Mercator que reduce las distorsiones en altas latitudes, adecuada para mapas mundiales.',
      polar: 'El sistema de coordenadas polares representa posiciones como distancia respecto a un punto de referencia (polo) y ángulo respecto a una dirección de referencia. Es útil para cartografía de regiones polares.',
      dkk: 'La proyección DKK (Delin-Kashun-Kunming) es una proyección cónica específica china utilizada para ciertos mapas nacionales, minimizando distorsiones a nivel nacional.'
    }
  },

  export: {
    filename: 'Conversión_de_coordenadas',
    originalLat: 'Latitud original',
    originalLng: 'Longitud original',
    convertedLat: 'Latitud convertida',
    convertedLng: 'Longitud convertida'
  },

  systems: {
    wgs84: {
      name: 'WGS-84 (Coordenadas GPS)',
      description: 'World Geodetic System 1984, utilizado por GPS y la mayoría de aplicaciones internacionales de mapas'
    },
    gcj02: {
      name: 'GCJ-02 (Sistema Marte)',
      description: 'Sistema obligatorio en China. Aplica algoritmos cifrados a coordenadas WGS-84 causando desplazamientos por razones de seguridad.'
    },
    bd09: {
      name: 'BD-09 (Sistema de coordenadas de Baidu)',
      description: 'Sistema utilizado por mapas y servicios de Baidu, aplicando transformaciones adicionales al sistema GCJ-02 para mayor cifrado.'
    },
    webmercator: {
      name: 'Mercator Web (EPSG:3857)',
      description: 'Proyección cilíndrica usada por muchas aplicaciones de mapas en Internet. Representa la Tierra como un plano con coordenadas en metros, ideal para visualización web.'
    },
    utm: {
      name: 'UTM (Mercator transversal universal)',
      description: 'Sistema global basado en cuadrícula que divide la Tierra en 60 zonas. Las coordenadas se expresan en metros como este y norte relativos al origen de cada zona.'
    },
    dms: {
      name: 'Grados-Minutos-Segundos (DMS)'
    },
    epsg3857: {
      name: 'EPSG:3857'
    },
    amap: {
      name: 'Sistema de coordenadas de Amap'
    },
    cgcs2000: {
      name: 'Sistema Nacional de Coordenadas Geodésicas de China 2000'
    },
    lambert: {
      name: 'Proyección Lambert'
    },
    miller: {
      name: 'Proyección Miller'
    },
    polar: {
      name: 'Coordenadas polares'
    },
    dkk: {
      name: 'Proyección DKK'
    }
  }
};