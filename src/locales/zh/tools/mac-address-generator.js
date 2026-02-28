export default {
    name: 'MAC地址生成器 - 在线生成随机MAC地址与网络设备标识',
    description: '免费在线MAC地址生成器，支持生成随机MAC地址、指定厂商OUI前缀、多种格式输出。适用于网络测试、软件开发、物联网设备模拟等场景，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成地址',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',

    // MAC地址格式
    formatTitle: 'MAC地址格式',
    formatColon: '冒号分隔 (XX:XX:XX:XX:XX:XX)',
    formatHyphen: '连字符分隔 (XX-XX-XX-XX-XX-XX)',
    formatDot: '点分隔 (XXXX.XXXX.XXXX)',
    formatNone: '无分隔符 (XXXXXXXXXXXX)',

    // 大小写
    caseTitle: '字母大小写',
    caseUpper: '大写字母',
    caseLower: '小写字母',

    // MAC地址类型
    typeTitle: 'MAC地址类型',
    typeUnicast: '单播地址 (Unicast)',
    typeMulticast: '多播地址 (Multicast)',
    typeGlobal: '全局唯一 (UAA)',
    typeLocal: '本地管理 (LAA)',

    // 厂商前缀
    vendorTitle: '厂商OUI前缀',
    selectVendor: '选择厂商',
    allVendors: '随机厂商',
    customPrefix: '自定义前缀',
    customPrefixPlaceholder: '输入3字节OUI (如: 00:1A:2B)',
    vendorHint: '选择特定厂商后，生成的MAC地址将使用该厂商的OUI前缀',

    // 生成选项
    generateOptionsTitle: '生成选项',
    includeVendorName: '包含厂商名称',
    includeAddressType: '包含地址类型信息',
    includeTimestamp: '包含生成时间戳',

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
    invalidPrefix: 'OUI前缀格式无效，请使用XX:XX:XX或XX-XX-XX格式',

    // 结果展示
    resultCount: '共生成 {count} 条MAC地址',
    resultSummary: '生成结果摘要',
    showAll: '显示全部',
    collapse: '收起',

    // 记录显示
    recordLabel: '记录 #{num}',
    macAddressLabel: 'MAC地址',
    vendorLabel: '厂商',
    typeLabel: '类型',
    formatLabel: '格式',
    timestampLabel: '时间戳',

    // 地址类型描述
    unicastDesc: '单播地址，用于点对点通信',
    multicastDesc: '多播地址，用于组播通信',
    globalDesc: '全局唯一地址，由IEEE分配',
    localDesc: '本地管理地址，由用户自行分配',

    // 导出选项
    exportTitle: '导出格式',
    exportJson: '导出JSON',
    exportCsv: '导出CSV',
    downloadBtn: '下载',
    copyBtn: '复制',
    copyAllBtn: '复制全部',
    viewDetails: '查看详情',

    // 厂商列表
    vendors: {
        apple: 'Apple Inc.',
        cisco: 'Cisco Systems',
        intel: 'Intel Corporate',
        samsung: 'Samsung Electronics',
        huawei: 'Huawei Technologies',
        dell: 'Dell Inc.',
        hp: 'HP Inc.',
        lenovo: 'Lenovo Mobile',
        microsoft: 'Microsoft Corporation',
        google: 'Google Inc.',
        amazon: 'Amazon Technologies',
        facebook: 'Facebook Inc.',
        netgear: 'NETGEAR',
        tpLink: 'TP-Link Technologies',
        dLink: 'D-Link Corporation',
        asus: 'ASUSTek Computer',
        xiaomi: 'Xiaomi Communications',
        oppo: 'OPPO Guangdong Mobile',
        vivo: 'vivo Mobile Communication',
        sony: 'Sony Corporation',
        nintendo: 'Nintendo Co., Ltd.',
        lg: 'LG Electronics',
        nokia: 'Nokia Corporation',
        ericsson: 'Ericsson AB',
        qualcomm: 'Qualcomm Atheros',
        broadcom: 'Broadcom Inc.',
        realtek: 'Realtek Semiconductor',
        nvidia: 'NVIDIA Corporation',
        vmware: 'VMware Inc.',
        raspberry: 'Raspberry Pi Foundation'
    },

    // CSV列名
    csv: {
        macAddress: 'MAC地址',
        vendor: '厂商',
        type: '类型',
        format: '格式',
        timestamp: '时间戳'
    }
};
