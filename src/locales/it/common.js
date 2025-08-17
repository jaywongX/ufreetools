export default {
  loading: 'Caricamento in corso...',
  error: 'Errore',
  success: 'Successo',
  cancel: 'Annulla',
  save: 'Salva',
  delete: 'Elimina',
  confirm: 'Conferma',
  navigation: 'Navigazione',
  expand: 'Espandi',
  collapse: 'Riduci',
  languageDetector: {
    detected: 'Abbiamo rilevato che la lingua del tuo browser è {lang}',
    switchQuestion: 'Vuoi passare a questa lingua?',
    switchNow: 'Passa ora',
    stayOn: 'Continua con {lang}'
  },
  defaultDescription: 'Strumenti online gratuiti per sviluppatori, designer e utenti quotidiani.',
  site: {
    name: 'Collezione di strumenti'
  },
  characters: 'Conteggio caratteri',
  lines: 'Conteggio righe',
  pasteFromClipboard: 'Incolla dagli appunti',
  pasteError: 'Impossibile leggere dagli appunti',
  copyFailed: 'Copia fallita',
  simple: 'Semplice',
  nested: 'Annidato',
  complex: 'Complesso',
  example: 'Esempio',
  loadExample: 'Carica esempio',
  spaces: 'Spazi',
  donate: 'Dona',
  buyMeACoffee: 'Offrimi un caffè',
  donateInternational: 'Utenti internazionali',
  donateChina: 'Cina continentale',
  wechatPay: 'Codice WeChat Pay',
  wechatDonation: 'Codice donazione WeChat',
  scanToSupport: 'Scansiona il codice QR qui sotto per supportarci',
  thankYouForSupport: 'Grazie per il tuo supporto!',
  backToHome: "Torna alla home",
  submit: 'Invia',
  submitting: 'Invio in corso...',
  useTool: 'Usa strumento',
  favorites: {
    title: 'I miei preferiti',
    description: 'Visualizza e gestisci i tuoi strumenti preferiti',
    add: 'Aggiungi ai preferiti',
    remove: 'Rimuovi dai preferiti',
    empty: 'Non hai ancora strumenti nei preferiti',
    browseTools: 'Esplora tutti gli strumenti',
    article: {
      title: "Funzione Preferiti: Gestisci efficientemente i tuoi strumenti preferiti",
      intro: {
        title: "Introduzione alla funzione Preferiti e scenari d'uso",
        p1: "<b>La funzione Preferiti</b> ti permette di salvare e gestire facilmente i tuoi strumenti online più utilizzati. Aggiungendo strumenti ai preferiti, puoi creare una collezione personalizzata senza doverli cercare ogni volta tra tutti gli strumenti disponibili. Questo è particolarmente utile per chi usa regolarmente strumenti specifici, migliorando significativamente l'efficienza e risparmiando tempo prezioso. La funzione opera completamente nel browser locale, senza necessità di account o login, garantendo privacy e facilità d'uso.",
        p2: "Nella vita quotidiana e lavorativa, <b>usiamo spesso vari strumenti online</b> per completare diversi compiti. Ad esempio, gli sviluppatori potrebbero aver bisogno di accedere frequentemente a strumenti di formattazione JSON, convertitori di codifica e strumenti di compressione; i designer potrebbero usare regolarmente selettori di colore, strumenti di elaborazione immagini e ottimizzatori SVG; mentre gli utenti generici potrebbero affidarsi a convertitori di documenti, generatori casuali o strumenti di calcolo. Con la funzione Preferiti, puoi organizzare questi strumenti in un'unica raccolta personalizzata.",
        p3: "<b>La funzione è utile in molti scenari</b>, tra cui: sviluppo software per accesso rapido a strumenti di codifica; apprendimento per organizzare risorse educative; ambiente lavorativo per strumenti di elaborazione documenti; e uso personale per utilità quotidiane. Sia che tu sia un professionista o un utente occasionale, la funzione Preferiti ti aiuta a usare gli strumenti online in modo più efficiente."
      },
      tutorial: {
        title: "Come usare la funzione Preferiti",
        intro: "Ecco una guida passo-passo per iniziare a organizzare i tuoi strumenti preferiti:",
        step1: {
          title: "Passo 1: Aggiungi strumenti ai preferiti",
          description: "Nella pagina di un tool, cerca l'icona a forma di stella nell'angolo superiore destro. Cliccandola, lo strumento verrà aggiunto ai tuoi preferiti. L'icona diventerà gialla per confermare l'aggiunta. Puoi modificare la tua selezione in qualsiasi momento."
        },
        step2: {
          title: "Passo 2: Accedi ai tuoi preferiti",
          description: "Per vedere tutti i tuoi strumenti salvati, clicca su 'Preferiti' nella barra di navigazione. La pagina mostrerà la tua collezione completa. Puoi anche accedere rapidamente agli ultimi strumenti aggiunti dalla sezione 'I miei preferiti' nella homepage."
        },
        step3: {
          title: "Passo 3: Gestisci i tuoi preferiti",
          description: "Nella pagina Preferiti, puoi visualizzare, usare e organizzare i tuoi strumenti. Ogni voce ha un'icona di cestino per la rimozione. Cliccando sul nome dello strumento accedi direttamente alla sua pagina. Le modifiche vengono salvate automaticamente."
        },
        step4: {
          title: "Passo 4: Limiti dello storage locale",
          description: "Poiché la funzione usa il localStorage del browser, tieni presente che: 1) I dati restano solo su questo browser/dispositivo; 2) Cancellando i dati del browser perderai i preferiti; 3) Il localStorage ha solitamente un limite di 5-10MB; 4) Le liste non sono sincronizzate tra diversi browser/dispositivi."
        }
      },
      faq: {
        title: "Domande frequenti",
        q1: "Dove sono salvati i miei preferiti? Si sincronizzano tra dispositivi?",
        a1: "<b>I dati sono salvati solo nel tuo browser locale</b>, usando il localStorage. Questo significa che la tua lista non viene caricata su server né sincronizzata tra dispositivi. I vantaggi sono privacy e semplicità d'uso senza necessità di account. Lo svantaggio è che dovrai ricreare la lista su ogni nuovo dispositivo/browser.",
        
        q2: "Quanti strumenti posso salvare nei preferiti?",
        a2: "<b>Il numero è teoricamente limitato dallo spazio del localStorage</b> (solitamente 5-10MB), ma è sufficiente per migliaia di strumenti. In pratica, la maggior parte degli utenti non supera i 100 preferiti. Se raggiungi il limite, puoi ottimizzare la tua lista rimuovendo strumenti meno utilizzati.",
        
        q3: "Se cancello i dati del browser, perderò i preferiti?",
        a3: "<b>Sì, cancellando i dati del browser (specialmente localStorage o cookie) perderai i preferiti</b>. Lo stesso accade usando la modalità navigazione in incognito. Per evitare perdite: evita di cancellare i dati del sito; annota i tuoi strumenti più importanti; usa i segnalibri del browser come backup per i tool cruciali.",
        
        q4: "Perché non usate un sistema ad account per salvare i preferiti?",
        a4: "<b>Abbiamo scelto il localStorage per questi motivi</b>: privacy (nessun dato personale richiesto), semplicità (nessun login), sicurezza (nessun dato sensibile a rischio) e velocità (nessuna verifica di account). In futuro potremmo aggiungere un sistema opzionale ad account per la sincronizzazione, ma manterremo sempre l'opzione locale per chi preferisce privacy e semplicità."
      },
      relatedTools: {
        title: "Strumenti che potrebbero piacerti",
        description: "Scopri questi strumenti popolari da aggiungere ai preferiti:",
        tool1: {
          name: "Strumento di formattazione JSON",
          url: "https://www.ufreetools.com/tool/json-formatter",
          description: "Formatta, comprimi e convalida JSON con evidenziazione sintattica e rilevamento errori."
        },
        tool2: {
          name: "Generatore di password",
          url: "https://www.ufreetools.com/tool/password-generator",
          description: "Crea password complesse personalizzabili in lunghezza e tipi di caratteri."
        },
        tool3: {
          name: "Compressore immagini",
          url: "https://www.ufreetools.com/tool/image-compressor",
          description: "Riduci le dimensioni delle immagini mantenendo la qualità, ideale per web e social media."
        }
      },
      resources: {
        title: "Approfondisci le tecnologie di storage locale",
        resource1: {
          name: "Documentazione MDN: localStorage",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
          description: "Documentazione tecnica completa su localStorage API da Mozilla Developer Network."
        },
        resource2: {
          name: "Specifiche W3C Web Storage",
          url: "https://www.w3.org/TR/webstorage/",
          description: "Documentazione ufficiale dello standard Web Storage."
        }
      }
    }
  },
  home: {
    favoritedToolsTitle: 'I miei preferiti',
    viewAllFavorites: 'Vedi tutti',
  },
  featuredIn: "Presente in:",
  browserExtensionsDesc: "Ottieni tutti gli strumenti con un clic tramite l'estensione",
  addToChrome: "Usa Chrome",
  addToFireFox: "Usa FireFox",
  addToEdge: "Usa Edge",

  share: 'Condividi',
  shareTo: 'Condividi con',
  like: 'Mi piace',
  tweet: 'Tweet',
  copyLink: 'Copia link',
  copied: 'Copiato',
  freeTools: 'Strumenti gratuiti',
  telegram: 'Telegram',
  youtube: 'YouTube',
  line: 'Line',
  qq: 'QQ',
  weibo: 'Weibo',
  defaultTitle: 'UFreeTools - Collezione di strumenti gratuiti online',
  defaultDescription: 'Scopri una potente raccolta di strumenti gratuiti online per aumentare la tua produttività! Include strumenti di elaborazione immagini, strumenti di testo, strumenti di sviluppo e molte altre funzionalità pratiche.',
  toolShareDescription: 'Sto usando lo strumento {toolName}, che è un strumento gratuito online che aiuta a risolvere vari problemi. Funzionalità potenti, interfaccia pulita e completamente gratuito da usare! Provalo ora!',
  categoryShareDescription: 'Esplora strumenti pratici nella categoria {categoryName}, che sono completamente gratuiti e facili da usare. Include diversi strumenti professionali per aumentare la tua produttività.',
  homeShareDescription: 'UFreeTools - Collezione di strumenti gratuiti online, che include strumenti di elaborazione immagini, strumenti di testo, strumenti di sviluppo, strumenti di design e molte altre funzionalità pratiche. Tutti gli strumenti sono completamente gratuiti e non richiedono registrazione.',
  searchShareDescription: 'Risultati della ricerca per "{searchQuery}" in UFreeTools, scopri strumenti pratici gratuiti online!',
};