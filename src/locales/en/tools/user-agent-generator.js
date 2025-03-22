export default {
  name: 'User Agent Generator',
  description: 'Generate and customize user agent strings for testing and development',
  options: {
    deviceType: 'Device Type',
    platform: 'Platform',
    browser: 'Browser',
    browserVersion: 'Browser Version',
    osVersion: 'OS Version',
    architecture: 'Architecture',
    engine: 'Browser Engine',
    customization: 'Customization Options'
  },
  deviceTypes: {
    desktop: 'Desktop',
    mobile: 'Mobile',
    tablet: 'Tablet',
    tv: 'Smart TV',
    console: 'Game Console',
    bot: 'Bot/Crawler'
  },
  platforms: {
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    chromeos: 'Chrome OS'
  },
  browsers: {
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    edge: 'Edge',
    opera: 'Opera',
    ie: 'Internet Explorer'
  },
  architectures: {
    x86: 'x86',
    x64: 'x64',
    arm: 'ARM',
    arm64: 'ARM64'
  },
  engines: {
    webkit: 'WebKit',
    gecko: 'Gecko',
    blink: 'Blink',
    trident: 'Trident',
    presto: 'Presto'
  },
  actions: {
    generate: 'Generate User Agent',
    copy: 'Copy User Agent',
    randomize: 'Random User Agent',
    clear: 'Clear',
    addToList: 'Add to List',
    saveAs: 'Save As...'
  },
  output: {
    result: 'Generated User Agent',
    preview: 'Browser Preview',
    saved: 'Saved User Agents',
    copySuccess: 'User agent copied to clipboard'
  },
  customPresets: {
    title: 'Custom Presets',
    save: 'Save Current',
    delete: 'Delete',
    load: 'Load Preset',
    noPresets: 'No saved presets'
  },
  predefined: {
    title: 'Common User Agents',
    latestBrowsers: 'Latest Browsers',
    mobileDevices: 'Mobile Devices',
    searchEngineBots: 'Search Engine Bots',
    oldBrowsers: 'Old Browsers'
  },
  messages: {
    presetSaved: 'Preset saved successfully',
    presetDeleted: 'Preset deleted',
    invalidUserAgent: 'Invalid user agent format'
  }
} 