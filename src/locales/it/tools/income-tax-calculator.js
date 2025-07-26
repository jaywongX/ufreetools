export default {
  name: 'Calcolatore Imposte sul Reddito',
  description: 'Calcola le imposte sul reddito da lavoro dipendente e lo stipendio netto',

  // Testi principali
  taxSystem: 'Sistema fiscale',

  china: 'Cina',
  usa: 'USA',
  uk: 'Regno Unito',
  monthlyIncome: 'Reddito mensile',
  annualIncome: 'Reddito annuale',
  socialSecurity: 'Previdenza sociale',
  socialSecurityAmount: 'Importo previdenza',
  socialSecurityPercent: 'Percentuale previdenza',
  socialSecurityBase: 'Base previdenziale',
  deductions: 'Detrazioni speciali',
  childrenEducation: 'Istruzione figli',
  continuingEducation: 'Formazione continua',
  housingLoanInterest: 'Interessi mutuo casa',
  housingRent: 'Affitto abitazione',
  elderlySupport: 'Mantenimento anziani',
  medicalTreatment: 'Spese mediche importanti',
  otherDeductions: 'Altre detrazioni',
  calculate: 'Calcola',
  reset: 'Azzera',

  // Area risultati
  results: 'Risultati calcolo',

  taxableIncome: 'Reddito imponibile',
  taxRate: 'Aliquota applicabile',
  quickDeduction: 'Detrazione rapida',
  taxPayable: 'Imposta dovuta',
  afterTaxIncome: 'Reddito netto',
  effectiveTaxRate: 'Aliquota effettiva',
  monthlyBreakdown: 'Dettaglio mensile',

  // Area grafici
  taxAnalysis: 'Analisi fiscale',

  incomeDistribution: 'Distribuzione reddito',
  income: 'Reddito',
  tax: 'Tasse',
  takeHome: 'Netto',

  // Tabella aliquote
  taxBrackets: 'Tabella aliquote',

  bracketRange: 'Intervallo',
  rate: 'Aliquota',

  // Dettaglio mensile
  month: 'Mese',

  cumulativeIncome: 'Reddito cumulativo',
  cumulativeDeduction: 'Detrazioni cumulative',
  cumulativeTaxable: 'Reddito imponibile cumulativo',
  cumulativeTax: 'Imposta cumulativa',
  previousTax: 'Imposta versata mese precedente',
  currentMonthTax: 'Imposta mese corrente',

  // Selezione città
  city: 'Città',

  firstTier: 'Città di prima fascia',
  secondTier: 'Città di seconda fascia',
  otherCity: 'Altre città',

  // Introduzione strumento
  aboutTitle: 'Informazioni sull\'imposta sul reddito',

  aboutDescription: 'L\'imposta sul reddito è una tassa applicata sui redditi individuali ed è una delle principali imposte nella maggior parte dei paesi. In Cina viene applicata un\'aliquota progressiva che va dal 3% al 45%, con aliquote più elevate per redditi più alti.',
  howToUseTitle: 'Come usare questo calcolatore',
  howToUseStep1: '1. Seleziona il sistema fiscale (attualmente supporta quello cinese)',
  howToUseStep2: '2. Inserisci il reddito mensile o annuale (verranno convertiti automaticamente)',
  howToUseStep3: '3. Inserisci l\'importo dei contributi previdenziali o seleziona il calcolo percentuale',
  howToUseStep4: '4. Compila le detrazioni speciali applicabili',
  howToUseStep5: '5. Clicca "Calcola" per ottenere i risultati',
  chinaTaxRulesTitle: 'Regole fiscali cinesi',
  chinaTaxRule1: 'No tax area: 5.000 yuan/mese',
  chinaTaxRule2: 'Reddito imponibile = Reddito - Previdenza - Detrazioni speciali - No tax area',
  chinaTaxRule3: 'Imposta = Reddito imponibile × Aliquota - Detrazione rapida',
  deductionExplainTitle: 'Spiegazione detrazioni speciali',
  childrenEducationExplain: 'Istruzione figli: 1.000 yuan/mese per figlio',
  continuingEducationExplain: 'Formazione continua: 400 yuan/mese per studi; 3.600 yuan/anno per qualifiche',
  housingLoanExplain: 'Interessi mutuo: 1.000 yuan/mese',
  housingRentExplain: 'Affitto: 1.500 yuan/mese (città prime fascia), 1.100 yuan (seconda fascia), 800 yuan (altre)',
  elderlyExplain: 'Mantenimento anziani: 2.000 yuan/mese per figlio unico, altrimenti ripartizione',
  medicalExplain: 'Spese mediche: parte eccedente 15.000 yuan/anno, fino a 60.000 yuan',
  taxTipsTitle: 'Consigli fiscali',
  taxTip1: 'Sfrutta al massimo le detrazioni speciali per ridurre le tasse',
  taxTip2: 'I bonus annuali possono essere tassati separatamente',
  taxTip3: 'Redditi multipli vanno sommati per il calcolo',
  taxTip4: 'Piani pensionistici e assicurazioni sanitarie possono essere deducibili',
  taxTip5: 'Dichiara correttamente le detrazioni per evitare problemi'
};