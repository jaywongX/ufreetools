export default {
  name: 'CSS Grid Generator',
  description: 'Visually create CSS Grid layouts and generate the corresponding code',
  container: {
    title: 'Grid Container',
    gridTemplateColumns: 'grid-template-columns',
    gridTemplateRows: 'grid-template-rows',
    gridGap: 'grid-gap',
    rowGap: 'row-gap',
    columnGap: 'column-gap',
    justifyItems: 'justify-items',
    alignItems: 'align-items',
    justifyContent: 'justify-content',
    alignContent: 'align-content',
    autoFlow: 'grid-auto-flow',
    autoRows: 'grid-auto-rows',
    autoColumns: 'grid-auto-columns'
  },
  gridUnits: {
    pixels: 'pixels (px)',
    percentage: 'percentage (%)',
    fraction: 'fraction (fr)',
    auto: 'auto',
    minmax: 'minmax()',
    fitContent: 'fit-content()',
    repeat: 'repeat()'
  },
  gridItems: {
    title: 'Grid Items',
    item: 'Item',
    content: 'Content',
    gridColumn: 'grid-column',
    gridRow: 'grid-row',
    justifySelf: 'justify-self',
    alignSelf: 'align-self',
    order: 'order',
    color: 'Color',
    backgroundColor: 'Background Color',
    padding: 'Padding'
  },
  alignment: {
    start: 'start',
    end: 'end',
    center: 'center',
    stretch: 'stretch',
    spaceAround: 'space-around',
    spaceBetween: 'space-between',
    spaceEvenly: 'space-evenly'
  },
  autoFlow: {
    row: 'row',
    column: 'column',
    dense: 'dense',
    rowDense: 'row dense',
    columnDense: 'column dense'
  },
  actions: {
    addColumn: 'Add Column',
    removeColumn: 'Remove Column',
    addRow: 'Add Row',
    removeRow: 'Remove Row',
    addItem: 'Add Item',
    removeItem: 'Remove Item',
    generateCSS: 'Generate CSS',
    copyCSS: 'Copy CSS',
    copyHTML: 'Copy HTML',
    reset: 'Reset',
    download: 'Download'
  },
  preview: {
    title: 'Preview',
    code: 'Code',
    toggleLines: 'Toggle Grid Lines',
    toggleNumbers: 'Toggle Line Numbers',
    responsiveView: 'Responsive View'
  },
  messages: {
    copied: 'Copied to clipboard!',
    codeGenerated: 'CSS code generated successfully',
    invalidTrackSize: 'Invalid track size'
  }
} 