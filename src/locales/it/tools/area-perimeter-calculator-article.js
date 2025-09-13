export default {
    title: 'Guida all\'uso del calcolatore di area e perimetro - Strumento di misurazione online di area e perimetro di poligoni',
    functionTitle: 'Cos\'è il calcolatore di area e perimetro e a cosa serve?',
    intro: 'Il nostro <strong>calcolatore di area e perimetro</strong> è un potente strumento online che consente di disegnare poligoni su una mappa e calcolare automaticamente la loro area e perimetro. Lo strumento supporta il cambio di più unità, tra cui metri quadrati, ettari, chilometri quadrati e mu, e fornisce una modalità di calcolo ellissoidale terrestre per risultati più precisi. È anche possibile inserire direttamente i punti delle coordinate per calcolare area e perimetro, e supporta l\'esportazione in più formati, tra cui GeoJSON, KML, immagini, CSV, TXT e PDF.',

    useCasesTitle: 'Scenari di applicazione comuni del calcolatore di area e perimetro',
    useCases: [
        'Rilevamento e valutazione del territorio, calcolo dell\'area e del perimetro delle particelle',
        'Pianificazione urbana e progettazione, misurazione delle aree edilizie e degli spazi pubblici',
        'Gestione agricola, calcolo dell\'area delle terre agricole e dell\'ambito di irrigazione',
        'Valutazione immobiliare, misurazione dei confini delle proprietà e dell\'area utilizzabile',
        'Monitoraggio ambientale, calcolo dell\'ambito delle aree protette e delle aree interessate',
        'Costruzione ingegneristica, misurazione delle aree di costruzione e delle necessità di materiali'
    ],

    tipTitle: 'Suggerimenti professionali:',
    tipContent: 'Durante la misurazione di aree di grandi dimensioni, si consiglia di utilizzare la modalità di calcolo ellissoidale per ottenere risultati più precisi. È possibile inserire direttamente i punti delle coordinate per calcolare l\'area e il perimetro di aree complesse, supportando più formati di input delle coordinate. Il cambio tra diverse unità può aiutare a visualizzare i risultati di misurazione nel modo più appropriato.',

    conclusion: 'Il <strong>calcolatore di area e perimetro</strong> è molto utile per geometri, urbanisti, gestori agricoli, valutatori immobiliari e chiunque abbia bisogno di una misurazione precisa delle aree. Utilizzando il nostro strumento, è possibile risparmiare molto tempo di calcolo manuale, evitare errori di misurazione e comprendere meglio i dati grazie alle funzionalità di visualizzazione. Il nostro strumento rende il processo di calcolo dell\'area e del perimetro semplice ed efficiente senza la necessità di installare alcun software professionale.',

    faqTitle: 'Domande frequenti',
    faqs: [
        {
            question: 'Quali modalità di calcolo supporta il calcolatore di area e perimetro?',
            answer: 'Il nostro <strong>calcolatore di area e perimetro</strong> supporta due modalità di calcolo: calcolo planare e calcolo ellissoidale. Il calcolo planare è adatto per la misurazione di aree di piccole dimensioni con velocità di calcolo rapida; il calcolo ellissoidale tiene conto dell\'impatto della curvatura terrestre, è adatto per la misurazione di aree di grandi dimensioni con risultati più precisi. È possibile scegliere la modalità di calcolo appropriata in base alle esigenze specifiche.'
        },
        {
            question: 'Come si disegnano i poligoni sulla mappa per la misurazione?',
            answer: 'Utilizzando il nostro <strong>strumento di misurazione dell\'area online</strong>, è sufficiente selezionare lo strumento di disegno dei poligoni nella casella degli strumenti a sinistra, quindi fare clic sulla mappa per determinare i vertici del poligono. Fare doppio clic sull\'ultimo vertice per completare il disegno, e il sistema calcolerà e visualizzerà automaticamente l\'area e il perimetro. È anche possibile utilizzare gli strumenti rettangolo e cerchio per disegnare forme regolari da misurare.'
        },
        {
            question: 'Quali unità di area e lunghezza sono supportate?',
            answer: 'Il nostro strumento supporta più unità di area e lunghezza comunemente utilizzate. Le unità di area includono metri quadrati, ettari, chilometri quadrati, acri e mu; le unità di lunghezza includono metri, chilometri e miglia. È possibile cambiare unità in qualsiasi momento per adattarsi a diversi scenari di utilizzo e abitudini regionali, e i risultati di misurazione verranno aggiornati in tempo reale.'
        },
        {
            question: 'Come si utilizza la funzione di input delle coordinate?',
            answer: 'La nostra funzione di <strong>input delle coordinate del calcolatore di area</strong> consente di inserire direttamente i punti delle coordinate per calcolare area e perimetro senza disegnare manualmente sulla mappa. È possibile utilizzare più formati per inserire le coordinate, tra cui il formato "longitudine,latitudine", "[longitudine,latitudine]" o "longitudine latitudine", con un punto per riga. Dopo aver inserito almeno 3 punti, fare clic sul pulsante "Calcola", e il sistema creerà automaticamente un poligono e ne calcolerà area e perimetro. Questo è particolarmente utile per la misurazione di aree con coordinate note.'
        },
        {
            question: 'Come si esportano i risultati di misurazione?',
            answer: 'Dopo aver completato la misurazione, è possibile esportare i risultati in più formati: GeoJSON e KML sono formati di dati spaziali standard che possono essere importati in altri software GIS; la funzione di esportazione delle immagini può salvare la vista mappa corrente come immagine PNG; i formati CSV e TXT sono convenienti per aprire e analizzare i dati in software di fogli di calcolo come Excel; il formato PDF è adatto per generare report e documenti ufficiali. Scegliere il formato di esportazione più appropriato in base alle proprie esigenze.'
        }
    ],

    tutorialTitle: 'Come utilizzare il calcolatore di area e perimetro',
    steps: [
        {
            title: 'Selezionare gli strumenti di disegno e la modalità di calcolo',
            description: 'Prima di iniziare la misurazione, selezionare prima lo strumento di disegno appropriato (poligono, rettangolo o cerchio) nella casella degli strumenti a sinistra. Quindi selezionare la modalità di calcolo, per aree di grandi dimensioni si consiglia di scegliere il calcolo ellissoidale per ottenere risultati più precisi.',
            note: 'Gli strumenti di disegno e la modalità di calcolo possono essere cambiati in qualsiasi momento secondo necessità.'
        },
        {
            title: 'Disegnare l\'area di misurazione sulla mappa',
            description: 'Dopo aver attivato lo strumento di disegno, fare clic sulla mappa per determinare il confine dell\'area. Per lo strumento poligono, fare clic su ogni vertice in sequenza, e fare doppio clic sull\'ultimo vertice per completare il disegno. L\'area e il perimetro dell\'area corrente verranno visualizzati in tempo reale durante il processo di disegno.',
            note: 'È possibile regolare la forma dell\'area trascinando i vertici, e i risultati di misurazione verranno aggiornati in tempo reale.'
        },
        {
            title: 'Utilizzare la funzione di input delle coordinate',
            description: 'Se si dispone già dei dati dei punti delle coordinate dell\'area, è possibile utilizzare direttamente la funzione di input delle coordinate. Nella casella di input delle coordinate, inserire un punto di coordinate per riga (formato: longitudine,latitudine), quindi fare clic sul pulsante "Calcola", e il sistema creerà automaticamente un poligono e ne calcolerà area e perimetro.',
            note: 'Supporta più formati di input delle coordinate, tra cui "longitudine,latitudine", "[longitudine,latitudine]" o "longitudine latitudine".'
        },
        {
            title: 'Visualizzare e gestire i risultati di misurazione',
            description: 'Nell\'elenco dei risultati sotto l\'area della mappa a destra, è possibile visualizzare l\'area e il perimetro di tutte le aree disegnate. Ogni area ha un identificatore di tipo e dati di misurazione corrispondenti, facilitando il confronto e l\'analisi.',
            note: 'L\'elenco dei risultati viene aggiornato in tempo reale, visualizzando la quantità e i dati di tutte le aree di misurazione correnti.'
        },
        {
            title: 'Esportare i risultati di misurazione',
            description: 'Dopo aver completato la misurazione, è possibile esportare i risultati in più formati, tra cui GeoJSON, KML, immagini, CSV, TXT e PDF. Fare clic sul pulsante di esportazione nella casella degli strumenti e selezionare il formato corrispondente per completare l\'operazione di esportazione.',
            note: 'Il file esportato contiene tutte le informazioni di misurazione, che possono essere utilizzate per altri software GIS, analisi dei dati o condivisione con altri. I formati CSV e TXT sono convenienti per l\'apertura in software di fogli di calcolo, e il formato PDF è adatto per report ufficiali.'
        }
    ],

    successTitle: 'Congratulazioni!',
    successContent: 'Hai imparato con successo come utilizzare il nostro calcolatore di area e perimetro. Ora puoi facilmente disegnare aree sulla mappa e calcolarne area e perimetro, ottenendo la migliore esperienza di misurazione attraverso più unità e modalità di visualizzazione.',

    relatedToolsTitle: 'Strumenti correlati che potrebbero interessarti',
    relatedTools: [
        {
            name: 'Calcolatore della linea di base',
            description: 'Inserire le coordinate del punto iniziale e finale per calcolare la lunghezza e l\'azimut della linea di base, supportando l\'analisi di propagazione dell\'errore.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        },
        {
            name: 'Calcolatore della divisione del foglio cartografico',
            description: 'Calcolare il numero del foglio cartografico in base alle coordinate di longitudine e latitudine, supportando più scale.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Convertitore di coordinate',
            description: 'Convertire le coordinate di longitudine e latitudine tra diversi sistemi di coordinate, supportando più sistemi di proiezione.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Convertitore di tempo GNSS',
            description: 'Realizzare la conversione reciproca tra tempo UTC e secondi della settimana GPS, tempo BeiDou.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        }
    ],

    referencesTitle: 'Risorse di riferimento',
    references: [
        {
            name: 'Libreria GeographicLib',
            description: 'Libreria open-source focalizzata su calcoli geospaziali ad alta precisione',
            url: 'https://geographiclib.sourceforge.io/'
        },
        {
            name: 'Libreria di mappe Leaflet',
            description: 'Libreria JavaScript di mappe interattive open-source',
            url: 'https://leafletjs.com/'
        },
        {
            name: 'Libreria di analisi spaziale Turf.js',
            description: 'Libreria JavaScript per analisi geospaziale',
            url: 'https://turfjs.org/'
        },
        {
            name: 'Libreria jsPDF',
            description: 'Libreria JavaScript per generare documenti PDF lato client',
            url: 'https://github.com/parallax/jsPDF'
        }
    ]
}