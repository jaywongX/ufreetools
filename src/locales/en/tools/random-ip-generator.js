export default {
    name: 'Random IP Generator - Generate IPv4/IPv6 Addresses Online',
    description: 'Free online random IP generator supporting IPv4 and IPv6 addresses, public and private IPs, region-based filtering, batch generation, and multiple export formats. Runs entirely in the frontend for privacy.',
    inputTitle: 'Generation Configuration',
    outputTitle: 'Generation Results',
    generateBtn: 'Generate IP Addresses',
    loadSampleBtn: 'Load Sample & Generate',
    clearAll: 'Clear All',
    noOutput: 'No results generated yet',
    preview: 'Preview Data',
    
    ipVersionTitle: 'IP Version',
    ipv4: 'IPv4',
    ipv6: 'IPv6',
    bothVersions: 'Both Versions',
    
    ipTypeTitle: 'IP Type',
    ipTypePublic: 'Public IP',
    ipTypePrivate: 'Private IP',
    ipTypeAny: 'Any Type',
    
    regionTitle: 'IP Region',
    allRegions: 'All Regions',
    
    formatTitle: 'Output Format',
    formatPlain: 'Plain Text',
    formatList: 'List Format',
    
    optionsTitle: 'Additional Options',
    includePort: 'Include Port Number',
    includeSubnet: 'Include Subnet Mask',
    includeGeo: 'Include Geographic Info',
    
    batchTitle: 'Batch Generation',
    quantityLabel: 'Quantity',
    quantityPlaceholder: 'Enter quantity (1-1000)',
    
    generating: 'Generating...',
    generated: 'Generation Complete',
    copySuccess: 'Copied to clipboard',
    downloadSuccess: 'Download successful',
    invalidQuantity: 'Please enter a number between 1-1000',
    
    resultCount: 'Generated {count} records',
    resultSummary: 'Results Summary',
    showAll: 'Show All',
    collapse: 'Collapse',
    
    exportTitle: 'Export Format',
    exportJson: 'Export JSON',
    exportCsv: 'Export CSV',
    exportTxt: 'Export TXT',
    copyBtn: 'Copy',
    downloadBtn: 'Download',
    viewDetails: 'View Details',
    
    regions: {
        US: 'United States',
        EU: 'Europe',
        AS: 'Asia',
        CN: 'China',
        JP: 'Japan',
        KR: 'South Korea',
        AU: 'Australia',
        BR: 'Brazil',
        IN: 'India',
        RU: 'Russia'
    },
    
    csv: {
        ip: 'IP Address',
        version: 'Version',
        port: 'Port',
        subnet: 'Subnet Mask',
        country: 'Country',
        city: 'City',
        isp: 'ISP'
    }
};
