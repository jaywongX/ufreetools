export default {
    title: 'Marqueur de Points Faciaux IA - Guide de l\'outil intelligent de détection et d\'édition de repères faciaux',

    functionTitle: 'Fonctionnalités de l\'outil et scénarios d\'application',
    intro: 'Le <strong>Marqueur de Points Faciaux IA</strong> est un <strong>outil en ligne de détection et d\'édition de points caractéristiques du visage</strong> basé sur la technologie d\'intelligence artificielle. Il peut automatiquement identifier et marquer 68 points caractéristiques clés sur le visage, y compris des zones importantes comme les yeux, le nez, la bouche et les contours du visage, offrant aux utilisateurs une <strong>analyse précise de la structure faciale</strong> et des <strong>capacités d\'édition visuelle</strong>.',

    useCasesTitle: 'Principaux scénarios d\'application',
    useCases: [
        'Conception et création d\'avatars : Fournit des références précises des caractéristiques faciales pour les designers',
        'Recherche en reconnaissance faciale : Utilisé pour la recherche académique et le développement d\'algorithmes',
        'Développement d\'applications de beauté : Fournit des données de points de repère pour les applications de beauté en RA',
        'Production d\'animation : Fournit des points de contrôle pour l\'animation faciale',
        'Analyse cosmétique médicale : Analyse les proportions faciales et la symétrie',
        'Applications de RV/RA : Fournit des données de suivi facial pour les applications de réalité virtuelle',
        'Éducation et formation : Utilisé pour l\'enseignement de la vision par ordinateur et de l\'IA',
        'Création artistique : Fournit un support technique pour la création d\'art numérique'
    ],

    tipTitle: 'Conseils professionnels',
    tipContent: 'Pour de meilleurs résultats de détection, utilisez des photos de visage frontales claires et bien éclairées. L\'outil prend en charge l\'édition des positions des points par glisser-déposer, qui peuvent être ajustées selon les besoins réels.',

    conclusion: 'Que vous soyez un designer professionnel, un chercheur ou un développeur, ce <strong>Marqueur de Points Faciaux IA</strong> peut fournir un puissant support technique pour vos projets. L\'outil est entièrement gratuit, prend en charge le traitement par lots et plusieurs formats d\'exportation, rendant votre création plus efficace et pratique.',

    faqTitle: 'Questions fréquemment posées',

    faq1: {
        question: 'Qu\'est-ce que la détection de points de repère faciaux ?',
        answer: 'La <strong>détection de points de repère faciaux</strong> est une technologie importante dans le domaine de la vision par ordinateur qui identifie automatiquement les positions des points caractéristiques sur le visage à l\'aide d\'algorithmes d\'IA. Notre outil utilise un modèle à 68 points qui marque avec précision des zones clés comme les yeux, le nez, la bouche et les contours du visage, fournissant des données fondamentales pour <strong>l\'analyse faciale</strong>, <strong>la reconnaissance d\'expressions</strong> et <strong>la modélisation 3D</strong> ultérieures.'
    },

    faq2: {
        question: 'Les points de repère détectés peuvent-ils être édités ?',
        answer: 'Oui ! Notre outil prend en charge <strong>la fonctionnalité d\'édition interactive</strong>. Après la détection, vous pouvez cliquer et faire glisser n\'importe quel point pour ajuster sa position avec votre souris. C\'est très utile pour <strong>l\'ajustement fin</strong>, <strong>la création artistique</strong> ou <strong>la personnalisation pour des besoins spécifiques</strong>. Toutes les modifications sont mises à jour en temps réel sur le canevas.'
    },

    faq3: {
        question: 'Quels formats d\'exportation sont pris en charge ?',
        answer: 'L\'outil prend en charge plusieurs formats d\'exportation pour répondre à différents besoins : les formats <strong>PNG/JPG/WEBP</strong> sont adaptés au traitement d\'images, tandis que le <strong>format SVG</strong> est adapté à la conception graphique vectorielle. Le format SVG est particulièrement adapté aux applications de <strong>conception web</strong>, <strong>production d\'imprimés</strong> et <strong>graphiques évolutifs</strong>.'
    },

    faq4: {
        question: 'Quelle est la précision de la détection ?',
        answer: 'Nous utilisons la <strong>bibliothèque face-api.js</strong> leader de l\'industrie et le <strong>modèle facial à 68 points</strong>, qui peut atteindre une précision de plus de 95% dans des conditions idéales. L\'efficacité de la détection est influencée par les conditions d\'éclairage, les angles du visage, la clarté de l\'image et d\'autres facteurs. Nous recommandons d\'utiliser des <strong>photos frontales claires</strong> pour obtenir les meilleurs résultats.'
    },

    faq5: {
        question: 'Les données sont-elles sécurisées ?',
        answer: 'Absolument sécurisées ! Tout le traitement d\'image est effectué dans votre <strong>navigateur local</strong> et n\'est pas téléchargé sur un serveur. Nous protégeons strictement la confidentialité des utilisateurs et garantissons que vos données d\'image sont totalement sécurisées. L\'outil prend en charge <strong>l\'utilisation hors ligne</strong>, offrant une protection maximale pour votre confidentialité.'
    },

    tutorialTitle: 'Guide d\'utilisation détaillé',

    step1: {
        title: 'Téléchargez une image faciale',
        description: 'Cliquez sur la zone de téléchargement ou <strong>glissez-déposez directement des fichiers image</strong> dans l\'outil. Prend en charge les formats courants, notamment PNG, JPEG, BMP, WEBP. Vous pouvez également cliquer sur "Charger une image exemple" pour expérimenter les fonctionnalités de l\'outil.',
        note: 'Il est recommandé d\'utiliser des photos de visage frontales claires, en évitant les profils latéraux ou les photos de groupe pour assurer la précision de la détection.'
    },

    step2: {
        title: 'Configurez les paramètres de dessin',
        description: 'Ajustez les <strong>options d\'affichage</strong> et les <strong>paramètres de style</strong> dans le panneau de paramètres à gauche. Vous pouvez choisir d\'afficher ou non les points de repère, les connexions et les numéros, et personnaliser les couleurs, tailles et autres effets visuels.',
        note: 'Différents paramètres conviennent à différents scénarios d\'application et peuvent être ajustés selon les besoins réels.'
    },

    step3: {
        title: 'Exécutez la détection des points de repère',
        description: 'Cliquez sur le bouton <strong>"Détecter les points"</strong> pour démarrer l\'analyse IA. L\'outil chargera automatiquement le modèle et détectera les points caractéristiques du visage. L\'ensemble du processus prend généralement de 3 à 10 secondes.',
        note: 'La première utilisation nécessite le téléchargement des fichiers du modèle IA, assurez-vous donc d\'avoir une connexion réseau stable.'
    },

    step4: {
        title: 'Éditez les positions des points',
        description: 'Une fois la détection terminée, vous pouvez <strong>cliquer et faire glisser</strong> n\'importe quel point pour ajuster sa position. Prend en charge l\'aperçu en temps réel des effets d\'édition, et toutes les modifications sont immédiatement reflétées sur le canevas.',
        note: 'La fonction d\'édition est particulièrement adaptée aux ajustements fins et à la conception créative, permettant des ajustements libres selon les besoins spécifiques.'
    },

    step5: {
        title: 'Prévisualisez et ajustez les effets',
        description: 'Utilisez les fonctions de <strong>zoom et de panoramique</strong> à droite pour voir les effets détaillés. Vous pouvez zoomer pour vérifier les positions spécifiques des points et vous assurer que les résultats d\'édition répondent aux attentes.',
        note: 'L\'utilisation complète de la fonction d\'aperçu peut vous aider à obtenir des résultats d\'édition plus précis.'
    },

    step6: {
        title: 'Exportez les résultats du traitement',
        description: 'Choisissez un <strong>format d\'exportation</strong> approprié (PNG/JPG/WEBP/SVG), ajustez les paramètres de qualité d\'image, puis cliquez sur le bouton de téléchargement. Prend en charge le <strong>traitement par lots</strong> et les <strong>téléchargements de packages ZIP</strong>.',
        note: 'Le format SVG est particulièrement adapté aux applications nécessitant des graphiques vectoriels, comme la conception web et la production d\'imprimés.'
    },

    successTitle: 'Traitement terminé',
    successContent: 'Félicitations ! Vous avez réussi à compléter la détection et l\'édition des points de repère faciaux. Vous pouvez utiliser les résultats pour divers projets créatifs, travaux de recherche ou applications commerciales.',

    relatedToolsTitle: 'Outils connexes recommandés',

    relatedTool1: {
        name: 'Étiqueteur Multi-Visages IA',
        description: 'Prend en charge la détection et l\'étiquetage de plusieurs visages, adapté au traitement de photos d\'équipe',
        url: 'https://www.ufreetools.com/tool/ai-multi-face-tagger'
    },

    relatedTool2: {
        name: 'Estimateur d\'Âge et de Genre IA',
        description: 'Estime l\'âge et le genre basé sur la technologie IA, prend en charge l\'analyse par lots',
        url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
    },

    relatedTool3: {
        name: 'Outil de Suppression d\'Arrière-plan d\'Image',
        description: 'Supprime intelligemment les arrière-plans d\'images, prend en charge le traitement par lots',
        url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
    },

    relatedTool4: {
        name: 'Outil d\'Inversion de Couleurs d\'Image',
        description: 'Inversion des couleurs d\'image en un clic, crée des effets artistiques',
        url: 'https://www.ufreetools.com/tool/invert-image-colors'
    },

    referencesTitle: 'Références et documentation technique',

    reference1: {
        name: 'Documentation officielle de face-api.js',
        description: 'Documentation technique détaillée et référence API pour la bibliothèque face-api.js',
        url: 'https://github.com/justadudewhohacks/face-api.js'
    },

    reference2: {
        name: 'Principes techniques de détection des points de repère faciaux',
        description: 'Une méthode robuste et efficace pour la détection efficace des points de repère faciaux',
        url: 'https://www.mdpi.com/2076-3417/14/16/7153'
    },

    reference3: {
        name: 'Spécifications techniques du format SVG',
        description: 'Normes techniques et directives d\'application pour le format graphique vectoriel SVG',
        url: 'https://www.w3.org/Graphics/SVG/'
    }
};
