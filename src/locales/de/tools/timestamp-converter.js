export default {
  name: 'Unix-Zeitstempel-Konverter',
  description: 'Konvertiert zwischen Unix-Zeitstempeln und menschenlesbaren Datumsangaben mit Unterstützung für verschiedene Formate und Zeitzonen',

  options: {
    inputType: 'Eingabetyp',
    outputFormat: 'Ausgabeformat',
    timezone: 'Zeitzone',
    includeTime: 'Uhrzeit einschließen',
    format: 'Formatzeichenfolge'
  },

  inputTypes: {
    timestamp: 'Unix-Zeitstempel (Sekunden)',
    milliseconds: 'Unix-Millisekunden',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: 'Datum-Zeichenkette'
  },

  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: 'Lokales Format',
    relative: 'Relative Zeitangabe',
    custom: 'Benutzerdefiniertes Format'
  },

  actions: {
    convert: 'Konvertieren',
    nowTimestamp: 'Aktueller Zeitstempel',
    nowDate: 'Aktuelles Datum',
    copy: 'Kopieren',
    clear: 'Löschen',
    refresh: 'Aktualisieren',
    switch: 'Wechseln'
  },

  messages: {
    copied: 'In die Zwischenablage kopiert!',
    convertSuccess: 'Konvertierung erfolgreich',
    convertError: 'Fehler bei der Konvertierung des Zeitstempels',
    invalidInput: 'Ungültiges Eingabeformat',
    invalidFormat: 'Ungültige Formatzeichenfolge'
  },

  timeUnits: {
    milliseconds: 'Millisekunden',
    seconds: 'Sekunden',
    minutes: 'Minuten',
    hours: 'Stunden',
    days: 'Tage'
  },

  labels: {
    unixTimestamp: 'Unix-Zeitstempel (Sekunden)',
    dateTime: 'Datum und Uhrzeit',
    inputValue: 'Eingabewert',
    unitConversion: 'Zeiteinheiten-Umrechnung',
    timeUnitLabel: 'Zeiteinheit'
  },

  placeholders: {
    enterTimestamp: 'Unix-Zeitstempel eingeben',
    enterValue: 'Wert eingeben'
  },

  info: {
    aboutTimestamp: 'Über Unix-Zeitstempel',
    timestampDescription: 'Ein Unix-Zeitstempel gibt die Anzahl der Sekunden seit dem 1. Januar 1970 00:00:00 UTC an. Diese Darstellung wird häufig in Computersystemen und Anwendungen verwendet.',
    commonUsage: 'Häufige Anwendungsfälle:',
    usages: {
      database: 'Zeitstempel in Datenbanken',
      api: 'Zeitangaben in API-Kommunikation',
      logging: 'Protokollierung',
      filesystem: 'Dateisystem-Zeitstempel'
    }
  }
};