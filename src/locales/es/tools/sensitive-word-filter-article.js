export default {
  title: 'Filtro de Palabras Sensibles: Herramienta Integral de Filtrado de Contenido Textual',
  functionality: {
    title: 'Funcionalidad y Características',
    description: 'El <strong>Filtro de Palabras Sensibles</strong> es una herramienta poderosa de procesamiento de texto diseñada para identificar y eliminar contenido sensible, inapropiado o ofensivo de su texto. Utiliza algoritmos avanzados de coincidencia de patrones para detectar palabras y frases potencialmente problemáticas, y luego las reemplaza o elimina automáticamente según sus preferencias. Esta herramienta de filtrado de texto soporta diccionarios personalizados, múltiples modos de filtrado y proporciona análisis estadístico detallado del contenido sensible detectado.'
  },
  useCases: {
    title: 'Aplicaciones Prácticas y Escenarios de Uso',
    list: [
      '<strong>Moderación de Contenido para Sitios Web</strong>: Revise automáticamente contenido generado por usuarios como comentarios, publicaciones en foros y reseñas para mantener un entorno en línea seguro y respetuoso.',
      '<strong>Revisión de Material Educativo</strong>: Asegure que los materiales didácticos y trabajos de estudiantes estén libres de lenguaje inapropiado para plataformas educativas o aulas.',
      '<strong>Filtrado en Comunicaciones de Atención al Cliente</strong>: Revise comunicaciones salientes para verificar que mantengan estándares profesionales y eviten lenguaje ofensivo.',
      '<strong>Gestión de Redes Sociales</strong>: Revise y mejore contenido antes de publicarlo en redes sociales para prevenir violaciones de políticas.',
      '<strong>Preparación de Datos de Texto</strong>: Limpie conjuntos de datos de texto para aprendizaje automático y análisis eliminando lenguaje ofensivo o sesgado.',
      '<strong>Cumplimiento en Comunicaciones Corporativas</strong>: Verifique que las comunicaciones internas y externas cumplan con políticas corporativas de lenguaje y estándares profesionales.'
    ]
  },
  faq: {
    title: 'Preguntas Frecuentes sobre el Filtrado de Palabras Sensibles',
    items: [
      {
        question: '¿Qué tan precisa es la detección de palabras sensibles?',
        answer: 'El sistema de <strong>detección de palabras sensibles</strong> utiliza algoritmos precisos de coincidencia de patrones con alta exactitud. Sin embargo, el filtrado basado en contexto (entender el significado detrás de las palabras) sigue siendo complejo. La herramienta le permite revisar las palabras detectadas y personalizar el diccionario para mejorar la precisión según sus necesidades específicas.'
      },
      {
        question: '¿Puedo crear y guardar mis propias bibliotecas de palabras personalizadas?',
        answer: 'Sí, la función de <strong>diccionario personalizado</strong> le permite añadir sus propias palabras sensibles específicas para sus necesidades de contenido. Puede agregar fácilmente palabras al filtro y estas se aplicarán durante el proceso de filtrado.'
      },
      {
        question: '¿Qué modos de filtrado están disponibles?',
        answer: 'La herramienta ofrece varios <strong>modos de filtrado de texto</strong>: reemplazar palabras sensibles con asteriscos (*), usar caracteres personalizados de reemplazo, o eliminar completamente las palabras sensibles del texto. Puede seleccionar el modo que mejor se ajuste a sus necesidades.'
      },
      {
        question: '¿Funciona esta herramienta con diferentes idiomas?',
        answer: 'Sí, el <strong>filtro de palabras multilingüe</strong> funciona con varios idiomas, aunque su efectividad puede variar según el idioma. La herramienta se enfoca principalmente en la coincidencia de patrones de caracteres, lo cual funciona en distintos sistemas de escritura.'
      },
      {
        question: '¿Cómo puedo procesar grandes cantidades de texto?',
        answer: 'Para <strong>filtrado masivo de texto</strong>, simplemente pegue su contenido en el área de entrada. La herramienta está optimizada para manejar grandes volúmenes de texto eficientemente, aunque textos extremadamente largos pueden tomar más tiempo de procesamiento. Para documentos muy extensos, considere procesarlos por secciones.'
      }
    ]
  },
  tutorial: {
    title: 'Guía Paso a Paso para Usar el Filtro de Palabras Sensibles',
    steps: [
      '<strong>Ingresar su texto</strong>: Comience escribiendo o pegando el texto que desea filtrar en el área de entrada.',
      '<strong>Configurar opciones de filtro</strong>: Seleccione el modo de filtrado deseado (reemplazar con asteriscos, carácter personalizado o eliminar palabras).',
      '<strong>Personalice su biblioteca de palabras sensibles</strong> (opcional): Agregue palabras específicas que desee detectar y filtrar haciendo clic en el botón "Añadir Palabra".',
      '<strong>Inicie el filtrado</strong>: Haga clic en el botón "Iniciar Filtro" para procesar su texto y detectar contenido sensible.',
      '<strong>Revise los resultados</strong>: Examine el texto filtrado en la pestaña "Resultado Filtrado" y consulte el desglose estadístico en la pestaña "Informe de Detección".',
      '<strong>Copie o guarde los resultados</strong>: Copie el texto filtrado al portapapeles para usarlo en sus aplicaciones o documentos.'
    ]
  }
}
