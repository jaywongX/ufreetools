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
    },
    
    article: {
      title: "Guide ultime du convertisseur JFIF vers JPG : Convertir des fichiers JFIF en ligne",
      
      introduction: {
        title: "Comprendre la conversion JFIF vers JPG",
        content: "Notre <strong>convertisseur JFIF vers JPG</strong> est un outil en ligne puissant spécialement conçu pour convertir sans effort des fichiers d'image JFIF au format JPG plus largement compatible. Si vous avez déjà eu des difficultés à ouvrir ou à partager des fichiers JFIF, ce convertisseur offre la solution parfaite, traitant les images directement dans votre navigateur sans téléversement, garantissant une confidentialité et une sécurité totales."
      },
      
      whatIsJfif: {
        title: "Qu'est-ce que le JFIF et pourquoi le convertir en JPG ?",
        content: "Le JFIF (JPEG File Interchange Format) est une spécification de format de fichier qui définit comment les données d'image JPEG doivent être empaquetées. Bien que techniquement similaire au JPG, de nombreux systèmes et applications les traitent différemment. <strong>Convertir le JFIF en JPG</strong> garantit une compatibilité maximale sur tous les appareils, applications et plates-formes, éliminant les frustrations liées aux erreurs \"format de fichier non pris en charge\" lors de la visualisation ou du téléversement d'images."
      },
      
      whyConvert: {
        title: "Avantages de la conversion JFIF en JPG",
        content: "La principale raison de <strong>convertir le JFIF en JPG</strong> dans Windows 10 ou tout autre système d'exploitation est la compatibilité. Les fichiers JPG sont universellement pris en charge, tandis que les fichiers JFIF peuvent poser problème dans certaines applications ou sites Web. En utilisant notre <strong>convertisseur en ligne JFIF vers JPG</strong>, vous pouvez vous assurer que vos images sont accessibles partout, des plateformes de médias sociaux aux logiciels d'édition d'image, en passant par les pièces jointes aux e-mails et les insertions dans des documents."
      },
      
      useCases: {
        title: "Cas d'utilisation courants de la conversion JFIF vers JPG",
        list: [
          "Téléversement sur les médias sociaux : assurez-vous que vos images sont acceptées sur des plateformes qui pourraient rejeter les fichiers JFIF",
          "Développement Web : utilisez le JPG pour une meilleure compatibilité avec tous les navigateurs et appareils",
          "Publication numérique : convertissez les images JFIF pour les inclure dans des publications et documents numériques",
          "Édition photo : convertissez les fichiers JFIF en JPG avant de les éditer dans des logiciels avec un support de format limité",
          "Pièces jointes aux e-mails : convertissez en JPG pour une compatibilité universelle lors du partage d'images par e-mail",
          "Services d'impression photo : de nombreux services d'impression demandent spécifiquement le format JPG",
          "Création d'archives photo : normalisez une collection d'images avec une extension de fichier cohérente"
        ]
      },
      
      platforms: {
        title: "Conversion JFIF vers JPG sur différentes plates-formes",
        content: "Bien que notre outil fonctionne sur tout appareil avec un navigateur Web, les utilisateurs recherchent souvent des solutions spécifiques à une plate-forme. Voici comment notre convertisseur répond aux besoins de divers systèmes :",
        list: [
          {
            title: "Conversion JFIF vers JPG sur Windows 10/11",
            description: "Pas besoin d'installer de logiciel pour <strong>convertir JFIF en JPG sous Windows 10</strong> ou Windows 11. Notre convertisseur en ligne fonctionne parfaitement dans n'importe quel navigateur sur PC, offrant une alternative plus simple aux outils intégrés."
          },
          {
            title: "Conversion JFIF vers JPG sur Mac",
            description: "Les utilisateurs Mac qui se demandent <strong>comment convertir JFIF en JPG sur Mac</strong> peuvent utiliser notre outil sans aucun logiciel supplémentaire, économisant un espace disque précieux et évitant les téléchargements inutiles."
          },
          {
            title: "Conversion JFIF vers JPG sur appareils mobiles",
            description: "Notre conception réactive pour mobile vous permet de <strong>convertir des fichiers JFIF en JPG</strong> directement depuis votre smartphone ou tablette, avec une interface optimisée pour les écrans tactiles."
          },
          {
            title: "Conversion JFIF vers JPG avec des extensions de navigateur",
            description: "Bien que des extensions de navigateur existent, elles nécessitent souvent des autorisations d'accès à vos données. Notre solution basée sur le Web ne nécessite aucune installation et protège votre vie privée."
          }
        ]
      },
      
      tutorial: {
        title: "Comment convertir JFIF en JPG : guide étape par étape",
        introduction: "Convertir vos images JFIF en JPG avec notre outil intuitif est extrêmement simple. Suivez ces étapes faciles pour convertir vos fichiers :",
        steps: [
          {
            title: "Sélectionnez ou glissez-déposez vos fichiers",
            description: "Cliquez sur le bouton \"Sélectionner un fichier\" ou glissez-déposez simplement vos images JFIF dans la zone désignée. Vous pouvez sélectionner plusieurs fichiers à la fois pour une conversion par lots."
          },
          {
            title: "Ajustez les paramètres de qualité (facultatif)",
            description: "Pour les utilisateurs avancés, vous pouvez personnaliser les <strong>paramètres de conversion JFIF vers JPG</strong>, comme la qualité de sortie. Une qualité plus élevée signifie des fichiers plus volumineux, tandis qu'une qualité plus faible produit des fichiers plus petits."
          },
          {
            title: "Choisissez les options de nom de fichier",
            description: "Décidez de conserver les noms de fichiers originaux ou de les personnaliser. Vous pouvez ajouter un préfixe ou utiliser un modèle de nommage personnalisé grâce à nos options flexibles."
          },
          {
            title: "Configurez les paramètres de métadonnées",
            description: "Selon vos préférences de confidentialité et vos exigences de taille de fichier, choisissez de conserver, supprimer ou ne conserver que les métadonnées de base du fichier original."
          },
          {
            title: "Cliquez sur \"Convertir tous les fichiers\"",
            description: "Une fois les paramètres configurés, cliquez sur le bouton \"Convertir tous les fichiers\" pour démarrer le processus de conversion. Un indicateur de progression affichera l'état de chaque fichier."
          },
          {
            title: "Téléchargez vos fichiers JPG convertis",
            description: "Une fois la conversion terminée, téléchargez vos fichiers JPG individuellement ou sous forme d'archive ZIP contenant toutes les images converties."
          }
        ],
        tips: {
          title: "Conseils professionnels pour la conversion JFIF vers JPG",
          list: [
            "Pour les photos avec beaucoup de détails, utilisez des paramètres de qualité plus élevés (85-100%) pour préserver la netteté de l'image",
            "Pour les graphiques Web ou les captures d'écran, des paramètres de qualité moyens (70-85%) offrent généralement le meilleur équilibre entre qualité et taille de fichier",
            "Si vous n'êtes pas sûr des meilleurs paramètres pour une image, utilisez l'option \"Optimisation automatique\"",
            "Pour des raisons de confidentialité, envisagez d'utiliser l'option \"Supprimer les métadonnées\" pour éliminer les informations potentiellement sensibles dans les photos",
            "Lors de la conversion de plusieurs fichiers, l'option de téléchargement ZIP permet de gagner du temps par rapport au téléchargement individuel de chaque fichier"
          ]
        }
      },
      
      faq: {
        title: "Questions fréquentes sur la conversion JFIF vers JPG",
        questions: [
          {
            question: "Comment convertir JFIF en JPG sous Windows 10 ?",
            answer: "Bien que Windows 10 dispose d'options intégrées comme renommer l'extension de fichier ou utiliser Paint, notre convertisseur en ligne est généralement plus simple. Ouvrez simplement notre site dans n'importe quel navigateur, téléversez vos fichiers JFIF et convertissez-les en JPG sans installer de logiciel. Cette méthode fonctionne non seulement sous <strong>Windows 10, mais aussi sous Windows 11, Mac et appareils mobiles</strong>."
          },
          {
            question: "Puis-je convertir JFIF en JPG sans perte de qualité ?",
            answer: "Oui, vous pouvez <strong>convertir JFIF en JPG sans perte de qualité</strong> en utilisant notre outil et en sélectionnant le paramètre de qualité maximale (100%). Comme les deux formats utilisent la compression JPEG, la conversion entre eux avec le paramètre de qualité maximale préserve presque tous les détails de l'image. Pour des résultats absolument optimaux, utilisez notre paramètre \"Qualité maximale\"."
          },
          {
            question: "Comment changer l'extension de fichier de JFIF à JPG ?",
            answer: "Bien que vous puissiez techniquement renommer l'extension de fichier de .jfif à .jpg, ce n'est pas toujours fiable. Notre <strong>convertisseur JFIF vers JPG</strong> recode correctement l'image pour assurer une compatibilité appropriée, plutôt que de simplement changer l'extension. Cela garantit que le fichier fonctionne correctement sur tous les systèmes et applications."
          },
          {
            question: "Existe-t-il un logiciel gratuit de conversion JFIF vers JPG à télécharger ?",
            answer: "Oui, il existe des applications téléchargeables, mais notre <strong>convertisseur en ligne gratuit JFIF vers JPG</strong> élimine le besoin de télécharger un logiciel. Il est accessible depuis n'importe quel appareil, traite les fichiers localement dans votre navigateur (plutôt que sur nos serveurs) et ne nécessite aucune installation ou inscription."
          },
          {
            question: "La conversion JFIF vers JPG affecte-t-elle les métadonnées de l'image ?",
            answer: "Par défaut, notre convertisseur conserve les métadonnées comme les informations EXIF (paramètres de l'appareil photo, date de prise de vue, etc.). Mais pour des raisons de confidentialité ou de réduction de la taille des fichiers, vous pouvez choisir de supprimer toutes les métadonnées pendant la conversion. Si vous le souhaitez, nous proposons également une option pour ne conserver que les métadonnées de base non sensibles."
          },
          {
            question: "Quelle est la différence entre les fichiers JFIF et JPG ?",
            answer: "La différence est principalement technique. Le JFIF (JPEG File Interchange Format) est une spécification de format de fichier qui définit comment les données d'image JPEG doivent être empaquetées, tandis que JPG est généralement utilisé comme extension de nom de fichier pour les images compressées en JPEG. Dans la pratique, la plupart des fichiers JPG suivent en fait la spécification JFIF, mais certains logiciels les traitent différemment en fonction de l'extension de fichier."
          },
          {
            question: "Puis-je convertir plusieurs fichiers JFIF en JPG en une seule fois ?",
            answer: "Absolument ! Notre outil prend en charge le traitement par lots, vous permettant de <strong>convertir plusieurs fichiers JFIF en JPG</strong> simultanément. Sélectionnez ou glissez-déposez simplement plusieurs fichiers à la fois, et notre convertisseur les traitera tous. Vous pouvez ensuite les télécharger individuellement ou sous forme d'archive ZIP combinée."
          }
        ]
      },
      
      conclusion: {
        title: "Pourquoi choisir notre convertisseur JFIF vers JPG",
        content: "Notre <strong>convertisseur en ligne JFIF vers JPG</strong> combine simplicité et puissance, offrant la solution parfaite à quiconque a besoin de convertir des fichiers JFIF au format JPG plus universellement compatible. Que vous utilisiez Windows, Mac ou un appareil mobile, notre outil basé sur navigateur fonctionne parfaitement sans aucun téléchargement ou installation. Avec des fonctionnalités de traitement par lots, des paramètres personnalisables et une protection totale de la vie privée, la conversion de JFIF en JPG n'a jamais été aussi simple ou sécurisée. Essayez notre convertisseur dès maintenant et constatez la différence en termes de compatibilité d'image et de facilité de partage."
      },
      
      relatedTools: {
        title: "Outils de conversion d'image connexes",
        introduction: "En plus de notre convertisseur JFIF vers JPG, vous pourriez être intéressé par ces outils d'image :",
        list: [
          {
            name: "Compresseur d'images",
            url: "http://www.ufreetools.com/tool/image-compressor",
            description: "Réduire la taille des fichiers tout en préservant la qualité visuelle"
          },
          {
            name: "Redimensionneur d'images par lots",
            url: "http://www.ufreetools.com/tool/image-batch-resizer",
            description: "Redimensionner, convertir et optimiser plusieurs images en une seule fois"
          },
          {
            name: "Extracteur de frames GIF",
            url: "http://www.ufreetools.com/tool/gif-frame-extractor",
            description: "Extraire des images individuelles à partir d'animations GIF"
          }
        ]
      },
      
      resources: {
        title: "Ressources officielles",
        list: [
          {
            name: "Documentation du standard JPEG",
            url: "https://docs.fileformat.com/image/jpeg/",
            description: "En savoir plus sur les spécifications techniques derrière le format JPEG"
          },
          {
            name: "Format d'échange de fichiers JFIF",
            url: "https://docs.fileformat.com/image/jfif/",
            description: "En savoir plus sur les spécifications techniques derrière le format JFIF"
          },
          {
            name: "Format d'échange de fichiers JPEG",
            url: "https://wikipedia.org/wiki/JPEG_File_Interchange_Format",
            description: "La compression JPEG est utilisée dans de nombreux formats de fichiers image"
          }
        ]
      }
    }
  }