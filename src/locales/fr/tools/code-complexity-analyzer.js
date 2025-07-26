export default {
  name: 'Analyseur de complexité du code',
  description: 'Analyse les métriques de complexité du code comme la complexité cyclomatique et la maintenabilité',
  title: 'Analyse de complexité du code',
  subtitle: 'Analyse diverses métriques de complexité pour du code JavaScript, incluant la complexité cyclomatique, les métriques Halstead et l\'indice de maintenabilité',

  input: {
    title: 'Entrez le code JavaScript',
    placeholder: 'Collez votre code JavaScript ici...',
    loadExample: 'Charger un exemple',
    clear: 'Effacer'
  },

  options: {
    title: 'Options d\'analyse',
    cyclomaticComplexity: 'Calculer la complexité cyclomatique (complexité McCabe)',
    halsteadMetrics: 'Calculer les métriques Halstead (longueur du programme, vocabulaire, volume etc.)',
    maintainabilityIndex: 'Calculer l\'indice de maintenabilité',
    functionDetails: 'Afficher les résultats par fonction'
  },

  languages: {
    title: 'Langages',
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
    title: 'Métriques',
    cyclomaticComplexity: 'Complexité cyclomatique',
    maintainabilityIndex: 'Indice de maintenabilité',
    halsteadVolume: 'Volume Halstead',
    halsteadDifficulty: 'Difficulté Halstead',
    halsteadEffort: 'Effort Halstead',
    halsteadTime: 'Temps Halstead',
    halsteadBugs: 'Bogues Halstead',
    linesOfCode: 'Nombre de lignes',
    logicalLoc: 'Lignes logiques',
    commentLines: 'Lignes de commentaires',
    commentRatio: 'Ratio de commentaires',
    operatorCount: 'Nombre d\'opérateurs',
    operandCount: 'Nombre d\'opérandes',
    functionCount: 'Nombre de fonctions',
    maxNestingDepth: 'Profondeur d\'imbrication max',
    averageDepth: 'Profondeur moyenne',
    halstead: {
      title: 'Métriques Halstead',
      length: 'Longueur du programme',
      vocabulary: 'Vocabulaire',
      volume: 'Volume',
      difficulty: 'Difficulté'
    }
  },

  results: {
    title: 'Résultats d\'analyse',
    file: 'Fichier',
    method: 'Méthode',
    score: 'Score',
    complexity: 'Complexité',
    rating: 'Évaluation',
    loc: 'Lignes',
    issues: 'Problèmes',
    summary: 'Résumé global',
    details: 'Détails',
    noResults: 'Aucun résultat d\'analyse. Entrez du code et cliquez sur "Analyser le code" pour voir les métriques.',
    avgCyclomaticComplexity: 'Complexité cyclomatique moyenne',
    maintainabilityIndex: 'Indice de maintenabilité',
    linesOfCode: 'Nombre de lignes',
    functionDetails: 'Analyse par fonction',
    functionName: 'Nom de fonction',
    parameters: 'Nombre de paramètres',
    anonymousFunction: '(fonction anonyme)'
  },

  ratings: {
    excellent: 'Excellent',
    good: 'Bon',
    moderate: 'Modéré',
    poor: 'Médiocre',
    veryPoor: 'Très médiocre'
  },

  complexity: {
    title: 'Explication des métriques de complexité :',
    low: 'Faible complexité - Code simple et clair, facile à comprendre et maintenir',
    medium: 'Complexité moyenne - Code légèrement complexe mais acceptable',
    high: 'Haute complexité - Code trop complexe, devrait être refactorisé'
  },

  actions: {
    analyze: 'Analyser le code',
    analyzing: 'Analyse en cours...',
    clearCode: 'Effacer le code',
    uploadFile: 'Téléverser un fichier',
    copy: 'Copier les résultats',
    download: 'Télécharger le rapport',
    export: 'Exporter le rapport (JSON)'
  },

  messages: {
    analyzing: 'Analyse du code en cours...',
    analysisComplete: 'Analyse terminée',
    analysisError: 'Erreur d\'analyse du code',
    analysisFailure: 'Impossible d\'analyser le code : {error}',
    copied: 'Copié dans le presse-papiers !',
    emptyCode: 'Veuillez entrer du code à analyser',
    fileTooBig: 'Fichier trop volumineux (max 1MB)',
    invalidFile: 'Type de fichier invalide ou non supporté',
    errorTitle: 'Erreur d\'analyse'
  },

  tips: {
    title: 'Conseils d\'utilisation',
    cyclomaticComplexity: 'La complexité cyclomatique mesure le nombre de chemins indépendants dans le code source.',
    maintainability: 'L\'indice de maintenabilité indique la facilité de maintenance du code - plus le score est élevé, mieux c\'est.',
    recommendations: 'Pour une meilleure qualité de code, essayez de maintenir une faible complexité et un score de maintenabilité élevé.',
    refactoring: 'Envisagez de refactoriser les fonctions avec un score de complexité supérieur à 10.'
  }
};