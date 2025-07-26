export default {
  name: 'Selettore di Colori',
  description: 'Utilizza strumenti avanzati per selezionare, convertire e generare schemi di colore',

  options: {
    colorSpace: 'Spazio colore',
    paletteType: 'Tipo di tavolozza',
    includeAlpha: 'Includi trasparenza',
    colorNaming: 'Nomenclatura colori'
  },

  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: 'Colori denominati'
  },

  palettes: {
    monochromatic: 'Monocromatico',
    complementary: 'Complementari',
    analogous: 'Analoghi',
    triadic: 'Triade',
    tetradic: 'Tetrade',
    split: 'Complementari divisi'
  },

  actions: {
    pickColor: 'Seleziona colore',
    randomColor: 'Colore casuale',
    generatePalette: 'Genera tavolozza',
    convert: 'Converti',
    copyColor: 'Copia colore corrente',
    copyAll: 'Copia tutto',
    save: 'Salva colore',
    reset: 'Ripristina',
    clear: 'Pulisci'
  },

  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },

  colorSchemes: {
    title: 'Schemi colore',
    complementary: 'Complementari',
    triadic: 'Triade',
    analogous: 'Analoghi',
    monochromatic: 'Monocromatico',
    split: 'Complementari divisi',
    double: 'Doppi complementari',
    square: 'Quadrato',
    compound: 'Composto'
  },

  colorAdjust: {
    title: 'Regolazione colore',
    hue: 'Tonalità',
    saturation: 'Saturazione',
    lightness: 'Luminosità',
    alpha: 'Trasparenza'
  },

  colorInfo: {
    title: 'Informazioni colore',
    name: 'Nome colore',
    format: 'Formato',
    contrast: 'Contrasto',
    accessibility: {
      title: 'Accessibilità',
      pass: 'Conforme WCAG',
      fail: 'Non conforme WCAG',
      normal: 'Testo normale',
      large: 'Testo grande'
    }
  },

  messages: {
    copied: 'Colore copiato negli appunti',
    copyFailed: 'Copia colore fallita',
    invalidColor: 'Formato colore non valido',
    contrastWarning: 'Contrasto basso',
    saved: 'Colore salvato',
    contrast: 'Contrasto: {ratio}',
    accessibility: {
      AAA: 'Contrasto eccellente (AAA)',
      AA: 'Buon contrasto (AA)',
      fail: 'Contrasto insufficiente - non accessibile'
    },
    preview: 'Anteprima',
    colorValue: 'Valore colore',
  },

  history: {
    title: 'Cronologia colori',
    empty: 'Nessun colore recente',
    clear: 'Svuota cronologia'
  },

  colorPalette: {
    title: 'Tavolozza',
    addToPalette: 'Aggiungi a tavolozza',
    removeFromPalette: 'Rimuovi da tavolozza',
    exportPalette: 'Esporta tavolozza',
    importPalette: 'Importa tavolozza',
    clearPalette: 'Svuota tavolozza'
  }
};