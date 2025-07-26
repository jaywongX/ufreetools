export default {
  name: 'Otimizador SVG',
  description: 'Otimiza e limpa arquivos SVG para melhorar desempenho e reduzir tamanho',

  upload: {
    title: 'Enviar SVG',
    dropzone: 'Arraste e solte arquivos SVG aqui ou clique para enviar',
    or: 'ou',
    pasteCode: 'Colar código SVG',
    maxSize: 'Tamanho máximo: 5MB',
    onlySvg: 'Apenas arquivos SVG',
    selected: 'Selecionado',
    changeFile: 'Alterar arquivo'
  },

  input: {
    title: 'Inserir SVG',
    pasteHere: 'Cole o código SVG aqui...',
    loadExample: 'Carregar exemplo',
    clear: 'Limpar',
    validate: 'Validar SVG'
  },

  output: {
    title: 'Resultado da otimização',
    copyToClipboard: 'Copiar para área de transferência',
    download: 'Baixar SVG',
    beforeSize: 'Tamanho original',
    afterSize: 'Tamanho otimizado',
    reduction: 'Redução',
    reductionBy: 'Reduzido em',
    svgCode: 'Código SVG'
  },

  options: {
    title: 'Opções de otimização',
    preset: 'Predefinição',
    presets: {
      default: 'Padrão',
      light: 'Leve',
      aggressive: 'Agressivo',
      custom: 'Personalizado'
    },
    removeComments: 'Remover comentários',
    removeCommentsDesc: 'Remove comentários e seções CDATA',
    removeHiddenElements: 'Remover elementos ocultos',
    removeEmptyContainers: 'Remover contêineres vazios',
    removeUnusedDefs: 'Remover definições não usadas',
    removeViewBox: 'Remover viewBox',
    keepViewBox: 'Manter viewBox',
    keepViewBoxDesc: 'Preserva o atributo viewBox para escalabilidade',
    cleanupIDs: 'Limpar IDs',
    cleanupIDsDesc: 'Remove ou encurta IDs não referenciados',
    convertColors: 'Converter cores para hexadecimal',
    removeMetadata: 'Remover metadados',
    removeMetadataDesc: 'Remove elementos &lt;metadata&gt;',
    removeDoctype: 'Remover tipo de documento',
    removeXMLProcInst: 'Remover instruções XML',
    removeEditorsNS: 'Remover namespaces de editores',
    collapseGroups: 'Colapsar grupos',
    collapseGroupsDesc: 'Combina elementos de grupo sem atributos especiais',
    convertPathData: 'Otimizar dados de caminho',
    convertPathDataDesc: 'Converte dados de caminho para coordenadas relativas, reduz casas decimais etc',
    convertTransforms: 'Otimizar transformações',
    convertShapeToPath: 'Converter formas para caminho',
    convertShapeToPathDesc: 'Converte formas básicas para elementos &lt;path&gt;',
    removeUselessStrokeAndFill: 'Remover traços e preenchimentos inúteis',
    moveElemsAttrsToGroup: 'Mover atributos para grupo',
    mergePaths: 'Mesclar caminhos',
    minifyStyles: 'Minificar estilos',
    inlineStyles: 'Estilos inline',
    inlineStylesDesc: 'Converte estilos de elementos &lt;style&gt; para inline',
    cleanupNumericValues: 'Arredondar valores numéricos',
    precision: 'Precisão numérica',
    decimalPlaces: 'Casas decimais',
    lowPrecision: 'Baixa precisão (tamanho menor)',
    highPrecision: 'Alta precisão (melhor qualidade)',
    removeDimensions: 'Remover atributos de dimensão',
    removeDimensionsDesc: 'Remove atributos width/height, usando viewBox para controle de tamanho',
    sortAttrs: 'Ordenar atributos',
    sortAttrsDesc: 'Ordena atributos de elementos alfabeticamente'
  },

  view: {
    title: 'Visualização',
    original: 'Original',
    optimized: 'Otimizado',
    showBorder: 'Mostrar borda',
    backgroundColor: 'Cor de fundo',
    grid: 'Mostrar grade',
    zoom: 'Zoom',
    toggleAnimation: 'Alternar animação'
  },

  actions: {
    optimize: 'Otimizar',
    optimizing: 'Otimizando...',
    resetOptions: 'Redefinir opções',
    download: 'Baixar SVG otimizado',
    copy: 'Copiar código',
    copyCode: 'Copiar código',
    viewCode: 'Ver código',
    viewPreview: 'Ver pré-visualização'
  },

  messages: {
    optimizationSuccess: 'SVG otimizado com sucesso',
    optimizationFailed: 'Falha ao otimizar SVG: {error}',
    invalidSvg: 'Arquivo ou código SVG inválido',
    copied: 'Copiado para área de transferência',
    copyFailed: 'Falha ao copiar, copie manualmente',
    downloaded: 'SVG otimizado baixado',
    emptyInput: 'Forneça um código SVG ou arquivo para otimizar',
    onlySvgAllowed: 'Apenas arquivos SVG são permitidos!',
    failedToLoadLibrary: 'Falha ao carregar biblioteca SVGO'
  }
};