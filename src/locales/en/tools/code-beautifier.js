export default {
  name: 'Code Beautifier',
  description: 'Format and beautify code with syntax highlighting and indentation',
  languages: {
    title: 'Language',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    cpp: 'C++',
    typescript: 'TypeScript'
  },
  actions: {
    beautify: 'Beautify',
    minify: 'Minify',
    clear: 'Clear',
    copy: 'Copy',
    download: 'Download',
    upload: 'Upload File'
  },
  options: {
    title: 'Options',
    indentSize: 'Indent Size',
    indentWith: 'Indent With',
    spaces: 'Spaces',
    tabs: 'Tabs',
    lineBreaks: 'Line Break Style',
    quoteStyle: 'Quote Style',
    bracketStyle: 'Bracket Style',
    preserveNewlines: 'Preserve Newlines',
    endWithNewline: 'End With Newline',
    removeComments: 'Remove Comments',
    wrapLineLength: 'Wrap Line Length',
    lineNumbers: 'line number ',
    showLineNumbers: 'Show line number ',
    wrapLines: 'Wrap ',
    theme: 'Theme ',
    autoDetect: 'Automatic detection ',
    tryAutoDetect: 'Try automatic detection language',
  },
  input: {
    title: 'Input',
    placeholder: 'Paste your code here...'
  },
  output: {
    title: 'Output',
    placeholder: 'Beautified code will appear here...'
  },
  messages: {
    copied: 'Copied to clipboard!',
    beautifySuccess: 'Code beautified successfully',
    minifySuccess: 'Code minified successfully',
    beautifyError: 'Error beautifying code',
    minifyError: 'Error minifying code',
    emptyCode: 'Please enter code to beautify',
    fileTooBig: 'File is too large (max 2MB)',
    invalidFile: 'Invalid or unsupported file type',
    preview: 'preview',
    HTMLCode: 'HTML Code',
  },
  stats: {
    original: 'Original',
    beautified: 'Beautified',
    minified: 'Minified',
    size: 'Size',
    characters: 'Characters',
    lines: 'Lines'
  },
  tips: {
    title: 'Usage Tips',
    tip1: 'Choose the right programming language for the best syntax highlighting',
    tip2: 'You can choose different theme styles to suit your website style',
    tip3: 'Copy the generated HTML code and paste it directly into an HTML-enabled editor or website',
    tip4: 'The generated highlighted code supports adaptive and dark modes',
    tip5: 'Adding line numbers when presenting code improves readability and ease of reference'
  }
} 