export default {
  title: 'Outil de Sélection de Coordonnées et de Requête de Latitude et Longitude : Guide de Requête en Ligne de Latitude et Longitude et de Conversion de Coordonnées de Projection EPSG',
  functionTitle: 'Qu\'est-ce que l\'outil de sélection de coordonnées et de requête de latitude et longitude ? Quelles sont ses principales fonctions ?',
  intro: 'Notre <strong>outil de sélection de coordonnées et de requête de latitude et longitude</strong> intègre les capacités de sélection de points par clic sur carte, <strong>requête de latitude et longitude</strong>, <strong>conversion de coordonnées de projection EPSG</strong> et recherche de noms de lieux, visant à compléter rapidement et précisément la sélection de coordonnées et l\'export de format de coordonnées. Avec cet outil en ligne, vous pouvez compléter la conversion des noms de lieux vers les coordonnées, de WGS84 vers diverses coordonnées de projection EPSG dans votre navigateur, améliorant considérablement l\'efficacité de l\'annotation d\'arpentage, de l\'analyse de localisation et de la cartographie.',
  useCasesTitle: 'Scénarios d\'Application Typiques : Comment l\'outil de sélection de coordonnées et de requête de latitude et longitude résout les problèmes',
  useCases: [
    'Sélection de lieux pour nouveaux médias et création de points de check-in : sélectionnez rapidement latitude et longitude et exportez pour la visualisation sur carte',
    'Cartographie SIG et collecte de terrain : cliquez pour sélectionner des points, puis exportez en CSV/GeoJSON, adapté pour l\'import dans ArcGIS/QGIS',
    'Sélection de lieux gouvernementaux et immobiliers : recherche nom de lieu ← coordonnées, collectez en un clic les lieux candidats',
    'Positionnement logistique et de service : enregistrez les coordonnées de plusieurs équipements/ordres de travail et exportez de manière centralisée',
    'Éducation et recherche : démontrez les différences et la conversion entre WGS84 et les coordonnées de projection EPSG',
    'Tourisme et navigation en plein air : sauvegardez latitude et longitude et coordonnées de projection des attractions touristiques et campings',
    'Développement et test : échantillons précis de latitude et longitude nécessaires pour l\'intégration frontend/backend',
    'Annotation de contenu multi-régional : fichiers de coordonnées au format unifié, utiles pour l\'intégration de données inter-régionales'
  ],
  tipTitle: 'Conseil Professionnel :',
  tipContent: 'Lors de l\'export en CSV, il est recommandé d\'inclure les champs : name, lat, lon, epsg, x, y, time, adaptés pour le traitement par lots et le suivi dans QGIS/Excel.',
  conclusion: 'Cet <strong>outil de sélection de coordonnées et de requête de latitude et longitude</strong> est conçu pour de multiples scénarios tels que l\'arpentage, la visualisation, le développement et le service, et prend en charge la <strong>conversion de coordonnées de projection EPSG</strong>, la recherche de noms de lieux et l\'export par lots. Compléter la requête en ligne de latitude et longitude et la conversion de coordonnées peut considérablement réduire le coût d\'installation de logiciels et améliorer l\'efficacité de collaboration.',
  faqTitle: 'Questions Fréquemment Posées (FAQ)',
  faqs: [
    {
      question: 'Quelles conversions de coordonnées de projection EPSG l\'outil de sélection de coordonnées et de requête de latitude et longitude prend-il en charge ?',
      answer: 'L\'outil a des conversions intégrées WGS84 (EPSG:4326), Web Mercator (EPSG:3857) et CGCS2000 (EPSG:4490), et prend en charge la saisie de définitions PROJ4 personnalisées. Après avoir cliqué sur la carte, la latitude et longitude et les coordonnées de projection EPSG sélectionnées seront affichées simultanément.'
    },
    {
      question: 'Comment convertir rapidement les noms de lieux en coordonnées de latitude et longitude et les marquer sur la carte ?',
      answer: 'Après avoir saisi le nom du lieu dans le champ de recherche, utilisez la fonction de recherche nom de lieu ← coordonnées pour obtenir les résultats Nominatim, sélectionnez un candidat pour le positionnement et l\'ajout comme marqueur, puis exportez en CSV ou GeoJSON.'
    },
    {
      question: 'Comment copier les résultats de requête de latitude et longitude ou exporter des fichiers de coordonnées par lots ?',
      answer: 'La zone de résultats de droite prend en charge la copie en un clic de tout le texte de coordonnées, et les fichiers peuvent être exportés au format CSV ou GeoJSON, compatibles avec la plupart des plateformes SIG/visualisation.'
    },
    {
      question: 'L\'outil de sélection de coordonnées prend-il en charge les appareils mobiles et tablettes ?',
      answer: 'Oui, l\'interface utilise une grille responsive, les opérations de <strong>requête de latitude et longitude</strong>, marquage et export sont également fluides sur téléphones et tablettes.'
    },
    {
      question: 'À quoi faut-il faire attention lors de l\'utilisation de la conversion de coordonnées de projection EPSG ?',
      answer: 'Différents systèmes EPSG ont des différences de référence et de projection. Si le système de coordonnées cible n\'est pas intégré, fournissez la définition PROJ4 correcte et vérifiez les unités avant la conversion (latitude et longitude en degrés, projection généralement en mètres).'
    }
  ],
  tutorialTitle: 'Comment utiliser l\'outil de sélection de coordonnées et de requête de latitude et longitude : Étapes détaillées d\'opération',
  steps: [
    {
      title: 'Ouvrir l\'outil et charger la carte',
      description: 'Après être entré sur la page de l\'outil, la carte se charge automatiquement. Si le réseau est limité, vérifiez l\'accès au réseau externe ou changez d\'environnement réseau pour assurer la disponibilité de la carte de base et de la recherche de noms de lieux.',
      note: 'Le système de coordonnées de la carte par défaut est WGS84, unités de latitude et longitude en degrés.'
    },
    {
      title: 'Recherche de noms de lieux et positionnement',
      description: 'Saisissez le nom du lieu dans le champ de recherche (support multilingue), cliquez sur "Rechercher", sélectionnez l\'emplacement cible parmi les candidats et positionnez au centre de la carte.',
      note: 'Candidats provenant d\'OpenStreetMap Nominatim.'
    },
    {
      title: 'Cliquer sur la carte pour sélectionner latitude et longitude',
      description: 'Cliquez n\'importe où sur la carte, enregistrez automatiquement la latitude et longitude et les coordonnées de projection EPSG sélectionnées, et affichez dans la liste de résultats de coordonnées à droite.',
      note: 'Prend en charge les clics multiples pour marquer plusieurs points.'
    },
    {
      title: 'Changer ou personnaliser la projection EPSG',
      description: 'Sélectionnez le système de coordonnées commun (4326/3857/4490) à gauche ou remplissez la définition PROJ4 personnalisée, l\'outil convertit instantanément les coordonnées de projection pour la sélection de points ultérieure.',
      note: 'Changer le système de coordonnées ne modifiera pas la latitude et longitude des points existants, n\'affectera que le champ des coordonnées de projection.'
    },
    {
      title: 'Copier ou exporter les coordonnées',
      description: 'Sélectionnez le format d\'export (CSV ou GeoJSON), cliquez sur "Copier tout" ou "Exporter fichier", pour utiliser les coordonnées dans les opérations SIG/visualisation/développement.',
      note: 'CSV adapté pour le traitement par lots dans Excel/QGIS, GeoJSON adapté pour les cartes web et l\'utilisation d\'API.'
    },
    {
      title: 'Effacer ou continuer le marquage',
      description: 'Si vous devez recommencer, cliquez sur "Effacer marqueurs". Puis continuez la recherche ou la sélection de points pour améliorer progressivement la liste de coordonnées.',
      note: 'N\'oubliez pas de changer le système de coordonnées EPSG selon les besoins pour répondre aux exigences de différents projets.'
    }
  ],
  successTitle: 'Félicitations !',
  successContent: 'Vous avez appris à utiliser l\'outil de sélection de coordonnées et de requête de latitude et longitude pour compléter la collecte de coordonnées et la conversion de coordonnées de projection EPSG, et pouvez maintenant produire efficacement des fichiers de données standard pour SIG et visualisation.',
  relatedToolsTitle: 'Outils Connexes qui Pourraient Vous Intéresser',
  relatedTools: [
    {
      name: 'Convertisseur de Système de Coordonnées',
      description: 'Convertir les coordonnées géographiques entre différents systèmes de coordonnées, y compris WGS-84, GCJ-02, BD-09, Web Mercator et UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'Lecture de Trace GPS',
      description: 'Visualiser et lire les traces GPS à partir de divers formats de fichiers (GPX, KML, GeoJSON, CSV).',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Projection Gaussienne Directe et Inverse',
      description: 'Outil de conversion mutuelle entre coordonnées de projection gaussienne et coordonnées géographiques (latitude et longitude)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    },
    {
      name: 'Visualiseur de Nuage de Points LIDAR',
      description: 'Visualiseur gratuit en ligne de nuage de points LIDAR, prenant en charge les formats LAS, XYZ, PLY et PCD. Fournit visualisation 3D, modes de couleur multiples, navigation interactive et fonctions d\'analyse de données',
      url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
    }
  ],
  referencesTitle: 'Sources de Référence',
  references: [
    {
      name: 'OpenStreetMap Nominatim',
      description: 'Service de recherche de noms de lieux et de géocodage',
      url: 'https://nominatim.org/'
    },
    {
      name: 'EPSG.io',
      description: 'Recherche de systèmes de référence de coordonnées EPSG et définitions PROJ4',
      url: 'https://epsg.io/'
    },
    {
      name: 'Documentation Leaflet',
      description: 'Bibliothèque de cartes web légère',
      url: 'https://leafletjs.com/'
    },
    {
      name: 'Documentation Proj4',
      description: 'Documentation de la bibliothèque de conversion de coordonnées',
      url: 'https://proj.org/apps/proj.html'
    }
  ]
}