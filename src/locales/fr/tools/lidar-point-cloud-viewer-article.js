export default {
  title: 'Visionneuse de nuage de points LIDAR en ligne - Outil gratuit de visualisation 3D',
  functionTitle: 'Présentation des fonctions et cas d’utilisation',
  intro:
    'Notre <strong>visionneuse de nuage de points LIDAR en ligne</strong> est un outil professionnel de visualisation 3D des données de nuages de points, prenant en charge l’affichage et l’analyse en ligne de multiples formats. Cette <strong>visionneuse de nuage de points gratuite</strong> s’appuie sur WebGL : aucune installation n’est requise et le rendu 3D de haute qualité s’effectue directement dans votre navigateur. Que vous soyez ingénieur géomètre, architecte ou spécialiste SIG, cette <strong>visionneuse de données LIDAR</strong> répond à vos besoins professionnels.',
  useCasesTitle: 'Principaux cas d’utilisation',
  useCases: [
    'Topographie : visualiser et analyser des données de scans LiDAR pour les mesures de terrain et le relevé de bâtiments',
    'Conception architecturale : visualiser les nuages de points de bâtiments pour soutenir les workflows BIM',
    'Aménagement urbain : analyser des modèles 3D de ville pour appuyer la planification et la prise de décision smart city',
    'Foresterie : traiter des nuages de points forestiers pour évaluer la couverture végétale et la biomasse',
    'Archéologie : visualiser des scans 3D de sites archéologiques pour la conservation et la recherche',
    'Exploration géologique : analyser des nuages de points de structures géologiques pour la prospection et l’évaluation des risques',
    'Conduite autonome : visualiser des données LiDAR embarquées pour la planification d’itinéraires et la détection d’obstacles',
    'Inspection industrielle : analyser des scans 3D d’équipements pour le contrôle qualité et la détection de défauts'
  ],
  tipTitle: 'Astuce pro',
  tipContent:
    'Notre visionneuse prend en charge les formats principaux (LAS, XYZ, PLY, PCD) et propose plusieurs modes de coloration ainsi que des contrôles interactifs pour analyser les données sous différents angles.',
  conclusion:
    'Avec notre <strong>outil de visualisation de nuages de points en ligne</strong>, vous pouvez prévisualiser et analyser rapidement divers jeux de données LIDAR pour gagner en productivité. Cette <strong>visionneuse 3D</strong> est entièrement gratuite et respecte votre vie privée : tout le traitement s’effectue localement dans votre navigateur.',
  faqTitle: 'Foire aux questions (FAQ)',
  faqs: [
    {
      question: 'Quels formats de fichiers cette visionneuse de nuage de points LIDAR prend-elle en charge ?',
      answer:
        'Notre <strong>visionneuse de nuage de points</strong> prend en charge plusieurs formats majeurs, dont LAS (format standard LIDAR), XYZ (nuage de points ASCII), PLY (Polygon File Format), PCD (Point Cloud Data) et TXT. Ces formats couvrent la plupart des scénarios de <strong>traitement de données LIDAR</strong> et de scan 3D.'
    },
    {
      question: 'Y a-t-il une limite de taille pour les fichiers de nuages de points ?',
      answer:
        'Pour garantir de bonnes performances dans le navigateur, nous recommandons des <strong>fichiers de nuages de points</strong> inférieurs à 100 Mo. Pour les grands ensembles de données, pensez à l’échantillonnage ou au découpage. Notre <strong>visionneuse de nuage de points en ligne</strong> optimise automatiquement le rendu pour maintenir une visualisation 3D fluide.'
    },
    {
      question: 'Comment ajuster l’affichage du nuage de points ?',
      answer:
        'Notre <strong>outil de visualisation 3D</strong> propose plusieurs options : ajuster la taille des points, choisir les modes de coloration (altitude, intensité, classification, RGB), contrôler la densité de points et activer l’animation. Ces fonctions aident à mieux analyser les <strong>données de scans LIDAR</strong>.'
    },
    {
      question: 'Mes données de nuages de points sont-elles en sécurité ?',
      answer:
        'Oui, absolument. Notre <strong>visionneuse LIDAR en ligne</strong> traite tout en local : vos <strong>données de nuage de points</strong> ne sont jamais téléversées sur un serveur. Le parsing, le rendu et l’analyse s’exécutent dans votre navigateur pour garantir la confidentialité et la sécurité, essentielles pour les projets sensibles et commerciaux.'
    },
    {
      question: 'Puis-je exporter des images du résultat ?',
      answer:
        'Oui. Notre <strong>outil de visualisation</strong> permet d’exporter la vue actuelle en image PNG de haute qualité. Enregistrez des captures sous différents angles et modes de coloration pour des rapports, des présentations ou d’autres <strong>analyses de données de nuages de points</strong>.'
    }
  ],
  tutorialTitle: 'Guide d’utilisation',
  steps: [
    {
      title: 'Choisir un fichier de nuage de points',
      description:
        'Cliquez sur « Sélectionner un fichier » ou glissez-déposez votre <strong>fichier de nuage de points LIDAR</strong> dans la zone de téléversement. Les formats de <strong>données 3D</strong> pris en charge sont : LAS, XYZ, PLY, PCD et TXT.',
      note: 'Nous recommandons des fichiers de moins de 100 Mo pour de meilleures performances'
    },
    {
      title: 'Attendre l’analyse',
      description:
        'Le système analysera votre <strong>fichier de nuage de points</strong> en affichant la progression et les informations du fichier. Une fois l’analyse terminée, les données se chargent automatiquement dans la visionneuse 3D.',
      note: 'Le temps de traitement dépend de la taille et de la complexité du fichier'
    },
    {
      title: 'Contrôles de navigation 3D',
      description:
        'Utilisez la souris pour naviguer en 3D : <strong>glisser bouton gauche</strong> pour faire pivoter, <strong>glisser bouton droit</strong> pour déplacer, et la <strong>molette</strong> pour zoomer. Ces contrôles intuitifs permettent de voir les <strong>données de nuage de points</strong> sous tous les angles.',
      note: 'Les gestes tactiles sont pris en charge sur les appareils mobiles'
    },
    {
      title: 'Ajuster l’affichage',
      description:
        'Utilisez le panneau de droite pour régler : mode de coloration (altitude, intensité, classification, RGB), taille et densité des points, et animation. Ces réglages facilitent une analyse plus efficace des <strong>données LIDAR</strong>.',
      note: 'Des modes de coloration différents conviennent à des besoins d’analyse différents'
    },
    {
      title: 'Consulter les statistiques',
      description:
        'Consultez les <strong>statistiques du nuage de points</strong> dans le panneau d’information : nombre total de points, étendue des coordonnées, et format de fichier. Ces informations sont importantes pour <strong>l’évaluation de la qualité des données</strong>.',
      note: 'Les statistiques sont mises à jour en temps réel'
    },
    {
      title: 'Exporter les résultats',
      description:
        'Quand vous êtes satisfait, cliquez sur « Exporter l’image » pour enregistrer la <strong>visualisation 3D</strong> en PNG pour vos rapports ou analyses ultérieures.',
      note: 'L’image exportée conserve la vue et les paramètres actuels'
    }
  ],
  successTitle: 'C’est bon !',
  successContent:
    'Parfait ! Vous savez désormais utiliser la Visionneuse de nuage de points LIDAR pour une visualisation et une analyse 3D efficaces.',
  relatedToolsTitle: 'Outils liés',
  relatedTools: [
    {
      name: 'Convertisseur de coordonnées',
      description:
        'Convertir des coordonnées géographiques entre WGS-84, GCJ-02, BD-09, Web Mercator et UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'Relecture de traces GPS',
      description:
        'Visualiser et rejouer des traces GPS à partir de divers formats (GPX, KML, GeoJSON, CSV).',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Projection de Gauss',
      description:
        'Convertir entre coordonnées de projection de Gauss et coordonnées géographiques (latitude/longitude)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    }
  ],
  referencesTitle: 'Ressources de référence',
  references: [
    {
      name: 'Spécification du format LAS (ASPRS)',
      description: 'Standard officiel LAS de la Société américaine de photogrammétrie et télédétection',
      url: 'https://www.asprs.org/divisions-committees/lidar-division/laser-las-file-format-exchange-activities'
    },
    {
      name: 'Documentation officielle WebGL',
      description: 'Documentation et bonnes pratiques pour la bibliothèque de graphismes Web',
      url: 'https://www.khronos.org/webgl/'
    },
    {
      name: 'Point Cloud Library (PCL)',
      description: 'Documentation et tutoriels officiels de la bibliothèque open source de traitement de nuages de points',
      url: 'https://pointclouds.org/'
    }
  ]
};