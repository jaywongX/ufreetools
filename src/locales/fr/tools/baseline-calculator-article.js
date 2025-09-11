export default {
    title: 'Guide d\'utilisation du Calculateur de Ligne de Base - Outil en ligne pour le calcul de longueur et d\'azimut de ligne de base de coordonnées',
    functionTitle: 'Qu\'est-ce qu\'un Calculateur de Ligne de Base et quel est son objectif ?',
    intro: 'Notre <strong>Calculateur de Ligne de Base</strong> est un outil professionnel en ligne qui calcule rapidement et précisément la longueur et l\'azimut de la ligne de base entre deux points. Cet outil prend en charge la saisie de variance des coordonnées, peut calculer les résultats de propagation d\'erreur et générer des visualisations d\'ellipse d\'erreur. Il est adapté à l\'ingénierie topographique, aux applications SIG, au génie civil et à la recherche géographique. En utilisant notre <strong>outil de calcul de ligne de base de coordonnées</strong>, vous pouvez facilement traiter de grandes quantités de données de coordonnées et afficher les résultats de manière visuelle intuitive.',

    useCasesTitle: 'Scénarios d\'application courants pour le Calculateur de Ligne de Base',
    useCases: [
        'Mesure de cheminement et ajustement de réseau de contrôle en ingénierie topographique',
        'Analyse de données spatiales et calcul de distance dans les projets SIG',
        'Implantation et mesure en génie civil',
        'Analyse des relations spatiales en recherche géographique',
        'Solution de ligne de base dans les systèmes de positionnement par navigation',
        'Analyse des relations entre points en exploration géologique'
    ],

    tipTitle: 'Conseil professionnel :',
    tipContent: 'Lors de l\'exécution de mesures de haute précision, il est recommandé de saisir des données de variance des coordonnées pour obtenir des résultats d\'analyse d\'erreur plus précis. La fonction de visualisation d\'ellipse d\'erreur peut vous aider à comprendre intuitivement la distribution des erreurs de position des points.',

    conclusion: 'Le <strong>Calculateur de Ligne de Base</strong> est extrêmement utile pour les ingénieurs topographes, les professionnels SIG, les ingénieurs civils et toute personne ayant besoin de traiter des données de coordonnées. En utilisant notre outil, vous pouvez économiser une quantité importante de temps de calcul manuel, éviter les erreurs de calcul et mieux comprendre les données grâce aux fonctionnalités de visualisation. Notre outil rend le processus de calcul de ligne de base simple et efficace, sans nécessiter l\'installation de logiciels professionnels.',

    faqTitle: 'Questions fréquemment posées',
    faqs: [
        {
            question: 'Que sont la longueur de ligne de base et l\'azimut ?',
            answer: 'La <strong>longueur de ligne de base</strong> fait référence à la distance en ligne droite entre deux points, et l\'<strong>azimut</strong> est l\'angle dans le sens des aiguilles d\'une montre du nord vers la ligne de base. En topographie, une ligne de base est un composant fondamental d\'un réseau de contrôle, et sa longueur et son azimut sont des paramètres importants décrivant la relation spatiale entre deux points. En calculant précisément la longueur et l\'azimut de la ligne de base, des données de base fiables peuvent être fournies pour les travaux topographiques ultérieurs.'
        },
        {
            question: 'Comment saisir des données de variance des coordonnées ?',
            answer: 'Lors de l\'utilisation de notre <strong>Calculateur de Ligne de Base</strong>, vous pouvez directement saisir les variances des coordonnées X et Y des points de départ et d\'arrivée en mode de saisie de point unique, ou ajouter des informations de variance après chaque ligne de données en mode de saisie par lots. Le format des données de variance est : point de départ X, point de départ Y, point d\'arrivée X, point d\'arrivée Y, variance du point de départ X, variance du point de départ Y, variance du point d\'arrivée X, variance du point d\'arrivée Y. Après avoir saisi les données de variance, l\'outil calculera automatiquement les résultats de propagation d\'erreur et générera des ellipses d\'erreur.'
        },
        {
            question: 'Que représente l\'ellipse d\'erreur ?',
            answer: 'L\'<strong>ellipse d\'erreur</strong> est un outil graphique représentant la distribution des erreurs de position des points. Les demi-grand et demi-petit axes de l\'ellipse représentent respectivement les directions d\'erreur maximale et minimale, et l\'angle d\'orientation représente la direction du demi-grand axe. Grâce à la visualisation de l\'ellipse d\'erreur, vous pouvez comprendre intuitivement l\'ampleur et la distribution directionnelle des erreurs de position des points, ce qui est très important pour évaluer la précision des mesures et effectuer un contrôle de qualité.'
        },
        {
            question: 'Comment traiter plusieurs calculs de ligne de base par lots ?',
            answer: 'En utilisant notre <strong>fonction de calcul de ligne de base par lots</strong>, vous pouvez saisir plusieurs données de ligne de base ligne par ligne dans la boîte de saisie par lots. Le format de chaque ligne de données est : point de départ X, point de départ Y, point d\'arrivée X, point d\'arrivée Y [, variance du point de départ X, variance du point de départ Y, variance du point d\'arrivée X, variance du point d\'arrivée Y]. Après avoir terminé la saisie, cliquez sur le bouton "Calculer la ligne de base", et le système calculera automatiquement la longueur, l\'azimut et les informations d\'erreur associées pour toutes les lignes de base.'
        },
        {
            question: 'Quel est l\'objectif de la fonction de visualisation de carte ?',
            answer: 'La fonction de visualisation de carte peut afficher intuitivement toutes les lignes de base et points calculés dans un système de coordonnées bidimensionnel. Les points de départ sont représentés par des points verts, les points d\'arrivée par des points rouges, et les lignes de base sont connectées par des lignes bleues. Si des données de variance sont saisies, des ellipses d\'erreur rouges seront également affichées. Cette fonction est particulièrement adaptée pour vérifier la cohérence des données, identifier les valeurs aberrantes et effectuer une analyse des relations spatiales.'
        }
    ],

    tutorialTitle: 'Comment utiliser le Calculateur de Ligne de Base',
    steps: [
        {
            title: 'Sélectionner le mode de saisie',
            description: 'Choisissez le mode de saisie approprié en haut de la zone de saisie gauche : saisie de point unique ou saisie par lots. La saisie de point unique convient au calcul de quelques lignes de base, tandis que la saisie par lots convient au traitement de grandes quantités de données.',
            note: 'Le mode de saisie par lots prend en charge les calculs avec données de variance et offre un formatage plus flexible.'
        },
        {
            title: 'Saisir les données de coordonnées',
            description: 'Saisissez les données de coordonnées selon le mode de saisie sélectionné. En mode de saisie de point unique, saisissez séparément les coordonnées X et Y des points de départ et d\'arrivée ; en mode de saisie par lots, saisissez plusieurs données de ligne de base ligne par ligne, avec chaque ligne au format : point de départ X, point de départ Y, point d\'arrivée X, point d\'arrivée Y.',
            note: 'Si une analyse d\'erreur est nécessaire, les données de variance des coordonnées correspondantes doivent également être saisies.'
        },
        {
            title: 'Exécuter le calcul',
            description: 'Cliquez sur le bouton <strong>"Calculer la ligne de base"</strong> pour démarrer le calcul. Le système calculera automatiquement la longueur et l\'azimut de chaque ligne de base en fonction des données de coordonnées que vous avez saisies, et calculera les résultats de propagation d\'erreur et générera des paramètres d\'ellipse d\'erreur lorsque des données de variance sont saisies.',
            note: 'Le processus de calcul est généralement terminé en quelques secondes, même pour de grandes quantités de données.'
        },
        {
            title: 'Visualiser et analyser les résultats',
            description: 'Une fois le calcul terminé, les résultats s\'afficheront dans la zone de sortie à droite. Vous pouvez consulter des informations détaillées pour chaque ligne de base, y compris la longueur de la ligne de base, l\'azimut, les résultats de propagation d\'erreur et les paramètres d\'ellipse d\'erreur. La zone de visualisation de carte affichera la distribution de toutes les lignes de base et points.',
            note: 'Cliquez sur le bouton "Copier" pour n\'importe quel élément de résultat afin de copier rapidement les résultats de calcul pour cet enregistrement.'
        },
        {
            title: 'Exporter le rapport',
            description: 'Si vous devez enregistrer les résultats, vous pouvez cliquer sur le bouton <strong>"Exporter CSV"</strong> ou <strong>"Exporter TXT"</strong> en haut de la zone de sortie. Le système générera un rapport contenant tous les résultats de calcul, pratique pour l\'impression et le partage.',
            note: 'Le rapport exporté contient des informations de calcul complètes, adaptées à la documentation de projet et aux rapports.'
        }
    ],

    successTitle: 'Félicitations !',
    successContent: 'Vous avez appris avec succès à utiliser notre Calculateur de Ligne de Base. Vous pouvez maintenant facilement calculer la longueur et l\'azimut de la ligne de base entre deux points quelconques, effectuer une analyse d\'erreur et mieux comprendre les données grâce aux fonctionnalités de visualisation.',

    relatedToolsTitle: 'Outils connexes qui pourraient vous intéresser',
    relatedTools: [
        {
            name: 'Convertisseur de Coordonnées',
            description: 'Convertir les coordonnées de latitude et longitude entre différents systèmes de coordonnées, prenant en charge plusieurs systèmes de projection.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Calculateur de Feuilles de Carte',
            description: 'Calculer les numéros de feuilles de carte basés sur les coordonnées de latitude et longitude, prenant en charge plusieurs échelles.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Convertisseur de Temps GNSS',
            description: 'Convertir entre le temps UTC et les secondes de semaine GPS, le temps BeiDou.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        {
            name: 'Calculateur de Projection de Gauss',
            description: 'Effectuer des calculs directs et inverses de projection de Gauss-Krüger, prenant en charge les zones de 3 degrés et 6 degrés.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        }
    ],

    referencesTitle: 'Ressources de référence',
    references: [
        {
            name: 'NOAA - National Geodetic Survey',
            description: 'Références de mesure, systèmes de coordonnées et outils de mesure fournis par le National Geodetic Survey des États-Unis',
            url: 'https://www.ngs.noaa.gov/TOOLS/'
        },
        {
            name: 'Fédération Internationale des Géomètres (FIG)',
            description: 'Normes d\'arpentage, meilleures pratiques et ressources de recherche fournies par la Fédération Internationale des Géomètres',
            url: 'https://www.fig.net/resources/publications/'
        },
        {
            name: 'Journal of Surveying Engineering - Bibliothèque ASCE',
            description: 'Journal académique d\'ingénierie topographique publié par l\'American Society of Civil Engineers, contenant les dernières recherches et méthodes',
            url: 'https://ascelibrary.org/journal/jsued2'
        }
    ]
}