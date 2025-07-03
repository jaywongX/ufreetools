export default {
  name: 'Convertitore di Valuta',
  description: 'Conversione rapida e accurata tra diverse valute e consultazione dei tassi di cambio',
  
  // Testi dell'interfaccia principale
  amount: 'Importo',
  from: 'Da',
  to: 'A',
  convert: 'Converti',
  result: 'Risultato conversione',
  swap: 'Inverti valute',
  rate: 'Tasso attuale',
  lastUpdated: 'Ultimo aggiornamento',
  addCurrency: 'Aggiungi valuta',
  
  // Cronologia
  history: 'Cronologia',
  clearHistory: 'Cancella cronologia',
  noHistory: 'Nessuna cronologia disponibile',
  
  // Valute
  currencies: {
    USD: 'Dollaro USA',
    EUR: 'Euro',
    JPY: 'Yen giapponese',
    GBP: 'Sterlina britannica',
    AUD: 'Dollaro australiano',
    CAD: 'Dollaro canadese',
    CHF: 'Franco svizzero',
    CNY: 'Renminbi cinese',
    HKD: 'Dollaro di Hong Kong',
    NZD: 'Dollaro neozelandese',
    SEK: 'Corona svedese',
    KRW: 'Won sudcoreano',
    SGD: 'Dollaro singaporiano',
    NOK: 'Corona norvegese',
    MXN: 'Peso messicano',
    INR: 'Rupia indiana',
    RUB: 'Rublo russo',
    ZAR: 'Rand sudafricano',
    TRY: 'Lira turca',
    BRL: 'Real brasiliano',
    TWD: 'Nuovo dollaro taiwanese',
    DKK: 'Corona danese',
    PLN: 'Złoty polacco',
    THB: 'Baht thailandese',
    IDR: 'Rupia indonesiana',
    MYR: 'Ringgit malese',
    PHP: 'Peso filippino'
  },
  
  // Messaggi di errore
  errors: {
    invalidAmount: 'Inserisci un importo valido',
    apiError: 'Errore nel recupero dei dati sui tassi di cambio',
    samecurrencies: 'Seleziona valute diverse per la conversione'
  },
  
  // Suggerimenti e informazioni
  tips: {
    offline: 'Modalità offline: vengono mostrati i tassi di cambio memorizzati più recenti',
    refreshing: 'Aggiornamento dati sui tassi di cambio in corso...'
  },
  
  // Visualizza tassi storici
  historicalRates: 'Tassi storici',
  dateRange: 'Intervallo date',
  from7days: 'Ultimi 7 giorni',
  from30days: 'Ultimi 30 giorni',
  from90days: 'Ultimi 90 giorni',
  customRange: 'Intervallo personalizzato',
  startDate: 'Data inizio',
  endDate: 'Data fine',
  viewChart: 'Visualizza grafico',
  
  // Impostazioni
  settings: 'Impostazioni',
  decimalPlaces: 'Decimali',
  autoUpdate: 'Aggiornamento automatico tassi',
  defaultCurrency: 'Valuta predefinita',
  
  // Informazioni sullo strumento
  aboutTitle: 'Informazioni sul Convertitore di Valuta',
  aboutDescription: 'Il Convertitore di Valuta è un\'applicazione semplice ed efficiente per convertire rapidamente e accuratamente tra diverse valute. Che sia per pianificare un viaggio, commercio internazionale o ricerca di investimenti, questo strumento soddisfa tutte le tue esigenze.',
  
  featuresTitle: 'Funzionalità principali',
  feature1: 'Supporta la conversione tra oltre 30 valute principali',
  feature2: 'Ottiene i tassi di cambio più recenti dal mercato in tempo reale',
  feature3: 'Calcoli di conversione rapidi e intuitivi',
  feature4: 'Consulta i dati storici e visualizza i grafici',
  feature5: 'Salva la cronologia delle conversioni per un uso ripetuto',
  feature6: 'Personalizza le impostazioni di visualizzazione e la valuta predefinita',
  
  howToUseTitle: 'Come utilizzare',
  howToUseStep1: '1. Inserisci l\'importo che desideri convertire',
  howToUseStep2: '2. Seleziona la valuta di origine (da quale valuta convertire)',
  howToUseStep3: '3. Seleziona la valuta di destinazione (a quale valuta convertire)',
  howToUseStep4: '4. Clicca il pulsante "Converti" per ottenere il risultato',
  howToUseStep5: '5. Usa il pulsante "Inverti valute" per scambiare rapidamente le valute',
  
  tipsTitle: 'Suggerimenti utili',
  tip1: 'I tassi di cambio vengono aggiornati ogni ora per garantire risultati accurati',
  tip2: 'Aggiungi le valute più usate ai preferiti per un accesso rapido',
  tip3: 'Usa la funzione del grafico storico per analizzare l\'andamento dei tassi',
  tip4: 'I risultati delle conversioni vengono salvati automaticamente nella cronologia',
  tip5: 'In modalità offline, lo strumento utilizza i tassi di cambio memorizzati più recenti'
};