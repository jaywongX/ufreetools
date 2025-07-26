// UI Interface Text
export default {
  name: 'Calculadora de Tarifas Cash App',
  title: 'Calculadora de Tarifas Cash App (EE.UU.)',
  description: 'Calcula las tarifas por transferencias, depósitos, retiros en cajeros y transacciones de bitcoin según tu tipo de cuenta y método de pago.',
  updatedDate: 'Tarifas actualizadas al 18 de abril de 2025',

  quickSelect: {
    label: 'Opciones Rápidas',
    sendCredit: '3% (Envío - Tarjeta de crédito)',
    sendDebit: '0% (Envío - Tarjeta débito/saldo)',
    receivePersonal: '0% (Recepción - Personal)',
    receiveBusiness: '2.75% (Recepción - Empresa)',
    instantDeposit: '0.5-1.75% (Depósito Instantáneo)',
    atmWithdrawal: '$2.50 (Retiro en Cajero Automático)'
  },

  calculationType: {
    label: 'Tipo de Cálculo',
    direct: 'Estándar (Monto a enviar → Monto a recibir)',
    inverse: 'Inverso (Monto deseado a recibir → Monto a enviar)'
  },

  accountType: {
    label: 'Tipo de Cuenta',
    personal: 'Cuenta Personal',
    business: 'Cuenta Empresarial'
  },

  amount: {
    label: 'Monto de Transacción',
    desiredLabel: 'Monto Deseado a Recibir',
    placeholder: 'Ingresa el monto'
  },

  transactionType: {
    label: 'Tipo de Transacción',
    options: {
      send: 'Enviar Dinero',
      receive: 'Recibir Dinero'
    }
  },

  paymentSource: {
    label: 'Método de Pago',
    options: {
      credit: 'Tarjeta de Crédito',
      debit: 'Tarjeta Débito',
      bank: 'Cuenta Bancaria',
      balance: 'Saldo de Cash App'
    }
  },

  depositType: {
    label: 'Tipo de Depósito',
    options: {
      standard: 'Depósito Estándar (1-3 días hábiles)',
      instant: 'Depósito Instantáneo'
    }
  },

  atmType: {
    label: 'Red del Cajero Automático',
    options: {
      inNetwork: 'Cajero en Red',
      outOfNetwork: 'Cajero Fuera de Red'
    }
  },

  additionalAtmFee: {
    label: 'Tarifa Adicional del Proveedor del Cajero'
  },

  bitcoinTransactionType: {
    label: 'Tipo de Transacción Bitcoin',
    options: {
      buy: 'Comprar Bitcoin',
      sell: 'Vender Bitcoin',
      send: 'Enviar Bitcoin (Lightning Network)'
    }
  },

  stockTransactionType: {
    label: 'Tipo de Transacción Bursátil',
    options: {
      buy: 'Compra de Acciones',
      sell: 'Venta de Acciones'
    }
  },

  cashInLocation: {
    label: 'Lugar de Abono en Efectivo',
    options: {
      retail: 'Tienda física (7-Eleven, CVS, etc.)',
      other: 'Otros Métodos'
    }
  },

  internationalType: {
    label: 'Tipo de Transacción Internacional',
    options: {
      send: 'Pago Internacional Saliente',
      receive: 'Pago Internacional Entrante',
      convert: 'Conversión de Moneda'
    }
  },

  tabs: {
    moneyTransfer: 'Transferencia de Dinero',
    deposit: 'Depósito Bancario',
    atm: 'Retiro en ATM',
    bitcoin: 'Bitcoin',
    stocks: 'Acciones',
    cashIn: 'Abono de Efectivo',
    international: 'Internacional'
  },

  calculateButton: 'Calcular Tarifa',

  results: {
    title: 'Resultados del Cálculo',
    amountInput: 'Monto Ingresado',
    amountSent: 'Monto Enviado',
    fee: 'Tarifa Cash App',
    amountReceived: 'Monto Recibido',
    finalAmount: 'Monto Final',
    desiredAmount: 'Monto Deseado',
    amountToSend: 'Monto a Enviar',
    note: 'Nota'
  },

  errors: {
    amountRequired: 'Por favor ingresa un monto de transacción',
    invalidAmount: 'Por favor ingresa un monto válido',
    positiveAmount: 'El monto debe ser mayor que cero',
    amountTooLarge: 'El monto excede el límite máximo de transacción'
  },

  notes: {
    creditCardFee: 'Las tarjetas de crédito generan una tarifa del 3%. Usa tu saldo, una tarjeta débito o transferencia bancaria para evitar esta tarifa.',
    instantDepositFee: 'La tarifa por depósito instantáneo varía entre 0.5% y 1.75% (mínimo $0.25, máximo $9.99). Los depósitos estándar (1-3 días) no tienen tarifa.',
    atmInNetworkFee: 'Los retiros en cajeros dentro de la red Cash App tienen una tarifa fija de $2.50.',
    atmOutOfNetworkFee: 'Los retiros en cajeros fuera de la red Cash App incluyen una tarifa de $2.50 más cualquier cargo adicional del proveedor del cajero.',
    bitcoinBuyFee: 'Las compras de Bitcoin incluyen tarifas variables de red y spread comercial. La tarifa exacta puede variar según las condiciones del mercado.',
    bitcoinSellFee: 'Las ventas de Bitcoin incluyen tarifas variables de red y spread comercial. El costo real puede variar según las condiciones actuales.',
    bitcoinSendFee: 'Enviar Bitcoin a través de Lightning Network es gratuito, pero las transacciones en cadena principal pueden generar tarifas de red.',
    stockBuyFee: 'Cash App ofrece compras de acciones sin comisión. Sin embargo, pueden aplicarse tarifas regulatorias SEC y TAF.',
    stockSellFee: 'Pequeñas tarifas regulatorias pueden aplicarse al vender acciones a través de Cash App.',
    cashInRetailFee: 'Las tarifas por abono en tiendas físicas varían entre $0.99 y $2.99 dependiendo del monto depositado.',
    cashInOtherFee: 'Añadir fondos mediante cuentas bancarias vinculadas o depósito directo suele ser gratuito.',
    internationalTransferFee: 'Las transferencias internacionales suelen tener tarifas más altas y cargos por conversión de moneda.',
    currencyConversionFee: 'Las conversiones de moneda generalmente incluyen una tarifa y también pueden aplicar un diferencial sobre el tipo de cambio.'
  },

  feeInfo: {
    title: 'Información sobre Tarifas de Cash App',
    personal: {
      receiving: 'Cuenta Personal - Recibir Dinero: 0% de tarifa',
      sendingCredit: 'Cuenta Personal - Envío con Tarjeta de Crédito: 3% de tarifa',
      sendingOther: 'Cuenta Personal - Envío con Débito/Banco/Saldo: 0% de tarifa',
      standardDeposit: 'Cuenta Personal - Depósitos Estándar: 0% de tarifa',
      instantDeposit: 'Cuenta Personal - Depósitos Instantáneos: 0.5%-1.75% de tarifa (mínimo $0.25, máximo $9.99)'
    },
    business: {
      receiving: 'Cuenta Empresarial - Recibir Dinero: 2.75% de tarifa'
    },
    atm: 'Retiro en Cajero Automático: $2.50 + tarifas adicionales del proveedor del cajero',
    bitcoin: 'Transacciones de Bitcoin: Tarifas variables basadas en condiciones de red y spreads del mercado',
    stocks: 'Inversiones en Acciones: Compra - Gratuita, Venta - Pequeñas tarifas regulatorias pueden aplicarse',
    cashIn: 'Abono en Tienda Física: $0.99-$2.99 dependiendo del monto depositado',
    international: 'Transferencias Internacionales: Tarifas superiores, típicamente alrededor del 3%'
  }
};