export default {
  name: 'Lista delle cose da fare',
  description: 'Crea, gestisci e organizza i tuoi compiti e attività',
  
  // Testo dell'interfaccia principale
  newTask: 'Nuovo compito',
  addTask: 'Aggiungi compito',
  taskTitle: 'Titolo del compito',
  description: 'Descrizione',
  dueDate: 'Scadenza',
  priority: 'Priorità',
  category: 'Categoria',
  status: 'Stato',
  actions: 'Azioni',
  
  // Priorità
  priorities: {
    high: 'Alta',
    medium: 'Media',
    low: 'Bassa'
  },
  
  // Categorie
  categories: {
    work: 'Lavoro',
    personal: 'Personale',
    shopping: 'Shopping',
    health: 'Salute',
    finance: 'Finanze',
    other: 'Altro'
  },
  
  // Stati
  statuses: {
    all: 'Tutti',
    pending: 'In sospeso',
    completed: 'Completato'
  },
  
  // Testo dei pulsanti
  edit: 'Modifica',
  delete: 'Elimina',
  save: 'Salva',
  cancel: 'Annulla',
  clear: 'Cancella completati',
  clearAll: 'Cancella tutto',
  
  // Filtri e ordinamento
  filter: 'Filtra',
  filterBy: 'Filtra per',
  sortBy: 'Ordina per',
  search: 'Cerca compiti...',
  
  // Opzioni di ordinamento
  sortOptions: {
    dateCreatedAsc: 'Data di creazione (crescente)',
    dateCreatedDesc: 'Data di creazione (decrescente)',
    dueDateAsc: 'Data di scadenza (crescente)',
    dueDateDesc: 'Data di scadenza (decrescente)',
    priorityAsc: 'Priorità (crescente)',
    priorityDesc: 'Priorità (decrescente)',
    titleAsc: 'Titolo (A-Z)',
    titleDesc: 'Titolo (Z-A)'
  },
  
  // Statistiche
  statistics: 'Statistiche',
  totalTasks: 'Totale compiti',
  completedTasks: 'Compiti completati',
  pendingTasks: 'Compiti in sospeso',
  completionRate: 'Tasso di completamento',
  tasks: 'Compiti',
  
  // Messaggi di conferma e suggerimenti
  taskAdded: 'Compito aggiunto',
  taskUpdated: 'Compito aggiornato',
  taskDeleted: 'Compito eliminato',
  confirmDelete: 'Sei sicuro di voler eliminare questo compito?',
  confirmDeleteAll: 'Sei sicuro di voler eliminare tutti i compiti completati?',
  confirmClearAll: 'Sei sicuro di voler cancellare tutti i compiti?',
  noTasks: 'Nessun compito',
  noFilteredTasks: 'Nessun compito corrispondente ai filtri',
  titleRequired: 'Il titolo del compito è obbligatorio',
  
  // Presentazione dello strumento
  aboutTitle: 'Informazioni sulla Lista delle cose da fare',
  aboutDescription: 'La Lista delle cose da fare è uno strumento semplice ed efficiente per la gestione dei compiti che ti aiuta a organizzare le attività quotidiane sia lavorative che personali. Aggiungendo, modificando e contrassegnando i compiti, puoi monitorare chiaramente i tuoi progressi e aumentare la produttività.',
  
  featuresTitle: 'Funzionalità principali',
  feature1: 'Aggiungi, modifica ed elimina compiti',
  feature2: 'Imposta priorità e data di scadenza',
  feature3: 'Organizza i compiti per categoria',
  feature4: 'Contrassegna i compiti come completati',
  feature5: 'Filtra e ordina i compiti secondo diversi criteri',
  feature6: 'Memorizzazione locale, i dati non vanno persi',
  
  howToUseTitle: 'Come usare',
  howToUseStep1: '1. Clicca sul pulsante "Nuovo compito" per aggiungere una nuova attività',
  howToUseStep2: '2. Compila titolo, descrizione, data di scadenza e altre informazioni',
  howToUseStep3: '3. Organizza la tua lista con i filtri e le opzioni di ordinamento',
  howToUseStep4: '4. Seleziona la casella di controllo per contrassegnare un compito come completato',
  howToUseStep5: '5. Usa le funzioni di modifica ed eliminazione per gestire i compiti esistenti',
  
  tipsTitle: 'Consigli utili',
  tip1: 'Imposta priorità alta per i compiti importanti da svolgere per primi',
  tip2: 'Usa le categorie per organizzare i compiti in aree diverse',
  tip3: 'Pulisci regolarmente i compiti completati per mantenere la lista ordinata',
  tip4: 'Sfrutta al massimo i filtri per concentrarti sui compiti più urgenti',
  tip5: 'Imposta date di scadenza appropriate per gestire meglio il tuo tempo'
};
