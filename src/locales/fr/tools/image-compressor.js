export default {
    name: 'Compresseur d\'images',
    description: 'Compresse et optimise les images tout en préservant la qualité',
    input: {
      dragDrop: 'Glissez-déposez des images ici ou cliquez pour téléverser',
      supportedFormats: 'Formats supportés : JPG, PNG, GIF, WEBP',
      selected: '{count} fichier(s) sélectionné(s)',
      changeFiles: 'Changer les fichiers',
      width: 'Largeur',
      height: 'Hauteur',
      keepOriginal: 'Mettre 0 pour conserver les dimensions originales',
    },
    results: {
      originalImage: 'Image originale',
      compressedImage: 'Image compressée',
      filename: 'Nom du fichier :',
      dimensions: 'Dimensions :',
      fileSize: 'Taille :',
      compressionRatio: 'Taux de compression :',
      viewOriginal: 'Voir l\'original',
    },
    about: {
      title: 'À propos de la compression d\'images',
      description: 'Cet outil utilise l\'API Canvas du navigateur pour compresser les images. Tout le traitement se fait localement sur votre appareil, les images ne sont pas envoyées à un serveur.',
      principlesTitle: 'Principes de compression :',
      principles: {
        resize: 'Redimensionnement : des dimensions plus petites signifient moins de données pixels',
        quality: 'Réduction de qualité : diminution du paramètre de qualité pour réduire la taille',
        format: 'Conversion de format : différents formats ont différentes caractéristiques de compression'
      },
      useCasesTitle: 'Cas d\'utilisation :',
      useCases: {
        web: 'Optimisation d\'images pour le web et amélioration des temps de chargement',
        email: 'Réduction de la taille des pièces jointes',
        social: 'Compression avant publication sur les réseaux sociaux',
        storage: 'Optimisation de l\'espace de stockage'
      }
    },
    options: {
      quality: 'Qualité',
      qualityValue: 'Qualité ({value}%)',
      lowQuality: 'Basse qualité / Petit fichier',
      highQuality: 'Haute qualité / Gros fichier',
      format: 'Format de sortie',
      maxSize: 'Taille maximale ({width} × {height} px)',
      keepExif: 'Conserver les données EXIF',
      resizeImage: 'Redimensionner l\'image',
      maxWidth: 'Largeur maximale',
      maxHeight: 'Hauteur maximale',
      compressionLevel: 'Niveau de compression',
      maxFileSize: 'Taille de fichier cible',
      optimizationLevel: 'Niveau d\'optimisation',
      convertTo: 'Convertir en'
    },
    presets: {
      web: 'Optimisation web',
      highQuality: 'Haute qualité',
      balanced: 'Équilibré',
      smallSize: 'Taille réduite',
      custom: 'Personnalisé'
    },
    formats: {
      original: 'Format original',
      jpeg: 'JPEG',
      jpegDesc: 'Le JPEG est idéal pour les photos, ne supporte pas la transparence',
      png: 'PNG',
      pngDesc: 'Le PNG supporte la transparence, idéal pour les icônes et illustrations',
      webp: 'WebP',
      webpDesc: 'WebP offre un taux de compression élevé, idéal pour le web',
      avif: 'AVIF',
      gif: 'GIF',
      bmp: 'BMP'
    },
    resizeOptions: {
      noResize: 'Ne pas redimensionner',
      maxDimension: 'Dimension maximale',
      exactDimensions: 'Dimensions exactes',
      percentage: 'Redimensionnement en pourcentage'
    },
    actions: {
      upload: 'Téléverser des images',
      compress: 'Compresser',
      processing: 'Traitement en cours...',
      download: 'Télécharger',
      downloadAll: 'Tout télécharger',
      batchDownload: 'Téléchargement par lot',
      clear: 'Effacer',
      addMore: 'Ajouter plus d\'images',
      removeAll: 'Tout supprimer',
      preview: 'Aperçu',
      delete: 'Supprimer'
    },
    table: {
      filename: 'Nom du fichier',
      originalSize: 'Taille originale',
      original: 'Taille originale',
      compressedSize: 'Taille compressée',
      compressed: 'Taille compressée',
      savings: 'Économie',
      ratio: 'Taux',
      quality: 'Qualité',
      dimensions: 'Dimensions',
      originalDimensions: 'Dimensions originales',
      newDimensions: 'Nouvelles dimensions',
      status: 'Statut'
    },
    messages: {
      dropped: '{count} image(s) déposée(s)',
      uploading: 'Téléversement des images...',
      compressing: 'Compression des images...',
      compressed: 'Images compressées avec succès',
      downloadPreparing: 'Préparation du téléchargement...',
      downloadReady: 'Téléchargement prêt',
      cleared: 'Toutes les images ont été effacées',
      tooManyFiles: 'Trop de fichiers. Maximum autorisé : {max}',
      fileTooLarge: 'Fichier trop volumineux. Maximum autorisé : {max}MB',
      unsupportedFormat: 'Format non supporté : {format}',
      imageError: 'Erreur de traitement d\'image : {error}',
      batchDownloadNotSupported: 'Le téléchargement par lot nécessite la bibliothèque JSZip. Veuillez télécharger les images individuellement ou ajouter le support zip.',
      batchDownloadError: 'Erreur lors du téléchargement par lot : {error}',
      invalidImage: 'Veuillez sélectionner une image valide'
    },
    article: {
      title: 'Compresseur d\'images : Guide ultime pour optimiser et réduire la taille des images en ligne',
      
      introduction: {
        title: 'Qu\'est-ce qu\'un compresseur d\'images ?',
        p1: 'Notre <strong>compresseur d\'images</strong> est un outil puissant conçu pour réduire la taille des fichiers image tout en conservant une qualité visuelle acceptable. Que vous ayez besoin de <strong>compresser une image à 50kb</strong>, de <strong>compresser une image à 20kb</strong>, ou même de <strong>compresser une image à 100kb</strong>, notre solution polyvalente peut gérer diverses tailles cibles pour répondre à vos besoins spécifiques.',
        p2: 'Dans le monde numérique, la taille des images est cruciale. Les images volumineuses ralentissent les sites web, occupent un espace de stockage excessif et créent des difficultés lors du partage. Notre outil <strong>compresseur d\'images en ligne</strong> analyse intelligemment vos images et applique des algorithmes de compression avancés, éliminant les données inutiles tout en préservant les détails visuels les plus importants. Le résultat est une réduction significative de la taille des fichiers, un chargement plus rapide et une utilisation réduite de la bande passante.',
        p3: 'Contrairement à de nombreux <strong>compresseurs d\'images</strong> basiques qui réduisent uniformément la qualité, notre outil utilise une technologie de compression intelligente qui analyse le contenu de l\'image pour déterminer où appliquer la compression de manière plus efficace. Cette approche garantit que les éléments visuels importants conservent leur netteté, tandis que les zones de fond et les parties moins visibles peuvent être compressées plus agressivement.'
      },
      
      applications: {
        title: 'Cas d\'utilisation pratiques',
        scenario1: {
          title: 'Optimisation web',
          content: 'La vitesse des sites web impacte significativement l\'expérience utilisateur et le référencement. Avec notre outil <strong>compresseur d\'images en ligne</strong>, les développeurs web peuvent réduire la taille des images de leurs sites, permettant des temps de chargement plus rapides et une meilleure satisfaction des utilisateurs. Par exemple, utiliser notre option <strong>compression d\'image à 30kb</strong> pour des miniatures de blog conserve leur attrait visuel tout en améliorant considérablement la vitesse de chargement. Les sites e-commerce bénéficient particulièrement de notre fonctionnalité de <strong>compresseur d\'images par lot</strong>, leur permettant d\'optimiser efficacement des catalogues entiers de produits.'
        },
        scenario2: {
          title: 'Pièces jointes par email',
          content: 'Les serveurs de messagerie imposent souvent des limites strictes sur la taille des fichiers. Lorsque vous devez envoyer des images par email mais que vous rencontrez des limitations de taille, notre <strong>compresseur d\'images</strong> peut réduire vos fichiers à une taille acceptable. Utilisez le paramètre <strong>compression d\'image à 500kb</strong> pour vous assurer que vos photos respectent les limites typiques des emails tout en conservant suffisamment de détails. Cela est particulièrement utile pour les professionnels partageant des photos de projet, les agents immobiliers envoyant des images de propriétés, ou toute personne ayant besoin de partager du contenu visuel par email sans rencontrer d\'erreurs de taille limite.'
        },
        scenario3: {
          title: 'Publication sur les réseaux sociaux',
          content: 'Les différentes plateformes sociales ont des exigences variées en matière de taille d\'image. Notre <strong>compresseur de taille d\'images</strong> aide à optimiser spécifiquement vos photos pour le partage sur les réseaux sociaux. Lors de la préparation d\'images pour Instagram, utilisez notre outil avec le paramètre <strong>compression d\'image à 200kb</strong> pour obtenir un équilibre idéal entre qualité et taille. De nombreux utilisateurs trouvent que notre outil est comparable à des solutions spécialisées comme le <strong>compresseur d\'images 11zon</strong>, tout en appréciant la flexibilité supplémentaire du ciblage précis de la taille.'
        },
        scenario4: {
          title: 'Soumission de documents et candidatures',
          content: 'De nombreux systèmes en ligne, portails gouvernementaux et plateformes de soumission ont des limites strictes de taille de fichier. Utilisez notre fonctionnalité <strong>compresseur JPG</strong> ou <strong>compresseur JPEG</strong> pour réduire vos photos d\'identité, documents scannés ou pièces justificatives afin de respecter ces exigences. Par exemple, les candidats utilisent souvent notre paramètre <strong>compression d\'image à 50kb</strong> pour préparer leurs photos pour les systèmes de candidature, tandis que les étudiants utilisent notre fonction <strong>compresseur d\'images en ligne à 20kb</strong> pour préparer des documents à soumettre sur diverses plateformes éducatives.'
        },
        scenario5: {
          title: 'Développement d\'applications mobiles et optimisation du stockage',
          content: 'Les développeurs d\'applications mobiles utilisent notre <strong>compresseur d\'images</strong> pour réduire la taille des ressources, diminuant ainsi la taille des packages d\'installation et les exigences de stockage. De même, les utilisateurs ordinaires utilisent notre outil comme <strong>convertisseur et compresseur d\'images en JPEG</strong> pour optimiser leurs collections de photos personnelles et libérer un espace de stockage précieux sur leurs appareils. Les personnes gérant de grandes bibliothèques d\'images apprécient particulièrement notre fonctionnalité de <strong>compresseur d\'images par lot</strong>, qui leur permet de traiter plusieurs fichiers simultanément avec des paramètres de compression cohérents.'
        }
      },
      
      guide: {
        title: 'Comment utiliser le compresseur d\'images',
        step1: {
          title: 'Étape 1 : Téléversez votre image',
          content: 'Commencez par cliquer sur le bouton de téléversement ou faites glisser-déposer votre image dans la zone désignée. Notre <strong>compresseur d\'images</strong> supporte divers formats de fichiers, y compris JPG, PNG et WebP. Si vous avez besoin de la fonctionnalité <strong>compresseur d\'images par lot</strong>, vous pouvez téléverser plusieurs images à la fois.'
        },
        step2: {
          title: 'Étape 2 : Choisissez le niveau de compression ou la taille cible',
          content: 'Après téléversement, sélectionnez le niveau de compression souhaité ou spécifiez la taille de fichier cible. Si vous avez besoin d\'une <strong>compression d\'image à 20kb</strong> ou d\'une <strong>compression d\'image à 50kb</strong>, entrez simplement votre taille cible. Vous pouvez également utiliser le curseur de qualité pour contrôler manuellement le niveau de compression. Pour les utilisateurs professionnels familiers avec d\'autres outils comme le <strong>compresseur d\'images Caesium</strong>, nos options avancées offrent une précision similaire dans la configuration de la compression.'
        },
        step3: {
          title: 'Étape 3 : Prévisualisez et comparez',
          content: 'Avant d\'appliquer la compression finale, vous pouvez prévisualiser le résultat et le comparer à l\'image originale. Cette étape garantit que notre outil <strong>compresseur d\'images en ligne</strong> trouve le bon équilibre entre réduction de taille et qualité visuelle. Portez une attention particulière aux détails importants de l\'image pour vous assurer qu\'ils restent clairs après compression.'
        },
        step4: {
          title: 'Étape 4 : Appliquez la compression',
          content: 'Une fois satisfait de la prévisualisation, cliquez sur le bouton "Compresser" pour appliquer les paramètres. Notre <strong>compresseur de fichiers image</strong> traitera votre image avec des algorithmes avancés pour réduire la taille tout en préservant la qualité. Pour les traitements par lot, l\'outil affiche un indicateur de progression montrant le nombre d\'images déjà compressées.'
        },
        step5: {
          title: 'Étape 5 : Téléchargez l\'image compressée',
          content: 'Une fois la compression terminée, téléchargez individuellement vos images optimisées ou, si vous avez utilisé la fonctionnalité <strong>compresseur d\'images par lot</strong>, téléchargez-les sous forme de fichier zip. Notre <strong>affichage de la compression en kb</strong> montre précisément de combien vos fichiers ont été réduits, vous permettant de vérifier s\'ils répondent à vos exigences de taille, que vous ayez besoin d\'une <strong>compression d\'image à 100kb</strong>, d\'une <strong>compression d\'image à 500kb</strong> ou de toute autre cible spécifique.'
        }
      },
      
      faq: {
        title: 'Questions fréquentes',
        q1: 'Comment le compresseur d\'images réduit-il la taille des fichiers tout en conservant la qualité ?',
        a1: 'Notre <strong>compresseur d\'images</strong> utilise des algorithmes de compression avancés qui analysent le contenu de l\'image et réduisent sélectivement les données dans les zones moins perceptibles. Contrairement aux outils basiques, notre <strong>compresseur d\'images en ligne</strong> utilise une compression perceptuelle qui tient compte du fonctionnement de la vision humaine. Les zones avec moins de détails perceptibles sont compressées plus agressivement, tandis que les éléments visuels importants conservent une qualité plus élevée. Nous optimisons également la palette de couleurs, les métadonnées et utilisons un encodage efficace, produisant des résultats similaires à des outils professionnels comme le <strong>compresseur d\'images PI7</strong> ou le <strong>compresseur d\'images Caesium</strong>.',
        
        q2: 'Puis-je compresser une image à une taille spécifique, comme 50kb ou 20kb ?',
        a2: 'Oui, notre outil peut fonctionner comme un <strong>compresseur d\'image à 50kb</strong>, un <strong>compresseur d\'image à 20kb</strong>, un <strong>compresseur d\'image à 100kb</strong> ou toute autre taille cible que vous spécifiez. Entrez simplement la taille de fichier souhaitée dans le champ dédié, et notre algorithme déterminera automatiquement les meilleurs paramètres de compression pour atteindre cette taille tout en préservant au maximum la qualité. Cette approche ciblée est particulièrement utile pour les plateformes avec des exigences strictes de taille de fichier, comme certains portails gouvernementaux, réseaux sociaux ou systèmes de candidature utilisés par les utilisateurs du <strong>compresseur d\'images TNPSC</strong>.',
        
        q3: 'Quelle est la différence entre compression avec perte et sans perte ?',
        a3: 'Notre <strong>compresseur d\'images</strong> offre les deux options de compression :<br><br><strong>Compression sans perte</strong> réduit la taille du fichier sans supprimer aucune donnée de l\'image, préservant 100% de la qualité originale. Cette méthode est idéale lorsque la qualité est primordiale, mais ne permet généralement qu\'une réduction de taille modérée (20-30%).<br><br><strong>Compression avec perte</strong> permet des réductions de taille plus importantes en supprimant sélectivement certaines données de l\'image. Notre algorithme intelligent garantit que les données supprimées ont un impact minimal sur la qualité perçue. Cette méthode est utilisée pour nos options <strong>compression d\'image à 30kb</strong> ou <strong>compression d\'image à 200kb</strong> qui nécessitent des réductions de taille significatives. De nombreux outils populaires comme le <strong>compresseur d\'images 11zon</strong> et le <strong>compresseur I love images</strong> utilisent principalement la compression avec perte pour obtenir des résultats impressionnants.',
        
        q4: 'Quels formats d\'image sont les plus compatibles avec la compression ?',
        a4: 'Différents formats répondent différemment à la compression :<br><br><strong>JPG/JPEG</strong> : Notre fonctionnalité <strong>compresseur JPG</strong> et <strong>compresseur JPEG</strong> est particulièrement compatible avec ce format déjà conçu pour la compression avec perte. Les photos et images complexes avec de nombreuses couleurs sont idéales pour la compression JPEG.<br><br><strong>PNG</strong> : Idéal pour les images contenant du texte, des dessins au trait ou de la transparence. Notre compresseur optimise les PNG tout en préservant la transparence et les contours nets.<br><br><strong>WebP</strong> : Un format moderne supportant à la fois la compression avec et sans perte. Notre outil peut convertir vos images en WebP pour des économies de taille supplémentaires.<br><br>Pour des résultats optimaux dans des scénarios spécifiques, vous pouvez utiliser notre fonctionnalité <strong>convertisseur et compresseur en JPEG</strong> pour convertir vos images dans le format le plus efficace avant compression.',
        
        q5: 'Les images compressées apparaîtront-elles pixélisées ou floues ?',
        a5: 'Lorsqu\'utilisé correctement, notre <strong>compresseur d\'images</strong> préserve la qualité visuelle tout en réduisant la taille des fichiers. Le niveau de perte de qualité visible dépend de :<br><br>1. <strong>Niveau de compression</strong> : Une compression extrême (comme utiliser le paramètre <strong>compression d\'image à 20kb</strong> sur une image initialement très grande) peut introduire des artefacts.<br><br>2. <strong>Contenu de l\'image</strong> : Les images avec des dégradés et des détails subtils peuvent montrer des artefacts de compression plus tôt que celles avec des contrastes marqués.<br><br>3. <strong>Qualité de l\'image originale</strong> : Les images sources de haute qualité se compressent mieux que celles déjà compressées ou de faible qualité.<br><br>Notre fonction de prévisualisation vous permet d\'inspecter les résultats avant téléchargement. Si vous remarquez une perte de qualité inacceptable, essayez d\'ajuster les paramètres de compression ou utilisez les paramètres <strong>compression d\'image à 500kb</strong> ou <strong>compression d\'image à 200kb</strong> plutôt que des options plus agressives.'
      },
      
      relatedTools: {
        title: 'Outils similaires',
        tool1: '<a href="https://imagecompressor.com/" target="_blank" rel="noopener noreferrer">Compresseur d\'images en ligne</a>',
        tool2: '<a href="https://imageresizer.com/image-compressor" target="_blank" rel="noopener noreferrer">Compresseur d\'images - Compressez des images en ligne</a>',
        tool3: '<a href="https://www.freeconvert.com/image-compressor" target="_blank" rel="noopener noreferrer">Compresseur d\'images - FreeConvert.com</a>'
      },
      
      resources: {
        title: 'Ressources externes',
        resource1: '<a href="https://developer.mozilla.org/fr/docs/Web/Media/Formats/Image_types" target="_blank" rel="noopener noreferrer">Documentation MDN : Guide des types de fichiers image</a> - Référence complète sur les formats d\'image et leurs caractéristiques',
        resource2: '<a href="https://web.dev/fast/#optimize-your-images" target="_blank" rel="noopener noreferrer">Google Web.dev : Temps de chargement rapide - Optimisez vos images</a> - Meilleures pratiques d\'optimisation d\'images de Google',
        resource3: '<a href="https://www.w3.org/Graphics/JPEG/" target="_blank" rel="noopener noreferrer">W3C : Spécifications du format JPEG</a> - Détails techniques sur la compression et l\'optimisation JPEG'
      },
      
      conclusion: {
        title: 'Conclusion',
        content: 'Dans l\'environnement numérique actuel, un <strong>compresseur d\'images</strong> efficace est essentiel pour quiconque travaille avec du contenu visuel en ligne. Que vous ayez besoin d\'une <strong>compression d\'image à 100kb</strong> pour l\'optimisation web, d\'une <strong>compression d\'image à 20kb</strong> pour des soumissions de documents, ou d\'un <strong>compresseur d\'images par lot</strong> pour gérer de grandes collections, notre outil offre la polyvalence et les performances nécessaires pour répondre à ces divers besoins.<br><br>En compressant intelligemment vos images, vous pouvez améliorer les temps de chargement, réduire les coûts de stockage et améliorer l\'expérience utilisateur globale sur toutes les plateformes. Notre service de <strong>compresseur d\'images en ligne</strong> fournit une compression de niveau professionnel accessible à tous, des créateurs de contenu individuels aux développeurs web d\'entreprise.<br><br>Commencez dès aujourd\'hui à optimiser vos images et expérimentez les avantages en performance d\'un contenu visuel correctement compressé. Que vous traitiez des besoins de <strong>compresseur JPG</strong> ou des fonctionnalités plus spécialisées de <strong>compresseur de taille d\'images</strong>, notre outil est conçu pour fournir des résultats exceptionnels tout en restant simple à utiliser.'
      }
    }
  }