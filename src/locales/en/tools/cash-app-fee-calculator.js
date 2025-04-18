export default {
  name: 'Cash App Fee Calculator',
  title: 'US Cash App Fee Calculator',
  description: 'Calculate transaction fees for Cash App transfers, deposits, ATM withdrawals, bitcoin transactions, and more based on your account type and payment method.',
  updatedDate: 'Fee rates updated as of April 18, 2025',
  
  quickSelect: {
    label: 'Quick Options',
    sendCredit: '3% (Sending - Credit card)',
    sendDebit: '0% (Sending - Debit card/balance)',
    receivePersonal: '0% (Personal - Receiving)',
    receiveBusiness: '2.75% (Business - Receiving)',
    instantDeposit: '0.5-1.75% (Instant Deposit)',
    atmWithdrawal: 'ATM Withdrawal ($2.50 fee)'
  },
  
  calculationType: {
    label: 'Calculation Type',
    direct: 'Standard (Send amount → Receive amount)',
    inverse: 'Reverse (Desired receive amount → Send amount)'
  },
  
  accountType: {
    label: 'Account Type',
    personal: 'Personal Account',
    business: 'Business Account'
  },
  
  amount: {
    label: 'Transaction Amount',
    desiredLabel: 'Desired Receive Amount',
    placeholder: 'Enter amount'
  },
  
  transactionType: {
    label: 'Transaction Type',
    options: {
      send: 'Sending Money',
      receive: 'Receiving Money'
    }
  },
  
  paymentSource: {
    label: 'Payment Method',
    options: {
      credit: 'Credit Card',
      debit: 'Debit Card',
      bank: 'Bank Account',
      balance: 'Cash App Balance'
    }
  },
  
  depositType: {
    label: 'Deposit Type',
    options: {
      standard: 'Standard Deposit (1-3 business days)',
      instant: 'Instant Deposit'
    }
  },
  
  atmType: {
    label: 'ATM Type',
    options: {
      inNetwork: 'In-Network ATM',
      outOfNetwork: 'Out-of-Network ATM'
    }
  },
  
  additionalAtmFee: {
    label: 'Additional ATM Fee (charged by ATM provider)'
  },
  
  bitcoinTransactionType: {
    label: 'Bitcoin Transaction Type',
    options: {
      buy: 'Buy Bitcoin',
      sell: 'Sell Bitcoin',
      send: 'Send Bitcoin (Lightning Network)'
    }
  },
  
  stockTransactionType: {
    label: 'Stock Transaction Type',
    options: {
      buy: 'Buy Stocks',
      sell: 'Sell Stocks'
    }
  },
  
  cashInLocation: {
    label: 'Cash-In Location',
    options: {
      retail: 'Retail Store (7-Eleven, CVS, etc.)',
      other: 'Other Methods'
    }
  },
  
  internationalType: {
    label: 'International Transaction Type',
    options: {
      send: 'Send International Payment',
      receive: 'Receive International Payment',
      convert: 'Currency Conversion'
    }
  },
  
  tabs: {
    moneyTransfer: 'Money Transfer',
    deposit: 'Bank Deposit',
    atm: 'ATM Withdrawal',
    bitcoin: 'Bitcoin',
    stocks: 'Stocks',
    cashIn: 'Cash In',
    international: 'International'
  },
  
  calculateButton: 'Calculate Fee',
  
  results: {
    title: 'Fee Calculation Results',
    amountInput: 'Amount',
    amountSent: 'Amount Sent',
    fee: 'Cash App Fee',
    amountReceived: 'Amount Received',
    finalAmount: 'Final Amount',
    desiredAmount: 'Desired Receive Amount',
    amountToSend: 'Amount to Send',
    note: 'Note'
  },
  
  errors: {
    amountRequired: 'Please enter a transaction amount',
    invalidAmount: 'Please enter a valid amount',
    positiveAmount: 'Amount must be greater than zero',
    amountTooLarge: 'Amount exceeds maximum transaction limit'
  },
  
  notes: {
    creditCardFee: 'Credit card payments incur a 3% fee. Use a debit card, bank account, or Cash App balance to avoid this fee.',
    instantDepositFee: 'Instant Deposit fees range from 0.5% to 1.75% (min $0.25, max $9.99). Standard deposits (1-3 days) are free.',
    atmInNetworkFee: 'In-network ATM withdrawals incur a $2.50 fee from Cash App.',
    atmOutOfNetworkFee: 'Out-of-network ATM withdrawals incur a $2.50 fee from Cash App plus any additional fees charged by the ATM provider.',
    bitcoinBuyFee: 'Bitcoin purchases include network fees and a variable spread. The actual fee may vary based on market conditions.',
    bitcoinSellFee: 'Bitcoin sales include network fees and a variable spread. The actual fee may vary based on market conditions.',
    bitcoinSendFee: 'Sending bitcoin via the Lightning Network is free, but on-chain bitcoin transactions may incur network fees.',
    stockBuyFee: 'Cash App offers commission-free stock purchases. However, SEC and TAF fees may still apply.',
    stockSellFee: 'Small regulatory fees may apply when selling stocks through Cash App.',
    cashInRetailFee: 'Cash-in fees at retail locations vary based on the amount: $0.99-$2.99 depending on deposit amount.',
    cashInOtherFee: 'Adding funds through linked bank accounts or direct deposit is typically free.',
    internationalTransferFee: 'International transfers may incur higher fees and currency conversion charges.',
    currencyConversionFee: 'Currency conversions typically include a fee and may also include a spread on the exchange rate.'
  },
  
  feeInfo: {
    title: 'Cash App Fee Information',
    personal: {
      receiving: 'Personal Account - Receiving Money: 0% fee',
      sendingCredit: 'Personal Account - Sending (Credit Card): 3% fee',
      sendingOther: 'Personal Account - Sending (Debit/Bank/Balance): 0% fee',
      standardDeposit: 'Personal Account - Standard Deposits: 0% fee',
      instantDeposit: 'Personal Account - Instant Deposits: 0.5-1.75% fee (min $0.25, max $9.99)'
    },
    business: {
      receiving: 'Business Account - Receiving Money: 2.75% fee'
    },
    atm: 'ATM Withdrawals: $2.50 fee plus any additional ATM provider fees',
    bitcoin: 'Bitcoin Transactions: Variable fees based on network conditions and market spreads',
    stocks: 'Stock Investments: Buy - Free, Sell - Small regulatory fees may apply',
    cashIn: 'Cash In at Retail: $0.99-$2.99 depending on amount',
    international: 'International Transfers: Higher fees apply, typically around 3%'
  },
  
  article: {
    title: 'Complete Guide to Cash App Fee Calculator: Calculate All Transaction Fees',
    intro: {
      title: 'What is the Cash App Fee Calculator?',
      content1: 'The Cash App Fee Calculator is a powerful tool that helps you determine exactly how much you\'ll pay in fees for various Cash App transactions. Whether you\'re sending money, receiving payments, making instant deposits, or withdrawing from ATMs, this cash app fee calculator provides accurate calculations based on the latest fee rates updated as of April 18, 2025.',
      content2: 'Using our cash app fee calculator eliminates the guesswork about transaction costs, helping you make informed decisions about your money transfers. Unlike the official Cash App which doesn\'t clearly show fee breakdowns before transactions, our calculator shows you precisely what\'s cash app fee for any amount - whether it\'s $100, $200, or $1000.'
    },
    applications: {
      title: 'When to Use the Cash App Fee Calculator',
      scenarios: [
        {
          title: 'Calculating Credit Card Transfer Fees',
          description: 'Determine the exact 3% fee when sending money using a credit card through Cash App. Our calculator shows you how much is cash app fee for $1000 or any other amount.'
        },
        {
          title: 'Planning Instant Deposits',
          description: 'Calculate what is cash app\'s instant fee (0.5%-1.75%) before making quick transfers to your bank account, with minimum and maximum fee limits properly applied.'
        },
        {
          title: 'Business Account Payments',
          description: 'Business users can calculate the 2.75% processing fee for receiving payments, helping manage transaction costs effectively.'
        },
        {
          title: 'Bitcoin Transaction Costs',
          description: 'Use our cash app bitcoin fee calculator to determine spread costs when buying or selling Bitcoin through Cash App.'
        },
        {
          title: 'ATM Withdrawal Fee Estimation',
          description: 'Calculate both Cash App\'s $2.50 fee and additional ATM operator charges when withdrawing cash.'
        },
        {
          title: 'Stock Trading Fee Analysis',
          description: 'Determine any applicable fees when buying or selling stocks through Cash App\'s investing feature.'
        },
        {
          title: 'International Transaction Planning',
          description: 'Calculate currency conversion and international transfer fees when using Cash App across borders.'
        },
        {
          title: 'Reverse Fee Calculations',
          description: 'Determine how much to send to ensure your recipient gets an exact amount after fees are deducted.'
        }
      ]
    },
    guide: {
      title: 'How to Use the Cash App Fee Calculator',
      steps: [
        {
          title: 'Select Your Transaction Type',
          description: 'Begin by choosing the type of Cash App transaction you want to calculate fees for: Money Transfer, Bank Deposit, Bitcoin, Stocks, Cash In, International, or ATM Withdrawal.'
        },
        {
          title: 'Choose Your Account Type',
          description: 'Select whether you\'re using a Personal or Business Cash App account, as fee structures differ between these account types.'
        },
        {
          title: 'Select Calculation Method',
          description: 'Choose between Standard Calculation (to find out fees based on an amount you send) or Reverse Calculation (to determine how much to send for a desired received amount).'
        },
        {
          title: 'Enter Transaction Amount',
          description: 'Input the dollar amount for your transaction. This is either the amount you\'re sending or the amount you want someone to receive, depending on your calculation method.'
        },
        {
          title: 'Specify Transaction Details',
          description: 'Based on your transaction type, select additional options such as payment source (for transfers), deposit speed, Bitcoin transaction type, or ATM network type.'
        },
        {
          title: 'Calculate Fees',
          description: 'Click the "Calculate Fee" button to process your inputs and view a detailed breakdown of the fees involved in your transaction.'
        },
        {
          title: 'Review Results',
          description: 'Examine the calculated results showing the original amount, applicable fees, and final amount after fees. Notes specific to your transaction type provide additional context about how fees are applied.'
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions about Cash App Fees',
      items: [
        {
          question: 'How much is Cash App fee for $1000?',
          answer: 'For a $1000 transfer from a Cash App balance or debit card, there is no fee. However, using a credit card incurs a 3% fee ($30). For instant deposits, fees range from 0.5%-1.75% ($5-$17.50), with a maximum fee of $9.99.'
        },
        {
          question: 'What is Cash App\'s instant fee structure?',
          answer: 'Cash App\'s instant deposit fee is 0.5% to 1.75% of the transfer amount, with a minimum fee of $0.25 and a maximum of $9.99. Standard deposits (1-3 business days) remain free.'
        },
        {
          question: 'Is there a Cash App monthly fee?',
          answer: 'No, Cash App does not charge any monthly fees or subscription costs. You only pay fees for specific transactions like credit card payments, instant deposits, or ATM withdrawals.'
        },
        {
          question: 'How to pay fees on Cash App?',
          answer: 'Fees on Cash App are automatically deducted from your transaction amount. For example, when sending money via credit card, the 3% fee is added to your transfer amount and charged together.'
        },
        {
          question: 'What are Cash App Bitcoin fees?',
          answer: 'Cash App charges a variable fee for Bitcoin transactions that includes a service fee and a trading fee (approximately 1.75% spread). Our cash app bitcoin fee calculator helps determine these costs precisely.'
        },
        {
          question: 'How much is Cash App fee for $200?',
          answer: 'Sending $200 from your Cash App balance or linked debit card has no fee. Using a credit card incurs a 3% fee ($6). For instant deposits, the fee would be between $1-$3.50, depending on the percentage applied.'
        },
        {
          question: 'What\'s the fee for Cash App ATM withdrawals?',
          answer: 'Cash App charges $2.50 for all ATM withdrawals. If you use an out-of-network ATM, you\'ll pay this fee plus any additional fees charged by the ATM operator.'
        },
        {
          question: 'How can I avoid Cash App fees?',
          answer: 'To avoid Cash App fees: send money using your Cash App balance, linked bank account, or debit card; choose standard deposits instead of instant transfers; use in-network ATMs if you have direct deposits of $300+ per month.'
        }
      ]
    },
    feeTypes: {
      title: 'Understanding Different Cash App Fee Types',
      items: [
        {
          title: 'Personal Account Sending Fees',
          description: 'When sending money from a personal account, there\'s a 0% fee when using your Cash App balance, linked bank account, or debit card. However, sending money using a credit card incurs a 3% fee.'
        },
        {
          title: 'Personal Account Receiving Fees',
          description: 'Receiving money to a personal Cash App account is always free, with no fees deducted from incoming transfers.'
        },
        {
          title: 'Business Account Fees',
          description: 'Business accounts are charged a 2.75% fee for receiving payments. This fee applies to all incoming payments regardless of payment method.'
        },
        {
          title: 'Deposit Fees',
          description: 'Standard deposits to your linked bank account (1-3 business days) are free. Instant deposits incur a fee of 0.5% to 1.75% (minimum $0.25, maximum $9.99).'
        },
        {
          title: 'ATM Withdrawal Fees',
          description: 'Cash App charges $2.50 for ATM withdrawals. Cash Card users with monthly direct deposits of $300+ get up to $7 in ATM fees reimbursed per month.'
        },
        {
          title: 'Bitcoin Transaction Fees',
          description: 'Bitcoin purchases and sales include a variable fee that combines service fees and price volatility. The fee is typically around 1.75% but can vary based on market conditions.'
        },
        {
          title: 'Stock Trading Fees',
          description: 'Buying stocks on Cash App is commission-free. Selling stocks may incur regulatory fees, though these are typically minimal.'
        },
        {
          title: 'International Transfer Fees',
          description: 'International transfers typically include a 3% fee, plus potential currency conversion fees that vary based on the currencies involved.'
        }
      ]
    },
    tips: {
      title: 'Tips to Minimize Cash App Fees',
      items: [
        'Use your Cash App balance or linked debit card instead of credit cards to avoid the 3% sending fee.',
        'Plan ahead and use standard deposits (1-3 business days) instead of instant deposits to avoid the 0.5%-1.75% fee.',
        'For frequent ATM users, set up direct deposit of $300+ per month to get ATM fee reimbursements up to $7 monthly.',
        'Business users should factor in the 2.75% receiving fee when pricing goods or services sold through Cash App.',
        'Use the reverse calculation feature on our cash app fee calculator to determine how much to send for a specific amount to be received.',
        'Compare Bitcoin transaction costs using our cash app bitcoin fee calculator before making large cryptocurrency purchases.',
        'When possible, batch multiple small transfers into one larger transfer to minimize the impact of minimum fees on instant deposits.',
        'If you need to make an international transfer, compare Cash App\'s fees with other services using our calculator to find the most cost-effective option.'
      ]
    },
    conclusion: {
      title: 'Make Informed Decisions with the Cash App Fee Calculator',
      content: 'The Cash App Fee Calculator empowers you to manage your digital finances more effectively by providing transparent fee calculations for all transaction types. By understanding exactly what is Cash App\'s fee structure and how much each transaction will cost, you can make smarter decisions about how and when to move your money. Whether you\'re calculating cash out fees on Cash App or determining what\'s the Cash App fee for $120, our calculator helps you plan your transactions with confidence. Bookmark this tool today and never be surprised by unexpected fees again!'
    }
  }
}; 