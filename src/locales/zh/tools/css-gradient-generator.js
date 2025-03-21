export default {
  name: 'CSS网格生成器',
  description: '可视化创建CSS Grid布局并生成相应代码',
  container: {
    title: '网格容器',
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
    pixels: '像素 (px)',
    percentage: '百分比 (%)',
    fraction: '比例 (fr)',
    auto: '自动',
    minmax: 'minmax()',
    fitContent: 'fit-content()',
    repeat: 'repeat()'
  },
  gridItems: {
    title: '网格项目',
    item: '项目',
    content: '内容',
    gridColumn: 'grid-column',
    gridRow: 'grid-row',
    justifySelf: 'justify-self',
    alignSelf: 'align-self',
    order: '顺序',
    color: '颜色',
    backgroundColor: '背景颜色',
    padding: '内边距'
  },
  alignment: {
    start: '起点对齐',
    end: '终点对齐',
    center: '居中',
    stretch: '拉伸',
    spaceAround: '分散对齐',
    spaceBetween: '两端对齐',
    spaceEvenly: '均匀对齐'
  },
  autoFlow: {
    row: '行',
    column: '列',
    dense: '紧密',
    rowDense: '行紧密',
    columnDense: '列紧密'
  },
  actions: {
    addColumn: '添加列',
    removeColumn: '删除列',
    addRow: '添加行',
    removeRow: '删除行',
    addItem: '添加项目',
    removeItem: '删除项目',
    generateCSS: '生成CSS',
    copyCSS: '复制CSS',
    copyHTML: '复制HTML',
    reset: '重置',
    download: '下载'
  },
  preview: {
    title: '预览',
    code: '代码',
    toggleLines: '显示/隐藏网格线',
    toggleNumbers: '显示/隐藏线条编号',
    responsiveView: '响应式视图'
  },
  messages: {
    copied: '已复制到剪贴板！',
    codeGenerated: 'CSS代码生成成功',
    invalidTrackSize: '无效的轨道大小'
  }
} 