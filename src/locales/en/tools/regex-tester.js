export default {
  name: 'Regular Expression Tester',
  description: 'Test and debug regular expressions with real-time highlighting and explanation',
  actions: {
    test: 'Test',
    clear: 'Clear',
    showExamples: 'Show Examples',
    hideExamples: 'Hide Examples',
    copy: 'Copy'
  },
  sections: {
    examples: 'Common Regular Expression Examples',
    pattern: 'Regular Expression Pattern',
    input: 'Test String',
    results: 'Match Results',
    flags: 'Flags'
  },
  flags: {
    g: 'Global match (g)',
    i: 'Case-insensitive (i)',
    m: 'Multiline (m)',
    s: 'Dot all (s)',
    u: 'Unicode (u)',
    y: 'Sticky (y)'
  },
  errors: {
    emptyRegex: 'Please enter a regular expression',
    emptyTestString: 'Please enter a test string',
    invalidRegex: 'Invalid regular expression'
  },
  messages: {
    matchesFound: '{count} matches found',
    noMatches: 'No matches found',
    copied: 'Copied to clipboard!'
  },
  placeholders: {
    pattern: 'Enter regular expression pattern',
    testString: 'Enter text to test against the pattern'
  },
  tips: {
    title: 'Usage Tips',
    pattern: 'Enter your regular expression pattern without the surrounding slashes.',
    flags: 'Use flags to modify pattern matching behavior (g: global, i: case-insensitive, m: multiline).',
    examples: 'Click "Show Examples" to see and use common regex patterns.',
    testing: 'After entering your pattern and test string, click "Test" to see matches.'
  },
  article: {
    title: "Regular Expression Tester: Interactive Tool for Pattern Matching",
    features: {
      title: "Understanding Regular Expressions and Pattern Matching",
      description: "The <strong>Regular Expression Tester</strong> is a powerful interactive tool designed to help developers, data analysts, and text processing professionals create, test, and debug regular expressions (regex). Regular expressions are specialized sequences of characters that define search patterns, allowing for complex text matching, extraction, and manipulation operations.<br><br>Our <strong>regex testing tool</strong> provides real-time visual feedback as you build your patterns, instantly highlighting matches in your test text and displaying detailed information about capture groups and match positions. This immediate feedback loop makes it significantly easier to understand how your regex patterns interact with different text inputs, helping you quickly identify and fix issues in your expressions.",
      useCases: {
        title: "Practical Applications for Regular Expressions",
        items: [
          "<strong>Form Validation</strong>: Web developers can use this <strong>regex pattern tester</strong> to fine-tune expressions used for validating email addresses, phone numbers, passwords, and other input fields. By testing against various valid and invalid examples, you can ensure your validation logic catches incorrect formats while accepting all valid entries.",
          
          "<strong>Data Extraction</strong>: When working with unstructured text data, regular expressions provide a powerful way to extract specific information. Our <strong>pattern matching tool</strong> helps data analysts develop expressions to pull out dates, prices, product codes, or other structured data from text documents, logs, or web scraping results.",
          
          "<strong>Text Processing and Manipulation</strong>: Content editors and developers can use regex patterns to find and replace specific text patterns across multiple documents. The <strong>regex validator</strong> makes it easy to verify that your search patterns will match exactly what you intend to change without affecting other content.",
          
          "<strong>Log File Analysis</strong>: System administrators and DevOps engineers frequently use regular expressions to parse and analyze log files. This <strong>expression tester</strong> helps build patterns that accurately identify error messages, warnings, or specific events within large volumes of log data.",
          
          "<strong>Search Query Development</strong>: When building advanced search functionality, regular expressions can power sophisticated text matching. Our tool helps developers test and refine regex patterns used in search engines, code editors, or database queries to ensure precise results.",
          
          "<strong>Educational Purposes</strong>: Students and professionals learning regular expressions can use this <strong>interactive regex tool</strong> to experiment with different patterns and immediately see the results, accelerating the learning process and helping build intuition for how different regex components work."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions About Regular Expressions",
      items: [
        {
          question: "What are regular expressions and why are they useful?",
          answer: "Regular expressions (regex or regexp) are special text strings that define search patterns. They're essentially a tiny, highly specialized programming language embedded within many programming languages and tools.<br><br>Regular expressions are extremely useful because they allow you to:<br><br>• <strong>Search for specific patterns</strong> in text rather than exact string matches<br>• <strong>Validate text formats</strong> like email addresses, phone numbers, or dates<br>• <strong>Extract specific portions</strong> of text from larger documents<br>• <strong>Replace or modify text</strong> based on pattern matches<br>• <strong>Split text</strong> at specific pattern boundaries<br><br>Their power comes from combining simple pattern building blocks into complex expressions that can identify very specific text structures. Our <strong>regex pattern tester</strong> helps you harness this power while avoiding the frustration of debugging complex expressions."
        },
        {
          question: "What do the different regex flags (g, i, m, s, u, y) mean?",
          answer: "Regex flags modify how the pattern matching behaves:<br><br>• <strong>g (global)</strong>: Finds all matches rather than stopping after the first match. Without this flag, regex will return only the first occurrence.<br><br>• <strong>i (case-insensitive)</strong>: Makes the pattern match both uppercase and lowercase letters. For example, /hello/i will match 'hello', 'Hello', 'HELLO', etc.<br><br>• <strong>m (multiline)</strong>: Changes the behavior of ^ and $ to match the start/end of each line rather than just the start/end of the entire string.<br><br>• <strong>s (dotall)</strong>: Makes the dot (.) match newline characters (\\n) as well. Normally, the dot matches any character except newlines.<br><br>• <strong>u (unicode)</strong>: Treats the pattern as a sequence of Unicode code points. Enables proper matching of Unicode characters and properties.<br><br>• <strong>y (sticky)</strong>: Matches only from the position indicated by the lastIndex property of the regex object (advanced usage).<br><br>In our <strong>regex testing tool</strong>, you can toggle these flags to see how they affect your pattern matching behavior."
        },
        {
          question: "How do capturing groups work in regular expressions?",
          answer: "Capturing groups allow you to extract specific portions of the matched text and are defined by parentheses () in your pattern.<br><br>For example, in the pattern <code>([A-Z]\\w+) (\\d{4})</code>:<br><br>• The first group <code>([A-Z]\\w+)</code> captures a word starting with a capital letter<br>• The second group <code>(\\d{4})</code> captures a 4-digit number<br><br>When a match is found, the complete match is available along with each captured group separately. In our <strong>regex validator</strong>, capturing groups appear in the match details section, showing exactly what text was captured by each group.<br><br>Capturing groups can also be referenced within the pattern itself using backreferences (\\1, \\2, etc.) and are extremely useful for complex search and replace operations or when you need to extract specific information from a larger text."
        },
        {
          question: "What are some common patterns used in regular expressions?",
          answer: "Regular expressions use various special characters and sequences to define patterns:<br><br>• <strong>Character classes</strong>: <code>[abc]</code> matches any single 'a', 'b', or 'c' character<br>• <strong>Ranges</strong>: <code>[a-z]</code> matches any lowercase letter<br>• <strong>Predefined classes</strong>: <code>\\d</code> matches digits, <code>\\w</code> matches word characters, <code>\\s</code> matches whitespace<br>• <strong>Negated classes</strong>: <code>[^abc]</code> or <code>\\D</code> match any character EXCEPT those specified<br>• <strong>Quantifiers</strong>: <code>*</code> (0 or more), <code>+</code> (1 or more), <code>?</code> (0 or 1), <code>{n,m}</code> (between n and m)<br>• <strong>Anchors</strong>: <code>^</code> (start of line), <code>$</code> (end of line), <code>\\b</code> (word boundary)<br><br>Common practical patterns include:<br><br>• Email: <code>[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}</code><br>• URL: <code>https?://[\\w.-]+\\.[\\w]{2,}</code><br>• US Phone: <code>(\\d{3})[-.\\s]?(\\d{3})[-.\\s]?(\\d{4})</code><br><br>Our <strong>regex testing tool</strong> includes many of these common patterns as examples you can start with and customize."
        },
        {
          question: "Why isn't my regular expression matching as expected?",
          answer: "Regular expression debugging can be challenging. Here are common issues and solutions:<br><br>1. <strong>Special characters</strong>: Characters like <code>. * + ? ^ $ ( ) [ ] { } | \\ /</code> have special meanings in regex. To match these literally, escape them with a backslash (\\).<br><br>2. <strong>Greediness</strong>: Quantifiers like <code>*</code> and <code>+</code> are greedy by default, matching as much as possible. Add <code>?</code> after them (<code>*?</code> or <code>+?</code>) to make them non-greedy.<br><br>3. <strong>Missing flags</strong>: Check if you need the global flag (g) to find all matches, or case-insensitive flag (i) for case-independent matching.<br><br>4. <strong>Whitespace and invisible characters</strong>: Be careful of spaces, tabs, newlines, and other invisible characters that might be in your test string.<br><br>5. <strong>Anchors misuse</strong>: <code>^</code> and <code>$</code> anchor the pattern to the start and end of the text (or line with the 'm' flag).<br><br>Our <strong>pattern matching tool</strong> helps identify these issues by providing real-time visual feedback, highlighting matches, and showing detailed match information."
        }
      ]
    },
    guide: {
      title: "How to Use the Regular Expression Tester: Step-by-Step Guide",
      step1: "<strong>Enter your regular expression pattern</strong>: Type your regex pattern in the input field marked 'Regular Expression'. You don't need to include the surrounding slashes - these are added automatically in the UI. For example, to match email addresses, you might enter <code>[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}</code>.",
      step2: "<strong>Select appropriate flags</strong>: Choose the flags that modify how your pattern works. Common choices include 'g' (global) to find all matches instead of just the first one, 'i' (case-insensitive) to ignore case differences, and 'm' (multiline) if you're working with text that spans multiple lines.",
      step3: "<strong>Enter test text</strong>: In the 'Test String' area, input the text you want to test your regular expression against. This could be sample data, example text that contains patterns you want to match, or problematic text that isn't matching as expected.",
      step4: "<strong>Click the 'Test' button</strong>: After setting up your pattern and test text, click the 'Test' button to see the results. The tool will process your regex pattern against the test text and display all matches it finds.",
      step5: "<strong>Analyze the match results</strong>: The results section will highlight all matches found in your test text, making it easy to visually confirm that your pattern is matching what you expect. For each match, you'll see details including the exact matched text, the position in the string where it was found, and any captured groups.",
      step6: "<strong>Refine your pattern</strong>: Based on the results, you may need to adjust your pattern. If it's matching too much or too little text, or not finding matches where expected, modify your regex pattern and test again. This iterative process helps you zero in on exactly the right pattern for your needs.",
      step7: "<strong>Explore example patterns</strong>: If you're stuck or need inspiration, click the 'Show Examples' button to see common regex patterns for emails, phone numbers, dates, and more. You can click on any example to load it into the tester, then modify it to fit your specific requirements."
    },
    conclusion: "The Regular Expression Tester simplifies the often complex process of creating and debugging regex patterns by providing immediate visual feedback on your expressions. By highlighting matches in real-time and breaking down the components of each match, it bridges the gap between abstract pattern syntax and practical text processing applications. Whether you're validating user input, extracting data from documents, or learning regex for the first time, this interactive tool helps you build confidence and proficiency with regular expressions. As text processing continues to be a fundamental task in development, data analysis, and content management, mastering regex with the help of visual tools becomes an increasingly valuable skill for technical professionals."
  }
} 