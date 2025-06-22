export default {
    name: 'Optimiseur SVG',
    description: 'Optimise et nettoie les fichiers SVG pour améliorer les performances et réduire la taille des fichiers',
    upload: {
      title: 'Téléverser SVG',
      dropzone: 'Glissez-déposez un fichier SVG ici ou cliquez pour téléverser',
      or: 'ou',
      pasteCode: 'Coller le code SVG',
      maxSize: 'Taille maximale : 5 Mo',
      onlySvg: 'Seuls les fichiers SVG sont acceptés',
      selected: 'Sélectionné',
      changeFile: 'Changer de fichier'
    },
    input: {
      title: 'Entrée SVG',
      pasteHere: 'Collez le code SVG ici...',
      loadExample: 'Charger un exemple',
      clear: 'Effacer',
      validate: 'Valider le SVG'
    },
    output: {
      title: 'Résultat optimisé',
      copyToClipboard: 'Copier dans le presse-papiers',
      download: 'Télécharger SVG',
      beforeSize: 'Taille originale',
      afterSize: 'Taille optimisée',
      reduction: 'Réduction',
      reductionBy: 'Réduit de',
      svgCode: 'Code SVG'
    },
    options: {
      title: 'Options d\'optimisation',
      preset: 'Préréglage',
      presets: {
        default: 'Par défaut',
        light: 'Léger',
        aggressive: 'Agressif',
        custom: 'Personnalisé'
      },
      removeComments: 'Supprimer les commentaires',
      removeCommentsDesc: 'Supprime les commentaires et sections CDATA',
      removeHiddenElements: 'Supprimer les éléments cachés',
      removeEmptyContainers: 'Supprimer les conteneurs vides',
      removeUnusedDefs: 'Supprimer les définitions inutilisées',
      removeViewBox: 'Supprimer viewBox',
      keepViewBox: 'Conserver viewBox',
      keepViewBoxDesc: 'Conserve l\'attribut viewBox pour maintenir l\'évolutivité du SVG',
      cleanupIDs: 'Nettoyer les ID',
      cleanupIDsDesc: 'Supprime ou raccourcit les ID non référencés',
      convertColors: 'Convertir les couleurs en hexadécimal',
      removeMetadata: 'Supprimer les métadonnées',
      removeMetadataDesc: 'Supprime les éléments &lt;metadata&gt;',
      removeDoctype: 'Supprimer le type de document',
      removeXMLProcInst: 'Supprimer les instructions XML',
      removeEditorsNS: 'Supprimer les espaces de noms des éditeurs',
      collapseGroups: 'Fusionner les groupes',
      collapseGroupsDesc: 'Fusionne les éléments de groupe sans attributs spéciaux',
      convertPathData: 'Optimiser les données de chemin',
      convertPathDataDesc: 'Convertit les données de chemin en coordonnées relatives, réduit les décimales, etc.',
      convertTransforms: 'Optimiser les transformations',
      convertShapeToPath: 'Convertir les formes en chemins',
      convertShapeToPathDesc: 'Convertit les formes de base en éléments &lt;path&gt;',
      removeUselessStrokeAndFill: 'Supprimer les traits et remplissages inutiles',
      moveElemsAttrsToGroup: 'Déplacer les attributs vers le groupe',
      mergePaths: 'Fusionner les chemins',
      minifyStyles: 'Minifier les styles',
      inlineStyles: 'Styles en ligne',
      inlineStylesDesc: 'Convertit les styles des éléments &lt;style&gt; en styles en ligne',
      cleanupNumericValues: 'Arrondir les valeurs numériques',
      precision: 'Précision numérique',
      decimalPlaces: 'Décimales',
      lowPrecision: 'Faible précision (taille plus petite)',
      highPrecision: 'Haute précision (meilleure qualité)',
      removeDimensions: 'Supprimer les dimensions',
      removeDimensionsDesc: 'Supprime les attributs width/height, utilise viewBox pour contrôler la taille',
      sortAttrs: 'Trier les attributs',
      sortAttrsDesc: 'Range les attributs des éléments par ordre alphabétique'
    },
    view: {
      title: 'Aperçu',
      original: 'Original',
      optimized: 'Optimisé',
      showBorder: 'Afficher la bordure',
      backgroundColor: 'Couleur d\'arrière-plan',
      grid: 'Afficher la grille',
      zoom: 'Zoom',
      toggleAnimation: 'Basculer l\'animation'
    },
    actions: {
      optimize: 'Optimiser',
      optimizing: 'Optimisation en cours...',
      resetOptions: 'Réinitialiser les options',
      download: 'Télécharger le SVG optimisé',
      copy: 'Copier',
      copyCode: 'Copier le code',
      viewCode: 'Voir le code',
      viewPreview: 'Voir l\'aperçu'
    },
    messages: {
      optimizationSuccess: 'Optimisation SVG réussie',
      optimizationFailed: 'Échec de l\'optimisation SVG : {error}',
      invalidSvg: 'Fichier ou code SVG invalide',
      copied: 'Copié dans le presse-papiers',
      copyFailed: 'Échec de la copie, veuillez copier manuellement',
      downloaded: 'SVG optimisé téléchargé',
      emptyInput: 'Veuillez fournir un code SVG ou un fichier à optimiser',
      onlySvgAllowed: 'Veuillez téléverser un fichier au format SVG !',
      failedToLoadLibrary: 'Impossible de charger la bibliothèque SVGO'
    },
    article: {
      title: "Optimiseur SVG : Améliorer les performances des graphiques vectoriels et réduire la taille des fichiers",
      features: {
        title: "Comprendre l'optimisation SVG et ses avantages",
        description: "<strong>L'optimiseur SVG</strong> est un outil spécialement conçu pour simplifier et améliorer les fichiers de graphiques vectoriels évolutifs (SVG). Le SVG est un format d'image vectorielle basé sur XML qui conserve une netteté parfaite à n'importe quel niveau de zoom, ce qui en fait un choix idéal pour le design web réactif, les logos, les icônes et les illustrations. Cependant, les fichiers SVG contiennent souvent des données inutiles qui augmentent la taille du fichier sans ajouter de valeur visuelle.<br><br>Notre <strong>outil d'optimisation SVG</strong> analyse intelligemment et supprime les informations redondantes des fichiers SVG tout en préservant leur apparence visuelle. En éliminant les métadonnées, les commentaires, les groupes vides, les définitions inutilisées et en optimisant les données de chemin, l'outil réduit considérablement la taille du fichier - généralement de 30 à 70 %. Le résultat est un <strong>graphique vectoriel</strong> plus propre et plus efficace, qui se charge plus rapidement, utilise moins de bande passante et améliore directement les indicateurs de performance du site et l'expérience utilisateur.",
        useCases: {
          title: "Cas d'utilisation de l'optimisation SVG",
          items: [
            "<strong>Amélioration des performances du site</strong> : Les développeurs web et les designers peuvent utiliser l'<strong>optimiseur de fichiers SVG</strong> pour réduire la taille des graphiques vectoriels utilisés sur un site entier. Des fichiers SVG plus petits signifient des temps de chargement de page plus rapides, une consommation de bande passante plus faible et de meilleurs scores sur les indicateurs Web essentiels, ce qui peut influencer positivement le classement dans les moteurs de recherche.",
            
            "<strong>Développement d'applications mobiles</strong> : Les développeurs d'applications mobiles bénéficient des SVG optimisés, qui se chargent rapidement sur les appareils aux ressources limitées et consomment moins de mémoire. Notre <strong>optimiseur de graphiques vectoriels</strong> garantit que les éléments d'interface utilisateur affichés sous forme de SVG contribuent à une expérience utilisateur fluide et réactive sans surcharge inutile.",
            
            "<strong>Maintenance de bibliothèques d'icônes</strong> : Les administrateurs de systèmes de design et les designers UI/UX responsables de la maintenance de bibliothèques d'icônes peuvent traiter par lots les icônes SVG pour assurer la cohérence et des performances optimales. L'<strong>outil de nettoyage SVG</strong> aide à établir une approche standardisée des ressources vectorielles entre les produits et les plateformes.",
            
            "<strong>Graphiques de produits e-commerce</strong> : Les propriétaires de boutiques en ligne peuvent optimiser les graphiques vectoriels de produits pour améliorer la vitesse des pages et le taux de conversion. Les images de produits créées avec notre <strong>outil de compression SVG</strong> qui se chargent plus rapidement aident à réduire le taux de rebond et à améliorer l'expérience d'achat, en particulier sur mobile.",
            
            "<strong>Campagnes de marketing par e-mail</strong> : Les spécialistes du marketing peuvent utiliser des SVG optimisés dans les campagnes e-mail pour créer des newsletters visuellement attrayantes qui se chargent rapidement dans les clients de messagerie. Notre outil aide à créer des <strong>illustrations vectorielles</strong> légères qui s'affichent correctement sur diverses plateformes de messagerie sans augmenter la taille du message.",
            
            "<strong>Livraison de ressources de design</strong> : Les graphistes peuvent optimiser les fichiers SVG avant de les livrer aux clients ou aux membres de l'équipe, garantissant que les ressources finales sont prêtes pour la production. Le <strong>nettoyeur de fichiers SVG</strong> aide à maintenir des standards professionnels en générant un code efficace et propre que les développeurs peuvent facilement implémenter."
          ]
        }
      },
      faq: {
        title: "Questions fréquentes sur l'optimisation SVG",
        items: [
          {
            question: "Que fait exactement l'optimisation SVG à mes fichiers ?",
            answer: "L'optimisation SVG est un processus qui réduit la taille des fichiers tout en préservant la qualité visuelle, grâce à plusieurs techniques :<br><br>• <strong>Suppression des métadonnées</strong> : Élimine les informations non essentielles comme les données d'éditeur, les commentaires et les éléments cachés<br>• <strong>Nettoyage des données de chemin</strong> : Simplifie les commandes de chemin et les coordonnées, réduit la précision décimale qui n'affecte pas l'apparence<br>• <strong>Fusion des groupes</strong> : Supprime les groupes et conteneurs imbriqués inutiles<br>• <strong>Minimisation des attributs</strong> : Combine et simplifie les attributs des éléments<br>• <strong>Optimisation des transformations</strong> : Rationalise les matrices de transformation<br>• <strong>Suppression des définitions inutilisées</strong> : Supprime les éléments non référencés de la section &lt;defs&gt;<br><br>Notre <strong>outil d'optimisation SVG</strong> applique intelligemment ces techniques pour garantir que la sortie visuelle reste identique tout en réduisant considérablement la taille du fichier."
          },
          {
            question: "L'optimisation SVG affecte-t-elle la qualité de mes graphiques ?",
            answer: "Lorsqu'elle est correctement configurée, l'optimisation SVG ne devrait pas affecter visiblement la qualité visuelle des graphiques. Notre <strong>optimiseur de graphiques vectoriels</strong> est conçu pour préserver l'apparence visuelle tout en supprimant les données inutiles.<br><br>Les paramètres de précision de notre outil vous permettent de contrôler le compromis entre la taille du fichier et la précision. Avec des paramètres de précision élevés (5-8 décimales), même les illustrations les plus complexes conservent leur apparence précise. Avec des paramètres plus bas (1-3 décimales), vous obtiendrez une réduction plus importante de la taille du fichier avec des différences visuelles minimes - souvent imperceptibles à l'œil nu.<br><br>Pour la plupart des graphiques web, une précision de 2-3 décimales offre un excellent équilibre entre optimisation et qualité. Vous pouvez toujours prévisualiser côte à côte l'<strong>image SVG</strong> optimisée et l'originale avant le téléchargement pour vous assurer que le résultat répond à vos exigences."
          },
          {
            question: "Puis-je optimiser des SVG avec des animations ou de l'interactivité ?",
            answer: "Oui, vous pouvez optimiser des SVG contenant des éléments animés ou interactifs, mais cela nécessite une attention particulière. Notre <strong>optimiseur de fichiers SVG</strong> nettoie les données inutiles tout en conservant les éléments structurels importants.<br><br>Pour les SVG avec des animations CSS, SMIL ou une interactivité JavaScript, nous recommandons :<br><br>1. De conserver les ID référencés dans les animations ou scripts<br>2. De conserver les noms de classe utilisés pour le style ou la gestion d'événements<br>3. D'utiliser des préréglages d'optimisation plus conservateurs<br>4. De tester minutieusement le <strong>graphique vectoriel</strong> optimisé pour s'assurer que la fonctionnalité est maintenue<br><br>Si vous optimisez des SVG interactifs complexes, envisagez d'utiliser des options personnalisées pour désactiver des optimisations spécifiques qui pourraient affecter l'animation ou l'interactivité. Par exemple, si votre JavaScript référence des ID d'éléments spécifiques dans le SVG, vous voudrez peut-être désactiver le nettoyage des ID."
          },
          {
            question: "Comment les SVG optimisés améliorent-ils les performances d'un site ?",
            answer: "Les SVG optimisés améliorent les performances des sites de plusieurs manières importantes :<br><br>• <strong>Temps de chargement plus rapides</strong> : Des tailles de fichier plus petites signifient des téléchargements plus rapides, particulièrement importants pour les utilisateurs mobiles avec des forfaits données limités<br>• <strong>Réduction de l'utilisation de la bande passante</strong> : Les <strong>graphiques vectoriels</strong> optimisés consomment moins de données, réduisant les coûts d'hébergement et l'impact environnemental<br>• <strong>Amélioration de la vitesse de rendu</strong> : Une structure SVG plus simple nécessite moins de traitement par le navigateur<br>• <strong>Amélioration des indicateurs Web essentiels</strong> : Contribue à améliorer les indicateurs comme le Largest Contentful Paint (LCP) et le First Input Delay (FID)<br>• <strong>Réduction de l'utilisation de la mémoire</strong> : Un SVG plus propre utilise moins de mémoire du navigateur, particulièrement important sur les appareils mobiles<br><br>Les outils comme PageSpeed Insights de Google et autres mesures de performance refléteront ces améliorations, pouvant contribuer à un meilleur classement dans les moteurs de recherche. Une page utilisant des <strong>images SVG</strong> optimisées efficacement peut obtenir un score nettement plus élevé sur les indicateurs de performance qu'une page utilisant des graphiques gonflés et non optimisés."
          },
          {
            question: "Quelle est la différence entre l'optimisation SVG et la compression d'images matricielles ?",
            answer: "L'optimisation SVG et la compression d'images matricielles (comme JPEG ou PNG) diffèrent fondamentalement dans leur approche de réduction de la taille des fichiers :<br><br><strong>Optimisation SVG :</strong><br>• S'applique aux graphiques vectoriels utilisant des chemins et formes mathématiques<br>• Conserve un zoom parfait à n'importe quelle résolution<br>• Réduit la taille des fichiers en nettoyant le code et en optimisant les expressions mathématiques<br>• Lorsqu'elle est bien faite, ne cause aucune perte de qualité<br>• Idéal pour les logos, icônes, illustrations et éléments d'interface<br>• Le résultat reste éditable et peut être modifié ultérieurement<br><br><strong>Compression matricielle :</strong><br>• S'applique aux images basées sur des pixels<br>• Résolution fixe ; le zoom réduit la qualité<br>• Réduit la taille des fichiers en supprimant des données de pixels ou en utilisant des algorithmes mathématiques pour représenter des motifs de pixels<br>• Implique généralement une certaine perte de qualité (compression avec perte)<br>• Plus adaptée aux photos et images complexes avec de nombreuses couleurs<br>• Les fichiers compressés sont généralement non éditables<br><br>Notre <strong>outil d'optimisation SVG</strong> est spécialement conçu pour la structure unique des graphiques vectoriels, réduisant la taille des fichiers tout en conservant les avantages du format vectoriel - zoom parfait, éditabilité et apparence nette à n'importe quelle taille."
          }
        ]
      },
      guide: {
        title: "Comment utiliser l'optimiseur SVG : guide étape par étape",
        step1: "<strong>Téléversez votre fichier SVG</strong> : Glissez-déposez un fichier SVG dans la zone de téléversement ou cliquez pour parcourir vos fichiers. Si vous avez du code plutôt qu'un fichier, vous pouvez coller directement le code SVG dans le champ de saisie. Notre <strong>outil d'optimisation SVG</strong> accepte les fichiers jusqu'à 5 Mo.",
        step2: "<strong>Configurez les options d'optimisation</strong> : Passez en revue les paramètres d'optimisation par défaut, adaptés à la plupart des SVG. Pour des besoins spécifiques, vous pouvez personnaliser des options comme :<ul class='ml-5 list-disc'><li>Le niveau de précision (nombre de décimales conservées)</li><li>La suppression ou non des métadonnées, commentaires et éléments vides</li><li>Les paramètres d'optimisation des données de chemin</li><li>Le traitement des ID et attributs</li></ul>Les paramètres par défaut offrent un bon équilibre entre réduction de la taille du fichier et fidélité visuelle pour la plupart des <strong>graphiques vectoriels</strong>.",
        step3: "<strong>Cliquez sur le bouton \"Optimiser\"</strong> : Lancez le processus d'optimisation en cliquant sur le bouton d'optimisation. L'outil traitera votre SVG avec les options sélectionnées, appliquant diverses techniques pour réduire la taille du fichier tout en préservant l'apparence visuelle. Pour les fichiers volumineux ou complexes, cela peut prendre quelques secondes.",
        step4: "<strong>Consultez les résultats d'optimisation</strong> : Après le traitement, vous verrez des statistiques affichant la taille originale du fichier, la taille optimisée et le pourcentage de réduction obtenu. Plus important encore, vous pouvez comparer visuellement côte à côte l'<strong>image SVG</strong> originale et optimisée pour vérifier que l'apparence est préservée.",
        step5: "<strong>Ajustez les paramètres si nécessaire</strong> : Si vous n'êtes pas satisfait du résultat - soit que la réduction de taille n'est pas suffisante, soit qu'il y a des différences visuelles indésirables - vous pouvez ajuster les paramètres d'optimisation et réessayer. Augmenter la précision conservera plus de détails visuels mais entraînera un fichier plus volumineux, tandis que réduire la précision produira un fichier plus petit avec des différences visuelles potentiellement légères.",
        step6: "<strong>Examinez le code SVG optimisé</strong> : Vérifiez le code SVG nettoyé pour voir quelles modifications ont été apportées. L'outil supprime les éléments inutiles, optimise les données de chemin et rend généralement le code plus efficace. Ceci est à la fois instructif et vous aide à comprendre la structure des <strong>graphiques vectoriels</strong>.",
        step7: "<strong>Téléchargez ou copiez le SVG optimisé</strong> : Lorsque vous êtes satisfait de l'optimisation, vous pouvez télécharger le fichier SVG optimisé ou copier le code SVG dans le presse-papiers. Le fichier optimisé peut être utilisé dans vos projets web, systèmes de design ou toute autre application nécessitant des <strong>graphiques vectoriels</strong> efficaces."
      },
      conclusion: "L'outil d'optimisation SVG simplifie la réduction de la taille des fichiers de graphiques vectoriels sans compromettre la qualité visuelle. En éliminant les informations redondantes et en optimisant la structure des fichiers SVG, l'outil contribue à améliorer les performances des sites, réduire l'utilisation de la bande passante et améliorer l'expérience utilisateur sur divers appareils. Que vous soyez un développeur web cherchant des temps de chargement plus rapides, un designer entretenant un système d'icônes cohérent ou un spécialiste du marketing créant des campagnes e-mail réactives, l'optimisation SVG devrait faire partie intégrante de votre flux de production. Les quelques minutes passées à optimiser les ressources vectorielles peuvent se traduire par des améliorations significatives des performances et une expérience utilisateur plus fluide, en particulier sur mobile ou avec des connexions lentes. Alors que les standards web évoluent vers une préférence pour la performance et l'expérience utilisateur, des outils comme notre optimiseur SVG deviennent des composants essentiels de la boîte à outils du développement web moderne."
    }
  }