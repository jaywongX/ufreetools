export default {
    name: 'Excel-Duplikatentfernungstool - Online-Tabellendaten-Duplikatentferner',
    description: 'Kostenloses Online-Tool zur Excel-Duplikatentfernung, unterstützt xlsx/xls/csv-Dateien. Erkennt intelligent doppelte Daten, bietet mehrere Entfernungsregeln, unterstützt Batch-Verarbeitung und Export mit einem Klick im Excel/CSV-Format',
    inputTitle: 'Excel-Datei hochladen',
    outputTitle: 'Ergebnisse der Duplikatentfernung',
    dragTip: 'Ziehen Sie Excel-Dateien hierher oder klicken Sie zum Hochladen',
    supported: 'Unterstützte Formate: XLSX, XLS, CSV',
    removeDuplicatesBtn: 'Duplikatentfernung starten',
    downloadBtn: 'Ergebnisse herunterladen',
    noOutput: 'Keine Duplikatentfernungs-Ergebnisse',
    loadSample: 'Beispieldaten laden',
    preview: 'Datenvorschau',
    clearAll: 'Alles löschen',
    originalData: 'Originaldaten',
    deleteFile: 'Datei löschen',
    batchDownload: 'Batch-Download (ZIP)',
    exportFormat: 'Exportformat',
    dataQuality: 'Datenqualität',
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    resetView: 'Ansicht zurücksetzen',
    fullscreen: 'Vollbild-Vorschau',
    
    // Konfiguration der Duplikatentfernungsregeln
    duplicateRulesTitle: 'Konfiguration der Duplikatentfernungsregeln',
    ruleType: 'Typ der Duplikatentfernung',
    ruleTypes: {
        fullRow: 'Vollzeilen-Duplikatentfernung',
        singleColumn: 'Einzelspalten-Duplikatentfernung',
        multiColumn: 'Mehrspalten-Kombinations-Duplikatentfernung'
    },
    selectedColumns: 'Spalten auswählen',
    selectColumns: 'Bitte wählen Sie die Spalten für die Duplikatentfernung aus',
    caseSensitive: 'Groß-/Kleinschreibung beachten',
    trimSpaces: 'Führende/Nachfolgende Leerzeichen entfernen',
    ignoreEmpty: 'Leere Werte ignorieren',
    fuzzyMatch: 'Ungenaue Übereinstimmung',
    similarityThreshold: 'Ähnlichkeitsschwelle',
    
    // Datenstatistiken
    statisticsTitle: 'Datenstatistiken',
    originalRows: 'Originalzeilen',
    duplicateRows: 'Doppelte Zeilen',
    uniqueRows: 'Zeilen nach Duplikatentfernung',
    duplicateRate: 'Duplikatenrate',
    
    // Vorschautabelle
    previewTitle: 'Datenvorschau',
    showDuplicates: 'Duplikate anzeigen',
    showUnique: 'Einzigartige Elemente anzeigen',
    highlightDuplicates: 'Duplikate hervorheben',
    
    // Exportoptionen
    exportOptions: 'Exportoptionen',
    includeHeaders: 'Kopfzeilen einbeziehen',
    encoding: 'Dateikodierung',
    delimiter: 'Trennzeichen',
    
    // Aktionsbuttons
    processBtn: 'Daten verarbeiten',
    resetBtn: 'Zurücksetzen',
    saveTemplate: 'Vorlage speichern',
    loadTemplate: 'Vorlage laden',
    
    // Vorlagenverwaltung
    savedTemplates: 'Gespeicherte Vorlagen',
    deleteTemplate: 'Löschen',
    templateNamePrompt: 'Bitte geben Sie den Vorlagennamen ein:',
    templateSaved: 'Vorlage erfolgreich gespeichert!',
    deleteTemplateConfirm: 'Sind Sie sicher, dass Sie diese Vorlage löschen möchten?',
    templateLoadError: 'Fehler beim Laden der Vorlage:',
    
    // Beispieldaten
    sampleHeaders: {
        name: 'Name',
        email: 'E-Mail',
        phone: 'Telefon',
        department: 'Abteilung'
    },
    sampleData: {
        zhangsan: 'Max Mustermann',
        lisi: 'Erika Musterfrau',
        wangwu: 'Hans Mueller',
        zhaoliu: 'Anna Schmidt',
        techDept: 'Technikabteilung',
        salesDept: 'Verkaufsabteilung',
        hrDept: 'Personalabteilung',
        financeDept: 'Finanzabteilung'
    },
    
    // Export-bezogen
    exportSheetName: 'Ergebnisse der Duplikatentfernung',
    exportFileName: 'Ergebnisse der Duplikatentfernung',
    jsonMetadataTitle: 'Excel-Duplikatentfernungs-Ergebnisse',
    columnNumber: 'Spalte {number}',
    
    // Fehlermeldungen
    processError: 'Fehler bei der Dateiverarbeitung, bitte überprüfen Sie das Dateiformat'
};