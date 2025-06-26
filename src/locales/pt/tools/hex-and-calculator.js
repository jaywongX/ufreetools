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
    
    // Artigo
    article: {
      title: 'Calculadora de Operação AND Hexadecimal: Guia Completo',
      introduction: {
        title: 'Entendendo a operação AND hexadecimal',
        content: [
          'A calculadora de operação AND hexadecimal é uma ferramenta especializada para executar operações bit a bit AND em números hexadecimais. Esta operação compara cada posição de bit entre dois ou mais valores hexadecimais e produz um resultado onde um bit só será 1 se todos os bits correspondentes nos operandos forem 1.',
          'Operações bit a bit são fundamentais em ciência da computação, especialmente ao trabalhar com dados binários, interfaces de hardware, flags de permissão e outras tarefas de programação de baixo nível. A representação hexadecimal torna essas operações mais legíveis e gerenciáveis para desenvolvedores e engenheiros de hardware.',
          'Nossa calculadora de operação AND hexadecimal suporta múltiplos valores de entrada, fornecendo uma maneira conveniente de executar operações AND em vários números hexadecimais simultaneamente. Os resultados são exibidos em formatos hexadecimal, decimal e binário, com uma representação visual bit a bit que ajuda a entender como a operação afeta cada posição de bit.'
        ]
      },
      useCases: {
        title: 'Casos de uso comuns para operações AND hexadecimais',
        cases: [
          {
            title: 'Verificação de permissões',
            description: 'Desenvolvedores usam operações AND para verificar se bits específicos de permissão estão definidos em sistemas de controle de acesso. Por exemplo, fazer AND entre um valor de permissão do usuário (0xA5) e uma máscara de permissão (0x80) pode determinar se uma permissão específica foi concedida.'
          },
          {
            title: 'Manipulação de registradores de hardware',
            description: 'Engenheiros que trabalham com hardware frequentemente usam operações AND para limpar bits específicos em registradores de controle, mantendo outros bits inalterados. Por exemplo, 0xFFFF & 0xFF00 limpa seletivamente bits específicos.'
          },
          {
            title: 'Máscaras de bits em protocolos de rede',
            description: 'Protocolos de rede frequentemente usam operações AND para extrair campos específicos de cabeçalhos de pacotes. Por exemplo, fazer AND entre um endereço IP e uma máscara de sub-rede pode isolar a parte da rede do endereço.'
          },
          {
            title: 'Extração de canais de cor',
            description: 'Programadores gráficos usam operações AND para separar canais de cores específicos de valores de cor hexadecimais. Por exemplo, 0x00FF00 & 0xFFFFFF pode extrair o canal verde de uma cor RGB.'
          },
          {
            title: 'Teste de flags em programação de sistemas',
            description: 'Programadores de sistemas usam operações AND para testar bits de flag específicos em registradores de estado. Isso é crucial para determinar o estado ou configuração de hardware.'
          }
        ]
      },
      faq: {
        title: 'Perguntas frequentes sobre operações AND hexadecimais',
        questions: [
          {
            question: 'O que é uma operação AND bit a bit?',
            answer: 'Uma operação AND bit a bit compara cada posição de bit entre dois números binários e produz um novo número binário onde cada bit será 1 apenas se os bits correspondentes em ambos operandos forem 1, caso contrário será 0. Ao trabalhar com números hexadecimais, cada dígito hexadecimal representa 4 bits binários, tornando a representação mais compacta.'
          },
          {
            question: 'Por que usar hexadecimal em vez de binário para operações bit a bit?',
            answer: 'A notação hexadecimal é mais compacta que a binária (um dígito hexadecimal representa 4 bits binários) enquanto mantém uma relação clara com o binário. Isso torna os valores hexadecimais mais fáceis de ler, escrever e comunicar, especialmente para números maiores comumente usados em computação e programação.'
          },
          {
            question: 'A calculadora pode lidar com mais de duas entradas?',
            answer: 'Sim, nossa calculadora suporta múltiplas entradas. Quando mais de dois valores são fornecidos, a operação AND é aplicada sequencialmente a partir do primeiro valor, aplicando-se a todos os valores subsequentes. Isso é útil para operações complexas com máscaras que exigem múltiplas condições.'
          },
          {
            question: 'Qual a diferença entre AND lógico e AND bit a bit?',
            answer: 'AND lógico (&&) avalia expressões como verdadeiras ou falsas, tratando operandos como valores booleanos únicos. AND bit a bit (&) opera em cada posição de bit individualmente, comparando bits correspondentes entre operandos. Nossa calculadora executa operações AND bit a bit.'
          },
          {
            question: 'Há limite de tamanho para os números hexadecimais?',
            answer: 'A calculadora suporta a precisão padrão de números JavaScript, normalmente permitindo inteiros com até 53 bits de precisão. Para a maioria das aplicações práticas envolvendo manipulação de registradores ou operações com flags, isso é mais que suficiente.'
          },
          {
            question: 'Como interpretar a visualização binária do resultado?',
            answer: 'A visualização binária mostra uma decomposição bit a bit de cada valor de entrada e do resultado da operação AND. Bits mostrados como "1" (destacados) estão ativados, enquanto "0" estão desativados. Esta representação visual ajuda a entender exatamente quais posições de bits foram afetadas pela operação AND.'
          }
        ]
      },
      tutorial: {
        title: 'Guia passo a passo para usar a calculadora de operação AND hexadecimal',
        steps: [
          {
            title: 'Insira o primeiro valor hexadecimal',
            description: 'No primeiro campo de entrada, digite um número hexadecimal. Não é necessário incluir o prefixo "0x", pois ele já é fornecido. Por exemplo, digite "FF" para o valor hexadecimal FF (255 em decimal).'
          },
          {
            title: 'Insira o segundo valor hexadecimal',
            description: 'No segundo campo, digite outro número hexadecimal. Por exemplo, digite "0F" para o valor hexadecimal 0F (15 em decimal).'
          },
          {
            title: 'Adicione mais valores (opcional)',
            description: 'Se sua operação exigir mais de dois valores, clique no botão "+ Adicionar outro número" para adicionar campos extras. Digite valores hexadecimais em cada novo campo.'
          },
          {
            title: 'Clique em calcular',
            description: 'Pressione o botão "Calcular" para executar a operação AND bit a bit em todos os valores de entrada. A calculadora processará os valores sequencialmente, aplicando a operação AND entre cada valor.'
          },
          {
            title: 'Veja o resultado',
            description: 'Consulte o resultado exibido em múltiplos formatos: hexadecimal, decimal e binário. Por exemplo, o resultado de FF & 0F será 0F (15 em decimal). A seção de visualização mostra exatamente quais bits foram preservados no resultado.'
          },
          {
            title: 'Copie ou use o resultado',
            description: 'Clique nos botões de copiar ao lado de qualquer formato de resultado para copiar o valor para a área de transferência. Você pode então colá-lo em código, documentação ou usá-lo para cálculos adicionais.'
          }
        ],
        advancedTips: {
          title: 'Dicas avançadas para operações AND hexadecimais',
          tips: [
            'Use os exemplos rápidos para testar padrões comuns de máscaras de bits, como 0xFF & 0x0F ou 0xA5 & 0x80.',
            'Para operações complexas, você pode encadear múltiplos valores hexadecimais adicionando mais campos de entrada em vez de executar cálculos separados.',
            'Preste atenção à visualização binária para entender exatamente quais bits sua operação AND está afetando.',
            'Ao trabalhar com registradores de estado ou flags, use o resultado binário para confirmar que posições de bits específicas foram isoladas corretamente.',
            'Lembre-se que a operação AND só produzirá um bit 1 em posições onde todos os operandos têm bit 1; ela é útil para limpar bits, mas não para definir bits.',
            'Você pode usar a representação hexadecimal para uma notação mais compacta, enquanto a visualização binária ajuda a entender operações em nível de bit.'
          ]
        }
      }
    },
    
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
  }