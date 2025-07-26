export default {
  name: 'Hex AND Calculator',
  description: 'Perform bitwise AND operations on hexadecimal numbers and see the results in different formats.',

  // Input Labels
  firstNumber: 'First Hexadecimal Number',

  secondNumber: 'Second Hexadecimal Number',
  enterHex: 'Enter hexadecimal value (without 0x)',
  invalidHex: 'Invalid hexadecimal value',

  // Operation
  calculate: 'Calculate',

  // Results
  result: 'Result',

  decimal: 'Decimal',
  binary: 'Binary',
  copied: 'Copied!',

  // Explanation
  explanation: {
    title: 'How Bitwise AND Works',
    content: 'The bitwise AND operation compares each bit of the first operand to the corresponding bit of the second operand. If both bits are 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.',
    example: 'Calculation Breakdown'
  },

  // Examples
  examples: {
    title: 'Examples',
    example1: {
      description: 'Basic AND operation',
      value1: 'FF',
      value2: '0F',
      result: '0F'
    },
    example2: {
      description: 'Masking bits',
      value1: 'ABCD',
      value2: 'FF00',
      result: 'AB00'
    },
    commonMask: 'Common Mask: 0xFF & 0x0F',
    permissionCheck: 'Permission Check: 0xA5 & 0x80',
    bitClearing: 'Bit Clearing: 0xFFFF & 0xFF00',
    evenCheck: 'Even Number Check: 0x42 & 0x01'
  },

  // Documentation
  documentation: {
    title: 'Hex AND Calculator: Complete Guide',
    introduction: 'The Hex AND Calculator is a tool for performing bitwise AND operations on hexadecimal numbers, commonly used in programming and digital electronics.',
    
    whatIs: {
      title: 'What is a Bitwise AND Operation?',
      paragraph1: 'A bitwise AND is a binary operation that takes two equal-length bit patterns and performs the logical AND operation on each pair of corresponding bits. The result in each position is 1 if both bits are 1, otherwise, the result is 0.',
      paragraph2: 'This operation is fundamental in various computing scenarios, including masking operations, bit manipulation, and checking the state of specific bits.'
    },
    
    useCases: {
      title: 'Common Use Cases for Hex AND Operations',
      masks: {
        title: 'Bit Masking',
        description: 'Using AND operations to extract or isolate specific bits from a value by masking unwanted bits.'
      },
      permissions: {
        title: 'Permission Checking',
        description: 'Determining if specific permission bits are set in a permission bitfield.'
      },
      flagsCheck: {
        title: 'Flag Status Checking',
        description: 'Checking whether specific flags are set in a status register or flag variable.'
      },
      evenOdd: {
        title: 'Even/Odd Testing',
        description: 'Testing if a number is even or odd using AND with 1.'
      },
      bitClearing: {
        title: 'Bit Clearing',
        description: 'Clearing specific bits while leaving others unchanged by ANDing with a mask.'
      }
    },
    
    howToUse: {
      title: 'How to Use the Hex AND Calculator',
      step1: 'Enter the first hexadecimal number without the "0x" prefix',
      step2: 'Enter the second hexadecimal number without the "0x" prefix',
      step3: 'Click the "Calculate" button',
      step4: 'View the result in hexadecimal, decimal, and binary formats',
      step5: 'Use the copy buttons to copy any format of the result to your clipboard'
    },
    
    tips: {
      title: 'Tips for Working with Hex AND Operations',
      tip1: 'Leading zeros in the input are ignored for calculation, but the result will be padded to match the longest input',
      tip2: 'For masking operations, use FF (or sequences of F) in positions you want to keep, and 00 in positions you want to clear',
      tip3: 'To check if a specific bit is set, AND with a value that has only that bit set (e.g., AND with 0x08 to check if the 4th bit is set)',
      tip4: 'Remember that each hex digit represents 4 bits (a nibble)',
      tip5: 'When working with permissions or flags, keep a reference of what each bit represents'
    }
  },

  // New translations
  quickExamples: 'Quick Examples',

  operation: 'Operation',

  operations: {
    and: 'AND',
    or: 'OR',
    xor: 'XOR',
    not: 'NOT',
    shiftLeft: 'Shift Left (<<)',
    shiftRight: 'Shift Right (>>)'
  },

  input: 'Input Values',
  chainWith: 'Chain with...',
  importFromFile: 'Import from file',
  noResult: 'Enter values and click calculate to see the result',
  bitVisualization: 'Bit Visualization',
  inputNumbers: 'Input Hex Numbers',
  addNumber: 'Add another number',
  number: 'Number',

  // 添加到 src/locales/en/tools/hex-and-calculator.js:
  remove: 'Remove',

  removeButton: 'Remove this input',
  import: 'Import',
  importTitle: 'Import from file',
  save: 'Save',
  saveTitle: 'Save to file',
  copy: 'Copy',
  copyTitle: 'Copy all inputs',
  paste: 'Paste',
  pasteTitle: 'Paste from clipboard',
  saveResult: 'Save Result',
  saveResultTitle: 'Save result to file',
  copyResult: 'Copy Result',
  copyResultTitle: 'Copy all results',
  copyAction: 'Copy',
  importError: 'Error importing file, please ensure correct file format',
  inputsCopied: 'All inputs copied to clipboard',
  resultsCopied: 'All results copied to clipboard',
  inputs: 'Inputs'
}; 