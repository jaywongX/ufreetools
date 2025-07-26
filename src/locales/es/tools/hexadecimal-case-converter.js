export default {
  name: 'Convertidor de Mayúsculas y Minúsculas Hexadecimales',
  description: 'Convierte y formatea cadenas hexadecimales entre mayúsculas y minúsculas, con diferentes prefijos, separadores y opciones de agrupamiento',

  input: {
    title: 'Entrada Hexadecimal',
    placeholder: 'Introduce un valor hexadecimal...'
  },

  output: {
    title: 'Resultado Convertido',
    placeholder: 'Aquí aparecerá el resultado convertido...'
  },

  prefix: {
    title: 'Prefijo',
    none: 'Ninguno',
  },

  format: {
    title: 'Formato de Letra',
    uppercase: 'MAYÚSCULAS',
    lowercase: 'minúsculas'
  },

  separator: {
    title: 'Separador',
    none: 'Ninguno',
    space: 'Espacio',
    comma: 'Coma',
    colon: 'Dos Puntos',
    semicolon: 'Punto y Coma'
  },

  grouping: {
    title: 'Agrupamiento (bytes)',
    none: 'Ninguno'
  },

  actions: {
    copy: 'Copiar',
    clear: 'Limpiar',
    convert: 'Convertir'
  },

  messages: {
    copied: 'Copiado al portapapeles',
    copyFailed: 'Fallo al copiar',
    invalidHex: 'Valor hexadecimal inválido'
  },

  examples: {
    title: 'Ejemplos',
    example1: {
      title: 'Hola Mundo en Hex',
    },
    example2: {
      title: 'ASCII Hola con Prefijo 0x',
    },
    example3: {
      title: 'DEADBEEF (Valor común para depuración)',
    },
    example4: {
      title: 'Formato de Dirección MAC',
    }
  },

  tips: {
    title: 'Consejos',
    tip1: 'Los valores hexadecimales usan los caracteres 0-9 y A-F (o a-f)',
    tip2: 'Diferentes prefijos se usan en distintos contextos: 0x en programación, # en colores, etc.',
    tip3: 'Usa agrupamiento y separadores para mejorar la legibilidad de cadenas hexadecimales largas',
    tip4: 'Las direcciones MAC típicamente usan dos puntos como separador con agrupamiento de 1 byte'
  }
};