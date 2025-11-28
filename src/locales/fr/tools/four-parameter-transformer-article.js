export default {
    title: 'Transformateur à Quatre Paramètres : Guide Batch pour la Transformation de Similitude Plane et la Transformation de Helmert',
    functionTitle: 'Comment le Transformateur à Quatre Paramètres Assure-t-il l\'Intégration des Coordonnées Régionales en un Clic ?',
    intro: '<p>Le transformateur à quatre paramètres est basé sur les modèles de similitude plane, Bursa simplifié et Helmert, couvrant tous les paramètres y compris les translations ΔX, ΔY, la rotation θ et l\'échelle m. Grâce à des algorithmes frontend purs, le système peut effectuer localement des calculs directs/inverses de points uniques et par lots dans le navigateur, fournissant en temps réel des vecteurs résiduels, RMSE, intervalles de confiance à 95 % et cartes thermiques de précision, assurant que chaque intégration de coordonnées soit traçable, vérifiable et évaluable.</p>',
    useCasesTitle: 'Fonctions de l\'Outil et Scénarios d\'Application',
    useCases: {
        first: '<strong>Intégration des Coordonnées d\'Ingénierie</strong> : Dans les projets de rénovation urbaine ou de transport ferroviaire, mappe rapidement les systèmes de coordonnées indépendants locaux vers des systèmes de coordonnées d\'ingénierie unifiés, améliorant l\'efficacité de collaboration en conception et construction.',
        second: '<strong>Mosaïque de Projection Régionale</strong> : Les résultats de télédétection et d\'UAV proviennent souvent de différentes zones de projection, le transformateur à quatre paramètres peut mettre à jour par lots des points de contrôle planaires pour réaliser un assemblage sans couture.',
        third: '<strong>Fusion de Systèmes Planaires Personnalisés</strong> : Intégrant des systèmes de coordonnées auto-construits dans les usines ou parcs industriels, utilisant le modèle à quatre paramètres pour éliminer les différences d\'échelle et de rotation, assurant la cohérence entre les dessins et les conditions sur le terrain.',
        fourth: '<strong>Révision des Résultats et Acceptation</strong> : Génère des histogrammes de distribution des résidus et des intervalles de confiance pour soumettre des rapports d\'évaluation quantitatifs aux clients ou autorités de régulation.'
    },
    tipTitle: 'Image de la Page Produit',
    logoAlt: 'Aperçu du Produit du Transformateur à Quatre Paramètres',
    tipContent: 'Cette illustration peut être analysée par les moteurs de recherche pour des extraits multimédias riches dans les résultats de recherche.',
    conclusion: '<p>Avec le transformateur à quatre paramètres, les équipes d\'arpentage, de conception et de supervision peuvent effectuer des conversions localisées, des révisions de résidus et des sorties de rapports sans divulguer les coordonnées originales, répondant aux exigences du cycle de vie du projet en matière de traçabilité et de vérification des données. Pour des transformations de zones de projection supplémentaires, il peut être utilisé avec l\'<a href="https://www.ufreetools.com/tool/coordinate-zone-switcher" target="_blank">Outil de Changement de Zone de Coordonnées Batch</a> ; pour les normes internationales, visitez <a href="https://www.ogc.org/" target="_blank" rel="noopener noreferrer">Transformation de Coordonnées OGC</a> pour plus de conseils.</p>',
    faqTitle: 'Questions Fréquemment Posées',
    faqs: {
        q1: {
            question: 'Comment le Transformateur à Quatre Paramètres garantit-il la précision et la stabilité de la transformation de similitude plane ?',
            answer: '<p>L\'outil utilise l\'ajustement par moindres carrés pour résoudre ΔX, ΔY, θ, m, et produit RMSE, résidu maximum et intervalle de confiance à 95 %. Les utilisateurs peuvent vérifier les opérations matricielles via les journaux pour valider la précision de la transformation de similitude plane.</p>'
        },
        q2: {
            question: 'Les coordonnées erronées peuvent-elles être automatiquement ignorées lors de l\'importation batch ?',
            answer: '<p>Oui. Si des comptages de colonnes incohérents ou des données anormales sont détectés lors de la phase d\'analyse, le système les enregistrera et les ignorera dans le journal, continuant à traiter les coordonnées restantes pour assurer une conversion batch ininterrompue.</p>'
        },
        q3: {
            question: 'Le Transformateur à Quatre Paramètres prend-il en charge les calculs directs et inverses ?',
            answer: '<p>Oui. L\'outil fournit des boutons de calcul direct (source → cible) et de calcul inverse (cible → source), facilitant la comparaison des coordonnées avant et après transformation et générant des visualisations superposées.</p>'
        },
        q4: {
            question: 'Comment visualiser la distribution des résidus dans le Transformateur à Quatre Paramètres ?',
            answer: '<p>Après avoir terminé la conversion, le système dessine automatiquement des graphiques de distribution des points de contrôle, des histogrammes de résidus et des grilles de carte thermique de précision, vous aidant à déterminer si les groupes de points sont uniformes et si les erreurs sont concentrées.</p>'
        },
        q5: {
            question: 'Peut-on citer les rapports générés par le Transformateur à Quatre Paramètres ?',
            answer: '<p>Oui. La zone de résultats prend en charge l\'exportation CSV, les journaux peuvent être copiés en un clic, et les graphiques peuvent être capturés et intégrés dans des rapports techniques, répondant aux exigences d\'acceptation ou d\'archivage en ingénierie.</p>'
        }
    },
    tutorialTitle: 'Guide d\'Utilisation du Transformateur à Quatre Paramètres',
    steps: {
        step1: {
            title: 'Préparer les Coordonnées Sources et les Points de Contrôle',
            description: 'Organisez d\'abord les coordonnées sources avec les coordonnées cibles correspondantes, et confirmez le format du délimiteur, en vous assurant que chaque ligne de données contient X, Y, et les valeurs cibles optionnelles ainsi que les noms de points.'
        },
        step2: {
            title: 'Sélectionner le Modèle et Saisir les Paramètres',
            description: 'Dans les "Paramètres du Modèle", sélectionnez la similitude plane, le modèle Bursa simplifié ou le modèle Helmert, saisissez ΔX, ΔY, θ, m, ou laissez vide pour attendre les résultats d\'ajustement.'
        },
        step3: {
            title: 'Charger un Exemple ou Importer un Fichier',
            description: 'Vous pouvez utiliser "Charger un Exemple" pour une expérience rapide, ou glisser des fichiers CSV/TXT pour importer de grandes quantités de coordonnées et les analyser automatiquement.'
        },
        step4: {
            title: 'Effectuer l\'Ajustement et la Conversion',
            description: 'Collez les coordonnées appariées dans la zone de résolution des points communs, cliquez sur "Ajustement de Similitude Plane" pour obtenir les paramètres optimaux, puis exécutez le calcul direct ou inverse pour terminer la conversion batch.'
        },
        step5: {
            title: 'Afficher les Journaux et la Visualisation',
            description: 'Les journaux en temps réel afficheront les processus d\'analyse, d\'ajustement, de conversion et de statistiques, tout en traçant la distribution des points de contrôle, les histogrammes de résidus et l\'aperçu de la carte thermique.'
        },
        step6: {
            title: 'Exporter les Résultats et les Partager',
            description: 'Après confirmation des résultats, exportez le CSV et les journaux, et capturez des captures d\'écran des graphiques de visualisation pour la soumission de résultats, la révision ou l\'archivage de documents.'
        }
    },
    successTitle: 'Déploiement Terminé',
    successContent: 'Félicitations ! Vous avez maîtrisé l\'ensemble du flux de travail du transformateur à quatre paramètres et pouvez désormais gérer avec confiance diverses tâches d\'intégration de coordonnées planaires et générer des rapports d\'évaluation de précision.',
    relatedToolsTitle: 'Outils Connexes Recommandés',
    relatedTools: {
        first: {
            name: 'Calculatrice de Feuilles de Carte',
            description: 'Calcule les numéros de feuilles basés sur les coordonnées de latitude et de longitude, prenant en charge plusieurs échelles.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'Convertisseur de Temps GNSS',
            description: 'Outil pour convertir entre le temps GPS, le temps BeiDou et le temps UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: 'Calculatrice de Surface et de Périmètre',
            description: 'Prend en charge le dessin de polygones pour calculer automatiquement la surface et le périmètre, fournissant plusieurs commutateurs d\'unités.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: 'Calculatrice de Ligne de Base',
            description: 'Saisissez les coordonnées du point de départ et d\'arrivée pour calculer la longueur et l\'azimut de la ligne de base, prenant en charge l\'analyse de propagation d\'erreurs.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: 'Références',
    references: {
        first: {
            name: 'Association Chinoise des Sciences de l\'Information Géographique - Normes et Réglementations',
            description: 'Normes techniques et réglementations industrielles chinoises en information géographique',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'Norme ISO 19111 du Système de Référence Spatiale',
            description: 'Norme internationale de référence pour la transformation des références spatiales et des projections.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: 'Standards du Consortium Géospatial Ouvert (OGC)',
            description: 'Normes internationales pour la transformation des données géospatiales',
            url: 'https://www.ogc.org/'
        }
    }
}