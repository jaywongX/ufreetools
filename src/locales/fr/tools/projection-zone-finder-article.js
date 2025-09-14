export default {
    title: 'Guide d\'utilisation du Rechercheur de Zone de Projection - Calculateur de Zone de Projection UTM en Ligne',
    functionTitle: 'Qu\'est-ce que le Rechercheur de Zone de Projection et à quoi sert-il ?',
    intro: 'Notre <strong>Rechercheur de Zone de Projection</strong> est un outil en ligne puissant qui calcule automatiquement les numéros de zone UTM 3° et 6° en fonction des coordonnées de latitude et de longitude saisies. L\'outil prend en charge la saisie de coordonnées individuelles et par lots, fournit une fonction d\'affichage de la grille de zones de carte et affiche les informations de zone de projection en temps réel lorsque vous déplacez la souris sur la carte. Grâce à la mise en surbrillance dynamique des zones de zone, vous pouvez comprendre intuitivement la relation entre les coordonnées et les zones de projection. En utilisant notre <strong>Calculateur de Zone de Projection UTM</strong>, vous pouvez facilement obtenir les numéros de zone de projection correspondants aux points de coordonnées, avec des fonctions de copie en un clic et d\'exportation par lots pour répondre aux besoins professionnels d\'arpentage et de SIG.',

    useCasesTitle: 'Scénarios d\'Application Courants du Rechercheur de Zone de Projection',
    useCases: [
        'Traitement des données SIG, déterminant les numéros de zone de projection UTM pour les points de coordonnées',
        'Traitement d\'images de télédétection, sélectionnant les paramètres de projection corrects pour les images satellites',
        'Configuration des paramètres de projection dans les projets d\'arpentage, assurant la cohérence du système de coordonnées des données',
        'Création de cartes et analyse spatiale, sélectionnant les systèmes de coordonnées de projection appropriés',
        'Standardisation des données de recherche géographique, unifiant les numéros de zone de projection pour l\'intégration des données',
        'Applications de navigation et de positionnement, définissant les paramètres de projection UTM corrects pour les appareils GPS'
    ],

    tipTitle: 'Conseils Professionnels :',
    tipContent: 'Lors du traitement de coordonnées par lots, il est recommandé de tester d\'abord les résultats de calcul de zone de projection avec des données d\'exemple pour s\'assurer que le type de projection sélectionné (zone 3° ou zone 6°) répond aux exigences de votre projet. En déplaçant votre souris sur la carte, vous pouvez visualiser intuitivement la distribution des zones de projection dans différentes zones, vous aidant à mieux comprendre le principe de zonage de projection UTM.',

    conclusion: 'Le <strong>Rechercheur de Zone de Projection</strong> est très utile pour les ingénieurs géomètres, les professionnels des SIG, les processeurs de données de télédétection et toute personne ayant besoin d\'utiliser des coordonnées de projection UTM. En utilisant notre Calculateur de Zone de Projection UTM, vous pouvez économiser beaucoup de temps de calcul manuel, éviter les erreurs de sélection de zone de projection et mieux comprendre la relation entre les coordonnées et les zones de projection grâce aux fonctionnalités de visualisation. Notre outil rend le processus de configuration des paramètres de projection simple et efficace sans avoir à installer de logiciel professionnel.',

    faqTitle: 'Questions Fréquemment Posées',
    faqs: [
        {
            question: 'Quels types de projection le Rechercheur de Zone de Projection prend-il en charge ?',
            answer: 'Notre <strong>Rechercheur de Zone de Projection en ligne</strong> prend en charge deux types principaux de projection UTM : les zones 6° et les zones 3°. La zone 6° est la méthode de division de zone standard pour la projection UTM, avec 60 zones de projection mondialement, chacune large de 6° de longitude ; la zone 3° est une méthode de division plus raffinée, avec 120 zones de projection mondialement, chacune large de 3° de longitude. Vous pouvez choisir le type de projection approprié pour le calcul selon les exigences de votre projet.'
        },
        {
            question: 'Comment effectuer des requêtes de zone de projection par coordonnées par lots ?',
            answer: 'En utilisant notre <strong>Calculateur de Zone de Projection UTM</strong>, il vous suffit de saisir plusieurs paires de coordonnées ligne par ligne dans la zone de saisie par lots, en séparant la longitude et la latitude par des virgules. Par exemple : 116.3975,39.9085. Après avoir cliqué sur le bouton de calcul, le système calculera automatiquement les numéros de zone de projection correspondants pour tous les points de coordonnées, affichant les informations de numéro de zone, d\'hémisphère et de méridien central. La fonction d\'exportation par lots peut enregistrer tous les résultats sous forme de fichier texte.'
        },
        {
            question: 'Comment la grille de zone est-elle affichée sur la carte ?',
            answer: 'Notre <strong>outil Rechercheur de Zone de Projection</strong> affiche la grille de zones de projection UTM dans la zone de carte de droite. Lorsque vous déplacez votre souris sur la carte, elle affichera en temps réel le numéro de zone de projection de la position actuelle. Cette fonction de visualisation vous aide à comprendre intuitivement le modèle de distribution des zones de projection UTM et à mieux saisir la relation entre les coordonnées et les zones de projection.'
        },
        {
            question: 'Comment la précision du calcul de zone de projection est-elle assurée ?',
            answer: 'Notre outil utilise des formules de calcul de zone de projection UTM standard pour assurer la précision des résultats de calcul. Pour les zones 6°, la formule de calcul du numéro de zone est : Math.floor((longitude + 180) / 6) + 1 ; pour les zones 3°, la formule de calcul du numéro de zone est : Math.floor((longitude + 180) / 3) + 1. L\'outil valide également la validité des coordonnées saisies (longitude de -180° à 180°, latitude de -90° à 90°) pour assurer la fiabilité des résultats de calcul.'
        },
        {
            question: 'Comment utiliser les résultats de requête ?',
            answer: 'Les numéros de zone de projection calculés peuvent être utilisés pour les paramétrages dans divers logiciels SIG et équipements d\'arpentage. Vous pouvez copier des résultats individuels en un clic, ou utiliser la fonction d\'exportation par lots pour enregistrer tous les résultats sous forme de fichier texte. Les résultats incluent des informations de longitude, latitude, numéro de zone, hémisphère et méridien central, fournissant une référence complète pour la configuration de votre système de coordonnées de projection.'
        }
    ],

    tutorialTitle: 'Comment Utiliser le Rechercheur de Zone de Projection',
    steps: [
        {
            title: 'Sélectionner le Type de Projection',
            description: 'En haut de la zone de saisie de gauche, sélectionnez le type de projection dont vous avez besoin : zone UTM 6° ou zone UTM 3°. La zone 6° convient à la plupart des besoins standards de projection de cartes, tandis que la zone 3° convient aux projets d\'arpentage nécessitant une précision plus élevée.',
            note: 'Le type de projection détermine la densité des zones et la méthode de calcul. Veuillez choisir le type approprié selon les exigences de votre projet.'
        },
        {
            title: 'Saisir les Données de Coordonnées',
            description: 'Lors de la saisie d\'une coordonnée individuelle, saisissez les valeurs dans les cases de saisie de longitude et de latitude respectivement ; pour la saisie par lots, saisissez plusieurs paires de coordonnées ligne par ligne dans la zone de texte, en séparant la longitude et la latitude par des virgules par ligne. Par exemple : 116.3975,39.9085.',
            note: 'La plage de longitude est de -180° à 180°, la plage de latitude est de -90° à 90°. Les coordonnées en dehors de ces plages seront ignorées.'
        },
        {
            title: 'Effectuer l\'Opération de Calcul',
            description: 'Cliquez sur le bouton "Calculer la Zone" pour effectuer l\'opération de calcul. L\'outil calculera automatiquement et affichera le numéro de zone de projection correspondant, l\'hémisphère et le méridien central pour chaque point de coordonnées en fonction de vos coordonnées saisies et du type de projection sélectionné.',
            note: 'Une fois le calcul terminé, le premier résultat affichera un effet de mise en surbrillance pour vous aider à le localiser rapidement.'
        },
        {
            title: 'Afficher les Zones de Carte',
            description: 'Dans la zone de carte de droite, vous pouvez afficher les numéros de zone de projection à différents endroits en déplaçant votre souris. La carte affichera les informations du numéro de zone de la position de la souris en temps réel, vous aidant à comprendre intuitivement la distribution des zones de projection UTM.',
            note: 'La grille de zones sur la carte s\'affichera dynamiquement selon votre type de projection sélectionné (zone 3° ou zone 6°).'
        },
        {
            title: 'Exporter ou Copier les Résultats',
            description: 'Cliquez sur le bouton de copie à côté de chaque résultat pour copier ce résultat dans le presse-papiers. S\'il y a plusieurs résultats, vous pouvez utiliser le bouton "Exportation par Lots" en haut pour enregistrer tous les résultats sous forme de fichier texte.',
            note: 'Les opérations de copie déclenchent également des animations de mise en surbrillance, vous permettant de savoir clairement quel résultat a été copié.'
        }
    ],

    successTitle: 'Félicitations !',
    successContent: 'Vous avez réussi à apprendre comment utiliser notre Rechercheur de Zone de Projection. Vous pouvez maintenant facilement calculer les numéros de zone de projection UTM pour n\'importe quel point de coordonnées, améliorant l\'efficacité du travail grâce aux fonctions de traitement par lots et de visualisation.',

    relatedToolsTitle: 'Outils Connexes Qui Pourraient Vous Intéresser',
    relatedTools: [
        {
            name: 'Convertisseur de Format de Coordonnées',
            description: 'Prend en charge la conversion entre les formats de degrés décimaux, degrés minutes secondes et degrés minutes, fournissant des fonctions de conversion et d\'exportation par lots.',
            url: 'https://www.ufreetools.com/tool/coordinate-format-converter'
        },
        {
            name: 'Calculateur de Division de Feuille de Carte',
            description: 'Calcule les numéros de feuilles de carte en fonction des coordonnées de latitude et de longitude, prenant en charge plusieurs échelles.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Calculateur de Surface et de Périmètre',
            description: 'Prend en charge le dessin de polygones pour calculer automatiquement la surface et le périmètre, fournissant plusieurs changements d\'unités.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Calculateur de Ligne de Base',
            description: 'Saisir les coordonnées de départ et d\'arrivée pour calculer la longueur et l\'azimut de la ligne de base, prenant en charge l\'analyse de propagation d\'erreur.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    ],

    referencesTitle: 'Ressources de Référence',
    references: [
        {
            name: 'Système de Coordonnées Universel Transverse de Mercator',
            description: 'Introduction détaillée à la projection Transverse Universelle de Mercator sur Wikipédia',
            url: 'https://fr.wikipedia.org/wiki/Projection_universelle_transverse_de_Mercator'
        },
        {
            name: 'Projection Cartographique',
            description: 'Ressources académiques sur les méthodes et applications de projection cartographique',
            url: 'https://fr.wikipedia.org/wiki/Projection_cartographique'
        },
        {
            name: 'Système de Coordonnées de Gauss-Krüger',
            description: 'Introduction aux méthodes de projection cartographique couramment utilisées en Chine',
            url: 'https://fr.wikipedia.org/wiki/Projection_de_Mercator_transverse'
        }
    ]
}