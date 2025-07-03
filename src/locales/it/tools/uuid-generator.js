export default {
  name: 'Generatore UUID',
  description: 'Genera UUID e GUID casuali con opzioni personalizzabili per chiavi primarie, nomi file temporanei e altri casi d\'uso',
  options: {
    version: 'Versione UUID',
    quantity: 'Quantità',
    format: 'Opzioni formato',
    includeDash: 'Includi trattini (-)',
    generateCount: 'Numero da generare'
  },
  versions: {
    v1: 'Versione 1 (basata su tempo)',
    v4: 'Versione 4 (casuale)',
    v5: 'Versione 5 (namespace)',
    custom: 'Personalizzato'
  },
  quantities: {
    single: 'Singolo',
    five: '5',
    ten: '10',
    twenty: '20'
  },
  formats: {
    default: 'Predefinito',
    base64: 'Base64',
    binary: 'Binario',
    hex: 'Esadecimale',
    noDash: 'Senza trattini'
  },
  actions: {
    generate: 'Genera UUID',
    copy: 'Copia',
    copyAll: 'Copia tutti',
    clear: 'Pulisci risultati',
    download: 'Scarica come TXT'
  },
  messages: {
    copied: 'Copiato negli appunti!',
    generated: 'UUID generati con successo',
    tooMany: 'Numero massimo consentito: 1000',
    invalidVersion: 'Versione UUID non valida',
    invalidNamespace: 'Namespace UUID non valido',
    copyFailed: 'Copia fallita'
  },
  article: {
    title: "Generatore UUID: Crea identificatori unici per le tue applicazioni",
    features: {
      title: "Cos'è un generatore UUID?",
      description: "Un generatore <strong>UUID (Universal Unique Identifier)</strong> è uno strumento specializzato che crea identificatori standardizzati a 128 bit garantendone l'unicità globale. Il nostro <strong>generatore UUID online</strong> segue le specifiche RFC 4122 per creare questi identificatori casuali, fornendo <strong>valori ID unici</strong> per varie applicazioni.<br><br>Il vantaggio principale degli UUID è l'estremamente bassa probabilità di collisione. Ogni <strong>UUID generato</strong> consiste in 32 caratteri esadecimali, tipicamente separati in 5 gruppi (formato 8-4-4-4-12). Il nostro strumento si concentra principalmente sugli UUID versione 4, che usano numeri casuali o pseudo-casuali, ideali per applicazioni che richiedono <strong>identificatori unici</strong> senza necessità di coordinamento tra sistemi.",
      useCases: {
        title: "Casi d'uso pratici per gli UUID",
        items: [
          "<strong>Chiavi primarie database</strong>: Gli UUID sono eccellenti identificatori per database, specialmente in sistemi distribuiti dove più server possono creare record senza coordinamento",
          "<strong>Computazione distribuita</strong>: Per microservizi e applicazioni cloud, gli UUID forniscono identificatori generabili indipendentemente da diversi servizi senza rischio di collisioni",
          "<strong>Sviluppo web</strong>: Creazione di ID sessione unici, tracciamento interazioni utente o generazione token temporanei per reset password e verifica account",
          "<strong>Gestione contenuti</strong>: Assegnazione di ID unici ad asset digitali, documenti e frammenti di contenuto in sistemi di pubblicazione complessi",
          "<strong>Identificazione dispositivi IoT</strong>: Fornitura di ID unici per dispositivi IoT che necessitano tracciamento in rete senza coordinamento centrale",
          "<strong>Applicazioni gaming</strong>: Generazione di ID per istanze di gioco, sessioni multiplayer o oggetti unici in ambienti multiplayer con rischio minimo di collisioni"
        ]
      }
    },
    faq: {
      title: "Domande frequenti sulla generazione UUID",
      items: [
        {
          question: "Quali differenze tra le versioni UUID?",
          answer: "Esistono diverse versioni UUID, ognuna generata diversamente: la versione 1 usa timestamp e indirizzo MAC, la versione 3 usa namespace e hash MD5, la versione 4 (più comune) usa numeri casuali, la versione 5 usa namespace e hash SHA-1. Il nostro generatore si concentra sulla versione 4, che offre il miglior compromesso tra unicità, sicurezza e facilità di generazione."
        },
        {
          question: "Gli UUID sono sicuri per applicazioni sensibili?",
          answer: "Grazie alla casualità e imprevedibilità degli UUID versione 4, offrono buona sicurezza per la maggior parte delle applicazioni. Con 122 bit casuali, la probabilità di generare due UUID identici è estremamente bassa (circa 1 su 5.3×10³⁸⁸). Tuttavia, non soddisfano tutti i requisiti di sicurezza crittografica. Per applicazioni altamente sensibili, si consiglia di combinare UUID con ulteriori misure di sicurezza."
        },
        {
          question: "Posso usare UUID come chiavi primarie?",
          answer: "Sì, gli UUID sono eccellenti chiavi primarie, specialmente in sistemi distribuiti. Vantaggi includono: generazione senza coordinamento centrale, nessun rischio di collisioni unendo database, maggiore privacy (gli ID sequenziali non rivelano quantità di record) e semplificazione dello sviluppo di sistemi distribuiti. Svantaggi includono maggiore spazio di archiviazione (16 byte vs 4 byte di un intero) e potenziale impatto sulle prestazioni degli indici."
        },
        {
          question: "Gli UUID garantiscono unicità globale?",
          answer: "Sebbene progettati per essere praticamente unici, gli UUID non garantiscono matematicamente unicità assoluta. Gli UUID versione 4 hanno 2¹²² valori possibili (circa 5.3×10³⁶⁶), rendendo le collisioni estremamente improbabili nella pratica. Per tutte le applicazioni pratiche, gli UUID possono essere considerati globalmente unici."
        },
        {
          question: "Rimuovere i trattini dagli UUID influisce sul loro uso?",
          answer: "Rimuovere i trattini non influisce sull'unicità o validità degli UUID - è solo una preferenza di formato. La versione standard con trattini (es. 550e8400-e29b-41d4-a716-446655440000) migliora la leggibilità, ma la versione senza trattini contiene le stesse informazioni. Alcuni sistemi preferiscono UUID senza trattini per risparmiare spazio o soddisfare requisiti specifici."
        }
      ]
    },
    guide: {
      title: "Come usare il nostro generatore UUID",
      steps: [
        "Seleziona la <strong>versione UUID</strong> preferita dal menu a discesa (per la maggior parte delle applicazioni, la versione 4 è consigliata per la sua casualità)",
        "Scegli il <strong>numero di UUID</strong> da generare (1, 5, 10 o 20)",
        "Configura le <strong>opzioni formato</strong> selezionando/deselezionando 'Includi trattini' a seconda che ti serva il formato standard con trattini (8-4-4-4-12) o una stringa continua",
        "Clicca il pulsante <strong>'Genera UUID'</strong> per creare identificatori unici con le impostazioni specificate",
        "Copia singoli UUID cliccando l'icona accanto a ciascuno, o usa 'Pulisci risultati' per ricominciare"
      ]
    },
    conclusion: "Il nostro generatore UUID offre un modo semplice ed efficiente per creare identificatori unici standardizzati per varie applicazioni. Con opzioni personalizzabili per versione e formato, soddisfa i requisiti di diversi sistemi mantenendo le garanzie di unicità che rendono gli UUID così preziosi nel computing moderno."
  }
}