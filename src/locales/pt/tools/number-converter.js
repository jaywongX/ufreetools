export default {
    name: 'Conversor Numérico',
    description: 'Converta números entre diferentes bases e formatos',
    
    input: {
      title: 'Número de Entrada',
      placeholder: 'Digite o número a ser convertido',
      fromBase: 'Base de Origem',
      toBase: 'Base de Destino',
      customBase: 'Base Personalizada'
    },
    
    bases: {
      binary: 'Binário (base 2)',
      octal: 'Octal (base 8)',
      decimal: 'Decimal (base 10)',
      hexadecimal: 'Hexadecimal (base 16)',
      base32: 'Base 32',
      base36: 'Base 36',
      base58: 'Base 58',
      base64: 'Base 64',
      custom: 'Personalizado'
    },
    
    options: {
      signed: 'Sinalizado',
      bitLength: 'Tamanho em bits',
      byteOrder: 'Ordem dos Bytes',
      formatOutput: 'Formatar Saída',
      separator: 'Separador',
      prefix: 'Adicionar Prefixo',
      uppercase: 'Maiúsculas'
    },
    
    byteOrders: {
      littleEndian: 'Little Endian',
      bigEndian: 'Big Endian'
    },
    
    bitLengths: {
      '8': '8 bits',
      '16': '16 bits',
      '32': '32 bits',
      '64': '64 bits',
      custom: 'Personalizado'
    },
    
    output: {
      title: 'Resultado da Conversão',
      binary: 'Binário',
      octal: 'Octal',
      decimal: 'Decimal',
      hexadecimal: 'Hexadecimal',
      custom: 'Base Personalizada',
      all: 'Todas as Conversões'
    },
    
    actions: {
      convert: 'Converter',
      clear: 'Limpar',
      copy: 'Copiar Resultado',
      swap: 'Trocar Bases'
    },
    
    bitConverters: {
      title: 'Conversores de Bits',
      ieee754: 'Ponto Flutuante IEEE 754',
      twosComplement: 'Complemento de Dois',
      bitMask: 'Máscara de Bits',
      bitField: 'Extrator de Campos de Bits'
    },
    
    calculators: {
      title: 'Cálculos',
      add: 'Adição',
      subtract: 'Subtração',
      multiply: 'Multiplicação',
      divide: 'Divisão',
      modulo: 'Módulo',
      power: 'Potência'
    },
    
    messages: {
      invalidInput: 'Número inválido para a base selecionada',
      outOfRange: 'Número fora do intervalo para o tamanho em bits selecionado',
      copied: 'Resultado copiado para a área de transferência',
      conversionComplete: 'Conversão concluída'
    },
    
    article: {
      title: "Conversor Numérico: Transforme entre binário, decimal, hexadecimal e outros sistemas",
      overview: {
        title: "O que é um Conversor Numérico?",
        content: "O <strong>Conversor Numérico</strong> é uma ferramenta especializada para transformar valores entre diferentes sistemas numéricos, incluindo binário (base 2), octal (base 8), decimal (base 10), hexadecimal (base 16) e outras bases personalizadas. Ele realiza conversões precisas mantendo o valor matemático exato.<br><br>Nosso conversor atua como uma solução abrangente para formatos numéricos encontrados em computação, programação, matemática e sistemas digitais. A ferramenta suporta conversões exatas para bases padrão e especializadas usadas em diversos contextos técnicos.<br><br>Seja para desenvolvimento de software, eletrônica digital, tarefas acadêmicas ou análise de dados, nosso conversor elimina erros manuais e simplifica trabalhos com diferentes representações numéricas."
      },
      
      useCases: {
        title: "Aplicações Práticas do Conversor Numérico",
        items: [
          {
            title: "Desenvolvimento de Software",
            description: "Conversão entre códigos de cores hexadecimais e valores RGB decimais, manipulação de dados binários para operações bitwise, transformação de endereços de memória entre formatos, ou verificação de representações binárias de tipos de dados."
          },
          {
            title: "Eletrônica Digital e Arquitetura de Computadores",
            description: "Trabalhar com representações binárias, hexadecimais e decimais de sinais digitais, conversão de formatos de endereçamento de memória, ou depuração de circuitos digitais usando diferentes sistemas numéricos."
          },
          {
            title: "Educação em Ciência da Computação",
            description: "Verificação de exercícios de conversão entre bases, compreensão de representações numéricas, ou exploração de como computadores processam dados internamente."
          },
          {
            title: "Criptografia e Segurança",
            description: "Conversão entre representações hexadecimais e binárias de chaves criptográficas, análise de padrões em dados binários, ou transformação de valores de hash entre formatos."
          },
          {
            title: "Administração de Redes",
            description: "Conversão de endereços IP entre formatos decimais, binários e hexadecimais, trabalho com máscaras de sub-rede binárias, ou configuração de esquemas de endereçamento."
          },
          {
            title: "Ciência de Dados",
            description: "Conversão de dados codificados entre bases numéricas, preparação de dados binários ou hexadecimais para algoritmos, ou análise de padrões em nível de bit em grandes conjuntos de dados."
          },
          {
            title: "Desenvolvimento Web",
            description: "Conversão entre códigos de cores decimais e hexadecimais em CSS, codificação/decodificação de parâmetros de URL em diferentes bases, ou otimização de transferência de dados binários."
          },
          {
            title: "Sistemas Embarcados e IoT",
            description: "Depuração de firmware usando diferentes representações numéricas, análise de dados de sensores em vários formatos, ou conversão de valores de registradores em microcontroladores."
          }
        ]
      },
      
      guide: {
        title: "Como Usar o Conversor Numérico",
        intro: "Converter números entre diferentes sistemas é simples com nossa ferramenta intuitiva. Siga estes passos para transformar valores entre binário, decimal, hexadecimal e outras bases com precisão:",
        steps: [
          {
            title: "Insira Seu Número",
            description: "Digite o valor a ser convertido no campo de entrada. A ferramenta aceita números inteiros e prefixos padrão como '0b' para binário, '0o' para octal ou '0x' para hexadecimal."
          },
          {
            title: "Selecione a Base de Origem",
            description: "Escolha o sistema numérico do valor inserido. Opções incluem binário (base 2), octal (base 8), decimal (base 10), hexadecimal (base 16) e outras bases especializadas."
          },
          {
            title: "Escolha as Opções de Saída",
            description: "Selecione quais representações deseja visualizar. Você pode ver múltiplas conversões simultaneamente, permitindo comparar diferentes formatos lado a lado."
          },
          {
            title: "Configure Preferências de Formato",
            description: "Personalize a exibição dos resultados adicionando prefixos, separadores ou usando letras maiúsculas em representações hexadecimais."
          },
          {
            title: "Execute a Conversão",
            description: "Clique em 'Converter' para processar seu número. A ferramenta realiza transformações matemáticas instantâneas entre sistemas numéricos."
          },
          {
            title: "Analise os Resultados",
            description: "Verifique os valores convertidos em cada formato selecionado. Cada seção exibe o número na respectiva base, formatado conforme suas preferências."
          },
          {
            title: "Copie os Resultados",
            description: "Use os botões 'Copiar' para transferir conversões específicas para sua área de transferência, ou capture todas as representações de uma vez."
          }
        ]
      },
      
      numberSystems: {
        title: "Entendendo Sistemas Numéricos",
        intro: "Diferentes sistemas usam bases distintas, determinando quais dígitos estão disponíveis e como funcionam os valores posicionais. Veja os sistemas suportados por nosso conversor:",
        items: [
          {
            name: "Binário (Base 2)",
            description: "Usa apenas 0 e 1, representando como computadores armazenam dados no nível mais básico. Fundamental para eletrônica digital, arquitetura de computadores e programação de baixo nível."
          },
          {
            name: "Octal (Base 8)",
            description: "Utiliza dígitos de 0 a 7. Historicamente importante na computação, oferece representação mais compacta que binário mantendo conversão simples (cada dígito octal equivale a 3 bits)."
          },
          {
            name: "Decimal (Base 10)",
            description: "Nosso sistema padrão, usando dígitos de 0 a 9. Intuitivo para humanos, usado em cálculos cotidianos e na maioria das interfaces de usuário."
          },
          {
            name: "Hexadecimal (Base 16)",
            description: "Emprega dígitos 0-9 e letras A-F (valores 10-15). Oferece representação compacta mantendo mapeamento direto com binário (cada dígito hex equivale a 4 bits). Amplamente usado em programação para endereços de memória e códigos de cores."
          },
          {
            name: "Base 32",
            description: "Usa dígitos 0-9 e letras A-V. Fornece codificação eficiente para dados binários quando legibilidade humana é importante. Cada dígito representa 5 bits de informação."
          },
          {
            name: "Base 36",
            description: "Utiliza todos os dígitos e letras do alfabeto (0-9, A-Z). Oferece a representação mais compacta usando caracteres alfanuméricos padrão. Ideal para identificadores curtos e legíveis."
          },
          {
            name: "Base 64",
            description: "Embora não seja um sistema numérico tradicional, a codificação Base-64 transforma dados binários em texto usando 64 caracteres ASCII imprimíveis. Comum em transferência de dados binários via protocolos baseados em texto."
          }
        ]
      },
      
      faq: {
        title: "Perguntas Frequentes sobre Conversão Numérica",
        items: [
          {
            question: "Por que preciso converter entre sistemas numéricos?",
            answer: "Conversões são essenciais em diversas áreas técnicas. Programadores usam hexadecimal para endereços de memória e cores, binário para operações bitwise, e decimal para saída legível. Administradores de rede convertem entre endereços IP decimais e máscaras de sub-rede binárias. Engenheiros digitais trabalham com representações binárias e hexadecimais de sinais. Essas transformações conectam formatos legíveis por humanos com representações eficientes para computadores."
          },
          {
            question: "Quão precisas são as conversões desta ferramenta?",
            answer: "Nosso conversor utiliza algoritmos de alta precisão e funções matemáticas nativas, garantindo exatidão de 100% em todas as transformações. Implementações com BigInt lidam com inteiros grandes sem perda de precisão, evitando erros de arredondamento. A ferramenta realiza conversões matemáticas diretas entre bases, não manipulações de string, assegurando que valores permaneçam idênticos em todas as representações."
          },
          {
            question: "Quando devo usar cada sistema numérico?",
            answer: "Cada base oferece vantagens em contextos específicos. Binário representa diretamente estados eletrônicos, sendo crucial para operações bitwise. Hexadecimal fornece formato compacto e legível para dados binários, ideal para endereços de memória. Decimal é intuitivo para cálculos humanos. Octal tem importância histórica em sistemas Unix. Bases como 32 e 36 oferecem representações alfanuméricas compactas para identificadores. A escolha depende da aplicação, requisitos de legibilidade e compatibilidade com sistemas existentes."
          },
          {
            question: "Como interpretar prefixos como '0b', '0o' e '0x'?",
            answer: "Esses prefixos indicam o sistema numérico: '0b' para binário (0b1010), '0o' para octal (0o17), '0x' para hexadecimal (0xA4). Amplamente usados em linguagens de programação e documentação técnica, eles especificam claramente a base em uso, prevenindo ambiguidades. Nosso conversor suporta esses prefixos na entrada e pode incluí-los na saída para maior clareza."
          },
          {
            question: "A ferramenta lida com números negativos ou decimais?",
            answer: "O conversor foca principalmente em inteiros. Para negativos, suporta a notação padrão com sinal de menos. Quanto a decimais, embora a conversão entre bases seja matematicamente definida, a ferramenta é otimizada para operações com inteiros, comuns em programação e sistemas digitais. Para aplicações que requerem precisão decimal (como representação binária de ponto flutuante), ferramentas especializadas com suporte IEEE-754 são mais adequadas."
          },
          {
            question: "Por que programadores usam hexadecimal em vez de binário?",
            answer: "Embora computadores operem em binário, hexadecimal oferece vantagens práticas: representação mais compacta (cada dígito hex equivale a 4 bits), melhor legibilidade para humanos, e mapeamento direto com binário. Isso facilita identificação de padrões, depuração e programação em baixo nível, mantendo a conexão com a representação binária subjacente."
          },
          {
            question: "Como a ferramenta lida com números muito grandes?",
            answer: "Utilizando tecnologia BigInt, nosso conversor processa inteiros de qualquer tamanho com precisão perfeita em todas as bases. Os algoritmos realizam transformações matemáticas diretas, garantindo exatidão independentemente da magnitude do número. Otimizações de desempenho asseguram conversões rápidas mesmo para valores extremamente grandes, mantendo a fidelidade matemática em todas as representações."
          }
        ]
      },
      
      bestPractices: {
        title: "Melhores Práticas com Sistemas Numéricos",
        intro: "Ao trabalhar com diferentes bases numéricas em projetos, aplique estas diretrizes profissionais:",
        items: [
          "Sempre inclua prefixos apropriados (0b, 0o, 0x) ao usar bases não-decimais em código ou documentação",
          "Prefira letras maiúsculas em valores hexadecimais (0xA1B2) para melhor legibilidade",
          "Adicione separadores em números longos para facilitar leitura e prevenir erros",
          "Valide conversões críticas com múltiplas ferramentas em sistemas sensíveis",
          "Documente claramente a base numérica quando valores fazem parte de APIs ou interfaces",
          "Escolha a base mais adequada ao contexto - hexadecimal para endereços/memória, decimal para valores humanos",
          "Considere alinhamento de bits e limites de byte ao converter números para programação de baixo nível",
          "Entenda a representação em complemento de dois para números binários com sinal",
          "Teste condições limite (valores máximos, mudanças de sinal) em algoritmos de conversão",
          "Mantenha consistência na notação entre membros da equipe e documentação",
          "Use ferramentas como esta para economizar tempo e evitar erros em conversões manuais"
        ]
      }
    }
  }