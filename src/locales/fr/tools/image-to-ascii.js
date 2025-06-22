export default {
    name: 'Image vers ASCII',
    description: 'Convertit des images en art ASCII avec des options personnalisables',
    upload: {
      title: 'Télécharger une image',
      dropzone: 'Glissez-déposez une image ici ou cliquez pour parcourir',
      maxSize: 'Taille maximale : 5 Mo',
      supportedFormats: 'Formats supportés : JPG, PNG, WEBP, GIF',
      pasteImage: 'Ou collez une image depuis le presse-papiers'
    },
    options: {
      title: 'Options de conversion',
      width: 'Largeur de sortie',
      height: 'Hauteur de sortie',
      preserveAspect: 'Conserver les proportions',
      colored: 'Sortie en couleur',
      charSet: 'Jeu de caractères',
      charSets: {
        standard: 'Standard',
        simple: 'Simple',
        complex: 'Complexe',
        blocks: 'Caractères bloc',
        custom: 'Personnalisé'
      },
      customChars: 'Caractères personnalisés',
      invert: 'Inverser les couleurs',
      threshold: 'Seuil de luminosité',
      brightness: 'Luminosité',
      contrast: 'Contraste',
      fontFamily: 'Police de caractères',
      fontSize: 'Taille de police',
      lineHeight: 'Hauteur de ligne',
      backgroundColor: 'Couleur de fond',
      textColor: 'Couleur du texte'
    },
    output: {
      title: 'Sortie ASCII',
      preview: 'Aperçu',
      raw: 'ASCII brut',
      html: 'HTML',
      copyToClipboard: 'Copier dans le presse-papiers',
      downloadTxt: 'Télécharger en TXT',
      downloadHtml: 'Télécharger en HTML',
      downloadImage: 'Télécharger en image',
      stats: {
        title: 'Statistiques',
        characters: 'Nombre de caractères',
        lines: 'Nombre de lignes',
        colors: 'Nombre de couleurs',
        size: 'Taille du texte'
      }
    },
    presets: {
      title: 'Préréglages',
      save: 'Sauvegarder les paramètres actuels',
      load: 'Charger un préréglage',
      delete: 'Supprimer un préréglage',
      presetName: 'Nom du préréglage',
      default: 'Par défaut',
      detailed: 'Détaillé',
      minimalist: 'Minimaliste',
      blocky: 'Style bloc',
      small: 'Petit',
      inverted: 'Inversé'
    },
    adjustment: {
      title: 'Ajustement de l\'image',
      grayscale: 'Niveaux de gris',
      negative: 'Négatif',
      resize: 'Redimensionner avant conversion',
      crop: 'Recadrer l\'image',
      rotate: 'Rotation',
      flipH: 'Retournement horizontal',
      flipV: 'Retournement vertical'
    },
    animation: {
      title: 'Animation',
      animated: 'Traiter comme animation',
      frameDelay: 'Délai entre images',
      loop: 'Boucle d\'animation',
      loopCount: 'Nombre de boucles',
      extractFrame: 'Extraire l\'image actuelle'
    },
    actions: {
      convert: 'Convertir en ASCII',
      resetOptions: 'Réinitialiser les options',
      refreshPreview: 'Rafraîchir l\'aperçu',
      loadImage: 'Charger une nouvelle image',
      applyChanges: 'Appliquer les modifications',
      selectImage: 'Sélectionner une image',
      reset: 'Réinitialiser',
      processing: 'Traitement en cours...',
      generate: 'Générer ASCII',
      copy: 'Copier',
      download: 'Télécharger'
    },
    messages: {
      converting: 'Conversion de l\'image en ASCII...',
      conversionComplete: 'Conversion terminée',
      conversionFailed: 'Échec de la conversion : {error}',
      copied: 'ASCII copié dans le presse-papiers',
      downloadStarted: 'Téléchargement démarré',
      downloadComplete: 'ASCII téléchargé',
      downloadFailed: 'Échec du téléchargement',
      copyFailed: 'Échec de la copie',
      resetComplete: 'Réinitialisation terminée',
      asciiGenerated: 'Art ASCII généré',
      generationFailed: 'Échec de la génération ASCII',
      presetSaved: 'Préréglage sauvegardé',
      presetLoaded: 'Préréglage chargé',
      presetDeleted: 'Préréglage supprimé',
      invalidImage: 'Format d\'image invalide ou fichier corrompu',
      imageTooBig: 'L\'image est trop grande pour la conversion',
      selectOrLoad: 'Veuillez sélectionner une image ou charger depuis une URL',
      asciiWillDisplay: 'L\'ASCII s\'affichera ici',
      customCharsPlaceholder: 'Entrez des caractères du plus sombre au plus clair...',
      tip: 'Ajustez les paramètres puis cliquez sur "Générer ASCII" pour voir le résultat',
      drapPlaceHolder: 'Sélectionnez ou glissez-déposez une image ici',
      noImage: 'Veuillez d\'abord sélectionner une image',
      generateAscii: 'Cliquez sur "Générer ASCII" pour convertir l\'image',
      tip2: 'Astuce : Utilisez le bouton Copier pour mettre l\'ASCII dans le presse-papiers, ou Télécharger pour le sauvegarder.'
    },
    charSets: {
      standard: 'Standard',
      simple: 'Simple',
      blocks: 'Blocs',
      custom: 'Personnalisé'
    },
    settings: {
      title: 'Paramètres ASCII',
      customCharsetLabel: 'Jeu de caractères personnalisé (du plus sombre au plus clair)',
      asciiWidth: 'Largeur ASCII',
      invert: 'Inverser les couleurs',
      colored: 'Sortie en couleur',
      fontSize: 'Taille de police'
    },
    preview: {
      originalImage: 'Image originale',
      generatedAscii: 'ASCII généré'
    },
    article: {
      title: "Conversion d'image en art ASCII : Transformez vos photos en œuvres textuelles",
      features: {
        title: "Comprendre la conversion image-ASCII",
        description: "Ce <strong>convertisseur image vers ASCII</strong> est un <strong>générateur d'art textuel</strong> spécialisé qui transforme des images normales en œuvres artistiques utilisant divers caractères ASCII. Cet <strong>outil de création ASCII</strong> analyse la luminosité de chaque pixel et les mappe à des caractères ASCII correspondants.<br><br>Contrairement aux <strong>créateurs d'art textuel</strong> basiques, notre outil offre des options de personnalisation complètes incluant largeur ajustable, multiples jeux de caractères, conservation des couleurs et contrôle d'inversion. Ce <strong>convertisseur ASCII</strong> supporte divers formats (JPG, PNG, GIF) et constitue une méthode unique pour représenter du contenu visuel sous forme textuelle.",
        useCases: {
          title: "Cas d'utilisation pratiques de l'art ASCII",
          items: [
            "<strong>Messagerie créative</strong> : Améliorez signatures email, posts réseaux sociaux avec des <strong>images ASCII</strong> uniques",
            "<strong>Projets de programmation</strong> : Intégrez de l'art ASCII dans des interfaces ligne de commande ou jeux textuels",
            "<strong>Matériel éducatif</strong> : Créez des représentations visuelles accessibles",
            "<strong>Projets artistiques</strong> : Explorez l'intersection entre art visuel et typographie",
            "<strong>Systèmes anciens</strong> : Générez du contenu pour systèmes à capacités graphiques limitées",
            "<strong>Création d'animations ASCII</strong> : Transformez des vidéos en animations textuelles"
          ]
        }
      },
      faq: {
        title: "Questions fréquentes sur la conversion ASCII",
        items: [
          {
            question: "Quels types d'images conviennent le mieux à la conversion ASCII ?",
            answer: "Les images à fort contraste, avec des sujets clairs et des compositions simples donnent les meilleurs résultats ASCII. Les portraits bien éclairés, silhouettes et images aux contours nets fonctionnent particulièrement bien."
          },
          {
            question: "Comment contrôler le niveau de détail dans l'art ASCII ?",
            answer: "Le paramètre de largeur est le plus important - des valeurs plus élevées (jusqu'à 200 caractères) créent des images ASCII plus détaillées. Le choix du jeu de caractères influence aussi les détails - 'Standard' et 'Blocs' offrent plus de nuances que 'Simple'."
          },
          {
            question: "Pourquoi mon art ASCII semble déformé ?",
            answer: "Les caractères ASCII standard sont plus hauts que larges, ce qui peut déformer l'image. Notre convertisseur applique un facteur de correction. Pour minimiser la distorsion, utilisez des polices à chasse fixe (comme Courier New) ou le jeu de caractères 'Blocs'."
          },
          {
            question: "Puis-je créer de l'art ASCII en couleur ?",
            answer: "Oui, l'option 'Sortie en couleur' préserve les couleurs originales. L'ASCII coloré est généré en HTML avec des styles intégrés. Cela fonctionne mieux avec des images aux zones de couleur bien définies."
          },
          {
            question: "Comment partager mes créations ASCII ?",
            answer: "Pour l'ASCII standard, copiez-le dans le presse-papiers et collez-le où vous voulez. Pour l'ASCII coloré, téléchargez-le en HTML. Vous pouvez aussi faire des captures d'écran. Dans les projets de programmation, intégrez l'ASCII comme chaîne de caractères."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape pour créer de l'art ASCII",
        steps: [
          "<strong>Sélectionnez une image</strong> : Cliquez sur 'Sélectionner une image' et choisissez une photo depuis votre appareil",
          "<strong>Ajustez la largeur</strong> : Définissez la largeur ASCII désirée (valeurs plus élevées = plus de détails)",
          "<strong>Choisissez un jeu de caractères</strong> : Sélectionnez parmi Standard, Simple, Blocs ou Personnalisé",
          "<strong>Configurez d'autres options</strong> : Activez l'inversion de couleurs, la sortie couleur et ajustez la taille de police",
          "<strong>Générez l'art ASCII</strong> : Cliquez sur 'Générer ASCII' pour convertir votre image",
          "<strong>Prévisualisez et ajustez</strong> : Consultez le résultat et ajustez les paramètres si nécessaire",
          "<strong>Sauvegardez ou partagez</strong> : Copiez l'ASCII ou téléchargez-le en format texte/HTML"
        ]
      },
      conclusion: "Le convertisseur image vers ASCII transforme des images ordinaires en œuvres textuelles extraordinaires, créant un pont entre médias visuels et textuels. Cet outil puissant de création ASCII a des applications pratiques en communication numérique, programmation, éducation et art. Que vous souhaitiez améliorer vos communications, résoudre des problèmes de compatibilité ou explorer de nouvelles formes d'expression artistique, ce générateur ASCII offre les outils de personnalisation nécessaires."
    }
  }