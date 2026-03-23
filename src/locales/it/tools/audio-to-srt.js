export default {
    name: 'Audio a Sottotitoli SRT - Convertitore Online da Audio a Sottotitoli',
    description: 'Strumento online gratuito per convertire audio in sottotitoli SRT, supporta vari formati audio come WAV, MP3, FLAC, OGG in file di sottotitoli SRT. Rileva automaticamente i segmenti vocali tramite analisi dell\'energia audio, con regolazione della sensibilità, configurazione della durata dei sottotitoli e elaborazione batch, ideale per la creazione di sottotitoli video, trascrizione di podcast e altro ancora.',
    inputTitle: 'Input Audio',
    outputTitle: 'File Sottotitoli SRT Convertito',
    dragTip: 'Trascina e rilascia i file audio qui o clicca per caricare (supporta batch)',
    supported: 'Formati supportati: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'Converti in SRT',
    converting: 'Conversione in corso...',
    downloadBtn: 'Scarica SRT',
    batchDownload: 'Download Batch (ZIP)',
    noOutput: 'Nessun risultato di conversione',
    loadSample: 'Carica Audio di Esempio',
    preview: 'Anteprima Audio',
    clearAll: 'Cancella Tutto',
    previewBtn: 'Anteprima Sottotitoli',
    previewTitle: 'Anteprima Sottotitoli',
    subtitleCount: 'Numero di Sottotitoli',
    duration: 'Durata',
    fileSize: 'Dimensione File',
    
    // Opzioni impostazioni
    settingsTitle: 'Impostazioni Conversione SRT',
    sensitivityLabel: 'Sensibilità di Rilevamento',
    sensitivityHigh: 'Alta sensibilità (adatta per audio a basso volume)',
    sensitivityMedium: 'Sensibilità media (consigliata)',
    sensitivityLow: 'Bassa sensibilità (adatta per audio con molto rumore)',
    
    maxDurationLabel: 'Durata Massima Sottotitolo',
    maxDuration2: '2 secondi',
    maxDuration3: '3 secondi',
    maxDuration5: '5 secondi (consigliato)',
    maxDuration10: '10 secondi',
    
    minSilenceLabel: 'Intervallo Minimo di Silenzio',
    'minSilence0.3': '0,3 secondi (parlata veloce)',
    'minSilence0.5': '0,5 secondi (consigliato)',
    'minSilence0.8': '0,8 secondi (velocità normale)',
    'minSilence1.0': '1,0 secondo (parlata lenta)',
    
    encodingLabel: 'Codifica File',
    
    // Suggerimenti
    tipsTitle: 'Suggerimenti per l\'Uso',
    tipContent: 'Questo strumento analizza l\'energia audio per rilevare automaticamente i segmenti vocali e generare codici temporali SRT. I sottotitoli generati sono testi segnaposto che possono essere sostituiti con testo reale nel software di modifica dei sottotitoli in un secondo momento. Si consiglia di utilizzare audio chiaro con poco rumore di fondo per ottenere codici temporali più precisi.',
    convertError: 'Conversione fallita. Controlla il formato audio o riprova.',
    convertSuccess: 'Conversione completata con successo!',
    
    seoNote: 'Strumento conversione audio a sottotitoli SRT, convertitore online audio a sottotitoli, genera sottotitoli automaticamente dall\'audio, WAV a SRT, MP3 a SRT, strumento creazione sottotitoli video',
};
