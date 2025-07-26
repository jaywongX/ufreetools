export default {
  name: 'Convertisseur de systèmes de coordonnées',
  description: 'Convertit les coordonnées géographiques entre différents systèmes, incluant WGS-84, GCJ-02, BD-09, Web Mercator et UTM',
  title: 'Convertisseur de systèmes de coordonnées - Conversion entre WGS84, GCJ02, BD09 etc.',
  metaDescription: 'Convertisseur de coordonnées en ligne gratuit pour transformer les coordonnées entre les systèmes WGS-84, GCJ-02 (Mars), BD-09 (Baidu), Web Mercator et UTM. Aucune installation requise.',

  seo: {
    title: 'Outil de conversion de coordonnées | Convertisseur de systèmes géographiques',
    description: 'Outil en ligne gratuit pour convertir entre différents systèmes de coordonnées géographiques : WGS-84, GCJ-02 (Chine), BD-09, Web Mercator et projection UTM.'
  },

  labels: {
    sourceSystem: 'Système source',
    targetSystem: 'Système cible',
    latitude: 'Latitude',
    longitude: 'Longitude',
    x: 'Coordonnée X (Est)',
    y: 'Coordonnée Y (Nord)',
    results: 'Résultats',
    formatted: 'Coordonnées formatées',
    mapPreview: 'Aperçu carte',
    batchConversion: 'Conversion par lot',
    batchInput: 'Saisie des coordonnées (une paire par ligne)',
    inputFormat: 'Format d\'entrée',
    batchResults: 'Résultats du lot'
  },

  placeholders: {
    latitude: 'Saisir latitude (ex : 39.909187)',
    longitude: 'Saisir longitude (ex : 116.397451)',
    x: 'Saisir X (ex : 12959167.71)',
    y: 'Saisir Y (ex : 4825908.23)',
    batchInput: 'Saisir coordonnées, une paire par ligne\nExemple :\n39.909187, 116.397451\n31.230416, 121.473701'
  },

  buttons: {
    convert: 'Convertir',
    converting: 'Conversion...',
    swap: 'Échanger',
    reset: 'Réinitialiser',
    batchConvert: 'Convertir lot',
    batchConverting: 'Conversion lot...',
    copyResults: 'Copier résultats',
    exportCsv: 'Exporter CSV',
    loadExample: 'Charger exemple',
    loadBatchExample: 'Charger exemple lot'
  },

  formats: {
    latlon: 'Lat Long (espace)',
    lonlat: 'Long Lat (espace)',
    latlon_comma: 'Lat, Long (virgule)',
    lonlat_comma: 'Long, Lat (virgule)',
    latLng: '{lat}, {lng}',
    xy: '{x}, {y}'
  },

  messages: {
    copied: 'Copié dans le presse-papier',
    noCoordinates: 'Veuillez saisir des coordonnées',
    batchSuccess: 'Conversion réussie'
  },

  errors: {
    invalidCoordinates: 'Coordonnées invalides',
    conversionFailed: 'Échec conversion',
    copyFailed: 'Échec copie',
    invalidFormat: 'Format invalide',
    batchFailed: 'Échec partiel'
  },

  sections: {
    tips: {
      title: 'Conseils',
      item1: 'WGS-84 est le standard GPS utilisé hors Chine',
      item2: 'GCJ-02 est obligatoire pour les cartes en Chine',
      item3: 'BD-09 est utilisé par Baidu Maps',
      item4: 'Web Mercator est utilisé par la plupart des apps carto web'
    },
    about: {
      title: 'À propos des systèmes',
      wgs84: 'WGS-84 est le système géodésique mondial utilisé par le GPS.',
      gcj02: 'GCJ-02 est le système officiel chinois avec algorithme de chiffrement.',
      bd09: 'BD-09 est utilisé par Baidu avec transformation supplémentaire.',
      webmercator: 'Web Mercator (EPSG:3857) est une projection cylindrique utilisée en cartographie web.',
      utm: 'UTM divise la Terre en 60 zones avec coordonnées en mètres.',
      dms: 'Degrés Minutes Secondes (DMS) représente les coordonnées traditionnellement.',
      epsg3857: 'EPSG:3857 est l\'identifiant officiel de Web Mercator.',
      amap: 'Le système Gaode est identique à GCJ-02 en Chine.',
      cgcs2000: 'CGCS2000 est le système géodésique national chinois depuis 2000.',
      lambert: 'La projection conique conforme de Lambert préserve les angles.',
      miller: 'La projection Miller est une variante de Mercator pour les cartes mondiales.',
      polar: 'Les coordonnées polaires utilisent distance et angle depuis un point.',
      dkk: 'La projection DKK est spécifique à la Chine pour minimiser les distorsions.'
    },
  },

  export: {
    filename: 'Conversion_coordonnées',
    originalLat: 'Lat_origine',
    originalLng: 'Long_origine',
    convertedLat: 'Lat_convertie',
    convertedLng: 'Long_convertie'
  },

  systems: {
    wgs84: {
      name: 'WGS-84 (GPS)',
      description: 'Système géodésique mondial 1984, utilisé par le GPS'
    },
    gcj02: {
      name: 'GCJ-02 (Mars)',
      description: 'Système chinois avec algorithme de chiffrement'
    },
    bd09: {
      name: 'BD-09 (Baidu)',
      description: 'Système Baidu avec transformation supplémentaire'
    },
    webmercator: {
      name: 'Web Mercator (EPSG:3857)',
      description: 'Projection cylindrique pour applications web'
    },
    utm: {
      name: 'UTM',
      description: 'Système global avec 60 zones en mètres'
    },
    dms: {
      name: 'Degrés Minutes Secondes',
    },
    epsg3857: {
      name: 'EPSG:3857',
    },
    amap: {
      name: 'Système Gaode',
    },
    cgcs2000: {
      name: 'CGCS2000',
    },
    lambert: {
      name: 'Projection Lambert',
    },
    miller: {
      name: 'Projection Miller',
    },
    polar: {
      name: 'Coordonnées polaires',
    },
    dkk: {
      name: 'Projection DKK',
    }
  }
};