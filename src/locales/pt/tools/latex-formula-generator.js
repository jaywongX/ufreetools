export default {
    name: 'Gerador de Fórmulas LaTeX',
    description: 'Gere e exporte fórmulas matemáticas em LaTeX em tempo real',
    
    // Textos da interface
    input: 'Insira código LaTeX',
    output: 'Pré-visualização',
    renderButton: 'Renderizar fórmula',
    exportButton: 'Exportar como imagem',
    copyButton: 'Copiar código LaTeX',
    
    // Configurações
    settings: {
      title: 'Configurações',
      fontSize: 'Tamanho da fonte',
      textColor: 'Cor do texto',
      backgroundColor: 'Cor de fundo',
      displayMode: 'Modo de exibição',
      displayModeInline: 'Modo inline',
      displayModeBlock: 'Modo bloco'
    },
    
    // Exemplos
    examples: {
      title: 'Exemplos',
      basic: 'Fórmulas básicas',
      fraction: 'Frações',
      superscript: 'Sobrescrito/Subscrito',
      integral: 'Integrais',
      matrix: 'Matrizes',
      more: 'Mais exemplos'
    },
    
    // Mensagens
    copied: 'Copiado para área de transferência',
    errorTitle: 'Erro de renderização',
    errorMessage: 'Verifique sua sintaxe LaTeX',
    
    article: {
      title: "Guia Completo do Gerador de Fórmulas LaTeX - Crie Equações Matemáticas Profissionais",
      intro: {
        title: "Descubra o poder da geração de fórmulas LaTeX",
        p1: "<b>O Gerador de Fórmulas LaTeX</b> é uma ferramenta essencial para criar equações matemáticas profissionais em artigos acadêmicos, materiais educacionais e documentos técnicos. Diferente de editores de texto comuns, nosso gerador LaTeX renderiza com precisão expressões matemáticas complexas, com alinhamento de símbolos, espaçamento e formatação que seguem os padrões de publicação científica. Esta ferramenta online elimina a necessidade de instalar software especializado ou aprender programação LaTeX complexa, permitindo criar fórmulas com qualidade de publicação através de uma interface simples e intuitiva que converte código LaTeX em equações perfeitamente renderizadas instantaneamente.",
        p2: "<b>Símbolos matemáticos LaTeX</b> têm sido o padrão ouro para preparação de documentos científicos e matemáticos desde seu desenvolvimento por Donald Knuth nos anos 1970. O Gerador de Fórmulas LaTeX traz esse poderoso sistema de tipografia para todos, independentemente de formação técnica, permitindo que estudantes, professores, pesquisadores e profissionais gerem equações visualmente impecáveis para artigos, relatórios de pesquisa, apostilas ou apresentações. A ferramenta lida com tudo, desde expressões algébricas básicas até cálculo avançado, matrizes e fórmulas estatísticas, mantendo estilo consistente e aparência profissional em todo conteúdo matemático.",
        p3: "<b>Renderização em tempo real</b> é uma das principais vantagens do nosso gerador LaTeX, permitindo visualizar suas equações enquanto digita. Esse feedback imediato facilita o aprendizado da sintaxe LaTeX e acelera o processo de criação de equações. Além disso, a capacidade de exportar fórmulas como imagens em alta resolução permite sua fácil integração em qualquer documento, apresentação ou página web sem problemas de compatibilidade. Com opções personalizáveis como tamanho da fonte, esquema de cores e modo de exibição, o Gerador de Fórmulas LaTeX se adapta às suas necessidades específicas enquanto mantém a precisão e elegância que tornam o LaTeX a escolha preferida para documentação matemática."
      },
      useCases: {
        title: "Aplicações práticas do Gerador de Fórmulas LaTeX",
        case1: "<h3>Pesquisa acadêmica e publicação científica</h3><p><b>Geração de fórmulas LaTeX</b> é indispensável para pesquisadores que preparam artigos para periódicos científicos e conferências. Disciplinas acadêmicas como física, matemática, engenharia e ciência da computação exigem representação precisa de equações complexas que só o LaTeX pode fornecer. Nosso gerador ajuda pesquisadores a criar facilmente equações para mecânica quântica, modelos estatísticos, análise de complexidade de algoritmos e provas teóricas sem enfrentar a curva de aprendizado íngreme do LaTeX. Ao gerar notação matemática de qualidade que atende aos padrões de publicação, os pesquisadores podem focar em seu conteúdo em vez de desafios de formatação. Por exemplo, um doutorando em física teórica pode rapidamente gerar a equação de Schrödinger, cálculo tensorial ou fórmulas relativísticas sem memorizar inúmeros comandos LaTeX, garantindo que seus artigos mantenham sempre qualidade profissional.</p>",
        case2: "<h3>Materiais educacionais e cursos online</h3><p><b>Educadores e criadores de cursos online</b> dependem do Gerador de Fórmulas LaTeX para desenvolver materiais didáticos claros e consistentes. Professores que preparam planos de aula, folhas de exercícios, avaliações ou recursos de aprendizagem digital precisam de uma maneira confiável de apresentar conceitos matemáticos com notação adequada. Nossa ferramenta permite que educadores criem problemas de álgebra, provas geométricas, demonstrações de cálculo e exemplos estatísticos profissionais que renderizam corretamente em diferentes dispositivos e plataformas. Isso é especialmente valioso para desenvolver cursos online, onde o conteúdo matemático deve ser exibido corretamente em sistemas de gestão de aprendizagem. Por exemplo, um professor de cálculo pode gerar fórmulas de integração, equações diferenciais e expressões de limites que aparecem exatamente como no quadro da sala de aula, melhorando a compreensão dos alunos através de clareza visual e precisão matemática.</p>",
        case3: "<h3>Documentação técnica e especificações de engenharia</h3><p><b>Engenheiros e redatores técnicos</b> utilizam a geração LaTeX para criar documentos precisos que incluem expressões matemáticas, constantes físicas e notação científica. Indústrias como aeroespacial, eletrônica, telecomunicações e desenvolvimento de software exigem documentação contendo fórmulas complexas que devem ser apresentadas com precisão em especificações, manuais e relatórios técnicos. Nosso gerador LaTeX simplifica esse processo ao permitir que engenheiros criem equações para algoritmos de processamento de sinais, sistemas de controle, cálculos de campos eletromagnéticos ou algoritmos de software sem exigir extenso conhecimento de LaTeX. Por exemplo, um engenheiro de telecomunicações pode gerar eficientemente as equações de Maxwell ou fórmulas de transformada de Fourier para documentos de especificação técnica, garantindo que conceitos matemáticos sejam comunicados com clareza e precisão para equipes de manufatura ou órgãos reguladores.</p>",
        case4: "<h3>Ciência de dados e relatórios estatísticos</h3><p><b>Cientistas de dados e estatísticos</b> contam com o Gerador de Fórmulas LaTeX ao preparar relatórios que exigem notação matemática complexa para representar métodos estatísticos, algoritmos de aprendizado de máquina e modelos probabilísticos. Apresentações profissionais de análise de dados frequentemente incluem fórmulas complexas para modelos de regressão, testes de hipóteses, distribuições de probabilidade e complexidade algorítmica. Nossa ferramenta ajuda profissionais de dados a criar equações visualmente consistentes para intervalos de confiança, testes de significância, inferência bayesiana ou arquiteturas de redes neurais, aumentando a credibilidade e legibilidade de suas descobertas. Por exemplo, um analista de pesquisa de mercado pode usar nosso gerador LaTeX para formatar corretamente fórmulas estatísticas complexas em relatórios para clientes, tornando métodos avançados mais compreensíveis para partes interessadas não técnicas enquanto mantém precisão matemática.</p>",
        case5: "<h3>Materiais de aprendizagem interativos e tecnologia educacional</h3><p><b>Desenvolvedores de tecnologia educacional</b> incorporam o Gerador de Fórmulas LaTeX em aplicativos de aprendizagem interativos para exibir conteúdo matemático dinamicamente. Sites educacionais focados em matemática, aplicativos móveis de aprendizagem e livros-texto interativos precisam que equações sejam renderizadas corretamente em diversos tipos de dispositivos e tamanhos de tela. As fórmulas geradas por nosso gerador LaTeX podem ser exportadas como imagens ou renderizadas diretamente em aplicativos web, garantindo aparência consistente independentemente do dispositivo ou navegador do usuário. Por exemplo, desenvolvedores de um aplicativo de aprendizagem de álgebra podem usar nossa ferramenta para gerar fórmulas que aparecem corretamente tanto em smartphones quanto tablets, criando exercícios interativos de resolução de problemas com notação matemática correta, melhorando a experiência de aprendizagem através de clareza visual e precisão matemática.</p>"
      },
      tutorial: {
        title: "Como usar o Gerador LaTeX para criar fórmulas matemáticas perfeitas",
        intro: "Siga estes passos para usar nossa ferramenta Gerador de Fórmulas LaTeX e criar notação matemática profissional:",
        step1: {
          title: "Passo 1: Insira seu código LaTeX",
          description: "Comece digitando sua expressão matemática LaTeX na caixa de entrada à esquerda da tela. Se você não está familiarizado com a sintaxe LaTeX, pode começar clicando nos botões abaixo da área de visualização para carregar nossos exemplos. Para operações matemáticas básicas, use operadores padrão como <code>+</code>, <code>-</code>, <code>*</code> e <code>/</code>. Para frações, use a estrutura <code>\\frac&#123;numerador&#125;&#123;denominador&#125;</code>. Sobrescritos são criados com circunflexo <code>^</code> e subscritos com underline <code>_</code>. Por exemplo, para criar a fórmula de equação quadrática, você precisaria digitar: <code>\\frac&#123;-b \\pm \\sqrt&#123;b^2-4ac&#125;&#125;&#123;2a&#125;</code>. A ferramenta renderiza sua fórmula em tempo real enquanto você digita, dando feedback visual imediato."
        },
        step2: {
          title: "Passo 2: Personalize a aparência da fórmula",
          description: "Após inserir o código LaTeX, você pode personalizar como a fórmula será exibida usando o painel de configurações. Ajuste o controle deslizante de tamanho da fonte para tornar a fórmula maior ou menor conforme necessário. Use os seletores de cor para alterar a cor do texto e do fundo da fórmula. Isso é especialmente útil quando você precisa combinar a aparência da fórmula com o estilo de um documento existente ou tema de apresentação. Em seguida, selecione seu modo de exibição preferido. O modo inline (padrão) é adequado para fórmulas que aparecem no meio do texto, enquanto o modo bloco cria equações independentes e centralizadas com mais espaçamento, ideal para fórmulas importantes que merecem destaque."
        },
        step3: {
          title: "Passo 3: Visualize e refine sua fórmula",
          description: "Verifique sua fórmula na área de pré-visualização à direita da tela. Observe quaisquer erros ou problemas de formatação que precisem ser resolvidos. Se você notar algum problema, volte à caixa de entrada para refinar seu código LaTeX. Problemas comuns incluem chaves ausentes, delimitadores incompatíveis ou sintaxe de comando incorreta. Se você vir mensagens de erro abaixo da fórmula, elas geralmente fornecem informações úteis sobre o que deu errado. Use a renderização em tempo real para fazer melhorias iterativas até que sua fórmula apareça exatamente como deseja. Para fórmulas complexas, considere construí-las gradualmente, verificando a pré-visualização após adicionar cada novo elemento para identificar e corrigir quaisquer problemas mais facilmente."
        },
        step4: {
          title: "Passo 4: Exporte ou copie sua fórmula",
          description: "Quando estiver satisfeito com sua fórmula, você pode exportá-la como imagem ou copiar o código LaTeX para usar em outro lugar. Clique no botão \"Exportar como imagem\" para salvar a fórmula como um arquivo PNG com fundo transparente, fácil de inserir em documentos, apresentações, sites ou materiais educacionais. A imagem preserva todas as configurações personalizadas que você aplicou, incluindo tamanho da fonte e cores. Alternativamente, clique no botão \"Copiar código LaTeX\" para copiar o código LaTeX da fórmula para sua área de transferência, pronto para usar em documentos LaTeX ou outros sistemas compatíveis com LaTeX. Isso é particularmente útil quando você precisa fazer ajustes adicionais à fórmula em um ambiente LaTeX completo, ou quando deseja incluí-la em artigos acadêmicos ou documentos técnicos."
        }
      },
      syntaxReference: {
        title: "Referência de Sintaxe Básica para Matemática em LaTeX",
        intro: "Para ajudá-lo a criar fórmulas com mais eficiência, aqui está um guia de referência para a sintaxe de símbolos matemáticos comuns em LaTeX:",
        basic: {
          title: "Símbolos e operadores básicos",
          description: "<p>A sintaxe matemática LaTeX usa comandos especiais que começam com barra invertida (\\) para criar vários símbolos e estruturas. Aqui estão os símbolos básicos mais usados:</p><ul><li><b>Frações:</b> <code>\\frac&#123;numerador&#125;&#123;denominador&#125;</code> cria uma fração.</li><li><b>Expoentes/sobrescrito:</b> <code>x^2</code> produz x².</li><li><b>Subscrito:</b> <code>x_i</code> produz x com subscrito i.</li><li><b>Raiz quadrada:</b> <code>\\sqrt&#123;x&#125;</code> cria √x.</li><li><b>Raiz n-ésima:</b> <code>\\sqrt[n]&#123;x&#125;</code> cria a raiz n-ésima de x.</li><li><b>Letras gregas:</b> <code>\\alpha</code>, <code>\\beta</code>, <code>\\gamma</code>, <code>\\pi</code>, etc.</li><li><b>Símbolo de infinito:</b> <code>\\infty</code></li><li><b>Somatório:</b> <code>\\sum_&#123;i=1&#125;^&#123;n&#125;</code> cria um somatório com limite inferior i=1 e superior n.</li><li><b>Produtório:</b> <code>\\prod_&#123;i=1&#125;^&#123;n&#125;</code> cria o símbolo de produto.</li><li><b>Limite:</b> <code>\\lim_&#123;x \\to 0&#125;</code> cria o limite quando x tende a 0.</li><li><b>Integral:</b> <code>\\int_&#123;a&#125;^&#123;b&#125;</code> cria uma integral com limites a e b.</li></ul>"
        },
        advanced: {
          title: "Estruturas matemáticas avançadas",
          description: "<p>Para expressões matemáticas mais complexas, LaTeX oferece um poderoso sistema de notação:</p><ul><li><b>Matrizes:</b> Use <code>\\begin&#123;matrix&#125;...\\end&#123;matrix&#125;</code>, separando colunas com & e novas linhas com \\\\. Para matrizes com parênteses, use <code>pmatrix</code>, <code>bmatrix</code>, <code>vmatrix</code> ou <code>Vmatrix</code>.</li><li><b>Funções definidas por partes:</b> <code>\\begin&#123;cases&#125;...\\end&#123;cases&#125;</code>, separando expressão e condição com &.</li><li><b>Alinhamento de equações:</b> <code>\\begin&#123;align&#125;...\\end&#123;align&#125;</code> para múltiplas equações com pontos de alinhamento.</li><li><b>Notação de derivada:</b> <code>\\frac&#123;d&#125;&#123;dx&#125;</code> para derivada, ou <code>\\frac&#123;\\partial f&#125;&#123;\\partial x&#125;</code> para derivada parcial.</li><li><b>Notação vetorial:</b> <code>\\vec&#123;v&#125;</code> ou <code>\\overrightarrow&#123;AB&#125;</code></li><li><b>Acentos/notação:</b> <code>\\hat&#123;x&#125;</code> para variável estimada, ou <code>\\bar&#123;x&#125;</code> para média.</li><li><b>Notação de conjuntos:</b> <code>\\&#123;x \\in \\mathbb&#123;R&#125; : x > 0\\&#125;</code>, usando <code>\\mathbb&#123;&#125;</code> para conjuntos numéricos.</li><li><b>Símbolos lógicos:</b> <code>\\forall</code> (para todo), <code>\\exists</code> (existe), <code>\\implies</code> (implica), <code>\\iff</code> (se e somente se).</li></ul>"
        }
      },
      faq: {
        title: "Perguntas Frequentes sobre o Gerador de Fórmulas LaTeX",
        q1: "Quais são as vantagens do Gerador LaTeX em comparação com editores de equações padrão?",
        a1: "<b>O Gerador de Fórmulas LaTeX oferece várias vantagens distintas</b> sobre editores de equações encontrados em processadores de texto comuns. Primeiro, ele segue os rigorosos padrões de tipografia estabelecidos em publicações científicas, garantindo espaçamento adequado entre símbolos, alinhamento preciso e dimensionamento que respeita as convenções matemáticas. Diferente de editores de equações básicos que frequentemente produzem espaçamento inconsistente ou frações mal alinhadas, o LaTeX mantém a qualidade profissional esperada em publicações acadêmicas. Segundo, nosso gerador fornece feedback visual imediato através da renderização em tempo real, permitindo que você veja a aparência exata da fórmula enquanto digita, o que acelera o aprendizado da sintaxe LaTeX. Terceiro, a capacidade de exportar imagens com fundo transparente em alta resolução permite integração perfeita em qualquer tipo de documento, independentemente do software que você usa. Finalmente, o LaTeX oferece um repertório muito mais abrangente de símbolos e capacidades estruturais, lidando com construções matemáticas complexas que editores de equações comuns não conseguem acomodar, como diagramas comutativos, funções definidas por partes e arrays de equações multilinha.",
        
        q2: "Preciso saber programação LaTeX para usar este gerador de fórmulas?",
        a2: "<b>Não é necessário conhecimento prévio de LaTeX</b> para usar efetivamente nosso gerador de fórmulas, embora familiaridade básica com notação matemática certamente ajude. A ferramenta foi projetada para acessibilidade, com uma interface simples onde a pré-visualização em tempo real torna o aprendizado da sintaxe LaTeX intuitivo através de feedback visual imediato. Incluímos diversos exemplos de fórmulas que você pode clicar para carregar diretamente no editor, permitindo estudar sua estrutura e modificá-las conforme suas necessidades. Isso fornece uma excelente oportunidade de aprendizado para entender a sintaxe LaTeX através de exemplos práticos. As estruturas matemáticas mais comuns, como frações, expoentes, radicais e integrais, requerem apenas alguns comandos simples que você rapidamente memoriza com o uso frequente. Para equações mais complexas, você pode construí-las gradualmente, verificando a pré-visualização após cada adição para garantir a formatação correta. Com esses recursos, mesmo iniciantes completos podem começar a criar notação matemática profissional em minutos, expandindo gradualmente seu conhecimento de LaTeX através da experiência prática.",
        
        q3: "Como posso inserir as fórmulas geradas em meus documentos e apresentações?",
        a3: "<b>Inserir fórmulas em vários tipos de documentos</b> é simples com nossas opções de exportação. O método mais versátil é usar o botão \"Exportar como imagem\" para salvar a fórmula como um arquivo PNG com fundo transparente em alta resolução. Essa imagem pode ser inserida em qualquer tipo de documento: arquivos do Microsoft Word, apresentações PowerPoint, documentos Google, sites ou sistemas de gestão de aprendizagem. Ao posicionar a imagem exportada, você deve redimensioná-la apropriadamente para combinar com o tamanho do texto do documento, mantendo consistência visual. Para documentos LaTeX, artigos acadêmicos ou manuscritos científicos, você pode usar o botão \"Copiar código LaTeX\" para obter o código LaTeX bruto da fórmula e colá-lo diretamente no ambiente de documento LaTeX. Isso é particularmente útil para submissões acadêmicas que exigem LaTeX ou quando você deseja incluir a fórmula em um artigo científico ou documento técnico completo. Para desenvolvedores web, as imagens exportadas podem ser incorporadas em conteúdo HTML com texto alternativo apropriado para acessibilidade. A maioria dos editores de documentos modernos também suporta arrastar e soltar, permitindo que você arraste a imagem exportada diretamente da pasta de downloads para dentro do documento, facilitando a inserção rápida.",
        
        q4: "As fórmulas geradas podem ser usadas em plataformas de aprendizagem online e tecnologia educacional?",
        a4: "<b>Sim, as fórmulas criadas com nosso gerador são ideais para uso em todas as principais plataformas</b> de tecnologia educacional. As imagens PNG exportadas com fundo transparente integram-se perfeitamente em sistemas de gestão de aprendizagem como Canvas, Blackboard, Moodle e Google Classroom. Para sistemas de avaliação online, você pode incluir imagens de fórmulas em prompts de perguntas, opções de múltipla escolha ou explicações de soluções. Ao criar conteúdo para cursos ou vídeos educacionais, essas imagens de alta qualidade melhoram a clareza visual e mantêm aparência profissional em diferentes tamanhos de tela e dispositivos. Aplicativos educacionais baseados na web podem incorporar diretamente essas imagens de fórmulas em conteúdo HTML, com texto alternativo apropriado para melhorar a acessibilidade. Para materiais de aprendizagem interativos, você pode gerar fórmulas para vários estados ou etapas em um processo de resolução de problemas, criando explicações visuais passo a passo. Essa versatilidade torna nosso gerador LaTeX particularmente valioso para educadores que transitam entre modos de ensino presencial e online, pois o mesmo conteúdo matemático de alta qualidade pode ser usado consistentemente em todos os formatos de ensino. Criadores de conteúdo educacional especialmente apreciam como isso mantém consistência visual em seus materiais, melhorando a qualidade profissional de seu design instrucional.",
        
        q5: "Quais são as melhores práticas para criar expressões matemáticas complexas em LaTeX?",
        a5: "<b>Criar expressões matemáticas complexas em LaTeX torna-se gerenciável</b> seguindo estas práticas recomendadas. Primeiro, construa fórmulas complexas incrementalmente - comece com a estrutura básica e adicione um componente por vez, verificando a pré-visualização após cada adição para detectar erros antecipadamente. Para expressões com múltiplos níveis, como frações aninhadas ou integrais complexas, trabalhe de dentro para fora, garantindo que cada elemento interno esteja correto antes de adicionar as estruturas externas. Ao lidar com matrizes ou equações alinhadas, esboce primeiro a estrutura no papel para visualizar os ambientes LaTeX necessários e pontos de alinhamento. Use chaves estrategicamente para agrupamento, controlando o escopo de operações, especialmente para sobrescritos, subscritos e frações. Para expressões longas, considere dividi-las em partes semanticamente significativas usando comandos de espaçamento adequados como \\quad ou ambientes de alinhamento. Ao depurar erros em fórmulas, verifique cuidadosamente delimitadores balanceados (parênteses, colchetes e chaves) e sintaxe de comandos correta - caracteres ausentes ou mal posicionados são as fontes mais comuns de erros. Finalmente, mantenha notação consistente entre fórmulas relacionadas, especialmente para variáveis que representam a mesma quantidade, para melhorar legibilidade e aparência profissional em contextos científicos e educacionais."
      },
      relatedTools: {
        title: "Explore outras ferramentas de matemática e documentação",
        description: "Aprimore seu fluxo de trabalho de criação de documentação técnica com estas ferramentas complementares:",
        tool1: {
          name: "Editor Markdown",
          url: "https://www.ufreetools.com/tool/markdown-editor",
          description: "Crie documentos de texto formatados com equações LaTeX embutidas usando sintaxe Markdown."
        },
        tool2: {
          name: "Conversor de Imagem para ASCII",
          url: "https://www.ufreetools.com/tool/image-to-ascii",
          description: "Converta imagens em arte ASCII com opções personalizáveis."
        },
        tool3: {
          name: "Seletor e Conversor de Cores",
          url: "https://www.ufreetools.com/tool/color-picker",
          description: "Escolha cores perfeitas para fórmulas LaTeX personalizadas e temas de documentos."
        },
        tool4: {
          name: "Compressor de Imagens",
          url: "https://www.ufreetools.com/tool/image-compressor",
          description: "Otimize imagens de fórmulas exportadas para a web mantendo clareza e qualidade."
        }
      },
      resources: {
        title: "Recursos oficiais sobre LaTeX e tipografia matemática",
        resource1: {
          name: "Lista abrangente de símbolos LaTeX",
          url: "https://tug.ctan.org/info/symbols/comprehensive/symbols-a4.pdf",
          description: "Documento de referência completo listando todos os símbolos disponíveis em LaTeX e seus comandos."
        },
        resource2: {
          name: "Documentação LaTeX do Overleaf",
          url: "https://www.overleaf.com/learn",
          description: "Tutoriais e guias abrangentes para aprender notação matemática LaTeX e preparação de documentos."
        },
        resource3: {
          name: "Sociedade Americana de Matemática - Recursos para publicação",
          url: "https://www.ams.org/publications/authors/tex/tex",
          description: "Guias e recursos profissionais para tipografia matemática em publicações acadêmicas."
        }
      }
    }
  };