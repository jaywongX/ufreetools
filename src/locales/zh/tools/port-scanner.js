export default {
  name: '端口扫描器',
  description: '扫描网络端口以检查其状态和可用性',
  input: {
    title: '端口扫描器',
    host: '主机',
    hostPlaceholder: '输入主机名或IP地址',
    portRange: '端口范围',
    startPort: '起始端口',
    endPort: '结束端口',
    commonPorts: '常用端口',
    customPorts: '自定义端口',
    portsPlaceholder: '输入用逗号分隔的端口（例如：80,443,3306）',
    options: '扫描选项',
    timeout: '超时（毫秒）',
    concurrent: '并发扫描数',
    method: '扫描方法',
    scanMethods: {
      tcp: 'TCP连接',
      syn: 'SYN扫描',
      udp: 'UDP扫描'
    },
    serviceLookup: '检测服务',
    showClosed: '显示关闭的端口'
  },
  portSets: {
    web: '网络（80, 443, 8080, 8443）',
    mail: '邮件（25, 465, 587, 110, 143, 993）',
    ftp: 'FTP（20, 21）',
    ssh: 'SSH（22）',
    database: '数据库（3306, 5432, 1433, 1521, 27017）',
    gaming: '游戏（3074, 3724, 6112, 27015）',
    common: '常用服务',
    all: '所有端口（1-1024）',
    top100: '热门100个端口',
    custom: '自定义范围'
  },
  actions: {
    scan: '扫描端口',
    stop: '停止扫描',
    clear: '清除结果',
    export: '导出结果'
  },
  results: {
    title: '扫描结果',
    summary: '扫描摘要',
    portStatus: '端口状态',
    port: '端口',
    status: '状态',
    service: '服务',
    protocol: '协议',
    state: {
      open: '开放',
      closed: '关闭',
      filtered: '过滤',
      unknown: '未知'
    },
    details: {
      host: '主机',
      ipAddress: 'IP地址',
      scannedPorts: '扫描的端口',
      openPorts: '开放的端口',
      closedPorts: '关闭的端口',
      filteredPorts: '过滤的端口',
      duration: '持续时间',
      startTime: '开始时间',
      endTime: '结束时间'
    }
  },
  serviceInfo: {
    title: '服务信息',
    description: '描述',
    riskLevel: '风险级别',
    recommendations: '建议',
    riskLevels: {
      low: '低',
      medium: '中',
      high: '高',
      critical: '严重'
    }
  },
  messages: {
    scanStarted: '已开始对{host}的端口扫描',
    scanComplete: '扫描完成',
    scanStopped: '用户已停止扫描',
    scanTime: '扫描在{time}秒内完成',
    invalidHost: '无效的主机名或IP地址',
    invalidPorts: '无效的端口号',
    portRangeError: '结束端口必须大于起始端口',
    maxPortsError: '超出最大端口数量',
    networkError: '网络错误：{message}',
    copied: '结果已复制到剪贴板',
    exported: '结果已成功导出'
  }
} 