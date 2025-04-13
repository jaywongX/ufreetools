export default {
  name: 'Personal Account Book',
  description: 'Track your income and expenses with this easy-to-use personal finance tool',
  tags: ['finance', 'accounting', 'budget', 'money', 'expense-tracker', 'personal-finance'],
  category: 'practical-tools',
  
  // UI elements
  ui: {
    addTransaction: 'Add Transaction',
    editTransaction: 'Edit Transaction',
    deleteTransaction: 'Delete Transaction',
    income: 'Income',
    expense: 'Expense',
    transfer: 'Transfer',
    date: 'Date',
    amount: 'Amount',
    category: 'Category',
    account: 'Account',
    description: 'Description',
    tags: 'Tags',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    filter: 'Filter',
    search: 'Search',
    clear: 'Clear',
    overview: 'Overview',
    transactions: 'Transactions',
    statistics: 'Statistics',
    budget: 'Budget',
    settings: 'Settings',
    exportData: 'Export Data',
    importData: 'Import Data',
    backup: 'Backup',
    restore: 'Restore',
    currency: 'Currency',
    language: 'Language',
    theme: 'Theme',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    resetData: 'Reset Data',
    resetConfirmation: 'Are you sure you want to reset all data? This cannot be undone.',
    from: 'From',
    to: 'To',
    filterByDate: 'Filter by Date',
    noTransactions: 'No transactions to display',
    allCategories: 'All Categories',
    addCategory: 'Add Category',
    editCategory: 'Edit Category',
    deleteCategory: 'Delete Category',
    categoryName: 'Category Name',
    categoryIcon: 'Category Icon',
    categoryColor: 'Category Color',
    addAccount: 'Add Account',
    editAccount: 'Edit Account',
    deleteAccount: 'Delete Account',
    accountName: 'Account Name',
    accountType: 'Account Type',
    accountBalance: 'Account Balance',
    totalIncome: 'Total Income',
    totalExpense: 'Total Expense',
    balance: 'Balance',
    netWorth: 'Net Worth',
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly',
    yearly: 'Yearly',
    today: 'Today',
    thisWeek: 'This Week',
    thisMonth: 'This Month',
    thisYear: 'This Year',
    lastWeek: 'Last Week',
    lastMonth: 'Last Month',
    lastYear: 'Last Year',
    custom: 'Custom',
    setBudget: 'Set Budget',
    budgetLimit: 'Budget Limit',
    budgetPeriod: 'Budget Period',
    budgetCategory: 'Budget Category',
    budgetAlert: 'Budget Alert',
    budgetUsage: 'Budget Usage',
    remaining: 'Remaining',
    spent: 'Spent',
    over: 'Over',
    exportFormat: 'Export Format',
    importFormat: 'Import Format',
    csv: 'CSV',
    json: 'JSON',
    selectFile: 'Select File',
    successfullyImported: 'Data successfully imported',
    errorImporting: 'Error importing data',
    successfullyExported: 'Data successfully exported',
    errorExporting: 'Error exporting data',
    confirmDelete: 'Are you sure you want to delete this item?',
    recurringTransaction: 'Recurring Transaction',
    frequency: 'Frequency',
    startDate: 'Start Date',
    endDate: 'End Date',
    never: 'Never',
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly',
    yearly: 'Yearly',
    note: 'Note',
    attachment: 'Attachment',
    dataSecurity: 'Data Security',
    type: 'Type',
    clearTransactions: 'Clear All Transactions',
    confirmClearTransactions: 'Are you sure you want to clear all transactions? This action cannot be undone.',
    transactionsCleared: 'All transactions have been cleared',
    enterValidAmount: 'Please enter a valid amount',
    selectDate: 'Please select a date',
    selectCategory: 'Please select a category'
  },
  
  // Predefined categories
  categories: {
    income: {
      salary: 'Salary',
      freelance: 'Freelance',
      investments: 'Investments',
      gifts: 'Gifts',
      refunds: 'Refunds',
      other: 'Other Income'
    },
    expense: {
      food: 'Food & Dining',
      groceries: 'Groceries',
      rent: 'Rent/Mortgage',
      utilities: 'Utilities',
      transportation: 'Transportation',
      entertainment: 'Entertainment',
      shopping: 'Shopping',
      health: 'Health & Medical',
      education: 'Education',
      personal: 'Personal Care',
      travel: 'Travel',
      insurance: 'Insurance',
      taxes: 'Taxes',
      debt: 'Debt Payments',
      subscription: 'Subscriptions',
      charity: 'Donations & Charity',
      business: 'Business Expenses',
      other: 'Other Expenses'
    },
    transfer: {
      bank_transfer: 'Bank Transfer',
      savings: 'Savings',
      investment: 'Investment',
      debt_payment: 'Debt Payment',
      other: 'Other Transfer'
    }
  },
  
  // Account types
  accountTypes: {
    cash: 'Cash',
    checking: 'Checking Account',
    savings: 'Savings Account',
    creditCard: 'Credit Card',
    investment: 'Investment Account',
    loan: 'Loan',
    asset: 'Asset',
    other: 'Other'
  },
  
  // Chart labels
  charts: {
    incomeVsExpense: 'Income vs Expense',
    expenseByCategory: 'Expense by Category',
    monthlyTrend: 'Monthly Trend',
    savingsRate: 'Savings Rate',
    netWorthTrend: 'Net Worth Trend',
    budgetPerformance: 'Budget Performance',
    topExpenseCategories: 'Top Expense Categories',
    cashFlow: 'Cash Flow'
  },
  
  // Tool documentation section
  documentation: {
    title: 'About Personal Account Book',
    introduction: 'Personal Account Book is a tool designed for personal finance management. All data is stored locally in your browser, ensuring your financial information remains completely private.',
    whyUse: {
      title: 'Why Use Personal Account Book?',
      points1: 'Complete Privacy - All data is stored locally and never uploaded to any server',
      points2: 'Simple Interface - Clean and intuitive design makes it easy to record daily transactions',
      points3: 'Data Visualization - Understand your spending habits through visual charts',
      points4: 'Custom Categories - Create custom income and expense categories based on your needs',
      points5: 'Data Export - Export your data to CSV format for backup or further analysis'
    },
    tips: {
      title: 'Usage Tips',
      points1: 'Record transactions regularly to keep your account book up to date',
      points2: 'Use tags to categorize your expenses in more detail',
      points3: 'Set monthly budgets to control your spending',
      points4: 'Export your data regularly as a backup',
      points5: 'Use the statistics feature to identify spending patterns and areas for improvement'
    },
    dataStorage: {
      title: 'Data Storage',
      content: 'All your financial data is stored exclusively in your browser\'s local storage. This means your data never leaves your device and is not accessible to anyone else. However, clearing your browser data will also clear your account book data, so make sure to export regularly.'
    }
  },
  
  // Article section
  article: {
    title: "Personal Account Book: Master Your Financial Health",
    features: {
      title: "Understanding Personal Financial Management",
      description: "The Personal Account Book is a comprehensive money management tool designed to help you take control of your financial life. This powerful expense tracker provides a secure, private platform for recording income and expenses, monitoring your cash flow, and analyzing your financial patterns without sharing your data with any external servers.<br><br>Our personal finance manager offers multiple features including transaction categorization, budget planning, statistical visualization, and data export. The intuitive interface makes daily financial tracking simple, while advanced reporting tools give you deeper insights into your spending habits and saving patterns. Whether you're looking to eliminate debt, save for a major purchase, or simply gain better visibility of where your money goes, this budget planner provides the complete toolset you need for effective financial management.",
      useCases: {
        title: "Practical Applications for Personal Budgeting",
        items: [
          "Students tracking their semester expenses and allowances to avoid overspending on non-essential items while managing limited financial resources",
          "Freelancers monitoring project-based income against regular expenses, helping maintain stable cash flow during periods between contracts",
          "Young professionals creating saving plans for major goals like home down payments, analyzing spending patterns to identify reduction opportunities",
          "Families managing household budgets, tracking shared expenses, and planning for future costs such as education funds or home renovations",
          "Small business owners separating personal and business expenses while maintaining a comprehensive view of their overall financial position",
          "Retirees monitoring fixed income sources against monthly expenses, ensuring their retirement savings last throughout their non-working years"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about Personal Finance Management",
      items: [
        {
          question: "Is my financial data secure when using this Personal Account Book?",
          answer: "Absolutely. Your financial data's security is our top priority. The Personal Account Book stores all information exclusively in your browser's local storage, meaning your sensitive financial data never leaves your device and is not transmitted to any external servers. There's no account creation or login required, further enhancing privacy. However, this local storage approach means you should regularly export your data as a backup, since clearing your browser cache will erase your financial records. This balance of complete privacy with local responsibility gives you full control over your personal financial information."
        },
        {
          question: "How can the budget tracking feature help me save money?",
          answer: "The budget tracking feature in our Personal Account Book is a powerful tool for increasing savings by creating financial awareness and accountability. You can set specific budget limits for different expense categories (groceries, entertainment, utilities, etc.) and monitor your spending against these targets in real-time. The system provides visual indicators when you approach or exceed budget thresholds, helping prevent overspending. Monthly and category-based reports reveal patterns in your expenses, highlighting potential areas for reduction. This comprehensive budget monitoring creates a feedback loop that naturally encourages more mindful spending decisions and better financial habits."
        },
        {
          question: "Can I track multiple accounts or currencies in this expense tracker?",
          answer: "Yes, our expense tracker fully supports managing multiple financial accounts and currencies. You can create and monitor various account types including cash, checking, savings, credit cards, and investment accounts all within a single dashboard. For those dealing with multiple currencies, the tool allows you to define different currency types and handles conversion calculations. The transfer function enables you to record money movements between accounts while maintaining accurate balances across your entire financial portfolio. This multi-account capability provides a comprehensive view of your complete financial picture rather than fragmented glimpses across separate platforms."
        },
        {
          question: "How detailed are the financial reports and visualizations?",
          answer: "The financial reports and visualizations in the Personal Account Book offer exceptional depth while remaining user-friendly. The analytics dashboard provides multiple visualization types including income vs. expense comparisons, category-based spending breakdowns, monthly trend analysis, and savings rate tracking. Reports can be filtered by custom date ranges, categories, tags, or accounts to examine specific aspects of your financial behavior. The interactive charts allow you to drill down into transaction details directly from the visualization. These comprehensive analytics transform raw financial data into actionable insights, helping you identify spending patterns, track budget performance, and make informed decisions about your personal finance management."
        },
        {
          question: "What makes this personal finance manager different from banking apps?",
          answer: "Unlike banking apps that primarily focus on account balances and transactions from a single institution, our personal finance manager offers comprehensive financial oversight across all your accounts with complete privacy. While banking apps show what has already happened, our tool emphasizes planning, budgeting, and analysis with customizable categories that match your specific financial situation. Banking apps typically lack detailed spending analysis or only offer basic categorization, whereas our personal finance manager provides in-depth reports and visualizations of your financial patterns. Most importantly, our solution stores data locally on your device, giving you complete control and privacy over your financial information, unlike bank apps that store your data on their servers."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Managing Your Finances",
      steps: [
        "Begin by accessing the Overview dashboard to get a complete picture of your financial status, including total income, expenses, and current balance across all your accounts",
        "Set up your accounts by clicking the 'Add Account' button and entering account details such as name, type (checking, savings, credit card, etc.), and current balance",
        "Record your financial transactions by clicking 'Add Transaction', selecting the type (income, expense, or transfer), and filling in details including date, amount, category, and account",
        "Establish budget limits by navigating to the Budget section and creating monthly allowances for different spending categories to help control your expenses",
        "Use the Statistics section to analyze your spending patterns through visual charts and graphs, allowing you to identify areas where you might be overspending",
        "Regularly review your transaction history to ensure all entries are accurate and properly categorized, making corrections as needed to maintain data integrity",
        "Export your financial data periodically using the 'Export Data' function to create backups in CSV or JSON format, protecting your records from accidental loss due to browser data clearing"
      ]
    },
    conclusion: "The Personal Account Book transforms the often overwhelming task of financial management into a straightforward, even engaging process. By providing a secure environment to track expenses, monitor income, and visualize spending patterns, this tool gives you unprecedented clarity about your financial habits. As you continue to log transactions and review the generated insights, you'll develop a deeper understanding of your relationship with money and identify concrete opportunities to optimize your finances. Whether your goal is debt reduction, savings accumulation, or simply gaining better financial awareness, consistent use of this personal finance manager will guide you toward improved financial health and greater peace of mind regarding your economic future."
  }
} 