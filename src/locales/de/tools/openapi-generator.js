export default {
  name: 'OpenAPI → TypeScript Client Generator',
  description: 'Generiert automatisch TypeScript Interfaces und Client-Code basierend auf OpenAPI-Spezifikationen, verbessert die Frontend-Backend-Zusammenarbeit',

  // Optionen
  options: {
    exportSchemas: 'Alle Modelldefinitionen exportieren',
    generateClient: 'API-Client-Code generieren',
    addComments: 'Kommentare und Dokumentation hinzufügen',
    useEnums: 'TypeScript Enums verwenden (statt String-Literal-Typen)',
    indentSize: 'Einrückungsgröße',
    operationType: 'Operationstyp',
    displayOptions: 'Anzeigeoptionen'
  },

  // Eingabemodi
  inputMode: {
    toggleToFile: 'Zu Dateiupload wechseln',
    toggleToText: 'Zu Texteingabe wechseln',
    loadExample: 'Beispiel laden'
  },

  // Dateiupload
  fileUpload: {
    dragAndDrop: 'OpenAPI-Datei hierher ziehen oder klicken zum Hochladen',
    supportedFormats: 'Unterstützte Formate: .json, .yaml und .yml',
    fileSelected: 'Ausgewählt: {0} ({1})'
  },

  // Texteingabe
  textInput: {
    placeholder: 'OpenAPI-Spezifikation (JSON oder YAML) hier einfügen...'
  },

  // Aktionen
  actions: {
    generate: 'TypeScript-Code generieren',
    processing: 'Wird verarbeitet...',
    clear: 'Zurücksetzen',
    copy: 'Code kopieren',
    download: 'Code herunterladen'
  },

  // Ergebnisse
  results: {
    generatedCode: 'Generierter TypeScript-Code',
    copied: 'In die Zwischenablage kopiert',
    error: 'Fehler',
    characterCount: 'Zeichenanzahl: {0}'
  },

  // Fehlermeldungen
  errors: {
    parseError: 'OpenAPI-Spezifikation konnte nicht geparst werden. Bitte stellen Sie ein gültiges JSON- oder YAML-Format bereit.',
    invalidSpec: 'Ungültige OpenAPI-Spezifikation. Keine openapi- oder swagger-Versionskennung gefunden.',
    processingError: 'Fehler bei der Verarbeitung der OpenAPI-Spezifikation: {0}'
  }
};