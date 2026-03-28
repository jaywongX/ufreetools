export default {
    title: 'Editor Visuale Audio: Guida all\'Editor Forma d\'Onda Audio Online',
    functionTitle: 'Cos\'è l\'Editor Visuale Audio e i Suoi Usi?',
    intro: 'Il nostro <strong>Editor Visuale Audio</strong> è un\'applicazione professionale di editing forma d\'onda audio online che supporta l\'editing visuale di WAV, MP3, FLAC, OGG, AAC, M4A e altri formati audio. Con un\'interfaccia intuitiva di visualizzazione forma d\'onda, puoi selezionare con precisione segmenti audio ed eseguire operazioni di editing professionali come ritagliare, eliminare, dissolvenza in/out, regolazione volume, muto, normalizzare e invertire.',
    
    useCasesTitle: 'Casi d\'Uso Comuni per Editing Visuale Audio',
    useCases: [
        'Modificare e ritagliare file audio, rimuovere parti indesiderate',
        'Produrre podcast e programmi radio con post-produzione audio',
        'Creare musica di sottofondo per video, regolare durata ed effetti audio',
        'Creare suonerie e suoni di notifica, ritagliare clip audio',
        'Elaborare registrazioni vocali, rimuovere silenzio e rumore',
        'Creare mix musicali, combinare più clip audio',
        'Regolare il volume audio, eseguire la normalizzazione',
        'Aggiungere effetti dissolvenza in/out per transizioni più fluide'
    ],
    
    tipTitle: 'Consiglio Professionale:',
    tipContent: 'Consigliamo di fare backup dei file audio originali prima di modificare. Usa la funzione di selezione per scegliere con precisione i segmenti audio che desideri modificare. Gli effetti dissolvenza in/out rendono le transizioni audio più naturali. La funzione normalizza ottimizza il livello di volume generale dell\'audio.',
    
    conclusion: '<strong>Editor Visuale Audio</strong> è particolarmente utile per produttori di podcast, appassionati di musica, creator di video e principianti nell\'editing audio. Con il nostro editor audio online, puoi eseguire editing audio preciso in un\'interfaccia forma d\'onda intuitiva, supportando varie operazioni professionali come ritagliare, eliminare, dissolvenza in/out, muto, normalizzare e invertire.',
    
    faqTitle: 'Domande Frequenti',
    faqs: [
        {
            question: 'Quali formati di input supporta l\'Editor Visuale Audio?',
            answer: 'Il nostro <strong>Editor Audio Online</strong> supporta molti formati audio comuni tra cui WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE e altri. Puoi caricare qualsiasi formato supportato per modificarlo ed esportare come WAV o MP3 dopo la modifica.'
        },
        {
            question: 'Come seleziono un segmento audio da modificare?',
            answer: 'Nell\'area di visualizzazione forma d\'onda, tieni premuto il tasto sinistro del mouse e trascina per selezionare un segmento audio. L\'area selezionata verrà evidenziata in blu, mostrando tempo di inizio, tempo di fine e durata della selezione. Dopo aver selezionato, puoi usare strumenti di editing come ritagliare, eliminare, dissolvenza in/out, ecc.'
        },
        {
            question: 'Cosa fanno gli effetti dissolvenza in/out?',
            answer: 'L\'effetto dissolvenza in aumenta gradualmente l\'audio dal silenzio al volume normale, mentre l\'effetto dissolvenza out diminuisce gradualmente l\'audio dal volume normale al silenzio. Questi effetti rendono l\'inizio e la fine dell\'audio più naturali, evitando cambi di volume improvvisi, particolarmente adatti per musica di sottofondo e transizioni audio.'
        },
        {
            question: 'Cos\'è la funzione normalizza?',
            answer: 'La normalizzazione è il processo di regolazione del volume audio a un livello ottimale. Analizza il volume massimo nell\'audio, poi regola proporzionalmente il volume generale affinché il volume massimo raggiunga vicino ma non superi il massimo consentito (solitamente -0.5dB). Questo rende il volume generale dell\'audio più pieno evitando la distorsione di clipping.'
        },
        {
            question: 'Il processo di editing è sicuro? L\'audio verrà caricato sui server?',
            answer: 'Completamente sicuro! Il nostro strumento usa tecnologia frontend pura, tutta l\'elaborazione audio viene eseguita localmente nel tuo browser. I tuoi file audio non vengono caricati su nessun server, garantendo privacy e sicurezza dei dati. Puoi modificare con fiducia file audio contenenti contenuti sensibili.'
        },
        {
            question: 'Quali formati posso esportare?',
            answer: 'Dopo la modifica, puoi esportare come WAV (formato senza perdita) o MP3 (formato compresso). Se hai selezionato solo parte dell\'audio, puoi scegliere di esportare l\'audio completo o solo la selezione. La frequenza di campionamento originale e il numero di canali vengono preservati durante l\'esportazione.'
        }
    ],
    
    tutorialTitle: 'Come Usare l\'Editor Visuale Audio',
    steps: [
        {
            title: 'Carica il Tuo File Audio',
            description: 'Prima carica il file audio che desideri modificare. Puoi caricare in due modi: <strong>trascina il file</strong> nell\'area di caricamento o <strong>clicca sfoglia</strong> per selezionare un file. Lo strumento supporta WAV, MP3, FLAC, OGG, AAC, M4A e molti altri formati.',
            note: 'Consigliamo di usare formati senza perdita (come WAV, FLAC) per la modifica per mantenere la migliore qualità audio.'
        },
        {
            title: 'Visualizza Forma d\'Onda Audio',
            description: 'Dopo il caricamento, la forma d\'onda audio verrà visualizzata automaticamente nell\'area di editing. La forma d\'onda mostra le variazioni di ampiezza dell\'audio, permettendoti di vedere visivamente la struttura dell\'audio. Le informazioni del file sono mostrate sopra, inclusi durata, frequenza di campionamento e numero di canali.',
            note: 'I picchi nella forma d\'onda rappresentano parti più forti, mentre le aree piatte rappresentano parti più soft o silenziose.'
        },
        {
            title: 'Seleziona Regione di Editing',
            description: '<strong>Tieni premuto il tasto sinistro del mouse e trascina</strong> sulla forma d\'onda per selezionare un segmento audio. L\'area selezionata verrà evidenziata in blu, mostrando l\'intervallo temporale della selezione. Puoi riprodurre la selezione per confermare che sia corretta.',
            note: 'Se nessuna regione è selezionata, alcuni strumenti di editing (come normalizza) verranno applicati a tutto l\'audio.'
        },
        {
            title: 'Usa Strumenti di Editing',
            description: 'Dopo aver selezionato una regione, usa gli strumenti di editing qui sotto: <strong>Ritaglia</strong> mantiene la selezione e rimuove altre parti, <strong>Elimina</strong> rimuove la selezione, <strong>Dissolvenza In/Out</strong> aggiunge effetti gradiente, <strong>Muto</strong> silenzia la selezione, <strong>Normalizza</strong> ottimizza il volume, <strong>Inverti</strong> riproduce l\'audio al contrario.',
            note: 'Le operazioni di editing hanno effetto immediato, consigliamo di verificare attentamente i risultati prima di esportare.'
        },
        {
            title: 'Riproduci e Anteprima',
            description: 'Usa i controlli di riproduzione per <strong>riprodurre/pausa</strong>, <strong>avanzare/riavvolgere</strong>, e <strong>fermare</strong> l\'audio. Una linea indicatrice rossa mostra la posizione di riproduzione attuale. Puoi anche regolare il cursore del volume per controllare il volume di riproduzione.',
            note: 'La regolazione del volume di riproduzione non influisce sull\'audio esportato, che mantiene il livello di volume originale.'
        },
        {
            title: 'Esporta Risultati Editing',
            description: 'Quando sei soddisfatto dei risultati di editing, seleziona il formato di esportazione (WAV o MP3), poi clicca sul pulsante <strong>"Esporta Audio Completo"</strong> o <strong>"Esporta Selezione"</strong>. Il file verrà scaricato automaticamente sul tuo dispositivo. Tutta l\'elaborazione viene eseguita localmente nel browser, garantendo privacy e sicurezza dell\'audio.',
            note: 'Il formato WAV mantiene qualità senza perdita ma dimensione file maggiore; il formato MP3 ha dimensione file minore, adatto per la condivisione.'
        }
    ],
    
    successTitle: 'Congratulazioni!',
    successContent: 'Hai imparato con successo come usare il nostro Editor Visuale Audio. Ora puoi facilmente modificare file audio in vari formati, eseguire operazioni professionali come ritagliare, dissolvenza in/out, regolazione volume e altro, soddisfacendo varie esigenze come produzione podcast, editing musicale ed elaborazione audio.',
    
    relatedToolsTitle: 'Strumenti Correlati',
    relatedTools: [
        {
            name: 'Audio in MP3',
            description: 'Converti audio in formato MP3, risparmia spazio di archiviazione e facile da condividere.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio in WAV',
            description: 'Converti audio in formato WAV senza perdita, adatto per elaborazione audio professionale.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio in M4A',
            description: 'Converti audio in formato M4A, alta qualità con dimensioni ridotte.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio in Testo',
            description: 'Converti la voce nell\'audio in testo, supporta più lingue.',
            url: 'https://www.ufreetools.com/tool/audio-to-text'
        }
    ],
    
    referencesTitle: 'Riferimenti',
    references: [
        {
            name: 'Principi di Editing Forma d\'Onda Audio',
            description: 'Scopri i principi tecnici di visualizzazione e editing forma d\'onda audio',
            url: 'https://en.wikipedia.org/wiki/Waveform'
        },
        {
            name: 'Elaborazione Audio Digitale',
            description: 'Approfondisci le tecniche di elaborazione e editing audio digitale',
            url: 'https://en.wikipedia.org/wiki/Digital_audio_editing'
        },
        {
            name: 'Guida Format Audio',
            description: 'Conosci le caratteristiche e i casi d\'uso di diversi formati audio',
            url: 'https://en.wikipedia.org/wiki/Audio_file_format'
        }
    ]
};
