export default {
  name: 'Calculateur HMAC',
  description: 'Calcule le HMAC (code d\'authentification de message basé sur le hachage) des données',
  title: 'Outil de calcul HMAC',
  intro: 'Générez des codes d\'authentification de message avec une clé secrète, prenant en charge plusieurs algorithmes de hachage et formats de sortie',

  input: {
    title: 'Entrée',
    message: 'Message',
    messagePlaceholder: 'Entrez le message à authentifier',
    key: 'Clé',
    keyLabel: 'Clé secrète',
    keyPlaceholder: 'Entrez la clé HMAC',
    messageLabel: 'Message',
    messageLongPlaceholder: 'Entrez le message pour calculer le HMAC',
    file: 'Fichier',
    text: 'Texte',
    fileSelect: 'Sélectionner un fichier',
    fileDrop: 'Ou glissez-déposez un fichier ici',
    fileSelected: 'Fichier sélectionné : {name}',
    clearFile: 'Effacer le fichier',
    encoding: 'Encodage d\'entrée',
    keyEncoding: 'Encodage de la clé',
    outputFormat: 'Format de sortie',
    inputType: 'Type d\'entrée',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: 'Hexadécimal',
    binary: 'Binaire',
    calculate: 'Calculer HMAC',
    calculating: 'Calcul en cours...',
    clear: 'Tout effacer'
  },

  algorithms: {
    title: 'Algorithmes',
    label: 'Algorithme de hachage',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'Résultat HMAC',
    digest: 'Empreinte HMAC',
    outputLabel: 'Résultat HMAC',
    copy: 'Copier',
    copied: 'Copié !',
    noResult: 'Entrez un message et une clé pour calculer le HMAC',
    calculating: 'Calcul en cours...',
    placeholder: 'Le résultat HMAC s\'affichera ici',
    useExample: 'Utiliser un exemple',
    jsExample: 'Exemple JavaScript :',
  },

  validation: {
    title: 'Validation HMAC',
    hmacToVerify: 'HMAC à vérifier',
    verifyPlaceholder: 'Entrez le HMAC à vérifier',
    verify: 'Vérifier HMAC',
    valid: 'HMAC valide',
    invalid: 'HMAC invalide',
    verifying: 'Vérification en cours...'
  },

  options: {
    title: 'Options',
    uppercase: 'Sortie en majuscules',
    showDetails: 'Afficher les détails techniques',
    autoUpdate: 'Mise à jour automatique',
    truncate: 'Tronquer la sortie',
    truncateLength: 'Longueur de troncature'
  },

  details: {
    title: 'Détails techniques',
    algorithm: 'Algorithme',
    keyLength: 'Longueur de clé',
    blockSize: 'Taille de bloc',
    outputLength: 'Longueur de sortie',
    execution: 'Temps d\'exécution',
    ms: 'ms'
  },

  messages: {
    noMessage: 'Veuillez entrer un message',
    noKey: 'Veuillez entrer une clé',
    invalidEncoding: 'Format d\'encodage invalide',
    processingError: 'Erreur de traitement : {error}',
    success: 'Calcul HMAC réussi',
    invalidKey: 'Format de clé invalide pour l\'encodage sélectionné',
    fileTooBig: 'Fichier trop volumineux. Taille maximale : 5 Mo',
    copied: 'Copié dans le presse-papiers',
    copyFailed: 'Échec de la copie, veuillez copier manuellement',
    invalidHex: 'La clé n\'est pas au format hexadécimal valide',
    invalidBase64: 'La clé n\'est pas au format Base64 valide',
  },

  security: {
    title: 'Notes de sécurité',
    keyStorage: 'Ne partagez jamais votre clé secrète',
    keyStrength: 'Utilisez des clés fortes et uniques pour chaque application',
    recommendation: 'Pour les applications critiques, utilisez au moins HMAC-SHA256',
    warning: 'HMAC-MD5 et HMAC-SHA1 peuvent ne pas convenir aux applications haute sécurité'
  }
};