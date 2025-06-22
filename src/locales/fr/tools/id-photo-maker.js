export default {
    name: 'Générateur de photos d\'identité',
    description: 'Créez des photos d\'identité professionnelles avec des arrière-plans et des dimensions personnalisables',
    upload: {
      title: 'Télécharger une image',
      dropzone: 'Glissez-déposez une image ici ou cliquez pour parcourir',
      or: 'ou',
      camera: 'Prendre une photo avec l\'appareil photo',
      constraints: 'Taille maximale : 10MB. Formats : JPG, PNG, WEBP',
      takePicture: 'Prendre une photo',
      retake: 'Reprendre'
    },
    editing: {
      title: 'Éditer la photo',
      faceDetection: 'Détection de visage',
      autoDetect: 'Détection automatique du visage',
      manualMode: 'Ajustement manuel',
      zoom: 'Zoom',
      rotate: 'Rotation',
      brightness: 'Luminosité',
      contrast: 'Contraste',
      saturation: 'Saturation',
      filters: 'Filtres'
    },
    background: {
      title: 'Arrière-plan',
      original: 'Original',
      white: 'Blanc',
      blue: 'Bleu',
      red: 'Rouge',
      custom: 'Couleur personnalisée',
      transparent: 'Transparent'
    },
    size: {
      title: 'Dimensions de la photo',
      presets: 'Pré-définis',
      custom: 'Dimensions personnalisées',
      width: 'Largeur',
      height: 'Hauteur',
      unit: 'Unité',
      mm: 'Millimètres',
      inches: 'Pouces',
      pixels: 'Pixels'
    },
    presets: {
      passport: 'Passeport (35×45 mm)',
      visa: 'Visa (2×2 pouces)',
      drivingLicense: 'Permis de conduire (2.5×3 pouces)',
      idCard: 'Carte d\'identité (25×35 mm)',
      linkedin: 'LinkedIn (400×400 px)',
      schengen: 'Visa Schengen (35×45 mm)',
      chinese: 'Visa chinois (33×48 mm)',
      indian: 'Visa indien (2×2 pouces)'
    },
    output: {
      title: 'Résultat',
      preview: 'Aperçu',
      grid: 'Photos multiples',
      columns: 'Colonnes',
      rows: 'Lignes',
      spacing: 'Espacement',
      background: 'Arrière-plan de la page',
      paperSize: 'Format du papier',
      download: 'Télécharger',
      print: 'Imprimer',
      downloadAs: 'Télécharger en',
      jpg: 'Image JPG',
      png: 'Image PNG',
      pdf: 'Document PDF'
    },
    actions: {
      apply: 'Appliquer',
      reset: 'Réinitialiser',
      undo: 'Annuler',
      redo: 'Rétablir',
      save: 'Enregistrer la photo',
      share: 'Partager'
    },
    messages: {
      noFaceDetected: 'Aucun visage détecté. Essayez un ajustement manuel ou utilisez une photo différente.',
      multipleFacesDetected: 'Plusieurs visages détectés. Utilisation du visage le plus grand.',
      processing: 'Traitement de votre photo...',
      downloadReady: 'Votre photo est prête à être téléchargée',
      photoSaved: 'Photo enregistrée avec succès'
    }
  }