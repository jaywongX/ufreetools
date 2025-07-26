export default {
  name: 'User Agent Parser',
  description: 'Parse and analyze browser user agent strings to identify browser, operating system, and device information',

  input: {
    label: 'User Agent String',
    placeholder: 'Enter or paste user agent string...'
  },

  actions: {
    parse: 'Parse',
    detect: 'Detect Current Browser',
    clear: 'Clear'
  },

  results: {
    title: 'Parsing Results',
    summary: 'Summary',
    details: 'Details',
    originalUA: 'Original User Agent String'
  },

  sections: {
    browser: 'Browser',
    os: 'Operating System',
    device: 'Device',
    other: 'Other Information'
  },

  deviceTypes: {
    mobile: 'Mobile Device',
    tablet: 'Tablet',
    desktop: 'Desktop'
  },

  fields: {
    name: 'Name',
    version: 'Version',
    engine: 'Engine',
    platform: 'Platform',
    type: 'Type',
    vendor: 'Vendor',
    model: 'Model',
    isMobile: 'Mobile Device',
    isTablet: 'Tablet',
    isDesktop: 'Desktop Device'
  },

  messages: {
    parsingError: 'Error parsing user agent string',
    emptyInput: 'Please enter a user agent string',
    unknown: 'Unknown',
    yes: 'Yes',
    no: 'No'
  },

  tips: {
    description: 'User Agent is an identification string that browsers send to servers, containing information about the browser, operating system, and device.',
    useCases: 'Commonly used for website analytics, browser compatibility handling, and device adaptation.'
  }
}; 