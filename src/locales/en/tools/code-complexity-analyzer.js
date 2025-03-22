export default {
  name: 'Code Complexity Analyzer',
  description: 'Analyze code complexity metrics like cyclomatic complexity and maintainability',
  languages: {
    title: 'Language',
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
    logicalLoc: 'Logical LOC',
    commentLines: 'Comment Lines',
    commentRatio: 'Comment Ratio',
    operatorCount: 'Operator Count',
    operandCount: 'Operand Count',
    functionCount: 'Function Count',
    maxNestingDepth: 'Max Nesting Depth',
    averageDepth: 'Average Depth'
  },
  results: {
    title: 'Analysis Results',
    file: 'File',
    method: 'Method',
    score: 'Score',
    complexity: 'Complexity',
    rating: 'Rating',
    loc: 'LOC',
    issues: 'Issues',
    summary: 'Summary',
    details: 'Details',
    noResults: 'No analysis results yet. Enter code and click "Analyze" to see metrics.'
  },
  ratings: {
    excellent: 'Excellent',
    good: 'Good',
    moderate: 'Moderate',
    poor: 'Poor',
    veryPoor: 'Very Poor'
  },
  actions: {
    analyze: 'Analyze Code',
    clearCode: 'Clear Code',
    uploadFile: 'Upload File',
    copy: 'Copy Results',
    download: 'Download Report'
  },
  messages: {
    analyzing: 'Analyzing code...',
    analysisComplete: 'Analysis complete',
    analysisError: 'Error analyzing code',
    copied: 'Copied to clipboard!',
    emptyCode: 'Please enter code to analyze',
    fileTooBig: 'File is too large (max 1MB)',
    invalidFile: 'Invalid or unsupported file type'
  },
  tips: {
    title: 'Usage Tips',
    cyclomaticComplexity: 'Cyclomatic complexity is a measure of the number of independent paths through source code.',
    maintainability: 'Maintainability index indicates how maintainable the code is, with higher values being better.',
    recommendations: 'For better code quality, aim for low complexity and high maintainability scores.',
    refactoring: 'Consider refactoring functions that have a complexity score higher than 10.'
  }
} 