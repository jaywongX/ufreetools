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
  // Añade el siguiente contenido al archivo de traducción existente
  article: {
    title: 'Calculadora AND Hexadecimal: Guía Completa',
    introduction: {
      title: 'Comprensión de las operaciones AND en hexadecimal',
      content: [
        'La Calculadora AND Hexadecimal es una herramienta especializada diseñada para realizar operaciones AND bit a bit en números hexadecimales. Esta operación compara cada posición de bit en dos o más valores hexadecimales y produce un resultado donde un bit se establece en 1 solo si todos los bits correspondientes en los operandos son 1.',
        'Las operaciones AND bit a bit son fundamentales en computación, especialmente cuando se trabaja con datos binarios, interfaces hardware, banderas de permisos y otras tareas de programación de bajo nivel. La representación hexadecimal hace que estas operaciones sean más legibles y manejables para desarrolladores e ingenieros hardware.',
        'Nuestra Calculadora AND Hexadecimal admite múltiples valores de entrada, proporcionando una forma conveniente de realizar operaciones AND entre varios números hexadecimales simultáneamente. Los resultados se muestran en formato hexadecimal, decimal y binario, con una representación visual bit a bit para ayudarte a entender exactamente cómo afecta la operación a cada posición de bit.'
      ]
    },
    useCases: {
      title: 'Aplicaciones comunes para operaciones AND en hexadecimal',
      cases: [
        {
          title: 'Verificación de permisos',
          description: 'Los desarrolladores usan operaciones AND para comprobar si están activos bits específicos de permiso en sistemas de control de acceso. Por ejemplo, hacer AND entre el valor de permiso de un usuario (0xA5) y una máscara de permiso (0x80) determina si se concede un permiso específico.'
        },
        {
          title: 'Manipulación de registros hardware',
          description: 'Los ingenieros que trabajan con hardware suelen utilizar operaciones AND para borrar bits específicos en registros de control dejando otros sin cambios. Haciendo AND con una máscara (por ejemplo, 0xFFFF & 0xFF00), ciertos bits pueden borrarse selectivamente.'
        },
        {
          title: 'Máscara de bits en protocolos de red',
          description: 'Los protocolos de red emplean frecuentemente operaciones AND para extraer campos específicos de cabeceras de paquetes. Por ejemplo, hacer AND entre una dirección IP y una máscara de subred aísla la parte de red de la dirección.'
        },
        {
          title: 'Extracción de canales de color',
          description: 'Los programadores gráficos usan operaciones AND para aislar canales de color específicos de valores hexadecimales de color. Por ejemplo, 0x00FF00 & 0xFFFFFF extrae el canal verde de un color RGB.'
        },
        {
          title: 'Prueba de banderas en programación de sistema',
          description: 'Los programadores de sistema utilizan operaciones AND para probar bits específicos de banderas en registros de estado. Esto es esencial para determinar estados de hardware o configuraciones.'
        }
      ]
    },
    faq: {
      title: 'Preguntas frecuentes sobre operaciones AND en hexadecimal',
      questions: [
        {
          question: '¿Qué es exactamente una operación AND bit a bit?',
          answer: 'Una operación AND bit a bit compara cada posición de bit en dos números binarios y produce un nuevo número binario donde cada bit es 1 solo si ambos bits correspondientes en los operandos son 1. De lo contrario, el bit resultante es 0. Al trabajar con números hexadecimales, cada dígito hexadecimal representa 4 bits, lo que lo hace más compacto que la representación binaria.'
        },
        {
          question: '¿Por qué usar hexadecimal en lugar de binario para operaciones bit a bit?',
          answer: 'La notación hexadecimal es mucho más compacta que la binaria (un dígito hexadecimal representa 4 dígitos binarios) mientras mantiene una clara relación con el binario. Esto hace que los valores hexadecimales sean más fáciles de leer, escribir y comunicar, especialmente para números grandes comúnmente usados en informática y programación.'
        },
        {
          question: '¿Puede la Calculadora AND Hexadecimal manejar más de dos entradas?',
          answer: 'Sí, nuestra calculadora admite múltiples entradas. Cuando se proporcionan más de dos valores, la operación AND se aplica secuencialmente desde el primer valor hasta todos los valores posteriores. Esto es útil para operaciones complejas de máscara donde necesitas aplicar múltiples condiciones.'
        },
        {
          question: '¿Cuál es la diferencia entre AND lógico y AND bit a bit?',
          answer: 'El AND lógico (&&) evalúa expresiones como verdadero o falso, tratando los operandos como valores booleanos únicos. El AND bit a bit (&) opera en cada posición individual de bit de valores numéricos, comparando bits correspondientes entre operandos. Nuestra Calculadora AND Hexadecimal realiza operaciones AND bit a bit.'
        },
        {
          question: '¿Hay algún límite para el tamaño de los números hexadecimales que puedo usar?',
          answer: 'La calculadora admite la precisión estándar de números de JavaScript, que normalmente permite enteros hasta con 53 bits de precisión. Para la mayoría de las aplicaciones prácticas que involucran manipulación de registros o banderas, esto es más que suficiente.'
        },
        {
          question: '¿Cómo interpreto la visualización binaria en los resultados?',
          answer: 'La visualización binaria muestra el desglose bit a bit de cada valor de entrada y el resultado de la operación AND. Los bits mostrados como "1" (resaltados) están activos, mientras que los bits "0" están desactivados. Esta representación visual ayuda a entender exactamente qué posiciones de bit fueron afectadas por la operación AND.'
        }
      ]
    },
    tutorial: {
      title: 'Guía paso a paso para usar la Calculadora AND Hexadecimal',
      steps: [
        {
          title: 'Introduce tu primer valor hexadecimal',
          description: 'Escribe un número hexadecimal en el primer campo de entrada. No necesitas incluir el prefijo "0x", ya que ya está incluido. Por ejemplo, introduce "FF" para representar el valor hexadecimal FF (decimal 255).'
        },
        {
          title: 'Introduce tu segundo valor hexadecimal',
          description: 'Introduce otro número hexadecimal en el segundo campo. Por ejemplo, introduce "0F" para representar el valor hexadecimal 0F (decimal 15).'
        },
        {
          title: 'Añade más valores (opcional)',
          description: 'Si tu operación requiere más de dos valores, haz clic en el botón "+ Añadir otro número" para añadir campos de entrada adicionales. Introduce valores hexadecimales en cada nuevo campo.'
        },
        {
          title: 'Haz clic en Calcular',
          description: 'Presiona el botón "Calcular" para realizar la operación AND bit a bit en todos los valores introducidos. La calculadora procesará los valores secuencialmente, aplicando AND entre cada uno.'
        },
        {
          title: 'Revisa los resultados',
          description: 'Examina los resultados mostrados en múltiples formatos: hexadecimal, decimal y binario. Para el ejemplo de FF & 0F, el resultado sería 0F (decimal 15). La sección de visualización muestra exactamente qué bits se retuvieron en el resultado.'
        },
        {
          title: 'Copia o utiliza el resultado',
          description: 'Haz clic en el botón de copia junto a cualquier formato de resultado para copiar ese valor al portapapeles. Luego puedes pegarlo en tu código, documentación o usarlo para cálculos posteriores.'
        }
      ],
      advancedTips: {
        title: 'Consejos avanzados para operaciones AND en hexadecimal',
        tips: [
          'Usa los ejemplos rápidos para probar patrones comunes de máscara como 0xFF & 0x0F o 0xA5 & 0x80.',
          'Para operaciones complejas, puedes encadenar múltiples valores hexadecimales añadiendo más campos de entrada en lugar de realizar cálculos separados.',
          'Presta atención a la visualización binaria para entender exactamente qué bits están siendo afectados por tu operación AND.',
          'Al trabajar con registros de estado o bits de bandera, usa el resultado binario para confirmar que las posiciones de bit específicas se están aislando correctamente.',
          'Recuerda que las operaciones AND solo pueden dar como resultado bits 1 donde TODOS los valores de entrada tienen bits 1; es útil para borrar bits pero no para establecerlos.',
          'Puedes usar la representación hexadecimal para una notación más compacta, mientras que la visualización binaria ayuda a entender las operaciones a nivel de bit.'
        ]
      }
    }
  },
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
}