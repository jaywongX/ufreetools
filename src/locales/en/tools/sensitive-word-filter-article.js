export default {
  title: 'Sensitive Word Filter: Comprehensive Text Content Filtering Tool',
  functionality: {
    title: 'Tool Functionality and Features',
    description: 'The <strong>Sensitive Word Filter</strong> is a powerful text processing tool designed to identify and filter out sensitive, inappropriate, or offensive content from your text. It uses advanced pattern matching algorithms to detect potentially problematic words and phrases, then automatically replaces or removes them according to your preferences. This text filtering tool supports custom dictionaries, multiple filtering modes, and provides detailed statistical analysis of detected sensitive content.'
  },
  useCases: {
    title: 'Practical Applications and Usage Scenarios',
    list: [
      '<strong>Content Moderation for Websites</strong>: Automatically screen user-generated content like comments, forum posts, and reviews to maintain a safe and respectful online environment.',
      '<strong>Educational Materials Review</strong>: Ensure teaching materials and student submissions are free from inappropriate language for classroom or educational platforms.',
      '<strong>Customer Service Content Screening</strong>: Filter outgoing communications to verify they maintain professional standards and avoid potentially offensive language.',
      '<strong>Social Media Management</strong>: Review and clean up content before publishing on social media platforms to prevent policy violations.',
      '<strong>Text Data Preparation</strong>: Clean text datasets for machine learning and analysis by removing offensive or biased language.',
      '<strong>Corporate Communication Compliance</strong>: Verify internal and external communications adhere to corporate language policies and professional standards.'
    ]
  },
  faq: {
    title: 'Frequently Asked Questions about Sensitive Word Filtering',
    items: [
      {
        question: 'How accurate is the sensitive word detection?',
        answer: 'The <strong>sensitive word detection</strong> system employs precise pattern matching algorithms with very high accuracy. However, context-aware filtering (understanding the meaning behind words) remains challenging. The tool allows you to review detected words and customize the dictionary to improve accuracy for your specific needs.'
      },
      {
        question: 'Can I create and save my own custom word libraries?',
        answer: 'Yes, the <strong>custom word library</strong> feature allows you to add your own sensitive words that are specific to your content needs. You can easily add words to the filter, and they will be applied during the filtering process.'
      },
      {
        question: 'What filtering modes are available?',
        answer: 'The tool offers multiple <strong>text filtering modes</strong>: replacing sensitive words with asterisks (*), using custom replacement characters, or completely removing the sensitive words from the text. You can select the mode that best suits your requirements.'
      },
      {
        question: 'Will this tool work with different languages?',
        answer: 'Yes, the <strong>multilingual sensitive word filter</strong> works with various languages, though its effectiveness may vary depending on the language. The tool primarily focuses on character pattern matching, which works across different writing systems.'
      },
      {
        question: 'How can I process large amounts of text?',
        answer: 'For <strong>bulk text filtering</strong>, simply paste your content into the input area. The tool is optimized to handle large text volumes efficiently, though extremely large texts may take more processing time. For very large documents, consider processing them in sections.'
      }
    ]
  },
  tutorial: {
    title: 'Step-by-Step Guide to Using the Sensitive Word Filter',
    steps: [
      '<strong>Input your text</strong>: Start by entering or pasting the text you want to filter in the input text area.',
      '<strong>Configure filter options</strong>: Select your preferred filtering mode (replace with asterisks, custom character, or remove words).',
      '<strong>Customize your sensitive word library</strong> (optional): Add specific words you want to detect and filter by clicking the "Add Word" button.',
      '<strong>Start filtering</strong>: Click the "Start Filtering" button to process your text and detect sensitive content.',
      '<strong>Review the results</strong>: Examine the filtered text in the "Filtered Result" tab and check the statistical breakdown in the "Detection Report" tab.',
      '<strong>Copy or save results</strong>: Copy the filtered text to your clipboard for use in your applications or documents.'
    ]
  }
}
