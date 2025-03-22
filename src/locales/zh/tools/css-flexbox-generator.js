export default {
  name: 'CSS弹性盒子生成器',
  description: '通过可视化界面生成CSS Flexbox布局，并提供实时预览',
  container: {
    title: '容器',
    flexDirection: 'flex-direction',
    justifyContent: 'justify-content',
    alignItems: 'align-items',
    flexWrap: 'flex-wrap',
    alignContent: 'align-content',
    rowGap: 'row-gap',
    columnGap: 'column-gap',
    gap: 'gap',
    width: '宽度',
    height: '高度',
    border: '边框',
    padding: '内边距',
    backgroundColor: '背景颜色'
  },
  items: {
    title: '项目',
    item: '项目',
    order: 'order',
    flexGrow: 'flex-grow',
    flexShrink: 'flex-shrink',
    flexBasis: 'flex-basis',
    alignSelf: 'align-self',
    addItem: '添加项目',
    deleteItem: '删除项目',
    backgroundColor: '背景颜色',
    content: '内容',
    width: '宽度',
    height: '高度',
    margin: '外边距'
  },
  directions: {
    row: '行',
    rowReverse: '行-反向',
    column: '列',
    columnReverse: '列-反向'
  },
  justifyContent: {
    flexStart: '起点对齐',
    flexEnd: '终点对齐',
    center: '居中',
    spaceBetween: '两端对齐',
    spaceAround: '分散对齐',
    spaceEvenly: '均匀对齐'
  },
  alignItems: {
    flexStart: '起点对齐',
    flexEnd: '终点对齐',
    center: '居中',
    baseline: '基线对齐',
    stretch: '拉伸'
  },
  flexWrap: {
    nowrap: '不换行',
    wrap: '换行',
    wrapReverse: '反向换行'
  },
  alignContent: {
    flexStart: '起点对齐',
    flexEnd: '终点对齐',
    center: '居中',
    spaceBetween: '两端对齐',
    spaceAround: '分散对齐',
    stretch: '拉伸'
  },
  actions: {
    generateCSS: '生成CSS',
    copyCSS: '复制CSS',
    copyHTML: '复制HTML',
    reset: '重置',
    download: '下载'
  },
  messages: {
    copied: '已复制到剪贴板！',
    generated: 'CSS生成成功'
  },
  preview: {
    title: '预览',
    code: '代码'
  }
} 