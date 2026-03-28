export default {
    title: 'Éditeur Visuel Audio: Guide de l\'Éditeur de Forme d\'Onde Audio en Ligne',
    functionTitle: 'Qu\'est-ce que l\'Éditeur Visuel Audio et ses Utilisations?',
    intro: 'Notre <strong>Éditeur Visuel Audio</strong> est une application professionnelle d\'édition de forme d\'onde audio en ligne qui prend en charge l\'édition visuelle de WAV, MP3, FLAC, OGG, AAC, M4A et d\'autres formats audio. Avec une interface intuitive d\'affichage de forme d\'onde, vous pouvez sélectionner avec précision des segments audio et effectuer des opérations d\'édition professionnelles comme découper, supprimer, fondu entrée/sortie, ajustement du volume, muet, normaliser et inverser.',
    
    useCasesTitle: 'Cas d\'Utilisation Courants pour l\'Édition Visuelle Audio',
    useCases: [
        'Éditer et découper des fichiers audio, supprimer les parties indésirables',
        'Produire des podcasts et des émissions radio avec post-production audio',
        'Créer de la musique de fond pour des vidéos, ajuster la durée et les effets audio',
        'Créer des sonneries et des sons de notification, découper des clips audio',
        'Traiter des enregistrements vocaux, supprimer le silence et le bruit',
        'Créer des mixes musicaux, combiner plusieurs clips audio',
        'Ajuster le volume audio, effectuer une normalisation',
        'Ajouter des effets de fondu entrée/sortie pour des transitions plus douces'
    ],
    
    tipTitle: 'Conseil Professionnel:',
    tipContent: 'Nous recommandons de sauvegarder vos fichiers audio originaux avant l\'édition. Utilisez la fonction de sélection pour choisir avec précision les segments audio que vous souhaitez éditer. Les effets de fondu entrée/sortie rendent les transitions audio plus naturelles. La fonction de normalisation optimise le niveau de volume global de l\'audio.',
    
    conclusion: '<strong>L\'Éditeur Visuel Audio</strong> est particulièrement utile pour les producteurs de podcasts, les passionnés de musique, les créateurs de vidéos et les débutants en édition audio. Avec notre éditeur audio en ligne, vous pouvez effectuer une édition audio précise dans une interface de forme d\'onde intuitive, prenant en charge diverses opérations professionnelles comme découper, supprimer, fondu entrée/sortie, muet, normaliser et inverser.',
    
    faqTitle: 'Questions Fréquentes',
    faqs: [
        {
            question: 'Quels formats d\'entrée l\'Éditeur Visuel Audio prend-il en charge?',
            answer: 'Notre <strong>Éditeur Audio en Ligne</strong> prend en charge de nombreux formats audio courants incluant WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE et plus. Vous pouvez télécharger n\'importe quel format supporté pour l\'éditer, et exporter en WAV ou MP3 après l\'édition.'
        },
        {
            question: 'Comment sélectionner un segment audio à éditer?',
            answer: 'Dans la zone d\'affichage de forme d\'onde, maintenez le bouton gauche de la souris enfoncé et glissez pour sélectionner un segment audio. La zone sélectionnée sera surlignée en bleu, affichant le temps de début, temps de fin et durée de la sélection. Après la sélection, vous pouvez utiliser des outils d\'édition comme découper, supprimer, fondu entrée/sortie, etc.'
        },
        {
            question: 'Que font les effets de fondu entrée/sortie?',
            answer: 'L\'effet de fondu entrée augmente progressivement l\'audio du silence au volume normal, tandis que l\'effet de fondu sortie diminue progressivement l\'audio du volume normal au silence. Ces effets rendent le début et la fin de l\'audio plus naturels, évitant les changements de volume soudains, particulièrement adaptés à la musique de fond et aux transitions audio.'
        },
        {
            question: 'Qu\'est-ce que la fonction de normalisation?',
            answer: 'La normalisation est le processus d\'ajustement du volume audio à un niveau optimal. Elle analyse le volume maximum dans l\'audio, puis ajuste proportionnellement le volume global pour que le volume maximum atteigne proche mais ne dépasse pas le maximum autorisé (généralement -0.5dB). Cela rend le volume global de l\'audio plus plein tout en évitant la distorsion d\'écrêtage.'
        },
        {
            question: 'Le processus d\'édition est-il sécurisé? L\'audio sera-t-il téléchargé sur des serveurs?',
            answer: 'Entièrement sécurisé! Notre outil utilise une technologie frontend pure, tout le traitement audio est effectué localement dans votre navigateur. Vos fichiers audio ne sont pas téléchargés sur aucun serveur, garantissant la confidentialité et la sécurité des données. Vous pouvez éditer en toute confiance des fichiers audio contenant du contenu sensible.'
        },
        {
            question: 'Quels formats puis-je exporter?',
            answer: 'Après l\'édition, vous pouvez exporter en WAV (format sans perte) ou MP3 (format compressé). Si vous n\'avez sélectionné qu\'une partie de l\'audio, vous pouvez choisir d\'exporter l\'audio complet ou seulement la sélection. Le taux d\'échantillonnage original et le nombre de canaux sont préservés lors de l\'export.'
        }
    ],
    
    tutorialTitle: 'Comment Utiliser l\'Éditeur Visuel Audio',
    steps: [
        {
            title: 'Télécharger Votre Fichier Audio',
            description: 'Téléchargez d\'abord le fichier audio que vous souhaitez éditer. Vous pouvez télécharger de deux manières: <strong>glisser le fichier</strong> dans la zone de téléchargement ou <strong>cliquer sur parcourir</strong> pour sélectionner un fichier. L\'outil prend en charge WAV, MP3, FLAC, OGG, AAC, M4A et de nombreux autres formats.',
            note: 'Nous recommandons d\'utiliser des formats sans perte (comme WAV, FLAC) pour l\'édition afin de maintenir la meilleure qualité audio.'
        },
        {
            title: 'Voir la Forme d\'Onde Audio',
            description: 'Après le téléchargement, la forme d\'onde audio s\'affichera automatiquement dans la zone d\'édition. La forme d\'onde montre les changements d\'amplitude de l\'audio, vous permettant de voir visuellement la structure audio. Les informations du fichier s\'affichent ci-dessus, incluant la durée, le taux d\'échantillonnage et le nombre de canaux.',
            note: 'Les pics dans la forme d\'onde représentent les parties plus fortes, tandis que les zones plates représentent les parties plus douces ou silencieuses.'
        },
        {
            title: 'Sélectionner la Région d\'Édition',
            description: '<strong>Maintenez le bouton gauche de la souris enfoncé et glissez</strong> sur la forme d\'onde pour sélectionner un segment audio. La zone sélectionnée sera surlignée en bleu, affichant la plage horaire de la sélection. Vous pouvez lire la sélection pour confirmer qu\'elle est correcte.',
            note: 'Si aucune région n\'est sélectionnée, certains outils d\'édition (comme normaliser) s\'appliqueront à tout l\'audio.'
        },
        {
            title: 'Utiliser les Outils d\'Édition',
            description: 'Après avoir sélectionné une région, utilisez les outils d\'édition ci-dessous: <strong>Découper</strong> garde la sélection et supprime les autres parties, <strong>Supprimer</strong> supprime la sélection, <strong>Fondu Entrée/Sortie</strong> ajoute des effets de dégradé, <strong>Muet</strong> rend la sélection muette, <strong>Normaliser</strong> optimise le volume, <strong>Inverser</strong> lit l\'audio à l\'envers.',
            note: 'Les opérations d\'édition prennent effet immédiatement, nous recommandons de vérifier soigneusement les résultats avant l\'export.'
        },
        {
            title: 'Lire et Prévisualiser',
            description: 'Utilisez les contrôles de lecture pour <strong>lire/mettre en pause</strong>, <strong>avancer/reculer</strong>, et <strong>arrêter</strong> l\'audio. Une ligne indicatrice rouge affiche la position de lecture actuelle. Vous pouvez également ajuster le curseur de volume pour contrôler le volume de lecture.',
            note: 'L\'ajustement du volume de lecture n\'affecte pas l\'audio exporté, qui maintient le niveau de volume original.'
        },
        {
            title: 'Exporter les Résultats d\'Édition',
            description: 'Lorsque vous êtes satisfait des résultats d\'édition, sélectionnez le format d\'export (WAV ou MP3), puis cliquez sur le bouton <strong>"Exporter Audio Complet"</strong> ou <strong>"Exporter Sélection"</strong>. Le fichier sera automatiquement téléchargé sur votre appareil. Tout le traitement est effectué localement dans le navigateur, garantissant la confidentialité et la sécurité audio.',
            note: 'Le format WAV maintient une qualité sans perte mais une taille de fichier plus grande; le format MP3 a une taille de fichier plus petite, adaptée au partage.'
        }
    ],
    
    successTitle: 'Félicitations!',
    successContent: 'Vous avez appris avec succès comment utiliser notre Éditeur Visuel Audio. Vous pouvez maintenant facilement éditer des fichiers audio dans divers formats, effectuer des opérations professionnelles comme découper, fondu entrée/sortie, ajustement du volume et plus, satisfaisant divers besoins comme la production de podcasts, l\'édition musicale et le traitement audio.',
    
    relatedToolsTitle: 'Outils Connexes',
    relatedTools: [
        {
            name: 'Audio en MP3',
            description: 'Convertir l\'audio en format MP3, économiser l\'espace de stockage et facile à partager.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio en WAV',
            description: 'Convertir l\'audio en format WAV sans perte, adapté au traitement audio professionnel.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio en M4A',
            description: 'Convertir l\'audio en format M4A, haute qualité avec petite taille.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio en Texte',
            description: 'Convertir la parole audio en texte, prend en charge plusieurs langues.',
            url: 'https://www.ufreetools.com/tool/audio-to-text'
        }
    ],
    
    referencesTitle: 'Références',
    references: [
        {
            name: 'Principes d\'Édition de Forme d\'Onde Audio',
            description: 'En savoir plus sur les principes techniques d\'affichage et d\'édition de forme d\'onde audio',
            url: 'https://en.wikipedia.org/wiki/Waveform'
        },
        {
            name: 'Traitement Audio Numérique',
            description: 'Approfondir les techniques de traitement et d\'édition audio numérique',
            url: 'https://en.wikipedia.org/wiki/Digital_audio_editing'
        },
        {
            name: 'Guide des Formats Audio',
            description: 'Connaître les caractéristiques et cas d\'utilisation de différents formats audio',
            url: 'https://en.wikipedia.org/wiki/Audio_file_format'
        }
    ]
};
