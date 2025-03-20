export default {
  name: 'Code Complexity Analyzer',
  description: 'Analyze code complexity metrics such as cyclomatic complexity and maintainability index',
  options: {
    language: 'Language',
    includeFunctions: 'Show Function Metrics',
    includeClasses: 'Show Class Metrics',
    includeComments: 'Include Comments in Analysis',
    thresholds: 'Complexity Thresholds'
  },
  metrics: {
    cyclomaticComplexity: 'Cyclomatic Complexity',
    maintainabilityIndex: 'Maintainability Index',
    linesOfCode: 'Lines of Code',
    commentRatio: 'Comment Ratio',
    halsteadVolume: 'Halstead Volume',
    sourceLines: 'Source Lines'
  },
  actions: {
    analyze: 'Analyze Code',
    clear: 'Clear',
    copy: 'Copy Results',
    download: 'Download Report',
    upload: 'Upload File'
  },
  messages: {
    copied: 'Copied to clipboard!',
    analyzeSuccess: 'Code analysis completed',
    analyzeError: 'Error analyzing code',
    complexityLow: 'Low complexity - good!',
    complexityMedium: 'Medium complexity - monitor this',
    complexityHigh: 'High complexity - refactoring recommended'
  }
} 