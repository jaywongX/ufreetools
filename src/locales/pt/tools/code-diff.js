export default {
    name: 'Comparador de Diferenças de Código',
    description: 'Compara dois trechos de código e destaca as diferenças',
    options: {
      title: 'Opções',
      ignoreCase: 'Ignorar maiúsculas/minúsculas',
      ignoreWhitespace: 'Ignorar espaços em branco',
      trimWhitespace: 'Remover espaços em branco',
      diffMode: 'Modo de diferença',
      diffModes: {
        chars: 'Caracteres',
        words: 'Palavras',
        lines: 'Linhas',
        sentences: 'Sentenças',
        json: 'JSON'
      },
      diffStyle: 'Estilo de exibição',
      diffStyles: {
        split: 'Visualização dividida',
        inline: 'Visualização em linha'
      },
      context: 'Linhas de contexto',
      wrap: 'Quebra de linha automática',
      languages: {
        plaintext: 'Texto simples',
        html: 'HTML',
        css: 'CSS',
        javascript: 'JavaScript',
        json: 'JSON'
      }
    },
    inputs: {
      original: 'Código original',
      modified: 'Código modificado',
      placeholderOriginal: 'Insira o código original aqui...',
      placeholderModified: 'Insira o código modificado aqui...'
    },
    actions: {
      compare: 'Comparar',
      clear: 'Limpar',
      swap: 'Trocar',
      copy: 'Copiar diferenças',
      download: 'Baixar diferenças',
      upload: 'Carregar arquivo'
    },
    results: {
      title: 'Resultados da diferença',
      changes: 'Alterações',
      additions: 'Adições',
      deletions: 'Exclusões',
      unchanged: 'Inalterado',
      noChanges: 'Nenhuma diferença encontrada - os textos são idênticos',
      loading: 'Gerando diferenças...'
    },
    upload: {
      originalFile: 'Arquivo original',
      modifiedFile: 'Arquivo modificado',
      dropOriginal: 'Arraste o arquivo original aqui ou clique para procurar',
      dropModified: 'Arraste o arquivo modificado aqui ou clique para procurar'
    },
    messages: {
      copied: 'Copiado para a área de transferência!',
      inputRequired: 'Por favor, insira texto em ambos os campos',
      diffGenerated: 'Diferenças geradas com sucesso',
      error: 'Erro ao gerar diferenças',
      fileError: 'Erro ao ler o arquivo'
    },
    tips: {
      title: 'Dicas de uso',
      compareOptions: 'Ajuste as opções de comparação conforme necessário - ignorar espaços é útil para comparação de código.',
      diffModes: 'Diferentes modos de diferença oferecem níveis variados de detalhes na comparação.',
      largeFiles: 'Para arquivos grandes, a comparação por linhas é mais eficiente.',
      jsonMode: 'Use o modo JSON para comparar dados estruturados - ele normaliza e compara a estrutura de objetos.'
    },
    article: {
      title: "Ferramenta de Comparação de Diferenças de Código: Entenda Mudanças de Código com Eficiência",
      features: {
        title: "Entendendo a Comparação de Diferenças de Código",
        description: "Esta <strong>ferramenta de comparação de diferenças de código</strong> é uma <strong>ferramenta de comparação de código</strong> avançada projetada para desenvolvedores e programadores, ajudando a identificar diferenças entre trechos de código. Este poderoso <strong>verificador de diferenças</strong> destaca adições, exclusões e modificações entre arquivos de texto, sendo inestimável para revisão de código, controle de versão e processos de depuração.<br><br>Nossa <strong>ferramenta de comparação de texto</strong> oferece vários modos de comparação, incluindo caracteres, palavras, linhas, sentenças e análise JSON dedicada. A ferramenta também oferece duas opções de visualização - visualização dividida e em linha - para se adaptar a diferentes preferências e cenários de uso. Seja trabalhando com código-fonte, arquivos de configuração ou qualquer conteúdo baseado em texto, esta <strong>ferramenta de comparação de código</strong> fornece insights precisos sobre mudanças entre versões.",
        useCases: {
          title: "Casos de Uso Práticos para Comparação de Código",
          items: [
            "Desenvolvedores de software rastreando <strong>mudanças de código</strong> entre versões de aplicativos para identificar fontes de bugs ou comportamentos inesperados",
            "Líderes de equipe realizando <strong>revisão de código</strong>, visualizando visualmente o que os membros da equipe modificaram em pull requests antes de aprovar mudanças",
            "Engenheiros DevOps comparando <strong>arquivos de configuração</strong> em diferentes ambientes para garantir consistência ou identificar personalizações específicas",
            "Autores técnicos comparando <strong>rascunhos de documentação</strong> para ver como o conteúdo evoluiu ou determinar seções que precisam ser atualizadas com base em mudanças no produto",
            "Analistas de dados verificando diferenças em <strong>estruturas JSON</strong> ou exportações de dados para entender como os modelos de dados mudaram ao longo do tempo",
            "Estudantes de programação comparando suas <strong>soluções de código</strong> com implementações de referência para entender diferentes abordagens para resolver problemas"
          ]
        }
      },
      faq: {
        title: "Perguntas Frequentes sobre Análise de Diferenças de Código",
        items: [
          {
            question: "Qual a diferença entre comparação baseada em caracteres e baseada em linhas?",
            answer: "A comparação baseada em caracteres identifica mudanças no nível de caracteres individuais, destacando modificações precisas dentro de palavras ou segmentos de código. É ideal para detectar pequenas mudanças sutis como modificações em nomes de variáveis. A comparação baseada em linhas trata cada linha como uma unidade, destacando linhas inteiras que foram adicionadas, removidas ou modificadas. Este modo é mais eficiente para arquivos grandes e fornece uma visão geral mais clara quando há grandes seções de código alteradas, sendo também o padrão na maioria dos sistemas de revisão de código e ferramentas de controle de versão."
          },
          {
            question: "A ferramenta de comparação de diferenças de código pode lidar com arquivos ou bases de código grandes?",
            answer: "Sim, nossa ferramenta de comparação de diferenças de código é otimizada para desempenho ao comparar arquivos grandes. Para bases de código extensas, recomendamos usar o modo de comparação baseado em linhas, que lida com diferenças de forma mais eficiente do que os modos baseados em caracteres ou palavras. A ferramenta implementa técnicas inteligentes de limitação e processamento para manter a responsividade mesmo com grandes entradas. No entanto, para arquivos extremamente grandes (texto de vários MB), você pode obter melhor desempenho focando em partes específicas do código em vez de comparar o arquivo inteiro de uma vez."
          },
          {
            question: "Como funciona o modo de comparação JSON?",
            answer: "O modo de comparação JSON é projetado especificamente para comparar dados estruturados. Diferente da comparação de texto padrão, este modo primeiro analisa ambas as entradas como objetos JSON, normalizando sua estrutura (tratando espaços em branco, indentação e ordenação de propriedades diferentes) e então identificando diferenças reais nos dados. Isso significa que dois objetos JSON com os mesmos dados mas formatados ou ordenados diferentemente serão reconhecidos como iguais. Este modo é especialmente valioso para comparar estruturas de resposta de API, gerenciamento de configuração e análise de dados, onde o conteúdo semântico é mais importante que a representação textual exata."
          },
          {
            question: "Posso usar esta ferramenta para comparar código em diferentes linguagens de programação?",
            answer: "Certamente. A ferramenta de comparação de diferenças de código funciona com qualquer formato baseado em texto, tornando-a independente de linguagem. Seja comparando JavaScript, Python, Java, C++, HTML, CSS ou qualquer outro código, ela destacará efetivamente diferenças sintáticas. Para melhor legibilidade, a ferramenta oferece realce de sintaxe para linguagens de programação populares, ajudando a visualizar mudanças no contexto apropriado da linguagem. Isso a torna igualmente valiosa para desenvolvedores full-stack que trabalham com múltiplas tecnologias ou especialistas focados em um único ecossistema de linguagem."
          },
          {
            question: "Como posso compartilhar ou salvar os resultados da comparação?",
            answer: "Nossa ferramenta de comparação de diferenças de código oferece várias opções para compartilhar e salvar resultados. Você pode usar o botão 'Copiar diferenças' para copiar as diferenças formatadas para a área de transferência e colar em documentos, e-mails ou aplicativos de chat. A função 'Baixar diferenças' permite salvar a comparação completa como um arquivo HTML que preserva todo o realce e formatação. Para integração com fluxos de trabalho, você também pode gerar links permanentes para comparações específicas para compartilhar com membros da equipe. Essas opções facilitam a incorporação de resultados de comparação em sua documentação, processos de revisão de código ou discussões de solução de problemas."
          }
        ]
      },
      guide: {
        title: "Guia Passo a Passo para Comparação de Código",
        steps: [
          "Primeiro selecione o <strong>modo de comparação</strong> mais adequado às suas necessidades - comparação baseada em linhas funciona bem para maioria das comparações de código, enquanto modos de palavras ou caracteres são melhores para diferenças textuais refinadas",
          "Escolha <strong>visualização dividida</strong> (lado a lado) ou <strong>visualização em linha</strong> baseado em sua preferência e tamanho de tela",
          "Cole ou digite seu <strong>código original</strong> na área de entrada esquerda, garantindo formatação adequada para melhor legibilidade",
          "Adicione seu <strong>código modificado</strong> na área de entrada direita - você também pode usar o botão de troca para inverter a direção da comparação se necessário",
          "Clique no botão <strong>Comparar</strong> para gerar uma visualização das diferenças entre os dois trechos de código",
          "Revise os resultados, onde <strong>conteúdo adicionado</strong> é destacado em verde, <strong>conteúdo removido</strong> em vermelho, e partes inalteradas permanecem neutras",
          "Use as <strong>estatísticas resumidas</strong> na parte inferior para entender rapidamente o escopo das mudanças (número de adições, exclusões e linhas totais alteradas)",
          "Para arquivos complexos, use a função de busca para localizar seções ou mudanças específicas no código comparado"
        ]
      },
      conclusion: "A ferramenta de comparação de diferenças de código simplifica a tarefa normalmente complexa de identificar e entender mudanças no código. Ao fornecer uma representação clara e visual das diferenças entre arquivos de texto, ela economiza tempo valioso para desenvolvedores e profissionais técnicos em processos de depuração, revisão de código e gerenciamento de versão. Seja rastreando mudanças em grandes bases de código, revisando o trabalho de colegas ou tentando determinar quando e onde um bug foi introduzido, esta ferramenta de comparação oferece a precisão e flexibilidade necessárias para entender código em evolução. O uso regular desta ferramenta pode melhorar seus fluxos de trabalho de desenvolvimento, aumentar a qualidade do código através de melhores revisões e ajudar a manter consistência entre versões de projetos."
    }
  }