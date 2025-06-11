export default {
  name: 'Generador de UUID',
  description: 'Generar UUIDs y GUIDs aleatorios con opciones personalizables, útil para claves de base de datos, nombres temporales de archivos, etc.',
  options: {
    version: 'Versión UUID',
    quantity: 'Cantidad',
    format: 'Opciones de Formato',
    includeDash: 'Incluir Guiones (-)',
    generateCount: 'Número de UUIDs'
  },
  versions: {
    v1: 'Versión 1 (Basada en tiempo)',
    v4: 'Versión 4 (Aleatoria)',
    v5: 'Versión 5 (Espacio de Nombres)',
    custom: 'Personalizado'
  },
  quantities: {
    single: 'Único',
    five: '5 UUIDs',
    ten: '10 UUIDs',
    twenty: '20 UUIDs'
  },
  formats: {
    default: 'Predeterminado',
    base64: 'Base64',
    binary: 'Binario',
    hex: 'Hexadecimal',
    noDash: 'Sin Guiones'
  },
  actions: {
    generate: 'Generar UUID',
    copy: 'Copiar',
    copyAll: 'Copiar Todos',
    clear: 'Limpiar Resultados',
    download: 'Descargar como TXT'
  },
  messages: {
    copied: '¡Copiado al portapapeles!',
    generated: 'UUIDs generados exitosamente',
    tooMany: 'La cantidad máxima permitida es 1000',
    invalidVersion: 'Versión UUID inválida',
    invalidNamespace: 'UUID de espacio de nombres inválido',
    copyFailed: 'Fallo al copiar'
  },
  article: {
    title: "Generador de UUID: Cree Identificadores Únicos para Sus Aplicaciones",
    features: {
      title: "¿Qué es un Generador de UUID?",
      description: "Un <strong>generador de UUID (Identificador Universal Único)</strong> es una herramienta especializada que crea identificadores estandarizados de 128 bits garantizados para ser globalmente únicos. Nuestro <strong>generador de UUID en línea</strong> crea estos identificadores aleatorios siguiendo la especificación RFC 4122, proporcionando <strong>valores de ID únicos</strong> para una amplia gama de aplicaciones.<br><br>La fortaleza principal de los UUID radica en su probabilidad extremadamente baja de colisión. Cada <strong>UUID generado</strong> consta de 32 caracteres hexadecimales generalmente organizados en 5 grupos separados por guiones (formato 8-4-4-4-12). Nuestra herramienta se enfoca principalmente en los UUID de la versión 4, creados mediante números aleatorios o pseudoaleatorios, lo que los convierte en ideales para la mayoría de las aplicaciones que requieren <strong>identificadores únicos</strong> sin coordinación entre sistemas.",
      useCases: {
        title: "Aplicaciones Prácticas para la Generación de UUID",
        items: [
          "<strong>Claves Primarias de Base de Datos</strong>: Los UUID funcionan perfectamente como identificadores de bases de datos, especialmente en sistemas distribuidos donde múltiples servidores pueden crear registros simultáneamente sin coordinación",
          "<strong>Computación Distribuida</strong>: Para microservicios y aplicaciones en la nube, los UUID proporcionan identificadores únicos que pueden generarse independientemente por diferentes servicios sin riesgo de colisión",
          "<strong>Desarrollo Web</strong>: Crear identificadores únicos para sesiones, seguir interacciones de usuarios o generar tokens únicos para restablecer contraseñas y verificar cuentas",
          "<strong>Gestión de Contenido</strong>: Asignar identificadores únicos a activos digitales, documentos y piezas de contenido en sistemas complejos de publicación",
          "<strong>Identificación de Dispositivos IoT</strong>: Proporcionar identificadores únicos para dispositivos IoT que necesitan rastrearse en redes sin coordinación central",
          "<strong>Aplicaciones de Juegos</strong>: Generar identificadores para instancias de juegos, sesiones de jugadores o artículos únicos en entornos multijugador con riesgo mínimo de colisión"
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre la Generación de UUID",
      items: [
        {
          question: "¿Cuál es la diferencia entre las versiones de UUID?",
          answer: "Los UUID vienen en varias versiones, cada una generada de forma diferente: La versión 1 usa marca de tiempo y dirección MAC, la versión 3 usa espacio de nombres y hash MD5, la versión 4 (la más común) usa números aleatorios, la versión 5 usa espacio de nombres y hash SHA-1. Nuestro generador de UUID se enfoca principalmente en la versión 4, que ofrece la mejor combinación de unicidad, seguridad y facilidad de generación. Los UUID de la versión 4 se crean mediante números aleatorios o pseudoaleatorios, lo que los hace ideales para la mayoría de las aplicaciones donde se necesita unicidad garantizada sin revelar información específica del sistema."
        },
        {
          question: "¿Qué tan seguros son los UUID para aplicaciones sensibles?",
          answer: "Los UUID de la versión 4 ofrecen buena seguridad para la mayoría de las aplicaciones debido a su aleatoriedad e imprevisibilidad. Con 122 bits aleatorios, la probabilidad de generar dos UUID idénticos es extremadamente baja (alrededor de 1 en 5.3×10³⁸). Sin embargo, no son criptográficamente seguros para todos los propósitos. Para aplicaciones altamente sensibles que requieran seguridad criptográfica, considere combinar UUID con medidas adicionales de seguridad. Los UUID no deben usarse para ocultar información sensible, ya que están diseñados para unicidad, no para cifrado. Para tokens de autenticación o identificadores críticos de seguridad, considere el uso de herramientas criptográficas especializadas además de los UUID."
        },
        {
          question: "¿Se pueden usar UUID como claves primarias en bases de datos?",
          answer: "Sí, los UUID funcionan perfectamente como claves primarias en bases de datos, especialmente en sistemas distribuidos. Las ventajas clave incluyen: no se requiere coordinación central para su generación, ningún riesgo de colisión al fusionar bases de datos, mayor privacidad ya que los IDs secuenciales no revelan cantidades de registros y desarrollo simplificado de sistemas distribuidos. Sin embargo, los UUID también tienen algunas desventajas: requieren más espacio de almacenamiento (16 bytes frente a 4 bytes para enteros), pueden afectar el rendimiento del indexado en comparación con los IDs secuenciales y pueden causar fragmentación en algunos motores de base de datos. Muchas bases de datos modernas están optimizadas para el almacenamiento de UUID y sus beneficios suelen superar los posibles inconvenientes, especialmente en aplicaciones distribuidas."
        },
        {
          question: "¿Están garantizados los UUID para ser únicos a nivel global?",
          answer: "Aunque los UUID están diseñados para ser prácticamente únicos, no están matemáticamente garantizados para ser absolutamente únicos. Los UUID de la versión 4 tienen 2¹²² valores posibles (alrededor de 5.3×10³⁶), lo que hace que las colisiones sean extremadamente improbables en la práctica. Para dar una perspectiva, generar 1 mil millones de UUID por segundo tardaría más de 10 mil millones de años en tener una probabilidad del 50% de una sola colisión. Para todas las aplicaciones prácticas, los UUID pueden considerarse globalmente únicos. La especificación RFC 4122 describe los UUID como 'prácticamente únicos' en lugar de 'garantizados únicos' para reconocer esta posibilidad teórica de colisión, aunque en el uso real, la distinción es insignificante."
        },
        {
          question: "¿Cómo afecta la eliminación de guiones a la utilización de los UUID?",
          answer: "Eliminar los guiones de los UUID no afecta su unicidad ni validez, es puramente una preferencia de formato. El formato estándar de UUID incluye guiones (por ejemplo, 550e8400-e29b-41d4-a716-446655440000) para facilitar la lectura, pero la versión sin guiones (550e8400e29b41d4a716446655440000) contiene la misma información. Algunos sistemas prefieren UUID sin guiones para ahorrar espacio de almacenamiento o para requisitos específicos de formato. Nuestro generador de UUID ofrece la opción de generar UUID con o sin guiones para adaptarse a diferentes requisitos del sistema. Al almacenar UUID en bases de datos, muchos desarrolladores eligen eliminar los guiones por eficiencia, mientras que muestran la versión con guiones en interfaces de usuario para mejorar la legibilidad."
        }
      ]
    },
    guide: {
      title: "Cómo Usar Nuestro Generador de UUID",
      steps: [
        "Seleccione su <strong>versión de UUID</strong> preferida desde el menú desplegable (la versión 4 se recomienda para la mayoría de las aplicaciones ya que utiliza números aleatorios para garantizar unicidad)",
        "Elija la <strong>cantidad de UUID</strong> que desea generar (1, 5, 10 o 20) según sus necesidades",
        "Configure las <strong>opciones de formato</strong> marcando o desmarcando la casilla 'Incluir Guiones' dependiendo de si necesita el formato estándar con guiones (8-4-4-4-12) o una cadena continua",
        "Haga clic en el botón <strong>'Generar UUID'</strong> para crear sus identificadores únicos según los ajustes especificados",
        "Puede <strong>copiar UUID individuales</strong> haciendo clic en el icono de copia junto a cada uno, o usar el botón 'Limpiar Resultados' si necesita comenzar de nuevo"
      ]
    },
    conclusion: "Nuestro Generador de UUID proporciona una forma simple y eficiente de crear identificadores únicos estandarizados para una amplia gama de aplicaciones. Al ofrecer opciones personalizables para la versión y formato del UUID, cumple con diversos requisitos del sistema manteniendo la garantía fundamental de unicidad que hace que los UUID sean tan valiosos en la informática moderna. Ya sea que esté desarrollando aplicaciones distribuidas, configurando bases de datos o gestionando contenido digital, esta herramienta asegura que pueda generar rápidamente los identificadores únicos que necesita sin preocuparse por colisiones o conflictos entre sistemas."
  }
}