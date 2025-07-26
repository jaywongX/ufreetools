export default {
  name: 'Mock API Generator',
  description: 'Generiert Mock APIs basierend auf OpenAPI-Spezifikationen',

  // Optionen
  options: {
    version: 'OpenAPI Version',
    format: 'Ausgabeformat',
    includeExamples: 'Beispielantworten einbeziehen',
    responseDynamism: 'Antwortdynamik',
    responseType: 'Antworttyp',
    arrayLength: 'Array-Länge',
    responseFormat: 'Antwortformat'
  },

  // Ausgabeformate
  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },

  // Aktionen
  actions: {
    generate: 'Mock generieren',
    preview: 'API Vorschau',
    clear: 'Zurücksetzen',
    copy: 'Code kopieren',
    download: 'Herunterladen',
    uploadSpec: 'OpenAPI-Spezifikation hochladen',
    uploadJava: 'Java-Klassendatei hochladen',
    generateJson: 'JSON generieren',
    generateBuilder: 'Builder generieren',
    format: 'Formatieren'
  },

  // Nachrichten
  messages: {
    copied: 'In die Zwischenablage kopiert!',
    generationSuccess: 'Mock API erfolgreich generiert',
    generationError: 'Fehler beim Generieren der Mock API',
    specRequired: 'Bitte OpenAPI-Spezifikation bereitstellen',
    fileUploaded: 'Datei hochgeladen',
    parseError: 'Java-Klasse konnte nicht geparst werden - bitte Dateiformat überprüfen'
  },

  // Hilfetext
  help: {
    uploadHint: 'Unterstützt .java Dateien - automatische Analyse der Klassenstruktur zur Mock-Konfiguration. Mehrstufige Objekteigenschaften werden derzeit nicht unterstützt.'
  },

  // Felder
  fields: {
    title: 'Felddefinitionen',
    addField: 'Feld hinzufügen',
    addChildField: 'Unterfeld hinzufügen',
    fieldName: 'Feldname'
  },

  // Feldtypen
  fieldTypes: {
    string: 'String',
    number: 'Zahl',
    boolean: 'Boolean',
    date: 'Datum',
    name: 'Name',
    email: 'E-Mail',
    phone: 'Telefon',
    address: 'Adresse',
    id: 'ID',
    image: 'Bild-URL',
    array: 'Array',
    object: 'Objekt'
  },

  // Array
  array: {
    itemType: 'Array-Elementtyp',
    arrayFields: 'Array-Elementfelder'
  },

  // Objekt
  object: {
    childFields: 'Unterfelder'
  },

  // Antworttypen
  responseTypes: {
    object: 'Einzelnes Objekt',
    array: 'Objekt-Array',
    custom: 'Benutzerdefinierte Struktur'
  },

  // Antwortformate
  responseFormats: {
    dataOnly: 'Nur Daten',
    standard: 'Standard REST-Antwort (code, data, message)'
  },

  // Platzhalter
  placeholder: {
    output: '// Generierte Mock-Daten werden hier angezeigt'
  }
};