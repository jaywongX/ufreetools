export default {
  name: 'Gerador de Gradientes CSS',
  description: 'Crie e personalize belos gradientes CSS, visualize em tempo real e copie o código para seus projetos',

  gradientTypes: {
    title: 'Tipos de Gradiente',
    linear: 'Gradiente Linear',
    radial: 'Gradiente Radial',
    conic: 'Gradiente Cônico'
  },

  controls: {
    title: 'Controles de Cor',
    addColor: 'Adicionar Cor',
    color: 'Cor',
    position: 'Posição (%)',
    delete: 'Remover Cor',
    angle: 'Ângulo',
    degrees: 'graus',
    shape: 'Forma',
    circle: 'Círculo',
    ellipse: 'Elipse',
    positionX: 'Posição X (%)',
    positionY: 'Posição Y (%)',
    size: 'Tamanho',
    closestSide: 'Lado Mais Próximo',
    closestCorner: 'Canto Mais Próximo',
    farthestSide: 'Lado Mais Distante',
    farthestCorner: 'Canto Mais Distante',
    fromAngle: 'Ângulo Inicial'
  },

  output: {
    title: 'Código CSS',
    copyCode: 'Copiar Código',
    preview: 'Área de Visualização',
    copied: 'Código CSS copiado para a área de transferência!',
    download: 'Baixar PNG'
  },

  presets: {
    title: 'Predefinições',
    apply: 'Aplicar Predefinição',
    sunnyMorning: 'Manhã Ensolarada',
    winterNeva: 'Inverno em Neva',
    rareWind: 'Vento Raro',
    deepBlue: 'Azul Profundo',
    perfect: 'Branco Perfeito',
    cloudyKnoxville: 'Knoxville Nublado',
    greenBeach: 'Praia Verde',
    plumBath: 'Banho de Ameixa',
    everlasting: 'Céu Eterno'
  },

  accessibility: {
    colorPicker: 'Seletor de Cores',
    deleteSwatch: 'Remover Ponto de Cor',
    dragToReposition: 'Arraste para reposicionar ponto de cor'
  },

  actions: {
    reset: 'Reiniciar',
    generateCSS: 'Gerar CSS',
    clickToCopy: 'Clique para copiar código',
    completeEdit: 'Concluir Edição'
  },

  messages: {
    copied: 'Código CSS copiado para a área de transferência!',
    noColors: 'Adicione pelo menos duas cores para criar um gradiente',
    maxColors: 'Número máximo de pontos de cor atingido (10)',
    useKeyboard: 'Use a tecla Delete para remover o ponto de cor selecionado',
    invalidHex: 'Por favor insira um código de cor hexadecimal válido',
    downloadError: 'Falha ao baixar PNG, tente novamente mais tarde',
    preview: 'Visualização'
  },

  anglePresets: {
    top: 'Topo',
    topRight: 'Superior Direito',
    right: 'Direita',
    bottomRight: 'Inferior Direito',
    bottom: 'Base',
    bottomLeft: 'Inferior Esquerdo',
    left: 'Esquerda',
    topLeft: 'Superior Esquerdo'
  },

  radialShapes: {
    circle: 'Círculo',
    ellipse: 'Elipse'
  },

  radialSizes: {
    farthestCorner: 'Canto Mais Distante',
    closestCorner: 'Canto Mais Próximo',
    farthestSide: 'Lado Mais Distante',
    closestSide: 'Lado Mais Próximo',
  }
};