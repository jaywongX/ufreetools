export default {
  name: 'Générateur d\'UUID',
  description: 'Génère des UUID et GUID aléatoires avec des options personnalisables, idéal pour les clés primaires de base de données, les noms de fichiers temporaires, etc.',

  options: {
    version: 'Version d\'UUID',
    quantity: 'Quantité',
    format: 'Options de format',
    includeDash: 'Inclure les tirets (-)',
    generateCount: 'Nombre à générer'
  },

  versions: {
    v1: 'Version 1 (basée sur le temps)',
    v4: 'Version 4 (aléatoire)',
    v5: 'Version 5 (espace de noms)',
    custom: 'Personnalisée'
  },

  quantities: {
    single: 'Unique',
    five: '5',
    ten: '10',
    twenty: '20'
  },

  formats: {
    default: 'Par défaut',
    base64: 'Base64',
    binary: 'Binaire',
    hex: 'Hexadécimal',
    noDash: 'Sans tiret'
  },

  actions: {
    generate: 'Générer UUID',
    copy: 'Copier',
    copyAll: 'Tout copier',
    clear: 'Effacer les résultats',
    download: 'Télécharger en TXT'
  },

  messages: {
    copied: 'Copié dans le presse-papiers !',
    generated: 'UUID généré avec succès',
    tooMany: 'Le nombre maximum autorisé est 1000',
    invalidVersion: 'Version d\'UUID invalide',
    invalidNamespace: 'UUID d\'espace de noms invalide',
    copyFailed: 'Échec de la copie'
  }
};