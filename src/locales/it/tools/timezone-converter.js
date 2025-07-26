export default {
  name: 'Convertitore di fusi orari',
  description: 'Strumento per confrontare e convertire gli orari globali, utile per visualizzare l\'ora corrente in diversi paesi e regioni',

  // Etichette delle funzioni principali
  currentTime: 'Ora corrente',

  addTimezone: 'Aggiungi fuso orario',
  removeTimezone: 'Rimuovi fuso orario',
  convertTime: 'Converti ora',
  compareTimezones: 'Confronta fusi orari',

  // Impostazioni e opzioni
  settings: {
    date: 'Data',
    time: 'Ora',
    format: 'Formato',
    select24Hour: 'Formato 24 ore',
    select12Hour: 'Formato 12 ore',
    showSeconds: 'Mostra secondi',
    hideSeconds: 'Nascondi secondi',
    showDate: 'Mostra data',
    hideDate: 'Nascondi data',
  },

  // Fusi orari
  timezone: {
    title: 'Fuso orario',
    search: 'Cerca fuso orario o città...',
    yourLocal: 'Il tuo fuso orario locale',
    popular: 'Fusi orari comuni',
    allTimezones: 'Tutti i fusi orari',
    utc: 'UTC (Tempo Coordinato Universale)',
    gmt: 'GMT (Tempo Medio di Greenwich)',
    est: 'Ora standard orientale (USA)',
    cst: 'Ora standard cinese',
    jst: 'Ora standard giapponese',
    ist: 'Ora standard indiana',
    cet: 'Ora standard dell\'Europa centrale',
    bst: 'Ora legale britannica',
    aest: 'Ora standard orientale australiana',
    nzst: 'Ora standard della Nuova Zelanda',
    custom: 'Fuso orario personalizzato'
  },

  // Regioni e gruppi continentali
  regions: {
    africa: 'Africa',
    america: 'America',
    asia: 'Asia',
    atlantic: 'Oceano Atlantico',
    australia: 'Australia',
    europe: 'Europa',
    indian: 'Oceano Indiano',
    pacific: 'Oceano Pacifico'
  },

  // Conversione
  conversion: {
    from: 'Da',
    to: 'A',
    convert: 'Converti',
    result: 'Risultato conversione',
    timeIn: 'Ora in'
  },

  // Elementi dell'interfaccia
  ui: {
    now: 'Adesso',
    refresh: 'Aggiorna',
    copy: 'Copia',
    copied: 'Copiato',
    share: 'Condividi',
    reset: 'Reimposta',
    empty: 'Nessun risultato',
    offset: 'Scostamento',
    add: 'Aggiungi'
  },

  // Messaggi
  messages: {
    invalid: 'Ora non valida',
    copied: 'Copiato negli appunti',
    removed: 'Fuso orario rimosso',
    added: 'Fuso orario aggiunto',
    maxTimezones: 'Puoi aggiungere al massimo 10 fusi orari',
    selectTimezone: 'Seleziona un fuso orario'
  },

  // Presentazione dello strumento
  aboutTitle: 'Informazioni sul Convertitore di fusi orari',

  aboutDescription: 'Il Convertitore di fusi orari è uno strumento pratico che ti aiuta a visualizzare e confrontare facilmente l\'ora in diverse parti del mondo, utile per comunicazioni internazionali, pianificazione di viaggi e organizzazione di riunioni globali.',
  featuresTitle: 'Funzionalità principali',
  feature1: 'Visualizza in tempo reale l\'ora corrente nelle principali città e fusi orari',
  feature2: 'Confronta rapidamente le differenze orarie tra più fusi',
  feature3: 'Converti l\'ora da un fuso orario a un altro',
  feature4: 'Supporta i formati orari a 12 e 24 ore',
  feature5: 'Visualizza chiaramente le sovrapposizioni degli orari lavorativi',
  feature6: 'Cerca città o paesi per trovare il fuso orario corrispondente',
  useCasesTitle: 'Scenari d\'uso',
  useCase1: 'Organizzare riunioni o conference call internazionali',
  useCase2: 'Pianificare viaggi internazionali e orari dei voli',
  useCase3: 'Mantenere i contatti con amici o familiari all\'estero',
  useCase4: 'Monitorare l\'ora locale di importanti eventi internazionali',
  useCase5: 'Organizzare gli orari per team di lavoro distribuiti globalmente',
  howToUseTitle: 'Come usare',
  howToUse1: 'Aggiungi più fusi orari per vedere l\'ora corrente in diverse regioni',
  howToUse2: 'Usa la funzione di conversione per trasformare un\'ora da un fuso a un altro',
  howToUse3: 'Personalizza il formato di data e ora in base alle tue preferenze',
  howToUse4: 'Copia i risultati o genera un link da condividere con altri'
};
