export default {
  name: 'Calculadora de Operação AND Hexadecimal',
  description: 'Executa operações bit a bit AND em números hexadecimais e exibe os resultados em vários formatos.',

  // Rótulos de entrada
  firstNumber: 'Primeiro número hexadecimal',

  secondNumber: 'Segundo número hexadecimal',
  enterHex: 'Insira valor hexadecimal (sem prefixo 0x)',
  invalidHex: 'Valor hexadecimal inválido',

  // Ações
  calculate: 'Calcular',

  import: 'Importar',
  save: 'Salvar',
  copy: 'Copiar',
  paste: 'Colar',

  // Resultados
  result: 'Resultado',

  decimal: 'Decimal',
  binary: 'Binário',
  copied: 'Copiado!',
  noResult: 'Insira valores e clique em calcular para ver o resultado',

  // Explicação
  explanation: {
    title: 'Como funciona a operação AND bit a bit',
    content: 'A operação AND bit a bit compara cada bit do primeiro operando com o bit correspondente do segundo operando. Se ambos os bits forem 1, o bit correspondente no resultado será definido como 1. Caso contrário, será definido como 0.',
    example: 'Exemplo detalhado'
  },

  // Exemplos
  examples: {
    title: 'Exemplos',
    example1: {
      description: 'Operação AND básica',
      value1: 'FF',
      value2: '0F',
      result: '0F'
    },
    example2: {
      description: 'Aplicação de máscara de bits',
      value1: 'ABCD',
      value2: 'FF00',
      result: 'AB00'
    },
    commonMask: 'Máscaras comuns: 0xFF & 0x0F',
    permissionCheck: 'Verificação de permissão: 0xA5 & 0x80',
    bitClearing: 'Limpeza de bits: 0xFFFF & 0xFF00',
    evenCheck: 'Verificação de paridade: 0x42 & 0x01'
  },

  // Documentação
  documentation: {
    title: 'Calculadora de Operação AND Hexadecimal: Guia Completo',
    introduction: 'A calculadora de operação AND hexadecimal é uma ferramenta para executar operações AND bit a bit em números hexadecimais, comumente usada em programação e design de eletrônicos digitais.',
    
    whatIs: {
      title: 'O que é uma operação AND bit a bit?',
      paragraph1: 'AND bit a bit é uma operação binária que pega dois padrões de bits de mesmo comprimento e executa uma operação lógica AND em cada par de bits correspondentes. Se ambos os bits forem 1, o bit resultante será 1, caso contrário será 0.',
      paragraph2: 'Esta operação é fundamental em vários cenários computacionais, incluindo operações com máscaras, manipulação de bits e verificação de estados de bits específicos.'
    },
    
    useCases: {
      title: 'Casos de uso comuns para operações AND hexadecimais',
      masks: {
        title: 'Máscaras de bits',
        description: 'Use a operação AND para extrair ou isolar bits específicos em um valor, mascarando os bits indesejados.'
      },
      permissions: {
        title: 'Verificação de permissões',
        description: 'Determinar se um bit de permissão específico está definido em um campo de bits de permissão.'
      },
      flagsCheck: {
        title: 'Verificação de estado de flags',
        description: 'Verificar se um flag específico está definido em um registrador de estado ou variável de flags.'
      },
      evenOdd: {
        title: 'Teste de paridade',
        description: 'Usar AND com 1 para testar se um número é par ou ímpar.'
      },
      bitClearing: {
        title: 'Limpeza de bits',
        description: 'Usar AND com uma máscara para limpar bits específicos enquanto mantém outros bits inalterados.'
      }
    },
    
    howToUse: {
      title: 'Como usar a calculadora de operação AND hexadecimal',
      step1: 'Insira o primeiro número hexadecimal (sem prefixo "0x")',
      step2: 'Insira o segundo número hexadecimal (sem prefixo "0x")',
      step3: 'Clique no botão "Calcular"',
      step4: 'Veja o resultado nos formatos hexadecimal, decimal e binário',
      step5: 'Use os botões de copiar para copiar qualquer formato do resultado para a área de transferência'
    },
    
    tips: {
      title: 'Dicas para usar operações AND hexadecimais',
      tip1: 'Zeros à esquerda são ignorados no cálculo, mas o resultado será preenchido de acordo com a entrada mais longa',
      tip2: 'Para operações com máscaras, use FF (ou sequências de F) nas posições que deseja manter e 00 nas posições que deseja limpar',
      tip3: 'Para verificar se um bit específico está definido, faça AND com um valor que tenha apenas esse bit definido (ex: AND com 0x08 para verificar o 4º bit)',
      tip4: 'Lembre-se que cada dígito hexadecimal representa 4 bits (um nibble)',
      tip5: 'Ao trabalhar com permissões ou flags, mantenha uma referência do que cada bit representa'
    }
  },

  quickExamples: 'Exemplos rápidos',
  operation: 'Operação',

  operations: {
    and: 'AND',
    or: 'OR',
    xor: 'XOR',
    not: 'NOT',
    shiftLeft: 'Deslocamento à esquerda (<<)',
    shiftRight: 'Deslocamento à direita (>>)'
  },

  input: 'Valores de entrada',
  chainWith: 'Cálculo encadeado',
  importFromFile: 'Importar de arquivo',
  noResult: 'Insira valores e clique em calcular para ver o resultado',
  bitVisualization: 'Visualização',
  inputNumbers: 'Insira números hexadecimais',
  addNumber: 'Adicionar outro número',
  number: 'Número',

  // Rótulos de botões
  remove: 'Remover',

  removeButton: 'Remover esta entrada',
  importTitle: 'Importar de arquivo',
  saveTitle: 'Salvar em arquivo',
  copyTitle: 'Copiar todas as entradas',
  pasteTitle: 'Colar da área de transferência',
  saveResult: 'Salvar resultado',
  saveResultTitle: 'Salvar resultado em arquivo',
  copyResult: 'Copiar resultado',
  copyResultTitle: 'Copiar todos os resultados',
  copyAction: 'Copiar',

  // Mensagens e dicas
  importError: 'Erro ao importar arquivo, verifique o formato',

  inputsCopied: 'Todas as entradas copiadas para a área de transferência',
  resultsCopied: 'Todos os resultados copiados para a área de transferência',
  inputs: 'Entradas'
};