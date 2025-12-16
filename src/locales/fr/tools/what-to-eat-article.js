export default {
    title: 'Outil de décision en ligne "Que manger aujourd\'hui" : Guide de recommandations alimentaires intelligentes et de choix de repas',
    functionTitle: 'Qu\'est-ce que l\'outil de décision en ligne "Que manger aujourd\'hui" ?',
    intro: 'Notre <strong>outil de décision en ligne "Que manger aujourd\'hui"</strong> est une application open-source de frontend pur qui génère des recommandations alimentaires exécutables en temps réel en notant plusieurs dimensions incluant le temps, le budget, le niveau d\'épices, les restrictions alimentaires, la météo et l\'occasion. L\'ensemble du processus de décision s\'achève localement dans votre navigateur sans télécharger aucune préférence personnelle, le rendant à la fois efficace et protecteur de la vie privée.',
    useCasesTitle: 'Scénarios d\'application pratiques',
    useCases: [
        'Décider rapidement quoi manger comme en-cas tardif pendant les heures supplémentaires ou une nuit blanche, réduisant le temps de décision',
        'Trouver des combinaisons de menu à haute valeur basées sur le budget et les préférences d\'épices pendant l\'heure du déjeuner',
        'Sélectionner des combinaisons de plats appropriées à l\'occasion qui ne décevront pas lors des rendez-vous ou réunions familiales',
        'Associer des plats et boissons rafraîchissants/réchauffants pour la météo chaude, fraîche ou pluvieuse',
        'Options de menu sûres pour les besoins alimentaires végétariens, végétaliens ou compatibles avec Halal',
        'Prioriser les idées de repas riches en protéines et faibles en glucides pendant les phases de remise en forme ou de contrôle du sucre',
        'Énumérer rapidement les aliments locaux courants et facilement disponibles lors des voyages ou déplacements professionnels',
        'Recommander des plats adaptés à la livraison ou faciles à préparer à la maison quand il pleut et que vous ne voulez pas sortir'
    ],
    tipTitle: 'Conseil professionnel :',
    tipContent: 'Bloquez d\'abord "l\'heure du repas" et "la préférence de budget", puis ajustez finement le niveau d\'épices, la météo et les restrictions alimentaires pour aider l\'outil de décision en ligne "Que manger aujourd\'hui" à fournir des résultats très correspondants plus rapidement.',
    conclusion: 'L\'<strong>outil de décision en ligne "Que manger aujourd\'hui"</strong> élimine la lutte pour choisir des menus. Avec une notation multidimensionnelle et des calculs locaux, vous pouvez obtenir des recommandations alimentaires correspondant à votre goût, votre budget et votre occasion en quelques secondes, adaptées aux employés de bureau, étudiants, passionnés de fitness ou familles pour une utilisation à tout moment.',
    faqTitle: 'Foire aux questions (FAQ)',
    faqs: [
        {
            question: 'Comment l\'outil de décision en ligne "Que manger aujourd\'hui" garantit-il l\'authenticité et la fiabilité des résultats ?',
            answer: 'L\'outil est basé sur des ensembles de données de plats courants accessibles publiquement, notés par temps, budget, niveau d\'épices, météo, occasion et restrictions alimentaires. Le filtrage et la randomisation s\'exécutent localement, recommandant des menus qui peuvent réellement être exécutés.'
        },
        {
            question: 'L\'utilisation de l\'outil de décision en ligne "Que manger aujourd\'hui" téléchargera-t-elle mes préférences personnelles ?',
            answer: 'Non. Tous les calculs s\'achèvent localement dans votre navigateur et ne téléchargeront aucune information de filtrage sur les serveurs, garantissant la sécurité de la vie privée.'
        },
        {
            question: 'Les utilisateurs végétariens ou respectueux du Halal peuvent-ils obtenir des recommandations appropriées de l\'outil de décision en ligne "Que manger aujourd\'hui" ?',
            answer: 'Oui. Lors de la sélection d\'options végétariennes, végétaliennes ou compatibles Halal, le système filtrera les plats non conformes, affichant uniquement les options répondant aux restrictions alimentaires.'
        },
        {
            question: 'Comment la météo ou les occasions affectent-elles les recommandations de l\'outil de décision en ligne "Que manger aujourd\'hui" ?',
            answer: 'Les options comme chaud/pluvieux, rendez-vous/heures supplémentaires ajusteront les scores des plats, par exemple en s\'orientant vers des plats froids par temps chaud, des soupes chaudes par temps pluvieux, et des options impressionnantes et partageables lors des rendez-vous.'
        },
        {
            question: 'Peut-on réaliser des repas riches en protéines ou faibles en glucides dans l\'outil de décision en ligne "Que manger aujourd\'hui" ?',
            answer: 'Oui. Lors de la sélection de préférences riches en protéines ou faibles en glucides, l\'algorithme donnera la priorité aux aliments de base riches en protéines et aux combinaisons faibles en glucides, adaptées aux scénarios de fitness ou de contrôle du sucre.'
        },
        {
            question: 'Si je ne suis pas satisfait des résultats, l\'outil de décision en ligne "Que manger aujourd\'hui" peut-il fournir un nouveau lot ?',
            answer: 'Oui. Cliquez sur "Plus de recommandations" pour randomiser à nouveau sous les mêmes conditions jusqu\'à trouver des options satisfaisantes.'
        },
        {
            question: 'Pourquoi y a-t-il parfois moins de recommandations ?',
            answer: 'Lorsque les conditions de filtrage sont trop strictes (ex. végétalien + Halal + riche en protéines + en-cas tardif + temps chaud), les éléments correspondants diminueront. Vous pouvez assouplir certaines conditions et réessayer, ou cliquer sur "Réinitialiser les filtres".'
        },
        {
            question: 'L\'outil de décision en ligne "Que manger aujourd\'hui" est-il open source ?',
            answer: 'Oui, l\'outil utilise une implémentation open source de frontend pur avec une logique et des données audibles, facilitant la personnalisation et le développement secondaire.'
        }
    ],
    tutorialTitle: 'Comment utiliser l\'outil de décision en ligne "Que manger aujourd\'hui"',
    steps: [
        {
            title: 'Bloquer le temps et le budget',
            description: 'Sélectionnez "Heure du repas" et "Préférence de budget" pour aider l\'outil de décision en ligne "Que manger aujourd\'hui" à réduire d\'abord les options candidates.'
        },
        {
            title: 'Définir le niveau d\'épices et les restrictions alimentaires',
            description: 'Filtrer les plats inappropriés selon le niveau d\'épices, les restrictions végétariennes/Halal pour garantir que les résultats soient réellement exécutables.'
        },
        {
            title: 'Ajuster finement selon la météo et l\'occasion',
            description: 'Les options comme chaud, pluvieux ou rendez-vous, heures supplémentaires ajusteront les scores, mettant en évidence des menus plus appropriés.'
        },
        {
            title: 'Cliquer sur Commencer la décision',
            description: 'Cliquez sur "Commencer la décision" pour générer des résultats. Pour plus d\'inspiration, continuez à cliquer sur "Plus de recommandations".'
        },
        {
            title: 'Voir les raisons et les indices d\'énergie',
            description: 'Chaque recommandation vient avec des raisons et des indices d\'énergie pour vous aider à prendre des décisions rapides.'
        },
        {
            title: 'Réinitialiser ou optimiser à nouveau',
            description: 'Pour recommencer, utilisez "Réinitialiser les filtres", ou ajustez finement les préférences individuelles pour continuer à générer de nouveaux résultats.'
        }
    ],
    successTitle: 'Félicitations !',
    successContent: 'Vous avez maîtrisé l\'utilisation de l\'outil de décision en ligne "Que manger aujourd\'hui", obtenant une inspiration de menu personnalisée à tout moment, disant facilement adieu à la paralysie décisionnelle.',
    relatedToolsTitle: 'Outils connexes qui pourraient vous intéresser',
    relatedTools: [
        {
            name: 'Compresseur d\'images',
            description: 'Compressez les photos de nourriture ou les images de menu pour un partage et une archivage faciles.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: 'Générateur de codes QR',
            description: 'Générez des codes QR pour les menus ou les liens d\'achat groupé pour un scan et une commande pratiques.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        },
        {
            name: 'Visionneuse EXIF',
            description: 'Affichez les informations EXIF des photos de nourriture pour gérer les données de prise de vue et les emplacements.',
            url: 'https://www.ufreetools.com/tool/exif-viewer'
        },
        {
            name: 'Générateur de sceaux',
            description: 'Créez des sceaux numériques pour les événements communautaires ou de restaurant pour les matériels promotionnels.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        }
    ],
    referencesTitle: 'Ressources de référence',
    references: [
        {
            name: 'Directives alimentaires pour les Américains',
            description: 'Directives officiellement publiées pour une alimentation équilibrée et la nutrition',
            url: 'https://www.dietaryguidelines.gov/'
        },
        {
            name: 'Modèles alimentaires et santé',
            description: 'Revue de recherche sur les modèles alimentaires et leurs impacts sur la santé',
            url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7071241/'
        },
        {
            name: 'FoodData Central',
            description: 'Base de données sur la nutrition alimentaire publique du département américain de l\'Agriculture',
            url: 'https://fdc.nal.usda.gov/'
        }
    ]
};