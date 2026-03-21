export default {
  name: 'Audio en WAV',
  description: 'Convertissez divers formats audio en fichiers audio WAV de haute qualité sans perte',
  longDescription: 'Convertisseur audio en WAV en ligne gratuit. Prend en charge MP3, M4A, FLAC, OGG, AAC, WMA et autres formats vers audio WAV sans perte. Ajustez le taux d\'échantillonnage et les canaux pour maintenir la meilleure qualité.',
  
  selectFile: 'Sélectionner un fichier audio',
  dropFile: 'Ou glissez-déposez les fichiers audio ici',
  supportedFormats: 'Formats pris en charge : MP3, M4A, FLAC, OGG, AAC, WMA, AMR, AIFF, APE, etc.',
  
  converting: 'Conversion en cours...',
  convertComplete: 'Conversion terminée !',
  downloadAll: 'Tout télécharger',
  clearAll: 'Tout effacer',
  
  settings: {
    title: 'Paramètres de conversion',
    sampleRate: 'Taux d\'échantillonnage',
    sampleRates: {
      '22050': '22050 Hz (Qualité voix)',
      '44100': '44100 Hz (Qualité CD)',
      '48000': '48000 Hz (Qualité professionnelle)',
      '96000': '96000 Hz (Haute résolution)',
      '192000': '192000 Hz (Qualité studio)'
    },
    channels: 'Canaux',
    channelOptions: {
      stereo: 'Stéréo',
      mono: 'Mono'
    },
    bitDepth: 'Profondeur de bits',
    bitDepths: {
      '16': '16 bits (Standard CD)',
      '24': '24 bits (Professionnel)',
      '32': '32 bits (Studio)'
    },
    volume: 'Volume',
    volumeLabel: 'Réglage du volume'
  },
  
  errors: {
    selectFile: 'Veuillez sélectionner un fichier audio',
    unsupportedFormat: 'Format de fichier non pris en charge',
    conversionFailed: 'Échec de la conversion, veuillez réessayer',
    fileTooLarge: 'Fichier trop volumineux, veuillez sélectionner des fichiers de moins de 100 Mo'
  },
  
  fileInfo: {
    name: 'Nom du fichier',
    size: 'Taille',
    duration: 'Durée',
    format: 'Format original',
    status: 'Statut',
    actions: 'Actions'
  },
  
  status: {
    pending: 'En attente',
    processing: 'Traitement',
    completed: 'Terminé',
    failed: 'Échec'
  },
  
  features: {
    title: 'Caractéristiques',
    list: [
      'Prend en charge plusieurs formats audio vers WAV',
      'Plusieurs taux d\'échantillonnage (22050Hz-192000Hz)',
      'Profondeur de bits sélectionnable (16/24/32 bits)',
      'Support stéréo et mono',
      'Réglage du volume',
      'Traitement par lots',
      'Maintient la qualité originale',
      'Entièrement gratuit, sans inscription'
    ]
  },
  
  article: {
    title: 'Guide du Convertisseur Audio en WAV',
    subtitle: 'Qu\'est-ce que le format WAV ?',
    description: 'WAV (Waveform Audio File Format) est un format audio sans perte développé par Microsoft, largement utilisé dans la production audio professionnelle, les studios d\'enregistrement et la radiodiffusion. En tant que l\'un des formats audio numériques les plus originaux, WAV conserve toutes les données audio, offrant une expérience de qualité optimale.',
    
    whyConvert: {
      title: 'Pourquoi convertir en WAV ?',
      reasons: [
        {
          title: 'Audio sans perte',
          description: 'WAV utilise une compression sans perte, préservant tous les détails de l\'audio original, le premier choix des audiophiles et des professionnels.'
        },
        {
          title: 'Édition professionnelle',
          description: 'Les logiciels d\'édition audio professionnels comme Adobe Audition et Pro Tools prennent en charge préférentiellement WAV.'
        },
        {
          title: 'Large compatibilité',
          description: 'Presque tous les lecteurs audio et systèmes d\'exploitation prennent en charge WAV.'
        },
        {
          title: 'Archive d\'enregistrements',
          description: 'WAV est le format idéal pour les fichiers d\'enregistrement.'
        }
      ]
    },
    
    howToUse: {
      title: 'Comment utiliser le convertisseur audio en WAV',
      steps: [
        {
          step: 'Étape 1',
          description: 'Sélectionnez ou glissez les fichiers audio que vous souhaitez convertir.'
        },
        {
          step: 'Étape 2',
          description: 'Ajustez le taux d\'échantillonnage, la profondeur de bits et les canaux selon vos besoins.'
        },
        {
          step: 'Étape 3',
          description: 'Cliquez sur "Démarrer la conversion" et attendez la fin.'
        },
        {
          step: 'Étape 4',
          description: 'Téléchargez le fichier WAV converti.'
        }
      ]
    },
    
    faqs: [
      {
        question: 'Quelle est la différence entre WAV et MP3 ?',
        answer: 'WAV est un format sans perte qui conserve toutes les données audio, fichiers plus volumineux mais meilleure qualité ; MP3 est un format avec perte, fichiers plus petits mais perd en qualité.'
      },
      {
        question: 'Quel taux d\'échantillonnage dois-je choisir ?',
        answer: 'Pour un usage général, 44100Hz (qualité CD) est recommandé ; pour l\'enregistrement professionnel 48000Hz ou plus ; pour l\'enregistrement vocal 22050Hz suffit.'
      },
      {
        question: 'Pourquoi les fichiers WAV sont-ils si volumineux ?',
        answer: 'WAV est un format sans perte qui conserve toutes les données audio originales sans compression, donc la taille du fichier est plus importante.'
      },
      {
        question: 'Puis-je convertir WAV en d\'autres formats ?',
        answer: 'Oui, notre outil prend également en charge la conversion de WAV vers MP3, M4A et d\'autres formats.'
      }
    ],
    
    relatedTools: [
      {
        name: 'Audio en MP3',
        description: 'Convertissez l\'audio au format MP3 avec la meilleure compatibilité.',
        url: 'https://www.ufreetools.com/tools/audio-to-mp3'
      },
      {
        name: 'Audio en M4A',
        description: 'Convertissez l\'audio au format M4A idéal pour les appareils Apple.',
        url: 'https://www.ufreetools.com/tools/audio-to-m4a'
      },
      {
        name: 'Image en Art ASCII',
        description: 'Convertissez des images en art de caractères ASCII pour des effets artistiques uniques.',
        url: 'https://www.ufreetools.com/tools/image-to-ascii'
      }
    ],
    
    references: [
      {
        title: 'Wikipédia Format WAV',
        url: 'https://fr.wikipedia.org/wiki/WAV'
      },
      {
        title: 'Fondamentaux de l\'Audio Numérique',
        url: 'https://www.ufreetools.com/blog/digital-audio-basics'
      }
    ]
  }
}
