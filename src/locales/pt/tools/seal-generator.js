export default {
  name: 'Gerador de Carimbos',
  description: 'Crie carimbos digitais online, incluindo carimbos corporativos e pessoais',

  // Interface principal
  text: 'Texto do carimbo',

  textPlaceholder: 'Digite o texto circular',
  centerText: 'Texto central',
  centerTextPlaceholder: 'Digite texto ou símbolo central',
  font: 'Fonte',
  shape: 'Formato do carimbo',
  size: 'Tamanho do carimbo',
  color: 'Cor do carimbo',
  generate: 'Gerar carimbo',
  download: 'Baixar imagem',
  reset: 'Redefinir',
  preview: 'Pré-visualização',
  previewPlaceholder: 'Clique em "Gerar carimbo" para visualizar',
  bottomText: 'Texto inferior',
  bottomTextPlaceholder: 'Digite texto inferior',
  centerSymbol: 'Símbolo central',
  centerImage: 'Enviar imagem central',
  template: 'Modelos de carimbo',
  centerSymbolSize: 'Tamanho do símbolo central',
  exportFormat: 'Formato de exportação',
  lineWidth: 'Espessura da linha',
  defaultSealText: 'Empresa Limitada XXX',
  defaultBottomText: 'Carimbo para contratos',
  width: 'Largura',
  height: 'Altura',
  agingEffect: 'Efeito envelhecido',
  colorHex: 'Valor hexadecimal da cor',
  customColor: 'Cor personalizada',

  // Opções de fonte
  fonts: {
    simsun: 'SimSun',
    kaiti: 'KaiTi',
    simhei: 'SimHei',
    yahei: 'Microsoft YaHei',
    stxingkai: 'STXingkai',
    stzhongsong: 'STZhongsong',
    stfangsong: 'STFangsong',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // Opções de formato
  shapes: {
    circle: 'Circular',
    ellipse: 'Elíptico',
    square: 'Quadrado'
  },

  // Opções de cor
  colors: {
    red: 'Vermelho',
    darkRed: 'Vermelho escuro',
    blue: 'Azul',
    navy: 'Azul marinho',
    green: 'Verde',
    darkGreen: 'Verde escuro',
    purple: 'Roxo',
    magenta: 'Magenta',
    brown: 'Marrom',
    black: 'Preto',
    custom: 'Cor personalizada'
  },

  // Guia de uso
  howToUse: 'Instruções',

  instructions: {
    step1: 'Digite o texto que deseja exibir ao redor do carimbo, como nome da empresa ou pessoal',
    step2: 'Selecione texto ou símbolo central, como asterisco, logotipo ou outros símbolos',
    step3: 'Ajuste formato, tamanho e cor do carimbo, visualize o resultado',
    step4: 'Clique em "Baixar imagem" para salvar seu carimbo personalizado'
  },

  templates: {
    custom: 'Personalizado',
    company: 'Carimbo corporativo',
    contract: 'Carimbo para contratos',
    finance: 'Carimbo financeiro',
    legal: 'Carimbo legal',
    personal: 'Carimbo pessoal'
  }
};