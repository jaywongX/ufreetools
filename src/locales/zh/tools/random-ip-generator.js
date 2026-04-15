export default {
    name: '随机IP生成器 - 在线生成IPv4/IPv6地址、公网/私有IP地址',
    description: '免费在线随机IP生成器，支持生成IPv4和IPv6地址、公网IP和私有IP，可按地区筛选，支持批量生成和多种导出格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成IP地址',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // IP版本
    ipVersionTitle: 'IP版本',
    ipv4: 'IPv4',
    ipv6: 'IPv6',
    bothVersions: '混合版本',
    
    // IP类型
    ipTypeTitle: 'IP类型',
    ipTypePublic: '公网IP',
    ipTypePrivate: '私有IP',
    ipTypeAny: '任意类型',
    
    // 地区选择
    regionTitle: 'IP地区',
    allRegions: '全球地区',
    
    // 输出格式
    formatTitle: '输出格式',
    formatPlain: '纯文本',
    formatList: '列表格式',
    
    // 附加选项
    optionsTitle: '附加选项',
    includePort: '包含端口号',
    includeSubnet: '包含子网掩码',
    includeGeo: '包含地理信息',
    
    // 批量生成
    batchTitle: '批量生成',
    quantityLabel: '生成数量',
    quantityPlaceholder: '输入数量（1-1000）',
    
    // 提示信息
    generating: '正在生成...',
    generated: '生成完成',
    copySuccess: '已复制到剪贴板',
    downloadSuccess: '下载成功',
    invalidQuantity: '请输入1-1000之间的数字',
    
    // 结果展示
    resultCount: '共生成 {count} 条记录',
    resultSummary: '生成结果摘要',
    showAll: '显示全部',
    collapse: '收起',
    
    // 导出选项
    exportTitle: '导出格式',
    exportJson: '导出JSON',
    exportCsv: '导出CSV',
    exportTxt: '导出TXT',
    copyBtn: '复制',
    downloadBtn: '下载',
    viewDetails: '查看详情',
    
    // 地区列表
    regions: {
        US: '美国',
        EU: '欧洲',
        AS: '亚洲',
        CN: '中国',
        JP: '日本',
        KR: '韩国',
        AU: '澳大利亚',
        BR: '巴西',
        IN: '印度',
        RU: '俄罗斯'
    },
    
    // CSV列名
    csv: {
        ip: 'IP地址',
        version: '版本',
        port: '端口',
        subnet: '子网掩码',
        country: '国家',
        city: '城市',
        isp: '运营商'
    }
};
