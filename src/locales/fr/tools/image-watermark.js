export default {
    name: 'Filigrane d\'image',
    description: 'Ajoute des filigranes texte ou image à vos photos avec des paramètres personnalisables',
    upload: {
        title: 'Télécharger une image',
        dropzone: 'Glissez-déposez une image ici ou cliquez pour parcourir',
        addMore: 'Ajouter plus d\'images',
        clearAll: 'Tout effacer',
        maxFiles: 'Maximum {count} images',
        maxSize: 'Taille max par image : {size} Mo',
        supportedFormats: 'Formats supportés : JPG, PNG, WEBP, GIF'
    },
    watermarkType: {
        title: 'Type de filigrane',
        text: 'Filigrane texte',
        image: 'Filigrane image',
        both: 'Texte et image'
    },
    textWatermark: {
        title: 'Filigrane texte',
        text: 'Texte du filigrane',
        font: 'Police',
        size: 'Taille',
        color: 'Couleur',
        opacity: 'Opacité',
        rotation: 'Rotation',
        shadow: 'Ombre du texte',
        background: 'Fond du texte',
        padding: 'Marge intérieure',
        border: 'Bordure',
        spacing: 'Espacement des caractères'
    },
    imageWatermark: {
        title: 'Filigrane image',
        upload: 'Télécharger une image de filigrane',
        selectLogo: 'Sélectionner un logo',
        presetLogos: 'Logos prédéfinis',
        size: 'Taille',
        opacity: 'Opacité',
        rotation: 'Rotation',
        offset: 'Décalage'
    },
    positioning: {
        title: 'Positionnement',
        position: 'Position',
        custom: 'Position personnalisée',
        xPosition: 'Position X',
        yPosition: 'Position Y',
        tiled: 'Mode mosaïque',
        margin: 'Marge',
        scale: 'Redimensionner avec l\'image'
    },
    positions: {
        topLeft: 'Haut gauche',
        topCenter: 'Haut centre',
        topRight: 'Haut droit',
        middleLeft: 'Milieu gauche',
        middleCenter: 'Centré',
        middleRight: 'Milieu droit',
        bottomLeft: 'Bas gauche',
        bottomCenter: 'Bas centre',
        bottomRight: 'Bas droit',
        custom: 'Position personnalisée'
    },
    output: {
        title: 'Sortie',
        quality: 'Qualité de sortie',
        format: 'Format de sortie',
        original: 'Identique à l\'original',
        jpg: 'JPG',
        png: 'PNG',
        webp: 'WebP',
        preview: 'Aperçu',
        downloadIndividual: 'Télécharger',
        downloadAll: 'Télécharger tout',
        downloadAsZip: 'Télécharger en ZIP'
    },
    presets: {
        title: 'Préréglages',
        save: 'Sauvegarder les paramètres actuels',
        load: 'Charger un préréglage',
        delete: 'Supprimer un préréglage',
        presetName: 'Nom du préréglage'
    },
    actions: {
        apply: 'Appliquer le filigrane',
        applyToAll: 'Appliquer à toutes',
        reset: 'Réinitialiser',
        preview: 'Aperçu',
        undo: 'Annuler',
        cancel: 'Annuler le traitement'
    },
    messages: {
        processing: 'Traitement en cours...',
        success: 'Filigrane appliqué avec succès',
        error: 'Erreur : {error}',
        noImages: 'Veuillez d\'abord ajouter des images',
        noWatermark: 'Veuillez ajouter un filigrane texte ou image',
        presetSaved: 'Préréglage sauvegardé avec succès',
        presetLoaded: 'Préréglage chargé avec succès',
        presetDeleted: 'Préréglage supprimé',
        watermarkApplied: 'Filigrane appliqué',
        watermarkImageLoadError: 'Échec du chargement de l\'image de filigrane',
        imageLoadError: 'Échec du chargement de l\'image',
        resetSuccess: 'Réinitialisation réussie',
        downloadStarted: 'Téléchargement démarré',
        downloadError: 'Échec du téléchargement de l\'image',
        imageLoaded: 'Image chargée avec succès',
        canvasInitError: 'Échec de l\'initialisation du canevas',
        tiledWatermarkError: 'Échec de la création du filigrane en mosaïque'
    },
    article: {
        title: "Outil de filigrane : Protégez et marquez vos contenus visuels",
        features: {
            title: "Comprendre la technologie de filigrane",
            description: "L'<strong>outil de filigrane</strong> est une solution puissante pour ajouter des marques de propriété visibles à vos <strong>images numériques</strong>. Cet <strong>outil de filigrane en ligne</strong> vous permet d'appliquer des <strong>filigranes texte</strong> et <strong>image</strong> pour protéger votre propriété intellectuelle et renforcer votre présence de marque.<br><br>Notre <strong>outil de filigrane photo</strong> offre des options de personnalisation étendues incluant le contrôle d'opacité, le positionnement, la rotation et l'ajustement d'échelle pour créer l'effet de filigrane parfait. Que vous ayez besoin d'un <strong>filigrane de copyright</strong> discret ou d'un <strong>superposition de logo</strong> visible, cet outil offre la flexibilité nécessaire sans logiciel complexe.",
            useCases: {
                title: "Applications courantes du filigrane",
                items: [
                    "Photographes ajoutant des informations de copyright à leurs portfolios",
                    "Entreprises intégrant des logos sur leurs photos produits pour le branding",
                    "Professionnels de l'immobilier protégeant leurs photos de biens",
                    "Designers graphiques protégeant leurs ébauches partagées avec clients",
                    "Créateurs de contenu marquant leurs publications sur réseaux sociaux",
                    "Vendeurs e-commerce protégeant leurs photos produits contre la copie"
                ]
            }
        },
        faq: {
            title: "Questions fréquentes sur les filigranes",
            items: [
                {
                    question: "Quelle différence entre filigrane texte et image ?",
                    answer: "Les filigranes texte utilisent du texte personnalisé (comme des copyrights ou URLs) avec différents styles de police. Les filigranes image utilisent des graphiques comme logos ou signatures. Notre outil supporte les deux types et leur combinaison."
                },
                {
                    question: "Comment créer un filigrane visible mais discret ?",
                    answer: "Pour un filigrane efficace mais discret : utilisez une opacité de 30-50%, placez-le dans un coin ou en bordure, choisissez une couleur contrastante avec l'image. Le mode mosaïque avec espacement accru peut aussi créer un effet subtil."
                },
                {
                    question: "Peut-on complètement supprimer un filigrane ?",
                    answer: "Aucun filigrane n'est 100% indélébile, mais un filigrane bien conçu décourage fortement l'utilisation non autorisée. Les filigranes positionnés stratégiquement avec opacité adaptée et mode mosaïque sont particulièrement difficiles à supprimer proprement."
                },
                {
                    question: "Quels formats d'image sont supportés ?",
                    answer: "Notre outil supporte tous les formats principaux : JPG, PNG, WEBP et GIF. Pour la sortie, choisissez PNG pour préserver la transparence ou JPG pour un meilleur compromis qualité/taille."
                },
                {
                    question: "Puis-je filigraner plusieurs images à la fois ?",
                    answer: "Actuellement, notre outil traite une image à la fois pour garantir un positionnement et une personnalisation précis du filigrane. L'interface intuitive permet cependant un traitement rapide et efficace."
                }
            ]
        },
        guide: {
            title: "Guide d'utilisation de l'outil de filigrane",
            steps: [
                "Cliquez sur 'Télécharger une image' pour sélectionner une photo depuis votre appareil",
                "Choisissez votre type de filigrane : texte, image ou les deux",
                "Pour un filigrane texte : saisissez votre texte et ajustez police, taille, couleur et opacité",
                "Pour un filigrane image : téléchargez votre logo et ajustez échelle et opacité",
                "Utilisez la grille de positionnement (9 positions disponibles) ou activez le mode mosaïque",
                "Ajustez l'angle de rotation si nécessaire pour un effet diagonal",
                "Prévisualisez en temps réel et ajustez jusqu'à satisfaction",
                "Cliquez sur 'Télécharger' pour sauvegarder votre image filigranée"
            ]
        },
        conclusion: "L'ajout de filigranes professionnels à vos images est une pratique essentielle pour protéger votre contenu visuel et renforcer votre identité de marque dans l'environnement numérique actuel. L'outil de filigrane rend ce processus simple et accessible, vous permettant de créer des filigranes personnalisés sans compétences avancées en design. Que vous soyez photographe, propriétaire d'entreprise ou créateur de contenu, intégrer des filigranes à votre flux de travail aide à protéger vos droits tout en améliorant la reconnaissance de votre travail lorsqu'il est partagé en ligne."
    }
}