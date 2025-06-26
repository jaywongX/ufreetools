export default {
    name: 'Gerador de Fluxogramas',
    description: 'Crie fluxogramas e diagramas usando uma sintaxe textual simples',
    title: 'Gerador de Fluxogramas e Diagramas',
    renderBtn: 'Renderizar Diagrama',
    resetBtn: 'Redefinir',
    downloadSvgBtn: 'Baixar SVG',
    copySvgBtn: 'Copiar SVG',
    input: {
      title: 'Definição do Fluxograma',
      placeholder: 'Digite o código em sintaxe Mermaid...',
      loadExample: 'Carregar Exemplo',
      clear: 'Limpar',
      uploadFile: 'Carregar Arquivo'
    },
    output: {
      title: 'Fluxograma Gerado',
      downloadImage: 'Baixar Imagem',
      downloadSVG: 'Baixar SVG',
      copyImage: 'Copiar Imagem',
      copySVG: 'Copiar SVG',
      zoomIn: 'Ampliar',
      zoomOut: 'Reduzir',
      fitView: 'Ajustar à Visualização',
      resetView: 'Redefinir Visualização',
      preview: 'Pré-visualização',
      code: 'Código Mermaid'
    },
    options: {
      title: 'Opções',
      theme: 'Tema',
      orientation: 'Orientação',
      nodeShape: 'Formato do Nó',
      arrowStyle: 'Estilo da Seta',
      lineStyle: 'Estilo da Linha',
      textPosition: 'Posição do Texto',
      fontSize: 'Tamanho da Fonte',
      fontFamily: 'Fonte',
      showGrid: 'Mostrar Grade',
      autoRender: 'Renderização Automática'
    },
    themes: {
      default: 'Padrão',
      simple: 'Simples',
      forest: 'Floresta',
      neutral: 'Neutro',
      dark: 'Escuro',
      business: 'Negócios',
      base: 'Base',
      custom: 'Personalizado'
    },
    orientations: {
      topToBottom: 'De Cima para Baixo',
      bottomToTop: 'De Baixo para Cima',
      leftToRight: 'Da Esquerda para Direita',
      rightToLeft: 'Da Direita para Esquerda'
    },
    nodeShapes: {
      rectangle: 'Retângulo',
      roundedRectangle: 'Retângulo Arredondado',
      circle: 'Círculo',
      diamond: 'Losango',
      hexagon: 'Hexágono',
      parallelogram: 'Paralelogramo'
    },
    arrowStyles: {
      arrow: 'Seta',
      open: 'Aberta',
      filled: 'Preenchida',
      diamond: 'Losango',
      circle: 'Círculo'
    },
    lineStyles: {
      solid: 'Contínua',
      dashed: 'Tracejada',
      dotted: 'Pontilhada',
      curved: 'Curva',
      straight: 'Reta',
      orthogonal: 'Ortogonal'
    },
    syntax: {
      title: 'Ajuda de Sintaxe',
      node: 'Nó',
      edge: 'Aresta',
      subgraph: 'Subgrafo',
      comment: 'Comentário',
      styling: 'Estilização',
      showMore: 'Mostrar Mais'
    },
    actions: {
      render: 'Renderizar Fluxograma',
      save: 'Salvar Diagrama',
      export: 'Exportar',
      share: 'Compartilhar'
    },
    messages: {
      renderSuccess: 'Fluxograma renderizado com sucesso',
      renderError: 'Erro ao renderizar fluxograma: {error}',
      syntaxError: 'Erro de sintaxe: {error}',
      saved: 'Diagrama salvo',
      copied: 'Código SVG copiado para a área de transferência',
      copyFailed: 'Falha ao copiar, copie manualmente',
      exported: 'Fluxograma exportado',
      emptyCode: 'Digite o código em sintaxe Mermaid',
      rendering: 'Renderizando...',
      errorTitle: 'Erro de Renderização'
    },
    examples: {
      flowchart: 'Fluxograma',
      classDiagram: 'Diagrama de Classes',
      sequenceDiagram: 'Diagrama de Sequência',
      entityRelationship: 'Diagrama Entidade-Relacionamento',
      gantt: 'Diagrama de Gantt',
      stateDiagram: 'Diagrama de Estados',
      pieChart: 'Gráfico de Pizza',
      userJourney: 'Jornada do Usuário'
    },
    exampleCodes: {
      flowchart: `graph TD
      A[Início] --> B{Está correto?}
      B -->|Sim| C[Resultado Correto]
      B -->|Não| D[Resultado Incorreto]
      C --> E[Fim]
      D --> E
  `,
      sequenceDiagram: `sequenceDiagram
      participant Cliente
      participant Servidor
      Cliente->>Servidor: Solicita dados
      Servidor-->>Cliente: Responde dados
      Cliente->>Servidor: Envia formulário
      Servidor-->>Cliente: Confirma envio
  `,
      gantt: `gantt
      title Cronograma do Projeto
      dateFormat  YYYY-MM-DD
      section Fase de Planejamento
      Coleta de Requisitos :a1, 2023-01-01, 30d
      Design do Sistema :after a1, 20d
      section Fase de Desenvolvimento
      Desenvolvimento Backend :2023-02-20, 45d
      Desenvolvimento Frontend :2023-02-25, 40d
      section Fase de Testes
      Testes do Sistema :2023-04-05, 20d
      Testes de Usuário :2023-04-20, 15d
      section Fase de Implantação
      Implantação :2023-05-05, 10d
  `,
      stateDiagram: `stateDiagram-v2
      [*] --> Editando
      Editando --> Revisando: Envia para revisão
      Revisando --> Rejeitado: Rejeita
      Revisando --> Publicado: Aprova
      Rejeitado --> Editando: Modifica e reenvia
      Publicado --> [*]
  `,
      pieChart: `pie
      title Distribuição de Acesso ao Site
      "Buscadores" : 42.7
      "Acesso Direto" : 28.9
      "Redes Sociais" : 18.5
      "Outros Canais" : 9.9
  `,
      classDiagram: `classDiagram
      class Animal {
          +String nome
          +int idade
          +emitirSom() void
      }
      class Cachorro {
          +String raça
          +buscar() void
      }
      class Gato {
          +String cor
          +escalar() void
      }
      Animal <|-- Cachorro
      Animal <|-- Gato
  `
    },
    article: {
      title: "Gerador de Fluxogramas: Visualize processos complexos com sintaxe textual simples",
      features: {
        title: "Explore o poder da tecnologia texto-para-diagrama",
        description: "Este <strong>Gerador de Fluxogramas</strong> é uma ferramenta versátil que transforma sintaxe textual simples em diagramas profissionais e visualmente atraentes. Utilizando a poderosa <strong>sintaxe Mermaid</strong>, a ferramenta permite criar diversos tipos de diagramas sem necessidade de habilidades em design gráfico ou softwares complexos.<br><br>Sua função principal é converter instruções textuais em conteúdo visual estruturado, permitindo representar processos, fluxos de trabalho, hierarquias e relacionamentos através de diagramas intuitivos. A abordagem baseada em texto significa que você pode rascunhar, editar e versionar seus diagramas rapidamente, em paralelo com códigos ou documentação. Seja para criar <strong>fluxogramas</strong> básicos, complexos <strong>diagramas de sequência</strong>, detalhados <strong>diagramas de classes</strong>, informativos <strong>diagramas de Gantt</strong>, perspicazes <strong>diagramas de estados</strong> ou <strong>gráficos de pizza</strong> baseados em dados, esta ferramenta oferece uma maneira simplificada de gerar visualizações profissionais a partir de descrições textuais simples.",
        useCases: {
          title: "Cenários práticos para geração de fluxogramas",
          items: [
            "<strong>Documentação de software</strong>: Crie visualizações claras de arquiteturas de código, esquemas de banco de dados e fluxos de trabalho de aplicativos diretamente a partir de descrições textuais. Desenvolvedores podem usar esta <strong>ferramenta de criação de fluxogramas</strong> para documentar algoritmos complexos, hierarquias de classes e interações de sistemas, ajudando novos membros da equipe a entender o código-base de forma mais eficiente.",
            "<strong>Visualização de projetos</strong>: Gere diagramas de Gantt e fluxogramas abrangentes para mapear cronogramas, dependências e caminhos críticos. Gerentes de projeto podem usar esses <strong>fluxogramas visuais</strong> para comunicar estruturas de projetos aos stakeholders, identificar gargalos e acompanhar o progresso das atividades planejadas.",
            "<strong>Modelagem de processos</strong>: Documente fluxos de trabalho organizacionais, processos de aprovação e procedimentos operacionais em formato visual padronizado. Analistas de negócios podem criar <strong>fluxogramas empresariais</strong> para analisar processos existentes, identificar ineficiências e simular propostas de melhorias.",
            "<strong>Materiais educacionais</strong>: Desenvolva diagramas didáticos para ensinar conceitos complexos, algoritmos ou sistemas. Educadores podem usar este <strong>gerador de diagramas online</strong> para criar auxílios visuais que melhoram a compreensão de estudantes sobre conceitos abstratos ou frameworks teóricos.",
            "<strong>Documentação técnica</strong>: Enriqueça manuais de usuário, documentação de APIs e guias técnicos com diagramas ilustrativos gerados a partir de descrições textuais. Autores técnicos podem incorporar <strong>fluxogramas de sequência</strong> para esclarecer interações complexas, tornando a documentação mais acessível.",
            "<strong>Visualização de árvores de decisão</strong>: Modele fluxos complexos de tomada de decisão com lógica condicional e resultados. Analistas podem gerar <strong>fluxogramas de decisão</strong> para avaliar opções, comunicar critérios decisórios e documentar o raciocínio por trás de escolhas estratégicas."
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre geração de fluxogramas",
        items: [
          {
            question: "O que é sintaxe Mermaid e qual a dificuldade de aprendizado?",
            answer: "A sintaxe Mermaid é uma linguagem simples e baseada em texto para criação de diagramas, com abordagem intuitiva similar ao markdown. Foi projetada para ser fácil de aprender, mesmo para usuários não técnicos. A maioria das pessoas consegue dominar o básico em 15-30 minutos de prática. A sintaxe segue uma estrutura lógica: primeiro declara-se o tipo de diagrama (fluxograma, diagrama de sequência etc.), depois define-se elementos e conexões usando padrões textuais simples. Por exemplo, uma conexão básica em fluxograma é escrita como 'A-->B', indicando que A está conectado a B. A curva de aprendizado é suave porque a sintaxe é declarativa - você descreve o que quer, não como desenhar. Nosso gerador inclui modelos de exemplo para tipos comuns de diagramas, permitindo que você comece modificando exemplos existentes ao invés de escrever do zero."
          },
          {
            question: "Posso exportar diagramas para outros aplicativos?",
            answer: "Sim, nosso gerador oferece múltiplas opções de exportação para garantir compatibilidade com diversos aplicativos e casos de uso. O principal formato de exportação é SVG (Scalable Vector Graphics), que mantém resolução perfeita em qualquer tamanho - ideal para uso web, apresentações e documentação profissional. Arquivos SVG podem ser importados diretamente em aplicativos de design como Adobe Illustrator, Figma ou Inkscape para personalização adicional. Para usuários que necessitam de formatos bitmap, SVG pode ser facilmente convertido para PNG ou JPEG usando funcionalidades do navegador ou ferramentas externas. Além disso, como os diagramas são gerados a partir de sintaxe textual, você pode sempre armazenar e compartilhar o código-fonte - permitindo que outros não apenas visualizem, mas também modifiquem e regenerem os diagramas usando nossa ferramenta."
          },
          {
            question: "Que tipos de diagramas posso criar com esta ferramenta?",
            answer: "Nosso gerador suporta diversos tipos de diagramas para atender diferentes necessidades de visualização. Além de fluxogramas básicos, você pode criar diagramas de sequência (mostrando como processos interagem e em qual ordem), ideais para documentar interações de sistemas ou fluxos de API. Diagramas de classes ajudam a visualizar estruturas orientadas a objetos, mostrando classes, atributos, métodos e seus relacionamentos. Diagramas de Gantt fornecem visualizações de cronogramas de projetos com dependências e marcos. Diagramas de estados ilustram diferentes estados de um sistema e transições entre eles, perfeitos para modelar comportamentos de aplicativos ou processos de negócio. Diagramas entidade-relacionamento (ERD) ajudam a visualizar estruturas de bancos de dados. Gráficos de pizza permitem visualizações simples de dados percentuais. Cada tipo de diagrama usa uma variação específica da sintaxe, otimizada para suas necessidades visuais particulares."
          },
          {
            question: "Como personalizar a aparência dos meus diagramas?",
            answer: "O gerador oferece várias maneiras de personalizar a aparência dos diagramas enquanto mantém a simplicidade da abordagem baseada em texto. Você pode escolher entre múltiplos temas pré-definidos (padrão, floresta, escuro, neutro, base) que afetam o esquema de cores e estilo geral. Para elementos individuais, use modificadores na sintaxe para especificar formas (retângulo, círculo, losango etc.), estilos de borda, cores de preenchimento e formatação de texto. Conexões entre elementos podem ser personalizadas com diferentes estilos de setas, tipos de linha (contínua, pontilhada, tracejada) e direcionalidade. O posicionamento e alinhamento de texto pode ser ajustado para melhor legibilidade. Usuários avançados podem incorporar classes CSS para manter estilos consistentes entre múltiplos elementos. O editor visual fornece feedback em tempo real conforme você ajusta esses elementos de estilo."
          },
          {
            question: "É possível criar estruturas aninhadas complexas nos meus diagramas?",
            answer: "Sim, nosso gerador suporta totalmente a criação de estruturas aninhadas complexas através de subgrafos e agrupamentos. Você pode definir subgrafos para agrupar elementos relacionados, criando organização hierárquica dentro do diagrama. Isso é especialmente útil para representar fluxos aninhados, arquiteturas de componentes ou estruturas organizacionais. Por exemplo, em um diagrama de arquitetura de sistema, você pode criar subgrafos separados para componentes front-end, serviços back-end e camadas de banco de dados, cada um contendo seus próprios elementos. Esses subgrafos podem ter estilos diferentes para fornecer distinção visual entre partes ou níveis do diagrama. A sintaxe para criar essas estruturas aninhadas segue a mesma abordagem lógica e baseada em texto - geralmente usando indentação ou notação entre chaves para definir o escopo de cada subgrafo."
          }
        ]
      },
      guide: {
        title: "Guia passo a passo para usar o Gerador de Fluxogramas",
        steps: [
          "<strong>Selecione o tipo de diagrama</strong>: Primeiro determine qual tipo de diagrama melhor atende sua necessidade. A ferramenta suporta fluxogramas, diagramas de sequência, diagramas de classes, diagramas de Gantt, diagramas de estados, gráficos de pizza e mais. Você pode carregar exemplos de qualquer tipo clicando nos botões de exemplo abaixo do editor, obtendo rapidamente a estrutura sintática correta.",
          "<strong>Escreva ou edite o código do diagrama</strong>: No painel esquerdo, insira o código em sintaxe Mermaid que descreve seu diagrama. Para fluxogramas básicos, comece com 'graph TD' (topo para baixo) ou 'graph LR' (esquerda para direita), então defina nós e suas conexões. Por exemplo: 'A[Início] --> B$#123;Decisão$#125; --> C[Fim]' cria um fluxograma simples de três nós. Diferentes tipos de diagramas têm sintaxes ligeiramente diferentes, mas seguem padrões lógicos consistentes.",
          "<strong>Pré-visualize e valide</strong>: Clique no botão 'Renderizar Diagrama' na barra de ferramentas para visualizar seu diagrama no painel direito. A ferramenta validará automaticamente sua sintaxe e mostrará quaisquer erros. Se houver problemas de sintaxe, mensagens de erro ajudarão a identificar e corrigir questões. Este ciclo de feedback imediato ajuda a corrigir erros e refinar seu diagrama rapidamente.",
          "<strong>Ajuste e personalize</strong>: Com o diagrama básico funcionando, refine-o adicionando mais nós, conexões ou detalhes. Personalize a aparência selecionando diferentes temas no menu suspenso da barra de ferramentas. Adicione declarações de estilo inline para estilizar elementos individuais, ajustando formas de nós, cores ou estilos de conexão para melhorar clareza e apelo visual.",
          "<strong>Expanda com recursos avançados</strong>: Enriqueça seu diagrama com recursos avançados como subgrafos para agrupar elementos relacionados, nós clicáveis para criar diagramas interativos ou estilos especiais para enfatizar pontos-chave. Para diagramas complexos, considere dividir fluxos grandes em subgrafos lógicos para melhorar legibilidade e organização. Adicione comentários no código (usando %% para linhas de comentário) para documentar a estrutura do seu diagrama para referência futura.",
          "<strong>Exporte seu diagrama</strong>: Quando satisfeito com seu diagrama, exporte-o como arquivo SVG clicando no botão 'Baixar SVG' na barra de ferramentas. O formato SVG mantém resolução perfeita em qualquer escala, sendo ideal para documentação, apresentações ou edição adicional em softwares de design. Alternativamente, use o botão 'Copiar SVG' para copiar diretamente o código SVG para a área de transferência, pronto para uso imediato em documentos HTML ou outros aplicativos.",
          "<strong>Salve seu trabalho</strong>: Para salvar diagramas para edição futura, armazene o código Mermaid em si. Como os diagramas são gerados a partir deste código, salvá-lo permite recarregar e modificar o diagrama posteriormente. Copie o código do editor e armazene-o em arquivo de texto, incorpore-o na documentação do projeto ou armazene-o em sistema de controle de versão junto com código ou documentação relacionada."
        ]
      },
      conclusion: "O Gerador de Fluxogramas transforma a tradicionalmente complexa tarefa de criar diagramas profissionais em um processo acessível e eficiente para usuários de todos os níveis técnicos. Ao aproveitar o poder da diagramação baseada em texto, elimina as frustrações de posicionar elementos manualmente e manter consistência visual que afligem ferramentas de desenho tradicionais. Esta abordagem não apenas economiza tempo significativo, como também se integra perfeitamente com fluxos de trabalho modernos de desenvolvimento, sistemas de documentação e processos de controle de versão. À medida que a comunicação visual se torna cada vez mais importante em nosso cenário digital complexo, ferramentas que simplificam a criação de diagramas claros e precisos são inestimáveis para compartilhamento eficaz de conhecimento, documentação de processos e comunicação técnica. Seja você um desenvolvedor documentando arquiteturas de código, um gerente visualizando cronogramas, um analista modelando processos ou um educador explicando conceitos complexos, o Gerador de Fluxogramas oferece o equilíbrio ideal entre simplicidade e poder, trazendo suas ideias à vida visualmente sem a curva de aprendizado íngreme de softwares especializados."
    }
  }