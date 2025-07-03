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
  },
  
  article: {
    title: 'Guida completa al calcolatore delle commissioni di Cash App: calcola tutte le commissioni sulle transazioni',
    intro: {
      title: 'Cos\'è il calcolatore delle commissioni di Cash App?',
      content1: 'Il calcolatore delle commissioni di Cash App è un potente strumento che ti aiuta a determinare con precisione le commissioni che pagherai per varie transazioni su Cash App. Che tu stia inviando denaro, ricevendo pagamenti, effettuando depositi istantanei o prelevando da un ATM, questo calcolatore delle commissioni di Cash App fornisce calcoli accurati basati sulle tariffe più recenti (aggiornate al 18 aprile 2025).',
      content2: 'L\'uso del nostro calcolatore delle commissioni di Cash App elimina le incertezze sui costi delle transazioni, aiutandoti a prendere decisioni informate sui bonifici. A differenza dell\'app ufficiale di Cash App, che non mostra chiaramente i dettagli delle commissioni prima della transazione, il nostro calcolatore mostra esattamente quanto costerà qualsiasi importo su Cash App - che sia $100, $200 o $1000.'
    },
    applications: {
      title: 'Quando usare il calcolatore delle commissioni di Cash App',
      scenarios: [
        {
          title: 'Calcolare le commissioni per bonifici con carta di credito',
          description: 'Determina l\'esatta commissione del 3% quando invii denaro tramite Cash App usando una carta di credito. Il nostro calcolatore mostra quanto costa inviare $1000 o qualsiasi altro importo su Cash App.'
        },
        {
          title: 'Pianificare depositi istantanei',
          description: 'Calcola la commissione istantanea di Cash App (0.5%-1.75%) prima di effettuare un trasferimento rapido al tuo conto bancario, assicurandoti che i limiti minimi e massimi delle commissioni vengano applicati correttamente.'
        },
        {
          title: 'Pagamenti con account business',
          description: 'Gli utenti business possono calcolare la commissione di elaborazione del 2.75% per ricevere pagamenti, aiutando a gestire efficacemente i costi delle transazioni.'
        },
        {
          title: 'Costi delle transazioni Bitcoin',
          description: 'Usa il nostro calcolatore delle commissioni Bitcoin di Cash App per determinare i costi dello spread quando acquisti o vendi Bitcoin tramite Cash App.'
        },
        {
          title: 'Stima delle commissioni per prelievi ATM',
          description: 'Calcola la commissione di $2.50 di Cash App per i prelievi più eventuali commissioni aggiuntive dell\'operatore ATM.'
        },
        {
          title: 'Analisi delle commissioni per transazioni azionarie',
          description: 'Determina eventuali commissioni applicabili quando acquisti o vendi azioni tramite la funzione di investimento di Cash App.'
        },
        {
          title: 'Pianificazione delle transazioni internazionali',
          description: 'Calcola i costi di conversione valuta e i bonifici internazionali quando usi Cash App per transazioni transfrontaliere.'
        },
        {
          title: 'Calcolo inverso delle commissioni',
          description: 'Determina quanto devi inviare per assicurarti che il destinatario riceva l\'importo esatto dopo la detrazione delle commissioni.'
        }
      ]
    },
    guide: {
      title: 'Come usare il calcolatore delle commissioni di Cash App',
      steps: [
        {
          title: 'Seleziona il tipo di transazione',
          description: 'Inizia selezionando il tipo di transazione Cash App per cui vuoi calcolare le commissioni: bonifico, deposito bancario, Bitcoin, azioni, ricarica contanti, transazioni internazionali o prelievo ATM.'
        },
        {
          title: 'Seleziona il tipo di account',
          description: 'Scegli se stai usando un account personale o business di Cash App, poiché queste tipologie di account hanno strutture di commissioni diverse.'
        },
        {
          title: 'Scegli il metodo di calcolo',
          description: 'Scegli tra calcolo standard (calcola le commissioni in base all\'importo che invii) o calcolo inverso (determina quanto devi inviare per ottenere l\'importo ricevuto desiderato).'
        },
        {
          title: 'Inserisci l\'importo della transazione',
          description: 'Inserisci l\'importo in dollari della transazione. Potrebbe essere l\'importo che stai inviando o che desideri che qualcuno riceva, a seconda del tuo metodo di calcolo.'
        },
        {
          title: 'Specifica i dettagli della transazione',
          description: 'In base al tipo di transazione, seleziona altre opzioni come fonte di pagamento (per i bonifici), velocità del deposito, tipo di transazione Bitcoin o tipo di rete ATM.'
        },
        {
          title: 'Calcola le commissioni',
          description: 'Clicca il pulsante "Calcola commissione" per elaborare i tuoi input e visualizzare il dettaglio delle commissioni coinvolte nella transazione.'
        },
        {
          title: 'Visualizza i risultati',
          description: 'Esamina i risultati del calcolo, che mostrano l\'importo originale, le commissioni applicabili e l\'importo finale dopo le commissioni. Le note specifiche per il tuo tipo di transazione forniscono ulteriore contesto su come vengono applicate le commissioni.'
        }
      ]
    },
    faq: {
      title: 'Domande frequenti sulle commissioni di Cash App',
      items: [
        {
          question: 'Quanto costa inviare $1000 su Cash App?',
          answer: 'Inviare $1000 dal saldo di Cash App o da una carta di debito non comporta commissioni. Ma usare una carta di credito comporta una commissione del 3% ($30). Per i depositi istantanei, le commissioni variano dallo 0.5% all\'1.75% ($5-$17.50), con un massimo di $9.99.'
        },
        {
          question: 'Qual è la struttura delle commissioni istantanee di Cash App?',
          answer: 'Le commissioni per depositi istantanei su Cash App sono dallo 0.5% all\'1.75% dell\'importo trasferito, con una commissione minima di $0.25 e massima di $9.99. I depositi standard (1-3 giorni lavorativi) rimangono gratuiti.'
        },
        {
          question: 'Cash App ha una commissione mensile?',
          answer: 'No, Cash App non addebita alcuna commissione mensile o di abbonamento. Paghi solo per transazioni specifiche come pagamenti con carta di credito, depositi istantanei o prelievi ATM.'
        },
        {
          question: 'Come vengono pagate le commissioni su Cash App?',
          answer: 'Le commissioni su Cash App vengono automaticamente detratte dall\'importo della tua transazione. Ad esempio, quando invii denaro con una carta di credito, la commissione del 3% viene aggiunta all\'importo del bonifico e addebitata insieme.'
        },
        {
          question: 'Quali sono le commissioni Bitcoin di Cash App?',
          answer: 'Cash App addebita commissioni variabili per le transazioni Bitcoin, inclusi costi di servizio e commissioni di transazione (circa 1.75% di spread). Il nostro calcolatore delle commissioni Bitcoin di Cash App aiuta a determinare con precisione questi costi.'
        },
        {
          question: 'Quanto costa inviare $200 su Cash App?',
          answer: 'Inviare $200 dal saldo di Cash App o da una carta di debito collegata non comporta commissioni. Usare una carta di credito comporta una commissione del 3% ($6). Per i depositi istantanei, la commissione sarà tra $1 e $3.50, a seconda della percentuale applicata.'
        },
        {
          question: 'Quali sono le commissioni per i prelievi ATM su Cash App?',
          answer: 'Cash App addebita una commissione di $2.50 per tutti i prelievi ATM. Se usi un ATM fuori rete, pagherai questa commissione più eventuali commissioni aggiuntive dell\'operatore ATM.'
        },
        {
          question: 'Come evitare le commissioni su Cash App?',
          answer: 'Per evitare le commissioni su Cash App: usa il saldo di Cash App, il conto bancario collegato o una carta di debito per inviare denaro; scegli depositi standard invece di trasferimenti istantanei; se hai un deposito diretto mensile di $300+, usa ATM in rete.'
        }
      ]
    },
    feeTypes: {
      title: 'Comprendere i diversi tipi di commissioni di Cash App',
      items: [
        {
          title: 'Commissioni per invio da account personale',
          description: 'Quando invii denaro da un account personale, l\'uso del saldo di Cash App, di un conto bancario collegato o di una carta di debito ha una commissione dello 0%. Tuttavia, l\'invio con carta di credito comporta una commissione del 3%.'
        },
        {
          title: 'Commissioni per ricezione da account personale',
          description: 'Ricevere denaro su un account personale di Cash App è sempre gratuito, senza commissioni detratte dai trasferimenti in entrata.'
        },
        {
          title: 'Commissioni per account business',
          description: 'Gli account business pagano una commissione del 2.75% per ricevere pagamenti. Questa commissione si applica a tutti i pagamenti in entrata, indipendentemente dal metodo di pagamento.'
        },
        {
          title: 'Commissioni per depositi',
          description: 'I depositi standard (1-3 giorni lavorativi) su conti bancari collegati sono gratuiti. I depositi istantanei comportano una commissione dallo 0.5% all\'1.75% (minimo $0.25, massimo $9.99).'
        },
        {
          title: 'Commissioni per prelievi ATM',
          description: 'Cash App addebita una commissione di $2.50 per i prelievi ATM. Gli utenti con Cash Card che hanno un deposito diretto mensile di $300+ possono ottenere un rimborso fino a $7 delle commissioni ATM mensili.'
        },
        {
          title: 'Commissioni per transazioni Bitcoin',
          description: 'L\'acquisto e la vendita di Bitcoin includono commissioni variabili che combinano costi di servizio e fluttuazioni di prezzo. Le commissioni sono generalmente circa l\'1.75%, ma possono variare in base alle condizioni di mercato.'
        },
        {
          title: 'Commissioni per transazioni azionarie',
          description: 'L\'acquisto di azioni su Cash App non comporta commissioni. La vendita di azioni potrebbe comportare piccole commissioni normative, sebbene generalmente siano molto contenute.'
        },
        {
          title: 'Commissioni per bonifici internazionali',
          description: 'I bonifici internazionali includono generalmente una commissione del 3%, più eventuali costi aggiuntivi di conversione valuta che variano in base alle valute coinvolte.'
        }
      ]
    },
    tips: {
      title: 'Consigli per minimizzare le commissioni su Cash App',
      items: [
        'Usa il saldo di Cash App o una carta di debito collegata invece di una carta di credito per evitare la commissione del 3% sugli invii.',
        'Pianifica in anticipo e usa depositi standard (1-3 giorni lavorativi) invece di trasferimenti istantanei per evitare commissioni dallo 0.5% all\'1.75%.',
        'Per chi usa frequentemente gli ATM, imposta un deposito diretto mensile di $300+ per ottenere un rimborso mensile fino a $7 delle commissioni ATM.',
        'Gli utenti business dovrebbero considerare la commissione del 2.75% per ricevere pagamenti quando vendono beni o servizi tramite Cash App.',
        'Usa la funzione di calcolo inverso del nostro calcolatore delle commissioni di Cash App per determinare quanto devi inviare per far sì che il destinatario riceva un importo specifico.',
        'Prima di effettuare grandi acquisti di criptovalute, usa il nostro calcolatore delle commissioni Bitcoin di Cash App per confrontare i costi delle transazioni Bitcoin.',
        'Quando possibile, combina più piccoli trasferimenti in un unico trasferimento più grande per minimizzare l\'impatto delle commissioni minime sui depositi istantanei.',
        'Se devi effettuare un bonifico internazionale, usa il nostro calcolatore per confrontare le commissioni di Cash App con altri servizi e trovare l\'opzione più conveniente.'
      ]
    },
    conclusion: {
      title: 'Usa il calcolatore delle commissioni di Cash App per prendere decisioni informate',
      content: 'Il calcolatore delle commissioni di Cash App ti permette di gestire più efficacemente le tue finanze digitali fornendo calcoli trasparenti delle commissioni per tutti i tipi di transazioni. Sapendo esattamente come è strutturato il sistema di commissioni di Cash App e quanto costerà ogni transazione, puoi prendere decisioni più informate su come e quando trasferire denaro. Che tu stia calcolando le commissioni per un prelievo su Cash App o determinando quanto costa inviare $120 su Cash App, il nostro calcolatore ti aiuta a pianificare le transazioni con sicurezza. Aggiungi questo strumento ai preferiti ora e non farti mai più sorprendere da commissioni inaspettate!'
    }
  }
};