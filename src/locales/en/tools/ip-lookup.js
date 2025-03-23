export default {
  name: 'IP Lookup Tool',
  description: 'Get detailed information about an IP address including location and network details',
  input: {
    title: 'IP Address Lookup',
    ipAddress: 'IP Address',
    ipPlaceholder: 'Enter an IP address (e.g., 8.8.8.8)',
    hostname: 'Hostname',
    hostnamePlaceholder: 'Or enter a hostname (e.g., google.com)',
    options: 'Lookup Options',
    includeGeolocation: 'Include Geolocation',
    includeASN: 'Include ASN Information',
    includeDomains: 'Include Associated Domains',
    includeAbuse: 'Include Abuse Contact',
    myIP: 'Use My IP Address'
  },
  actions: {
    lookup: 'Lookup IP',
    clear: 'Clear Results',
    copyIP: 'Copy IP',
    copyAll: 'Copy All Information',
    export: 'Export Results'
  },
  results: {
    title: 'IP Information',
    noResults: 'No information to display',
    error: 'Error: {message}',
    unknown: 'Unknown',
    general: {
      title: 'General Information',
      ipAddress: 'IP Address',
      hostname: 'Hostname',
      type: 'Type',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: 'Public IP',
      yes: 'Yes',
      no: 'No',
      reverse: 'Reverse DNS'
    },
    location: {
      title: 'Location',
      country: 'Country',
      region: 'Region',
      city: 'City',
      postalCode: 'Postal Code',
      timezone: 'Timezone',
      coordinates: 'Coordinates',
      latitude: 'Latitude',
      longitude: 'Longitude'
    },
    network: {
      title: 'Network',
      asn: 'ASN',
      organization: 'Organization',
      isp: 'ISP',
      usage: 'Usage Type',
      domain: 'Domain',
      route: 'Route',
      subnet: 'Subnet',
      netmask: 'Netmask',
      cidr: 'CIDR Notation'
    },
    security: {
      title: 'Security Information',
      threat: 'Threat Detection',
      isTor: 'Tor Exit Node',
      isProxy: 'Proxy',
      isVpn: 'VPN',
      isAttacker: 'Known Attacker',
      isAbuser: 'Known Abuser',
      threatLevel: 'Threat Level',
      confidenceScore: 'Confidence Score',
      abuseReports: 'Abuse Reports',
      lastReported: 'Last Reported'
    },
    additional: {
      title: 'Additional Information',
      mobile: 'Mobile Network',
      hosting: 'Hosting Provider',
      associated: 'Associated Domains',
      abuseContact: 'Abuse Contact'
    },
    queryTime: 'Query Time',
    dataSource: 'Data Source'
  },
  map: {
    title: 'Location Map',
    noLocation: 'No location data available',
    viewLarger: 'View Larger Map'
  },
  messages: {
    lookingUp: 'Looking up information for {query}...',
    copied: 'Copied to clipboard',
    exported: 'Results exported successfully',
    invalidIP: 'Invalid IP address',
    invalidHostname: 'Invalid hostname',
    publicIPOnly: 'This tool only works with public IP addresses',
    rateLimited: 'Rate limit exceeded. Please try again later.',
    historyCleared: 'History cleared'
  },
  history: {
    title: 'Search History',
    clear: 'Clear History'
  }
} 