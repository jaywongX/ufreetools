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
  },
  
  article: {
    title: 'Cash App 手续费计算器完全指南：计算所有交易费用',
    intro: {
      title: '什么是 Cash App 手续费计算器？',
      content1: 'Cash App 手续费计算器是一个强大的工具，帮助您准确确定各种 Cash App 交易中将支付的费用。无论您是发送资金、接收付款、进行即时存款还是从 ATM 取款，这个 Cash App 手续费计算器都能根据最新的费率（更新至 2025 年 4 月 18 日）提供准确计算。',
      content2: '使用我们的 Cash App 手续费计算器消除了关于交易成本的猜测，帮助您做出明智的资金转账决定。与官方 Cash App 不同的是，官方应用在交易前并不清晰显示费用明细，而我们的计算器能准确显示任何金额的 Cash App 手续费——无论是 $100、$200 还是 $1000。'
    },
    applications: {
      title: '何时使用 Cash App 手续费计算器',
      scenarios: [
        {
          title: '计算信用卡转账费用',
          description: '确定使用信用卡通过 Cash App 发送资金时的准确 3% 费用。我们的计算器会显示 $1000 或任何其他金额的 Cash App 手续费是多少。'
        },
        {
          title: '规划即时存款',
          description: '在向银行账户进行快速转账之前，计算 Cash App 的即时手续费（0.5%-1.75%），确保正确应用最低和最高费用限制。'
        },
        {
          title: '商业账户支付',
          description: '商业用户可以计算接收付款的 2.75% 处理费，帮助有效管理交易成本。'
        },
        {
          title: '比特币交易成本',
          description: '使用我们的 Cash App 比特币手续费计算器确定通过 Cash App 买卖比特币时的差价成本。'
        },
        {
          title: 'ATM 取款费用估算',
          description: '计算取款时 Cash App 的 $2.50 费用以及额外的 ATM 运营商收费。'
        },
        {
          title: '股票交易费用分析',
          description: '确定通过 Cash App 投资功能买卖股票时的任何适用费用。'
        },
        {
          title: '国际交易规划',
          description: '在跨境使用 Cash App 时计算货币兑换和国际转账费用。'
        },
        {
          title: '反向费用计算',
          description: '确定需要发送多少资金，以确保收款人在扣除费用后获得准确金额。'
        }
      ]
    },
    guide: {
      title: '如何使用 Cash App 手续费计算器',
      steps: [
        {
          title: '选择您的交易类型',
          description: '首先选择您想要计算费用的 Cash App 交易类型：资金转账、银行存款、比特币、股票、现金充值、国际或 ATM 取款。'
        },
        {
          title: '选择您的账户类型',
          description: '选择您是使用个人还是商业 Cash App 账户，因为这两种账户类型的费用结构不同。'
        },
        {
          title: '选择计算方法',
          description: '在标准计算（根据您发送的金额计算费用）或反向计算（确定要发送多少才能达到预期接收金额）之间选择。'
        },
        {
          title: '输入交易金额',
          description: '输入交易的美元金额。这可能是您发送的金额或您希望某人接收的金额，取决于您的计算方法。'
        },
        {
          title: '指定交易详情',
          description: '根据您的交易类型，选择其他选项，如支付来源（用于转账）、存款速度、比特币交易类型或 ATM 网络类型。'
        },
        {
          title: '计算费用',
          description: '点击"计算费用"按钮处理您的输入，并查看交易中涉及的费用详细明细。'
        },
        {
          title: '查看结果',
          description: '检查计算结果，显示原始金额、适用费用和费用后的最终金额。特定于您交易类型的注释提供有关如何应用费用的额外上下文。'
        }
      ]
    },
    faq: {
      title: '关于 Cash App 费用的常见问题',
      items: [
        {
          question: '$1000 的 Cash App 手续费是多少？',
          answer: '从 Cash App 余额或借记卡转账 $1000 没有手续费。但使用信用卡会产生 3% 的费用（$30）。对于即时存款，费用范围为 0.5%-1.75%（$5-$17.50），最高费用为 $9.99。'
        },
        {
          question: 'Cash App 的即时费用结构是什么？',
          answer: 'Cash App 的即时存款费用为转账金额的 0.5% 至 1.75%，最低费用为 $0.25，最高为 $9.99。标准存款（1-3 个工作日）仍然免费。'
        },
        {
          question: 'Cash App 有月费吗？',
          answer: '不，Cash App 不收取任何月费或订阅费用。您只需为特定交易（如信用卡支付、即时存款或 ATM 取款）支付费用。'
        },
        {
          question: '如何支付 Cash App 上的费用？',
          answer: 'Cash App 上的费用会自动从您的交易金额中扣除。例如，当通过信用卡发送资金时，3% 的费用会添加到您的转账金额中并一起收取。'
        },
        {
          question: 'Cash App 比特币手续费是多少？',
          answer: 'Cash App 对比特币交易收取可变费用，包括服务费和交易费（约 1.75% 的价差）。我们的 Cash App 比特币手续费计算器帮助精确确定这些成本。'
        },
        {
          question: '$200 的 Cash App 手续费是多少？',
          answer: '从 Cash App 余额或关联借记卡发送 $200 没有手续费。使用信用卡会产生 3% 的费用（$6）。对于即时存款，费用将在 $1-$3.50 之间，取决于应用的百分比。'
        },
        {
          question: 'Cash App ATM 取款的费用是多少？',
          answer: 'Cash App 对所有 ATM 取款收取 $2.50 的费用。如果您使用网络外 ATM，您将支付此费用以及 ATM 运营商收取的任何额外费用。'
        },
        {
          question: '如何避免 Cash App 手续费？',
          answer: '要避免 Cash App 手续费：使用您的 Cash App 余额、关联银行账户或借记卡发送资金；选择标准存款而不是即时转账；如果您每月有 $300+ 的直接存款，请使用网络内 ATM。'
        }
      ]
    },
    feeTypes: {
      title: '了解不同的 Cash App 费用类型',
      items: [
        {
          title: '个人账户发送费用',
          description: '从个人账户发送资金时，使用 Cash App 余额、关联银行账户或借记卡的费用为 0%。但是，使用信用卡发送资金会产生 3% 的费用。'
        },
        {
          title: '个人账户接收费用',
          description: '接收资金到个人 Cash App 账户始终免费，不会从传入转账中扣除费用。'
        },
        {
          title: '商业账户费用',
          description: '商业账户接收付款需支付 2.75% 的费用。无论支付方式如何，此费用适用于所有传入支付。'
        },
        {
          title: '存款费用',
          description: '向关联银行账户的标准存款（1-3 个工作日）是免费的。即时存款产生 0.5% 至 1.75% 的费用（最低 $0.25，最高 $9.99）。'
        },
        {
          title: 'ATM 取款费用',
          description: 'Cash App 对 ATM 取款收取 $2.50 的费用。每月直接存款 $300+ 的 Cash Card 用户每月可报销最高 $7 的 ATM 费用。'
        },
        {
          title: '比特币交易费用',
          description: '比特币购买和销售包括结合服务费和价格波动的可变费用。费用通常约为 1.75%，但可能会根据市场条件而变化。'
        },
        {
          title: '股票交易费用',
          description: '在 Cash App 上买入股票不收取佣金。卖出股票可能会产生监管费用，尽管这些费用通常很小。'
        },
        {
          title: '国际转账费用',
          description: '国际转账通常包括 3% 的费用，加上根据涉及的货币而变化的潜在货币兑换费用。'
        }
      ]
    },
    tips: {
      title: '最小化 Cash App 费用的技巧',
      items: [
        '使用 Cash App 余额或关联借记卡而不是信用卡，以避免 3% 的发送费用。',
        '提前计划并使用标准存款（1-3 个工作日）而不是即时存款，以避免 0.5%-1.75% 的费用。',
        '对于频繁使用 ATM 的用户，设置每月 $300+ 的直接存款，以获得每月最高 $7 的 ATM 费用报销。',
        '商业用户在通过 Cash App 销售商品或服务时，应考虑 2.75% 的接收费用。',
        '使用我们的 Cash App 手续费计算器的反向计算功能，确定为接收特定金额需要发送多少。',
        '在进行大额加密货币购买之前，使用我们的 Cash App 比特币手续费计算器比较比特币交易成本。',
        '可能的话，将多个小额转账合并为一个较大的转账，以最小化即时存款最低费用的影响。',
        '如果您需要进行国际转账，使用我们的计算器比较 Cash App 的费用与其他服务，找到最具成本效益的选择。'
      ]
    },
    conclusion: {
      title: '使用 Cash App 手续费计算器做出明智决策',
      content: 'Cash App 手续费计算器使您能够通过为所有交易类型提供透明的费用计算，更有效地管理您的数字财务。通过准确了解 Cash App 的费用结构以及每笔交易将花费多少，您可以更明智地决定如何以及何时转移资金。无论您是计算 Cash App 上的取现费用还是确定 $120 的 Cash App 费用是多少，我们的计算器都能帮助您自信地规划交易。立即收藏此工具，再也不会被意外费用惊到！'
    }
  }
}; 