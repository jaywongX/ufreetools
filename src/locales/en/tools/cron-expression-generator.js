export default {
  name: 'Cron Expression Generator',
  description: 'Generate and validate cron expressions with human-readable descriptions',
  tabs: {
    simple: 'Simple',
    advanced: 'Advanced',
    expression: 'Expression',
    description: 'Description'
  },
  simple: {
    minutes: 'Minutes',
    hours: 'Hours',
    days: 'Days',
    months: 'Months',
    daysOfWeek: 'Days of Week'
  },
  frequency: {
    everyMinute: 'Every minute',
    everyHour: 'Every hour',
    everyDay: 'Every day at',
    everyWeek: 'Every week on',
    everyMonth: 'Every month on the',
    custom: 'Custom'
  },
  months: {
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December'
  },
  daysOfWeek: {
    sunday: 'Sunday',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday'
  },
  advanced: {
    minutes: 'Minutes (0-59)',
    hours: 'Hours (0-23)',
    daysOfMonth: 'Days of Month (1-31)',
    months: 'Months (1-12)',
    daysOfWeek: 'Days of Week (0-6)',
    years: 'Years (optional)'
  },
  options: {
    syntax: 'Syntax',
    timezone: 'Timezone',
    includeYears: 'Include Years Field',
    includeSeconds: 'Include Seconds Field'
  },
  syntaxTypes: {
    standard: 'Standard (5 fields)',
    quartz: 'Quartz (6 fields)',
    unix: 'Unix crontab'
  },
  actions: {
    generate: 'Generate Expression',
    validate: 'Validate',
    clear: 'Clear',
    copy: 'Copy Expression',
    showNextDates: 'Show Next Execution Dates'
  },
  nextDates: 'Next {count} Execution Dates',
  messages: {
    copied: 'Copied to clipboard!',
    valid: 'Valid cron expression',
    invalid: 'Invalid cron expression: {reason}',
    generated: 'Cron expression generated',
    noDescription: 'No description available for this expression'
  }
} 