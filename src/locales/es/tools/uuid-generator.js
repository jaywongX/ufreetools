export default {
  name: 'Generador de UUID',
  description: 'Generar UUIDs y GUIDs aleatorios con opciones personalizables, útil para claves de base de datos, nombres temporales de archivos, etc.',

  options: {
    version: 'Versión UUID',
    quantity: 'Cantidad',
    format: 'Opciones de Formato',
    includeDash: 'Incluir Guiones (-)',
    generateCount: 'Número de UUIDs'
  },

  versions: {
    v1: 'Versión 1 (Basada en tiempo)',
    v4: 'Versión 4 (Aleatoria)',
    v5: 'Versión 5 (Espacio de Nombres)',
    custom: 'Personalizado'
  },

  quantities: {
    single: 'Único',
    five: '5 UUIDs',
    ten: '10 UUIDs',
    twenty: '20 UUIDs'
  },

  formats: {
    default: 'Predeterminado',
    base64: 'Base64',
    binary: 'Binario',
    hex: 'Hexadecimal',
    noDash: 'Sin Guiones'
  },

  actions: {
    generate: 'Generar UUID',
    copy: 'Copiar',
    copyAll: 'Copiar Todos',
    clear: 'Limpiar Resultados',
    download: 'Descargar como TXT'
  },

  messages: {
    copied: '¡Copiado al portapapeles!',
    generated: 'UUIDs generados exitosamente',
    tooMany: 'La cantidad máxima permitida es 1000',
    invalidVersion: 'Versión UUID inválida',
    invalidNamespace: 'UUID de espacio de nombres inválido',
    copyFailed: 'Fallo al copiar'
  }
};