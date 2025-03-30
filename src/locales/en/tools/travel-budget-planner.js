export default {
  name: 'Travel Budget Planner',
  description: 'Plan and calculate your travel budget to manage expenses easily',
  
  // Main interface elements
  planYourTrip: 'Plan Your Trip',
  destination: 'Destination',
  startDate: 'Start Date',
  endDate: 'End Date',
  travelers: 'Number of Travelers',
  currency: 'Display Currency',
  tripDuration: 'Trip Duration',
  totalBudget: 'Total Budget',
  perPersonBudget: 'Budget Per Person',
  perDayBudget: 'Budget Per Day',
  
  // Buttons and actions
  calculate: 'Calculate Budget',
  reset: 'Reset',
  addExpense: 'Add Expense Item',
  removeExpense: 'Remove',
  saveAsPDF: 'Save as PDF',
  
  // Category titles
  categories: {
    transport: 'Transportation',
    accommodation: 'Accommodation',
    food: 'Food & Drinks',
    activities: 'Activities & Attractions',
    shopping: 'Shopping',
    misc: 'Miscellaneous',
    emergency: 'Emergency Fund'
  },
  
  // Transportation options
  transport: {
    title: 'Transportation Expenses',
    flight: 'Flights',
    train: 'Trains',
    bus: 'Buses',
    car: 'Car Rental/Fuel',
    taxi: 'Taxis/Ride-sharing',
    publicTransport: 'Public Transport',
    other: 'Other Transport'
  },
  
  // Accommodation options
  accommodation: {
    title: 'Accommodation Expenses',
    hotel: 'Hotels',
    hostel: 'Hostels',
    apartment: 'Apartments/Airbnb',
    camping: 'Camping',
    other: 'Other Accommodation'
  },
  
  // Food options
  food: {
    title: 'Food & Drink Expenses',
    restaurants: 'Restaurants',
    streetFood: 'Street Food',
    groceries: 'Groceries',
    drinks: 'Drinks/Alcohol',
    other: 'Other Food'
  },
  
  // Activities options
  activities: {
    title: 'Activities & Attractions',
    attractions: 'Attraction Tickets',
    tours: 'Tours/Guided Activities',
    entertainment: 'Entertainment',
    other: 'Other Activities'
  },
  
  // Miscellaneous expenses
  misc: {
    title: 'Miscellaneous Expenses',
    insurance: 'Travel Insurance',
    visa: 'Visa Fees',
    souvenirs: 'Souvenirs',
    internet: 'Internet/Data',
    tips: 'Tips & Gratuities',
    other: 'Other Expenses'
  },
  
  // Table headers
  table: {
    category: 'Category',
    description: 'Description',
    amount: 'Amount',
    actions: 'Actions'
  },
  
  // Statistics and analysis
  analysis: {
    title: 'Budget Analysis',
    summary: 'Budget Summary',
    breakdown: 'Expense Breakdown',
    distribution: 'Budget Distribution',
    dailyAverage: 'Daily Average',
    suggestions: 'Budget Suggestions'
  },
  
  // Currencies
  currencies: {
    CNY: 'Chinese Yuan (¥)',
    USD: 'US Dollar ($)',
    EUR: 'Euro (€)',
    JPY: 'Japanese Yen (¥)',
    GBP: 'British Pound (£)',
    KRW: 'Korean Won (₩)',
    AUD: 'Australian Dollar ($)',
    CAD: 'Canadian Dollar ($)',
    THB: 'Thai Baht (฿)',
    SGD: 'Singapore Dollar ($)'
  },
  
  // Common destinations
  destinations: {
    domestic: 'Domestic Destinations',
    international: 'International Destinations',
    popularCities: 'Popular Cities',
    beijing: 'Beijing',
    shanghai: 'Shanghai',
    guangzhou: 'Guangzhou',
    shenzhen: 'Shenzhen',
    hangzhou: 'Hangzhou',
    chengdu: 'Chengdu',
    xian: 'Xi\'an',
    sanya: 'Sanya',
    tokyo: 'Tokyo',
    osaka: 'Osaka',
    seoul: 'Seoul',
    bangkok: 'Bangkok',
    singapore: 'Singapore',
    paris: 'Paris',
    london: 'London',
    newyork: 'New York',
    sydney: 'Sydney',
    custom: 'Custom Destination'
  },
  
  // Tips and suggestions
  tips: {
    general: 'General Tips',
    saveMoney: 'Money-Saving Tips',
    localCurrency: 'Local Currency Tips',
    emergencyFund: 'Consider setting aside 10-15% of your budget for emergencies',
    transport: 'Booking flights in advance typically saves money',
    accommodation: 'Accommodations with kitchen facilities can reduce food expenses',
    food: 'Local eateries are usually more economical than international chains',
    planning: 'Creating a detailed daily itinerary helps control spending',
    extraCosts: 'Don\'t forget to include small expenses like tips, internet, and transport cards'
  },
  
  // Messages
  messages: {
    success: 'Budget calculated successfully',
    error: 'Please fill in all required fields',
    dateError: 'End date must be after start date',
    saved: 'Budget plan saved',
    deleted: 'Budget plan deleted',
    highBudget: 'Your budget appears higher than average for this destination',
    lowBudget: 'Your budget might be too low, ensure all necessary expenses are covered'
  },
  
  // Footer introduction
  about: {
    title: 'About Travel Budget Planner',
    description: 'The Travel Budget Planner is a tool to help you manage your travel expenses, making your trip both enjoyable and economical. By planning expenses in detail, you can avoid financial stress during your journey and fully enjoy your travel experience.',
    
    featuresTitle: 'Key Features',
    feature1: 'Create reasonable budgets based on destination, duration, and group size',
    feature2: 'Break down expenses for transportation, accommodation, food, activities, and more',
    feature3: 'Provide budget analysis and visualization',
    feature4: 'Support multiple currency displays and conversions',
    feature5: 'Offer practical tips to save money while traveling',
    feature6: 'Export and save budget plans',
    
    benefitsTitle: 'Benefits',
    benefit1: 'Avoid overspending during your travels',
    benefit2: 'Allocate funds effectively across different travel aspects',
    benefit3: 'Reduce financial stress during your trip',
    benefit4: 'Improve travel planning efficiency',
    benefit5: 'Adapt to different travel styles and budget needs',
    
    tipsTitle: 'Budget Planning Tips',
    tip1: 'Adjust your budget based on the cost of living at your destination',
    tip2: 'Reserve 10-15% of your funds for unexpected situations',
    tip3: 'Traveling in off-peak seasons can significantly reduce accommodation and transportation costs',
    tip4: 'Be aware of foreign transaction fees when using credit cards abroad',
    tip5: 'Consider purchasing travel insurance for potential emergencies'
  }
}; 