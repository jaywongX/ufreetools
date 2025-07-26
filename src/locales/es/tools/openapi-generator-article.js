export default {
  title: "OpenAPI a TypeScript: Automatizando la generación de clientes API",
  overview: {
    title: "Entendiendo el generador de OpenAPI a TypeScript",
    content: "El <strong>generador de cliente de OpenAPI a TypeScript</strong> es una herramienta especializada que convierte automáticamente especificaciones OpenAPI (anteriormente conocidas como Swagger) en interfaces TypeScript y código cliente API completamente funcional. Esta transformación agiliza el desarrollo frontend asegurando seguridad de tipos y eliminando la necesidad de codificar manualmente integraciones API.<br><br>Las especificaciones OpenAPI sirven como un contrato estandarizado entre sus servicios frontend y backend, describiendo endpoints disponibles, parámetros de solicitud, estructuras de respuesta y modelos de datos. Al aprovechar este generador, los desarrolladores pueden enfocarse en construir funciones en lugar de mantener código de integración API, mientras se benefician del sistema de tipado fuerte de TypeScript para detectar posibles errores en tiempo de compilación en lugar de en tiempo de ejecución."
  },
  useCases: {
    title: "Casos de uso comunes para la generación de OpenAPI a TypeScript",
    items: [
      {
        title: "Desarrollo frontend para APIs complejas",
        description: "Cuando trabaja con APIs backend grandes o complejas, codificar manualmente interfaces cliente se vuelve consumidor de tiempo y propenso a errores. Este generador crea interfaces y código cliente en TypeScript precisos que coinciden perfectamente con su especificación API, asegurando consistencia entre frontend y backend."
      },
      {
        title: "Arquitectura de microservicios",
        description: "En entornos de microservicios con múltiples servicios API, el generador facilita la integración rápida con cada servicio. A medida que evolucionan los servicios, simplemente regenere el cliente TypeScript desde especificaciones OpenAPI actualizadas para mantenerse sincronizado."
      },
      {
        title: "Migración de versiones de API",
        description: "Al actualizar a una nueva versión de API, genere clientes TypeScript para ambas versiones para identificar cambios disruptivos e implementar estrategias de migración en su código frontend."
      },
      {
        title: "Incorporación de nuevos desarrolladores",
        description: "Los nuevos miembros del equipo pueden entender rápidamente las capacidades de la API examinando las interfaces TypeScript generadas, que sirven como documentación completa con toda la información de tipos."
      },
      {
        title: "Desarrollo de prototipos",
        description: "Durante el desarrollo rápido de prototipos, genere clientes TypeScript desde especificaciones OpenAPI preliminares para comenzar inmediatamente a construir componentes UI con estructuras de datos realistas, incluso antes de que la implementación backend esté completa."
      }
    ]
  },
  guide: {
    title: "Guía paso a paso para usar el generador de OpenAPI a TypeScript",
    intro: "Siga estos pasos para convertir eficazmente su especificación OpenAPI en interfaces y código cliente TypeScript:",
    steps: [
      {
        title: "Prepare su especificación OpenAPI",
        description: "Asegúrese de tener una especificación OpenAPI válida en formato JSON o YAML. La especificación debe definir sus endpoints API, parámetros de solicitud, estructuras de respuesta y modelos de datos. Puede cargar un archivo o pegar el contenido directamente en el área de texto."
      },
      {
        title: "Elija opciones de generación",
        description: "Configure las opciones de generación según sus necesidades: 'Exportar Esquemas' para crear interfaces TypeScript para todos los modelos de datos, 'Generar Código Cliente' para producir métodos cliente API, 'Agregar Comentarios' para incluir documentación en el código generado y 'Usar Enums' para crear enums de TypeScript para uniones literales de cadenas."
      },
      {
        title: "Genere el código TypeScript",
        description: "Haga clic en el botón 'Generar código TypeScript' para procesar su especificación OpenAPI. La herramienta analizará la especificación y producirá interfaces y código cliente TypeScript basado en sus opciones seleccionadas."
      },
      {
        title: "Revise el código generado",
        description: "Examine la salida para asegurarse de que se ajusta a sus expectativas. El código generado incluye interfaces para tipos de solicitud/respuesta y una clase cliente con métodos para cada endpoint API."
      },
      {
        title: "Copie o descargue el resultado",
        description: "Use el botón 'Copiar código' para copiar el TypeScript generado al portapapeles, o 'Descargar código' para guardarlo como un archivo .ts. Luego puede integrar este código en su proyecto TypeScript."
      },
      {
        title: "Integre con su proyecto",
        description: "Importe el cliente generado en su código de aplicación. Inicialice el cliente con su URL base de API y cualquier encabezado requerido, luego use los métodos con tipado fuerte para hacer llamadas API."
      },
      {
        title: "Actualice cuando cambie la API",
        description: "Cada vez que su API cambie y se actualice la especificación OpenAPI, regenere el cliente TypeScript y actualícelo en su proyecto. Considere automatizar este proceso en su canalización de construcción para asegurar que su frontend siempre use código cliente API actualizado."
      }
    ]
  },
  bestPractices: {
    title: "Prácticas recomendadas para especificaciones OpenAPI",
    intro: "Siga estas prácticas recomendadas para crear especificaciones OpenAPI de alta calidad que generen código TypeScript óptimo:",
    items: [
      "Use IDs de operación descriptivos para cada endpoint para crear nombres de método significativos en el cliente generado",
      "Proporcione descripciones detalladas para esquemas, propiedades, parámetros y respuestas para generar comentarios útiles en TypeScript",
      "Use convenciones de nomenclatura consistentes para esquemas y propiedades para crear interfaces TypeScript predecibles",
      "Defina componentes reutilizables en la sección 'components' para evitar duplicados y promover la reutilización de código",
      "Especifique tipos de datos precisos para todas las propiedades para generar tipos TypeScript exactos",
      "Incluya ejemplos en su especificación OpenAPI para ayudar a los desarrolladores a comprender las estructuras de datos esperadas",
      "Use valores enum para propiedades con un conjunto fijo de valores posibles para crear enums o tipos unión en TypeScript",
      "Organice endpoints lógicamente agrupando operaciones relacionadas con etiquetas apropiadas",
      "Versione su API e indique claramente los cambios disruptivos para facilitar estrategias de migración frontend",
      "Valide su especificación OpenAPI usando linters o validadores antes de generar código TypeScript"
    ]
  },
  faq: {
    title: "Preguntas frecuentes sobre la generación de OpenAPI a TypeScript",
    items: [
      {
        question: "¿Cuál es la diferencia entre OpenAPI y Swagger?",
        answer: "OpenAPI es el nombre actual para el estándar de especificación, mientras que Swagger era su nombre original. OpenAPI 3.0+ es la evolución moderna de lo que anteriormente se conocía como Swagger 2.0. Este generador soporta tanto OpenAPI 3.x como especificaciones Swagger 2.0, aunque se recomienda OpenAPI 3.x por sus características mejoradas y mejor generación de código TypeScript."
      },
      {
        question: "¿Puedo personalizar el código TypeScript generado?",
        answer: "Sí, el generador proporciona varias opciones de personalización: puede elegir exportar solo esquemas, generar código cliente, agregar comentarios de documentación y usar enums de TypeScript en lugar de tipos unión de cadenas. Para personalizaciones más extensivas, puede modificar manualmente el código generado, aunque tenga en cuenta que regenerarlo sobrescribirá estos cambios."
      },
      {
        question: "¿Cómo manejo la autenticación en el cliente generado?",
        answer: "El cliente generado acepta encabezados personalizados en su constructor, donde puede proporcionar tokens de autenticación. Para flujos de autenticación más complejos (como OAuth), podría necesitar extender el cliente generado con lógica adicional o crear un envoltorio que maneje la renovación de tokens y otras preocupaciones de autenticación."
      },
      {
        question: "¿Puedo usar esto con React, Vue, Angular u otros frameworks?",
        answer: "Sí, el cliente TypeScript generado es independiente del framework y puede usarse con cualquier framework JavaScript o TypeScript. En React, podría envolver el cliente en hooks personalizados; en Vue, podría crear composables; y en Angular, podría extender el cliente como un servicio inyectable."
      },
      {
        question: "¿Cómo manejo cargas de archivos con el cliente generado?",
        answer: "Para cargas de archivos definidas en su especificación OpenAPI (usando tipo de contenido 'multipart/form-data'), el generador crea firmas de método apropiadas. Necesitará construir objetos FormData para el cuerpo de la solicitud al llamar a estos métodos. Asegúrese de que su especificación OpenAPI defina correctamente las operaciones de carga de archivos."
      },
      {
        question: "¿Qué ocurre si mi especificación OpenAPI tiene errores?",
        answer: "El generador intentará identificar problemas comunes en su especificación y proporcionar mensajes de error en consecuencia. Se recomienda validar su documento OpenAPI con validadores dedicados antes de la generación. Los errores en la especificación pueden llevar a código TypeScript incorrecto o incompleto."
      },
      {
        question: "¿Cómo mantengo el cliente TypeScript sincronizado con los cambios en la API?",
        answer: "Cada vez que su API cambie y se actualice la especificación OpenAPI, regenere el cliente TypeScript y actualícelo en su proyecto. Considere automatizar este proceso en su canalización CI/CD para asegurar que su frontend siempre use código cliente API actualizado."
      }
    ]
  },
  integrationTips: {
    title: "Consejos para integrar clientes TypeScript generados",
    intro: "Una vez que haya generado su cliente TypeScript, considere estas recomendaciones para una integración fluida con su proyecto:",
    items: [
      "Cree un módulo de cliente API dedicado en su proyecto que re-exporte el cliente generado con cualquier configuración personalizada",
      "Use patrones de inyección de dependencias para proporcionar el cliente API a través de su aplicación, haciéndolo más fácil de simular para pruebas",
      "Considere implementar interceptores de solicitudes/respuestas para preocupaciones comunes como manejo de errores, registro y autenticación",
      "Envuelva los métodos del cliente generado en funciones personalizadas que manejen casos de error específicos o transformen datos para las necesidades de su aplicación",
      "Configure la generación automática de clientes TypeScript como parte de su canalización CI/CD para mantener sincronizados frontend y backend",
      "Use variables de entorno o archivos de configuración para especificar la URL base de la API para diferentes entornos (desarrollo, prueba, producción)",
      "Agregue lógica de reintento para fallos transitorios envolviendo los métodos del cliente generado con funcionalidad de reintento",
      "Implemente caché de solicitudes para datos accedidos frecuentemente para mejorar el rendimiento y reducir llamadas API",
      "Combine los tipos generados con bibliotecas de gestión de estado como Redux, MobX o Vuex para un estado de aplicación con seguridad de tipos",
      "Considere implementar procesamiento por lotes de solicitudes o GraphQL para optimizar llamadas API si encuentra que hace muchas solicitudes pequeñas"
    ]
  }
}
