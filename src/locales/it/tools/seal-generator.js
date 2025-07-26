export default {
  name: 'Generatore di timbri',
  description: 'Crea online timbri digitali per aziende e privati',

  // Interfaccia principale
  text: 'Testo del timbro',

  textPlaceholder: 'Inserisci testo circolare',
  centerText: 'Testo centrale',
  centerTextPlaceholder: 'Inserisci testo o simbolo centrale',
  font: 'Selezione font',
  shape: 'Forma del timbro',
  size: 'Dimensione del timbro',
  color: 'Colore del timbro',
  generate: 'Genera timbro',
  download: 'Scarica immagine',
  reset: 'Reimposta',
  preview: 'Anteprima timbro',
  previewPlaceholder: 'Clicca "Genera timbro" per vedere l\'anteprima',
  bottomText: 'Testo inferiore',
  bottomTextPlaceholder: 'Inserisci testo inferiore',
  centerSymbol: 'Simbolo centrale',
  centerImage: 'Carica immagine centrale',
  template: 'Modello di timbro',
  centerSymbolSize: 'Dimensione simbolo centrale',
  exportFormat: 'Formato di esportazione',
  lineWidth: 'Spessore linea',
  defaultSealText: 'Società a responsabilità limitata XYZ',
  defaultBottomText: 'Timbro per contratti',
  width: 'Larghezza',
  height: 'Altezza',
  agingEffect: 'Effetto invecchiamento',
  colorHex: 'Valore esadecimale colore',
  customColor: 'Colore personalizzato',

  // Opzioni font
  fonts: {
    simsun: 'Song Ti',
    kaiti: 'Kai Ti',
    simhei: 'Hei Ti',
    yahei: 'Microsoft YaHei',
    stxingkai: 'STXingkai',
    stzhongsong: 'STZhongsong',
    stfangsong: 'STFangsong',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // Opzioni forma
  shapes: {
    circle: 'Circolare',
    ellipse: 'Ellittico',
    square: 'Quadrato'
  },

  // Opzioni colore
  colors: {
    red: 'Rosso',
    darkRed: 'Rosso scuro',
    blue: 'Blu',
    navy: 'Blu navy',
    green: 'Verde',
    darkGreen: 'Verde scuro',
    purple: 'Viola',
    magenta: 'Magenta',
    brown: 'Marrone',
    black: 'Nero',
    custom: 'Colore personalizzato'
  },

  // Guida all'uso
  howToUse: 'Istruzioni per l\'uso',

  instructions: {
    step1: 'Inserisci il testo che vuoi visualizzare attorno al timbro, come nome azienda o personale',
    step2: 'Seleziona testo o simbolo centrale come asterisco, logo o altro simbolo',
    step3: 'Regola forma, dimensione e colore del timbro e visualizza l\'anteprima',
    step4: 'Soddisfatto del risultato, clicca "Scarica immagine" per salvare il tuo timbro personalizzato'
  },

  templates: {
    custom: 'Personalizzato',
    company: 'Timbro aziendale',
    contract: 'Timbro per contratti',
    finance: 'Timbro finanziario',
    legal: 'Timbro legale',
    personal: 'Timbro personale'
  }
};