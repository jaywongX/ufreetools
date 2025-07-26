export default {
  name: 'Analyseur de certificats X.509',
  description: 'Outil en ligne gratuit pour analyser les certificats X.509. Analysez les certificats SSL/TLS, vérifiez leur validité, extrayez les clés publiques et générez des rapports détaillés.',

  instructions: {
    title: 'Analyseur de certificats',
    description: 'Téléchargez un fichier de certificat ou collez un certificat encodé en PEM pour voir ses détails.'
  },

  dropzone: {
    title: 'Déposez votre fichier de certificat ici',
    formats: 'Formats supportés : .crt, .cer, .pem, .der, .p12 et .pfx'
  },

  buttons: {
    browse: 'Parcourir',
    decode: 'Analyser le certificat',
    loadSample: 'Charger un exemple',
    downloadPdf: 'Télécharger PDF',
    downloadTxt: 'Télécharger texte',
    downloadHtml: 'Télécharger HTML',
    downloadJson: 'Télécharger JSON',
    copyBasic: 'Copier les infos de base',
    copySubject: 'Copier sujet/émetteur',
    copyAll: 'Copier toutes les infos',
    copyValue: 'Copier la valeur',
    downloadKey: 'Télécharger la clé',
    exportPem: 'Exporter en PEM',
    downloadCert: 'Télécharger certificat',
  },

  input: {
    paste: 'Ou collez les données du certificat :',
    placeholder: 'Collez votre certificat encodé en PEM (-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----)'
  },

  loading: 'Analyse du certificat en cours...',

  error: {
    title: 'Erreur d\'analyse du certificat',
    invalidFormat: 'Format de certificat invalide',
    invalidBase64: 'Certificat encodé en base64 invalide',
    invalidStructure: 'Structure de certificat invalide',
    invalidDer: 'Format DER invalide',
    invalidAsn1: 'Certificat invalide : impossible de parser les données ASN.1',
    unsupportedType: 'Type de certificat non supporté',
    failedParse: 'Impossible d\'analyser les données du certificat',
    invalidP12: 'Format de fichier PKCS#12 invalide',
    invalidP12Password: 'Mot de passe PKCS#12 incorrect',
    noCertificatesInP12: 'Aucun certificat trouvé dans le fichier PKCS#12',
    unableToProcessP12: 'Impossible de traiter le fichier PKCS#12'
  },

  guide: {
    title: 'Comment utiliser cet outil',
    step1: 'Téléchargez votre fichier de certificat X.509 (.crt, .cer, .pem, .der, .p12 ou .pfx) ou collez les données du certificat dans la zone de texte ci-dessous.',
    step2: 'L\'outil détectera automatiquement le format (PEM, DER ou PKCS#12) et le décodera.',
    step3: 'Consultez les informations détaillées du certificat, y compris le sujet, l\'émetteur, la période de validité, les extensions et les données de clé publique.',
    step4: 'Utilisez les boutons en bas pour télécharger un rapport dans différents formats ou copier les informations dans votre presse-papiers.'
  },

  tabs: {
    basic: 'Informations de base',
    subject: 'Sujet et émetteur',
    extensions: 'Extensions',
    publicKey: 'Clé publique',
    fingerprints: 'Empreintes',
    raw: 'Certificat brut'
  },

  results: {
    title: 'Détails du certificat',
    serialNumber: 'Numéro de série',
    version: 'Version',
    sigAlg: 'Algorithme de signature',
    validFrom: 'Valide à partir du',
    validTo: 'Expire le',
    subject: 'Sujet',
    issuer: 'Émetteur',
    extensions: 'Extensions',
    publicKey: 'Clé publique',
    algorithm: 'Algorithme',
    keySize: 'Taille de clé',
    keyValue: 'Valeur de clé',
    fingerprints: 'Empreintes',
    rawCertificate: 'Certificat brut',
    field: 'Champ',
    value: 'Valeur',
    critical: 'Critique',
    noExtensions: 'Aucune extension trouvée dans ce certificat.',
    validity: 'Validité du certificat',
    expiresIn: 'Expire dans {days} jours',
    visualization: 'Visualisation du certificat',
    daysRemaining: 'Jours restants',
    valid: 'Valide',
    expired: 'Expiré',
    expiringSoon: 'Expire bientôt',
    fieldDescriptions: 'Descriptions des champs',
    certificateUsage: 'Usage du certificat',
    certificateChain: 'Chaîne de certificats',
    signatureValue: 'Valeur de signature',
    notAvailable: 'Non disponible',
    noSpecificUsage: 'Aucun usage spécifique',
    signatureError: 'Erreur d\'analyse de la signature',
    keyDetails: 'Détails de la clé',
    enhancedView: 'Vue améliorée',
    endEntity: 'Entité finale',
    intermediate: 'Certificat intermédiaire',
    rootCA: 'Autorité racine',
    endEntityCert: 'Certificat d\'entité finale',
    intermediateCert: 'Certificat intermédiaire',
    rootCert: 'Autorité de certification racine',
    issuedBy: 'Émis par',
    unknownIssuer: 'Émetteur inconnu',
    notYetValid: 'Pas encore valide'
  },

  report: {
    title: 'Rapport de certificat X.509',
    generatedOn: 'Généré le'
  },

  extensions: {
    subjectKeyIdentifier: 'Identifiant de clé du sujet',
    keyUsage: 'Usage de la clé',
    subjectAltName: 'Nom alternatif du sujet',
    basicConstraints: 'Contraintes de base',
    crlDistributionPoints: 'Points de distribution CRL',
    certificatePolicies: 'Politiques de certificat',
    authorityKeyIdentifier: 'Identifiant de clé de l\'autorité',
    extKeyUsage: 'Usage étendu de la clé',
    authorityInfoAccess: 'Accès aux informations de l\'autorité',
    ctPrecertificateScts: 'SCTs de pré-certificat CT'
  },

  usage: {
    serverAuth: 'Authentification serveur',
    clientAuth: 'Authentification client',
    codeSigning: 'Signature de code',
    emailProtection: 'Protection d\'email',
    timeStamping: 'Horodatage',
    ocspSigning: 'Signature OCSP'
  },

  customOID: {
    title: 'Recherche d\'OID personnalisé',
    placeholder: 'Entrez un OID, par exemple 2.5.29.15',
    lookup: 'Rechercher',
    result: 'Résultat',
    value: 'Valeur',
    notFound: 'Information non trouvée pour cet OID',
    foundButComplex: 'OID trouvé mais valeur complexe',
    unknownName: 'OID avec nom inconnu',
    complexValue: 'Valeur complexe, impossible à afficher directement'
  },

  descriptions: {
    serialNumber: 'Numéro de série unique du certificat, attribué par l\'autorité de certification',
    version: 'Numéro de version du format du certificat, généralement V3',
    sigAlg: 'Algorithme utilisé pour générer la signature du certificat',
    validFrom: 'Date et heure de début de validité du certificat',
    validTo: 'Date et heure de fin de validité du certificat',
    subject: 'Informations d\'identité du titulaire du certificat',
    issuer: 'Informations d\'identité de l\'autorité ayant émis le certificat',
    publicKey: 'Informations sur la clé publique du titulaire du certificat',
    extensions: 'Champs d\'extension contenant des informations supplémentaires sur l\'usage du certificat'
  },

  messages: {
    copiedToClipboard: 'Copié dans le presse-papiers',
    copyError: 'Échec de la copie dans le presse-papiers'
  },

  pkcs12: {
    passwordPrompt: 'Veuillez entrer le mot de passe du fichier PKCS#12',
    noPassword: 'Aucun mot de passe'
  },

  keyUsages: {
    digitalSignature: 'Signature numérique',
    nonRepudiation: 'Non-répudiation',
    keyEncipherment: 'Chiffrement de clé',
    dataEncipherment: 'Chiffrement de données',
    keyAgreement: 'Accord de clé',
    keyCertSign: 'Signature de certificat',
    crlSign: 'Signature CRL',
    encipherOnly: 'Chiffrement uniquement',
    decipherOnly: 'Déchiffrement uniquement'
  }
};