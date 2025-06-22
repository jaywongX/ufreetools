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
    },
    
    article: {
      title: 'Guide complet du calculateur de frais Cash App : calculez tous les frais de transaction',
      intro: {
        title: 'Qu\'est-ce que le calculateur de frais Cash App ?',
        content1: 'Le calculateur de frais Cash App est un outil puissant qui vous aide à déterminer précisément les frais que vous paierez pour diverses transactions Cash App. Que vous envoyiez de l\'argent, receviez des paiements, effectuiez des dépôts instantanés ou retiriez aux ATM, ce calculateur fournit des calculs précis basés sur les derniers tarifs (mis à jour le 18 avril 2025).',
        content2: 'Notre calculateur élimine les suppositions sur les coûts des transactions, vous aidant à prendre des décisions éclairées. Contrairement à l\'application officielle qui ne montre pas clairement les frais avant la transaction, notre calculateur affiche avec précision les frais pour n\'importe quel montant - que ce soit $100, $200 ou $1000.'
      },
      applications: {
        title: 'Quand utiliser le calculateur de frais Cash App',
        scenarios: [
          {
            title: 'Calculer les frais de transfert par carte de crédit',
            description: 'Déterminez les frais exacts de 3% lors de l\'envoi via carte de crédit. Notre calculateur montre combien Cash App prélève pour $1000 ou tout autre montant.'
          },
          {
            title: 'Planifier les dépôts instantanés',
            description: 'Calculez les frais instantanés (0.5%-1.75%) avant de transférer vers votre banque, en respectant les limites minimales et maximales.'
          },
          {
            title: 'Paiements sur compte professionnel',
            description: 'Les professionnels peuvent calculer les frais de 2.75% pour la réception, aidant à gérer efficacement les coûts.'
          },
          {
            title: 'Coûts des transactions Bitcoin',
            description: 'Utilisez notre calculateur Bitcoin pour estimer les frais d\'achat/vente sur Cash App.'
          },
          {
            title: 'Estimation des frais ATM',
            description: 'Calculez les $2.50 de frais Cash App plus d\'éventuels frais supplémentaires.'
          },
          {
            title: 'Analyse des frais boursiers',
            description: 'Déterminez les éventuels frais lors d\'achats/ventes d\'actions.'
          },
          {
            title: 'Planification des transactions internationales',
            description: 'Calculez les frais de conversion et transferts transfrontaliers.'
          },
          {
            title: 'Calcul inverse des frais',
            description: 'Déterminez le montant à envoyer pour que le bénéficiaire reçoive exactement le montant souhaité.'
          }
        ]
      },
      guide: {
        title: 'Comment utiliser le calculateur de frais Cash App',
        steps: [
          {
            title: 'Sélectionnez votre type de transaction',
            description: 'Commencez par choisir le type de transaction : transfert, dépôt, Bitcoin, actions, recharge, international ou retrait ATM.'
          },
          {
            title: 'Choisissez votre type de compte',
            description: 'Sélectionnez compte personnel ou professionnel, car leurs structures de frais diffèrent.'
          },
          {
            title: 'Sélectionnez la méthode de calcul',
            description: 'Choisissez entre calcul standard (frais basés sur le montant envoyé) ou inverse (déterminer le montant à envoyer pour un montant reçu souhaité).'
          },
          {
            title: 'Entrez le montant',
            description: 'Saisissez le montant en dollars. Cela peut être le montant envoyé ou souhaité, selon votre méthode.'
          },
          {
            title: 'Spécifiez les détails',
            description: 'Selon la transaction, choisissez des options comme la source de paiement, vitesse de dépôt, type de transaction Bitcoin ou réseau ATM.'
          },
          {
            title: 'Calculez les frais',
            description: 'Cliquez sur "Calculer les frais" pour traiter vos entrées.'
          },
          {
            title: 'Consultez les résultats',
            description: 'Vérifiez le calcul montrant le montant initial, les frais appliqués et le montant final, avec des notes contextuelles.'
          }
        ]
      },
      faq: {
        title: 'FAQ sur les frais Cash App',
        items: [
          {
            question: 'Quels sont les frais pour $1000 sur Cash App ?',
            answer: 'Envoyer $1000 depuis votre solde ou carte de débit est gratuit. Avec carte de crédit : 3% ($30). Dépôt instantané : 0.5%-1.75% ($5-$17.50), plafonné à $9.99.'
          },
          {
            question: 'Quelle est la structure des frais instantanés ?',
            answer: 'Les frais instantanés sont de 0.5% à 1.75% du montant (min $0.25, max $9.99). Les dépôts standards (1-3 jours) restent gratuits.'
          },
          {
            question: 'Y a-t-il des frais mensuels ?',
            answer: 'Non, Cash App ne facture pas de frais mensuels. Seules certaines transactions (carte de crédit, dépôt instantané, retrait ATM) génèrent des frais.'
          },
          {
            question: 'Comment sont payés les frais ?',
            answer: 'Les frais sont automatiquement déduits du montant de la transaction. Par exemple, les 3% pour carte de crédit sont ajoutés au transfert.'
          },
          {
            question: 'Quels sont les frais Bitcoin ?',
            answer: 'Cash App facture des frais variables pour Bitcoin, incluant un écart d\'environ 1.75%. Notre calculateur Bitcoin aide à les déterminer précisément.'
          },
          {
            question: 'Quels sont les frais pour $200 ?',
            answer: 'Envoyer $200 depuis solde ou carte de débit : gratuit. Carte de crédit : 3% ($6). Dépôt instantané : $1-$3.50 selon le pourcentage appliqué.'
          },
          {
            question: 'Quels sont les frais de retrait ATM ?',
            answer: 'Cash App facture $2.50 par retrait ATM. Les ATM hors réseau ajoutent leurs propres frais.'
          },
          {
            question: 'Comment éviter les frais ?',
            answer: 'Pour éviter les frais : utilisez votre solde, compte bancaire ou carte de débit ; choisissez les dépôts standards ; utilisez les ATM du réseau si vous avez des dépôts directs de $300+/mois.'
          }
        ]
      },
      feeTypes: {
        title: 'Comprendre les différents types de frais',
        items: [
          {
            title: 'Frais d\'envoi compte personnel',
            description: 'Envoi depuis solde, compte bancaire ou carte de débit : 0%. Carte de crédit : 3%.'
          },
          {
            title: 'Frais de réception compte personnel',
            description: 'La réception sur compte personnel est toujours gratuite.'
          },
          {
            title: 'Frais compte professionnel',
            description: 'Réception sur compte pro : 2.75%, quel que soit le mode de paiement.'
          },
          {
            title: 'Frais de dépôt',
            description: 'Dépôt standard : gratuit. Instantané : 0.5-1.75% (min $0.25, max $9.99).'
          },
          {
            title: 'Frais de retrait ATM',
            description: '$2.50 par retrait. Remboursement jusqu\'à $7/mois pour les utilisateurs avec dépôts directs de $300+/mois.'
          },
          {
            title: 'Frais Bitcoin',
            description: 'Achat/vente Bitcoin : frais variables d\'environ 1.75%, selon le marché.'
          },
          {
            title: 'Frais boursiers',
            description: 'Achat d\'actions : sans commission. Vente : possibles petits frais réglementaires.'
          },
          {
            title: 'Frais internationaux',
            description: 'Transferts internationaux : environ 3% plus éventuels frais de conversion.'
          }
        ]
      },
      tips: {
        title: 'Conseils pour minimiser les frais',
        items: [
          'Utilisez votre solde ou carte de débit plutôt que carte de crédit pour éviter 3%.',
          'Planifiez à l\'avance et utilisez les dépôts standards plutôt qu\'instantanés.',
          'Pour les retraits ATM fréquents, configurez des dépôts directs de $300+/mois pour un remboursement jusqu\'à $7.',
          'Les professionnels doivent intégrer les 2.75% dans leurs prix.',
          'Utilisez le calcul inverse pour déterminer le montant à envoyer pour un montant reçu précis.',
          'Comparez les coûts Bitcoin avant les gros achats.',
          'Regroupez les petits transferts en un plus gros pour minimiser l\'impact des frais minimums.',
          'Pour les transferts internationaux, comparez les frais avec d\'autres services.'
        ]
      },
      conclusion: {
        title: 'Prenez des décisions éclairées avec notre calculateur',
        content: 'Notre calculateur vous aide à gérer vos finances numériques en fournissant des calculs transparents pour tous types de transactions. En comprenant précisément la structure des frais, vous pouvez décider comment et quand transférer votre argent. Que vous calculiez les frais de retrait ou déterminiez les frais pour $120, notre outil vous permet d\'agir en toute confiance. Ajoutez-le à vos favoris et plus de mauvaises surprises !'
      }
    }
  };