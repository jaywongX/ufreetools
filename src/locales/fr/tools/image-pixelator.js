export default {
    name: 'Pixeliseur d\'image',
    description: 'Transformez des images en art pixel avec une résolution et des effets personnalisables',

    upload: {
        title: 'Télécharger une image',
        dropzone: 'Glissez-déposez une image ici ou cliquez pour parcourir',
        maxSize: 'Taille maximale : 10 Mo',
        supportedFormats: 'Formats supportés : JPG, PNG, WEBP, GIF'
    },

    settings: {
        title: 'Paramètres de pixellisation',
        pixelSize: 'Taille des pixels',
        pixelShape: 'Forme des pixels',
        shapes: {
            square: 'Carré',
            rounded: 'Arrondi',
            circle: 'Cercle',
            diamond: 'Losange',
            custom: 'Personnalisé'
        },
        resolution: 'Résolution',
        width: 'Largeur',
        height: 'Hauteur',
        preserveAspect: 'Conserver le ratio',
        colorReduction: 'Réduction de couleurs',
        colors: 'Nombre de couleurs',
        dithering: 'Tramage',
        ditheringTypes: {
            none: 'Aucun',
            floydSteinberg: 'Floyd-Steinberg',
            atkinson: 'Atkinson',
            ordered: 'Ordonné',
            bayer: 'Bayer'
        },
        palette: 'Palette de couleurs',
        palettes: {
            auto: 'Automatique',
            grayscale: 'Niveaux de gris',
            gameboy: 'Game Boy',
            nes: 'NES',
            cpc: 'CPC',
            c64: 'C64',
            custom: 'Personnalisée',
            normal: 'Normale',
            retro: 'Rétro',
            sepia: 'Sépia',
            bright: 'Claire',
            cool: 'Froide',
            warm: 'Chaude',
            bw: 'Noir et blanc',
            invert: 'Inversée'
        },
        customPalette: 'Couleurs de palette personnalisée',
        small: 'Petit (fin)',
        large: 'Grand (épais)',
        low: 'Bas (rétro)',
        high: 'Haut (vraies couleurs)',
    },

    effects: {
        title: 'Effets',
        brightness: 'Luminosité',
        contrast: 'Contraste',
        saturation: 'Saturation',
        hue: 'Teinte',
        outline: 'Contour',
        outlineColor: 'Couleur du contour',
        noise: 'Bruit',
        posterize: 'Postérisation',
        invert: 'Inverser les couleurs',
        grayscale: 'Niveaux de gris',
        sepia: 'Sépia',
        vignette: 'Vignettage'
    },

    animation: {
        title: 'Paramètres d\'animation',
        animated: 'Traiter comme animation',
        frameRate: 'Fréquence d\'images',
        optimizeFrames: 'Optimiser les images',
        looping: 'Bouclage',
        loopCount: 'Nombre de boucles'
    },

    output: {
        title: 'Sortie',
        preview: 'Aperçu',
        original: 'Original',
        pixelated: 'Pixelisé',
        comparison: 'Comparaison',
        zoomIn: 'Zoomer',
        zoomOut: 'Dézoomer',
        gridOverlay: 'Grille de superposition',
        downloadAs: 'Télécharger en',
        png: 'PNG',
        jpg: 'JPG',
        gif: 'GIF',
        webp: 'WebP',
        spritesheet: 'Feuille de sprites',
        quality: 'Qualité',
        scale: 'Échelle',
        loading: 'Chargement...',
        noImage: 'Veuillez sélectionner une image',
        processing: 'Traitement...'
    },

    presets: {
        title: 'Préréglages',
        save: 'Enregistrer les paramètres actuels',
        load: 'Charger un préréglage',
        delete: 'Supprimer un préréglage',
        presetName: 'Nom du préréglage',
        defaults: {
            lowRes: 'Basse résolution',
            highContrast: 'Haut contraste',
            retro: 'Rétro',
            minimal: 'Minimal',
            sketch: 'Croquis',
            blueprint: 'Plan'
        }
    },

    actions: {
        pixelate: 'Pixeliser l\'image',
        reset: 'Réinitialiser les paramètres',
        applyChanges: 'Appliquer les modifications',
        undoChanges: 'Annuler les modifications',
        downloadImage: 'Télécharger l\'image',
        selectImage: 'Sélectionner une image'
    },

    messages: {
        processing: 'Traitement de l\'image...',
        success: 'Image pixelisée avec succès',
        downloading: 'Préparation du téléchargement...',
        presetSaved: 'Préréglage enregistré',
        presetLoaded: 'Préréglage chargé',
        presetDeleted: 'Préréglage supprimé',
        error: 'Erreur : {error}',
        fileSize: 'Taille du fichier',
        pixels: 'Pixels',
        imageSize: 'Dimensions de l\'image',
        downloadSuccess: 'Image téléchargée',
        downloadFailed: 'Échec du téléchargement',
        resetSuccess: 'Réinitialisation réussie',
        fileName: 'Nom du fichier'
    }
};