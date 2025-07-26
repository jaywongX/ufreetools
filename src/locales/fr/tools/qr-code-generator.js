export default {
    name: 'Générateur de QR Code',
    description: 'Générez des QR codes personnalisables pour URL, texte, etc.',

    options: {
        content: 'Contenu du QR code',
        contentType: 'Type de contenu',
        errorCorrectionLevel: 'Niveau de correction d\'erreur',
        size: 'Taille',
        margin: 'Marge',
        foregroundColor: 'Couleur de premier plan',
        backgroundColor: 'Couleur d\'arrière-plan',
        logo: 'Ajouter un logo',
        logoSize: 'Taille du logo',
        cornerRadius: 'Rayon des coins'
    },

    contentTypes: {
        url: 'URL',
        text: 'Texte brut',
        email: 'E-mail',
        phone: 'Numéro de téléphone',
        sms: 'SMS',
        wifi: 'Réseau WiFi',
        vcard: 'Carte de visite (vCard)',
        mecard: 'Carte de visite (MeCard)'
    },

    errorLevels: {
        L: 'Bas (7%)',
        M: 'Moyen (15%)',
        Q: 'Élevé (25%)',
        H: 'Très élevé (30%)'
    },

    actions: {
        generate: 'Générer QR code',
        download: 'Télécharger',
        downloadSVG: 'Télécharger SVG',
        downloadPNG: 'Télécharger PNG',
        copy: 'Copier l\'image',
        clear: 'Réinitialiser',
        uploadLogo: 'Télécharger logo'
    },

    templates: {
        title: 'Modèles rapides',
        confirmReplace: 'Voulez-vous vraiment remplacer le contenu actuel ?',
        confirm: 'Confirmer',
        cancel: 'Annuler',
        url: {
            name: 'Lien URL'
        },
        email: {
            name: 'Adresse e-mail'
        },
        phone: {
            name: 'Numéro de téléphone'
        },
        sms: {
            name: 'SMS'
        },
        wifi: {
            name: 'Configuration WiFi',
            example: {
                ssid: 'Nom du réseau',
                password: 'Mot de passe'
            }
        },
        geo: {
            name: 'Localisation géographique'
        }
    },

    appearance: {
        title: 'Paramètres d\'apparence'
    },

    preview: {
        title: 'Aperçu',
        generating: 'Génération en cours...',
        clickGenerateButton: 'Cliquez sur le bouton "Générer QR code"',
        clickToDownload: 'Cliquez pour télécharger le QR code'
    },

    tips: {
        title: 'Conseils',
        saveToPrint: 'Les QR codes générés peuvent être enregistrés comme images pour impression ou partage.',
        errorCorrection: 'Le niveau de correction d\'erreur indique la lisibilité du QR code lorsqu\'il est partiellement obstrué ou endommagé. Le niveau L a la tolérance la plus faible, le niveau H la plus élevée mais rend le QR code plus complexe.'
    },

    wifi: {
        ssid: 'Nom du réseau (SSID)',
        password: 'Mot de passe',
        encryption: 'Méthode de chiffrement',
        hidden: 'Réseau masqué'
    },

    placeholders: {
        content: 'Entrez du texte, un lien ou autre contenu...'
    },

    characters: 'caractères',
    maxChars: 'Il est recommandé de ne pas dépasser 300 caractères',

    messages: {
        copied: 'Copié dans le presse-papiers !',
        generated: 'QR code généré avec succès',
        contentRequired: 'Veuillez entrer le contenu du QR code',
        downloaded: 'QR code téléchargé',
        confirmReplace: 'Cliquez pour confirmer le remplacement du contenu actuel',
        contentUpdated: 'Contenu mis à jour',
        changesCancelled: 'Modifications annulées',
        invalidUrl: 'Veuillez entrer une URL valide',
        invalidEmail: 'Veuillez entrer une adresse e-mail valide',
        invalidPhone: 'Veuillez entrer un numéro de téléphone valide',
        logoTooBig: 'Le fichier logo est trop grand, la taille maximale est de 1 Mo'
    },

    errors: {
        canvasNotReady: 'L\'élément Canvas n\'est pas prêt',
        generationError: 'Erreur lors de la génération du QR code',
        generationErrorWithMessage: 'Erreur lors de la génération du QR code : {message}',
        downloadError: 'Erreur lors du téléchargement du QR code : {message}'
    }
};  