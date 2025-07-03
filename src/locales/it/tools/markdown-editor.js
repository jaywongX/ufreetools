export default {
  name: 'Editor Markdown',
  description: 'Modifica e visualizza in anteprima documenti Markdown in tempo reale',
  
  options: {
    mode: 'Modalità',
    syntaxHighlighting: 'Evidenziazione sintassi',
    autoSave: 'Salvataggio automatico',
    lineNumbers: 'Numeri di riga',
    spellCheck: 'Controllo ortografico',
    wordWrap: 'A capo automatico'
  },
  
  modes: {
    split: 'Visualizzazione divisa',
    edit: 'Solo modifica',
    preview: 'Solo anteprima'
  },
  
  actions: {
    bold: 'Grassetto',
    italic: 'Corsivo',
    strikethrough: 'Barrato',
    heading: 'Titolo',
    link: 'Collegamento',
    image: 'Immagine',
    list: 'Elenco',
    quote: 'Citazione',
    code: 'Codice',
    table: 'Tabella',
    hr: 'Linea orizzontale',
    preview: 'Anteprima',
    copy: 'Copia',
    clear: 'Pulisci',
    download: 'Scarica Markdown',
    downloadHTML: 'Scarica HTML',
    upload: 'Carica Markdown'
  },
  
  messages: {
    copied: 'Contenuto Markdown copiato negli appunti!',
    copyError: 'Copia fallita, copia manualmente',
    clearConfirm: 'Sei sicuro di voler svuotare l\'editor?',
    templateConfirm: 'Applicare il modello sostituirà il contenuto corrente, continuare?',
    templateApplied: 'Modello "{name}" applicato',
    saved: 'Documento salvato',
    uploadSuccess: 'Documento caricato con successo',
    uploadError: 'Errore durante il caricamento del documento',
    wordCount: '{count} parole',
    charCount: '{count} caratteri'
  },
  
  placeholder: 'Inserisci il contenuto Markdown qui...',
  
  placeholders: {
    linkText: 'Testo del collegamento',
    imageAlt: 'Descrizione immagine'
  },
  
  templates: {
    title: 'Modelli rapidi',
    apply: 'Applica modello',
    confirm: 'Conferma applicazione',
    
    simple: {
      name: 'Documento semplice',
      description: 'Include titoli, elenchi, citazioni',
      content: `# Titolo documento

## Introduzione
Questo è un semplice esempio di documento Markdown.

## Caratteristiche
- Supporta titoli e paragrafi
- Supporta **grassetto** e *corsivo*
- Supporta elenchi numerati e puntati

> Questo è un blocco di citazione, usato per citare opinioni altrui.

## Conclusione
Markdown è un linguaggio di markup semplice da usare.`
    },
    
    readme: {
      name: 'README progetto',
      description: 'Struttura standard per documentazione di progetto',
      content: `# Nome progetto

## Descrizione progetto
Breve descrizione delle funzionalità principali e dello scopo del progetto.

## Funzionalità
- Funzionalità principale 1
- Funzionalità principale 2
- Funzionalità principale 3

## Installazione
\`\`\`
# Installa dipendenze
npm install

# Avvia server di sviluppo
npm run dev
\`\`\`

## Esempio d'uso
\`\`\`
// Codice di esempio
const esempio = new Esempio();
esempio.init();
\`\`\`

## Documentazione
Per documentazione più dettagliata consultare il link alla documentazione.

## Linee guida per contribuire
Contributi benvenuti, consultare le linee guida per contribuire.

## Licenza
Questo progetto è rilasciato sotto licenza MIT, dettagli nel file LICENSE.`
    },
    
    resume: {
      name: 'Curriculum',
      description: 'Modello per curriculum personale',
      content: `# Curriculum

## Informazioni personali
- Nome: Mario Rossi
- Telefono: 1234567890
- Email: mario.rossi@example.com
- Posizione desiderata: Sviluppatore Frontend

## Formazione
Nome università, Informatica, Settembre 2016 - Giugno 2020

## Esperienze lavorative
### Azienda Tech, Sviluppatore Frontend, Luglio 2020 - presente
- Responsabile dello sviluppo e manutenzione frontend del prodotto principale
- Sviluppo sistema gestionale aziendale con Vue.js, migliorando l'esperienza utente
- Ottimizzazione prestazioni frontend, riduzione tempo di caricamento del 30%

### Azienda Tech, Tirocinante Frontend, Luglio 2019 - Giugno 2020
- Partecipazione al progetto di restyling sito aziendale
- Supporto al team in refactoring e ottimizzazione codice

## Competenze tecniche
- Frontend: HTML, CSS, JavaScript, Vue.js, React
- Backend: Node.js, Express
- Altri strumenti: Git, Webpack, Docker

## Esperienze progettuali
### Sistema gestionale aziendale
- Sviluppato con Vue.js per uso interno
- Implementate visualizzazione dati, gestione permessi
- Ottimizzata velocità di risposta, migliorata esperienza utente

## Lingue
- Inglese (fluente)
- Francese (base)`
    },
    
    meeting: {
      name: 'Verbale riunione',
      description: 'Modello per verbali di riunione',
      content: `# Verbale riunione

## Informazioni riunione
- Oggetto: Discussione avanzamento progetto
- Data: 15 Maggio 2023
- Orario: 14:00 - 16:00
- Luogo: Sala riunioni A
- Moderatore: Manager Rossi
- Segretario: Assistente Bianchi

## Partecipanti
- Manager Rossi (Prodotto)
- Ingegnere Verdi (Sviluppo)
- Designer Gialli (Design)
- Tester Blu (Testing)

## Ordine del giorno
1. Revisione lavori settimana precedente
2. Discussione piano settimanale
3. Risoluzione problemi progetto
4. Definizione prossimi passi

## Contenuti discussione
### 1. Revisione settimana precedente
- Documento requisiti prodotto completato
- Bozze design completate al 60%
- Sviluppo frontend: completata struttura base

### 2. Piano settimanale
- Design: completare bozze mancanti
- Sviluppo: iniziare funzionalità core
- Testing: preparare casi di test

### 3. Problemi e soluzioni
- Problema: design API dati non ottimale
- Soluzione: Ingegnere Verdi ridisegnerà API entro mercoledì

## Prossima riunione
- Data: 22 Maggio 2023
- Orario: 14:00 - 15:00`
    }
  },
  
  dialogs: {
    clear: {
      title: 'Svuota editor',
      message: 'Sei sicuro di voler svuotare l\'editor?'
    },
    template: {
      title: 'Applica modello',
      message: 'Applicare il modello sostituirà il contenuto corrente, continuare?'
    }
  },
  
  article: {
    title: "Editor Markdown: crea facilmente documenti formattati",
    features: {
      title: "Scopri l'editing Markdown",
      description: "Questo <strong>editor Markdown</strong> è uno strumento versatile per <strong>formattare testi</strong> che aiuta gli utenti a creare documenti ben strutturati utilizzando la semplice sintassi Markdown. Questo potente <strong>editor di documenti</strong> combina un ambiente di scrittura intuitivo con l'anteprima in tempo reale, rendendolo la scelta ideale per la creazione di contenuti su varie piattaforme.<br><br>Il nostro <strong>editor di testo avanzato</strong> supporta tutti gli elementi standard della sintassi Markdown, inclusi titoli, elenchi, collegamenti, immagini, blocchi di codice e tabelle. L'editor offre funzionalità come evidenziazione della sintassi, anteprima divisa e scorciatoie per la formattazione. Che tu stia redigendo documenti, preparando post per blog o prendendo appunti strutturati, questo <strong>strumento di scrittura Markdown</strong> offre il perfetto equilibrio tra semplicità e funzionalità, semplificando il tuo flusso di lavoro di creazione dei contenuti.",
      useCases: {
        title: "Applicazioni pratiche dell'editor Markdown",
        items: [
          "Sviluppatori che scrivono <strong>documentazione tecnica</strong> e file README per repository GitHub, utilizzando la formattazione del codice e la struttura dei titoli Markdown per un'organizzazione chiara",
          "Creatori di contenuti che abbozzano <strong>articoli per blog</strong> con immagini incorporate, collegamenti e testo formattato, facilmente esportabili in sistemi di gestione dei contenuti come WordPress o Medium",
          "Redattori tecnici che creano <strong>documentazione di prodotto</strong> coerente, utilizzando tabelle per la presentazione dei dati e titoli per l'organizzazione gerarchica",
          "Studenti che prendono <strong>appunti strutturati</strong> durante lezioni o ricerche, utilizzando la semplice sintassi Markdown per formattare rapidamente senza interrompere il flusso di pensiero",
          "Project manager che sviluppano <strong>pagine wiki organizzate</strong> per le knowledge base del team, con sezioni collegate, liste di attività e contenuti formattati",
          "Ricercatori accademici che abbozzano <strong>documenti di ricerca</strong> o appunti con citazioni, formule incorporate e titoli strutturati prima della formattazione finale con software di pubblicazione professionale"
        ]
      }
    },
    faq: {
      title: "Domande frequenti sull'editor Markdown",
      items: [
        {
          question: "Qual è la differenza tra Markdown e i tradizionali programmi di videoscrittura?",
          answer: "Markdown è un linguaggio di markup leggero che utilizza una sintassi di testo semplice per indicare la formattazione, a differenza dei tradizionali programmi di videoscrittura che utilizzano interfacce WYSIWYG (What You See Is What You Get) con pulsanti e menu di formattazione. I principali vantaggi di Markdown includono: semplicità e velocità per attività di formattazione di base, eccellente portabilità tra piattaforme, dimensioni dei file più ridotte, compatibilità con i sistemi di controllo versione, attenzione al contenuto piuttosto che allo stile e output coerente. I programmi di videoscrittura tradizionali offrono opzioni di formattazione più complesse e modifica visiva diretta, ma spesso creano formati di file proprietari con problemi di compatibilità. Markdown è la scelta ideale per contenuti che devono essere convertiti in più formati (HTML, PDF) o condivisi su diverse piattaforme."
        },
        {
          question: "Posso esportare documenti Markdown in altri formati?",
          answer: "Sì, il nostro editor Markdown ti permette di esportare documenti in diversi formati. Puoi scaricare direttamente il contenuto come file Markdown (.md) per modifiche future, o come HTML per la pubblicazione sul web. Per altre conversioni di formato come PDF, DOCX (Word) o altri formati professionali, puoi utilizzare l'esportazione HTML combinata con strumenti di conversione di terze parti o strumenti come Pandoc. La natura pulita e strutturata di Markdown lo rende un formato sorgente eccellente per la conversione in quasi qualsiasi tipo di documento. Questa flessibilità è il motivo per cui Markdown è diventato il formato preferito per contenuti che devono esistere in più formati o piattaforme."
        },
        {
          question: "Questo editor supporta il Markdown in stile GitHub?",
          answer: "Sì, il nostro editor Markdown supporta completamente il Markdown in stile GitHub (GFM), che include tutte le funzionalità standard di Markdown più diverse estensioni che lo rendono particolarmente adatto alla documentazione tecnica e al codice. Queste estensioni includono blocchi di codice con evidenziazione della sintassi, tabelle, testo barrato, elenchi di attività con caselle di controllo e collegamenti URL automatici. L'editor rende correttamente anche elementi specifici di GFM nella modalità anteprima, come menzioni di utenti, riferimenti a issue e codici brevi per emoji. Questa compatibilità garantisce che i documenti creati nel nostro editor verranno visualizzati correttamente nei repository, nelle issue, nelle pull request e nelle pagine wiki di GitHub."
        },
        {
          question: "Posso usare questo editor Markdown per collaborare con altri?",
          answer: "Sebbene il nostro editor Markdown non includa funzionalità integrate di collaborazione in tempo reale (come Google Docs), puoi comunque utilizzare un flusso di lavoro incentrato sull'editor per collaborare efficacemente con altri. Puoi esportare documenti Markdown e condividerli via email o app di messaggistica, oppure utilizzare l'editor insieme a sistemi di controllo versione come Git per una collaborazione più strutturata. Per i team, puoi considerare di utilizzare l'editor insieme a piattaforme come GitHub, dove più collaboratori possono lavorare su file Markdown, con cronologia delle versioni, pull request e commenti. La natura di testo semplice di Markdown, rispetto ai formati di file binari, lo rende particolarmente adatto al tracciamento delle modifiche e alla fusione dei contributi."
        },
        {
          question: "Come posso imparare la sintassi Markdown se sono un principiante?",
          answer: "Imparare la sintassi Markdown è semplice anche per i principianti assoluti. Il nostro editor include una barra degli strumenti di formattazione che ti permette di applicare elementi Markdown comuni con un clic, aiutandoti a imparare la sintassi in modo visivo. Quando usi questi pulsanti, vedrai il corrispondente Markdown apparire nel testo, creando un processo di apprendimento naturale. Inoltre, l'anteprima in tempo reale mostra come verrà visualizzato il tuo Markdown, fornendo un feedback immediato. Per un approccio di apprendimento strutturato, ti consigliamo di iniziare con gli elementi base (titoli, grassetto, corsivo, collegamenti ed elenchi) prima di passare a funzionalità più avanzate come tabelle e blocchi di codice. Grazie al design intuitivo di Markdown, molti utenti scoprono di padroneggiare le basi in meno di 30 minuti."
        }
      ]
    },
    guide: {
      title: "Guida passo passo all'uso dell'editor Markdown",
      steps: [
        "Inizia selezionando la tua <strong>modalità di modifica</strong> preferita dalla barra degli strumenti superiore - scegli la visualizzazione divisa (modifica e anteprima affiancate), solo modifica (massimo spazio per scrivere) o solo anteprima (visualizza il formato finale)",
        "Inizia a digitare contenuto nel pannello dell'editor, utilizzando la <strong>sintassi Markdown</strong> per la formattazione, oppure usa i pulsanti della barra degli strumenti di formattazione sopra l'editor per inserire automaticamente la sintassi appropriata",
        "Crea la struttura del documento usando i simboli del cancelletto per impostare i <strong>titoli</strong> (# per il titolo principale, ## per i sottotitoli, ecc.), organizzando il contenuto in sezioni logiche",
        "Formatta il testo con <strong>stili in linea</strong> come asterischi per il *corsivo* o **grassetto**, backtick per il `codice`, o tilde per il ~~testo barrato~~, per enfatizzare punti importanti",
        "Inserisci <strong>collegamenti e immagini</strong> con la sintassi [testo collegamento](URL), mentre per le immagini usa , creando contenuti ricchi e interattivi",
        "Organizza le informazioni con <strong>elenchi e tabelle</strong> - usa trattini o numeri per creare elenchi, e simboli di barra verticale e trattini per creare tabelle strutturate con righe e colonne",
        "Visualizza in anteprima il tuo lavoro in tempo reale per vedere come apparirà il tuo <strong>documento formattato</strong>, apportando le modifiche necessarie prima di scaricare o copiare il contenuto finale"
      ]
    },
    conclusion: "L'editor Markdown semplifica la creazione di documenti ben formattati, evitando la complessità dei tradizionali programmi di videoscrittura e la curva di apprendimento dell'HTML. Fornendo un ambiente di scrittura pulito e senza distrazioni insieme a potenti funzionalità di formattazione, ti permette di concentrarti sul contenuto mantenendo una presentazione coerente e professionale. Che tu sia uno sviluppatore che documenta codice, uno scrittore che redige post per blog o uno studente che organizza appunti, la sintassi intuitiva di Markdown combinata con l'anteprima in tempo reale del nostro editor rende la creazione di documenti più veloce e intuitiva. Con sempre più piattaforme che adottano il supporto per Markdown, padroneggiare questo versatile formato con il nostro editor ti fornisce una competenza preziosa che può essere trasferita in numerose applicazioni e flussi di lavoro, facendoti risparmiare tempo e aumentando la produttività per tutte le tue esigenze documentali."
  },
  
  defaultContent: `# Benvenuto nell'Editor Markdown

Questo è un semplice editor Markdown con anteprima in tempo reale ed evidenziazione della sintassi.

## Sintassi di base

### Titoli
Usa il simbolo # per i titoli, ad esempio:
# Titolo livello 1
## Titolo livello 2
### Titolo livello 3

### Enfasi
**Grassetto** o __grassetto__
*Corsivo* o _corsivo_
~~Barrato~~

### Elenchi
Elenco puntato:
- Voce 1
- Voce 2
- Voce 3

Elenco numerato:
1. Primo elemento
2. Secondo elemento
3. Terzo elemento

### Collegamenti e immagini
[Testo collegamento](https://example.com)


### Codice
Codice inline: \`var esempio = "ciao";\`

### Citazioni
> Questo è un blocco di citazione.

### Tabelle
| Intestazione 1 | Intestazione 2 | Intestazione 3 |
|----------------|----------------|----------------|
| Cella 1        | Cella 2        | Cella 3        |
| Cella 4        | Cella 5        | Cella 6        |

### Linea orizzontale
---

Inizia a modificare! Puoi usare la barra degli strumenti sopra per inserire rapidamente vari elementi Markdown.`
}