export default {
  name: 'Convertitore Timestamp',
  description: 'Converti tra timestamp e date leggibili, supporta diversi formati e fusi orari',

  options: {
    inputType: 'Tipo input',
    outputFormat: 'Formato output',
    timezone: 'Fuso orario',
    includeTime: 'Includi orario',
    format: 'Stringa formato'
  },

  inputTypes: {
    timestamp: 'Timestamp Unix',
    milliseconds: 'Millisecondi Unix',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: 'Stringa data'
  },

  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: 'Formato localizzato',
    relative: 'Tempo relativo',
    custom: 'Formato personalizzato'
  },

  actions: {
    convert: 'Converti',
    nowTimestamp: 'Timestamp attuale',
    nowDate: 'Data attuale',
    copy: 'Copia',
    clear: 'Pulisci',
    refresh: 'Aggiorna',
    switch: 'Inverti'
  },

  messages: {
    copied: 'Copiato negli appunti!',
    convertSuccess: 'Conversione riuscita',
    convertError: 'Errore conversione timestamp',
    invalidInput: 'Formato input non valido',
    invalidFormat: 'Stringa formato non valida'
  },

  timeUnits: {
    milliseconds: 'Millisecondi',
    seconds: 'Secondi',
    minutes: 'Minuti',
    hours: 'Ore',
    days: 'Giorni'
  },

  labels: {
    unixTimestamp: 'Timestamp Unix (secondi)',
    dateTime: 'Data/Ora',
    inputValue: 'Valore input',
    unitConversion: 'Conversione unità temporali',
    timeUnitLabel: 'Unità temporale'
  },

  placeholders: {
    enterTimestamp: 'Inserisci timestamp Unix',
    enterValue: 'Inserisci valore'
  },

  info: {
    aboutTimestamp: 'Informazioni timestamp Unix',
    timestampDescription: 'Il timestamp Unix rappresenta i secondi trascorsi dal 1° gennaio 1970 00:00:00 UTC. È un formato di rappresentazione temporale ampiamente utilizzato in sistemi informatici e applicazioni.',
    commonUsage: 'Usi comuni:',
    usages: {
      database: 'Registrazione tempi database',
      api: 'Rappresentazione temporale in API',
      logging: 'Registrazione log',
      filesystem: 'Timestamp filesystem'
    }
  }
};