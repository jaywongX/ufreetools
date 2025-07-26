export default {
  name: 'Convertitore Numerico',
  description: 'Converti numeri tra diverse basi e formati',

  input: {
    title: 'Numero di input',
    placeholder: 'Inserisci il numero da convertire',
    fromBase: 'Base di origine',
    toBase: 'Base di destinazione',
    customBase: 'Base personalizzata'
  },

  bases: {
    binary: 'Binario (base 2)',
    octal: 'Ottale (base 8)',
    decimal: 'Decimale (base 10)',
    hexadecimal: 'Esadecimale (base 16)',
    base32: 'Base 32',
    base36: 'Base 36',
    base58: 'Base 58',
    base64: 'Base 64',
    custom: 'Base personalizzata'
  },

  options: {
    signed: 'Con segno',
    bitLength: 'Lunghezza bit',
    byteOrder: 'Ordine dei byte',
    formatOutput: 'Formatta output',
    separator: 'Separatore',
    prefix: 'Aggiungi prefisso',
    uppercase: 'Maiuscolo'
  },

  byteOrders: {
    littleEndian: 'Little Endian',
    bigEndian: 'Big Endian'
  },

  bitLengths: {
    '8': '8 bit',
    '16': '16 bit',
    '32': '32 bit',
    '64': '64 bit',
    custom: 'Personalizzato'
  },

  output: {
    title: 'Risultato conversione',
    binary: 'Binario',
    octal: 'Ottale',
    decimal: 'Decimale',
    hexadecimal: 'Esadecimale',
    custom: 'Base personalizzata',
    all: 'Tutte le conversioni'
  },

  actions: {
    convert: 'Converti',
    clear: 'Pulisci',
    copy: 'Copia risultato',
    swap: 'Scambia basi'
  },

  bitConverters: {
    title: 'Convertitori bit',
    ieee754: 'Virgola mobile IEEE 754',
    twosComplement: 'Complemento a due',
    bitMask: 'Maschera di bit',
    bitField: 'Estrattore campo bit'
  },

  calculators: {
    title: 'Calcoli',
    add: 'Addizione',
    subtract: 'Sottrazione',
    multiply: 'Moltiplicazione',
    divide: 'Divisione',
    modulo: 'Modulo',
    power: 'Potenza'
  },

  messages: {
    invalidInput: 'Numero non valido per la base selezionata',
    outOfRange: 'Numero fuori intervallo per la lunghezza bit selezionata',
    copied: 'Risultato copiato negli appunti',
    conversionComplete: 'Conversione completata'
  }
};