export default {
  name: 'Ofuscador de JavaScript',
  description: 'Protege tu código JavaScript ofuscándolo con diversas técnicas',
  input: {
    title: 'JavaScript de Entrada',
    placeholder: 'Ingrese o pegue su código JavaScript aquí',
    loadSample: 'Cargar Ejemplo',
    clearInput: 'Limpiar Entrada',
    uploadFile: 'Subir Archivo JS'
  },
  output: {
    title: 'Código Ofuscado',
    copied: 'Código copiado al portapapeles',
    download: 'Descargar Código Ofuscado',
    copyOutput: 'Copiar Código',
    clearOutput: 'Limpiar Salida'
  },
  options: {
    title: 'Opciones de Ofuscación',
    compact: 'Compactar Código',
    selfDefending: 'Autodefensa',
    controlFlowFlattening: 'Aplanamiento del Flujo de Control',
    controlFlowFlatteningThreshold: 'Umbral de Aplanamiento del Flujo de Control',
    deadCodeInjection: 'Inyección de Código Muerto',
    deadCodeInjectionThreshold: 'Umbral de Inyección de Código Muerto',
    debugProtection: 'Protección contra Depuración',
    debugProtectionInterval: 'Intervalo de Protección contra Depuración',
    disableConsoleOutput: 'Deshabilitar Salida por Consola',
    domainLock: 'Bloqueo por Dominio',
    domainLockRedirectUrl: 'URL de Redirección para Bloqueo de Dominio',
    identifierNamesGenerator: 'Generador de Nombres de Identificadores',
    identifiersPrefix: 'Prefijo de Identificadores',
    renameGlobals: 'Renombrar Globales',
    reservedNames: 'Nombres Reservados',
    reservedStrings: 'Cadenas Reservadas',
    rotateStringArray: 'Rotar Arreglo de Cadenas',
    seed: 'Semilla',
    shuffleStringArray: 'Barajar Arreglo de Cadenas',
    sourceMap: 'Mapa de Código Fuente (Source Map)',
    sourceMapBaseUrl: 'URL Base del Mapa de Código Fuente',
    sourceMapFileName: 'Nombre del Archivo del Mapa de Código Fuente',
    splitStrings: 'Dividir Cadenas',
    splitStringsChunkLength: 'Longitud de Fragmentos al Dividir Cadenas',
    stringArray: 'Arreglo de Cadenas',
    stringArrayEncoding: 'Codificación del Arreglo de Cadenas',
    stringArrayThreshold: 'Umbral del Arreglo de Cadenas',
    target: 'Objetivo',
    transformObjectKeys: 'Transformar Claves de Objetos',
    unicodeEscapeSequence: 'Secuencia de Escape Unicode'
  },
  presets: {
    title: 'Preajustes',
    low: 'Baja Ofuscación',
    medium: 'Ofuscación Media',
    high: 'Alta Ofuscación',
    custom: 'Personalizado'
  },
  actions: {
    obfuscate: 'Ofuscar',
    reset: 'Restablecer Opciones',
    savePreset: 'Guardar Preajuste',
    loadPreset: 'Cargar Preajuste'
  },
  messages: {
    obfuscationSuccess: 'Código ofuscado correctamente',
    obfuscationFailed: 'Fallo en la ofuscación: {error}',
    emptyCode: 'Por favor ingrese el código JavaScript a ofuscar',
    uploadSuccess: 'Archivo subido exitosamente',
    presetSaved: 'Preajuste guardado',
    presetLoaded: 'Preajuste cargado'
  },
  help: {
    title: 'Ayuda sobre Opciones',
    stringArrayDesc: 'Mueve literales de cadena a un arreglo especial y los reemplaza con llamadas al arreglo',
    controlFlowDesc: 'Habilita el aplanamiento del flujo de control del código, dificultando seguir la lógica',
    deadCodeDesc: 'Inyecta código muerto aleatorio para confundir a atacantes',
    selfDefendingDesc: 'Hace que la salida sea resistente ante alteraciones de formato'
  }
}