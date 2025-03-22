export default {
  name: 'URL解析器',
  description: '解析、分析和操作URL，提供交互式可视化',
  input: {
    label: '输入URL',
    placeholder: 'https://example.com/path?query=value#fragment',
    parse: '解析URL',
    clear: '清除',
    examples: '示例'
  },
  components: {
    protocol: '协议',
    username: '用户名',
    password: '密码',
    hostname: '主机名',
    port: '端口',
    path: '路径',
    query: '查询参数',
    fragment: '片段',
    origin: '来源',
    baseURL: '基础URL'
  },
  query: {
    key: '键',
    value: '值',
    addParam: '添加参数',
    removeParam: '移除',
    decoded: '已解码'
  },
  path: {
    segment: '片段',
    value: '值',
    index: '索引'
  },
  operations: {
    build: '构建URL',
    normalize: '标准化',
    resolve: '解析',
    encode: '编码',
    decode: '解码'
  },
  output: {
    title: '解析后的URL',
    copy: '复制',
    visualization: 'URL可视化',
    relativeTo: '相对于:',
    encoded: '已编码',
    decoded: '已解码',
    percent: '百分比编码'
  },
  messages: {
    copied: '已复制到剪贴板',
    invalidURL: '无效的URL格式',
    parseSuccess: 'URL解析成功',
    enterURL: '请输入要解析的URL'
  }
} 