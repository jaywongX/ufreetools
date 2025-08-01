export default {
    name: 'Analyseur de Photos de Profil IA - Outil d\'Analyse de Portraits Professionnels',
    description: 'Outil gratuit en ligne pour analyser vos photos de profil et portraits. Obtenez des commentaires alimentés par l\'IA sur la position de la tête, le sourire, le contact visuel et la qualité de l\'éclairage pour améliorer vos photos professionnelles.',
    inputTitle: 'Télécharger une Photo',
    outputTitle: 'Résultats de l\'Analyse',
    dragTip: 'Glissez et déposez des photos ici ou cliquez pour télécharger',
    supported: 'Formats pris en charge : PNG, JPEG, BMP, WEBP',
    analyzeBtn: 'Analyser la Photo',
    downloadBtn: 'Télécharger',
    noOutput: 'Pas encore de photos analysées',
    loadSample: 'Charger une Photo Exemple',
    preview: 'Aperçu des Photos',
    clearAll: 'Tout Effacer',
    originalImage: 'Photo Originale',
    deleteImage: 'Supprimer la Photo',
    batchDownload: 'Téléchargement par Lot (ZIP)',
    exportFormat: 'Format d\'Exportation',
    imageQuality: 'Qualité de l\'Image',
    zoomIn: 'Zoom Avant',
    zoomOut: 'Zoom Arrière',
    resetView: 'Réinitialiser la Vue',
    fullscreen: 'Aperçu Plein Écran',
    analysisResults: 'Résultats de l\'Analyse',
    overallScore: 'Score Global',
    headPosition: 'Position de la Tête',
    smileDetection: 'Détection du Sourire',
    eyeContact: 'Contact Visuel',
    lightingQuality: 'Qualité de l\'Éclairage',
    recommendations: 'Recommandations',
    noFaceDetected: 'Aucun visage détecté dans cette image. Veuillez télécharger une photo claire avec un visage visible.',
    disclaimer: 'Avertissement',
    disclaimerText: 'Cet outil utilise l\'IA pour analyser les photos de profil. Les résultats sont uniquement à titre de référence et peuvent varier en fonction de la qualité de l\'image et des conditions d\'éclairage. Tout le traitement est effectué dans votre navigateur, et vos photos ne sont pas téléchargées sur un serveur.',
    modelInfo: 'Propulsé par face-api.js, une API JavaScript open-source pour la détection et la reconnaissance faciale dans le navigateur.',
    
    positions: {
        straight: 'Droite',
        slightlyTilted: 'Légèrement Inclinée',
        tilted: 'Inclinée',
        unknown: 'Inconnue'
    },
    
    tips: {
        headStraight: 'Excellent ! Votre tête est positionnée droite, ce qui est idéal pour les photos professionnelles.',
        headSlightlyTilted: 'Votre tête est légèrement inclinée. Une position plus droite pourrait paraître plus professionnelle.',
        headTilted: 'Votre tête est visiblement inclinée. Essayez de garder votre tête droite pour les photos professionnelles.',
        
        smileLow: 'Essayez de sourire plus naturellement pour paraître abordable et confiant.',
        smileMedium: 'Votre sourire pourrait être plus engageant. Essayez un sourire naturel et détendu.',
        smileGood: 'Bon sourire ! Vous paraissez abordable et professionnel.',
        smileExcellent: 'Excellent sourire ! Vous paraissez très abordable et confiant.',
        
        eyeContactLow: 'Essayez de regarder directement la caméra pour un meilleur contact visuel.',
        eyeContactMedium: 'Votre contact visuel pourrait être amélioré. Regardez directement l\'objectif de la caméra.',
        eyeContactGood: 'Bon contact visuel. Vous paraissez engagé et attentif.',
        eyeContactExcellent: 'Excellent contact visuel. Vous paraissez confiant et engagé.',
        
        lightingLow: 'L\'éclairage est trop sombre ou inégal. Essayez de prendre des photos dans de meilleures conditions d\'éclairage.',
        lightingMedium: 'L\'éclairage pourrait être amélioré. Une lumière naturelle et diffuse fonctionne mieux.',
        lightingGood: 'Bon éclairage. Votre visage est bien éclairé et clairement visible.',
        lightingExcellent: 'Excellent éclairage. Votre visage est parfaitement illuminé.'
    },
    
    recommendations: {
        title: 'Suggestions d\'Amélioration',
        improveHeadPosition: 'Gardez votre tête droite et au niveau de la caméra pour un aspect plus professionnel.',
        improveSmile: 'Essayez un sourire naturel qui montre confiance et accessibilité.',
        naturalSmile: 'Votre sourire semble très large - un sourire légèrement plus subtil pourrait paraître plus professionnel dans certains contextes.',
        improveEyeContact: 'Regardez directement l\'objectif de la caméra pour établir un meilleur contact visuel.',
        improveLighting: 'Prenez des photos dans de meilleures conditions d\'éclairage - une lumière naturelle et diffuse de face fonctionne mieux.',
        goodPhoto: 'Excellente photo ! Elle répond aux normes professionnelles pour une photo de profil.'
    }
};