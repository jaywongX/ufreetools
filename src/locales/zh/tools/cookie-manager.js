export default {
  name: 'Cookie管理器',
  description: '查看、创建、编辑和删除当前网站的Cookie',

  // 主要功能标签
  currentCookies: '当前Cookie',

  createCookie: '创建Cookie',
  importExport: '导入/导出',

  // Cookie列表
  noCookies: '当前网站没有Cookie',

  cookieName: '名称',
  cookieValue: '值',
  cookieDomain: '域名',
  cookiePath: '路径',
  cookieExpires: '过期时间',
  cookieSecure: '安全(Secure)',
  cookieHttpOnly: 'HttpOnly',
  cookieSameSite: 'SameSite',
  actions: '操作',
  edit: '编辑',
  delete: '删除',
  save: '保存',
  cancel: '取消',
  refresh: '刷新',

  // 创建/编辑表单
  addCookie: '添加Cookie',

  editCookie: '编辑Cookie',
  required: '必填项',
  optional: '可选项',
  days: '天',
  hours: '小时',
  minutes: '分钟',
  cookieCreated: 'Cookie已创建',
  cookieUpdated: 'Cookie已更新',
  cookieDeleted: 'Cookie已删除',
  createError: '创建Cookie时出错',
  updateError: '更新Cookie时出错',
  deleteError: '删除Cookie时出错',

  // 导入/导出
  export: '导出Cookie',

  import: '导入Cookie',
  exportAs: '导出为',
  exportSuccess: 'Cookie已导出',
  importSuccess: '已导入{count}个Cookie',
  importError: '导入Cookie时出错',

  // 安全选项
  none: '无',

  strict: '严格',
  lax: '宽松',

  // 提示和说明
  domainNote: '留空表示当前域名',

  pathNote: '默认为根路径"/"',
  expiresNote: '不设置表示会话Cookie',
  secureNote: '仅通过HTTPS发送',
  httpOnlyNote: '禁止JavaScript访问',
  sameSiteNote: '跨站点请求控制',

  // 导入格式
  importFormat: '导入格式示例:\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict',

  jsonFormat: 'JSON格式',
  textFormat: '文本格式',
  invalidFormat: '无效的格式'
}; 