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
  }
};