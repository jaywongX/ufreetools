export default {
  name: 'Outil de débogage JWT',
  description: 'Outil en ligne pour analyser, valider et déboguer les jetons JWT',

  sections: {
    encoded: 'JWT encodé',
    decoded: 'JWT décodé',
    header: 'En-tête',
    payload: 'Charge utile',
    signature: 'Signature',
    verification: 'Vérification'
  },

  actions: {
    decode: 'Décoder',
    verify: 'Vérifier la signature',
    copy: 'Copier',
    share: 'Partager le jeton',
    generateToken: 'Générer un jeton',
    generateRandomToken: 'Jeton aléatoire',
    clear: 'Effacer',
    generateRandomPayload: 'Générer une charge utile aléatoire',
    generateRandomKey: 'Générer une clé aléatoire',
    generateKeyPair: 'Générer une paire de clés'
  },

  messages: {
    invalidToken: 'Format JWT invalide',
    copied: 'Copié dans le presse-papiers !',
    copyFailed: 'Échec de la copie, veuillez copier manuellement',
    verificationSuccess: 'Vérification de signature réussie',
    verificationFailed: 'Échec de la vérification de signature',
    keyGenerated: 'Paire de clés générée avec succès',
    keyGenerationFailed: 'Échec de la génération de la paire de clés',
    tokenGenerated: 'Jeton généré avec succès',
    tokenGenerationFailed: 'Échec de la génération du jeton',
    randomTokenGenerated: 'Jeton aléatoire généré et analysé avec succès',
    certUploadSuccess: 'Certificat téléchargé avec succès',
    certFormatInvalid: 'Format de certificat invalide',
    certReadFailed: 'Échec de la lecture du certificat',
    tokenFormatError: 'Format de jeton invalide, le JWT doit contenir trois parties séparées par des points',
    tokenHeaderMissingAlg: "L'en-tête du jeton manque le champ algorithme (alg)",
    tokenHeaderInvalid: "Format d'en-tête de jeton invalide",
    tokenVerificationFailed: 'Échec de la vérification du format du jeton',
    tokenExpired: 'Jeton expiré. Date d\'expiration : {time}',
    tokenNotEffective: 'Jeton non encore valide. Date de validité : {time}',
    tokenIssuedInFuture: 'Date d\'émission anormale, dans le futur. Date d\'émission : {time}',
    algorithmNotSupported: 'Algorithme non pris en charge',
    randomSecretGenerated: 'Clé secrète aléatoire générée avec succès',
    randomSecretGenerationFailed: 'Échec de la génération de la clé secrète aléatoire',
    randomPayloadGenerated: 'Charge utile aléatoire générée',
    randomPayloadGenerationFailed: 'Échec de la génération de la charge utile aléatoire',
    contentCleared: 'Tout le contenu a été effacé',
    tokenDecodeSuccess: 'Décodage du jeton réussi',
    tokenDecodeFailed: 'Échec du décodage du jeton',
    pleaseInputKey: 'Veuillez saisir une clé',
    pleaseGenerateKeyPair: 'Veuillez d\'abord générer une paire de clés {type}',
    pleaseInputVerificationKey: 'Veuillez saisir une clé de vérification',
    pleaseInputPublicKey: 'Veuillez saisir une clé publique de vérification',
    pleaseInputToken: 'Veuillez saisir le jeton à vérifier',
    payloadFormatError: 'Erreur de format de charge utile, veuillez vérifier le format JSON',
    invalidTimestamp: 'Horodatage invalide'
  },

  placeholders: {
    secretKey: 'Veuillez saisir une clé secrète',
    privateKey: 'Veuillez saisir ou générer une clé privée',
    publicKey: 'Veuillez saisir ou générer une clé publique',
    payload: 'Veuillez saisir une charge utile au format JSON',
    token: 'Veuillez saisir ou générer un jeton JWT',
    verificationSecretKey: 'Veuillez saisir une clé secrète de vérification',
    verificationPublicKey: 'Veuillez saisir une clé publique de vérification'
  },

  labels: {
    algorithm: 'Algorithme',
    secretKey: 'Clé secrète',
    privateKey: 'Clé privée',
    publicKey: 'Clé publique',
    certificate: 'Certificat numérique (optionnel)',
    payload: 'Charge utile (Payload)',
    token: 'Jeton',
    verificationPublicKey: 'Clé publique de vérification',
    tokenResult: 'Résultat de l\'analyse du jeton',
    verifyToken: 'Vérifier le jeton',
    tokenDecoded: 'Jeton détecté utilisant la signature avec l\'algorithme {alg}',
    timestamp: 'Analyse de l\'horodatage',
    issuedAt: 'Date d\'émission (iat)',
    expiration: 'Date d\'expiration (exp)',
    notBefore: 'Date de validité (nbf)',
    tokenFormat: 'Aucun contenu',
    tokenFormatDesc: 'Le résultat de l\'analyse s\'affichera ici après avoir saisi ou généré un jeton JWT',
    uploadCert: 'Glissez-déposez un fichier de certificat ou cliquez pour sélectionner',
    certName: 'Nom du certificat',
    sm3Fingerprint: 'Empreinte SM3 (x5t#sm3)',
    certUploadNote: 'Après téléchargement du certificat, le champ "x5t#sm3" sera ajouté à l\'en-tête JWT',
    secondsTimestamp: 'Horodatage en secondes',
    millisecondsTimestamp: 'Horodatage en millisecondes'
  },

  buttons: {
    cancel: 'Annuler',
    verify: 'Vérifier',
    clearCert: 'Effacer',
    generateToken: 'Générer un jeton',
    decodeToken: 'Analyser le jeton',
    verifyToken: 'Vérifier le jeton',
    close: 'Fermer'
  },

  verification: {
    success: 'Vérification réussie',
    failure: 'Échec de la vérification',
    validMessage: 'La vérification de signature du jeton est réussie, la signature est valide.',
    invalidMessage: 'La vérification de signature du jeton a échoué, la signature est invalide.'
  },

  errors: {
    noToken: 'Veuillez saisir un jeton à vérifier',
    invalidToken: 'Format de jeton invalide',
    noSecretKey: 'Veuillez fournir une clé de vérification',
    noPublicKey: 'Veuillez fournir une clé publique de vérification',
    invalidSignature: 'Signature invalide',
    verificationFailed: 'Échec de la vérification du jeton'
  }
};