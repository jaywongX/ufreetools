export default {
  name: 'Formateador XML',
  description: 'Dar formato, embellecer y validar documentos XML',
  options: {
    indentSize: 'Tamaño de sangrado',
    useTabs: 'Usar Tabulaciones',
    collapseContent: 'Colapsar Contenido',
    maxLineWidth: 'Ancho Máximo de Línea',
    indentAttributes: 'Sangrar Atributos',
    sortAttributes: 'Ordenar Atributos',
    newlineAfterPI: 'Nueva línea después de Instrucciones de Procesamiento',
    operationType: 'Tipo de Operación',
    indentSettings: 'Configuración de Sangrado',
    displayOptions: 'Opciones de Visualización',
    showLineNumbers: 'Mostrar Números de Línea'
  },
  indentOptions: {
    twoSpaces: '2 espacios',
    fourSpaces: '4 espacios',
    tabIndent: 'Sangrado con tabulación'
  },
  actions: {
    format: 'Dar Formato',
    minify: 'Minificar',
    validate: 'Validar',
    toJSON: 'Convertir a JSON',
    copy: 'Copiar',
    clear: 'Limpiar',
    download: 'Descargar',
    upload: 'Subir XML',
    beautify: 'Embellir',
    copyCode: 'Copiar Código'
  },
  messages: {
    copied: '¡Copiado al portapapeles!',
    formatSuccess: 'XML formateado exitosamente',
    formatError: 'Error al dar formato al XML',
    validXml: 'El XML es válido',
    invalidXml: 'XML inválido: {0}',
    lineCol: 'Línea {line}, Columna {col}',
    minifySuccess: 'XML minificado exitosamente',
    conversionSuccess: 'Conversión exitosa',
    conversionError: 'Error durante la conversión',
    pleaseEnterXml: 'Por favor ingrese contenido XML',
    processingError: 'Error procesando el XML: {0}',
    formatResult: 'Resultado del Formateo',
    characterCount: 'Conteo de caracteres: {0}',
    lineCount: 'Conteo de líneas: {0}',
    characterAndLineCount: 'Conteo de caracteres: {0} | Conteo de líneas: {1}'
  },
  input: {
    xmlInput: 'Entrada XML',
    placeholder: 'Pegue o escriba XML aquí...'
  },
  examples: {
    title: 'Ejemplo XML',
    description: 'Haga clic para cargar ejemplo:',
    simpleXml: 'XML Simple',
    bookstore: 'Catálogo de Librería',
    complexXml: 'XML Complejo'
  },
  article: {
    title: "Formateador XML: Herramienta Esencial para Procesamiento de Datos Estructurados",
    features: {
      title: "Entendiendo el Formateo XML y Sus Aplicaciones",
      description: "El <strong>Formateador XML</strong> es una poderosa utilidad en línea diseñada para transformar código XML sin formato en un formato estructurado y legible. Permite a los usuarios embellecer documentos XML desordenados o minificados, validar la sintaxis correcta y convertir entre diferentes representaciones XML fácilmente.<br><br>En su núcleo, este <strong>embellecedor XML</strong> analiza la estructura jerárquica de los datos XML y aplica sangrados consistentes, saltos de línea apropiados y formato organizado para hacer que documentos XML complejos sean más fáciles de leer, editar y entender. La herramienta soporta tanto embellecimiento (expandiendo y organizando el XML con espacio adecuado) como minificación (comprimiendo el XML eliminando espacios innecesarios), permitiéndole optimizar su XML ya sea para legibilidad humana o eficiencia de procesamiento y almacenamiento máquina. Con características como validación de sintaxis, numeración de líneas y sangrado personalizable, este <strong>formateador XML avanzado</strong> proporciona una solución integral para trabajar con documentos XML de cualquier nivel de complejidad.",
      useCases: {
        title: "Aplicaciones Prácticas del Formateo XML",
        items: [
          "<strong>Desarrollo y Pruebas de Servicios Web</strong>: Al construir o depurar servicios web SOAP, los desarrolladores pueden usar el <strong>validador XML</strong> para verificar las cargas útiles de solicitud y respuesta, asegurando que se ajusten a los esquemas esperados. El formateador ayuda a analizar mensajes SOAP complejos transformando respuestas densas y de una sola línea en estructuras con sangrado adecuado, facilitando la identificación de elementos de datos y la resolución de problemas de integración entre servicios.",
          "<strong>Gestión de Archivos de Configuración</strong>: Muchas aplicaciones empresariales dependen del XML para configuraciones. Los administradores de sistemas pueden usar el <strong>formateador de estructura XML</strong> para limpiar y estandarizar archivos de configuración antes del despliegue, reduciendo el riesgo de errores de sintaxis que podrían causar fallos en el sistema. La característica de embellecimiento hace que las estructuras de configuración complejas sean más legibles cuando se requiere edición manual para personalización.",
          "<strong>Procesamiento de Integración de Datos</strong>: Los ingenieros de datos trabajando con intercambios de datos basados en XML pueden usar la herramienta para inspeccionar y validar archivos XML antes del procesamiento. Al recibir flujos de datos desde sistemas externos, el <strong>formateador de código XML</strong> ayuda rápidamente a identificar problemas estructurales o inconsistencias en los datos entrantes, asegurando operaciones ETL (Extract, Transform, Load) más fluidas y reduciendo fallos en tuberías de datos.",
          "<strong>Documentación y Desarrollo de API</strong>: Los desarrolladores creando o consumiendo APIs basadas en XML pueden usar el formateador para generar ejemplos limpios y con formato adecuado para incluir en documentación técnica. Los ejemplos embellecidos hacen que las especificaciones de la API sean más accesibles para otros desarrolladores, mostrando claramente la estructura esperada de solicitudes y respuestas en un formato fácil de entender y replicar.",
          "<strong>Mantenimiento de Sistemas Heredados</strong>: Los desarrolladores que mantienen sistemas antiguos que usan XML para almacenamiento o intercambio de datos pueden usar el <strong>herramienta de sangrado XML</strong> para comprender artefactos XML no documentados o con mal formato. Al formatear correctamente los artefactos XML de estos sistemas, los desarrolladores de mantenimiento pueden entender mejor las estructuras y relaciones de datos, facilitando actualizaciones e integraciones más eficientes.",
          "<strong>Sistemas de Gestión de Contenido</strong>: Autores de contenidos y webmasters trabajando con plataformas CMS que usan XML para almacenamiento de contenidos o plantillas pueden emplear el <strong>formateador de sintaxis XML</strong> para estructurar correctamente las plantillas o archivos de exportación. Esto asegura consistencia en el formato del contenido y ayuda a prevenir errores de renderizado causados por XML mal formado cuando el contenido se publica en diferentes canales o plataformas."
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre el Formateo XML",
      items: [
        {
          question: "¿Cuál es la diferencia entre embellecer y minificar XML?",
          answer: "Embellecer XML transforma XML comprimido o con mal formato en un formato estructurado y legible añadiendo sangrados, saltos de línea y espaciado consistente. Este proceso hace que el documento sea más fácil de leer, entender y editar, lo cual es especialmente valioso durante desarrollo, depuración o documentación. Minificar XML hace lo contrario: elimina todo el espacio innecesario, saltos de línea y sangrados para crear una versión compacta en una sola línea. La minificación reduce el tamaño del archivo, lo que puede mejorar la velocidad de transmisión y reducir requisitos de almacenamiento, haciéndola ideal para entornos de producción donde el XML solo es procesado por máquinas. Nuestro formateador XML ofrece ambas opciones, permitiéndole cambiar entre formatos legibles y compactos según sus necesidades específicas. Aunque XML embellecido pueda tener un tamaño 30-50% mayor, los beneficios de legibilidad suelen superar consideraciones de tamaño durante las fases de desarrollo."
        },
        {
          question: "¿Cómo funciona la validación XML y qué errores puede detectar?",
          answer: "La validación XML en nuestra herramienta funciona analizando la estructura del XML y verificándola contra reglas de XML bien formado. Verifica que el documento siga requisitos básicos de sintaxis como: etiquetas anidadas correctamente (cada etiqueta de apertura debe tener una etiqueta de cierre coincidente en el orden correcto); atributos correctamente formados (todos los valores de atributo deben estar entre comillas); uso correcto de entidades (caracteres especiales deben escaparse correctamente); y presencia de un único elemento raíz. Errores comunes detectados incluyen: etiquetas sin cerrar, etiquetas de apertura y cierre inconsistentes, comillas faltantes en valores de atributo, anidamiento incorrecto de elementos y uso de caracteres ilegales. Cuando falla la validación, nuestro formateador XML muestra mensajes de error específicos indicando la naturaleza del problema y su ubicación en el documento (número de línea y columna si es posible), ayudándole a identificar y corregir rápidamente los problemas de sintaxis. El validador se enfoca en corrección estructural en lugar de validar contra DTD o esquema XML específico, haciéndolo universalmente aplicable para verificaciones básicas de sintaxis XML."
        },
        {
          question: "¿Puede esta herramienta manejar archivos XML grandes?",
          answer: "Sí, nuestro formateador XML puede manejar archivos XML de tamaño moderado (hasta varios megabytes) directamente en el navegador. Para un rendimiento óptimo, la herramienta aprovecha algoritmos eficientes de análisis y técnicas de manipulación DOM para procesar XML sin consumo excesivo de memoria. Sin embargo, hay limitaciones prácticas basadas en capacidades del navegador y recursos del sistema disponibles. Para archivos XML extremadamente grandes (decenas o cientos de megabytes), podría experimentar alguna degradación del rendimiento o, en casos extremos, limitaciones del navegador. Para tales archivos grandes, recomendamos procesarlos en fragmentos más pequeños o usar primero la opción de minificación para reducir el uso de memoria durante el procesamiento. La herramienta está optimizada para manejar eficientemente casos de uso XML comunes, incluyendo archivos de configuración, respuestas de API, flujos de datos y la mayoría de cargas útiles de servicios web. Si trabaja regularmente con conjuntos de datos XML excepcionalmente grandes, considere usar herramientas especializadas de escritorio diseñadas específicamente para manejar archivos grandes con gestión de memoria optimizada."
        },
        {
          question: "¿Cambiará el formato XML su funcionalidad o cómo es procesado?",
          answer: "No, el formateo adecuado del XML no cambia el significado funcional ni cómo es procesado por aplicaciones. Los analizadores XML ignoran el espacio extra y saltos de línea entre elementos, centrándose solo en los datos reales y estructura. Nuestro formateador preserva todos los componentes esenciales: nombres de elementos, atributos, valores y sus relaciones jerárquicas permanecen idénticos. Los únicos cambios son cosméticos: añadimos o eliminamos espacio, saltos de línea y sangrado. Este principio explica por qué el mismo documento XML puede representarse en forma embellecida o minificada mientras permanece funcionalmente equivalente. Es importante señalar, sin embargo, que el espacio dentro de nodos de texto (contenido real entre etiquetas) se conserva, ya que podría ser significativo dependiendo de su aplicación. Por ejemplo, en XML usado para documentos o formateo de texto, el espacio entre palabras en nodos de contenido podría ser importante semánticamente. Pueda seguro de que nuestras operaciones de formateo están diseñadas para mantener la integridad semántica de su XML mientras mejora su presentación visual para lectores humanos."
        },
        {
          question: "¿Cómo puedo personalizar el estilo de formateo para mis documentos XML?",
          answer: "Nuestro formateador XML ofrece varias opciones de personalización para adaptarse a sus preferencias de codificación o requerimientos del proyecto. Puede ajustar el tamaño de sangrado seleccionando entre 2 espacios, 4 espacios o caracteres de tabulación, permitiéndole alinearse con estándares del equipo o preferencias personales. Para asistencia visual durante edición, puede activar o desactivar los números de línea, lo cual es particularmente útil al trabajar con documentos grandes o cuando necesita referenciar ubicaciones específicas en la estructura XML. La herramienta recuerda sus últimas configuraciones para conveniencia durante su sesión. Aunque el formateador no soporta actualmente opciones avanzadas de estilo como ordenamiento personalizado de atributos u otras especializadas, sigue buenas prácticas ampliamente aceptadas para formateo XML que funcionan bien para la mayoría de casos de uso. Las configuraciones predeterminadas crean una estructura limpia y consistente que equilibra legibilidad con uso eficiente del espacio, haciendo sus documentos XML accesibles tanto para partes técnicas como no técnicas."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Usar el Formateador XML",
      steps: [
        "<strong>Ingrese su contenido XML</strong>: Comience introduciendo sus datos XML en el área de entrada. Puede teclear o pegar código XML directamente en el campo de texto. Si es nuevo en la herramienta o quiere experimentar, haga clic en uno de los botones de ejemplo debajo del área de entrada para cargar estructuras XML de diversa complejidad.",
        "<strong>Seleccione su tipo de operación</strong>: Elija si desea embellecer o minificar su XML seleccionando la opción apropiada en la sección 'Tipo de Operación'. Embellecer expandirá su XML con sangrado y saltos de línea adecuados para mejor legibilidad, mientras que Minificar lo comprimirá eliminando espacio innecesario para reducir el tamaño del archivo.",
        "<strong>Personalice opciones de formateo</strong>: Si ha elegido embellecer su XML, puede personalizar el estilo de sangrado seleccionando su opción preferida del menú desplegable 'Configuración de Sangrado'. Elija entre 2 espacios, 4 espacios o sangrado con tabulación basado en sus estándares de codificación o preferencia personal. También puede activar/desactivar la opción 'Mostrar Números de Línea' para mostrar u ocultar números de línea en la vista de salida.",
        "<strong>Procese su XML</strong>: Haga clic en el botón 'Embellir' o 'Minificar' (dependiendo de su operación seleccionada) para formatear su XML. La herramienta procesará su entrada, revisará errores de sintaxis y mostrará el resultado formateado en el área de salida debajo. Si hay errores de sintaxis XML, aparecerá un mensaje de error ayudándole a identificar y corregir el problema.",
        "<strong>Revise la salida formateada</strong>: Una vez completado el procesamiento, examine el XML formateado en el área de resultados. Con números de línea activados (si seleccionó esa opción), puede fácilmente referenciar partes específicas del documento. La información de conteo de caracteres y líneas mostrada bajo la salida le ayuda a hacer seguimiento del tamaño y complejidad del documento.",
        "<strong>Copie o edite adicionalmente</strong>: Si está satisfecho con el resultado, haga clic en el botón 'Copiar Código' para copiar el XML formateado al portapapeles para usarlo en su aplicación, documentación o edición posterior. Si necesita hacer ajustes a su entrada y reprocesar, puede modificar el XML original y hacer clic nuevamente en el botón de formato.",
        "<strong>Limpie y empiece nuevo</strong>: Cuando esté listo para trabajar con un documento XML diferente, haga clic en el botón 'Limpiar' para restablecer tanto el área de entrada como de salida. Luego puede comenzar con contenido XML nuevo o cargar otro ejemplo para continuar trabajando con el formateador."
      ]
    },
    conclusion: "El Formateador XML es una herramienta indispensable en el conjunto moderno de herramientas del desarrollador, cerrando la brecha entre representación XML eficiente para máquinas y código legible para humanos. Transformando XML denso y sin formato en documentos claramente estructurados y viceversa, reduce significativamente el tiempo y esfuerzo necesarios para trabajar con datos XML en numerosas aplicaciones e industrias. Ya sea desarrollando servicios web, gestionando configuraciones del sistema, procesando flujos de datos o manteniendo sistemas heredados, el XML con formato adecuado mejora la calidad del código, reduce errores y potencia colaboración entre miembros del equipo. Mientras el XML continúa siendo un formato fundamental para intercambio de datos y configuración en entornos empresariales, tener acceso a herramientas confiables de formateo permanece esencial para flujos de trabajo efectivos de desarrollo y mantenimiento de sistemas. Este formateador XML online elimina la necesidad de aplicaciones de escritorio especializadas mientras proporciona funcionalidad profesional accesible desde cualquier navegador web moderno."
  }
}