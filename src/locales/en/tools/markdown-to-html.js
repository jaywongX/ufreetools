export default {
  name: 'Markdown to HTML',
  description: 'Convert Markdown text to HTML with customizable options',
  input: {
    title: 'Input Markdown',
    placeholder: 'Enter or paste your Markdown text here...',
    loadSample: 'Load Sample',
    clearInput: 'Clear Input',
    uploadFile: 'Upload Markdown File',
    paste: 'Paste from clipboard',
    charCount: 'Characters',
    lineCount: 'Lines'
  },
  output: {
    title: 'HTML Output',
    copied: 'HTML copied to clipboard',
    download: 'Download HTML',
    copyOutput: 'Copy HTML',
    clearOutput: 'Clear Output',
    previewTab: 'Preview',
    htmlTab: 'HTML Code',
    previewMode: 'Preview Mode',
    sourceMode: 'HTML Source'
  },
  options: {
    title: 'Conversion Options',
    headerIds: 'Auto Header IDs',
    gfm: 'GitHub Flavored Markdown',
    tables: 'Tables',
    breaks: 'Line Breaks',
    smartLists: 'Smart Lists',
    smartypants: 'Smartypants',
    xhtml: 'XHTML',
    highlight: 'Syntax Highlighting',
    sanitize: 'Sanitize HTML',
    footnotes: 'Footnotes',
    taskLists: 'Task Lists',
    emoji: 'Emoji Support',
    includeStyle: 'Include Default CSS',
    realtimePreview: 'Realtime Preview',
    scrollSync: 'Scroll Sync',
    htmlOptions: 'HTML Options'
  },
  styles: {
    title: 'Style Options',
    theme: 'Theme',
    codeTheme: 'Code Theme',
    customCSS: 'Custom CSS',
    fontSize: 'Font Size',
    lineHeight: 'Line Height',
    enableCustom: 'Enable Custom Styling'
  },
  themes: {
    default: 'Default',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: 'Dark Mode',
    custom: 'Custom'
  },
  codeThemes: {
    default: 'Default',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },
  actions: {
    convert: 'Convert to HTML',
    clearAll: 'Clear All',
    copyHtml: 'Copy HTML',
    saveAsHtml: 'Save as HTML',
    generateToc: 'Generate Table of Contents'
  },
  messages: {
    conversionSuccess: 'Markdown converted successfully',
    conversionFailed: 'Failed to convert Markdown: {error}',
    emptyInput: 'Please enter some Markdown to convert',
    copied: 'HTML copied to clipboard',
    tocGenerated: 'Table of contents generated'
  },
  alerts: {
    copied: 'Copied to clipboard',
    copyFailed: 'Failed to copy to clipboard',
    pasteFailed: 'Failed to paste from clipboard',
    confirmClear: 'Are you sure you want to clear the input?'
  },
  status: {
    lastConversion: 'Last conversion time'
  },
  samples: {
    basic: 'Basic',
    extended: 'Extended',
    article: 'Article'
  },
  download: {
    title: 'Markdown to HTML Export'
  },
  article: {
    title: "Markdown to HTML Converter: Transform Text into Formatted Web Content",
    features: {
      title: "Markdown to HTML Conversion: Simplifying Content Creation",
      description: "The <strong>Markdown to HTML converter</strong> is a powerful tool designed to transform lightweight Markdown syntax into properly formatted HTML code ready for web publication. This <strong>text formatting converter</strong> bridges the gap between simple text writing and web content creation, allowing content creators to focus on their writing without worrying about complex HTML tags.<br><br>Markdown's simplicity makes it perfect for content creation, but browsers require HTML to display formatted content properly. Our <strong>Markdown processor</strong> handles this conversion automatically, supporting standard Markdown features including headings, lists, links, images, tables, code blocks, blockquotes, and text formatting, while providing options for customization and preview.",
      useCases: {
        title: "Practical Applications for Markdown to HTML Conversion",
        items: [
          "<strong>Blog Post Creation</strong>: Content writers can draft articles in easy-to-write Markdown format, then convert to HTML for publishing on various blog platforms. The <strong>Markdown parser</strong> ensures proper formatting while maintaining clean HTML structure that works seamlessly with content management systems like WordPress, Ghost, or Jekyll.",
          "<strong>Documentation Development</strong>: Technical writers use Markdown for software documentation, user guides, and technical manuals, then convert to HTML for web-based documentation sites. The tool's support for code formatting and syntax highlighting makes it perfect for creating <strong>developer documentation</strong> that includes code examples.",
          "<strong>README Files for Repositories</strong>: Developers writing documentation for GitHub, GitLab, or Bitbucket repositories can use this tool to preview how their Markdown will render and extract clean HTML when needed for other platforms that don't support Markdown natively.",
          "<strong>Email Newsletter Formatting</strong>: Marketers can write email content in simple Markdown, then convert to HTML for use in email marketing platforms. The <strong>HTML generator</strong> creates clean code that works well across email clients while maintaining formatting consistency.",
          "<strong>Educational Content</strong>: Teachers and instructors creating learning materials can write content in Markdown and convert to HTML for learning management systems or online course platforms, using the tool's formatting capabilities for <strong>structured content</strong> with headings, lists, and emphasis.",
          "<strong>Collaborative Writing</strong>: Teams working on shared documents can use Markdown for its simplicity, then convert to HTML when needed for publication. This workflow simplifies the editing process while ensuring the final HTML output is clean and consistent."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions About Markdown to HTML Conversion",
      items: [
        {
          question: "What is the difference between Markdown and HTML?",
          answer: "Markdown and HTML serve different purposes in the content creation workflow. <strong>HTML (HyperText Markup Language)</strong> is the standard language for creating web pages and web applications. It uses tags like &lt;p&gt;, &lt;h1&gt;, and &lt;ul&gt; to define document structure and formatting. While powerful, HTML can be verbose and challenging for non-technical users to write correctly.<br><br><strong>Markdown</strong>, on the other hand, is a lightweight markup language designed for maximum readability and ease of writing. It uses simple symbols like # for headings, * for lists, and ** for bold text. This simplicity makes Markdown ideal for initial content creation, especially when focusing on text rather than layout.<br><br>Our <strong>Markdown to HTML converter</strong> bridges these worlds, allowing you to write in simple Markdown and generate proper HTML code when needed for web publication. This gives you the best of both worlds: the simplicity of Markdown for writing and the universal browser support of HTML for display."
        },
        {
          question: "Why do my code blocks look different after conversion?",
          answer: "Code blocks in the <strong>HTML output</strong> may look different from your Markdown for several reasons:<br><br>1. <strong>Syntax highlighting</strong>: If you've enabled the syntax highlighting option, our converter applies language-specific coloring to your code, enhancing readability and making it more visually appealing. This adds additional HTML and CSS to style different parts of the code according to the language syntax.<br><br>2. <strong>Formatting enhancements</strong>: The converter wraps code blocks in proper HTML elements (&lt;pre&gt; and &lt;code&gt; tags) and may apply styling such as background colors, line numbering, or font adjustments to improve readability.<br><br>3. <strong>Escaping of characters</strong>: Special characters in your code must be properly escaped in HTML to display correctly. For example, angle brackets used in HTML tags within your code blocks will be converted to &amp;lt; and &amp;gt; entities.<br><br>These transformations are intentional and help make your code more readable when displayed in browsers, while maintaining the functional integrity of the code examples. You can customize these aspects using the tool's options for styling and formatting."
        },
        {
          question: "Can I customize the HTML output style?",
          answer: "Yes, our <strong>Markdown converter</strong> offers several options to customize the style of your HTML output:<br><br>1. <strong>Include default CSS</strong>: Enable this option to include a set of basic CSS styles that make your HTML look visually appealing right away. This styling includes typography, spacing, and color schemes that enhance readability.<br><br>2. <strong>Custom styling options</strong>: Depending on your output needs, you can choose from different theme options that affect how elements like headings, lists, blockquotes, and links are displayed.<br><br>3. <strong>Code block theming</strong>: For technical content, you can select different syntax highlighting themes that change how code blocks appear in the output.<br><br>4. <strong>Direct HTML editing</strong>: After conversion, you can switch to the HTML view and manually add custom CSS classes or inline styles if you need very specific formatting.<br><br>These customization options allow you to generate <strong>web-ready HTML</strong> that matches your design requirements while maintaining the clean structure provided by the Markdown format. The preview panel shows you exactly how your content will appear with the selected styling options."
        },
        {
          question: "Will this converter preserve my document structure?",
          answer: "Yes, the <strong>Markdown to HTML converter</strong> is specifically designed to preserve the structural integrity of your document during the conversion process. Here's how document structure is maintained:<br><br>1. <strong>Heading hierarchy</strong>: Markdown headings (# through ######) are correctly converted to their HTML equivalents (&lt;h1&gt; through &lt;h6&gt;), maintaining the document's logical outline and section hierarchy.<br><br>2. <strong>List structures</strong>: Both ordered and unordered lists, including nested lists, are properly converted with appropriate HTML tags (&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;) while preserving their hierarchical relationships.<br><br>3. <strong>Paragraph separation</strong>: Blank lines in Markdown that separate paragraphs are correctly translated to separate &lt;p&gt; elements in HTML.<br><br>4. <strong>Block elements</strong>: Special blocks like blockquotes, code blocks, and tables maintain their separation from regular paragraph text in the resulting HTML.<br><br>5. <strong>Line breaks vs. paragraphs</strong>: The converter intelligently handles the distinction between line breaks within paragraphs and actual paragraph breaks based on standard Markdown conventions.<br><br>This structural preservation ensures that your <strong>document hierarchy</strong> remains intact, making the converted HTML semantically correct and properly organized for web browsers, screen readers, and search engines."
        },
        {
          question: "Is the generated HTML clean and SEO-friendly?",
          answer: "Yes, our <strong>Markdown converter</strong> generates clean, semantically correct HTML that is highly SEO-friendly. Here's why the output supports good search engine optimization:<br><br>1. <strong>Semantic structure</strong>: The converter produces HTML that properly uses semantic elements (&lt;h1&gt;, &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, etc.) which helps search engines understand the structure and importance of different content sections.<br><br>2. <strong>Clean code</strong>: The generated HTML is lightweight and free from unnecessary markup or inline styling that could bloat the page. This clean code is easier for search engines to parse and index.<br><br>3. <strong>Proper heading hierarchy</strong>: Markdown headings are converted to corresponding HTML heading tags, maintaining a logical document outline that search engines use to understand content relationships and topic hierarchy.<br><br>4. <strong>Accessible content</strong>: The HTML output follows accessibility best practices, which align with SEO requirements since both focus on proper document structure and semantics.<br><br>5. <strong>Sanitization option</strong>: The HTML sanitization feature removes potentially unsafe elements while preserving the structural integrity of your content, ensuring safe and clean HTML output.<br><br>This <strong>SEO-optimized HTML</strong> provides a solid foundation for your web content, allowing search engines to effectively crawl, understand, and index your pages, potentially improving your search ranking and visibility."
        }
      ]
    },
    guide: {
      title: "How to Use the Markdown to HTML Converter: Step-by-Step Guide",
      step1: "<strong>Enter your Markdown text</strong>: Begin by typing or pasting your Markdown content into the input area on the left side of the converter. If you're new to Markdown or need a starting point, use the 'Load Sample' button to see examples of basic syntax, extended features, or a complete article structure.",
      step2: "<strong>Select conversion options</strong>: Configure your conversion preferences using the options at the top of the tool. You can enable 'Realtime Preview' to see changes instantly, 'Scroll Sync' to keep input and output areas scrolled together, 'Sanitize HTML' to remove potentially unsafe elements, and 'Include Default CSS' to add basic styling to your HTML output.",
      step3: "<strong>Preview your content</strong>: As you type or after pasting content, the preview area on the right will show how your Markdown will look when rendered as HTML. Toggle between 'Preview' mode to see the formatted result and 'HTML Code' mode to view the actual HTML markup that's being generated.",
      step4: "<strong>Refine your Markdown</strong>: Make any necessary adjustments to your Markdown text, referring to the preview to ensure your formatting appears as intended. The converter updates in real-time (if enabled), letting you see the impact of your changes immediately.",
      step5: "<strong>Format code blocks</strong>: For technical content, use triple backticks (```) followed by a language name to create syntax-highlighted code blocks. For example, use ```javascript before your code and ``` after it to properly format JavaScript code with syntax highlighting.",
      step6: "<strong>Copy the generated HTML</strong>: Once you're satisfied with the conversion, click the 'Copy HTML' button (the upward arrow icon) above the output area to copy the HTML code to your clipboard. You can then paste it into your website editor, CMS, or any application that accepts HTML.",
      step7: "<strong>Download as HTML file</strong>: If you need to save the complete HTML document, click the 'Download HTML' button (the download icon) to save the conversion result as an HTML file that can be opened in any web browser."
    },
    conclusion: "The Markdown to HTML converter serves as an essential bridge between the simplicity of Markdown writing and the universality of HTML for web display. By providing an intuitive interface, real-time preview, and customizable output options, this tool streamlines the content creation workflow for bloggers, developers, technical writers, and content managers. Whether you're creating documentation, blog posts, or technical articles, this converter helps you maintain focus on your content while ensuring it's properly formatted for web publication. As both Markdown and HTML continue to be fundamental languages in the digital content ecosystem, tools that efficiently convert between them remain invaluable for modern content creators."
  }
} 