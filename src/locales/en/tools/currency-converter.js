export default {
  name: 'Currency Converter',
  description: 'Quickly and accurately convert between different currencies and check exchange rates',
  
  // Main interface text
  amount: 'Amount',
  from: 'From',
  to: 'To',
  convert: 'Convert',
  result: 'Conversion Result',
  swap: 'Swap Currencies',
  rate: 'Current Rate',
  lastUpdated: 'Last Updated',
  addCurrency: 'Add Currency',
  
  // History
  history: 'History',
  clearHistory: 'Clear History',
  noHistory: 'No conversion history',
  
  // Currencies
  currencies: {
    USD: 'US Dollar',
    EUR: 'Euro',
    JPY: 'Japanese Yen',
    GBP: 'British Pound',
    AUD: 'Australian Dollar',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Yuan',
    HKD: 'Hong Kong Dollar',
    NZD: 'New Zealand Dollar',
    SEK: 'Swedish Krona',
    KRW: 'South Korean Won',
    SGD: 'Singapore Dollar',
    NOK: 'Norwegian Krone',
    MXN: 'Mexican Peso',
    INR: 'Indian Rupee',
    RUB: 'Russian Ruble',
    ZAR: 'South African Rand',
    TRY: 'Turkish Lira',
    BRL: 'Brazilian Real',
    TWD: 'Taiwan Dollar',
    DKK: 'Danish Krone',
    PLN: 'Polish Zloty',
    THB: 'Thai Baht',
    IDR: 'Indonesian Rupiah',
    MYR: 'Malaysian Ringgit',
    PHP: 'Philippine Peso'
  },
  
  // Error messages
  errors: {
    invalidAmount: 'Please enter a valid amount',
    apiError: 'Error fetching exchange rate data',
    samecurrencies: 'Please select different currencies for conversion'
  },
  
  // Tips and information
  tips: {
    offline: 'Offline mode: showing the most recently cached exchange rates',
    refreshing: 'Updating exchange rate data...'
  },
  
  // View historical rates
  historicalRates: 'Historical Rates',
  dateRange: 'Date Range',
  from7days: 'Last 7 Days',
  from30days: 'Last 30 Days',
  from90days: 'Last 90 Days',
  customRange: 'Custom Range',
  startDate: 'Start Date',
  endDate: 'End Date',
  viewChart: 'View Chart',
  
  // Settings
  settings: 'Settings',
  decimalPlaces: 'Decimal Places',
  autoUpdate: 'Auto-update Rates',
  defaultCurrency: 'Default Currency',
  
  // Tool introduction
  aboutTitle: 'About Currency Converter',
  aboutDescription: 'Currency Converter is a simple and efficient tool that helps you quickly and accurately convert between different currencies. Whether you\'re planning a trip, engaged in international trade, or researching investments, this tool will meet your needs.',
  
  featuresTitle: 'Key Features',
  feature1: 'Support for over 30 major currencies',
  feature2: 'Real-time access to the latest market exchange rates',
  feature3: 'Quick and intuitive currency conversion calculations',
  feature4: 'Historical exchange rate data and chart visualization',
  feature5: 'Save conversion history for easy reference',
  feature6: 'Customizable display settings and default currency',
  
  howToUseTitle: 'How to Use',
  howToUseStep1: '1. Enter the amount you want to convert',
  howToUseStep2: '2. Select the source currency (convert from)',
  howToUseStep3: '3. Select the target currency (convert to)',
  howToUseStep4: '4. Click the "Convert" button to get the result',
  howToUseStep5: '5. Use the "Swap Currencies" button to quickly switch direction',
  
  tipsTitle: 'Usage Tips',
  tip1: 'Exchange rate data is updated hourly to ensure accurate conversion results',
  tip2: 'Add frequently used currencies to your favorites for quick access',
  tip3: 'Use the historical chart feature to analyze currency trends',
  tip4: 'Conversion results are automatically saved in history for later reference',
  tip5: 'In offline mode, the tool will use the most recently cached rates for calculations'
}; 