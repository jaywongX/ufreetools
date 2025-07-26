export default {
  name: 'Zahlenkonverter',
  description: 'Konvertiert Zahlen zwischen verschiedenen Zahlensystemen und Formaten',

  // Eingabebereich
  input: {
    title: 'Zahl eingeben',
    placeholder: 'Zahl zur Konvertierung eingeben',
    fromBase: 'Quellbasis',
    toBase: 'Zielbasis',
    customBase: 'Benutzerdefinierte Basis'
  },

  // Zahlensysteme
  bases: {
    binary: 'Binär (Basis 2)',
    octal: 'Oktal (Basis 8)',
    decimal: 'Dezimal (Basis 10)',
    hexadecimal: 'Hexadezimal (Basis 16)',
    base32: 'Basis 32',
    base36: 'Basis 36',
    base58: 'Basis 58',
    base64: 'Basis 64',
    custom: 'Benutzerdefiniert'
  },

  // Optionen
  options: {
    signed: 'Vorzeichenbehaftet',
    bitLength: 'Bitlänge',
    byteOrder: 'Byte-Reihenfolge',
    formatOutput: 'Ausgabe formatieren',
    separator: 'Trennzeichen',
    prefix: 'Präfix hinzufügen',
    uppercase: 'Großbuchstaben'
  },

  // Byte-Reihenfolgen
  byteOrders: {
    littleEndian: 'Little-Endian',
    bigEndian: 'Big-Endian'
  },

  // Bitlängen
  bitLengths: {
    '8': '8 Bit',
    '16': '16 Bit',
    '32': '32 Bit',
    '64': '64 Bit',
    custom: 'Benutzerdefiniert'
  },

  // Ausgabebereich
  output: {
    title: 'Konvertierungsergebnisse',
    binary: 'Binär',
    octal: 'Oktal',
    decimal: 'Dezimal',
    hexadecimal: 'Hexadezimal',
    custom: 'Benutzerdefinierte Basis',
    all: 'Alle Konvertierungen'
  },

  // Aktionen
  actions: {
    convert: 'Konvertieren',
    clear: 'Zurücksetzen',
    copy: 'Ergebnis kopieren',
    swap: 'Basen tauschen'
  },

  // Bit-Konverter
  bitConverters: {
    title: 'Bit-Konverter',
    ieee754: 'IEEE 754 Gleitkommazahl',
    twosComplement: 'Zweierkomplement',
    bitMask: 'Bitmaske',
    bitField: 'Bitfeld-Extraktor'
  },

  // Rechner
  calculators: {
    title: 'Berechnungen',
    add: 'Addition',
    subtract: 'Subtraktion',
    multiply: 'Multiplikation',
    divide: 'Division',
    modulo: 'Modulo',
    power: 'Potenz'
  },

  // Nachrichten
  messages: {
    invalidInput: 'Ungültige Zahl für gewählte Basis',
    outOfRange: 'Zahl außerhalb des Bereichs für gewählte Bitlänge',
    copied: 'Konvertierungsergebnis in Zwischenablage kopiert',
    conversionComplete: 'Konvertierung abgeschlossen'
  }
};