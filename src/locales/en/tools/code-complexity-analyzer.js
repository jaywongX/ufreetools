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
  },
  article: {
    title: "Understanding Code Complexity Analysis for Better Software Development",
    overview: {
      title: "What is Code Complexity Analysis?",
      content: "<strong>Code Complexity Analysis</strong> is a specialized tool that examines source code to measure its structural complexity, maintainability, and potential risk factors. This powerful development utility helps developers identify overly complex code segments that may be prone to bugs, difficult to maintain, or challenging to extend.<br><br>By quantifying complexity through established software metrics like cyclomatic complexity, Halstead metrics, and maintainability index, this tool provides objective data about code quality, enabling informed decisions about where refactoring efforts should be focused. Code complexity analysis is a cornerstone practice in modern software development that supports technical debt management and code quality improvement initiatives."
    },
    useCases: {
      title: "Common Applications of Code Complexity Analysis",
      items: [
        {
          title: "Technical Debt Management",
          description: "Identify complex code areas contributing to technical debt, allowing teams to prioritize debt reduction efforts by focusing on high-risk, high-complexity code sections."
        },
        {
          title: "Code Review Enhancement",
          description: "Augment manual code reviews with objective complexity metrics, helping reviewers spot potentially problematic areas that warrant extra scrutiny during the review process."
        },
        {
          title: "Refactoring Prioritization",
          description: "Use complexity metrics to objectively decide which code segments should be refactored first, ensuring maintenance efforts are directed toward the most problematic areas."
        },
        {
          title: "Quality Gate Enforcement",
          description: "Establish complexity thresholds in continuous integration pipelines, preventing overly complex code from being merged into the main codebase and maintaining high quality standards."
        },
        {
          title: "Testing Resource Allocation",
          description: "Allocate more testing resources to highly complex code segments that are statistically more likely to contain defects, optimizing quality assurance efforts."
        },
        {
          title: "New Developer Onboarding",
          description: "Help new team members identify simple parts of the codebase to start working with, gradually progressing to more complex sections as their familiarity increases."
        },
        {
          title: "Legacy Code Assessment",
          description: "Evaluate the complexity of legacy systems to estimate maintenance costs, refactoring effort, or risks involved in making changes to older code."
        }
      ]
    },
    guide: {
      title: "How to Use the Code Complexity Analyzer",
      intro: "Follow these steps to effectively analyze your code's complexity and interpret the results:",
      steps: [
        {
          title: "Prepare Your Code Sample",
          description: "Begin by identifying the JavaScript code you want to analyze. You can either use a complete file or focus on specific functions or modules of interest. Clean, well-formatted code provides the most accurate analysis results."
        },
        {
          title: "Input Your Code",
          description: "Paste your JavaScript code into the input textarea. For convenience, you can use the 'Load Example' button to see how the analyzer works with sample code if you're new to complexity analysis."
        },
        {
          title: "Select Analysis Options",
          description: "Choose which complexity metrics you want to calculate by checking the appropriate options: Cyclomatic Complexity measures code path complexity, Halstead Metrics evaluate code volume and difficulty, Maintainability Index provides an overall maintainability score, and Function Details shows metrics for individual functions."
        },
        {
          title: "Analyze Your Code",
          description: "Click the 'Analyze Code' button to process your input. The tool will parse the JavaScript code, calculate the selected complexity metrics, and generate a comprehensive report."
        },
        {
          title: "Review Overall Summary",
          description: "Examine the summary section which provides a high-level overview of your code's complexity. Pay attention to the average cyclomatic complexity, maintainability index, and lines of code metrics to get a general understanding of your code's health."
        },
        {
          title: "Examine Function-Level Details",
          description: "If you selected 'Show Function-Level Analysis', review the table displaying metrics for each function. Look for functions with high complexity scores (highlighted in yellow or red) as these are prime candidates for refactoring."
        },
        {
          title: "Export Results if Needed",
          description: "Use the 'Export Report' button to download the analysis results in JSON format for further processing, documentation, or sharing with your team. This is particularly useful for tracking complexity metrics over time."
        }
      ]
    },
    metrics: {
      title: "Understanding Code Complexity Metrics",
      intro: "Code complexity analysis uses several established metrics to evaluate different aspects of code quality and maintainability:",
      items: [
        {
          name: "Cyclomatic Complexity",
          description: "Measures the number of independent paths through source code, essentially quantifying the decision complexity of the code. Higher values indicate more complex code with more branches, conditions, and potential execution paths. Code with high cyclomatic complexity is typically harder to understand, test, and maintain. Aim for values under 10 for most functions."
        },
        {
          name: "Halstead Metrics",
          description: "A family of metrics that measure program size and effort based on the number of operators and operands in the code. This includes program length, vocabulary, volume, difficulty, effort, and estimated bugs. Halstead metrics provide insights into the cognitive load required to understand the code. Lower values for difficulty and volume generally indicate more maintainable code."
        },
        {
          name: "Maintainability Index",
          description: "A composite metric that combines cyclomatic complexity, Halstead volume, and lines of code to give an overall indication of how maintainable the code is. Scored from 0 to 100, higher values indicate more maintainable code. Scores above 70 are considered good, while scores below 20 indicate code that may be extremely difficult to maintain."
        },
        {
          name: "Lines of Code (LOC)",
          description: "A simple but effective measure of code size. While not directly a complexity metric, LOC often correlates with complexity and maintenance effort. Functions with too many lines (typically over 100) might benefit from breaking down into smaller, more focused functions."
        },
        {
          name: "Parameters Count",
          description: "The number of parameters a function accepts. Functions with many parameters (generally more than 4) can be hard to understand and use correctly, often indicating a design that could be improved by restructuring or using parameter objects."
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions About Code Complexity Analysis",
      items: [
        {
          question: "Why is code complexity analysis important?",
          answer: "Code complexity analysis helps identify problematic code before it leads to bugs, maintenance issues, or development bottlenecks. Studies show that complex code is significantly more error-prone and costly to maintain. By identifying and reducing complexity, teams can improve software quality, reduce maintenance costs, accelerate development, and enhance developer productivity and satisfaction."
        },
        {
          question: "What is a good cyclomatic complexity score?",
          answer: "Generally, functions with cyclomatic complexity under 5 are considered simple and easy to maintain. Scores between 6-10 are moderately complex but still acceptable. Anything above 10 is considered complex and may require refactoring, while scores above 15 indicate highly complex code that should be prioritized for simplification. Different organizations may set their own thresholds based on their quality standards."
        },
        {
          question: "Does this tool work with languages other than JavaScript?",
          answer: "The current implementation specifically analyzes JavaScript code. However, the underlying complexity metrics and principles apply to most programming languages. For analyzing code in other languages, you would need tools specific to those languages, as syntax parsing is language-dependent."
        },
        {
          question: "How accurate are these complexity metrics?",
          answer: "These metrics provide objective measurements based on established software engineering principles, but they're not perfect. They excel at quantifying structural complexity and identifying potential problem areas, but they don't capture all aspects of code quality such as architectural design, domain suitability, or readability factors like naming conventions. For comprehensive quality assessment, combine complexity metrics with other practices like code reviews and static analysis."
        },
        {
          question: "Can I integrate this analyzer into my CI/CD pipeline?",
          answer: "While this web-based tool is designed for interactive use, the same complexity metrics can be implemented in CI/CD pipelines using libraries like 'complexity-report', 'eslint-plugin-complexity', or 'SonarQube' for JavaScript projects. These tools can enforce complexity thresholds, preventing overly complex code from being merged and ensuring continuous code quality monitoring."
        },
        {
          question: "What should I do if my code has high complexity scores?",
          answer: "High complexity scores indicate code that likely needs refactoring. Consider techniques like: breaking large functions into smaller ones, reducing nesting levels, simplifying conditional logic using guard clauses or lookup tables, extracting complex calculations into dedicated helper functions, applying design patterns to simplify structure, and replacing complex code with library functions when appropriate. Focus first on the highest-complexity functions that are modified frequently."
        },
        {
          question: "Do lower complexity scores always mean better code?",
          answer: "Not necessarily. While lower complexity generally correlates with more maintainable code, there can be exceptions. Sometimes a slightly more complex solution might be more efficient, better aligned with domain requirements, or actually more readable to domain experts. Complexity metrics should inform your decision-making, not dictate it. Balance complexity considerations with other factors like performance, domain appropriateness, and team familiarity."
        }
      ]
    },
    optimization: {
      title: "Code Optimization Strategies Based on Complexity Analysis",
      intro: "When your complexity analysis reveals issues, consider these effective techniques to reduce complexity and improve code quality:",
      tips: [
        "Decompose large functions into smaller, more focused ones that each perform a single logical operation",
        "Reduce nesting levels by using early returns, guard clauses, or extracting deeply nested code into separate functions",
        "Simplify complex boolean conditions by breaking them into named variables or functions that explain their purpose",
        "Replace complex switch statements and if-else chains with strategy patterns or lookup tables",
        "Use functional programming techniques like map, filter, and reduce instead of complex loops with multiple conditions",
        "Extract repeated code patterns into reusable utility functions or methods",
        "Apply the Single Responsibility Principle to ensure classes and functions have only one reason to change",
        "Replace complex custom algorithms with well-tested library functions where appropriate",
        "Simplify interface complexity by using parameter objects instead of long parameter lists",
        "Document complex but necessary code thoroughly, explaining why it needs to be complex",
        "Add comprehensive tests for complex code sections to ensure they work as expected and facilitate future refactoring",
        "Establish complexity thresholds for your team and review code that exceeds these thresholds before merging"
      ]
    }
  }
}