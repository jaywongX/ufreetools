export default {
  name: 'DNS查询工具',
  description: '查询DNS记录并检查域名信息',
  input: {
    title: '域名信息',
    domain: '域名',
    domainPlaceholder: '输入域名（例如：example.com）',
    recordType: '记录类型',
    recordTypes: {
      all: '所有记录',
      a: 'A记录（IPv4地址）',
      aaaa: 'AAAA记录（IPv6地址）',
      cname: 'CNAME记录（规范名称）',
      mx: 'MX记录（邮件交换）',
      ns: 'NS记录（名称服务器）',
      txt: 'TXT记录（文本）',
      soa: 'SOA记录（权威起始）',
      srv: 'SRV记录（服务）',
      caa: 'CAA记录（证书颁发机构授权）'
    },
    nameserver: '名称服务器（可选）',
    nameserverPlaceholder: '自定义名称服务器（例如：8.8.8.8）',
    advanced: '高级选项',
    timeout: '超时（秒）',
    enableDNSSEC: '启用DNSSEC验证',
    recursion: '启用递归'
  },
  actions: {
    lookup: '查询DNS',
    clear: '清除结果',
    copyResults: '复制结果',
    exportCSV: '导出为CSV',
    exportJSON: '导出为JSON'
  },
  results: {
    title: 'DNS记录',
    summary: '{domain}的DNS摘要',
    noRecords: '未找到DNS记录',
    error: '错误：{message}',
    hostname: '主机名',
    type: '类型',
    class: '类',
    ttl: 'TTL',
    value: '值',
    priority: '优先级',
    weight: '权重',
    port: '端口',
    target: '目标'
  },
  recordInfo: {
    title: '记录信息',
    a: 'A记录将域名映射到IPv4地址。',
    aaaa: 'AAAA记录将域名映射到IPv6地址。',
    cname: 'CNAME记录从一个域名创建到另一个域名的别名。',
    mx: 'MX记录指定负责接收电子邮件的邮件服务器。',
    ns: 'NS记录标识负责域名的DNS服务器。',
    txt: 'TXT记录存储文本数据，通常用于验证。',
    soa: 'SOA记录包含有关区域的管理信息。',
    srv: 'SRV记录为特定服务指定服务器。',
    caa: 'CAA记录指定哪些证书颁发机构可以颁发证书。'
  },
  propagation: {
    title: '传播检查',
    checking: '正在检查传播状态...',
    status: '传播状态',
    complete: '完全传播',
    partial: '部分传播',
    notPropagated: '未传播',
    checkAgain: '再次检查'
  },
  messages: {
    lookingUp: '正在查找{domain}的DNS记录...',
    copied: '结果已复制到剪贴板',
    exported: '结果导出成功',
    timeout: '请求超时',
    networkError: '网络错误：{message}',
    invalidDomain: '无效的域名'
  }
} 