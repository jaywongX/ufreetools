export default {
  name: 'Formateador JSON',
  description: 'Herramienta en línea para formatear y validar JSON, compatible con compresión y embellecimiento',
  options: {
    indent: 'Sangría',
    sort: 'Ordenar Claves',
    compress: 'Comprimir',
    beautify: 'Embellir'
  },
  actions: {
    format: 'Formatear JSON',
    compress: 'Comprimir',
    clear: 'Limpiar',
    copy: 'Copiar',
    download: 'Descargar',
    transferMeaning: 'Escapar',
    contraposition: 'Desescapar'
  },
  messages: {
    invalidJson: 'Sintaxis JSON inválida',
    copied: '¡Copiado al portapapeles!',
    empty: 'Por favor ingrese contenido JSON',
    formatTip: 'La lista de propiedades se mostrará después de formatear o comprimir JSON',
    formatSuccess: 'JSON formateado correctamente',
    compressSuccess: 'JSON comprimido correctamente',
    escapeSuccess: 'JSON escapado correctamente',
    unescapeSuccess: 'JSON desescapado correctamente',
    copyFailed: 'Fallo al copiar, por favor copie manualmente'
  },
  labels: {
    jsonData: 'Datos JSON',
    propertyList: 'Lista de Propiedades',
    clickToCopy: '(Haz clic en el valor para copiar)'
  },
  placeholders: {
    jsonInput: 'Pega tus datos JSON...'
  },
  article: {
    title: "Formateador JSON: Guía Definitiva para el Procesamiento de Datos Estructurados",
    features: {
      title: "Entendiendo el Formateo JSON y sus Beneficios",
      description: "El <strong>Formateador JSON</strong> es una herramienta sofisticada en línea diseñada para transformar cadenas JSON sin formato en estructuras organizadas y legibles, validando además la corrección de la sintaxis. Ofrece funcionalidades completas incluyendo <strong>embellecimiento de JSON</strong>, compresión de datos, visualización de propiedades y operaciones especializadas como escapar y desescapar secuencias de caracteres.<br><br>En su núcleo, esta herramienta permite a los usuarios convertir instantáneamente texto JSON denso y sin formato en un formato bien indentado y visualmente navegable que resalta la relación jerárquica entre los elementos de datos. El componente <strong>validador de JSON</strong> verifica automáticamente errores de sintaxis tales como corchetes faltantes, comas incorrectas o valores mal formateados, proporcionando mensajes claros de error cuando se detectan problemas. El explorador de propiedades muestra una vista en árbol navegable de tu estructura de datos, permitiéndote navegar fácilmente objetos y arreglos anidados con diferenciación visual entre tipos de datos. Ya sea que estés trabajando con respuestas de API, archivos de configuración o formatos de intercambio de datos, este <strong>formateador JSON</strong> simplifica el proceso de gestionar y entender datos estructurados.",
      useCases: {
        title: "Aplicaciones Prácticas del Formateo JSON",
        items: [
          "<strong>Análisis de Respuestas de API</strong>: Cuando trabajas con APIs externas, las respuestas suelen venir como JSON minificado para reducir el tamaño de transferencia de datos. Usar el <strong>prettifier JSON</strong> permite a los desarrolladores transformar inmediatamente estas respuestas compactas en formatos legibles, facilitando localizar campos específicos, entender la estructura de la respuesta e identificar posibles problemas en los datos devueltos.",
          "<strong>Depuración de Datos de Aplicación</strong>: Durante el desarrollo, examinar estructuras de datos JSON es esencial para resolver problemas. El <strong>validador de estructura JSON</strong> ayuda a identificar rápidamente errores de sintaxis en objetos JSON, ahorrando valioso tiempo de depuración al señalar de inmediato datos mal formados que podrían causar errores en la aplicación. La representación visual hace más sencillo rastrear la ruta hacia valores anidados que puedan estar causando problemas.",
          "<strong>Gestión de Archivos de Configuración</strong>: Las aplicaciones modernas a menudo usan archivos JSON para ajustes de configuración. El <strong>verificador de formato JSON</strong> asegura que estos archivos críticos mantengan una sintaxis válida, mientras que la función de embellecimiento hace más accesibles estructuras complejas cuando se requiere edición manual. Esto evita posibles errores en tiempo de ejecución causados por datos de configuración mal formateados.",
          "<strong>Preparación y Transformación de Datos</strong>: Antes de importar datos JSON a bases de datos o herramientas analíticas, suele ser necesario limpiar y validar la estructura. El <strong>analizador JSON en línea</strong> permite a los analistas de datos verificar rápidamente la integridad de los datos, entender el esquema y preparar conjuntos de datos para procesamiento adicional, garantizando operaciones fluidas en las tuberías de datos.",
          "<strong>Documentación y Compartición de Conocimiento</strong>: Al crear documentación de API o compartir modelos de datos con compañeros de equipo, incluir ejemplos JSON adecuadamente formateados mejora la comprensión. Usar la función <strong>pretty print JSON</strong> crea ejemplos limpios y consistentes que muestran claramente las estructuras de datos, haciendo especificaciones técnicas más accesibles para otros desarrolladores.",
          "<strong>Preparación para Generación de Código</strong>: Muchas herramientas de generación automática de código aceptan definiciones de esquema JSON como entrada. El <strong>validador de sintaxis JSON</strong> asegura que estas definiciones de esquema no tengan errores antes de ser procesadas por generadores de código, previniendo construcciones fallidas y garantizando que el código generado refleje con precisión el modelo de datos pretendido."
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre el Formateo JSON",
      items: [
        {
          question: "¿Cuál es la diferencia entre formatear y comprimir JSON?",
          answer: "Formatear JSON (también llamado embellecimiento o pretty printing) agrega indentación adecuada, saltos de línea y espaciado para hacer la estructura legible para humanos, esencialmente expandiendo el JSON para mejorar la visualización. Cada elemento obtiene su propia línea con indentación apropiada que representa su nivel en la jerarquía, lo cual es ideal para depurar, desarrollar y documentar. Comprimir JSON hace lo contrario: elimina todo espacio innecesario, creando una versión compacta y minificada que minimiza el tamaño del archivo para almacenamiento eficiente y transmisión rápida. Mientras que el JSON formateado está optimizado para lectura humana, el JSON comprimido está optimizado para procesamiento máquina y uso eficiente de ancho de banda. Nuestra herramienta de formateo JSON provee ambas opciones, permitiéndote cambiar entre formatos legibles y compactos según tus necesidades específicas."
        },
        {
          question: "¿Por qué falla mi validación JSON aunque parece correcta?",
          answer: "Los fallos en la validación JSON suelen provenir de sutiles errores de sintaxis difíciles de notar visualmente. Errores comunes incluyen: comas al final después de la última propiedad en un objeto o arreglo (no permitidas en JSON estándar); uso de comillas simples en lugar de las dobles requeridas para cadenas; caracteres especiales sin escapar en cadenas (saltos de línea, tabulaciones, comillas); falta de comas entre propiedades; comentarios estilo JavaScript (JSON no soporta comentarios); y valores indefinidos o NaN (no válidos en JSON). El formateador JSON resalta estos errores e indica su ubicación, ayudándote a identificar y corregir los problemas rápidamente. Si tus datos contienen valores o estructuras especiales no soportadas por el estándar JSON, considera usar nuestras funciones de escapado para codificar adecuadamente esos elementos, asegurando un JSON válido que pueda ser parseado exitosamente en todas las plataformas e idiomas."
        },
        {
          question: "¿Cómo funcionan el escapado y desescapado en JSON?",
          answer: "El escapado JSON convierte caracteres especiales en sus representaciones de secuencia escapada para asegurar que sean codificados correctamente dentro de cadenas JSON. Por ejemplo, las comillas se convierten en \\\", los saltos de línea en \
, y las barras invertidas en \\\\. Este proceso es esencial cuando tus datos JSON contienen caracteres que romperían la sintaxis JSON, como comillas dentro de valores de cadena o caracteres de control. El desescapado realiza la operación inversa, convirtiendo secuencias escapadas nuevamente a sus representaciones literales. Esto es particularmente útil al analizar JSON que ha sido escapado múltiples veces o cuando necesitas ver el contenido real con caracteres especiales intactos. Nuestra herramienta de formateo JSON ofrece ambas capacidades, permitiéndote preparar JSON con escapado adecuado para transmisión o almacenamiento, y convertir JSON escapado de vuelta a un formato más legible cuando sea necesario para análisis o depuración."
        },
        {
          question: "¿Puedo usar el formateador JSON para archivos grandes?",
          answer: "Sí, nuestro formateador JSON está diseñado para manejar archivos JSON razonablemente grandes, pero existen limitaciones prácticas basadas en las capacidades del navegador. Para un rendimiento óptimo, recomendamos archivos de hasta varios megabytes. Al trabajar con conjuntos de datos muy grandes (decenas o cientos de megabytes), podrías experimentar lentitud ya que los navegadores tienen limitaciones de memoria para procesar grandes textos en JavaScript. Para archivos extremadamente grandes, considera usar herramientas de escritorio dedicadas con gestión específica de memoria, o procesa los datos en fragmentos más pequeños. Alternativamente, nuestra función de compresión puede ser útil para archivos grandes, ya que elimina espacios sin cambiar la estructura de datos, potencialmente haciendo archivos más grandes manejables. Si trabajas regularmente con estructuras JSON muy grandes, considera explorar herramientas de lado servidor o bases de datos JSON especializadas diseñadas para gestión de volúmenes altos de datos."
        },
        {
          question: "¿Cómo puedo encontrar valores específicos en estructuras JSON complejas?",
          answer: "Encontrar valores específicos en estructuras JSON complejas se simplifica con la vista de lista de propiedades de nuestro formateador JSON. Tras formatear tu JSON, el panel derecho muestra un árbol jerárquico de todas las propiedades, permitiéndote expandir objetos y arreglos anidados para navegar por la estructura. Esta representación visual hace mucho más fácil rastrear rutas hacia valores profundamente anidados comparado con escanear texto plano. Cada propiedad y valor se muestra con indicadores de tipo y pueden copiarse individualmente haciendo clic en el valor. Para búsquedas más específicas dentro de documentos JSON grandes, puedes usar la función de búsqueda del navegador (Ctrl+F/Cmd+F) tras formatear, ya que la estructura embellecida con indentación adecuada hace que los patrones sean más reconocibles. La lista de propiedades destaca especialmente en ayudarte a entender la estructura general de datos JSON complejos, revelando relaciones entre diferentes partes del documento que quizás no sean inmediatamente obvias en vista plana de texto."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Usar el Formateador JSON",
      steps: [
        "<strong>Pega tus datos JSON</strong>: Comienza copiando tus datos JSON brutos desde su fuente (respuesta de API, archivo, etc.) y pégalo en el área de entrada en el lado izquierdo de la herramienta. La herramienta acepta cualquier cadena JSON válida, independientemente de si ya está formateada o minificada.",
        "<strong>Formatea el JSON</strong>: Haz clic en el botón 'Formatear JSON' en la barra de herramientas para embellecer tus datos pegados. Este proceso agregará indentación y saltos de línea adecuados para hacer la estructura legible, validando simultáneamente la sintaxis. Si tu JSON contiene errores de sintaxis, verás un mensaje rojo de error indicando el problema.",
        "<strong>Explora la lista de propiedades</strong>: Tras el formateo, examina la lista de propiedades que aparece en el panel derecho. Esta vista jerárquica muestra todos los objetos, arreglos y valores en tu estructura JSON. Puedes expandir y contraer elementos anidados haciendo clic en las flechas junto a objetos y arreglos, permitiéndote navegar a través de estructuras de datos complejas.",
        "<strong>Copia valores específicos</strong>: Si necesitas extraer partes específicas de tus datos JSON, haz clic en cualquier valor en la lista de propiedades para copiarlo al portapapeles. Esto es particularmente útil cuando necesitas referenciar valores individuales o sub-estructuras desde un documento JSON más grande.",
        "<strong>Realiza operaciones adicionales</strong>: Dependiendo de tus necesidades, usa las funcionalidades adicionales en la barra de herramientas: 'Comprimir' para minificar el JSON eliminando todo espacio en blanco (útil para reducir el tamaño de archivo); 'Limpiar' para remover todo el contenido y comenzar de nuevo; 'Escapar' para convertir caracteres especiales en sus representaciones escapadas; o 'Desescapar' para revertir el proceso de escapado.",
        "<strong>Copia el resultado procesado</strong>: Una vez que hayas formateado o manipulado tu JSON según tus necesidades, haz clic en el botón 'Copiar' en la esquina superior derecha para copiar toda la cadena JSON procesada al portapapeles. Esto facilita pegar el JSON formateado o modificado en tu editor de código, documentación u otras destinaciones.",
        "<strong>Valida los cambios</strong>: Si realizas ediciones manuales a tu JSON tras el formateo, haz clic nuevamente en 'Formatear JSON' para asegurar que tus cambios mantienen una sintaxis JSON válida. Este paso de validación es crucial antes de usar el JSON en tus aplicaciones, ya que incluso errores pequeños pueden hacer fallar completamente el análisis JSON."
      ]
    },
    conclusion: "JSON se ha convertido en el lenguaje universal para intercambio de datos en desarrollo web y de aplicaciones modernas, haciendo herramientas como este formateador JSON esenciales para desarrolladores, analistas de datos y profesionales de TI. Al transformar cadenas JSON densas orientadas a máquinas en formatos legibles por humanos, esta herramienta cierra la brecha entre eficiencia informática y comprensión humana. La capacidad de validar, formatear y explorar estructuras de datos rápidamente ahorra incontables horas de depuración y formateo manual mientras asegura la integridad de los datos entre sistemas. Ya sea que estés integrando APIs, configurando aplicaciones, resolviendo problemas de datos o compartiendo ejemplos de código, el formateador JSON proporciona las capacidades de visualización y verificación necesarias para trabajar con confianza con estructuras de datos complejas. A medida que los servicios web y aplicaciones basadas en datos dominan el paisaje tecnológico, tener herramientas confiables para procesar JSON sigue siendo un requisito fundamental para flujos de trabajo efectivos de desarrollo y mantenimiento."
  }
}