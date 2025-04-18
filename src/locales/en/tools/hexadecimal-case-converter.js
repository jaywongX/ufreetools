export default {
    name: 'Hexadecimal Case Converter',
    description: 'Convert and format hexadecimal strings between uppercase and lowercase, with different prefixes, separators, and grouping options',
    
    input: {
      title: 'Input Hexadecimal',
      placeholder: 'Enter hexadecimal value...'
    },
    
    output: {
      title: 'Converted Result',
      placeholder: 'Converted result will appear here...'
    },
    
    prefix: {
      title: 'Prefix',
      none: 'None',
    },
    
    format: {
      title: 'Case Format',
      uppercase: 'UPPERCASE',
      lowercase: 'lowercase'
    },
    
    separator: {
      title: 'Separator',
      none: 'None',
      space: 'Space',
      comma: 'Comma',
      colon: 'Colon',
      semicolon: 'Semicolon'
    },
    
    grouping: {
      title: 'Grouping (bytes)',
      none: 'None'
    },
    
    actions: {
      copy: 'Copy',
      clear: 'Clear',
      convert: 'Convert'
    },
    
    messages: {
      copied: 'Copied to clipboard',
      copyFailed: 'Failed to copy',
      invalidHex: 'Invalid hexadecimal value'
    },
    
    examples: {
      title: 'Examples',
      example1: {
        title: 'Hello World in Hex',
      },
      example2: {
        title: 'ASCII Hello with 0x Prefix',
      },
      example3: {
        title: 'DEADBEEF (Common Debug Value)',
      },
      example4: {
        title: 'MAC Address Format',
      }
    },
    
    tips: {
      title: 'Tips',
      tip1: 'Hexadecimal values use characters 0-9 and A-F (or a-f)',
      tip2: 'Different prefixes are used in different contexts: 0x in programming, # in colors, etc.',
      tip3: 'Use grouping and separators for better readability of long hex strings',
      tip4: 'MAC addresses typically use colon separators with 1-byte grouping'
    },
    
    article: {
      title: 'Hexadecimal Case Converter: Ultimate Guide for Converting Hex Case Formats',
      
      introduction: {
        title: 'What is a Hexadecimal Case Converter?',
        p1: 'Our <strong>Hexadecimal Case Converter</strong> is a specialized tool designed to transform hexadecimal strings between uppercase and lowercase formats, while also providing additional formatting options. Whether you need to <strong>convert hex to lowercase</strong> for programming consistency or change lowercase hexadecimal to uppercase for enhanced readability, this tool offers a comprehensive solution to all your hexadecimal case conversion needs.',
        p2: 'Hexadecimal notation (base 16) uses numbers 0-9 and letters A-F (or a-f) to represent values. The choice between <strong>lowercase hexadecimal</strong> and uppercase can significantly impact code readability, compatibility, and even system behavior in some contexts. Our converter handles everything from simple case conversion to complex formatting with prefixes, separators, and custom grouping.',
        p3: 'The <strong>hexadecimal lowercase vs uppercase</strong> debate is common among developers. While both formats represent the same values, different programming languages, protocols, and systems may prefer or require specific case formats. This tool bridges this gap by providing instant conversion between cases along with additional formatting options that cater to various technical specifications and style guidelines.'
      },
      
      applications: {
        title: 'Practical Applications & Use Cases',
        scenario1: {
          title: 'Programming & Development',
          content: 'Software developers frequently need to <strong>convert hex to alphanumeric</strong> representations or switch between case formats for consistency in codebases. When working with Java, developers often need to <strong>convert hex to long Java</strong> integers, where case consistency is crucial for readability. Our tool simplifies this process while maintaining code style guidelines.'
        },
        scenario2: {
          title: 'Network & Communication Protocols',
          content: 'Network engineers working with MAC addresses, IPv6, or other protocols that use hexadecimal notation can maintain consistency when documenting or implementing systems. Many protocols have specific requirements for <strong>lowercase hexadecimal</strong> formatting with particular separators and groupings, which our tool can easily accommodate.'
        },
        scenario3: {
          title: 'Color Code Formatting',
          content: 'Web designers and graphic artists working with hex color codes (#RRGGBB) often need to <strong>convert hex to letters</strong> in specific cases for different design tools or CSS specifications. Some design systems require uppercase for brand consistency, while others prefer lowercase for HTML/CSS conventions.'
        },
        scenario4: {
          title: 'Data Analysis & Conversion',
          content: 'Data analysts frequently need to convert between text case formats in various tools. For instance, you might need to <strong>convert lowercase text to uppercase in Excel</strong> cells containing hexadecimal values, or <strong>convert lowercase to uppercase Linux</strong> command output for further processing.'
        },
        scenario5: {
          title: 'Digital Forensics & Security',
          content: 'Security professionals analyzing hex dumps, binary files, or encrypted data often need consistent formats for documentation, comparison, and analysis. Converting between formats allows for smoother integration with various security tools, many of which require <strong>hex to lowercase</strong> conversion for consistent processing.'
        }
      },
      
      guide: {
        title: 'How to Use the Hexadecimal Case Converter',
        step1: {
          title: 'Step 1: Enter Your Hexadecimal Value',
          content: 'Begin by entering any hexadecimal value into the input field. Our tool accepts valid hexadecimal characters (0-9, A-F, a-f) and common separators. Whether you\'re looking to <strong>convert hex to letters</strong> in a different case or format an existing string, start by inputting your hex value.'
        },
        step2: {
          title: 'Step 2: Select Your Desired Case Format',
          content: 'Choose between uppercase (ABCDEF) and lowercase (abcdef) formatting. This option determines whether your <strong>hexadecimal lowercase vs uppercase</strong> conversion will result in capital or small letters for the alphabetic portions of your hex value.'
        },
        step3: {
          title: 'Step 3: Choose Prefix Options',
          content: 'Select a prefix for your hex values if needed. Common options include 0x (for programming), # (for colors), \\x (for escape sequences), or h (assembly suffix). This is particularly useful when you need to <strong>convert hex to alphanumeric</strong> formats for specific programming languages or systems.'
        },
        step4: {
          title: 'Step 4: Set Separator and Grouping',
          content: 'Choose a separator character (space, comma, colon, semicolon) and grouping size to format your output. For example, MAC addresses typically use colon separators with 1-byte grouping. This step is essential when you need to <strong>convert hex to long</strong> formats with specific grouping for improved readability.'
        },
        step5: {
          title: 'Step 5: Copy and Use Your Converted Result',
          content: 'Once the conversion is complete, your formatted hexadecimal value appears in the output field. Click the "Copy" button to copy the result to your clipboard, ready to use in your code, documentation, or other applications. Whether you needed to <strong>convert hex to lowercase</strong> or implement a specific format with grouping and prefixes, your perfectly formatted hexadecimal is now ready for use.'
        }
      },
      
      faq: {
        title: 'Frequently Asked Questions',
        q1: 'What\'s the difference between lowercase and uppercase hexadecimal?',
        a1: 'The <strong>hexadecimal lowercase vs uppercase</strong> distinction refers to how the letters A-F (used to represent values 10-15) are displayed. Functionally, "1a2b3c" and "1A2B3C" represent identical values. However, many programming languages and systems have style conventions or requirements that specify case. For example, CSS color codes traditionally use lowercase, while some assembly languages prefer uppercase for readability.',
        
        q2: 'How do I convert hex to alphanumeric characters?',
        a2: 'Hexadecimal is already alphanumeric, using both numbers (0-9) and letters (A-F). If you\'re looking to <strong>convert hex to alphabet</strong> letters beyond A-F, you may be referring to ASCII or Unicode conversion, which is a different process that interprets hex values as character codes. This tool focuses on case conversion and formatting of standard hexadecimal notation, not text encoding/decoding.',
        
        q3: 'Why would I need to convert hex to lowercase or uppercase?',
        a3: 'You might need to <strong>convert hex to lowercase</strong> or uppercase for several reasons: <ul><li>Code style compliance (many languages have style guides that specify case)</li><li>System requirements (some APIs or protocols require specific case formatting)</li><li>Readability preferences (uppercase can be more visible in documentation)</li><li>Consistent data processing (when comparing or analyzing hex values)</li></ul> Our tool makes these conversions simple and efficient.',
        
        q4: 'How can I convert hex to long in Java using this tool?',
        a4: 'To <strong>convert hex to long Java</strong> format, you would first use our tool to ensure your hex string is properly formatted (typically with a 0x prefix and lowercase letters for Java conventions). After copying the result, you can parse it in Java using <code>Long.parseLong(hexString.substring(2), 16)</code> for 0x-prefixed strings or <code>Long.parseLong(hexString, 16)</code> for strings without prefixes. Our tool helps ensure your hex string is properly formatted before Java processing.',
        
        q5: 'Can I convert multiple hex values at once?',
        a5: 'Yes, you can process multiple hexadecimal values at once by entering them in the input field with appropriate separators. If you need to <strong>convert lowercase text to uppercase in Excel</strong> containing many hex values, you could copy an entire column, convert it here, and paste the results back. The tool will apply your selected formatting (case, prefix, separator, and grouping) to all valid hex characters in your input.'
      },
      
      resources: {
        title: 'Additional Resources',
        resource1: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#hexadecimal_numbers" target="_blank" rel="noopener noreferrer">Mozilla Developer Network: Hexadecimal Numbers in JavaScript</a> - Learn about hexadecimal number representation in JavaScript.',
        resource2: '<a href="https://en.wikipedia.org/wiki/Hexadecimal" target="_blank" rel="noopener noreferrer">Wikipedia: Hexadecimal Notation</a> - Comprehensive background on the hexadecimal number system and its applications.',
        resource3: '<a href="https://www.ietf.org/rfc/rfc5952.txt" target="_blank" rel="noopener noreferrer">IETF RFC 5952</a> - Recommendations for IPv6 address text representation, including lowercase hexadecimal usage.'
      },
      
      conclusion: {
        title: 'Conclusion',
        content: 'Our <strong>Hexadecimal Case Converter</strong> provides a versatile solution for all your hex formatting needs. Whether you need to <strong>convert hex to lowercase</strong>, apply specific prefixes, or format strings with custom separators and grouping, this tool streamlines the process. The debate of <strong>hexadecimal lowercase vs uppercase</strong> continues in various technical fields, but with our converter, you can instantly adapt to any required format. From developers needing to <strong>convert hex to long Java</strong> format to network engineers formatting MAC addresses or web designers standardizing color codes, this tool offers precision and flexibility for every use case.'
      }
    }
  };