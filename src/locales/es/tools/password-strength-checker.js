export default {
  name: 'Verificador de Fortaleza de Contraseña',
  description: 'Compruebe y analice la fortaleza de las contraseñas con métricas detalladas de seguridad',
  input: {
    title: 'Ingrese una Contraseña',
    placeholder: 'Escriba o pegue su contraseña',
    showPassword: 'Mostrar Contraseña',
    hidePassword: 'Ocultar Contraseña',
    clear: 'Limpiar',
    generate: 'Generar Contraseña',
    check: 'Verificar Fortaleza',
    empty: 'Ingrese una contraseña para comprobar',
    disclaimer: 'Ingrese cualquier contraseña para evaluar su nivel de seguridad. Su contraseña no será almacenada ni enviada a ningún servidor.'
  },
  results: {
    title: 'Análisis de Contraseña',
    strength: 'Fortaleza',
    score: 'Puntuación',
    entropy: 'Entropía',
    crackTime: 'Tiempo Estimado para Ser Descifrada',
    very_weak: 'Muy Débil',
    weak: 'Débil',
    fair: 'Aceptable',
    good: 'Buena',
    strong: 'Fuerte',
    very_strong: 'Muy Fuerte',
    feedback: 'Retroalimentación',
    suggestions: 'Sugerencias de Mejora',
    warnings: 'Problemas Detectados',
    noWarnings: 'No se detectaron advertencias',
    noSuggestions: 'No hay sugerencias disponibles'
  },
  details: {
    title: 'Análisis Detallado',
    length: 'Longitud de la Contraseña',
    charset: 'Diversidad de Caracteres',
    patterns: 'Patrones Utilizados',
    uniqueChars: 'Caracteres Únicos',
    uppercase: 'Letras Mayúsculas',
    lowercase: 'Letras Minúsculas',
    numbers: 'Números',
    symbols: 'Símbolos',
    repetitions: 'Repeticiones',
    sequences: 'Secuencias',
    dictionary: 'Palabras del Diccionario',
    leaked: 'Exposiciones Previa',
    reused: 'Patrón Reutilizado'
  },
  patterns: {
    dictionary: 'Palabra del diccionario',
    sequence: 'Caracteres secuenciales',
    repeat: 'Caracteres repetidos',
    spatial: 'Patrón espacial (teclado)',
    date: 'Patrón de fecha',
    year: 'Patrón de año',
    common: 'Contraseña común',
    name: 'Patrón de nombre',
    reversal: 'Palabra invertida',
    leet: 'Sustitución de leet speak',
    predictable: 'Patrón predecible'
  },
  crackTimes: {
    instantly: 'Instantáneamente',
    seconds: 'En segundos',
    minutes: 'En minutos',
    hours: 'En horas',
    days: 'En días',
    months: 'En meses',
    years: 'En años',
    centuries: 'En siglos',
    forever: 'Prácticamente imposible de descifrar'
  },
  suggestions: {
    addWords: 'Añada más palabras o caracteres',
    addSymbols: 'Incluya símbolos',
    addNumbers: 'Incluya números',
    upperLower: 'Combine mayúsculas y minúsculas',
    avoidPatterns: 'Evite patrones de teclado y caracteres repetidos',
    avoidCommon: 'Evite contraseñas basadas en diccionarios o comunes, incluso si sustituye letras por números (ejemplo: "e" por "3")',
    avoidPersonal: 'Evite información personal',
    avoidDictionary: 'Evite palabras del diccionario',
    usePassphrase: 'Considere el uso de frases, combinaciones de palabras no relacionadas o acrónimos para crear una contraseña más fuerte que sea fácil de recordar',
    increaseLonger: 'Haga su contraseña más larga',
    avoidSequence: 'Evite patrones secuenciales',
    avoidRepeated: 'Evite caracteres repetidos',
    avoidDates: 'Evite fechas y años',
    addMoreChars: 'Aumente la longitud de la contraseña a al menos 12 caracteres. Cada carácter adicional incrementa exponencialmente la dificultad de ser descifrada',
    addTypes: 'Agregue {types} para aumentar la complejidad de la contraseña',
    useManager: 'Use un administrador de contraseñas para generar y gestionar contraseñas seguras, usando contraseñas diferentes para cada sitio'
  },
  generator: {
    title: 'Generador de Contraseñas',
    length: 'Longitud',
    options: 'Opciones',
    uppercase: 'Incluir Letras Mayúsculas',
    lowercase: 'Incluir Letras Minúsculas',
    numbers: 'Incluir Números',
    symbols: 'Incluir Símbolos',
    excludeSimilar: 'Excluir Caracteres Similares',
    excludeAmbiguous: 'Excluir Caracteres Ambiguos',
    generate: 'Generar Contraseña',
    passphrase: 'Generar Frase Secreto',
    wordCount: 'Número de Palabras',
    separator: 'Separador entre Palabras',
    capitalize: 'Capitalizar Palabras',
    includeNumber: 'Incluir un Número',
    includeSymbol: 'Incluir un Símbolo'
  },
  common: {
    copy: 'Copiar al Portapapeles',
    save: 'Guardar en Historial',
    clear: 'Limpiar',
    refresh: 'Actualizar',
    copied: 'Copiado al portapapeles',
    saved: 'Guardado en historial',
    history: 'Historial',
    noHistory: 'No hay historial disponible',
    common: 'común'
  },
  breach: {
    title: 'Verificación de Brechas de Datos',
    description: 'Verifique si su contraseña ha aparecido en brechas de datos conocidas',
    disclaimer: 'Su contraseña nunca es enviada a través de la red. Solo se verifica un hash parcial.',
    checkButton: 'Verificar Brechas',
    safe: 'No encontrada en brechas conocidas',
    found: '¡Encontrada en {count} brechas de datos!',
    warning: 'Esta contraseña ha sido expuesta en brechas de datos y nunca debe usarse.',
    checking: 'Verificando brechas...'
  },
  settings: {
    title: 'Configuración',
    algorithm: 'Algoritmo de Fortaleza',
    history: 'Guardar Historial',
    clearHistory: 'Limpiar Historial',
    breachCheck: 'Verificar Brechas',
    timeout: 'Limpiar después de Tiempo de Inactividad',
    timeoutDuration: 'Duración del Tiempo de Inactividad (segundos)',
    clipboard: 'Limpiar Portapapeles después de Copiar',
    language: 'Idioma'
  },
  score: {
    none: 'Sin Calificar'
  },
  descriptions: {
    none: 'No se puede evaluar la fortaleza de la contraseña',
    veryWeak: 'Esta contraseña es muy fácil de adivinar o descifrar, extremadamente insegura.',
    weak: 'Esta contraseña tiene baja seguridad y podría ser descifrada fácilmente.',
    fair: 'Esta contraseña tiene algo de seguridad pero aún puede mejorar.',
    good: 'Esta es una contraseña relativamente segura que es difícil de descifrar.',
    veryStrong: 'Esta es una contraseña muy segura que es casi imposible de descifrar.'
  },
  length: {
    none: 'Ninguna',
    tooShort: 'Demasiado Corta',
    acceptable: 'Aceptable',
    good: 'Buena',
    excellent: 'Excelente'
  },
  lengthMessage: {
    none: 'No se ingresó ninguna contraseña',
    needMore: 'Se necesitan al menos {min} caracteres',
    better: '{min} o más caracteres serían más seguros',
    good: '¡Excelente! Las contraseñas más largas son más difíciles de descifrar',
    excellent: '¡Longitud excelente!'
  },
  complexity: {
    none: 'Ninguna',
    veryLow: 'Muy Baja',
    fair: 'Aceptable',
    good: 'Buena',
    excellent: 'Excelente'
  },
  issues: {
    tooShort: 'La contraseña es demasiado corta (menos de 8 caracteres)',
    noUppercase: 'No contiene letras mayúsculas',
    noLowercase: 'No contiene letras minúsculas',
    noNumbers: 'No contiene números',
    noSymbols: 'No contiene símbolos especiales',
    hasSequence: 'Contiene secuencias comunes del teclado (por ejemplo, "qwerty" o "123456")',
    hasRepeated: 'Contiene caracteres repetidos (por ejemplo, "aaa" o "111")',
    commonPassword: 'Utiliza una contraseña común o fácil de adivinar'
  },
  characters: 'caracteres',
  tips: {
    title: 'Consejos de Seguridad para Contraseñas',
    length: 'Use contraseñas con al menos 12 caracteres',
    mix: 'Combine mayúsculas, minúsculas, números y símbolos especiales',
    avoid: 'Evite palabras, frases o información personal comunes',
    unique: 'No utilice la misma contraseña en múltiples sitios',
    manager: 'Considere usar un administrador de contraseñas para generar y almacenar contraseñas complejas'
  },
  article: {
    title: "Verificador de Fortaleza de Contraseña: Evalúe y Mejore Su Seguridad Online",
    features: {
      title: "Entendiendo la Evaluación de Seguridad de Contraseñas",
      description: "El <strong>Verificador de Fortaleza de Contraseña</strong> es una herramienta completa de <strong>evaluación de seguridad</strong> diseñada para analizar y calificar la efectividad de sus contraseñas contra posibles amenazas. Este <strong>analizador de contraseñas</strong> examina múltiples factores que determinan la seguridad de una contraseña, incluyendo su longitud, diversidad de caracteres, posibles patrones y similitud con contraseñas comúnmente utilizadas.<br><br>Nuestro <strong>verificador de seguridad de contraseñas</strong> proporciona retroalimentación detallada sobre los puntos fuertes y débiles de su contraseña, ofreciendo un desglose completo de lo que la hace segura o vulnerable. La herramienta genera una puntuación de seguridad y una calificación codificada por colores, junto con sugerencias específicas de mejora adaptadas a las características de su contraseña. Como <strong>detector de vulnerabilidades de contraseñas</strong>, ayuda a identificar problemas potenciales de seguridad sin almacenar ni transmitir nunca su contraseña, garantizando total privacidad durante el proceso de evaluación.",
      useCases: {
        title: "Aplicaciones Prácticas para la Verificación de Seguridad de Contraseñas",
        items: [
          "<strong>Creación de cuentas</strong>: Al configurar nuevas cuentas en línea, utilice el <strong>verificador de seguridad de contraseñas</strong> para asegurarse de que está creando credenciales que cumplan con los estándares modernos de seguridad antes de finalizar su registro",
          "<strong>Auditorías de Seguridad</strong>: Revise periódicamente y pruebe sus contraseñas existentes en diferentes cuentas para identificar y priorizar cuáles necesitan ser fortalecidas como parte de su <strong>evaluación personal de ciberseguridad</strong>",
          "<strong>Desarrollo de Políticas de Contraseñas</strong>: Las organizaciones pueden utilizar la herramienta para demostrar directrices efectivas de contraseñas a empleados y probar el cumplimiento con estándares de seguridad como parte de sus <strong>protocolos de seguridad informática</strong>",
          "<strong>Demostraciones Educativas</strong>: Profesores, padres y profesionales de seguridad pueden usar la retroalimentación visual para mostrar a otras personas la diferencia concreta entre contraseñas débiles y fuertes para <strong>capacitación en conciencia de seguridad</strong>",
          "<strong>Verificación Post-Brecha</strong>: Tras conocer noticias de brechas de datos, verifique rápidamente si sus contraseñas actuales cumplen con las mejores prácticas de seguridad o necesitan actualización inmediata como <strong>medida preventiva de seguridad</strong>",
          "<strong>Transición a Administrador de Contraseñas</strong>: Al migrar a un administrador de contraseñas, evalúe sus contraseñas existentes para determinar cuáles deberían regenerarse con alternativas más seguras durante el proceso de <strong>mejora de seguridad digital</strong>"
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre Seguridad de Contraseñas",
      items: [
        {
          question: "¿Es segura mi contraseña cuando uso esta herramienta?",
          answer: "Sí, su contraseña es completamente segura cuando utiliza nuestro analizador de seguridad de contraseñas. La herramienta procesa su contraseña completamente dentro de su navegador – nunca transmite su contraseña por internet ni la almacena en ningún servidor. Este procesamiento local significa que su contraseña nunca abandona su dispositivo durante la verificación de fortaleza. La herramienta usa algoritmos JavaScript locales para evaluar complejidad, identificar patrones y calcular puntuaciones sin procesamiento externo. Este enfoque de cero transmisión proporciona máxima seguridad mientras sigue ofreciendo una evaluación completa de fortaleza de contraseña. Puede verificar este comportamiento utilizando la herramienta desconectada del internet, ya que seguirá funcionando normalmente."
        },
        {
          question: "¿Qué hace que una contraseña sea realmente fuerte?",
          answer: "Una contraseña verdaderamente fuerte combina múltiples factores de seguridad que nuestra herramienta de seguridad evalúa. Los elementos más importantes incluyen: suficiente longitud (al menos 12-14 caracteres), complejidad a través de diversidad de caracteres (letras mayúsculas, minúsculas, números y símbolos especiales), imprevisibilidad (evitando palabras comunes, frases o patrones), unicidad (no reutilizada en múltiples sitios) y resistencia a ataques automatizados. Las contraseñas más fuertes evitan información personal, palabras del diccionario y sustituciones predecibles (como '3' por 'e'). Nuestra herramienta de evaluación recomienda usar contraseñas generadas aleatoriamente o frases que combinen múltiples palabras no relacionadas con números y símbolos. Recuerde que la longitud generalmente contribuye más a la fortaleza de la contraseña que la complejidad sola."
        },
        {
          question: "¿Por qué la herramienta marca mi contraseña como débil cuando parece compleja?",
          answer: "El detector de vulnerabilidad puede marcar contraseñas aparentemente complejas como débiles por varias razones sutiles que afectan la seguridad. Problemas comunes incluyen: depender de patrones predecibles (como secuencias del teclado 'qwerty' o caracteres repetidos), usar variaciones conocidas que aparecen en bases de datos de brechas de seguridad, incorporar información personal fácil de adivinar, o seguir patrones comunes de sustitución (como 'pssw0rd') que específicamente atacan las herramientas de cracking de contraseñas. El análisis moderno de contraseñas va más allá de simples tipos de caracteres para evaluar vulnerabilidad real. El análisis avanzado considera factores como entropía (aleatoriedad), ataques basados en diccionario y reconocimiento de patrones que utilizan sofisticadas herramientas de hacking. Incluso contraseñas con símbolos pueden ser vulnerables si siguen patrones predecibles."
        },
        {
          question: "¿Con qué frecuencia debo revisar y actualizar mis contraseñas?",
          answer: "Debe utilizar un evaluador de fortaleza de contraseña para revisar sus contraseñas críticas al menos cada 3-6 meses y actualizarlas según sea necesario. Además, se recomienda verificar y cambiar contraseñas inmediatamente en situaciones específicas: tras cualquier noticia de una brecha de datos que afecte servicios que usted utiliza, cuando deba compartir una contraseña (requiriendo una nueva posteriormente), si ha iniciado sesión en un dispositivo público o potencialmente comprometido, cuando sospeche de acceso no autorizado a cualquier cuenta, o cuando ocurran cambios importantes en su vida (nuevo trabajo, mudanza). Implementar un horario de evaluación de seguridad para diferentes categorías de contraseñas (financieras, correo electrónico, redes sociales) ayuda a priorizar sus cuentas más sensibles. Recuerde que las contraseñas más fuertes son inútiles si han sido comprometidas en brechas de datos."
        },
        {
          question: "¿Qué es mejor: una contraseña corta compleja o una larga simple?",
          answer: "Una contraseña larga simple es generalmente más segura que una corta compleja, como demostrará el verificador de seguridad. La longitud proporciona beneficios de seguridad exponencialmente mayores que la complejidad sola. Por ejemplo, una contraseña de 16 caracteres que solo usa minúsculas (como 'cuatropalabrasmayusculas') es matemáticamente más difícil de descifrar mediante métodos de fuerza bruta que una contraseña de 8 caracteres con mezcla de tipos de caracteres (como 'Ps$w0rd'). Esto ocurre porque cada carácter adicional multiplica exponencialmente las posibles combinaciones que un hacker debe intentar. Sin embargo, el enfoque ideal mostrado por un análisis completo combina una longitud significativa (16+ caracteres) con una complejidad moderada (tipos de caracteres variados). Para máxima seguridad, la herramienta de evaluación recomienda frases secretas aleatorias que incorporen múltiples palabras no relacionadas con algunos números o símbolos mezclados."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Usar el Verificador de Fortaleza de Contraseña",
      steps: [
        "Ingrese su contraseña existente o propuesta en el campo seguro de entrada. El diseño enfocado en privacidad de la herramienta asegura que su contraseña nunca sea transmitida o almacenada durante el proceso de análisis de seguridad",
        "Revise la puntuación de <strong>fortaleza general</strong> mostrada en el medidor de color, que proporciona una indicación visual inmediata del nivel de seguridad de su contraseña, desde muy débil (rojo) hasta muy fuerte (verde)",
        "Examine la sección de <strong>análisis detallado</strong> para entender aspectos específicos de la fortaleza de su contraseña, incluyendo evaluación de longitud y métricas de diversidad de caracteres que impactan su calificación general de seguridad",
        "Preste atención a cualquier <strong>problema detectado</strong> resaltado en la sección de advertencias, que identifica vulnerabilidades específicas como patrones comunes, caracteres repetidos o componentes basados en diccionario",
        "Lea las <strong>sugerencias de mejora</strong> adaptadas a las debilidades de su contraseña, ofreciendo consejos específicos y accionables sobre cómo fortalecerla contra varios métodos de ataque",
        "Aplique los cambios recomendados para crear una contraseña más fuerte, luego <strong>vuelva a probar</strong> para verificar las mejoras y continúe refinándola hasta alcanzar una calificación de seguridad satisfactoria"
      ]
    },
    conclusion: "El Verificador de Fortaleza de Contraseña sirve como una herramienta esencial de seguridad en el paisaje digital actual donde las brechas de datos y ataques a contraseñas continúan aumentando. Al proporcionar un análisis detallado de vulnerabilidades de contraseñas y recomendaciones específicas de mejora, empodera a los usuarios para tomar control de su seguridad online. Recuerde que las contraseñas fuertes representan su primera línea de defensa contra accesos no autorizados – deben ser únicas para cada cuenta importante, suficientemente complejas y actualizadas regularmente. Para máxima seguridad, considere usar esta herramienta junto con un administrador de contraseñas confiable que pueda generar y almacenar contraseñas altamente seguras y únicas para todas sus cuentas. Tomarse el tiempo ahora para evaluar y fortalecer sus contraseñas puede salvarlo de complicaciones significativas derivadas de cuentas comprometidas en el futuro."
  }
}