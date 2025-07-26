export default {
  name: 'Generatore di Schemi di Colore',
  description: 'Genera armoniose combinazioni di colori basate sulla teoria del colore, aiutando i designer a creare rapidamente palette coordinate',

  baseColor: {
    title: 'Colore Base',
    picker: 'Selettore Colore',
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL',
    random: 'Colore Casuale',
    recent: 'Colori Recenti',
    hint: 'Clicca sul quadrato del colore o inserisci un valore esadecimale'
  },

  schemeTypes: {
    title: 'Teorie del Colore',
    monochromatic: 'Monocromatico',
    analogous: 'Analoghi',
    complementary: 'Complementari',
    splitComplementary: 'Complementari Divisati',
    triadic: 'Triade',
    tetradic: 'Tetrade',
    square: 'Quadrato',
    compound: 'Composto',
    shades: 'Sfumature',
    custom: 'Personalizzato'
  },

  options: {
    colorCount: 'Numero di Colori',
    saturationRange: 'Intervallo Saturazione',
    brightnessRange: 'Intervallo Luminosità',
    includeBaseColor: 'Includi Colore Base',
    lockBaseColor: 'Blocca Colore Base',
    colorSpace: 'Spazio Colore',
    sortBy: 'Ordina per',
    colorBlindSafe: 'Accessibile per Daltonici',
    contrastRatio: 'Contrasto Minimo'
  },

  colorSpaces: {
    rgb: 'RGB',
    hsl: 'HSL',
    lab: 'LAB',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },

  sortOptions: {
    hue: 'Tonalità',
    saturation: 'Saturazione',
    brightness: 'Luminosità',
    harmony: 'Armonia',
    none: 'Nessuno'
  },

  palettes: {
    title: 'Palette Generate',
    save: 'Salva Palette',
    copy: 'Copia Palette',
    export: 'Esporta come Variabili CSS',
    apply: 'Applica all\'Anteprima'
  },

  exportFormats: {
    title: 'Formati di Esportazione',
    css: 'Variabili CSS',
    scss: 'Variabili SCSS',
    less: 'Variabili LESS',
    json: 'JSON',
    svg: 'Tavolozza SVG',
    ase: 'Adobe ASE',
    tailwind: 'Configurazione Tailwind',
    pdf: 'PDF'
  },

  preview: {
    title: 'Anteprima',
    website: 'Sito Web',
    mobilApp: 'App Mobile',
    dashboard: 'Dashboard',
    card: 'Card',
    poster: 'Poster',
    custom: 'Personalizzato',
    mainButton: 'Pulsante Principale',
    secondButton: 'Pulsante Secondario',
    tag: 'Etichetta'
  },

  savedPalettes: {
    title: 'Palette Salvate',
    load: 'Carica',
    delete: 'Elimina',
    rename: 'Rinomina',
    noSavedPalettes: 'Nessuna palette salvata',
    saved: 'Palette salvata',
    schemeNameEmpty: 'Il nome della palette è vuoto'
  },

  actions: {
    generate: 'Genera Schema',
    regenerate: 'Rigenera',
    reset: 'Resetta',
    lockColor: 'Blocca Colore',
    unlockColor: 'Sblocca Colore',
    save: 'Salva Palette'
  },

  messages: {
    paletteSaved: 'Palette salvata con successo',
    paletteDeleted: 'Palette eliminata',
    copied: 'Copiato negli appunti',
    exported: 'Esportazione riuscita',
    adjustmentParam: 'Parametri di Regolazione',
    schemeName: 'Nome dello Schema',
    copyAllColors: 'Tutti i colori copiati'
  }
};