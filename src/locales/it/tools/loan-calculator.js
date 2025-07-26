export default {
  name: 'Calcolatore di Prestiti',
  description: 'Calcola rate mensili, interessi totali e piano di ammortamento per mutui, prestiti auto e finanziamenti personali',

  // Testi interfaccia principale
  loanType: 'Tipo di prestito',

  housingLoan: 'Mutuo',
  carLoan: 'Prestito auto',
  personalLoan: 'Prestito personale',
  loanAmount: 'Importo del prestito',
  loanTerm: 'Durata del prestito',
  interestRate: 'Tasso annuo',
  paymentMethod: 'Metodo di rimborso',
  equalPrincipalAndInterest: 'Ammortamento alla francese',
  equalPrincipal: 'Ammortamento all\'italiana',
  calculate: 'Calcola',
  reset: 'Azzera',
  tip: 'Calcola prima il piano di rimborso',
  years: 'Anni',
  months: 'Mesi',
  amount: 'Importo',
  currency: 'Valuta',
  CNY: 'Renminbi (¥)',
  USD: 'Dollaro ($)',
  EUR: 'Euro (€)',
  JPY: 'Yen (¥)',
  GBP: 'Sterlina (£)',

  // Area risultati
  results: 'Risultati',

  monthlyPayment: 'Rata mensile',
  firstMonthPayment: 'Prima rata',
  lastMonthPayment: 'Ultima rata',
  totalInterest: 'Interessi totali',
  totalPayment: 'Totale da rimborsare',
  interestRatio: 'Percentuale interessi',

  // Piano di ammortamento
  paymentSchedule: 'Piano di ammortamento',

  downloadExcel: 'Esporta in Excel',
  paymentNo: 'Numero rata',
  paymentDate: 'Data rata',
  principal: 'Capitale',
  interest: 'Interessi',
  payment: 'Rata',
  remainingPrincipal: 'Capitale residuo',

  // Grafici
  paymentChart: 'Grafico di analisi',

  principalAndInterest: 'Distribuzione capitale/interessi',
  monthlyPaymentTrend: 'Andamento rate mensili',

  // Sezione informazioni
  aboutTitle: 'Informazioni sul calcolatore',

  aboutDescription: 'Il calcolatore di prestiti è uno strumento che ti aiuta a calcolare i dettagli di vari tipi di finanziamento, utile per mutui, prestiti auto e personali, permettendoti di comprendere chiaramente i costi del prestito.',
  featuresTitle: 'Funzionalità principali',
  feature1: 'Supporta ammortamento alla francese e all\'italiana',
  feature2: 'Calcola rata mensile, interessi totali e importo totale',
  feature3: 'Genera un dettagliato piano di ammortamento',
  feature4: 'Visualizzazione grafica della distribuzione capitale/interessi',
  feature5: 'Supporto per diverse valute',
  usageTitle: 'Istruzioni per l\'uso',
  usageStep1: 'Seleziona il tipo di prestito (mutuo, auto o personale)',
  usageStep2: 'Inserisci importo, durata e tasso d\'interesse',
  usageStep3: 'Scegli il metodo di rimborso (francese o italiano)',
  usageStep4: 'Clicca "Calcola" per ottenere i dettagli',
  usageStep5: 'Consulta il piano di ammortamento e i grafici',
  explanationTitle: 'Spiegazione metodi di rimborso',
  explanationEqualPayment: 'Ammortamento alla francese: rate costanti ma con quota interessi decrescente e quota capitale crescente nel tempo.',
  explanationEqualPrincipal: 'Ammortamento all\'italiana: quota capitale costante con rate decrescenti e interessi calcolati sul residuo.',
  tipsTitle: 'Consigli utili',
  tip1: 'Allungare la durata riduce la rata ma aumenta gli interessi totali',
  tip2: 'L\'ammortamento all\'italiana costa meno in interessi ma ha rate iniziali più alte',
  tip3: 'Estinzioni anticipate riducono gli interessi, specialmente nei primi anni',
  tip4: 'Confronta diverse opzioni per trovare la soluzione più adatta alle tue finanze'
};