export default {
    title: 'Outil Audio en SRT : Guide du Convertisseur Audio en Sous-titres en Ligne',
    functionTitle: 'Qu\'est-ce que l\'outil Audio en SRT et à quoi sert-il ?',
    intro: 'Notre <strong>outil Audio en SRT</strong> est une application professionnelle en ligne qui convertit les formats audio WAV, MP3, FLAC, OGG, AAC, M4A en format de sous-titres SRT. SRT (SubRip Text) est l\'un des formats de sous-titres les plus utilisés. Notre <strong>convertisseur audio en sous-titres en ligne</strong> détecte automatiquement les segments vocaux et génère des codes temporels précis.',
    
    useCasesTitle: 'Cas d\'utilisation courants',
    useCases: [
        'Créer des fichiers SRT pour les vidéos sur YouTube, Bilibili et autres plateformes',
        'Segmenter automatiquement les enregistrements de podcasts',
        'Générer des timelines de sous-titres pour les cours en ligne',
        'Convertir les enregistrements de réunions en fichiers sous-titrés',
        'Préparer des sous-titres pour des vidéos courtes (TikTok, Instagram Reels)',
        'Segmenter les enregistrements de livres audio',
        'Générer des codes temporels pour des vidéos de paroles de chansons',
        'Créer une structure de sous-titres pour des interviews ou documentaires'
    ],
    
    tipTitle: 'Conseil de pro :',
    tipContent: 'Cet outil détecte les segments vocaux par analyse d\'énergie audio mais ne transcrit pas automatiquement la parole. Le fichier SRT généré contient des codes temporels et un texte fictif remplaçable dans Aegisub ou Subtitle Edit.',
    
    conclusion: 'L\'<strong>outil Audio en SRT</strong> est particulièrement utile pour les créateurs vidéo, producteurs de podcasts et toute personne ayant besoin de sous-titres. Notre outil supporte le traitement par lots avec contrôle de sensibilité, durée et intervalles de silence — tout est traité localement dans votre navigateur.',
    
    faqTitle: 'Questions Fréquemment Posées',
    faqs: [
        {
            question: 'Quels formats d\'entrée sont supportés ?',
            answer: 'Notre <strong>convertisseur en ligne</strong> supporte WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE. Plusieurs fichiers peuvent être chargés simultanément.'
        },
        {
            question: 'Qu\'est-ce que le format SRT ?',
            answer: 'SRT (SubRip Text) est l\'un des formats de sous-titres les plus populaires. Il contient des numéros de séquence, des codes temporels et du texte. Supporté par presque tous les lecteurs et éditeurs vidéo.'
        },
        {
            question: 'L\'outil reconnaît-il automatiquement la parole ?',
            answer: 'Actuellement, l\'outil détecte les segments vocaux et les silences par analyse d\'énergie pour générer des codes temporels, mais ne convertit pas la parole en texte automatiquement.'
        },
        {
            question: 'Comment obtenir des codes temporels plus précis ?',
            answer: '1) Utilisez des fichiers audio de haute qualité avec peu de bruit de fond ; 2) Choisissez la sensibilité appropriée ; 3) Ajustez l\'intervalle de silence minimum selon la vitesse de parole ; 4) Appliquez une réduction du bruit si nécessaire.'
        },
        {
            question: 'Peut-on convertir plusieurs fichiers en lot ?',
            answer: 'Absolument ! Notre outil supporte le traitement par lots. Chargez plusieurs fichiers et téléchargez-les individuellement ou comme archive ZIP.'
        },
        {
            question: 'Le processus est-il sécurisé ?',
            answer: 'Totalement sécurisé ! Tout le traitement est effectué localement dans votre navigateur. Vos fichiers ne sont jamais envoyés sur un serveur.'
        },
        {
            question: 'Où utiliser les fichiers SRT ?',
            answer: 'Dans Aegisub, Subtitle Edit, VLC, PotPlayer, Adobe Premiere, Final Cut Pro, DaVinci Resolve et sur YouTube, Vimeo et autres plateformes.'
        }
    ],
    
    tutorialTitle: 'Comment utiliser l\'outil Audio en SRT',
    steps: [
        {
            title: 'Chargez vos fichiers audio',
            description: 'Chargez les fichiers audio à convertir. <strong>Glissez-déposez</strong> ou <strong>cliquez pour parcourir</strong>. Supporte WAV, MP3, FLAC, OGG, AAC, M4A et plus.',
            note: 'Pour de meilleurs résultats, utilisez des fichiers audio clairs avec peu de bruit de fond.'
        },
        {
            title: 'Prévisualisez les fichiers',
            description: 'Après le chargement, la liste des fichiers s\'affiche avec nom, format et taille. Cliquez sur lecture pour vérifier.',
            note: 'En traitement par lots, vérifiez que tous les fichiers sont chargés.'
        },
        {
            title: 'Configurez les paramètres',
            description: 'Ajustez la <strong>sensibilité</strong>, la <strong>durée maximale</strong>, l\'<strong>intervalle de silence minimum</strong> et l\'<strong>encodage</strong>.',
            note: 'Sensibilité moyenne, 5 secondes et 0.5 seconde de silence conviennent à la plupart des audios.'
        },
        {
            title: 'Convertissez en SRT',
            description: 'Cliquez sur <strong>"Convertir en SRT"</strong>. L\'outil analyse l\'énergie audio et détecte les segments vocaux.',
            note: 'Gardez la page ouverte pendant la conversion.'
        },
        {
            title: 'Prévisualisez les résultats',
            description: 'Après la conversion, tous les fichiers SRT s\'affichent avec <strong>aperçu</strong>, nombre, durée et taille.',
            note: 'Les sous-titres générés contiennent un texte fictif remplaçable.'
        },
        {
            title: 'Téléchargez les résultats',
            description: 'Téléchargez individuellement via <strong>"Télécharger SRT"</strong> ou utilisez <strong>"Téléchargement par lots (ZIP)"</strong>.',
            note: 'En téléchargement par lots, les fichiers conservent leur nom avec l\'extension .srt.'
        }
    ],
    
    successTitle: 'Félicitations !',
    successContent: 'Vous avez appris à utiliser notre outil Audio en SRT. Vous pouvez maintenant facilement créer des codes temporels de sous-titres précis.',
    
    relatedToolsTitle: 'Outils Connexes',
    relatedTools: [
        {
            name: 'Audio en MP3',
            description: 'Convertissez l\'audio en MP3 pour réduire la taille.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio en WAV',
            description: 'Convertissez l\'audio en WAV sans perte.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio en MIDI',
            description: 'Convertissez l\'audio en MIDI pour la musique.',
            url: 'https://www.ufreetools.com/tool/audio-to-midi'
        },
        {
            name: 'Audio en M4A',
            description: 'Convertissez l\'audio en M4A pour les appareils Apple.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        }
    ],
    
    referencesTitle: 'Ressources de Référence',
    references: [
        {
            name: 'Spécification du format SRT',
            description: 'Découvrez la spécification technique du format SRT',
            url: 'https://en.wikipedia.org/wiki/SubRip'
        },
        {
            name: 'Détection d\'énergie audio',
            description: 'Algorithmes de détection d\'activité vocale',
            url: 'https://en.wikipedia.org/wiki/Voice_activity_detection'
        },
        {
            name: 'Meilleures pratiques de sous-titres',
            description: 'Workflow professionnel de création de sous-titres',
            url: 'https://en.wikipedia.org/wiki/Subtitle'
        }
    ]
};
