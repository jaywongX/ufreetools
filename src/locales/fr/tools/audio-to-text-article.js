export default {
    title: 'Outil de conversion audio en texte: Guide d\'utilisation du convertisseur en ligne',
    functionTitle: 'Qu\'est-ce que l\'outil audio en texte et ses utilisations?',
    intro: 'Notre <strong>outil audio en texte</strong> est une application professionnelle de reconnaissance vocale en ligne qui peut convertir WAV, MP3, FLAC, OGG, AAC, M4A et autres formats audio en texte éditable. Utilisant une technologie de reconnaissance vocale avancée, supportant la reconnaissance de plusieurs langues.',
    
    useCasesTitle: 'Scénarios d\'utilisation courants de l\'audio en texte',
    useCases: [
        'Conversion d\'enregistrements de réunions en texte pour rédiger rapidement des comptes rendus',
        'Transcription d\'entretiens pour faciliter l\'édition et l\'analyse',
        'Création de sous-titres vidéo, génération rapide de fichiers sous-titres SRT',
        'Conversion de notes vocales en texte recherchable',
        'Transcription de podcasts pour améliorer l\'accessibilité du contenu',
        'Enregistrement de cours en ligne pour faciliter la révision des étudiants',
        'Conversion d\'enregistrements téléphoniques en texte pour les dossiers client',
        'Aide à l\'apprentissage des langues, comparaison du contenu audio et du texte'
    ],
    
    tipTitle: 'Conseil professionnel:',
    tipContent: 'L\'effet de conversion audio en texte est fortement influencé par la qualité audio. Un audio clair sans bruit avec un débit de parole modéré donne les meilleurs résultats de reconnaissance. Recommandé d\'enregistrer avec un microphone de qualité et d\'éviter le bruit de fond.',
    
    conclusion: 'L\'outil de <strong>conversion audio en texte</strong> est particulièrement utile pour les journalistes, les étudiants, les créateurs de contenu, le personnel du service client et les utilisateurs ayant besoin de traiter la conversion audio en texte.',
    
    faqTitle: 'Questions fréquemment posées',
    faqs: [
        {
            question: 'Quels formats d\'entrée l\'outil audio en texte supporte-t-il?',
            answer: 'Notre <strong>convertisseur audio en texte en ligne</strong> supporte de nombreux formats audio courants, incluant WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE. Vous pouvez télécharger plusieurs fichiers audio de différents formats simultanément pour une conversion par lots.'
        },
        {
            question: 'Quelles langues sont supportées pour la reconnaissance vocale?',
            answer: 'Notre outil supporte la reconnaissance de plusieurs langues, incluant chinois, anglais, japonais, coréen, français, allemand, espagnol, russe, portugais, italien, arabe, hindi et d\'autres langues principales. Vous pouvez choisir "Détection automatique" pour laisser le système reconnaître automatiquement la langue.'
        },
        {
            question: 'Quelles options de format de sortie sont disponibles?',
            answer: 'Nous fournissons trois formats de sortie: <strong>Texte brut (TXT)</strong> - adapté au traitement de texte général; <strong>Fichier sous-titres (SRT)</strong> - avec horodatage, utilisable directement pour les sous-titres vidéo; <strong>Format JSON</strong> - contient des informations détaillées, adapté aux développeurs.'
        },
        {
            question: 'Peut-on convertir par lots plusieurs fichiers audio en texte?',
            answer: 'Absolument! Notre <strong>outil audio en texte</strong> supporte la fonction de traitement par lots. Vous pouvez télécharger plusieurs fichiers audio simultanément (glisser-déposer ou sélection de fichiers supportés), et l\'outil traitera tous les fichiers séquentiellement. Après achèvement, vous pouvez télécharger chaque fichier texte converti séparément ou utiliser la fonction de téléchargement par lots.'
        },
        {
            question: 'Quels facteurs influencent la qualité de conversion?',
            answer: 'La qualité de reconnaissance vocale est influencée par les facteurs suivants: 1) Qualité audio - l\'audio clair sans bruit donne les meilleurs résultats; 2) Débit de parole - un débit modéré est meilleur qu\'un débit trop rapide; 3) Bruit de fond - l\'enregistrement en environnement calme est meilleur; 4) Accent et prononciation - la prononciation standard est reconnue plus précisément.'
        },
        {
            question: 'Le processus de conversion est-il sécurisé? L\'audio est-il téléchargé sur un serveur?',
            answer: 'Entièrement sécurisé! Notre outil utilise des technologies purement front-end, tout le traitement audio se fait localement dans votre navigateur. Vos fichiers audio ne sont pas téléchargés sur un serveur, garantissant la confidentialité et la sécurité des données. Vous pouvez traiter en toute confiance des fichiers audio contenant du contenu sensible.'
        },
        {
            question: 'Comment utiliser un fichier sous-titres SRT?',
            answer: 'SRT est un format de sous-titres universel utilisable dans presque tous les lecteurs vidéo et logiciels de montage: 1) Lecteurs vidéo - VLC, PotPlayer et autres supportent le chargement direct; 2) Logiciels de montage vidéo - Premiere, Final Cut et autres peuvent être importés pour édition; 3) Sites vidéo - YouTube, Bilibili et autres supportent le téléchargement de fichiers sous-titres.'
        }
    ],
    
    tutorialTitle: 'Comment utiliser l\'outil audio en texte',
    steps: [
        {
            title: 'Téléchargez votre fichier audio',
            description: 'D\'abord téléchargez le fichier audio que vous voulez convertir en texte. Vous pouvez télécharger de deux façons: <strong>glisser-déposer le fichier</strong> dans la zone de téléchargement ou <strong>cliquer pour parcourir</strong> et sélectionner le fichier. L\'outil supporte WAV, MP3, FLAC, OGG, AAC, M4A et autres formats, vous pouvez télécharger plusieurs fichiers simultanément pour un traitement par lots.',
            note: 'Recommandé d\'utiliser des fichiers audio clairs sans bruit, l\'audio avec un débit de parole modéré donne les meilleurs résultats de reconnaissance.'
        },
        {
            title: 'Prévisualiser le fichier audio',
            description: 'Après téléchargement, vous verrez la liste de tous les fichiers audio téléchargés dans la zone de prévisualisation gauche. Chaque fichier affiche le nom du fichier, le format et les informations de taille. Vous pouvez cliquer sur le bouton de lecture pour prévisualiser l\'audio et confirmer que vous avez sélectionné les bons fichiers.',
            note: 'Lors du traitement par lots, recommandé de prévisualiser d\'abord la liste audio pour s\'assurer que tous les fichiers à convertir sont correctement téléchargés.'
        },
        {
            title: 'Configurer les paramètres de conversion',
            description: 'Avant la conversion, vous pouvez ajuster les paramètres de sortie. Sélectionnez la <strong>langue de reconnaissance</strong> appropriée (détection automatique ou sélection manuelle), choisissez le <strong>format de sortie</strong> (TXT texte brut, SRT fichier sous-titres ou format JSON), et vous pouvez également choisir d\'<strong>afficher l\'horodatage</strong>.',
            note: 'La sélection manuelle de la langue est généralement plus précise que la détection automatique, recommandé de sélectionner manuellement quand la langue est connue.'
        },
        {
            title: 'Convertir en texte',
            description: 'Après configuration, cliquez sur le bouton <strong>"Convertir en texte"</strong> pour commencer le traitement. L\'outil traitera séquentiellement tous les fichiers audio téléchargés, affichant les informations de progression lors du traitement par lots. Le temps de conversion dépend de la taille des fichiers et de leur nombre.',
            note: 'Veuillez garder la page ouverte pendant la conversion, ne fermez pas l\'onglet du navigateur.'
        },
        {
            title: 'Prévisualiser et éditer les résultats de conversion',
            description: 'Après achèvement de la conversion, la zone de sortie droite affichera tout le texte converti. Vous pouvez voir le texte reconnu, chaque fichier affichant les informations de <strong>nombre de mots</strong> et de <strong>durée</strong>. Si nécessaire, vous pouvez cliquer sur le bouton <strong>"Copier le texte"</strong> pour copier le contenu dans le presse-papiers pour édition.',
            note: 'Recommandé de vérifier manuellement les résultats de conversion, en particulier pour les termes techniques et les noms propres.'
        },
        {
            title: 'Télécharger les résultats de conversion',
            description: 'Une fois satisfait des résultats de conversion, vous pouvez cliquer sur le bouton <strong>"Télécharger TXT"</strong> ou <strong>"Télécharger SRT"</strong> sous chaque fichier pour sauvegarder séparément, ou utiliser le bouton <strong>"Téléchargement par lot (ZIP)"</strong> en haut de la zone de sortie pour empaqueter tous les fichiers texte convertis dans un fichier ZIP unique à télécharger.',
            note: 'Le format SRT contient des horodatages et peut être utilisé directement pour les sous-titres vidéo; le format TXT est adapté au traitement de texte général.'
        }
    ],
    
    successTitle: 'Félicitations!',
    successContent: 'Vous avez appris avec succès comment utiliser notre outil audio en texte. Vous pouvez maintenant facilement convertir divers formats audio en texte éditable, pour l\'utiliser dans les comptes rendus de réunions, la création de sous-titres, les notes vocales et d\'autres usages.',
    
    relatedToolsTitle: 'Outils connexes qui pourraient vous intéresser',
    relatedTools: [
        {
            name: 'Audio en MP3',
            description: 'Convertir l\'audio en format MP3 pour économiser de l\'espace et faciliter le partage.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio en WAV',
            description: 'Convertir l\'audio en format WAV sans perte, adapté au traitement audio professionnel.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio en M4A',
            description: 'Convertir l\'audio en format M4A, compatible avec les appareils Apple, excellente qualité sonore.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio en MIDI',
            description: 'Convertir l\'audio en format MIDI pour l\'utilisation en production et édition musicale.',
            url: 'https://www.ufreetools.com/tool/audio-to-midi'
        }
    ],
    
    referencesTitle: 'Ressources de référence',
    references: [
        {
            name: 'Technologie de reconnaissance vocale',
            description: 'En savoir plus sur les principes de base et l\'histoire du développement de la reconnaissance vocale',
            url: 'https://en.wikipedia.org/wiki/Speech_recognition'
        },
        {
            name: 'Format de sous-titres SRT',
            description: 'En savoir plus sur les spécifications du format de fichier sous-titres SRT',
            url: 'https://en.wikipedia.org/wiki/SubRip'
        },
        {
            name: 'Traitement du langage naturel',
            description: 'Explorer le traitement du langage naturel et la technologie de conversion parole en texte',
            url: 'https://en.wikipedia.org/wiki/Natural_language_processing'
        }
    ]
};
