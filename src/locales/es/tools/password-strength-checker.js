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
  }
};