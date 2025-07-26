export default {
  name: 'Esempi di Diagrammi',
  description: 'Esplora e utilizza vari esempi di diagrammi per soddisfare diverse esigenze di modellazione',
  title: 'Esempi Avanzati di Diagrammi di Flusso',

  categories: {
    title: 'Categorie',
    flowcharts: 'Diagrammi di flusso',
    uml: 'Diagrammi UML',
    network: 'Diagrammi di rete',
    architecture: 'Diagrammi architetturali',
    entity: 'Diagrammi entità-relazione',
    sequence: 'Diagrammi di sequenza',
    mindmaps: 'Mappe mentali',
    gantt: 'Diagrammi di Gantt',
    other: 'Altri diagrammi'
  },

  actions: {
    search: 'Cerca esempi',
    filter: 'Filtra per categoria',
    sortBy: 'Ordina per',
    useExample: 'Usa questo esempio',
    viewFull: 'Visualizza a dimensione intera',
    copyCode: 'Copia codice',
    addToFavorites: 'Aggiungi ai preferiti',
    removeFavorite: 'Rimuovi dai preferiti'
  },

  sortOptions: {
    popularity: 'Popolarità',
    newest: 'Più recenti',
    alphabetical: 'Ordine alfabetico',
    complexity: 'Complessità'
  },

  exampleDetail: {
    title: 'Dettagli esempio',
    description: 'Descrizione',
    syntax: 'Sintassi',
    codeView: 'Vista codice',
    diagramView: 'Vista diagramma',
    complexity: 'Complessità',
    tags: 'Tag',
    relatedExamples: 'Esempi correlati'
  },

  complexityLevels: {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzato'
  },

  messages: {
    copied: 'Codice copiato negli appunti',
    copyFailed: 'Copia fallita, copia manualmente',
    added: 'Aggiunto ai preferiti',
    removed: 'Rimosso dai preferiti',
    noResults: 'Nessun esempio corrisponde ai criteri di ricerca',
    loading: 'Caricamento esempi...'
  },

  filters: {
    all: 'Tutte le categorie',
    favorites: 'Solo preferiti',
    recently: 'Visualizzati di recente'
  },

  examples: {
    softwareDevelopment: 'Diagramma di flusso sviluppo software',
    projectManagement: 'Diagramma di Gantt gestione progetti',
    userRegistration: 'Flusso registrazione utente'
  },

  exampleCodes: {
    softwareDevelopment: `graph TD
    A[Analisi requisiti] --> B[Progettazione sistema]
    B --> C[Implementazione codice]
    C --> D[Test unitari]
    D --> E(Test superati?)
    E -- No --> C
    E -- Sì --> F[Integrazione sistema]
    F --> G[Test sistema]
    G --> H(Test superati?)
    H -- No --> F
    H -- Sì --> I[Deploy in produzione]
    I --> J[Manutenzione e aggiornamenti]
    
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style E fill:#e3f0f7,stroke:#333,stroke-width:2px
    style H fill:#e3f0f7,stroke:#333,stroke-width:2px
    style I fill:#d5f5e3,stroke:#333,stroke-width:2px
    style J fill:#d5f5e3,stroke:#333,stroke-width:2px`,
    
    projectManagement: `gantt
    title Piano di progetto sviluppo prodotto
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    
    section Pianificazione
    Ricerca di mercato      :a1, 2023-01-01, 15d
    Analisi requisiti       :a2, after a1, 10d
    Pianificazione prodotto :a3, after a2, 5d
    
    section Design
    Progettazione prototipo :b1, after a3, 15d
    Design UI               :b2, after b1, 10d
    Test utente             :b3, after b2, 5d
    
    section Sviluppo
    Architettura backend    :c1, after b1, 20d
    Sviluppo frontend       :c2, after b2, 15d
    Integrazione API        :c3, after c1, 10d
    
    section Test
    Test unitari            :d1, after c2, 8d
    Test integrazione       :d2, after c3, 7d
    Test prestazioni        :d3, after d2, 5d
    
    section Rilascio
    Revisione interna       :e1, after d3, 5d
    Preparazione deploy     :e2, after e1, 2d
    Rilascio ufficiale     :milestone, after e2, 0d`,
    
    userRegistration: `sequenceDiagram
    participant Utente
    participant Frontend
    participant Backend
    participant Database
    participant ServizioEmail
    
    Utente->>Frontend: Compila modulo registrazione
    Frontend->>Frontend: Validazione modulo
    Frontend->>Backend: Invia dati registrazione
    Backend->>Backend: Verifica dati utente
    Backend->>Database: Verifica esistenza utente
    Database-->>Backend: Risultato verifica
    
    alt Utente esistente
        Backend-->>Frontend: Errore utente esistente
        Frontend-->>Utente: Mostra messaggio errore
    else Utente non esistente
        Backend->>Database: Crea nuovo utente
        Backend->>ServizioEmail: Invia email verifica
        ServizioEmail-->>Utente: Email con link verifica
        Backend-->>Frontend: Conferma registrazione
        Frontend-->>Utente: Mostra successo registrazione
    end
    
    Utente->>ServizioEmail: Clicca link verifica
    ServizioEmail->>Backend: Richiesta verifica
    Backend->>Database: Aggiorna stato utente a verificato
    Backend-->>Utente: Reindirizza a pagina login`
  }
};