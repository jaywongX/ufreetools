export default {
    title: 'Guida all\'uso del Ricerca Zone di Proiezione - Calcolatore Zone di Proiezione UTM Online',
    functionTitle: 'Cos\'è il Ricerca Zone di Proiezione e a cosa serve?',
    intro: 'Il nostro <strong>Ricerca Zone di Proiezione</strong> è un potente strumento online che calcola automaticamente i numeri di zona UTM 3° e 6° in base alle coordinate di latitudine e longitudine inserite. Lo strumento supporta l\'inserimento di coordinate singole e batch, fornisce la funzionalità di visualizzazione della griglia delle zone della mappa e mostra informazioni sulla zona di proiezione in tempo reale mentre si muove il mouse sulla mappa. Attraverso l\'evidenziazione dinamica delle aree delle zone, è possibile comprendere intuitivamente la relazione tra coordinate e zone di proiezione. Utilizzando il nostro <strong>Calcolatore Zone di Proiezione UTM</strong>, è possibile ottenere facilmente i numeri di zona di proiezione corrispondenti ai punti di coordinate, con funzioni di copia con un clic ed esportazione batch per soddisfare le esigenze professionali di rilevamento e GIS.',

    useCasesTitle: 'Scenari di Applicazione Comuni del Ricerca Zone di Proiezione',
    useCases: [
        'Elaborazione dati GIS, determinazione dei numeri di zona di proiezione UTM per i punti di coordinate',
        'Elaborazione di immagini di telerilevamento, selezione dei parametri di proiezione corretti per le immagini satellitari',
        'Impostazione dei parametri di proiezione nei progetti di rilevamento, garantendo la coerenza del sistema di coordinate dei dati',
        'Creazione di mappe e analisi spaziale, selezione di sistemi di coordinate di proiezione appropriati',
        'Standardizzazione dei dati di ricerca geografica, unificazione dei numeri di zona di proiezione per l\'integrazione dei dati',
        'Applicazioni di navigazione e posizionamento, impostazione dei parametri di proiezione UTM corretti per i dispositivi GPS'
    ],

    tipTitle: 'Suggerimenti Professionali:',
    tipContent: 'Durante l\'elaborazione di coordinate batch, si consiglia di testare prima i risultati del calcolo della zona di proiezione con dati di esempio per assicurarsi che il tipo di proiezione selezionato (zona 3° o zona 6°) soddisfi i requisiti del progetto. Spostando il mouse sulla mappa, è possibile visualizzare intuitivamente la distribuzione delle zone di proiezione in diverse aree, aiutandovi a comprendere meglio il principio di zonizzazione della proiezione UTM.',

    conclusion: 'Il <strong>Ricerca Zone di Proiezione</strong> è molto utile per ingegneri geometri, professionisti GIS, elaboratori di dati di telerilevamento e chiunque abbia bisogno di utilizzare coordinate di proiezione UTM. Utilizzando il nostro Calcolatore Zone di Proiezione UTM, è possibile risparmiare molto tempo di calcolo manuale, evitare errori di selezione della zona di proiezione e comprendere meglio la relazione tra coordinate e zone di proiezione grazie alle funzionalità di visualizzazione. Il nostro strumento rende il processo di impostazione dei parametri di proiezione semplice ed efficiente senza dover installare alcun software professionale.',

    faqTitle: 'Domande Frequenti',
    faqs: [
        {
            question: 'Quali tipi di proiezione supporta il Ricerca Zone di Proiezione?',
            answer: 'Il nostro <strong>Ricerca Zone di Proiezione online</strong> supporta due tipi principali di proiezione UTM: zone 6° e zone 3°. La zona 6° è il metodo standard di divisione delle zone per la proiezione UTM, con 60 zone di proiezione a livello mondiale, ciascuna larga 6° di longitudine; la zona 3° è un metodo di divisione più raffinato, con 120 zone di proiezione a livello mondiale, ciascuna larga 3° di longitudine. È possibile scegliere il tipo di proiezione appropriato per il calcolo in base ai requisiti del progetto.'
        },
        {
            question: 'Come effettuare query batch sulle zone di proiezione delle coordinate?',
            answer: 'Utilizzando il nostro <strong>Calcolatore Zone di Proiezione UTM</strong>, basta inserire più coppie di coordinate riga per riga nell\'area di input batch, separando longitudine e latitudine con virgole. Ad esempio: 116.3975,39.9085. Dopo aver cliccato sul pulsante di calcolo, il sistema calcolerà automaticamente i numeri di zona di proiezione corrispondenti per tutti i punti di coordinate, visualizzando informazioni sul numero di zona, emisfero e meridiano centrale. La funzione di esportazione batch può salvare tutti i risultati come file di testo.'
        },
        {
            question: 'Come viene visualizzata la griglia delle zone sulla mappa?',
            answer: 'Il nostro <strong>strumento Ricerca Zone di Proiezione</strong> visualizza la griglia delle zone di proiezione UTM nell\'area della mappa di destra. Quando si muove il mouse sulla mappa, mostrerà in tempo reale il numero della zona di proiezione della posizione corrente. Questa funzionalità di visualizzazione aiuta a comprendere intuitivamente il modello di distribuzione delle zone di proiezione UTM e a padroneggiare meglio la relazione tra coordinate e zone di proiezione.'
        },
        {
            question: 'Come viene garantita l\'accuratezza del calcolo della zona di proiezione?',
            answer: 'Il nostro strumento utilizza formule standard di calcolo della zona di proiezione UTM per garantire l\'accuratezza dei risultati di calcolo. Per le zone 6°, la formula di calcolo del numero di zona è: Math.floor((longitudine + 180) / 6) + 1; per le zone 3°, la formula di calcolo del numero di zona è: Math.floor((longitudine + 180) / 3) + 1. Lo strumento convalida anche la validità delle coordinate inserite (longitudine da -180° a 180°, latitudine da -90° a 90°) per garantire l\'affidabilità dei risultati di calcolo.'
        },
        {
            question: 'Come utilizzare i risultati della query?',
            answer: 'I numeri di zona di proiezione calcolati possono essere utilizzati per le impostazioni dei parametri in vari software GIS e apparecchiature di rilevamento. È possibile copiare i risultati individuali con un clic o utilizzare la funzione di esportazione batch per salvare tutti i risultati come file di testo. I risultati includono informazioni su longitudine, latitudine, numero di zona, emisfero e meridiano centrale, fornendo un riferimento completo per l\'impostazione del sistema di coordinate di proiezione.'
        }
    ],

    tutorialTitle: 'Come Utilizzare il Ricerca Zone di Proiezione',
    steps: [
        {
            title: 'Selezionare il Tipo di Proiezione',
            description: 'Nella parte superiore dell\'area di input di sinistra, selezionare il tipo di proiezione necessario: zona UTM 6° o zona UTM 3°. La zona 6° è adatta per la maggior parte delle esigenze standard di proiezione delle mappe, mentre la zona 3° è adatta per progetti di rilevamento che richiedono maggiore precisione.',
            note: 'Il tipo di proiezione determina la densità delle zone e il metodo di calcolo. Si prega di scegliere il tipo appropriato in base ai requisiti del progetto.'
        },
        {
            title: 'Inserire i Dati delle Coordinate',
            description: 'Quando si inserisce una coordinata singola, inserire i valori nelle caselle di input di longitudine e latitudine rispettivamente; per l\'input batch, inserire più coppie di coordinate riga per riga nell\'area di testo, separando longitudine e latitudine con virgole per riga. Ad esempio: 116.3975,39.9085.',
            note: 'L\'intervallo di longitudine è da -180° a 180°, l\'intervallo di latitudine è da -90° a 90°. Le coordinate al di fuori di questi intervalli verranno ignorate.'
        },
        {
            title: 'Eseguire l\'Operazione di Calcolo',
            description: 'Fare clic sul pulsante "Calcola Zona" per eseguire l\'operazione di calcolo. Lo strumento calcolerà automaticamente e visualizzerà il numero di zona di proiezione corrispondente, l\'emisfero e il meridiano centrale per ogni punto di coordinate in base alle coordinate inserite e al tipo di proiezione selezionato.',
            note: 'Al termine del calcolo, il primo risultato visualizzerà un effetto di evidenziazione per aiutarvi a individuarlo rapidamente.'
        },
        {
            title: 'Visualizzare le Zone della Mappa',
            description: 'Nell\'area della mappa di destra, è possibile visualizzare i numeri delle zone di proiezione in diverse posizioni muovendo il mouse. La mappa mostrerà le informazioni sul numero di zona della posizione del mouse in tempo reale, aiutandovi a comprendere intuitivamente la distribuzione delle zone di proiezione UTM.',
            note: 'La griglia delle zone sulla mappa verrà visualizzata dinamicamente in base al tipo di proiezione selezionato (zona 3° o zona 6°).'
        },
        {
            title: 'Esportare o Copiare i Risultati',
            description: 'Fare clic sul pulsante di copia accanto a ogni risultato per copiare quel risultato negli appunti. Se ci sono più risultati, è possibile utilizzare il pulsante "Esporta Batch" in alto per salvare tutti i risultati come file di testo.',
            note: 'Le operazioni di copia attivano anche animazioni di evidenziazione, consentendo di sapere chiaramente quale risultato è stato copiato.'
        }
    ],

    successTitle: 'Congratulazioni!',
    successContent: 'Avete imparato con successo come utilizzare il nostro Ricerca Zone di Proiezione. Ora potete facilmente calcolare i numeri delle zone di proiezione UTM per qualsiasi punto di coordinate, migliorando l\'efficienza del lavoro grazie alle funzionalità di elaborazione batch e visualizzazione.',

    relatedToolsTitle: 'Strumenti Correlati che Potrebbero Interessarvi',
    relatedTools: [
        {
            name: 'Convertitore di Formato Coordinate',
            description: 'Supporta la conversione tra formati di gradi decimali, gradi minuti secondi e gradi minuti, fornendo funzioni di conversione ed esportazione batch.',
            url: 'https://www.ufreetools.com/tool/coordinate-format-converter'
        },
        {
            name: 'Calcolatore della Divisione del Foglio Cartografico',
            description: 'Calcola i numeri dei fogli cartografici in base alle coordinate di latitudine e longitudine, supportando più scale.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Calcolatore di Area e Perimetro',
            description: 'Supporta il disegno di poligoni per calcolare automaticamente area e perimetro, fornendo il cambio di più unità.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Calcolatore della Linea di Base',
            description: 'Inserire le coordinate del punto iniziale e finale per calcolare la lunghezza e l\'azimut della linea di base, supportando l\'analisi di propagazione dell\'errore.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    ],

    referencesTitle: 'Risorse di Riferimento',
    references: [
        {
            name: 'Sistema di Coordinate Universale Trasversa di Mercatore',
            description: 'Introduzione dettagliata alla proiezione Universale Trasversa di Mercatore su Wikipedia',
            url: 'https://it.wikipedia.org/wiki/Sistema_di_coordinate_universale_trasversa_di_Mercatore'
        },
        {
            name: 'Proiezione Cartografica',
            description: 'Risorse accademiche sui metodi e le applicazioni della proiezione cartografica',
            url: 'https://it.wikipedia.org/wiki/Proiezione_cartografica'
        },
        {
            name: 'Sistema di Coordinate Gauss-Krüger',
            description: 'Introduzione ai metodi di proiezione cartografica comunemente usati in Cina',
            url: 'https://it.wikipedia.org/wiki/Proiezione_di_Mercatore_trasversa'
        }
    ]
}