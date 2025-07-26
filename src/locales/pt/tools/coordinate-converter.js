export default {
  name: 'Conversor de Sistemas de Coordenadas',
  description: 'Converta coordenadas geográficas entre diferentes sistemas, incluindo WGS-84, GCJ-02, BD-09, Web Mercator e UTM',
  title: 'Conversor de Sistemas de Coordenadas - Transforme entre WGS84, GCJ02, BD09 e outros',
  metaDescription: 'Conversor de coordenadas online gratuito para transformar entre sistemas WGS-84, GCJ-02 (coordenadas chinesas), BD-09 (coordenadas Baidu), Web Mercator e UTM. Sem necessidade de instalação.',

  seo: {
    title: 'Ferramenta de Conversão de Coordenadas | Conversor de Sistemas Geográficos',
    description: 'Ferramenta online gratuita para conversão entre diferentes sistemas de coordenadas geográficas como WGS-84, GCJ-02 (China), BD-09, Web Mercator e projeção UTM.'
  },

  labels: {
    sourceSystem: 'Sistema de origem',
    targetSystem: 'Sistema de destino',
    latitude: 'Latitude',
    longitude: 'Longitude',
    x: 'Coordenada X (Este)',
    y: 'Coordenada Y (Norte)',
    results: 'Resultados da conversão',
    formatted: 'Coordenadas formatadas',
    mapPreview: 'Visualização no mapa',
    batchConversion: 'Conversão em lote',
    batchInput: 'Inserir coordenadas (um par por linha)',
    inputFormat: 'Formato de entrada',
    batchResults: 'Resultados da conversão'
  },

  placeholders: {
    latitude: 'Insira a latitude (ex: 39.909187)',
    longitude: 'Insira a longitude (ex: 116.397451)',
    x: 'Insira coordenada X (ex: 12959167.71)',
    y: 'Insira coordenada Y (ex: 4825908.23)',
    batchInput: 'Insira coordenadas, um par por linha\nexemplo:\n39.909187, 116.397451\n31.230416, 121.473701'
  },

  buttons: {
    convert: 'Converter coordenadas',
    converting: 'Convertendo...',
    swap: 'Trocar sistemas',
    reset: 'Redefinir',
    batchConvert: 'Converter em lote',
    batchConverting: 'Convertendo em lote...',
    copyResults: 'Copiar resultados',
    exportCsv: 'Exportar como CSV',
    loadExample: 'Carregar exemplo',
    loadBatchExample: 'Carregar exemplo em lote'
  },

  formats: {
    latlon: 'Latitude Longitude (separadas por espaço)',
    lonlat: 'Longitude Latitude (separadas por espaço)',
    latlon_comma: 'Latitude, Longitude (separadas por vírgula)',
    lonlat_comma: 'Longitude, Latitude (separadas por vírgula)',
    latLng: '{lat}, {lng}',
    xy: '{x}, {y}'
  },

  messages: {
    copied: 'Copiado para a área de transferência',
    noCoordinates: 'Por favor, insira coordenadas para conversão',
    batchSuccess: 'Todas coordenadas convertidas com sucesso'
  },

  errors: {
    invalidCoordinates: 'Valor de coordenada inválido',
    conversionFailed: 'Falha na conversão',
    copyFailed: 'Falha ao copiar para área de transferência',
    invalidFormat: 'Formato de coordenada inválido',
    batchFailed: 'Falha na conversão de algumas coordenadas'
  },

  sections: {
    tips: {
      title: 'Dicas de conversão',
      item1: 'WGS-84 é o padrão global usado por GPS e Google Maps fora da China',
      item2: 'GCJ-02 é o sistema de coordenadas exigido por lei para mapas na China continental',
      item3: 'BD-09 é usado especificamente pelos serviços de mapas Baidu',
      item4: 'Web Mercator é usado pela maioria dos aplicativos de mapas na web'
    },
    about: {
      title: 'Sobre sistemas de coordenadas',
      wgs84: 'WGS-84 (Sistema Geodésico Mundial 1984) é o sistema de referência usado pelo GPS, sendo o padrão internacional para mapas e posicionamento.',
      gcj02: 'GCJ-02 é o sistema oficial de coordenadas exigido por lei na China continental. Ele aplica um algoritmo de criptografia às coordenadas WGS-84, causando deslocamento por razões de segurança.',
      bd09: 'BD-09 é o sistema usado pelos serviços de mapas Baidu, aplicando uma conversão adicional às coordenadas GCJ-02 para maior criptografia.',
      webmercator: 'Web Mercator (EPSG:3857) é uma projeção cilíndrica usada por muitos serviços de mapas web. Ele representa a Terra como plana com coordenadas em metros, ideal para visualização web.',
      utm: 'UTM (Universal Transversa de Mercator) divide a Terra em 60 zonas globais. As coordenadas são expressas em metros como distâncias leste e norte em relação à origem de cada zona.',
      dms: 'Graus-Minutos-Segundos (DMS) é a forma tradicional de representar coordenadas geográficas, dividindo em graus (°), minutos (′) e segundos (″).',
      epsg3857: 'EPSG:3857 é o identificador oficial da projeção Web Mercator, usada pelos principais aplicativos de mapas web. Ele projeta a Terra elipsoidal em um plano para exibição em telas.',
      amap: 'O sistema AutoNavi é idêntico ao GCJ-02, exigido pelo governo chinês para mapas na China continental, aplicando complexo algoritmo de criptografia para deslocar coordenadas WGS-84.',
      cgcs2000: 'Sistema Geodésico Nacional Chinês 2000 (CGCS2000) é o sistema nacional de coordenadas estabelecido pela China em 2000. É muito similar ao WGS-84, com pequenas diferenças.',
      lambert: 'Projeção Cônica Conforme de Lambert preserva ângulos e formas em áreas pequenas. É comumente usada para mapas de latitudes médias como países, estados ou continentes.',
      miller: 'Projeção Cilíndrica de Miller é uma modificação da projeção de Mercator que reduz distorções em altas latitudes, sendo útil para mapas mundiais.',
      polar: 'Coordenadas polares representam posições como distância de um ponto de referência (polo) e ângulo de uma direção de referência. Útil para mapeamento de regiões polares.',
      dkk: 'Projeção DKK (Delin-Kashi-Kunming) é uma projeção cônica específica da China, usada em alguns mapeamentos nacionais para minimizar distorções em todo o país.'
    },
  },

  export: {
    filename: 'Conversao_Coordenadas',
    originalLat: 'Latitude original',
    originalLng: 'Longitude original',
    convertedLat: 'Latitude convertida',
    convertedLng: 'Longitude convertida'
  },

  systems: {
    wgs84: {
      name: 'WGS-84 (Coordenadas GPS)',
      description: 'Sistema Geodésico Mundial 1984, usado por GPS e maioria dos aplicativos de mapas internacionais'
    },
    gcj02: {
      name: 'GCJ-02 (Sistema Chinês)',
      description: 'Sistema de coordenadas obrigatório na China. Aplica algoritmo de criptografia às coordenadas WGS-84, causando deslocamento por razões de segurança.'
    },
    bd09: {
      name: 'BD-09 (Sistema Baidu)',
      description: 'Sistema usado pelos mapas e serviços Baidu, aplicando conversão adicional às coordenadas GCJ-02 para maior criptografia.'
    },
    webmercator: {
      name: 'Web Mercator (EPSG:3857)',
      description: 'Projeção cilíndrica usada por muitos serviços de mapas web. Representa a Terra como plana com coordenadas em metros, ideal para visualização web.'
    },
    utm: {
      name: 'UTM (Universal Transversa de Mercator)',
      description: 'Sistema global que divide a Terra em 60 zonas. Coordenadas em metros como distâncias leste e norte em relação à origem de cada zona.'
    },
    dms: {
      name: 'Graus-Minutos-Segundos (DMS)',
    },
    epsg3857: {
      name: 'EPSG:3857',
    },
    amap: {
      name: 'Sistema AutoNavi',
    },
    cgcs2000: {
      name: 'Sistema Geodésico Nacional CGCS2000',
    },
    lambert: {
      name: 'Projeção Lambert',
    },
    miller: {
      name: 'Projeção Miller',
    },
    polar: {
      name: 'Coordenadas Polares',
    },
    dkk: {
      name: 'Projeção Delin-Kashi-Kunming',
    }
  }
};