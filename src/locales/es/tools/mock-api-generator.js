export default {
  name: 'Mock API Generator',
  description: 'Genera automáticamente una API de simulación basada en especificaciones OpenAPI',
  options: {
    version: 'Versión de OpenAPI',
    format: 'Formato de salida',
    includeExamples: 'Incluir respuestas de ejemplo',
    responseDynamism: 'Dinamismo de respuesta',
    responseType: 'Tipo de Respuesta',
    arrayLength: 'Longitud del Array',
    responseFormat: 'Formato de Respuesta'
  },
  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },
  actions: {
    generate: 'Generar Mock',
    preview: 'Previsualizar API',
    clear: 'Limpiar',
    copy: 'Copiar Código',
    download: 'Descargar',
    uploadSpec: 'Subir Especificación OpenAPI',
    uploadJava: 'Subir Clase Java',
    generateJson: 'Generar JSON',
    generateBuilder: 'Generar Constructor',
    format: 'Formato'
  },
  messages: {
    copied: '¡Copiado al portapapeles!',
    generationSuccess: 'API de simulación generada con éxito',
    generationError: 'Error al generar la API de simulación',
    specRequired: 'Proporcione una especificación OpenAPI',
    fileUploaded: 'Archivo subido',
    parseError: 'Error al analizar la clase Java, asegúrese de que el formato del archivo sea correcto'
  },
  help: {
    uploadHint: 'Sube archivos .java para analizar automáticamente la estructura de la clase. Todavía no se admiten propiedades de objetos multinivel.'
  },
  fields: {
    title: 'Definiciones de campo',
    addField: 'Agregar Campo',
    addChildField: 'Agregar Campo Secundario',
    fieldName: 'Nombre del Campo'
  },
  fieldTypes: {
    string: 'Cadena',
    number: 'Número',
    boolean: 'Booleano',
    date: 'Fecha',
    name: 'Nombre',
    email: 'Correo Electrónico',
    phone: 'Teléfono',
    address: 'Dirección',
    id: 'ID',
    image: 'URL de Imagen',
    array: 'Array',
    object: 'Objeto'
  },
  array: {
    itemType: 'Tipo de Elemento del Array',
    arrayFields: 'Campos del Elemento del Array'
  },
  object: {
    childFields: 'Campos Secundarios'
  },
  responseTypes: {
    object: 'Objeto Individual',
    array: 'Array de Objetos',
    custom: 'Estructura Personalizada'
  },
  responseFormats: {
    dataOnly: 'Solo Datos',
    standard: 'Respuesta REST estándar (código, datos, mensaje)'
  },
  placeholder: {
    output: '// Aquí se mostrarán los datos simulados generados'
  },
  article: {
    title: "Entendiendo la Generación de APIs de Simulación para el Desarrollo Frontend",
    overview: {
      title: "¿Qué es un Generador de APIs de Simulación?",
      content: "Un <strong>Generador de APIs de Simulación</strong> es una herramienta especializada que crea puntos finales de API simulados y respuestas basadas en especificaciones OpenAPI o definiciones de campos personalizados. Esta poderosa utilidad de desarrollo ayuda a los desarrolladores frontend a trabajar de forma independiente de los equipos backend proporcionando estructuras de datos realistas que imitan el comportamiento de APIs reales.<br><br>El Generador de APIs de Simulación crea puntos finales funcionales que devuelven datos estructurados consistentemente según sus especificaciones. Esto permite que el desarrollo frontend proceda sin esperar por la implementación real del backend, acelerando significativamente el proceso de desarrollo y permitiendo flujos de trabajo paralelos."
    },
    useCases: {
      title: "Casos de Uso Comunes para la Generación de APIs de Simulación",
      items: [
        {
          title: "Desarrollo Frontend Antes de Completar el Backend",
          description: "Cuando la API backend aún está en desarrollo o no se ha implementado, una API de simulación permite a los desarrolladores frontend comenzar a construir componentes de interfaz con estructuras de datos realistas, evitando cuellos de botella en el desarrollo."
        },
        {
          title: "Prototipo y Prueba de IU",
          description: "Crear prototipos rápidos o probar componentes de interfaz con conjuntos de datos controlados, permitiendo a diseñadores y desarrolladores validar interfaces con datos realistas sin conectarse a servicios backend reales."
        },
        {
          title: "Desarrollo Sin Conexión",
          description: "Permite a los desarrolladores trabajar sin conexión o en entornos sin acceso a APIs de producción o preproducción proporcionando un servidor de API de simulación local que simula las respuestas reales de la API."
        },
        {
          title: "Prueba de Casos Límite",
          description: "Generar respuestas de API específicas que repliquen casos límite o condiciones de error que podrían ser difíciles de activar en un entorno backend real, permitiendo pruebas exhaustivas de manejo de errores y condiciones de borde."
        },
        {
          title: "Prueba de Rendimiento",
          description: "Crear APIs de simulación que simulen diferentes tiempos de respuesta o tamaños de carga útil para probar cómo los componentes frontend manejan diversos escenarios de rendimiento, desde condiciones óptimas hasta condiciones degradadas."
        },
        {
          title: "Entornos de Demostración",
          description: "Construir entornos de demostración totalmente funcionales que no requieran conectarse a servicios backend reales, perfectos para demostraciones de ventas, capacitación o exposiciones."
        }
      ]
    },
    guide: {
      title: "Cómo Usar el Generador de APIs de Simulación",
      intro: "Siga estos pasos para crear y usar eficazmente APIs de simulación para su flujo de trabajo de desarrollo:",
      steps: [
        {
          title: "Elija Su Método de Entrada",
          description: "Comience seleccionando cómo desea definir su estructura de API. Puede cargar una especificación OpenAPI (recomendado para mantener la coherencia con APIs reales), cargar archivos de clase Java para extraer automáticamente estructuras de datos, o definir manualmente campos y tipos a través de la interfaz."
        },
        {
          title: "Defina Su Estructura de Datos",
          description: "Si no está usando una especificación OpenAPI, defina la estructura de sus datos de simulación agregando campos y estableciendo sus tipos (cadena, número, booleano, fecha, etc.). Para estructuras complejas, cree objetos anidados o arrays de objetos que coincidan con el modelo de datos de su API real."
        },
        {
          title: "Configure Opciones de Salida",
          description: "Seleccione su formato de salida preferido (JSON Server, Express.js, Mock.js o Mock Service Worker) según las necesidades de su proyecto. Ajuste opciones adicionales como dinamismo de respuesta (qué aleatorios deben ser los datos generados), longitud del array y formato de respuesta."
        },
        {
          title: "Genere el Código de la API de Simulación",
          description: "Haga clic en el botón \"Generar Mock\" para crear el código de la API de simulación basado en sus especificaciones. La herramienta procesará su entrada y producirá código en el formato seleccionado que simule los puntos finales y respuestas definidos de la API."
        },
        {
          title: "Revise y Copie el Código Generado",
          description: "Examine el código generado de la API de simulación para asegurarse de que cumple con sus requisitos. Puede copiar el código en su portapapeles o descargarlo como archivo para integrarlo con su proyecto."
        },
        {
          title: "Integre con Su Entorno de Desarrollo",
          description: "Dependiendo del formato que haya elegido, integre el código generado de la API de simulación con su entorno de desarrollo. Esto podría implicar configurar un servidor JSON, agregar rutas Express.js, configurar Mock.js o implementar Mock Service Worker en su aplicación."
        },
        {
          title: "Conecte Su Aplicación Frontend",
          description: "Actualice su aplicación frontend para que se conecte a los puntos finales de la API de simulación en lugar de a los servicios backend reales. Esto típicamente implica cambiar la URL base para las solicitudes de API para apuntar a su servidor de simulación local o interceptor."
        }
      ]
    },
    bestPractices: {
      title: "Mejores Prácticas para el Desarrollo de APIs de Simulación",
      intro: "Siga estas recomendaciones para crear APIs de simulación efectivas y mantenibles:",
      items: [
        "Use especificaciones OpenAPI siempre que sea posible para asegurar que su API de simulación refleje con precisión la estructura de la API real",
        "Refleje exactamente la estructura de respuesta que utilizará la API real, incluyendo formatos de paginación, respuestas de error y metadatos",
        "Incluya casos límite realistas en sus datos de simulación, como arrays vacíos, valores nulos y varios estados de error",
        "Para datos dinámicos como fechas o IDs, use funciones en lugar de valores estáticos para simular comportamiento realista",
        "Versione sus APIs de simulación junto con su código frontend para mantener compatibilidad histórica durante el desarrollo",
        "Considere usar variables de entorno para alternar entre APIs de simulación y reales dependiendo del contexto de desarrollo",
        "Documente cualquier desviación entre APIs de simulación y reales para evitar confusiones durante la integración",
        "Implemente simulación de latencia consistente para probar cómo su interfaz maneja estados de carga",
        "Automatice la generación de servicios de simulación en su tubería de construcción para asegurar que se mantengan sincronizados con cambios en la API",
        "Incluya lógica de validación en su API de simulación para simular las mismas restricciones que aplicará la API real"
      ]
    },
    faq: {
      title: "Preguntas Frecuentes Sobre la Generación de APIs de Simulación",
      items: [
        {
          question: "¿Cuál es la diferencia entre los formatos de salida disponibles?",
          answer: "JSON Server proporciona una API REST simple basada en un archivo JSON, ideal para necesidades básicas. Express.js ofrece más personalización y control de enrutamiento para escenarios complejos. Mock.js se integra directamente con JavaScript para interceptar solicitudes AJAX en el navegador. Mock Service Worker (MSW) utiliza Service Workers para interceptar solicitudes a nivel de red, permitiendo cambiar sin problemas entre APIs de simulación y reales sin cambiar su código."
        },
        {
          question: "¿Puedo crear respuestas de simulación dinámicas que cambien cada vez?",
          answer: "Sí, la opción 'Dinamismo de respuesta' controla cuánto variará su datos de simulación. Un dinamismo bajo significa respuestas consistentes con cada solicitud, mientras que un dinamismo alto genera diferentes valores dentro de los tipos de datos definidos. También puede implementar lógica personalizada en formatos Express.js o MSW para un comportamiento dinámico más complejo."
        },
        {
          question: "¿Cómo manejo autenticación en APIs de simulación?",
          answer: "Para JSON Server, puede usar el complemento json-server-auth. Con Express.js, implemente middleware para verificar tokens de autenticación. Para Mock.js y MSW, puede interceptar solicitudes de autenticación y devolver tokens apropiados o errores según las credenciales proporcionadas, simulando el flujo real de autenticación."
        },
        {
          question: "¿Puedo simular errores de red o respuestas lentas?",
          description: "Sí. En Express.js, puede usar middleware para introducir aleatoriamente demoras o errores. Con MSW, puede usar la función ctx.delay() para añadir latencia o devolver respuestas de error. Para JSON Server, puede usar la bandera --delay para añadir un retraso fijo a todas las respuestas."
        },
        {
          question: "¿Cómo cambio entre APIs de simulación y reales en producción?",
          answer: "Para MSW, use variables de entorno para iniciar condicionalmente el service worker. Para otros métodos, use un valor de configuración para cambiar la URL base de la API o implemente un proxy que enrute las solicitudes en consecuencia. Esto le permite cambiar fácilmente entre puntos finales de simulación y reales durante el desarrollo y las pruebas."
        },
        {
          question: "¿Puedo generar datos que parezcan realistas en lugar de texto lorem ipsum?",
          answer: "Sí, el Generador de APIs de Simulación incluye tipos de campo especializados como 'nombre', 'correo electrónico', 'teléfono', 'dirección' y 'URL de imagen' que generan datos realistas para estos campos comunes. Para escenarios avanzados, considere usar bibliotecas como Faker.js con los formatos de salida Express.js o MSW."
        },
        {
          question: "¿Cómo manejo cargas de archivos en APIs de simulación?",
          answer: "Para la salida Express.js, puede implementar rutas que acepten solicitudes multipart/form-data y devuelvan respuestas adecuadas. Con MSW, puede interceptar solicitudes de carga de archivos y simular el procesamiento antes de devolver una respuesta exitosa. Esto le permite probar componentes de interfaz para carga de archivos sin procesamiento real de archivos."
        }
      ]
    },
    advancedTips: {
      title: "Técnicas Avanzadas de Integración de APIs de Simulación",
      intro: "Lleve su implementación de API de simulación al siguiente nivel con estas técnicas avanzadas de integración:",
      items: [
        "Implemente comportamiento con estado en su API de simulación para simular persistencia entre solicitudes, como devolver elementos recién creados en solicitudes GET subsiguientes",
        "Combine validación OpenAPI con su servidor de simulación para asegurar que las solicitudes frontend cumplan con los requisitos de la especificación de la API",
        "Cree gestores de escenarios que le permitan cambiar entre diferentes conjuntos de datos predefinidos para probar varios casos de negocio",
        "Implemente paginación realista con metadatos adecuados y enlaces para probar eficazmente los controles de paginación de su interfaz",
        "Use servidores de simulación con GraphQL para simular respuestas de consulta complejas manteniendo la seguridad de tipos",
        "Cree un enfoque híbrido que proxi algunas solicitudes a servicios backend reales mientras simula otras que aún no están disponibles",
        "Implemente simulaciones de websocket para probar funcionalidad en tiempo real sin una implementación backend",
        "Configure pruebas de integración continua que usen su API de simulación para validar automáticamente el comportamiento frontend",
        "Cree un servicio de catálogo de APIs de simulación que permita a los desarrolladores explorar y seleccionar puntos finales disponibles en toda su organización",
        "Implemente plantillas de respuesta para cambiar dinámicamente las respuestas de simulación basándose en parámetros o encabezados de solicitud"
      ]
    }
  }
}