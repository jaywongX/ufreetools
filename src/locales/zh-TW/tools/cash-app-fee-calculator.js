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
  },
  
  article: {
    title: 'Cash App 手續費計算器完全指南：計算所有交易費用',
    intro: {
      title: '什麼是 Cash App 手續費計算器？',
      content1: 'Cash App 手續費計算器是一個強大的工具，幫助您準確確定各種 Cash App 交易中將支付的費用。無論您是發送資金、接收付款、進行即時存款還是從 ATM 取款，這個 Cash App 手續費計算器都能根據最新的費率（更新至 2025 年 4 月 18 日）提供準確計算。',
      content2: '使用我們的 Cash App 手續費計算器消除了關於交易成本的猜測，幫助您做出明智的資金轉賬決定。與官方 Cash App 不同的是，官方應用在交易前並不清晰顯示費用明細，而我們的計算器能準確顯示任何金額的 Cash App 手續費——無論是 $100、$200 還是 $1000。'
    },
    applications: {
      title: '何時使用 Cash App 手續費計算器',
      scenarios: [
        {
          title: '計算信用卡轉賬費用',
          description: '確定使用信用卡通過 Cash App 發送資金時的準確 3% 費用。我們的計算器會顯示 $1000 或任何其他金額的 Cash App 手續費是多少。'
        },
        {
          title: '規劃即時存款',
          description: '在向銀行帳戶進行快速轉賬之前，計算 Cash App 的即時手續費（0.5%-1.75%），確保正確應用最低和最高費用限制。'
        },
        {
          title: '商業帳戶支付',
          description: '商業用戶可以計算接收付款的 2.75% 處理費，幫助有效管理交易成本。'
        },
        {
          title: '比特幣交易成本',
          description: '使用我們的 Cash App 比特幣手續費計算器確定通過 Cash App 買賣比特幣時的差價成本。'
        },
        {
          title: 'ATM 取款費用估算',
          description: '計算取款時 Cash App 的 $2.50 費用以及額外的 ATM 運營商收費。'
        },
        {
          title: '股票交易費用分析',
          description: '確定通過 Cash App 投資功能買賣股票時的任何適用費用。'
        },
        {
          title: '國際交易規劃',
          description: '在跨境使用 Cash App 時計算貨幣兌換和國際轉賬費用。'
        },
        {
          title: '反向費用計算',
          description: '確定需要發送多少資金，以確保收款人在扣除費用後獲得準確金額。'
        }
      ]
    },
    guide: {
      title: '如何使用 Cash App 手續費計算器',
      steps: [
        {
          title: '選擇您的交易類型',
          description: '首先選擇您想要計算費用的 Cash App 交易類型：資金轉賬、銀行存款、比特幣、股票、現金充值、國際或 ATM 取款。'
        },
        {
          title: '選擇您的帳戶類型',
          description: '選擇您是使用個人還是商業 Cash App 帳戶，因為這兩種帳戶類型的費用結構不同。'
        },
        {
          title: '選擇計算方法',
          description: '在標準計算（根據您發送的金額計算費用）或反向計算（確定要發送多少才能達到預期接收金額）之間選擇。'
        },
        {
          title: '輸入交易金額',
          description: '輸入交易的美元金額。這可能是您發送的金額或您希望某人接收的金額，取決於您的計算方法。'
        },
        {
          title: '指定交易詳情',
          description: '根據您的交易類型，選擇其他選項，如支付來源（用於轉賬）、存款速度、比特幣交易類型或 ATM 網絡類型。'
        },
        {
          title: '計算費用',
          description: '點擊"計算費用"按鈕處理您的輸入，並查看交易中涉及的費用詳細明細。'
        },
        {
          title: '查看結果',
          description: '檢查計算結果，顯示原始金額、適用費用和費用後的最終金額。特定於您交易類型的註釋提供有關如何應用費用的額外上下文。'
        }
      ]
    },
    faq: {
      title: '關於 Cash App 費用的常見問題',
      items: [
        {
          question: '$1000 的 Cash App 手續費是多少？',
          answer: '從 Cash App 餘額或借記卡轉賬 $1000 沒有手續費。但使用信用卡會產生 3% 的費用（$30）。對於即時存款，費用範圍為 0.5%-1.75%（$5-$17.50），最高費用為 $9.99。'
        },
        {
          question: 'Cash App 的即時費用結構是什麼？',
          answer: 'Cash App 的即時存款費用為轉賬金額的 0.5% 至 1.75%，最低費用為 $0.25，最高為 $9.99。標準存款（1-3 個工作日）仍然免費。'
        },
        {
          question: 'Cash App 有月費嗎？',
          answer: '不，Cash App 不收取任何月費或訂閱費用。您只需為特定交易（如信用卡支付、即時存款或 ATM 取款）支付費用。'
        },
        {
          question: '如何支付 Cash App 上的費用？',
          answer: 'Cash App 上的費用會自動從您的交易金額中扣除。例如，當通過信用卡發送資金時，3% 的費用會添加到您的轉賬金額中並一起收取。'
        },
        {
          question: 'Cash App 比特幣手續費是多少？',
          answer: 'Cash App 對比特幣交易收取可變費用，包括服務費和交易費（約 1.75% 的價差）。我們的 Cash App 比特幣手續費計算器幫助精確確定這些成本。'
        },
        {
          question: '$200 的 Cash App 手續費是多少？',
          answer: '從 Cash App 餘額或關聯借記卡發送 $200 沒有手續費。使用信用卡會產生 3% 的費用（$6）。對於即時存款，費用將在 $1-$3.50 之間，取決於應用的百分比。'
        },
        {
          question: 'Cash App ATM 取款的費用是多少？',
          answer: 'Cash App 對所有 ATM 取款收取 $2.50 的費用。如果您使用網絡外 ATM，您將支付此費用以及 ATM 運營商收取的任何額外費用。'
        },
        {
          question: '如何避免 Cash App 手續費？',
          answer: '要避免 Cash App 手續費：使用您的 Cash App 餘額、關聯銀行帳戶或借記卡發送資金；選擇標準存款而不是即時轉賬；如果您每月有 $300+ 的直接存款，請使用網絡內 ATM。'
        }
      ]
    },
    feeTypes: {
      title: '了解不同的 Cash App 費用類型',
      items: [
        {
          title: '個人帳戶發送費用',
          description: '從個人帳戶發送資金時，使用 Cash App 餘額、關聯銀行帳戶或借記卡的費用為 0%。但是，使用信用卡發送資金會產生 3% 的費用。'
        },
        {
          title: '個人帳戶接收費用',
          description: '接收資金到個人 Cash App 帳戶始終免費，不會從傳入轉賬中扣除費用。'
        },
        {
          title: '商業帳戶費用',
          description: '商業帳戶接收付款需支付 2.75% 的費用。無論支付方式如何，此費用適用於所有傳入支付。'
        },
        {
          title: '存款費用',
          description: '向關聯銀行帳戶的標準存款（1-3 個工作日）是免費的。即時存款產生 0.5% 至 1.75% 的費用（最低 $0.25，最高 $9.99）。'
        },
        {
          title: 'ATM 取款費用',
          description: 'Cash App 對 ATM 取款收取 $2.50 的費用。每月直接存款 $300+ 的 Cash Card 用戶每月可報銷最高 $7 的 ATM 費用。'
        },
        {
          title: '比特幣交易費用',
          description: '比特幣購買和銷售包括結合服務費和價格波動的可變費用。費用通常約為 1.75%，但可能會根據市場條件而變化。'
        },
        {
          title: '股票交易費用',
          description: '在 Cash App 上買入股票不收取佣金。賣出股票可能會產生監管費用，儘管這些費用通常很小。'
        },
        {
          title: '國際轉賬費用',
          description: '國際轉賬通常包括 3% 的費用，加上根據涉及的貨幣而變化的潛在貨幣兌換費用。'
        }
      ]
    },
    tips: {
      title: '最小化 Cash App 費用的技巧',
      items: [
        '使用 Cash App 餘額或關聯借記卡而不是信用卡，以避免 3% 的發送費用。',
        '提前計劃並使用標準存款（1-3 個工作日）而不是即時存款，以避免 0.5%-1.75% 的費用。',
        '對於頻繁使用 ATM 的用戶，設置每月 $300+ 的直接存款，以獲得每月最高 $7 的 ATM 費用報銷。',
        '商業用戶在通過 Cash App 銷售商品或服務時，應考慮 2.75% 的接收費用。',
        '使用我們的 Cash App 手續費計算器的反向計算功能，確定為接收特定金額需要發送多少。',
        '在進行大額加密貨幣購買之前，使用我們的 Cash App 比特幣手續費計算器比較比特幣交易成本。',
        '可能的話，將多筆小額轉賬合併為一筆較大的轉賬，以最小化即時存款最低費用的影響。',
        '如果您需要進行國際轉賬，使用我們的計算器比較 Cash App 的費用與其他服務，找到最具成本效益的選擇。'
      ]
    },
    conclusion: {
      title: '使用 Cash App 手續費計算器做出明智決策',
      content: 'Cash App 手續費計算器使您能夠通過為所有交易類型提供透明的費用計算，更有效地管理您的數字財務。通過準確了解 Cash App 的費用結構以及每筆交易將花費多少，您可以更明智地決定如何以及何時轉移資金。無論您是計算 Cash App 上的取現費用還是確定 $120 的 Cash App 費用是多少，我們的計算器都能幫助您自信地規劃交易。立即收藏此工具，再也不會被意外費用驚到！'
    }
  }
};