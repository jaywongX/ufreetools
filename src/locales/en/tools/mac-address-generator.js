export default {
    name: 'MAC Address Generator - Generate Random MAC Addresses Online',
    description: 'Free online MAC address generator supporting random MAC address generation, vendor OUI prefix selection, and multiple output formats. Perfect for network testing, software development, and IoT device simulation. Runs entirely in browser for privacy.',
    inputTitle: 'Generation Settings',
    outputTitle: 'Generated Results',
    generateBtn: 'Generate Address',
    loadSampleBtn: 'Load Sample & Generate',
    clearAll: 'Clear All',
    noOutput: 'No results generated yet',
    preview: 'Preview Data',

    // MAC Address Format
    formatTitle: 'MAC Address Format',
    formatColon: 'Colon Separated (XX:XX:XX:XX:XX:XX)',
    formatHyphen: 'Hyphen Separated (XX-XX-XX-XX-XX-XX)',
    formatDot: 'Dot Separated (XXXX.XXXX.XXXX)',
    formatNone: 'No Separator (XXXXXXXXXXXX)',

    // Case
    caseTitle: 'Letter Case',
    caseUpper: 'Uppercase',
    caseLower: 'Lowercase',

    // MAC Address Type
    typeTitle: 'MAC Address Type',
    typeUnicast: 'Unicast Address',
    typeMulticast: 'Multicast Address',
    typeGlobal: 'Globally Unique (UAA)',
    typeLocal: 'Locally Administered (LAA)',

    // Vendor Prefix
    vendorTitle: 'Vendor OUI Prefix',
    selectVendor: 'Select Vendor',
    allVendors: 'Random Vendor',
    customPrefix: 'Custom Prefix',
    customPrefixPlaceholder: 'Enter 3-byte OUI (e.g., 00:1A:2B)',
    vendorHint: 'When selecting a specific vendor, generated MAC addresses will use that vendor\'s OUI prefix',

    // Generation Options
    generateOptionsTitle: 'Generation Options',
    includeVendorName: 'Include Vendor Name',
    includeAddressType: 'Include Address Type Info',
    includeTimestamp: 'Include Timestamp',

    // Batch Generation
    batchTitle: 'Batch Generation',
    quantityLabel: 'Quantity',
    quantityPlaceholder: 'Enter quantity (1-1000)',

    // Messages
    generating: 'Generating...',
    generated: 'Generation Complete',
    copySuccess: 'Copied to clipboard',
    downloadSuccess: 'Download successful',
    invalidQuantity: 'Please enter a number between 1-1000',
    invalidPrefix: 'Invalid OUI prefix format. Use XX:XX:XX or XX-XX-XX format',

    // Results Display
    resultCount: 'Generated {count} MAC addresses',
    resultSummary: 'Results Summary',
    showAll: 'Show All',
    collapse: 'Collapse',

    // Record Display
    recordLabel: 'Record #{num}',
    macAddressLabel: 'MAC Address',
    vendorLabel: 'Vendor',
    typeLabel: 'Type',
    formatLabel: 'Format',
    timestampLabel: 'Timestamp',

    // Address Type Descriptions
    unicastDesc: 'Unicast address for point-to-point communication',
    multicastDesc: 'Multicast address for group communication',
    globalDesc: 'Globally unique address assigned by IEEE',
    localDesc: 'Locally administered address assigned by user',

    // Export Options
    exportTitle: 'Export Format',
    exportJson: 'Export JSON',
    exportCsv: 'Export CSV',
    downloadBtn: 'Download',
    copyBtn: 'Copy',
    copyAllBtn: 'Copy All',
    viewDetails: 'View Details',

    // Vendor List
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

    // CSV Headers
    csv: {
        macAddress: 'MAC Address',
        vendor: 'Vendor',
        type: 'Type',
        format: 'Format',
        timestamp: 'Timestamp'
    }
};
