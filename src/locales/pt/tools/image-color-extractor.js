export default {
    name: 'Extrator de Cores de Imagem',
    description: 'Extrai paletas de cores e cores principais de imagens',
    input: {
      title: 'Carregar Imagem',
      dropzone: 'Arraste e solte a imagem aqui ou clique para carregar',
      formats: 'Formatos suportados: JPG, PNG, GIF, WebP, SVG',
      browse: 'Procurar arquivos',
      selectImage: 'Selecionar imagem',
      orText: 'ou',
      pasteUrl: 'Cole a URL da imagem:',
      loadUrl: 'Carregar da URL',
      urlPlaceholder: 'https://exemplo.com/imagem.jpg',
      unnamed: 'Imagem sem nome'
    },
    options: {
      title: 'Opções de Extração',
      extractSettings: 'Configurações de extração',
      colorCount: 'Quantidade de cores',
      paletteSize: 'Tamanho da paleta',
      paletteMin: 'Mínimo (3)',
      paletteMax: 'Máximo (20)',
      colorSimilarity: 'Similaridade de cores',
      similiarityToggle: 'Permitir cores similares',
      quality: 'Qualidade da extração',
      colorModel: 'Modelo de cor',
      colorSpace: 'Espaço de cor',
      colorFormat: 'Formato da cor',
      sortBy: 'Ordenar cores por',
      sortByPopularity: 'Por frequência de ocorrência',
      sortByLuminance: 'Por luminância',
      sortByHue: 'Por matiz',
      sortBySaturation: 'Por saturação',
      ignoreWhite: 'Ignorar branco',
      ignoreBlack: 'Ignorar preto',
      threshold: 'Limite de similaridade'
    },
    colorModels: {
      rgb: 'RGB',
      hsl: 'HSL',
      hsv: 'HSV',
      cmyk: 'CMYK',
      lab: 'LAB'
    },
    colorFormats: {
      hex: 'Hexadecimal (#RRGGBB)',
      rgb: 'RGB (0-255)',
      rgba: 'RGBA com transparência',
      hsl: 'HSL',
      hsla: 'HSLA com transparência',
      cssRgb: 'CSS RGB',
      cssHsl: 'CSS HSL'
    },
    sortOptions: {
      prevalence: 'Prevalência',
      luminance: 'Luminância',
      hue: 'Matiz',
      saturation: 'Saturação',
      original: 'Ordem original'
    },
    colorSpaces: {
      srgb: 'sRGB',
      p3: 'Display P3',
      rec2020: 'Rec. 2020',
      prophoto: 'ProPhoto RGB'
    },
    results: {
      title: 'Cores Extraídas',
      colorsFound: '{count} cores extraídas',
      dominantColor: 'Cor dominante',
      mainColor: 'Cor principal',
      complementary: 'Cor complementar',
      palette: 'Paleta de cores',
      colorPalette: 'Paleta de cores',
      palettePreview: 'Pré-visualização da paleta',
      usage: 'Uso da cor (%)',
      percentage: 'Proporção: {value}%',
      copyAll: 'Copiar todas as cores',
      clickToCopy: 'Clique para copiar: {color}',
      downloading: 'Baixando paleta...'
    },
    display: {
      originalImage: 'Imagem original',
      colorPalette: 'Paleta de cores',
      uploadFirst: 'Por favor, carregue uma imagem primeiro',
      clickExtract: 'Clique em "Extrair Cores" para obter a paleta da imagem',
    },
    actions: {
      extract: 'Extrair Cores',
      extracting: 'Processando...',
      download: 'Baixar Paleta',
      copy: 'Copiar',
      copyValue: 'Copiar valor',
      reset: 'Redefinir',
      copyPalette: 'Copiar Paleta',
      exportJson: 'Exportar como JSON',
      exportCss: 'Exportar como variáveis CSS',
      exportSass: 'Exportar como variáveis SASS',
      exportSwatch: 'Exportar como amostra ASE'
    },
    palette: {
      title: 'Paletas Nomeadas',
      vibrant: 'Vibrante',
      muted: 'Saturado',
      dark: 'Escuro',
      light: 'Claro',
      custom: 'Personalizado'
    },
    messages: {
      imageLoaded: 'Imagem carregada com sucesso',
      processingImage: 'Processando imagem...',
      extractionComplete: 'Extração de cores concluída',
      extractionFailed: 'Falha na extração: {error}',
      copied: 'Copiado para a área de transferência',
      copiedColor: 'Copiado: {color}',
      copiedAll: 'Todas as cores copiadas',
      copyFailed: 'Falha ao copiar',
      resetDone: 'Redefinido',
      invalidImage: 'Arquivo de imagem inválido',
      noImageSelected: 'Nenhuma imagem selecionada'
    },
    article: {
      title: "Extrator de Cores de Imagem: Identifique e extraia cores de qualquer imagem",
      features: {
        title: "Entenda a extração de cores e suas aplicações",
        description: "O <strong>Extrator de Cores de Imagem</strong> é uma ferramenta online poderosa que analisa imagens e identifica suas cores-chave. Utilizando <strong>algoritmos avançados de detecção de cores</strong>, ele escaneia sua imagem para identificar tanto as cores dominantes quanto as de destaque que compõem a paleta visual.<br><br>Diferente de ferramentas básicas de conta-gotas, nosso <strong>gerador de paletas</strong> agrupa inteligentemente cores similares, fornecendo uma coleção coerente e prática de cores. Compatível com diversos formatos como JPEG, PNG, GIF e WebP, é ideal para múltiplos cenários de uso.<br><br>As <strong>combinações de cores</strong> extraídas são disponibilizadas em vários formatos (HEX, RGB e HSL), permitindo fácil integração em projetos de design, código ou documentação sem necessidade de conversão manual.",
        useCases: {
          title: "Aplicações práticas da extração de cores",
          items: [
            "<strong>Web Design</strong>: Extraia <strong>paletas harmoniosas</strong> de logos ou imagens de referência para garantir consistência de marca. As cores podem ser usadas diretamente em folhas de estilo CSS, permitindo combinar cores exatas de imagens de inspiração ou criar sistemas de design consistentes.",
            
            "<strong>Marketing Digital</strong>: Crie campanhas para mídias sociais com <strong>esquemas de cores</strong> extraídos de fotos de produtos ou imagens de marca. Profissionais de marketing podem garantir harmonia cromática em todos os materiais promocionais baseados em dados de cores extraídas.",
            
            "<strong>Desenvolvimento de Identidade Visual</strong>: Analise <strong>cores de concorrentes</strong> ou explore opções cromáticas extraindo paletas de imagens inspiradoras. Estratégias de marca podem identificar tendências de cores e criar identidades visuais únicas.",
            
            "<strong>Design UI/UX</strong>: Extraia <strong>valores exatos de cores</strong> de mockups ou imagens de referência para implementação em interfaces. Designers podem garantir correspondência perfeita entre conceitos e interfaces funcionais.",
            
            "<strong>Design Gráfico</strong>: Identifique <strong>códigos de cores precisos</strong> para reprodução fiel em materiais impressos. Designers gráficos podem converter cores para CMYK com precisão, garantindo que materiais físicos correspondam aos projetos digitais.",
            
            "<strong>Arte Digital</strong>: Construa <strong>paletas personalizadas</strong> baseadas em obras de arte ou fotos de referência. Artistas digitais podem analisar relações cromáticas em obras-primas e aplicar harmonias similares em suas criações."
          ]
        }
      },
      faq: {
        title: "Perguntas Frequentes sobre Extração de Cores",
        items: [
          {
            question: "Quão preciso é o Extrator de Cores?",
            answer: "Nosso <strong>extrator de cores</strong> utiliza algoritmos complexos para análise de pixels e agrupamento de cores similares com alta precisão. Fatores que influenciam:<br><br>• Qualidade e resolução da imagem<br>• Complexidade do espaço de cores<br>• Número de cores extraídas<br><br>Para trabalhos profissionais, fornecemos valores exatos em <strong>HEX, RGB e HSL</strong>. Na maioria dos casos, as <strong>paletas extraídas</strong> representam fielmente as cores principais da imagem analisada."
          },
          {
            question: "Quais formatos de imagem são suportados?",
            answer: "O <strong>extrator de cores</strong> suporta todos os principais formatos:<br><br>• JPEG/JPG - Para fotos<br>• PNG - Gráficos com transparência<br>• GIF - Animações simples<br>• WebP - Formato moderno com compressão eficiente<br>• SVG - Vetores (extrai cores da renderização)<br><br>O tamanho máximo por arquivo é 5MB. Para melhores resultados, recomendamos imagens nítidas com áreas de cores distintas."
          },
          {
            question: "Quantas cores serão extraídas da minha imagem?",
            answer: "O <strong>extrator de cores</strong> oferece flexibilidade:<br><br>• Por padrão, extrai 5-10 cores principais<br>• Você pode personalizar para extrair de 1-2 até 20+ cores<br>• O algoritmo balanceia cores dominantes e de destaque<br><br>Para fins de design, 5-7 cores geralmente fornecem a melhor <strong>combinação</strong> entre representação da imagem e praticidade de aplicação."
          },
          {
            question: "Posso exportar as paletas extraídas?",
            answer: "Sim, o <strong>extrator de cores</strong> oferece múltiplas opções:<br><br>• Copiar <strong>códigos de cores individuais</strong> em HEX, RGB ou HSL<br>• Exportar <strong>paletas completas</strong> em vários formatos<br>• Salvar no armazenamento local do navegador<br>• Gerar <strong>variáveis CSS</strong> para desenvolvimento web<br><br>Equipes de design frequentemente integram essas <strong>paletas extraídas</strong> em seus sistemas de design para manter consistência visual."
          },
          {
            question: "Como usar as cores em softwares de design?",
            answer: "Os <strong>valores de cores</strong> podem ser transferidos facilmente:<br><br>1. Cole <strong>códigos HEX</strong> (#FF5733) diretamente no Photoshop, Illustrator, Figma etc.<br>2. Insira <strong>valores RGB</strong> (rgb(255,87,51)) nos seletores de cor<br>3. <strong>HSL</strong> é ideal para ajustes de brilho/saturação<br>4. Alguns softwares aceitam <strong>importação de paletas</strong> nos formatos exportáveis<br><br>Para desenvolvimento web, as <strong>combinações de cores</strong> podem ser implementadas diretamente no CSS como propriedades individuais ou variáveis para gerenciamento sistemático."
          }
        ]
      },
      guide: {
        title: "Como usar o Extrator de Cores: Guia Passo a Passo",
        step1: "<strong>Carregue sua imagem</strong>: Clique em \"Selecionar imagem\" ou arraste e solte. Formatos suportados: JPEG, PNG, WebP e GIF. Para melhores resultados, use imagens com cores distintas e boa resolução.",
        step2: "<strong>Ajuste as configurações</strong>: Personalize a extração definindo o número de cores (5-10 geralmente é ideal) e escolha entre priorizar cores dominantes ou incluir cores de destaque. Essas opções ajudam a adaptar os resultados às suas necessidades específicas.",
        step3: "<strong>Processe a imagem</strong>: Clique em \"Extrair Cores\" para iniciar a análise. O <strong>algoritmo de detecção</strong> escaneará sua imagem e agrupará tons similares. O processo normalmente leva apenas alguns segundos.",
        step4: "<strong>Visualize as cores</strong>: Após o processamento, a ferramenta exibirá a <strong>paleta extraída</strong> nos formatos selecionados (HEX, RGB ou HSL). Cada cor é mostrada com seu código correspondente, organizada da mais dominante para a de destaque.",
        step5: "<strong>Salve e exporte</strong>: Copie <strong>códigos de cores individuais</strong> ou exporte a paleta completa. Você pode salvar no navegador para referência futura, baixar em formatos compatíveis com softwares de design ou gerar variáveis CSS para desenvolvimento web."
      },
      conclusion: "O Extrator de Cores é uma ferramenta essencial para designers, profissionais de marketing, desenvolvedores e artistas que precisam identificar, capturar e implementar cores específicas de referências visuais. Ao conectar inspiração visual com aplicação prática, essa ferramenta simplifica a seleção de cores e garante consistência em projetos digitais e impressos. Seja criando guias de marca, desenvolvendo websites ou produzindo arte digital, a capacidade de extrair paletas precisas elimina suposições e eleva a qualidade do trabalho criativo. Em um mundo onde o design valoriza sistemas de cores coerentes, ferramentas para extração e implementação precisa de paletas tornam-se recursos indispensáveis para profissionais criativos."
    }
  }