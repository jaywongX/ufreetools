export default {
  name: 'Network Ping Tool',
  description: 'Test network connectivity and measure response time to servers',
  input: {
    title: 'Ping Settings',
    host: 'Host',
    hostPlaceholder: 'Enter a hostname or IP address',
    count: 'Ping Count',
    interval: 'Interval (seconds)',
    timeout: 'Timeout (seconds)',
    packetSize: 'Packet Size (bytes)',
    ttl: 'TTL',
    dontFragment: "Don't Fragment",
    ipv6: 'Use IPv6',
    options: 'Options',
    continuous: 'Continuous Ping',
    traceroute: 'Include Traceroute'
  },
  actions: {
    ping: 'Start Ping',
    stop: 'Stop',
    clear: 'Clear Results',
    exportResults: 'Export Results'
  },
  results: {
    title: 'Ping Results',
    summary: 'Summary',
    statistics: 'Statistics',
    hostname: 'Hostname',
    ipAddress: 'IP Address',
    packets: {
      sent: 'Packets Sent',
      received: 'Packets Received',
      lost: 'Packets Lost',
      lossRate: 'Packet Loss'
    },
    time: {
      min: 'Minimum',
      avg: 'Average',
      max: 'Maximum',
      stdDev: 'Standard Deviation'
    },
    sequence: 'Sequence',
    bytes: 'Bytes',
    time: 'Time',
    ttl: 'TTL',
    status: 'Status',
    timeUnit: 'ms',
    replyFrom: 'Reply from {host}',
    requestTimeout: 'Request timed out',
    destinationUnreachable: 'Destination host unreachable',
    unknownError: 'Unknown error'
  },
  traceroute: {
    title: 'Traceroute',
    hop: 'Hop',
    host: 'Host',
    ip: 'IP',
    time: 'Time (ms)',
    country: 'Country',
    asn: 'AS'
  },
  visualizations: {
    title: 'Visualizations',
    responseTime: 'Response Time',
    packetLoss: 'Packet Loss',
    graph: {
      time: 'Time (s)',
      responseTime: 'Response Time (ms)',
      min: 'Min',
      avg: 'Avg',
      max: 'Max'
    }
  },
  messages: {
    starting: 'Starting ping to {host}...',
    stopped: 'Ping stopped',
    completed: 'Ping completed',
    invalidHost: 'Invalid hostname or IP address',
    networkError: 'Network error: {message}',
    copied: 'Results copied to clipboard',
    exported: 'Results exported successfully'
  }
} 