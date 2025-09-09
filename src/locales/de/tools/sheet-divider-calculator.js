export default {
    name: 'Kartenblatt-Rechner - Online-Tool zur Abfrage von Kartenblatt-Nummern',
    description: 'Berechnung von Kartenblatt-Nummern basierend auf Koordinaten, Unterstützung verschiedener Maßstäbe und Projektionsmethoden',
    icon: 'map',
    tags: ['Karte', 'Teilung', 'Koordinaten', 'Maßstab', 'Projektion'],
    
    // Benutzeroberfläche
    ui: {
        title: 'Kartenblatt-Rechner',
        subtitle: 'Berechnung von Kartenblatt-Nummern basierend auf Koordinaten',
        inputTitle: 'Koordinateneingabe',
        outputTitle: 'Berechnungsergebnisse',
        
        // Koordinateneingabe
        latitudePlaceholder: 'Breitengrad (z.B.: 39.9042)',
        longitudePlaceholder: 'Längengrad (z.B.: 116.4074)',
        batchInputPlaceholder: 'Stapeleingabe: Breitengrad,Längengrad,Beschreibung (optional)\nBeispiel: 39.9042,116.4074,Peking\n40.7128,-74.0060,New York',
        
        // Schaltflächen
        calculateButton: 'Kartenblatt berechnen',
        clearButton: 'Alles löschen',
        loadSampleButton: 'Beispieldaten laden',
        exportExcelButton: 'Nach Excel exportieren',
        exportPDFButton: 'Als PDF exportieren',
        
        // Parametereinstellungen
        parameterSettings: 'Parametereinstellungen',
        scaleLabel: 'Maßstab',
        zoneMethodLabel: 'Zonenmethode',
        threeDegreeZone: '3-Grad-Zone',
        sixDegreeZone: '6-Grad-Zone',
        
        // Ergebnisanzeige
        resultColumns: {
            sheetNumber: 'Kartenblatt-Nummer',
            latitude: 'Breitengrad',
            longitude: 'Längengrad',
            scale: 'Maßstab',
            zone: 'Zone',
            centralMeridian: 'Zentralmeridian',
            description: 'Beschreibung'
        },
        
        // Kartengitter
        gridTitle: 'Kartengitter',
        noResults: 'Keine Ergebnisse zum Anzeigen',
        
        // Nachrichten
        invalidCoordinates: 'Ungültige Koordinaten, bitte überprüfen Sie Ihre Eingaben',
        calculationSuccess: 'Kartenblatt erfolgreich berechnet',
        excelExportSuccess: 'Daten erfolgreich nach Excel exportiert',
        pdfExportSuccess: 'Daten erfolgreich als PDF exportiert',
        exportFailed: 'Export fehlgeschlagen, bitte versuchen Sie es erneut',
        noDataToExport: 'Keine Daten zum Exportieren',
        
        // Beschreibungen
        singlePointDesc: 'Einzelpunkt',
        batchPointDesc: 'Stapelpunkt',
        
        // Exporttitel
        exportFileName: 'Kartenblatt_Berechnungsergebnisse',
        exportTitle: 'Kartenblatt-Berechnungsergebnisse'
    }
}