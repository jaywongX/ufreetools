export default {
  title: 'Ferramenta de Desfoque de Fundo: Desfoque de Imagem de Fundo Online para Efeitos Profissionais de Profundidade de Campo',
  functionTitle: 'O que é uma Ferramenta de Desfoque de Fundo e Para que Serve?',
  intro: 'Esta ferramenta é uma <strong>ferramenta de desfoque de fundo online</strong> puramente front-end (Desfoque de Imagem de Fundo). Ela combina filtros WebGL com algoritmos de segmentação humana para realizar desfoque gaussiano, profundidade de campo de lente, desfoque de movimento, desfoque radial e <b>desfoque de fundo de nível profissional de câmera</b>. Suporta processamento em lote e exportação multi-formato, permitindo que você obtenha rapidamente fotos com fundos limpos e assuntos destacados em seu navegador, adequado para imagens principais de comércio eletrônico, fotos de identidade, capas de redes sociais e outros cenários.',
  useCasesTitle: 'Cenários Comuns de Aplicação para Desfoque de Fundo',
  useCases: [
    'Imagens principais de comércio eletrônico removendo fundos distraentes para destacar produtos',
    'Fotos de retrato com desfoque de fundo para efeitos profissionais de profundidade de campo',
    'Fotos de identidade ou retratos profissionais, substituídos por fundos de cor sólida ou gradientes',
    'Embelezamento rápido de capas de redes sociais e imagens de capa de vídeos curtos',
    'Processamento unificado de fundo para slides de apresentação e designs de pôsteres',
    'Desfoque de fundo de fotos turísticas para proteger a privacidade e melhorar a estética',
    'Desfoque de fundo de fotos de grupo com exportação em lote',
    'Geração rápida de efeitos de foco suave e foco radial para conteúdo UGC'
  ],
  tipTitle: 'Dica Profissional:',
  tipContent: 'Ao usá-lo para assuntos de retrato, por favor habilite "Habilitar Segmentação de Primeiro Plano" e aumente adequadamente "Suavização de Bordas" para reduzir significativamente o serrilhado das bordas dos cabelos. Para imagens com requisitos de alta qualidade, priorize a exportação em formatos PNG ou WebP.',
  conclusion: 'A <strong>ferramenta de desfoque de fundo</strong> resolve efetivamente os pontos problemáticos de "fundos bagunçados" e "assuntos não destacados" através de segmentação inteligente e múltiplos algoritmos de desfoque. Seja fotografia de produtos, retratos ou criação de conteúdo social, completar o desfoque de fundo online pode melhorar significativamente o foco visual e o profissionalismo.',
  faqTitle: 'Perguntas Frequentes',
  faqs: [
    {
      question: 'Como a ferramenta de desfoque de fundo online alcança efeitos profissionais de profundidade de campo de câmera?',
      answer: 'Esta ferramenta de desfoque de fundo online combina segmentação de primeiro plano MediaPipe com filtros WebGL, aplicando desfoque gaussiano/lente/radial/movimento às áreas de fundo para alcançar transições de profundidade de campo e efeitos de foco suave similares a câmeras profissionais.'
    },
    {
      question: 'Quais métodos de substituição de fundo são suportados (cor sólida/gradiente/imagem)?',
      answer: 'A ferramenta suporta três modos: fundo de cor sólida, fundo de gradiente linear e fundo de imagem, com transparência de fundo e modos de mistura ajustáveis para atender aos requisitos de imagens principais de comércio eletrônico, fotos de identidade e estilos de marca consistentes.'
    },
    {
      question: 'Como garantir a qualidade de exportação e controlar o tamanho do arquivo?',
      answer: 'Você pode escolher formatos PNG/JPG/WebP e controlar o tamanho de exportação através de controles deslizantes de qualidade e predefinições de dimensões. PNG e WebP são mais adequados para cenários de desfoque de fundo com requisitos de alta qualidade.'
    },
    {
      question: 'Como usar o processamento em lote e a classificação de páginas?',
      answer: 'Várias imagens podem ser importadas de uma vez, com seleção de intervalo e controles de caixa de seleção para processar "páginas" específicas, suportando classificação de mover para cima/baixo, e filtragem automática de imagens inválidas com "Pular Páginas em Branco".'
    },
    {
      question: 'É necessário fazer upload das imagens para o servidor, como a privacidade é protegida?',
      answer: 'Todo o processamento de desfoque de fundo é concluído localmente no navegador e não é carregado em nenhum servidor, garantindo a privacidade e segurança das imagens.'
    }
  ],
  tutorialTitle: 'Como Usar a Ferramenta de Desfoque de Fundo',
  steps: [
    {
      title: 'Carregar ou Importar Imagens',
      description: 'Arraste e solte ou clique para carregar imagens locais, ou cole imagens da área de transferência, habilite a captura de câmera, ou importe imagens de rede via URL. Suporta formatos PNG, JPG, WEBP, BMP.',
      note: 'Várias imagens podem ser importadas de uma vez para desfoque de fundo em lote.'
    },
    {
      title: 'Selecionar Tipo de Desfoque e Parâmetros',
      description: 'Escolha desfoque gaussiano, de lente, de movimento ou radial em "Tipo de Desfoque", e ajuste finamente os efeitos através de controles deslizantes para raio, ângulo, ponto central e largura de banda do foco.',
      note: 'Marcar "Mostrar Comparação Antes/Depois" permite uma comparação em tempo real do desfoque de fundo antes e depois.'
    },
    {
      title: 'Habilitar Segmentação de Primeiro Plano e Configurações de Fundo',
      description: 'Habilite "Habilitar Segmentação de Primeiro Plano" para melhorar a qualidade das bordas do assunto, aumente "Suavização de Bordas" para transições mais naturais. Em "Configurações de Fundo", escolha fundo de cor sólida, gradiente ou imagem, e ajuste transparência e modos de mistura quando necessário.',
      note: 'Quando "Preservar Fundo Original" é selecionado, apenas a área de fundo é desfocada enquanto o assunto permanece claro.'
    },
    {
      title: 'Dimensões e Qualidade',
      description: 'Em "Tamanho de Saída e Qualidade", escolha predefinições de redes sociais ou dimensões personalizadas, defina a qualidade JPG/WebP e percentual de escala. Para impressão, aumente o DPI e exporte pixels mais altos proporcionalmente.',
      note: 'PNG e WebP são mais adequados para cenários de desfoque de fundo que requerem preservação de detalhes.'
    },
    {
      title: 'Exportar e Download em Lote',
      description: 'Selecione o formato de exportação para cada imagem e clique em "Baixar" para salvar; várias imagens podem usar "Download em Lote (ZIP)" para exportar todos os resultados de desfoque de fundo de uma vez.',
      note: 'Todo o processamento é concluído localmente no navegador, as imagens não são carregadas no servidor.'
    },
    {
      title: 'Controle de Página',
      description: 'Classifique "páginas" através de caixas de seleção, entrada de intervalo e mover para cima/baixo, habilite "Pular Páginas em Branco" para filtrar automaticamente imagens inválidas com baixa variância de brilho.',
      note: 'Exemplo de intervalo: 1-3,5,7-9.'
    }
  ],
  successTitle: 'Parabéns!',
  successContent: 'Você aprendeu a usar nossa ferramenta de desfoque de fundo para alcançar efeitos profissionais de profundidade de campo e foco suave de nível de câmera, adequados para vários cenários criativos e comerciais.',
  relatedToolsTitle: 'Ferramentas Relacionadas que Podem Interessar Você',
  relatedTools: [
    {
      name: 'Compressor de Imagens',
      description: 'Reduzir o tamanho do arquivo de imagem sem perda significativa de qualidade.',
      url: 'https://www.ufreetools.com/tool/image-compressor'
    },
    {
      name: 'Redimensionador de Imagens',
      description: 'Redimensionar imagens para dimensões específicas ou escalar por porcentagem.',
      url: 'https://www.ufreetools.com/tool/image-batch-resizer'
    },
    {
      name: 'Gerador de Selos',
      description: 'Criação online de várias imagens de selos, gerando carimbos corporativos, selos pessoais e outros carimbos digitais.',
      url: 'https://www.ufreetools.com/tool/seal-generator'
    },
    {
      name: 'Gerador de Códigos QR',
      description: 'Criar códigos QR personalizados para URLs, textos, informações de contato e mais.',
      url: 'https://www.ufreetools.com/tool/qr-code-generator'
    }
  ],
  referencesTitle: 'Recursos de Referência',
  references: [
    {
      name: 'Segmentação de Selfie MediaPipe',
      description: 'Modelo de segmentação de primeiro plano humano e uso do Google',
      url: 'https://github.com/google/mediapipe/blob/master/docs/solutions/selfie_segmentation.md'
    },
    {
      name: 'glfx.js',
      description: 'Biblioteca de efeitos de imagem em tempo real baseada em WebGL',
      url: 'https://github.com/evanw/glfx.js'
    },
    {
      name: 'StackBlur',
      description: 'Algoritmo de desfoque de tela rápido e controlável, adequado como solução alternativa e processamento de suavização',
      url: 'https://github.com/flozz/StackBlur'
    }
  ]
}