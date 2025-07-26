export default {
  name: 'IP地址查询工具',
  description: '获取IP地址的详细信息，包括位置和网络详情',

  input: {
    title: 'IP地址查询',
    ipAddress: 'IP地址',
    ipPlaceholder: '输入IP地址（例如：8.8.8.8）',
    hostname: '主机名',
    hostnamePlaceholder: '或输入主机名（例如：google.com）',
    options: '查询选项',
    includeGeolocation: '包含地理位置',
    includeASN: '包含ASN信息',
    includeDomains: '包含关联域名',
    includeAbuse: '包含滥用联系人',
    myIP: '使用我的IP地址'
  },

  actions: {
    lookup: '查询IP',
    clear: '清除结果',
    copyIP: '复制IP',
    copyAll: '复制所有信息',
    export: '导出结果'
  },

  results: {
    title: 'IP信息',
    noResults: '没有可显示的信息',
    error: '错误：{message}',
    unknown: '未知',
    queryTime: '查询时间',
    dataSource: '数据来源',
    general: {
      title: '基本信息',
      ipAddress: 'IP地址',
      hostname: '主机名',
      type: '类型',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: '公共IP',
      yes: '是',
      no: '否',
      reverse: '反向DNS'
    },
    location: {
      title: '位置',
      country: '国家',
      region: '地区',
      city: '城市',
      postalCode: '邮政编码',
      timezone: '时区',
      coordinates: '坐标',
      latitude: '纬度',
      longitude: '经度'
    },
    network: {
      title: '网络',
      asn: 'ASN',
      organization: '组织',
      isp: '互联网服务提供商',
      usage: '使用类型',
      domain: '域名',
      route: '路由',
      subnet: '子网',
      netmask: '网络掩码',
      cidr: 'CIDR表示法'
    },
    security: {
      title: '安全信息',
      threat: '威胁检测',
      isTor: 'Tor出口节点',
      isProxy: '代理',
      isVpn: 'VPN',
      isAttacker: '已知攻击者',
      isAbuser: '已知滥用者',
      threatLevel: '威胁级别',
      confidenceScore: '置信度分数',
      abuseReports: '滥用报告',
      lastReported: '最后报告时间'
    },
    additional: {
      title: '附加信息',
      mobile: '移动网络',
      hosting: '托管提供商',
      associated: '关联域名',
      abuseContact: '滥用联系人'
    }
  },

  map: {
    title: '位置地图',
    noLocation: '没有可用的位置数据',
    viewLarger: '查看更大的地图'
  },

  messages: {
    lookingUp: '正在查找{query}的信息...',
    copied: '已复制到剪贴板',
    exported: '结果导出成功',
    invalidIP: '无效的IP地址',
    invalidHostname: '无效的主机名',
    publicIPOnly: '此工具仅适用于公共IP地址',
    rateLimited: '超出速率限制。请稍后再试。',
    historyCleared: '历史记录已清除'
  },

  history: {
    title: '搜索历史',
    clear: '清除历史'
  }
}; 