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
  currentPoint: 'Résultat actuel'
};