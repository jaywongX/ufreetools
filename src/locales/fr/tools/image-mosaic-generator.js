export default {
    name: 'Générateur de mosaïque d\'images',
    description: 'Créez des œuvres d\'art en mosaïque en assemblant de petites images pour former une image plus grande',

    upload: {
        title: 'Télécharger l\'image principale',
        dropzone: 'Glissez-déposez l\'image principale ici ou cliquez pour parcourir',
        maxSize: 'Taille maximale : 15 Mo',
        supportedFormats: 'Formats supportés : JPG, PNG, WEBP'
    },

    tiles: {
        title: 'Images de tuiles',
        uploadTiles: 'Télécharger des images de tuiles',
        dropzoneTiles: 'Glissez-déposez les images de tuiles ici ou cliquez pour parcourir',
        maxTiles: 'Maximum {count} images',
        useFolder: 'Télécharger un dossier d\'images',
        orUseSample: 'Ou utiliser une galerie d\'exemple',
        sampleSets: 'Ensembles de tuiles d\'exemple',
        nature: 'Nature',
        people: 'Personnes',
        art: 'Art',
        abstract: 'Abstrait',
        animals: 'Animaux',
        clearAll: 'Effacer toutes les tuiles'
    },

    settings: {
        title: 'Paramètres de mosaïque',
        tileSize: 'Taille des tuiles',
        small: 'Petit (détaillé)',
        medium: 'Moyen',
        large: 'Grand (brut)',
        square: 'Carré',
        circle: 'Cercle',
        applicationMode: 'Mode d\'application de la mosaïque',
        all: 'Image entière',
        selectRegion: 'Sélectionner une région',
        selectingRegion: 'Sélection de région en cours...',
        autoDetectFaces: 'Détection automatique des visages',
        detectFaces: 'Détecter les visages',
        detectFacesDescription: 'Détecte les visages dans l\'image et applique automatiquement une mosaïque',
        edgeSmoothing: 'Lissage des bords',
        edgeSmoothingDescription: 'Adoucit les bords des tuiles de mosaïque pour des transitions plus naturelles',
        custom: 'Personnalisé',
        width: 'Largeur',
        height: 'Hauteur',
        tilesWide: 'Nombre de tuiles en largeur',
        tilesHigh: 'Nombre de tuiles en hauteur',
        colorMatch: 'Correspondance des couleurs',
        intensity: 'Intensité',
        low: 'Faible',
        high: 'Élevée',
        reuseTiles: 'Réutiliser les tuiles',
        allowDuplicates: 'Autoriser les doublons',
        maxUses: 'Nombre maximum d\'utilisations par tuile',
        colorAdjustment: 'Ajustement des couleurs',
        adjustTiles: 'Ajuster les couleurs des tuiles pour correspondre',
        blendOriginal: 'Mélanger avec l\'image originale',
        blendAmount: 'Quantité de mélange',
        random: 'Variation aléatoire',
        shuffle: 'Mélanger aléatoirement les tuiles'
    },

    advanced: {
        title: 'Options avancées',
        algorithm: 'Algorithme de correspondance',
        algorithms: {
            average: 'Couleur moyenne',
            dominant: 'Couleur dominante',
            histogram: 'Histogramme des couleurs',
            pattern: 'Correspondance de motif'
        },
        tileShape: 'Forme des tuiles',
        shapes: {
            square: 'Carré',
            circle: 'Cercle',
            hexagon: 'Hexagone',
            triangle: 'Triangle',
            random: 'Aléatoire'
        },
        tileGap: 'Espacement des tuiles',
        borderColor: 'Couleur de bordure',
        backgroundColor: 'Couleur de fond'
    },

    output: {
        fileName: 'Nom du fichier',
        title: 'Sortie',
        preview: 'Aperçu',
        original: 'Original',
        mosaic: 'Mosaïque',
        sideBySide: 'Côte à côte',
        zoomIn: 'Zoomer',
        zoomOut: 'Dézoomer',
        download: 'Télécharger la mosaïque',
        asJpg: 'Télécharger en JPG',
        asPng: 'Télécharger en PNG',
        highRes: 'Haute résolution',
        resolution: 'Résolution de sortie',
        format: 'Format',
        quality: 'Qualité',
        size: 'Taille',
        pixel: 'Pixel',
        pleaseSelectImage: 'Veuillez sélectionner une image',
        pleaseSelectImageAndAdjustSettings: 'Veuillez sélectionner une image et ajuster les paramètres'
    },

    actions: {
        generate: 'Générer la mosaïque',
        regenerate: 'Regénérer',
        cancel: 'Annuler la génération',
        reset: 'Réinitialiser',
        detectFaces: 'Détecter les visages',
        saveSettings: 'Enregistrer les paramètres',
        loadSettings: 'Charger les paramètres'
    },

    messages: {
        generating: 'Génération de la mosaïque en cours... Cela peut prendre un certain temps.',
        generationComplete: 'Mosaïque générée avec succès !',
        notEnoughTiles: 'Pas assez d\'images de tuiles. Veuillez télécharger plus d\'images.',
        tileProcessing: 'Traitement des images de tuiles : {progress}%',
        downloadStarted: 'Téléchargement démarré',
        settingsSaved: 'Paramètres enregistrés',
        selecting: 'Sélection de région en cours...',
        preview: 'L\'effet de la mosaïque appliquée apparaîtra ici',
        faceDetected: 'Zone de visage détectée',
        facesDetected: '{count} visages détectés',
        noFacesDetected: 'Aucun visage détecté',
        loadingModels: 'Chargement des modèles de détection de visage...',
        faceDetectionFailed: 'Échec de la détection de visage',
        reset: 'Réinitialisé',
        error: 'Erreur : {message}'
    }
};