export default {
  name: 'Pianificatore di Budget di Viaggio',
  description: 'Pianifica e calcola il tuo budget di viaggio, gestisci facilmente le spese del viaggio',
  
  // Elementi principali dell'interfaccia
  planYourTrip: 'Pianifica il tuo viaggio',
  destination: 'Destinazione',
  startDate: 'Data di inizio',
  endDate: 'Data di fine',
  travelers: 'Numero di viaggiatori',
  currency: 'Valuta di visualizzazione',
  tripDuration: 'Durata del viaggio (giorni)',
  totalBudget: 'Budget totale',
  perPersonBudget: 'Budget per persona',
  perDayBudget: 'Budget giornaliero',
  
  // Pulsanti e azioni
  calculate: 'Calcola budget',
  reset: 'Reimposta',
  addExpense: 'Aggiungi voce di spesa',
  removeExpense: 'Rimuovi',
  saveAsPDF: 'Salva come PDF',
  
  // Titoli delle categorie
  categories: {
    transport: 'Trasporti',
    accommodation: 'Alloggio',
    food: 'Cibo e bevande',
    activities: 'Attività e attrazioni',
    shopping: 'Shopping',
    misc: 'Altre spese',
    emergency: 'Fondo di emergenza'
  },
  
  // Opzioni di trasporto
  transport: {
    title: 'Spese di trasporto',
    flight: 'Volo',
    train: 'Treno',
    bus: 'Autobus',
    car: 'Noleggio auto/Carburante',
    taxi: 'Taxi/Trasporto con conducente',
    publicTransport: 'Trasporto pubblico',
    other: 'Altri trasporti'
  },
  
  // Opzioni di alloggio
  accommodation: {
    title: 'Spese di alloggio',
    hotel: 'Hotel',
    hostel: 'Ostello',
    apartment: 'Appartamento/Affitto',
    camping: 'Campeggio',
    other: 'Altri alloggi'
  },
  
  // Opzioni di cibo
  food: {
    title: 'Spese alimentari',
    restaurants: 'Ristoranti',
    streetFood: 'Cibo di strada',
    groceries: 'Spesa alimentare',
    drinks: 'Bevande/Alcolici',
    other: 'Altre spese alimentari'
  },
  
  // Opzioni di attività
  activities: {
    title: 'Attività e attrazioni',
    attractions: 'Biglietti per attrazioni',
    tours: 'Tour/Attività guidate',
    entertainment: 'Intrattenimento',
    other: 'Altre attività'
  },
  
  // Altre spese
  misc: {
    title: 'Altre spese',
    insurance: 'Assicurazione di viaggio',
    visa: 'Spese per visto',
    souvenirs: 'Souvenir',
    internet: 'Costi internet',
    tips: 'Mance',
    other: 'Altre spese varie'
  },
  
  // Titoli della tabella
  table: {
    category: 'Categoria',
    description: 'Descrizione',
    amount: 'Importo',
    actions: 'Azioni'
  },
  
  // Statistiche e analisi
  analysis: {
    title: 'Analisi del budget',
    summary: 'Riepilogo del budget',
    breakdown: 'Dettaglio spese',
    distribution: 'Distribuzione del budget',
    dailyAverage: 'Media giornaliera',
    suggestions: 'Suggerimenti per il budget'
  },
  
  // Valute
  currencies: {
    CNY: 'Renminbi cinese (¥)',
    USD: 'Dollaro USA ($)',
    EUR: 'Euro (€)',
    JPY: 'Yen giapponese (¥)',
    GBP: 'Sterlina britannica (£)',
    KRW: 'Won coreano (₩₩)',
    AUD: 'Dollaro australiano ($)',
    CAD: 'Dollaro canadese ($)',
    THB: 'Baht thailandese (฿฿)',
    SGD: 'Dollaro di Singapore ($)'
  },
  
  // Destinazioni comuni
  destinations: {
    domestic: 'Destinazioni nazionali',
    international: 'Destinazioni internazionali',
    popularCities: 'Città popolari',
    beijing: 'Pechino',
    shanghai: 'Shanghai',
    guangzhou: 'Guangzhou',
    shenzhen: 'Shenzhen',
    hangzhou: 'Hangzhou',
    chengdu: 'Chengdu',
    xian: "Xi'an",
    sanya: 'Sanya',
    tokyo: 'Tokyo',
    osaka: 'Osaka',
    seoul: 'Seoul',
    bangkok: 'Bangkok',
    singapore: 'Singapore',
    paris: 'Parigi',
    london: 'Londra',
    newyork: 'New York',
    sydney: 'Sydney',
    custom: 'Destinazione personalizzata'
  },
  
  // Suggerimenti e consigli
  tips: {
    general: 'Consigli generali',
    saveMoney: 'Consigli per risparmiare',
    localCurrency: 'Suggerimenti sulla valuta locale',
    emergencyFund: 'Si consiglia di riservare il 10-15% del budget totale come fondo di emergenza',
    transport: 'Prenotare i voli in anticipo può far risparmiare',
    accommodation: 'Considera alloggi con cucina per ridurre le spese alimentari',
    food: 'Provare il cibo locale è più economico dei ristoranti internazionali',
    planning: 'Pianificare un itinerario giornaliero dettagliato aiuta a controllare il budget',
    extraCosts: 'Non dimenticare piccole spese come mance, internet e carte di trasporto'
  },
  
  // Messaggi di avviso
  messages: {
    success: 'Budget calcolato con successo',
    error: 'Compila tutti i campi obbligatori',
    dateError: 'La data di fine deve essere successiva alla data di inizio',
    saved: 'Piano di budget salvato',
    deleted: 'Piano di budget eliminato',
    highBudget: 'Il tuo budget sembra superiore alla media per questa destinazione',
    lowBudget: 'Il tuo budget potrebbe essere troppo basso, assicurati di coprire tutte le spese necessarie'
  },
  
  // Informazioni introduttive nel piè di pagina
  about: {
    title: 'Informazioni sul Pianificatore di Budget di Viaggio',
    description: 'Il Pianificatore di Budget di Viaggio è uno strumento che ti aiuta a gestire le spese del viaggio, rendendo il tuo viaggio piacevole ed economico. Pianificando in dettaglio tutte le spese, eviterai stress finanziari durante il viaggio e potrai goderti appieno l\'esperienza.',
    
    featuresTitle: 'Funzionalità principali',
    feature1: 'Crea un budget ragionevole in base a destinazione, durata e numero di viaggiatori',
    feature2: 'Dettaglia le spese di viaggio in categorie come trasporti, alloggio, cibo e attività',
    feature3: 'Fornisce analisi e visualizzazioni del budget',
    feature4: 'Supporta la visualizzazione e conversione in diverse valute',
    feature5: 'Offre consigli pratici per risparmiare durante il viaggio',
    feature6: 'Permette di esportare e salvare i piani di budget',
    
    benefitsTitle: 'Vantaggi',
    benefit1: 'Evita di superare il budget durante il viaggio',
    benefit2: 'Distribuisci razionalmente i fondi tra le diverse fasi del viaggio',
    benefit3: 'Riduci lo stress finanziario del viaggio',
    benefit4: 'Aumenta l\'efficienza nella pianificazione del viaggio',
    benefit5: 'Si adatta a diversi stili di viaggio e esigenze di budget',
    
    tipsTitle: 'Consigli per la pianificazione del budget',
    tip1: 'Adeguare il budget in base al costo della vita della destinazione',
    tip2: 'Riservare il 10-15% del budget per imprevisti',
    tip3: 'Viaggiare in bassa stagione può far risparmiare su alloggio e trasporti',
    tip4: 'Prestare attenzione alle commissioni delle carte di credito all\'estero',
    tip5: 'Considerare l\'acquisto di un\'assicurazione di viaggio per emergenze'
  }
};