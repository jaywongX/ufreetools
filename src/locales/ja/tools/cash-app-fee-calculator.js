export default {
  name: 'Cash App 手数料計算ツール',
  title: 'アメリカ Cash App 手数料計算ツール',
  description: 'アカウントタイプと支払い方法に基づいて、Cash Appの送金、入金、ATM引き出し、ビットコイン取引などの手数料を計算します。',
  updatedDate: '料金更新日：2025年4月18日',

  quickSelect: {
    label: 'クイック選択',
    sendCredit: '3% (送信 - クレジットカード)',
    sendDebit: '0% (送信 - デビットカード/残高)',
    receivePersonal: '0% (個人アカウント - 受取)',
    receiveBusiness: '2.75% (ビジネスアカウント - 受取)',
    instantDeposit: '0.5-1.75% (即時入金)',
    atmWithdrawal: 'ATM引き出し ($2.50 手数料)'
  },

  calculationType: {
    label: '計算タイプ',
    direct: '標準計算 (送金額 → 受取金額)',
    inverse: '逆計算 (希望受取金額 → 送金額)'
  },

  accountType: {
    label: 'アカウントタイプ',
    personal: '個人アカウント',
    business: 'ビジネスアカウント'
  },

  amount: {
    label: '取引金額',
    desiredLabel: '希望受取金額',
    placeholder: '金額を入力'
  },

  transactionType: {
    label: '取引タイプ',
    options: {
      send: '資金を送る',
      receive: '資金を受け取る'
    }
  },

  paymentSource: {
    label: '支払い方法',
    options: {
      credit: 'クレジットカード',
      debit: 'デビットカード',
      bank: '銀行口座',
      balance: 'Cash App 残高'
    }
  },

  depositType: {
    label: '入金タイプ',
    options: {
      standard: '標準入金（1-3営業日）',
      instant: '即時入金'
    }
  },

  atmType: {
    label: 'ATMタイプ',
    options: {
      inNetwork: 'ネットワーク内ATM',
      outOfNetwork: 'ネットワーク外ATM'
    }
  },

  additionalAtmFee: {
    label: '追加ATM手数料（ATMプロバイダーが請求）'
  },

  bitcoinTransactionType: {
    label: 'ビットコイン取引タイプ',
    options: {
      buy: 'ビットコインを購入',
      sell: 'ビットコインを売却',
      send: 'ビットコインを送信（ライトニングネットワーク）'
    }
  },

  stockTransactionType: {
    label: '株式取引タイプ',
    options: {
      buy: '株式を購入',
      sell: '株式を売却'
    }
  },

  cashInLocation: {
    label: '現金入金場所',
    options: {
      retail: '小売店（7-Eleven、CVSなど）',
      other: 'その他の方法'
    }
  },

  internationalType: {
    label: '国際取引タイプ',
    options: {
      send: '国際送金',
      receive: '国際受取',
      convert: '通貨変換'
    }
  },

  tabs: {
    moneyTransfer: '資金振込',
    deposit: '銀行入金',
    atm: 'ATM引き出し',
    bitcoin: 'ビットコイン',
    stocks: '株式',
    cashIn: '現金入金',
    international: '国際取引'
  },

  calculateButton: '手数料を計算',

  results: {
    title: '手数料計算結果',
    amountInput: '金額',
    amountSent: '送金額',
    fee: 'Cash App 手数料',
    amountReceived: '受取金額',
    finalAmount: '最終金額',
    desiredAmount: '希望受取金額',
    amountToSend: '必要送金額',
    note: '注意'
  },

  errors: {
    amountRequired: '取引金額を入力してください',
    invalidAmount: '有効な金額を入力してください',
    positiveAmount: '金額は0より大きい必要があります',
    amountTooLarge: '金額が最大取引制限を超えています'
  },

  notes: {
    creditCardFee: 'クレジットカードでの支払いには3%の手数料がかかります。デビットカード、銀行口座、またはCash App残高を使用するとこの手数料を回避できます。',
    instantDepositFee: '即時入金手数料は0.5%から1.75%（最低$0.25、最高$9.99）です。標準入金（1-3日）は無料です。',
    atmInNetworkFee: 'ネットワーク内ATM引き出しには$2.50のCash App手数料がかかります。',
    atmOutOfNetworkFee: 'ネットワーク外ATM引き出しには$2.50のCash App手数料に加え、ATMプロバイダーが請求する追加手数料がかかる場合があります。',
    bitcoinBuyFee: 'ビットコイン購入にはネットワーク手数料と変動スプレッドが含まれます。実際の手数料は市場状況により変動する可能性があります。',
    bitcoinSellFee: 'ビットコイン売却にはネットワーク手数料と変動スプレッドが含まれます。実際の手数料は市場状況により変動する可能性があります。',
    bitcoinSendFee: 'ライトニングネットワーク経由のビットコイン送信は無料ですが、オンチェーンビットコイン取引にはネットワーク手数料がかかる場合があります。',
    stockBuyFee: 'Cash Appでは手数料無料で株式を購入できます。ただし、SECおよびTAF手数料が適用される場合があります。',
    stockSellFee: 'Cash Appで株式を売却する場合、少額の規制手数料がかかる可能性があります。',
    cashInRetailFee: '小売店での現金入金手数料は金額により異なります：入金額に応じて$0.99から$2.99まで変動します。',
    cashInOtherFee: '連携銀行口座またはダイレクトデポジットで資金を追加する場合は通常無料です。',
    internationalTransferFee: '国際送金にはより高い手数料と通貨変換手数料がかかる場合があります。',
    currencyConversionFee: '通貨変換には通常手数料が含まれ、為替スプレッドが適用される場合があります。'
  },

  feeInfo: {
    title: 'Cash App 手数料情報',
    personal: {
      receiving: '個人アカウント - 資金受取：0% 手数料',
      sendingCredit: '個人アカウント - 送信（クレジットカード）：3% 手数料',
      sendingOther: '個人アカウント - 送信（デビットカード/銀行/残高）：0% 手数料',
      standardDeposit: '個人アカウント - 標準入金：0% 手数料',
      instantDeposit: '個人アカウント - 即時入金：0.5-1.75% 手数料（最低 $0.25、最高 $9.99）'
    },
    business: {
      receiving: 'ビジネスアカウント - 資金受取：2.75% 手数料'
    },
    atm: 'ATM引き出し：$2.50手数料、加えてATMプロバイダーの追加手数料',
    bitcoin: 'ビットコイン取引：ネットワーク状況と市場スプレッドに基づく変動手数料',
    stocks: '株式投資：購入 - 無料、売却 - 少額の規制手数料が適用される場合あり',
    cashIn: '小売店現金入金：金額に応じて$0.99-$2.99',
    international: '国際送金：約3%の手数料が適用'
  }
};