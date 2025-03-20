export default {
  name: 'Lorem Ipsum Generator',
  description: 'Generate Lorem Ipsum placeholder text for design layouts',
  options: {
    type: 'Content Type',
    quantity: 'Quantity',
    startWithLorem: 'Start with "Lorem ipsum dolor sit amet..."',
    lengthUnit: 'Length Unit',
    language: 'Language',
    randomize: 'Randomize',
    maxCharsPerParagraph: 'Max Characters Per Paragraph'
  },
  contentTypes: {
    paragraphs: 'Paragraphs',
    sentences: 'Sentences',
    words: 'Words',
    lists: 'Lists',
    customLength: 'Custom Length'
  },
  languages: {
    latin: 'Latin (Lorem Ipsum)',
    english: 'English',
    french: 'French',
    spanish: 'Spanish',
    german: 'German',
    japanese: 'Japanese',
    chinese: 'Chinese',
    russian: 'Russian'
  },
  units: {
    words: 'Words',
    characters: 'Characters',
    bytes: 'Bytes'
  },
  actions: {
    generate: 'Generate',
    copy: 'Copy',
    clear: 'Clear',
    download: 'Download as TXT',
    html: 'Generate HTML'
  },
  messages: {
    copied: 'Copied to clipboard!',
    generated: 'Lorem Ipsum text generated',
    invalidQuantity: 'Please enter a valid quantity',
    maxExceeded: 'Maximum allowed quantity exceeded'
  }
} 