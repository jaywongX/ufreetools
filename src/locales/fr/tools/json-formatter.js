export default {
    name: 'Formatage JSON',
    description: 'Outil en ligne de formatage et validation JSON, supportant la compression et la mise en forme',

    options: {
        indent: 'Indentation',
        sort: 'Trier les clés',
        compress: 'Compresser',
        beautify: 'Mettre en forme'
    },

    actions: {
        format: 'Formatter JSON',
        compress: 'Compresser',
        clear: 'Effacer',
        copy: 'Copier',
        download: 'Télécharger',
        transferMeaning: 'Échapper',
        contraposition: 'Déséchapper'
    },

    messages: {
        invalidJson: 'Syntaxe JSON invalide',
        copied: 'Copié dans le presse-papiers !',
        empty: 'Veuillez saisir du contenu JSON',
        formatTip: 'La liste des propriétés s\'affiche après le formatage ou la compression JSON',
        formatSuccess: 'Formatage JSON réussi',
        compressSuccess: 'Compression JSON réussie',
        escapeSuccess: 'Échappement JSON réussi',
        unescapeSuccess: 'Déséchappement JSON réussi',
        copyFailed: 'Échec de la copie, veuillez copier manuellement'
    },

    labels: {
        jsonData: 'Données JSON',
        propertyList: 'Liste des propriétés',
        clickToCopy: '(cliquez sur une valeur pour copier)'
    },

    placeholders: {
        jsonInput: 'Collez vos données JSON ici...'
    }
};