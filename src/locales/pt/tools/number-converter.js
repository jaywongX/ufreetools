export default {
  name: 'Conversor Numérico',
  description: 'Converta números entre diferentes bases e formatos',

  input: {
    title: 'Número de Entrada',
    placeholder: 'Digite o número a ser convertido',
    fromBase: 'Base de Origem',
    toBase: 'Base de Destino',
    customBase: 'Base Personalizada'
  },

  bases: {
    binary: 'Binário (base 2)',
    octal: 'Octal (base 8)',
    decimal: 'Decimal (base 10)',
    hexadecimal: 'Hexadecimal (base 16)',
    base32: 'Base 32',
    base36: 'Base 36',
    base58: 'Base 58',
    base64: 'Base 64',
    custom: 'Personalizado'
  },

  options: {
    signed: 'Sinalizado',
    bitLength: 'Tamanho em bits',
    byteOrder: 'Ordem dos Bytes',
    formatOutput: 'Formatar Saída',
    separator: 'Separador',
    prefix: 'Adicionar Prefixo',
    uppercase: 'Maiúsculas'
  },

  byteOrders: {
    littleEndian: 'Little Endian',
    bigEndian: 'Big Endian'
  },

  bitLengths: {
    '8': '8 bits',
    '16': '16 bits',
    '32': '32 bits',
    '64': '64 bits',
    custom: 'Personalizado'
  },

  output: {
    title: 'Resultado da Conversão',
    binary: 'Binário',
    octal: 'Octal',
    decimal: 'Decimal',
    hexadecimal: 'Hexadecimal',
    custom: 'Base Personalizada',
    all: 'Todas as Conversões'
  },

  actions: {
    convert: 'Converter',
    clear: 'Limpar',
    copy: 'Copiar Resultado',
    swap: 'Trocar Bases'
  },

  bitConverters: {
    title: 'Conversores de Bits',
    ieee754: 'Ponto Flutuante IEEE 754',
    twosComplement: 'Complemento de Dois',
    bitMask: 'Máscara de Bits',
    bitField: 'Extrator de Campos de Bits'
  },

  calculators: {
    title: 'Cálculos',
    add: 'Adição',
    subtract: 'Subtração',
    multiply: 'Multiplicação',
    divide: 'Divisão',
    modulo: 'Módulo',
    power: 'Potência'
  },

  messages: {
    invalidInput: 'Número inválido para a base selecionada',
    outOfRange: 'Número fora do intervalo para o tamanho em bits selecionado',
    copied: 'Resultado copiado para a área de transferência',
    conversionComplete: 'Conversão concluída'
  }
};