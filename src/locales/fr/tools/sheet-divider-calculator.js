export default {
    name: 'Calculateur de Division de Cartes - Outil de Requête de Numéros de Feuilles de Carte en Ligne',
    description: 'Calculer les numéros de feuilles de carte basés sur les coordonnées, prend en charge plusieurs échelles et méthodes de projection',
    icon: 'map',
    tags: ['carte', 'division', 'coordonnées', 'échelle', 'projection'],
    
    // Interface utilisateur
    ui: {
        title: 'Calculateur de Division de Cartes',
        subtitle: 'Calculer les numéros de feuilles de carte basés sur les coordonnées',
        inputTitle: 'Entrée des Coordonnées',
        outputTitle: 'Résultats du Calcul',
        
        // Entrée des coordonnées
        latitudePlaceholder: 'Latitude (ex: 39.9042)',
        longitudePlaceholder: 'Longitude (ex: 116.4074)',
        batchInputPlaceholder: 'Entrée par lot: latitude,longitude,description (optionnel)\nExemple: 39.9042,116.4074,Pékin\n40.7128,-74.0060,New York',
        
        // Boutons
        calculateButton: 'Calculer la Feuille',
        clearButton: 'Tout Effacer',
        loadSampleButton: 'Charger des Données Exemple',
        exportExcelButton: 'Exporter vers Excel',
        exportPDFButton: 'Exporter en PDF',
        
        // Paramètres
        parameterSettings: 'Paramètres',
        scaleLabel: 'Échelle',
        zoneMethodLabel: 'Méthode de Zone',
        threeDegreeZone: 'Zone de 3 degrés',
        sixDegreeZone: 'Zone de 6 degrés',
        
        // Affichage des résultats
        resultColumns: {
            sheetNumber: 'Numéro de Feuille',
            latitude: 'Latitude',
            longitude: 'Longitude',
            scale: 'Échelle',
            zone: 'Zone',
            centralMeridian: 'Méridien Central',
            description: 'Description'
        },
        
        // Grille de carte
        gridTitle: 'Grille de Carte',
        noResults: 'Aucun résultat à afficher',
        
        // Messages
        invalidCoordinates: 'Coordonnées invalides, veuillez vérifier vos entrées',
        calculationSuccess: 'Feuille de carte calculée avec succès',
        excelExportSuccess: 'Données exportées avec succès vers Excel',
        pdfExportSuccess: 'Données exportées avec succès en PDF',
        exportFailed: 'Échec de l\'exportation, veuillez réessayer',
        noDataToExport: 'Aucune donnée à exporter',
        
        // Descriptions
        singlePointDesc: 'Point unique',
        batchPointDesc: 'Point par lot',
        
        // Titres d'exportation
        exportFileName: 'Résultats_Calcul_Feuille_Carte',
        exportTitle: 'Résultats du Calcul de Feuille de Carte'
    }
}