export default {
    name: 'Generatore di IP Casuali - Genera Indirizzi IPv4/IPv6 Online',
    description: 'Generatore di IP casuali gratuito online che supporta indirizzi IPv4 e IPv6, IP pubblici e privati, filtraggio regionale, generazione in batch e molteplici formati di esportazione. Funziona interamente nel frontend per proteggere la privacy.',
    inputTitle: 'Configurazione di Generazione',
    outputTitle: 'Risultati della Generazione',
    generateBtn: 'Genera Indirizzi IP',
    loadSampleBtn: 'Carica Esempio e Genera',
    clearAll: 'Cancella Tutto',
    noOutput: 'Nessun risultato generato',
    preview: 'Anteprima Dati',
    
    ipVersionTitle: 'Versione IP',
    ipv4: 'IPv4',
    ipv6: 'IPv6',
    bothVersions: 'Entrambe le Versioni',
    
    ipTypeTitle: 'Tipo di IP',
    ipTypePublic: 'IP Pubblico',
    ipTypePrivate: 'IP Privato',
    ipTypeAny: 'Qualsiasi Tipo',
    
    regionTitle: 'Regione IP',
    allRegions: 'Tutte le Regioni',
    
    formatTitle: 'Formato di Output',
    formatPlain: 'Testo Semplice',
    formatList: 'Formato Elenco',
    
    optionsTitle: 'Opzioni Aggiuntive',
    includePort: 'Includi Numero di Porta',
    includeSubnet: 'Includi Maschera di Sottorete',
    includeGeo: 'Includi Informazioni Geografiche',
    
    batchTitle: 'Generazione in Batch',
    quantityLabel: 'Quantità',
    quantityPlaceholder: 'Inserisci quantità (1-1000)',
    
    generating: 'Generazione in corso...',
    generated: 'Generazione Completata',
    copySuccess: 'Copiato negli appunti',
    downloadSuccess: 'Download completato',
    invalidQuantity: 'Inserisci un numero tra 1-1000',
    
    resultCount: 'Generati {count} record',
    resultSummary: 'Riepilogo Risultati',
    showAll: 'Mostra Tutto',
    collapse: 'Comprimi',
    
    exportTitle: 'Formato di Esportazione',
    exportJson: 'Esporta JSON',
    exportCsv: 'Esporta CSV',
    exportTxt: 'Esporta TXT',
    copyBtn: 'Copia',
    downloadBtn: 'Scarica',
    viewDetails: 'Vedi Dettagli',
    
    regions: {
        US: 'Stati Uniti',
        EU: 'Europa',
        AS: 'Asia',
        CN: 'Cina',
        JP: 'Giappone',
        KR: 'Corea del Sud',
        AU: 'Australia',
        BR: 'Brasile',
        IN: 'India',
        RU: 'Russia'
    },
    
    csv: {
        ip: 'Indirizzo IP',
        version: 'Versione',
        port: 'Porta',
        subnet: 'Maschera di Sottorete',
        country: 'Paese',
        city: 'Città',
        isp: 'ISP'
    }
};
