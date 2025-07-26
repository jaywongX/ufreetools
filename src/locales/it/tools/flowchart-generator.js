export default {
  name: 'Generatore di Diagrammi di Flusso',
  description: 'Crea diagrammi di flusso e grafici utilizzando una semplice sintassi testuale',
  title: 'Generatore di Diagrammi e Grafici',
  renderBtn: 'Renderizza Grafico',
  resetBtn: 'Ripristina',
  downloadSvgBtn: 'Scarica SVG',
  copySvgBtn: 'Copia SVG',

  input: {
    title: 'Definizione Diagramma',
    placeholder: 'Inserisci codice in sintassi Mermaid...',
    loadExample: 'Carica Esempio',
    clear: 'Pulisci',
    uploadFile: 'Carica File'
  },

  output: {
    title: 'Diagramma Generato',
    downloadImage: 'Scarica Immagine',
    downloadSVG: 'Scarica SVG',
    copyImage: 'Copia Immagine',
    copySVG: 'Copia SVG',
    zoomIn: 'Ingrandisci',
    zoomOut: 'Riduci',
    fitView: 'Adatta Vista',
    resetView: 'Ripristina Vista',
    preview: 'Anteprima',
    code: 'Codice Mermaid'
  },

  options: {
    title: 'Opzioni',
    theme: 'Tema',
    orientation: 'Orientamento',
    nodeShape: 'Forma Nodo',
    arrowStyle: 'Stile Freccia',
    lineStyle: 'Stile Linea',
    textPosition: 'Posizione Testo',
    fontSize: 'Dimensione Font',
    fontFamily: 'Famiglia Font',
    showGrid: 'Mostra Griglia',
    autoRender: 'Renderizzazione Automatica'
  },

  themes: {
    default: 'Predefinito',
    simple: 'Minimalista',
    forest: 'Foresta',
    neutral: 'Neutro',
    dark: 'Scuro',
    business: 'Business',
    base: 'Base',
    custom: 'Personalizzato'
  },

  orientations: {
    topToBottom: 'Dall\'alto in basso',
    bottomToTop: 'Dal basso in alto',
    leftToRight: 'Da sinistra a destra',
    rightToLeft: 'Da destra a sinistra'
  },

  nodeShapes: {
    rectangle: 'Rettangolo',
    roundedRectangle: 'Rettangolo Arrotondato',
    circle: 'Cerchio',
    diamond: 'Rombo',
    hexagon: 'Esagono',
    parallelogram: 'Parallelogramma'
  },

  arrowStyles: {
    arrow: 'Freccia',
    open: 'Aperta',
    filled: 'Piena',
    diamond: 'Rombo',
    circle: 'Cerchio'
  },

  lineStyles: {
    solid: 'Linea Piena',
    dashed: 'Linea Tratteggiata',
    dotted: 'Linea Puntinata',
    curved: 'Linea Curva',
    straight: 'Linea Retta',
    orthogonal: 'Linea Ortogonale'
  },

  syntax: {
    title: 'Guida Sintassi',
    node: 'Nodo',
    edge: 'Collegamento',
    subgraph: 'Sottografo',
    comment: 'Commento',
    styling: 'Stile',
    showMore: 'Mostra Altro'
  },

  actions: {
    render: 'Renderizza Diagramma',
    save: 'Salva Grafico',
    export: 'Esporta',
    share: 'Condividi'
  },

  messages: {
    renderSuccess: 'Diagramma renderizzato con successo',
    renderError: 'Errore renderizzazione diagramma: {error}',
    syntaxError: 'Errore sintassi: {error}',
    saved: 'Grafico salvato',
    copied: 'Codice SVG copiato negli appunti',
    copyFailed: 'Copia fallita, copia manualmente',
    exported: 'Diagramma esportato',
    emptyCode: 'Inserisci codice in sintassi Mermaid',
    rendering: 'Renderizzazione in corso...',
    errorTitle: 'Errore Renderizzazione'
  },

  examples: {
    flowchart: 'Diagramma di Flusso',
    classDiagram: 'Diagramma delle Classi',
    sequenceDiagram: 'Diagramma di Sequenza',
    entityRelationship: 'Diagramma Entità-Relazione',
    gantt: 'Diagramma di Gantt',
    stateDiagram: 'Diagramma degli Stati',
    pieChart: 'Grafico a Torta',
    userJourney: 'Mappa del Percorso Utente'
  },

  exampleCodes: {
    flowchart: `graph TD
    A[Inizio] --> B\{È corretto?\}
    B -->|Sì| C[Risultato Corretto]
    B -->|No| D[Risultato Errato]
    C --> E[Fine]
    D --> E
`,
    sequenceDiagram: `sequenceDiagram
    participant Cliente
    participant Server
    Cliente->>Server: Richiesta Dati
    Server-->>Cliente: Risposta Dati
    Cliente->>Server: Invia Modulo
    Server-->>Cliente: Conferma Invio
`,
    gantt: `gantt
    title Piano di Progetto
    dateFormat  YYYY-MM-DD
    section Fase Pianificazione
    Raccolta Requisiti      :a1, 2023-01-01, 30d
    Progettazione Sistema   :after a1, 20d
    section Fase Sviluppo
    Sviluppo Backend        :2023-02-20, 45d
    Sviluppo Frontend       :2023-02-25, 40d
    section Fase Test
    Test Sistema            :2023-04-05, 20d
    Test Utente             :2023-04-20, 15d
    section Fase Rilascio
    Deploy Produzione       :2023-05-05, 10d
`,
    stateDiagram: `stateDiagram-v2
    [*] --> InModifica
    InModifica --> InRevisione: Invia per Approvazione
    InRevisione --> Rifiutato: Rifiuta
    InRevisione --> Pubblicato: Approva
    Rifiutato --> InModifica: Modifica e Reinvia
    Pubblicato --> [*]
`,
    pieChart: `pie
    title Fonti di Traffico Sito Web
    "Motori di Ricerca" : 42.7
    "Accesso Diretto" : 28.9
    "Social Media" : 18.5
    "Altri Canali" : 9.9
`,
    classDiagram: `classDiagram
    class Animale {
        +String nome
        +int età
        +emettiSuono() void
    }
    class Cane {
        +String razza
        +riporta() void
    }
    class Gatto {
        +String colore
        +arrampica() void
    }
    Animale <|-- Cane
    Animale <|-- Gatto
`
  }
};