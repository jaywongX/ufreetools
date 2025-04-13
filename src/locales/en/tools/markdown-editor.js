export default {
  name: 'Markdown Editor',
  description: 'Edit and preview Markdown documents with real-time rendering',
  options: {
    mode: 'Mode',
    syntaxHighlighting: 'Syntax Highlighting',
    autoSave: 'Auto Save',
    lineNumbers: 'Line Numbers',
    spellCheck: 'Spell Check',
    wordWrap: 'Word Wrap'
  },
  modes: {
    split: 'Split View',
    edit: 'Edit Only',
    preview: 'Preview Only'
  },
  actions: {
    bold: 'Bold',
    italic: 'Italic',
    strikethrough: 'Strikethrough',
    heading: 'Heading',
    link: 'Link',
    image: 'Image',
    list: 'List',
    quote: 'Quote',
    code: 'Code',
    table: 'Table',
    hr: 'Horizontal Rule',
    preview: 'Preview',
    copy: 'Copy',
    clear: 'Clear',
    download: 'Download Markdown',
    downloadHTML: 'Download HTML',
    upload: 'Upload Markdown'
  },
  messages: {
    copied: 'Content copied to clipboard!',
    copyError: 'Copy failed, please copy manually',
    clearConfirm: 'Are you sure you want to clear the editor content?',
    templateConfirm: 'Applying the template will replace the current content. Continue?',
    templateApplied: 'Applied "{name}" template',
    saved: 'Document saved',
    uploadSuccess: 'Document uploaded successfully',
    uploadError: 'Error uploading document',
    wordCount: '{count} words',
    charCount: '{count} characters'
  },
  placeholder: 'Enter your Markdown content here...',
  templates: {
    title: 'Quick Templates',
    apply: 'Apply Template',
    confirm: 'Apply Template'
  },
  dialogs: {
    clear: {
      title: 'Clear Editor',
      message: 'Are you sure you want to clear the editor content?'
    },
    template: {
      title: 'Apply Template',
      message: 'Applying the template will replace the current content. Continue?'
    }
  },
  article: {
    title: "Markdown Editor: Create Formatted Documents with Ease",
    features: {
      title: "Understanding Markdown Editing",
      description: "The <strong>Markdown Editor</strong> is a versatile <strong>text formatting tool</strong> designed to help users create beautifully structured documents using the simple Markdown syntax. This powerful <strong>document editor</strong> combines an intuitive writing environment with real-time preview functionality, making it perfect for content creation across various platforms.<br><br>Our <strong>rich text editor</strong> supports all standard Markdown syntax elements including headings, lists, links, images, code blocks, and tables. The editor features syntax highlighting, split-screen preview, and convenient formatting shortcuts. Whether you're drafting documentation, preparing blog posts, or taking structured notes, this <strong>Markdown writing tool</strong> provides the perfect balance of simplicity and functionality to streamline your content creation workflow.",
      useCases: {
        title: "Practical Applications for Markdown Editing",
        items: [
          "Software developers writing <strong>technical documentation</strong> and README files for GitHub repositories, using Markdown's code formatting and heading structure for clear organization",
          "Content creators drafting <strong>blog posts</strong> with embedded images, links, and formatted text that can be easily exported to content management systems like WordPress or Medium",
          "Technical writers creating <strong>product documentation</strong> with consistent formatting, tables for data presentation, and hierarchical organization through headings",
          "Students taking <strong>structured notes</strong> during lectures or research, using Markdown's simple syntax for quick formatting without interrupting their thought process",
          "Project managers developing <strong>organized wiki pages</strong> with linked sections, task lists, and formatted content for team knowledge bases",
          "Academic researchers drafting <strong>research papers</strong> or notes with citations, embedded formulas, and structured headings before final formatting in dedicated publishing software"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about Markdown Editing",
      items: [
        {
          question: "What is the difference between Markdown and traditional word processors?",
          answer: "Markdown is a lightweight markup language that uses plain text syntax to indicate formatting, unlike traditional word processors that use WYSIWYG (What You See Is What You Get) interfaces with formatting buttons and menus. The key advantages of Markdown include: simplicity and speed for basic formatting tasks, excellent portability across platforms, smaller file sizes, version control compatibility, focus on content rather than styling, and consistent output. Traditional word processors offer more complex formatting options and direct visual editing but often create proprietary file formats with compatibility issues. Markdown is ideal for content that needs to be converted to multiple formats (HTML, PDF) or shared across different platforms."
        },
        {
          question: "Can I export my Markdown documents to other formats?",
          answer: "Yes, our Markdown Editor allows you to export your documents in multiple formats. You can directly download your content as a Markdown (.md) file for future editing or as HTML for web publishing. For additional format conversions like PDF, DOCX (Word), or other specialized formats, you can use the HTML export with third-party converters or tools like Pandoc. The clean, structured nature of Markdown makes it an excellent source format for conversion to almost any document type. This flexibility is why Markdown has become the preferred format for content that needs to exist in multiple formats or platforms."
        },
        {
          question: "Does this editor support GitHub Flavored Markdown?",
          answer: "Yes, our Markdown Editor fully supports GitHub Flavored Markdown (GFM), which includes all standard Markdown features plus several extensions that make it particularly well-suited for technical and code documentation. These extensions include syntax-highlighted code fences, tables, strikethrough text, task lists with checkboxes, and automatic linking of URLs. The editor also properly renders GFM-specific elements like user mentions, issue references, and emoji shortcodes in the preview mode. This compatibility ensures that documents created in our editor will display correctly on GitHub in repositories, issues, pull requests, and wiki pages."
        },
        {
          question: "Can I collaborate with others using this Markdown editor?",
          answer: "While our Markdown Editor doesn't include built-in real-time collaboration features like Google Docs, you can still effectively collaborate with others using a workflow centered around the editor. You can export your Markdown documents and share them via email or messaging apps, or use the editor alongside version control systems like Git for more structured collaboration. For teams, you might consider using the editor in combination with platforms like GitHub, where multiple contributors can work on Markdown files with version history, pull requests, and comments. The plain text nature of Markdown makes it particularly well-suited for tracking changes and merging contributions compared to binary file formats."
        },
        {
          question: "How can I learn Markdown syntax if I'm a beginner?",
          answer: "Learning Markdown syntax is straightforward even for complete beginners. Our editor includes a formatting toolbar that lets you apply common Markdown elements with a click, helping you learn the syntax visually. As you use these buttons, you'll see the corresponding Markdown appear in your text, creating a natural learning process. Additionally, the real-time preview shows how your Markdown will be rendered, providing immediate feedback. For a structured approach, we recommend starting with basic elements (headings, bold, italic, links, and lists) before moving to more advanced features like tables and code blocks. Many users find they can master the basics in less than 30 minutes due to Markdown's intuitive design."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the Markdown Editor",
      steps: [
        "Start by selecting your preferred <strong>editing mode</strong> from the top toolbar - choose between split view (edit and preview side-by-side), edit only (for maximum writing space), or preview only (to see the final formatting)",
        "Begin typing your content in the editor pane, using <strong>Markdown syntax</strong> for formatting or utilize the formatting toolbar buttons above the editor to insert the proper syntax automatically",
        "Create document structure with <strong>headings</strong> using hash symbols (# for main heading, ## for subheading, etc.) to organize your content into logical sections",
        "Format text using <strong>inline styles</strong> such as asterisks for *italic* or **bold**, backticks for `code`, or tildes for ~~strikethrough~~ text to emphasize important points",
        "Insert <strong>links and images</strong> using the syntax [link text](URL) for hyperlinks and ![alt text](image-url) for images, creating rich, interactive content",
        "Organize information with <strong>lists and tables</strong> - use hyphens or numbers for lists and pipe symbols with hyphens for creating structured tables with rows and columns",
        "Preview your work in real-time to see how the <strong>formatted document</strong> will appear, making adjustments as needed before downloading or copying the final content"
      ]
    },
    conclusion: "The Markdown Editor streamlines the process of creating well-formatted documents without the complexity of traditional word processors or the learning curve of HTML. By providing a clean, distraction-free writing environment with powerful formatting capabilities, it enables you to focus on your content while maintaining consistent, professional presentation. Whether you're a developer documenting code, a writer crafting blog posts, or a student organizing notes, Markdown's straightforward syntax combined with our editor's real-time preview makes document creation faster and more intuitive. As more platforms adopt Markdown support, mastering this versatile format with our editor gives you a valuable skill that transfers across numerous applications and workflows, saving time and enhancing productivity for all your documentation needs."
  }
} 