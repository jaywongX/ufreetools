export default {
  name: 'Calculateur de frais Cash App',
  title: 'Calculateur de frais Cash App pour les États-Unis',
  description: 'Calculez les frais de transfert, dépôt, retrait ATM, transactions Bitcoin, etc. sur Cash App en fonction de votre type de compte et de votre méthode de paiement.',
  updatedDate: 'Dernière mise à jour des frais : 18 avril 2025',

  quickSelect: {
    label: 'Options rapides',
    sendCredit: '3% (Envoi - Carte de crédit)',
    sendDebit: '0% (Envoi - Carte de débit/solde)',
    receivePersonal: '0% (Compte personnel - Réception)',
    receiveBusiness: '2.75% (Compte professionnel - Réception)',
    instantDeposit: '0.5-1.75% (Dépôt instantané)',
    atmWithdrawal: 'Retrait ATM (Frais de $2.50)'
  },

  calculationType: {
    label: 'Type de calcul',
    direct: 'Calcul standard (Montant envoyé → Montant reçu)',
    inverse: 'Calcul inverse (Montant souhaité → Montant à envoyer)'
  },

  accountType: {
    label: 'Type de compte',
    personal: 'Compte personnel',
    business: 'Compte professionnel'
  },

  amount: {
    label: 'Montant de la transaction',
    desiredLabel: 'Montant souhaité',
    placeholder: 'Entrez le montant'
  },

  transactionType: {
    label: 'Type de transaction',
    options: {
      send: 'Envoyer des fonds',
      receive: 'Recevoir des fonds'
    }
  },

  paymentSource: {
    label: 'Méthode de paiement',
    options: {
      credit: 'Carte de crédit',
      debit: 'Carte de débit',
      bank: 'Compte bancaire',
      balance: 'Solde Cash App'
    }
  },

  depositType: {
    label: 'Type de dépôt',
    options: {
      standard: 'Dépôt standard (1-3 jours ouvrables)',
      instant: 'Dépôt instantané'
    }
  },

  atmType: {
    label: 'Type de ATM',
    options: {
      inNetwork: 'ATM du réseau',
      outOfNetwork: 'ATM hors réseau'
    }
  },

  additionalAtmFee: {
    label: 'Frais ATM supplémentaires (facturés par le fournisseur)'
  },

  bitcoinTransactionType: {
    label: 'Type de transaction Bitcoin',
    options: {
      buy: 'Acheter Bitcoin',
      sell: 'Vendre Bitcoin',
      send: 'Envoyer Bitcoin (Lightning Network)'
    }
  },

  stockTransactionType: {
    label: 'Type de transaction boursière',
    options: {
      buy: 'Acheter des actions',
      sell: 'Vendre des actions'
    }
  },

  cashInLocation: {
    label: 'Lieu de recharge',
    options: {
      retail: 'Magasin de détail (7-Eleven, CVS, etc.)',
      other: 'Autre méthode'
    }
  },

  internationalType: {
    label: 'Type de transaction internationale',
    options: {
      send: 'Envoyer un paiement international',
      receive: 'Recevoir un paiement international',
      convert: 'Conversion de devise'
    }
  },

  tabs: {
    moneyTransfer: 'Transfert d\'argent',
    deposit: 'Dépôt bancaire',
    atm: 'Retrait ATM',
    bitcoin: 'Bitcoin',
    stocks: 'Actions',
    cashIn: 'Recharge en espèces',
    international: 'Transactions internationales'
  },

  calculateButton: 'Calculer les frais',

  results: {
    title: 'Résultats du calcul des frais',
    amountInput: 'Montant',
    amountSent: 'Montant envoyé',
    fee: 'Frais Cash App',
    amountReceived: 'Montant reçu',
    finalAmount: 'Montant final',
    desiredAmount: 'Montant souhaité',
    amountToSend: 'Montant à envoyer',
    note: 'Remarque'
  },

  errors: {
    amountRequired: 'Veuillez entrer un montant',
    invalidAmount: 'Veuillez entrer un montant valide',
    positiveAmount: 'Le montant doit être supérieur à zéro',
    amountTooLarge: 'Le montant dépasse la limite maximale'
  },

  notes: {
    creditCardFee: 'Les paiements par carte de crédit entraînent des frais de 3%. Utilisez une carte de débit, un compte bancaire ou votre solde Cash App pour éviter ces frais.',
    instantDepositFee: 'Les frais de dépôt instantané varient entre 0.5% et 1.75% (minimum $0.25, maximum $9.99). Les dépôts standard (1-3 jours) sont gratuits.',
    atmInNetworkFee: 'Les retraits aux ATM du réseau entraînent des frais de $2.50.',
    atmOutOfNetworkFee: 'Les retraits aux ATM hors réseau entraînent des frais de $2.50, plus d\'éventuels frais supplémentaires facturés par le fournisseur.',
    bitcoinBuyFee: 'L\'achat de Bitcoin inclut des frais de réseau et un écart variable. Les frais réels peuvent varier selon les conditions du marché.',
    bitcoinSellFee: 'La vente de Bitcoin inclut des frais de réseau et un écart variable. Les frais réels peuvent varier selon les conditions du marché.',
    bitcoinSendFee: 'Envoyer des Bitcoin via le Lightning Network est gratuit, mais les transactions sur la blockchain peuvent entraîner des frais de réseau.',
    stockBuyFee: 'Cash App propose des achats d\'actions sans commission. Cependant, des frais SEC et TAF peuvent s\'appliquer.',
    stockSellFee: 'La vente d\'actions via Cash App peut entraîner de faibles frais réglementaires.',
    cashInRetailFee: 'Les frais de recharge en espèces varient selon le montant : de $0.99 à $2.99 selon le montant déposé.',
    cashInOtherFee: 'Ajouter des fonds via un compte bancaire lié ou un dépôt direct est généralement gratuit.',
    internationalTransferFee: 'Les transferts internationaux peuvent entraîner des frais plus élevés et des frais de conversion.',
    currencyConversionFee: 'Les conversions de devise incluent généralement des frais et un écart de taux.'
  },

  feeInfo: {
    title: 'Informations sur les frais Cash App',
    personal: {
      receiving: 'Compte personnel - Réception : 0% de frais',
      sendingCredit: 'Compte personnel - Envoi (carte de crédit) : 3% de frais',
      sendingOther: 'Compte personnel - Envoi (carte de débit/banque/solde) : 0% de frais',
      standardDeposit: 'Compte personnel - Dépôt standard : 0% de frais',
      instantDeposit: 'Compte personnel - Dépôt instantané : 0.5-1.75% de frais (min $0.25, max $9.99)'
    },
    business: {
      receiving: 'Compte professionnel - Réception : 2.75% de frais'
    },
    atm: 'Retrait ATM : $2.50 de frais, plus d\'éventuels frais supplémentaires',
    bitcoin: 'Transactions Bitcoin : frais variables selon le réseau et le marché',
    stocks: 'Investissements : achat gratuit, vente avec possibles frais réglementaires',
    cashIn: 'Recharge en magasin : $0.99-$2.99 selon le montant',
    international: 'Transferts internationaux : environ 3% de frais'
  }
};