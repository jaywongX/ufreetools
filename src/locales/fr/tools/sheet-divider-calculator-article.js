export default {
    title: 'Guide du Calculateur de Division de Cartes - Outil de Requête de Numéros de Feuilles de Carte en Ligne',
    functionTitle: 'Qu\'est-ce que le Calculateur de Division de Cartes et à quoi sert-il?',
    intro: 'Notre <strong>Calculateur de Division de Cartes</strong> est un puissant outil en ligne qui calcule rapidement et précisément les numéros de feuilles de carte basés sur les coordonnées de latitude et longitude. L\'outil prend en charge plusieurs échelles (y compris 1:500, 1:1000, 1:50000, etc.) et fournit des fonctionnalités de calcul par lot et de visualisation de grille de feuilles. En utilisant notre <strong>outil de requête de numéros de feuilles de carte</strong>, vous pouvez facilement traiter de grandes quantités de données de coordonnées et exporter les résultats au format Excel ou PDF.',

    useCasesTitle: 'Applications Courantes du Calculateur de Division de Cartes',
    useCases: [
        'Gestion et numérotation des feuilles de carte dans les projets d\'arpentage et de cartographie',
        'Organisation des données spatiales dans les projets de systèmes d\'information géographique (SIG)',
        'Division de feuilles dans la planification territoriale et la conception urbaine',
        'Division des zones de travail dans les explorations géologiques et les relevés de ressources',
        'Production de cartes militaires et division du champ de bataille',
        'Traitement de données géographiques à grande échelle dans les projets de recherche'
    ],

    tipTitle: 'Conseil Professionnel:',
    tipContent: 'Lors de la division de cartes pour de grandes zones, il est recommandé d\'utiliser des zones de 3 degrés pour une précision plus élevée, tandis que des zones de 6 degrés peuvent être utilisées pour les petites zones afin de simplifier les calculs.',

    conclusion: 'Le <strong>Calculateur de Division de Cartes</strong> est extrêmement utile pour les ingénieurs géomètres, les professionnels du SIG, les urbanistes et toute personne ayant besoin de traiter des données géospatiales. En utilisant notre outil, vous pouvez économiser un temps considérable sur les calculs manuels, éviter les erreurs de numérotation et améliorer l\'efficacité du travail. Notre outil rend le processus de division de cartes simple et efficace, sans nécessiter l\'installation de logiciels professionnels.',

    faqTitle: 'Questions Fréquemment Posées',
    faqs: [
        {
            question: 'Quelles échelles sont prises en charge par le Calculateur de Division de Cartes?',
            answer: 'Notre <strong>Calculateur de Division de Cartes en ligne</strong> prend en charge diverses échelles courantes de 1:500 à 1:1000000, y compris 1:500, 1:1000, 1:2000, 1:5000, 1:10000, 1:25000, 1:50000, 1:100000, 1:250000, 1:500000 et 1:1000000. Vous pouvez choisir l\'échelle appropriée selon vos besoins spécifiques.'
        },
        {
            question: 'Que sont les zones de 3 degrés et les zones de 6 degrés?',
            answer: 'Les zones de 3 degrés et les zones de 6 degrés sont deux méthodes de zonage dans la projection de Gauss-Krüger. Les zones de 6 degrés commencent à 0° de longitude est, chaque zone couvrant 6°, divisant le globe en 60 zones. Les zones de 3 degrés commencent à 1,5° de longitude est, chaque zone couvrant 3°, divisant le globe en 120 zones. Les zones de 3 degrés offrent une précision plus élevée et sont adaptées à la cartographie à grande échelle; les zones de 6 degrés couvrent des zones plus larges et sont adaptées à la cartographie à petite échelle.'
        },
        {
            question: 'Comment calculer les numéros de feuilles de carte pour plusieurs points de coordonnées par lot?',
            answer: 'En utilisant notre <strong>fonctionnalité de calcul par lot</strong>, vous pouvez entrer plusieurs points de coordonnées dans la boîte d\'entrée par lot, chaque ligne au format "latitude,longitude,description(optionnelle)". Par exemple: "39.9042,116.4074,Centre de Pékin". Après l\'entrée, cliquez sur le bouton "Calculer la Feuille", et le système calculera automatiquement les numéros de feuilles de carte pour tous les points de coordonnées.'
        },
        {
            question: 'Dans quels formats les résultats de calcul peuvent-ils être exportés?',
            answer: 'Notre outil prend en charge l\'exportation des résultats de calcul aux formats Excel et PDF. Le format Excel est pratique pour un traitement et une analyse ultérieurs des données, tandis que le format PDF est adapté à l\'impression et au partage. Vous pouvez effectuer l\'exportation en cliquant sur le bouton "Exporter vers Excel" ou "Exporter en PDF" en haut de la zone de sortie.'
        },
        {
            question: 'Quel est l\'objectif de la fonctionnalité de visualisation de grille de carte?',
            answer: 'La fonctionnalité de visualisation de grille de carte affiche intuitivement la position et la distribution de tous les points calculés sur la carte. En cliquant sur les points dans la grille, vous pouvez voir des informations détaillées sur ce point. La feuille sélectionnée sera mise en évidence, vous aidant à mieux comprendre les caractéristiques de distribution spatiale des données. Cette fonctionnalité est particulièrement utile pour vérifier les résultats de calcul et effectuer une analyse spatiale.'
        }
    ],

    tutorialTitle: 'Comment Utiliser le Calculateur de Division de Cartes',
    steps: [
        {
            title: 'Entrez les Données de Coordonnées',
            description: 'Entrez les données de coordonnées que vous souhaitez calculer dans la zone d\'entrée à gauche. Vous pouvez entrer un point de coordonnées unique (entrez la latitude et la longitude dans leurs boîtes d\'entrée respectives) ou entrer plusieurs points de coordonnées par lot (entrez dans la boîte d\'entrée par lot, chaque ligne au format "latitude,longitude,description(optionnelle)").',
            note: 'Les formats de coordonnées doivent être en degrés décimaux, par exemple latitude 39.9042, longitude 116.4074.'
        },
        {
            title: 'Définissez les Paramètres de Calcul',
            description: 'Dans la zone des paramètres, sélectionnez l\'échelle appropriée et la méthode de zone de projection. Les échelles courantes incluent 1:500, 1:1000, 1:50000, etc., et les méthodes de zone incluent des zones de 3 degrés ou des zones de 6 degrés.',
            note: 'Pour les grandes échelles (comme 1:500, 1:1000), il est recommandé d\'utiliser des zones de 3 degrés pour une précision plus élevée.'
        },
        {
            title: 'Exécutez le Calcul',
            description: 'Cliquez sur le bouton <strong>"Calculer la Feuille"</strong> pour démarrer le calcul. Le système calculera automatiquement le numéro de feuille de carte et les informations associées pour chaque point en fonction des coordonnées et des paramètres que vous avez définis.',
            note: 'Le processus de calcul est généralement terminé en quelques secondes, même pour de grandes quantités de données.'
        },
        {
            title: 'Visualisez et Analysez les Résultats',
            description: 'Une fois le calcul terminé, les résultats seront affichés dans la zone de sortie à droite. Vous pouvez voir des informations détaillées telles que le numéro de feuille de carte, les coordonnées et l\'échelle pour chaque point. La zone de visualisation de grille de carte montrera la distribution de tous les points sur la carte.',
            note: 'Cliquez sur n\'importe quel élément de résultat ou point dans la grille pour voir des informations détaillées et le mettre en évidence.'
        },
        {
            title: 'Exportez les Résultats',
            description: 'Si vous avez besoin de sauvegarder les résultats, vous pouvez cliquer sur le bouton <strong>"Exporter vers Excel"</strong> ou <strong>"Exporter en PDF"</strong> en haut de la zone de sortie. Le format Excel est pratique pour le traitement des données, tandis que le format PDF est adapté à l\'impression et au partage.',
            note: 'Le fichier exporté contiendra des informations complètes sur tous les résultats de calcul.'
        },
        {
            title: 'Utilisez les Fonctionnalités Avancées',
            description: 'Vous pouvez utiliser le bouton "Charger des Données Exemple" pour expérimenter rapidement les fonctionnalités de l\'outil, ou le bouton "Tout Effacer" pour réinitialiser toutes les entrées et résultats. En cliquant sur différents éléments de résultat, vous pouvez voir leur position dans la grille de carte.',
            note: 'L\'outil fonctionne entièrement dans le navigateur, et vos données ne seront pas téléchargées sur un serveur, assurant la confidentialité et la sécurité.'
        }
    ],

    successTitle: 'Félicitations!',
    successContent: 'Vous avez appris avec succès à utiliser notre Calculateur de Division de Cartes. Vous pouvez maintenant facilement calculer les numéros de feuilles de carte pour n\'importe quel point de coordonnées à utiliser dans l\'arpentage, le SIG, la planification urbaine et divers autres scénarios d\'application.',

    relatedToolsTitle: 'Outils Connexes Qui Pourraient Vous Intéresser',
    relatedTools: [
        {
            name: 'Convertisseur de Coordonnées',
            description: 'Convertir les coordonnées de latitude et longitude entre différents systèmes de coordonnées, prend en charge de nombreux systèmes de projection.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Relecture de Traces GPS',
            description: 'Télécharger et visualiser des données de traces GPS, prend en charge de nombreux formats de fichiers.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Calculateur de Projection Gaussienne',
            description: 'Effectuer des calculs de projection Gauss-Krüger directs et inverses, prend en charge les zones de 3 degrés et 6 degrés.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Générateur de Courbes de Niveau',
            description: 'Créer des cartes de courbes de niveau basées sur des données d\'élévation, prend en charge de nombreux formats de sortie.',
            url: 'https://www.ufreetools.com/tool/elevation-contour-generator'
        }
    ],

    referencesTitle: 'Ressources de Référence',
    references: [
        {
            name: 'Systèmes de Grilles de Cartes Internationaux',
            description: 'Normes internationales pour les grilles de cartes et les systèmes de numérotation de feuilles',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-grids'
        },
        {
            name: 'Projection de Mercator Transverse',
            description: 'Explication détaillée des principes mathématiques derrière les projections UTM/Gauss-Krüger',
            url: 'https://en.wikipedia.org/wiki/Transverse_Mercator_projection'
        },
        {
            name: 'Projections Cartographiques',
            description: 'Guide détaillé des projections cartographiques et des systèmes de coordonnées fourni par les agences gouvernementales australiennes',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-projections'
        }
    ]
}