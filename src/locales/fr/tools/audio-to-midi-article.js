export default {
    title: 'Convertisseur Audio en MIDI - outil gratuit en ligne',
    functionTitle: 'Fonctionnalités du convertisseur',
    intro: 'Notre convertisseur audio en MIDI gratuit en ligne permet de transformer facilement des enregistrements audio en fichiers MIDI. C\'est un outil puissant pour les musiciens, compositeurs et producteurs qui fonctionne entièrement dans le navigateur sans installation de logiciel.',
    useCasesTitle: 'Cas d\'utilisation',
    useCases: [
        'Transcrire des mélodies à partir d\'enregistrements audio pour édition dans des éditeurs MIDI',
        'Créer des fichiers MIDI à partir de parties vocales pour utilisation avec des instruments virtuels',
        'Extraire des notes d\'échantillons audio pour arrangement musical',
        'Convertir des parties audio en MIDI pour modification du tempo et de la tonalité',
        'Transformer des idées musicales enregistrées en format MIDI éditable'
    ],
    tipTitle: 'Conseils pour un meilleur résultat',
    tipContent: 'Pour une reconnaissance optimale, utilisez un audio avec une ligne mélodique claire et un bruit de fond minimal. Les enregistrements monophoniques (un instrument ou une voix) sont beaucoup mieux reconnus que les polyphoniques. Si possible, utilisez des formats audio non compressés comme WAV.',
    
    conclusion: '<strong>La conversion audio en MIDI</strong> est particulièrement utile pour les producteurs musicaux, compositeurs, enseignants de musique et mélomanes. En utilisant notre convertisseur audio en MIDI en ligne, vous pouvez extraire les mélodies de n\'importe quel audio en données de notes MIDI éditables, pour une utilisation dans la composition musicale, l\'arrangement, l\'apprentissage et l\'analyse. Notre outil prend en charge le traitement par lots, offre un contrôle de la sensibilité, de la plage de notes, de la quantification temporelle et d\'autres paramètres, tout le traitement est effectué localement dans le navigateur, garantissant la confidentialité et la sécurité de votre audio.',
    
    faqTitle: 'Questions fréquemment posées',
    faqs: [
        {
            question: 'Comment fonctionne la conversion audio en MIDI?',
            answer: 'Le convertisseur analyse le spectre de fréquences du signal audio et détermine les notes, leur durée et leur intensité. Ces informations sont ensuite encodées au format MIDI standard.'
        },
        {
            question: 'Quels types d\'audio conviennent le mieux à la conversion?',
            answer: 'Les meilleurs résultats sont obtenus avec des enregistrements monophoniques où un seul instrument ou une seule voix est présent. Les enregistrements propres sans réverbération, écho ou bruit de fond sont reconnus plus précisément.'
        },
        {
            question: 'Peut-on convertir des compositions musicales complexes?',
            answer: 'Oui, mais les résultats peuvent varier. La reconnaissance polyphonique (plusieurs instruments simultanément) est une tâche difficile et peut nécessiter une correction manuelle du résultat.'
        },
        {
            question: 'Quels paramètres peuvent être ajustés?',
            answer: 'Vous pouvez ajuster la plage de notes reconnues, la sensibilité de détection, la durée minimale des notes et d\'autres paramètres pour optimiser le résultat selon votre matériel audio.'
        },
        {
            question: 'La reconnaissance des percussions est-elle prise en charge?',
            answer: 'La reconnaissance des instruments percussifs a ses particularités. Le programme peut déterminer les moments des frappes, mais la reconnaissance précise des types d\'instruments percussifs est limitée.'
        },
        {
            question: 'Y a-t-il des limitations sur la taille des fichiers?',
            answer: 'La taille maximale du fichier dépend des capacités de votre navigateur. Les fichiers jusqu\'à 50-100 Mo sont généralement pris en charge. Pour les fichiers volumineux, il est recommandé de découper ou compresser l\'audio au préalable.'
        }
    ],
    tutorialTitle: 'Guide étape par étape',
    steps: [
        'Sélectionnez le fichier audio en cliquant sur "Choisir un fichier" ou en glissant le fichier dans la zone de téléchargement',
        'Si nécessaire, ajustez les paramètres de reconnaissance: plage de notes, sensibilité, durée minimale des notes',
        'Cliquez sur le bouton "Démarrer la conversion" pour lancer le processus',
        'Attendez la fin du traitement - le temps dépend de la durée et de la complexité de l\'audio',
        'Écoutez le résultat et si nécessaire téléchargez le fichier MIDI sur votre appareil'
    ],
    successTitle: 'Conversion terminée avec succès',
    successContent: 'Votre fichier MIDI est prêt à être téléchargé. Vous pouvez l\'ouvrir dans n\'importe quel éditeur MIDI ou DAW pour continuer à travailler.',
    relatedToolsTitle: 'Outils associés',
    relatedTools: [
        {
            name: 'Audio en MP3',
            description: 'Convertir l\'audio en format MP3, économiser de l\'espace de stockage pour un partage facile.',
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
            name: 'Audio en PCM',
            description: 'Convertir l\'audio en format PCM brut, adapté au traitement et à l\'analyse audio professionnels.',
            url: 'https://www.ufreetools.com/tool/audio-to-pcm'
        }
    ],
    
    referencesTitle: 'Ressources de référence',
    references: [
        {
            name: 'Standard du format MIDI',
            description: 'En savoir plus sur les spécifications techniques et les cas d\'utilisation du format MIDI',
            url: 'https://en.wikipedia.org/wiki/MIDI'
        },
        {
            name: 'Technologie Audio vers MIDI',
            description: 'Plongée approfondie dans la détection de hauteur et les algorithmes de conversion MIDI',
            url: 'https://en.wikipedia.org/wiki/Audio_to_score'
        },
        {
            name: 'Recherche d\'informations musicales',
            description: 'Explorer la recherche d\'informations musicales et la technologie de transcription musicale automatique',
            url: 'https://en.wikipedia.org/wiki/Music_information_retrieval'
        }
    ]
};
