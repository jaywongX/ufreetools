export default {
  name: 'Convertidor de Números',
  description: 'Convierte números entre diferentes sistemas numéricos y formatos',

  input: {
    title: 'Ingrese el Número',
    placeholder: 'Ingrese un número para convertir',
    fromBase: 'Desde Base',
    toBase: 'A Base',
    customBase: 'Base Personalizada'
  },

  bases: {
    binary: 'Binario (Base 2)',
    octal: 'Octal (Base 8)',
    decimal: 'Decimal (Base 10)',
    hexadecimal: 'Hexadecimal (Base 16)',
    base32: 'Base 32',
    base36: 'Base 36',
    base58: 'Base 58',
    base64: 'Base 64',
    custom: 'Base Personalizada'
  },

  options: {
    signed: 'Firmado',
    bitLength: 'Longitud de Bits',
    byteOrder: 'Orden de Bytes',
    formatOutput: 'Formato de Salida',
    separator: 'Separador',
    prefix: 'Agregar Prefijo',
    uppercase: 'Mayúsculas'
  },

  byteOrders: {
    littleEndian: 'Little Endian',
    bigEndian: 'Big Endian'
  },

  bitLengths: {
    '8': '8-bit',
    '16': '16-bit',
    '32': '32-bit',
    '64': '64-bit',
    custom: 'Personalizado'
  },

  output: {
    title: 'Resultado de Conversión',
    binary: 'Binario',
    octal: 'Octal',
    decimal: 'Decimal',
    hexadecimal: 'Hexadecimal',
    custom: 'Base Personalizada',
    all: 'Todas las Conversiones'
  },

  actions: {
    convert: 'Convertir',
    clear: 'Limpiar',
    copy: 'Copiar Resultado',
    swap: 'Intercambiar Bases'
  },

  bitConverters: {
    title: 'Convertidores de Bits',
    ieee754: 'Punto Flotante IEEE 754',
    twosComplement: "Complemento a Dos",
    bitMask: 'Máscara de Bits',
    bitField: 'Extractor de Campo de Bits'
  },

  calculators: {
    title: 'Cálculos',
    add: 'Sumar',
    subtract: 'Restar',
    multiply: 'Multiplicar',
    divide: 'Dividir',
    modulo: 'Modulo',
    power: 'Potencia'
  },

  messages: {
    invalidInput: 'Número inválido para la base seleccionada',
    outOfRange: 'El número está fuera del rango para la longitud de bits seleccionada',
    copied: 'La conversión se ha copiado al portapapeles',
    conversionComplete: 'Conversión completada'
  }
};