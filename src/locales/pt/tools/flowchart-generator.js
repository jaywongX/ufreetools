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
  }
};