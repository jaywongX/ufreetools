export default {
  name: 'Code-Komplexitätsanalysator',
  description: 'Analysiert Code-Komplexitätsmetriken wie zyklomatische Komplexität und Wartbarkeit',
  title: 'Code-Komplexitätsanalyse',
  subtitle: 'Analysiert JavaScript-Code auf verschiedene Komplexitätsmetriken inklusive zyklomatischer Komplexität, Halstead-Metriken und Wartbarkeitsindex',

  input: {
    title: 'JavaScript-Code eingeben',
    placeholder: 'JavaScript-Code hier einfügen...',
    loadExample: 'Beispiel laden',
    clear: 'Leeren'
  },

  options: {
    title: 'Analyseoptionen',
    cyclomaticComplexity: 'Zyklomatische Komplexität berechnen (McCabe-Komplexität)',
    halsteadMetrics: 'Halstead-Metriken berechnen (Programmlänge, Vokabular, Volumen etc.)',
    maintainabilityIndex: 'Wartbarkeitsindex berechnen (Code-Wartbarkeitsmetrik)',
    functionDetails: 'Funktionsbezogene Analyseergebnisse anzeigen'
  },

  languages: {
    title: 'Sprache',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP',
    go: 'Go',
    ruby: 'Ruby'
  },

  metrics: {
    title: 'Metriken',
    cyclomaticComplexity: 'Zyklomatische Komplexität',
    maintainabilityIndex: 'Wartbarkeitsindex',
    halsteadVolume: 'Halstead-Volumen',
    halsteadDifficulty: 'Halstead-Schwierigkeit',
    halsteadEffort: 'Halstead-Aufwand',
    halsteadTime: 'Halstead-Zeit',
    halsteadBugs: 'Halstead-Fehler',
    linesOfCode: 'Codezeilen',
    logicalLoc: 'Logische Codezeilen',
    commentLines: 'Kommentarzeilen',
    commentRatio: 'Kommentaranteil',
    operatorCount: 'Anzahl Operatoren',
    operandCount: 'Anzahl Operanden',
    functionCount: 'Anzahl Funktionen',
    maxNestingDepth: 'Maximale Verschachtelungstiefe',
    averageDepth: 'Durchschnittliche Tiefe',
    halstead: {
      title: 'Halstead-Metriken',
      length: 'Programmlänge',
      vocabulary: 'Vokabular',
      volume: 'Programmvolumen',
      difficulty: 'Schwierigkeit'
    }
  },

  results: {
    title: 'Analyseergebnisse',
    file: 'Datei',
    method: 'Methode',
    score: 'Punktzahl',
    complexity: 'Komplexität',
    rating: 'Bewertung',
    loc: 'Zeilen',
    issues: 'Probleme',
    summary: 'Code-Zusammenfassung',
    details: 'Details',
    noResults: 'Keine Analyseergebnisse. Code eingeben und auf "Code analysieren" klicken.',
    avgCyclomaticComplexity: 'Durchschnittliche zyklomatische Komplexität',
    maintainabilityIndex: 'Wartbarkeitsindex',
    linesOfCode: 'Codezeilen',
    functionDetails: 'Funktionsbezogene Analyse',
    functionName: 'Funktionsname',
    parameters: 'Parameteranzahl',
    anonymousFunction: '(Anonyme Funktion)'
  },

  ratings: {
    excellent: 'Ausgezeichnet',
    good: 'Gut',
    moderate: 'Mittel',
    poor: 'Schwach',
    veryPoor: 'Sehr schwach'
  },

  complexity: {
    title: 'Komplexitätsbewertung:',
    low: 'Geringe Komplexität - Code ist einfach und leicht verständlich',
    medium: 'Mittlere Komplexität - Code ist akzeptabel aber etwas komplex',
    high: 'Hohe Komplexität - Code ist zu komplex, Refactoring empfohlen'
  },

  actions: {
    analyze: 'Code analysieren',
    analyzing: 'Analyse läuft...',
    clearCode: 'Code löschen',
    uploadFile: 'Datei hochladen',
    copy: 'Ergebnisse kopieren',
    download: 'Bericht herunterladen',
    export: 'Bericht exportieren (JSON)'
  },

  messages: {
    analyzing: 'Code wird analysiert...',
    analysisComplete: 'Analyse abgeschlossen',
    analysisError: 'Fehler bei der Codeanalyse',
    analysisFailure: 'Codeanalyse fehlgeschlagen: {error}',
    copied: 'In Zwischenablage kopiert!',
    emptyCode: 'Bitte Code zur Analyse eingeben',
    fileTooBig: 'Datei zu groß (maximal 1MB)',
    invalidFile: 'Ungültiger oder nicht unterstützter Dateityp',
    errorTitle: 'Analysefehler'
  },

  tips: {
    title: 'Anwendungstipps',
    cyclomaticComplexity: 'Zyklomatische Komplexität misst die Anzahl unabhängiger Pfade im Code.',
    maintainability: 'Wartbarkeitsindex zeigt Code-Wartbarkeit an (höher = besser).',
    recommendations: 'Für bessere Codequalität: niedrige Komplexität, hohe Wartbarkeit.',
    refactoring: 'Funktionen mit Komplexität >10 sollten refaktorisiert werden.'
  }
};