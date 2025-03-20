export default {
  name: 'CSS Flexbox Generator',
  description: 'Visually generate CSS Flexbox layouts with real-time preview',
  container: {
    title: 'Container',
    flexDirection: 'flex-direction',
    justifyContent: 'justify-content',
    alignItems: 'align-items',
    flexWrap: 'flex-wrap',
    alignContent: 'align-content',
    rowGap: 'row-gap',
    columnGap: 'column-gap',
    gap: 'gap',
    width: 'width',
    height: 'height',
    border: 'border',
    padding: 'padding',
    backgroundColor: 'background-color'
  },
  items: {
    title: 'Items',
    item: 'Item',
    order: 'order',
    flexGrow: 'flex-grow',
    flexShrink: 'flex-shrink',
    flexBasis: 'flex-basis',
    alignSelf: 'align-self',
    addItem: 'Add Item',
    deleteItem: 'Delete Item',
    backgroundColor: 'background-color',
    content: 'Content',
    width: 'width',
    height: 'height',
    margin: 'margin'
  },
  directions: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse'
  },
  justifyContent: {
    flexStart: 'flex-start',
    flexEnd: 'flex-end',
    center: 'center',
    spaceBetween: 'space-between',
    spaceAround: 'space-around',
    spaceEvenly: 'space-evenly'
  },
  alignItems: {
    flexStart: 'flex-start',
    flexEnd: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch'
  },
  flexWrap: {
    nowrap: 'nowrap',
    wrap: 'wrap',
    wrapReverse: 'wrap-reverse'
  },
  alignContent: {
    flexStart: 'flex-start',
    flexEnd: 'flex-end',
    center: 'center',
    spaceBetween: 'space-between',
    spaceAround: 'space-around',
    stretch: 'stretch'
  },
  actions: {
    generateCSS: 'Generate CSS',
    copyCSS: 'Copy CSS',
    copyHTML: 'Copy HTML',
    reset: 'Reset',
    download: 'Download'
  },
  messages: {
    copied: 'Copied to clipboard!',
    generated: 'CSS generated successfully'
  },
  preview: {
    title: 'Preview',
    code: 'Code'
  }
} 