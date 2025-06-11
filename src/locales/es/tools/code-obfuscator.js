export default {
  name: 'Ofuscador de Código',
  description: 'Ofusca código JavaScript y CSS para mejorar la seguridad y proteger la propiedad intelectual',
  languages: {
    title: 'Selecciona el Lenguaje',
    javascript: 'JavaScript',
    css: 'CSS'
  },
  options: {
    title: 'Opciones de Ofuscación',
    javascript: {
      compact: 'Compactar Salida (Eliminar espacios)',
      controlFlowFlattening: 'Aplanamiento del Flujo de Control',
      deadCodeInjection: 'Inyección de Código Muerto',
      debugProtection: 'Protección contra Depuración',
      selfDefending: 'Autodefensa (Evitar mejoras al código)',
      stringArray: 'Transformar Cadenas en Arreglos',
      renameGlobals: 'Renombrar Variables Globales',
      renameProperties: 'Renombrar Propiedades',
      mangle: 'Ofuscar Nombres de Variables',
      stringArrayEncoding: 'Codificación de Arreglo de Cadenas',
      stringArrayThreshold: 'Umbral del Arreglo de Cadenas',
      unicodeEscapeSequence: 'Secuencias de Escape Unicode'
    },
    css: {
      compact: 'Salida Compacta',
      renameSelectors: 'Renombrar Selectores',
      preserveImportant: 'Preservar !important',
      restructure: 'Reestructurar Reglas',
      keepVendorPrefixes: 'Mantener Prefijos de Proveedores',
      removeComments: 'Eliminar Comentarios'
    }
  },
  input: {
    title: 'Código de Entrada',
    placeholder: 'Introduce el código a ofuscar...',
    clear: 'Limpiar',
    paste: 'Pegar desde portapapeles',
    upload: 'Subir Archivo'
  },
  output: {
    title: 'Resultado Ofuscado',
    placeholder: 'El código ofuscado aparecerá aquí...',
    copy: 'Copiar',
    download: 'Descargar',
    stats: {
      original: 'Tamaño Original',
      obfuscated: 'Tamaño Ofuscado',
      ratio: 'Ratio de Compresión'
    },
    increase: 'Aumento',
    decrease: 'Disminución',
  },
  actions: {
    obfuscate: 'Ofuscar',
    clear: 'Limpiar'
  },
  messages: {
    copied: 'Copiado al portapapeles',
    copyFailed: 'Fallo al copiar, por favor hazlo manualmente',
    processing: 'Procesando...',
    error: 'Error al ofuscar',
    emptyInput: 'Por favor introduce un código para ofuscar',
    invalidInput: 'Código inválido',
    uploadError: 'Fallo al subir el archivo',
    fileTooLarge: 'El archivo es demasiado grande (máximo 2MB)'
  },
  tips: {
    title: 'Consejos de Uso',
    tip1: 'La ofuscación dificulta el análisis inverso pero no puede evitar completamente que el código sea descifrado',
    tip2: 'Activar más opciones de ofuscación aumentará el tamaño del código y el uso de recursos en ejecución',
    tip3: 'Algunas opciones pueden afectar la depuración del código',
    tip4: 'Es recomendable hacer una copia del código original antes de ofuscar',
    tip5: 'Para proyectos grandes, considera usar herramientas profesionales de ofuscación'
  },
  demo: {
    title: 'Demostración',
    function: 'Demuestra función',
    class: 'Demuestra clase',
    simple: 'Estilo sencillo',
    animation: 'Efecto de animación',
  },
  article: {
    title: "Entendiendo la Ofuscación de Código para Mayor Seguridad",
    overview: {
      title: "¿Qué es la Ofuscación de Código?",
      content: "<strong>La ofuscación de código</strong> es una técnica de seguridad que transforma el código fuente legible en una versión compleja y difícil de entender, manteniendo su funcionalidad. Esta medida defensiva ayuda a proteger la propiedad intelectual, prevenir ingeniería inversa y asegurar algoritmos sensibles o lógica empresarial de acceso no autorizado.<br><br>Nuestra herramienta soporta ofuscación de JavaScript y CSS, empleando técnicas como renombrado de variables, aplanamiento del flujo de control, inyección de código muerto y encriptación de cadenas para crear múltiples capas de protección contra robo de código y manipulación. Al hacer el código significativamente más difícil de analizar, la ofuscación proporciona una capa de seguridad esencial para aplicaciones web desplegadas y scripts del lado del cliente."
    },
    useCases: {
      title: "Aplicaciones comunes de la ofuscación de código",
      items: [
        {
          title: "Protección de Propiedad Intelectual",
          description: "Protege algoritmos valiosos, lógica empresarial propietaria e implementaciones innovadoras de código frente a competidores o copia no autorizada, haciendo que el código fuente sea difícil de comprender y replicar.",
        },
        {
          title: "Mejora de la Seguridad del Lado del Cliente",
          description: "Fortalece la seguridad del código JavaScript que funciona en navegadores, ofuscando mecanismos de autenticación, rutinas de validación y código de interacción con APIs para impedir que atacantes entiendan fácilmente y exploten estas funciones sensibles.",
        },
        {
          title: "Protección de Validación de Licencia",
          description: "Protege algoritmos de verificación de licencia y códigos de activación del producto frente a intentos de bypass o crackeo, haciendo significativamente más difícil para usuarios no autorizados eliminar o modificar restricciones de licencia.",
        },
        {
          title: "Prevención de Análisis Automatizado",
          description: "Complica el análisis automatizado del código malicioso introduciendo técnicas de ofuscación que confunden el análisis estático y hacen más difícil identificar automáticamente vulnerabilidades o puntos de extracción.",
        },
        {
          title: "Protección de Aplicaciones Web Móviles",
          description: "Asegura el JavaScript y CSS en aplicaciones web progresivas (PWA) y aplicaciones móviles donde el código se descarga a los dispositivos de los usuarios y podría ser examinado y reutilizado fácilmente sin protección.",
        },
        {
          title: "Protección de Acceso a Contenido Premium",
          description: "Protege mecanismos de acceso a contenido premium en sitios web y aplicaciones web mediante la ofuscación del código que controla el acceso a funciones pagadas o contenido solo para suscriptores.",
        },
        {
          title: "Despliegue Temporal de Código",
          description: "Ofusca código promocional, funcionalidad limitada en el tiempo o características estacionales para impedir extensiones no autorizadas de ofertas con límites temporales o descubrimientos prematuros de funcionalidades futuras."
        }
      ]
    },
    guide: {
      title: "Cómo Usar la Herramienta de Ofuscación de Código",
      intro: "Sigue estos pasos para ofuscar tu código efectivamente y mejorar su seguridad:",
      steps: [
        {
          title: "Selecciona el Lenguaje del Código",
          description: "Empieza eligiendo el lenguaje del código que deseas ofuscar. La herramienta actualmente soporta JavaScript y CSS. Cada lenguaje tiene técnicas y opciones diferentes adaptadas a sus características específicas.",
        },
        {
          title: "Configura las Opciones de Ofuscación",
          description: "Selecciona las opciones adecuadas según tus necesidades. Para JavaScript, las opciones incluyen aplanamiento del flujo de control, inyección de código muerto, transformación de arreglos de cadenas y otras. Para CSS, puedes renombrar selectores, compactar salida y reestructurar reglas. Cuantas más opciones actives, más fuerte será la ofuscación aunque potencialmente aumente el tamaño del código.",
        },
        {
          title: "Introduce Tu Código Fuente",
          description: "Ingresa el código que quieres ofuscar en la sección de entrada. Por conveniencia, puedes usar los ejemplos provistos para ver cómo trabaja el ofuscador con distintos patrones. Asegúrate de que tu propio código funcione correctamente antes de ofuscarlo.",
        },
        {
          title: "Genera el Código Ofuscado",
          description: "Haz clic en el botón 'Ofuscar' para procesar tu código. La herramienta aplicará las técnicas seleccionadas y transformará tu código en uno menos legible pero funcionalmente idéntico.",
        },
        {
          title: "Revisa los Resultados",
          description: "Examina el código generado para asegurarte de que cumple tus requisitos de seguridad. Observa la diferencia de tamaño y el ratio de compresión mostrado bajo la salida. En algunos casos, el código ofuscado puede ser más grande que el original debido a los mecanismos añadidos.",
        },
        {
          title: "Copia o Descarga el Código Ofuscado",
          description: "Una vez satisfecho con el resultado, copia el código ofuscado usando el botón correspondiente o descárgalo para implementarlo en tu proyecto. El código ya está listo para usarse y funcionará exactamente igual que el original pero con mejor seguridad.",
        },
        {
          title: "Prueba el Código Ofuscado",
          description: "Antes de desplegarlo a producción, prueba exhaustivamente el código ofuscado en tu aplicación para asegurar su funcionamiento. Si bien el proceso de ofuscación preserva la funcionalidad, siempre es buena práctica verificar en tu contexto específico."
        }
      ]
    },
    techniques: {
      title: "Entendiendo las Técnicas de Ofuscación",
      intro: "La ofuscación de código emplea varias técnicas para proteger tu código. Entender estos métodos te ayudará a elegir las opciones adecuadas según tus necesidades:",
      items: [
        {
          name: "Renombrar Variables y Funciones",
          description: "Reemplaza nombres legibles por otros cortos, crípticos o engañosos, haciéndolo más difícil de seguir. Esta técnica reduce significativamente la legibilidad del código manteniendo su funcionalidad completa. En JavaScript, esto puede aplicarse a variables, funciones e incluso nombres globales si está activado."
        },
        {
          name: "Aplanamiento del Flujo de Control",
          description: "Transforma el flujo de control del programa en una estructura aparentemente aleatoria, reemplazando caminos de ejecución directos con un modelo de máquina de estados. Esto hace extremadamente difícil seguir la lógica de ejecución, complicando mucho cualquier intento de ingeniería inversa."
        },
        {
          name: "Inyección de Código Muerto",
          description: "Inserta código no funcional que nunca se ejecuta pero parece importante para analizadores de código automáticos y humanos. Esta técnica añade complejidad y ruido que oscurece la verdadera funcionalidad del código.",
        },
        {
          name: "Encriptación de Cadenas",
          description: "Convierte literales de texto en formas encriptadas que solo se desencriptan en tiempo de ejecución. Esto evita el análisis directo de cadenas y dificulta la identificación de componentes clave del código buscando patrones textuales específicos o mensajes.",
        },
        {
          name: "Código Autodefensivo",
          description: "Añade mecanismos que detectan si el código ha sido modificado o si alguien intenta depurarlo o formatearlo. Esta técnica puede hacer que el código falle deliberadamente si se detecta manipulación, brindando una capa adicional de protección contra ingeniería inversa.",
        },
        {
          name: "Renombrado de Selectores CSS",
          description: "Para ofuscación de CSS, esta técnica reemplaza selectores de clase e ID significativos por nombres generados aleatoriamente. Esto protege tu estructura de estilo y hace más duro entender o replicar tus patrones de diseño.",
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes sobre Ofuscación de Código",
      items: [
        {
          question: "¿Es la ofuscación de código completamente segura frente a ingeniería inversa?",
          answer: "Ningún método de ofuscación es 100% seguro frente a ingenieros persistentes. La ofuscación aumenta significativamente el tiempo, esfuerzo y pericia requeridos para entender tu código, creando una barrera importante contra ataques casuales y la mayoría de herramientas automatizadas. Debería verse como una capa más de una estrategia amplia de seguridad, no como un blindaje impenetrable. Para operaciones realmente sensibles, la ejecución del lado del servidor sigue siendo la opción más segura.",
        },
        {
          question: "¿La ofuscación afectará el rendimiento de mi código?",
          answer: "El código ofuscado generalmente tiene un impacto mínimo en el rendimiento de JavaScript. Los motores modernos optimizan el código independientemente del nombre de las variables o la estructura. Sin embargo, algunas técnicas avanzadas como el aplanamiento del flujo de control y la protección contra depuración pueden introducir un ligero sobrecosto. Para la mayoría de aplicaciones, esta diferencia es insignificante, pero en partes críticas del código, podrías beneficiarte de una ofuscación selectiva con cuidadosa elección de opciones.",
        },
        {
          question: "¿Cómo hago depuración del código ofuscado si hay algún problema?",
          answer: "Depurar código ofuscado es intencionadamente difícil. Recomendamos este conjunto de buenas prácticas: (1) Mantén siempre una copia del código fuente original para referencia; (2) Usa mapas de código (source maps) cuando estén disponibles; (3) Solo ofusca para producción, no durante el desarrollo; (4) Prueba exhaustivamente antes de ofuscar para minimizar la necesidad de depuración posterior; (5) Considera implementar logs que sobrevivan a la ofuscación en secciones críticas. Para asuntos graves con código desplegado, quizás necesites revertir al código no ofuscado para resolver problemas.",
        },
        {
          question: "¿El JavaScript ofuscado aún funciona en todos los navegadores?",
          answer: "Un JavaScript adecuadamente ofuscado sigue siendo totalmente compatible con todos los navegadores modernos. El proceso de ofuscación preserva la funcionalidad mientras cambia la apariencia y estructura del código. No obstante, si tu código original usa funciones muy nuevas de JavaScript (ES6+), asegúrate de que tus navegadores objetivo las soportan, ya que la ofuscación no cambia el nivel de lenguaje ni agrega polillas automáticamente. Siempre es recomendable probarlo en varios navegadores después de ofuscarlo.",
        },
        {
          question: "¿La ofuscación de CSS puede romper la apariencia de mi sitio web?",
          answer: "La ofuscación de CSS puede afectar tu sitio si tu HTML o JavaScript depende de nombres de clases o IDs fuera de la hoja de estilos. Por ejemplo, si tu código JavaScript selecciona elementos por nombres de clase que son cambiados durante la ofuscación, la funcionalidad podría romperse. Cuando uses ofuscación de CSS, asegúrate de tratar también el HTML y JavaScript, o usa las opciones para preservar selectores críticos.",
        },
        {
          question: "¿Cuánto aumenta típicamente el tamaño de los archivos ofuscados?",
          answer: "El impacto varía ampliamente según las técnicas de ofuscación aplicadas. La ofuscación básica con minificación suele reducir el tamaño del archivo, eliminando comentarios, espacios y acortando nombres. Pero técnicas avanzadas como inyección de código muerto, transformaciones de arreglo de cadenas y aplanamiento del flujo de control pueden incrementar el tamaño entre un 20-100% o más. La herramienta muestra el porcentaje de cambio de tamaño para ayudarte a equilibrar seguridad y eficiencia en cuanto a tamaño de archivo.",
        },
        {
          question: "¿Puedo ofuscar solo ciertas partes de mi código?",
          answer: "Esta herramienta online trata todo el código de forma integral, pero puedes implementar ofuscación parcial: (1) Ofusca solo módulos o funciones críticas por separado e incorpóralos luego al código general; (2) Usa técnicas de aislamiento como funciones anónimas para segmentar secciones antes de ofuscarlas; (3) En proyectos extensos, usa herramientas de construcción como Webpack con plugins que soporten ofuscación selectiva basada en patrones de archivos o anotaciones. Concéntrate en ofuscar las partes más sensibles o valiosas de tu código.",
        }
      ]
    },
    bestPractices: {
      title: "Buenas Prácticas para Ofuscación Efectiva",
      intro: "Para maximizar la seguridad manteniendo la funcionalidad, considera estas buenas prácticas al ofuscar tu código:",
      items: [
        "Siempre guarda una copia de tu código original no ofuscado en una ubicación segura.",
        "Prueba exhaustivamente el código ofuscado antes del despliegue para asegurar que funcione correctamente.",
        "Equilibra la fuerza de la ofuscación con los requisitos de tamaño y rendimiento de tu aplicación.",
        "Combina la ofuscación con otras medidas de seguridad como HTTPS, autenticación apropiada y validación del lado del servidor.",
        "En JavaScript, evita ofuscar código que dependa de nombres específicos de funciones o variables para interactuar externamente.",
        "Al ofuscar CSS, ten en cuenta que ciertos nombres de clase pueden estar referenciados por JavaScript o componentes de terceros.",
        "Considera generar source maps para depuración pero mantenlos seguros y separados del código productivo.",
        "Actualiza regularmente tu enfoque de ofuscación conforme salgan nuevas técnicas y herramientas.",
        "Para aplicaciones altamente sensibles, usa una combinación de ofuscación, encriptación y procesamiento del lado del servidor.",
        "Entiende claramente el alcance de la protección: la ofuscación principalmente disuade el análisis inverso, no lo impide del todo.",
        "En aplicaciones web, considera usar ofuscación junto con política de seguridad de contenido (CSP) para mejorar la seguridad global.",
        "Documenta tu proceso y configuraciones de ofuscación para compartir conocimientos con tu equipo y facilitar el mantenimiento futuro."
      ]
    }
  }
};