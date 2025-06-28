export default {
    name: 'BMI-Rechner',
    description: 'Berechnen Sie Ihren Body-Mass-Index (BMI) und bewerten Sie Ihren Gewichtsstatus',
    
    // Hauptoberflächentexte
    height: 'Körpergröße',
    weight: 'Gewicht',
    calculate: 'BMI berechnen',
    reset: 'Zurücksetzen',
    yourBmi: 'Ihr BMI-Wert',
    bmiCategory: 'BMI-Kategorie',
    
    // Einheitenauswahl
    unitSystem: 'Maßeinheiten',
    metric: 'Metrisch (cm/kg)',
    imperial: 'Britisch (Fuß/Pfund)',
    cm: 'Zentimeter',
    ft: 'Fuß',
    in: 'Zoll',
    kg: 'Kilogramm',
    lbs: 'Pfund',
    
    // BMI-Kategorien
    underweight: 'Untergewicht',
    normalWeight: 'Normalgewicht',
    overweight: 'Übergewicht',
    obesity: 'Adipositas',
    severeObesity: 'Starke Adipositas',
    
    // Kategoriebeschreibungen
    underweightDesc: 'BMI unter 18,5',
    normalWeightDesc: 'BMI zwischen 18,5 und 24,9',
    overweightDesc: 'BMI zwischen 25 und 29,9',
    obesityDesc: 'BMI zwischen 30 und 34,9',
    severeObesityDesc: 'BMI von 35 oder höher',
    
    // Ergebnisbeschreibung
    resultPrefix: 'Ihr BMI-Wert beträgt',
    resultSuffix: ', was darauf hinweist, dass Sie',
    
    // Tool-Einführung
    aboutTitle: 'Über den BMI-Rechner',
    aboutDescription: 'Der BMI (Body-Mass-Index) ist ein Indikator für das Verhältnis von Gewicht zu Körpergröße. Dieses Tool berechnet Ihren BMI basierend auf Ihrer Körpergröße und Ihrem Gewicht und gibt eine entsprechende Gesundheitsbewertung.',
    
    whatIsTitle: 'Was ist BMI?',
    whatIsDescription: 'BMI (Body Mass Index) wird berechnet, indem das Gewicht (kg) durch das Quadrat der Körpergröße (m) geteilt wird. Der BMI-Wert dient zur Beurteilung, ob sich eine Person im gesunden Gewichtsbereich befindet, und ist international der Standard zur Bewertung von Über- oder Untergewicht.',
    
    howToCalculateTitle: 'BMI-Berechnungsmethode',
    metricFormula: 'Metrische Formel: BMI = Gewicht(kg) / Größe(m)²',
    imperialFormula: 'Britische Formel: BMI = Gewicht(lbs) × 703 / Größe(in)²',
    
    interpretationTitle: 'BMI-Wert-Interpretation',
    interpretationDesc: 'Die BMI-Werte entsprechen folgenden Gewichtskategorien:',
    
    limitationsTitle: 'Einschränkungen des BMI',
    limitation1: 'BMI berücksichtigt nicht Unterschiede in Körperfettanteil, Muskelmasse und Knochendichte',
    limitation2: 'Nicht geeignet für die Bewertung von Sportlern, Schwangeren und Kindern',
    limitation3: 'Zeigt nicht die Fettverteilung im Körper an',
    limitation4: 'Berücksichtigt keine Unterschiede in Ethnizität, Alter und Geschlecht',
    
    tipsTitle: 'Tipps für ein gesundes Gewicht',
    tip1: 'Ausgewogene Ernährung mit ausreichend Proteinen, Obst und Vollkornprodukten',
    tip2: 'Mindestens 150 Minuten moderate aerobe Aktivität pro Woche',
    tip3: 'Vermeiden Sie langes Sitzen, erhöhen Sie die tägliche Bewegung',
    tip4: 'Ausreichend Schlaf und Flüssigkeitszufuhr',
    tip5: 'Bei abnormalen BMI-Werten konsultieren Sie einen Arzt oder Ernährungsberater',
    
    emptyStateMessage: 'Geben Sie Ihre Körpergröße und Ihr Gewicht ein und klicken Sie auf "BMI berechnen"'
  };