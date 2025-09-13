export default {
    title: 'Guide d\'utilisation du calculateur de surface et de périmètre - Outil de mesure en ligne de surface et de périmètre de polygones',
    functionTitle: 'Qu\'est-ce que le calculateur de surface et de périmètre et à quoi sert-il ?',
    intro: 'Notre <strong>calculateur de surface et de périmètre</strong> est un outil en ligne puissant qui vous permet de dessiner des polygones sur une carte et de calculer automatiquement leur surface et leur périmètre. L\'outil prend en charge plusieurs changements d\'unités, y compris les mètres carrés, les hectares, les kilomètres carrés et les mu, et fournit un mode de calcul ellipsoïdal terrestre pour des résultats plus précis. Vous pouvez également saisir directement des points de coordonnées pour calculer la surface et le périmètre, et prendre en charge l\'exportation dans plusieurs formats, notamment GeoJSON, KML, images, CSV, TXT et PDF.',

    useCasesTitle: 'Scénarios d\'application courants du calculateur de surface et de périmètre',
    useCases: [
        'Arpentage et évaluation foncière, calcul de la surface et du périmètre des parcelles',
        'Urbanisme et conception, mesure des zones de construction et des espaces publics',
        'Gestion agricole, calcul de la surface des terres agricoles et de la zone d\'irrigation',
        'Évaluation immobilière, mesure des limites de propriétés et de la surface utilisable',
        'Surveillance environnementale, calcul de la zone des zones protégées et des zones affectées',
        'Construction d\'ingénierie, mesure des zones de construction et des besoins en matériaux'
    ],

    tipTitle: 'Conseils professionnels :',
    tipContent: 'Lors de la mesure de grandes zones, il est recommandé d\'utiliser le mode de calcul ellipsoïdal pour obtenir des résultats plus précis. Vous pouvez saisir directement des points de coordonnées pour calculer la surface et le périmètre de zones complexes, prenant en charge plusieurs formats de saisie de coordonnées. Le changement entre différentes unités peut vous aider à afficher les résultats de mesure de la manière la plus appropriée.',

    conclusion: 'Le <strong>calculateur de surface et de périmètre</strong> est très utile pour les géomètres, les urbanistes, les gestionnaires agricoles, les évaluateurs immobiliers et toute personne ayant besoin d\'une mesure de zone précise. En utilisant notre outil, vous pouvez économiser beaucoup de temps de calcul manuel, éviter les erreurs de mesure et mieux comprendre les données grâce aux fonctionnalités de visualisation. Notre outil rend le processus de calcul de surface et de périmètre simple et efficace sans avoir à installer de logiciel professionnel.',

    faqTitle: 'Questions fréquemment posées',
    faqs: [
        {
            question: 'Quels modes de calcul le calculateur de surface et de périmètre prend-il en charge ?',
            answer: 'Notre <strong>calculateur de surface et de périmètre</strong> prend en charge deux modes de calcul : le calcul planaire et le calcul ellipsoïdal. Le calcul planaire convient aux mesures de petites zones avec une vitesse de calcul rapide ; le calcul ellipsoïdal tient compte de l\'impact de la courbure terrestre, convient aux mesures de grandes zones avec des résultats plus précis. Vous pouvez choisir le mode de calcul approprié selon vos besoins spécifiques.'
        },
        {
            question: 'Comment dessiner des polygones sur la carte pour la mesure ?',
            answer: 'En utilisant notre <strong>outil de mesure de surface en ligne</strong>, il vous suffit de sélectionner l\'outil de dessin de polygones dans la boîte à outils de gauche, puis de cliquer sur la carte pour déterminer les sommets du polygone. Double-cliquez sur le dernier sommet pour terminer le dessin, et le système calculera et affichera automatiquement la surface et le périmètre. Vous pouvez également utiliser les outils rectangle et cercle pour dessiner des formes régulières à mesurer.'
        },
        {
            question: 'Quelles unités de surface et de longueur sont prises en charge ?',
            answer: 'Notre outil prend en charge plusieurs unités de surface et de longueur couramment utilisées. Les unités de surface incluent les mètres carrés, les hectares, les kilomètres carrés, les acres et les mu ; les unités de longueur incluent les mètres, les kilomètres et les miles. Vous pouvez changer d\'unité à tout moment pour vous adapter aux différents scénarios d\'utilisation et habitudes régionales, et les résultats de mesure seront mis à jour en temps réel.'
        },
        {
            question: 'Comment utiliser la fonction de saisie de coordonnées ?',
            answer: 'Notre fonction <strong>saisie de coordonnées du calculateur de surface</strong> vous permet de saisir directement des points de coordonnées pour calculer la surface et le périmètre sans dessiner manuellement sur la carte. Vous pouvez utiliser plusieurs formats pour saisir les coordonnées, notamment le format "longitude,latitude", "[longitude,latitude]" ou "longitude latitude", avec un point par ligne. Après avoir saisi au moins 3 points, cliquez sur le bouton "Calculer", et le système créera automatiquement un polygone et calculera sa surface et son périmètre. Ceci est particulièrement utile pour la mesure de zones avec des coordonnées connues.'
        },
        {
            question: 'Comment exporter les résultats de mesure ?',
            answer: 'Après avoir terminé la mesure, vous pouvez exporter les résultats dans plusieurs formats : GeoJSON et KML sont des formats de données spatiales standard qui peuvent être importés dans d\'autres logiciels SIG ; la fonction d\'exportation d\'images peut enregistrer la vue cartographique actuelle sous forme d\'image PNG ; les formats CSV et TXT sont pratiques pour ouvrir et analyser les données dans des logiciels de feuilles de calcul comme Excel ; le format PDF convient à la génération de rapports et de documents officiels. Choisissez le format d\'exportation le plus approprié selon vos besoins.'
        }
    ],

    tutorialTitle: 'Comment utiliser le calculateur de surface et de périmètre',
    steps: [
        {
            title: 'Sélectionner les outils de dessin et le mode de calcul',
            description: 'Avant de commencer la mesure, sélectionnez d\'abord l\'outil de dessin approprié (polygone, rectangle ou cercle) dans la boîte à outils de gauche. Puis sélectionnez le mode de calcul, pour les grandes zones il est recommandé de choisir le calcul ellipsoïdal pour obtenir des résultats plus précis.',
            note: 'Les outils de dessin et le mode de calcul peuvent être changés à tout moment selon les besoins.'
        },
        {
            title: 'Dessiner la zone de mesure sur la carte',
            description: 'Après avoir activé l\'outil de dessin, cliquez sur la carte pour déterminer la limite de la zone. Pour l\'outil polygone, cliquez successivement sur chaque sommet, et double-cliquez sur le dernier sommet pour terminer le dessin. La surface et le périmètre de la zone actuelle seront affichés en temps réel pendant le processus de dessin.',
            note: 'Vous pouvez ajuster la forme de la zone en faisant glisser les sommets, et les résultats de mesure seront mis à jour en temps réel.'
        },
        {
            title: 'Utiliser la fonction de saisie de coordonnées',
            description: 'Si vous avez déjà les données de points de coordonnées de la zone, vous pouvez utiliser directement la fonction de saisie de coordonnées. Dans la zone de saisie de coordonnées, entrez un point de coordonnées par ligne (format : longitude,latitude), puis cliquez sur le bouton "Calculer", et le système créera automatiquement un polygone et calculera sa surface et son périmètre.',
            note: 'Prend en charge plusieurs formats de saisie de coordonnées, notamment "longitude,latitude", "[longitude,latitude]" ou "longitude latitude".'
        },
        {
            title: 'Voir et gérer les résultats de mesure',
            description: 'Dans la liste des résultats sous la zone cartographique de droite, vous pouvez voir la surface et le périmètre de toutes les zones dessinées. Chaque zone a un identifiant de type et des données de mesure correspondants, ce qui facilite la comparaison et l\'analyse.',
            note: 'La liste des résultats est mise à jour en temps réel, affichant la quantité et les données de toutes les zones de mesure actuelles.'
        },
        {
            title: 'Exporter les résultats de mesure',
            description: 'Après avoir terminé la mesure, vous pouvez exporter les résultats dans plusieurs formats, notamment GeoJSON, KML, images, CSV, TXT et PDF. Cliquez sur le bouton d\'exportation dans la boîte à outils et sélectionnez le format correspondant pour terminer l\'opération d\'exportation.',
            note: 'Le fichier exporté contient toutes les informations de mesure, qui peuvent être utilisées pour d\'autres logiciels SIG, l\'analyse de données ou le partage avec d\'autres personnes. Les formats CSV et TXT sont pratiques pour l\'ouverture dans des logiciels de feuilles de calcul, et le format PDF convient aux rapports officiels.'
        }
    ],

    successTitle: 'Félicitations !',
    successContent: 'Vous avez réussi à apprendre comment utiliser notre calculateur de surface et de périmètre. Vous pouvez maintenant facilement dessiner des zones sur la carte et calculer leur surface et leur périmètre, obtenant la meilleure expérience de mesure grâce à plusieurs unités et modes d\'affichage.',

    relatedToolsTitle: 'Outils connexes qui pourraient vous intéresser',
    relatedTools: [
        {
            name: 'Calculateur de ligne de base',
            description: 'Saisir les coordonnées du point de départ et d\'arrivée pour calculer la longueur et l\'azimut de la ligne de base, prenant en charge l\'analyse de propagation d\'erreur.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        },
        {
            name: 'Calculateur de division de feuille cartographique',
            description: 'Calculer le numéro de feuille cartographique en fonction des coordonnées de longitude et de latitude, prenant en charge plusieurs échelles.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Convertisseur de coordonnées',
            description: 'Convertir les coordonnées de longitude et de latitude entre différents systèmes de coordonnées, prenant en charge plusieurs systèmes de projection.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Convertisseur de temps GNSS',
            description: 'Réaliser la conversion mutuelle entre le temps UTC et les secondes de semaine GPS, le temps BeiDou.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        }
    ],

    referencesTitle: 'Ressources de référence',
    references: [
        {
            name: 'Bibliothèque GeographicLib',
            description: 'Bibliothèque open-source axée sur les calculs géospatiaux de haute précision',
            url: 'https://geographiclib.sourceforge.io/'
        },
        {
            name: 'Bibliothèque de cartes Leaflet',
            description: 'Bibliothèque JavaScript de cartes interactives open-source',
            url: 'https://leafletjs.com/'
        },
        {
            name: 'Bibliothèque d\'analyse spatiale Turf.js',
            description: 'Bibliothèque JavaScript pour l\'analyse géospatiale',
            url: 'https://turfjs.org/'
        },
        {
            name: 'Bibliothèque jsPDF',
            description: 'Bibliothèque JavaScript pour générer des documents PDF côté client',
            url: 'https://github.com/parallax/jsPDF'
        }
    ]
}