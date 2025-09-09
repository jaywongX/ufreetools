export default {
    title: 'Guida al Calcolatore di Fogli Cartografici - Strumento online per la numerazione delle mappe',
    functionTitle: 'Cos\'è il Calcolatore di Fogli Cartografici e a cosa serve?',
    intro: 'Il nostro <strong>Calcolatore di Fogli Cartografici</strong> è un potente strumento online che può calcolare rapidamente e con precisione il numero del foglio cartografico in base alle coordinate di latitudine e longitudine. Questo strumento supporta diverse scale (incluse 1:500, 1:1000, 1:50000 e altre) e offre funzioni di calcolo in batch e visualizzazione della griglia cartografica. Utilizzando il nostro <strong>strumento di ricerca per la numerazione delle mappe</strong>, puoi elaborare facilmente grandi quantità di dati di coordinate ed esportare i risultati in formato Excel o PDF.',

    useCasesTitle: 'Scenari di utilizzo comuni del Calcolatore di Fogli Cartografici',
    useCases: [
        'Gestione della numerazione e suddivisione delle mappe nei progetti di rilevamento',
        'Organizzazione dei dati spaziali nei progetti GIS (Sistemi Informativi Geografici)',
        'Suddivisione dei fogli nella pianificazione territoriale e progettazione urbana',
        'Divisione delle aree di lavoro nelle esplorazioni geologiche e indagini sulle risorse',
        'Creazione di mappe militari e divisione delle aree operative',
        'Elaborazione a blocchi di dati geografici su larga scala nei progetti di ricerca scientifica'
    ],

    tipTitle: 'Suggerimento professionale:',
    tipContent: 'Quando si effettua la suddivisione di mappe per aree di grandi dimensioni, si consiglia di utilizzare zone di 3 gradi per ottenere una maggiore precisione, mentre per aree più piccole si possono utilizzare zone di 6 gradi per semplificare i calcoli.',

    conclusion: 'Il <strong>Calcolatore di Fogli Cartografici</strong> è estremamente utile per ingegneri topografi, professionisti GIS, urbanisti e chiunque debba elaborare dati geospaziali. Utilizzando il nostro strumento, puoi risparmiare molto tempo di calcolo manuale, evitare errori di numerazione e aumentare l\'efficienza del lavoro. Il nostro strumento rende il processo di suddivisione delle mappe semplice ed efficiente, senza la necessità di installare software specializzati.',

    faqTitle: 'Domande frequenti',
    faqs: [
        {
            question: 'Quali scale supporta il Calcolatore di Fogli Cartografici?',
            answer: 'Il nostro <strong>Calcolatore di Fogli Cartografici online</strong> supporta diverse scale comuni da 1:500 a 1:1000000, incluse 1:500, 1:1000, 1:2000, 1:5000, 1:10000, 1:25000, 1:50000, 1:100000, 1:250000, 1:500000 e 1:1000000. Puoi scegliere la scala appropriata in base alle tue esigenze specifiche per effettuare i calcoli.'
        },
        {
            question: 'Cosa sono le zone di 3 gradi e 6 gradi?',
            answer: 'Le zone di 3 gradi e 6 gradi sono due metodi di suddivisione nella proiezione di Gauss-Krüger. La zona di 6 gradi inizia da 0° di longitudine est e divide il globo in 60 zone, ciascuna di 6°. La zona di 3 gradi inizia da 1.5° di longitudine est e divide il globo in 120 zone, ciascuna di 3°. La zona di 3 gradi offre maggiore precisione ed è adatta per la cartografia a grande scala; la zona di 6 gradi copre un\'area più ampia ed è adatta per la cartografia a piccola scala.'
        },
        {
            question: 'Come posso calcolare in batch i numeri dei fogli per più punti di coordinate?',
            answer: 'Utilizzando la nostra <strong>funzione di calcolo in batch</strong>, puoi inserire più punti di coordinate nella casella di inserimento batch, uno per riga, con il formato "latitudine,longitudine,descrizione(opzionale)". Ad esempio: "39.9042,116.4074,Centro di Pechino". Dopo aver completato l\'inserimento, fai clic sul pulsante "Calcola foglio" e il sistema calcolerà automaticamente i numeri dei fogli per tutti i punti di coordinate.'
        },
        {
            question: 'In quali formati posso esportare i risultati del calcolo?',
            answer: 'Il nostro strumento supporta l\'esportazione dei risultati in due formati: Excel e PDF. Il formato Excel è conveniente per l\'ulteriore elaborazione e analisi dei dati, mentre il formato PDF è conveniente per la stampa e la condivisione. Basta fare clic sul pulsante "Esporta in Excel" o "Esporta in PDF" nella parte superiore dell\'area di output per completare l\'operazione di esportazione.'
        },
        {
            question: 'A cosa serve la funzione di visualizzazione della griglia cartografica?',
            answer: 'La funzione di visualizzazione della griglia cartografica può mostrare visivamente la posizione e la distribuzione di tutti i punti calcolati sulla mappa. Facendo clic su un punto nella griglia, puoi visualizzare informazioni dettagliate su quel punto. Il foglio selezionato verrà evidenziato, aiutandoti a comprendere meglio le caratteristiche di distribuzione spaziale dei dati. Questa funzione è particolarmente utile per verificare i risultati del calcolo e condurre analisi spaziali.'
        }
    ],

    tutorialTitle: 'Come utilizzare il Calcolatore di Fogli Cartografici',
    steps: [
        {
            title: 'Inserimento dei dati di coordinate',
            description: 'Inserisci i dati delle coordinate che desideri calcolare nell\'area di input a sinistra. Puoi inserire un singolo punto di coordinate (inserendo separatamente nei campi latitudine e longitudine) o inserire in batch più punti di coordinate (inserendo riga per riga nella casella di inserimento batch, con il formato "latitudine,longitudine,descrizione(opzionale)").',
            note: 'Il formato delle coordinate deve essere in gradi decimali, come latitudine 39.9042, longitudine 116.4074.'
        },
        {
            title: 'Impostazione dei parametri di calcolo',
            description: 'Nell\'area delle impostazioni dei parametri, seleziona la scala appropriata e il metodo di suddivisione della proiezione. Le scale comuni includono 1:500, 1:1000, 1:50000, ecc., e il metodo di suddivisione può essere scelto tra zone di 3 gradi o zone di 6 gradi.',
            note: 'Per scale grandi (come 1:500, 1:1000) si consiglia di utilizzare zone di 3 gradi per ottenere una maggiore precisione.'
        },
        {
            title: 'Esecuzione del calcolo',
            description: 'Fai clic sul pulsante <strong>"Calcola foglio"</strong> per iniziare il calcolo. Il sistema calcolerà automaticamente il numero del foglio e le informazioni correlate per ciascun punto in base alle coordinate inserite e ai parametri impostati.',
            note: 'Il processo di calcolo di solito viene completato in pochi secondi, anche per grandi quantità di dati.'
        },
        {
            title: 'Visualizzazione e analisi dei risultati',
            description: 'Una volta completato il calcolo, i risultati verranno visualizzati nell\'area di output a destra. Puoi visualizzare informazioni dettagliate come il numero del foglio, le coordinate, la scala, ecc. per ciascun punto. L\'area di visualizzazione della griglia cartografica mostrerà la distribuzione di tutti i punti sulla mappa.',
            note: 'Facendo clic su qualsiasi elemento dei risultati o su un punto nella griglia, puoi visualizzare informazioni dettagliate ed evidenziare l\'elemento.'
        },
        {
            title: 'Esportazione dei risultati',
            description: 'Se hai bisogno di salvare i risultati, puoi fare clic sul pulsante <strong>"Esporta in Excel"</strong> o <strong>"Esporta in PDF"</strong> nella parte superiore dell\'area di output. Il formato Excel è conveniente per l\'elaborazione dei dati, mentre il formato PDF è conveniente per la stampa e la condivisione.',
            note: 'Il file esportato conterrà informazioni complete su tutti i risultati del calcolo.'
        },
        {
            title: 'Utilizzo delle funzioni avanzate',
            description: 'Puoi utilizzare il pulsante "Carica dati di esempio" per sperimentare rapidamente le funzionalità dello strumento, o il pulsante "Cancella tutto" per reimpostare tutti gli input e i risultati. Facendo clic su diversi elementi dei risultati, puoi visualizzare la loro posizione nella griglia cartografica.',
            note: 'Lo strumento funziona completamente nel browser, i tuoi dati non verranno caricati su alcun server, garantendo la privacy e la sicurezza.'
        }
    ],

    successTitle: 'Congratulazioni!',
    successContent: 'Hai imparato con successo come utilizzare il nostro Calcolatore di Fogli Cartografici. Ora puoi facilmente calcolare il numero del foglio cartografico per qualsiasi punto di coordinate, da utilizzare in rilevamenti, GIS, pianificazione urbana e vari altri scenari applicativi.',

    relatedToolsTitle: 'Strumenti correlati che potrebbero interessarti',
    relatedTools: [
        {
            name: 'Convertitore di Coordinate',
            description: 'Converti coordinate di latitudine e longitudine tra diversi sistemi di coordinate, supportando vari sistemi di proiezione.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Riproduzione di Tracce GPS',
            description: 'Carica e visualizza dati di tracce GPS, supportando vari formati di file.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Calcolo della Proiezione di Gauss',
            description: 'Esegui calcoli diretti e inversi della proiezione di Gauss-Krüger, supportando zone di 3 gradi e 6 gradi.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Generatore di Curve di Livello',
            description: 'Genera mappe con curve di livello basate su dati di elevazione, supportando vari formati di output.',
            url: 'https://www.ufreetools.com/tool/elevation-contour-generator'
        }
    ],

    referencesTitle: 'Risorse di riferimento',
    references: [
        {
            name: 'Sistema di Griglie Cartografiche Internazionali',
            description: 'Standard internazionali per griglie cartografiche e sistemi di numerazione dei fogli',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-grids'
        },
        {
            name: 'Proiezione di Mercatore Trasversa',
            description: 'Spiegazione dettagliata dei principi matematici alla base delle proiezioni UTM/Gauss-Krüger',
            url: 'https://en.wikipedia.org/wiki/Transverse_Mercator_projection'
        },
        {
            name: 'Proiezioni Cartografiche',
            description: 'Guida dettagliata alle proiezioni cartografiche e ai sistemi di coordinate fornita dall\'agenzia governativa australiana',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-projections'
        }
    ]
}