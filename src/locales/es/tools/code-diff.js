export default {
  name: 'Comparador de Código',
  description: 'Compara dos bloques de código y resalta las diferencias',
  options: {
    title: 'Opciones',
    ignoreCase: 'Ignorar mayúsculas/minúsculas',
    ignoreWhitespace: 'Ignorar espacios en blanco',
    trimWhitespace: 'Recortar espacios al inicio/fin',
    diffMode: 'Modo de Comparación',
    diffModes: {
      chars: 'Caracteres',
      words: 'Palabras',
      lines: 'Líneas',
      sentences: 'Frases',
      json: 'JSON'
    },
    diffStyle: 'Estilo de Visualización',
    diffStyles: {
      split: 'Vista dividida',
      inline: 'Vista en línea'
    },
    context: 'Líneas de Contexto',
    wrap: 'Ajustar texto',
    languages: {
      plaintext: 'Texto plano',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },
  inputs: {
    original: 'Código Original',
    modified: 'Código Modificado',
    placeholderOriginal: 'Introduce el código original aquí...',
    placeholderModified: 'Introduce el código modificado aquí...'
  },
  actions: {
    compare: 'Comparar',
    clear: 'Limpiar',
    swap: 'Intercambiar',
    copy: 'Copiar Diferencia',
    download: 'Descargar Diferencia',
    upload: 'Subir Archivos'
  },
  results: {
    title: 'Resultados de la Comparación',
    changes: 'Cambios',
    additions: 'Añadidos',
    deletions: 'Eliminados',
    unchanged: 'Sin cambios',
    noChanges: 'No se encontraron diferencias - los textos son idénticos',
    loading: 'Generando comparación...'
  },
  upload: {
    originalFile: 'Archivo Original',
    modifiedFile: 'Archivo Modificado',
    dropOriginal: 'Arrastra el archivo original aquí o haz clic para buscar',
    dropModified: 'Arrastra el archivo modificado aquí o haz clic para buscar'
  },
  messages: {
    copied: '¡Copiado al portapapeles!',
    inputRequired: 'Por favor, introduce texto en ambos campos',
    diffGenerated: 'Diferencia generada con éxito',
    error: 'Error generando la diferencia',
    fileError: 'Fallo al leer el archivo'
  },
  tips: {
    title: 'Consejos de Uso',
    compareOptions: 'Ajusta las opciones de comparación según tus necesidades - ignorar espacios puede ser útil al comparar código.',
    diffModes: 'Diferentes modos de diferenciaresaltan distintos niveles de detalle en la comparación.',
    largeFiles: 'Para archivos grandes, la comparación por líneas es más eficiente.',
    jsonMode: 'Usa el modo JSON al comparar datos estructurados - normalizará las estructuras antes de la comparación.'
  },
  article: {
    title: 'Guía Completa del Comparador de Código: Analiza Cambios Precisamente',
    features: {
      title: 'Entendiendo la Comparación de Código',
      description: 'El <strong>Comparador de Código</strong> es una herramienta poderosa diseñada para ayudar a desarrolladores a identificar diferencias entre dos bloques de código. Esta <strong>herramienta de comparación</strong> resalta los añadidos, eliminados y modificaciones entre archivos de texto, convirtiéndose en una utilidad invaluable para revisiones de código, control de versiones y depuración.<br><br>Nuestra <strong>herramienta de comparación de texto</strong> ofrece múltiples modos de comparación: por caracteres, palabras, líneas, frases y un modo especializado para JSON. El resultado se muestra en <strong>vista dividida</strong> (lado a lado) o <strong>vista en línea</strong>, adaptándose a diferentes preferencias y casos de uso. Ya sea que estés trabajando en código fuente, archivos de configuración o cualquier contenido basado en texto, este comparador te dará información precisa sobre qué ha cambiado entre versiones.',
      useCases: {
        title: 'Aplicaciones Prácticas de la Comparación de Código',
        items: [
          "Desarrolladores identificando <strong>cambios en el código</strong> entre versiones de su aplicación para localizar el origen de errores",
          "Líderes técnicos realizando <strong>revisiones de código</strong> para visualizar qué modificó cada miembro del equipo antes de aprobar los cambios",
          "Ingenieros DevOps comparando <strong>archivos de configuración</strong> entre entornos para asegurar consistencia o detectar personalizaciones específicas",
          "Escritores técnicos comparando <strong>bocetos de documentación</strong> para ver cómo ha evolucionado el contenido o qué secciones necesitan actualizarse",
          "Analistas de datos examinando diferencias entre <strong>estructuras JSON</strong> o exportaciones para entender cómo han cambiado los modelos de datos con el tiempo",
          "Estudiantes aprendiendo programación al comparar sus <strong>soluciones de código</strong> con implementaciones de referencia para entender distintas formas de resolver problemas"
        ]
      }
    },
    faq: {
      title: 'Preguntas Frecuentes sobre Análisis de Diferencias',
      items: [
        {
          question: '¿Cuál es la diferencia entre comparación por caracteres y por líneas?',
          answer: 'La comparación por caracteres identifica los cambios a nivel individual, mostrando modificaciones precisas dentro de palabras o segmentos de código. Es ideal para detectar pequeños cambios sutiles como modificaciones en nombres de variables. La comparación por líneas trata cada línea como una unidad, resaltando las que fueron agregadas, eliminadas o modificadas. Este modo es más eficiente para archivos grandes y ofrece una visión más clara cuando hay grandes porciones de código cambiadas, por eso es el predeterminado en la mayoría de sistemas de revisión de código y herramientas de control de versiones.'
        },
        {
          question: '¿Puede la herramienta manejar archivos grandes o bases de código extensas?',
          answer: 'Sí, nuestro Comparador de Código está optimizado para comparar archivos grandes. Para mejores resultados con proyectos extensos, recomendamos usar el modo de comparación por líneas, ya que procesa las diferencias más eficientemente que los modos por palabra o carácter. La herramienta implementa técnicas inteligentes de procesamiento para mantenerse receptiva incluso con entradas grandes. Sin embargo, para archivos muy grandes (varios MB), podrías experimentar mejor rendimiento si comparas solo secciones específicas del código en lugar del archivo completo.'
        },
        {
          question: '¿Cómo funciona el modo especializado para JSON?',
          answer: 'El modo de comparación de JSON está especialmente diseñado para trabajar con datos estructurados. A diferencia del modo estándar de texto, este modo primero interpreta ambas entradas como objetos JSON, normaliza su estructura (ignorando espaciado, indentación y orden de propiedades), e identifica únicamente las diferencias reales en los datos. Esto significa que dos objetos JSON con los mismos datos pero diferente formato o orden de propiedades serán reconocidos como iguales. Este modo resulta especialmente valioso para desarrolladores de API al comparar estructuras de respuesta, gestión de configuración y análisis de datos donde el contenido semántico importa más que la representación textual exacta.'
        },
        {
          question: '¿Puedo usar esta herramienta para comparar código de diferentes lenguajes de programación?',
          answer: 'Absolutamente. La herramienta funciona con cualquier formato basado en texto, lo que la hace independiente del lenguaje. Destaca bien las diferencias sintácticas sin importar el lenguaje de programación que estés comparando, ya sea JavaScript, Python, Java, C++, HTML, CSS o cualquier otro. Para mejorar la legibilidad, la herramienta ofrece resaltado de sintaxis para lenguajes populares, lo cual ayuda a visualizar los cambios en contexto adecuado. Esto la hace igualmente útil tanto para desarrolladores full-stack trabajando en múltiples tecnologías, como para especialistas en un único ecosistema.'
        },
        {
          question: '¿Cómo puedo compartir o guardar los resultados de la comparación?',
          answer: 'Nuestra herramienta ofrece varias opciones para compartir y guardar los resultados. Puedes copiar la diferencia formateada al portapapeles con el botón "Copiar Diferencia" para pegarla en documentos, correos o aplicaciones de chat. La función "Descargar Diferencia" permite guardar la comparación completa como un archivo HTML que preserva todo el resaltado y formato. Para integración con flujos de trabajo, también puedes generar enlaces permanentes a comparaciones específicas que pueden compartirse con tu equipo. Estas opciones facilitan incorporar los resultados de la comparación en tu documentación, procesos de revisión o discusiones de solución de problemas.'
        }
      ]
    },
    guide: {
      title: 'Guía Paso a Paso para Comparar Código',
      steps: [
        'Empieza seleccionando el <strong>modo de comparación</strong> que mejor se ajuste a tus necesidades - la comparación por líneas suele funcionar bien para la mayoría de casos, mientras que los modos por palabra o carácter son ideales para diferencias muy finas',
        'Elige entre <strong>vista dividida</strong> (lado a lado) o <strong>vista en línea</strong> según tu preferencia y tamaño de pantalla',
        'Pega o escribe tu <strong>código original</strong> en el área izquierda, asegurándote de que esté bien formateado para mayor claridad',
        'Agrega tu <strong>código modificado</strong> en el área derecha - también puedes usar el botón de intercambio para cambiar direccionalidad si es necesario',
        'Haz clic en el botón <strong>Comparar</strong> para generar la diferencia visual entre los dos fragmentos',
        'Revisa los resultados donde los <strong>añadidos</strong> se muestran en verde, los <strong>eliminados</strong> en rojo y las secciones sin cambios permanecen neutrales',
        'Usa las <strong>estadísticas resumidas</strong> en la parte inferior para comprender rápidamente el alcance total de los cambios (número de añadidos, eliminados y líneas totales)',
        'Para archivos complejos, usa la funcionalidad de búsqueda para encontrar secciones o cambios específicos dentro del código comparado'
      ]
    },
    conclusion: "El Comparador de Código simplifica significativamente la tarea muchas veces compleja de identificar y entender los cambios. Proporcionando representaciones visuales claras de las diferencias entre archivos de texto, esta herramienta ahorra tiempo valioso a desarrolladores y profesionales técnicos durante la depuración, revisiones de código y gestión de versiones. Ya sea que estés rastreando cambios en una base de código grande, revisando el trabajo de un compañero o intentando identificar cuándo y dónde se introdujo un bug, esta utilidad ofrece la precisión y flexibilidad necesarias para comprender código en evolución. Su uso regular puede mejorar tu flujo de trabajo, elevar la calidad del código mediante revisiones efectivas y ayudarte a mantener la consistencia entre versiones del proyecto."
  }
};