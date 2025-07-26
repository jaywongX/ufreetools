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
    }
};