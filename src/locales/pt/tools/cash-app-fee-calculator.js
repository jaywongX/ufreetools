export default {
  name: 'Calculadora de Taxas do Cash App',
  title: 'Calculadora de Taxas do Cash App (EUA)',
  description: 'Calcula taxas para transferências, depósitos, saques em ATM, transações de Bitcoin etc. no Cash App, baseado no tipo de conta e método de pagamento.',
  updatedDate: 'Taxas atualizadas em: 18 de abril de 2025',

  quickSelect: {
    label: 'Seleção rápida',
    sendCredit: '3% (Enviar - Cartão de crédito)',
    sendDebit: '0% (Enviar - Débito/saldo)',
    receivePersonal: '0% (Conta pessoal - Receber)',
    receiveBusiness: '2.75% (Conta comercial - Receber)',
    instantDeposit: '0.5-1.75% (Depósito instantâneo)',
    atmWithdrawal: 'Saque ATM (taxa de $2.50)'
  },

  calculationType: {
    label: 'Tipo de cálculo',
    direct: 'Cálculo padrão (valor enviado → valor recebido)',
    inverse: 'Cálculo inverso (valor desejado → valor a enviar)'
  },

  accountType: {
    label: 'Tipo de conta',
    personal: 'Conta pessoal',
    business: 'Conta comercial'
  },

  amount: {
    label: 'Valor da transação',
    desiredLabel: 'Valor desejado',
    placeholder: 'Insira o valor'
  },

  transactionType: {
    label: 'Tipo de transação',
    options: {
      send: 'Enviar dinheiro',
      receive: 'Receber dinheiro'
    }
  },

  paymentSource: {
    label: 'Método de pagamento',
    options: {
      credit: 'Cartão de crédito',
      debit: 'Cartão de débito',
      bank: 'Conta bancária',
      balance: 'Saldo do Cash App'
    }
  },

  depositType: {
    label: 'Tipo de depósito',
    options: {
      standard: 'Depósito padrão (1-3 dias úteis)',
      instant: 'Depósito instantâneo'
    }
  },

  atmType: {
    label: 'Tipo de ATM',
    options: {
      inNetwork: 'ATM na rede',
      outOfNetwork: 'ATM fora da rede'
    }
  },

  additionalAtmFee: {
    label: 'Taxa adicional do ATM (cobrada pelo operador)'
  },

  bitcoinTransactionType: {
    label: 'Tipo de transação de Bitcoin',
    options: {
      buy: 'Comprar Bitcoin',
      sell: 'Vender Bitcoin',
      send: 'Enviar Bitcoin (Lightning Network)'
    }
  },

  stockTransactionType: {
    label: 'Tipo de transação de ações',
    options: {
      buy: 'Comprar ações',
      sell: 'Vender ações'
    }
  },

  cashInLocation: {
    label: 'Local de depósito',
    options: {
      retail: 'Lojas (7-Eleven, CVS etc)',
      other: 'Outros métodos'
    }
  },

  internationalType: {
    label: 'Tipo de transação internacional',
    options: {
      send: 'Enviar pagamento internacional',
      receive: 'Receber pagamento internacional',
      convert: 'Conversão de moeda'
    }
  },

  tabs: {
    moneyTransfer: 'Transferência',
    deposit: 'Depósito bancário',
    atm: 'Saque ATM',
    bitcoin: 'Bitcoin',
    stocks: 'Ações',
    cashIn: 'Depósito em dinheiro',
    international: 'Transação internacional'
  },

  calculateButton: 'Calcular taxas',

  results: {
    title: 'Resultado do cálculo',
    amountInput: 'Valor',
    amountSent: 'Valor enviado',
    fee: 'Taxa do Cash App',
    amountReceived: 'Valor recebido',
    finalAmount: 'Valor final',
    desiredAmount: 'Valor desejado',
    amountToSend: 'Valor a enviar',
    note: 'Observação'
  },

  errors: {
    amountRequired: 'Insira o valor da transação',
    invalidAmount: 'Insira um valor válido',
    positiveAmount: 'O valor deve ser maior que zero',
    amountTooLarge: 'Valor excede o limite máximo'
  },

  notes: {
    creditCardFee: 'Pagamentos com cartão de crédito têm taxa de 3%. Use débito, conta bancária ou saldo para evitar.',
    instantDepositFee: 'Depósito instantâneo: 0.5% a 1.75% (mínimo $0.25, máximo $9.99). Depósito padrão é gratuito.',
    atmInNetworkFee: 'Saque em ATM na rede: taxa de $2.50 do Cash App.',
    atmOutOfNetworkFee: 'Saque em ATM fora da rede: taxa de $2.50 + possíveis taxas do operador.',
    bitcoinBuyFee: 'Compra de Bitcoin inclui taxas de rede e spread variável.',
    bitcoinSellFee: 'Venda de Bitcoin inclui taxas de rede e spread variável.',
    bitcoinSendFee: 'Envio via Lightning Network é gratuito, mas transações na blockchain podem ter taxas.',
    stockBuyFee: 'Cash App não cobra comissão para compra de ações, mas podem aplicar taxas regulatórias.',
    stockSellFee: 'Venda de ações pode ter pequenas taxas regulatórias.',
    cashInRetailFee: 'Depósito em lojas: $0.99 a $2.99 dependendo do valor.',
    cashInOtherFee: 'Depósito via conta bancária ou depósito direto geralmente é gratuito.',
    internationalTransferFee: 'Transferências internacionais podem ter taxas mais altas e câmbio.',
    currencyConversionFee: 'Conversão de moeda inclui taxas e possivelmente spread cambial.'
  },

  feeInfo: {
    title: 'Informações sobre taxas',
    personal: {
      receiving: 'Conta pessoal - Receber: 0%',
      sendingCredit: 'Conta pessoal - Enviar (crédito): 3%',
      sendingOther: 'Conta pessoal - Enviar (débito/banco/saldo): 0%',
      standardDeposit: 'Conta pessoal - Depósito padrão: 0%',
      instantDeposit: 'Conta pessoal - Depósito instantâneo: 0.5-1.75% (mín $0.25, máx $9.99)'
    },
    business: {
      receiving: 'Conta comercial - Receber: 2.75%'
    },
    atm: 'Saque ATM: $2.50 + possíveis taxas do operador',
    bitcoin: 'Bitcoin: taxas variáveis conforme mercado',
    stocks: 'Ações: compra - grátis, venda - pequenas taxas regulatórias',
    cashIn: 'Depósito em lojas: $0.99-$2.99 conforme valor',
    international: 'Transferência internacional: ~3%'
  }
};