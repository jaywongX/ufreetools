export default {
  name: 'Einkommensteuerrechner',
  description: 'Berechnet die zu zahlende Einkommensteuer und das Nettogehalt',

  // Hauptoberflächentexte
  taxSystem: 'Steuersystem',

  china: 'China',
  usa: 'USA',
  uk: 'Großbritannien',
  monthlyIncome: 'Monatseinkommen',
  annualIncome: 'Jahreseinkommen',
  socialSecurity: 'Sozialversicherung',
  socialSecurityAmount: 'Sozialversicherungsbetrag',
  socialSecurityPercent: 'Sozialversicherungssatz',
  socialSecurityBase: 'Sozialversicherungsgrundlage',
  deductions: 'Sonderabzüge',
  childrenEducation: 'Kindererziehung',
  continuingEducation: 'Weiterbildung',
  housingLoanInterest: 'Wohnungsbaukreditzinsen',
  housingRent: 'Mietkosten',
  elderlySupport: 'Unterhalt für Eltern',
  medicalTreatment: 'Schwere Krankheiten',
  otherDeductions: 'Andere Abzüge',
  calculate: 'Berechnen',
  reset: 'Zurücksetzen',

  // Ergebnisbereich
  results: 'Berechnungsergebnisse',

  taxableIncome: 'Zu versteuerndes Einkommen',
  taxRate: 'Steuersatz',
  quickDeduction: 'Schnellabzug',
  taxPayable: 'Zu zahlende Steuer',
  afterTaxIncome: 'Nettogehalt',
  effectiveTaxRate: 'Effektiver Steuersatz',
  monthlyBreakdown: 'Monatliche Aufschlüsselung',

  // Diagrammbereich
  taxAnalysis: 'Steueranalyse',

  incomeDistribution: 'Einkommensverteilung',
  income: 'Einkommen',
  tax: 'Steuer',
  takeHome: 'Netto',

  // Steuertabelle
  taxBrackets: 'Steuertabelle',

  bracketRange: 'Einkommensspanne',
  rate: 'Satz',

  // Monatliche Details
  month: 'Monat',

  cumulativeIncome: 'Kumuliertes Einkommen',
  cumulativeDeduction: 'Kumulierte Abzüge',
  cumulativeTaxable: 'Kumuliertes zu versteuerndes Einkommen',
  cumulativeTax: 'Kumulierte Steuer',
  previousTax: 'Vorherige Monatssteuer',
  currentMonthTax: 'Aktuelle Monatssteuer',

  // Stadtauswahl
  city: 'Stadt',

  firstTier: 'Großstadt',
  secondTier: 'Mittelgroße Stadt',
  otherCity: 'Andere Stadt',

  // Tool-Beschreibung
  aboutTitle: 'Über die Einkommensteuer',

  aboutDescription: 'Die Einkommensteuer ist eine Steuer auf das Einkommen natürlicher Personen und in den meisten Ländern eine der Haupteinnahmequellen. In China wird ein progressiver Steuersatz von 3% bis 45% angewendet, wobei höhere Einkommen höheren Steuersätzen unterliegen.',
  howToUseTitle: 'So verwenden Sie diesen Rechner',
  howToUseStep1: '1. Wählen Sie das Steuersystem (derzeit chinesisches System unterstützt)',
  howToUseStep2: '2. Geben Sie Ihr Monats- oder Jahreseinkommen ein (automatische Umrechnung)',
  howToUseStep3: '3. Sozialversicherungsbetrag eingeben oder prozentuale Berechnung wählen',
  howToUseStep4: '4. Sonderabzüge eintragen',
  howToUseStep5: '5. Auf "Berechnen" klicken für Ergebnisse',
  chinaTaxRulesTitle: 'Chinesische Einkommensteuer-Berechnung',
  chinaTaxRule1: 'Grundfreibetrag: 5.000 Yuan/Monat',
  chinaTaxRule2: 'Zu versteuerndes Einkommen = Einkommen - Sozialversicherung - Sonderabzüge - Grundfreibetrag',
  chinaTaxRule3: 'Steuer = Zu versteuerndes Einkommen × Steuersatz - Schnellabzug',
  deductionExplainTitle: 'Erklärung der Sonderabzüge',
  childrenEducationExplain: 'Kindererziehung: 1.000 Yuan/Monat pro Kind',
  continuingEducationExplain: 'Weiterbildung: 400 Yuan/Monat für akademische Bildung oder 3.600 Yuan/Jahr für Berufsqualifikationen',
  housingLoanExplain: 'Wohnungsbaukreditzinsen: 1.000 Yuan/Monat',
  housingRentExplain: 'Mietkosten: 1.500 Yuan/Monat in Großstädten, 1.100 Yuan in mittelgroßen Städten, 800 Yuan in anderen Städten',
  elderlyExplain: 'Unterhalt für Eltern: 2.000 Yuan/Monat für Einzelkinder, Aufteilung für mehrere Kinder',
  medicalExplain: 'Schwere Krankheiten: Medizinische Kosten über 15.000 Yuan/Jahr, maximal 60.000 Yuan/Jahr abziehbar',
  taxTipsTitle: 'Steuertipps',
  taxTip1: 'Sonderabzüge können die Steuerlast effektiv reduzieren',
  taxTip2: 'Jahresboni können separat oder mit Jahreseinkommen versteuert werden',
  taxTip3: 'Mehrere Einkommensquellen müssen zusammengerechnet werden',
  taxTip4: 'Betriebsrenten und private Krankenversicherungen sind teilweise abziehbar',
  taxTip5: 'Sonderabzüge korrekt angeben, um Steuerrisiken zu vermeiden'
};