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
  howToUse4: 'Copy results or generate links to share with others',
  
  // 添加文章内容
  article: {
    title: "Timezone Converter Tool: Simplify Global Time Management",
    features: {
      title: "Understanding Timezone Conversion",
      description: "The <strong>Timezone Converter</strong> is a comprehensive <strong>time zone management tool</strong> designed to help users navigate the complexities of global time differences. This powerful <strong>global time calculator</strong> enables precise conversion between time zones worldwide, making it essential for international communication, travel planning, and business coordination.<br><br>Our <strong>world clock converter</strong> offers real-time displays of current times across major cities, detailed timezone offset information, and intuitive comparison features. Whether you're scheduling international meetings, planning overseas calls, or coordinating with teams across different countries, this <strong>international time converter</strong> provides the accuracy and flexibility needed to eliminate timezone confusion and ensure perfect timing across geographical boundaries.",
      useCases: {
        title: "Practical Applications for Timezone Management",
        items: [
          "Global business professionals scheduling <strong>international conference calls</strong> between teams in New York, London, and Tokyo, ensuring all participants join at appropriate local times",
          "Remote work managers coordinating <strong>multinational team meetings</strong> across different continents, identifying optimal time windows where working hours overlap",
          "Travel planners calculating arrival times and managing <strong>jet lag expectations</strong> when booking flights that cross multiple time zones",
          "Event organizers promoting <strong>global webinars</strong> or live streams with accurate local start times for participants in different countries",
          "Software developers scheduling <strong>system maintenance windows</strong> that minimize disruption across global user bases in different time zones",
          "Friends and family staying connected across distances by finding convenient times for <strong>international video calls</strong> despite significant time differences"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about Timezone Conversion",
      items: [
        {
          question: "What's the difference between GMT and UTC time standards?",
          answer: "GMT (Greenwich Mean Time) and UTC (Coordinated Universal Time) are often used interchangeably in everyday contexts, but they have a subtle difference. GMT is a time zone used in some countries, originally based on solar time at the Royal Observatory in Greenwich, London. UTC is the modern scientific time standard that serves as the basis for all time zones worldwide. UTC is maintained using highly precise atomic clocks and includes occasional leap seconds to account for irregularities in Earth's rotation. For most practical timezone conversion purposes, GMT and UTC can be considered equivalent, with no offset between them (GMT/UTC+0)."
        },
        {
          question: "How do Daylight Saving Time changes affect timezone conversions?",
          answer: "Daylight Saving Time (DST) adds complexity to timezone conversions because different countries implement it on different dates, and some regions don't observe it at all. When a region enters DST, clocks move forward (typically by one hour), effectively shifting that region's timezone temporarily. Our timezone converter automatically accounts for these changes by tracking DST rules worldwide. This ensures that when you convert times between locations with different DST practices—for example, between Australia (where DST might be active) and Japan (which doesn't observe DST)—the calculator provides accurate results reflecting the current DST status of each location."
        },
        {
          question: "Why do some locations have unusual time offsets like UTC+5:30 or UTC+8:45?",
          answer: "Some locations use non-hourly timezone offsets (like India's UTC+5:30 or Nepal's UTC+5:45) for geographical, historical, or political reasons. These fractional offsets typically represent a compromise between neighboring time zones or an attempt to optimize daylight hours. For example, India's UTC+5:30 offset was chosen to create a standard time that's roughly centered across the country's east-west span. Our timezone converter fully supports these non-standard offsets, ensuring accurate time calculations for all regions including Newfoundland (UTC-3:30), Iran (UTC+3:30), Afghanistan (UTC+4:30), India (UTC+5:30), Nepal (UTC+5:45), and parts of Australia (UTC+8:45)."
        },
        {
          question: "How accurate is this timezone converter for historical dates?",
          answer: "Our timezone converter provides high accuracy for recent and current dates but may have limitations with historical dates beyond the last few decades. This is because timezone rules, DST policies, and even basic timezone definitions have changed over time in many countries. For example, a country might have used a different UTC offset in 1950 than it does today, or it might have implemented or abandoned DST policies. The converter uses modern timezone databases that typically maintain reliable historical data back to around 1970 (the UNIX epoch). For very specific historical timezone research, especially for dates before 1970, specialized historical timezone resources may be needed."
        },
        {
          question: "Can this tool help with scheduling across international date line differences?",
          answer: "Yes, our timezone converter excels at handling international date line complexities. When converting times between locations on opposite sides of the date line (like between Japan and Hawaii), the tool automatically accounts for the date change along with the time difference. This is crucial for avoiding the common confusion where a meeting might occur on Tuesday in one location but Monday in another. The converter clearly displays both the correct time AND date in each location, preventing scheduling mistakes. This feature is particularly valuable for businesses operating across the Pacific Ocean, where the 24-hour time difference is compounded by the day change across the International Date Line."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Converting Time Zones",
      steps: [
        "Start by identifying the <strong>source timezone</strong> - this can be your local timezone (detected automatically) or any specific timezone you select from the dropdown menu",
        "Set the <strong>date and time</strong> you want to convert using the appropriate input fields, or use the 'Now' button to use the current time",
        "Select your <strong>target timezone</strong> from the dropdown menu, choosing from popular options like UTC, GMT, EST, or searching for specific cities",
        "Click the <strong>Convert</strong> button to generate an accurate time conversion that accounts for daylight saving time and timezone offsets",
        "View the <strong>conversion result</strong> which shows the equivalent time in your target timezone, along with detailed timezone information and offset data",
        "For <strong>multiple timezone comparison</strong>, use the 'Add Timezone' feature to create a dashboard of various time zones, allowing you to see the current time across different regions simultaneously",
        "Customize the <strong>display format</strong> with options for 12/24-hour time, showing or hiding seconds, and adjusting date display formats to suit your preferences"
      ]
    },
    conclusion: "The Timezone Converter tool eliminates the headaches and potential miscommunications that often arise when coordinating across different time zones. By providing a straightforward, accurate way to translate times between any world locations, it empowers users to schedule international meetings, plan global events, and maintain connections across borders with confidence. Whether you're a business professional managing multinational teams, a traveler planning an international journey, or simply staying in touch with friends and family abroad, this tool ensures that time differences never lead to missed connections or confusion. With its intuitive interface and comprehensive timezone database, it serves as an essential utility for anyone whose activities extend beyond a single time zone in our increasingly interconnected world."
  }
}; 