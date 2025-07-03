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
  taxTip5: 'Dichiara correttamente le detrazioni per evitare problemi',
  
  // Articolo
  article: {
    title: "Calcolatore Imposte sul Reddito: Strumento Completo per la Pianificazione Fiscale",
    features: {
      title: "Scopri il Calcolatore e i suoi Vantaggi",
      description: "Il <strong>Calcolatore Imposte sul Reddito</strong> è uno strumento avanzato per stimare con precisione le <strong>imposte sul reddito</strong> e calcolare lo stipendio netto. Utilizzando le ultime <strong>aliquote</strong> e regole di detrazione, fornisce una panoramica dettagliata degli obblighi fiscali.<br><br>Attualmente supporta il sistema cinese con <strong>aliquote progressive</strong> dal 3% al 45%, mostrando come viene calcolato il <strong>reddito imponibile</strong> e fornendo un dettaglio mensile delle imposte.",
      useCases: {
        title: "Applicazioni Pratiche",
        items: [
          "<strong>Trattative salariali</strong>: Stima il netto per valutare offerte di lavoro",
          "<strong>Pianificazione finanziaria</strong>: Inserisci le imposte nel budget annuale",
          "<strong>Ottimizzazione fiscale</strong>: Sperimenta diverse detrazioni per ridurre le tasse",
          "<strong>Gestione freelance</strong>: Calcola le imposte su redditi aggiuntivi",
          "<strong>Pianificazione pensionistica</strong>: Stima le tasse su pensioni e rendite",
          "<strong>Trasferimenti</strong>: Confronta l'impatto fiscale in diverse città"
        ]
      }
    },
    faq: {
      title: "Domande Frequenti",
      items: [
        {
          question: "Come si calcolano le imposte in Cina?",
          answer: "Il sistema cinese usa <strong>7 aliquote progressive</strong> (3%-45%). Si calcola: <strong>Reddito imponibile</strong> = Reddito - Previdenza - Detrazioni - 5.000 yuan. L'imposta = (Reddito imponibile × Aliquota) - Detrazione rapida."
        },
        {
          question: "Quali detrazioni sono disponibili?",
          answer: "Le principali <strong>detrazioni speciali</strong> includono: 1) <strong>Istruzione figli</strong> (1.000 yuan/figlio/mese), 2) <strong>Formazione</strong> (400 yuan/mese o 3.600/anno), 3) <strong>Mutuo casa</strong> (1.000 yuan), 4) <strong>Affitto</strong> (1.500/1.100/800 yuan), 5) <strong>Anziani</strong> (2.000 yuan), 6) <strong>Spese mediche</strong> (oltre 15.000 yuan/anno)."
        },
        {
          question: "Perché le imposte mensili variano?",
          answer: "Le <strong>ritenute mensili</strong> cambiano per il metodo del <strong>calcolo cumulativo</strong> cinese. All'inizio anno potresti essere in uno scaglione basso, ma con l'aumento del reddito cumulativo potresti passare a scaglioni superiori, aumentando le ritenute."
        },
        {
          question: "Come ottimizzare le tasse?",
          answer: "Per ridurre legalmente le <strong>imposte</strong>: 1) Usa tutte le <strong>detrazioni</strong> disponibili, 2) Massimizza i contributi previdenziali deducibili, 3) Partecipa a piani pensionistici aziendali, 4) Ottimizza i tempi dei bonus, 5) Conserva tutta la documentazione."
        },
        {
          question: "Quanto è accurato il calcolatore?",
          answer: "Il <strong>Calcolatore</strong> è molto preciso basandosi sulle normative fiscali cinesi aggiornate al 2019. Tuttavia, per situazioni complesse (redditi multipli, estero, stock option) si consiglia un professionista."
        }
      ]
    },
    guide: {
      title: "Guida all'Uso del Calcolatore",
      steps: [
        "<strong>Seleziona sistema</strong>: Attualmente solo Cina",
        "<strong>Inserisci reddito</strong>: Mensile o annuale (conversione automatica)",
        "<strong>Configura previdenza</strong>: Importo fisso o percentuale",
        "<strong>Scegli città</strong>: Influisce sulla detrazione affitto",
        "<strong>Inserisci detrazioni</strong>: Figli, formazione, mutuo, affitto, anziani, salute",
        "<strong>Calcola</strong>: Clicca il pulsante per elaborare",
        "<strong>Analizza</strong>: Controlla imposta dovuta, netto e aliquota effettiva"
      ]
    },
    conclusion: "Il Calcolatore Imposte offre una soluzione precisa e intuitiva per gestire gli obblighi fiscali. Fornendo chiarezza su imposte, netto e detrazioni, aiuta a prendere decisioni finanziarie informate. Ricorda di aggiornare i calcoli al variare di reddito e detrazioni, e per situazioni complesse consulta sempre un professionista."
  }
}