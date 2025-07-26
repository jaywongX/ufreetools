export default {
  name: 'Quadro de Desenho Simples',
  description: 'Ferramenta de desenho online com suporte a desenho livre, alteração de cores e tamanho do pincel',

  // Barra de ferramentas
  tools: {
    brush: 'Pincel',
    eraser: 'Borracha',
    clear: 'Limpar tela',
    save: 'Salvar imagem',
    undo: 'Desfazer',
    redo: 'Refazer',
    apply: 'Aplicar'
  },

  // Configurações
  settings: {
    brushSize: 'Tamanho do pincel',
    color: 'Cor',
    opacity: 'Opacidade',
    backgroundColor: 'Cor de fundo'
  },

  // Seletor de cores
  colors: {
    black: 'Preto',
    white: 'Branco',
    red: 'Vermelho',
    green: 'Verde',
    blue: 'Azul',
    yellow: 'Amarelo',
    orange: 'Laranja',
    purple: 'Roxo',
    pink: 'Rosa',
    brown: 'Marrom',
    gray: 'Cinza',
    custom: 'Cor personalizada'
  },

  // Configurações da tela
  canvas: {
    width: 'Largura',
    height: 'Altura',
    resize: 'Redimensionar tela',
    orientation: 'Orientação',
    portrait: 'Retrato',
    landscape: 'Paisagem',
    square: 'Quadrado'
  },

  // Mensagens e alertas
  messages: {
    saveSuccess: 'Imagem salva com sucesso',
    confirmClear: 'Tem certeza que deseja limpar a tela? Todo conteúdo não salvo será perdido.',
    unsupportedBrowser: 'Seu navegador não suporta Canvas. Por favor, use um navegador moderno.',
    fileNamePrompt: 'Digite um nome para o arquivo',
    defaultFileName: 'Meu desenho'
  },

  // Sobre o aplicativo
  aboutTitle: 'Sobre o Quadro de Desenho Simples',

  aboutDescription: 'O Quadro de Desenho Simples é uma ferramenta de desenho online intuitiva e fácil de usar, permitindo que você explore sua criatividade com pinturas e criações artísticas. Seja para rabiscos, ilustrações simples ou registro de ideias, esta ferramenta atenderá suas necessidades.',
  featuresTitle: 'Principais recursos',
  feature1: 'Desenho livre com múltiplas cores e tamanhos de pincel',
  feature2: 'Ferramenta borracha para correções fáceis',
  feature3: 'Funções desfazer e refazer para corrigir erros',
  feature4: 'Ajuste de opacidade para efeitos artísticos',
  feature5: 'Limpeza rápida da tela para recomeçar',
  feature6: 'Salve suas obras como imagens',
  howToUseTitle: 'Como usar',
  howToUseStep1: '1. Selecione o pincel e a cor para começar',
  howToUseStep2: '2. Ajuste o tamanho e opacidade do pincel',
  howToUseStep3: '3. Use a borracha para fazer correções',
  howToUseStep4: '4. Desfaça ou refaça ações quando necessário',
  howToUseStep5: '5. Clique em salvar para baixar sua criação',
  tipsTitle: 'Dicas úteis',
  tip1: 'Use pincéis finos para detalhes e grossos para preenchimentos',
  tip2: 'Opacidade baixa cria efeitos de aquarela',
  tip3: 'Não tema errar - use a função desfazer',
  tip4: 'Comece com contornos básicos antes dos detalhes',
  tip5: 'Experimente combinações de cores para obras vibrantes'
};