export default {
    name: 'Audio en PCM - Convertisseur format audio en ligne',
    description: 'Outil gratuit en ligne audio vers PCM. Convertissez WAV, MP3, FLAC, OGG, AAC, M4A et autres formats en données audio PCM brutes. Supporte paramètres taux d\'échantillonnage, sélection canaux, traitement par lots. Idéal pour reconnaissance vocale et analyse audio.',
    inputTitle: 'Audio en entrée',
    outputTitle: 'Audio PCM converti',
    dragTip: 'Glissez-déposez fichiers audio ici ou cliquez pour charger (lot supporté)',
    pasteTip: 'Ou appuyez sur Ctrl+V (Cmd+V) pour coller chemin fichier audio du presse-papiers',
    supported: 'Formats supportés: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'Convertir en PCM',
    converting: 'Conversion en cours...',
    downloadBtn: 'Télécharger PCM',
    batchDownload: 'Téléchargement par lot (ZIP)',
    noOutput: 'Aucun résultat de conversion',
    loadSample: 'Charger audio exemple',
    preview: 'Aperçu audio',
    clearAll: 'Tout effacer',
    originalAudio: 'Audio original',
    deleteAudio: 'Supprimer audio',
    
    sampleRateTitle: 'Paramètres taux d\'échantillonnage',
    sampleRateLabel: 'Taux d\'échantillonnage: {rate} Hz',
    sampleRate8000: '8000 Hz (Qualité téléphone)',
    sampleRate16000: '16000 Hz (Reconnaissance vocale)',
    sampleRate22050: '22050 Hz (Qualité voix)',
    sampleRate44100: '44100 Hz (Qualité CD)',
    sampleRate48000: '48000 Hz (Qualité professionnelle)',
    
    channelTitle: 'Paramètres canaux',
    channelStereo: 'Stéréo',
    channelMono: 'Mono',
    
    bitDepthTitle: 'Paramètres profondeur bits',
    bitDepth8: '8 bits (Basse qualité)',
    bitDepth16: '16 bits (Standard)',
    bitDepth24: '24 bits (Haute qualité)',
    bitDepth32: '32 bits (Professionnel)',
    
    volumeTitle: 'Paramètres volume',
    volumeLabel: 'Volume: {volume}%',
    
    fileSizeEstimate: 'Taille estimée: {size}',
    duration: 'Durée: {duration}',
    originalFormat: 'Format original: {format}',
    originalSize: 'Taille originale: {size}',
    convertedSize: 'Taille convertie: {size}',
    
    tipsTitle: 'Conseils',
    tipContent: 'Le format PCM est données audio brutes non compressées, couramment utilisées pour reconnaissance vocale, analyse audio et traitement audio professionnel. 16 bits, 16000Hz est standard pour reconnaissance vocale; 44100Hz, 16 bits pour audio général; 48000Hz, 24 bits pour production audio professionnelle.',
    convertError: 'Conversion échouée, vérifiez le format audio ou réessayez.',
    processingMultiple: 'Traitement {current}/{total} fichiers audio...',
    convertSuccess: 'Conversion réussie!',
    
    pcmFormatTitle: 'Options format PCM',
    signedFormat: 'Format signé',
    unsignedFormat: 'Format non signé',
    littleEndian: 'Little Endian',
    bigEndian: 'Big Endian',
    
    // Métadonnées
    metadataTitle: 'Métadonnées (Optionnel)',
    metadataTitle2: 'Titre',
    metadataArtist: 'Artiste',
    
    // Options avancées
    advancedTitle: 'Options Avancées',
    trimAudio: 'Couper Audio',
    trimStart: 'Temps Début',
    trimEnd: 'Temps Fin',
    
    seoNote: 'Outil audio en PCM, convertisseur format audio en ligne, WAV en PCM, MP3 en PCM, prétraitement audio reconnaissance vocale',
};
