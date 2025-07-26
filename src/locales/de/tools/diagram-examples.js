export default {
  name: 'Diagrammbeispiele',
  description: 'Durchsuchen und verwenden Sie verschiedene Diagrammbeispiele für unterschiedliche Modellierungsanforderungen',
  title: 'Erweiterte Flussdiagramm-Beispiele',

  categories: {
    title: 'Kategorien',
    flowcharts: 'Flussdiagramme',
    uml: 'UML-Diagramme',
    network: 'Netzwerkdiagramme',
    architecture: 'Architekturdiagramme',
    entity: 'Entity-Relationship-Diagramme',
    sequence: 'Sequenzdiagramme',
    mindmaps: 'Mindmaps',
    gantt: 'Gantt-Diagramme',
    other: 'Andere Diagramme'
  },

  actions: {
    search: 'Beispiele suchen',
    filter: 'Nach Kategorie filtern',
    sortBy: 'Sortieren nach',
    useExample: 'Dieses Beispiel verwenden',
    viewFull: 'Vollständige Größe anzeigen',
    copyCode: 'Code kopieren',
    addToFavorites: 'Zu Favoriten hinzufügen',
    removeFavorite: 'Aus Favoriten entfernen'
  },

  sortOptions: {
    popularity: 'Beliebtheit',
    newest: 'Neueste zuerst',
    alphabetical: 'Alphabetisch',
    complexity: 'Komplexität'
  },

  exampleDetail: {
    title: 'Beispiel-Details',
    description: 'Beschreibung',
    syntax: 'Syntax',
    codeView: 'Code-Ansicht',
    diagramView: 'Diagramm-Ansicht',
    complexity: 'Komplexität',
    tags: 'Tags',
    relatedExamples: 'Verwandte Beispiele'
  },

  complexityLevels: {
    beginner: 'Anfänger',
    intermediate: 'Mittelstufe',
    advanced: 'Fortgeschritten'
  },

  messages: {
    copied: 'Code in die Zwischenablage kopiert',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
    added: 'Zu Favoriten hinzugefügt',
    removed: 'Aus Favoriten entfernt',
    noResults: 'Keine Beispiele entsprechen Ihren Suchkriterien',
    loading: 'Beispiele werden geladen...'
  },

  filters: {
    all: 'Alle Kategorien',
    favorites: 'Nur Favoriten',
    recently: 'Kürzlich angesehen'
  },

  examples: {
    softwareDevelopment: 'Softwareentwicklungs-Flussdiagramm',
    projectManagement: 'Projektmanagement-Gantt-Diagramm',
    userRegistration: 'Benutzerregistrierungsprozess'
  },

  exampleCodes: {
    softwareDevelopment: `graph TD
    A[Anforderungsanalyse] --> B[Systemdesign]
    B --> C[Implementierung]
    C --> D[Unittests]
    D --> E(Tests bestanden?)
    E -- Nein --> C
    E -- Ja --> F[Systemintegration]
    F --> G[Systemtests]
    G --> H(Tests bestanden?)
    H -- Nein --> F
    H -- Ja --> I[Deployment]
    I --> J[Wartung und Updates]
    
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style E fill:#e3f0f7,stroke:#333,stroke-width:2px
    style H fill:#e3f0f7,stroke:#333,stroke-width:2px
    style I fill:#d5f5e3,stroke:#333,stroke-width:2px
    style J fill:#d5f5e3,stroke:#333,stroke-width:2px`,
    
    projectManagement: `gantt
    title Produktentwicklungsprojektplan
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    
    section Planung
    Marktforschung       :a1, 2023-01-01, 15d
    Anforderungsanalyse  :a2, after a1, 10d
    Produktplanung       :a3, after a2, 5d
    
    section Design
    Prototypenentwicklung :b1, after a3, 15d
    UI-Design            :b2, after b1, 10d
    Nutzertests          :b3, after b2, 5d
    
    section Entwicklung
    Backend-Architektur  :c1, after b1, 20d
    Frontend-Entwicklung :c2, after b2, 15d
    API-Integration      :c3, after c1, 10d
    
    section Tests
    Unittests            :d1, after c2, 8d
    Integrationstests    :d2, after c3, 7d
    Leistungstests       :d3, after d2, 5d
    
    section Veröffentlichung
    Interne Prüfung      :e1, after d3, 5d
    Deployment-Vorbereitung :e2, after e1, 2d
    Live-Schaltung       :milestone, after e2, 0d`,
    
    userRegistration: `sequenceDiagram
    participant Nutzer
    participant Frontend
    participant Backend
    participant Datenbank
    participant Email-Service
    
    Nutzer->>Frontend: Registrierungsformular ausfüllen
    Frontend->>Frontend: Formularvalidierung
    Frontend->>Backend: Registrierungsdaten senden
    Backend->>Backend: Nutzerdaten validieren
    Backend->>Datenbank: Prüfen ob Nutzer existiert
    Datenbank-->>Backend: Prüfergebnis zurückgeben
    
    alt Nutzer existiert bereits
        Backend-->>Frontend: Fehler zurückgeben
        Frontend-->>Nutzer: Fehlermeldung anzeigen
    else Nutzer existiert nicht
        Backend->>Datenbank: Neuen Nutzer anlegen
        Backend->>Email-Service: Bestätigungsemail senden
        Email-Service-->>Nutzer: Email mit Bestätigungslink senden
        Backend-->>Frontend: Erfolgsmeldung zurückgeben
        Frontend-->>Nutzer: Erfolgsmeldung anzeigen
    end
    
    Nutzer->>Email-Service: Bestätigungslink klicken
    Email-Service->>Backend: Bestätigungsanfrage
    Backend->>Datenbank: Nutzerstatus aktualisieren
    Backend-->>Nutzer: Zur Login-Seite weiterleiten`
  }
};