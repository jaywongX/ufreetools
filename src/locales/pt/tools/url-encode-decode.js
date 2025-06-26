export default {
    name: 'Codificador/Decodificador de URL',
    description: 'Codificação URL converte caracteres especiais em formatos aceitáveis para URLs, comumente usado para parâmetros de URL e envio de formulários.',
    options: {
      operationType: 'Tipo de operação',
      encodeMode: 'Modo de codificação'
    },
    encodeOptions: {
      standard: 'Codificação padrão (encodeURI)',
      component: 'Codificação de componente (encodeURIComponent)',
      full: 'Codificação completa (todos caracteres)',
      standardDescription: 'Codifica a URL inteira, preservando caracteres estruturais',
      componentDescription: 'Adequado para parâmetros de URL, codifica todos caracteres especiais',
      fullDescription: 'Codifica todos caracteres não alfanuméricos, incluindo espaços (convertidos para %20 em vez de +)'
    },
    actions: {
      encode: 'Codificar URL',
      decode: 'Decodificar URL',
      clear: 'Limpar',
      copyResult: 'Copiar resultado'
    },
    input: {
      textToEncode: 'Texto para codificar',
      textToDecode: 'Texto para decodificar',
      encodePlaceholder: 'Insira a URL ou texto para codificar...',
      decodePlaceholder: 'Insira a URL ou texto para decodificar...'
    },
    output: {
      encodeResult: 'Resultado da codificação',
      decodeResult: 'Resultado da decodificação'
    },
    messages: {
      copied: '(Copiado',
      error: 'Erro: {message}',
      decodeError: 'Falha ao decodificar: "{text}"',
      copyFailed: 'Falha ao copiar, copie manualmente'
    },
    referenceTable: {
      title: 'Tabela de referência de codificação URL',
      showTable: 'Mostrar tabela',
      hideTable: 'Ocultar tabela',
      character: 'Caractere',
      encoded: 'Codificação URL',
      description: 'Descrição',
      descriptions: {
        space: 'Espaço',
        exclamation: 'Ponto de exclamação',
        doubleQuote: 'Aspas duplas',
        hash: 'Cerquilha',
        dollar: 'Cifrão',
        percent: 'Porcentagem',
        ampersand: 'E comercial',
        singleQuote: 'Aspas simples',
        leftParenthesis: 'Parêntese esquerdo',
        rightParenthesis: 'Parêntese direito',
        asterisk: 'Asterisco',
        plus: 'Sinal de mais',
        comma: 'Vírgula',
        slash: 'Barra',
        colon: 'Dois pontos',
        semicolon: 'Ponto e vírgula',
        lessThan: 'Menor que',
        equals: 'Igual',
        greaterThan: 'Maior que',
        questionMark: 'Ponto de interrogação',
        at: 'Arroba',
        leftBracket: 'Colchete esquerdo',
        backslash: 'Barra invertida',
        rightBracket: 'Colchete direito',
        caret: 'Acento circunflexo',
        backtick: 'Acento grave',
        leftBrace: 'Chave esquerda',
        pipe: 'Barra vertical',
        rightBrace: 'Chave direita',
        tilde: 'Til',
        chinese: 'Caracteres chineses (codificação UTF-8)'
      }
    },
    article: {
      title: 'Codificação e Decodificação de URL: Guia Completo',
      introduction: {
        title: 'O que é codificação e decodificação de URL?',
        p1: '<strong>Codificação/decodificação de URL</strong> é um processo essencial no desenvolvimento web que converte caracteres especiais em formatos seguros para transmissão na internet. Quando você insere informações em uma URL, certos caracteres (como espaços, & e barras) têm significados especiais na estrutura da URL. A codificação substitui esses caracteres por uma sequência começando com % seguida de dois dígitos hexadecimais.',
        p2: 'Nossa ferramenta de <strong>codificação/decodificação de URL</strong> oferece uma interface intuitiva para três tipos de codificação: padrão (encodeURI), de componente (encodeURIComponent) e completa (todos caracteres). Essa versatilidade permite que desenvolvedores usando funções de <strong>codificação/decodificação em JavaScript</strong>, métodos <strong>PHP para codificação/decodificação</strong> ou qualquer outra linguagem testem e validem facilmente suas operações.',
        p3: 'Seja processando envios de formulários, requisições API ou parâmetros complexos de URL, entender e implementar corretamente técnicas de <strong>codificação/decodificação de URL</strong> é crucial para prevenir corrupção de dados e vulnerabilidades de segurança. Este guia abrangente explora todos os aspectos da codificação e decodificação em diversas linguagens e frameworks.'
      },
      
      applications: {
        title: 'Cenários de Aplicação Prática',
        scenario1: {
          title: 'Desenvolvimento Web e Processamento de Formulários',
          content: 'Desenvolvedores web frequentemente usam funções de <strong>codificação/decodificação em JavaScript</strong> ao processar formulários, garantindo que os dados sejam formatados corretamente para requisições HTTP. Quando usuários enviam formulários contendo caracteres especiais, espaços ou caracteres não-ASCII, esses elementos devem ser codificados antes do envio ao servidor. Em JavaScript, <code>encodeURIComponent()</code> é comumente usado para essa finalidade, enquanto <code>decodeURIComponent()</code> decodifica os dados no recebimento.'
        },
        scenario2: {
          title: 'Desenvolvimento e Integração de APIs',
          content: 'Ao desenvolver ou consumir APIs, desenvolvedores frequentemente precisam usar funções de <strong>codificação/decodificação</strong> em várias linguagens como <strong>Python</strong>, <strong>Java</strong> ou <strong>Golang</strong>. Parâmetros de consulta e segmentos de caminho podem conter caracteres especiais que precisam ser codificados para formar requisições corretamente. Por exemplo, operações de <strong>codificação/decodificação em Python</strong> geralmente usam o módulo <code>urllib.parse</code>, enquanto desenvolvedores Java podem usar as classes <code>URLEncoder</code> e <code>URLDecoder</code>.'
        },
        scenario3: {
          title: 'Interação com Bancos de Dados',
          content: 'Desenvolvedores de bancos de dados às vezes precisam executar operações de <strong>codificação/decodificação em SQL Server</strong> ou sistemas similares. Caracteres especiais em URLs podem interferir em consultas SQL se não forem codificados corretamente. Frameworks como <strong>Laravel</strong> oferecem utilitários para lidar com codificação/decodificação em operações com bancos de dados, garantindo integridade dos dados.'
        },
        scenario4: {
          title: 'Segurança e Autenticação',
          content: 'Profissionais de segurança usam técnicas de <strong>codificação/decodificação</strong> para analisar e testar vulnerabilidades em aplicações web. A codificação correta ajuda a prevenir ataques de injeção e XSS. Ao implementar sistemas de autenticação, desenvolvedores podem precisar codificar tokens ou informações sensíveis em URLs. Bibliotecas como <strong>Base64</strong> são frequentemente usadas para essas tarefas relacionadas à segurança, especialmente em implementações JWT.'
        },
        scenario5: {
          title: 'Ambientes de Desenvolvimento Multilíngue',
          content: 'Em ambientes com múltiplas linguagens, desenvolvedores precisam garantir o uso consistente da codificação em todo o ecossistema. Testar implementações de <strong>codificação/decodificação em C#</strong> versus <strong>TypeScript</strong> ou <strong>PHP</strong> pode ser crucial para manter interoperabilidade. Nossa ferramenta online serve como ponto de referência neutro para validar comportamentos de codificação em diferentes implementações.'
        }
      },
      
      guide: {
        title: 'Como Usar a Ferramenta de Codificação/Decodificação',
        step1: {
          title: 'Passo 1: Selecione o Tipo de Operação',
          content: 'Primeiro, selecione a operação desejada no menu suspenso. Escolha "Codificar URL" para converter caracteres especiais em formatos seguros para URL, ou "Decodificar URL" para converter caracteres codificados de volta à forma original. Essa flexibilidade permite testar funcionalidades que você pode estar implementando em <strong>JavaScript</strong>, <strong>PHP</strong> ou <strong>Python</strong>.'
        },
        step2: {  
          title: 'Passo 2: Escolha o Modo de Codificação',
          content: 'Ao selecionar "Codificar URL", escolha entre três modos diferentes:<ul><li><strong>Codificação padrão (encodeURI)</strong>: Codifica a URL inteira, preservando caracteres estruturais como barras e pontos de interrogação.</li><li><strong>Codificação de componente (encodeURIComponent)</strong>: Codifica todos caracteres especiais, incluindo aqueles com significado especial em URLs.</li><li><strong>Codificação completa</strong>: Codifica todos caracteres não alfanuméricos, fornecendo o método mais abrangente.</li></ul>'
        },
        step3: {
          title: 'Passo 3: Insira Seu Texto',
          content: 'Em seguida, insira no campo de entrada o texto que deseja codificar ou decodificar. Pode ser uma URL completa, um componente de URL ou qualquer string contendo caracteres especiais. Se estiver testando funcionalidades equivalentes em <strong>PHP</strong> ou <strong>Python</strong>, você pode inserir a mesma string aqui para comparação.'
        },
        step4: {
          title: 'Passo 4: Processe e Use os Resultados',
          content: 'Clique em "Codificar URL" ou "Decodificar URL" para processar sua entrada. O resultado será exibido no campo de saída. Use o botão copiar para transferir os resultados para sua aplicação, esteja você trabalhando com <strong>C#</strong>, <strong>TypeScript</strong> ou implementando <strong>codificação/decodificação no Laravel</strong>. A tabela de referência na parte inferior da ferramenta mostra caracteres comuns codificados em URL para sua consulta.'
        }
      },
      
      faq: {
        title: 'Perguntas Frequentes',
        q1: 'Qual a diferença entre encodeURI e encodeURIComponent?',
        a1: 'Em operações de <strong>codificação/decodificação em JavaScript</strong>, essas funções têm propósitos distintos. <code>encodeURI()</code> é projetada para codificar URLs inteiras, preservando caracteres estruturais como <code>/</code>, <code>?</code>, <code>:</code>, <code>=</code>. <code>encodeURIComponent()</code>, por outro lado, codifica todos caracteres especiais, incluindo aqueles com significado especial em URLs, sendo ideal para codificar componentes como parâmetros de consulta.',
  
        q2: 'Como implementar codificação/decodificação em PHP?',
        a2: 'Para operações de <strong>codificação/decodificação em PHP</strong>, use as funções nativas <code>urlencode()</code> e <code>urldecode()</code>. <code>urlencode()</code> funciona de forma similar ao <code>encodeURIComponent()</code> do JavaScript, codificando todos caracteres especiais, incluindo espaços (como +). Para codificar URLs inteiras, PHP oferece <code>rawurlencode()</code>, que segue o padrão RFC 3986, convertendo espaços para %20.',
  
        q3: 'Como implementar codificação/decodificação em Python?',
        a3: 'Em <strong>Python</strong>, use as funções <code>quote()</code> e <code>unquote()</code> do módulo <code>urllib.parse</code>. <code>quote()</code> é similar ao <code>encodeURIComponent()</code> do JavaScript, codificando todos caracteres especiais, incluindo espaços (como %20). <code>unquote()</code> decodifica strings codificadas em URL.' ,
  
        q4: 'Posso usar codificação Base64 em vez de codificação URL?',
        a4: 'Embora técnicas de <strong>codificação Base64</strong> sejam às vezes usadas para codificar dados em URLs (especialmente em implementações JWT), a codificação Base64 não substitui a codificação URL. Base64 converte dados binários em caracteres ASCII, mas pode gerar caracteres com significado especial em URLs como +, / e =.',
  
        q5: 'Como lidar com codificação URL em consultas SQL?',
        a5: 'Executar operações de <strong>codificação/decodificação em SQL Server</strong> geralmente envolve usar funções internas ou criar funções personalizadas. SQL Server não tem função nativa para codificação URL, mas você pode:<br><br>1. Executar codificação/decodificação no código da aplicação antes de construir consultas SQL.<br>2. Criar funções definidas pelo usuário em SQL. Para segurança, geralmente é melhor usar métodos apropriados de <strong>codificação/decodificação em C#</strong> (para aplicações .NET) ou outras implementações específicas da linguagem, em vez de lidar diretamente com codificação/decodificação em SQL.'
      },
      
      relatedTools: {
        title: 'Ferramentas Relacionadas',
        tool1: '<a href="https://meyerweb.com/eric/tools/dencoder/" target="_blank" rel="noopener noreferrer">URL Decoder/Encoder</a>',
        tool2: '<a href="https://www.urldecoder.org/" target="_blank" rel="noopener noreferrer">URL Decode and Encode - Online</a>',
        tool3: '<a href="https://www.url-encode-decode.com/" target="_blank" rel="noopener noreferrer">URL Encode Decode - URL Percent Encoding and Decoding.</a>'
      },
      
      resources: {
        title: 'Recursos Externos',
        resource1: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank" rel="noopener noreferrer">MDN Web Docs: encodeURIComponent()</a> - Documentação detalhada sobre funções de codificação em JavaScript',
        resource2: '<a href="https://www.php.net/manual/en/function.urlencode.php" target="_blank" rel="noopener noreferrer">Manual do PHP: urlencode()</a> - Documentação oficial sobre funções de codificação em PHP',
        resource3: '<a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1" target="_blank" rel="noopener noreferrer">Especificação de Envio de Formulários W3C</a> - Padrão oficial sobre como navegadores codificam dados de formulários'
      },
      
      conclusion: {
        title: 'Conclusão',
        content: 'Nossa ferramenta de <strong>codificação/decodificação de URL</strong> oferece uma solução versátil para todas necessidades relacionadas. Seja testando implementações em <strong>JavaScript</strong>, <strong>PHP</strong> ou <strong>Python</strong>, nossa ferramenta atende a todos os requisitos.'
      }
    }
  }