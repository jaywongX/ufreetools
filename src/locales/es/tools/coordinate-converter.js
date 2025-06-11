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
  },

  article: {
    title: "Herramienta de conversión de sistemas de coordenadas: Conversión precisa entre diferentes sistemas",
    introduction: "La herramienta de conversión de sistemas de coordenadas es una poderosa herramienta en línea diseñada específicamente para convertir coordenadas geográficas entre diferentes sistemas de coordenadas. Ya sea que sea un profesional GIS, desarrollador o analista de datos geográficos, esta herramienta simplifica el complejo proceso de conversión entre sistemas como WGS-84 (estándar GPS), GCJ-02 (estándar chino), BD-09 (mapas de Baidu), Mercator Web y UTM.",
    
    whyNeeded: {
      title: "¿Por qué es necesario convertir entre diferentes sistemas de coordenadas?",
      p1: "Al trabajar con datos espaciales provenientes de diferentes fuentes o regiones, la conversión entre sistemas de coordenadas es esencial. Diferentes países y servicios de mapas utilizan distintos sistemas de coordenadas por razones legales, históricas o de seguridad. Por ejemplo, los mapas del continente chino están legalmente obligados a usar el sistema GCJ-02 en lugar del estándar global WGS-84, mientras que Baidu Maps utiliza su propio sistema BD-09.",
      p2: "Sin una conversión adecuada, los mapas y datos de ubicación pueden mostrar errores significativos de posición, a veces de hasta cientos de metros. Esta diferencia puede causar problemas graves en aplicaciones desde navegación hasta planificación urbana y servicios de emergencia. La herramienta de conversión de sistemas de coordenadas resuelve este problema crítico, asegurando que los datos de ubicación mantengan su precisión y consistencia en diferentes sistemas de mapas."
    },
    
    systems: {
      title: "Entendiendo los diferentes sistemas de coordenadas",
      
      wgs84: {
        title: "WGS-84 (Sistema Geodésico Mundial)",
        description: "WGS-84 (World Geodetic System 1984) es el sistema de coordenadas de referencia utilizado por los satélites GPS y es también el estándar internacional para mapas y posicionamiento. Sus coordenadas generalmente se expresan como latitud y longitud en grados decimales. Como base del Sistema de Posicionamiento Global, el sistema WGS-84 ocupa una posición central en el intercambio internacional de datos geográficos."
      },
      
      gcj02: {
        title: "GCJ-02 (Sistema oficial chino)",
        description: "GCJ-02, comúnmente conocido como 'sistema de coordenadas marcianas', es el sistema obligatorio requerido por regulaciones gubernamentales para uso en mapas del continente chino. Aplica un algoritmo de cifrado propietario a las coordenadas WGS-84, generando desplazamientos de posición en diferentes lugares. Este sistema es utilizado por Amap, Google Maps (versión china), Apple Maps (versión china) y muchas aplicaciones chinas. Debido a requisitos especiales de seguridad nacional, cualquier aplicación que ofrezca servicios de mapas en el continente chino debe utilizar legalmente el sistema GCJ-02."
      },
      
      bd09: {
        title: "BD-09 (Sistema de coordenadas de Baidu)",
        description: "BD-09 es un sistema de coordenadas propietario de Baidu, específicamente utilizado para mapas y servicios relacionados de Baidu. Aplica transformaciones adicionales al sistema GCJ-02 para mayor cifrado. Cualquier aplicación que interactúe con mapas de Baidu debe utilizar este sistema de coordenadas para lograr una localización precisa. Como uno de los mayores proveedores de servicios de mapas en China, Baidu Maps es ampliamente utilizado en muchas aplicaciones locales, lo que hace crucial entender y convertir correctamente las coordenadas BD-09."
      },
      
      webmercator: {
        title: "Mercator Web (EPSG:3857)",
        description: "Mercator Web, oficialmente denominado EPSG:3857, es una proyección cartográfica cilíndrica comúnmente utilizada por aplicaciones de mapas en Internet como Google Maps y OpenStreetMap. Representa la Tierra como un plano con coordenadas expresadas en metros en lugar de grados. Esta proyección optimiza la visualización en Internet, pero introduce distorsiones notables en altas latitudes. Para desarrolladores que necesitan mostrar mapas en Internet, comprender la proyección Mercator Web y sus conversiones de coordenadas es fundamental."
      },
      
      utm: {
        title: "UTM (Mercator transversal universal)",
        description: "UTM es un sistema basado en cuadrícula que divide el mundo en 60 zonas, cada una con una anchura de 6 grados de longitud. Las coordenadas se expresan como 'este' y 'norte' relativos al origen de cada zona, con unidades en metros. Se utiliza comúnmente en levantamientos topográficos, aplicaciones militares y sistemas GIS que prefieren mediciones métricas. En China, el sistema de coordenadas UTM tiene importantes aplicaciones profesionales en mapeo topográfico y proyectos de ingeniería, especialmente en escenarios que requieren cálculos precisos de distancia."
      }
    },
    
    useCases: {
      title: "Casos comunes de aplicación de la conversión de coordenadas",
      
      case1: {
        title: "Desarrollo de aplicaciones móviles",
        description: "Los desarrolladores que crean aplicaciones basadas en ubicación para uso en diferentes países deben considerar los requisitos regionales de sistemas de coordenadas. Por ejemplo, una aplicación de navegación utilizada tanto en China como en mercados internacionales necesita convertir coordenadas entre WGS-84 y GCJ-02 para mostrar posiciones precisas en sus respectivos mapas. Esto es particularmente importante para comercio electrónico transfronterizo, aplicaciones de viaje internacional y plataformas logísticas globales."
      },
      
      case2: {
        title: "Integración de datos GIS",
        description: "Los proyectos de Sistemas de Información Geográfica (GIS) suelen necesitar combinar datos de múltiples fuentes que utilizan diferentes sistemas de coordenadas. Por ejemplo, integrar imágenes satelitales (generalmente usando WGS-84) con datos de planificación urbana provenientes de China (usando GCJ-02) requiere conversión de coordenadas para asegurar una correcta alineación espacial. En proyectos de construcción inteligente, monitoreo ambiental y planificación regional en China, esta conversión de coordenadas es un paso clave en la integración de datos."
      },
      
      case3: {
        title: "Navegación transfronteriza",
        description: "Las empresas de transporte y logística que operan en áreas fronterizas, especialmente alrededor de China, necesitan convertir coordenadas cuando vehículos o activos cruzan regiones con diferentes estándares de mapas. Esto asegura un seguimiento continuamente preciso sin importar la ubicación. Con el avance de la iniciativa Belt and Road, la demanda de cambio sin fisuras entre sistemas de coordenadas en logística transfronteriza sigue creciendo."
      },
      
      case4: {
        title: "Visualización de datos de mapas",
        description: "Investigadores y analistas que trabajan con conjuntos de datos globales a menudo necesitan convertir coordenadas para asegurar una correcta visualización en varias plataformas de mapas. Por ejemplo, trazar datos de investigación en Baidu Maps requiere convertir coordenadas WGS-84 a BD-09, mientras que visualizar los mismos datos en Google Maps requiere usar las coordenadas WGS-84 originales. En proyectos de investigación internacional que involucran a China, esta capacidad de conversión de coordenadas es particularmente importante."
      }
    },
    
    howToUse: {
      title: "Cómo usar la herramienta de conversión de sistemas de coordenadas",
      introduction: "Nuestra herramienta de conversión de coordenadas hace sencillo convertir entre diferentes sistemas. A continuación se presenta una guía paso a paso para usar eficazmente esta herramienta:",
      
      step1: {
        title: "Seleccione su sistema de coordenadas",
        description: "Primero, seleccione del menú desplegable el sistema de coordenadas original (el sistema en el que están sus coordenadas actuales) y el sistema de coordenadas objetivo (el sistema al que desea convertir). Opciones comunes incluyen convertir desde WGS-84 (del GPS) a GCJ-02 (utilizado en mapas chinos) o desde GCJ-02 (de Amap) a BD-09 (de Baidu Maps)."
      },
      
      step2: {
        title: "Introduzca sus coordenadas",
        description: "Introduzca sus coordenadas en los campos apropiados. Para sistemas de latitud/longitud (WGS-84, GCJ-02, BD-09), introduzca grados decimales. Para sistemas proyectados (Mercator Web, UTM), introduzca valores en metros. Asegúrese de seguir el formato indicado por la herramienta, por ejemplo, las coordenadas de Tiananmen en Beijing son: 39.909187, 116.397451."
      },
      
      step3: {
        title: "Convierta sus coordenadas",
        description: "Haga clic en el botón \"Convertir coordenadas\" para ejecutar la conversión. Los resultados aparecerán debajo, mostrando valores individuales de coordenadas y una cadena formateada que puede copiar con un solo clic. El resultado será preciso hasta seis decimales, suficiente para la mayoría de aplicaciones."
      },
      
      step4: {
        title: "Conversión por lotes (opcional)",
        description: "Para múltiples pares de coordenadas, utilice la sección de conversión por lotes. Introduzca sus coordenadas (una por línea), seleccione el formato de entrada y haga clic en \"Conversión por lotes\" para procesarlas simultáneamente. Luego, podrá exportar los resultados a un archivo CSV para usarlos en otras aplicaciones o análisis posteriores."
      },
      
      example: {
        title: "Ejemplo de conversión",
        description: "Conversión de coordenadas del Palacio Imperial de Beijing:\n\n• WGS-84: 39.916345, 116.397155\n• Convertido a GCJ-02: 39.91748, 116.40382\n• Convertido a BD-09: 39.92373, 116.41029\n\nObserve que hay desplazamientos de cientos de metros entre los sistemas, destacando la importancia de usar el sistema de coordenadas correcto para aplicaciones específicas. En software de navegación, esta diferencia causará errores de posición claramente visibles."
      }
    },
    
    tips: {
      title: "Prácticas recomendadas para la conversión de coordenadas",
      tip1: "Verifique siempre el sistema de coordenadas original de sus datos antes de convertirlos para asegurar precisión. Especialmente al trabajar con datos proporcionados por terceros, conocer su sistema de coordenadas es crucial.",
      tip2: "Para aplicaciones utilizadas en el continente chino, recuerde que usar directamente coordenadas WGS-84 sin conversión en mapas puede causar errores de posición de 100-500 metros, particularmente evidentes en aplicaciones de navegación y localización precisa.",
      tip3: "Cuando trabaje con datos cerca de límites (por ejemplo, Hong Kong/continente chino), preste especial atención a qué sistema de coordenadas se utiliza. Estas áreas suelen ser zonas de transición donde cambian los sistemas de coordenadas.",
      tip4: "Para aplicaciones de alta precisión, considere el uso de bibliotecas de conversión más complejas que tengan en cuenta variaciones locales y parámetros geodésicos. En aplicaciones de ingeniería y topografía profesional, puede requerirse conversión de coordenadas con precisión centimétrica."
    },
    
    faq: {
      title: "Preguntas frecuentes",
      q1: "¿Por qué mis coordenadas GPS no coinciden con mapas chinos?",
      a1: "Los dispositivos GPS proporcionan coordenadas en el sistema WGS-84, mientras que los mapas chinos legalmente deben usar el sistema GCJ-02 con desplazamiento intencional. Esto crea diferencias típicamente de 100-500 metros. Usar esta herramienta de conversión ayuda a alinear sus datos GPS con mapas chinos. Muchos usuarios encuentran este problema al usar dispositivos GPS internacionales para navegación en China.",
      
      q2: "¿Es reversible e invariable la conversión?",
      a2: "Debido a la naturaleza de los algoritmos cifrados, la conversión entre WGS-84 y GCJ-02 o BD-09 no es completamente reversible. Sin embargo, nuestra herramienta implementa los algoritmos más precisos disponibles, minimizando errores, generalmente controlando el error dentro de 1-2 metros en operaciones reversibles. Para la mayoría de aplicaciones comerciales y de consumo, esta precisión es suficiente.",
      
      q3: "¿Qué sistema de coordenadas debería usar mi aplicación?",
      a3: "Depende de su proveedor de mapas y región: Para aplicaciones globales y servicios de Google Maps fuera de China, use WGS-84; para Amap y Google Maps versión china, use GCJ-02; para Baidu Maps, use BD-09; para bibliotecas de mapas web como Leaflet u OpenLayers, use Mercator Web; para aplicaciones que requieran mediciones en metros dentro de una región específica, use UTM. Esto es especialmente importante al desarrollar aplicaciones de servicios de ubicación para el mercado doméstico.",
      
      q4: "¿Qué tan precisa es esta conversión?",
      a4: "La conversión implementada en esta herramienta se basa en los mejores algoritmos públicos disponibles, con precisión típica dentro de 1-2 metros en la mayoría de casos. Sin embargo, los algoritmos cifrados originales de GCJ-02 y BD-09 son propietarios, por lo que pueden haber pequeñas diferencias comparado con conversiones oficiales. Para aplicaciones profesionales que requieran precisión centimétrica, podría considerar soluciones de sistemas geográficos comerciales."
    },
    
    conclusion: {
      title: "Simplifique su trabajo geoespacial con nuestra herramienta de conversión de coordenadas",
      text: "La conversión entre sistemas de coordenadas es un aspecto crucial pero a menudo ignorado al manejar datos geográficos. Nuestra herramienta gratuita en línea elimina la complejidad de este proceso, permitiéndole convertir rápidamente y con precisión entre sistemas como WGS-84, GCJ-02, BD-09, Mercator Web y UTM. Ya sea que esté desarrollando aplicaciones de mapas, analizando datos geográficos o simplemente necesite trazar puntos precisos en diferentes mapas, esta herramienta ofrece una solución directa y efectiva para los desafíos de sistemas de coordenadas. Nuestra herramienta le permite trabajar sin fisuras en el diverso entorno de sistemas de información geográfica mundial."
    },
    
    relatedTools: {
      title: "Herramientas geoespaciales relacionadas",
      tools: [
        {
          name: "Visor GeoJSON",
          description: "Visualice y edite archivos GeoJSON usando nuestra herramienta interactiva de mapas.",
          url: "https://www.ufreetools.com/tools/geojson-viewer" 
        },
        {
          name: "Búsqueda de ubicación IP",
          description: "Use nuestra herramienta de consulta de IP para encontrar la ubicación geográfica de una dirección IP.",
          url: "https://www.ufreetools.com/tools/ip-lookup" 
        }
      ]
    },
    
    externalLinks: {
      intro: "Obtenga más información sobre sistemas de coordenadas desde estas fuentes autoritativas:",
      wikipedia: "Wikipedia: Sistemas de coordenadas geográficas",
      epsg: "EPSG.io Base de datos de sistemas de coordenadas"
    }
  }
}