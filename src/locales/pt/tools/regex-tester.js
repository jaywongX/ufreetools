export default {
    name: 'Testador de Expressões Regulares',
    description: 'Teste e depure expressões regulares com realce em tempo real e explicações',
    actions: {
      test: 'Testar',
      clear: 'Limpar',
      showExamples: 'Mostrar exemplos',
      hideExamples: 'Ocultar exemplos',
      copy: 'Copiar'
    },
    sections: {
      examples: 'Exemplos comuns de regex',
      pattern: 'Padrão da expressão regular',
      input: 'Texto de teste',
      results: 'Resultados da correspondência',
      flags: 'Flags'
    },
    flags: {
      g: 'Correspondência global (g)',
      i: 'Ignorar maiúsculas/minúsculas (i)',
      m: 'Modo multilinha (m)',
      s: 'Ponto corresponde a tudo (s)',
      u: 'Modo Unicode (u)',
      y: 'Correspondência aderente (y)'
    },
    errors: {
      emptyRegex: 'Insira uma expressão regular',
      emptyTestString: 'Insira um texto para testar',
      invalidRegex: 'Expressão regular inválida'
    },
    messages: {
      matchesFound: '{count} correspondências encontradas',
      noMatches: 'Nenhuma correspondência encontrada',
      copied: 'Copiado para a área de transferência!'
    },
    placeholders: {
      pattern: 'Digite o padrão da expressão regular',
      testString: 'Digite o texto para testar'
    },
    options: {
      flags: 'Flags',
      global: 'Correspondência global (g)',
      caseInsensitive: 'Ignorar maiúsculas/minúsculas (i)',
      multiline: 'Modo multilinha (m)',
      dotAll: 'Ponto corresponde a tudo (s)',
      unicode: 'Modo Unicode (u)',
      sticky: 'Correspondência aderente (y)'
    },
    labels: {
      pattern: 'Expressão Regular',
      testString: 'Texto de Teste',
      matches: 'Correspondências',
      groups: 'Grupos',
      noMatches: 'Nenhuma correspondência'
    },
    tips: {
      title: 'Dicas de uso',
      pattern: 'Não inclua barras ao redor do padrão da expressão regular.',
      flags: 'Use flags para modificar o comportamento da correspondência (g: global, i: ignorar maiúsculas/minúsculas, m: multilinha).',
      examples: 'Clique em "Mostrar exemplos" para ver padrões comuns de expressões regulares.',
      testing: 'Após inserir o padrão e o texto de teste, clique em "Testar" para ver os resultados.'
    },
    article: {
      title: "Testador de Regex: Ferramenta interativa para correspondência de padrões",
      features: {
        title: "Entendendo expressões regulares",
        description: "<strong>O Testador de Expressões Regulares</strong> é uma ferramenta interativa poderosa para desenvolvedores, analistas de dados e profissionais de processamento de texto criarem, testarem e depurarem expressões regulares (regex). Regex são sequências de caracteres especiais que definem padrões de busca para correspondência, extração e manipulação complexa de texto.<br><br>Nossa <strong>ferramenta de teste de regex</strong> fornece feedback visual em tempo real enquanto você constrói padrões, destacando correspondências no texto de teste e mostrando detalhes sobre grupos de captura e posições de correspondência.",
        useCases: {
          title: "Aplicações práticas de regex",
          items: [
            "<strong>Validação de formulários</strong>: Desenvolvedores web podem usar este <strong>testador de padrões regex</strong> para ajustar expressões que validam endereços de email, números de telefone, senhas e outros campos.",
            "<strong>Extração de dados</strong>: Analistas de dados usam regex para extrair informações específicas de textos não estruturados.",
            "<strong>Processamento de texto</strong>: Editores e desenvolvedores usam padrões regex para buscar e substituir textos em múltiplos documentos.",
            "<strong>Análise de logs</strong>: Administradores de sistemas usam regex para analisar arquivos de log e identificar mensagens de erro.",
            "<strong>Consultas de busca</strong>: Regex permite buscas avançadas em motores de busca, editores de código e bancos de dados.",
            "<strong>Aprendizado</strong>: Estudantes podem usar esta <strong>ferramenta interativa</strong> para aprender regex vendo resultados imediatos."
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre regex",
        items: [
          {
            question: "O que são expressões regulares e por que são úteis?",
            answer: "Expressões regulares (regex) são padrões de texto especiais para busca em strings. Elas permitem:<br><br>• <strong>Buscar padrões específicos</strong> em textos<br>• <strong>Validar formatos</strong> como emails, telefones ou datas<br>• <strong>Extrair partes específicas</strong> de documentos<br>• <strong>Substituir textos</strong> baseado em padrões<br><br>Nosso <strong>testador de padrões regex</strong> ajuda a dominar esse poder."
          },
          {
            question: "O que significam as flags g, i, m, s, u e y?",
            answer: "Flags modificam o comportamento da correspondência:<br><br>• <strong>g (global)</strong>: Encontra todas as correspondências<br>• <strong>i (ignore case)</strong>: Ignora diferenças de maiúsculas/minúsculas<br>• <strong>m (multiline)</strong>: Altera o comportamento de ^ e $<br>• <strong>s (dotall)</strong>: Faz . corresponder a quebras de linha<br>• <strong>u (unicode)</strong>: Habilita suporte a Unicode<br>• <strong>y (sticky)</strong>: Correspondência a partir de posição específica"
          },
          {
            question: "Como funcionam grupos de captura em regex?",
            answer: "Grupos de captura (definidos por parênteses ()) extraem partes específicas do texto correspondente. Eles são mostrados na seção de detalhes de correspondência do nosso <strong>validador de regex</strong>."
          },
          {
            question: "Por que minha regex não está correspondendo como esperado?",
            answer: "Problemas comuns incluem:<br><br>1. <strong>Caracteres especiais</strong> não escapados<br>2. <strong>Quantificadores gananciosos</strong> (*, +)<br>3. <strong>Flags ausentes</strong> (g, i)<br>4. <strong>Espaços em branco</strong> não considerados<br>5. <strong>Âncoras mal usadas</strong> (^, $)<br><br>Nossa <strong>ferramenta de teste</strong> ajuda a identificar esses problemas com feedback visual."
          }
        ]
      },
      guide: {
        title: "Como usar o testador de regex: Guia passo a passo",
        step1: "<strong>Insira o padrão regex</strong>: No campo 'Expressão Regular', digite sua regex sem as barras.",
        step2: "<strong>Selecione as flags</strong>: Escolha flags como 'g' (global), 'i' (ignorar maiúsculas/minúsculas) ou 'm' (multilinha).",
        step3: "<strong>Insira o texto de teste</strong>: No campo 'Texto de Teste', digite o texto onde a regex será aplicada.",
        step4: "<strong>Clique em 'Testar'</strong>: Veja os resultados da correspondência no texto.",
        step5: "<strong>Analise os resultados</strong>: Correspondências são destacadas e detalhadas.",
        step6: "<strong>Ajuste o padrão</strong>: Modifique a regex conforme necessário e teste novamente.",
        step7: "<strong>Explore exemplos</strong>: Use exemplos prontos para emails, telefones, datas etc."
      },
      conclusion: "O Testador de Expressões Regulares simplifica a criação e depuração de padrões regex com feedback visual em tempo real, destacando correspondências e detalhando cada componente. Seja para validação de dados, extração de informações ou aprendizado, esta ferramenta interativa ajuda profissionais a dominar regex com eficiência."
    },
    match: 'Correspondência',
    position: 'Posição',
    group: 'Grupo',
    resultsWillAppearHere: 'Os resultados da correspondência aparecerão aqui...',
    regexError: 'Erro na expressão regular: {message}',
    emailAddress: 'Email',
    phoneNumber: 'Telefone (Brasil)',
    ipAddress: 'Endereço IP',
    dateFormat: 'Data (dd/mm/aaaa)',
    chineseCharacters: 'Caracteres chineses',
    phoneNumberExample: 'Contato: (11) 98765-4321\nWhatsApp: (21) 91234-5678\nFixo: 4003-1234',
    urlExample: 'Acesse https://exemplo.com.br\nou http://www.dominio.org/caminho?busca=valor',
    ipAddressExample: 'Servidor: 192.168.1.1\nDNS: 8.8.8.8, 1.1.1.1',
    dateFormatExample: 'Data inicial: 15/01/2023\nData final: 28/02/2023\nData inválida: 31/02/2023',
    chineseCharactersExample: 'Olá mundo! 你好，世界!'
  }