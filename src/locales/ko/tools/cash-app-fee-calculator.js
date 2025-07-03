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
  },
  
  article: {
    title: 'Cash App 수수료 계산기 완전 가이드: 모든 거래 수수료 계산',
    intro: {
      title: 'Cash App 수수료 계산기란?',
      content1: 'Cash App 수수료 계산기는 다양한 Cash App 거래에 대한 정확한 수수료를 확인할 수 있는 강력한 도구입니다. 송금, 수신, 즉시 입금, ATM 출금 등을 할 때 최신 수수료 기준(2025년 4월 18일 기준)으로 정확한 계산을 제공합니다.',
      content2: '우리의 Cash App 수수료 계산기는 거래 비용에 대한 추측을 없애고, 송금에 관한 합리적인 결정을 내리는 데 도움을 줍니다. 공식 Cash App이 거래 전에 수수료를 명확히 표시하지 않는 반면, 우리의 계산기는 $100, $200 또는 $1,000 등 모든 금액에 대한 정확한 Cash App 수수료를 보여줍니다.'
    },
    applications: {
      title: 'Cash App 수수료 계산기 사용 시기',
      scenarios: [
        {
          title: '신용카드 송금 수수료 계산',
          description: 'Cash App에서 신용카드로 송금할 때 부과되는 정확한 3% 수수료를 확인하세요. 우리의 계산기는 $1,000 또는 기타 금액에 대한 Cash App 수수료를 보여줍니다.'
        },
        {
          title: '즉시 입금 계획',
          description: '빠른 은행 입금 전 0.5%-1.75% 즉시 수수료를 계산하여 최소 및 최대 수수료가 올바르게 적용되는지 확인하세요.'
        },
        {
          title: '사업자 계정 결제',
          description: '사업자 고객은 수신 결제에 대한 2.75% 처리 수수료를 계산하여 거래 비용을 효과적으로 관리할 수 있습니다.'
        },
        {
          title: '비트코인 거래 비용',
          description: 'Cash App을 통한 비트코인 구매 및 판매 시 스프레드 비용을 확인하려면 우리의 비트코인 수수료 계산기를 사용하세요.'
        },
        {
          title: 'ATM 출금 수수료 예상',
          description: '출금 시 $2.50 Cash App 수수료 및 추가 ATM 운영사 수수료를 계산하세요.'
        },
        {
          title: '주식 거래 수수료 분석',
          description: 'Cash App 투자 기능을 통한 주식 매수 및 매도 시 발생할 수 있는 수수료를 확인하세요.'
        },
        {
          title: '국제 거래 계획',
          description: 'Cash App을 국제적으로 사용할 때 환전 및 국제 송금 수수료를 계산하세요.'
        },
        {
          title: '역수수료 계산',
          description: '수수료 공제 후 수신자가 원하는 금액을 받기 위해 송금해야 할 금액을 결정하세요.'
        }
      ]
    },
    guide: {
      title: 'Cash App 수수료 계산기 사용 방법',
      steps: [
        {
          title: '거래 유형 선택',
          description: '먼저 수수료를 계산할 Cash App 거래 유형을 선택하세요: 송금, 은행 입금, 비트코인, 주식, 현금 입금, 국제 거래 또는 ATM 출금.'
        },
        {
          title: '계정 유형 선택',
          description: '개인 또는 사업자 Cash App 계정을 사용하는지 선택하세요. 이 두 계정 유형의 수수료 구조는 다릅니다.'
        },
        {
          title: '계산 방법 선택',
          description: '표준 계산(송금액 기준 수수료) 또는 역계산(원하는 수신 금액에 필요한 송금액 결정) 중 선택하세요.'
        },
        {
          title: '거래 금액 입력',
          description: '거래 금액을 입력하세요. 이는 계산 방법에 따라 송금하려는 금액 또는 수신자가 받을 금액이 될 수 있습니다.'
        },
        {
          title: '거래 상세 정보 입력',
          description: '거래 유형에 따라 추가 옵션을 선택하세요: 송금 시 결제 수단, 입금 속도, 비트코인 거래 유형 또는 ATM 네트워크 유형 등.'
        },
        {
          title: '수수료 계산',
          description: '"수수료 계산"을 클릭하여 입력 정보를 처리하고 부과될 수수료의 상세 내역을 확인하세요.'
        },
        {
          title: '결과 확인',
          description: '원본 금액, 부과 수수료 및 수수료 공제 후 최종 금액을 보여주는 계산 결과를 확인하세요. 거래별 참고 사항은 수수료 적용에 대한 추가 정보를 제공합니다.'
        }
      ]
    },
    faq: {
      title: 'Cash App 수수료 FAQ',
      items: [
        {
          question: '$1,000 송금 시 Cash App 수수료는 얼마인가요?',
          answer: 'Cash App 잔액 또는 체크카드로 $1,000 송금 시 수수료가 없습니다. 신용카드 사용 시 3% 수수료($30)가 부과됩니다. 즉시 입금 수수료는 0.5%-1.75%($5-$17.50)이며, 최대 수수료는 $9.99입니다.'
        },
        {
          question: 'Cash App 즉시 수수료 구조는 어떻게 되나요?',
          answer: 'Cash App 즉시 입금 수수료는 송금 금액의 0.5%~1.75%이며, 최소 $0.25, 최대 $9.99입니다. 표준 입금(1-3 영업일)은 무료입니다.'
        },
        {
          question: 'Cash App에 월별 수수료가 있나요?',
          answer: '아니요, Cash App은 월별 수수료 또는 구독료를 부과하지 않습니다. 신용카드 결제, 즉시 입금 또는 ATM 출금과 같은 특정 거래에 대해서만 수수료를 지불합니다.'
        },
        {
          question: 'Cash App 수수료는 어떻게 지불하나요?',
          answer: 'Cash App 수수료는 거래 금액에서 자동으로 차감됩니다. 예를 들어 신용카드로 송금할 경우 3% 수수료가 송금액에 추가되어 함께 청구됩니다.'
        },
        {
          question: 'Cash App 비트코인 수수료는 얼마인가요?',
          answer: 'Cash App은 서비스 수수료와 거래 수수료(약 1.75% 스프레드)를 포함한 변동 수수료를 부과합니다. 우리의 비트코인 수수료 계산기로 이 비용을 정확히 확인할 수 있습니다.'
        },
        {
          question: '$200 송금 시 Cash App 수수료는 얼마인가요?',
          answer: 'Cash App 잔액 또는 연결된 체크카드로 $200 송금 시 수수료가 없습니다. 신용카드 사용 시 3% 수수료($6)가 부과됩니다. 즉시 입금 수수료는 적용 비율에 따라 $1-$3.50입니다.'
        },
        {
          question: 'Cash App ATM 출금 수수료는 얼마인가요?',
          answer: 'Cash App은 모든 ATM 출금에 대해 $2.50 수수료를 부과합니다. 비제휴 ATM 사용 시 이 수수료에 추가로 ATM 운영사 수수료가 부과될 수 있습니다.'
        },
        {
          question: 'Cash App 수수료를 피하는 방법은 무엇인가요?',
          answer: 'Cash App 수수료를 피하는 방법: Cash App 잔액, 연결된 은행 계좌 또는 체크카드를 사용하여 송금하세요; 즉시 입금 대신 표준 입금을 선택하세요; 월별 직접 입금 $300 이상 시 제휴 ATM을 사용하세요.'
        }
      ]
    },
    feeTypes: {
      title: '다양한 Cash App 수수료 유형 이해',
      items: [
        {
          title: '개인 계정 송금 수수료',
          description: '개인 계정에서 Cash App 잔액, 연결된 은행 계좌 또는 체크카드로 송금 시 수수료가 없습니다. 신용카드 사용 시 3% 수수료가 부과됩니다.'
        },
        {
          title: '개인 계정 수신 수수료',
          description: '개인 Cash App 계정으로 수신 시 항상 무료이며, 수수료가 차감되지 않습니다.'
        },
        {
          title: '사업자 계정 수수료',
          description: '사업자 계정은 수신 결제에 대해 2.75% 수수료를 지불합니다. 이 수수료는 결제 수단과 관계없이 모든 수신 결제에 적용됩니다.'
        },
        {
          title: '입금 수수료',
          description: '연결된 은행 계좌로 표준 입금(1-3 영업일) 시 무료입니다. 즉시 입금 시 0.5%~1.75% 수수료(최소 $0.25, 최대 $9.99)가 부과됩니다.'
        },
        {
          title: 'ATM 출금 수수료',
          description: 'Cash App은 ATM 출금 시 $2.50 수수료를 부과합니다. 월별 직접 입금 $300 이상인 사용자는 최대 $7 ATM 수수료를 환급받을 수 있습니다.'
        },
        {
          title: '비트코인 거래 수수료',
          description: '비트코인 매수 및 매도에는 서비스 수수료와 가격 스프레드가 포함됩니다. 일반적으로 약 1.75%의 수수료가 부과되지만 시장 상황에 따라 달라질 수 있습니다.'
        },
        {
          title: '주식 거래 수수료',
          description: 'Cash App을 통한 주식 매수 시 수수료가 없습니다. 매도 시 소액의 규제 수수료가 발생할 수 있지만 일반적으로 매우 적습니다.'
        },
        {
          title: '국제 송금 수수료',
          description: '국제 송금 시 일반적으로 3% 수수료와 관련 통화의 환전 수수료가 부과될 수 있습니다.'
        }
      ]
    },
    tips: {
      title: 'Cash App 수수료 최소화 팁',
      items: [
        '3% 송금 수수료를 피하려면 신용카드 대신 Cash App 잔액 또는 연결된 체크카드를 사용하세요.',
        '0.5%-1.75% 수수료를 피하려면 미리 계획하여 즉시 입금 대신 표준 입금을 사용하세요.',
        'ATM을 자주 사용하는 경우: 월별 직접 입금 $300 이상을 설정하여 최대 $7 ATM 수수료를 환급받으세요.',
        '사업자 고객은 Cash App을 통한 판매 시 2.75% 수신 수수료를 고려해야 합니다.',
        '원하는 수신 금액에 필요한 송금액을 결정하려면 우리 계산기의 역계산 기능을 사용하세요.',
        '대량 비트코인 구매 전 우리 비트코인 수수료 계산기로 거래 비용을 비교하세요.',
        '즉시 입금 최소 수수료 영향을 최소화하려면 여러 소액 송금을 하나의 대량 송금으로 통합하세요.',
        '국제 송금 시 Cash App 수수료를 다른 서비스와 비교하여 가장 비용 효율적인 옵션을 찾으세요.'
      ]
    },
    conclusion: {
      title: 'Cash App 수수료 계산기로 합리적인 결정 내리기',
      content: 'Cash App 수수료 계산기는 모든 거래 유형에 대한 투명한 수수료 계산을 제공하여 디지털 금융을 더 효과적으로 관리할 수 있게 합니다. Cash App 수수료 구조와 각 거래의 정확한 비용을 알면 언제 어떻게 송금할지 더 나은 결정을 내릴 수 있습니다. ATM 출금 수수료를 계산하든 $120 송금 시 Cash App 수수료가 얼마인지 알고 싶든, 우리의 계산기는 자신 있게 거래를 계획하는 데 도움을 줄 것입니다. 지금 이 도구를 저장하고 예상치 못한 수수료에 더 이상 당황하지 마세요!'
    }
  }
};