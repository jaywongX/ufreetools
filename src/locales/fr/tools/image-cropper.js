export default {
    name: 'Recadreur d\'image',
    description: 'Recadrage, redimensionnement et rotation précis des images',
    upload: {
      title: 'Télécharger une image',
      dropzone: 'Glissez-déposez une image ici ou cliquez pour parcourir',
      maxSize: 'Taille maximale du fichier : 10 Mo',
      supportedFormats: 'Formats pris en charge : JPG, PNG, WEBP, GIF',
      select: 'Sélectionnez une image pour commencer le recadrage et l\'édition'
    },
    editor: {
      title: 'Éditeur d\'image',
      zoom: 'Zoom',
      rotate: 'Rotation',
      flipHorizontal: 'Retournement horizontal',
      flipVertical: 'Retournement vertical',
      reset: 'Réinitialiser l\'image',
      undo: 'Annuler',
      redo: 'Rétablir',
      dragMode: 'Mode glisser',
      scaleMode: 'Mode échelle'
    },
    crop: {
      title: 'Paramètres de recadrage',
      aspectRatio: 'Ratio d\'aspect',
      freeform: 'Forme libre',
      square: 'Carré (1:1)',
      portrait: 'Portrait (3:4)',
      landscape: 'Paysage (4:3)',
      widescreen: 'Large écran (16:9)',
      panorama: 'Panoramique (2:1)',
      custom: 'Personnalisé',
      width: 'Largeur',
      height: 'Hauteur',
      unit: 'Unité',
      pixels: 'Pixels',
      percent: 'Pourcentage',
      lockAspectRatio: 'Verrouiller le ratio d\'aspect'
    },
    presets: {
      title: 'Présélections de taille',
      original: 'Taille originale',
      social: 'Réseaux sociaux',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedin: 'LinkedIn',
      youtube: 'YouTube',
      print: 'Tailles d\'impression',
      fourBySix: '4×6 pouces',
      fiveBySeven: '5×7 pouces',
      eightByTen: '8×10 pouces'
    },
    output: {
      title: 'Sortie',
      preview: 'Aperçu',
      dimensions: 'Dimensions de sortie',
      quality: 'Qualité',
      format: 'Format',
      fileName: 'Nom du fichier',
      download: 'Télécharger',
      saveAs: 'Enregistrer sous',
      copy: 'Copier dans le presse-papiers'
    },
    actions: {
      crop: 'Recadrer l\'image',
      apply: 'Appliquer',
      cancel: 'Annuler',
      save: 'Enregistrer l\'image',
      download: 'Télécharger',
      newImage: 'Nouvelle image'
    },
    messages: {
      cropSuccess: 'Image recadrée avec succès',
      downloadReady: 'Votre image recadrée est prête à être téléchargée',
      processing: 'Traitement de l\'image en cours...',
      copied: 'Image copiée dans le presse-papiers',
      invalidFile: 'Fichier invalide. Veuillez télécharger une image valide.',
      fileTooLarge: 'Fichier trop volumineux. La taille maximale est de 10 Mo.'
    },
    article: {
      title: "Recadreur d'image : L'outil ultime pour l'édition précise d'images",
      introduction: {
        title: "Qu'est-ce qu'un recadreur d'image ?",
        p1: "Le <strong>recadreur d'image</strong> est un outil spécialement conçu pour aider les utilisateurs à sélectionner et extraire avec précision des parties d'une image. Contrairement aux éditeurs photo basiques, notre <strong>outil de recadrage et redimensionnement d'image en ligne</strong> offre des fonctionnalités avancées, idéales pour les utilisateurs occasionnels comme pour les professionnels cherchant à perfectionner leur contenu visuel.",
        p2: "Que vous ayez besoin d'un <strong>recadreur d'image circulaire</strong> pour des photos de profil, d'un <strong>recadreur d'image carrée</strong> pour des publications sur les réseaux sociaux, ou d'un <strong>recadreur d'image à main levée</strong> pour des sélections personnalisées, notre outil propose de multiples options pour répondre à vos besoins précis. La technologie derrière notre <strong>recadreur d'image</strong> garantit une précision au pixel près, permettant un <strong>recadrage d'image par pixels</strong> avec une extrême précision.",
        p3: "Les frameworks modernes de développement web comme <strong>React</strong>, <strong>Angular</strong> et <strong>Flutter</strong> intègrent des fonctionnalités de <strong>recadrage d'image</strong> via des bibliothèques telles que <strong>React Image Cropper</strong>, <strong>NGX Image Cropper</strong> et <strong>Flutter Image Cropper</strong>. Notre outil en ligne offre la même qualité professionnelle sans nécessiter de connaissances en programmation."
      },
      applications: {
        title: "Cas d'utilisation",
        item1: "<strong>Optimisation pour les réseaux sociaux</strong> : Utilisez nos <strong>présélections de taille de recadrage</strong> pour créer des images parfaitement dimensionnées pour différentes plateformes.",
        item2: "<strong>Création d'avatar</strong> : Utilisez notre <strong>recadreur d'image circulaire</strong> ou <strong>outil de découpe d'image circulaire</strong> pour créer l'avatar circulaire parfait.",
        item3: "<strong>Photographie de produits e-commerce</strong> : Utilisez notre <strong>recadreur d'image de forme</strong> pour nettoyer les images de produits et obtenir une présentation cohérente.",
        item4: "<strong>Traitement de documents</strong> : Utilisez notre fonctionnalité de <strong>recadreur d'image PDF en ligne</strong> pour extraire des images de PDF.",
        item5: "<strong>Traitement par lots</strong> : Utilisez notre fonctionnalité de <strong>recadreur d'image par lots</strong> pour traiter plusieurs images à la fois et améliorer votre flux de travail."
      },
      tutorial: {
        title: "Comment utiliser notre recadreur d'image",
        step1: {
          title: "Étape 1 : Téléchargez votre image",
          content: "Cliquez sur le bouton \"Nouvelle image\" pour sélectionner et télécharger la photo que vous souhaitez recadrer. Notre outil prend en charge les formats d'image courants, y compris JPG, PNG et WEBP. Pour les utilisateurs avancés, notre fonctionnalité de <strong>recadreur d'image automatique</strong> peut détecter et suggérer la zone de recadrage optimale."
        },
        step2: {
          title: "Étape 2 : Sélectionnez le type et le ratio de recadrage",
          content: "Sélectionnez votre type de recadrage préféré dans le menu déroulant. Les options incluent la forme libre (pour la fonctionnalité <strong>recadreur d'image à main levée</strong>), carré (1:1), paysage (4:3), portrait (3:4) et large écran (16:9). Pour une précision dimensionnelle, notre outil peut également servir de <strong>recadreur d'image en centimètres</strong> si nécessaire."
        },
        step3: {
          title: "Étape 3 : Ajustez et affinez",
          content: "Utilisez les poignées de recadrage pour ajuster votre zone de sélection. Utilisez les fonctionnalités de rotation et de retournement pour aligner parfaitement votre image. Pour un contrôle précis, notre fonctionnalité de <strong>recadrage d'image par pixels</strong> vous permet d'ajuster jusqu'au pixel individuel."
        },
        step4: {
          title: "Étape 4 : Recadrez et téléchargez",
          content: "Une fois satisfait de votre sélection, cliquez sur le bouton \"Recadrer l'image\" pour générer votre image recadrée. Prévisualisez le résultat et cliquez sur \"Télécharger\" pour enregistrer sur votre appareil. Notre <strong>outil de recadrage et redimensionnement d'image</strong> maintient la meilleure qualité possible tout au long du processus."
        }
      },
      faq: {
        title: "FAQ",
        q1: "Quels formats d'image sont pris en charge par le recadreur ?",
        a1: "Notre recadreur d'image prend en charge tous les formats d'image courants, y compris JPG, PNG, WEBP et GIF. Utilisez simplement le bouton \"Nouvelle image\" pour télécharger votre image et commencer.",
        
        q2: "Comment créer un recadrage carré parfait pour les réseaux sociaux ?",
        a2: "Sélectionnez l'option \"Carré (1:1)\" dans le menu déroulant des ratios d'aspect. Cela limitera votre sélection de recadrage à un carré parfait, idéal pour les photos de profil et de nombreuses publications sur les réseaux sociaux nécessitant des dimensions uniformes.",
        
        q3: "Puis-je faire pivoter ou retourner l'image avant de la recadrer ?",
        a3: "Oui, notre outil propose des fonctionnalités de rotation et de retournement. Utilisez les boutons de rotation pour faire pivoter l'image de 90 degrés dans n'importe quelle direction, ou les boutons de retournement horizontal et vertical pour inverser votre image avant de faire votre sélection de recadrage.",
        
        q4: "Comment enregistrer mon image recadrée ?",
        a4: "Après avoir fait votre sélection de recadrage, cliquez sur le bouton \"Recadrer l'image\" pour générer votre image recadrée. Le résultat s'affichera dans le panneau de prévisualisation à droite. Cliquez ensuite sur le bouton \"Télécharger\" pour enregistrer l'image recadrée sur votre appareil.",
        
        q5: "Quelle est la différence entre les différents ratios d'aspect ?",
        a5: "Les différents ratios d'aspect servent différents objectifs : 'Carré (1:1)' est idéal pour les photos de profil, 'Paysage (4:3)' convient aux photos standard, 'Portrait (3:4)' pour les affichages verticaux, 'Large écran (16:9)' correspond aux dimensions vidéo, tandis que 'Libre' vous permet de recadrer sans restriction."
      },
      relatedTools: {
        title: "Outils associés",
        description: "Améliorez votre flux de travail d'édition d'image avec ces outils complémentaires :",
        tool1: {
          name: "Redimensionneur d'image par lots",
          description: "Redimensionnez, convertissez et optimisez plusieurs images en une seule fois.",
          url: "https://www.ufreetools.com/tool/image-batch-resizer"
        },
        tool2: {
          name: "Compresseur d'image",
          description: "Compressez et optimisez les images tout en préservant la qualité.",
          url: "https://www.ufreetools.com/tool/image-compressor"
        },
        tool3: {
          name: "Filigrane d'image",
          description: "Ajoutez des filigranes texte ou image à vos photos avec des paramètres personnalisables.",
          url: "https://www.ufreetools.com/tool/image-watermark"
        }
      },
      references: {
        title: "Références",
        ref1: {
          name: "Cropper.js",
          description: "Un outil de recadrage d'image très puissant et simple, prenant en charge une configuration flexible, adapté aux appareils mobiles et aux navigateurs modernes.",
          url: "https://github.com/fengyuanchen/cropperjs"
        },
        ref2: {
          name: "ImageCut",
          description: "Un outil de découpe d'image simple et pratique, prenant en charge le découpage intelligent, la définition de la taille de l'image, la plage de pixels et le traitement par lots.",
          url: "https://soft.3dmgame.com/down/206119.html"
        },
        ref3: {
          name: "Vue-Cropper",
          description: "Un composant de recadrage d'image basé sur Vue.js, utilisant la bibliothèque Cropper.js, prenant en charge la prévisualisation du recadrage, le contrôle du zoom, la rotation de l'image et plus encore, et pouvant être facilement intégré aux projets Vue.js.",
          url: "https://hu-snail.github.io/vue3-resource/platform/mobile/img.html"
        }
      }
    }
  }