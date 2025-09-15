export default {
    title: 'Guide d\'utilisation du Comparateur de trajectoires de coordonnées - Outil d\'analyse des différences de trajectoires en ligne',
    functionTitle: 'Qu\'est-ce que le Comparateur de trajectoires de coordonnées et à quoi sert-il ?',
    intro: 'Notre <strong>Comparateur de trajectoires de coordonnées</strong> est un outil en ligne puissant qui vous permet de télécharger deux ensembles de données de trajectoires et d\'effectuer une analyse comparative visuelle sur une carte. L\'outil prend en charge la translation, la rotation et le calcul des déviations des trajectoires, calcule automatiquement des indicateurs clés tels que l\'erreur quadratique moyenne (RMSE) et le décalage entre deux ensembles de trajectoires. En affichant deux trajectoires en différentes couleurs avec un effet de comparaison "clignotant" dynamique, les parties différentes sont automatiquement mises en évidence. En utilisant notre <strong>outil d\'analyse des différences de trajectoires</strong>, vous pouvez exporter des rapports de comparaison détaillés contenant des captures d\'écran de carte et des graphiques de statistiques d\'erreur, avec copie des résultats vers le presse-papiers en un clic, répondant aux besoins professionnels en géomètre, navigation et analyse de trajectoires.',

    useCasesTitle: 'Scénarios d\'application courants du Comparateur de trajectoires de coordonnées',
    useCases: [
        'Évaluation de la précision des trajectoires GPS, comparaison des trajectoires mesurées avec les trajectoires de référence',
        'Optimisation des algorithmes de navigation, analyse des différences de trajectoires entre différents algorithmes de planification de routes',
        'Tests de conduite autonome, comparaison des trajectoires de conduite réelles des véhicules avec les trajectoires attendues',
        'Analyse des trajectoires sportives, comparaison des performances de trajectoires de différents athlètes ou phases d\'entraînement',
        'Optimisation de la livraison logistique, analyse des déviations entre les itinéraires de livraison et les chemins optimaux',
        'Validation des données de recherche géographique, évaluation de l\'exactitude et de la cohérence des données de trajectoires'
    ],

    tipTitle: 'Conseils professionnels :',
    tipContent: 'Lors de l\'analyse comparative de trajectoires, il est recommandé d\'utiliser d\'abord des données d\'exemple pour se familiariser avec les fonctions de l\'outil et comprendre la signification des différents indicateurs d\'erreur. Grâce à l\'effet de comparaison "clignotant" dynamique, vous pouvez observer plus intuitivement les différences entre deux trajectoires. Le rapport de comparaison exporté contient des statistiques d\'erreur détaillées et des graphiques visuels, facilitant l\'analyse ultérieure et l\'archivage.',

    conclusion: 'Le <strong>Comparateur de trajectoires de coordonnées</strong> est très utile pour les ingénieurs géomètres, les développeurs d\'algorithmes de navigation, les chercheurs en conduite autonome et toute personne ayant besoin d\'effectuer une analyse de données de trajectoires. En utilisant notre outil d\'analyse des différences de trajectoires, vous pouvez évaluer rapidement et précisément la qualité des données de trajectoires, identifier les déviations de trajectoires et optimiser les performances des algorithmes. Notre outil rend le processus d\'analyse comparative de trajectoires simple et efficace, sans avoir besoin d\'installer de logiciel professionnel.',

    faqTitle: 'Questions fréquemment posées',
    faqs: [
        {
            question: 'Quels formats de fichiers le Comparateur de trajectoires de coordonnées prend-il en charge ?',
            answer: 'Notre <strong>outil de comparaison de trajectoires en ligne</strong> prend en charge plusieurs formats de fichiers de trajectoires courants, notamment GeoJSON, JSON et KML. Ces formats sont largement utilisés dans les logiciels SIG et les appareils GPS, vous permettant d\'importer facilement des données de trajectoires provenant de diverses sources. Après le téléchargement des fichiers, l\'outil analyse automatiquement les points de trajectoire et effectue une analyse comparative.'
        },
        {
            question: 'Comment interpréter la RMSE et les autres indicateurs d\'erreur ?',
            answer: 'Notre <strong>outil d\'analyse des différences de trajectoires</strong> fournit plusieurs indicateurs d\'erreur pour vous aider à évaluer de manière globale les différences de trajectoires. L\'erreur quadratique moyenne (RMSE) est un indicateur couramment utilisé pour mesurer l\'écart global de la trajectoire, des valeurs plus petites indiquant des trajectoires plus proches ; l\'erreur moyenne représente la moyenne arithmétique de toutes les erreurs de points ; l\'erreur maximale affiche le point avec le plus grand écart dans la trajectoire ; l\'écart type reflète le degré de dispersion de la distribution des erreurs. Ces indicateurs utilisés ensemble peuvent évaluer de manière globale la qualité de la trajectoire.'
        },
        {
            question: 'Comment l\'effet de visualisation de la comparaison de trajectoires est-il réalisé ?',
            answer: 'Notre <strong>Comparateur de trajectoires de coordonnées</strong> affiche deux trajectoires en différentes couleurs, l\'une en bleu et l\'autre en rouge. Grâce à un effet "clignotant" dynamique, vous pouvez observer plus intuitivement les différences de trajectoires. Les points avec de grandes différences sont automatiquement mis en évidence, facilitant l\'identification rapide des zones problématiques. L\'interface cartographique prend en charge les opérations de zoom et de panoramique, vous permettant de visualiser en détail la comparaison des trajectoires dans des zones spécifiques.'
        },
        {
            question: 'Quel contenu inclut le rapport de comparaison ?',
            answer: 'Le rapport généré par notre <strong>outil de comparaison de trajectoires</strong> contient des informations riches : 1) Informations de base : noms de fichiers de trajectoire, nombre de points, etc. ; 2) Statistiques d\'erreur : indicateurs clés tels que RMSE, erreur moyenne, erreur maximale et écart type ; 3) Analyse des différences : nombre et distribution des points de différence ; 4) Captures d\'écran de carte : résultats visuels de la comparaison de trajectoires ; 5) Graphiques de statistiques d\'erreur : affichage intuitif de la distribution des erreurs. Les rapports peuvent être exportés au format texte pour archivage et partage.'
        },
        {
            question: 'Comment améliorer la précision de la comparaison de trajectoires ?',
            answer: 'Pour obtenir des résultats de comparaison de trajectoires plus précis, il est recommandé : 1) Assurer la synchronisation temporelle de deux trajectoires ou effectuer un traitement d\'alignement temporel ; 2) Prétraiter les trajectoires, comme le filtrage et la suppression du bruit, la conversion du système de coordonnées, etc. ; 3) Sélectionner une méthode de calcul d\'erreur appropriée et des paramètres ; 4) Pour les trajectoires de longueurs différentes, utiliser l\'interpolation ou l\'échantillonnage de trajectoires pour rendre le nombre de points cohérent. Notre outil fournit des fonctions de comparaison de base, et pour des applications professionnelles complexes, il peut être nécessaire de combiner des connaissances du domaine pour une analyse approfondie.'
        }
    ],

    tutorialTitle: 'Comment utiliser le Comparateur de trajectoires de coordonnées',
    steps: [
        {
            title: 'Télécharger les fichiers de trajectoire',
            description: 'Dans la zone d\'entrée de gauche, téléchargez deux fichiers de trajectoire à comparer. Cliquez sur les zones de téléchargement pour Trajectoire 1 et Trajectoire 2, sélectionnez des fichiers de trajectoire locaux aux formats GeoJSON, JSON ou KML, ou faites glisser directement les fichiers vers la zone de téléchargement. L\'outil analysera automatiquement les fichiers et affichera le nombre de points de trajectoire.',
            note: 'Les formats de fichiers pris en charge incluent GeoJSON, JSON et KML, assurant que les fichiers contiennent des données de coordonnées de trajectoire valides.'
        },
        {
            title: 'Charger des données d\'exemple',
            description: 'Si vous utilisez l\'outil pour la première fois, vous pouvez cliquer sur le bouton "Charger un exemple" pour charger des données de trajectoire prédéfinies. Cela vous aidera à comprendre rapidement les fonctions de l\'outil et les résultats de sortie, et à vous familiariser avec l\'ensemble du processus de comparaison de trajectoires.',
            note: 'Les données d\'exemple contiennent deux trajectoires prédéfinies avec certaines différences, facilitant la démonstration des différentes fonctions de l\'outil.'
        },
        {
            title: 'Effectuer la comparaison de trajectoires',
            description: 'Après avoir téléchargé deux trajectoires, cliquez sur le bouton "Comparer les trajectoires" pour commencer l\'analyse. L\'outil calculera automatiquement les différences de trajectoires, y compris les indicateurs RMSE, erreur moyenne, erreur maximale et écart type, et affichera visuellement deux trajectoires sur la carte.',
            note: 'Le processus de comparaison peut prendre quelques secondes, selon la taille et la complexité des données de trajectoire.'
        },
        {
            title: 'Voir les résultats de comparaison',
            description: 'Une fois la comparaison terminée, la zone de droite affichera les statistiques d\'erreur détaillées et les résultats d\'analyse des différences. Vous pouvez visualiser la comparaison de deux trajectoires sur la carte, avec les points de grandes différences mis en évidence. Grâce à l\'effet "clignotant" dynamique, vous pouvez observer plus intuitivement les différences de trajectoires.',
            note: 'La carte prend en charge les opérations de zoom et de panoramique, facilitant la visualisation des détails de comparaison de trajectoires dans des zones spécifiques.'
        },
        {
            title: 'Exporter ou copier les résultats',
            description: 'Vous pouvez cliquer sur le bouton "Exporter le rapport" pour générer un rapport de comparaison détaillé contenant les statistiques d\'erreur, l\'analyse des différences et les captures d\'écran de carte. Si vous n\'avez besoin que d\'indicateurs clés, vous pouvez utiliser le bouton "Copier les résultats" pour copier les données principales telles que RMSE dans le presse-papiers.',
            note: 'Le rapport exporté est au format texte, facilitant l\'archivage et le partage. La fonction de copie ne copie que les indicateurs d\'erreur clés.'
        }
    ],

    successTitle: 'Félicitations !',
    successContent: 'Vous avez réussi à apprendre comment utiliser notre Comparateur de trajectoires de coordonnées. Vous pouvez maintenant facilement télécharger et comparer deux trajectoires, analyser les différences de trajectoires grâce à des statistiques d\'erreur détaillées et des effets visuels, et exporter des rapports de comparaison professionnels.',

    relatedToolsTitle: 'Outils connexes qui pourraient vous intéresser',
    relatedTools: [
        {
            name: 'Calculateur de surface et de périmètre',
            description: 'Prend en charge le dessin de polygones pour calculer automatiquement la surface et le périmètre, avec changement d\'unités multiples.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Calculateur de surface et de périmètre',
            description: 'Prend en charge le dessin de polygones pour calculer automatiquement la surface et le périmètre, avec changement d\'unités multiples.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Rechercheur de zone de projection',
            description: 'Entrez la longitude pour calculer automatiquement les numéros de zone UTM 3° et 6°, prend en charge le traitement par lots.',
            url: 'https://www.ufreetools.com/tool/projection-zone-finder'
        },
        {
            name: 'Convertisseur de format de coordonnées',
            description: 'Prend en charge la conversion entre les formats degrés décimaux, degrés-minutes-secondes et degrés-minutes, avec fonctions de conversion par lots.',
            url: 'https://www.ufreetools.com/tool/coordinate-format-converter'
        }
    ],

    referencesTitle: 'Ressources de référence',
    references: [
        {
            name: 'Analyse des données de trajectoire',
            description: 'Ressources académiques sur le traitement et l\'analyse des données de trajectoire GPS',
            url: 'https://fr.wikipedia.org/wiki/Analyse_de_trajectoire'
        },
        {
            name: 'Erreur quadratique moyenne',
            description: 'Introduction détaillée à la RMSE sur Wikipédia',
            url: 'https://fr.wikipedia.org/wiki/Erreur_quadratique_moyenne'
        },
        {
            name: 'Spécification du format GeoJSON',
            description: 'Document de spécification officiel pour le format de données géographiques GeoJSON',
            url: 'https://tools.ietf.org/html/rfc7946'
        }
    ]
}