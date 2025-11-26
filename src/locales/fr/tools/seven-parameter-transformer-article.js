export default {
    title: 'Transformateur à Sept Paramètres : Tutoriel de Conversion Batch de Coordonnées Géodésiques Bursa-Wolf',
    functionTitle: 'Comment le Transformateur à Sept Paramètres résout-il les défis d\'intégration de systèmes de coordonnées multiples ?',
    intro: '<p>Le Transformateur à Sept Paramètres fournit une conversion batch entre les coordonnées XYZ et BLH de <strong>WGS84, CGCS2000, Beijing 54, Xi\'an 80</strong> basée sur le modèle Bursa-Wolf, se concentrant sur la résolution des problèmes de décalage et de traçabilité lors de la fusion de coordonnées multi-sources dans les plateformes de géomètre, d\'ingénierie et de SIG. L\'outil dispose d\'algorithmes ouverts, d\'ajustement d\'erreurs et de journaux de processus pour garantir que chaque conversion soit traçable, reproductible et évaluable.</p><p>Avec un ajustement automatique et une gestion de paramètres par modèles, les équipes peuvent rapidement réutiliser des ensembles de sept paramètres hautement fiables entre les projets et vérifier chaque étape de rotation et de correction d\'échelle via les journaux, facilitant la soumission d\'une documentation technique complète lors des phases d\'appel d\'offres public et d\'acceptation.</p>',
    useCasesTitle: 'Scénarios d\'Application Pratique',
    useCases: {
        first: '<strong>Géomètre Urbain et Municipal</strong> : Intégration des résultats CGCS2000 avec des systèmes de coordonnées locaux indépendants pour garantir un raccordement parfait des réseaux souterrains, des modèles BIM et des plans d\'exécution.',
        second: '<strong>Ingénierie Énergétique et Routière</strong> : La construction inter-provinciale nécessite l\'interopérabilité entre les coordonnées Beijing 54, Xi\'an 80 et WGS84, le Transformateur à Sept Paramètres fournissant une évaluation complète des erreurs.',
        third: '<strong>Télédétection et Drones</strong> : Les résultats de photographie aérienne sont souvent produits en WGS84, nécessitant une conversion précise à sept paramètres avant l\'importation dans une projection locale Gauss-Krüger.',
        fourth: '<strong>Droit Foncier des Ressources Naturelles</strong> : Les coordonnées historiques de bornes utilisent souvent d\'anciens datums géodésiques, l\'outil peut les mapper de manière fiable vers CGCS2000 pour enregistrement et examen.'
    },
    tipTitle: 'Illustration du Produit',
    logoAlt: '/seven-parameter-transformer-logo.png',
    tipContent: 'Cette illustration peut être analysée par les moteurs de recherche pour des extraits multimédias riches dans les résultats de recherche.',
    conclusion: '<p>De la vérification d\'un point unique au traitement de dizaines de milliers par lots, le Transformateur à Sept Paramètres peut produire des rapports contenant des résidus de coordonnées, RMSE et intervalles de confiance. S\'appuyant sur une implémentation 100% côté client, les coordonnées sensibles ne quittent jamais le navigateur, répondant aux exigences de conformité pour les projets confidentiels concernant l\'hébergement des données.</p>',
    faqTitle: 'Questions Fréquemment Posées',
    faqs: {
        q1: {
            question: 'Comment le Transformateur à Sept Paramètres garantit-il la précision du calcul des sept paramètres Bursa-Wolf ?',
            answer: '<p>L\'outil utilise la méthode des moindres carrés pour les points communs afin de résoudre les sept paramètres et produit des vecteurs résiduels, Sigma0 et des intervalles de confiance à 95 %. Vous pouvez vérifier le processus de calcul matriciel via les journaux pour vous assurer que la précision des sept paramètres Bursa-Wolf respecte les spécifications du projet.</p>'
        },
        q2: {
            question: 'Comment définir un délimiteur personnalisé lors de l\'importation batch CSV ?',
            answer: '<p>Dans la zone « Saisie des Données de Coordonnées », ajustez le champ délimiteur. Le Transformateur à Sept Paramètres analysera les données XYZ/BLH/ENH selon le nouveau délimiteur tout en préservant les colonnes de noms de points ou de commentaires pour un appariement ultérieur.</p>'
        },
        q3: {
            question: 'Le Transformateur à Sept Paramètres peut-il gérer simultanément les projections Gauss-Krüger et UTM ?',
            answer: '<p>Oui, il suffit de sélectionner le mode correspondant dans « Paramètres de Projection/Altitude » et de remplir le méridien central, la largeur de zone et le facteur d\'échelle. Le processus de conversion effectuera d\'abord un calcul direct 3D, puis un calcul inverse vers les coordonnées de projection cibles.</p>'
        },
        q4: {
            question: 'Comment obtenir les sept paramètres lorsque les points communs sont insuffisants ?',
            answer: '<p>Si vous avez moins de trois points communs, vous pouvez appeler les paramètres d\'exemple intégrés dans le « Modèle de Paramètres », ou saisir des valeurs de référence de projets historiques, puis mettre à jour de manière itérative avec de nouveaux points collectés sur le terrain.</p>'
        },
        q5: {
            question: 'Le Transformateur à Sept Paramètres prend-il en charge les systèmes de coordonnées locaux indépendants ?',
            answer: '<p>Oui. Vous pouvez saisir le demi-grand axe et l\'inverse de l\'aplatissement dans les « Paramètres d\'Ellipsoïde Personnalisés » et les combiner avec des paramètres de projection personnalisés pour réaliser une restauration réaliste et une conversion mutuelle des systèmes de coordonnées locaux indépendants.</p>'
        }
    },
    tutorialTitle: 'Guide d\'Utilisation du Transformateur à Sept Paramètres',
    steps: {
        step1: {
            title: 'Sélection du Système de Coordonnées et du Mode de Projection',
            description: 'Commencez par sélectionner les systèmes de coordonnées source et cible, puis remplissez les informations telles que le méridien central et la largeur de zone dans la zone des paramètres de projection pour garantir la cohérence avec les données mesurées.'
        },
        step2: {
            title: 'Saisie ou Importation de Points de Coordonnées',
            description: 'Vous pouvez saisir manuellement un point XYZ/BLH/ENH unique, ou faire glisser un CSV/TXT pour une importation batch. Ajustez les délimiteurs si nécessaire pour maintenir une analyse correcte.'
        },
        step3: {
            title: 'Configuration des Sept Paramètres',
            description: 'Si les paramètres sont connus, remplissez directement ΔX, ΔY, ΔZ, Rx, Ry, Rz et l\'échelle ; si inconnus, collez les paires de points dans le « Solveur de Points Communs » et exécutez l\'ajustement.'
        },
        step4: {
            title: 'Exécution de la Conversion et Visualisation des Journaux',
            description: 'Après avoir cliqué sur « Effectuer la Conversion », les journaux en temps réel afficheront l\'analyse, les calculs directs/inverses, les rotations et les corrections d\'échelle, facilitant le suivi des problèmes.'
        },
        step5: {
            title: 'Évaluation de la Précision',
            description: 'Le panneau de résultats affiche la RMSE, le résidu maximum et l\'intervalle de confiance à 95 %. Si les métriques dépassent les limites, revenez à la zone des paramètres pour ajuster ou réajuster.'
        },
        step6: {
            title: 'Exportation des Résultats et Rapports',
            description: 'Après confirmation de la précision, exportez le CSV des résultats et les journaux ensemble pour archivage ou soumission à examen.'
        }
    },
    successTitle: 'Déploiement Terminé',
    successContent: 'Félicitations ! Vous avez maîtrisé l\'ensemble du flux de travail du Transformateur à Sept Paramètres et pouvez désormais effectuer rapidement des conversions batch dans les projets de fusion de coordonnées multi-sources tout en produisant des rapports de précision de niveau professionnel.',
    relatedToolsTitle: 'Outils Connexes Recommandés',
    relatedTools: {
        first: {
            name: 'Calculatrice de Feuilles de Carte',
            description: 'Calcule les numéros de feuille en fonction des coordonnées de latitude et de longitude, prend en charge plusieurs échelles.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'Convertisseur de Temps GNSS',
            description: 'Outil pour convertir entre le temps GPS, le temps BeiDou et le temps UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: 'Calculatrice de Surface et Périmètre',
            description: 'Prend en charge le dessin de polygones pour calculer automatiquement la surface et le périmètre avec changement d\'unités multiples.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: 'Calculatrice de Ligne de Base',
            description: 'Saisie des coordonnées de départ et d\'arrivée pour calculer la longueur et l\'azimut de la ligne de base, prend en charge l\'analyse de propagation d\'erreurs.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: 'Références Externes',
    references: {
        first: {
            name: 'Association Chinoise des Sciences de l\'Information Géographique - Normes et Réglementations',
            description: 'Normes techniques et réglementations industrielles chinoises en information géographique',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'Norme ISO 19111 des Systèmes de Référence de Coordonnées',
            description: 'Norme internationale de référence pour les références de coordonnées et la transformation de projections.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: 'Standards du Consortium Géospatial Ouvert (OGC)',
            description: 'Normes internationales pour la transformation des données géospatiales',
            url: 'https://www.ogc.org/'
        }
    }
}