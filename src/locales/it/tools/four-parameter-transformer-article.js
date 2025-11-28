export default {
    title: 'Trasformatore a Quattro Parametri: Guida Batch per la Trasformazione di Similarità Planare e la Trasformazione di Helmert',
    functionTitle: 'Come il Trasformatore a Quattro Parametri Garantisce l\'Integrazione delle Coordinate Regionali con Un Solo Clic?',
    intro: '<p>Il trasformatore a quattro parametri è basato su modelli di similarità planare, Bursa semplificato e Helmert, coprendo tutti i parametri inclusi la traslazione ΔX, ΔY, la rotazione θ e la scala m. Attraverso algoritmi frontend puri, il sistema può completare calcoli diretti/inversi di punto singolo e batch localmente nel browser, fornendo vettori residui, RMSE, intervalli di confidenza al 95% e mappe di calore dell\'accuratezza in tempo reale, garantendo che ogni integrazione delle coordinate sia tracciabile, verificabile e valutabile.</p>',
    useCasesTitle: 'Funzioni dello Strumento e Scenari di Applicazione',
    useCases: {
        first: '<strong>Integrazione delle Coordinate Ingengeristiche</strong>: Nei progetti di rinnovo urbano o trasporto ferroviario, mappa rapidamente i sistemi di coordinate indipendenti locali in sistemi di coordinate ingegneristici unificati, migliorando l\'efficienza della collaborazione in progettazione e costruzione.',
        second: '<strong>Mosaico di Proiezione Regionale</strong>: I risultati del telerilevamento e degli UAV spesso provengono da diverse zone di proiezione, il trasformatore a quattro parametri può aggiornare batch di punti di controllo planari per raggiungere un giunto senza soluzione di continuità.',
        third: '<strong>Fusione di Sistemi Planari Personalizzati</strong>: Integrando sistemi di coordinate autocostruiti in fabbriche o parchi industriali, utilizzando il modello a quattro parametri per eliminare differenze di scala e rotazione, raggiungendo coerenza tra disegni e condizioni sul campo.',
        fourth: '<strong>Revisione dei Risultati e Accettazione</strong>: Genera istogrammi di distribuzione dei residui e intervalli di confidenza per presentare rapporti di valutazione quantitativi a clienti o autorità di regolamentazione.'
    },
    tipTitle: 'Immagine della Pagina del Prodotto',
    logoAlt: 'Anteprima del Prodotto del Trasformatore a Quattro Parametri',
    tipContent: 'Questa illustrazione può essere analizzata dai motori di ricerca per snippet multimediali ricchi nei risultati di ricerca.',
    conclusion: '<p>Con il trasformatore a quattro parametri, i team di rilevamento, progettazione e supervisione possono completare conversioni localizzate, revisioni dei residui e output di rapporti senza divulgare le coordinate originali, soddisfacendo i requisiti del ciclo di vita del progetto per tracciabilità e verifica dei dati. Per ulteriori trasformazioni di zone di proiezione, può essere utilizzato con lo <a href="https://www.ufreetools.com/tool/coordinate-zone-switcher" target="_blank">Strumento di Cambio Zona Coordinate Batch</a>; per gli standard internazionali, visitare <a href="https://www.ogc.org/" target="_blank" rel="noopener noreferrer">Trasformazione Coordinate OGC</a> per ulteriori indicazioni.</p>',
    faqTitle: 'Domande Frequenti',
    faqs: {
        q1: {
            question: 'Come il Trasformatore a Quattro Parametri garantisce l\'accuratezza e la stabilità della trasformazione di similarità planare?',
            answer: '<p>Lo strumento utilizza l\'adeguamento ai minimi quadrati per risolvere ΔX, ΔY, θ, m, e produce RMSE, residuo massimo e intervallo di confidenza al 95%. Gli utenti possono rivedere le operazioni matriciali attraverso i log per verificare l\'accuratezza della trasformazione di similarità planare.</p>'
        },
        q2: {
            question: 'Le coordinate errate possono essere automaticamente saltate durante l\'importazione batch?',
            answer: '<p>Sì. Se vengono trovati conteggi di colonne incoerenti o dati anomali durante la fase di analisi, il sistema registrerà e salterà tale voce nel log, continuando a elaborare le coordinate rimanenti per garantire una conversione batch ininterrotta.</p>'
        },
        q3: {
            question: 'Il Trasformatore a Quattro Parametri supporta i calcoli diretti e inversi?',
            answer: '<p>Sì. Lo strumento fornisce pulsanti di calcolo diretto (sorgente → destinazione) e calcolo inverso (destinazione → sorgente), facilitando il confronto delle coordinate prima e dopo la trasformazione e generando visualizzazioni sovrapposte.</p>'
        },
        q4: {
            question: 'Come visualizzare la distribuzione dei residui nel Trasformatore a Quattro Parametri?',
            answer: '<p>Dopo aver completato la conversione, il sistema disegna automaticamente grafici di distribuzione dei punti di controllo, istogrammi dei residui e griglie di mappa di calore dell\'accuratezza, aiutandoti a determinare se i gruppi di punti sono uniformi e gli errori sono concentrati.</p>'
        },
        q5: {
            question: 'Possono essere citati i rapporti generati dal Trasformatore a Quattro Parametri?',
            answer: '<p>Sì. L\'area dei risultati supporta l\'esportazione CSV, i log possono essere copiati con un clic, e i grafici possono essere catturati e incorporati in rapporti tecnici, soddisfacendo i requisiti di accettazione o archiviazione in ingegneria.</p>'
        }
    },
    tutorialTitle: 'Guida Operativa del Trasformatore a Quattro Parametri',
    steps: {
        step1: {
            title: 'Preparare le Coordinate Sorgente e i Punti di Controllo',
            description: 'Prima organizza le coordinate sorgente con le coordinate destinazione corrispondenti, e conferma il formato del delimitatore, assicurandoti che ogni riga di dati contenga X, Y, e valori destinazione opzionali e nomi dei punti.'
        },
        step2: {
            title: 'Selezionare il Modello e Inserire i Parametri',
            description: 'Nelle "Impostazioni del Modello", seleziona similarità planare, modello Bursa semplificato o modello Helmert, inserisci ΔX, ΔY, θ, m, o lascia vuoto per attendere i risultati dell\'adeguamento.'
        },
        step3: {
            title: 'Caricare un Esempio o Importare un File',
            description: 'Puoi utilizzare "Carica Esempio" per un\'esperienza rapida, o trascinare file CSV/TXT per importare grandi quantità di coordinate e analizzarle automaticamente.'
        },
        step4: {
            title: 'Eseguire l\'Adeguamento e la Conversione',
            description: 'Incolla le coordinate abbinate nell\'area di soluzione dei punti comuni, clicca su "Adeguamento di Similarità Planare" per ottenere i parametri ottimali, quindi esegui il calcolo diretto o inverso per completare la conversione batch.'
        },
        step5: {
            title: 'Visualizzare i Log e la Visualizzazione',
            description: 'I log in tempo reale mostreranno i processi di analisi, adeguamento, conversione e statistiche, mentre disegnano la distribuzione dei punti di controllo, gli istogrammi dei residui e la panoramica della mappa di calore.'
        },
        step6: {
            title: 'Esportare i Risultati e Condividerli',
            description: 'Dopo aver confermato i risultati, esporta CSV e log, e cattura schermate dei grafici di visualizzazione per la presentazione dei risultati, revisione o archiviazione dei documenti.'
        }
    },
    successTitle: 'Distribuzione Completata',
    successContent: 'Congratulazioni! Hai padroneggiato l\'intero flusso di lavoro del trasformatore a quattro parametri e ora puoi gestire con sicurezza varie attività di integrazione delle coordinate planari e generare rapporti di valutazione dell\'accuratezza.',
    relatedToolsTitle: 'Strumenti Correlati Consigliati',
    relatedTools: {
        first: {
            name: 'Calcolatore di Fogli Cartografici',
            description: 'Calcola i numeri di foglio basati su coordinate di latitudine e longitudine, supportando più scale.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'Convertitore di Tempo GNSS',
            description: 'Strumento per convertire tra tempo GPS, tempo BeiDou e tempo UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: 'Calcolatore di Area e Perimetro',
            description: 'Supporta il disegno di poligoni per calcolare automaticamente area e perimetro, fornendo più interruttori di unità.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: 'Calcolatore di Linea Base',
            description: 'Inserisce coordinate di punto iniziale e finale per calcolare lunghezza e azimut della linea base, supportando l\'analisi di propagazione degli errori.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: 'Riferimenti',
    references: {
        first: {
            name: 'Associazione Cinese di Scienze dell\'Informazione Geografica - Standard e Regolamenti',
            description: 'Standard tecnici e regolamenti industriali di informazione geografica cinesi',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'Standard ISO 19111 del Sistema di Riferimento Spaziale',
            description: 'Standard internazionale autorevole per la trasformazione dei riferimenti spaziali e delle proiezioni.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: 'Standard del Consorzio Geospaziale Aperto (OGC)',
            description: 'Standard internazionali per la trasformazione dei dati geospaziali',
            url: 'https://www.ogc.org/'
        }
    }
}