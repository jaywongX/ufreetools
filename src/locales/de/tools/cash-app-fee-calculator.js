export default {
  name: 'Cash App Gebührenrechner',
  title: 'US Cash App Gebührenrechner',
  description: 'Berechnen Sie Gebühren für Cash App-Überweisungen, Einzahlungen, ATM-Abhebungen, Bitcoin-Transaktionen usw. basierend auf Ihrem Kontotyp und Zahlungsmethode.',
  updatedDate: 'Gebührenstand: 18. April 2025',

  quickSelect: {
    label: 'Schnellauswahl',
    sendCredit: '3% (Senden - Kreditkarte)',
    sendDebit: '0% (Senden - Debitkarte/Guthaben)',
    receivePersonal: '0% (Privatkonto - Empfangen)',
    receiveBusiness: '2,75% (Geschäftskonto - Empfangen)',
    instantDeposit: '0,5-1,75% (Sofortige Einzahlung)',
    atmWithdrawal: 'ATM-Abhebung (2,50 $ Gebühr)'
  },

  calculationType: {
    label: 'Berechnungsart',
    direct: 'Standardberechnung (Sendebetrag → Empfangsbetrag)',
    inverse: 'Umgekehrte Berechnung (Gewünschter Empfangsbetrag → Sendebetrag)'
  },

  accountType: {
    label: 'Kontotyp',
    personal: 'Privatkonto',
    business: 'Geschäftskonto'
  },

  amount: {
    label: 'Transaktionsbetrag',
    desiredLabel: 'Gewünschter Empfangsbetrag',
    placeholder: 'Betrag eingeben'
  },

  transactionType: {
    label: 'Transaktionsart',
    options: {
      send: 'Geld senden',
      receive: 'Geld empfangen'
    }
  },

  paymentSource: {
    label: 'Zahlungsmethode',
    options: {
      credit: 'Kreditkarte',
      debit: 'Debitkarte',
      bank: 'Bankkonto',
      balance: 'Cash App Guthaben'
    }
  },

  depositType: {
    label: 'Einzahlungsart',
    options: {
      standard: 'Standard (1-3 Werktage)',
      instant: 'Sofort'
    }
  },

  atmType: {
    label: 'ATM-Typ',
    options: {
      inNetwork: 'Netzwerk-ATM',
      outOfNetwork: 'Externer ATM'
    }
  },

  additionalAtmFee: {
    label: 'Zusätzliche ATM-Gebühren (vom ATM-Anbieter erhoben)'
  },

  bitcoinTransactionType: {
    label: 'Bitcoin-Transaktionsart',
    options: {
      buy: 'Bitcoin kaufen',
      sell: 'Bitcoin verkaufen',
      send: 'Bitcoin senden (Lightning Network)'
    }
  },

  stockTransactionType: {
    label: 'Aktientransaktionsart',
    options: {
      buy: 'Aktien kaufen',
      sell: 'Aktien verkaufen'
    }
  },

  cashInLocation: {
    label: 'Bareinzahlungsort',
    options: {
      retail: 'Einzelhandel (7-Eleven, CVS usw.)',
      other: 'Andere Methode'
    }
  },

  internationalType: {
    label: 'Internationale Transaktionsart',
    options: {
      send: 'Internationale Zahlung senden',
      receive: 'Internationale Zahlung empfangen',
      convert: 'Währungsumtausch'
    }
  },

  tabs: {
    moneyTransfer: 'Geldtransfer',
    deposit: 'Bankeinzahlung',
    atm: 'ATM-Abhebung',
    bitcoin: 'Bitcoin',
    stocks: 'Aktien',
    cashIn: 'Bareinzahlung',
    international: 'International'
  },

  calculateButton: 'Gebühren berechnen',

  results: {
    title: 'Gebührenberechnungsergebnis',
    amountInput: 'Betrag',
    amountSent: 'Sendebetrag',
    fee: 'Cash App Gebühr',
    amountReceived: 'Empfangener Betrag',
    finalAmount: 'Endbetrag',
    desiredAmount: 'Gewünschter Empfangsbetrag',
    amountToSend: 'Erforderlicher Sendebetrag',
    note: 'Hinweis'
  },

  errors: {
    amountRequired: 'Bitte geben Sie einen Transaktionsbetrag ein',
    invalidAmount: 'Bitte geben Sie einen gültigen Betrag ein',
    positiveAmount: 'Betrag muss größer als Null sein',
    amountTooLarge: 'Betrag übersteigt Transaktionslimit'
  },

  notes: {
    creditCardFee: 'Zahlungen mit Kreditkarte verursachen eine 3%ige Gebühr. Nutzen Sie Debitkarten, Bankkonten oder Cash App Guthaben, um diese Gebühr zu vermeiden.',
    instantDepositFee: 'Sofortige Einzahlungen kosten 0,5% bis 1,75% (mindestens 0,25 $, maximal 9,99 $). Standardeinzahlungen (1-3 Tage) sind kostenlos.',
    atmInNetworkFee: 'ATM-Abhebungen innerhalb des Netzwerks verursachen eine 2,50 $ Cash App Gebühr.',
    atmOutOfNetworkFee: 'ATM-Abhebungen außerhalb des Netzwerks verursachen eine 2,50 $ Cash App Gebühr plus eventuelle zusätzliche Gebühren des ATM-Anbieters.',
    bitcoinBuyFee: 'Bitcoin-Käufe beinhalten Netzwerkgebühren und variable Spannen. Tatsächliche Gebühren können je nach Marktbedingungen variieren.',
    bitcoinSellFee: 'Bitcoin-Verkäufe beinhalten Netzwerkgebühren und variable Spannen. Tatsächliche Gebühren können je nach Marktbedingungen variieren.',
    bitcoinSendFee: 'Das Senden von Bitcoin über das Lightning Network ist kostenlos, aber On-Chain-Transaktionen können Netzwerkgebühren verursachen.',
    stockBuyFee: 'Cash App bietet provisionsfreie Aktienkäufe. Allerdings können SEC- und TAF-Gebühren dennoch anfallen.',
    stockSellFee: 'Der Verkauf von Aktien über Cash App kann geringe Regulierungsgebühren verursachen.',
    cashInRetailFee: 'Bareinzahlungen im Einzelhandel variieren je nach Betrag: Die Gebühren reichen von 0,99 $ bis 2,99 $, abhängig vom Einzahlungsbetrag.',
    cashInOtherFee: 'Das Hinzufügen von Guthaben über verknüpfte Bankkonten oder Direkteinzahlungen ist normalerweise kostenlos.',
    internationalTransferFee: 'Internationale Überweisungen können höhere Gebühren und Währungsumtauschgebühren verursachen.',
    currencyConversionFee: 'Währungsumtausch beinhaltet normalerweise Gebühren und mögliche Wechselkursaufschläge.'
  },

  feeInfo: {
    title: 'Cash App Gebühreninformationen',
    personal: {
      receiving: 'Privatkonto - Geld empfangen: 0% Gebühr',
      sendingCredit: 'Privatkonto - Senden (Kreditkarte): 3% Gebühr',
      sendingOther: 'Privatkonto - Senden (Debitkarte/Bank/Guthaben): 0% Gebühr',
      standardDeposit: 'Privatkonto - Standardeinzahlung: 0% Gebühr',
      instantDeposit: 'Privatkonto - Soforteinzahlung: 0,5-1,75% Gebühr (mind. 0,25 $, max. 9,99 $)'
    },
    business: {
      receiving: 'Geschäftskonto - Geld empfangen: 2,75% Gebühr'
    },
    atm: 'ATM-Abhebungen: 2,50 $ Gebühr plus zusätzliche ATM-Anbietergebühren',
    bitcoin: 'Bitcoin-Transaktionen: Variable Gebühren basierend auf Netzwerk- und Marktbedingungen',
    stocks: 'Aktieninvestitionen: Kauf - kostenlos, Verkauf - mögliche geringe Regulierungsgebühren',
    cashIn: 'Bareinzahlungen im Einzelhandel: 0,99 $-2,99 $, abhängig vom Betrag',
    international: 'Internationale Überweisungen: Höhere Gebühren, normalerweise ca. 3%'
  }
};