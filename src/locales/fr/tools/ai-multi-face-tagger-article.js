export default {
    title: 'Outil AI de Marquage Multi-Visages : Identifier et Étiqueter les Personnes dans les Photos',
    whatIsTitle: 'Qu\'est-ce que l\'Outil AI de Marquage Multi-Visages ?',
    intro: 'Notre <strong>Outil AI de Marquage Multi-Visages</strong> est un puissant outil en ligne qui utilise une technologie avancée de reconnaissance faciale pour détecter plusieurs visages dans les photos et vous permet d\'ajouter des étiquettes pour chaque personne. Que vous organisiez des collections de photos, créiez des plans de classe, ou souhaitiez simplement identifier tout le monde dans une photo de groupe, cet outil offre un moyen rapide et efficace d\'étiqueter les visages sans nécessiter d\'expertise technique.',
    
    howItWorksTitle: 'Comment Ça Fonctionne ?',
    howItWorksContent: 'L\'Outil AI de Marquage Multi-Visages utilise face-api.js, une API JavaScript qui implémente des réseaux de neurones convolutifs pour détecter les visages et analyser les caractéristiques faciales. L\'outil identifie d\'abord tous les visages dans votre image téléchargée, puis vous permet d\'ajouter des étiquettes personnalisées ou des noms pour chaque visage détecté. Tout le traitement se fait directement dans votre navigateur, garantissant que vos photos restent privées et ne sont jamais téléchargées sur un serveur.',
    
    tipTitle: 'Conseil Pro :',
    tipContent: 'Pour de meilleurs résultats, téléchargez des photos avec des visages clairs, bien éclairés et face à la caméra. L\'outil fonctionne mieux avec des portraits de face avec un minimum d\'obstructions ou d\'angles extrêmes.',
    
    featuresTitle: 'Fonctionnalités Clés',
    features: [
        'Détection précise de plusieurs visages dans une seule image',
        'Système d\'étiquetage personnalisé pour marquer chaque visage détecté',
        'Support pour le traitement par lots de plusieurs photos',
        'Option pour exporter des images avec des superpositions d\'étiquettes de visage visibles',
        'Option d\'exportation JSON pour l\'intégration avec des systèmes de gestion de photos',
        'Conception centrée sur la confidentialité avec tout le traitement effectué localement dans votre navigateur'
    ],
    
    useCasesTitle: 'Quand Utiliser Cet Outil',
    useCase1Title: 'Organisation de Photos',
    useCase1Content: 'Identifiez et étiquetez rapidement les personnes dans les collections de photos pour les rendre consultables et mieux organisées.',
    
    useCase2Title: 'Gestion de Classe',
    useCase2Content: 'Les enseignants peuvent utiliser cet outil pour créer des photos de classe étiquetées pour aider à mémoriser les noms des élèves ou créer des plans de classe.',
    
    useCase3Title: 'Photographie d\'Événements',
    useCase3Content: 'Les photographes d\'événements peuvent étiqueter les participants dans les photos de groupe pour une distribution et une identification plus faciles.',
    
    useCase4Title: 'Contenu pour Médias Sociaux',
    useCase4Content: 'Les créateurs de contenu peuvent étiqueter les collaborateurs ou les membres de l\'équipe dans les photos promotionnelles pour une attribution appropriée.',
    
    faqTitle: 'Questions Fréquemment Posées',
    faqs: [
        {
            question: 'Quelle est la précision de la détection faciale ?',
            answer: 'L\'IA fournit une détection faciale généralement précise dans la plupart des cas. Cependant, les résultats peuvent varier en fonction de facteurs tels que l\'éclairage, la qualité de l\'image, les angles du visage et les occlusions. L\'outil atteint généralement une meilleure précision avec des portraits clairs, de face, dans de bonnes conditions d\'éclairage.'
        },
        {
            question: 'Mes données sont-elles sécurisées lors de l\'utilisation de cet outil ?',
            answer: 'Oui, tout le traitement est effectué localement dans votre navigateur. Vos photos ne sont jamais téléchargées sur un serveur, garantissant une confidentialité complète. L\'outil utilise JavaScript côté client pour analyser les images et ne stocke ni ne transmet aucune donnée.'
        },
        {
            question: 'Que se passe-t-il si certains visages ne sont pas détectés ?',
            answer: 'La détection faciale dépend de divers facteurs, notamment l\'éclairage, les angles et la qualité de l\'image. Si certains visages ne sont pas détectés, essayez de télécharger une photo différente avec un meilleur éclairage et des angles de visage plus directs. Les visages très petits ou partiellement obscurcis peuvent être difficiles à détecter pour l\'IA.'
        },
        {
            question: 'Puis-je exporter les données d\'étiquetage facial pour une utilisation dans d\'autres applications ?',
            answer: 'Oui, notre outil fournit une option d\'exportation JSON qui inclut les coordonnées pour chaque visage détecté ainsi que vos étiquettes personnalisées. Ces données peuvent être importées dans divers systèmes de gestion de photos ou utilisées pour des applications personnalisées. Vous pouvez également télécharger des images avec des superpositions d\'étiquettes de visage visibles.'
        }
    ],
    
    tutorialTitle: 'Comment Utiliser l\'Outil AI de Marquage Multi-Visages',
    steps: [
        {
            title: 'Téléchargez Votre Photo',
            description: 'Commencez par télécharger la photo que vous souhaitez analyser. Vous pouvez glisser-déposer des fichiers directement sur la zone de téléchargement ou cliquer pour parcourir votre appareil. L\'outil prend en charge les formats d\'image courants, notamment JPG, PNG, WEBP et BMP.',
            note: 'Vous pouvez télécharger plusieurs photos à la fois pour un traitement par lots.'
        },
        {
            title: 'Détecter les Visages',
            description: 'Cliquez sur le bouton "Détecter les Visages" et attendez quelques secondes que notre IA identifie tous les visages dans la photo. Chaque visage détecté sera mis en évidence avec une boîte et étiqueté avec un numéro pour une référence facile.',
            note: 'Le temps de traitement dépend du nombre et de la taille des photos, ainsi que des performances de votre appareil.'
        },
        {
            title: 'Ajouter des Étiquettes',
            description: 'Pour chaque visage détecté, entrez un nom ou une étiquette dans le champ de saisie correspondant. Au fur et à mesure que vous tapez, les étiquettes se mettront automatiquement à jour sur l\'aperçu de l\'image, vous permettant de voir à quoi ressemblera le résultat final.',
            note: 'Vous pouvez laisser certains visages non étiquetés si vous préférez, ou effacer les étiquettes en cliquant sur le bouton X.'
        },
        {
            title: 'Exportez Vos Résultats',
            description: 'Choisissez votre format et vos options d\'exportation préférés. Vous pouvez inclure des superpositions d\'étiquettes de visage directement sur l\'image et/ou exporter un fichier JSON contenant toutes les coordonnées et étiquettes des visages. Sélectionnez votre format d\'image préféré et, pour les fichiers JPG, ajustez la qualité selon vos besoins. Enfin, téléchargez des images individuelles ou utilisez l\'option de téléchargement par lots pour obtenir toutes les photos traitées sous forme de fichier ZIP.',
            note: 'L\'exportation JSON est particulièrement utile si vous prévoyez d\'importer les données faciales dans d\'autres applications ou systèmes de gestion de photos.'
        }
    ],
    
    successTitle: 'Prêt à Essayer ?',
    successContent: 'Téléchargez vos photos maintenant et voyez comment notre Outil AI de Marquage Multi-Visages peut vous aider à identifier et étiqueter les personnes dans vos images !',
    
    relatedToolsTitle: 'Outils Connexes Qui Pourraient Vous Plaire',
    relatedTools: [
        {
            name: 'Suppression d\'Arrière-plan AI Imgly',
            description: 'Supprimez intelligemment les arrière-plans d\'image en utilisant le grand modèle AI Imgly, avec prise en charge du traitement par lots et de multiples formats de sortie.',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        },
        {
            name: 'Analyseur AI de Photos de Profil',
            description: 'Obtenez des commentaires alimentés par l\'IA sur vos photos personnelles et professionnelles pour améliorer votre image professionnelle.',
            url: 'https://www.ufreetools.com/tool/ai-profile-photo-analyzer'
        },
        {
            name: 'Estimateur AI d\'Âge et de Genre',
            description: 'Utilisez la technologie AI pour analyser les visages dans les photos et estimer l\'âge et le genre.',
            url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
        }
    ],
    
    techDetailsTitle: 'Détails Techniques',
    techDetailsContent: 'L\'Outil AI de Marquage Multi-Visages utilise face-api.js, qui implémente les modèles TinyFaceDetector et FaceLandmark68 pour analyser les caractéristiques faciales. Ces réseaux neuronaux légers sont conçus pour fonctionner efficacement dans les navigateurs web tout en offrant une précision raisonnable.',
    privacyNote: 'Nous donnons la priorité à votre confidentialité en traitant toutes les images localement dans votre navigateur. Vos photos ne sont jamais envoyées à un serveur pour analyse, garantissant que vos données personnelles et vos images restent complètement privées. L\'outil fonctionne entièrement côté client, ce qui le rend sécurisé et réactif même sans connexion Internet une fois la page chargée.'
};