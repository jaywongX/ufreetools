export default {
    name: 'Strumento di Rimozione Duplicati Excel - Rimuovi Dati Duplicati nei Fogli di Calcolo Online',
    description: 'Strumento online gratuito per la rimozione di duplicati Excel, supporta file xlsx/xls/csv. Identifica intelligentemente i dati duplicati, fornisce diverse regole di rimozione, supporta l\'elaborazione batch ed esportazione con un clic in formato Excel/CSV',
    inputTitle: 'Carica File Excel',
    outputTitle: 'Risultati Rimozione Duplicati',
    dragTip: 'Trascina e rilascia i file Excel qui o clicca per caricare',
    supported: 'Formati supportati: XLSX, XLS, CSV',
    removeDuplicatesBtn: 'Inizia Rimozione Duplicati',
    downloadBtn: 'Scarica Risultati',
    noOutput: 'Nessun risultato di rimozione duplicati',
    loadSample: 'Carica Dati di Esempio',
    preview: 'Anteprima Dati',
    clearAll: 'Cancella Tutto',
    originalData: 'Dati Originali',
    deleteFile: 'Elimina File',
    batchDownload: 'Download Batch (ZIP)',
    exportFormat: 'Formato di Esportazione',
    dataQuality: 'Qualità Dati',
    zoomIn: 'Ingrandisci',
    zoomOut: 'Riduci',
    resetView: 'Reimposta Vista',
    fullscreen: 'Anteprima a Schermo Intero',
    
    // Configurazione regole rimozione duplicati
    duplicateRulesTitle: 'Configurazione Regole Rimozione Duplicati',
    ruleType: 'Tipo Rimozione Duplicati',
    ruleTypes: {
        fullRow: 'Rimozione Duplicati Intera Riga',
        singleColumn: 'Rimozione Duplicati Colonna Singola',
        multiColumn: 'Rimozione Duplicati Combinazione Multi Colonna'
    },
    selectedColumns: 'Seleziona Colonne',
    selectColumns: 'Seleziona le colonne per rimuovere i duplicati',
    caseSensitive: 'Distingui Maiuscole/Minuscole',
    trimSpaces: 'Rimuovi Spazi Iniziali/Finali',
    ignoreEmpty: 'Ignora Valori Vuoti',
    fuzzyMatch: 'Corrispondenza Approssimata',
    similarityThreshold: 'Soglia di Somiglianza',
    
    // Statistiche dati
    statisticsTitle: 'Statistiche Dati',
    originalRows: 'Righe Originali',
    duplicateRows: 'Righe Duplicate',
    uniqueRows: 'Righe Dopo Rimozione Duplicati',
    duplicateRate: 'Tasso di Duplicati',
    
    // Tabella anteprima
    previewTitle: 'Anteprima Dati',
    showDuplicates: 'Mostra Duplicati',
    showUnique: 'Mostra Elementi Unici',
    highlightDuplicates: 'Evidenzia Duplicati',
    
    // Opzioni esportazione
    exportOptions: 'Opzioni Esportazione',
    includeHeaders: 'Includi Intestazioni',
    encoding: 'Codifica File',
    delimiter: 'Delimitatore',
    
    // Pulsanti azione
    processBtn: 'Elabora Dati',
    resetBtn: 'Reimposta',
    saveTemplate: 'Salva Modello',
    loadTemplate: 'Carica Modello',
    
    // Gestione modelli
    savedTemplates: 'Modelli Salvati',
    deleteTemplate: 'Elimina',
    templateNamePrompt: 'Inserisci il nome del modello:',
    templateSaved: 'Modello salvato con successo!',
    deleteTemplateConfirm: 'Sei sicuro di voler eliminare questo modello?',
    templateLoadError: 'Impossibile caricare il modello:',
    
    // Dati di esempio
    sampleHeaders: {
        name: 'Nome',
        email: 'Email',
        phone: 'Telefono',
        department: 'Dipartimento'
    },
    sampleData: {
        zhangsan: 'Mario Rossi',
        lisi: 'Luigi Bianchi',
        wangwu: 'Giovanni Verdi',
        zhaoliu: 'Francesca Neri',
        techDept: 'Dipartimento Tecnologia',
        salesDept: 'Dipartimento Vendite',
        hrDept: 'Dipartimento Risorse Umane',
        financeDept: 'Dipartimento Finanze'
    },
    
    // Relativo all'esportazione
    exportSheetName: 'Risultati Rimozione Duplicati',
    exportFileName: 'Risultati Rimozione Duplicati',
    jsonMetadataTitle: 'Risultati Rimozione Duplicati Excel',
    columnNumber: 'Colonna {number}',
    
    // Messaggi di errore
    processError: 'Errore nell\'elaborazione del file, controlla il formato del file'
};