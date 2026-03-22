export default {
    title: 'Convertitore Audio in MIDI - strumento gratuito online',
    functionTitle: 'Funzionalità del convertitore',
    intro: 'Il nostro convertitore gratuito online da audio a MIDI ti permette di trasformare facilmente registrazioni audio in file MIDI. È uno strumento potente per musicisti, compositori e produttori che funziona interamente nel browser senza necessità di installare software.',
    useCasesTitle: 'Casi d\'uso',
    useCases: [
        'Trascrivere melodie da registrazioni audio per modifica in editor MIDI',
        'Creare file MIDI da parti vocali per l\'uso con strumenti virtuali',
        'Estrarre note da campioni audio per arrangiamento musicale',
        'Convertire parti audio in MIDI per modificare tempo e tonalità',
        'Trasformare idee musicali registrate in formato MIDI modificabile'
    ],
    tipTitle: 'Suggerimenti per un risultato migliore',
    tipContent: 'Per un riconoscimento ottimale, usa audio con una linea melodica chiara e rumore di fondo minimo. Le registrazioni monofoniche (un solo strumento o voce) vengono riconosciute molto meglio di quelle polifoniche. Se possibile, usa formati audio non compressi come WAV.',
    
    conclusion: '<strong>La conversione da audio a MIDI</strong> è particolarmente utile per produttori musicali, compositori, insegnanti di musica e appassionati di musica. Usando il nostro convertitore online da audio a MIDI, puoi estrarre melodie da qualsiasi audio in dati di note MIDI modificabili, per uso in composizione musicale, arrangiamento, apprendimento e analisi. Il nostro strumento supporta l\'elaborazione batch, fornisce controllo su sensibilità, range di note, quantizzazione temporale e altri parametri, tutta l\'elaborazione avviene localmente nel browser, garantendo la privacy e sicurezza del tuo audio.',
    
    faqTitle: 'Domande frequenti',
    faqs: [
        {
            question: 'Come funziona la conversione da audio a MIDI?',
            answer: 'Il convertitore analizza lo spettro di frequenza del segnale audio e determina le note, la loro durata e intensità. Queste informazioni vengono poi codificate nel formato MIDI standard.'
        },
        {
            question: 'Quali tipi di audio sono più adatti per la conversione?',
            answer: 'I migliori risultati si ottengono con registrazioni monofoniche dove è presente un singolo strumento o voce. Registrazioni pulite senza riverbero, eco o rumore di fondo vengono riconosciute più precisamente.'
        },
        {
            question: 'Si possono convertire composizioni musicali complesse?',
            answer: 'Sì, ma i risultati possono variare. Il riconoscimento polifonico (più strumenti contemporaneamente) è un compito difficile e potrebbe richiedere correzione manuale del risultato.'
        },
        {
            question: 'Quali parametri possono essere regolati?',
            answer: 'Puoi regolare la gamma di note riconosciute, la sensibilità di rilevamento, la durata minima delle note e altri parametri per ottimizzare il risultato in base al tuo materiale audio.'
        },
        {
            question: 'Il riconoscimento delle percussioni è supportato?',
            answer: 'Il riconoscimento degli strumenti percussivi ha le sue particolarità. Il programma può determinare i momenti dei colpi, ma il riconoscimento preciso dei tipi di strumenti percussivi è limitato.'
        },
        {
            question: 'Ci sono limitazioni sulla dimensione del file?',
            answer: 'La dimensione massima del file dipende dalle capacità del tuo browser. File fino a 50-100 MB sono generalmente supportati. Per file grandi, si consiglia di tagliare o comprimere l\'audio in anticipo.'
        }
    ],
    tutorialTitle: 'Guida passo passo',
    steps: [
        'Seleziona il file audio cliccando su "Scegli file" o trascinando il file nell\'area di caricamento',
        'Se necessario, regola i parametri di riconoscimento: gamma di note, sensibilità, durata minima delle note',
        'Clicca sul pulsante "Avvia conversione" per iniziare il processo',
        'Attendi il completamento dell\'elaborazione - il tempo dipende dalla durata e complessità dell\'audio',
        'Ascolta il risultato e se necessario scarica il file MIDI sul tuo dispositivo'
    ],
    successTitle: 'Conversione completata con successo',
    successContent: 'Il tuo file MIDI è pronto per il download. Puoi aprirlo in qualsiasi editor MIDI o DAW per continuare a lavorare.',
    relatedToolsTitle: 'Strumenti correlati',
    relatedTools: [
        {
            name: 'Audio in MP3',
            description: 'Convertire l\'audio in formato MP3, risparmiare spazio di archiviazione per una condivisione facile.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio in WAV',
            description: 'Convertire l\'audio in formato WAV senza perdita, adatto per l\'elaborazione audio professionale.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio in M4A',
            description: 'Convertire l\'audio in formato M4A, compatibile con dispositivi Apple, eccellente qualità audio.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio in PCM',
            description: 'Convertire l\'audio in formato PCM grezzo, adatto per l\'elaborazione e l\'analisi audio professionali.',
            url: 'https://www.ufreetools.com/tool/audio-to-pcm'
        }
    ],
    
    referencesTitle: 'Materiali di riferimento',
    references: [
        {
            name: 'Standard del formato MIDI',
            description: 'Scopri le specifiche tecniche e i casi d\'uso del formato MIDI',
            url: 'https://en.wikipedia.org/wiki/MIDI'
        },
        {
            name: 'Tecnologia da Audio a MIDI',
            description: 'Approfondisci il rilevamento dell\'altezza e gli algoritmi di conversione MIDI',
            url: 'https://en.wikipedia.org/wiki/Audio_to_score'
        },
        {
            name: 'Recupero di informazioni musicali',
            description: 'Esplora il recupero di informazioni musicali e la tecnologia di trascrizione musicale automatica',
            url: 'https://en.wikipedia.org/wiki/Music_information_retrieval'
        }
    ]
};
