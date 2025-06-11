export default {
  name: 'Code Diff',
  description: 'Compare two pieces of code and highlight the differences',
  options: {
    title: 'Options',
    ignoreCase: 'Ignore Case',
    ignoreWhitespace: 'Ignore Whitespace',
    trimWhitespace: 'Trim Whitespace',
    diffMode: 'Diff Mode',
    diffModes: {
      chars: 'Character',
      words: 'Word',
      lines: 'Line',
      sentences: 'Sentence',
      json: 'JSON'
    },
    diffStyle: 'Diff Style',
    diffStyles: {
      split: 'Split View',
      inline: 'Inline View'
    },
    context: 'Context Lines',
    wrap: 'Wrap Text',
    languages: {
      plaintext: 'Plain Text',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },
  inputs: {
    original: 'Original Code',
    modified: 'Modified Code',
    placeholderOriginal: 'Enter original code here...',
    placeholderModified: 'Enter modified code here...'
  },
  actions: {
    compare: 'Compare',
    clear: 'Clear',
    swap: 'Swap',
    copy: 'Copy Diff',
    download: 'Download Diff',
    upload: 'Upload Files'
  },
  results: {
    title: 'Diff Results',
    changes: 'Changes',
    additions: 'Additions',
    deletions: 'Deletions',
    unchanged: 'Unchanged',
    noChanges: 'No differences found - the two texts are identical',
    loading: 'Generating diff...'
  },
  upload: {
    originalFile: 'Original File',
    modifiedFile: 'Modified File',
    dropOriginal: 'Drag original file here or click to browse',
    dropModified: 'Drag modified file here or click to browse'
  },
  messages: {
    copied: 'Copied to clipboard!',
    inputRequired: 'Please enter text in both input fields',
    diffGenerated: 'Diff generated successfully',
    error: 'Error generating diff',
    fileError: 'Error reading file'
  },
  tips: {
    title: 'Usage Tips',
    compareOptions: 'Adjust comparison options to suit your needs - ignoring whitespace can be helpful for code comparisons.',
    diffModes: 'Different diff modes provide varying levels of detail in the comparison.',
    largeFiles: 'For large files, line-based comparison is more efficient.',
    jsonMode: 'Use JSON mode for comparing structured data - it will normalize and compare object structures.'
  },
  article: {
    title: "Code Diff Tool: Understand Code Changes Effectively",
    features: {
      title: "Understanding Code Difference Comparison",
      description: "The <strong>Code Diff Tool</strong> is a sophisticated <strong>code comparison utility</strong> designed to help developers and coders identify differences between two pieces of code. This powerful <strong>diff checker</strong> highlights additions, deletions, and modifications between text files, making it invaluable for code reviews, version control, and debugging.<br><br>Our <strong>text comparison tool</strong> offers multiple comparison modes including character, word, line, sentence, and JSON-specific analysis. The tool provides both split-view and inline visualization options to suit different preferences and use cases. Whether you're working on source code, configuration files, or any text-based content, this <strong>code comparison tool</strong> gives you precise insights into what has changed between versions.",
      useCases: {
        title: "Practical Applications for Code Comparison",
        items: [
          "Software developers tracking <strong>code changes</strong> between different versions of their application to identify the source of bugs or unexpected behavior",
          "Team leads performing <strong>code reviews</strong> to visualize exactly what team members have modified in a pull request before approving changes",
          "DevOps engineers comparing <strong>configuration files</strong> across different environments to ensure consistency or identify environment-specific customizations",
          "Technical writers comparing <strong>documentation drafts</strong> to see how content has evolved or to identify sections that need updating based on product changes",
          "Data analysts examining differences between <strong>JSON structures</strong> or data exports to understand how data models have changed over time",
          "Students learning programming by comparing their <strong>code solutions</strong> with reference implementations to understand different approaches to solving problems"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about Code Difference Analysis",
      items: [
        {
          question: "What is the difference between character-based and line-based comparison?",
          answer: "Character-based comparison identifies changes at the individual character level, highlighting precise modifications within words or code segments. It's ideal for detecting small, subtle changes like variable name modifications. Line-based comparison treats each line as a unit, highlighting entire lines that have been added, removed, or modified. This mode is more efficient for larger files and provides a clearer overview when significant portions of code have changed, making it the default for most code review systems and version control tools."
        },
        {
          question: "Can the Code Diff Tool handle large files or codebases?",
          answer: "Yes, our Code Diff Tool is optimized for performance when comparing large files. For best results with substantial codebases, we recommend using the line-based comparison mode, which processes differences more efficiently than character or word-based modes. The tool implements intelligent throttling and processing techniques to maintain responsiveness even with large inputs. However, for extremely large files (several MB of text), you may experience better performance by focusing on specific sections of code rather than comparing entire files at once."
        },
        {
          question: "How does the JSON comparison mode work?",
          answer: "The JSON comparison mode is specially designed for comparing structured data. Unlike standard text comparison, this mode first parses both inputs as JSON objects, normalizes their structure (handling different spacing, indentation, and property ordering), and then identifies actual data differences. This means that two JSON objects with identical data but different formatting or property ordering will be recognized as the same. This mode is particularly valuable for API developers comparing response structures, configuration management, and data analysis where the semantic content matters more than the exact text representation."
        },
        {
          question: "Can I use this tool to compare code from different programming languages?",
          answer: "Absolutely. The Code Diff Tool works with any text-based format, making it language-agnostic. It effectively highlights syntactic differences regardless of the programming language, whether you're comparing JavaScript, Python, Java, C++, HTML, CSS, or any other code. For improved readability, the tool offers syntax highlighting for popular programming languages, which helps visualize the changes in a language-appropriate context. This makes it equally valuable for full-stack developers working across multiple technologies or specialists focused on a single language ecosystem."
        },
        {
          question: "How can I share or save the comparison results?",
          answer: "Our Code Diff Tool offers several options for sharing and preserving your comparison results. You can copy the formatted diff to your clipboard with the 'Copy Diff' button for pasting into documentation, emails, or chat applications. The 'Download Diff' feature allows you to save the complete comparison as an HTML file that preserves all highlighting and formatting. For workflow integration, you can also generate permanent links to specific comparisons that can be shared with team members. These options make it easy to incorporate diff results into your documentation, code review processes, or troubleshooting discussions."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Comparing Code",
      steps: [
        "Start by selecting the <strong>comparison mode</strong> that best suits your needs - line-based comparison works well for most code comparisons, while word or character modes are better for fine-grained text differences",
        "Choose between <strong>split view</strong> (side-by-side) or <strong>inline view</strong> based on your preference and screen size",
        "Paste or type your <strong>original code</strong> in the left input area, ensuring it's properly formatted for better readability",
        "Add your <strong>modified code</strong> in the right input area - you can also use the swap button to reverse the comparison direction if needed",
        "Click the <strong>Compare</strong> button to generate a visual diff between the two code snippets",
        "Examine the results where <strong>additions</strong> are highlighted in green, <strong>deletions</strong> in red, and unchanged sections remain neutral",
        "Use the <strong>summary statistics</strong> at the bottom to quickly understand the scope of changes (number of additions, deletions, and total changed lines)",
        "For complex files, use the search functionality to find specific sections or changes within the compared code"
      ]
    },
    conclusion: "The Code Diff Tool streamlines the often complex task of identifying and understanding code changes. By providing clear, visual representations of differences between text files, it saves developers and technical professionals valuable time during debugging, code reviews, and version management. Whether you're tracking changes in a large codebase, reviewing a colleague's work, or trying to identify when and where a bug was introduced, this comparison utility offers the precision and flexibility needed to make sense of evolving code. Regular use of this tool can enhance your development workflow, improve code quality through better reviews, and help maintain consistency across project versions."
  }
} 