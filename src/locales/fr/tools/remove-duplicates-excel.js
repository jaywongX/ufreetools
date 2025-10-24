export default {
    name: 'Outil de suppression des doublons Excel - Suppresseur de données en double dans les feuilles de calcul en ligne',
    description: 'Outil de suppression des doublons Excel en ligne gratuit, prenant en charge les fichiers xlsx/xls/csv. Identifie intelligemment les données en double, fournit plusieurs règles de suppression, prend en charge le traitement par lots et l\'exportation en un clic au format Excel/CSV',
    inputTitle: 'Télécharger un fichier Excel',
    outputTitle: 'Résultats de la suppression des doublons',
    dragTip: 'Glissez-déposez les fichiers Excel ici ou cliquez pour télécharger',
    supported: 'Formats pris en charge : XLSX, XLS, CSV',
    removeDuplicatesBtn: 'Commencer la suppression des doublons',
    downloadBtn: 'Télécharger les résultats',
    noOutput: 'Aucun résultat de suppression des doublons',
    loadSample: 'Charger des données d\'exemple',
    preview: 'Aperçu des données',
    clearAll: 'Tout effacer',
    originalData: 'Données originales',
    deleteFile: 'Supprimer le fichier',
    batchDownload: 'Téléchargement par lots (ZIP)',
    exportFormat: 'Format d\'exportation',
    dataQuality: 'Qualité des données',
    zoomIn: 'Zoom avant',
    zoomOut: 'Zoom arrière',
    resetView: 'Réinitialiser la vue',
    fullscreen: 'Aperçu plein écran',
    
    // Configuration des règles de suppression des doublons
    duplicateRulesTitle: 'Configuration des règles de suppression des doublons',
    ruleType: 'Type de suppression des doublons',
    ruleTypes: {
        fullRow: 'Suppression des doublons sur toute la ligne',
        singleColumn: 'Suppression des doublons sur une seule colonne',
        multiColumn: 'Suppression des doublons sur combinaison de plusieurs colonnes'
    },
    selectedColumns: 'Sélectionner les colonnes',
    selectColumns: 'Veuillez sélectionner les colonnes pour supprimer les doublons',
    caseSensitive: 'Sensible à la casse',
    trimSpaces: 'Supprimer les espaces de début/fin',
    ignoreEmpty: 'Ignorer les valeurs vides',
    fuzzyMatch: 'Correspondance approximative',
    similarityThreshold: 'Seuil de similarité',
    
    // Statistiques des données
    statisticsTitle: 'Statistiques des données',
    originalRows: 'Lignes originales',
    duplicateRows: 'Lignes en double',
    uniqueRows: 'Lignes après suppression des doublons',
    duplicateRate: 'Taux de doublons',
    
    // Tableau d'aperçu
    previewTitle: 'Aperçu des données',
    showDuplicates: 'Afficher les doublons',
    showUnique: 'Afficher les éléments uniques',
    highlightDuplicates: 'Surligner les doublons',
    
    // Options d'exportation
    exportOptions: 'Options d\'exportation',
    includeHeaders: 'Inclure les en-têtes',
    encoding: 'Encodage du fichier',
    delimiter: 'Délimiteur',
    
    // Boutons d'action
    processBtn: 'Traiter les données',
    resetBtn: 'Réinitialiser',
    saveTemplate: 'Enregistrer le modèle',
    loadTemplate: 'Charger le modèle',
    
    // Gestion des modèles
    savedTemplates: 'Modèles enregistrés',
    deleteTemplate: 'Supprimer',
    templateNamePrompt: 'Veuillez saisir le nom du modèle :',
    templateSaved: 'Modèle enregistré avec succès !',
    deleteTemplateConfirm: 'Êtes-vous sûr de vouloir supprimer ce modèle ?',
    templateLoadError: 'Échec du chargement du modèle :',
    
    // Données d'exemple
    sampleHeaders: {
        name: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        department: 'Département'
    },
    sampleData: {
        zhangsan: 'Jean Dupont',
        lisi: 'Marie Martin',
        wangwu: 'Pierre Durand',
        zhaoliu: 'Sophie Bernard',
        techDept: 'Département Technologie',
        salesDept: 'Département Ventes',
        hrDept: 'Département Ressources Humaines',
        financeDept: 'Département Finances'
    },
    
    // Lié à l'exportation
    exportSheetName: 'Résultats de la suppression des doublons',
    exportFileName: 'Résultats de la suppression des doublons',
    jsonMetadataTitle: 'Résultats de la suppression des doublons Excel',
    columnNumber: 'Colonne {number}',
    
    // Messages d'erreur
    processError: 'Erreur lors du traitement du fichier, veuillez vérifier le format du fichier'
};