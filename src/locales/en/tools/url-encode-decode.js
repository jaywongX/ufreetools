export default {
  name: 'URL Encode Decode',
  description: 'URL encoding converts special characters into a format that is acceptable for URLs, commonly used for URL parameters and form submissions.',
  options: {
    operationType: 'Operation Type',
    encodeMode: 'Encoding Mode'
  },
  encodeOptions: {
    standard: 'Standard Encoding (encodeURI)',
    component: 'Component Encoding (encodeURIComponent)',
    full: 'Full Encoding (all characters)',
    standardDescription: 'Encodes the entire URL while preserving URL structure characters',
    componentDescription: 'Suitable for URL parameters, encodes all special characters',
    fullDescription: 'Encodes all non-alphanumeric characters, including spaces (as %20 not +)'
  },
  actions: {
    encode: 'URL Encode',
    decode: 'URL Decode',
    clear: 'Clear',
    copyResult: 'Copy Result'
  },
  input: {
    textToEncode: 'Text to Encode',
    textToDecode: 'Text to Decode',
    encodePlaceholder: 'Enter URL or text to encode...',
    decodePlaceholder: 'Enter URL or text to decode...'
  },
  output: {
    encodeResult: 'Encode Result',
    decodeResult: 'Decode Result'
  },
  messages: {
    copied: '(Copied!)',
    error: 'Error: {message}',
    decodeError: 'Unable to decode: "{text}"',
    copyFailed: 'Copy failed, please copy manually'
  },
  referenceTable: {
    title: 'Common URL Character Encoding Reference',
    showTable: 'Show Table',
    hideTable: 'Hide Table',
    character: 'Character',
    encoded: 'URL Encoded',
    description: 'Description',
    descriptions: {
      space: 'Space',
      exclamation: 'Exclamation Mark',
      doubleQuote: 'Double Quote',
      hash: 'Hash',
      dollar: 'Dollar Sign',
      percent: 'Percent Sign',
      ampersand: 'Ampersand',
      singleQuote: 'Single Quote',
      leftParenthesis: 'Left Parenthesis',
      rightParenthesis: 'Right Parenthesis',
      asterisk: 'Asterisk',
      plus: 'Plus Sign',
      comma: 'Comma',
      slash: 'Forward Slash',
      colon: 'Colon',
      semicolon: 'Semicolon',
      lessThan: 'Less Than',
      equals: 'Equals Sign',
      greaterThan: 'Greater Than',
      questionMark: 'Question Mark',
      at: 'At Sign',
      leftBracket: 'Left Bracket',
      backslash: 'Backslash',
      rightBracket: 'Right Bracket',
      caret: 'Caret',
      backtick: 'Backtick',
      leftBrace: 'Left Brace',
      pipe: 'Pipe',
      rightBrace: 'Right Brace',
      tilde: 'Tilde',
      chinese: 'UTF-8 Encoded Chinese'
    }
  },
  article: {
    title: 'URL Encode and Decode: The Ultimate Guide to URL Encoding and Decoding',
    introduction: {
      title: 'What is URL Encoding and Decoding?',
      p1: '<strong>URL encode decode</strong> is an essential process in web development that converts special characters into a format that can be safely transmitted over the internet. When you enter information into a URL, certain characters like spaces, ampersands, and slashes have special meanings in the URL structure. URL encoding replaces these special characters with a percent sign (%) followed by two hexadecimal digits.',
      p2: 'Our <strong>URL encode decode</strong> tool provides an intuitive interface to handle three types of encoding: standard encoding (encodeURI), component encoding (encodeURIComponent), and full encoding for all characters. This versatility allows developers using <strong>JavaScript URL encode decode</strong> functions, <strong>PHP URL encode decode</strong> methods, or any other programming language to test and verify their encoding and decoding operations easily.',
      p3: 'Whether you\'re working with form submissions, API requests, or complex URL parameters, understanding and correctly implementing <strong>URL encode decode</strong> techniques is crucial for preventing data corruption and security vulnerabilities. This comprehensive guide explores the various aspects of URL encoding and decoding across different programming languages and frameworks.'
    },
    
    applications: {
      title: 'Practical Applications',
      scenario1: {
        title: 'Web Development and Form Handling',
        content: 'Web developers frequently use <strong>JavaScript URL encode decode</strong> or <strong>JS URL encode decode</strong> functions when working with forms to ensure data is properly formatted for HTTP requests. When a user submits a form containing special characters, spaces, or non-ASCII characters, these must be encoded before being sent to the server. The <code>encodeURIComponent()</code> function in JavaScript is commonly used for this purpose, while <code>decodeURIComponent()</code> decodes the data on the receiving end.'
      },
      scenario2: {
        title: 'API Development and Integration',
        content: 'When developing or consuming APIs, developers often need to use <strong>URL encode decode</strong> functions in various languages like <strong>Python URL encode decode</strong>, <strong>Java URL encode decode</strong>, or <strong>Golang URL encode decode</strong>. Query parameters and path segments may contain special characters that need encoding to ensure proper request formation. For instance, in <strong>Python URL encode decode</strong> operations are typically handled with the <code>urllib.parse</code> module, while Java developers might use the <code>URLEncoder</code> and <code>URLDecoder</code> classes.'
      },
      scenario3: {
        title: 'Database Interactions',
        content: 'Database developers sometimes need to perform <strong>URL encode decode in SQL Server</strong> or other database systems when storing or retrieving URLs. Special characters in URLs can interfere with SQL queries if not properly encoded. Similarly, frameworks like <strong>Laravel URL encode decode</strong> provide utilities for handling URL encoding and decoding within database operations, ensuring data integrity throughout the application lifecycle.'
      },
      scenario4: {
        title: 'Security and Authentication',
        content: 'Security professionals use <strong>URL encode decode</strong> techniques to analyze and test web applications for vulnerabilities. Proper URL encoding helps prevent injection attacks and cross-site scripting (XSS). When implementing authentication systems, developers may need to encode tokens or other sensitive information in URLs. Libraries like <strong>Base64 URL encode decode</strong> are often used for these security-related encoding tasks, particularly in JWT (JSON Web Tokens) implementations.'
      },
      scenario5: {
        title: 'Cross-Language Development Environments',
        content: 'In multi-language environments, developers may need to ensure consistent URL encoding across different programming ecosystems. Testing how <strong>C# URL encode decode</strong> behaves compared to <strong>TypeScript URL encode decode</strong> or <strong>PHP URL encode decode</strong> implementations can be crucial for maintaining interoperability. Our online tool serves as a neutral reference point, allowing developers to verify encoding behavior across different language implementations without writing additional test code.'
      }
    },
    
    guide: {
      title: 'How to Use the URL Encode Decode Tool',
      step1: {
        title: 'Step 1: Select Your Operation Type',
        content: 'Begin by selecting your desired operation from the dropdown menu. Choose "URL Encode" to convert special characters into URL-safe format, or "URL Decode" to convert encoded characters back to their original form. This flexibility allows you to test both encoding and decoding operations that you might implement in languages like <strong>JavaScript URL encode decode</strong>, <strong>PHP URL encode decode</strong>, or <strong>Python URL encode decode</strong>.'
      },
      step2: {
        title: 'Step 2: Choose Encoding Mode (for Encode Operation)',
        content: 'When encoding, select from three different encoding modes based on your needs:<ul><li><strong>Standard Encoding (encodeURI)</strong>: Encodes the entire URL while preserving URL structure characters like slashes, question marks, etc. This is equivalent to using the <code>encodeURI()</code> function in <strong>JavaScript URL encode decode</strong> operations.</li><li><strong>Component Encoding (encodeURIComponent)</strong>: Encodes all special characters, including those with special meaning in URLs. This is ideal for encoding individual URL components and is equivalent to using <code>encodeURIComponent()</code> in <strong>JS URL encode decode</strong> operations.</li><li><strong>Full Encoding</strong>: Encodes all non-alphanumeric characters, providing the most thorough encoding approach similar to what you might implement in a custom <strong>Java URL encode decode</strong> function.</li></ul>'
      },
      step3: {
        title: 'Step 3: Enter Your Text',
        content: 'Next, enter the text you want to encode or decode in the input field. This can be a complete URL, a URL component, or any text string containing special characters. If you\'re testing equivalent functionality to <strong>PHP URL encode decode</strong> or <strong>Python URL encode decode</strong>, you can enter the same strings here to compare results.'
      },
      step4: {
        title: 'Step 4: Process and Use the Results',
        content: 'Click the "URL Encode" or "URL Decode" button to process your input. The result will appear in the output field below. You can copy this result using the copy button for use in your application, whether you\'re building with <strong>C# URL encode decode</strong>, <strong>TypeScript URL encode decode</strong>, or implementing <strong>URL encode decode in Laravel</strong>. The reference table at the bottom of the tool shows common URL encoded characters for your reference.'
      }
    },
    
    faq: {
      title: 'Frequently Asked Questions',
      q1: 'What\'s the difference between encodeURI and encodeURIComponent in JavaScript URL encode decode?',
      a1: 'In <strong>JavaScript URL encode decode</strong> operations, these two functions serve different purposes. <code>encodeURI()</code> is designed to encode a complete URL and preserves characters that have special meaning in URLs (like <code>/</code>, <code>?</code>, <code>:</code>, <code>=</code>). This is useful when you need to encode an entire URL while maintaining its structure.<br><br><code>encodeURIComponent()</code>, on the other hand, encodes all special characters, including those with special meaning in URLs. This makes it ideal for encoding individual URL components like query parameters. For example, if you\'re building a search URL with user input, you should use <code>encodeURIComponent()</code> on the search term to ensure special characters don\'t break the URL structure. Most <strong>JS URL encode decode</strong> implementations will use <code>encodeURIComponent()</code> for form submissions and API calls.',
      
      q2: 'How do I implement URL encode decode in PHP?',
      a2: 'For <strong>PHP URL encode decode</strong> operations, PHP provides built-in functions: <code>urlencode()</code> and <code>urldecode()</code>. The <code>urlencode()</code> function works similarly to JavaScript\'s <code>encodeURIComponent()</code>, encoding all special characters including spaces (as + signs). For encoding entire URLs, PHP offers <code>rawurlencode()</code>, which follows RFC 3986 standards more strictly and encodes spaces as %20 instead of +.<br><br>Here\'s a simple example:<pre><code>// Encoding a URL parameter in PHP\n$encoded = urlencode("Search term with spaces & special chars");\n// Result: Search+term+with+spaces+%26+special+chars\n\n// Decoding\n$decoded = urldecode("Search+term+with+spaces+%26+special+chars");\n// Result: Search term with spaces & special chars</code></pre>PHP frameworks like <strong>URL encode decode in Laravel</strong> provide additional helpers and middleware for managing URL encoding in web applications.',
      
      q3: 'How does URL encode decode work in Python compared to other languages?',
      a3: '<strong>Python URL encode decode</strong> operations typically use the <code>urllib.parse</code> module, specifically the <code>quote()</code> and <code>unquote()</code> functions. Similar to PHP and JavaScript, Python distinguishes between encoding a full URL and encoding URL components.<br><br>Here\'s how Python compares to other languages:<pre><code># Python URL encode decode\nfrom urllib.parse import quote, unquote\n\n# Encode (similar to JavaScript\'s encodeURIComponent)\nencoded = quote("Search term with spaces & special chars")\n# Result: Search%20term%20with%20spaces%20%26%20special%20chars\n\n# Decode\ndecoded = unquote("Search%20term%20with%20spaces%20%26%20special%20chars")\n# Result: Search term with spaces & special chars</code></pre>Unlike PHP\'s <code>urlencode()</code>, Python\'s <code>quote()</code> encodes spaces as %20 rather than + signs, which is more consistent with <strong>JavaScript URL encode decode</strong> behavior.',
      
      q4: 'Can I use Base64 encoding instead of URL encoding?',
      a4: 'While <strong>Base64 URL encode decode</strong> techniques are sometimes used for encoding data in URLs (especially in JWT tokens), Base64 is not a replacement for proper URL encoding. Base64 encoding converts binary data to ASCII characters, but it can produce characters like +, /, and = that have special meaning in URLs.<br><br>If you need to include Base64-encoded data in a URL, you should still apply URL encoding to the Base64 output, or use URL-safe Base64 encoding (which replaces + with - and / with _). Most languages provide libraries for this:<pre><code>// JavaScript URL-safe Base64\nconst urlSafeBase64 = btoa(data).replace(/\\+/g, \'-\').replace(/\\//g, \'_\').replace(/=+$/, \'\');\n\n# Python URL-safe Base64\nimport base64\nurlsafe_b64 = base64.urlsafe_b64encode(data.encode()).decode().rstrip(\'=\')</code></pre>This approach is common in modern <strong>TypeScript URL encode decode</strong> implementations for secure data transmission.',
      
      q5: 'How do I handle URL encoding in SQL queries?',
      a5: 'Performing <strong>URL encode decode in SQL Server</strong> or other database systems typically involves using built-in functions or creating custom functions. SQL Server doesn\'t have built-in URL encoding functions, but you can:<br><br>1. Perform the encoding/decoding in your application code before constructing SQL queries<br>2. Create user-defined functions in SQL:<pre><code>-- Example of a simple URL decode function in SQL Server\nCREATE FUNCTION dbo.UrlDecode(@url NVARCHAR(MAX))\nRETURNS NVARCHAR(MAX)\nAS\nBEGIN\n    -- Implementation of decoding logic\n    -- (Actual implementation would be more complex)\n    RETURN REPLACE(REPLACE(@url, \'%20\', \' \'), \'%26\', \'&\')\nEND</code></pre>For security reasons, it\'s generally better to handle URL encoding/decoding in application code using proper <strong>C# URL encode decode</strong> methods (for .NET applications) or other language-specific implementations rather than in SQL directly.'
    },
    
    relatedTools: {
      title: 'Related Tools',
      tool1: '<a href="https://meyerweb.com/eric/tools/dencoder/" target="_blank" rel="noopener noreferrer">URL Decoder/Encoder</a>',
      tool2: '<a href="https://www.urldecoder.org/" target="_blank" rel="noopener noreferrer">URL Decode and Encode - Online</a>',
      tool3: '<a href="https://www.url-encode-decode.com/" target="_blank" rel="noopener noreferrer">URL Encode Decode - URL Percent Encoding and Decoding.</a>'
    },
    
    resources: {
      title: 'External Resources',
      resource1: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank" rel="noopener noreferrer">MDN Web Docs: encodeURIComponent()</a> - Detailed documentation on JavaScript\'s URL encoding functions',
      resource2: '<a href="https://www.php.net/manual/en/function.urlencode.php" target="_blank" rel="noopener noreferrer">PHP Manual: urlencode()</a> - Official documentation for PHP\'s URL encoding functions',
      resource3: '<a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1" target="_blank" rel="noopener noreferrer">W3C Form Submission Specification</a> - Official specification on how browsers encode form data'
    },
    
    conclusion: {
      title: 'Conclusion',
      content: 'The <strong>URL encode decode</strong> tool is an indispensable utility for web developers, offering a simple way to convert special characters into URL-safe formats and back. Whether you\'re working with <strong>JavaScript URL encode decode</strong> functions, implementing <strong>URL encode decode in Laravel</strong>, or testing <strong>Python URL encode decode</strong> behavior, this tool provides a reliable reference point.<br><br>By understanding URL encoding principles and practices across different programming environments from <strong>PHP URL encode decode</strong> to <strong>Java URL encode decode</strong>, developers can ensure their applications handle special characters correctly, leading to more robust and secure web applications.<br><br>Remember that different encoding contexts require different approaches. Using the right encoding function for the right situation is crucial for maintaining data integrity throughout your web applications and services. Our tool helps you test and verify these operations with ease, regardless of your programming language or framework preference.'
    }
  }
} 