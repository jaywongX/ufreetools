export default {
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
        url: "https://www.ufreetools.com/tool/geojson-viewer"
      },
      {
        name: "Localisation IP",
        description: "Trouver la position géographique d'une adresse IP.",
        url: "https://www.ufreetools.com/tool/ip-lookup"
      }
    ]
  },
  
  externalLinks: {
    intro: "En savoir plus :",
    wikipedia: "Wikipédia : Systèmes de coordonnées",
    epsg: "Base de données EPSG"
  }
}
