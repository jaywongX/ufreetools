export default {
  name: 'Convertidor de Timestamp',
  description: 'Convierte entre timestamps y fechas legibles con soporte para múltiples formatos y zonas horarias',

  options: {
    inputType: 'Tipo de Entrada',
    outputFormat: 'Formato de Salida',
    timezone: 'Zona Horaria',
    includeTime: 'Incluir Hora',
    format: 'Cadena de Formato'
  },

  inputTypes: {
    timestamp: 'Timestamp Unix',
    milliseconds: 'Milisegundos Unix',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: 'Fecha como Cadena'
  },

  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: 'Formato Local',
    relative: 'Tiempo Relativo',
    custom: 'Formato Personalizado'
  },

  actions: {
    convert: 'Convertir',
    nowTimestamp: 'Timestamp Actual',
    nowDate: 'Fecha Actual',
    copy: 'Copiar',
    clear: 'Limpiar',
    refresh: 'Actualizar',
    switch: 'Intercambiar'
  },

  messages: {
    copied: '¡Copiado al portapapeles!',
    convertSuccess: 'Conversión exitosa',
    convertError: 'Error al convertir el timestamp',
    invalidInput: 'Formato de entrada inválido',
    invalidFormat: 'Cadena de formato inválida'
  },

  timeUnits: {
    milliseconds: 'Milisegundos',
    seconds: 'Segundos',
    minutes: 'Minutos',
    hours: 'Horas',
    days: 'Días'
  },

  labels: {
    unixTimestamp: 'Timestamp Unix (segundos)',
    dateTime: 'Fecha y Hora',
    inputValue: 'Valor de Entrada',
    unitConversion: 'Conversión de Unidades de Tiempo',
    timeUnitLabel: 'Unidad de Tiempo'
  },

  placeholders: {
    enterTimestamp: 'Ingrese un timestamp Unix',
    enterValue: 'Ingrese un valor numérico'
  },

  info: {
    aboutTimestamp: 'Acerca del Timestamp Unix',
    timestampDescription: 'Un timestamp Unix representa la cantidad de segundos transcurridos desde el 1 de enero de 1970 (UTC). Se utiliza ampliamente en sistemas informáticos y aplicaciones para representación de tiempo.',
    commonUsage: 'Usos comunes:',
    usages: {
      database: 'Registros de timestamp en bases de datos',
      api: 'Representación de tiempo en comunicaciones API',
      logging: 'Entradas de registros (logs)',
      filesystem: 'Timestamps en sistemas de archivos'
    }
  }
};