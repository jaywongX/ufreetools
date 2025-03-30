export default {
  name: 'Timezone Converter',
  description: 'Compare and convert times across global timezones, check current time in different countries and regions',
  
  // Main features labels
  currentTime: 'Current Time',
  addTimezone: 'Add Timezone',
  removeTimezone: 'Remove Timezone',
  convertTime: 'Convert Time',
  compareTimezones: 'Compare Timezones',
  
  // Settings and options
  settings: {
    date: 'Date',
    time: 'Time',
    format: 'Format',
    select24Hour: '24-hour format',
    select12Hour: '12-hour format',
    showSeconds: 'Show seconds',
    hideSeconds: 'Hide seconds',
    showDate: 'Show date',
    hideDate: 'Hide date',
  },
  
  // Timezone related
  timezone: {
    title: 'Timezone',
    search: 'Search timezone or city...',
    yourLocal: 'Your local timezone',
    popular: 'Popular timezones',
    allTimezones: 'All timezones',
    utc: 'UTC (Coordinated Universal Time)',
    gmt: 'GMT (Greenwich Mean Time)',
    est: 'EST (Eastern Standard Time)',
    cst: 'CST (China Standard Time)',
    jst: 'JST (Japan Standard Time)',
    ist: 'IST (India Standard Time)',
    cet: 'CET (Central European Time)',
    bst: 'BST (British Summer Time)',
    aest: 'AEST (Australian Eastern Standard Time)',
    nzst: 'NZST (New Zealand Standard Time)',
    custom: 'Custom timezone'
  },
  
  // Regions grouping
  regions: {
    africa: 'Africa',
    america: 'America',
    asia: 'Asia',
    atlantic: 'Atlantic',
    australia: 'Australia',
    europe: 'Europe',
    indian: 'Indian',
    pacific: 'Pacific'
  },
  
  // Conversion related
  conversion: {
    from: 'From',
    to: 'To',
    convert: 'Convert',
    result: 'Conversion Result',
    timeIn: 'Time in'
  },
  
  // UI elements
  ui: {
    now: 'Now',
    refresh: 'Refresh',
    copy: 'Copy',
    copied: 'Copied',
    share: 'Share',
    reset: 'Reset',
    empty: 'No results',
    offset: 'Offset',
    add: 'Add'
  },
  
  // Message prompts
  messages: {
    invalid: 'Invalid time',
    copied: 'Copied to clipboard',
    removed: 'Timezone removed',
    added: 'Timezone added',
    maxTimezones: 'You can add up to 10 timezones',
    selectTimezone: 'Please select a timezone'
  },
  
  // Tool introduction
  aboutTitle: 'About Timezone Converter',
  aboutDescription: 'The Timezone Converter is a convenient tool that helps you easily view and compare times across different regions of the world, making it useful for international communication, travel planning, global meeting scheduling, and more.',
  
  featuresTitle: 'Key Features',
  feature1: 'Real-time display of current times in major cities and timezones worldwide',
  feature2: 'Quick comparison of time differences between multiple timezones',
  feature3: 'Convert any time from one timezone to another',
  feature4: 'Support for both 24-hour and 12-hour time formats',
  feature5: 'At-a-glance view of working hours overlap',
  feature6: 'Search for cities or countries to find corresponding timezones',
  
  useCasesTitle: 'Use Cases',
  useCase1: 'Schedule international business meetings or conference calls',
  useCase2: 'Plan international travel and flight times',
  useCase3: 'Stay in touch with friends or family overseas',
  useCase4: 'Track local times for important international events',
  useCase5: 'Coordinate time scheduling for remote working teams',
  
  howToUseTitle: 'How to Use',
  howToUse1: 'Add multiple timezones to view current times in different regions simultaneously',
  howToUse2: 'Use the conversion feature to translate specific times from one timezone to another',
  howToUse3: 'Adjust date and time formats to suit your preferences',
  howToUse4: 'Copy results or generate links to share with others'
}; 