export default {
  name: 'Password Strength Checker',
  description: 'Check and analyze password strength with detailed security metrics',
  input: {
    title: 'Enter Password',
    placeholder: 'Type or paste your password',
    showPassword: 'Show Password',
    hidePassword: 'Hide Password',
    clear: 'Clear',
    generate: 'Generate Password',
    check: 'Check Strength',
    empty: 'Enter a password to check',
    disclaimer: 'Enter any password to assess its security strength. Your password will not be stored or sent to any server.'
  },
  results: {
    title: 'Password Analysis',
    strength: 'Strength',
    score: 'Score',
    entropy: 'Entropy',
    crackTime: 'Estimated Crack Time',
    very_weak: 'Very Weak',
    weak: 'Weak',
    fair: 'Fair',
    good: 'Good',
    strong: 'Strong',
    very_strong: 'Very Strong',
    feedback: 'Feedback',
    suggestions: 'Improvement Suggestions',
    warnings: 'Detected Issues',
    noWarnings: 'No warnings detected',
    noSuggestions: 'No suggestions available'
  },
  details: {
    title: 'Detailed Analysis',
    length: 'Password Length',
    charset: 'Character Diversity',
    patterns: 'Patterns Used',
    uniqueChars: 'Unique Characters',
    uppercase: 'Uppercase Letters',
    lowercase: 'Lowercase Letters',
    numbers: 'Numbers',
    symbols: 'Symbols',
    repetitions: 'Repetitions',
    sequences: 'Sequences',
    dictionary: 'Dictionary Words',
    leaked: 'Previously Exposed',
    reused: 'Reused Pattern'
  },
  patterns: {
    dictionary: 'Dictionary word',
    sequence: 'Sequential characters',
    repeat: 'Repeated characters',
    spatial: 'Spatial pattern (keyboard)',
    date: 'Date pattern',
    year: 'Year pattern',
    common: 'Common password',
    name: 'Name pattern',
    reversal: 'Reversed word',
    leet: 'Leetspeak substitution',
    predictable: 'Predictable pattern'
  },
  crackTimes: {
    instantly: 'Instantly',
    seconds: 'In seconds',
    minutes: 'In minutes',
    hours: 'In hours',
    days: 'In days',
    months: 'In months',
    years: 'In years',
    centuries: 'In centuries',
    forever: 'Practically forever'
  },
  suggestions: {
    addWords: 'Add more words or characters',
    addSymbols: 'Include symbols',
    addNumbers: 'Include numbers',
    upperLower: 'Mix uppercase and lowercase',
    avoidPatterns: 'Avoid keyboard patterns and repeated characters',
    avoidCommon: 'Avoid dictionary-based or common passwords, even if you substitute letters with numbers (e.g., "e" with "3")',
    avoidPersonal: 'Avoid personal information',
    avoidDictionary: 'Avoid dictionary words',
    usePassphrase: 'Consider using a phrase, unrelated word combinations, or acronyms to create a stronger password that is easier to remember',
    increaseLonger: 'Make your password longer',
    avoidSequence: 'Avoid sequential patterns',
    avoidRepeated: 'Avoid repeated characters',
    avoidDates: 'Avoid dates and years',
    addMoreChars: 'Increase password length to at least 12 characters. Each additional character exponentially increases difficulty to crack',
    addTypes: 'Add {types} to increase password complexity',
    useManager: 'Use a password manager to generate and manage strong passwords, using different passwords for each site'
  },
  generator: {
    title: 'Password Generator',
    length: 'Length',
    options: 'Options',
    uppercase: 'Include Uppercase Letters',
    lowercase: 'Include Lowercase Letters',
    numbers: 'Include Numbers',
    symbols: 'Include Symbols',
    excludeSimilar: 'Exclude Similar Characters',
    excludeAmbiguous: 'Exclude Ambiguous Characters',
    generate: 'Generate Password',
    passphrase: 'Generate Passphrase',
    wordCount: 'Number of Words',
    separator: 'Word Separator',
    capitalize: 'Capitalize Words',
    includeNumber: 'Include a Number',
    includeSymbol: 'Include a Symbol'
  },
  common: {
    copy: 'Copy to Clipboard',
    save: 'Save to History',
    clear: 'Clear',
    refresh: 'Refresh',
    copied: 'Copied to clipboard',
    saved: 'Saved to history',
    history: 'History',
    noHistory: 'No history available',
    common: 'common'
  },
  breach: {
    title: 'Data Breach Check',
    description: 'Check if your password has appeared in known data breaches',
    disclaimer: 'Your password is never sent over the network. Only a partial hash is checked.',
    checkButton: 'Check for Breaches',
    safe: 'Not found in known breaches',
    found: 'Found in {count} data breaches!',
    warning: 'This password has been exposed in data breaches and should never be used.',
    checking: 'Checking breaches...'
  },
  settings: {
    title: 'Settings',
    algorithm: 'Strength Algorithm',
    history: 'Save History',
    clearHistory: 'Clear History',
    breachCheck: 'Check for Breaches',
    timeout: 'Clear after Timeout',
    timeoutDuration: 'Timeout Duration (seconds)',
    clipboard: 'Clear Clipboard after Copy',
    language: 'Language'
  },
  score: {
    none: 'Not Rated'
  },
  descriptions: {
    none: 'Unable to assess password strength',
    veryWeak: 'This password is very easy to guess or crack, extremely insecure.',
    weak: 'This password has low security and may be easily cracked.',
    fair: 'This password has some security but still has room for improvement.',
    good: 'This is a relatively secure password that is difficult to crack.',
    veryStrong: 'This is a very secure password that is almost impossible to crack.'
  },
  length: {
    none: 'None',
    tooShort: 'Too Short',
    acceptable: 'Acceptable',
    good: 'Good',
    excellent: 'Excellent'
  },
  lengthMessage: {
    none: 'No password entered',
    needMore: 'At least {min} characters needed',
    better: '{min} or more characters would be more secure',
    good: 'Great! Longer passwords are harder to crack',
    excellent: 'Excellent length!'
  },
  complexity: {
    none: 'None',
    veryLow: 'Very Low',
    fair: 'Fair',
    good: 'Good',
    excellent: 'Excellent'
  },
  issues: {
    tooShort: 'Password is too short (less than 8 characters)',
    noUppercase: 'No uppercase letters',
    noLowercase: 'No lowercase letters',
    noNumbers: 'No numbers',
    noSymbols: 'No special symbols',
    hasSequence: 'Contains common keyboard sequences (e.g., "qwerty" or "123456")',
    hasRepeated: 'Contains repeated characters (e.g., "aaa" or "111")',
    commonPassword: 'Uses a common or easily guessable password'
  },
  characters: 'characters',
  tips: {
    title: 'Password Security Tips',
    length: 'Use passwords with at least 12 characters',
    mix: 'Mix uppercase, lowercase, numbers, and special symbols',
    avoid: 'Avoid common words, phrases, or personal information',
    unique: 'Don\'t use the same password across multiple sites',
    manager: 'Consider using a password manager to generate and store complex passwords'
  },
  article: {
    title: "Password Strength Checker: Evaluate and Enhance Your Online Security",
    features: {
      title: "Understanding Password Security Assessment",
      description: "The <strong>Password Strength Checker</strong> is a comprehensive <strong>security evaluation tool</strong> designed to analyze and rate the effectiveness of your passwords against potential threats. This <strong>password analyzer</strong> examines multiple factors that determine password security, including length, character diversity, potential patterns, and similarity to commonly used passwords.<br><br>Our <strong>password security tester</strong> provides detailed feedback on your password's strengths and weaknesses, offering a complete breakdown of what makes it secure or vulnerable. The tool generates a security score and color-coded rating, along with specific improvement suggestions tailored to your password's characteristics. As a <strong>password vulnerability detector</strong>, it helps identify potential security issues without ever storing or transmitting your password, ensuring complete privacy during the assessment process.",
      useCases: {
        title: "Practical Applications for Password Security Testing",
        items: [
          "<strong>Account Creation</strong>: When setting up new online accounts, use the <strong>password safety checker</strong> to ensure you're creating credentials that meet modern security standards before finalizing your registration",
          "<strong>Security Audits</strong>: Periodically review and test your existing passwords across different accounts to identify and prioritize which ones need strengthening as part of your personal <strong>cybersecurity assessment</strong>",
          "<strong>Password Policy Development</strong>: Organizations can use the tool to demonstrate effective password guidelines to employees and test compliance with security standards as part of their <strong>information security protocols</strong>",
          "<strong>Educational Demonstrations</strong>: Teachers, parents, and security professionals can use the visual feedback to show others the concrete difference between weak and strong passwords for <strong>security awareness training</strong>",
          "<strong>Post-Breach Verification</strong>: After news of data breaches, quickly verify whether your current passwords meet security best practices or need immediate updating as a <strong>preventative security measure</strong>",
          "<strong>Password Manager Transition</strong>: When moving to a password manager, evaluate your existing passwords to determine which ones should be regenerated with stronger alternatives during the <strong>digital security upgrade</strong> process"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about Password Security",
      items: [
        {
          question: "Is my password safe when I use this tool?",
          answer: "Yes, your password is completely safe when using our password security analyzer. The tool processes your password entirely within your browser – it never transmits your password over the internet or stores it on any server. This client-side processing means your password never leaves your device during the strength check. The tool uses local JavaScript algorithms to evaluate complexity, identify patterns, and calculate scores without external processing. This zero-transmission approach to password checking provides maximum security while still delivering comprehensive password strength assessment. You can verify this behavior by using the tool while disconnected from the internet, as it will continue to function normally."
        },
        {
          question: "What makes a password truly strong?",
          answer: "A truly strong password combines multiple security factors that our password security tester evaluates. The most important elements include: sufficient length (at least 12-14 characters), complexity through character diversity (uppercase letters, lowercase letters, numbers, and special symbols), unpredictability (avoiding common words, phrases, or patterns), uniqueness (not reused across multiple sites), and resistance to automated attacks. The strongest passwords avoid personal information, dictionary words, and predictable substitutions (like '3' for 'e'). Our password evaluation tool recommends using randomly generated passwords or passphrases that combine multiple unrelated words with numbers and symbols. Remember that length generally contributes more to password strength than complexity alone."
        },
        {
          question: "Why does the tool flag my password as weak when it looks complex?",
          answer: "The password vulnerability detector may flag seemingly complex passwords as weak for several subtle reasons that affect security. Common issues include: relying on predictable patterns (like keyboard sequences 'qwerty' or repeating characters), using known password variations that appear in data breach databases, incorporating easily guessable personal information, or following common substitution patterns (like 'pssw0rd') that password cracking tools specifically target. Modern password analysis looks beyond simple character types to evaluate real-world vulnerability. Advanced password security testing considers factors like entropy (randomness), dictionary-based attacks, and pattern recognition that sophisticated cracking tools use. Even passwords with special characters can be vulnerable if they follow predictable patterns."
        },
        {
          question: "How often should I check and update my passwords?",
          answer: "You should use a password strength evaluator to check your critical passwords at least every 3-6 months and update them accordingly. Additionally, immediate password verification and changes are recommended in specific situations: after any news of a data breach affecting services you use, when sharing a password becomes necessary (requiring a new one afterward), if you've logged in on a public or potentially compromised device, when you suspect unauthorized access to any account, or when major life changes occur (new job, moving). Implementing a security assessment schedule for different password categories (financial, email, social media) helps prioritize your most sensitive accounts. Remember that the strongest passwords are useless if they've been compromised in data breaches."
        },
        {
          question: "What's better: a complex short password or a simple long one?",
          answer: "A simple long password is generally more secure than a complex short one, as our password safety checker will demonstrate. Length provides exponentially more security benefit than complexity alone. For example, a 16-character password using only lowercase letters (like 'fourwordsallowercase') is mathematically more difficult to crack through brute force methods than an 8-character password with mixed character types (like 'Ps$w0rd'). This is because each additional character multiplies the total possible combinations a hacker must try. However, the ideal approach shown by comprehensive password analysis combines both significant length (16+ characters) with moderate complexity (varied character types). For maximum security, the password evaluation tool recommends random passphrases that incorporate multiple unrelated words with some numbers or symbols mixed in."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the Password Strength Checker",
      steps: [
        "Enter your existing or proposed <strong>password</strong> in the secure input field. The tool's privacy-focused design ensures your password is never transmitted or stored during the security analysis process",
        "Review the overall <strong>strength score</strong> displayed on the colored meter, which provides an immediate visual indication of your password's security level from very weak (red) to very strong (green)",
        "Examine the <strong>detailed analysis</strong> section to understand specific aspects of your password's strength, including length assessment and character diversity metrics that impact your overall security rating",
        "Pay attention to any <strong>detected issues</strong> highlighted in the warnings section, which identifies specific vulnerabilities like common patterns, repeated characters, or dictionary-based components",
        "Read through the <strong>improvement suggestions</strong> tailored to your password's weaknesses, offering specific actionable advice on how to strengthen your password against various attack methods",
        "Apply the recommended changes to create a stronger password, then <strong>test again</strong> to verify the improvements and continue refining until you achieve a satisfactory security rating"
      ]
    },
    conclusion: "The Password Strength Checker serves as an essential security tool in today's digital landscape where data breaches and password attacks continue to rise. By providing detailed analysis of password vulnerabilities and specific improvement recommendations, it empowers users to take control of their online security. Remember that strong passwords represent your first line of defense against unauthorized access—they should be unique for each important account, sufficiently complex, and regularly updated. For maximum security, consider using this tool alongside a reputable password manager that can generate and store highly secure, unique passwords for all your accounts. Taking the time to evaluate and strengthen your passwords now can save you from the significant complications of compromised accounts in the future."
  }
} 