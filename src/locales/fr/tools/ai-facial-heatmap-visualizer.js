export default {
    name: 'Visualiseur de carte thermique faciale IA',
    description: 'Utilisez l\'intelligence artificielle pour analyser les caractéristiques faciales, générer des cartes thermiques et fournir des suggestions d\'amélioration de photos. Basé sur la technologie de reconnaissance faciale pour aider à optimiser l\'éclairage et la composition des photos.',
    inputTitle: 'Image d\'entrée',
    outputTitle: 'Analyse de carte thermique',
    dragTip: 'Glissez et déposez des images ici ou cliquez pour télécharger',
    supported: 'Formats pris en charge : PNG, JPEG, BMP, WEBP',
    processBtn: 'Générer une carte thermique',
    downloadBtn: 'Télécharger',
    noOutput: 'Pas encore d\'images de sortie',
    loadSample: 'Charger un exemple d\'image',
    preview: 'Aperçu des images',
    clearAll: 'Tout effacer',
    originalImage: 'Image originale',
    deleteImage: 'Supprimer l\'image',
    batchDownload: 'Téléchargement par lot (ZIP)',
    exportFormat: 'Format d\'exportation',
    imageQuality: 'Qualité d\'image',
    zoomIn: 'Zoom avant',
    zoomOut: 'Zoom arrière',
    resetView: 'Réinitialiser la vue',
    fullscreen: 'Aperçu plein écran',
    closePreview: 'Fermer l\'aperçu',
    analysisTitle: 'Résultats de l\'analyse',
    noFaceDetected: 'Aucun visage détecté, essayez d\'utiliser une photo frontale plus claire',
    loadingModels: 'Chargement des modèles de reconnaissance faciale',
    loadingModelsTip: 'La première utilisation nécessite le téléchargement des fichiers de modèle, veuillez patienter...',
    disclaimer: 'Cet outil est uniquement destiné à l\'analyse d\'images et à des fins éducatives et ne stocke pas vos images de façon permanente',
    modelInfo: 'Utilisation de la technologie de reconnaissance faciale fournie par face-api.js',
    
    // Paramètres
    paramSettings: 'Paramètres',
    heatmapIntensity: 'Intensité de la carte thermique',
    heatmapRadius: 'Taille du point de chaleur',
    colorScheme: 'Schéma de couleurs',
    showLandmarks: 'Afficher les points de repère',
    
    expressions: {
        neutral: 'Neutre',
        happy: 'Heureux',
        sad: 'Triste',
        angry: 'En colère',
        fearful: 'Effrayé',
        disgusted: 'Dégoûté',
        surprised: 'Surpris'
    },
    
    expressionDetected: 'Expression détectée : {expression}',
    
    lightingTips: {
        leftDark: 'Éclairage insuffisant sur le côté gauche, essayez d\'ajouter une source de lumière à gauche',
        rightDark: 'Éclairage insuffisant sur le côté droit, essayez d\'ajouter une source de lumière à droite',
        tooLow: 'L\'éclairage global est insuffisant, envisagez d\'ajouter une lumière ambiante ou un flash',
        tooHigh: 'La lumière est trop forte, peut causer une surexposition, envisagez de réduire la source de lumière ou d\'utiliser une lumière douce',
        good: 'Bon éclairage, l\'illumination du visage est uniforme'
    },
    
    positionTips: {
        tooLeft: 'La position du visage est trop à gauche, suggère de se déplacer vers la droite',
        tooRight: 'La position du visage est trop à droite, suggère de se déplacer vers la gauche',
        tooHigh: 'La position du visage est trop haute, suggère de se déplacer vers le bas',
        tooLow: 'La position du visage est trop basse, suggère de se déplacer vers le haut',
        tooSmall: 'La proportion du visage dans le cadre est trop petite, suggère de se rapprocher',
        tooBig: 'La proportion du visage dans le cadre est trop grande, suggère d\'augmenter la distance de prise de vue'
    }
};