export default {
  name: 'Convertitore Maiuscole/Minuscole Esadecimale',
  description: 'Converte e formatta stringhe esadecimali tra maiuscolo e minuscolo, con supporto per prefissi, separatori e opzioni di raggruppamento',
  
  input: {
    title: 'Input esadecimale',
    placeholder: 'Inserisci valore esadecimale...'
  },
  
  output: {
    title: 'Risultato conversione',
    placeholder: 'Il risultato della conversione apparirà qui...'
  },
  
  prefix: {
    title: 'Prefisso',
    none: 'Nessuno',
  },
  
  format: {
    title: 'Formato maiuscole/minuscole',
    uppercase: 'Maiuscolo',
    lowercase: 'Minuscolo'
  },
  
  separator: {
    title: 'Separatore',
    none: 'Nessuno',
    space: 'Spazio',
    comma: 'Virgola',
    colon: 'Due punti',
    semicolon: 'Punto e virgola'
  },
  
  grouping: {
    title: 'Raggruppamento (byte)',
    none: 'Nessuno'
  },
  
  actions: {
    copy: 'Copia',
    clear: 'Pulisci',
    convert: 'Converti'
  },
  
  messages: {
    copied: 'Copiato negli appunti',
    copyFailed: 'Copia fallita',
    invalidHex: 'Valore esadecimale non valido'
  },
  
  examples: {
    title: 'Esempi',
    example1: {
      title: '"Hello World" in esadecimale',
    },
    example2: {
      title: 'ASCII Hello con prefisso 0x',
    },
    example3: {
      title: 'DEADBEEF (valore comune per debug)',
    },
    example4: {
      title: 'Formato indirizzo MAC',
    }
  },
  
  tips: {
    title: 'Suggerimenti',
    tip1: 'I valori esadecimali usano caratteri 0-9 e A-F (o a-f)',
    tip2: 'Prefissi diversi sono usati in contesti diversi: 0x in programmazione, # per i colori, ecc.',
    tip3: 'Usare raggruppamenti e separatori migliora la leggibilità di lunghe stringhe esadecimali',
    tip4: 'Gli indirizzi MAC usano tipicamente separatori a due punti e raggruppamenti da 1 byte'
  },
  
  article: {
    title: 'Convertitore Maiuscole/Minuscole Esadecimale: Guida completa alla formattazione esadecimale',
    
    introduction: {
      title: 'Cos\'è un convertitore maiuscole/minuscole esadecimale?',
      p1: 'Il nostro <strong>convertitore maiuscole/minuscole esadecimale</strong> è uno strumento progettato specificamente per convertire stringhe esadecimali tra formato maiuscolo e minuscolo, offrendo opzioni aggiuntive di formattazione. Che tu abbia bisogno di <strong>convertire esadecimale in minuscolo</strong> per coerenza nella programmazione o cambiare esadecimale minuscolo in maiuscolo per migliorare la leggibilità, questo strumento fornisce una soluzione completa per tutte le tue esigenze di conversione esadecimale.',
      p2: 'La notazione esadecimale (base 16) usa numeri 0-9 e lettere A-F (o a-f) per rappresentare valori. La scelta tra <strong>esadecimale minuscolo</strong> e maiuscolo può influenzare significativamente la leggibilità del codice, la compatibilità e in alcuni casi anche il comportamento del sistema. Il nostro convertitore non gestisce solo semplici conversioni tra maiuscole e minuscole, ma anche formattazioni complesse con prefissi, separatori e raggruppamenti personalizzati.',
      p3: 'Il dibattito sull\'uso di <strong>esadecimale in minuscolo o maiuscolo</strong> è comune tra gli sviluppatori. Sebbene entrambi i formati rappresentino lo stesso valore, diversi linguaggi di programmazione, protocolli e sistemi possono preferire o richiedere formati specifici. Questo strumento colma il divario fornendo conversioni istantanee tra maiuscole e minuscole e opzioni aggiuntive di formattazione che si adattano a varie specifiche tecniche e linee guida di stile.'
    },
    
    applications: {
      title: 'Applicazioni pratiche e casi d\'uso',
      scenario1: {
        title: 'Programmazione e sviluppo',
        content: 'Gli sviluppatori di software spesso hanno bisogno di <strong>convertire esadecimale in caratteri alfanumerici</strong> o cambiare formato tra maiuscole e minuscole per mantenere coerenza nel codice. Quando si usa Java, gli sviluppatori potrebbero dover <strong>convertire esadecimale in long Java</strong>, dove la coerenza tra maiuscole e minuscole è cruciale per la leggibilità. Il nostro strumento semplifica questo processo seguendo le linee guida di stile del codice.'
      },
      scenario2: {
        title: 'Reti e protocolli di comunicazione',
        content: 'Gli ingegneri di rete che lavorano con indirizzi MAC, IPv6 o altri protocolli che usano notazione esadecimale possono mantenere coerenza nella documentazione o implementazione di sistemi. Molti protocolli hanno requisiti specifici per formati <strong>esadecimali minuscoli</strong> con separatori e raggruppamenti particolari, che il nostro strumento può soddisfare facilmente.'
      },
      scenario3: {
        title: 'Formattazione codici colore',
        content: 'I web designer e artisti grafici che usano codici colore esadecimali (#RRGGBB) spesso hanno bisogno di <strong>convertire esadecimale in lettere di un caso specifico</strong> per diversi strumenti di design o specifiche CSS. Alcuni sistemi di design richiedono maiuscole per coerenza di brand, mentre altri preferiscono minuscole per conformità alle convenzioni HTML/CSS.'
      },
      scenario4: {
        title: 'Analisi e conversione dati',
        content: 'Gli analisti di dati spesso devono convertire formati di testo tra vari strumenti. Ad esempio, potresti aver bisogno di <strong>convertire testo minuscolo in maiuscolo</strong> in celle Excel contenenti valori esadecimali, o <strong>convertire output di comandi Linux da minuscolo a maiuscolo</strong> per ulteriore elaborazione.'
      },
      scenario5: {
        title: 'Computer forensics e sicurezza',
        content: 'I professionisti della sicurezza che analizzano dump esadecimali, file binari o dati crittografati spesso hanno bisogno di formati coerenti per documentazione, confronto e analisi. Convertire tra formati può facilitare l\'integrazione con vari strumenti di sicurezza, molti dei quali richiedono <strong>conversione esadecimale in minuscolo</strong> per un elaborazione coerente.'
      }
    },
    
    guide: {
      title: 'Come usare il convertitore maiuscole/minuscole esadecimale',
      step1: {
        title: 'Passo 1: Inserisci il tuo valore esadecimale',
        content: 'Inizia inserendo qualsiasi valore esadecimale nel campo di input. Il nostro strumento accetta caratteri esadecimali validi (0-9, A-F, a-f) e separatori comuni. Che tu voglia <strong>convertire esadecimale in lettere di un caso diverso</strong> o formattare una stringa esistente, inizia inserendo il tuo valore esadecimale.'
      },
      step2: {
        title: 'Passo 2: Scegli il formato maiuscole/minuscole',
        content: 'Scegli tra formato maiuscolo (ABCDEF) e minuscolo (abcdef). Questa opzione determina se la tua <strong>conversione esadecimale minuscolo/maiuscolo</strong> userà lettere maiuscole o minuscole per rappresentare la parte alfabetica del valore esadecimale.'
      },
      step3: {
        title: 'Passo 3: Seleziona le opzioni del prefisso',
        content: 'Se necessario, scegli un prefisso per il tuo valore esadecimale. Opzioni comuni includono 0x (per programmazione), # (per colori), \\x (per sequenze di escape) o h (suffisso assembly). Questo è particolarmente utile quando devi <strong>convertire esadecimale in formato alfanumerico</strong> specifico per un linguaggio di programmazione o sistema.'
      },
      step4: {
        title: 'Passo 4: Imposta separatori e raggruppamenti',
        content: 'Scegli un carattere separatore (spazio, virgola, due punti, punto e virgola) e dimensione di raggruppamento per formattare l\'output. Ad esempio, gli indirizzi MAC usano tipicamente separatori a due punti e raggruppamenti da 1 byte. Questo passo è cruciale quando devi <strong>convertire esadecimale in formato lungo</strong> con raggruppamenti specifici per migliorare la leggibilità.'
      },
      step5: {
        title: 'Passo 5: Copia e usa il risultato convertito',
        content: 'Una volta completata la conversione, il tuo valore esadecimale formattato apparirà nel campo di output. Clicca il pulsante "Copia" per copiare il risultato negli appunti, pronto per essere usato nel tuo codice, documentazione o altre applicazioni. Che tu abbia bisogno di <strong>convertire esadecimale in minuscolo</strong> o implementare un formato specifico con raggruppamenti e prefissi, ora puoi usare l\'esadecimale perfettamente formattato.'
      }
    },
    
    faq: {
      title: 'Domande frequenti',
      q1: 'Qual è la differenza tra esadecimale minuscolo e maiuscolo?',
      a1: 'La differenza tra <strong>esadecimale minuscolo e maiuscolo</strong> sta nel modo in cui sono mostrate le lettere A-F (usate per rappresentare valori 10-15). Funzionalmente, "1a2b3c" e "1A2B3C" rappresentano lo stesso valore. Tuttavia, molti linguaggi di programmazione e sistemi hanno convenzioni di stile o requisiti che specificano l\'uso di maiuscole/minuscole. Ad esempio, i codici colore CSS tradizionalmente usano minuscole, mentre alcuni linguaggi assembly preferiscono maiuscole per migliorare la leggibilità.',
      
      q2: 'Come convertire esadecimale in caratteri alfanumerici?',
      a2: 'L\'esadecimale è già alfanumerico, usando sia numeri (0-9) che lettere (A-F). Se vuoi <strong>convertire esadecimale in lettere oltre A-F</strong>, probabilmente intendi la conversione ASCII o Unicode, che è un processo diverso che interpreta valori esadecimali come codici carattere. Questo strumento si concentra sulla conversione tra maiuscole e minuscole e formattazione della notazione esadecimale standard, non su codifica/decodifica di testo.',
      
      q3: 'Perché dovrei convertire esadecimale in minuscolo o maiuscolo?',
      a3: 'Ci sono diverse ragioni per cui potresti aver bisogno di <strong>convertire esadecimale in minuscolo</strong> o maiuscolo:<ul><li>Conformità allo stile del codice (molti linguaggi hanno linee guida che specificano maiuscole/minuscole)</li><li>Requisiti di sistema (alcune API o protocolli richiedono formati specifici)</li><li>Preferenze di leggibilità (le maiuscole sono più visibili nella documentazione)</li><li>Elaborazione dati coerente (quando si confrontano o analizzano valori esadecimali)</li></ul>Il nostro strumento rende queste conversioni semplici ed efficienti.',

      q4: 'Come usare il convertitore esadecimale per convertire esadecimale in long Java?',
      a4: 'Per <strong>convertire esadecimale in long Java</strong>, devi prima assicurarti che la tua stringa esadecimale sia formattata correttamente usando il nostro strumento (tipicamente con prefisso 0x e lettere minuscole). Poi puoi copiare il risultato e usare <code>Long.parseLong(hexString.substring(2), 16)</code> in Java per analizzare stringhe con prefisso 0x, o <code>Long.parseLong(hexString, 16)</code> per stringhe senza prefisso. Il nostro strumento aiuta a garantire che la tua stringa esadecimale sia formattata correttamente prima dell\'elaborazione in Java.',

      q5: 'Posso convertire più valori esadecimali contemporaneamente?',
      a5: 'Sì, puoi elaborare più valori esadecimali inserendo separatori appropriati nel campo di input. Se hai bisogno di <strong>convertire testo minuscolo in maiuscolo in Excel</strong> contenente molti valori esadecimali, puoi copiare l\'intera colonna, convertirla qui e incollare i risultati. Lo strumento applicherà il formato scelto (maiuscole/minuscole, prefissi, separatori e raggruppamenti) a tutti i caratteri esadecimali validi nell\'input.'
    },

    resources: {
      title: 'Risorse aggiuntive',
      resource1: '<a href="https://it.wikipedia.org/wiki/Sistema_numerico_esadecimale" target="_blank" rel="noopener noreferrer">Wikipedia: Notazione esadecimale</a> - Informazioni complete sullo sfondo della notazione esadecimale.',
      resource2: '<a href="https://www.ietf.org/rfc/rfc5952.txt" target="_blank" rel="noopener noreferrer">IETF RFC 5952</a> - Raccomandazioni per la rappresentazione testuale di indirizzi IPv6, incluso l\'uso di esadecimale minuscolo.'
    },  
    
    conclusion: {
      title: 'Conclusione',
      content: 'Il nostro <strong>convertitore maiuscole/minuscole esadecimale</strong> fornisce una soluzione versatile per tutte le esigenze di conversione di formato esadecimale. Che tu abbia bisogno di <strong>convertire esadecimale in minuscolo</strong>, applicare prefissi specifici, formattare stringhe o usare separatori e raggruppamenti personalizzati, il nostro strumento ha tutto ciò che ti serve.'
    }
  }
};