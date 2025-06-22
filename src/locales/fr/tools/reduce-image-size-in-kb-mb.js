export default {
    name: 'Outil de compression de taille d\'image',
    description: 'Compressez les images à 20 Ko, 50 Ko, 100 Ko, 200 Ko ou toute taille spécifique',
    inputTitle: 'Télécharger une image',
    outputTitle: 'Image compressée',
    supportedFormats: 'Formats pris en charge : JPEG, PNG, WEBP, BMP, GIF, TIFF, ICO, AVIF, SVG, HEIF',
    loadExample: 'Charger un exemple',
    exportFormat: 'Format d\'exportation',
    noImagesYet: 'Téléchargez une image pour voir la version compressée',
    downloadCurrent: 'Télécharger l\'image actuelle',
    downloadAll: 'Télécharger tout en ZIP',
    clearInput: 'Effacer',
    clearOutput: 'Effacer',
    dragAndDrop: 'Glissez-déposez des fichiers image ici',
    or: 'ou',
    browseFiles: 'Parcourir les fichiers',
    processing: 'Traitement en cours...',
    reduce: 'Compresser l\'image',
    quality: 'Qualité',
    maxWidth: 'Largeur maximale',
    original: 'Dimensions originales',
    compressionSettings: 'Paramètres de compression',
    qualityMode: 'Mode qualité',
    targetSizeMode: 'Mode taille cible',
    targetSizeHint: 'Taille de fichier cible',
    sizeIncreaseNotSupported: 'L\'augmentation de la taille du fichier n\'est pas prise en charge. La taille cible doit être inférieure à la taille originale.',
    
    // Contenu de l'article
    article: {
      title: "Guide complet pour compresser des images à des tailles spécifiques en Ko ou Mo",
      functionTitle: "Comprendre la compression de taille d\'image",
      intro: "<strong>L'outil de compression de taille d'image</strong> est une solution puissante conçue pour compresser des images à des tailles de fichier spécifiques comme 20 Ko, 50 Ko, 100 Ko ou toute taille personnalisée dont vous avez besoin. Ce réducteur de taille d'image précis résout le défi courant de répondre aux exigences strictes de taille de fichier de diverses plateformes tout en maintenant une qualité d'image élevée.",
      useCasesTitle: "Cas d'utilisation courants de la compression de taille d'image",
      useCases: "Dans de nombreux scénarios, il est essentiel de compresser la taille d'une image à des valeurs spécifiques en Ko ou Mo. Les développeurs web doivent souvent optimiser les images pour améliorer la vitesse de chargement des pages, en les maintenant sous des seuils de taille spécifiques. Les gestionnaires de médias sociaux doivent généralement compresser les images pour répondre aux exigences des plateformes tout en maintenant leur attrait visuel. Les spécialistes du marketing par e-mail ont besoin de tailles d'image plus petites pour garantir un chargement rapide des e-mails sans qu'ils soient classés comme spam. Les candidats doivent ajuster la taille de leurs photos personnelles pour répondre aux exigences des candidatures, tandis que les entreprises de commerce électronique doivent optimiser les images de produits pour un chargement plus rapide sans sacrifier la qualité.",
      benefitsTitle: "Avantages de notre outil de compression de taille d'image",
      benefit1: "<strong>Contrôle précis de la taille</strong> : Contrairement à la plupart des outils de compression qui se concentrent uniquement sur un pourcentage de qualité, notre outil vous permet de spécifier une taille de fichier cible précise en Ko ou Mo.",
      benefit2: "<strong>Traitement par lots</strong> : Gagnez du temps en compressant plusieurs images simultanément à la taille de fichier souhaitée.",
      benefit3: "<strong>Flexibilité de format</strong> : Convertissez entre les formats JPEG, PNG, WEBP et BMP tout en compressant.",
      benefit4: "<strong>Aucun compromis sur la qualité</strong> : Notre algorithme avancé maintient la meilleure qualité possible tout en atteignant la taille de fichier cible.",
      
      tutorialTitle: "Comment compresser une image à une taille précise en Ko ou Mo",
      step1Title: "Téléchargez votre image",
      step1: "Commencez par glisser-déposer votre image dans la zone de téléchargement ou cliquez pour parcourir les fichiers. Vous pouvez télécharger plusieurs images pour un traitement par lots. Notre outil prend en charge tous les formats d'image courants, y compris JPEG, PNG, WEBP, BMP, etc.",
      step2Title: "Sélectionnez le mode taille cible",
      step2: "Dans les paramètres de compression, choisissez l'option \"Mode taille cible\". Cela vous permet de spécifier une taille de fichier précise pour l'image, plutôt que de simplement ajuster la qualité.",
      step3Title: "Spécifiez votre taille cible",
      step3: "Entrez la taille de fichier souhaitée (par exemple 100) et sélectionnez l'unité (Ko ou Mo). Vous pouvez également utiliser nos boutons prédéfinis pour choisir des tailles courantes comme 20 Ko, 50 Ko, 100 Ko, 200 Ko, 500 Ko, 1 Mo ou 2 Mo.",
      step4Title: "Choisissez le format d'exportation",
      step4: "Sélectionnez votre format de sortie préféré (JPEG, PNG, WEBP ou BMP). Différents formats ont des caractéristiques de compression différentes, choisissez donc celui qui correspond le mieux à vos besoins.",
      step5Title: "Traitez et téléchargez",
      step5: "Cliquez sur le bouton \"Compresser l'image\" pour traiter vos images. Une fois terminé, vous pouvez prévisualiser les résultats, télécharger des images individuelles ou télécharger toutes les images sous forme de fichier ZIP. Les résultats afficheront la taille originale, la nouvelle taille et le pourcentage de compression.",
      tip: "Astuce : Pour les photos et les images avec des dégradés, les formats JPEG ou WEBP offrent généralement une meilleure compression. Pour les images avec transparence ou texte net, le format PNG est généralement le meilleur choix.",
      
      faqTitle: "FAQ sur la compression de taille d'image",
      q1: "Comment compresser précisément une image à 100 Ko ?",
      a1: "Pour compresser précisément une image à 100 Ko, téléchargez-la dans notre outil, sélectionnez \"Mode taille cible\", entrez \"100\" dans le champ de taille, sélectionnez \"Ko\" comme unité, puis cliquez sur \"Compresser l'image\". Notre algorithme trouvera automatiquement la meilleure qualité et les dimensions optimales pour atteindre la taille cible avec une perte de qualité minimale.",
      
      q2: "La compression de la taille d'une image affecte-t-elle la qualité ?",
      a2: "Oui, la compression de la taille d'une image implique généralement une certaine réduction de qualité. Cependant, notre outil utilise des algorithmes avancés qui équilibrent intelligemment la réduction de qualité, l'ajustement de la résolution et l'optimisation du format pour minimiser la perte de qualité visible tout en atteignant la taille de fichier cible. Pour des réductions de taille modérées, la différence de qualité est souvent à peine perceptible.",
      
      q3: "Quelle est la différence entre compresser la taille d'une image en Ko et redimensionner une image ?",
      a3: "Le redimensionnement modifie la largeur et la hauteur physiques de l'image (par exemple, de 1920×1080 pixels à 800×450 pixels), tandis que la réduction de taille en Ko/Mo consiste à diminuer la taille du fichier par compression tout en conservant éventuellement les mêmes dimensions. Notre outil se concentre sur l'atteinte d'un objectif de taille de fichier spécifique, et peut y parvenir par une combinaison d'ajustements de qualité et de réduction de dimensions si nécessaire.",
      
      q4: "Quel format d'image est le meilleur pour les petites tailles de fichier ?",
      a4: "Pour les photos et les images avec de nombreuses couleurs, les formats WEBP et JPEG offrent généralement la meilleure efficacité de compression. WEBP est généralement supérieur, mais sa prise en charge universelle est légèrement moins bonne. Pour les graphiques simples avec moins de couleurs, des zones pleines ou de la transparence, le format PNG peut être plus efficace. Notre outil vous permet d'expérimenter avec différents formats pour trouver le meilleur équilibre entre taille et qualité pour votre image spécifique.",
      
      q5: "Puis-je compresser plusieurs images simultanément à la même taille en Ko ?",
      a5: "Oui ! Notre outil de compression de taille d'image prend en charge le traitement par lots, vous permettant de télécharger plusieurs images et de toutes les compresser simultanément à la même taille cible en Ko ou Mo. C'est idéal pour préparer des ensembles d'images pour des sites web, des publications sur les médias sociaux ou des applications nécessitant des tailles de fichier cohérentes.",
      
      relatedToolsTitle: "Outils d'image connexes",
      relatedTool1: "Redimensionner une image aux dimensions des miniatures YouTube (1024x576)",
      relatedTool1Desc: "Redimensionnez parfaitement vos images aux dimensions exactes requises par YouTube.",
      relatedTool2: "Convertisseur de format d'image",
      relatedTool2Desc: "Convertissez des images entre différents formats comme JPEG, PNG, WEBP, etc.",
      
      resourcesTitle: "Ressources supplémentaires",
      resource1: "Google Web Fundamentals : Optimisation des images",
      resource2: "Web.dev : Optimisez vos images",
      
      conclusionTitle: "Conclusion",
      conclusion: "Dans l'environnement numérique actuel, la capacité à compresser la taille des images à des valeurs spécifiques en Ko ou Mo est extrêmement précieuse. Que vous optimisiez les performances d'un site web, répondiez aux exigences d'une plateforme ou gériez simplement l'espace de stockage, notre <strong>outil de compression de taille d'image</strong> offre une solution précise et conviviale. En maintenant la meilleure qualité possible tout en atteignant des tailles de fichier précises, cet outil vous aide à équilibrer les aspects visuels et techniques dans tous vos projets numériques."
    }
  };