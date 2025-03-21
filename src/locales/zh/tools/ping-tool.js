export default {
  name: '网络Ping工具',
  description: '测试网络连接并测量到服务器的响应时间',
  input: {
    title: 'Ping设置',
    host: '主机',
    hostPlaceholder: '输入主机名或IP地址',
    count: 'Ping次数',
    interval: '间隔（秒）',
    timeout: '超时（秒）',
    packetSize: '数据包大小（字节）',
    ttl: '生存时间',
    dontFragment: '不分片',
    ipv6: '使用IPv6',
    options: '选项',
    continuous: '持续Ping',
    traceroute: '包含路由跟踪'
  },
  actions: {
    ping: '开始Ping',
    stop: '停止',
    clear: '清除结果',
    exportResults: '导出结果'
  },
  results: {
    title: 'Ping结果',
    summary: '摘要',
    statistics: '统计',
    hostname: '主机名',
    ipAddress: 'IP地址',
    packets: {
      sent: '已发送数据包',
      received: '已接收数据包',
      lost: '丢失数据包',
      lossRate: '丢包率'
    },
    time: {
      min: '最小值',
      avg: '平均值',
      max: '最大值',
      stdDev: '标准偏差'
    },
    sequence: '序列',
    bytes: '字节',
    time: '时间',
    ttl: 'TTL',
    status: '状态',
    timeUnit: '毫秒',
    replyFrom: '来自{host}的回复',
    requestTimeout: '请求超时',
    destinationUnreachable: '目标主机不可达',
    unknownError: '未知错误'
  },
  traceroute: {
    title: '路由跟踪',
    hop: '跳数',
    host: '主机',
    ip: 'IP',
    time: '时间（毫秒）',
    country: '国家',
    asn: 'AS'
  },
  visualizations: {
    title: '可视化',
    responseTime: '响应时间',
    packetLoss: '丢包',
    graph: {
      time: '时间（秒）',
      responseTime: '响应时间（毫秒）',
      min: '最小值',
      avg: '平均值',
      max: '最大值'
    }
  },
  messages: {
    starting: '开始对{host}进行ping...',
    stopped: 'Ping已停止',
    completed: 'Ping已完成',
    invalidHost: '无效的主机名或IP地址',
    networkError: '网络错误：{message}',
    copied: '结果已复制到剪贴板',
    exported: '结果已成功导出'
  }
} 