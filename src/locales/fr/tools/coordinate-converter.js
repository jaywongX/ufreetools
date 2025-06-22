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
    },
    
    article: {
      title: "Outil de conversion : Transformation précise entre systèmes de coordonnées",
      introduction: "Cet outil puissant convertit les coordonnées géographiques entre WGS-84 (standard GPS), GCJ-02 (Chine), BD-09 (Baidu), Web Mercator et UTM.",
      
      whyNeeded: {
        title: "Pourquoi convertir entre systèmes ?",
        p1: "La conversion est essentielle pour les données géospatiales multi-sources.",
        p2: "Sans conversion correcte, les erreurs de position peuvent atteindre des centaines de mètres."
      },
      
      systems: {
        title: "Systèmes de coordonnées",
        
        wgs84: {
          title: "WGS-84",
          description: "Standard GPS utilisé internationalement."
        },
        
        gcj02: {
          title: "GCJ-02",
          description: "Système officiel chinois avec décalage algorithmique."
        },
        
        bd09: {
          title: "BD-09",
          description: "Système propriétaire de Baidu Maps."
        },
        
        webmercator: {
          title: "Web Mercator",
          description: "Projection utilisée par Google Maps et OpenStreetMap."
        },
        
        utm: {
          title: "UTM",
          description: "Système en zones utilisé pour les mesures précises."
        }
      },
      
      useCases: {
        title: "Cas d'utilisation",
        
        case1: {
          title: "Développement mobile",
          description: "Applications de navigation nécessitant des conversions pour la Chine."
        },
        
        case2: {
          title: "Intégration SIG",
          description: "Combinaison de données satellite (WGS-84) et urbaines (GCJ-02)."
        },
        
        case3: {
          title: "Navigation transfrontalière",
          description: "Suivi précis des véhicules entre régions avec différents systèmes."
        },
        
        case4: {
          title: "Visualisation cartographique",
          description: "Représentation correcte des données sur différentes plates-formes."
        }
      },
      
      howToUse: {
        title: "Mode d'emploi",
        introduction: "Guide étape par étape pour utiliser l'outil :",
        
        step1: {
          title: "Sélection des systèmes",
          description: "Choisir le système source et cible (ex: WGS-84 vers GCJ-02)."
        },
        
        step2: {
          title: "Saisie des coordonnées",
          description: "Entrer les valeurs décimales ou en mètres selon le système."
        },
        
        step3: {
          title: "Conversion",
          description: "Cliquer pour convertir et obtenir des résultats précis à 6 décimales."
        },
        
        step4: {
          title: "Conversion par lot",
          description: "Traiter plusieurs paires de coordonnées et exporter en CSV."
        },
        
        example: {
          title: "Exemple",
          description: "Conversion de la Cité Interdite :\nWGS-84 → GCJ-02 → BD-09\nNotez le décalage de plusieurs centaines de mètres."
        }
      },
      
      tips: {
        title: "Bonnes pratiques",
        tip1: "Toujours vérifier le système source avant conversion.",
        tip2: "En Chine, utiliser WGS-84 directement peut causer des erreurs de 100-500m.",
        tip3: "Attention aux zones frontalières avec changements de système.",
        tip4: "Pour haute précision, utiliser des bibliothèques spécialisées."
      },
      
      faq: {
        title: "FAQ",
        q1: "Pourquoi mes coordonnées GPS ne correspondent pas aux cartes chinoises ?",
        a1: "À cause du décalage algorithmique imposé par GCJ-02 en Chine.",
        
        q2: "La conversion est-elle réversible sans perte ?",
        a2: "Non totalement réversible à cause des algorithmes propriétaires, mais précision de 1-2m.",
        
        q3: "Quel système utiliser pour mon application ?",
        a3: "Dépend du fournisseur carto : WGS-84 (global), GCJ-02 (Chine), BD-09 (Baidu).",
        
        q4: "Quelle est la précision ?",
        a4: "Précision de 1-2m généralement suffisante pour la plupart des applications."
      },
      
      conclusion: {
        title: "Simplifiez vos travaux géospatiaux",
        text: "Notre outil gratuit élimine la complexité des conversions entre systèmes de coordonnées."
      },
      
      relatedTools: {
        title: "Outils associés",
        tools: [
          {
            name: "Visualiseur GeoJSON",
            description: "Visualiser et éditer des fichiers GeoJSON.",
            url: "https://www.ufreetools.com/tools/geojson-viewer"
          },
          {
            name: "Localisation IP",
            description: "Trouver la position géographique d'une adresse IP.",
            url: "https://www.ufreetools.com/tools/ip-lookup"
          }
        ]
      },
      
      externalLinks: {
        intro: "En savoir plus :",
        wikipedia: "Wikipédia : Systèmes de coordonnées",
        epsg: "Base de données EPSG"
      }
    }
  };