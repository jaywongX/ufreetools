export default {
    name: 'Filtres d\'image',
    description: 'Prévisualisation en temps réel de divers filtres et effets pour images',

    upload: {
        title: 'Télécharger une image',
        dropzone: 'Glissez-déposez une image ici ou cliquez pour parcourir',
        maxSize: 'Taille maximale : 10 Mo',
        supportedFormats: 'Formats supportés : JPG, PNG, WEBP, GIF'
    },

    editor: {
        title: 'Éditeur de filtres',
        original: 'Original',
        filtered: 'Filtré',
        reset: 'Réinitialiser tout',
        undo: 'Annuler',
        redo: 'Rétablir',
        zoomIn: 'Zoomer',
        zoomOut: 'Dézoomer',
        fitToScreen: 'Ajuster à l\'écran',
        showOriginal: 'Afficher l\'original'
    },

    filters: {
        title: 'Filtres',
        basic: 'Ajustements de base',
        brightness: 'Luminosité',
        contrast: 'Contraste',
        saturation: 'Saturation',
        hue: 'Teinte',
        exposure: 'Exposition',
        vibrance: 'Vibrance',
        temperature: 'Température',
        gamma: 'Gamma',
        clarity: 'Netteté',
        effects: 'Effets',
        grayscale: 'Niveaux de gris',
        sepia: 'Sépia',
        vintage: 'Vintage',
        polaroid: 'Polaroid',
        duotone: 'Bichromie',
        noise: 'Bruit',
        pixelate: 'Pixelisation',
        blur: 'Flou',
        sharpen: 'Accentuation',
        vignette: 'Vignettage',
        color: 'Couleur',
        colorOverlay: 'Superposition de couleur',
        colorize: 'Colorisation',
        gradientMap: 'Dégradé de couleurs',
        replaceColor: 'Remplacer la couleur',
        advanced: 'Avancé',
        levels: 'Niveaux',
        curves: 'Courbes',
        shadows: 'Ombres',
        highlights: 'Lumières',
        blacks: 'Noirs',
        whites: 'Blancs',
        channels: 'Canaux RVB'
    },

    presets: {
        title: 'Préréglages',
        custom: 'Personnalisé',
        blackAndWhite: 'Noir et blanc',
        highContrast: 'Contraste élevé',
        normal: 'Normal',
        cinematic: 'Cinématique',
        warm: 'Chaud',
        cool: 'Froid',
        sunset: 'Coucher de soleil',
        vintage: 'Vintage',
        invert: 'Inverser',
        cross: 'Développement croisé',
        matte: 'Mat',
        flat: 'Plat',
        portrait: 'Portrait',
        landscape: 'Paysage',
        vivid: 'Vif',
        moody: 'Mélancolique',
        savePreset: 'Enregistrer comme préréglage',
        deletePreset: 'Supprimer le préréglage',
        presetName: 'Nom du préréglage'
    },

    output: {
        title: 'Sortie',
        fileName: 'Nom du fichier',
        format: 'Format',
        quality: 'Qualité',
        width: 'Largeur',
        height: 'Hauteur',
        download: 'Télécharger l\'image',
        saveOnline: 'Enregistrer en ligne',
        share: 'Partager',
        applyToNew: 'Appliquer à une nouvelle image'
    },

    history: {
        title: 'Historique',
        revert: 'Revenir à cette étape',
        clear: 'Effacer l\'historique'
    },

    actions: {
        apply: 'Appliquer le filtre',
        download: 'Télécharger',
        save: 'Enregistrer',
        reset: 'Réinitialiser',
        cancel: 'Annuler'
    },

    messages: {
        imageLoaded: 'Image chargée avec succès',
        filterApplied: 'Filtre appliqué avec succès',
        filtersReset: 'Filtres réinitialisés aux valeurs par défaut',
        downloadStarted: 'Téléchargement démarré',
        presetSaved: 'Préréglage enregistré avec succès',
        presetDeleted: 'Préréglage supprimé',
        invalidFile: 'Fichier invalide. Veuillez télécharger une image valide.',
        fileTooLarge: 'Fichier trop volumineux. La taille maximale est de 10 Mo.'
    }
};