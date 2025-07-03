export default {
  name: 'Calcolatore BMI',
  description: 'Calcola l\'Indice di Massa Corporea (BMI) e valuta il tuo stato ponderale',
  
  // Testi principali dell\'interfaccia
  height: 'Altezza',
  weight: 'Peso',
  calculate: 'Calcola BMI',
  reset: 'Ripristina',
  yourBmi: 'Il tuo BMI',
  bmiCategory: 'Categoria BMI',
  
  // Selezione unità di misura
  unitSystem: 'Sistema di misura',
  metric: 'Metrico (cm/kg)',
  imperial: 'Imperiale (ft/lbs)',
  cm: 'cm',
  ft: 'ft',
  in: 'in',
  kg: 'kg',
  lbs: 'lbs',
  
  // Categorie BMI
  underweight: 'Sottopeso',
  normalWeight: 'Normopeso',
  overweight: 'Sovrappeso',
  obesity: 'Obesità',
  severeObesity: 'Obesità grave',
  
  // Descrizioni categorie
  underweightDesc: 'BMI inferiore a 18.5',
  normalWeightDesc: 'BMI tra 18.5 e 24.9',
  overweightDesc: 'BMI tra 25 e 29.9',
  obesityDesc: 'BMI tra 30 e 34.9',
  severeObesityDesc: 'BMI di 35 o superiore',
  
  // Descrizione risultati
  resultPrefix: 'Il tuo BMI è',
  resultSuffix: ', indicando che sei nella categoria',
  
  // Sezione informazioni sullo strumento
  aboutTitle: 'Informazioni sul calcolatore BMI',
  aboutDescription: 'L\'Indice di Massa Corporea (BMI) è un indicatore che valuta se il rapporto peso-altezza di una persona è salutare. Questo strumento calcola il BMI in base alla tua altezza e peso e fornisce una valutazione della salute corrispondente.',
  
  whatIsTitle: 'Cos\'è il BMI?',
  whatIsDescription: 'Il BMI (Body Mass Index) o Indice di Massa Corporea si calcola dividendo il peso (kg) per il quadrato dell\'altezza (m). Il valore BMI viene utilizzato per valutare se un individuo rientra in un intervallo di peso salutare ed è attualmente lo standard internazionale più utilizzato per misurare la magrezza o corpulenza di una persona.',
  
  howToCalculateTitle: 'Come calcolare il BMI',
  metricFormula: 'Formula metrica: BMI = peso(kg) / altezza(m)²',
  imperialFormula: 'Formula imperiale: BMI = peso(lbs) × 703 / altezza(in)²',
  
  interpretationTitle: 'Interpretazione del BMI',
  interpretationDesc: 'Le categorie di stato ponderale corrispondenti ai valori BMI sono:',
  
  limitationsTitle: 'Limitazioni del BMI',
  limitation1: 'Il BMI non considera le differenze nella percentuale di grasso corporeo, massa muscolare e massa ossea',
  limitation2: 'Non è adatto per valutare lo stato ponderale di atleti, donne in gravidanza e bambini',
  limitation3: 'Non riflette la distribuzione del grasso nel corpo',
  limitation4: 'Non considera differenze razziali, di età e di sesso',
  
  tipsTitle: 'Consigli per un peso salutare',
  tip1: 'Mantieni una dieta equilibrata con adeguate proteine, frutta/verdura e cereali integrali',
  tip2: 'Fai almeno 150 minuti di attività aerobica moderata a settimana',
  tip3: 'Evita di stare seduto a lungo, aumenta l\'attività fisica quotidiana',
  tip4: 'Mantieni un adeguato riposo e idratazione',
  tip5: 'Se il tuo BMI è anormale, consulta un medico o nutrizionista per consigli professionali',
  
  // Aggiunta questa riga
  emptyStateMessage: 'Inserisci la tua altezza e peso, poi clicca il pulsante "Calcola BMI"'
};