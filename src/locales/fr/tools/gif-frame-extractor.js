export default {
    name: 'Extracteur de frames GIF',
    description: 'Extraire des images individuelles à partir d\'animations GIF',
    uploadBtn: 'Choisir un GIF',
    resetBtn: 'Réinitialiser',
    extractBtn: 'Extraire les frames',
    extractingBtn: 'Extraction en cours...',
    downloadAllBtn: 'Télécharger toutes les frames',
    upload: {
        title: 'Téléverser un GIF',
        dropzone: 'Glissez-déposez un fichier GIF ici ou cliquez pour parcourir',
        maxSize: 'Taille maximale : 20 Mo',
        onlyGif: 'Seuls les fichiers GIF sont supportés',
        selectGif: 'Veuillez sélectionner un fichier GIF'
    },
    analysis: {
        title: 'Informations GIF',
        dimensions: 'Dimensions',
        frameCount: 'Nombre de frames',
        duration: 'Durée',
        fps: 'Images par seconde',
        fileSize: 'Taille du fichier',
        loopCount: 'Nombre de boucles',
        infinite: 'Infini',
        fileName: 'Nom du fichier',
        size: 'Taille',
        totalFrames: 'Total des frames',
        notExtracted: 'Non extraites'
    },
    extraction: {
        title: 'Extraction des frames',
        selectFrames: 'Sélectionner des frames',
        allFrames: 'Toutes les frames',
        rangeOfFrames: 'Plage de frames',
        from: 'De',
        to: 'À',
        specificFrames: 'Frames spécifiques',
        frameNumbers: 'Numéros de frame (séparés par des virgules)',
        everyNth: 'Toutes les N frames',
        nth: 'Toutes les',
        frames: 'frames',
        selectFirst: 'Première frame',
        selectLast: 'Dernière frame',
        selectMiddle: 'Frame centrale',
        selectKeyFrames: 'Détection automatique des frames clés'
    },
    output: {
        title: 'Paramètres d\'exportation',
        format: 'Format de sortie',
        png: 'PNG',
        jpeg: 'JPEG',
        webp: 'WebP',
        scaling: 'Mise à l\'échelle',
        originalSize: 'Taille originale',
        customSize: 'Taille personnalisée',
        width: 'Largeur',
        height: 'Hauteur',
        quality: 'Qualité',
        qualityValue: 'Qualité : {value}%',
        lowQuality: 'Basse qualité (petit fichier)',
        highQuality: 'Haute qualité (gros fichier)',
        naming: 'Nommage des fichiers',
        pattern: 'Modèle',
        filename: 'Nom de fichier original',
        framenumber: 'Numéro de frame',
        timestamp: 'Horodatage',
        preview: 'Aperçu',
        downloadOptions: 'Options de téléchargement',
        separateFiles: 'Fichiers séparés',
        zipArchive: 'Archive ZIP',
        spritesheet: 'Sprite sheet',
        gridSize: 'Taille de la grille',
        columns: 'Nombre de colonnes',
        animation: 'Nouvelle animation'
    },
    frames: {
        title: 'Frames extraites',
        frameInfo: 'Frame {number} sur {total}',
        frame: 'Frame',
        delay: 'Délai : {delay} ms',
        downloadFrame: 'Télécharger',
        copyFrame: 'Copier',
        selectAll: 'Tout sélectionner',
        unselectAll: 'Tout désélectionner',
        invertSelection: 'Inverser la sélection',
        noFrames: 'Aucune frame extraite',
        extractFirst: 'Veuillez d\'abord extraire des frames'
    },
    actions: {
        extract: 'Extraire les frames',
        preview: 'Aperçu',
        downloadSelected: 'Télécharger la sélection',
        downloadAll: 'Télécharger tout',
        createSpritesheet: 'Créer une sprite sheet',
        createNewGif: 'Créer un nouveau GIF',
        cancel: 'Annuler',
        processing: 'Traitement en cours...'
    },
    messages: {
        extractionComplete: 'Extraction des frames terminée',
        extracting: 'Extraction des frames en cours...',
        noFramesSelected: 'Aucune frame sélectionnée',
        processingGif: 'Traitement du GIF en cours...',
        invalidGif: 'Fichier GIF invalide',
        framesCopied: 'Frames copiées dans le presse-papiers',
        downloadStarted: 'Téléchargement démarré',
        spritesheetCreated: 'Sprite sheet créée avec succès',
        frameDownloaded: 'Frame téléchargée',
        preparingFrames: 'Préparation de toutes les frames, veuillez patienter...',
        allFramesDownloaded: 'Toutes les frames téléchargées',
        downloadError: 'Échec du téléchargement de toutes les frames',
        resetComplete: 'Réinitialisation terminée',
        fileEmpty: 'Fichier vide',
        preparingFrames: 'Préparation de toutes les frames, veuillez patienter...',
        allFramesDownloaded: 'Toutes les frames téléchargées',
        downloadError: 'Échec du téléchargement de toutes les frames',
        resetComplete: 'Réinitialisation terminée',
        fileEmpty: 'Fichier vide',
        // Nouveaux messages supplémentaires
        invalidFrameRange: 'Plage de frames invalide',
        invalidSpecificFrames: 'Numéros de frame spécifiés invalides',
        invalidNthValue: 'Valeur pour "toutes les N frames" invalide',
        extractionFailed: 'Échec de l\'extraction des frames',
        noGifSelected: 'Aucun GIF sélectionné',
        gifTooLarge: 'Le fichier GIF est trop volumineux (max 20 Mo)',
        unsupportedFormat: 'Format de fichier non supporté',
        processingError: 'Erreur lors du traitement du GIF',
        frameSelectionError: 'Erreur dans la sélection des frames',
        outputConfigError: 'Erreur dans la configuration de sortie',
        spritesheetError: 'Erreur lors de la création de la sprite sheet',
        newGifError: 'Erreur lors de la création du nouveau GIF',
        copyError: 'Erreur lors de la copie des frames',
        qualityAdjustmentWarning: 'Ajustement de la qualité peut affecter l\'apparence des frames'
    },
    article: {
        title: "Extracteur de frames GIF : analyser et extraire des images d'animation",
        features: {
            title: "Comprendre l'extraction de frames GIF",
            description: "<strong>L'extracteur de frames GIF</strong> est un outil professionnel conçu pour décomposer les fichiers GIF animés en images individuelles. Ce puissant <strong>déconstructeur d'animation</strong> offre une approche complète pour analyser et extraire chaque image statique composant un GIF, vous permettant d'isoler des moments spécifiques de toute <strong>séquence animée</strong>.<br><br>Notre <strong>séparateur GIF</strong> propose plusieurs options de format de sortie (PNG, JPEG, WebP), des paramètres de qualité de compression et une navigation intuitive entre les frames. L'outil détecte automatiquement et affiche les <strong>métadonnées GIF</strong> essentielles, incluant les dimensions, le nombre de frames, la taille du fichier et les délais entre chaque frame. Une fois l'extraction terminée, vous pouvez prévisualiser chaque <strong>image de frame</strong>, télécharger des frames individuelles ou exporter toutes les frames ensemble dans une archive ZIP pour un édition ou une analyse ultérieure.",
            useCases: {
                title: "Cas d'utilisation courants de l'extraction de frames GIF",
                items: [
                    "Les graphistes extraient des frames spécifiques de GIF animés pour les modifier et les intégrer dans de nouvelles conceptions ou présentations",
                    "Les développeurs web séparent les frames d'animations pour créer des indicateurs de chargement personnalisés, des barres de progression ou des sprite sheets",
                    "Les artistes numériques analysent les techniques d'animation image par image dans des GIF existants pour améliorer leurs propres compétences en animation",
                    "Les créateurs de contenu extraient des frames clés de réactions animées ou de mèmes pour les utiliser comme images statiques dans des publications sur les réseaux sociaux",
                    "Les éducateurs et rédacteurs techniques capturent des étapes spécifiques de tutoriels ou démonstrations animées pour les inclure dans du matériel pédagogique",
                    "Les analystes de mouvement et chercheurs extraient des séquences d'images pour étudier des modèles de mouvement, des visualisations physiques ou des animations scientifiques"
                ]
            }
        },
        faq: {
            title: "Questions fréquentes sur l'extraction de frames GIF",
            items: [
                {
                    question: "Quelle est la taille maximale de GIF que cet outil peut traiter ?",
                    answer: "Notre extracteur de frames GIF est conçu pour gérer des fichiers GIF jusqu'à 20 Mo. Cette limite couvre la plupart des GIF animés trouvés en ligne tout en garantissant des performances optimales. Pour les GIF plus volumineux, nous recommandons d'utiliser des logiciels de montage vidéo ou des outils d'animation professionnels. La vitesse d'extraction dépend de la taille du fichier et du nombre de frames dans l'animation GIF - les gros fichiers avec de nombreuses frames prendront naturellement plus de temps à traiter que les petites animations avec moins de frames."
                },
                {
                    question: "Quel format de sortie choisir pour les frames extraites ?",
                    answer: "Le meilleur format de sortie dépend de vos besoins spécifiques : Le format PNG est idéal pour maintenir la qualité maximale et supporter la transparence, parfait lorsque vous devez préserver le canal alpha dans les frames GIF ou effectuer des modifications ultérieures. Le JPEG offre des fichiers plus petits mais sans transparence et peut introduire des artefacts de compression, adapté aux images simples ou lorsque la taille du fichier est cruciale pour le web. Le WebP offre un bon équilibre entre qualité et compression, supportant la transparence avec des tailles de fichier plus petites que PNG, c'est un excellent choix moderne si votre logiciel supporte ce format."
                },
                {
                    question: "Comment créer une nouvelle animation à partir des frames extraites ?",
                    answer: "Après avoir extrait des frames avec notre extracteur, vous pouvez créer de nouvelles animations de plusieurs manières : 1) Utiliser des logiciels d'animation comme Adobe Animate, After Effects ou des alternatives gratuites comme GIMP pour importer les frames extraites et les exporter sous forme de nouveau GIF avec un timing personnalisé. 2) Des outils d'animation en ligne comme EZGIF ou Canva peuvent importer des séquences d'images et les convertir en GIF avec des paramètres ajustables. 3) Pour les développeurs, envisagez d'utiliser des animations CSS ou des bibliothèques JavaScript comme GSAP pour créer des animations web à partir des frames. Vous pouvez modifier des frames individuelles avant de les recomposer, créant ainsi des versions améliorées ou éditées du GIF original."
                },
                {
                    question: "Pourquoi certaines frames extraites semblent différentes de ce que je vois dans le GIF ?",
                    answer: "Les différences entre les frames extraites et le contenu visible lors de la lecture du GIF peuvent avoir plusieurs raisons : 1) Les GIF utilisent souvent des techniques d'optimisation comme des zones transparentes ou des traitements qui n'ont de sens que dans la séquence. 2) Certaines frames de l'animation peuvent s'afficher très brièvement, presque invisibles à la lecture mais visibles une fois extraites. 3) Certains lecteurs GIF peuvent appliquer un mélange ou une interpolation d'images pour fluidifier l'animation. 4) Le GIF peut utiliser des tables de couleurs locales, modifiant la palette entre les frames. Notre extracteur de frames GIF conserve les données exactes de chaque frame telles qu'elles sont stockées dans le fichier GIF, fournissant la représentation la plus précise des frames originales."
                },
                {
                    question: "Que peut-on apprendre des délais entre les frames ?",
                    answer: "Les délais entre les frames d'un GIF fournissent des informations précieuses sur le rythme et le tempo de l'animation. Le délai de chaque frame (en millisecondes) révèle : 1) La vitesse globale de l'animation - des délais courts créent des animations rapides, tandis que des délais longs ralentissent l'action. 2) Des motifs temporels mettant l'accent sur certains moments, où l'animation s'attarde sur certaines frames pour créer un effet. 3) Des techniques d'animation comme des effets 'd'accélération' ou 'de ralentissement' où les délais entre frames changent progressivement. 4) Des opportunités potentielles"
                },
                {
                    question: "Que peut-on apprendre des délais entre les frames ?",
                    answer: "Les délais entre les frames d'un GIF fournissent des informations précieuses sur le rythme et le tempo de l'animation. Le délai de chaque frame (en millisecondes) révèle : 1) La vitesse globale de l'animation - des délais courts créent des animations rapides, tandis que des délais longs ralentissent l'action. 2) Des motifs temporels mettant l'accent sur certains moments, où l'animation s'attarde sur certaines frames pour créer un effet. 3) Des techniques d'animation comme des effets 'd'accélération' ou 'de ralentissement' où les délais entre frames changent progressivement. 4) Des opportunités potentielles d'optimisation - les frames avec des délais identiques ou très similaires peuvent être candidates à une standardisation. Notre extracteur de frames GIF affiche ces valeurs de délai pour chaque frame extraite, vous aidant à comprendre la structure temporelle de l'animation originale."
                }
            ]
        },
        guide: {
            title: "Guide étape par étape pour utiliser l'extracteur de frames GIF",
            steps: [
                "Cliquez sur le bouton <strong>Choisir un GIF</strong> en haut de l'interface de l'outil pour sélectionner le fichier GIF animé que vous souhaitez traiter depuis votre appareil. L'outil prend en charge les fichiers GIF jusqu'à 20 Mo.",
                "Après téléversement, consultez le panneau <strong>Informations GIF</strong> qui apparaît à gauche, affichant des détails comme les dimensions, la taille du fichier et le nombre de frames, pour vérifier que vous avez sélectionné le bon fichier.",
                "Cliquez sur le bouton <strong>Extraire les frames</strong> dans la barre d'outils supérieure pour lancer le processus d'extraction. Un indicateur de progression s'affiche pendant que l'outil analyse et extrait chaque frame du GIF.",
                "Sélectionnez votre <strong>format de sortie</strong> préféré (PNG, JPEG, WebP) dans les options du panneau gauche. Si vous choisissez JPEG ou WebP, vous pouvez ajuster le curseur de qualité pour trouver le bon équilibre entre qualité d'image et taille de fichier.",
                "Parcourez les frames extraites affichées dans la vue en grille à droite de l'outil. Chaque miniature montre le numéro de frame et le délai (durée d'affichage de cette frame dans l'animation).",
                "Pour sauvegarder une frame individuelle, survolez une miniature et cliquez sur l'icône de téléchargement qui apparaît. La frame sera sauvegardée sur votre appareil dans le format de sortie choisi.",
                "Pour télécharger toutes les frames extraites en une seule fois, cliquez sur le bouton <strong>Télécharger toutes les frames</strong> dans la barre d'outils. Cela créera une archive ZIP contenant toutes les frames sauvegardées dans votre format choisi, pour un stockage et une édition ultérieure faciles."
            ]
        },
        conclusion: "L'extracteur de frames GIF offre une solution complète pour décomposer les GIF animés en leurs frames constitutives. Que vous soyez un graphiste recherchant une image spécifique dans une animation, un développeur créant des animations web personnalisées, ou un éducateur analysant des séquences visuelles, cet outil fournit une extraction précise frame par frame avec des options de sortie flexibles. En convertissant des animations temporelles en séquences d'images statiques, vous obtenez un contrôle total sur le contenu GIF, permettant une édition avancée, une analyse et une réutilisation du contenu animé. Alors que les GIF continuent d'être un médium populaire pour exprimer des idées, réactions et démonstrations sur le web, la capacité à extraire et manipuler des frames individuelles reste une compétence essentielle pour les créateurs de contenu numérique et les analystes."
    }
}