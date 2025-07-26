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
    }
};