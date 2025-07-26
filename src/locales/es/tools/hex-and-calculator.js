export default {
  name: 'Calculadora AND Hexadecimal',
  description: 'Realiza operaciones AND bit a bit en números hexadecimales y ve los resultados en diferentes formatos.',

  // Etiquetas de entrada
  firstNumber: 'Primer Número Hexadecimal',

  secondNumber: 'Segundo Número Hexadecimal',
  enterHex: 'Introduce un valor hexadecimal (sin 0x)',
  invalidHex: 'Valor hexadecimal inválido',

  // Operación
  calculate: 'Calcular',

  // Resultados
  result: 'Resultado',

  decimal: 'Decimal',
  binary: 'Binario',
  copied: '¡Copiado!',

  // Explicación
  explanation: {
    title: 'Cómo funciona la operación AND bit a bit',
    content: 'La operación AND bit a bit compara cada bit del primer operando con el bit correspondiente del segundo operando. Si ambos bits son 1, el bit resultante se establece en 1. De lo contrario, el bit resultante se establece en 0.',
    example: 'Desglose del cálculo'
  },

  // Ejemplos
  examples: {
    title: 'Ejemplos',
    example1: {
      description: 'Operación AND básica',
      value1: 'FF',
      value2: '0F',
      result: '0F'
    },
    example2: {
      description: 'Máscara de bits',
      value1: 'ABCD',
      value2: 'FF00',
      result: 'AB00'
    },
    commonMask: 'Máscara común: 0xFF & 0x0F',
    permissionCheck: 'Verificación de permiso: 0xA5 & 0x80',
    bitClearing: 'Borrar bits: 0xFFFF & 0xFF00',
    evenCheck: 'Verificar número par: 0x42 & 0x01'
  },

  // Documentación
  documentation: {
    title: 'Calculadora AND Hexadecimal: Guía completa',
    introduction: 'La Calculadora AND Hexadecimal es una herramienta para realizar operaciones AND bit a bit en números hexadecimales, comúnmente utilizada en programación y electrónica digital.',
    whatIs: {
      title: '¿Qué es una operación AND bit a bit?',
      paragraph1: 'Una operación AND bit a bit es una operación binaria que toma dos patrones de bits de igual longitud y realiza la operación lógica AND en cada par de bits correspondientes. El resultado en cada posición es 1 si ambos bits son 1, de lo contrario, el resultado es 0.',
      paragraph2: 'Esta operación es fundamental en varios escenarios informáticos, incluyendo operaciones de máscara, manipulación de bits y verificación del estado de bits específicos.'
    },
    useCases: {
      title: 'Casos comunes de uso para operaciones AND hexadecimales',
      masks: {
        title: 'Máscara de bits',
        description: 'Uso de operaciones AND para extraer o aislar bits específicos de un valor mediante una máscara para descartar bits no deseados.'
      },
      permissions: {
        title: 'Verificación de permisos',
        description: 'Determinar si están activos bits específicos de permiso en un campo de permisos.'
      },
      flagsCheck: {
        title: 'Verificación de banderas',
        description: 'Verificar si ciertas banderas están activas en un registro de estado o variable de bandera.'
      },
      evenOdd: {
        title: 'Prueba de par/impar',
        description: 'Comprobar si un número es par o impar utilizando AND con 1.'
      },
      bitClearing: {
        title: 'Borrado de bits',
        description: 'Limpiar bits específicos dejando otros sin cambios mediante AND con una máscara.'
      }
    },
    howToUse: {
      title: 'Cómo usar la calculadora AND hexadecimal',
      step1: 'Introduce el primer número hexadecimal sin el prefijo "0x"',
      step2: 'Introduce el segundo número hexadecimal sin el prefijo "0x"',
      step3: 'Haz clic en el botón "Calcular"',
      step4: 'Consulta el resultado en formato hexadecimal, decimal y binario',
      step5: 'Usa los botones de copia para copiar cualquier formato del resultado al portapapeles'
    },
    tips: {
      title: 'Consejos para trabajar con operaciones AND hexadecimales',
      tip1: 'Los ceros iniciales en la entrada se ignoran en el cálculo, pero el resultado se rellena para coincidir con la entrada más larga',
      tip2: 'Para operaciones de máscara, usa FF (o secuencias de F) en las posiciones que quieres mantener y 00 en las posiciones que quieres borrar',
      tip3: 'Para verificar si un bit específico está activo, haz AND con un valor que tenga solo ese bit activo (por ejemplo, AND con 0x08 para verificar si el cuarto bit está activo)',
      tip4: 'Recuerda que cada dígito hexadecimal representa 4 bits (un nibble)',
      tip5: 'Cuando trabajes con permisos o banderas, mantén una referencia de lo que representa cada bit'
    }
  },

  // Nuevas traducciones
  quickExamples: 'Ejemplos rápidos',

  operation: 'Operación',

  operations: {
    and: 'AND',
    or: 'OR',
    xor: 'XOR',
    not: 'NOT',
    shiftLeft: 'Desplazar a la izquierda (<<)',
    shiftRight: 'Desplazar a la derecha (>>)'
  },

  input: 'Valores de entrada',
  chainWith: 'Encadenar con...',
  importFromFile: 'Importar desde archivo',
  noResult: 'Introduce valores y haz clic en calcular para ver el resultado',
  bitVisualization: 'Visualización de bits',
  inputNumbers: 'Números hexadecimales de entrada',
  addNumber: 'Añadir otro número',
  number: 'Número',

  // Añade a src/locales/en/tools/hex-and-calculator.js:
  remove: 'Eliminar',

  removeButton: 'Eliminar esta entrada',
  import: 'Importar',
  importTitle: 'Importar desde archivo',
  save: 'Guardar',
  saveTitle: 'Guardar en archivo',
  copy: 'Copiar',
  copyTitle: 'Copiar todo',
  paste: 'Pegar',
  pasteTitle: 'Pegar desde el portapapeles',
  saveResult: 'Guardar resultado',
  saveResultTitle: 'Guardar resultado en archivo',
  copyResult: 'Copiar resultado',
  copyResultTitle: 'Copiar todos los resultados',
  copyAction: 'Copiar',
  importError: 'Error al importar el archivo, asegúrate del formato correcto',
  inputsCopied: 'Todas las entradas copiadas al portapapeles',
  resultsCopied: 'Todos los resultados copiados al portapapeles',
  inputs: 'Entradas'
};