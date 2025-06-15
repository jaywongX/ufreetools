export default {
  name: 'Ejemplos de Diagramas',
  description: 'Navegue y utilice diversos ejemplos de diagramas para satisfacer diferentes necesidades de modelado',
  title: 'Ejemplos de Flujo Avanzado',
  categories: {
    title: 'Categorías',
    flowcharts: 'Flujogramas',
    uml: 'Diagramas UML',
    network: 'Diagramas de Red',
    architecture: 'Diagramas de Arquitectura',
    entity: 'Diagramas de Relación de Entidades',
    sequence: 'Diagramas de Secuencia',
    mindmaps: 'Mapas Mentales',
    gantt: 'Gráficos de Gantt',
    other: 'Otros Diagramas'
  },
  actions: {
    search: 'Buscar Ejemplos',
    filter: 'Filtrar por Categoría',
    sortBy: 'Ordenar Por',
    useExample: 'Usar Este Ejemplo',
    viewFull: 'Ver Tamaño Completo',
    copyCode: 'Copiar Código',
    addToFavorites: 'Añadir a Favoritos',
    removeFavorite: 'Eliminar de Favoritos'
  },
  sortOptions: {
    popularity: 'Popularidad',
    newest: 'Más Recientes',
    alphabetical: 'Orden Alfabético',
    complexity: 'Complejidad'
  },
  exampleDetail: {
    title: 'Detalles del Ejemplo',
    description: 'Descripción',
    syntax: 'Sintaxis',
    codeView: 'Vista de Código',
    diagramView: 'Vista del Diagrama',
    complexity: 'Complejidad',
    tags: 'Etiquetas',
    relatedExamples: 'Ejemplos Relacionados'
  },
  complexityLevels: {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado'
  },
  messages: {
    copied: 'El código ha sido copiado al portapapeles',
    copyFailed: 'Fallo en la copia, por favor cópielo manualmente',
    added: 'Agregado a favoritos',
    removed: 'Eliminado de favoritos',
    noResults: 'No hay ejemplos que coincidan con sus criterios de búsqueda',
    loading: 'Cargando ejemplos...'
  },
  filters: {
    all: 'Todas las Categorías',
    favorites: 'Solo Favoritos',
    recently: 'Vistos Recientemente'
  },
  examples: {
    softwareDevelopment: 'Flujo de Desarrollo de Software',
    projectManagement: 'Gráfico de Gantt de Gestión de Proyectos',
    userRegistration: 'Proceso de Registro de Usuarios'
  },
  exampleCodes: {
    softwareDevelopment: `graph TD
    A[Análisis de Requisitos] --> B[Diseño del Sistema]
    B --> C[Implementación de Código]
    C --> D[Pruebas Unitarias]
    D --> E(¿Prueba Pasada?)
    E -- No --> C
    E -- Sí --> F[Integración del Sistema]
    F --> G[Pruebas del Sistema]
    G --> H(¿Prueba Pasada?)
    H -- No --> F
    H -- Sí --> I[Despliegue]
    I --> J[Mantenimiento y Actualizaciones]
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style E fill:#e3f0f7,stroke:#333,stroke-width:2px
    style H fill:#e3f0f7,stroke:#333,stroke-width:2px
    style I fill:#d5f5e3,stroke:#333,stroke-width:2px
    style J fill:#d5f5e3,stroke:#333,stroke-width:2px`,
    projectManagement: `gantt
    title Plan de Desarrollo de Producto
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    section Planificación
    Investigación de Mercado           :a1, 2023-01-01, 15d
    Análisis de Requisitos      :a2, after a1, 10d
    Planificación del Producto          :a3, after a2, 5d
    section Diseño
    Diseño del Prototipo          :b1, after a3, 15d
    Diseño de la Interfaz                :b2, after b1, 10d
    Pruebas de Usuario             :b3, after b2, 5d
    section Desarrollo
    Arquitectura Backend     :c1, after b1, 20d
    Desarrollo Frontend    :c2, after b2, 15d
    Integración de API         :c3, after c1, 10d
    section Pruebas
    Pruebas Unitarias            :d1, after c2, 8d
    Pruebas de Integración     :d2, after c3, 7d
    Pruebas de Rendimiento     :d3, after d2, 5d
    section Liberación
    Revisión Interna         :e1, after d3, 5d
    Preparación para el Despliegue  :e2, after e1, 2d
    Liberación Oficial        :milestone, after e2, 0d`,
    userRegistration: `sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Database
    participant EmailService
    User->>Frontend: Llenar formulario de registro
    Frontend->>Frontend: Validación del formulario
    Frontend->>Backend: Enviar información de registro
    Backend->>Backend: Validar datos del usuario
    Backend->>Database: Verificar si el usuario existe
    Database-->>Backend: Devolver resultado de verificación
    alt El usuario ya existe
        Backend-->>Frontend: Devolver error de usuario ya existente
        Frontend-->>User: Mostrar mensaje de error
    else El usuario no existe
        Backend->>Database: Crear nuevo registro de usuario
        Backend->>EmailService: Enviar correo de verificación
        EmailService-->>User: Enviar correo con enlace de verificación
        Backend-->>Frontend: Devolver registro exitoso
        Frontend-->>User: Mostrar mensaje de registro exitoso
    end
    User->>EmailService: Hacer clic en el enlace de verificación
    EmailService->>Backend: Solicitud de verificación
    Backend->>Database: Actualizar estado del usuario como verificado
    Backend-->>User: Redirigir a la página de inicio de sesión`
  },
  article: {
    title: "Ejemplos de Diagramas: Visualice Sistemas y Procesos Complejos con Gráficos Profesionales",
    overview: {
      title: "¿Qué son los Ejemplos de Diagramas?",
      content: "La herramienta <strong>Ejemplos de Diagramas</strong> proporciona plantillas listas para usar para diversos tipos de diagramas, ayudándote a visualizar sistemas complejos, procesos y relaciones con gráficos de alta calidad profesional. En lugar de comenzar desde cero, puedes aprovechar estos ejemplos para crear rápidamente diagramas sofisticados para tus necesidades específicas.<br><br>Nuestros ejemplos de diagramas están escritos en una sintaxis estándar que puede ser renderizada por diversos herramientas de diagramación y marcos. Cada ejemplo demuestra buenas prácticas en estructura de diagramas, organización y claridad visual, asegurando que tus diagramas comuniquen eficazmente información compleja a tu audiencia.<br><br>Ya sea que estés creando documentación de arquitectura de software, planificando flujos de trabajo de proyectos o diseñando relaciones de base de datos, nuestros ejemplos de diagramas te dan un comienzo con plantillas profesionalmente elaboradas que siguen estándares de la industria y buenas prácticas de visualización."
    },
    useCases: {
      title: "Aplicaciones Prácticas de los Ejemplos de Diagramas",
      items: [
        {
          title: "Documentación de Desarrollo de Software",
          description: "Utiliza ejemplos de flujogramas y diagramas UML para documentar arquitecturas de software, relaciones de clases y flujos de procesos, haciendo más comprensibles sistemas complejos para desarrolladores, stakeholders y nuevos miembros del equipo."
        },
        {
          title: "Planificación y Gestión de Proyectos",
          description: "Implementa ejemplos de gráficos de Gantt para crear cronogramas detallados de proyectos, rastrear dependencias entre tareas, visualizar asignación de recursos y comunicar cronogramas de proyectos a stakeholders."
        },
        {
          title: "Diseño de Arquitectura del Sistema",
          description: "Aprovecha ejemplos de diagramas de arquitectura para mapear componentes del sistema, sus relaciones, flujos de datos y puntos de integración, ayudando a los equipos a planificar implementaciones y identificar posibles problemas temprano."
        },
        {
          title: "Diseño de Esquema de Base de Datos",
          description: "Adapta ejemplos de diagramas de relación de entidades para modelar estructuras de bases de datos, definir relaciones entre tablas y visualizar arquitectura de datos, haciendo más comprensibles diseños de bases de datos complejas."
        },
        {
          title: "Análisis de Flujo de Usuarios",
          description: "Modifica ejemplos de diagramas de secuencia para mapear trayectorias de usuarios a través de una aplicación, identificar posibles problemas de usabilidad y optimizar la experiencia del usuario visualizando cada paso en el proceso de interacción."
        },
        {
          title: "Modelado de Procesos Empresariales",
          description: "Personaliza ejemplos de flujogramas para documentar procesos empresariales, identificar cuellos de botella, planificar mejoras de procesos y comunicar flujos operativos a los miembros del equipo."
        },
        {
          title: "Planificación de Infraestructura de Red",
          description: "Utiliza ejemplos de diagramas de red para diseñar infraestructura de TI, planificar despliegues de red, documentar sistemas existentes y comunicar arquitecturas técnicas a stakeholders tanto técnicos como no técnicos."
        },
        {
          title: "Organización de Conocimiento y Aprendizaje",
          description: "Adapta ejemplos de mapas mentales para organizar hallazgos de investigación, estructurar materiales de aprendizaje, brainstorming de nuevas ideas y crear guías de estudio visuales que mejoren la retención de información."
        }
      ]
    },
    guide: {
      title: "Cómo Usar los Ejemplos de Diagramas",
      intro: "Crear diagramas profesionales es sencillo con nuestro enfoque basado en ejemplos. Sigue estos pasos para generar visualizaciones efectivas rápidamente:",
      steps: [
        {
          title: "Explorar las Categorías de Diagramas",
          description: "Explora nuestra colección organizada de ejemplos de diagramas agrupados por tipo (flujogramas, diagramas UML, diagramas de red, etc.). Revisa varios ejemplos para encontrar aquel que más se acerque a tus necesidades de visualización, prestando atención a la estructura y complejidad."
        },
        {
          title: "Copiar el Código del Ejemplo",
          description: "Una vez que haya identificado un ejemplo adecuado, haga clic en el botón 'Copiar Código' para guardar la sintaxis del diagrama en su portapapeles. Este código utiliza notación estándar que puede ser interpretada por diversas herramientas de diagramación y plataformas."
        },
        {
          title: "Pegar en Su Herramienta Preferida de Diagramación",
          description: "Abre tu plataforma de diagramación elegida (como Mermaid, PlantUML, Draw.io, o herramientas especializadas) y pega el código copiado. La mayoría de las herramientas modernas soportan importar desde notación textual, permitiéndote mantener la estructura mientras haces tus personalizaciones."
        },
        {
          title: "Personalizar el Contenido del Diagrama",
          description: "Modifique el ejemplo para adaptarlo a sus necesidades específicas reemplazando el texto de marcador de posición, agregando o eliminando elementos y ajustando las relaciones. Los ejemplos están diseñados para ser fáciles de editar mientras mantienen claridad visual y apariencia profesional."
        },
        {
          title: "Ajustar el Estilo Visual",
          description: "Perfeccione la apariencia de su diagrama modificando colores, formas, estilos de línea y parámetros de diseño según sus preferencias o directrices de marca de su organización. La mayoría de las sintaxis de diagramas incluyen comandos de estilo dentro del código."
        },
        {
          title: "Revisar y Refinar",
          description: "Evalúe su diagrama en cuanto a claridad, completitud y precisión. Asegúrese de que comunique efectivamente la información deseada sin complejidad innecesaria. Recopile comentarios de colegas o stakeholders y realice ajustes según sea necesario."
        },
        {
          title: "Exportar y Compartir",
          description: "Una vez que esté satisfecho con su diagrama, exporte en su formato preferido (PNG, SVG, PDF, etc.) para incluirlo en documentación, presentaciones o informes. Muchas herramientas de diagramación también ofrecen funciones de colaboración para edición en equipo y actualizaciones en tiempo real."
        }
      ]
    },
    diagramTypes: {
      title: "Entendiendo los Diferentes Tipos de Diagramas",
      intro: "Cada tipo de diagrama está diseñado para visualizar tipos específicos de información y relaciones. Aquí se explica cómo pueden utilizarse los diferentes tipos de diagramas en nuestra colección:",
      items: [
        {
          name: "Flujogramas",
          description: "Visualizar procesos secuenciales, puntos de decisión y rutas de flujo. Ideal para documentar algoritmos, procesos empresariales y procedimientos de toma de decisiones. Los flujogramas utilizan símbolos estandarizados (rectángulos para procesos, diamantes para decisiones, etc.) conectados por flechas para mostrar la dirección del flujo."
        },
        {
          name: "Diagramas UML",
          description: "Modelar sistemas de software utilizando el Lenguaje Unificado de Modelado (UML), incluyendo diagramas de clases (mostrando relaciones de objetos), diagramas de secuencia (ilustrando interacciones entre objetos a lo largo del tiempo), diagramas de actividades (representando procesos de flujo de trabajo) y más. UML proporciona un lenguaje visual estandarizado para el desarrollo de software."
        },
        {
          name: "Diagramas de Relación de Entidades (ERDs)",
          description: "Representar modelos de datos mostrando entidades (tablas), atributos (campos) y las relaciones entre ellas. Esencial para el diseño de bases de datos, los ERDs ayudan a visualizar la organización y estructura de datos antes de la implementación, garantizando un almacenamiento eficiente y lógico de datos."
        },
        {
          name: "Diagramas de Red",
          description: "Mostrar redes informáticas, mostrando dispositivos, conexiones, protocolos y arquitectura de red. Estos diagramas ayudan a los equipos de TI a planificar, documentar y resolver problemas de infraestructura de red al proporcionar una representación visual clara de las relaciones entre componentes."
        },
        {
          name: "Diagramas de Secuencia",
          description: "Ilustrar interacciones entre sistemas, componentes o actores a lo largo del tiempo, con mensajes intercambiados en orden cronológico. Particularmente útil para modelar interacciones de API, flujos de usuarios y protocolos de comunicación entre componentes del sistema."
        },
        {
          name: "Mapas Mentales",
          description: "Organizar información de forma jerárquica alrededor de un concepto central, con ramas que representan ideas relacionadas. Excelente para brainstorms, toma de notas, planificación y organizar información compleja de manera que muestre relaciones y asociaciones."
        },
        {
          name: "Gráficos de Gantt",
          description: "Mostrar cronogramas de proyectos con barras horizontales que muestran duraciones de tareas, dependencias y progreso a lo largo del tiempo. Esencial para la gestión de proyectos, los gráficos de Gantt ayudan a los equipos a visualizar plazos, fechas límite y la ruta crítica de actividades del proyecto."
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes sobre los Ejemplos de Diagramas",
      items: [
        {
          question: "¿Qué sintaxis de diagramas utilizan estos ejemplos?",
          answer: "Nuestros ejemplos de diagramas utilizan sintaxis ampliamente respaldada como Mermaid, PlantUML y DOT de GraphViz. Estos son lenguajes de diagramación basados en texto que pueden ser renderizados por múltiples herramientas y plataformas, ofreciendo flexibilidad en cómo usa y personaliza los ejemplos. Cada ejemplo indica claramente la sintaxis utilizada, y la mayoría de las herramientas modernas de diagramación admiten múltiples opciones de sintaxis."
        },
        {
          question: "¿Puedo usar estos ejemplos de diagramas en proyectos comerciales?",
          answer: "Sí, todos nuestros ejemplos de diagramas son gratuitos para usar en proyectos personales y comerciales. Puede adaptar, modificar y incorporarlos en su trabajo sin requerimientos de atribución. Los ejemplos se proporcionan como punto de partida para acelerar su proceso de diagramación mientras le permite personalizar completamente para satisfacer sus necesidades de proyecto específicas."
        },
        {
          question: "¿Cómo puedo modificar los ejemplos para mis necesidades específicas?",
          answer: "Cada ejemplo de diagrama utiliza una sintaxis basada en texto donde los elementos y relaciones se definen en un formato estructurado. Para personalizar un ejemplo, simplemente edite las definiciones de texto para que coincidan con su caso de uso: cambie nombres de elementos, agregue o elimine componentes, cambie relaciones o modifique el flujo. La sintaxis está diseñada para ser legible y intuitiva, con cambios que se reflejan inmediatamente en el diagrama renderizado."
        },
        {
          question: "¿Qué herramientas puedo usar para renderizar estos ejemplos de diagramas?",
          answer: "Estos ejemplos son compatibles con numerosas herramientas de diagramación, incluyendo plataformas en línea como Mermaid Live Editor, PlantUML Web Server y extensiones de VS Code como Markdown Preview Enhanced. Aplicaciones de escritorio como Draw.io, Lucidchart y muchas plataformas de documentación como Confluence, GitHub y GitLab también admiten renderizar estas sintaxis de diagramas directamente desde la notación de texto."
        },
        {
          question: "¿Cómo agrego colores y estilo a mis diagramas?",
          answer: "La mayoría de las sintaxis de diagramas admiten estilo mediante comandos específicos o atributos. Por ejemplo, en Mermaid, puede agregar estilo con la palabra clave 'style' seguida de identificadores de elementos y propiedades similares a CSS. En PlantUML, puede usar comandos skinparam para establecer colores, fuentes y otros atributos visuales. Nuestros ejemplos incluyen estilo básico que puede extender fácilmente con personalización adicional según sus preferencias."
        },
        {
          question: "¿Puedo combinar múltiples ejemplos de diagramas para crear visualizaciones más complejas?",
          answer: "Absolutamente. Puede combinar elementos de diferentes ejemplos para crear visualizaciones completas que capturen sistemas o procesos complejos. Al combinar ejemplos, mantenga convenciones de nomenclatura consistentes, asegúrese de que las relaciones entre componentes combinados sean lógicas y considere usar subgráficos o grupos para organizar elementos relacionados. Este enfoque le permite aprovechar las mejores características de múltiples plantillas mientras crea un diagrama coherente final."
        },
        {
          question: "¿Cómo puedo asegurarme de que mis diagramas permanezcan mantenibles a medida que evolucionan los sistemas?",
          answer: "Para diagramas mantenibles, almacene el código fuente del diagrama (la notación de texto) en control de versiones junto con su código de proyecto o documentación. Esto permite que los diagramas evolucionen junto con su sistema a través del mismo proceso de revisión y actualización. Utilice enfoques modulares dividiendo diagramas complejos en secciones lógicas, emplee convenciones de nomenclatura consistentes y incluya comentarios en su código de diagrama para explicar elementos o relaciones que puedan no ser obvios para su audiencia."
        }
      ]
    },
    bestPractices: {
      title: "Mejores Prácticas para Diagramas Efectivos",
      intro: "Cree diagramas más efectivos y profesionales siguiendo estas prácticas de la industria:",
      items: [
        "Mantenga los diagramas centrados en un concepto o mensaje principal, en lugar de intentar visualizar todo a la vez",
        "Use formas, colores y estilos consistentes para garantizar coherencia visual y establecer significado (por ejemplo, codificación de colores para diferentes tipos de componentes)",
        "Incluya una leyenda o clave que explique cualquier símbolo, colores o notaciones que puedan no ser inmediatamente obvios para su audiencia",
        "Limite el número de elementos en un solo diagrama para evitar sobrecarga visual; considere dividir sistemas complejos en múltiples diagramas vinculados",
        "Organice los elementos del diagrama en grupos lógicos, posicionando elementos relacionados cerca unos de otros para mostrar relaciones claramente",
        "Use indicadores de dirección (flechas) de manera consistente para mostrar flujo de procesos, movimiento de datos o dirección de relaciones",
        "Agregue etiquetas concisas y anotaciones para aclarar propósito, explicar interacciones complejas o destacar aspectos importantes",
        "Mantenga espacio adecuado entre elementos para mejorar la legibilidad y claridad visual",
        "Alinee elementos en una estructura de cuadrícula cuando sea apropiado para crear una apariencia más organizada y profesional",
        "Considere la audiencia y propósito del diagrama al determinar el nivel de detalle técnico que debe incluir",
        "Utilice estructuras jerárquicas para mostrar relaciones padre-hijo y organizar la información de general a específico",
        "Revise los diagramas desde la perspectiva de alguien desconocido con el sistema para asegurar claridad y comprensibilidad"
      ]
    }
  }
}