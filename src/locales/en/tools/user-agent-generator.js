export default {
  name: 'User Agent Generator',
  description: 'Generate User-Agent strings for various browsers and devices for website testing, web scraping, and development',

  filters: {
    title: 'Filter Options',
    browser: 'Browser',
    os: 'Operating System',
    deviceType: 'Device Type'
  },

  browsers: {
    all: 'All Browsers',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: 'Unknown Browser'
  },

  operatingSystems: {
    all: 'All Operating Systems',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: 'Unknown OS'
  },

  deviceTypes: {
    all: 'All Devices',
    desktop: 'Desktop',
    mobile: 'Mobile',
    tablet: 'Tablet',
    unknown: 'Unknown Device'
  },

  generation: {
    quantity: 'Quantity',
    generateRandom: 'Generate Random User-Agents',
    clearResults: 'Clear Results'
  },

  results: {
    title: 'Results',
    copyAll: 'Copy All',
    empty: 'Click "Generate Random User-Agents" button to generate results'
  },

  messages: {
    copied: 'Copied to clipboard',
    allCopied: 'All User-Agents copied to clipboard',
    copyFailed: 'Copy failed, please try manually'
  },

  info: {
    formatTitle: 'User-Agent Format Guide',
    formatDescription: 'User-Agent strings typically contain browser name, version, operating system, and device information, formatted as:',
    formatExample: 'Mozilla/5.0 (Platform Information) Engine Information Browser Information',
    examplesTitle: 'Common User-Agent Examples:',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: 'Use Cases:',
    useCases: [
      'Website compatibility testing',
      'Web scraping and data collection',
      'API development and testing',
      'Bypassing browser detection',
      'Simulating different device access'
    ]
  }
}; 