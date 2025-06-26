export default {
    name: 'Codificador de Entidades HTML',
    description: 'Converta entre texto HTML e entidades codificadas',
    title: 'Codificador/Decodificador de Entidades HTML',
    intro: 'A codificação de entidades HTML converte caracteres especiais em formatos seguros para HTML, útil para prevenir ataques XSS ou exibir código-fonte HTML.',
    
    operation: {
      title: 'Tipo de Operação',
      encode: 'Codificar para Entidades HTML',
      decode: 'Decodificar Entidades HTML'
    },
    
    mode: {
      title: 'Modo de Codificação',
      named: 'Entidade Nomeada (&amp;lt;)',
      decimal: 'Entidade Decimal (&amp;#60;)',
      hex: 'Entidade Hexadecimal (&amp;#x3C;)',
      full: 'Codificação Completa (todos caracteres)'
    },
    
    input: {
      encodeTitle: 'Texto para Codificar',
      decodeTitle: 'Texto para Decodificar',
      encodePlaceholder: 'Digite o HTML ou texto a ser codificado...',
      decodePlaceholder: 'Digite o texto com entidades HTML a decodificar...',
      clear: 'Limpar'
    },
    
    output: {
      encodeTitle: 'Resultado da Codificação',
      decodeTitle: 'Resultado da Decodificação',
      copy: 'Copiar Resultado',
      copied: '(Copiado',
      preview: 'Visualizar',
      showSource: 'Mostrar Código-Fonte'
    },
    
    reference: {
      title: 'Referência de Entidades',
      commonReferenceTables: 'Tabela de Entidades HTML Comuns',
      show: 'Mostrar Tabela',
      hide: 'Ocultar Tabela',
      description: {
        named: 'Usa formato nomeado como &amp;lt; para &lt; (apenas para entidades HTML comuns)',
        decimal: 'Usa formato decimal como &amp;#60; para &lt;',
        hex: 'Usa formato hexadecimal como &amp;#x3C; para &lt;',
        full: 'Codifica todos caracteres não alfanuméricos, incluindo espaços e quebras de linha'
      },
      table: {
        char: 'Caractere',
        named: 'Entidade Nomeada',
        decimal: 'Entidade Decimal',
        description: 'Descrição'
      },
      entities: {
        lt: 'Sinal de menor que',
        gt: 'Sinal de maior que',
        amp: 'E comercial',
        quot: 'Aspas duplas',
        apos: 'Aspas simples',
        copy: 'Símbolo de copyright',
        reg: 'Marca registrada',
        trade: 'Símbolo de trademark',
        nbsp: 'Espaço sem quebra',
        cent: 'Símbolo de centavo',
        pound: 'Símbolo de libra',
        euro: 'Símbolo de euro',
        yen: 'Símbolo de yen/yuan',
        sect: 'Símbolo de seção',
        minus: 'Sinal de menos',
        times: 'Sinal de multiplicação',
        divide: 'Sinal de divisão',
        deg: 'Símbolo de grau',
        plusmn: 'Sinal de mais/menos',
        frac14: 'Um quarto'
      }
    },
    
    messages: {
      copySuccess: 'Copiado para área de transferência',
      copyError: 'Falha ao copiar - copie manualmente',
      encodeSuccess: 'Codificação concluída',
      decodeSuccess: 'Decodificação concluída',
      invalidInput: 'Texto de entrada inválido'
    },
    
    article: {
      title: "Codificador HTML: Ferramenta Essencial para Segurança Web",
      features: {
        title: "Entendendo a Codificação HTML",
        description: `<strong>O Codificador de Entidades HTML</strong> é uma ferramenta especializada que converte caracteres especiais em suas respectivas <strong>entidades HTML</strong>. Esse processo, chamado <strong>codificação HTML</strong>, é crucial para segurança na web e renderização correta de conteúdo.<br><br>
        A função principal deste <strong>codificador de entidades</strong> é transformar caracteres que poderiam ser interpretados como marcação HTML (como &lt; e &gt;) em suas <strong>entidades</strong> correspondentes (como &amp;lt; e &amp;gt;). A ferramenta oferece múltiplos modos de codificação, incluindo <strong>entidades nomeadas</strong>, <strong>decimais</strong>, <strong>hexadecimais</strong> e <strong>codificação completa</strong> de todos caracteres não-alfanuméricos. Também inclui funcionalidade básica para <strong>decodificar</strong> entidades HTML de volta aos caracteres originais.`,
        
        useCases: {
          title: "Aplicações Práticas da Codificação HTML",
          items: [
            "Desenvolvedores web codificam inputs de usuários antes da exibição para prevenir ataques XSS",
            "Autores de conteúdo incorporam trechos de código em artigos onde tags HTML precisam ser exibidas como texto",
            "Administradores de CMS garantem que caracteres especiais apareçam corretamente em diferentes navegadores",
            "Designers de templates de email codificam caracteres especiais para renderização consistente",
            "Administradores de banco de dados preparam dados HTML para armazenamento seguro",
            "Profissionais de segurança auditam páginas em busca de problemas de codificação"
          ]
        }
      },
      
      faq: {
        title: "Perguntas Frequentes sobre Codificação HTML",
        items: [
          {
            question: "Qual a diferença entre os modos de codificação?",
            answer: "Entidades nomeadas (ex: &amp;lt;) usam nomes padronizados para caracteres comuns, sendo mais legíveis. Entidades decimais (ex: &amp;#60;) usam números decimais baseados em Unicode. Entidades hexadecimais (ex: &amp;#x3C;) usam hexadecimal. A codificação completa converte todos caracteres não-alfanuméricos, oferecendo máxima proteção."
          },
          {
            question: "Por que a codificação é importante para segurança web?",
            answer: "A codificação previne ataques XSS ao garantir que conteúdo fornecido por usuários seja exibido como texto literal, não como código executável. Sem codificação, hackers podem injetar scripts maliciosos que roubam dados ou redirecionam usuários."
          },
          {
            question: "Quando devo usar codificação HTML versus outros tipos?",
            answer: "Use codificação HTML para conteúdo exibido em páginas web. Para JavaScript, use escape específico. Para URLs, use codificação de URL. Para CSS, use escape CSS. Cada contexto tem suas próprias necessidades de segurança."
          },
          {
            question: "A codificação afeta a aparência visual do conteúdo?",
            answer: "Não - navegadores decodificam e renderizam entidades como os caracteres originais. Por exemplo, &amp;copy; aparece como © para usuários. A codificação só é visível no código-fonte."
          },
          {
            question: "Posso codificar caracteres internacionais e emojis?",
            answer: "Sim - qualquer caractere Unicode pode ser codificado usando formatos decimal ou hexadecimal. Para textos internacionais extensos, considere usar UTF-8 com codificação seletiva de caracteres especiais."
          }
        ]
      },
      
      guide: {
        title: "Guia de Uso do Codificador HTML",
        steps: [
          "Selecione o tipo de operação: codificar (texto → entidades) ou decodificar (entidades → texto)",
          "Para codificação, escolha o modo: nomeado (legível), decimal, hexadecimal ou completo (máxima proteção)",
          "Insira seu texto no campo apropriado",
          "Clique no botão correspondente (Codificar/Decodificar)",
          "Verifique o resultado. Para codificação, alterne entre visualização e código-fonte",
          "Copie o resultado para uso em seu projeto",
          "Consulte a tabela de referência para entidades HTML comuns"
        ]
      },
      
      conclusion: "A codificação de entidades HTML é uma prática essencial para desenvolvedores web preocupados com segurança e renderização consistente. Esta ferramenta simplifica o processo, ajudando a proteger aplicações contra injeção de código enquanto garante que conteúdo especial seja exibido corretamente em todas plataformas."
    }
  }