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
};