export default {
    name: 'Conversion Portrait en Paysage',
    description: 'Transformez des images portrait verticales en format paysage horizontal avec plusieurs options de conversion',
    
    upload: {
      title: 'Télécharger une image',
      dropzone: 'Glissez-déposez une image ici',
      maxSize: 'Taille maximale : 10 Mo',
      supportedFormats: 'Formats supportés : JPG, PNG, WEBP, GIF'
    },
    
    settings: {
      title: 'Paramètres de conversion',
      presets: 'Préréglages rapides',
      conversionMode: 'Mode de conversion',
      modes: {
        rotate: 'Rotation',
        fill: 'Remplissage arrière-plan',
        blur: 'Flou arrière-plan',
        stretch: 'Étirement des bords',
        dualColor: 'Arrière-plan bicolore'
      },
      rotationAngle: 'Angle de rotation',
      fillColor: 'Couleur de fond',
      blurRadius: 'Intensité du flou',
      stretchEdges: 'Degré d\'étirement',
      leftColor: 'Couleur gauche',
      rightColor: 'Couleur droite',
      sizeOption: 'Paramètres de taille',
      sizeModes: {
        auto: 'Taille automatique',
        preset: 'Tailles prédéfinies',
        custom: 'Taille personnalisée'
      },
      sizePresets: 'Préréglages de taille',
      outputSize: 'Taille de sortie',
      width: 'Largeur',
      height: 'Hauteur',
      dimensionsHint: 'Entrez les dimensions en pixels',
      autoSize: 'Calcul automatique de la taille',
      outputFormat: 'Format de sortie',
      quality: 'Qualité de l\'image',
      advancedOptions: 'Options avancées',
      preserveRatio: 'Conserver le ratio',
      sharpen: 'Netteté',
      addWatermark: 'Ajouter un filigrane',
      watermarkPlaceholder: 'Texte du filigrane',
      watermarkColor: 'Couleur du filigrane'
    },
    
    output: {
      preview: 'Aperçu du résultat',
      dimensions: 'Dimensions',
      before: 'Avant',
      after: 'Après'
    },
    
    actions: {
      selectImage: 'Sélectionner une image',
      convert: 'Convertir l\'image',
      download: 'Télécharger l\'image',
      reset: 'Supprimer',
      showSideBySide: 'Afficher la comparaison',
      hideComparison: 'Masquer la comparaison',
      hideSideBySide: 'Fermer'
    },
    
    messages: {
      processing: 'Traitement de l\'image...',
      convertPrompt: 'Le résultat apparaîtra ici après conversion',
      error: 'Une erreur est survenue lors du traitement',
      success: 'Conversion réussie !'
    },
  
    examples: {
      title: 'Conseils d\'utilisation',
      social: 'Idéal pour les publications sur réseaux sociaux où les images horizontales performent mieux',
      socialTip: 'Utilisez le mode flou pour un meilleur effet sur les réseaux',
      website: 'Créez des bannières pour sites web et blogs',
      websiteTip: 'Le mode bicolore est parfait pour les en-têtes de site'
    },
  
    help: {
      title: 'Comment utiliser cet outil',
      description: 'Cet outil vous permet de convertir des images verticales (portrait) en format horizontal (paysage) en utilisant diverses méthodes tout en préservant la qualité visuelle.',
      example1: {
        title: 'Publications sur réseaux sociaux',
        description: 'Convertissez des photos portrait en format horizontal adapté aux réseaux avec arrière-plan flou'
      },
      example2: {
        title: 'Bannières de site web',
        description: 'Créez des en-têtes et bannières pour sites web à partir d\'images verticales avec remplissage coloré'
      }
    },
  
    article: {
      title: "Conversion Portrait en Paysage : Guide Complet",
      
      intro: {
        title: "Fonctionnalités et applications de l'outil",
        content: `
          <p>Notre <strong>outil de conversion portrait/paysage</strong> transforme des images verticales en format horizontal tout en préservant la qualité visuelle. Cet outil puissant propose plusieurs méthodes de conversion incluant flou d'arrière-plan, remplissage uni, dégradé bicolore, étirement des bords et ajustement par rotation.</p>
          
          <p>Fonctionnalités principales :</p>
          <ul>
            <li><strong>Plusieurs modes de conversion</strong> adaptés à différents styles visuels et usages</li>
            <li><strong>Optimisation pour réseaux sociaux</strong> avec des tailles prédéfinies pour chaque plateforme</li>
            <li><strong>Options de personnalisation avancées</strong> incluant accentuation et filigrane</li>
            <li><strong>Sortie haute qualité</strong> supportant plusieurs formats (JPEG, PNG, WebP)</li>
          </ul>
          
          <h4>Applications courantes :</h4>
          
          <p><strong>Contenu pour réseaux sociaux</strong> : Convertir des photos smartphone verticales en publications horizontales pour Facebook, Twitter, LinkedIn et YouTube où ce format est plus efficace.</p>
          
          <p><strong>Bannières de sites web</strong> : Créer des en-têtes larges et bannières à partir de photos produits ou portraits, pour sites e-commerce, blogs et supports marketing.</p>
          
          <p><strong>Marketing digital</strong> : Adapter des images produits verticales aux formats horizontaux des plateformes publicitaires et campagnes email.</p>
          
          <p><strong>Miniatures vidéo</strong> : Convertir des captures d'écran verticales en miniatures horizontales pour YouTube, Vimeo et autres plateformes vidéo.</p>
          
          <p><strong>Diapositives de présentation</strong> : Adapter des images verticales aux formats horizontaux de PowerPoint, Google Slides et autres logiciels de présentation.</p>
        `
      },
      
      faq: {
        title: "Questions Fréquentes",
        q1: "Pourquoi convertir une image verticale en horizontale ?",
        a1: "Les images horizontales sont plus efficaces sur de nombreuses plateformes comme les fils des réseaux sociaux, sites web, présentations et supports marketing. Elles génèrent généralement plus d'interactions et s'affichent mieux sur différents appareils.",
        q2: "La qualité est-elle perdue lors de la conversion ?",
        a2: "Non, notre outil préserve la qualité lors de la conversion. Nous utilisons des techniques avancées comme le flou, remplissage coloré et étirement des bords plutôt qu'un simple recadrage pour conserver le contenu original.",
        q3: "Quel mode choisir pour les réseaux sociaux ?",
        a3: "Pour les réseaux sociaux, le mode flou d'arrière-plan donne généralement les meilleurs résultats, car il centre le sujet tout en étendant horizontalement l'image avec une version esthétique floutée de l'originale.",
        q4: "Quelle est la taille idéale pour une image horizontale ?",
        a4: "Les ratios horizontaux courants incluent 16:9 (large), 3:2 (standard), et des ratios spécifiques comme 1200×630 pixels pour Facebook ou 1280×720 pour YouTube. Nos préréglages gèrent ces calculs pour vous.",
        q5: "Puis-je ajouter un filigrane pour protéger l'image convertie ?",
        a5: "Oui, notre outil inclut une fonction filigrane dans les options avancées. Vous pouvez ajouter un texte personnalisé et ajuster sa couleur pour protéger votre propriété intellectuelle.",
        q6: "Cet outil fonctionne-t-il sur mobile ?",
        a6: "Absolument ! Notre outil de conversion est entièrement responsive et fonctionne sur smartphones, tablettes et ordinateurs avec un navigateur moderne."
      },
      
      tutorial: {
        title: "Guide étape par étape",
        step1: "Téléchargez votre image verticale en la glissant-déposant dans la zone d'upload ou en cliquant sur \"Sélectionner une image\".",
        step2: "Choisissez un mode de conversion selon vos besoins : flou, remplissage, bicolore, étirement ou rotation.",
        step3: "Ajustez les paramètres spécifiques au mode (intensité du flou, couleur de fond etc.) pour personnaliser l'apparence.",
        step4: "Sélectionnez une option de taille : automatique (recommandé), préréglages pour plateformes ou taille personnalisée.",
        step5: "Pour des besoins avancés, développez la section options avancées pour accéder aux fonctions de netteté, contrôle du ratio et filigrane.",
        step6: "Cliquez sur \"Convertir l'image\" pour transformer votre image verticale en horizontale.",
        step7: "Prévisualisez le résultat et utilisez la vue comparative pour voir les changements.",
        step8: "Si nécessaire, ajustez les paramètres et reconvertissez jusqu'à obtenir un résultat satisfaisant.",
        step9: "Téléchargez l'image horizontale dans votre format préféré (JPEG, PNG ou WebP)."
      }
    }
  }