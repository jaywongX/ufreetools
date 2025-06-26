export default {
    name: 'Exemplos de Diagramas',
    description: 'Explore e utilize diversos exemplos de diagramas para atender diferentes necessidades de modelagem',
    title: 'Exemplos Avançados de Fluxogramas',
    categories: {
      title: 'Categorias',
      flowcharts: 'Fluxogramas',
      uml: 'Diagramas UML',
      network: 'Diagramas de Rede',
      architecture: 'Diagramas de Arquitetura',
      entity: 'Diagramas Entidade-Relacionamento',
      sequence: 'Diagramas de Sequência',
      mindmaps: 'Mapas Mentais',
      gantt: 'Diagramas de Gantt',
      other: 'Outros Diagramas'
    },
    actions: {
      search: 'Buscar exemplos',
      filter: 'Filtrar por categoria',
      sortBy: 'Ordenar por',
      useExample: 'Usar este exemplo',
      viewFull: 'Ver em tamanho completo',
      copyCode: 'Copiar código',
      addToFavorites: 'Adicionar aos favoritos',
      removeFavorite: 'Remover dos favoritos'
    },
    sortOptions: {
      popularity: 'Popularidade',
      newest: 'Mais recentes',
      alphabetical: 'Ordem alfabética',
      complexity: 'Complexidade'
    },
    exampleDetail: {
      title: 'Detalhes do Exemplo',
      description: 'Descrição',
      syntax: 'Sintaxe',
      codeView: 'Visualização do código',
      diagramView: 'Visualização do diagrama',
      complexity: 'Complexidade',
      tags: 'Tags',
      relatedExamples: 'Exemplos relacionados'
    },
    complexityLevels: {
      beginner: 'Iniciante',
      intermediate: 'Intermediário',
      advanced: 'Avançado'
    },
    messages: {
      copied: 'Código copiado para a área de transferência',
      copyFailed: 'Falha ao copiar, copie manualmente',
      added: 'Adicionado aos favoritos',
      removed: 'Removido dos favoritos',
      noResults: 'Nenhum exemplo encontrado para sua busca',
      loading: 'Carregando exemplos...'
    },
    filters: {
      all: 'Todas categorias',
      favorites: 'Apenas favoritos',
      recently: 'Visualizados recentemente'
    },
    examples: {
      softwareDevelopment: 'Fluxograma de desenvolvimento de software',
      projectManagement: 'Diagrama de Gantt para gestão de projetos',
      userRegistration: 'Fluxo de registro de usuário'
    },
    exampleCodes: {
      softwareDevelopment: `graph TD
      A[Análise de Requisitos] --> B[Design do Sistema]
      B --> C[Implementação]
      C --> D[Testes Unitários]
      D --> E(Testes Aprovados?)
      E -- Não --> C
      E -- Sim --> F[Integração do Sistema]
      F --> G[Testes do Sistema]
      G --> H(Testes Aprovados?)
      H -- Não --> F
      H -- Sim --> I[Implantação]
      I --> J[Manutenção]
      
      style A fill:#f9d5e5,stroke:#333,stroke-width:2px
      style E fill:#e3f0f7,stroke:#333,stroke-width:2px
      style H fill:#e3f0f7,stroke:#333,stroke-width:2px
      style I fill:#d5f5e3,stroke:#333,stroke-width:2px
      style J fill:#d5f5e3,stroke:#333,stroke-width:2px`,
      
      projectManagement: `gantt
      title Plano de Projeto de Desenvolvimento de Produto
      dateFormat  YYYY-MM-DD
      axisFormat  %m-%d
      
      section Planejamento
      Pesquisa de Mercado      :a1, 2023-01-01, 15d
      Análise de Requisitos    :a2, after a1, 10d
      Planejamento do Produto  :a3, after a2, 5d
      
      section Design
      Design de Protótipo      :b1, after a3, 15d
      Design UI                :b2, after b1, 10d
      Testes com Usuários      :b3, after b2, 5d
      
      section Desenvolvimento
      Arquitetura Backend      :c1, after b1, 20d
      Desenvolvimento Frontend :c2, after b2, 15d
      Integração de API        :c3, after c1, 10d
      
      section Testes
      Testes Unitários         :d1, after c2, 8d
      Testes de Integração     :d2, after c3, 7d
      Testes de Performance    :d3, after d2, 5d
      
      section Lançamento
      Revisão Interna          :e1, after d3, 5d
      Preparação para Implantação :e2, after e1, 2d
      Lançamento Oficial       :milestone, after e2, 0d`,
      
      userRegistration: `sequenceDiagram
      participant Usuário
      participant Frontend
      participant Backend
      participant BancoDeDados
      participant ServiçoDeEmail
      
      Usuário->>Frontend: Preenche formulário de registro
      Frontend->>Frontend: Validação do formulário
      Frontend->>Backend: Envia dados de registro
      Backend->>Backend: Valida dados do usuário
      Backend->>BancoDeDados: Verifica se usuário existe
      BancoDeDados-->>Backend: Retorna resultado
      
      alt Usuário já existe
          Backend-->>Frontend: Retorna erro de usuário existente
          Frontend-->>Usuário: Exibe mensagem de erro
      else Usuário não existe
          Backend->>BancoDeDados: Cria novo registro
          Backend->>ServiçoDeEmail: Envia email de verificação
          ServiçoDeEmail-->>Usuário: Envia email com link
          Backend-->>Frontend: Retorna sucesso
          Frontend-->>Usuário: Exibe mensagem de sucesso
      end
      
      Usuário->>ServiçoDeEmail: Clica no link
      ServiçoDeEmail->>Backend: Solicitação de verificação
      Backend->>BancoDeDados: Atualiza status do usuário
      Backend-->>Usuário: Redireciona para login`
    },
    article: {
      title: "Exemplos de Diagramas: Visualizando Sistemas e Processos Complexos",
      overview: {
        title: "O que são Exemplos de Diagramas?",
        content: "Nossa ferramenta de <strong>Exemplos de Diagramas</strong> oferece diversos modelos prontos para ajudar você a visualizar sistemas complexos, processos e relacionamentos usando diagramas de qualidade profissional. Você não precisa começar do zero - pode usar esses exemplos para criar rapidamente diagramas refinados que atendam às suas necessidades específicas.<br><br>Nossos exemplos são escritos usando sintaxe padronizada que pode ser renderizada por diversas ferramentas e frameworks de diagramação. Cada exemplo demonstra as melhores práticas em termos de estrutura, organização e clareza visual, garantindo que seus diagramas comuniquem efetivamente informações complexas para seu público.<br><br>Seja para documentar arquitetura de software, planejar fluxos de trabalho de projetos ou projetar relacionamentos em bancos de dados, nossos exemplos fornecem modelos profissionais que seguem padrões do setor e melhores práticas de visualização, permitindo que você comece rapidamente."
      },
      useCases: {
        title: "Aplicações Práticas dos Exemplos de Diagramas",
        items: [
          {
            title: "Documentação de Software",
            description: "Use exemplos de fluxogramas e UML para documentar arquiteturas de software, relacionamentos entre classes e fluxos, tornando sistemas complexos mais compreensíveis para desenvolvedores, stakeholders e novos membros da equipe."
          },
          {
            title: "Planejamento de Projetos",
            description: "Implemente exemplos de diagramas de Gantt para criar cronogramas detalhados, rastrear dependências entre tarefas, visualizar alocação de recursos e comunicar progresso para stakeholders."
          },
          {
            title: "Design de Arquitetura de Sistemas",
            description: "Use exemplos de diagramas de arquitetura para planejar componentes do sistema, seus relacionamentos, fluxos de dados e pontos de integração, ajudando equipes a planejar implementações e identificar problemas potenciais antecipadamente."
          },
          {
            title: "Modelagem de Bancos de Dados",
            description: "Adapte exemplos de diagramas entidade-relacionamento para modelar estruturas de bancos de dados, definir relacionamentos entre tabelas e visualizar arquiteturas de dados, tornando designs complexos mais compreensíveis."
          },
          {
            title: "Análise de Fluxos de Usuário",
            description: "Modifique exemplos de diagramas de sequência para mapear jornadas de usuários em aplicativos, identificar problemas potenciais de usabilidade e otimizar experiências do usuário visualizando cada passo das interações."
          },
          {
            title: "Modelagem de Processos de Negócios",
            description: "Personalize exemplos de fluxogramas para documentar processos de negócios, identificar gargalos, planejar melhorias e comunicar fluxos de trabalho operacionais para membros da equipe."
          },
          {
            title: "Planejamento de Infraestrutura de Rede",
            description: "Use exemplos de diagramas de rede para projetar infraestruturas de TI, planejar implantações de rede, documentar sistemas existentes e comunicar arquiteturas técnicas para stakeholders técnicos e não-técnicos."
          },
          {
            title: "Organização de Conhecimento",
            description: "Adapte exemplos de mapas mentais para organizar descobertas de pesquisa, estruturar materiais de aprendizado, realizar brainstorm de ideias e criar guias visuais que melhoram a retenção de informações."
          }
        ]
      },
      guide: {
        title: "Como Usar os Exemplos de Diagramas",
        intro: "Criar diagramas profissionais se torna simples com nossa abordagem baseada em exemplos. Siga estes passos para gerar visualizações eficazes rapidamente:",
        steps: [
          {
            title: "Explore as Categorias",
            description: "Navegue por nossa coleção de exemplos organizados por tipo (fluxogramas, UML, diagramas de rede etc.). Veja vários exemplos para encontrar o que mais se aproxima de sua necessidade de visualização, observando sua estrutura e complexidade."
          },
          {
            title: "Copie o Código",
            description: "Ao identificar um exemplo adequado, clique em \"Copiar código\" para salvar a sintaxe do diagrama na área de transferência. Esse código usa notação padronizada interpretável por diversas ferramentas."
          },
          {
            title: "Cole na Sua Ferramenta",
            description: "Abra sua plataforma de diagramação preferida (como Mermaid, PlantUML, Draw.io) e cole o código copiado. A maioria das ferramentas modernas suporta importação de sintaxe textual, permitindo personalizações enquanto mantém a estrutura."
          },
          {
            title: "Personalize o Conteúdo",
            description: "Modifique o exemplo substituindo textos placeholder, adicionando/removendo elementos e ajustando relacionamentos para atender suas necessidades específicas. Os exemplos são projetados para serem editáveis facilmente enquanto mantêm clareza visual."
          },
          {
            title: "Ajuste o Estilo Visual",
            description: "Refine a aparência do diagrama modificando cores, formas, estilos de linha e parâmetros de layout conforme suas preferências ou guias de marca da organização. A maioria das sintaxes inclui comandos de estilo no código."
          },
          {
            title: "Revise e Aprimore",
            description: "Avalie a clareza, completude e precisão do seu diagrama. Garanta que comunique efetivamente a informação desejada sem complexidade desnecessária. Colete feedback de colegas e ajuste conforme necessário."
          },
          {
            title: "Exporte e Compartilhe",
            description: "Quando satisfeito, exporte no formato preferido (PNG, SVG, PDF) para inclusão em documentos, apresentações ou relatórios. Muitas ferramentas oferecem recursos colaborativos para edição em equipe e atualizações em tempo real."
          }
        ]
      },
      diagramTypes: {
        title: "Entendendo os Tipos de Diagramas",
        intro: "Cada tipo de diagrama é projetado para visualizar informações e relacionamentos específicos. Veja os usos dos diferentes tipos em nossa coleção:",
        items: [
          {
            name: "Fluxogramas",
            description: "Visualizam fluxos sequenciais, pontos de decisão e caminhos de trabalho. Ideais para documentar algoritmos, processos de negócios e procedimentos de decisão. Usam símbolos padronizados (retângulos para processos, losangos para decisões) conectados por setas mostrando direção do fluxo."
          },
          {
            name: "Diagramas UML",
            description: "Modelam sistemas de software usando a Linguagem de Modelagem Unificada, incluindo diagramas de classes (mostrando relacionamentos entre objetos), diagramas de sequência (interações temporais), diagramas de atividades (fluxos de trabalho) etc. UML fornece uma linguagem visual padronizada para desenvolvimento de software."
          },
          {
            name: "Diagramas Entidade-Relacionamento (ER)",
            description: "Representam modelos de dados mostrando entidades (tabelas), atributos (campos) e seus relacionamentos. Essenciais para design de bancos de dados, ajudam a visualizar organização e estrutura de dados antes da implementação, garantindo armazenamento eficiente e lógico."
          },
          {
            name: "Diagramas de Rede",
            description: "Descrevem redes de computadores, mostrando dispositivos, conexões, protocolos e arquiteturas. Esses diagramas ajudam equipes de TI a planejar, documentar e solucionar problemas de infraestrutura de rede através de representações visuais claras de relacionamentos entre componentes."
          },
          {
            name: "Diagramas de Sequência",
            description: "Mostram interações temporais entre sistemas, componentes ou atores, incluindo mensagens trocadas ao longo do tempo. Particularmente úteis para modelar interações de API, fluxos de usuário e protocolos de comunicação entre componentes de sistema."
          },
          {
            name: "Mapas Mentais",
            description: "Organizam informações hierarquicamente ao redor de conceitos centrais, com ramos representando ideias relacionadas. Ideais para brainstorm, anotações, planejamento e visualização organizada de informações complexas mostrando relações e associações."
          },
          {
            name: "Diagramas de Gantt",
            description: "Mostram cronogramas de projetos usando barras horizontais representando durações de tarefas, dependências e progresso ao longo do tempo. Cruciais para gerenciamento de projetos, ajudam equipes a visualizar prazos, marcos e caminhos críticos de atividades."
          }
        ]
      },
      faq: {
        title: "Perguntas Frequentes sobre Exemplos de Diagramas",
        items: [
          {
            question: "Qual sintaxe de diagramação esses exemplos usam?",
            answer: "Nossos exemplos usam sintaxes amplamente suportadas como Mermaid, PlantUML e GraphViz DOT. Essas linguagens baseadas em texto são renderizáveis por diversas ferramentas, oferecendo flexibilidade no uso e customização. Cada exemplo indica claramente a sintaxe usada, sendo que a maioria das ferramentas modernas suporta múltiplas opções."
          },
          {
            question: "Posso usar esses exemplos em projetos comerciais?",
            answer: "Sim, todos nossos exemplos são gratuitos para uso em projetos pessoais e comerciais. Você pode livremente adaptar, modificar e incorporá-los em seu trabalho sem exigência de atribuição. Os exemplos são fornecidos como pontos de partida para acelerar seu processo de diagramação enquanto permitem total customização para necessidades específicas."
          },
          {
            question: "Como modificar exemplos para minhas necessidades?",
            answer: "Cada exemplo usa sintaxe textual onde elementos e relacionamentos são definidos em formato estruturado. Para customizar, basta editar as definições textuais para corresponder ao seu caso de uso - renomeando elementos, adicionando/removendo componentes, alterando relacionamentos ou modificando fluxos. A sintaxe é projetada para ser legível e intuitiva, com mudanças refletindo imediatamente no diagrama renderizado."
          },
          {
            question: "Quais ferramentas posso usar para renderizar esses exemplos?",
            answer: "Os exemplos são compatíveis com diversas ferramentas incluindo plataformas online como Mermaid Live Editor, PlantUML Web Server, e extensões para VS Code como Markdown Preview Enhanced. Aplicativos desktop como Draw.io, Lucidchart e plataformas de documentação como Confluence, GitHub e GitLab também suportam renderização direta dessas sintaxes."
          },
          {
            question: "Como adicionar cores e estilos aos diagramas?",
            answer: "A maioria das sintaxes suporta estilização através de comandos específicos. Por exemplo, no Mermaid você pode usar a palavra-chave 'style' seguida do identificador do elemento e propriedades CSS-like para adicionar estilos. No PlantUML, use comandos skinparam para definir cores, fontes e outros atributos visuais. Nossos exemplos incluem estilos básicos que você pode facilmente estender para preferências pessoais."
          },
          {
            question: "Posso combinar múltiplos exemplos para visualizações mais complexas?",
            answer: "Certamente! Você pode combinar elementos de diferentes exemplos para criar visualizações abrangentes que capturam sistemas ou processos complexos. Ao combinar, mantenha convenções de nomenclatura consistentes, garanta conexões lógicas entre componentes mesclados e considere usar subgrafos ou clusters para organizar elementos relacionados. Essa abordagem permite aproveitar os melhores aspectos de múltiplos templates enquanto cria um diagrama coeso."
          },
          {
            question: "Como garantir que meus diagramas permaneçam mantíveis conforme sistemas evoluem?",
            answer: "Para diagramas mantíveis, armazene o código-fonte (sintaxe textual) junto com o código ou documentação do projeto em controle de versão. Isso permite que diagramas evoluam com o sistema através dos mesmos processos de revisão e atualização. Use abordagem modular dividindo diagramas complexos em partes lógicas, adote convenções de nomenclatura consistentes e inclua comentários no código para explicar elementos ou relacionamentos complexos."
          }
        ]
      },
      bestPractices: {
        title: "Melhores Práticas para Diagramas Eficazes",
        intro: "Siga estas práticas recomendadas pelo setor para criar diagramas mais profissionais e eficientes:",
        items: [
          "Mantenha o foco em um único conceito ou informação central, evitando tentar visualizar tudo de uma vez",
          "Use formas, cores e estilos consistentes para garantir coerência visual e estabelecer significado (ex: codificação por cores para tipos de componentes)",
          "Inclua legendas explicando símbolos, cores ou notações que possam não ser imediatamente óbvias para o público",
          "Limite o número de elementos em um único diagrama para evitar sobrecarga visual; considere dividir sistemas complexos em múltiplos diagramas vinculados",
          "Organize elementos em agrupamentos lógicos, posicionando itens relacionados próximos para mostrar claramente suas relações",
          "Use indicadores de direção (setas) consistentemente para mostrar fluxos, movimentação de dados ou direção de relacionamentos",
          "Adicione rótulos e anotações concisas para esclarecer propósitos, explicar interações complexas ou destacar aspectos importantes",
          "Mantenha espaçamento adequado entre elementos para melhorar legibilidade e clareza visual",
          "Alinhe elementos em estruturas de grade quando apropriado para criar aparência mais organizada e profissional",
          "Considere o público e propósito do diagrama ao determinar o nível de detalhe técnico a incluir",
          "Use hierarquia para mostrar relações pai-filho e organizar informações do geral para o específico",
          "Revise o diagrama da perspectiva de alguém não familiarizado com o sistema para garantir clareza e compreensibilidade"
        ]
      }
    }
  }