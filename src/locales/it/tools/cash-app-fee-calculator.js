export default {
  name: 'Calcolatore delle commissioni di Cash App',
  title: 'Calcolatore delle commissioni di Cash App USA',
  description: 'Calcola le commissioni per bonifici, depositi, prelievi ATM, transazioni Bitcoin e altro su Cash App in base al tipo di account e al metodo di pagamento.',
  updatedDate: 'Tariffe aggiornate al: 18 aprile 2025',

  quickSelect: {
    label: 'Selezione rapida',
    sendCredit: '3% (invio - carta di credito)',
    sendDebit: '0% (invio - carta di debito/saldo)',
    receivePersonal: '0% (account personale - ricezione)',
    receiveBusiness: '2.75% (account business - ricezione)',
    instantDeposit: '0.5-1.75% (deposito istantaneo)',
    atmWithdrawal: 'Prelievo ATM (commissione $2.50)'
  },

  calculationType: {
    label: 'Tipo di calcolo',
    direct: 'Calcolo standard (importo inviato → importo ricevuto)',
    inverse: 'Calcolo inverso (importo ricevuto desiderato → importo da inviare)'
  },

  accountType: {
    label: 'Tipo di account',
    personal: 'Account personale',
    business: 'Account business'
  },

  amount: {
    label: 'Importo della transazione',
    desiredLabel: 'Importo ricevuto desiderato',
    placeholder: 'Inserisci l\'importo'
  },

  transactionType: {
    label: 'Tipo di transazione',
    options: {
      send: 'Invia denaro',
      receive: 'Ricevi denaro'
    }
  },

  paymentSource: {
    label: 'Metodo di pagamento',
    options: {
      credit: 'Carta di credito',
      debit: 'Carta di debito',
      bank: 'Conto bancario',
      balance: 'Saldo Cash App'
    }
  },

  depositType: {
    label: 'Tipo di deposito',
    options: {
      standard: 'Deposito standard (1-3 giorni lavorativi)',
      instant: 'Deposito istantaneo'
    }
  },

  atmType: {
    label: 'Tipo di ATM',
    options: {
      inNetwork: 'ATM in rete',
      outOfNetwork: 'ATM fuori rete'
    }
  },

  additionalAtmFee: {
    label: 'Commissione ATM aggiuntiva (addebitata dal fornitore ATM)'
  },

  bitcoinTransactionType: {
    label: 'Tipo di transazione Bitcoin',
    options: {
      buy: 'Acquista Bitcoin',
      sell: 'Vendi Bitcoin',
      send: 'Invia Bitcoin (Lightning Network)'
    }
  },

  stockTransactionType: {
    label: 'Tipo di transazione azionaria',
    options: {
      buy: 'Acquista azioni',
      sell: 'Vendi azioni'
    }
  },

  cashInLocation: {
    label: 'Luogo di ricarica',
    options: {
      retail: 'Negozi al dettaglio (7-Eleven, CVS, ecc.)',
      other: 'Altri metodi'
    }
  },

  internationalType: {
    label: 'Tipo di transazione internazionale',
    options: {
      send: 'Invia pagamento internazionale',
      receive: 'Ricevi pagamento internazionale',
      convert: 'Conversione valuta'
    }
  },

  tabs: {
    moneyTransfer: 'Bonifico',
    deposit: 'Deposito bancario',
    atm: 'Prelievo ATM',
    bitcoin: 'Bitcoin',
    stocks: 'Azioni',
    cashIn: 'Ricarica contanti',
    international: 'Transazioni internazionali'
  },

  calculateButton: 'Calcola commissione',

  results: {
    title: 'Risultati del calcolo delle commissioni',
    amountInput: 'Importo',
    amountSent: 'Importo inviato',
    fee: 'Commissione Cash App',
    amountReceived: 'Importo ricevuto',
    finalAmount: 'Importo finale',
    desiredAmount: 'Importo ricevuto desiderato',
    amountToSend: 'Importo da inviare',
    note: 'Nota'
  },

  errors: {
    amountRequired: 'Inserisci l\'importo della transazione',
    invalidAmount: 'Inserisci un importo valido',
    positiveAmount: 'L\'importo deve essere maggiore di zero',
    amountTooLarge: 'L\'importo supera il limite massimo di transazione'
  },

  notes: {
    creditCardFee: 'I pagamenti con carta di credito comportano una commissione del 3%. Usa una carta di debito, conto bancario o saldo Cash App per evitare questa commissione.',
    instantDepositFee: 'Le commissioni per depositi istantanei variano dallo 0.5% all\'1.75% (minimo $0.25, massimo $9.99). I depositi standard (1-3 giorni) sono gratuiti.',
    atmInNetworkFee: 'I prelievi da ATM in rete comportano una commissione di $2.50 da parte di Cash App.',
    atmOutOfNetworkFee: 'I prelievi da ATM fuori rete comportano una commissione di $2.50 da parte di Cash App più eventuali commissioni aggiuntive del fornitore ATM.',
    bitcoinBuyFee: 'L\'acquisto di Bitcoin include commissioni di rete e spread variabile. Le commissioni effettive possono variare in base alle condizioni di mercato.',
    bitcoinSellFee: 'La vendita di Bitcoin include commissioni di rete e spread variabile. Le commissioni effettive possono variare in base alle condizioni di mercato.',
    bitcoinSendFee: 'L\'invio di Bitcoin tramite Lightning Network è gratuito, ma le transazioni Bitcoin on-chain possono comportare commissioni di rete.',
    stockBuyFee: 'Cash App offre acquisti azionari senza commissioni. Tuttavia, potrebbero applicarsi commissioni SEC e TAF.',
    stockSellFee: 'La vendita di azioni tramite Cash App potrebbe comportare piccole commissioni normative.',
    cashInRetailFee: 'Le commissioni per ricariche presso negozi al dettaglio variano in base all\'importo: da $0.99 a $2.99 a seconda dell\'importo depositato.',
    cashInOtherFee: 'L\'aggiunta di fondi tramite conto bancario collegato o deposito diretto è generalmente gratuita.',
    internationalTransferFee: 'I bonifici internazionali potrebbero comportare commissioni più elevate e costi di conversione valuta.',
    currencyConversionFee: 'La conversione valuta include generalmente una commissione e potrebbe includere uno spread sul tasso di cambio.'
  },

  feeInfo: {
    title: 'Informazioni sulle commissioni di Cash App',
    personal: {
      receiving: 'Account personale - Ricezione fondi: 0% di commissione',
      sendingCredit: 'Account personale - Invio (carta di credito): 3% di commissione',
      sendingOther: 'Account personale - Invio (carta di debito/banca/saldo): 0% di commissione',
      standardDeposit: 'Account personale - Deposito standard: 0% di commissione',
      instantDeposit: 'Account personale - Deposito istantaneo: 0.5-1.75% di commissione (minimo $0.25, massimo $9.99)'
    },
    business: {
      receiving: 'Account business - Ricezione fondi: 2.75% di commissione'
    },
    atm: 'Prelievo ATM: commissione di $2.50 più eventuali commissioni aggiuntive del fornitore ATM',
    bitcoin: 'Transazioni Bitcoin: commissioni variabili in base alle condizioni di rete e allo spread di mercato',
    stocks: 'Investimenti azionari: acquisto - gratuito, vendita - potrebbero applicarsi piccole commissioni normative',
    cashIn: 'Ricarica contanti presso negozi: da $0.99 a $2.99 a seconda dell\'importo',
    international: 'Bonifici internazionali: commissioni più elevate, generalmente circa il 3%'
  }
};