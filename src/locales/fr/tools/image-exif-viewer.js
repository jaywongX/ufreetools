export default {
    name: 'Visionneuse EXIF d\'image',
    description: 'Voir et analyser les métadonnées EXIF des photos',
    upload: {
        title: 'Télécharger une image',
        dropzone: 'Glissez-déposez une image ici ou cliquez pour parcourir',
        maxSize: 'Taille maximale : 15 Mo',
        supportedFormats: 'Formats supportés : JPG, TIFF, HEIC, PNG',
        anyImageFile: 'Tout fichier image contenant des données EXIF'
    },
    display: {
        title: 'Informations sur l\'image',
        noExif: 'Aucune donnée EXIF trouvée dans cette image',
        basicInfo: 'Informations de base',
        camera: 'Informations sur l\'appareil',
        exposure: 'Informations d\'exposition',
        location: 'Informations de localisation',
        dates: 'Informations de date',
        advanced: 'Données EXIF avancées',
        thumbnail: 'Miniature EXIF'
    },
    exif: {
        fileName: 'Nom du fichier',
        fileSize: 'Taille du fichier',
        fileType: 'Type de fichier',
        dimensions: 'Dimensions',
        make: 'Marque de l\'appareil',
        model: 'Modèle de l\'appareil',
        lens: 'Objectif',
        focalLength: 'Distance focale',
        focalLength35: 'Distance focale (35mm)',
        aperture: 'Ouverture',
        fNumber: 'Valeur F',
        exposureTime: 'Temps d\'exposition',
        shutterSpeed: 'Vitesse d\'obturation',
        iso: 'ISO',
        exposureMode: 'Mode d\'exposition',
        exposureProgram: 'Programme d\'exposition',
        meteringMode: 'Mode de mesure',
        flash: 'Flash',
        flashMode: 'Mode flash',
        whiteBalance: 'Balance des blancs',
        exposureBias: 'Correction d\'exposition',
        latitude: 'Latitude',
        longitude: 'Longitude',
        altitude: 'Altitude',
        locationName: 'Nom du lieu',
        dateOriginal: 'Date de prise de vue',
        dateDigitized: 'Date de numérisation',
        dateModified: 'Date de modification',
        software: 'Logiciel',
        artist: 'Artiste',
        copyright: 'Copyright',
        resolution: 'Résolution',
        colorSpace: 'Espace colorimétrique',
        orientation: 'Orientation',
        compression: 'Compression',
        bitsPerSample: 'Bits par échantillon',
        maxAperture: 'Ouverture maximale',
        contrast: 'Contraste',
        saturation: 'Saturation',
        sharpness: 'Netteté',
        brightness: 'Luminosité',
        sceneCaptureType: 'Type de capture de scène',
        gainControl: 'Contrôle du gain',
        serialNumber: 'Numéro de série',
        width: 'Largeur',
        height: 'Hauteur',
    },
    map: {
        title: 'Localisation de la photo',
        show: 'Afficher sur la carte',
        noLocation: 'Aucune donnée de localisation disponible',
        directions: 'Obtenir un itinéraire',
        copy: 'Copier les coordonnées',
        warning: 'Attention : Cette image contient des données de localisation. Soyez prudent lors du partage.'
    },
    actions: {
        showAll: 'Afficher toutes les métadonnées',
        hideAll: 'Masquer toutes les métadonnées',
        copyAll: 'Copier toutes les métadonnées',
        save: 'Enregistrer les métadonnées au format JSON',
        removeMeta: 'Supprimer les métadonnées',
        download: 'Télécharger l\'image sans métadonnées',
        viewFullSize: 'Voir en taille réelle',
        refresh: 'Recharger les données'
    },
    settings: {
        title: 'Paramètres d\'affichage',
        showGroups: 'Métadonnées groupées',
        showRaw: 'Afficher les valeurs brutes',
        showTechnical: 'Afficher les données techniques',
        showFiltered: 'Masquer les champs vides',
        darkMode: 'Mode sombre',
        mapProvider: 'Fournisseur de cartes'
    },
    tips: {
        privacy: 'Conseil de confidentialité : Les photos peuvent contenir des données personnelles comme la localisation et les informations sur l\'appareil.',
        noExif: 'Vous ne voyez pas de données EXIF ? Certains réseaux sociaux et outils d\'édition d\'image suppriment les métadonnées.',
        rawView: 'Passez en "vue brute" pour voir toutes les métadonnées disponibles.'
    },
    messages: {
        copied: 'Métadonnées copiées dans le presse-papiers',
        saved: 'Métadonnées enregistrées au format JSON',
        noExif: 'Aucune donnée EXIF trouvée dans cette image',
        metadataRemoved: 'Métadonnées supprimées avec succès',
        imageLoaded: 'Image chargée avec succès',
        notUse: 'Non utilisé',
        use: 'Utilisé',
        auto: 'Automatique',
        manual: 'Manuel',
        reset: 'Réinitialisé',
        exifExtracted: 'Données EXIF extraites',
    },
    error: {
        copyFailed: 'Échec de la copie',
        exportFailed: 'Échec de l\'exportation',
        exifExtractionFailed: 'Échec de l\'extraction des données EXIF',
        imageLoadFailed: 'Échec du chargement de l\'image',
    },
    orientation: {
        normal: 'Normal',
        horizontalFlip: 'Retournement horizontal',
        rotate180: 'Rotation de 180°',
        verticalFlip: 'Retournement vertical',
        rotate90VerticalFlip: 'Rotation de 90° dans le sens horaire et retournement vertical',
        rotate90: 'Rotation de 90° dans le sens horaire',
        rotate90HorizontalFlip: 'Rotation de 90° dans le sens horaire et retournement horizontal',
        rotate270: 'Rotation de 90° dans le sens antihoraire'
    },
    article: {
        title: "Guide complet de la visionneuse EXIF d'image - Extraire les métadonnées cachées des photos",
        intro: {
            title: "Que sont les données EXIF et pourquoi avez-vous besoin d'une visionneuse EXIF",
            p1: "Les <b>données EXIF (Exchangeable Image File Format)</b> sont des informations cachées intégrées dans les photos numériques qui révèlent une multitude de détails sur la façon, le moment et l'endroit où une image a été capturée. Notre visionneuse EXIF d'image offre une solution complète pour extraire et analyser ces métadonnées, fournissant aux photographes, aux experts en criminalistique numérique et aux utilisateurs soucieux de leur confidentialité un outil puissant pour révéler des informations invisibles à l'œil nu.",
            p2: "Dans le monde numérique actuel, <b>l'extraction de métadonnées photo</b> devient de plus en plus précieuse à la fois pour des usages professionnels et personnels. Que vous soyez un photographe cherchant à vérifier les réglages de l'appareil pour des améliorations techniques, un enquêteur numérique examinant l'authenticité d'une image, ou simplement curieux des informations que vos photos partagées pourraient révéler, notre outil de visualisation EXIF donne un accès instantané à ces métadonnées cruciales sans nécessiter de logiciel professionnel.",
            p3: "Notre <b>analyseur de données EXIF en ligne</b> permet aux utilisateurs de révéler instantanément le modèle d'appareil photo, les réglages d'exposition, les coordonnées GPS, la date de création et des dizaines d'autres champs de métadonnées accompagnant les images numériques. Cette solution basée sur navigateur fonctionne sur toutes les plateformes et appareils, respectant votre vie privée en traitant les images localement sans téléchargement vers des serveurs externes, garantissant que les informations sensibles des photos restent entièrement sous votre contrôle."
        },
        useCases: {
            title: "Applications pratiques de l'analyse des données EXIF",
            case1: "<b>Développement des compétences photographiques</b> : Les photographes professionnels et amateurs utilisent les données EXIF pour étudier les images réussies et reproduire les conditions de prise de vue. En examinant les réglages précis d'ouverture, de vitesse d'obturation, d'ISO et d'objectif des photos marquantes, les photographes peuvent comprendre les choix techniques derrière des effets visuels spécifiques et appliquer ces connaissances pour améliorer leur propre travail.",
            case2: "<b>Médicaments légaux numériques et authentification</b> : Les enquêteurs et professionnels de la cybersécurité analysent les données EXIF pour vérifier l'authenticité et l'origine des images. Les horodatages intégrés, les informations sur l'appareil et les détails des logiciels de traitement peuvent aider à déterminer si une image a été manipulée, fournissant des preuves cruciales pour les procédures judiciaires ou vérifiant la légitimité du contenu numérique à l'ère de la désinformation.",
            case3: "<b>Organisation des photos basée sur la localisation</b> : Les photographes de voyage et les documentalistes de vacances utilisent les coordonnées GPS des données EXIF pour organiser géographiquement leurs collections de photos. Ces métadonnées de localisation peuvent automatiquement cartographier les voyages photographiques, créer des albums basés sur l'emplacement et faciliter la recherche d'images spécifiques à une destination, même des années après la prise de vue.",
            case4: "<b>Audit de confidentialité et sécurité</b> : Les utilisateurs soucieux de la sécurité vérifient les données EXIF avant de partager des images en ligne pour éviter la divulgation involontaire d'informations sensibles. En examinant et en supprimant sélectivement les données de localisation, les identifiants d'appareil et les horodatages, les individus peuvent se protéger contre les risques pour la vie privée, le pistage potentiel ou la révélation de modèles pouvant compromettre la sécurité physique ou numérique.",
            case5: "<b>Dépannage technique</b> : Les techniciens d'appareils photo et les professionnels du support examinent les données EXIF pour diagnostiquer les problèmes matériels et vérifier le bon fonctionnement. Les informations techniques complètes stockées dans les EXIF aident à identifier les problèmes potentiels avec les réglages de l'appareil, la communication de l'objectif ou le traitement logiciel qui pourraient affecter la qualité de l'image ou les performances de l'appareil."
        },
        tutorial: {
            title: "Comment utiliser notre outil de visionneuse EXIF d'image",
            intro: "Notre outil d'extraction de données EXIF est conçu pour être intuitif et puissant, vous permettant d'analyser rapidement les métadonnées cachées de n'importe quelle image numérique. Suivez ces étapes simples pour commencer :",
            step1: {
                title: "Étape 1 : Téléchargez votre image",
                description: "Commencez par cliquer sur le bouton <b>\"Télécharger une image\"</b> en haut de l'interface de l'outil. Vous pouvez sélectionner n'importe quel fichier image contenant des données EXIF (généralement des fichiers JPG, TIFF, HEIC ou RAW) depuis votre appareil. Alternativement, vous pouvez simplement glisser-déposer votre image dans la zone désignée. L'outil traite l'image localement dans votre navigateur, donc aucune donnée n'est téléchargée sur nos serveurs, préservant ainsi votre vie privée et votre sécurité."
            },
            step2: {
                title: "Étape 2 : Consultez les informations EXIF de base",
                description: "Une fois votre image chargée, l'outil affichera immédiatement les informations EXIF de base organisées par catégories. Vous verrez les <b>informations sur l'appareil</b> (marque, modèle, objectif), les <b>détails d'exposition</b> (ouverture, vitesse d'obturation, ISO), les <b>propriétés de l'image</b> (dimensions, résolution) et la date de création. Cet aperçu fournit un résumé des métadonnées les plus couramment nécessaires, vous aidant à évaluer rapidement les aspects techniques de l'image."
            },
            step3: {
                title: "Étape 3 : Explorez les données GPS et de localisation",
                description: "Si votre image contient des informations de géolocalisation, l'outil affichera les coordonnées et fournira un lien pour voir l'emplacement exact sur une carte. Cette fonctionnalité est particulièrement utile pour les <b>photos géolocalisées</b> lorsque vous avez besoin de vous rappeler où une image spécifique a été prise. Soyez conscient des implications pour la vie privée lorsque vous partagez des images avec des données GPS complètes, car cela révèle l'emplacement exact où la photo a été prise, ce qui peut inclure des informations sensibles comme votre adresse personnelle."
            },
            step4: {
                title: "Étape 4 : Exportez ou supprimez les données EXIF",
                description: "Après avoir examiné les métadonnées, vous pouvez choisir d'<b>exporter les données EXIF complètes au format JSON</b> pour archivage ou analyse plus poussée. Cet export crée un enregistrement complet de tous les champs de métadonnées disponibles. Si vous avez des préoccupations concernant la vie privée, vous pouvez utiliser la fonction \"Copier toutes les métadonnées\" pour analyser les données plus attentivement ou préparer une suppression sélective. Pour les photographes partageant leur travail en ligne, l'examen et l'éventuelle suppression des données EXIF sensibles avant publication peuvent aider à maintenir des limites de confidentialité appropriées."
            }
        },
        exifDetails: {
            title: "Comprendre les catégories clés des données EXIF",
            intro: "Les métadonnées EXIF contiennent une richesse d'informations, divisées en plusieurs catégories importantes. Comprendre ces catégories peut vous aider à tirer le meilleur parti de votre analyse d'image :",
            camera: {
                title: "Informations sur l'appareil et l'objectif",
                description: "Les <b>métadonnées de l'appareil</b> incluent le fabricant, le nom du modèle, la version du firmware et parfois un numéro de série unique. Les données de l'objectif spécifient l'objectif exact utilisé, la distance focale (y compris l'équivalent 35mm pour les capteurs recadrés), l'ouverture maximale et si la stabilisation d'image était activée. Ces informations techniques sont précieuses pour les photographes comparant les performances des équipements ou dépannant les problèmes de qualité d'image entre différents boîtiers et objectifs."
            },
            exposure: {
                title: "Paramètres d'exposition et de prise de vue",
                description: "Les <b>métadonnées d'exposition</b> fournissent un enregistrement complet des réglages utilisés pour capturer l'image, incluant la valeur d'ouverture (f-stop), la vitesse d'obturation, la sensibilité ISO, le mode d'exposition (manuel, priorité à l'ouverture, etc.), le mode de mesure et la compensation d'exposition. D'autres données de prise de vue peuvent inclure les réglages de balance des blancs, les informations sur le flash, le mode de mise au point et les paramètres de profondeur de champ. Ces détails techniques aident les photographes à reproduire des conditions de prise de vue réussies ou à analyser pourquoi certaines images excellent tandis que d'autres échouent."
            },
            location: {
                title: "Coordonnées géographiques",
                description: "Les <b>métadonnées GPS</b> enregistrent l'emplacement exact où une image a été prise, incluant la latitude, la longitude et parfois l'altitude. Les appareils photo modernes et les smartphones avec GPS intégré ou services de localisation embarquent automatiquement ces informations, sauf si cette fonction est désactivée. Les données de localisation permettent des fonctionnalités d'organisation puissantes comme le mappage automatique et la recherche basée sur l'emplacement, mais soulèvent également des considérations de confidentialité lors du partage d'images contenant des emplacements identifiables comme des résidences privées ou des installations sensibles."
            },
            time: {
                title: "Informations d'horodatage",
                description: "Les <b>métadonnées temporelles</b> enregistrent avec précision le moment où une image a été créée, modifiée ou numérisée. La plupart des appareils photo stockent la date et l'heure originales de capture, tandis que les logiciels de retouche peuvent ajouter des horodatages supplémentaires lors du traitement ou de l'exportation des fichiers. Ces marqueurs temporels sont cruciaux pour organiser les collections de photos, créer des chronologies précises d'événements et établir la provenance des images à des fins documentaires ou probatoires. Les enquêteurs utilisent souvent les métadonnées d'horodatage pour vérifier l'authenticité des images ou identifier des incohérences."
            }
        },
        faq: {
            title: "Questions fréquentes sur les données EXIF",
            q1: "Pourquoi ne vois-je aucune donnée EXIF dans mon image ?",
            a1: "Toutes les images ne contiennent pas de données EXIF, pour plusieurs raisons possibles. Premièrement, <b>les formats de fichiers comme PNG, GIF et certains WebP ne supportent généralement pas les métadonnées EXIF</b>, donc si votre image utilise ces formats, il n'y aura pas de données EXIF. Deuxièmement, de nombreuses plateformes sociales et applications de messagerie suppriment automatiquement les données EXIF lors du téléchargement pour protéger la vie privée des utilisateurs et réduire la taille des fichiers. Si vous téléchargez une image depuis les réseaux sociaux ou la recevez via une application de messagerie, les métadonnées originales ont probablement été supprimées. Troisièmement, certains outils d'édition ou d'optimisation d'images peuvent supprimer intentionnellement les EXIF lors du traitement. Enfin, si vous essayez d'analyser une capture d'écran, celles-ci ne contiennent généralement pas de données EXIF traditionnelles car elles ne sont pas capturées avec un appareil photo. Pour une analyse EXIF fiable, utilisez toujours des fichiers image originaux et non traités provenant directement d'un appareil photo ou smartphone.",

            q2: "Les données EXIF sont-elles les mêmes que les métadonnées dans tous les fichiers image ?",
            a2: "<b>Les données EXIF sont un type spécifique de métadonnées principalement présent dans les formats JPG et TIFF</b>, mais ce n'est pas le seul standard de métadonnées utilisé dans les images numériques. D'autres formats de métadonnées courants incluent XMP (Plateforme de métadonnées extensibles), utilisé par les produits Adobe et supportant une plus large gamme de types de fichiers incluant PNG et PDF ; IPTC (Conseil international de la presse et des télécommunications), axé sur la description du contenu, les droits d'auteur et les droits d'utilisation ; et les profils ICC pour les informations de gestion des couleurs. Bien que notre outil de visionneuse EXIF se concentre principalement sur l'extraction des données EXIF, il peut également détecter et afficher certaines informations XMP et IPTC lorsqu'elles sont présentes. Chaque standard de métadonnées sert un objectif différent, les EXIF se concentrant sur les informations techniques de l'appareil, les XMP traitant de l'historique des modifications et des ajustements créatifs, et les IPTC gérant les droits de contenu et les descriptions. Pour les workflows de photographie professionnelle, comprendre les différences entre ces types de métadonnées peut aider à gérer correctement les images et préserver les informations importantes.",

            q3: "Comment supprimer les données de localisation sensibles avant de partager des photos ?",
            a3: "<b>Supprimer les coordonnées GPS</b> avant de partager des images en ligne est une pratique de confidentialité importante, surtout pour les photos prises dans des emplacements sensibles comme votre domicile ou l'école de vos enfants. Notre outil de visionneuse EXIF vous permet d'identifier la présence de données de localisation dans une image, ce qui est une première étape cruciale avant la suppression. Pour supprimer effectivement ces données, vous avez plusieurs options : 1) Utiliser un outil de nettoyage de métadonnées dédié ou un éditeur supportant la suppression sélective des métadonnées ; 2) La plupart des logiciels modernes de retouche photo, incluant Adobe Lightroom et Photoshop, offrent des options pour supprimer sélectivement les métadonnées lors de l'export ; 3) Sur les smartphones, vous pouvez généralement désactiver le marquage de localisation dans les paramètres de l'application photo pour empêcher l'enregistrement de ces données dès le départ ; 4) Certaines plateformes sociales suppriment automatiquement les données EXIF lors du téléchargement, mais vous ne devriez pas compter sur cela comme méthode de protection principale. Comme meilleure pratique, établissez un workflow cohérent d'examen et de nettoyage des métadonnées sensibles avant tout partage de photos, particulièrement pour les images pouvant révéler vos emplacements habituels ou des informations personnelles.",

            q4: "À quel point les horodatages dans les données EXIF sont-ils précis ?",
            a4: "<b>La précision des horodatages EXIF</b> dépend entièrement de la configuration correcte de l'horloge interne de l'appareil photo au moment de la prise de vue. De nombreux utilisateurs négligent de configurer l'heure, la date ou le fuseau horaire précis sur leur appareil photo, entraînant des métadonnées temporelles inexactes. Lorsque l'horloge de l'appareil est correctement maintenue, les données temporelles EXIF peuvent être précises à la seconde, ce qui est très utile pour l'organisation chronologique ou la vérification. Cependant, plusieurs facteurs peuvent affecter cette précision : 1) Les appareils photo n'ajustent pas automatiquement les changements d'heure d'été ; 2) Lors de voyages entre fuseaux horaires, les photographes oublient souvent de mettre à jour les paramètres de leur appareil ; 3) L'horloge de l'appareil peut dériver comme toute horloge électronique au fil du temps ; 4) Le retrait ou l'épuisement de la batterie peut réinitialiser l'horloge de l'appareil aux valeurs par défaut d'usine. Pour des vérifications temporelles critiques, il est préférable de synchroniser périodiquement l'horloge de votre appareil avec une source de temps précise. Certains appareils photo avancés supportent désormais la synchronisation automatique de l'heure via GPS ou connexion smartphone, améliorant considérablement la fiabilité des horodatages.",

            q5: "Les données EXIF peuvent-elles déterminer si une photo a été retouchée ?",
            a5: "<b>Les données EXIF peuvent fournir des indices sur l'édition d'image</b>, mais ce n'est pas une méthode infaillible pour détecter tous types de manipulations. L'indicateur le plus évident est la présence d'étiquettes de logiciel indiquant un traitement dans des applications comme Photoshop ou Lightroom. Certains logiciels de retouche enregistrent également des dates de modification différentes de l'heure de capture originale. Cependant, les EXIF ont des limites importantes comme outil d'authentification : 1) Les métadonnées elles-mêmes peuvent être manipulées avec des logiciels spécialisés ; 2) Les retouches basiques peuvent ne pas laisser de traces visibles dans les métadonnées ; 3) De nombreux outils de retouche conservent les EXIF originaux de l'appareil tout en ajoutant leurs propres informations de traitement ; 4) Les métadonnées peuvent être complètement supprimées et remplacées avec les bons outils. Pour des besoins sérieux d'authentification, comme l'analyse médico-légale ou la vérification d'images journalistiques, des techniques supplémentaires au-delà de l'inspection EXIF sont nécessaires, incluant l'analyse des artefacts de compression, des motifs de bruit et d'autres méthodes de criminalistique numérique. La vérification professionnelle nécessite généralement des outils spécialisés allant au-delà des visionneuses EXIF grand public."
        },
        relatedTools: {
            title: "Découvrez des outils photographiques et d'image complémentaires",
            description: "Améliorez votre flux de travail d'images numériques avec ces outils :",
            tool1: {
                name: "Outil de compression d'image",
                url: "https://www.ufreetools.com/tool/image-compressor",
                description: "Réduisez la taille des fichiers image tout en préservant la qualité, pour des chargements de site plus rapides et un partage plus facile."
            },
            tool2: {
                name: "Outil de redimensionnement par lot d'images",
                description: "Redimensionnez, convertissez et optimisez plusieurs images en une seule opération.",
                url: "https://www.ufreetools.com/tool/image-batch-resizer"
            },
            tool3: {
                name: "Outil de filigrane d'image",
                description: "Ajoutez des filigranes textuels ou visuels à vos photos avec des paramètres personnalisables.",
                url: "https://www.ufreetools.com/tool/image-watermark"
            },
            tool4: {
                name: "Outil de pixellisation d'image",
                url: "https://www.ufreetools.com/tool/image-pixelator",
                description: "Créez des arts pixellisés ou floutez des parties sensibles d'images pour protéger la vie privée ou créer des effets artistiques."
            }
        },
        resources: {
            title: "Ressources de référence sur les données EXIF",
            resource1: {
                name: "Wikipedia EXIF",
                url: "https://fr.wikipedia.org/wiki/Exchangeable_image_file_format",
                description: "Spécifications techniques officielles et documentation du format EXIF."
            },
            resource2: {
                name: "Camera & Imaging Products Association (CIPA)",
                url: "https://www.cipa.jp/e/",
                description: "Organisation industrielle responsable du développement et de la maintenance du standard EXIF."
            },
            resource3: {
                name: "Digital Photography Review - Comprendre les métadonnées",
                url: "https://www.dpreview.com/articles/7237356563/understanding-metadata-in-digital-photography",
                description: "Guide complet et discussions sur les métadonnées d'image et leur impact pour les photographes."
            }
        }
    }
}