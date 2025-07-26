export default {
  name: 'Cash App 수수료 계산기',
  title: '미국 Cash App 수수료 계산기',
  description: '계정 유형 및 결제 방법에 따라 Cash App 송금, 입금, ATM 출금, 비트코인 거래 등의 수수료를 계산합니다.',
  updatedDate: '수수료 기준일: 2025년 4월 18일',

  quickSelect: {
    label: '빠른 선택',
    sendCredit: '3% (송금 - 신용카드)',
    sendDebit: '0% (송금 - 체크카드/잔액)',
    receivePersonal: '0% (개인계정 - 수신)',
    receiveBusiness: '2.75% (사업자계정 - 수신)',
    instantDeposit: '0.5-1.75% (즉시 입금)',
    atmWithdrawal: 'ATM 출금 (수수료 $2.50)'
  },

  calculationType: {
    label: '계산 방식',
    direct: '표준 계산 (송금액 → 수신액)',
    inverse: '역계산 (원하는 수신액 → 송금액)'
  },

  accountType: {
    label: '계정 유형',
    personal: '개인 계정',
    business: '사업자 계정'
  },

  amount: {
    label: '거래 금액',
    desiredLabel: '원하는 수신 금액',
    placeholder: '금액 입력'
  },

  transactionType: {
    label: '거래 유형',
    options: {
      send: '송금',
      receive: '수신'
    }
  },

  paymentSource: {
    label: '결제 수단',
    options: {
      credit: '신용카드',
      debit: '체크카드',
      bank: '은행 계좌',
      balance: 'Cash App 잔액'
    }
  },

  depositType: {
    label: '입금 방식',
    options: {
      standard: '표준 (1-3 영업일)',
      instant: '즉시'
    }
  },

  atmType: {
    label: 'ATM 종류',
    options: {
      inNetwork: '제휴 ATM',
      outOfNetwork: '비제휴 ATM'
    }
  },

  additionalAtmFee: {
    label: '추가 ATM 수수료 (ATM 운영사 부과)'
  },

  bitcoinTransactionType: {
    label: '비트코인 거래 유형',
    options: {
      buy: '비트코인 구매',
      sell: '비트코인 판매',
      send: '비트코인 전송 (라이트닝 네트워크)'
    }
  },

  stockTransactionType: {
    label: '주식 거래 유형',
    options: {
      buy: '주식 매수',
      sell: '주식 매도'
    }
  },

  cashInLocation: {
    label: '현금 입금 장소',
    options: {
      retail: '소매점 (세븐일레븐, CVS 등)',
      other: '기타 방법'
    }
  },

  internationalType: {
    label: '국제 거래 유형',
    options: {
      send: '국제 송금',
      receive: '국제 수신',
      convert: '통화 환전'
    }
  },

  tabs: {
    moneyTransfer: '송금',
    deposit: '은행 입금',
    atm: 'ATM 출금',
    bitcoin: '비트코인',
    stocks: '주식',
    cashIn: '현금 입금',
    international: '국제 거래'
  },

  calculateButton: '수수료 계산',

  results: {
    title: '수수료 계산 결과',
    amountInput: '금액',
    amountSent: '송금액',
    fee: 'Cash App 수수료',
    amountReceived: '수신 금액',
    finalAmount: '최종 금액',
    desiredAmount: '원하는 수신 금액',
    amountToSend: '필요 송금액',
    note: '참고 사항'
  },

  errors: {
    amountRequired: '거래 금액을 입력해 주세요',
    invalidAmount: '유효한 금액을 입력해 주세요',
    positiveAmount: '금액은 0보다 커야 합니다',
    amountTooLarge: '금액이 거래 한도를 초과합니다'
  },

  notes: {
    creditCardFee: '신용카드 결제 시 3% 수수료가 부과됩니다. 이 수수료를 피하려면 체크카드, 은행 계좌 또는 Cash App 잔액을 사용하세요.',
    instantDepositFee: '즉시 입금 수수료는 0.5%~1.75% (최소 $0.25, 최대 $9.99)입니다. 표준 입금(1-3일)은 무료입니다.',
    atmInNetworkFee: '제휴 ATM 출금 시 $2.50 Cash App 수수료가 부과됩니다.',
    atmOutOfNetworkFee: '비제휴 ATM 출금 시 $2.50 Cash App 수수료에 추가로 ATM 운영사 수수료가 부과될 수 있습니다.',
    bitcoinBuyFee: '비트코인 구매 시 네트워크 수수료와 변동 스프레드가 포함됩니다. 실제 수수료는 시장 상황에 따라 달라질 수 있습니다.',
    bitcoinSellFee: '비트코인 판매 시 네트워크 수수료와 변동 스프레드가 포함됩니다. 실제 수수료는 시장 상황에 따라 달라질 수 있습니다.',
    bitcoinSendFee: '라이트닝 네트워크를 통한 비트코인 전송은 무료지만, 온체인 거래 시 네트워크 수수료가 발생할 수 있습니다.',
    stockBuyFee: 'Cash App에서 주식 구매 시 수수료가 없습니다. 다만 SEC 및 TAF 수수료가 부과될 수 있습니다.',
    stockSellFee: 'Cash App을 통한 주식 판매 시 소액의 규제 수수료가 발생할 수 있습니다.',
    cashInRetailFee: '소매점 현금 입금 수수료는 금액에 따라 $0.99~$2.99까지 다양합니다.',
    cashInOtherFee: '연결된 은행 계좌 또는 직접 입금을 통한 잔액 추가는 일반적으로 무료입니다.',
    internationalTransferFee: '국제 송금 시 더 높은 수수료와 환전 수수료가 부과될 수 있습니다.',
    currencyConversionFee: '통화 환전 시 일반적으로 수수료와 환율 프리미엄이 포함됩니다.'
  },

  feeInfo: {
    title: 'Cash App 수수료 정보',
    personal: {
      receiving: '개인 계정 - 수신: 0% 수수료',
      sendingCredit: '개인 계정 - 송금 (신용카드): 3% 수수료',
      sendingOther: '개인 계정 - 송금 (체크카드/은행/잔액): 0% 수수료',
      standardDeposit: '개인 계정 - 표준 입금: 0% 수수료',
      instantDeposit: '개인 계정 - 즉시 입금: 0.5-1.75% 수수료 (최소 $0.25, 최대 $9.99)'
    },
    business: {
      receiving: '사업자 계정 - 수신: 2.75% 수수료'
    },
    atm: 'ATM 출금: $2.50 수수료 + 추가 ATM 운영사 수수료',
    bitcoin: '비트코인 거래: 네트워크 및 시장 상황에 따른 변동 수수료',
    stocks: '주식 투자: 매수 - 무료, 매도 - 소액 규제 수수료 가능',
    cashIn: '소매점 현금 입금: $0.99~$2.99 (금액에 따라 다름)',
    international: '국제 송금: 더 높은 수수료, 일반적으로 약 3%'
  }
};