export default {
  name: 'Code Complexity Analyzer',
  description: 'Analyze code complexity metrics such as cyclomatic complexity and maintainability',
  title: 'Code Complexity Analysis',
  subtitle: 'Analyze various complexity metrics of JavaScript code, including cyclomatic complexity, Halstead metrics, and maintainability index',
  input: {
    title: 'Input JavaScript Code',
    placeholder: 'Paste your JavaScript code here...',
    loadExample: 'Load Example',
    clear: 'Clear'
  },
  options: {
    title: 'Analysis Options',
    cyclomaticComplexity: 'Calculate Cyclomatic Complexity (McCabe Complexity)',
    halsteadMetrics: 'Calculate Halstead Metrics (Program Length, Vocabulary, Volume, etc.)',
    maintainabilityIndex: 'Calculate Maintainability Index (Code Maintainability Metric)',
    functionDetails: 'Show Function-Level Analysis Results'
  },
  languages: {
    title: 'Languages',
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
    title: 'Metrics',
    cyclomaticComplexity: 'Cyclomatic Complexity',
    maintainabilityIndex: 'Maintainability Index',
    halsteadVolume: 'Halstead Volume',
    halsteadDifficulty: 'Halstead Difficulty',
    halsteadEffort: 'Halstead Effort',
    halsteadTime: 'Halstead Time',
    halsteadBugs: 'Halstead Bugs',
    linesOfCode: 'Lines of Code',
    logicalLoc: 'Logical Lines of Code',
    commentLines: 'Comment Lines',
    commentRatio: 'Comment Ratio',
    operatorCount: 'Operator Count',
    operandCount: 'Operand Count',
    functionCount: 'Function Count',
    maxNestingDepth: 'Maximum Nesting Depth',
    averageDepth: 'Average Depth',
    halstead: {
      title: 'Halstead Metrics',
      length: 'Program Length',
      vocabulary: 'Vocabulary',
      volume: 'Program Volume',
      difficulty: 'Difficulty'
    }
  },
  results: {
    title: 'Analysis Results',
    file: 'File',
    method: 'Method',
    score: 'Score',
    complexity: 'Complexity',
    rating: 'Rating',
    loc: 'Lines of Code',
    issues: 'Issues',
    summary: 'Overall Code Summary',
    details: 'Details',
    noResults: 'No analysis results yet. Input code and click "Analyze Code" to view metrics.',
    avgCyclomaticComplexity: 'Average Cyclomatic Complexity',
    maintainabilityIndex: 'Maintainability Index',
    linesOfCode: 'Lines of Code',
    functionDetails: 'Function-Level Analysis',
    functionName: 'Function Name',
    parameters: 'Number of Parameters',
    anonymousFunction: '(Anonymous Function)'
  },
  ratings: {
    excellent: 'Excellent',
    good: 'Good',
    moderate: 'Moderate',
    poor: 'Poor',
    veryPoor: 'Very Poor'
  },
  complexity: {
    title: 'Complexity Metric Explanation:',
    low: 'Low Complexity - Simple and clear code, easy to understand and maintain',
    medium: 'Medium Complexity - Slightly complex code but still acceptable',
    high: 'High Complexity - Overly complex code, consider refactoring'
  },
  actions: {
    analyze: 'Analyze Code',
    analyzing: 'Analyzing...',
    clearCode: 'Clear Code',
    uploadFile: 'Upload File',
    copy: 'Copy Results',
    download: 'Download Report',
    export: 'Export Report (JSON)'
  },
  messages: {
    analyzing: 'Analyzing code...',
    analysisComplete: 'Analysis complete',
    analysisError: 'Error analyzing code',
    analysisFailure: 'Unable to analyze code: {error}',
    copied: 'Copied to clipboard!',
    emptyCode: 'Please enter code to analyze',
    fileTooBig: 'File too large (maximum 1MB)',
    invalidFile: 'Invalid or unsupported file type',
    errorTitle: 'Analysis Error'
  },
  tips: {
    title: 'Usage Tips',
    cyclomaticComplexity: 'Cyclomatic complexity is a metric that measures the number of independent paths in source code.',
    maintainability: 'The maintainability index represents the maintainability of the code; higher values are better.',
    recommendations: 'For better code quality, aim for low complexity and high maintainability scores.',
    refactoring: 'Consider refactoring functions with complexity scores higher than 10.'
  }
}