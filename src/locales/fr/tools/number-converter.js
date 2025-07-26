export default {
  name: 'Convertisseur numérique',
  description: 'Convertir des nombres entre différentes bases et formats',

  input: {
    title: 'Nombre à convertir',
    placeholder: 'Entrez le nombre à convertir',
    fromBase: 'Base d\'origine',
    toBase: 'Base cible',
    customBase: 'Base personnalisée'
  },

  bases: {
    binary: 'Binaire (base 2)',
    octal: 'Octal (base 8)',
    decimal: 'Décimal (base 10)',
    hexadecimal: 'Hexadécimal (base 16)',
    base32: 'Base 32',
    base36: 'Base 36',
    base58: 'Base 58',
    base64: 'Base 64',
    custom: 'Base personnalisée'
  },

  options: {
    signed: 'Signé',
    bitLength: 'Longueur en bits',
    byteOrder: 'Ordre des octets',
    formatOutput: 'Formater la sortie',
    separator: 'Séparateur',
    prefix: 'Ajouter préfixe',
    uppercase: 'Majuscules'
  },

  byteOrders: {
    littleEndian: 'Petit-boutiste',
    bigEndian: 'Gros-boutiste'
  },

  bitLengths: {
    '8': '8 bits',
    '16': '16 bits',
    '32': '32 bits',
    '64': '64 bits',
    custom: 'Personnalisée'
  },

  output: {
    title: 'Résultats de conversion',
    binary: 'Binaire',
    octal: 'Octal',
    decimal: 'Décimal',
    hexadecimal: 'Hexadécimal',
    custom: 'Base personnalisée',
    all: 'Toutes les conversions'
  },

  actions: {
    convert: 'Convertir',
    clear: 'Effacer',
    copy: 'Copier résultat',
    swap: 'Échanger les bases'
  },

  bitConverters: {
    title: 'Convertisseurs binaires',
    ieee754: 'Virgule flottante IEEE 754',
    twosComplement: 'Complément à deux',
    bitMask: 'Masque binaire',
    bitField: 'Extracteur de champ de bits'
  },

  calculators: {
    title: 'Calculs',
    add: 'Addition',
    subtract: 'Soustraction',
    multiply: 'Multiplication',
    divide: 'Division',
    modulo: 'Modulo',
    power: 'Puissance'
  },

  messages: {
    invalidInput: 'Nombre invalide pour la base sélectionnée',
    outOfRange: 'Nombre hors plage pour la longueur de bits sélectionnée',
    copied: 'Résultat copié dans le presse-papiers',
    conversionComplete: 'Conversion terminée'
  }
};