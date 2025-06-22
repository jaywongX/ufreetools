export default {
    name: 'Projection Gauss directe/inverse',
    title: 'Projection Gauss directe/inverse',
    description: 'Outil de conversion entre coordonnées projetées Gauss et géographiques (lat/lon)',
    calculationType: 'Type de calcul',
    forward: 'Directe (lat/lon → Gauss)',
    inverse: 'Inverse (Gauss → lat/lon)',
    ellipsoidParameters: 'Paramètres de l\'ellipsoïde',
    ellipsoidType: 'Type d\'ellipsoïde',
    centralMeridian: 'Méridien central (degrés)',
    a: 'Demi-grand axe',
    f: 'Aplatissement',
    projectionParameters: 'Paramètres de projection',
    projectionType: 'Type de fuseau',
    '3degree': 'Fuseau 3°',
    '6degree': 'Fuseau 6°',
    zoneNumber: 'Numéro de fuseau',
    forwardInput: 'Saisie lat/lon',
    latitude: 'Latitude',
    longitude: 'Longitude',
    inverseInput: 'Saisie coordonnées Gauss',
    x: 'Coordonnée X (Nord)',
    y: 'Coordonnée Y (Est)',
    calculate: 'Calculer',
    results: 'Résultats',
    dms: 'Format DMS',
    batchProcessing: 'Traitement par lot',
    inputFormat: 'Format d\'entrée',
    batchForwardFormat: 'Un couple lat,lon par ligne',
    batchInverseFormat: 'Un couple X,Y par ligne',
    processBatch: 'Calcul par lot',
    batchResults: 'Résultats du lot',
    copyAll: 'Tout copier',
    downloadCSV: 'Télécharger CSV',
    copySuccess: 'Copie réussie',
    copyFailed: 'Échec de la copie',
    clear: 'Effacer',
    formula: 'Explications des formules',
    mapView: 'Vue carte',
    dmsInput: 'Saisie DMS',
    dmsInputPlaceholder: '40°26\'46"N 79°58\'56"W',
    parse: 'Parser',
    dmsParseError: 'Erreur de format DMS',
    invalidLatitude: 'Latitude invalide',
    invalidLongitude: 'Longitude invalide',
    invalidX: 'Coordonnée X invalide',
    invalidY: 'Coordonnée Y invalide',
    copyToClipboard: 'Copier dans le presse-papier',
    autoCalculate: 'Calcul automatique',
    formulaExplanation: 'Explication des formules de projection Gauss',
    uploadCSV: 'Importer CSV',
    exportResults: 'Exporter les résultats',
    exportAsGeoJSON: 'Exporter en GeoJSON',
    exportAsKML: 'Exporter en KML',
    exportAsTXT: 'Exporter en TXT',
    mapLayers: 'Couches cartographiques',
    standard: 'Standard',
    satellite: 'Satellite',
    terrain: 'Terrain',
    pointsOnMap: 'Points sur la carte',
    clearPoints: 'Effacer tous les points',
    unitSystem: 'Système d\'unités',
    metric: 'Mètres (m)',
    imperial: 'Pieds (ft)',
    customEllipsoid: 'Ellipsoïde personnalisé',
    saveCustomEllipsoid: 'Sauvegarder l\'ellipsoïde',
    formulaContent: `
      <p>La projection Gauss utilise les formules principales suivantes :</p>
      <h4>Directe (lat/lon → Gauss)</h4>
      <p>Conversion des coordonnées géographiques en coordonnées planes :</p>
      <ul>
        <li>X = m + termes correctifs</li>
        <li>Y = ν·cos(B)·l + termes correctifs</li>
      </ul>
      <h4>Inverse (Gauss → lat/lon)</h4>
      <p>Conversion des coordonnées planes en géographiques :</p>
      <ul>
        <li>B = μ + termes correctifs</li>
        <li>L = L₀₀ + termes correctifs</li>
      </ul>
      <p>Où :</p>
      <ul>
        <li>B : Latitude</li>
        <li>L : Longitude</li>
        <li>L₀₀ : Méridien central</li>
        <li>m : Longueur d'arc méridien</li>
        <li>ν : Rayon de courbure premier vertical</li>
      </ul>
    `,
    close: 'Fermer',
    
    ellipsoids: {
      WGS84: 'Ellipsoïde WGS84',
      Krasovsky: 'Ellipsoïde Krasovsky',
      CGCS2000: 'Ellipsoïde CGCS2000',
      GRS80: 'Ellipsoïde GRS80',
      Beijing54: 'Ellipsoïde Pékin 54',
      Xian80: 'Ellipsoïde Xi\'an 80',
      Custom: 'Ellipsoïde personnalisé'
    },
    
    about: {
      title: 'À propos de la projection Gauss',
      description: 'La projection Gauss est une projection conforme transverse cylindrique, largement utilisée en topographie et cartographie. Elle projette les points d\'un ellipsoïde terrestre sur un plan.',
      forwardTitle: 'Calcul direct (lat/lon → Gauss)',
      forwardDescription: 'Conversion des coordonnées géographiques (lat/lon) en coordonnées planes (X/Y). L\'axe X pointe vers le nord, Y vers l\'est.',
      inverseTitle: 'Calcul inverse (Gauss → lat/lon)',
      inverseDescription: 'Conversion inverse des coordonnées planes en géographiques.',
      parametersTitle: 'Explication des paramètres',
      ellipsoidParam: 'Paramètres de l\'ellipsoïde',
      ellipsoidDescription: 'Modèle mathématique de la forme de la Terre. Différents systèmes géodésiques utilisent différents ellipsoïdes.',
      projectionParam: 'Paramètres de projection',
      projectionDescription: 'La projection Gauss utilise des fuseaux de 3° ou 6°. Le numéro de fuseau détermine la position du méridien central.'
    },
    
    loadExample: 'Charger un exemple',
    customEllipsoidSaved: 'Ellipsoïde personnalisé sauvegardé',
    
    guide: {
      title: 'Guide d\'utilisation',
      forwardTitle: 'Calcul direct (lat/lon → Gauss)',
      step1: 'Sélectionnez "Directe" comme type de calcul',
      step2: 'Choisissez les paramètres d\'ellipsoïde et de fuseau',
      step3: 'Saisissez la latitude et longitude en décimales ou DMS',
      step4: 'Les résultats se mettent à jour automatiquement',
      
      inverseTitle: 'Calcul inverse (Gauss → lat/lon)',
      step5: 'Sélectionnez "Inverse" comme type de calcul',
      step6: 'Saisissez les coordonnées X et Y en mètres',
      step7: 'Consultez les résultats en décimales et DMS',
      
      batchTitle: 'Traitement par lot',
      step8: 'Préparez vos paires de coordonnées (une par ligne)',
      step9: 'Cliquez sur "Calcul par lot" pour tout convertir',
      step10: 'Exportez les résultats en CSV ou copiez-les',
      
      mapTitle: 'Interaction cartographique',
      step11: 'Cliquez sur la carte pour ajouter des points',
      step12: 'Changez de fond cartographique via le menu',
      step13: 'Exportez les points en GeoJSON, KML ou TXT'
    },
    gaussianProjectionPoints: 'Points de projection Gauss',
    point: 'Point',
    gaussianProjection: 'Projection Gauss',
    supportedFormats: 'Formats supportés : CSV, TXT, Excel',
    excelExportNotice: 'Export Excel prêt à être ouvert directement.',
    excelProcessNotice: 'Le traitement Excel n\'est pas entièrement supporté - préférez CSV.',
    exportAsCSV: 'Exporter en CSV',
    exportAsExcel: 'Exporter en Excel',
    excelExportSuccess: 'Export Excel réussi',
    excelExportFailed: 'Échec Excel - basculement vers CSV',
    excelImportSuccess: 'Import Excel réussi',
    excelImportFailed: 'Échec d\'import Excel - essayez CSV',
    units: {
      metric: 'Mètres (m)',
      km: 'Kilomètres (km)',
      imperial: 'Pieds (ft)',
      miles: 'Miles (mi)'
    },
    resetView: 'Réinitialiser la vue carte',
    pointsTotal: 'points au total',
    currentPoint: 'Résultat actuel',
    article: {
      title: "Calculateur de projection Gauss : outil de conversion coordonnées géo/planes",
      introTitle: "Qu'est-ce que la projection Gauss et pourquoi cet outil ?",
      introPara1: "Le <strong>calculateur de projection Gauss</strong> est un outil indispensable pour les géomètres, cartographes et professionnels SIG. Il permet de convertir entre coordonnées géographiques (lat/lon) et coordonnées planes (X/Y) selon la méthode Gauss.",
      introPara2: "Notre <strong>outil de conversion</strong> gère avec précision les calculs directs et inverses. Il supporte plusieurs ellipsoïdes (WGS84, CGCS2000, Krasovsky etc.) et applique automatiquement les formules mathématiques appropriées.",
      
      scenariosTitle: "Cas d'utilisation pratiques",
      scenario1: "<strong>Topographie et cadastre</strong> : Conversion de coordonnées GPS pour les relevés et plans.",
      scenario2: "<strong>Cartographie</strong> : Création de cartes topographiques précises.",
      scenario3: "<strong>SIG</strong> : Intégration de données spatiales dans des référentiels unifiés.",
      scenario4: "<strong>Génie civil</strong> : Conception d'infrastructures avec positionnement précis.",
      scenario5: "<strong>Défense</strong> : Planification militaire et navigation tactique.",
      scenariosConclusion: "La <strong>projection Gauss</strong> est essentielle pour tout besoin de positionnement spatial précis. Notre outil simplifie ce processus mathématique complexe.",
      
      faqTitle: "FAQ sur la projection Gauss",
      faq1q: "Différence entre Gauss et UTM ?",
      faq1a: "Gauss est la base mathématique d'UTM. Principales différences :<ul><li>UTM standardise les fuseaux (6°)</li><li>Gauss permet plus de flexibilité (3° ou 6°)</li><li>Notre <strong>calculateur</strong> offre plus d'options de personnalisation</li></ul>",
      
      faq2q: "Quel ellipsoïde choisir ?",
      faq2a: "Cela dépend de votre région et système :<ul><li><strong>WGS84</strong> : Standard GPS mondial</li><li><strong>CGCS2000</strong> : Système chinois depuis 2000</li><li><strong>Krasovsky/Pékin54</strong> : Historique en Chine/Europe de l'Est</li></ul>",
      
      faq3q: "Quelle précision ?",
      faq3a: "Notre <strong>calculateur</strong> atteint une précision sub-millimétrique pour la plupart des applications. La précision dépend des paramètres saisis.",
      
      faq4q: "Traitement par lot possible ?",
      faq4a: "Oui, notre <strong>convertisseur</strong> gère :<ul><li>Multiples paires de coordonnées</li><li>Import de fichiers CSV/Excel</li><li>Export en CSV, Excel, GeoJSON, KML</li></ul>",
      
      faq5q: "Fuseaux 3° vs 6° ?",
      faq5a: "<ul><li><strong>3°</strong> : Précision accrue pour cartes détaillées</li><li><strong>6°</strong> : Couverture plus large avec légère distorsion</li></ul>",
      
      tutorialTitle: "Guide pas à pas",
      forwardCalcTitle: "Calcul direct (lat/lon → Gauss)",
      step1: "<strong>Sélectionnez</strong> \"Directe\"",
      step2: "<strong>Choisissez</strong> l'ellipsoïde approprié",
      step3: "<strong>Configurez</strong> les paramètres de projection",
      step4: "<strong>Saisissez</strong> latitude/longitude",
      
      inverseCalcTitle: "Calcul inverse (Gauss → lat/lon)",
      step5: "<strong>Sélectionnez</strong> \"Inverse\"",
      step6: "<strong>Utilisez</strong> les mêmes paramètres que pour le calcul direct",
      step7: "<strong>Entrez</strong> X/Y en mètres",
      step8: "<strong>Consultez</strong> les résultats en degrés et DMS",
      
      batchTitle: "Traitement par lot",
      step9: "<strong>Préparez</strong> vos données (une paire par ligne)",
      step10: "<strong>Cliquez</strong> \"Calcul par lot\"",
      step11: "<strong>Exportez</strong> les résultats",
      
      tutorialConclusion: "Avec ce <strong>calculateur</strong>, convertissez facilement entre systèmes de coordonnées.",
      
      relatedToolsTitle: "Outils connexes",
      relatedTool1: "Convertisseur de coordonnées",
      relatedTool1Desc: "Conversion entre systèmes (UTM, MGRS, grilles nationales).",
      relatedTool2: "Visualisateur de traces GPS",
      relatedTool2Desc: "Analyse de traces GPS sur carte interactive.",
      
      referencesTitle: "Références techniques",
      reference1: "Système géodésique mondial 1984 (WGS84) - NGA",
      reference2: "Projection Mercator transverse - Wikipedia",
      reference3: "Système de coordonnées planes 1983 - NGS"
    },
}