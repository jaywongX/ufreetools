export default {
  name: 'Cash App 手續費計算器',
  title: '美國 Cash App 手續費計算器',
  description: '根據您的帳戶類型和支付方式計算 Cash App 轉賬、存款、ATM提款、比特幣交易等的手續費。',
  updatedDate: '費率更新日期：2025年4月18日',

  quickSelect: {
    label: '快速選項',
    sendCredit: '3% (發送 - 信用卡)',
    sendDebit: '0% (發送 - 借記卡/餘額)',
    receivePersonal: '0% (個人帳戶 - 接收)',
    receiveBusiness: '2.75% (商業帳戶 - 接收)',
    instantDeposit: '0.5-1.75% (即時存款)',
    atmWithdrawal: 'ATM提款 ($2.50 費用)'
  },

  calculationType: {
    label: '計算類型',
    direct: '標準計算 (發送金額 → 接收金額)',
    inverse: '反向計算 (期望接收金額 → 發送金額)'
  },

  accountType: {
    label: '帳戶類型',
    personal: '個人帳戶',
    business: '商業帳戶'
  },

  amount: {
    label: '交易金額',
    desiredLabel: '期望接收金額',
    placeholder: '輸入金額'
  },

  transactionType: {
    label: '交易類型',
    options: {
      send: '發送資金',
      receive: '接收資金'
    }
  },

  paymentSource: {
    label: '支付方式',
    options: {
      credit: '信用卡',
      debit: '借記卡',
      bank: '銀行帳戶',
      balance: 'Cash App 餘額'
    }
  },

  depositType: {
    label: '存款類型',
    options: {
      standard: '標準存款（1-3個工作日）',
      instant: '即時存款'
    }
  },

  atmType: {
    label: 'ATM類型',
    options: {
      inNetwork: '網絡內ATM',
      outOfNetwork: '網絡外ATM'
    }
  },

  additionalAtmFee: {
    label: '額外ATM費用（由ATM提供商收取）'
  },

  bitcoinTransactionType: {
    label: '比特幣交易類型',
    options: {
      buy: '購買比特幣',
      sell: '出售比特幣',
      send: '發送比特幣（閃電網絡）'
    }
  },

  stockTransactionType: {
    label: '股票交易類型',
    options: {
      buy: '購買股票',
      sell: '出售股票'
    }
  },

  cashInLocation: {
    label: '現金充值地點',
    options: {
      retail: '零售店（7-Eleven、CVS等）',
      other: '其他方式'
    }
  },

  internationalType: {
    label: '國際交易類型',
    options: {
      send: '發送國際支付',
      receive: '接收國際支付',
      convert: '貨幣兌換'
    }
  },

  tabs: {
    moneyTransfer: '資金轉賬',
    deposit: '銀行存款',
    atm: 'ATM提款',
    bitcoin: '比特幣',
    stocks: '股票',
    cashIn: '現金充值',
    international: '國際交易'
  },

  calculateButton: '計算手續費',

  results: {
    title: '手續費計算結果',
    amountInput: '金額',
    amountSent: '發送金額',
    fee: 'Cash App 手續費',
    amountReceived: '收到金額',
    finalAmount: '最終金額',
    desiredAmount: '期望接收金額',
    amountToSend: '需要發送金額',
    note: '注意'
  },

  errors: {
    amountRequired: '請輸入交易金額',
    invalidAmount: '請輸入有效金額',
    positiveAmount: '金額必須大於零',
    amountTooLarge: '金額超過最大交易限制'
  },

  notes: {
    creditCardFee: '使用信用卡付款將產生3%的手續費。使用借記卡、銀行帳戶或Cash App餘額可避免此費用。',
    instantDepositFee: '即時存款手續費範圍為0.5%至1.75%（最低$0.25，最高$9.99）。標準存款（1-3天）是免費的。',
    atmInNetworkFee: '網絡內ATM提款將產生$2.50的Cash App手續費。',
    atmOutOfNetworkFee: '網絡外ATM提款將產生$2.50的Cash App手續費，外加ATM提供商可能收取的額外費用。',
    bitcoinBuyFee: '比特幣購買包含網絡費用和可變價差。實際費用可能根據市場狀況而變化。',
    bitcoinSellFee: '比特幣銷售包含網絡費用和可變價差。實際費用可能根據市場狀況而變化。',
    bitcoinSendFee: '通過閃電網絡發送比特幣是免費的，但鏈上比特幣交易可能會產生網絡費用。',
    stockBuyFee: 'Cash App提供免佣金的股票購買。但是，SEC和TAF費用可能仍然適用。',
    stockSellFee: '通過Cash App出售股票時可能會產生少量監管費用。',
    cashInRetailFee: '零售點的現金充值費用根據金額而變化：根據存款金額，費用從$0.99到$2.99不等。',
    cashInOtherFee: '通過關聯的銀行帳戶或直接存款添加資金通常是免費的。',
    internationalTransferFee: '國際轉賬可能會產生更高的費用和貨幣兌換費用。',
    currencyConversionFee: '貨幣兌換通常包括手續費，並可能包括匯率差價。'
  },

  feeInfo: {
    title: 'Cash App 手續費信息',
    personal: {
      receiving: '個人帳戶 - 接收資金：0% 手續費',
      sendingCredit: '個人帳戶 - 發送（信用卡）：3% 手續費',
      sendingOther: '個人帳戶 - 發送（借記卡/銀行/餘額）：0% 手續費',
      standardDeposit: '個人帳戶 - 標準存款：0% 手續費',
      instantDeposit: '個人帳戶 - 即時存款：0.5-1.75% 手續費（最低 $0.25，最高 $9.99）'
    },
    business: {
      receiving: '商業帳戶 - 接收資金：2.75% 手續費'
    },
    atm: 'ATM提款：$2.50手續費，外加任何額外的ATM提供商費用',
    bitcoin: '比特幣交易：根據網絡狀況和市場價差的可變費用',
    stocks: '股票投資：買入 - 免費，賣出 - 可能適用小額監管費用',
    cashIn: '零售店現金充值：根據金額，$0.99-$2.99不等',
    international: '國際轉賬：適用更高費用，通常約為3%'
  }
};