export default {
  name: 'Word Shuffler',
  description: 'Randomly shuffle words, sentences, or lines in your text while maintaining formatting',
  inputLabel: 'Enter Text',
  inputPlaceholder: 'Enter or paste your text here to shuffle...',
  outputLabel: 'Shuffled Result',
  shuffleMode: 'Shuffle Mode',

  modes: {
    word: 'Words',
    sentence: 'Sentences',
    line: 'Lines',
    character: 'Characters',
    paragraph: 'Paragraphs'
  },

  preserveOptions: 'Preserve Options',
  preserveCapitalization: 'Preserve Capitalization',
  preservePunctuation: 'Preserve Punctuation',
  shuffleButton: 'Shuffle Text',
  copyButton: 'Copy Result',
  clearButton: 'Clear All',
  copiedMessage: 'Copied to clipboard!',
  tagline: 'The World\'s Most Advanced Text Randomizer',
  wordCount: 'words',
  importButton: 'Import File',
  clearInputButton: 'Clear Input',
  clearOutputButton: 'Clear Output',
  downloadButton: 'Download',
  useExampleButton: 'Use Example',
  advancedOptions: 'Advanced Options',
  delimiterOptions: 'Delimiter Options',
  wordDelimiters: 'Word Delimiters',
  wordDelimitersHint: 'Characters that separate words',
  sentenceDelimiters: 'Sentence Delimiters',
  sentenceDelimitersHint: 'Characters that end sentences',
  additionalOptions: 'Additional Options',
  repeatCount: 'Repeat Count',
  repeatCountHint: 'Generate multiple shuffled versions',
  shuffleGroup: 'Shuffle Group Size',
  shuffleGroupHint: 'Shuffle words in groups of this size',
  removeRepeatedWords: 'Remove Repeated Words',
  preserveSpacing: 'Preserve Spacing',
  examplesTitle: 'Examples',
  useThisExample: 'Use This Example',
  helpTitle: 'Help & Information',
  whatIsTitle: 'What is a Word Shuffler?',
  whatIsDescription: 'A Word Shuffler is a tool that randomizes the order of words, sentences, lines, characters, or paragraphs in text. It uses a sophisticated algorithm to ensure truly random results while preserving your chosen formatting options like capitalization and punctuation.',
  howToUseTitle: 'How to Use This Tool',
  tipsTitle: 'Tips for Best Results',
  stepLabel: 'Step',

  examples: {
    basic: {
      title: "Basic Word Shuffle",
      description: "Simple randomization of words while keeping punctuation and capitalization",
      input: "The quick brown fox jumps over the lazy dog. All five boxing wizards jump quickly.",
      output: "The brown quick dog jumps fox lazy the over. Boxing wizards jump five quickly all."
    },
    sentence: {
      title: "Sentence Shuffling",
      description: "Randomize the order of complete sentences",
      input: "First sentence goes here. This is the second one. And here comes the third. Finally, we have the fourth sentence.",
      output: "And here comes the third. First sentence goes here. Finally, we have the fourth sentence. This is the second one."
    },
    creative: {
      title: "Creative Remix",
      description: "Generate new creative text by shuffling words without formatting constraints",
      input: "Poetry is the rhythmical creation of beauty in words. It is the revelation of a feeling that the poet believes to be interior and personal but which the reader recognizes as their own.",
      output: "beauty rhythmical is words poet revelation but reader personal to interior which own creation it as their poetry feeling believes the of recognizes the in that the and a be."
    }
  },

  howToUseSteps: [
    "Enter or paste your text into the input field on the left.",
    "Choose your desired shuffle mode and options below.",
    "Click the \"Shuffle Text\" button to generate randomized text.",
    "The result will appear in the output field on the right.",
    "Use the copy or download buttons to save your results."
  ],

  tips: [
    "For creative writing exercises, try word mode with capitalization preserved but punctuation removed.",
    "For testing layouts, use sentence mode with all preservation options enabled to maintain readable but random text.",
    "Use character mode for creating secure passwords or codes from text input.",
    "The group shuffle feature allows you to keep related words together while still randomizing the overall text.",
    "Need multiple variations? Set the repeat count to generate multiple shuffled versions in one go."
  ],

  downloadFileName: 'shuffled_text.txt',

  errorMessages: {
    shuffleError: 'Shuffle processing error:',
    sentenceError: 'Sentence shuffle error:',
    copyError: 'Error copying text:'
  }
};
