export default {
  name: 'Algorithmes de chiffrement symétrique',
  description: 'Implémente le chiffrement et déchiffrement sécurisé de texte et fichiers, supportant plusieurs algorithmes symétriques incluant AES, DES et SM4 (standard chinois)',

  encryption: {
    title: 'Chiffrement/Déchiffrement',
    plaintext: 'Texte clair',
    plaintextPlaceholder: 'Entrez le texte à chiffrer',
    ciphertext: 'Texte chiffré',
    ciphertextPlaceholder: 'Les données chiffrées apparaîtront ici',
    encrypt: 'Chiffrer',
    decrypt: 'Déchiffrer',
    decrypted: 'Texte déchiffré',
    decryptedPlaceholder: 'Les données déchiffrées apparaîtront ici',
    encryptSuccess: 'Chiffrement réussi',
    decryptSuccess: 'Déchiffrement réussi',
    encryptError: 'Échec du chiffrement : {error}',
    decryptError: 'Échec du déchiffrement : {error}'
  },

  algorithm: {
    title: 'Sélectionnez un algorithme',
    aes: 'AES',
    des: 'DES',
    tripledes: '3DES (Triple DES)',
    sm4: 'SM4 (Standard chinois)',
    "3des": '3DES (Triple DES)'
  },

  mode: {
    title: 'Mode opératoire',
    ecb: 'ECB - Mode livre de code électronique',
    cbc: 'CBC - Mode chaînage des blocs',
    cfb: 'CFB - Mode rétroaction du texte chiffré',
    ofb: 'OFB - Mode rétroaction de sortie',
    ctr: 'CTR - Mode compteur'
  },

  padding: {
    title: 'Méthode de remplissage',
    pkcs7: 'PKCS7',
    zeroPadding: 'Remplissage par zéros',
    zeropadding: 'Remplissage par zéros'
  },

  operation: {
    title: 'Type d\'opération',
    encrypt: 'Chiffrement',
    decrypt: 'Déchiffrement'
  },

  key: {
    title: 'Clé',
    label: 'Clé',
    placeholder: 'Entrez une clé de {keySize}',
    placeholderString: 'Entrez une clé chaîne de {keySize} (remplissage automatique si trop courte)',
    placeholderHex: 'Entrez une clé hexadécimale de {keySize} (remplissage automatique si trop courte)',
    placeholderBase64: 'Entrez une clé Base64 de {keySize} (remplissage automatique si trop courte)',
    generateRandom: 'Générer aléatoirement',
    sizeHint: '{keySize}',
    autoFillHint: 'Les clés trop courtes seront complétées par des zéros, les clés trop longues seront tronquées'
  },

  iv: {
    title: 'Vecteur d\'initialisation (IV)',
    label: 'Vecteur d\'initialisation (IV)',
    placeholder: 'Entrez un IV de {blockSize}',
    placeholderString: 'Entrez un IV chaîne de {blockSize} (remplissage automatique si trop court)',
    placeholderHex: 'Entrez un IV hexadécimal de {blockSize} (remplissage automatique si trop court)',
    placeholderBase64: 'Entrez un IV Base64 de {blockSize} (remplissage automatique si trop court)',
    generateRandom: 'Générer aléatoirement',
    sizeHint: '{blockSize}',
    autoFillHint: 'Les IV trop courts seront complétés par des zéros, les IV trop longs seront tronqués'
  },

  input: {
    title: 'Contenu à chiffrer',
    titleDecrypt: 'Contenu à déchiffrer',
    clear: 'Effacer',
    placeholder: 'Entrez le texte à chiffrer',
    placeholderDecrypt: 'Entrez le texte chiffré au format {format} à déchiffrer'
  },

  inputFormat: {
    title: 'Format d\'entrée',
    string: 'Chaîne',
    hex: 'HEX',
    base64: 'Base64'
  },

  output: {
    title: 'Résultat du chiffrement',
    titleDecrypt: 'Résultat du déchiffrement',
    copyResult: 'Copier le résultat',
    copied: 'Copié'
  },

  outputFormat: {
    title: 'Format de sortie',
    string: 'Chaîne',
    hex: 'HEX',
    base64: 'Base64'
  },

  error: {
    title: 'Erreur',
    invalidHex: 'La clé doit être au format HEX',
    invalidIvHex: 'L\'IV doit être au format HEX',
    invalidHexInput: 'Entrée HEX invalide',
    invalidBase64: 'Entrée Base64 invalide',
    unsupportedAlgorithm: 'Algorithme non supporté',
    decryptionFailed: 'Échec du déchiffrement : {message}',
    copyFailed: 'Échec de la copie, veuillez copier manuellement',
    unknownError: 'Une erreur est survenue lors du traitement',
    invalidHexFormat: 'Format HEX invalide',
    invalidBase64Format: 'Format Base64 invalide',
    emptyBase64: 'Encodage Base64 vide',
    decryptFailed: 'Échec du déchiffrement :'
  },

  info: {
    title: 'Description des algorithmes',
    algorithms: {
      aes: 'AES : Standard de chiffrement avancé, peut utiliser des clés de 128, 192 ou 256 bits',
      des: 'DES : Standard de chiffrement de données, utilise une clé de 56 bits, sécurité faible',
      tripledes: '3DES : Triple DES, utilise trois clés DES de 56 bits pour une meilleure sécurité',
      sm4: 'SM4 : Standard chinois, algorithme de chiffrement par bloc utilisant une clé de 128 bits',
      "3des": '3DES : Triple DES, utilise trois clés DES de 56 bits pour une meilleure sécurité'
    },
    modes: {
      title: 'Description des modes opératoires',
      ecb: 'ECB : Mode livre de code électronique, chaque bloc est chiffré indépendamment, non recommandé pour données sensibles',
      cbc: 'CBC : Mode chaînage des blocs, chaque bloc dépend du précédent, plus sécurisé',
      cfb: 'CFB : Mode rétroaction du texte chiffré, transforme un chiffrement par bloc en chiffrement par flux',
      ofb: 'OFB : Mode rétroaction de sortie, autre chiffrement par flux, mêmes opérations pour chiffrement/déchiffrement',
      ctr: 'CTR : Mode compteur, chaque bloc utilise un compteur incrémental, permet un traitement parallèle'
    }
  },

  buttons: {
    process: 'Chiffrer',
    processDecrypt: 'Déchiffrer'
  },

  file: {
    title: 'Chiffrement de fichiers',
    select: 'Sélectionner un fichier',
    drop: 'Ou glisser-déposer un fichier ici',
    encrypt: 'Chiffrer le fichier',
    decrypt: 'Déchiffrer le fichier',
    download: 'Télécharger le résultat',
    selected: 'Sélectionné : {name}',
    size: 'Taille : {size}',
    maxSize: 'Taille maximale : 100 Mo',
    encryptingFile: 'Chiffrement du fichier en cours...',
    decryptingFile: 'Déchiffrement du fichier en cours...',
    downloadReady: 'Prêt à télécharger',
    fileTooBig: 'Fichier trop volumineux. La taille maximale autorisée est de 100 Mo.'
  },

  options: {
    title: 'Options',
    autoDecrypt: 'Déchiffrer automatiquement après chiffrement',
    includeMeta: 'Inclure les métadonnées d\'algorithme dans la sortie',
    kdf: 'Fonction de dérivation de clé',
    pbkdf2: 'PBKDF2',
    scrypt: 'scrypt',
    argon2: 'Argon2id',
    salt: 'Sel (pour dérivation de clé)',
    saltPlaceholder: 'Entrez un sel en hexadécimal ou laissez vide pour génération aléatoire',
    autoClear: 'Effacer automatiquement les données sensibles',
    saveSettings: 'Enregistrer les paramètres'
  },

  security: {
    title: 'Informations de sécurité',
    description: 'À propos de la sécurité du chiffrement',
    warning: 'Avertissement',
    ecbInsecure: 'Le mode ECB n\'est pas recommandé pour les applications sécurisées car il ne masque pas bien les motifs des données.',
    useModern: 'Pour les données sensibles, utilisez AES-256 avec les modes GCM ou CBC.',
    keyWarning: 'Protégez vos clés de chiffrement. Si elles sont perdues, les données seront irrécupérables.',
    browserWarning: 'Le chiffrement basé sur navigateur est pratique mais peut ne pas convenir aux données hautement sensibles.',
    learnMore: 'En savoir plus sur le chiffrement'
  },

  messages: {
    noAlgorithm: 'Veuillez sélectionner un algorithme de chiffrement',
    noKey: 'Veuillez entrer une clé ou un mot de passe',
    invalidKeyLength: 'Longueur de clé invalide pour l\'algorithme sélectionné',
    invalidIv: 'Longueur d\'IV invalide pour l\'algorithme et le mode sélectionnés',
    noData: 'Veuillez entrer des données à chiffrer/déchiffrer',
    padError: 'Erreur de remplissage - la clé ou les données peuvent être incorrectes',
    fileSuccess: 'Traitement du fichier réussi',
    fileError: 'Erreur de traitement du fichier : {error}',
    clipboardError: 'Erreur lors de la copie dans le presse-papiers : {error}',
    invalidFormat: 'Format d\'entrée invalide'
  }
};