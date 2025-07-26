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
  }
}; 