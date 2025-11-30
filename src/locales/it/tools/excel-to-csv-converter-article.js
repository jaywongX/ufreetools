export default {
    title: 'Convertitore da Excel a CSV: Guida all\'uso dello strumento di conversione file Excel in batch online',
    functionTitle: 'Cos\'è il convertitore da Excel a CSV e a cosa serve?',
    intro: 'Il nostro <strong>convertitore da Excel a CSV</strong> è un potente strumento online che può convertire rapidamente file Excel (.xlsx e .xls) nel formato CSV. Questo strumento supporta l\'elaborazione batch di più file, il riconoscimento di più fogli, delimitatori personalizzati e formati di codifica, soddisfacendo le esigenze di importazione dati di diversi sistemi e software. Utilizzando il nostro <strong>strumento online Excel a CSV</strong>, puoi facilmente gestire grandi volumi di file di dati senza dover installare alcun software, tutte le conversioni vengono eseguite localmente nel browser, garantendo la sicurezza dei dati.',

    useCasesTitle: 'Scenari comuni di applicazione della conversione da Excel a CSV',
    useCases: [
        'Importare dati Excel nei sistemi di database (MySQL, PostgreSQL, ecc.)',
        'Preparare dati in formato CSV per strumenti di analisi dati (Python pandas, linguaggio R)',
        'Importare in batch dati utente o informazioni prodotto nelle applicazioni web',
        'Convertire report Excel nel formato CSV per essere utilizzati da altri sistemi',
        'Elaborare file Excel multi-foglio ed esportarli separatamente come CSV',
        'Convertire in batch file Excel storici per progetti di migrazione dati',
        'Convertire dati Excel nel formato CSV per il controllo delle versioni',
        'Preparare file di dati CSV standardizzati per interfacce API'
    ],

    logoAlt: "Anteprima del prodotto convertitore da Excel a CSV",
    tipTitle: 'Consiglio professionale:',
    tipContent: 'Per i dati che contengono caratteri speciali o interruzioni di riga, si consiglia di utilizzare le virgolette doppie come qualificatore di testo, ciò può garantire che non si verifichino errori di formato durante l\'importazione di file CSV in altri sistemi. Per i dati in cinese, si raccomanda di utilizzare la codifica UTF-8 BOM, per garantire che i caratteri cinesi vengano visualizzati correttamente all\'apertura in Excel.',

    conclusion: 'Lo strumento di <strong>conversione da Excel a CSV</strong> è particolarmente utile per analisti di dati, sviluppatori, amministratori di dati e utenti che devono frequentemente elaborare file Excel. Utilizzando il nostro convertitore, puoi convertire rapidamente i dati Excel nel formato CSV, facilitando la condivisione dei dati tra diversi sistemi e strumenti. Il nostro strumento supporta l\'elaborazione batch, la configurazione del formato personalizzato e l\'anteprima in tempo reale, rendendo il processo di conversione dei dati semplice ed efficiente, senza necessità di installare software.',

    faqTitle: 'Domande frequenti',
    faqs: [
        {
            question: 'Quali formati Excel supporta il convertitore da Excel a CSV?',
            answer: 'Il nostro <strong>strumento online Excel a CSV</strong> supporta i due principali formati Excel: .xlsx (Office Open XML) e .xls (formato binario tradizionale). Lo strumento può identificare automaticamente il formato del file ed eseguire l\'elaborazione appropriata, supportando file Excel multi-foglio, dove puoi scegliere di convertire tutti i fogli o un foglio specifico.'
        },
        {
            question: 'Il file CSV convertito manterrà il formato dati originale?',
            answer: 'Il formato CSV stesso non contiene informazioni di formattazione (come carattere, colore, formule, ecc.), ma tutto il contenuto dei dati verrà completamente conservato. Date, numeri e dati testuali saranno convertiti correttamente. Se una cella Excel contiene formule, il convertitore estrarrà il valore del risultato calcolato delle formule.'
        },
        {
            question: 'Come gestire i dati Excel che contengono caratteri speciali?',
            answer: 'Il nostro strumento supporta qualificatori di testo personalizzati (virgolette doppie o singole), che possono gestire correttamente i dati contenenti virgole, interruzioni di riga, virgolette e altri caratteri speciali. Si consiglia di selezionare le virgolette doppie come qualificatore di testo durante la conversione di dati contenenti caratteri speciali, ciò può garantire che il formato del file CSV sia corretto.'
        },
        {
            question: 'È possibile convertire in batch più file Excel?',
            answer: 'Sì, il nostro <strong>strumento di conversione batch da Excel a CSV</strong> supporta completamente l\'elaborazione batch. Puoi caricare contemporaneamente più file Excel, lo strumento elaborerà ogni file in sequenza e fornirà una funzione di download batch al termine, impacchettando tutti i file CSV convertiti in un file ZIP da scaricare.'
        },
        {
            question: 'Quali formati di codifica supporta il file CSV convertito?',
            answer: 'Il nostro strumento supporta più formati di codifica, inclusi UTF-8, UTF-8 BOM, GBK e ANSI. Il formato UTF-8 BOM è particolarmente adatto per aprire file CSV contenenti caratteri cinesi in Excel, mentre il formato UTF-8 è più adatto per l\'uso nei programmi. Puoi scegliere il formato di codifica appropriato in base alle esigenze del sistema di destinazione.'
        },
        {
            question: 'È possibile elaborare file Excel crittografati o protetti?',
            answer: 'A causa delle limitazioni dell\'ambiente del browser, il nostro strumento non può elaborare file Excel protetti da password. Se i tuoi file Excel sono crittografati, decrittografali prima utilizzando il software Excel prima di effettuare la conversione. Per file Excel non crittografati, il nostro strumento può gestirli perfettamente.'
        }
    ],

    tutorialTitle: 'Come utilizzare il convertitore da Excel a CSV',
    steps: [
        {
            title: 'Caricare file Excel',
            description: 'Per prima cosa carica i file Excel che desideri convertire. Puoi semplicemente <strong>trascinare e rilasciare</strong> i file nell\'area di caricamento, oppure cliccare su sfoglia e selezionare i file dal tuo dispositivo. Il nostro strumento supporta i formati .xlsx e .xls, puoi caricare più file contemporaneamente per la conversione batch.',
            note: 'Puoi anche utilizzare la funzione "Importa da URL" per inserire direttamente l\'indirizzo web di un file Excel ed effettuare la conversione.'
        },
        {
            title: 'Selezionare il foglio (opzionale)',
            description: 'Se i tuoi file Excel contengono più fogli, puoi selezionare il foglio da convertire per ogni file nell\'elenco dei file. Per impostazione predefinita, lo strumento convertirà tutti i fogli, ogni foglio genererà un file CSV indipendente.',
            note: 'Per file Excel di grandi dimensioni, si consiglia di selezionare prima un singolo foglio per il test, confermando che i risultati della conversione soddisfano le aspettative prima dell\'elaborazione batch.'
        },
        {
            title: 'Configurare le opzioni del formato CSV',
            description: 'Nell\'area "Impostazioni formato CSV", puoi personalizzare il delimitatore (virgola, punto e virgola, tabulazione, ecc.), il qualificatore di testo (virgolette doppie, virgolette singole o nessuno), la fine riga (Windows/Unix/Mac) e il formato di codifica (UTF-8, UTF-8 BOM, GBK, ANSI). Queste impostazioni influenzeranno il formato del file CSV convertito.',
            note: 'Per i dati in cinese, si consiglia di utilizzare la codifica UTF-8 BOM; per i file che verranno aperti in Excel, si consiglia di utilizzare le virgolette doppie come qualificatore di testo.'
        },
        {
            title: 'Anteprima dati (opzionale)',
            description: 'Prima della conversione, puoi cliccare su "Anteprima dati" per vedere il contenuto del file Excel. La funzione di anteprima mostrerà le prime righe di dati, aiutandoti a confermare se il formato e il contenuto del file sono corretti.',
            note: 'La funzione di anteprima può aiutarti a scoprire problemi di formato dati, evitando di trovare errori dopo la conversione.'
        },
        {
            title: 'Eseguire la conversione',
            description: 'Clicca sul pulsante <strong>"Avvia conversione"</strong> per iniziare l\'elaborazione dei file. Lo strumento mostrerà il progresso della conversione, incluso il file attualmente in elaborazione, il foglio e il numero di righe. Il processo di conversione viene eseguito completamente localmente nel browser, senza caricare i dati sul server.',
            note: 'Per file di grandi dimensioni, la conversione potrebbe richiedere del tempo, ti preghiamo di pazientare. Puoi vedere il processo dettagliato di conversione nel log di elaborazione.'
        },
        {
            title: 'Scaricare i risultati della conversione',
            description: 'Una volta completata la conversione, puoi cliccare sul pulsante <strong>"Scarica"</strong> sotto ogni file CSV per salvarlo individualmente, oppure utilizzare il pulsante <strong>"Download batch"</strong> nella parte superiore per impacchettare tutti i file CSV in un file ZIP e scaricarlo. I nomi dei file verranno generati automaticamente in base alle tue impostazioni.',
            note: 'Tutta l\'elaborazione viene eseguita nel tuo browser, quindi i tuoi file Excel non verranno mai caricati su alcun server, garantendo la privacy e la sicurezza dei dati.'
        }
    ],

    successTitle: 'Congratulazioni!',
    successContent: 'Hai imparato con successo come utilizzare il nostro convertitore da Excel a CSV. Ora puoi convertire facilmente file Excel nel formato CSV per l\'analisi dei dati, l\'importazione di database o altri utilizzi.',

    relatedToolsTitle: 'Strumenti correlati che potrebbero interessarti',
    relatedTools: [
        {
            name: 'Convertitore di lettura bionica',
            description: 'Convertitore di lettura bionica online gratuito, converte il testo in tempo reale nello stile Bionic Reading.',
            url: 'https://www.ufreetools.com/tool/bionic-reading-converter'
        },
        {
            name: 'Ridimensionatore di immagini',
            description: 'Regola le immagini a dimensioni specifiche o le ridimensiona in base alla percentuale.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Generatore di timbri',
            description: 'Crea online vari tipi di immagini di timbri, genera timbri aziendali, timbri personali e altri timbri digitali.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: 'Generatore di codici QR',
            description: 'Crea codici QR personalizzati per URL, testi, informazioni di contatto, ecc.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: 'Risorse di riferimento',
    references: [
        {
            name: 'Specifiche del formato file CSV (RFC 4180)',
            description: 'Scopri le specifiche del formato standard e le migliori pratiche per i file CSV',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Standard Office Open XML',
            description: 'Scopri le specifiche tecniche del formato file Excel .xlsx',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/'
        },
        {
            name: 'Standard di codifica dei caratteri (Unicode)',
            description: 'Scopri gli standard di codifica dei caratteri come UTF-8, GBK, ecc.',
            url: 'https://www.unicode.org/standard/standard.html'
        }
    ]
}