export default {
  name: 'DNS Lookup Tool',
  description: 'Query DNS records and check domain information',
  input: {
    title: 'Domain Information',
    domain: 'Domain Name',
    domainPlaceholder: 'Enter a domain (e.g., example.com)',
    recordType: 'Record Type',
    recordTypes: {
      all: 'All Records',
      a: 'A (IPv4 Address)',
      aaaa: 'AAAA (IPv6 Address)',
      cname: 'CNAME (Canonical Name)',
      mx: 'MX (Mail Exchange)',
      ns: 'NS (Name Server)',
      txt: 'TXT (Text)',
      soa: 'SOA (Start of Authority)',
      srv: 'SRV (Service)',
      caa: 'CAA (Certification Authority Authorization)'
    },
    nameserver: 'Nameserver (Optional)',
    nameserverPlaceholder: 'Custom nameserver (e.g., 8.8.8.8)',
    advanced: 'Advanced Options',
    timeout: 'Timeout (seconds)',
    enableDNSSEC: 'Enable DNSSEC validation',
    recursion: 'Enable Recursion'
  },
  actions: {
    lookup: 'Lookup DNS',
    clear: 'Clear Results',
    copyResults: 'Copy Results',
    exportCSV: 'Export as CSV',
    exportJSON: 'Export as JSON'
  },
  results: {
    title: 'DNS Records',
    summary: 'DNS Summary for {domain}',
    noRecords: 'No DNS records found',
    error: 'Error: {message}',
    hostname: 'Hostname',
    type: 'Type',
    class: 'Class',
    ttl: 'TTL',
    value: 'Value',
    priority: 'Priority',
    weight: 'Weight',
    port: 'Port',
    target: 'Target'
  },
  recordInfo: {
    title: 'Record Information',
    a: 'A records map a domain to an IPv4 address.',
    aaaa: 'AAAA records map a domain to an IPv6 address.',
    cname: 'CNAME records create an alias from one domain to another.',
    mx: 'MX records specify mail servers responsible for receiving email.',
    ns: 'NS records identify the DNS servers responsible for a domain.',
    txt: 'TXT records store text data, often used for verification.',
    soa: 'SOA records contain administrative information about the zone.',
    srv: 'SRV records specify servers for specific services.',
    caa: 'CAA records specify which certificate authorities can issue certificates.'
  },
  propagation: {
    title: 'Propagation Check',
    checking: 'Checking propagation status...',
    status: 'Propagation Status',
    complete: 'Fully Propagated',
    partial: 'Partially Propagated',
    notPropagated: 'Not Propagated',
    checkAgain: 'Check Again'
  },
  messages: {
    lookingUp: 'Looking up DNS records for {domain}...',
    copied: 'Results copied to clipboard',
    exported: 'Results exported successfully',
    timeout: 'Request timed out',
    networkError: 'Network error: {message}',
    invalidDomain: 'Invalid domain name'
  }
} 