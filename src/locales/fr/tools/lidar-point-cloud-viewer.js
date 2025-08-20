export default {
  name: 'Visionneuse de nuage de points LIDAR - Outil en ligne de visualisation 3D',
  description:
    'Visionneuse LIDAR en ligne gratuite, compatible avec les formats LAS, XYZ, PLY, PCD. Propose une visualisation 3D, plusieurs modes de coloration, une navigation interactive et des fonctions d’analyse des données',
  inputTitle: 'Fichier de nuage de points en entrée',
  outputTitle: 'Vue 3D du nuage de points',
  dragTip: 'Glissez-déposez un fichier de nuage de points ici ou cliquez pour téléverser',
  supported: 'Formats pris en charge : LAS, XYZ, PLY, PCD, TXT',
  loadFromUrl: 'Charger depuis une URL',
  load: 'Charger',
  loadSample: 'Charger des données d’exemple',
  coloringMode: 'Mode de coloration',
  elevation: 'Coloration par altitude',
  intensity: 'Coloration par intensité',
  classification: 'Coloration par classification',
  rgb: 'Coloration RGB',
  pointSize: 'Taille des points',
  pointDensity: 'Densité des points',
  enableAnimation: 'Activer l’animation',
  showTrajectory: 'Afficher la trajectoire',
  showSensorData: 'Afficher les données du capteur',
  fileInfo: 'Informations du fichier',
  fileName: 'Nom du fichier',
  pointCount: 'Nombre de points',
  fileSize: 'Taille du fichier',
  bounds: 'Étendue',
  resetView: 'Réinitialiser la vue',
  exportImage: 'Exporter l’image',
  loading: 'Chargement...',
  noData: 'Veuillez téléverser un fichier de nuage de points ou charger des données d’exemple',
  controls: {
    rotate: 'Glisser la souris : faire pivoter la vue',
    zoom: 'Molette : zoom',
    pan: 'Shift+glisser : déplacer la vue'
  },
  stats: {
    visible: 'Points visibles',
    total: 'Total de points',
    points: 'points'
  },
  metadata: {
    title: 'Métadonnées LAS',
    systemId: 'Identifiant du système',
    software: 'Logiciel de génération',
    version: 'Version LAS',
    creationDate: 'Date de création',
    pointFormat: 'Format des données de points',
    vlrCount: 'Nombre de VLR',
    returnStats: 'Statistiques des retours',
    extent: 'Emprise spatiale'
  },
  error: {
    loadFailed: 'Échec du chargement du fichier de nuage de points. Veuillez vérifier le format du fichier',
    urlLoadFailed: 'Échec du chargement depuis l’URL. Veuillez vérifier l’adresse'
  },
  disclaimer: {
    title: 'Notes techniques',
    content:
      'Cet outil utilise WebGL pour réaliser la visualisation 3D dans le navigateur. Tout le traitement des données est effectué localement afin de garantir la sécurité des données.',
    formats:
      'Formats pris en charge : LAS (format standard LIDAR), XYZ (nuage de points ASCII), PLY (format de fichier polygonal), PCD (format Point Cloud Data)',
    performance:
      'Conseil de performance : les fichiers volumineux peuvent nécessiter un temps de chargement plus long. L’utilisation d’un navigateur moderne est recommandée pour de meilleures performances.'
  }
};