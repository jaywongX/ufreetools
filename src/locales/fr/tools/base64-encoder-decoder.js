export default {
    name: 'Encodeur/Décodeur Base64',
    description: 'Convertir rapidement des données entre texte et encodage Base64',

    mode: {
        title: 'Mode',
        encode: 'Encoder',
        decode: 'Décoder'
    },

    input: {
        title: 'Entrée',
        placeholder: 'Saisissez le texte à traiter...',
        clear: 'Effacer',
        copy: 'Copier',
        paste: 'Coller',
        upload: 'Téléverser un fichier',
        dragDrop: 'Glissez-déposez un fichier ici ou cliquez pour téléverser',
        textOption: 'Texte',
        fileOption: 'Fichier',
        hexOption: 'Hex',
        selectFile: 'Fichier sélectionné',
    },

    output: {
        title: 'Sortie',
        placeholder: 'Le résultat apparaîtra ici...',
        copy: 'Copier',
        download: 'Télécharger',
        empty: 'Aucune sortie pour le moment'
    },

    options: {
        title: 'Options',
        encoding: 'Encodage des caractères',
        encodings: {
            utf8: 'UTF-8',
            ascii: 'ASCII',
            iso88591: 'ISO-8859-1',
            windows1252: 'Windows-1252'
        },
        urlSafe: 'Utiliser un encodage sûr pour les URL',
        autoDecode: 'Détection et décodage automatiques',
        includeDataURI: 'Inclure le préfixe Data URI',
        trimWhitespace: 'Supprimer les espaces blancs',
        preserveLineBreaks: 'Conserver les sauts de ligne',
        addImageHeader: 'Ajouter un en-tête Base64 pour les images',
    },

    dataUri: {
        title: 'Data URI',
        mimeType: 'Type MIME',
        common: 'Types courants',
        custom: 'Personnalisé'
    },

    messages: {
        copied: 'Copié dans le presse-papiers',
        copyFailed: 'Échec de la copie',
        pasteFailed: 'Échec du collage',
        uploadSuccess: 'Fichier téléversé avec succès',
        uploadFailed: 'Échec du téléversement du fichier',
        readFailed: 'Échec de la lecture du fichier',
        invalidBase64: 'Encodage Base64 invalide',
        invalidHex: 'Encodage Hex invalide',
        fileTooLarge: 'Fichier trop volumineux, veuillez le télécharger pour le visualiser',
        processError: 'Une erreur est survenue pendant le traitement',
        encodeSuccess: 'Encodage réussi',
        decodeSuccess: 'Décodage réussi',
        processing: 'Traitement en cours...'
    },

    mimeTypes: {
        'text/plain': 'Texte',
        'application/json': 'JSON',
        'text/html': 'HTML',
        'text/css': 'CSS',
        'text/javascript': 'JavaScript',
        'application/xml': 'XML',
        'image/jpeg': 'Image JPEG',
        'image/png': 'Image PNG',
        'image/gif': 'Image GIF',
        'image/svg+xml': 'Image SVG',
        'application/pdf': 'Document PDF'
    },

    tips: {
        title: 'Conseils d\'utilisation',
        tip1: 'L\'encodage Base64 peut convertir n\'importe quelle donnée binaire en format texte pur',
        tip2: 'Utilisez l\'option sûre pour les URL pour supprimer les caractères "+" et "/" du Base64 standard',
        tip3: 'Utilisez le préfixe Data URI pour utiliser directement les données encodées dans des balises HTML img et autres',
        tip4: 'L\'encodage de gros fichiers consomme plus de ressources, limitez à 2MB maximum',
        tip5: 'Certains caractères spéciaux peuvent nécessiter un encodage spécifique pour être traités correctement'
    },

    about: {
        title: 'À propos de l\'encodage/décodage Base64',
        description: 'Base64 est une méthode de représentation de données binaires basée sur 64 caractères imprimables, couramment utilisée dans des contextes de traitement de texte pour représenter, transmettre et stocker des données binaires.'
    },

    features: {
        title: 'Description des fonctionnalités',
        multiInput: 'Prend en charge trois méthodes d\'entrée : texte, Hex et fichier',
        charsetSupport: 'Prend en charge les jeux de caractères UTF-8 et GBK pour le décodage',
        imagePreview: 'Prend en charge la prévisualisation d\'images (fichiers image de moins de 1MB)',
        fileDownload: 'Prend en charge le téléchargement dans plusieurs formats (PDF par défaut)',
        chunkProcessing: 'Traitement par blocs des gros fichiers avec affichage en temps réel de la progression',
        autoDetect: 'Détection et prévisualisation automatiques des types d\'image'
    },

    notes: {
        title: 'Remarques importantes',
        sizeIncrease: 'L\'encodage Base64 augmente la taille des données d\'environ 33%',
        chunkProcessing: 'Les gros fichiers sont traités par blocs avec une barre de progression en deux étapes',
        largeFiles: 'Les fichiers de plus de 10MB ne sont affichés qu\'en téléchargement, pas en texte',
        fileInput: 'Pour les gros fichiers, utilisez l\'entrée fichier plutôt que de coller dans la zone de texte'
    },

    fileTypeLabel: {
        pdf: 'Document PDF',
        txt: 'Fichier texte',
        jpg: 'Image JPG',
        png: 'Image PNG',
        zip: 'Archive ZIP',
        bin: 'Fichier binaire',
    }
};