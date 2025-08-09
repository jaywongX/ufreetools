export default {
    title: 'AI Multi-Face Tagger: Identificare ed Etichettare Persone nelle Foto',
    whatIsTitle: 'Cos\'è l\'AI Multi-Face Tagger?',
    intro: 'Il nostro <strong>AI Multi-Face Tagger</strong> è un potente strumento online che utilizza tecnologia avanzata di riconoscimento facciale per rilevare più volti nelle foto e ti permette di aggiungere etichette per ogni persona. Che tu stia organizzando collezioni di foto, creando mappe dei posti a sedere in classe, o semplicemente desideri identificare tutti in una foto di gruppo, questo strumento offre un modo rapido ed efficiente per taggare i volti senza richiedere alcuna competenza tecnica.',
    
    howItWorksTitle: 'Come Funziona?',
    howItWorksContent: 'L\'AI Multi-Face Tagger utilizza face-api.js, un\'API JavaScript che implementa reti neurali convoluzionali per rilevare volti e analizzare caratteristiche facciali. Lo strumento identifica prima tutti i volti nella tua immagine caricata, poi ti permette di aggiungere etichette personalizzate o nomi per ogni volto rilevato. Tutta l\'elaborazione avviene direttamente nel tuo browser, assicurando che le tue foto rimangano private e non vengano mai caricate su alcun server.',
    
    tipTitle: 'Consiglio da Professionista:',
    tipContent: 'Per risultati ottimali, carica foto con volti chiari, ben illuminati e rivolti verso la fotocamera. Lo strumento funziona meglio con ritratti frontali con minime ostruzioni o angolazioni estreme.',
    
    featuresTitle: 'Caratteristiche Principali',
    features: [
        'Rilevamento accurato di più volti in una singola immagine',
        'Sistema di etichettatura personalizzato per taggare ogni volto rilevato',
        'Supporto per l\'elaborazione in batch di più foto',
        'Opzione per esportare immagini con overlay di etichette facciali visibili',
        'Opzione di esportazione JSON per l\'integrazione con sistemi di gestione foto',
        'Design incentrato sulla privacy con tutta l\'elaborazione eseguita localmente nel tuo browser'
    ],
    
    useCasesTitle: 'Quando Utilizzare Questo Strumento',
    useCase1Title: 'Organizzazione Foto',
    useCase1Content: 'Identifica e tagga rapidamente le persone nelle collezioni di foto per renderle ricercabili e più organizzate.',
    
    useCase2Title: 'Gestione Classe',
    useCase2Content: 'Gli insegnanti possono utilizzare questo strumento per creare foto di classe etichettate per aiutare a ricordare i nomi degli studenti o creare mappe dei posti a sedere.',
    
    useCase3Title: 'Fotografia Eventi',
    useCase3Content: 'I fotografi di eventi possono taggare i partecipanti nelle foto di gruppo per una più facile distribuzione e identificazione.',
    
    useCase4Title: 'Contenuti Social Media',
    useCase4Content: 'I creatori di contenuti possono etichettare collaboratori o membri del team nelle foto promozionali per una corretta attribuzione.',
    
    faqTitle: 'Domande Frequenti',
    faqs: [
        {
            question: 'Quanto è accurato il rilevamento facciale?',
            answer: 'L\'IA fornisce un rilevamento facciale generalmente accurato nella maggior parte dei casi. Tuttavia, i risultati possono variare a seconda di fattori come illuminazione, qualità dell\'immagine, angolazioni del volto e occlusioni. Lo strumento tipicamente raggiunge una migliore accuratezza con ritratti frontali chiari in buone condizioni di illuminazione.'
        },
        {
            question: 'I miei dati sono sicuri quando uso questo strumento?',
            answer: 'Sì, tutta l\'elaborazione viene eseguita localmente nel tuo browser. Le tue foto non vengono mai caricate su alcun server, garantendo completa privacy. Lo strumento utilizza JavaScript lato client per analizzare le immagini e non memorizza né trasmette alcun dato.'
        },
        {
            question: 'Cosa succede se alcuni volti non vengono rilevati?',
            answer: 'Il rilevamento facciale dipende da vari fattori tra cui illuminazione, angolazioni e qualità dell\'immagine. Se alcuni volti non vengono rilevati, prova a caricare una foto diversa con migliore illuminazione e angolazioni facciali più dirette. Volti molto piccoli o parzialmente oscurati possono essere difficili da rilevare per l\'IA.'
        },
        {
            question: 'Posso esportare i dati di tagging facciale per l\'uso in altre applicazioni?',
            answer: 'Sì, il nostro strumento fornisce un\'opzione di esportazione JSON che include coordinate per ogni volto rilevato insieme alle tue etichette personalizzate. Questi dati possono essere importati in vari sistemi di gestione foto o utilizzati per applicazioni personalizzate. Puoi anche scaricare immagini con overlay di etichette facciali visibili.'
        }
    ],
    
    tutorialTitle: 'Come Utilizzare l\'AI Multi-Face Tagger',
    steps: [
        {
            title: 'Carica la Tua Foto',
            description: 'Inizia caricando la foto che desideri analizzare. Puoi trascinare e rilasciare file direttamente sull\'area di caricamento o cliccare per sfogliare il tuo dispositivo. Lo strumento supporta formati di immagine comuni inclusi JPG, PNG, WEBP e BMP.',
            note: 'Puoi caricare più foto contemporaneamente per l\'elaborazione in batch.'
        },
        {
            title: 'Rileva i Volti',
            description: 'Clicca sul pulsante "Rileva Volti" e attendi qualche secondo affinché la nostra IA identifichi tutti i volti nella foto. Ogni volto rilevato sarà evidenziato con un riquadro ed etichettato con un numero per facile riferimento.',
            note: 'Il tempo di elaborazione dipende dal numero e dalla dimensione delle foto, nonché dalle prestazioni del tuo dispositivo.'
        },
        {
            title: 'Aggiungi Etichette',
            description: 'Per ogni volto rilevato, inserisci un nome o un\'etichetta nel campo di input corrispondente. Mentre digiti, le etichette si aggiorneranno automaticamente sull\'anteprima dell\'immagine, permettendoti di vedere come apparirà il risultato finale.',
            note: 'Puoi lasciare alcuni volti senza tag se preferisci, o cancellare le etichette cliccando sul pulsante X.'
        },
        {
            title: 'Esporta i Tuoi Risultati',
            description: 'Scegli il tuo formato di esportazione preferito e le opzioni. Puoi includere overlay di etichette facciali direttamente sull\'immagine e/o esportare un file JSON contenente tutte le coordinate facciali e le etichette. Seleziona il tuo formato di immagine preferito e, per i file JPG, regola la qualità secondo necessità. Infine, scarica singole immagini o utilizza l\'opzione di download in batch per ottenere tutte le foto elaborate come file ZIP.',
            note: 'L\'esportazione JSON è particolarmente utile se prevedi di importare i dati facciali in altre applicazioni o sistemi di gestione foto.'
        }
    ],
    
    successTitle: 'Pronto per Provare?',
    successContent: 'Carica le tue foto ora e scopri come il nostro AI Multi-Face Tagger può aiutarti a identificare ed etichettare le persone nelle tue immagini!',
    
    relatedToolsTitle: 'Strumenti Correlati Che Potrebbero Piacerti',
    relatedTools: [
        {
            name: 'Imgly AI Rimozione Sfondo',
            description: 'Rimuovi intelligentemente gli sfondi delle immagini utilizzando il modello grande di IA Imgly, con supporto per l\'elaborazione in batch e molteplici formati di output.',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        },
        {
            name: 'Analizzatore AI di Foto Profilo',
            description: 'Ottieni feedback basati su IA sulle tue foto personali e professionali per migliorare la tua immagine professionale.',
            url: 'https://www.ufreetools.com/tool/ai-profile-photo-analyzer'
        },
        {
            name: 'Stimatore AI di Età e Genere',
            description: 'Utilizza la tecnologia IA per analizzare i volti nelle foto e stimare età e genere.',
            url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
        }
    ],
    
    techDetailsTitle: 'Dettagli Tecnici',
    techDetailsContent: 'L\'AI Multi-Face Tagger utilizza face-api.js, che implementa i modelli TinyFaceDetector e FaceLandmark68 per analizzare le caratteristiche facciali. Queste reti neurali leggere sono progettate per funzionare efficientemente nei browser web fornendo al contempo una ragionevole accuratezza.',
    privacyNote: 'Diamo priorità alla tua privacy elaborando tutte le immagini localmente nel tuo browser. Le tue foto non vengono mai inviate a nessun server per l\'analisi, garantendo che i tuoi dati personali e le immagini rimangano completamente privati. Lo strumento funziona interamente lato client, rendendolo sicuro e reattivo anche senza una connessione internet dopo che la pagina è stata caricata.'
};