export default {
  name: 'Generador de Sellos',
  description: 'Cree imágenes de sellos personalizados en línea, incluyendo sellos corporativos y privados',

  // Interfaz principal
  text: 'Texto del sello',

  textPlaceholder: 'Introduzca el texto que desea mostrar en círculo',
  centerText: 'Texto central',
  centerTextPlaceholder: 'Introduzca el texto o símbolo central',
  font: 'Seleccionar fuente',
  shape: 'Forma del sello',
  size: 'Tamaño del sello',
  color: 'Color del sello',
  generate: 'Generar sello',
  download: 'Descargar imagen',
  reset: 'Restablecer',
  preview: 'Vista previa',
  previewPlaceholder: 'Haga clic en "Generar sello" para ver la vista previa',
  bottomText: 'Texto inferior',
  bottomTextPlaceholder: 'Introduzca el texto inferior',
  centerSymbol: 'Símbolo central',
  centerImage: 'Subir imagen central',
  template: 'Plantilla de sello',
  centerSymbolSize: 'Tamaño del símbolo central',
  exportFormat: 'Formato de exportación',
  lineWidth: 'Grosor de línea',
  defaultSealText: 'Empresa Limitada XXX',
  defaultBottomText: 'Sello de contrato',
  width: 'Ancho',
  height: 'Alto',
  agingEffect: 'Efecto envejecido',
  colorHex: 'Valor hexadecimal del color',
  customColor: 'Color personalizado',

  // Opciones de fuente
  fonts: {
    simsun: 'SimSun (宋体)',
    kaiti: 'KaiTi (楷体)',
    simhei: 'SimHei (黑体)',
    yahei: 'YaHei (微软雅黑)',
    stxingkai: 'STXingKai (华文行楷)',
    stzhongsong: 'STZhongSong (华文中宋)',
    stfangsong: 'STFangSong (华文仿宋)',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // Opciones de forma
  shapes: {
    circle: 'Circular',
    ellipse: 'Elíptico',
    square: 'Cuadrado'
  },

  // Opciones de color
  colors: {
    red: 'Rojo',
    darkRed: 'Rojo oscuro',
    blue: 'Azul',
    navy: 'Azul marino',
    green: 'Verde',
    darkGreen: 'Verde oscuro',
    purple: 'Morado',
    magenta: 'Magenta',
    brown: 'Marrón',
    black: 'Negro',
    custom: 'Color personalizado'
  },

  // Guía de uso
  howToUse: 'Instrucciones de uso',

  instructions: {
    step1: 'Introduzca el texto que desea mostrar alrededor del sello, como nombre de empresa o nombre personal',
    step2: 'Seleccione el texto o imagen central, puede ser un asterisco, logotipo u otro símbolo',
    step3: 'Ajuste la forma, tamaño y color del sello y vea la vista previa',
    step4: 'Una vez satisfecho, haga clic en "Descargar imagen" para guardar su sello personalizado'
  },

  templates: {
    custom: 'Personalizado',
    company: 'Sello corporativo',
    contract: 'Sello de contrato',
    finance: 'Sello financiero',
    legal: 'Sello oficial',
    personal: 'Sello personal'
  }
};