export default {
  name: 'Generador de Contraseñas',
  description: 'Genere contraseñas seguras y aleatorias con opciones personalizables',

  options: {
    length: 'Longitud de la Contraseña',
    quantity: 'Número de Contraseñas',
    includeLowercase: 'Letras Minúsculas (a-z)',
    includeUppercase: 'Letras Mayúsculas (A-Z)',
    includeNumbers: 'Números (0-9)',
    includeSymbols: 'Símbolos (!@#$%)',
    excludeSimilar: 'Excluir Caracteres Similares (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: 'Excluir Símbolos Ambiguos ({}<>[]()\'"`\\)',
    requireAll: 'Requerir Todos los Tipos de Caracteres',
    noConsecutive: 'No Caracteres Similares Consecutivos',
    advancedOptions: 'Opciones Avanzadas',
    characterTypes: 'Tipos de Caracteres'
  },

  presets: {
    standard: 'Estándar',
    strong: 'Fuerte',
    memorable: 'Memorable',
    pin: 'PIN',
    pronounceable: 'Pronunciable',
    custom: 'Personalizado',
    easyToRemember: 'Fácil de Recordar',
    balanced: 'Equilibrado',
    secure: 'Seguro'
  },

  strength: {
    title: 'Fortaleza de la Contraseña',
    veryWeak: 'Muy Débil',
    weak: 'Débil', 
    medium: 'Medio',
    strong: 'Fuerte',
    veryStrong: 'Muy Fuerte',
    unknown: 'Desconocido'
  },

  actions: {
    generate: 'Generar Contraseñas',
    regenerate: 'Regenerar',
    copy: 'Copiar',
    copyAll: 'Copiar Todas',
    clear: 'Limpiar',
    expand: 'Expandir',
    collapse: 'Colapsar'
  },

  messages: {
    copied: '¡Copiado al portapapeles!',
    allCopied: '¡Todas las contraseñas copiadas al portapapeles!',
    generated: 'Contraseñas generadas exitosamente',
    invalidOptions: 'Por favor seleccione al menos un tipo de carácter',
    tooManyPasswords: 'El número máximo de contraseñas es 100',
    clickToGenerate: 'Haga clic en el botón de arriba para generar contraseñas'
  },

  errors: {
    copyFailed: 'Error al copiar la contraseña: ',
    copyFailedManual: 'Error al copiar, por favor copie manualmente'
  },

  results: {
    title: 'Contraseñas Generadas'
  },

  units: {
    passwords: 'contraseñas'
  },

  tips: {
    title: 'Consejos de Seguridad para Contraseñas',
    useLength: 'Use contraseñas con al menos 12 caracteres para mejor seguridad',
    useDifferent: 'Use una contraseña diferente para cada sitio web o servicio',
    changeRegularly: 'Cambie las contraseñas de cuentas importantes regularmente',
    useManager: 'Considere usar un administrador de contraseñas para almacenar de forma segura contraseñas complejas',
    use2FA: 'Active autenticación de dos factores para protección adicional'
  }
};