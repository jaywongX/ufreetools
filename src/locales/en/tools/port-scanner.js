export default {
  name: 'Port Scanner',
  description: 'Scan network ports to check their status and availability',
  input: {
    title: 'Port Scanner',
    host: 'Host',
    hostPlaceholder: 'Enter a hostname or IP address',
    portRange: 'Port Range',
    startPort: 'Start Port',
    endPort: 'End Port',
    commonPorts: 'Common Ports',
    customPorts: 'Custom Ports',
    portsPlaceholder: 'Enter ports separated by commas (e.g., 80,443,3306)',
    options: 'Scan Options',
    timeout: 'Timeout (ms)',
    concurrent: 'Concurrent Scans',
    method: 'Scan Method',
    scanMethods: {
      tcp: 'TCP Connect',
      syn: 'SYN Scan',
      udp: 'UDP Scan'
    },
    serviceLookup: 'Detect Services',
    showClosed: 'Show Closed Ports'
  },
  portSets: {
    web: 'Web (80, 443, 8080, 8443)',
    mail: 'Mail (25, 465, 587, 110, 143, 993)',
    ftp: 'FTP (20, 21)',
    ssh: 'SSH (22)',
    database: 'Database (3306, 5432, 1433, 1521, 27017)',
    gaming: 'Gaming (3074, 3724, 6112, 27015)',
    common: 'Common Services',
    all: 'All Ports (1-1024)',
    top100: 'Top 100 Ports',
    custom: 'Custom Range'
  },
  actions: {
    scan: 'Scan Ports',
    stop: 'Stop Scan',
    clear: 'Clear Results',
    export: 'Export Results'
  },
  results: {
    title: 'Scan Results',
    summary: 'Scan Summary',
    portStatus: 'Port Status',
    port: 'Port',
    status: 'Status',
    service: 'Service',
    protocol: 'Protocol',
    state: {
      open: 'Open',
      closed: 'Closed',
      filtered: 'Filtered',
      unknown: 'Unknown'
    },
    details: {
      host: 'Host',
      ipAddress: 'IP Address',
      scannedPorts: 'Scanned Ports',
      openPorts: 'Open Ports',
      closedPorts: 'Closed Ports',
      filteredPorts: 'Filtered Ports',
      duration: 'Duration',
      startTime: 'Start Time',
      endTime: 'End Time'
    }
  },
  serviceInfo: {
    title: 'Service Information',
    description: 'Description',
    riskLevel: 'Risk Level',
    recommendations: 'Recommendations',
    riskLevels: {
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      critical: 'Critical'
    }
  },
  messages: {
    scanStarted: 'Port scan started for {host}',
    scanComplete: 'Scan completed',
    scanStopped: 'Scan stopped by user',
    scanTime: 'Scan completed in {time} seconds',
    invalidHost: 'Invalid hostname or IP address',
    invalidPorts: 'Invalid port numbers',
    portRangeError: 'End port must be greater than start port',
    maxPortsError: 'Maximum number of ports exceeded',
    networkError: 'Network error: {message}',
    copied: 'Results copied to clipboard',
    exported: 'Results exported successfully'
  }
} 