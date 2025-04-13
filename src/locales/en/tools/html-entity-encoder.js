export default {
  name: 'HTML Entity Encoder',
  description: 'Convert between HTML text and entity encoding',
  title: 'HTML Entity Encoder/Decoder',
  intro: 'HTML entity encoding is used to convert special characters into a format safe for HTML, commonly used to prevent XSS attacks or display HTML source code.',
  operation: {
    title: 'Operation Type',
    encode: 'HTML Entity Encode',
    decode: 'HTML Entity Decode'
  },
  mode: {
    title: 'Encoding Mode',
    named: 'Named Entities (&amp;lt;)',
    decimal: 'Decimal Entities (&amp;#60;)',
    hex: 'Hexadecimal Entities (&amp;#x3C;)',
    full: 'Full Encoding (all characters)'
  },
  input: {
    encodeTitle: 'Text to Encode',
    decodeTitle: 'Text to Decode',
    encodePlaceholder: 'Enter the HTML or text you want to encode...',
    decodePlaceholder: 'Enter the HTML entity text you want to decode...',
    clear: 'Clear'
  },
  output: {
    encodeTitle: 'Encoded Result',
    decodeTitle: 'Decoded Result',
    copy: 'Copy Result',
    copied: '(Copied!}',
    preview: 'Preview Effect',
    showSource: 'Show Source Code'
  },
  reference: {
    title: 'Entity Reference',
    commonReferenceTables: 'Common HTML Entity Reference Tables',
    show: 'Show Table',
    hide: 'Hide Table',
    description: {
      named: 'Uses named format such as &amp;lt; for < (only applies to common HTML entities)',
      decimal: 'Uses decimal format such as &amp;#60; for <',
      hex: 'Uses hexadecimal format such as &amp;#x3C; for <',
      full: 'Encodes all non-alphanumeric characters, including spaces, line breaks, etc.'
    },
    table: {
      char: 'Character',
      named: 'Named Entity',
      decimal: 'Decimal Entity',
      description: 'Description'
    },
    entities: {
      lt: 'Less-than sign',
      gt: 'Greater-than sign',
      amp: 'Ampersand',
      quot: 'Double quotation mark',
      apos: 'Apostrophe',
      copy: 'Copyright symbol',
      reg: 'Registered trademark',
      trade: 'Trademark symbol',
      nbsp: 'Non-breaking space',
      cent: 'Cent sign',
      pound: 'Pound sign',
      euro: 'Euro sign',
      yen: 'Yen/RMB sign',
      sect: 'Section sign',
      minus: 'Minus sign',
      times: 'Multiplication sign',
      divide: 'Division sign',
      deg: 'Degree sign',
      plusmn: 'Plus-minus sign',
      frac14: 'One-quarter fraction'
    }
  },
  messages: {
    copySuccess: 'Copied to clipboard',
    copyError: 'Copy failed, please copy manually',
    encodeSuccess: 'Encoding completed',
    decodeSuccess: 'Decoding completed',
    invalidInput: 'Invalid input text'
  },
  article: {
    title: "HTML Entity Encoder: Essential Tool for Web Development Security",
    features: {
      title: "Understanding HTML Entity Encoding",
      description: "The <strong>HTML Entity Encoder</strong> is a specialized tool designed to convert special characters into their corresponding <strong>HTML entities</strong>. This process, known as <strong>HTML encoding</strong>, is crucial for web security and proper rendering of web content.<br><br>At its core, this <strong>entity encoder</strong> transforms characters that might be interpreted as HTML markup (such as &lt; and &gt;) into their respective <strong>character entities</strong> (like &amp;lt; and &amp;gt;). The tool offers multiple encoding modes, including <strong>named entities</strong>, <strong>decimal entities</strong>, <strong>hexadecimal entities</strong>, and <strong>full encoding</strong> for all non-alphanumeric characters. It also provides the essential functionality to <strong>decode HTML entities</strong> back to their original characters.",
      useCases: {
        title: "Common Applications for HTML Entity Encoding",
        items: [
          "Web developers preventing Cross-Site Scripting (XSS) attacks by encoding user input before displaying it on web pages",
          "Content authors embedding code snippets in documentation or blog posts where actual HTML tags need to be displayed as text",
          "CMS administrators ensuring special characters and symbols display correctly across different browsers and operating systems",
          "Email template designers encoding special characters to ensure consistent rendering across various email clients",
          "Database administrators preparing HTML data for safe storage and retrieval without risk of injection vulnerabilities",
          "Web security professionals auditing pages for potential encoding issues that might lead to security vulnerabilities"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about HTML Entity Encoding",
      items: [
        {
          question: "What is the difference between the various HTML entity encoding modes?",
          answer: "Named entities (like &lt;) use memorable, standardized names for common special characters and are the most readable but only available for certain characters. Decimal entities (like &#60;) represent characters by their Unicode code point using decimal numbers. Hexadecimal entities (like &#x3C;) also use code points but in hexadecimal format. Full encoding converts all non-alphanumeric characters to their entity form, providing the most comprehensive protection but resulting in longer output."
        },
        {
          question: "Why is HTML entity encoding important for web security?",
          answer: "HTML entity encoding is critical for web security because it prevents Cross-Site Scripting (XSS) attacks. By encoding special characters, particularly angle brackets (< >), user-supplied content cannot be interpreted as executable HTML or JavaScript when displayed in a browser. Without proper encoding, malicious users could inject scripts that steal data, redirect users, or perform unauthorized actions. Encoding ensures user input is treated as literal text rather than executable code."
        },
        {
          question: "When should I use HTML entity encoding versus other types of encoding?",
          answer: "Use HTML entity encoding when displaying user-generated content within HTML contexts like webpage body content, attributes, or HTML email templates. For JavaScript contexts, use JavaScript escaping. For URL parameters, use URL encoding. For CSS values, use CSS escaping. HTML entity encoding is specifically designed for safely representing special characters within HTML documents, while other encoding schemes serve different contexts with their own security considerations."
        },
        {
          question: "Will HTML entity encoding affect the visual appearance of my content?",
          answer: "When properly implemented, HTML entity encoding should not affect the visual appearance of your content to end users. Browsers automatically decode and render the entities to display the original characters. For example, &amp;copy; will appear as © to viewers. The encoding is only visible in the source code. However, if you encode content that should be interpreted as actual HTML (like formatting tags), those elements will be displayed literally rather than rendered."
        },
        {
          question: "Can I use HTML entity encoding for all international characters and symbols?",
          answer: "Yes, HTML entity encoding can represent any Unicode character, making it suitable for international characters, symbols, and emojis. While common special characters have named entities (like &amp;euro; for €), any character can be encoded using decimal (&#8364;) or hexadecimal (&#x20AC;) entity formats based on its Unicode code point. However, for extensive international text, consider using UTF-8 character encoding for your HTML documents alongside selective entity encoding for special characters."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the HTML Entity Encoder",
      steps: [
        "Select your operation type: Choose 'HTML Entity Encode' to convert special characters to HTML entities, or 'HTML Entity Decode' to convert entities back to characters",
        "If encoding, select your preferred encoding mode: Named Entities for readable named codes, Decimal Entities for numerical codes, Hexadecimal Entities for hex-based codes, or Full Encoding for maximum character conversion",
        "Input your text in the appropriate field - either text to encode or HTML entity text to decode",
        "Click the 'Encode' or 'Decode' button depending on your selected operation",
        "Review the output result displayed below. For encoded content, you can toggle between viewing the source code and the rendered preview",
        "Copy the result to your clipboard by clicking the 'Copy Result' button for use in your web pages or applications",
        "For reference, consult the Common HTML Entity Reference Table at the bottom of the page to see frequently used HTML entities and their representations"
      ]
    },
    conclusion: "HTML entity encoding is an essential practice for web developers and content creators who prioritize security and proper rendering across different platforms. By using this HTML Entity Encoder tool, you can ensure that your web content displays correctly while protecting against potentially dangerous code injection attacks. Whether you're developing web applications, creating documentation, or managing content systems, proper HTML entity encoding should be a standard part of your workflow for secure and consistent web development."
  }
}