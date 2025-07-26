export default {
  name: 'Convertisseur JFIF vers JPG',
  description: 'Convertir en ligne des images JFIF au format JPG, haute qualité, plusieurs options',
  tags: ['image', 'conversion', 'jpg', 'jfif', 'jpeg', 'format', 'outil'],

  meta: {
    title: 'Convertisseur JFIF vers JPG - Outil de conversion d\'image en ligne gratuit',
    description: 'Convertir gratuitement JFIF en JPG en ligne. Conversion rapide et sécurisée dans le navigateur, prise en charge du traitement par lots, prévisualisation comparative et paramètres de qualité avancés. Sans filigrane, aucune inscription requise.'
  },

  upload: {
    title: 'Convertisseur JFIF vers JPG',
    subtitle: 'Convertissez vos images JFIF en JPG avec une qualité parfaite',
    dropzone: 'Glissez-déposez vos fichiers JFIF ici',
    dropzoneActive: 'Relâchez les fichiers pour commencer la conversion',
    maxSize: 'Taille maximale des fichiers : 50 Mo',
    supportedFormats: 'Formats pris en charge : JFIF, JPEG, JPG'
  },

  settings: {
    title: 'Paramètres de conversion',
    advanced: 'Paramètres avancés',
    quality: {
      label: 'Qualité de l\'image',
      description: 'Une qualité plus élevée produira des fichiers plus volumineux',
      auto: 'Optimisation automatique (recommandé)'
    },
    qualityLabels: {
      maximum: 'Qualité maximale',
      high: 'Haute qualité',
      good: 'Bonne qualité',
      medium: 'Qualité moyenne',
      low: 'Basse qualité',
      veryLow: 'Très basse qualité'
    },
    metadata: {
      label: 'Métadonnées de l\'image',
      preserve: 'Conserver toutes les métadonnées (EXIF, GPS, etc.)',
      strip: 'Supprimer toutes les métadonnées (fichier plus petit)',
      keepBasic: 'Ne conserver que les métadonnées de base'
    },
    filenameOption: 'Nom du fichier de sortie',
    filenameOriginal: 'Original',
    filenameConverted: 'Ajouter un préfixe',
    filenameCustom: 'Personnalisé',
    filenameTemplatePlaceholder: 'Exemple : converti-{name}',
    filenameTemplateHelp: 'Utilisez {name} pour insérer le nom de fichier original',
    preserveMetadata: 'Conserver les métadonnées de l\'image'
  },

  preview: {
    title: 'Aperçu de l\'image',
    before: 'Image JFIF originale',
    after: 'Aperçu JPG',
    noPreview: 'Aucun aperçu disponible',
    togglePreview: 'Afficher/Masquer l\'aperçu',
    imageDetails: 'Détails de l\'image'
  },

  fileTable: {
    fileName: 'Nom du fichier',
    type: 'Type',
    size: 'Taille',
    status: 'Statut',
    preview: 'Aperçu',
    pending: 'En attente',
    converting: 'Conversion en cours...',
    done: 'Terminé',
    error: 'Erreur',
    progress: 'Progression'
  },

  results: {
    title: 'Fichiers convertis',
    summary: '{count} fichiers convertis, économisant {saved} d\'espace au total',
    originalName: 'Nom original',
    convertedName: 'Nom converti',
    originalSize: 'Taille originale',
    convertedSize: 'Nouvelle taille',
    compressionRate: 'Taux de compression',
    actions: 'Actions',
    noResults: 'Aucun résultat de conversion pour le moment'
  },

  actions: {
    selectFile: 'Sélectionner un fichier',
    addMore: 'Ajouter plus',
    clear: 'Effacer les fichiers',
    convertAll: 'Convertir tous les fichiers',
    converting: 'Conversion en cours...',
    download: 'Télécharger',
    downloadAll: 'Télécharger tout',
    clearResults: 'Effacer les résultats',
    viewDetails: 'Voir les détails',
    compare: 'Comparer',
    retry: 'Réessayer les échecs',
    cancelAll: 'Annuler tout',
    optimizeAll: 'Optimisation automatique'
  },

  messages: {
    noValidFiles: 'Veuillez sélectionner des fichiers JFIF ou JPEG valides.',
    conversionError: 'Une erreur s\'est produite lors de la conversion du fichier. Veuillez réessayer.',
    conversionSuccess: 'Tous les fichiers ont été convertis avec succès !',
    partialSuccess: '{success} fichiers sur {total} convertis avec succès.',
    downloadStarted: 'Téléchargement démarré...',
    processingFiles: 'Traitement de vos fichiers en cours...',
    dragActive: 'Glissez-déposez des fichiers ici pour les téléverser',
    fileSizeExceeded: 'La taille du fichier dépasse la limite de 50 Mo',
    unsupportedFormat: 'Format de fichier non pris en charge'
  },

  history: {
    title: 'Conversions récentes',
    empty: 'Aucune conversion récente',
    clear: 'Effacer l\'historique',
    restore: 'Restaurer les fichiers'
  },

  info: {
    title: 'À propos de la conversion JFIF vers JPG',
    description: 'Notre convertisseur JFIF vers JPG vous permet de convertir rapidement et facilement des fichiers d\'image JFIF au format JPG plus largement compatible, tout le traitement étant effectué en toute sécurité dans votre navigateur.',
    
    whatIs: {
      title: 'Qu\'est-ce que le JFIF ?',
      content: 'JFIF (JPEG File Interchange Format) est une norme de format de fichier pour les fichiers JPEG. Il fournit des informations supplémentaires telles que la résolution, le rapport d\'aspect et d\'autres métadonnées qui aident à garantir que les images JPEG s\'affichent correctement sur différents appareils et plates-formes. Bien que le JFIF et le JPG soient techniquement des formats apparentés, certains logiciels et appareils peuvent avoir une meilleure compatibilité avec l\'un ou l\'autre.'
    },
    
    whyConvert: {
      title: 'Pourquoi convertir JFIF en JPG ?',
      reason1: 'Meilleure compatibilité avec diverses applications et appareils',
      reason2: 'Plus facile à téléverser sur des sites Web qui pourraient rejeter le format JFIF',
      reason3: 'Normaliser votre collection d\'images avec une extension de fichier cohérente',
      reason4: 'Résoudre les problèmes lorsque certains programmes ne parviennent pas à ouvrir ou à afficher correctement les fichiers JFIF'
    },
    
    howItWorks: {
      title: 'Comment ça marche',
      content: 'Notre convertisseur traite les fichiers JFIF entièrement dans votre navigateur. Vos images ne sont jamais téléversées sur un serveur, garantissant une confidentialité et une sécurité totales. L\'outil lit les données de l\'image JFIF, la rend et l\'enregistre au format JPG standard avec les paramètres de qualité que vous avez choisis.'
    },
    
    tips: {
      title: 'Conseils pour obtenir les meilleurs résultats',
      tip1: 'Utilisez le curseur de qualité pour équilibrer la taille du fichier et la qualité de l\'image',
      tip2: 'Pour les images contenant du texte ou des détails nets, utilisez des paramètres de qualité plus élevés',
      tip3: 'Convertissez plusieurs fichiers en une seule fois et téléchargez-les sous forme de fichier ZIP',
      tip4: 'Utilisez "Optimisation automatique" pour le meilleur équilibre entre qualité et taille de fichier',
      tip5: 'Lorsque la confidentialité est importante, supprimez les métadonnées pour obtenir des fichiers plus petits'
    },
    
    privacy: {
      title: 'Confidentialité et sécurité',
      content: 'Nous prenons votre vie privée au sérieux. Tout le traitement est effectué directement dans votre navigateur - vos fichiers ne sont jamais téléversés sur un serveur. Cela garantit une sécurité et une confidentialité totales pour vos images.'
    }
  }
};