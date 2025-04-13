export default {
  name: 'Password Generator',
  description: 'Generate secure, random passwords with customizable options',
  options: {
    length: 'Password Length',
    quantity: 'Number of Passwords',
    includeLowercase: 'Lowercase Letters (a-z)',
    includeUppercase: 'Uppercase Letters (A-Z)',
    includeNumbers: 'Numbers (0-9)',
    includeSymbols: 'Symbols (!@#$%)',
    excludeSimilar: 'Exclude Similar Characters (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: 'Exclude Ambiguous Symbols ({}<>[]()\'"`\\)',
    requireAll: 'Require All Character Types',
    noConsecutive: 'No Consecutive Similar Characters',
    advancedOptions: 'Advanced Options',
    characterTypes: 'Character Types'
  },
  presets: {
    standard: 'Standard',
    strong: 'Strong',
    memorable: 'Memorable',
    pin: 'PIN',
    pronounceable: 'Pronounceable',
    custom: 'Custom',
    easyToRemember: 'Easy to Remember',
    balanced: 'Balanced',
    secure: 'Secure'
  },
  strength: {
    title: 'Password Strength',
    veryWeak: 'Very Weak',
    weak: 'Weak', 
    medium: 'Medium',
    strong: 'Strong',
    veryStrong: 'Very Strong',
    unknown: 'Unknown'
  },
  actions: {
    generate: 'Generate Passwords',
    regenerate: 'Regenerate',
    copy: 'Copy',
    copyAll: 'Copy All',
    clear: 'Clear',
    expand: 'Expand',
    collapse: 'Collapse'
  },
  messages: {
    copied: 'Copied to clipboard!',
    allCopied: 'All passwords copied to clipboard!',
    generated: 'Passwords generated successfully',
    invalidOptions: 'Please select at least one character type',
    tooManyPasswords: 'Maximum number of passwords is 100',
    clickToGenerate: 'Click the button above to generate passwords'
  },
  errors: {
    copyFailed: 'Failed to copy password: ',
    copyFailedManual: 'Copy failed, please copy manually'
  },
  results: {
    title: 'Generated Passwords'
  },
  units: {
    passwords: 'passwords'
  },
  tips: {
    title: 'Password Security Tips',
    useLength: 'Use passwords with at least 12 characters for better security',
    useDifferent: 'Use a different password for each website or service',
    changeRegularly: 'Change passwords for important accounts regularly',
    useManager: 'Consider using a password manager to securely store complex passwords',
    use2FA: 'Enable two-factor authentication for additional protection'
  },
  article: {
    title: "Password Generator Tool Guide: Create Strong, Secure Passwords",
    features: {
      title: "Understanding the Password Generator Tool",
      description: "Our <strong>password generator</strong> is a powerful security tool designed to create random, highly secure <strong>passwords</strong> that protect your accounts from unauthorized access. Unlike simple, easily guessable <strong>passwords</strong>, our tool creates complex combinations of characters that are extremely difficult to crack through brute force attacks or dictionary-based hacking attempts.<br><br>The <strong>password generator</strong> allows you to customize the length, character types, and complexity level of your <strong>passwords</strong>, ensuring they meet specific security requirements for different platforms and services.",
      useCases: {
        title: "Common Use Cases for Password Generator",
        items: [
          "Creating strong passwords for new online accounts (email, social media, banking)",
          "Generating secure passwords for Wi-Fi networks and routers",
          "Developing complex passwords for business systems and corporate accounts",
          "Creating secure passwords for encrypted files and folders",
          "Generating different passwords for multiple accounts to avoid password reuse",
          "Creating strong master passwords for password managers",
          "Generating secure API keys and access tokens for developers"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about Password Generator",
      items: [
        {
          question: "How secure are the passwords created by this generator?",
          answer: "The passwords created by our generator are extremely secure when using the recommended settings. A strong password (16+ characters with mixed character types) would take millions of years to crack using current technology. Our generator uses cryptographically secure randomization to ensure unpredictability."
        },
        {
          question: "What makes a password strong?",
          answer: "A strong password has several key characteristics: sufficient length (at least 12-16 characters), complexity (mixture of uppercase and lowercase letters, numbers, and symbols), randomness (no predictable patterns), and uniqueness (not used elsewhere). Our password generator creates passwords that meet all these criteria."
        },
        {
          question: "How often should I change my passwords?",
          answer: "Security experts now recommend changing passwords only when there's a reason to believe they've been compromised, rather than on a fixed schedule. However, for critical accounts (banking, email), changing passwords every 3-6 months is still a good practice, using a password generator each time."
        },
        {
          question: "Can I generate multiple passwords at once?",
          answer: "Yes, our password generator allows you to create multiple secure passwords simultaneously. This is particularly useful when setting up several new accounts or updating multiple existing passwords during a security audit."
        },
        {
          question: "How do I remember complex passwords?",
          answer: "The best approach is to use a password manager to securely store your generated passwords. Alternatively, for critical passwords you must memorize, consider using the 'memorable' preset which creates passwords that balance security with memorability."
        }
      ]
    },
    guide: {
      title: "How to Use the Password Generator Tool",
      steps: [
        "Select your desired password length using the slider (we recommend at least 16 characters for maximum security)",
        "Choose a password strength preset (Easy to Remember, Standard, or Strong) or select 'Custom' to manually configure options",
        "For custom settings, select which character types to include (uppercase letters, lowercase letters, numbers, symbols)",
        "Optionally expand Advanced Options to exclude similar characters or ambiguous symbols",
        "Select how many passwords you want to generate (1, 5, 10, 20, or 50)",
        "Click the 'Generate Passwords' button to create your secure passwords",
        "For each generated password, you can see its strength rating from 'Very Weak' to 'Very Strong'",
        "Click the copy icon next to any password to copy it to your clipboard, or use 'Copy All' to copy all passwords",
        "Store your generated passwords securely in a password manager or other secure location"
      ]
    },
    conclusion: "Using this password generator tool regularly will significantly enhance your online security. By creating unique, strong passwords for each of your accounts, you're taking one of the most important steps in protecting your digital identity and personal information from cyber threats. Remember that even the strongest password should be paired with additional security measures like two-factor authentication whenever possible."
  }
} 