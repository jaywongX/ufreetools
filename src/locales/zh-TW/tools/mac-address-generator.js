export default {
    name: 'MAC位址產生器 - 線上產生隨機MAC位址與網路設備識別碼',
    description: '免費線上MAC位址產生器，支援產生隨機MAC位址、指定廠商OUI前綴、多種格式輸出。適用於網路測試、軟體開發、物聯網設備模擬等場景，純前端執行保護隱私。',
    inputTitle: '產生設定',
    outputTitle: '產生結果',
    generateBtn: '產生位址',
    loadSampleBtn: '載入範例並產生',
    clearAll: '清除全部',
    noOutput: '暫無產生結果',
    preview: '預覽資料',

    // MAC位址格式
    formatTitle: 'MAC位址格式',
    formatColon: '冒號分隔 (XX:XX:XX:XX:XX:XX)',
    formatHyphen: '連字號分隔 (XX-XX-XX-XX-XX-XX)',
    formatDot: '點分隔 (XXXX.XXXX.XXXX)',
    formatNone: '無分隔符 (XXXXXXXXXXXX)',

    // 大小寫
    caseTitle: '字母大小寫',
    caseUpper: '大寫字母',
    caseLower: '小寫字母',

    // MAC位址類型
    typeTitle: 'MAC位址類型',
    typeUnicast: '單播位址 (Unicast)',
    typeMulticast: '多播位址 (Multicast)',
    typeGlobal: '全域唯一 (UAA)',
    typeLocal: '本地管理 (LAA)',

    // 廠商前綴
    vendorTitle: '廠商OUI前綴',
    selectVendor: '選擇廠商',
    allVendors: '隨機廠商',
    customPrefix: '自訂前綴',
    customPrefixPlaceholder: '輸入3位元組OUI (如: 00:1A:2B)',
    vendorHint: '選擇特定廠商後，產生的MAC位址將使用該廠商的OUI前綴',

    // 產生選項
    generateOptionsTitle: '產生選項',
    includeVendorName: '包含廠商名稱',
    includeAddressType: '包含位址類型資訊',
    includeTimestamp: '包含產生時間戳',

    // 批量產生
    batchTitle: '批量產生',
    quantityLabel: '產生數量',
    quantityPlaceholder: '輸入數量（1-1000）',

    // 提示訊息
    generating: '正在產生...',
    generated: '產生完成',
    copySuccess: '已複製到剪貼簿',
    downloadSuccess: '下載成功',
    invalidQuantity: '請輸入1-1000之間的數字',
    invalidPrefix: 'OUI前綴格式無效，請使用XX:XX:XX或XX-XX-XX格式',

    // 結果展示
    resultCount: '共產生 {count} 條MAC位址',
    resultSummary: '產生結果摘要',
    showAll: '顯示全部',
    collapse: '收起',

    // 記錄顯示
    recordLabel: '記錄 #{num}',
    macAddressLabel: 'MAC位址',
    vendorLabel: '廠商',
    typeLabel: '類型',
    formatLabel: '格式',
    timestampLabel: '時間戳',

    // 位址類型描述
    unicastDesc: '單播位址，用於點對點通訊',
    multicastDesc: '多播位址，用於群播通訊',
    globalDesc: '全域唯一位址，由IEEE分配',
    localDesc: '本地管理位址，由使用者自行分配',

    // 匯出選項
    exportTitle: '匯出格式',
    exportJson: '匯出JSON',
    exportCsv: '匯出CSV',
    downloadBtn: '下載',
    copyBtn: '複製',
    copyAllBtn: '複製全部',
    viewDetails: '檢視詳情',

    // 廠商列表
    vendors: {
        apple: 'Apple Inc.',
        cisco: 'Cisco Systems',
        intel: 'Intel Corporate',
        samsung: 'Samsung Electronics',
        huawei: '華為技術',
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
        xiaomi: '小米通訊',
        oppo: 'OPPO Guangdong Mobile',
        vivo: 'vivo Mobile Communication',
        sony: 'Sony Corporation',
        nintendo: '任天堂株式會社',
        lg: 'LG Electronics',
        nokia: 'Nokia Corporation',
        ericsson: 'Ericsson AB',
        qualcomm: 'Qualcomm Atheros',
        broadcom: 'Broadcom Inc.',
        realtek: '瑞昱半導體',
        nvidia: 'NVIDIA Corporation',
        vmware: 'VMware Inc.',
        raspberry: 'Raspberry Pi Foundation'
    },

    // CSV列名
    csv: {
        macAddress: 'MAC位址',
        vendor: '廠商',
        type: '類型',
        format: '格式',
        timestamp: '時間戳'
    }
};
