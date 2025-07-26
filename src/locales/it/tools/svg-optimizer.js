export default {
  name: 'Ottimizzatore SVG',
  description: 'Ottimizza e pulisce file SVG per migliorare le prestazioni e ridurre le dimensioni',

  upload: {
    title: 'Carica SVG',
    dropzone: 'Trascina file SVG qui o clicca per caricare',
    or: 'oppure',
    pasteCode: 'Incolla codice SVG',
    maxSize: 'Dimensione massima file: 5MB',
    onlySvg: 'Sono supportati solo file in formato SVG',
    selected: 'Selezionato',
    changeFile: 'Cambia file'
  },

  input: {
    title: 'Input SVG',
    pasteHere: 'Incolla qui il codice SVG...',
    loadExample: 'Carica esempio',
    clear: 'Pulisci',
    validate: 'Valida SVG'
  },

  output: {
    title: 'Risultato ottimizzazione',
    copyToClipboard: 'Copia negli appunti',
    download: 'Scarica SVG',
    beforeSize: 'Dimensione originale',
    afterSize: 'Dimensione ottimizzata',
    reduction: 'Riduzione',
    reductionBy: 'Ridotto del',
    svgCode: 'Codice SVG'
  },

  options: {
    title: 'Opzioni ottimizzazione',
    preset: 'Preimpostazione',
    presets: {
      default: 'Predefinito',
      light: 'Leggera',
      aggressive: 'Aggressiva',
      custom: 'Personalizzata'
    },
    removeComments: 'Rimuovi commenti',
    removeCommentsDesc: 'Rimuove sezioni di commenti e cdata',
    removeHiddenElements: 'Rimuovi elementi nascosti',
    removeEmptyContainers: 'Rimuovi contenitori vuoti',
    removeUnusedDefs: 'Rimuovi definizioni non utilizzate',
    removeViewBox: 'Rimuovi viewBox',
    keepViewBox: 'Mantieni viewBox',
    keepViewBoxDesc: 'Conserva l\'attributo viewBox per garantire scalabilità SVG',
    cleanupIDs: 'Pulisci ID',
    cleanupIDsDesc: 'Rimuovi o abbrevia ID non referenziati',
    convertColors: 'Converti colori in esadecimale',
    removeMetadata: 'Rimuovi metadati',
    removeMetadataDesc: 'Elimina elementi &lt;metadata&gt;',
    removeDoctype: 'Rimuovi doctype',
    removeXMLProcInst: 'Rimuovi istruzioni XML',
    removeEditorsNS: 'Rimuovi namespace editor',
    collapseGroups: 'Comprimi gruppi',
    collapseGroupsDesc: 'Unisci elementi gruppo senza attributi speciali',
    convertPathData: 'Ottimizza dati percorso',
    convertPathDataDesc: 'Converti dati percorso in coordinate relative, riduci decimali etc.',
    convertTransforms: 'Ottimizza trasformazioni',
    convertShapeToPath: 'Converti forme in percorsi',
    convertShapeToPathDesc: 'Converte forme base in elementi &lt;path&gt;',
    removeUselessStrokeAndFill: 'Rimuovi tratti e riempimenti inutili',
    moveElemsAttrsToGroup: 'Sposta attributi elementi a gruppo',
    mergePaths: 'Unisci percorsi',
    minifyStyles: 'Minifica stili',
    inlineStyles: 'Stili inline',
    inlineStylesDesc: 'Converte stili da elementi &lt;style&gt; ad attributi inline',
    cleanupNumericValues: 'Arrotonda valori numerici',
    precision: 'Precisione numerica',
    decimalPlaces: 'decimali',
    lowPrecision: 'Bassa precisione (dimensione minore)',
    highPrecision: 'Alta precisione (qualità migliore)',
    removeDimensions: 'Rimuovi attributi dimensioni',
    removeDimensionsDesc: 'Elimina attributi width/height, usa viewBox per controllare dimensioni',
    sortAttrs: 'Ordina attributi',
    sortAttrsDesc: 'Disponi attributi elementi in ordine alfabetico'
  },

  view: {
    title: 'Anteprima',
    original: 'Originale',
    optimized: 'Ottimizzato',
    showBorder: 'Mostra bordo',
    backgroundColor: 'Colore sfondo',
    grid: 'Mostra griglia',
    zoom: 'Zoom',
    toggleAnimation: 'Attiva/disattiva animazione'
  },

  actions: {
    optimize: 'Avvia ottimizzazione',
    optimizing: 'Ottimizzazione in corso...',
    resetOptions: 'Reimposta opzioni',
    download: 'Scarica SVG ottimizzato',
    copy: 'Copia codice',
    copyCode: 'Copia codice',
    viewCode: 'Visualizza codice',
    viewPreview: 'Visualizza anteprima'
  },

  messages: {
    optimizationSuccess: 'Ottimizzazione SVG completata',
    optimizationFailed: 'Ottimizzazione SVG fallita: {error}',
    invalidSvg: 'File o codice SVG non valido',
    copied: 'Copiato negli appunti',
    copyFailed: 'Copia fallita, copia manualmente',
    downloaded: 'SVG ottimizzato scaricato',
    emptyInput: 'Fornisci codice SVG o file da ottimizzare',
    onlySvgAllowed: 'Carica solo file in formato SVG!',
    failedToLoadLibrary: 'Impossibile caricare libreria SVGO'
  }
};