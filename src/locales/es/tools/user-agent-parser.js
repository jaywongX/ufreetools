export default {
  name: 'Analizador de User Agent',
  description: 'Analizar y procesar cadenas de user agent del navegador para identificar información del navegador, sistema operativo y dispositivo',
  input: {
    label: 'Cadena de User Agent',
    placeholder: 'Introduzca o pegue la cadena de user agent...'
  },
  actions: {
    parse: 'Analizar',
    detect: 'Detectar Navegador Actual',
    clear: 'Limpiar'
  },
  results: {
    title: 'Resultados del Análisis',
    summary: 'Resumen',
    details: 'Detalles',
    originalUA: 'Cadena Original de User Agent'
  },
  sections: {
    browser: 'Navegador',
    os: 'Sistema Operativo',
    device: 'Dispositivo',
    other: 'Otra Información'
  },
  deviceTypes: {
    mobile: 'Dispositivo Móvil',
    tablet: 'Tableta',
    desktop: 'Escritorio'
  },
  fields: {
    name: 'Nombre',
    version: 'Versión',
    engine: 'Motor',
    platform: 'Plataforma',
    type: 'Tipo',
    vendor: 'Proveedor',
    model: 'Modelo',
    isMobile: 'Dispositivo Móvil',
    isTablet: 'Tableta',
    isDesktop: 'Dispositivo de Escritorio'
  },
  messages: {
    parsingError: 'Error al analizar la cadena de user agent',
    emptyInput: 'Por favor ingrese una cadena de user agent',
    unknown: 'Desconocido',
    yes: 'Sí',
    no: 'No'
  },
  tips: {
    description: 'User Agent es una cadena de identificación que los navegadores envían a los servidores, conteniendo información sobre el navegador, sistema operativo y dispositivo.',
    useCases: 'Comúnmente utilizada para análisis web, manejo de compatibilidad entre navegadores y adaptación por dispositivo.'
  },
  article: {
    title: "Analizador de User Agent: Comprender las Cadenas de Identificación del Navegador",
    features: {
      title: "¿Qué es una Cadena de User Agent y Por Qué Es Importante?",
      description: "Nuestro <strong>Analizador de User Agent</strong> es una herramienta online especializada diseñada para descodificar y analizar cadenas de identificación del navegador. Cada vez que visita un sitio web, su navegador envía una cadena de texto llamada <strong>cadena de user agent</strong> que contiene información detallada sobre su navegador, sistema operativo, tipo de dispositivo y más.<br><br>Esta poderosa <strong>herramienta analizadora de cadenas UA</strong> desglosa la compleja información del user agent en componentes fácilmente comprensibles, revelando qué navegador está utilizando, su versión, detalles de su sistema operativo y características del dispositivo. La herramienta soporta todos los principales navegadores incluyendo Chrome, Firefox, Safari, Edge y navegadores móviles, proporcionando identificación precisa en todas las plataformas.<br><br>Comprender las cadenas de user agent es esencial para desarrolladores web, profesionales de TI y cualquier persona involucrada en la creación o mantenimiento de aplicaciones web que necesiten entregar experiencias optimizadas en diferentes entornos de navegación.",
      useCases: {
        title: "Aplicaciones Prácticas para el Análisis de User Agent",
        items: [
          "<strong>Desarrollo y Pruebas Web</strong>: Los desarrolladores utilizan el <strong>análisis de cadenas UA</strong> para identificar errores específicos del navegador y problemas de compatibilidad. Cuando los usuarios reportan problemas, examinar su user agent ayuda a reproducir el entorno exacto donde ocurrió el problema, permitiendo correcciones dirigidas en lugar de adivinar la causa de problemas de renderizado o funcionalidad específicos del navegador.",
          "<strong>Adaptación de Contenido</strong>: Los sitios web pueden emplear <strong>identificación del navegador</strong> para entregar contenido optimizado basado en las capacidades del visitante. Por ejemplo, entregar imágenes WebP a navegadores compatibles mientras se recurre a JPG para los más antiguos, o ajustar características de JavaScript basándose en la versión del navegador para garantizar compatibilidad sin sacrificar funcionalidad para usuarios con navegadores modernos.",
          "<strong>Análisis de Seguridad</strong>: Los profesionales de seguridad analizan <strong>patrones de user agent</strong> para detectar comportamiento sospechoso. Cadenas de user agent inusuales o inconsistentes a menudo indican actividades de scraping, bots o posibles amenazas de seguridad. Analizando e inspeccionando estas cadenas, los sistemas de seguridad pueden identificar y bloquear actores maliciosos que intenten comprometer aplicaciones web.",
          "<strong>Análisis Estadístico y Conocimiento del Usuario</strong>: Los equipos de marketing utilizan <strong>datos de user agent</strong> para entender la demografía de sus visitantes. Saber qué navegadores y dispositivos utilizan sus usuarios ayuda a priorizar esfuerzos de prueba y optimización, asegurando que los recursos se enfoquen en mejorar la experiencia para las configuraciones más comunes entre su base específica de usuarios.",
          "<strong>Detección Móvil</strong>: Los desarrolladores implementan diseños responsivos usando <strong>identificación de dispositivos</strong> desde user agents. Aunque las consultas multimedia CSS manejan la mayoría de los comportamientos responsivos, el análisis de user agents puede proporcionar contexto adicional sobre dispositivos móviles, permitiendo ajustes finos a funcionalidad o elementos de interfaz específicamente para usuarios móviles.",
          "<strong>Detección de Características del Navegador</strong>: Los equipos técnicos evalúan capacidades del navegador a través de la <strong>interpretación de cadenas UA</strong>. Aunque la detección moderna de características es preferida, el análisis de user agents sirve como método complementario para identificar navegadores que podrían requerir manejo especial o tener limitaciones conocidas que necesitan abordarse mediante adaptaciones específicas de código."
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes Sobre el Análisis de User Agent",
      items: [
        {
          question: "¿Qué información contiene típicamente una cadena de user agent?",
          answer: "Una <strong>cadena de user agent</strong> típicamente contiene múltiples piezas de información dispuestas en un formato específico:<br><br>• <strong>Nombre y versión del navegador</strong>: Identifica cuál navegador web se está utilizando (Chrome, Firefox, Safari, etc.) y su número de versión<br>• <strong>Motor de representación</strong>: Muestra qué motor procesa el contenido web (Gecko, WebKit, Blink, etc.)<br>• <strong>Sistema operativo</strong>: Indica el sistema operativo que ejecuta el navegador (Windows, macOS, Android, iOS, etc.)<br>• <strong>Información del dispositivo</strong>: Puede incluir detalles hardware, especialmente en dispositivos móviles<br>• <strong>Tokens de compatibilidad</strong>: A menudo contiene valores que indican compatibilidad con otros navegadores<br><br>Nuestro <strong>analizador de user agent</strong> decodifica todos estos elementos en un formato legible, facilitando la comprensión de los detalles técnicos de cualquier entorno del navegador sin necesidad de interpretar manualmente el complejo formato de cadena."
        },
        {
          question: "¿Qué tan confiable es la detección mediante user agent para identificar navegadores?",
          answer: "La fiabilidad de la <strong>identificación del navegador</strong> a través de cadenas de user agent varía:<br><br>• <strong>Navegadores estándar</strong>: Los navegadores principales como Chrome, Firefox y Safari generalmente pueden identificarse con alta precisión<br>• <strong>Suplantación de navegador</strong>: Algunos usuarios o aplicaciones modifican deliberadamente sus cadenas de user agent para parecer navegadores diferentes, reduciendo la fiabilidad<br>• <strong>Servidores proxy</strong>: Los proxies web pueden alterar la información del user agent, complicando aún más la identificación precisa<br>• <strong>Formatos en evolución</strong>: Los fabricantes de navegadores ocasionalmente cambian los formatos de sus cadenas de user agent, requiriendo actualizaciones constantes a los algoritmos de análisis<br><br>Aunque nuestro <strong>decodificador de cadenas UA</strong> emplea reconocimiento sofisticado de patrones para maximizar la precisión, es mejor utilizar la identificación del user agent como un componente de una estrategia más amplia que incluya detección de características para funcionalidad crítica. Para la mayoría de los propósitos, sin embargo, la identificación es lo suficientemente fiable como para guiar decisiones de desarrollo y esfuerzos de solución de problemas."
        },
        {
          question: "¿Por qué algunas cadenas de user agent contienen referencias a múltiples navegadores?",
          answer: "Las cadenas de user agent a menudo contienen referencias a múltiples navegadores debido a prácticas históricas de <strong>compatibilidad entre navegadores</strong>:<br><br>• <strong>Referencias a Mozilla</strong>: La mayoría de los navegadores incluyen 'Mozilla' debido a la compatibilidad heredada desde los primeros días de la web cuando los sitios web ofrecían contenido diferente a Netscape (Mozilla)<br>• <strong>Referencias a WebKit</strong>: Los navegadores basados en Chrome incluyen referencias a WebKit a pesar de usar el motor Blink, ya que muchas páginas web optimizadas para móviles verifican WebKit<br>• <strong>Compatibilidad competitiva</strong>: Los navegadores frecuentemente incluyen referencias a competidores para asegurar que reciben el mismo contenido optimizado<br><br>Esta práctica, conocida como 'sniffing de user agent', ha creado cadenas cada vez más complejas a medida que cada navegador intenta identificarse mientras también asegura que no sea excluido del contenido optimizado para otros navegadores. Nuestra <strong>herramienta analizadora de user agent</strong> atraviesa esta complejidad, enfocándose en el navegador y motor real bajo estas capas de compatibilidad."
        },
        {
          question: "¿El análisis de user agent puede ayudar en la implementación del diseño responsivo?",
          answer: "Aunque el <strong>diseño responsivo</strong> depende principalmente de consultas multimedia CSS en lugar del análisis de user agent, el <strong>análisis UA</strong> puede complementar enfoques responsivos de varias maneras:<br><br>• <strong>Soporte para navegadores antiguos</strong>: Identificar navegadores más antiguos que puedan necesitar estilo alternativo o funcionalidad<br>• <strong>Optimizaciones específicas de dispositivo</strong>: Realizar ajustes dirigidos para modelos específicos de dispositivos más allá de lo que puede detectar CSS<br>• <strong>Decisiones de implementación de características</strong>: Informar elecciones sobre qué características implementar basándose en las capacidades del navegador de su audiencia<br>• <strong>Priorización de pruebas</strong>: Ayudar a los equipos a enfocar esfuerzos de prueba en combinaciones más comunes de navegador/dispositivo usadas por sus visitantes<br><br>Aunque las mejores prácticas modernas de desarrollo web enfatizan la detección de características y técnicas responsivas que se adaptan al tamaño de pantalla y capacidades en lugar de navegadores específicos, el <strong>análisis de user agent</strong> sigue siendo valioso para comprender su base de usuarios y tomar decisiones informadas sobre soporte y prioridades de optimización."
        },
        {
          question: "¿Cómo puedo usar los datos analizados del user agent para mejorar mi sitio web?",
          answer: "Aprovechar <strong>los datos de user agent</strong> puede mejorar su sitio web de varias formas prácticas:<br><br>1. <strong>Corrección de errores específicos del navegador</strong>: Identificar y resolver problemas que solo afectan ciertos navegadores o versiones<br>2. <strong>Optimización de rendimiento</strong>: Entregar recursos ligeros a dispositivos móviles o navegadores antiguos que podrían tener dificultades con activos pesados<br>3. <strong>Implementación de características</strong>: Implementar mejora progresiva ofreciendo características avanzadas solo a navegadores que las soporten<br>4. <strong>Enriquecimiento de análisis estadísticos</strong>: Combinar datos de user agent con otras estadísticas para entender el comportamiento del usuario en el contexto de su entorno técnico<br>5. <strong>Mejoras de accesibilidad</strong>: Identificar y priorizar correcciones para navegadores comúnmente usados con tecnologías asistivas<br><br>Ejecutando registros de visitantes de su sitio a través de nuestro <strong>analizador de cadenas UA</strong>, puede obtener información valiosa sobre el perfil técnico de su audiencia. Estos datos ayudan a priorizar esfuerzos de desarrollo y aseguran crear la mejor experiencia posible para sus usuarios reales en lugar de hacer suposiciones sobre su entorno de navegación."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Usar el Analizador de User Agent",
      step1: "<strong>Ingrese una cadena de user agent</strong>: Puede introducir manualmente una cadena de user agent en el área de texto si tiene una proveniente de sus registros, herramientas de análisis u otras fuentes. El <strong>analizador UA</strong> acepta cualquier formato estándar de user agent, incluyendo aquellos provenientes de navegadores de escritorio, dispositivos móviles, rastreadores web y la mayoría de herramientas automatizadas.",
      step2: "<strong>Use la opción 'Detectar Navegador Actual'</strong>: Si desea analizar el user agent de su propio navegador, simplemente haga clic en el botón 'Detectar Navegador Actual'. Esto completa automáticamente el campo de entrada con la cadena de user agent de su navegador actual, proporcionando una forma rápida de ver cómo su navegador se identifica a sí mismo a los sitios web.",
      step3: "<strong>Haga clic en 'Analizar' para procesar la cadena</strong>: Una vez tenga una cadena de user agent en el campo de entrada, haga clic en el botón 'Analizar' para activar el proceso de <strong>identificación del navegador</strong>. Nuestra herramienta procesará la cadena y la desglosará en sus partes componentes, identificando información clave sobre el navegador, sistema operativo y dispositivo.",
      step4: "<strong>Revise la información resumida</strong>: La sección superior de los resultados muestra un resumen rápido de los detalles más importantes: nombre y versión del navegador, sistema operativo y tipo de dispositivo. Esto le da una comprensión inmediata del entorno básico representado por la cadena de user agent.",
      step5: "<strong>Examine el desglose detallado</strong>: Debajo del resumen encontrará tablas detalladas mostrando información específica sobre cada componente. Esto incluye números de versión precisos, detalles del motor de representación, información del modelo del dispositivo cuando esté disponible y otras especificaciones técnicas extraídas por el <strong>decodificador de cadenas UA</strong>. Puede utilizar esta información para solución de problemas, decisiones de desarrollo o propósitos de análisis."
    },
    conclusion: "Comprender las cadenas de user agent proporciona información valiosa sobre los diversos entornos de navegación que acceden a su contenido web. Al analizar y procesar eficazmente estas huellas técnicas, desarrolladores y empresas pueden tomar decisiones informadas sobre compatibilidad, optimización y soporte de características. Ya sea que esté solucionando problemas específicos del navegador, planificando prioridades de desarrollo o recopilando análisis sobre su audiencia, nuestro Analizador de User Agent ofrece una forma sencilla de descodificar la compleja información contenida en estas cadenas de identificación. A medida que la web continúa evolucionando con nuevos navegadores, dispositivos y plataformas, contar con herramientas confiables para interpretar datos de user agent sigue siendo un aspecto importante de entregar experiencias web excepcionales que funcionen perfectamente en todo el espectro de entornos de usuario."
  }
}