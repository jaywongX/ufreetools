export default {
  name: '十六进制与运算计算器',
  description: '对十六进制数执行按位与（AND）运算，并以多种格式查看结果。',

  // 输入标签
  firstNumber: '第一个十六进制数',

  secondNumber: '第二个十六进制数',
  enterHex: '输入十六进制值（不含0x前缀）',
  invalidHex: '无效的十六进制值',

  // 操作
  calculate: '计算',

  import: '导入',
  save:'保存',
  copy:'复制',
  paste:'粘贴',

  // 结果
  result: '结果',

  decimal: '十进制',
  binary: '二进制',
  copied: '已复制！',
  noResult: '输入值并点击计算按钮查看结果',

  // 解释说明
  explanation: {
    title: '按位与运算的工作原理',
    content: '按位与（AND）运算会比较第一个操作数的每个位与第二个操作数的对应位。如果两个位都为1，则结果中的对应位设为1。否则，结果中的对应位设为0。',
    example: '计算详解'
  },

  // 示例
  examples: {
    title: '示例',
    example1: {
      description: '基本与运算',
      value1: 'FF',
      value2: '0F',
      result: '0F'
    },
    example2: {
      description: '位掩码应用',
      value1: 'ABCD',
      value2: 'FF00',
      result: 'AB00'
    },
    commonMask: '常见掩码: 0xFF & 0x0F',
    permissionCheck: '权限检查: 0xA5 & 0x80',
    bitClearing: '位清除: 0xFFFF & 0xFF00',
    evenCheck: '偶数检查: 0x42 & 0x01'
  },

  // 文档
  documentation: {
    title: '十六进制与运算计算器：完整指南',
    introduction: '十六进制与运算计算器是一个用于对十六进制数执行按位与运算的工具，常用于编程和数字电子设计。',
    
    whatIs: {
      title: '什么是按位与运算？',
      paragraph1: '按位与是一种二进制操作，它取两个等长的位模式并对每对相应位执行逻辑与操作。如果两个位都为1，则结果位为1，否则结果位为0。',
      paragraph2: '这种操作在各种计算场景中非常基础，包括掩码操作、位操作和检查特定位的状态。'
    },
    
    useCases: {
      title: '十六进制与运算的常见用例',
      masks: {
        title: '位掩码',
        description: '使用与操作通过屏蔽不需要的位来提取或隔离值中的特定位。'
      },
      permissions: {
        title: '权限检查',
        description: '确定权限位字段中是否设置了特定权限位。'
      },
      flagsCheck: {
        title: '标志状态检查',
        description: '检查状态寄存器或标志变量中是否设置了特定标志。'
      },
      evenOdd: {
        title: '奇偶性测试',
        description: '使用与1的与运算来测试数字是偶数还是奇数。'
      },
      bitClearing: {
        title: '位清除',
        description: '通过与掩码进行与运算来清除特定位，同时保持其他位不变。'
      }
    },
    
    howToUse: {
      title: '如何使用十六进制与运算计算器',
      step1: '输入第一个十六进制数（不含"0x"前缀）',
      step2: '输入第二个十六进制数（不含"0x"前缀）',
      step3: '点击"计算"按钮',
      step4: '查看十六进制、十进制和二进制格式的结果',
      step5: '使用复制按钮将任何格式的结果复制到剪贴板'
    },
    
    tips: {
      title: '使用十六进制与运算的技巧',
      tip1: '计算时会忽略输入中的前导零，但结果会根据最长的输入进行填充',
      tip2: '对于掩码操作，在您想要保留的位置使用FF（或F的序列），在您想要清除的位置使用00',
      tip3: '要检查是否设置了特定位，请与仅设置了该位的值进行与运算（例如，与0x08进行与运算以检查是否设置了第4位）',
      tip4: '请记住，每个十六进制数字代表4位（一个半字节）',
      tip5: '在处理权限或标志时，请保持对每个位代表什么的参考'
    }
  },

  quickExamples: '快速示例',
  operation: '操作',

  operations: {
    and: '与(AND)',
    or: '或(OR)',
    xor: '异或(XOR)',
    not: '非(NOT)',
    shiftLeft: '左移(<<)',
    shiftRight: '右移(>>)'
  },

  input: '输入值',
  chainWith: '链式计算',
  importFromFile: '从文件导入',
  noResult: '输入值并单击计算以查看结果',
  bitVisualization: '可视化',
  inputNumbers: '输入十六进制数字',
  addNumber: '添加另一个数字',

  // 添加以下内容到现有翻译文件中
  number: '数字',

  // 按钮标签
  remove: '删除',

  removeButton: '删除此输入',
  importTitle: '从文件导入',
  saveTitle: '保存到文件',
  copyTitle: '复制所有输入',
  pasteTitle: '从剪贴板粘贴',
  saveResult: '保存结果',
  saveResultTitle: '将结果保存到文件',
  copyResult: '复制结果',
  copyResultTitle: '复制所有结果',
  copyAction: '复制',

  // 提示和消息
  importError: '导入文件错误，请确保文件格式正确',

  inputsCopied: '所有输入已复制到剪贴板',
  resultsCopied: '所有结果已复制到剪贴板',
  inputs: '输入'
}; 