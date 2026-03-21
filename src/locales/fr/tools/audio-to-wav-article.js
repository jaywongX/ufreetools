export default {
  title: 'Guide du Convertisseur Audio en WAV',
  subtitle: 'Qu\'est-ce que le format WAV ?',
  description: 'WAV (Waveform Audio File Format) est un format audio sans perte développé par Microsoft, largement utilisé dans la production audio professionnelle, les studios d\'enregistrement et la radiodiffusion.',
  
  whyConvert: {
    title: 'Pourquoi convertir en WAV ?',
    reasons: [
      {
        title: 'Audio sans perte',
        description: 'WAV utilise une compression sans perte, préservant tous les détails de l\'audio original.'
      },
      {
        title: 'Édition professionnelle',
        description: 'Les logiciels d\'édition audio professionnels prennent en charge préférentiellement WAV.'
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
  
  useCases: {
    title: 'Cas d\'utilisation courants',
    cases: [
      'Production musicale professionnelle et mastering',
      'Archivage de fichiers d\'enregistrement studio',
      'Archives audio des stations de radio',
      'Post-production et traitement audio',
      'Échantillonnage audio haute qualité',
      'Production d\'effets sonores pour jeux',
      'Traitement des pistes audio vidéo'
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
        description: 'Ajustez le taux d\'échantillonnage, la profondeur de bits et les canaux.'
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
      answer: 'WAV est sans perte avec fichiers plus volumineux et meilleure qualité ; MP3 est avec perte, fichiers plus petits mais perd en qualité.'
    },
    {
      question: 'Quel taux d\'échantillonnage dois-je choisir ?',
      answer: 'Pour un usage général 44100Hz (qualité CD) ; pour l\'enregistrement professionnel 48000Hz ou plus ; pour la voix 22050Hz suffit.'
    },
    {
      question: 'Pourquoi les fichiers WAV sont-ils si volumineux ?',
      answer: 'WAV est sans perte et conserve toutes les données audio originales sans compression.'
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
      description: 'Convertissez des images en art de caractères ASCII.',
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
