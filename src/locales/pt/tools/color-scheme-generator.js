export default {
    name: 'Gerador de Esquemas de Cores',
    description: 'Gera paletas de cores harmoniosas baseadas na teoria das cores, ajudando designers a criar combinações equilibradas rapidamente',
    baseColor: {
      title: 'Cor Base',
      picker: 'Seletor de Cores',
      hex: 'Hexadecimal',
      rgb: 'RGB',
      hsl: 'HSL',
      random: 'Cor Aleatória',
      recent: 'Cores Recentes',
      hint: 'Clique no bloco de cor ou insira um valor hexadecimal',
    },
    schemeTypes: {
      title: 'Teoria das Cores',
      monochromatic: 'Monocromático',
      analogous: 'Análogas',
      complementary: 'Complementares',
      splitComplementary: 'Complementares Divididas',
      triadic: 'Triádico',
      tetradic: 'Tetrádico',
      square: 'Quadrado',
      compound: 'Composto',
      shades: 'Degradê',
      custom: 'Personalizado',
    },
    options: {
      colorCount: 'Número de Cores',
      saturationRange: 'Faixa de Saturação',
      brightnessRange: 'Faixa de Brilho',
      includeBaseColor: 'Incluir Cor Base',
      lockBaseColor: 'Bloquear Cor Base',
      colorSpace: 'Espaço de Cor',
      sortBy: 'Ordenar Por',
      colorBlindSafe: 'Seguro para Daltônicos',
      contrastRatio: 'Contraste Mínimo'
    },
    colorSpaces: {
      rgb: 'RGB',
      hsl: 'HSL',
      lab: 'LAB',
      hsv: 'HSV',
      cmyk: 'CMYK'
    },
    sortOptions: {
      hue: 'Matiz',
      saturation: 'Saturação',
      brightness: 'Brilho',
      harmony: 'Harmonia',
      none: 'Nenhum'
    },
    palettes: {
      title: 'Paleta Gerada',
      save: 'Salvar Paleta',
      copy: 'Copiar Paleta',
      export: 'Exportar como Variáveis CSS',
      apply: 'Aplicar à Pré-visualização'
    },
    exportFormats: {
      title: 'Formatos de Exportação',
      css: 'Variáveis CSS',
      scss: 'Variáveis SCSS',
      less: 'Variáveis LESS',
      json: 'JSON',
      svg: 'Amostra SVG',
      ase: 'Adobe ASE',
      tailwind: 'Configuração Tailwind',
      pdf: 'PDF'
    },
    preview: {
      title: 'Pré-visualização',
      website: 'Website',
      mobilApp: 'Aplicativo Móvel',
      dashboard: 'Painel',
      card: 'Cartão',
      poster: 'Pôster',
      custom: 'Personalizado',
      mainButton: 'Botão Principal',
      secondButton: 'Botão Secundário',
      tag: 'Tag'
    },
    savedPalettes: {
      title: 'Paletas Salvas',
      load: 'Carregar',
      delete: 'Excluir',
      rename: 'Renomear',
      noSavedPalettes: 'Nenhuma paleta salva',
      saved: 'Paletas Salvas',
      schemeNameEmpty: 'Nome da paleta vazio',
    },
    actions: {
      generate: 'Gerar Esquema',
      regenerate: 'Regenerar',
      reset: 'Redefinir',
      lockColor: 'Bloquear Cor',
      unlockColor: 'Desbloquear Cor',
      save: 'Salvar Paleta',
    },
    messages: {
      paletteSaved: 'Paleta salva com sucesso',
      paletteDeleted: 'Paleta excluída',
      copied: 'Copiado para a área de transferência',
      exported: 'Exportado com sucesso',
      adjustmentParam: 'Parâmetro de Ajuste',
      schemeName: 'Nome do Esquema',
      copyAllColors: 'Todas as cores copiadas',
    },
    article: {
      title: "Gerador de Esquemas de Cores: Crie Combinações Harmoniosas para Designs Visualmente Impactantes",
      overview: {
        title: "O que é um Gerador de Esquemas de Cores?",
        content: "O <strong>Gerador de Esquemas de Cores</strong> é uma ferramenta profissional que cria combinações harmoniosas baseadas em princípios estabelecidos da teoria das cores. Nosso gerador simplifica o processo complexo de selecionar cores complementares, gerando automaticamente paletas equilibradas a partir de uma única cor base.<br><br>A ferramenta utiliza várias regras de harmonia cromática como monocromático, análogas, complementares e triádicas para produzir combinações visualmente agradáveis. Ela considera psicologia das cores, acessibilidade e melhores práticas de design, garantindo que suas paletas sejam não apenas bonitas, mas também funcionais em diferentes aplicações.<br><br>Seja para design web, branding, projetos UI/UX ou qualquer criação visual, nosso gerador elimina as suposições, oferecendo relações cromáticas cientificamente fundamentadas que melhoram a comunicação visual e a experiência do usuário."
      },
      useCases: {
        title: "Aplicações Práticas do Gerador de Esquemas de Cores",
        items: [
          {
            title: "Design e Desenvolvimento Web",
            description: "Crie esquemas de cores consistentes, acessíveis e visualmente atraentes para websites, garantindo identidade visual em todas as páginas enquanto atende aos requisitos de contraste WCAG para melhorar legibilidade e experiência do usuário."
          },
          {
            title: "Desenvolvimento de Identidade Visual",
            description: "Estabeleça combinações de cores fortes que evocam emoções específicas e diferenciam sua marca da concorrência, garantindo versatilidade em diversos materiais de marketing e plataformas."
          },
          {
            title: "Projetos UI/UX",
            description: "Gere sistemas cromáticos funcionais para interfaces, direcionando a atenção do usuário, criando hierarquia visual e mantendo consistência em aplicativos móveis, web apps e produtos de software."
          },
          {
            title: "Materiais de Marketing e Publicidade",
            description: "Desenvolva esquemas impactantes para anúncios, gráficos de mídia social, campanhas de email e outros materiais promocionais, alinhados com princípios de psicologia de marketing e objetivos da campanha."
          },
          {
            title: "Design de Apresentações e Documentos",
            description: "Crie apresentações profissionais com combinações harmoniosas que melhoram hierarquia de informação, legibilidade e apelo visual, aumentando o engajamento do público."
          },
          {
            title: "Projetos de Design Impresso",
            description: "Gere paletas adequadas para impressão em materiais como brochuras, cartões de visita e embalagens, considerando fatores de cor CMYK e requisitos de produção gráfica."
          },
          {
            title: "Design de Interiores e Ambientação",
            description: "Planeje esquemas cromáticos coerentes para escritórios, ambientes comerciais ou residenciais, criando atmosferas ideais com efeitos psicológicos desejados."
          },
          {
            title: "Materiais Educacionais e Infográficos",
            description: "Desenvolva combinações acessíveis para recursos de aprendizagem e visualizações de dados, melhorando compreensão da informação com inclusividade para usuários com deficiência visual."
          }
        ]
      },
      guide: {
        title: "Como Usar o Gerador de Esquemas de Cores",
        intro: "Criar o esquema de cores perfeito com nossa ferramenta intuitiva é simples. Siga estas etapas para gerar paletas harmoniosas para seus projetos:",
        steps: [
          {
            title: "Selecione a Cor Base",
            description: "Comece escolhendo uma cor primária que represente sua marca, evoque a emoção desejada ou complemente elementos de design existentes. Use o seletor de cores, insira um código hexadecimal específico ou clique em \"Cor Aleatória\" para inspiração. Esta cor base servirá como fundamento para todo o esquema."
          },
          {
            title: "Escolha uma Teoria de Harmonia Cromática",
            description: "Selecione uma opção de harmonia no menu suspenso. Cada teoria cria relações diferentes entre cores: monocromático (variações de uma cor), análogas (cores vizinhas no círculo cromático), complementares (cores opostas), triádicas (três cores equidistantes), etc. Sua escolha afetará significativamente o clima e sensação da paleta."
          },
          {
            title: "Ajuste os Parâmetros de Geração",
            description: "Refine sua paleta ajustando configurações como número de cores, faixa de saturação e brilho. Esses parâmetros permitem controle preciso sobre intensidade e diversidade no esquema. Para sites ou interfaces que precisam atender padrões de acessibilidade, ative \"Seguro para Daltônicos\" e defina o contraste adequado."
          },
          {
            title: "Gere Seu Esquema de Cores",
            description: "Clique em \"Gerar Esquema\" para criar uma paleta baseada em suas escolhas. A ferramenta exibirá uma série de cores harmoniosas que funcionam bem juntas, seguindo os princípios da teoria selecionada. Se não estiver satisfeito com o resultado, clique em \"Regenerar\" para obter alternativas mantendo as configurações básicas."
          },
          {
            title: "Visualize e Teste Sua Paleta",
            description: "Use a seção de pré-visualização para ver como suas cores funcionam em contextos reais. Alterne entre diferentes modelos como layout web, aplicativo móvel ou painel para visualizar sua paleta em várias aplicações. Esta etapa ajuda a garantir que as cores produzam o efeito desejado quando implementadas."
          },
          {
            title: "Salve e Exporte Seu Esquema",
            description: "Ao ficar satisfeito com a paleta, salve-a para referência futura clicando em \"Salvar Paleta\" e dando um nome descritivo. Você pode exportar em vários formatos como variáveis CSS, SCSS, configuração Tailwind ou JSON, facilitando a implementação em projetos. As opções de exportação garantem integração perfeita com seu fluxo de trabalho preferido."
          },
          {
            title: "Aplique e Itere",
            description: "Implemente o esquema em seus projetos e avalie sua eficácia. Se necessário, retorne ao gerador para ajustes ou crie paletas alternativas para diferentes partes do projeto. Você pode carregar paletas salvas anteriormente, criar variações ou manter consistência entre múltiplos projetos."
          }
        ]
      },
      colorTheory: {
        title: "Entendendo os Princípios de Harmonia Cromática",
        intro: "A teoria das cores fornece um framework científico para criar combinações harmoniosas. Veja como funcionam os diferentes modelos de harmonia em nosso gerador:",
        items: [
          {
            name: "Esquema Monocromático",
            description: "Usa variações de luminosidade e saturação de um único matiz, criando uma aparência coesa e unificada que é elegante e fácil de gerenciar. Ideal para designs minimalistas, construção de identidade visual ou criação de estéticas sutis e sofisticadas sem sobrecarregar o espectador com múltiplas cores concorrentes."
          },
          {
            name: "Esquema de Cores Análogas",
            description: "Combina cores adjacentes no círculo cromático, produzindo um efeito harmonioso e tranquilo com variação suficiente para manter o interesse. Adequado para designs naturais e confortáveis que buscam criar fluxo visual entre elementos em vez de alto contraste ou tensão."
          },
          {
            name: "Esquema de Cores Complementares",
            description: "Emparelha cores opostas no círculo cromático, criando máximo contraste e vibração visual. Oferece alta energia e impacto visual, perfeito para destacar elementos de chamada para ação, criar separação visual ou desenvolver materiais de marketing impactantes."
          },
          {
            name: "Esquema Complementar Dividido",
            description: "Usa a cor base mais duas cores adjacentes à sua complementar, oferecendo forte contraste visual com menos intensidade que o esquema complementar puro. Essa abordagem equilibrada proporciona interesse visual e energia, sendo mais fácil de coordenar que pares complementares diretos."
          },
          {
            name: "Esquema Triádico",
            description: "Utiliza três cores equidistantes no círculo cromático, oferecendo rico contraste mantendo harmonia. Esse esquema versátil fornece paletas balanceadas e energéticas, adequadas para designs dinâmicos e divertidos que precisam de diversidade visual."
          },
          {
            name: "Esquema Tetrádico (Duplo Complementar)",
            description: "Combina dois pares de cores complementares, criando paletas ricas e diversas com múltiplas possibilidades de contraste. Esse esquema complexo é adequado para designs sofisticados que precisam de profundidade e variedade, exigindo balanceamento cuidadoso para não sobrecarregar."
          },
          {
            name: "Esquema Quadrado",
            description: "Usa quatro cores equidistantes (similar ao triádico, mas com quatro cores). Essa abordagem equilibrada oferece máxima diversidade cromática mantendo relações harmônicas, adequada para designs complexos que requerem múltiplos grupos de cores distintos."
          }
        ]
      },
      faq: {
        title: "Perguntas Frequentes sobre Esquemas de Cores",
        items: [
          {
            question: "O que constitui um bom esquema de cores?",
            answer: "Um bom esquema de cores alcança vários objetivos-chave: cria harmonia visual através de relações cromáticas adequadas (baseadas em princípios da teoria das cores), estabelece contraste apropriado para legibilidade e acessibilidade, comunica a resposta emocional e personalidade da marca desejada, mantém funcionalidade em diferentes contextos e se diferencia da concorrência mantendo adequação ao setor. Os melhores esquemas equilibram atrativo estético e funcionalidade prática, usando 3-5 cores com papéis bem definidos (primária, secundária, destaque etc.) e aplicação consistente em todo o sistema de design."
          },
          {
            question: "Quantas cores meu esquema deve incluir?",
            answer: "A maioria dos esquemas eficazes contém 3-5 cores: uma cor primária representando a identidade da marca, cores secundárias complementando a primária, 1-2 cores de destaque para chamadas à ação e 2-3 cores neutras (branco, preto, cinza) para texto e fundos. Para sistemas complexos como grandes websites ou aplicativos, você pode adicionar cores secundárias extras ou variações de destaque, mas cada cor deve ter propósito específico. Limitar sua paleta previne confusão visual e garante consistência, embora você possa incluir diferentes tons e matizes de cada cor principal para maior flexibilidade."
          },
          {
            question: "Como garantir que meu esquema seja acessível?",
            answer: "Para criar esquemas acessíveis, foque no contraste entre texto e fundo (as diretrizes WCAG recomendam mínimo 4.5:1 para texto normal e 3:1 para texto grande), evite combinações problemáticas para daltônicos (especialmente vermelho/verde) e não dependa apenas da cor para transmitir informações. Nosso gerador inclui recursos de acessibilidade como verificador de contraste e simulador de daltonismo para ajudar na criação de designs inclusivos. Teste com ferramentas de acessibilidade e inclua dicas visuais alternativas (padrões, ícones ou rótulos textuais) junto com codificação por cores para melhorar ainda mais a acessibilidade."
          },
          {
            question: "Como aplicar meu esquema consistentemente em projetos?",
            answer: "A aplicação consistente requer abordagem sistemática: primeiro, exporte sua paleta em formato compatível com seu fluxo de trabalho (variáveis CSS, SCSS etc.) e estabeleça convenções de nomenclatura claras. Em seguida, defina funções específicas para cada cor (como usar a primária para títulos e a secundária para botões), documente seu sistema de cores com diretrizes de uso, utilize tokens ou variáveis em vez de valores fixos e adote abordagem baseada em componentes para implementar seu esquema uniformemente. Revisões de design periódicas e ferramentas de verificação automática de estilos ajudam a manter consistência conforme o projeto evolui."
          },
          {
            question: "Posso usar este gerador para design impresso?",
            answer: "Sim, este gerador é adequado para design impresso, mas requer considerações adicionais. Para impressão, esteja ciente que cores aparecerão diferentemente nos espaços CMYK (impressão) e RGB (tela), então use nossas opções de exportação para visualizar em ambiente CMYK. Ajuste valores de saturação com cuidado, pois cores muito saturadas geralmente não imprimem bem. Gere paletas ligeiramente maiores para acomodar variações de cor no processo de impressão e sempre solicite provas físicas antes de imprimir em grande escala. As harmonias e relações cromáticas criadas por nosso gerador são válidas em várias mídias, sendo valiosas para designers gráficos."
          },
          {
            question: "Como criar esquemas que evocam emoções específicas?",
            answer: "A psicologia das cores é fundamental para evocar emoções. Para designs energéticos e impactantes, use vermelhos, laranjas ou amarelos vibrantes como cores primárias ou de destaque. Para impressões calmas e confiáveis, incorpore azuis e cianos. Tons verdes funcionam para mensagens relacionadas a crescimento, natureza ou riqueza. Roxo sugere luxo ou criatividade, enquanto rosa transmite brincadeira ou feminilidade. Além do matiz, considere como saturação afeta impacto emocional (alta saturação para energia, baixa para sofisticação) e como luminosidade influencia percepção (tons claros para otimismo, escuros para seriedade). Nosso gerador permite controle preciso dessas variáveis para ajustar a ressonância emocional do esquema."
          },
          {
            question: "Como criar esquemas únicos que ainda sigam princípios de design?",
            answer: "Criar esquemas únicos porém harmônicos requer equilíbrio estratégico: comece com regras estabelecidas de harmonia (complementares, análogas etc.), mas introduza variações controladas. Experimente ajustar parâmetros inesperados, como deslocar levemente relações cromáticas padrão, combinar elementos de diferentes teorias (como complementares divididas com gradiente monocromático), adicionar cores de destaque surpreendentes ou testar combinações incomuns de saturação e luminosidade. Nosso gerador facilita isso permitindo bloquear certas cores enquanto regenera outras, introduzindo singularidade gradualmente enquanto mantém princípios básicos de harmonia cromática."
          }
        ]
      },
      bestPractices: {
        title: "Melhores Práticas para Esquemas de Cores Eficazes",
        intro: "Aplique estes princípios profissionais de design cromático para maximizar o impacto e funcionalidade de seus esquemas gerados:",
        items: [
          "Comece com a cor central da marca ou elementos de design existentes para garantir que o novo esquema mantenha identidade visual consistente",
          "Projete primeiro para acessibilidade, mantendo contraste adequado (mínimo 4.5:1) entre texto e fundos",
          "Limite sua paleta ativa a 3-5 cores principais com funções claramente definidas (primária, secundária, destaque, neutra) para prevenir confusão visual",
          "Teste seu esquema em diferentes dispositivos, condições de iluminação e ambientes para garantir aparência consistente",
          "Considere psicologia das cores e associações culturais ao selecionar cores para públicos internacionais ou multicultural",
          "Use a regra 60-30-10 como ponto de partida: 60% cor dominante, 30% cor secundária e 10% cor de destaque",
          "Crie paletas estendidas com múltiplos tons e matizes de cada cor principal, oferecendo flexibilidade enquanto mantém harmonia",
          "Aplique cores consistentemente baseado em função ao invés de apenas estética (ex: use mesma cor para todas ações primárias)",
          "Teste seu esquema em modo escala de cinza para garantir que o design mantenha contraste adequado sem depender de diferenças cromáticas",
          "Documente seu sistema de cores com convenções de nomenclatura apropriadas e diretrizes de uso para implementação consistente",
          "Considere ambiente de visualização e mídia (digital vs impresso, móvel vs desktop, interno vs externo) ao definir cores finais",
          "Revise e otimize seu esquema periodicamente com base em feedback de usuários e métricas de desempenho"
        ]
      }
    }
  }