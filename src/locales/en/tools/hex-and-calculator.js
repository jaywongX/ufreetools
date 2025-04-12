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
  // 添加以下内容到现有翻译文件中
  article: {
    title: 'Hex AND Calculator: Complete Guide',
    introduction: {
      title: 'Understanding Hexadecimal AND Operations',
      content: [
        'The Hexadecimal AND Calculator is a specialized tool designed to perform bitwise AND operations on hexadecimal numbers. This operation compares each bit position in two or more hex values and produces a result where a bit is set to 1 only if all corresponding bits in the operands are 1.',
        'Bitwise AND operations are fundamental in computing, particularly when working with binary data, hardware interfaces, permission flags, and other low-level programming tasks. The hexadecimal representation makes these operations more readable and manageable for developers and hardware engineers.',
        'Our Hex AND Calculator supports multiple input values, providing a convenient way to perform AND operations across several hexadecimal numbers simultaneously. The results are displayed in hexadecimal, decimal, and binary formats, with a visual bit-by-bit representation to help understand exactly how the operation affects each bit position.'
      ]
    },
    useCases: {
      title: 'Common Applications for Hex AND Operations',
      cases: [
        {
          title: 'Permission Checking',
          description: 'Developers use AND operations to check if specific permission bits are set in access control systems. For example, AND-ing a user\'s permission value (0xA5) with a permission mask (0x80) determines if a particular permission is granted.'
        },
        {
          title: 'Hardware Register Manipulation',
          description: 'Engineers working with hardware often use AND operations to clear specific bits in control registers while leaving others unchanged. By AND-ing with a bitmask (e.g., 0xFFFF & 0xFF00), certain bits can be selectively cleared.'
        },
        {
          title: 'Bit Masking in Network Protocols',
          description: 'Network protocols frequently employ AND operations to extract specific fields from packet headers. For instance, AND-ing an IP address with a subnet mask isolates the network portion of the address.'
        },
        {
          title: 'Color Channel Extraction',
          description: 'Graphics programmers use AND operations to isolate specific color channels from hexadecimal color values. For example, 0x00FF00 & 0xFFFFFF extracts the green channel from an RGB color.'
        },
        {
          title: 'Flag Testing in System Programming',
          description: 'System programmers utilize AND operations to test specific flag bits in status registers. This is essential for determining hardware states or configuration settings.'
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions about Hex AND Operations',
      questions: [
        {
          question: 'What exactly is a bitwise AND operation?',
          answer: 'A bitwise AND operation compares each bit position in two binary numbers and produces a new binary number where each bit is 1 only if both corresponding bits in the operands are 1. Otherwise, the result bit is 0. When working with hexadecimal numbers, each hex digit represents 4 bits, making it more compact than binary representation.'
        },
        {
          question: 'Why would I use hexadecimal instead of binary for bitwise operations?',
          answer: 'Hexadecimal notation is much more compact than binary (one hex digit represents 4 binary digits) while still maintaining a clear relationship to binary. This makes hex values easier to read, write, and communicate, especially for larger numbers commonly used in computing and programming.'
        },
        {
          question: 'Can the Hex AND Calculator handle more than two inputs?',
          answer: 'Yes, our calculator supports multiple inputs. When more than two values are provided, the AND operation is applied sequentially from the first value through all subsequent values. This is useful for complex masking operations where multiple conditions need to be applied.'
        },
        {
          question: 'What\'s the difference between logical AND and bitwise AND?',
          answer: 'Logical AND (&&) evaluates expressions to either true or false, treating operands as single boolean values. Bitwise AND (&) operates on each individual bit position of numeric values, comparing corresponding bits between operands. Our Hex AND Calculator performs bitwise AND operations.'
        },
        {
          question: 'Is there a limit to the size of hexadecimal numbers I can use?',
          answer: 'The calculator supports standard JavaScript number precision, which typically allows for integers up to 53 bits of precision. For most practical applications involving register manipulations or flag operations, this is more than sufficient.'
        },
        {
          question: 'How can I interpret the binary visualization in the results?',
          answer: 'The binary visualization shows the bit-by-bit breakdown of each input value and the result of the AND operation. Bits shown as "1" (highlighted) are set, while "0" bits are clear. This visual representation helps you understand exactly which bit positions were affected by the AND operation.'
        }
      ]
    },
    tutorial: {
      title: 'Step-by-Step Guide to Using the Hex AND Calculator',
      steps: [
        {
          title: 'Enter Your First Hexadecimal Value',
          description: 'Type a hexadecimal number in the first input field. You don\'t need to include the "0x" prefix as it\'s already provided. For example, enter "FF" to represent the hexadecimal value FF (decimal 255).'
        },
        {
          title: 'Enter Your Second Hexadecimal Value',
          description: 'Input another hexadecimal number in the second field. For example, enter "0F" to represent the hex value 0F (decimal 15).'
        },
        {
          title: 'Add More Values (Optional)',
          description: 'If your operation requires more than two values, click the "+ Add another number" button to add additional input fields. Enter hexadecimal values in each new field.'
        },
        {
          title: 'Click Calculate',
          description: 'Press the "Calculate" button to perform the bitwise AND operation on all entered values. The calculator will process the values sequentially, applying AND between each one.'
        },
        {
          title: 'Review the Results',
          description: 'Examine the results displayed in multiple formats: hexadecimal, decimal, and binary. For the example of FF & 0F, the result would be 0F (decimal 15). The visualization section shows exactly which bits were retained in the result.'
        },
        {
          title: 'Copy or Use the Result',
          description: 'Click the copy button next to any result format to copy that value to your clipboard. You can then paste it into your code, documentation, or use it for further calculations.'
        }
      ],
      advancedTips: {
        title: 'Advanced Tips for Hex AND Operations',
        tips: [
          'Use the quick examples to test common bit masking patterns like 0xFF & 0x0F or 0xA5 & 0x80.',
          'For complex operations, you can chain multiple hexadecimal values by adding more input fields rather than performing separate calculations.',
          'Pay attention to the binary visualization to understand exactly which bits are being affected by your AND operation.',
          'When working with status registers or flag bits, use the binary result to confirm specific bit positions are being properly isolated.',
          'Remember that AND operations can only result in 1 bits where ALL inputs have 1 bits; it\'s useful for clearing bits but not for setting them.',
          'You can use the hexadecimal representation for a more compact notation, while the binary visualization helps understand the bit-level operations.'
        ]
      }
    }
  },
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
} 