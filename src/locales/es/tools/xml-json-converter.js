export default {
  name: 'Conversor XML/JSON',
  title: 'Conversor XML ↔ JSON',
  description: 'Convertir entre formatos XML y JSON con opciones avanzadas y configuraciones personalizadas',
  conversion: {
    direction: 'Dirección de Conversión',
    xmlToJson: 'XML a JSON',
    jsonToXml: 'JSON a XML'
  },
  options: {
    title: 'Opciones de Conversión',
    show: 'Mostrar Opciones',
    hide: 'Ocultar Opciones',
    xmlToJson: {
      ignoreAttributes: 'Ignorar Atributos',
      ignoreAttributesHint: 'Deshabilite para preservar información de atributos XML en JSON',
      parseAttributeValue: 'Analizar Valores de Atributos',
      parseAttributeValueHint: 'Convertir números, booleanos, etc. en atributos a sus tipos reales en lugar de cadenas',
      ignoreDeclaration: 'Ignorar Declaración XML',
      ignoreDeclarationHint: 'Ignorar declaraciones como <?xml version="1.0"?>',
      parseTagValue: 'Analizar Valores de Etiquetas',
      parseTagValueHint: 'Convertir números, booleanos, etc. en contenido de etiquetas a sus tipos reales en lugar de cadenas',
      trimValues: 'Recortar Espacios',
      attributePrefix: 'Prefijo de Atributo',
      attributePrefixPlaceholder: 'Ejemplos: arroba, guion_bajo, attr_',
      attributePrefixHint: 'Prefijo para atributos XML en JSON, por defecto es arroba (@)'
    },
    jsonToXml: {
      format: 'Formato XML',
      formatHint: 'Habilitar sangrado y saltos de línea para mejor legibilidad',
      indentBy: 'Añadir Sangrado (2 espacios)',
      addDeclaration: 'Añadir Declaración XML',
      addDeclarationHint: 'Añadir <?xml version="1.0" encoding="UTF-8"?> al inicio',
      rootName: 'Nombre del Elemento Raíz (Opcional)',
      rootNamePlaceholder: 'Por ejemplo: raiz, datos, xml',
      rootNameHint: 'Nombre del elemento raíz a usar cuando el JSON tenga múltiples claves en el nivel superior',
      attributePrefix: 'Reconocimiento de Prefijo de Atributo',
      attributePrefixPlaceholder: 'Ejemplos: arroba, guion_bajo, attr_',
      attributePrefixHint: 'Prefijo usado para identificar atributos XML en JSON, por defecto es arroba (@)'
    }
  },
  buttons: {
    convert: 'Convertir',
    swap: 'Intercambiar Contenido',
    clear: 'Limpiar',
    loadExample: 'Cargar Ejemplo'
  },
  input: {
    xmlInput: 'Entrada XML',
    jsonInput: 'Entrada JSON',
    placeholder: {
      xml: 'Ingrese XML...',
      json: 'Ingrese JSON...'
    }
  },
  output: {
    xmlResult: 'Resultado XML',
    jsonResult: 'Resultado JSON',
    copy: 'Copiar'
  },
  stats: {
    title: 'Estadísticas de Conversión',
    inputSize: 'Tamaño de Entrada',
    outputSize: 'Tamaño de Salida',
    sizeChange: 'Cambio de Tamaño',
    conversionTime: 'Tiempo de Conversión'
  },
  help: {
    title: 'Ayuda de Uso',
    show: 'Mostrar Ayuda',
    hide: 'Ocultar Ayuda',
    about: {
      title: 'Sobre XML y JSON',
      content: 'XML (eXtensible Markup Language) es un lenguaje de marcas ampliamente utilizado para archivos de configuración, intercambio de datos y servicios web. JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos fácil de leer y escribir para humanos, y fácil de analizar y generar para máquinas.'
    },
    xmlToJson: {
      title: 'Consideraciones al Convertir XML a JSON',
      items: [
        'Los atributos XML se convierten en claves con prefijo arroba por defecto',
        'El contenido de texto XML se representa con la clave #text por defecto',
        'Activando "Analizar Valores de Etiqueta", los números, booleanos, etc. se convierten a tipos reales en JSON',
        'Varias etiquetas con el mismo nombre se convierten automáticamente en arrays en JSON'
      ]
    },
    jsonToXml: {
      title: 'Consideraciones al Convertir JSON a XML',
      items: [
        'Las claves con prefijo arroba se tratan como atributos XML por defecto',
        'Los arrays en JSON crean múltiples etiquetas con el mismo nombre en XML',
        'Objetos JSON complejos generan estructuras XML jerárquicas',
        'Múltiples claves en el nivel superior sin nombre de elemento raíz especificado generarán múltiples elementos raíz en XML'
      ]
    }
  },
  errors: {
    xmlParse: 'Error al analizar XML: {0}',
    jsonParse: 'Error al analizar JSON: {0}',
    xmlGeneration: 'Error al generar XML: {0}',
    emptyObject: 'El objeto JSON está vacío o no es válido',
    conversion: 'Error durante la conversión: {0}'
  },
  alerts: {
    copied: '¡Copiado al portapapeles!'
  },
  article: {
    title: "Conversor XML a JSON: Transforme Sus Estructuras de Datos Sin Problemas",
    features: {
      title: "Entendiendo la Conversión entre XML y JSON",
      description: "El <strong>Conversor XML/JSON</strong> es una herramienta poderosa diseñada para facilitar la transformación entre dos de los formatos más utilizados de <strong>intercambio de datos</strong> en desarrollo web e integración de sistemas. Este <strong>conversor bidireccional</strong> permite convertir <strong>XML a JSON</strong> y <strong>JSON a XML</strong> manteniendo la integridad estructural de sus datos.<br><br>Nuestro <strong>analizador XML/JSON</strong> proporciona opciones extensas de personalización para manejar atributos, declaraciones y estructuras anidadas. Para la <strong>conversión de XML a JSON</strong>, puede configurar prefijos de atributos, controlar cómo se analizan los valores de las etiquetas y determinar cómo se maneja el espacio en blanco. Al realizar la <strong>transformación de JSON a XML</strong>, puede especificar preferencias de formato, añadir declaraciones XML y definir nombres de elementos raíz para obtener una salida correctamente estructurada. Este <strong>conversor de formatos de datos</strong> asegura una representación precisa de estructuras jerárquicas complejas en ambos formatos.",
      useCases: {
        title: "Aplicaciones Comunes para la Conversión entre XML y JSON",
        items: [
          "Desarrolladores de APIs que necesiten convertir entre servicios web SOAP basados en XML y APIs REST basados en JSON para garantizar compatibilidad entre diferentes puntos de integración",
          "Desarrolladores frontend que transformen archivos de configuración XML a JSON para su uso más sencillo en aplicaciones JavaScript y frameworks modernos",
          "Ingenieros backend trabajando con sistemas heredados que usan XML mientras implementan nuevos servicios que requieren formato JSON",
          "Especialistas en integración de datos mapeando entre distintos formatos de sistema durante procesos ETL (Extracto, Transformación, Carga)",
          "Aplicaciones de web scraping que extraen datos XML (como feeds RSS) y los necesitan convertir a JSON para almacenamiento o análisis",
          "Desarrolladores de apps móviles consumiendo datos XML desde sistemas empresariales y convirtiéndolos a JSON para un procesamiento más eficiente en el cliente"
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre la Conversión XML-JSON",
      items: [
        {
          question: "¿Puede el conversor procesar estructuras anidadas complejas en ambos formatos?",
          answer: "Sí, nuestro analizador XML/JSON soporta completamente estructuras anidadas complejas en ambas direcciones. El conversor mantiene con precisión las relaciones jerárquicas, manejando arrays, objetos y contenido mixto. Al convertir de XML a JSON, los elementos anidados se convierten en objetos anidados, y los elementos repetidos se transforman automáticamente en arrays. Al convertir de JSON a XML se preservan los objetos anidados como elementos hijo, y los arrays se representan como elementos repetidos con el mismo nombre de etiqueta. Esta preservación de estructura es esencial para trabajar con modelos de datos sofisticados y archivos de configuración en cualquiera de los dos formatos."
        },
        {
          question: "¿Cómo maneja la herramienta caracteres especiales y codificaciones?",
          answer: "El conversor XML/JSON gestiona automáticamente los caracteres especiales y cuestiones de codificación en ambas direcciones. Al procesar XML, decodifica correctamente entidades XML (como &amp; para &, < para <) y maneja secciones CDATA para preservar el formato. Durante la conversión de JSON a XML, la herramienta codifica los caracteres especiales como entidades XML adecuadas para asegurar una salida XML válida. El conversor también mantiene compatibilidad UTF-8 durante todo el proceso, manejando correctamente caracteres internacionales, símbolos y emojis en ambos formatos, lo que lo hace adecuado para contenido multilingüe y aplicaciones globales."
        },
        {
          question: "¿Qué ocurre con los comentarios XML durante la conversión a JSON?",
          answer: "Como JSON no soporta nativamente comentarios, los comentarios XML generalmente se eliminan durante la conversión a JSON. Sin embargo, nuestro conversor XML/JSON ofrece una opción opcional para preservar los comentarios convirtiéndolos en propiedades especiales en JSON (por ejemplo, como campos \"__comentario\") si necesita mantener esta información. Esto brinda flexibilidad para escenarios donde los comentarios contienen documentación importante o instrucciones de procesamiento que deben preservarse incluso al transformar entre formatos. Puede personalizar este comportamiento a través del panel de opciones avanzadas en la interfaz del conversor."
        },
        {
          question: "¿Cómo puedo manejar espacios de nombres XML durante el proceso de conversión?",
          answer: "El conversor XML/JSON proporciona opciones para manejar espacios de nombres XML durante la conversión. Por defecto, los espacios de nombres se incluyen en los nombres de los elementos con sus prefijos cuando se convierten a JSON. Por ejemplo, '<ns:elemento xmlns:ns=\"namespace\">valor</ns:elemento>' se convertiría en JSON con el prefijo del espacio de nombres preservado. Puede personalizar este comportamiento mediante las opciones del conversor, eligiendo ignorar los espacios de nombres completamente, preservarlos en un formato específico o mantenerlos como propiedades separadas en la estructura JSON resultante según sus requerimientos particulares de integración."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Usar el Conversor XML-JSON",
      steps: [
        "Seleccione la dirección deseada usando los botones de radio en la parte superior de la herramienta: elija 'XML a JSON' para convertir marcado XML a formato JSON, o 'JSON a XML' para el proceso inverso",
        "Haga clic en 'Mostrar Opciones' para acceder a configuraciones avanzadas que personalicen el proceso de conversión: para XML a JSON configure el manejo de atributos y opciones de análisis; para JSON a XML establezca preferencias de formato y opciones de declaración XML",
        "Ingrese sus datos fuente en el campo de entrada a la izquierda del conversor o utilice el botón 'Cargar Ejemplo' para ver cómo funciona la herramienta con datos predefinidos",
        "Haga clic en el botón 'Convertir' para procesar sus datos - la herramienta transformará sus datos y mostrará el resultado en el campo de salida a la derecha",
        "Revise la salida convertida y, si es necesario, ajuste sus opciones de conversión para afinar los resultados según sus requisitos específicos",
        "Haga clic en el botón 'Copiar' junto al campo de salida para copiar el resultado al portapapeles y usarlo en sus aplicaciones o documentos",
        "También puede utilizar el botón 'Intercambiar Contenido' para invertir el proceso, tomando el resultado actual y colocándolo como entrada para convertir en la dirección opuesta"
      ]
    },
    conclusion: "El Conversor XML/JSON proporciona una solución robusta para transformar datos entre estos dos formatos fundamentales en informática moderna. Ya sea que esté integrando distintos sistemas, modernizando aplicaciones heredadas o optimizando datos para procesamiento en el cliente, esta herramienta le ahorra la complejidad y posibles errores de conversión manual. Con sus opciones completas para manejar atributos, formato y elementos estructurales, puede asegurar que sus datos mantengan su integridad y significado al cruzar fronteras de formato. Al simplificar la transformación entre XML y JSON, este conversor ayuda a cerrar la brecha entre distintas tecnologías y estándares, permitiendo sistemas de software más flexibles e interoperables."
  }
}