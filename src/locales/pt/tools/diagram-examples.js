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
  }
};