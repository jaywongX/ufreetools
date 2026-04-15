export default {
    name: 'Zufälliger IP-Generator - IPv4/IPv6-Adressen online generieren',
    description: 'Kostenloser Online-Zufalls-IP-Generator, der IPv4- und IPv6-Adressen, öffentliche und private IPs, regionale Filterung, Batch-Generierung und mehrere Exportformate unterstützt. Läuft vollständig im Frontend zum Schutz der Privatsphäre.',
    inputTitle: 'Generierungskonfiguration',
    outputTitle: 'Generierungsergebnisse',
    generateBtn: 'IP-Adressen generieren',
    loadSampleBtn: 'Beispiel laden und generieren',
    clearAll: 'Alles löschen',
    noOutput: 'Keine Ergebnisse generiert',
    preview: 'Datenvorschau',
    
    ipVersionTitle: 'IP-Version',
    ipv4: 'IPv4',
    ipv6: 'IPv6',
    bothVersions: 'Beide Versionen',
    
    ipTypeTitle: 'IP-Typ',
    ipTypePublic: 'Öffentliche IP',
    ipTypePrivate: 'Private IP',
    ipTypeAny: 'Beliebiger Typ',
    
    regionTitle: 'IP-Region',
    allRegions: 'Alle Regionen',
    
    formatTitle: 'Ausgabeformat',
    formatPlain: 'Reintext',
    formatList: 'Listenformat',
    
    optionsTitle: 'Zusätzliche Optionen',
    includePort: 'Portnummer einbeziehen',
    includeSubnet: 'Subnetzmaske einbeziehen',
    includeGeo: 'Geografische Informationen einbeziehen',
    
    batchTitle: 'Batch-Generierung',
    quantityLabel: 'Menge',
    quantityPlaceholder: 'Menge eingeben (1-1000)',
    
    generating: 'Generierung läuft...',
    generated: 'Generierung abgeschlossen',
    copySuccess: 'In Zwischenablage kopiert',
    downloadSuccess: 'Download erfolgreich',
    invalidQuantity: 'Bitte geben Sie eine Zahl zwischen 1-1000 ein',
    
    resultCount: '{count} Datensätze generiert',
    resultSummary: 'Ergebniszusammenfassung',
    showAll: 'Alle anzeigen',
    collapse: 'Einklappen',
    
    exportTitle: 'Exportformat',
    exportJson: 'JSON exportieren',
    exportCsv: 'CSV exportieren',
    exportTxt: 'TXT exportieren',
    copyBtn: 'Kopieren',
    downloadBtn: 'Herunterladen',
    viewDetails: 'Details anzeigen',
    
    regions: {
        US: 'Vereinigte Staaten',
        EU: 'Europa',
        AS: 'Asien',
        CN: 'China',
        JP: 'Japan',
        KR: 'Südkorea',
        AU: 'Australien',
        BR: 'Brasilien',
        IN: 'Indien',
        RU: 'Russland'
    },
    
    csv: {
        ip: 'IP-Adresse',
        version: 'Version',
        port: 'Port',
        subnet: 'Subnetzmaske',
        country: 'Land',
        city: 'Stadt',
        isp: 'ISP'
    }
};
