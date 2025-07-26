export default {
  name: 'Cash App 手续费计算器',
  title: '美国 Cash App 手续费计算器',
  description: '根据您的账户类型和支付方式计算 Cash App 转账、存款、ATM提款、比特币交易等的手续费。',
  updatedDate: '费率更新日期：2025年4月18日',

  quickSelect: {
    label: '快速选项',
    sendCredit: '3% (发送 - 信用卡)',
    sendDebit: '0% (发送 - 借记卡/余额)',
    receivePersonal: '0% (个人账户 - 接收)',
    receiveBusiness: '2.75% (商业账户 - 接收)',
    instantDeposit: '0.5-1.75% (即时存款)',
    atmWithdrawal: 'ATM提款 ($2.50 费用)'
  },

  calculationType: {
    label: '计算类型',
    direct: '标准计算 (发送金额 → 接收金额)',
    inverse: '反向计算 (期望接收金额 → 发送金额)'
  },

  accountType: {
    label: '账户类型',
    personal: '个人账户',
    business: '商业账户'
  },

  amount: {
    label: '交易金额',
    desiredLabel: '期望接收金额',
    placeholder: '输入金额'
  },

  transactionType: {
    label: '交易类型',
    options: {
      send: '发送资金',
      receive: '接收资金'
    }
  },

  paymentSource: {
    label: '支付方式',
    options: {
      credit: '信用卡',
      debit: '借记卡',
      bank: '银行账户',
      balance: 'Cash App 余额'
    }
  },

  depositType: {
    label: '存款类型',
    options: {
      standard: '标准存款（1-3个工作日）',
      instant: '即时存款'
    }
  },

  atmType: {
    label: 'ATM类型',
    options: {
      inNetwork: '网络内ATM',
      outOfNetwork: '网络外ATM'
    }
  },

  additionalAtmFee: {
    label: '额外ATM费用（由ATM提供商收取）'
  },

  bitcoinTransactionType: {
    label: '比特币交易类型',
    options: {
      buy: '购买比特币',
      sell: '出售比特币',
      send: '发送比特币（闪电网络）'
    }
  },

  stockTransactionType: {
    label: '股票交易类型',
    options: {
      buy: '购买股票',
      sell: '出售股票'
    }
  },

  cashInLocation: {
    label: '现金充值地点',
    options: {
      retail: '零售店（7-Eleven、CVS等）',
      other: '其他方式'
    }
  },

  internationalType: {
    label: '国际交易类型',
    options: {
      send: '发送国际支付',
      receive: '接收国际支付',
      convert: '货币兑换'
    }
  },

  tabs: {
    moneyTransfer: '资金转账',
    deposit: '银行存款',
    atm: 'ATM提款',
    bitcoin: '比特币',
    stocks: '股票',
    cashIn: '现金充值',
    international: '国际交易'
  },

  calculateButton: '计算手续费',

  results: {
    title: '手续费计算结果',
    amountInput: '金额',
    amountSent: '发送金额',
    fee: 'Cash App 手续费',
    amountReceived: '收到金额',
    finalAmount: '最终金额',
    desiredAmount: '期望接收金额',
    amountToSend: '需要发送金额',
    note: '注意'
  },

  errors: {
    amountRequired: '请输入交易金额',
    invalidAmount: '请输入有效金额',
    positiveAmount: '金额必须大于零',
    amountTooLarge: '金额超过最大交易限制'
  },

  notes: {
    creditCardFee: '使用信用卡付款将产生3%的手续费。使用借记卡、银行账户或Cash App余额可避免此费用。',
    instantDepositFee: '即时存款手续费范围为0.5%至1.75%（最低$0.25，最高$9.99）。标准存款（1-3天）是免费的。',
    atmInNetworkFee: '网络内ATM提款将产生$2.50的Cash App手续费。',
    atmOutOfNetworkFee: '网络外ATM提款将产生$2.50的Cash App手续费，外加ATM提供商可能收取的额外费用。',
    bitcoinBuyFee: '比特币购买包含网络费用和可变价差。实际费用可能根据市场状况而变化。',
    bitcoinSellFee: '比特币销售包含网络费用和可变价差。实际费用可能根据市场状况而变化。',
    bitcoinSendFee: '通过闪电网络发送比特币是免费的，但链上比特币交易可能会产生网络费用。',
    stockBuyFee: 'Cash App提供免佣金的股票购买。但是，SEC和TAF费用可能仍然适用。',
    stockSellFee: '通过Cash App出售股票时可能会产生少量监管费用。',
    cashInRetailFee: '零售点的现金充值费用根据金额而变化：根据存款金额，费用从$0.99到$2.99不等。',
    cashInOtherFee: '通过关联的银行账户或直接存款添加资金通常是免费的。',
    internationalTransferFee: '国际转账可能会产生更高的费用和货币兑换费用。',
    currencyConversionFee: '货币兑换通常包括手续费，并可能包括汇率差价。'
  },

  feeInfo: {
    title: 'Cash App 手续费信息',
    personal: {
      receiving: '个人账户 - 接收资金：0% 手续费',
      sendingCredit: '个人账户 - 发送（信用卡）：3% 手续费',
      sendingOther: '个人账户 - 发送（借记卡/银行/余额）：0% 手续费',
      standardDeposit: '个人账户 - 标准存款：0% 手续费',
      instantDeposit: '个人账户 - 即时存款：0.5-1.75% 手续费（最低 $0.25，最高 $9.99）'
    },
    business: {
      receiving: '商业账户 - 接收资金：2.75% 手续费'
    },
    atm: 'ATM提款：$2.50手续费，外加任何额外的ATM提供商费用',
    bitcoin: '比特币交易：根据网络状况和市场价差的可变费用',
    stocks: '股票投资：买入 - 免费，卖出 - 可能适用小额监管费用',
    cashIn: '零售店现金充值：根据金额，$0.99-$2.99不等',
    international: '国际转账：适用更高费用，通常约为3%'
  }
}; 