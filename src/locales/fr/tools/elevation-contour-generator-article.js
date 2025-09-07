export default {
    title: 'Générateur de requêtes d\'élévation et de courbes de niveau : Guide de l\'outil d\'analyse de terrain en ligne',
    functionTitle: 'Qu\'est-ce que le générateur de requêtes d\'élévation et de courbes de niveau et quelles sont ses applications ?',
    intro: 'Notre <strong>générateur de requêtes d\'élévation et de courbes de niveau</strong> est un puissant outil d\'analyse de terrain en ligne qui peut instantanément interroger les données d\'altitude pour n\'importe quel emplacement dans le monde et générer des cartes topographiques précises.',
    
    useCasesTitle: 'Scénarios d\'utilisation courants du générateur de requêtes d\'élévation et de courbes de niveau',
    useCases: [
        'Analyse de terrain et évaluation de site pour la planification d\'ingénierie et les projets de construction',
        'Planification d\'itinéraire et estimation des changements d\'altitude pour la randonnée et l\'alpinisme',
        'Analyse hydrologique et évaluation des risques d\'inondation',
        'Recherche géologique et analyse de la géomorphologie',
        'Démonstration des connaissances géographiques dans l\'éducation',
        'Modélisation de terrain dans le développement de jeux et la réalité virtuelle',
        'Planification agricole et conception de systèmes d\'irrigation',
        'Évaluation de l\'impact environnemental'
    ],
    
    tipTitle: 'Conseil professionnel :',
    tipContent: 'Lors de l\'analyse de grandes zones, ajustez l\'intervalle des courbes de niveau de manière appropriée. Utilisez des intervalles plus petits (5-10 mètres) pour les zones plates et des intervalles plus grands (50-100 mètres) pour les régions montagneuses.',
    
    conclusion: 'L\'outil <strong>générateur de requêtes d\'élévation et de courbes de niveau</strong> offre des capacités d\'analyse de terrain pratiques pour les professionnels et les passionnés de diverses industries.',
    
    faqTitle: 'Questions fréquemment posées',
    faqs: [
        {
            question: 'Quelle est la source de données de l\'outil de requête d\'élévation ?',
            answer: 'Notre <strong>système de requête d\'élévation</strong> utilise principalement les données SRTM et ASTER GDEM de la NASA. Dans la couverture mondiale, la résolution des données est généralement de 30 mètres.'
        },
        {
            question: 'Comment utiliser la fonction de génération de courbes de niveau pour l\'analyse de terrain ?',
            answer: 'Sélectionnez votre zone d\'intérêt sur la carte, puis ajustez les paramètres des courbes de niveau. Après avoir cliqué sur le bouton "Générer des courbes de niveau", le système traitera automatiquement les données DEM et dessinera les courbes de niveau.'
        },
        {
            question: 'Puis-je télécharger mes propres données de points pour une requête d\'élévation par lots ?',
            answer: 'Oui, notre <strong>fonction de requête d\'élévation par lots</strong> prend en charge le téléchargement de données de points personnalisées via des fichiers CSV, GeoJSON ou KML.'
        },
        {
            question: 'Comment la fonction de profil d\'élévation aide-t-elle à planifier des itinéraires de randonnée ou de cyclisme ?',
            answer: 'En dessinant votre itinéraire prévu sur la carte, le système générera instantanément un profil d\'élévation montrant les montées, les descentes et les sections plates.'
        },
        {
            question: 'Quelles sont les applications pratiques de la visualisation de terrain en 3D ?',
            answer: 'Notre <strong>système de visualisation de terrain en 3D</strong> est utile dans l\'éducation, la planification touristique, le développement immobilier, les projets d\'ingénierie et la conservation de l\'environnement.'
        }
    ],
    
    tutorialTitle: 'Comment utiliser le générateur de requêtes d\'élévation et de courbes de niveau',
    steps: [
        {
            title: 'Parcourir la carte et localiser la zone cible',
            description: 'Utilisez les commandes de navigation de la carte pour parcourir jusqu\'à votre zone d\'intérêt.',
            note: 'Utilisez la molette de la souris pour un zoom rapide.'
        },
        {
            title: 'Interroger les données d\'élévation d\'un seul point',
            description: '<strong>Cliquez sur n\'importe quel emplacement</strong> sur la carte pour interroger les données d\'élévation de ce point.',
            note: 'Lorsque vous survolez la carte avec la souris, l\'élévation de l\'emplacement actuel s\'affichera en temps réel.'
        },
        {
            title: 'Télécharger des fichiers de points pour une requête d\'élévation par lots',
            description: 'Téléchargez des fichiers contenant des coordonnées de latitude et de longitude, et le système interrogera automatiquement l\'élévation pour chaque point.',
            note: 'Assurez-vous que le système de coordonnées est WGS84 avant de télécharger.'
        },
        {
            title: 'Générer une carte de courbes de niveau',
            description: 'Ajustez les paramètres dans le panneau des paramètres de courbes de niveau et cliquez sur le bouton <strong>"Générer des courbes de niveau"</strong>.',
            note: 'Ajustez l\'intervalle approprié en fonction du relief de la zone.'
        },
        {
            title: 'Utiliser la vue de terrain en 3D',
            description: 'Cliquez sur le bouton "Activer le terrain 3D" et explorez les caractéristiques tridimensionnelles du terrain.',
            note: 'Faites glisser tout en maintenant la touche Ctrl enfoncée pour ajuster l\'inclinaison de la perspective.'
        },
        {
            title: 'Créer un profil d\'élévation',
            description: 'Cliquez sur le bouton "Dessiner une ligne de profil" et tracez un itinéraire sur la carte.',
            note: 'Lorsque vous déplacez la souris sur le profil, un marqueur apparaîtra à l\'emplacement correspondant sur la carte.'
        },
        {
            title: 'Exporter et partager les résultats',
            description: 'Téléchargez des cartes de courbes de niveau, des données d\'élévation ou des graphiques de profil et utilisez le bouton "Partager la carte".',
            note: 'Les cartes exportées incluent des informations de référence de coordonnées.'
        }
    ],
    
    successTitle: 'Félicitations !',
    successContent: 'Vous avez appris avec succès à utiliser notre outil générateur de requêtes d\'élévation et de courbes de niveau.',
    
    relatedToolsTitle: 'Autres outils qui pourraient vous intéresser',
    relatedTools: [
        {
            name: 'Outil de conversion de coordonnées',
            description: 'Convertir des coordonnées géographiques entre différents systèmes de coordonnées.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Relecture de traces GPS',
            description: 'Visualiser et relire des traces GPS à partir de différents formats de fichiers.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Calculateur de projection gaussienne',
            description: 'Conversion entre les coordonnées de projection gaussienne et les coordonnées géographiques.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Visualiseur de nuage de points LIDAR',
            description: 'Visualiseur de nuage de points LIDAR gratuit en ligne prenant en charge les formats LAS, XYZ, PLY et PCD.',
            url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
        }
    ],
    
    referencesTitle: 'Ressources de référence',
    references: [
        {
            name: 'Principes fondamentaux des cartes topographiques - Wikipédia',
            description: 'Description détaillée des composants des cartes topographiques et de l\'interprétation des courbes de niveau',
            url: 'https://en.wikipedia.org/wiki/Topographic_map'
        },
        {
            name: 'Tutoriels de navigation cartographique REI',
            description: 'Techniques de lecture de cartes topographiques et de navigation fournies par un établissement d\'éducation en plein air professionnel',
            url: 'https://www.rei.com/learn/expert-advice/navigation-basics.html'
        },
        {
            name: 'Ressources d\'apprentissage OpenTopography',
            description: 'Méthodes d\'analyse de terrain et études de cas fournies par la plateforme de données topographiques ouvertes',
            url: 'https://opentopography.org/learn'
        }
    ]
};